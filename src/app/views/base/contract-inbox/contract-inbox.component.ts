import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent,
  ContainerComponent, ButtonDirective, BadgeComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

/** Supplier's list of contracts sent to them (approved and awaiting/holding their signature, or already signed). */
@Component({
  selector: 'app-contract-inbox',
  templateUrl: './contract-inbox.component.html',
  styleUrls: ['./contract-inbox.component.css'],
  standalone: true,
  imports: [
    CommonModule, CardComponent, CardBodyComponent, RowComponent, ColComponent,
    ContainerComponent, ButtonDirective, BadgeComponent
  ]
})
export class ContractInboxComponent implements OnInit {

  supplierId: number = 0;
  contracts: any[] = [];
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.supplierId = Number(localStorage.getItem('supplierId')) || 0;
    this.loadContracts();
  }

  loadContracts(): void {
    this.isLoading = true;
    this.dataService.getSupplierContracts(this.supplierId).subscribe({
      next: (response: any) => {
        // Only ever show contracts the supplier is actually meant to act on / has visibility into
        // (DRAFT/PENDING_APPROVAL haven't reached them yet).
        const all = (response?.success && response.data) ? response.data : [];
        this.contracts = all.filter((c: any) => c.status !== 'DRAFT' && c.status !== 'PENDING_APPROVAL');
        this.isLoading = false;
      },
      error: () => {
        this.messageService.showMessage('error', 'Error', 'Failed to load contracts');
        this.isLoading = false;
      }
    });
  }

  viewContract(id: number): void {
    this.router.navigate(['/contract-detail', id]);
  }

  statusColor(status: string): string {
    switch (status) {
      case 'FULLY_SIGNED': return 'success';
      case 'AWAITING_SIGNATURES': return 'info';
      case 'APPROVED': return 'primary';
      case 'REJECTED': return 'danger';
      default: return 'secondary';
    }
  }
}
