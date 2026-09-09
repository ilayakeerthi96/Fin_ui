import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, CardHeaderComponent,
  RowComponent, ColComponent, ContainerComponent,
  ButtonDirective, BadgeComponent, SpinnerComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

/**
 * PO closure — the last step of the lifecycle.
 *
 * Two distinct endings, deliberately kept apart:
 *
 *   CLOSE      the PO ran its course. Everything was supplied, invoiced and paid.
 *   FORECLOSE  the PO ended early — the supplier could not deliver, the requirement
 *              lapsed, the contract ended. Requires a reason, because a foreclosed PO
 *              with an unexplained shortfall is unauditable.
 *
 * Closing stops the supplier invoicing further, so the API refuses to close a PO with an
 * outstanding payment unless force is passed. This screen surfaces that as an explicit,
 * separately-confirmed choice rather than sending force silently — the Admin should have to
 * mean it, and the override is recorded in the audit trail either way.
 */
@Component({
  selector: 'app-po-closure',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ContainerComponent, RowComponent, ColComponent,
    CardComponent, CardBodyComponent, CardHeaderComponent,
    ButtonDirective, BadgeComponent, SpinnerComponent
  ],
  templateUrl: './po-closure.component.html',
  styleUrls: ['./po-closure.component.css']
})
export class PoClosureComponent implements OnInit {

  allPOs: any[] = [];
  filtered: any[] = [];
  isLoading = false;
  errorMessage = '';

  /** OPEN = still closable; CLOSED = already ended, kept visible for reference. */
  view: 'OPEN' | 'CLOSED' = 'OPEN';
  searchText = '';

  // ── Pagination — same pattern as the PO list ─────────────────────────────
  currentPage = 1;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  get totalPages(): number { return Math.max(1, Math.ceil(this.filtered.length / this.pageSize)); }

  get paginated(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filtered.slice(start, start + this.pageSize);
  }

  get pageNumbers(): number[] {
    const total = this.totalPages, current = this.currentPage;
    const pages: number[] = [];
    if (total <= 7) { for (let i = 1; i <= total; i++) pages.push(i); return pages; }
    pages.push(1);
    if (current > 3) pages.push(-1);
    const start = Math.max(2, current - 1), end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (current < total - 2) pages.push(-1);
    pages.push(total);
    return pages;
  }

  get startIndex(): number {
    if (this.filtered.length === 0) return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }
  get endIndex(): number { return Math.min(this.currentPage * this.pageSize, this.filtered.length); }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }
  onPageSizeChange(size: number): void { this.pageSize = size; this.currentPage = 1; }

  // ── Close / foreclose dialog ──────────────────────────────────────────
  showModal = false;
  modalMode: 'close' | 'foreclose' = 'close';
  target: any = null;
  remarks = '';
  forceClose = false;
  isSubmitting = false;

  constructor(
    private dataService: DataService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.dataService.getAllPurchaseOrders().subscribe({
      next: (res: any) => {
        this.allPOs = this.unwrapList(res);
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Could not load purchase orders.';
        this.allPOs = [];
        this.filtered = [];
        this.isLoading = false;
      }
    });
  }

  applyFilters(): void {
    const endedStatuses = ['CLOSED', 'FORECLOSED', 'CANCELLED'];

    let data = this.allPOs.filter(po =>
      this.view === 'CLOSED'
        ? endedStatuses.includes(po.status)
        // Only a PO that actually reached the supplier can be closed. Drafts and POs still
        // in approval are cancelled or deleted instead, so listing them here would offer an
        // action the API would refuse.
        : !endedStatuses.includes(po.status) && this.isReleased(po)
    );

    const q = this.searchText.trim().toLowerCase();
    if (q) {
      data = data.filter(po =>
        (po.poNumber || '').toLowerCase().includes(q) ||
        (po.supplierName || '').toLowerCase().includes(q)
      );
    }

    this.filtered = data;
  }

  switchView(view: 'OPEN' | 'CLOSED'): void {
    this.view = view;
    this.applyFilters();
  }

  private isReleased(po: any): boolean {
    return ['RELEASED', 'SENT_TO_SUPPLIER', 'ACKNOWLEDGED',
            'IN_PROGRESS', 'DELIVERED', 'COMPLETED'].includes(po.status);
  }

  // ==================================================================
  // READINESS
  // ==================================================================

  isFullyPaid(po: any): boolean {
    return po?.paymentStatus === 'PAID';
  }

  /** A PO is ready for a clean close when everything is supplied and everything is paid. */
  isReadyToClose(po: any): boolean {
    return this.isFullyPaid(po) && po?.fullySupplied === true;
  }

  readinessLabel(po: any): string {
    if (this.isReadyToClose(po)) return 'Ready to close';
    if (!this.isFullyPaid(po))   return 'Payment outstanding';
    return 'Delivery outstanding';
  }

  readinessColor(po: any): string {
    return this.isReadyToClose(po) ? 'success' : 'warning';
  }

  // ==================================================================
  // ACTIONS
  // ==================================================================

  openClose(po: any): void {
    this.modalMode = 'close';
    this.target = po;
    this.remarks = '';
    // Pre-tick force only when it is actually needed, so the Admin sees the warning
    // rather than discovering the refusal after clicking Confirm.
    this.forceClose = !this.isFullyPaid(po);
    this.showModal = true;
  }

  openForeclose(po: any): void {
    this.modalMode = 'foreclose';
    this.target = po;
    this.remarks = '';
    this.forceClose = false;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.target = null;
    this.remarks = '';
    this.forceClose = false;
  }

  confirm(): void {
    if (!this.target) return;

    if (this.modalMode === 'foreclose' && !this.remarks.trim()) {
      this.messageService.showMessage('warning', 'Reason required',
        'Foreclosing a PO early requires a reason. It is recorded in the audit trail.');
      return;
    }

    this.isSubmitting = true;

    const request = this.modalMode === 'close'
      ? this.dataService.closePO(this.target.id, this.remarks.trim(), this.forceClose)
      : this.dataService.foreclosePO(this.target.id, this.remarks.trim());

    request.subscribe({
      next: () => {
        this.messageService.showMessage('success',
          this.modalMode === 'close' ? 'PO closed' : 'PO foreclosed',
          `${this.target.poNumber} has been ${this.modalMode === 'close' ? 'closed' : 'foreclosed'}.`);
        this.isSubmitting = false;
        this.closeModal();
        this.load();
      },
      error: (err: any) => {
        this.isSubmitting = false;
        const msg = err?.error?.message || 'The operation could not be completed.';
        this.messageService.showMessage('error', 'Failed', msg);
      }
    });
  }

  // ==================================================================
  // DISPLAY
  // ==================================================================

  statusColor(status: string): string {
    switch (status) {
      case 'CLOSED':     return 'success';
      case 'FORECLOSED': return 'danger';
      case 'CANCELLED':  return 'secondary';
      case 'RELEASED':   return 'info';
      default:           return 'primary';
    }
  }

  paymentColor(status: string): string {
    switch (status) {
      case 'PAID':           return 'success';
      case 'PARTIALLY_PAID': return 'warning';
      default:               return 'secondary';
    }
  }

  /** "Unpaid" reads like something's wrong; it's just the normal starting state. */
  paymentStatusLabel(status: string): string {
    switch (status) {
      case 'PAID':           return 'Paid';
      case 'PARTIALLY_PAID': return 'Partially Paid';
      default:               return 'Awaiting Payment';
    }
  }

  viewPO(po: any): void {
    this.router.navigate(['/po-details', po.id]);
  }

  private unwrapList(res: any): any[] {
    if (Array.isArray(res)) return res;
    if (Array.isArray(res?.data)) return res.data;
    if (Array.isArray(res?.data?.content)) return res.data.content;
    return [];
  }

  trackById(_i: number, row: any): any {
    return row?.id;
  }
}
