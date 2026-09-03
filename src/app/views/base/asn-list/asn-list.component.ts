import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent,
  ContainerComponent, ButtonDirective, AlertComponent, BadgeComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

/** Supplier's "My Shipments" — every ASN they've raised. They confirm shipping (mark In
 *  Transit) or Cancel; confirming Delivered is the buyer's call now (ASN Tracking page) —
 *  mirrors how GRN already works, where the receiving side confirms receipt. */
@Component({
  selector: 'app-asn-list',
  templateUrl: './asn-list.component.html',
  styleUrls: ['./asn-list.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterLink, CardComponent, CardBodyComponent, RowComponent, ColComponent,
    ContainerComponent, ButtonDirective, AlertComponent, BadgeComponent
  ]
})
export class AsnListComponent implements OnInit {

  supplierId = 0;
  asns: any[] = [];
  isLoading = true;
  loadError = '';
  updatingId: number | null = null;

  constructor(
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.supplierId = Number(localStorage.getItem('supplierId')) || 0;
    if (!this.supplierId) {
      this.loadError = 'Could not determine your supplier account. Please re-login.';
      this.isLoading = false;
      return;
    }
    this.load();
  }

  load(): void {
    this.isLoading = true;
    this.dataService.getASNsBySupplier(this.supplierId).subscribe({
      next: (response: any) => {
        this.asns = (response?.data || response || []);
        this.isLoading = false;
      },
      error: () => {
        this.loadError = 'Failed to load your shipments';
        this.isLoading = false;
      }
    });
  }

  statusColor(status: string): string {
    if (status === 'DELIVERED') return 'success';
    if (status === 'CANCELLED') return 'secondary';
    if (status === 'IN_TRANSIT') return 'info';
    return 'warning';
  }

  canMarkInTransit(asn: any): boolean { return asn.status === 'CREATED'; }
  canCancel(asn: any): boolean { return asn.status === 'CREATED' || asn.status === 'IN_TRANSIT'; }

  updateStatus(asn: any, newStatus: string): void {
    this.updatingId = asn.id;
    this.dataService.updateASNStatus(asn.id, newStatus, undefined, undefined, undefined, 'SUPPLIER').subscribe({
      next: (response: any) => {
        this.updatingId = null;
        if (response?.success) {
          this.messageService.showMessage('success', 'Success', 'Shipment status updated');
          this.load();
        } else {
          this.messageService.showMessage('error', 'Error', response?.message || 'Failed to update status');
        }
      },
      error: (err: any) => {
        this.updatingId = null;
        this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed to update status');
      }
    });
  }

  formatDate(d: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  }
}
