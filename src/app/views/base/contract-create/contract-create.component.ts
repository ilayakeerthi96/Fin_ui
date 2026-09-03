import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent,
  ContainerComponent, ButtonDirective, AlertComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { SupplierService } from '../dashboard/supplier.service';
import { MessageService } from '../../../shared/service/message.service';

/**
 * Buyer generates an MSA contract for the supplier they just finally
 * selected for an RFQ - before creating the PO. Consultant (supplier) party
 * details are prefilled from the supplier's record but editable; the Client
 * party (buyer's own company) is filled server-side from the Buyer entity.
 */
@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, CardComponent, CardBodyComponent,
    RowComponent, ColComponent, ContainerComponent, ButtonDirective, AlertComponent
  ]
})
export class ContractCreateComponent implements OnInit {

  rfqId: number = 0;
  supplierId: number = 0;
  buyerId: number = 0;

  supplierName: string = '';
  consultantCompanyName: string = '';
  consultantCin: string = '';
  consultantAddress: string = '';
  agreementDate: string = new Date().toISOString().substring(0, 10);
  expiryDate: string = '';

  isLoading: boolean = true;
  isSubmitting: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private supplierService: SupplierService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.rfqId = Number(this.route.snapshot.paramMap.get('rfqId'));
    this.supplierId = Number(this.route.snapshot.paramMap.get('supplierId'));
    this.buyerId = Number(localStorage.getItem('buyerId')) || 0;

    if (!this.rfqId || !this.supplierId) {
      this.errorMessage = 'Invalid RFQ or supplier.';
      this.isLoading = false;
      return;
    }

    this.supplierService.getSupplierById(this.supplierId).subscribe({
      next: (supplier: any) => {
        const s = supplier?.data || supplier;
        this.supplierName = s?.companyName || '';
        this.consultantCompanyName = s?.companyName || '';
        this.consultantCin = s?.gstNumber || '';
        this.consultantAddress = [s?.addressLine1, s?.addressLine2, s?.city, s?.state, s?.postalCode, s?.country]
          .filter((p: string) => !!p).join(', ');
        this.isLoading = false;
      },
      error: () => { this.isLoading = false; }
    });
  }

  submit(): void {
    this.errorMessage = null;
    if (!this.consultantCompanyName.trim()) {
      this.errorMessage = 'Consultant company name is required.';
      return;
    }

    this.isSubmitting = true;
    const fullName = localStorage.getItem('fullName') || 'Buyer';
    const userId = Number(localStorage.getItem('userId')) || 0;

    this.dataService.createContract({
      rfqId: this.rfqId,
      supplierId: this.supplierId,
      buyerId: this.buyerId,
      createdByUserId: userId,
      createdByName: fullName,
      consultantCompanyName: this.consultantCompanyName.trim(),
      consultantCin: this.consultantCin.trim(),
      consultantAddress: this.consultantAddress.trim(),
      agreementDate: this.agreementDate,
      expiryDate: this.expiryDate || null
    }).subscribe({
      next: (response: any) => {
        this.isSubmitting = false;
        if (response?.success) {
          this.messageService.showMessage('success', 'Success', 'Contract draft created');
          this.router.navigate(['/contract-detail', response.data.id]);
        } else {
          this.errorMessage = response?.message || 'Failed to create contract';
        }
      },
      error: (err: any) => {
        this.isSubmitting = false;
        this.errorMessage = err.error?.message || 'Failed to create contract';
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/po-negotiation', this.rfqId, this.supplierId]);
  }
}
