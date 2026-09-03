import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent,
  ContainerComponent, ButtonDirective, AlertComponent, BadgeComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

/** Buyer's "ASN Tracking" — every incoming shipment notice across their POs. The buyer confirms
 *  Delivered once goods actually arrive (mirrors how GRN already works — the receiving side
 *  confirms receipt, not the sender); confirming shipped ("In Transit") stays the supplier's
 *  call, on their "My Shipments" page. */
@Component({
  selector: 'app-asn-tracking',
  templateUrl: './asn-tracking.component.html',
  styleUrls: ['./asn-tracking.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, CardComponent, CardBodyComponent, RowComponent, ColComponent,
    ContainerComponent, ButtonDirective, AlertComponent, BadgeComponent
  ]
})
export class AsnTrackingComponent implements OnInit {

  companyName = '';
  asns: any[] = [];
  isLoading = true;
  loadError = '';

  expandedAsnId: number | null = null;
  lineItemsByAsnId: Record<number, any[]> = {};
  isLoadingLines = false;

  // steps used to render the status progress bar
  steps = ['CREATED', 'IN_TRANSIT', 'DELIVERED'];

  // "Mark Delivered" modal — receiver name/details required, to avoid a
  // shipment being marked delivered with nobody accountable for receiving it.
  showDeliverModal = false;
  deliverTargetAsn: any = null;
  receiverName = '';
  receiverDetails = '';
  isConfirmingDelivery = false;

  constructor(
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.companyName = localStorage.getItem('companyName') || '';
    if (!this.companyName) {
      this.loadError = 'Could not determine your organization. Please re-login.';
      this.isLoading = false;
      return;
    }
    this.load();
  }

  load(): void {
    this.isLoading = true;
    this.dataService.getASNsByCompany(this.companyName).subscribe({
      next: (response: any) => {
        this.asns = (response?.data || response || []);
        this.isLoading = false;
      },
      error: () => {
        this.loadError = 'Failed to load shipment tracking';
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

  stepIndex(asn: any): number {
    const idx = this.steps.indexOf(asn.status);
    return idx === -1 ? 0 : idx;
  }

  isStepDone(asn: any, step: string): boolean {
    if (asn.status === 'CANCELLED') return false;
    return this.stepIndex(asn) >= this.steps.indexOf(step);
  }

  toggleLineItems(asn: any): void {
    if (this.expandedAsnId === asn.id) {
      this.expandedAsnId = null;
      return;
    }
    this.expandedAsnId = asn.id;
    if (!this.lineItemsByAsnId[asn.id]) {
      this.isLoadingLines = true;
      this.dataService.getASNDetail(asn.id).subscribe({
        next: (response: any) => {
          this.lineItemsByAsnId[asn.id] = response?.lineItems || [];
          this.isLoadingLines = false;
        },
        error: () => { this.isLoadingLines = false; }
      });
    }
  }

  formatDate(d: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  // ── "Mark Delivered" — the buyer confirms receipt; requires naming who actually received it ──

  canMarkDelivered(asn: any): boolean { return asn.status === 'IN_TRANSIT'; }

  openDeliverModal(asn: any): void {
    this.deliverTargetAsn = asn;
    this.receiverName = '';
    this.receiverDetails = '';
    this.showDeliverModal = true;
  }

  closeDeliverModal(): void {
    this.showDeliverModal = false;
    this.deliverTargetAsn = null;
  }

  confirmDelivered(): void {
    if (!this.deliverTargetAsn) return;
    if (!this.receiverName.trim()) {
      this.messageService.showMessage('error', 'Error', 'Receiver name is required to mark as delivered');
      return;
    }

    this.isConfirmingDelivery = true;
    this.dataService.updateASNStatus(
      this.deliverTargetAsn.id, 'DELIVERED', undefined, this.receiverName.trim(), this.receiverDetails.trim(), 'BUYER'
    ).subscribe({
      next: (response: any) => {
        this.isConfirmingDelivery = false;
        if (response?.success) {
          this.messageService.showMessage('success', 'Success', 'Shipment marked as delivered');
          this.closeDeliverModal();
          this.load();
        } else {
          this.messageService.showMessage('error', 'Error', response?.message || 'Failed to update status');
        }
      },
      error: (err: any) => {
        this.isConfirmingDelivery = false;
        this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed to update status');
      }
    });
  }
}
