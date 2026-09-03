import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent,
  ContainerComponent, ButtonDirective
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

interface PendingAttachment {
  file: File;
  base64: string;
  previewUrl: string;
  isImage: boolean;
}

/**
 * Contract approval queue for CEO/COO/PROCUREMENT/FINANCE/MANAGER/ADMIN -
 * the same approver role pool used for PO/Budget approvals, but a
 * standalone single-step approve/reject (not the full multi-level
 * hierarchy engine PO/Budget approvals use).
 */
@Component({
  selector: 'app-contract-approvals',
  templateUrl: './contract-approvals.component.html',
  styleUrls: ['./contract-approvals.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, CardComponent, CardBodyComponent, RowComponent, ColComponent,
    ContainerComponent, ButtonDirective
  ]
})
export class ContractApprovalsComponent implements OnInit {

  contracts: any[] = [];
  isLoading: boolean = false;
  isSubmitting: boolean = false;

  role: string = '';
  userId: number = 0;
  fullName: string = '';

  showModal: boolean = false;
  modalMode: 'approve' | 'reject' | 'moreInfo' | null = null;
  selectedContract: any = null;
  comments: string = '';

  // "Request More Info" — any number of attachments, each with a preview
  pendingAttachments: PendingAttachment[] = [];

  constructor(
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('role') || '';
    this.userId = Number(localStorage.getItem('userId')) || 0;
    this.fullName = localStorage.getItem('fullName') || '';
    this.loadContracts();
  }

  loadContracts(): void {
    this.isLoading = true;
    this.dataService.getPendingApprovalContracts().subscribe({
      next: (response: any) => {
        this.contracts = (response?.success && response.data) ? response.data : [];
        this.isLoading = false;
      },
      error: () => {
        this.messageService.showMessage('error', 'Error', 'Failed to load pending contracts');
        this.isLoading = false;
      }
    });
  }

  viewContract(id: number): void {
    this.router.navigate(['/contract-detail', id]);
  }

  openModal(contract: any, mode: 'approve' | 'reject' | 'moreInfo'): void {
    this.selectedContract = contract;
    this.modalMode = mode;
    this.comments = '';
    this.pendingAttachments = [];
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedContract = null;
    this.modalMode = null;
    this.pendingAttachments = [];
  }

  onAttachmentsSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files ? Array.from(input.files) : [];
    input.value = ''; // allow re-selecting the same file(s) later

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const commaIndex = result.indexOf(',');
        const base64 = commaIndex >= 0 ? result.substring(commaIndex + 1) : result;
        this.pendingAttachments.push({
          file,
          base64,
          previewUrl: result,
          isImage: file.type.startsWith('image/')
        });
      };
      reader.readAsDataURL(file);
    }
  }

  removeAttachment(index: number): void {
    this.pendingAttachments.splice(index, 1);
  }

  confirm(): void {
    if (!this.selectedContract || !this.modalMode) return;
    if ((this.modalMode === 'reject' || this.modalMode === 'moreInfo') && !this.comments.trim()) {
      this.messageService.showMessage('error', 'Error',
        this.modalMode === 'reject' ? 'Rejection comments are required' : 'Please explain what additional information is needed');
      return;
    }

    this.isSubmitting = true;

    if (this.modalMode === 'moreInfo') {
      const payload = {
        approverId: this.userId,
        approverName: this.fullName,
        approverRole: this.role,
        comments: this.comments.trim(),
        attachments: this.pendingAttachments.map(a => ({
          filename: a.file.name,
          contentType: a.file.type || 'application/octet-stream',
          base64: a.base64
        }))
      };
      this.dataService.returnContractForRevision(this.selectedContract.id, payload).subscribe({
        next: (response: any) => this.handleActionResult(response, 'Request sent back to the contract creator'),
        error: (err: any) => this.handleActionError(err)
      });
      return;
    }

    const payload = {
      approverId: this.userId,
      approverName: this.fullName,
      approverRole: this.role,
      comments: this.comments.trim()
    };
    const call = this.modalMode === 'approve'
      ? this.dataService.approveContract(this.selectedContract.id, payload)
      : this.dataService.rejectContract(this.selectedContract.id, payload);

    call.subscribe({
      next: (response: any) => this.handleActionResult(response, `Contract ${this.modalMode}d`),
      error: (err: any) => this.handleActionError(err)
    });
  }

  private handleActionResult(response: any, successMessage: string): void {
    this.isSubmitting = false;
    if (response?.success) {
      this.messageService.showMessage('success', 'Success', successMessage);
      this.closeModal();
      this.loadContracts();
    } else {
      this.messageService.showMessage('error', 'Error', response?.message || 'Action failed');
    }
  }

  private handleActionError(err: any): void {
    this.isSubmitting = false;
    this.messageService.showMessage('error', 'Error', err.error?.message || 'Action failed');
  }
}
