
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';
import { AuthService } from '../../../shared/service/AuthService';

/**
 * Dashboard for hierarchy approvers (CEO, COO, Manager, Finance, Procurement).
 *
 * Shows only what is relevant to them: PO counts they need to act on, and the
 * full list of POs for their company so they can click through to details.
 *
 * RFQ, Quotation, Supplier Approval, and all other out-of-scope sections have
 * been removed. The sidebar already restricts navigation to Dashboard and
 * Pending Approvals for these users.
 */

interface FYOption {
  value: string;
  label: string;
  from: Date;
  to: Date;
}

@Component({
  selector: 'app-hierarchy-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hierarchy-dashboard.component.html',
  styleUrls: ['./hierarchy-dashboard.component.css']
})
export class HierarchyDashboardComponent implements OnInit {

  // ── User info ──────────────────────────────────────────────────────────────
  userId: number = 0;
  userName: string = '';
  userEmail: string = '';
  hierarchyLevelId: number | null = null;
  hierarchyLevelName: string = '';
  hierarchyLevelOrder: number | null = null;
  companyName: string = '';

  // ── PO data ────────────────────────────────────────────────────────────────
  allPOs: any[] = [];
  filteredPOs: any[] = [];
  pagedPOs: any[] = [];
  dateFilteredPOs: any[] = [];

  poSearchText = '';
  poCurrentPage = 1;
  poPageSize = 10;
  poStatusFilter = '';

  isPOLoading = false;

  // ── PO approval counts (for the stat cards and the badge on the button) ────
  pendingPOCount: number = 0;
  holdPOCount: number = 0;

  get totalBadgeCount(): number {
    return this.pendingPOCount + this.holdPOCount;
  }

  get approvedPOCount(): number {
    return this.dateFilteredPOs.filter(po =>
      (po.approvalStatus || po.status) === 'APPROVED'
    ).length;
  }

  poStatuses = [
    'DRAFT', 'PENDING_APPROVAL', 'APPROVED', 'REJECTED', 'RETURNED_FOR_REVISION',
    'RELEASED', 'IN_PROGRESS', 'DELIVERED', 'COMPLETED', 'CLOSED', 'FORECLOSED', 'CANCELLED'
  ];

  // ── Date filter ────────────────────────────────────────────────────────────
  financialYearOptions: FYOption[] = [];
  selectedFYOption: string = '';
  customFromDate: string = '';
  customToDate: string = '';
  activeDateRangeLabel: string = '';

  constructor(
    private dataService: DataService,
    private messageService: MessageService,
    private authService: AuthService,
    public router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initializeUser();
    this.buildFinancialYearOptions();
    this.selectedFYOption = this.getCurrentFYValue();
    this.updateActiveDateRangeLabel();
    this.loadData();
  }

  private initializeUser(): void {
    this.userId             = Number(localStorage.getItem('userId')) || 0;
    this.userName           = localStorage.getItem('fullName') || 'User';
    this.userEmail          = localStorage.getItem('email') || localStorage.getItem('username') || '';
    this.companyName        = localStorage.getItem('companyName') || 'NA';
    this.hierarchyLevelId   = this.authService.getHierarchyLevelId();
    this.hierarchyLevelName = this.authService.getHierarchyLevelName() || 'Approver';
    this.hierarchyLevelOrder = this.authService.getHierarchyLevelOrder();
    if (!this.userId) {
      this.messageService.showMessage('error', 'Error', 'User ID not found. Please login again.');
      this.router.navigate(['/login']);
    }
  }

  // ===========================================================================
  // FINANCIAL YEAR HELPERS
  // ===========================================================================

  private buildFinancialYearOptions(): void {
    const today = new Date();
    const currentFYStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
    this.financialYearOptions = [];
    for (let i = 0; i < 4; i++) {
      const startYear = currentFYStartYear - i;
      const endYear   = startYear + 1;
      this.financialYearOptions.push({
        value: `FY${startYear}-${String(endYear).slice(-2)}`,
        label: `FY ${startYear}-${String(endYear).slice(-2)}  (Apr ${startYear} – Mar ${endYear})`,
        from: new Date(startYear, 3, 1, 0, 0, 0, 0),
        to:   new Date(endYear,   2, 31, 23, 59, 59, 999)
      });
    }
  }

  getCurrentFYValue(): string {
    return this.financialYearOptions.length > 0 ? this.financialYearOptions[0].value : 'ALL';
  }

  onFYOptionChange(): void {
    if (this.selectedFYOption !== 'CUSTOM') {
      this.customFromDate = '';
      this.customToDate   = '';
    }
    this.updateActiveDateRangeLabel();
    this.applyPOFilters();
  }

  resetDateFilter(): void {
    this.selectedFYOption = this.getCurrentFYValue();
    this.customFromDate = '';
    this.customToDate   = '';
    this.updateActiveDateRangeLabel();
    this.applyPOFilters();
  }

  private updateActiveDateRangeLabel(): void {
    if (this.selectedFYOption === 'ALL') { this.activeDateRangeLabel = 'All Time'; return; }
    if (this.selectedFYOption === 'CUSTOM') {
      if (this.customFromDate && this.customToDate)
        this.activeDateRangeLabel = `${this.fmtDate(this.customFromDate)} – ${this.fmtDate(this.customToDate)}`;
      else if (this.customFromDate) this.activeDateRangeLabel = `From ${this.fmtDate(this.customFromDate)}`;
      else if (this.customToDate)   this.activeDateRangeLabel = `Up to ${this.fmtDate(this.customToDate)}`;
      else this.activeDateRangeLabel = 'Custom Range';
      return;
    }
    const fy = this.financialYearOptions.find(f => f.value === this.selectedFYOption);
    this.activeDateRangeLabel = fy ? fy.label : '';
  }

  private fmtDate(dateStr: string): string {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-GB',
      { day: '2-digit', month: 'short', year: 'numeric' });
  }

  private getActiveDateRange(): { from: Date; to: Date } | null {
    if (this.selectedFYOption === 'ALL') return null;
    if (this.selectedFYOption === 'CUSTOM') {
      const from = this.customFromDate ? new Date(this.customFromDate + 'T00:00:00') : null;
      const to   = this.customToDate   ? new Date(this.customToDate   + 'T23:59:59') : null;
      if (!from && !to) return null;
      return { from: from ?? new Date(0), to: to ?? new Date(8640000000000000) };
    }
    const fy = this.financialYearOptions.find(f => f.value === this.selectedFYOption);
    return fy ? { from: fy.from, to: fy.to } : null;
  }

  private applyDateFilter(items: any[], dateField = 'createdAt'): any[] {
    const range = this.getActiveDateRange();
    if (!range) return items;
    return items.filter(item => {
      const d = new Date(item[dateField] || item.createdAt || '');
      return d >= range.from && d <= range.to;
    });
  }

  // ===========================================================================
  // DATA LOADING
  // ===========================================================================

  private loadData(): void {
    this.loadPOs();
    this.loadPendingPOApprovalCount();
    this.loadHoldPOApprovalCount();
  }

  private loadPOs(): void {
    if (!this.userId) return;
    this.isPOLoading = true;
    this.dataService.getPurchaseOrdersByCompany(this.companyName).subscribe({
      next: (response: any) => {
        let raw: any[] = [];
        if (Array.isArray(response))            raw = response;
        else if (Array.isArray(response?.data)) raw = response.data;
        else if (Array.isArray(response?.content)) raw = response.content;

        this.allPOs = raw.map((po: any) => ({
          ...po,
          supplierName:   po.supplierName   || po.supplier?.companyName || 'N/A',
          grandTotal:     po.grandTotal     || po.totalAmount    || 0,
          itemsCount:     po.itemsCount     || po.items?.length  || 0,
          poNumber:       po.poNumber       || po.id             || 'N/A',
          createdDate:    po.createdAt      || po.createdDate    || po.poDate || null,
          approvalStatus: po.approvalStatus || po.status         || 'DRAFT',
          currencyCode:   po.currencyCode   || 'INR',
          currencySymbol: po.currencySymbol || '₹'
        }));

        this.applyPOFilters();
        this.isPOLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.allPOs = []; this.filteredPOs = []; this.pagedPOs = [];
        this.isPOLoading = false;
        this.cdr.markForCheck();
      }
    });
  }

  private loadPendingPOApprovalCount(): void {
    if (!this.userId) return;
    this.dataService.getPendingPOApprovalCount(this.userId).subscribe({
      next: (res: any) => {
        this.pendingPOCount = res.pendingCount ?? res.count ?? res.data ?? 0;
        this.cdr.markForCheck();
      },
      error: () => { this.pendingPOCount = 0; }
    });
  }

  private loadHoldPOApprovalCount(): void {
    if (!this.userId) return;
    this.dataService.getHoldPOApprovalCount(this.userId).subscribe({
      next: (res: any) => {
        this.holdPOCount = res.holdCount ?? res.count ?? res.data ?? 0;
        this.cdr.markForCheck();
      },
      error: () => { this.holdPOCount = 0; }
    });
  }

  // ===========================================================================
  // FILTERING & PAGINATION
  // ===========================================================================

  applyPOFilters(): void {
    this.updateActiveDateRangeLabel();
    const dateFiltered = this.applyDateFilter(this.allPOs, 'createdDate');
    this.dateFilteredPOs = dateFiltered;

    let data = [...dateFiltered];
    if (this.poSearchText.trim()) {
      const term = this.poSearchText.toLowerCase();
      data = data.filter(po =>
        (po.poNumber || '').toString().toLowerCase().includes(term) ||
        (po.supplierName || '').toLowerCase().includes(term)
      );
    }
    if (this.poStatusFilter) {
      data = data.filter(po => (po.approvalStatus || po.status) === this.poStatusFilter);
    }
    this.filteredPOs = data;
    this.poCurrentPage = 1;
    this.updatePOPagination();
  }

  private updatePOPagination(): void {
    const start = (this.poCurrentPage - 1) * this.poPageSize;
    this.pagedPOs = this.filteredPOs.slice(start, start + this.poPageSize);
    this.cdr.markForCheck();
  }

  get totalPOPages(): number { return Math.ceil(this.filteredPOs.length / this.poPageSize); }

  onPOPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPOPages) {
      this.poCurrentPage = page;
      this.updatePOPagination();
    }
  }

  // ===========================================================================
  // NAVIGATION
  // ===========================================================================

  viewPODetails(po: any): void { this.router.navigate(['/po-details', po.id]); }
  navigateToPendingApprovals(): void { this.router.navigate(['/pending-approvals']); }
  refresh(): void { this.loadData(); }

  // ===========================================================================
  // DISPLAY UTILITIES
  // ===========================================================================

  formatDate(dateString: string | null): string {
    if (!dateString) return 'N/A';
    try { return new Date(dateString).toLocaleDateString('en-GB'); } catch { return '—'; }
  }

  formatCurrency(amount: number | null, currencyCode?: string): string {
    const code   = currencyCode || 'INR';
    const symbol = this.getSymbolForCode(code);
    if (amount == null || isNaN(Number(amount))) return `${symbol} 0.00`;
    const formatted = Number(amount).toLocaleString('en-IN',
      { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `${symbol} ${formatted}`;
  }

  private getSymbolForCode(code: string): string {
    const map: Record<string, string> = {
      'INR': '₹', 'USD': '$', 'EUR': '€', 'GBP': '£',
      'AED': 'د.إ', 'SGD': 'S$', 'JPY': '¥', 'CNY': '¥',
      'CHF': 'Fr', 'CAD': 'C$', 'AUD': 'A$', 'MYR': 'RM'
    };
    return map[code] || code;
  }

  getPOStatusClass(status: string): string {
    const m: any = {
      'DRAFT':                 'badge-po-draft',
      'PENDING_APPROVAL':      'badge-po-pending',
      'APPROVED':              'badge-po-approved',
      'REJECTED':              'badge-po-rejected',
      'RETURNED_FOR_REVISION': 'badge-po-pending',
      'RELEASED':              'badge-po-sent',
      'IN_PROGRESS':           'badge-po-ack',
      'DELIVERED':             'badge-po-ack',
      'COMPLETED':             'badge-po-done',
      'CLOSED':                'badge-po-done',
      'FORECLOSED':            'badge-po-cancelled',
      'CANCELLED':             'badge-po-cancelled'
    };
    return m[status] || 'badge-po-draft';
  }

  getPOStatusLabel(status: string): string {
    const m: any = {
      'DRAFT':                 'Draft',
      'PENDING_APPROVAL':      'Pending Approval',
      'APPROVED':              'Approved',
      'REJECTED':              'Rejected',
      'RETURNED_FOR_REVISION': 'Returned for Revision',
      'RELEASED':              'Released',
      'IN_PROGRESS':           'In Progress',
      'DELIVERED':             'Delivered',
      'COMPLETED':             'Completed',
      'CLOSED':                'Closed',
      'FORECLOSED':            'Foreclosed',
      'CANCELLED':             'Cancelled'
    };
    return m[status] || (status || 'Unknown').replace(/_/g, ' ');
  }

  /** "Unpaid" reads like something's wrong; it's just the normal starting state. */
  paymentStatusLabel(status: string): string {
    switch (status) {
      case 'PAID':           return 'Paid';
      case 'PARTIALLY_PAID': return 'Partially Paid';
      default:               return 'Awaiting Payment';
    }
  }

  trackById(_i: number, row: any): any { return row?.id; }
}
