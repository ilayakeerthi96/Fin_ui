import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent,
  ContainerComponent, ButtonDirective, BadgeComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

/** Buyer's dashboard of every MSA contract they've generated. */
@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css'],
  standalone: true,
  imports: [
    CommonModule, CardComponent, CardBodyComponent, RowComponent, ColComponent,
    ContainerComponent, ButtonDirective, BadgeComponent
  ]
})
export class ContractListComponent implements OnInit {

  buyerId: number = 0;
  contracts: any[] = [];
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.buyerId = Number(localStorage.getItem('buyerId')) || 0;
    this.loadContracts();
  }

  loadContracts(): void {
    this.isLoading = true;
    this.dataService.getBuyerContracts(this.buyerId).subscribe({
      next: (response: any) => {
        this.contracts = (response?.success && response.data) ? response.data : [];
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
      case 'PENDING_APPROVAL': return 'warning';
      case 'REJECTED': return 'danger';
      case 'RETURNED_FOR_REVISION': return 'warning';
      default: return 'secondary'; // DRAFT
    }
  }
}
