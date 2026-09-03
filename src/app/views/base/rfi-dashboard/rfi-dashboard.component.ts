import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent,
  ContainerComponent, ButtonDirective, BadgeComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

/** Buyer's list of RFIs they've created, with invited/responded counts. */
@Component({
  selector: 'app-rfi-dashboard',
  templateUrl: './rfi-dashboard.component.html',
  styleUrls: ['./rfi-dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule, CardComponent, CardBodyComponent, RowComponent, ColComponent,
    ContainerComponent, ButtonDirective, BadgeComponent
  ]
})
export class RfiDashboardComponent implements OnInit {

  buyerId: number = 0;
  rows: any[] = [];
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.buyerId = Number(localStorage.getItem('buyerId')) || 0;
    this.loadRfis();
  }

  loadRfis(): void {
    this.isLoading = true;
    this.dataService.getBuyerRfis(this.buyerId).subscribe({
      next: (response: any) => {
        this.rows = (response?.success && response.data) ? response.data : [];
        this.isLoading = false;
      },
      error: () => {
        this.messageService.showMessage('error', 'Error', 'Failed to load RFIs');
        this.isLoading = false;
      }
    });
  }

  createRfi(): void {
    this.router.navigate(['/rfi-create']);
  }

  viewResponses(rfiId: number): void {
    this.router.navigate(['/rfi-responses', rfiId]);
  }

  closeRfi(row: any): void {
    if (!confirm(`Close RFI "${row.rfi.title}"? Suppliers will no longer be able to submit responses.`)) return;
    this.dataService.closeRfi(row.rfi.id).subscribe({
      next: (response: any) => {
        if (response?.success) {
          this.messageService.showMessage('success', 'Success', 'RFI closed');
          this.loadRfis();
        }
      },
      error: () => this.messageService.showMessage('error', 'Error', 'Failed to close RFI')
    });
  }
}
