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
 * Payment tracking — every invoice raised against a released PO, and where its money is.
 *
 * Marking an invoice paid is done here rather than on the invoice screen because payment is
 * a distinct job from invoice approval, usually done by a different person at a different
 * time. The API still enforces the ordering: only an APPROVED invoice can be marked paid.
 *
 * A payment reference is required by this screen even though the API would accept a blank
 * one. An untraceable payment is the thing you most regret six months later, and the field
 * costs nothing to fill in.
 */
@Component({
  selector: 'app-payment-tracking',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ContainerComponent, RowComponent, ColComponent,
    CardComponent, CardBodyComponent, CardHeaderComponent,
    ButtonDirective, BadgeComponent, SpinnerComponent
  ],
  templateUrl: './payment-tracking.component.html',
  styleUrls: ['./payment-tracking.component.css']
})
export class PaymentTrackingComponent implements OnInit {

  invoices: any[] = [];
  filtered: any[] = [];
  isLoading = false;
  errorMessage = '';

  statusFilter = 'ALL';
  searchText = '';

  statusOptions = ['ALL', 'SUBMITTED', 'APPROVED', 'PAID', 'REJECTED'];

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

  // ── Mark-as-paid dialog ───────────────────────────────────────────────
  showPayModal = false;
  payTarget: any = null;
  paymentReference = '';
  isSubmittingPayment = false;

  companyName = '';

  constructor(
    private dataService: DataService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.companyName = localStorage.getItem('companyName') || '';
    this.load();
  }

  load(): void {
    if (!this.companyName) {
      this.errorMessage = 'No company is associated with this login, so no invoices can be listed.';
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';

    this.dataService.getBuyerInvoices(this.companyName).subscribe({
      next: (res: any) => {
        this.invoices = this.unwrapList(res);
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Could not load invoices.';
        this.invoices = [];
        this.filtered = [];
        this.isLoading = false;
      }
    });
  }

  applyFilters(): void {
    let data = [...this.invoices];

    if (this.statusFilter !== 'ALL') {
      data = data.filter(i => i.status === this.statusFilter);
    }

    const q = this.searchText.trim().toLowerCase();
    if (q) {
      data = data.filter(i =>
        (i.invoiceNumber || '').toLowerCase().includes(q) ||
        (i.poNumber || '').toLowerCase().includes(q) ||
        (i.supplierName || '').toLowerCase().includes(q) ||
        (i.paymentReference || '').toLowerCase().includes(q)
      );
    }

    this.filtered = data;
    this.currentPage = 1;
  }

  // ==================================================================
  // SUMMARY TILES
  // ==================================================================

  get totalInvoiced(): number {
    return this.sum(this.invoices.filter(i => i.status !== 'REJECTED_CLOSED'), 'totalAmount');
  }

  get totalPaid(): number {
    return this.sum(this.invoices.filter(i => i.status === 'PAID'), 'totalAmount');
  }

  get totalOutstanding(): number {
    // Everything approved but not yet settled — the number that actually needs action.
    return this.sum(this.invoices.filter(i => i.status === 'APPROVED'), 'totalAmount');
  }

  get awaitingApprovalCount(): number {
    return this.invoices.filter(i => i.status === 'SUBMITTED').length;
  }

  get paidCount(): number {
    return this.invoices.filter(i => i.status === 'PAID').length;
  }

  get approvedCount(): number {
    return this.invoices.filter(i => i.status === 'APPROVED').length;
  }

  /** Share of billed value actually collected — the one number that says how healthy
   *  collections are at a glance, the way the PO dashboard's tiles do for PO status. */
  get collectionPercent(): number {
    if (this.totalInvoiced <= 0) return 0;
    return Math.round((this.totalPaid / this.totalInvoiced) * 100);
  }

  /** Approved invoices whose due date has already passed — the number that actually
   *  needs someone's attention today, as opposed to totalOutstanding which is everything. */
  get overdueInvoices(): any[] {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    return this.invoices.filter(i => {
      if (i.status !== 'APPROVED' || !i.dueDate) return false;
      const due = new Date(i.dueDate);
      return due < today;
    });
  }

  get overdueCount(): number { return this.overdueInvoices.length; }
  get overdueAmount(): number { return this.sum(this.overdueInvoices, 'totalAmount'); }

  /** Days overdue for one invoice — negative means still within terms, shown as "due in Nd". */
  daysOverdue(invoice: any): number {
    if (!invoice?.dueDate) return 0;
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const due = new Date(invoice.dueDate); due.setHours(0, 0, 0, 0);
    return Math.round((today.getTime() - due.getTime()) / 86400000);
  }

  private sum(list: any[], field: string): number {
    return list.reduce((total, item) => total + (Number(item[field]) || 0), 0);
  }

  // ==================================================================
  // MARK AS PAID
  // ==================================================================

  canMarkPaid(invoice: any): boolean {
    return invoice?.status === 'APPROVED';
  }

  /** Every payment rail this app actually accepts — matches what a real finance team picks
   *  from day to day. "Other" covers anything that doesn't fit neatly (barter, adjustment). */
  paymentModeOptions = ['NEFT', 'RTGS', 'IMPS', 'UPI', 'Cheque', 'Cash', 'Bank Transfer', 'Other'];
  paymentMode = '';
  paymentRemarks = '';

  openPayModal(invoice: any): void {
    if (!this.canMarkPaid(invoice)) {
      this.messageService.showMessage('warning', 'Not payable',
        `Invoice ${invoice.invoiceNumber} is ${invoice.status}. Only an invoice that's Ready for Payment can be marked paid.`);
      return;
    }
    this.payTarget = invoice;
    this.paymentReference = '';
    this.paymentMode = '';
    this.paymentRemarks = '';
    this.showPayModal = true;
  }

  closePayModal(): void {
    this.showPayModal = false;
    this.payTarget = null;
    this.paymentReference = '';
    this.paymentMode = '';
    this.paymentRemarks = '';
  }

  confirmPayment(): void {
    if (!this.payTarget) return;

    if (!this.paymentReference.trim()) {
      this.messageService.showMessage('warning', 'Reference required',
        'Enter the payment reference (UTR / NEFT / cheque number) so the payment can be traced later.');
      return;
    }
    if (!this.paymentMode) {
      this.messageService.showMessage('warning', 'Payment mode required',
        'Select how this payment was made (NEFT, UPI, cheque, etc.).');
      return;
    }

    this.isSubmittingPayment = true;
    const paidBy = localStorage.getItem('fullName') || 'Admin';

    this.dataService.markInvoicePaid(
      this.payTarget.id, paidBy, this.paymentReference.trim(), this.paymentMode, this.paymentRemarks.trim()
    ).subscribe({
        next: () => {
          this.messageService.showMessage('success', 'Payment recorded',
            `${this.payTarget.invoiceNumber} marked as paid. The PO's payment status has been updated.`);
          this.isSubmittingPayment = false;
          this.closePayModal();
          this.load();     // reload so the PO roll-up the server just did is reflected here
        },
        error: (err: any) => {
          this.isSubmittingPayment = false;
          const msg = err?.error?.message || 'Could not record the payment.';
          this.messageService.showMessage('error', 'Payment failed', msg);
        }
      });
  }

  // ==================================================================
  // DISPLAY
  // ==================================================================

  statusColor(status: string): string {
    switch (status) {
      case 'PAID':            return 'success';
      case 'APPROVED':        return 'info';
      case 'SUBMITTED':       return 'warning';
      case 'REJECTED':
      case 'REJECTED_CLOSED': return 'danger';
      default:                return 'secondary';
    }
  }

  /** "Approved" reads as "done" — it isn't; the money hasn't moved yet. This is the same
   *  relabel used on the Invoice Management screen, kept in sync so the two never disagree
   *  about what an invoice's status actually means. */
  statusLabel(status: string): string {
    switch (status) {
      case 'APPROVED':        return 'Ready for Payment';
      case 'SUBMITTED':       return 'Pending Review';
      case 'REJECTED':        return 'Returned for Correction';
      case 'REJECTED_CLOSED': return 'Permanently Closed';
      case 'PAID':            return 'Paid';
      default:                return status;
    }
  }

  balanceDue(invoice: any): number {
    if (invoice?.status === 'PAID') return 0;
    const total = Number(invoice?.totalAmount) || 0;
    const advance = Number(invoice?.advancePaidAmount) || 0;
    const balance = total - advance;
    return balance > 0 ? balance : 0;
  }

  viewPO(invoice: any): void {
    if (invoice?.poId) this.router.navigate(['/po-details', invoice.poId]);
  }

  /** Invoices carry a currency CODE ("INR"), not a symbol — this app has no per-invoice
   *  currencySymbol field, so every amount needs converting through this the same way the
   *  rest of the app does (po-list, buyer-invoices, etc.) rather than printing the code. */
  getSymbolForCode(code: string): string {
    const map: Record<string, string> = {
      INR: '₹', USD: '$', EUR: '€', GBP: '£', AED: 'د.إ', SGD: 'S$',
      JPY: '¥', CNY: '¥', CHF: 'Fr', CAD: 'C$', AUD: 'A$', NZD: 'NZ$'
    };
    return map[code] || code || '₹';
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
