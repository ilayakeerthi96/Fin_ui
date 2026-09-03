import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent,
  ContainerComponent, ButtonDirective, BadgeComponent, AlertComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

/**
 * Shared contract detail/sign page for both buyer and supplier - role-aware
 * rendering decides which "Sign" button (if any) shows. Signing here is a
 * click-to-sign electronic signature (typed name/title + agree checkbox,
 * timestamped server-side), not a certificate-based digital signature.
 */
@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, CardComponent, CardBodyComponent, RowComponent, ColComponent,
    ContainerComponent, ButtonDirective, BadgeComponent, AlertComponent
  ]
})
export class ContractDetailComponent implements OnInit {

  contractId: number = 0;
  contract: any = null;
  supplierName: string = '';
  buyerCompanyName: string = '';

  role: string = '';
  fullName: string = '';

  isLoading: boolean = true;
  loadError: string = '';
  isSubmitting: boolean = false;

  showSignModal: boolean = false;
  signAs: 'buyer' | 'supplier' | null = null;
  signName: string = '';
  signTitle: string = '';
  signAgree: boolean = false;

  returnAttachments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.contractId = Number(this.route.snapshot.paramMap.get('contractId'));
    this.role = localStorage.getItem('role') || '';
    this.fullName = localStorage.getItem('fullName') || '';

    if (!this.contractId) {
      this.loadError = 'Invalid contract.';
      this.isLoading = false;
      return;
    }
    this.load();
  }

  load(): void {
    this.isLoading = true;
    this.dataService.getContractDetail(this.contractId).subscribe({
      next: (response: any) => {
        if (response?.success) {
          this.contract = response.data.contract;
          this.supplierName = response.data.supplierName || '';
          this.buyerCompanyName = response.data.buyerCompanyName || '';
          if (this.contract?.status === 'RETURNED_FOR_REVISION') {
            this.loadReturnAttachments();
          }
        } else {
          this.loadError = response?.message || 'Failed to load contract';
        }
        this.isLoading = false;
      },
      error: () => {
        this.loadError = 'Failed to load contract';
        this.isLoading = false;
      }
    });
  }

  private loadReturnAttachments(): void {
    this.dataService.getContractReturnAttachments(this.contractId).subscribe({
      next: (response: any) => {
        this.returnAttachments = (response?.data || []).map((a: any) => ({
          ...a,
          isImage: (a.contentType || '').startsWith('image/'),
          url: this.dataService.getContractReturnAttachmentDownloadUrl(a.id)
        }));
      },
      error: () => { this.returnAttachments = []; }
    });
  }

  get isBuyer(): boolean { return this.role === 'ROLE_BUYER'; }
  get isSupplier(): boolean { return this.role === 'ROLE_SUPPLIER'; }

  get canSubmitForApproval(): boolean {
    return this.isBuyer && ['DRAFT', 'RETURNED_FOR_REVISION'].includes(this.contract?.status);
  }

  get isReturnedForRevision(): boolean {
    return this.contract?.status === 'RETURNED_FOR_REVISION';
  }

  get canSignAsBuyer(): boolean {
    return this.isBuyer && ['APPROVED', 'AWAITING_SIGNATURES'].includes(this.contract?.status) && !this.contract?.buyerSignedAt;
  }

  get canSignAsSupplier(): boolean {
    return this.isSupplier && ['APPROVED', 'AWAITING_SIGNATURES'].includes(this.contract?.status) && !this.contract?.supplierSignedAt;
  }

  statusColor(status: string): string {
    switch (status) {
      case 'FULLY_SIGNED': return 'success';
      case 'AWAITING_SIGNATURES': return 'info';
      case 'APPROVED': return 'primary';
      case 'PENDING_APPROVAL': return 'warning';
      case 'REJECTED': return 'danger';
      case 'RETURNED_FOR_REVISION': return 'warning';
      default: return 'secondary';
    }
  }

  submitForApproval(): void {
    this.isSubmitting = true;
    this.dataService.submitContractForApproval(this.contractId).subscribe({
      next: (response: any) => {
        this.isSubmitting = false;
        if (response?.success) {
          this.messageService.showMessage('success', 'Success',
            this.isReturnedForRevision ? 'Contract resubmitted for approval' : 'Contract submitted for approval');
          this.load();
        } else {
          this.messageService.showMessage('error', 'Error', response?.message || 'Failed to submit');
        }
      },
      error: (err: any) => {
        this.isSubmitting = false;
        this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed to submit');
      }
    });
  }

  openSignModal(as: 'buyer' | 'supplier'): void {
    this.signAs = as;
    this.signName = this.fullName;
    this.signTitle = '';
    this.signAgree = false;
    this.showSignModal = true;
  }

  closeSignModal(): void {
    this.showSignModal = false;
    this.signAs = null;
  }

  confirmSign(): void {
    if (!this.signName.trim() || !this.signAgree || !this.signAs) return;

    this.isSubmitting = true;
    const payload = { signedByName: this.signName.trim(), signedByTitle: this.signTitle.trim() };
    const call = this.signAs === 'buyer'
      ? this.dataService.signContractAsBuyer(this.contractId, payload)
      : this.dataService.signContractAsSupplier(this.contractId, payload);

    call.subscribe({
      next: (response: any) => {
        this.isSubmitting = false;
        if (response?.success) {
          this.messageService.showMessage('success', 'Success', 'Contract signed successfully');
          this.closeSignModal();
          this.load();
        } else {
          this.messageService.showMessage('error', 'Error', response?.message || 'Failed to sign');
        }
      },
      error: (err: any) => {
        this.isSubmitting = false;
        this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed to sign');
      }
    });
  }

  downloadPdf(): void {
    window.open(this.dataService.getContractPdfDownloadUrl(this.contractId), '_blank');
  }

  previewPdf(): void {
    window.open(this.dataService.getContractPdfPreviewUrl(this.contractId), '_blank');
  }

  goBack(): void {
    if (this.isSupplier) {
      this.router.navigate(['/contract-inbox']);
    } else {
      this.router.navigate(['/contract-list']);
    }
  }
}
