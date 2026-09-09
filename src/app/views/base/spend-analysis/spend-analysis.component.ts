import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { InteractionItem } from 'chart.js';
import { DataService } from '../../../shared/service/DataService';

interface FYOption {
  value: string;
  label: string;
  from: Date;
  to: Date;
}

interface BreakdownRow {
  label: string;
  count: number;
  value: number;
  percent: number;
}

/**
 * Purchase Order Report — what we've bought, from whom, and where the money is right now.
 *
 * This replaced a much bigger multi-tenant "Spend Analysis" screen built for a marketplace
 * where "buyer" meant one of many buyer accounts (supplier-side revenue view, spend by
 * category/business-unit/spares, a buyerId read from localStorage that Admin and Procurement
 * never have). None of that applies here: there is one company, one set of POs, and the ask
 * is exactly that — our POs and what we're spending, nothing else.
 *
 * Everything below is computed client-side from the same PO list every other screen in this
 * app already uses (getAllPurchaseOrders) — no new backend endpoint was needed.
 */
@Component({
  selector: 'app-spend-analysis',
  standalone: true,
  imports: [CommonModule, FormsModule, ChartjsComponent],
  templateUrl: './spend-analysis.component.html',
  styleUrls: ['./spend-analysis.component.css']
})
export class SpendAnalysisComponent implements OnInit {

  allPOs: any[] = [];
  filteredPOs: any[] = [];
  isLoading = false;
  errorMessage = '';

  searchText = '';
  statusFilter = 'ALL';
  /** Set by clicking a chart segment, not a form control — see the three chart click handlers below. */
  supplierFilter: string | null = null;
  monthFilter: string | null = null;   // 'YYYY-MM', matched against po.createdDate

  // ── Pagination — same pattern as the PO list ─────────────────────────────
  currentPage = 1;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  get totalPages(): number { return Math.max(1, Math.ceil(this.filteredPOs.length / this.pageSize)); }

  get paginatedPOs(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredPOs.slice(start, start + this.pageSize);
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
    if (this.filteredPOs.length === 0) return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }
  get endIndex(): number { return Math.min(this.currentPage * this.pageSize, this.filteredPOs.length); }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }
  onPageSizeChange(size: number): void { this.pageSize = size; this.currentPage = 1; }
  statusOptions = [
    'ALL', 'DRAFT', 'PENDING_APPROVAL', 'APPROVED', 'RELEASED', 'IN_PROGRESS',
    'DELIVERED', 'COMPLETED', 'CLOSED', 'FORECLOSED', 'REJECTED', 'CANCELLED'
  ];

  // ── Financial year filter — same pattern used across the rest of the app ───
  financialYearOptions: FYOption[] = [];
  selectedFYOption: string = '';
  customFromDate: string = '';
  customToDate: string = '';
  activeDateRangeLabel: string = '';

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildFinancialYearOptions();
    this.selectedFYOption = 'ALL';   // the full history is the more useful default for a report
    this.updateActiveDateRangeLabel();
    this.load();
  }

  load(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.dataService.getAllPurchaseOrders().subscribe({
      next: (res: any) => {
        this.allPOs = this.unwrapList(res).map((po: any) => ({
          ...po,
          grandTotal:        Number(po.grandTotal) || 0,
          totalPaidAmount:    Number(po.totalPaidAmount) || 0,
          totalInvoicedAmount: Number(po.totalInvoicedAmount) || 0,
          supplierName:       po.supplierName || 'Unknown Supplier',
          createdDate:        po.createdAt || po.createdDate || po.poDate || null
        }));
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Could not load purchase orders.';
        this.allPOs = [];
        this.filteredPOs = [];
        this.isLoading = false;
      }
    });
  }

  // =========================================================================
  // FINANCIAL YEAR HELPERS — identical pattern to po-list / hierarchy-dashboard
  // =========================================================================

  private buildFinancialYearOptions(): void {
    const today = new Date();
    const currentFYStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
    this.financialYearOptions = [];
    for (let i = 0; i < 4; i++) {
      const startYear = currentFYStartYear - i;
      const endYear = startYear + 1;
      this.financialYearOptions.push({
        value: `FY${startYear}-${String(endYear).slice(-2)}`,
        label: `FY ${startYear}-${String(endYear).slice(-2)} (Apr ${startYear} – Mar ${endYear})`,
        from: new Date(startYear, 3, 1, 0, 0, 0, 0),
        to: new Date(endYear, 2, 31, 23, 59, 59, 999)
      });
    }
  }

  onFYOptionChange(): void {
    if (this.selectedFYOption !== 'CUSTOM') { this.customFromDate = ''; this.customToDate = ''; }
    this.updateActiveDateRangeLabel();
    this.applyFilters();
  }

  resetDateFilter(): void {
    this.selectedFYOption = 'ALL';
    this.customFromDate = '';
    this.customToDate = '';
    this.updateActiveDateRangeLabel();
    this.applyFilters();
  }

  private updateActiveDateRangeLabel(): void {
    if (this.selectedFYOption === 'ALL') { this.activeDateRangeLabel = 'All Time'; return; }
    if (this.selectedFYOption === 'CUSTOM') {
      if (this.customFromDate && this.customToDate)
        this.activeDateRangeLabel = `${this.fmtDate(this.customFromDate)} – ${this.fmtDate(this.customToDate)}`;
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
      const to = this.customToDate ? new Date(this.customToDate + 'T23:59:59') : null;
      if (!from && !to) return null;
      return { from: from ?? new Date(0), to: to ?? new Date(8640000000000000) };
    }
    const fy = this.financialYearOptions.find(f => f.value === this.selectedFYOption);
    return fy ? { from: fy.from, to: fy.to } : null;
  }

  // =========================================================================
  // FILTERING
  // =========================================================================

  applyFilters(): void {
    const range = this.getActiveDateRange();
    let data = [...this.allPOs];

    if (range) {
      data = data.filter(po => {
        if (!po.createdDate) return false;
        const d = new Date(po.createdDate);
        return d >= range.from && d <= range.to;
      });
    }

    if (this.statusFilter !== 'ALL') {
      data = data.filter(po => po.status === this.statusFilter);
    }

    if (this.supplierFilter) {
      data = data.filter(po => po.supplierName === this.supplierFilter);
    }

    if (this.monthFilter) {
      data = data.filter(po => {
        if (!po.createdDate) return false;
        const d = new Date(po.createdDate);
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
        return key === this.monthFilter;
      });
    }

    const q = this.searchText.trim().toLowerCase();
    if (q) {
      data = data.filter(po =>
        (po.poNumber || '').toLowerCase().includes(q) ||
        (po.supplierName || '').toLowerCase().includes(q)
      );
    }

    this.filteredPOs = data;
    this.currentPage = 1;
    this.rebuildChartConfigs();
  }

  // =========================================================================
  // CHART CLICK-TO-FILTER — clicking a chart segment (or its matching legend
  // row) drills the *entire* report into just that slice: KPI tiles, both pie
  // charts, the monthly trend, and the table below all recompute from the
  // narrowed set, since they're all derived from filteredPOs. Clicking the
  // same segment again — or the chip's × in the active-filter bar — clears it.
  // =========================================================================

  onSupplierChartClick(items: InteractionItem[]): void {
    const item = items?.[0];
    if (!item) return;
    const row = this.bySupplier[item.index];
    if (row) this.filterBySupplier(row);
  }

  onStatusChartClick(items: InteractionItem[]): void {
    const item = items?.[0];
    if (!item) return;
    const row = this.byStatus[item.index];
    if (row) this.filterByStatus(row);
  }

  onMonthChartClick(items: InteractionItem[]): void {
    const item = items?.[0];
    if (!item) return;
    const row = this.monthlyTrend[item.index];
    if (row) this.filterByMonth(row);
  }

  /** Shared by both the pie slice click and the matching legend-row click, so either one filters the table the same way. */
  filterBySupplier(row: BreakdownRow): void {
    if (row.label.startsWith('Other')) return;   // "Other" isn't one real supplier to filter by
    this.supplierFilter = this.supplierFilter === row.label ? null : row.label;
    this.applyFilters();
  }

  filterByStatus(row: BreakdownRow): void {
    this.statusFilter = this.statusFilter === row.label ? 'ALL' : row.label;
    this.applyFilters();
  }

  filterByMonth(row: { key: string; label: string; value: number }): void {
    this.monthFilter = this.monthFilter === row.key ? null : row.key;
    this.applyFilters();
  }

  get hasClickFilters(): boolean {
    return !!this.supplierFilter || !!this.monthFilter || this.statusFilter !== 'ALL';
  }

  clearSupplierFilter(): void { this.supplierFilter = null; this.applyFilters(); }
  clearStatusFilter(): void { this.statusFilter = 'ALL'; this.applyFilters(); }
  clearMonthFilter(): void { this.monthFilter = null; this.applyFilters(); }

  clearAllClickFilters(): void {
    this.supplierFilter = null;
    this.statusFilter = 'ALL';
    this.monthFilter = null;
    this.applyFilters();
  }

  get monthFilterLabel(): string {
    if (!this.monthFilter) return '';
    return this.monthlyTrend.find(m => m.key === this.monthFilter)?.label || this.monthFilter;
  }

  // =========================================================================
  // KPI TILES — committed value counts every non-cancelled/rejected PO in the
  // filtered range; cancelled and rejected orders never became real spend.
  // =========================================================================

  private get committedPOs(): any[] {
    return this.filteredPOs.filter(po => !['CANCELLED', 'REJECTED', 'DRAFT'].includes(po.status));
  }

  get totalPOCount(): number { return this.filteredPOs.length; }

  get totalCommittedValue(): number {
    return this.sum(this.committedPOs, 'grandTotal');
  }

  get totalPaidValue(): number {
    return this.sum(this.filteredPOs, 'totalPaidAmount');
  }

  get totalOutstandingValue(): number {
    const v = this.totalCommittedValue - this.totalPaidValue;
    return v > 0 ? v : 0;
  }

  get activeSupplierCount(): number {
    return new Set(this.committedPOs.map(po => po.supplierName)).size;
  }

  get averagePOValue(): number {
    const n = this.committedPOs.length;
    return n > 0 ? this.totalCommittedValue / n : 0;
  }

  private sum(list: any[], field: string): number {
    return list.reduce((total, item) => total + (Number(item[field]) || 0), 0);
  }

  // =========================================================================
  // BREAKDOWNS — sorted rows computed on the fly, fed to both the pie charts
  // below and the clickable legend list next to each one (so a click on
  // either the slice or the matching list row filters the same way).
  // =========================================================================

  private breakdownBy(keyFn: (po: any) => string): BreakdownRow[] {
    const map = new Map<string, { count: number; value: number }>();
    this.committedPOs.forEach(po => {
      const key = keyFn(po) || 'Unspecified';
      const entry = map.get(key) || { count: 0, value: 0 };
      entry.count += 1;
      entry.value += Number(po.grandTotal) || 0;
      map.set(key, entry);
    });

    const total = this.totalCommittedValue;
    const rows: BreakdownRow[] = Array.from(map.entries())
      .map(([label, v]) => ({
        label, count: v.count, value: v.value,
        percent: total > 0 ? Math.round((v.value / total) * 100) : 0
      }))
      .sort((a, b) => b.value - a.value);

    return rows;
  }

  get bySupplier(): BreakdownRow[] {
    const rows = this.breakdownBy(po => po.supplierName);
    return this.capWithOther(rows, 6);
  }

  get byStatus(): BreakdownRow[] {
    return this.breakdownBy(po => po.status);
  }

  /** Top N rows kept individually, the rest folded into a single "Other" row — same
   *  convention the old spend-analysis screen used, just without the SVG machinery. */
  private capWithOther(rows: BreakdownRow[], topN: number): BreakdownRow[] {
    if (rows.length <= topN) return rows;
    const top = rows.slice(0, topN);
    const rest = rows.slice(topN);
    const other: BreakdownRow = {
      label: `Other (${rest.length})`,
      count: rest.reduce((s, r) => s + r.count, 0),
      value: rest.reduce((s, r) => s + r.value, 0),
      percent: rest.reduce((s, r) => s + r.percent, 0)
    };
    return [...top, other];
  }

  get maxBreakdownValue(): number {
    const rows = [...this.bySupplier];
    return rows.reduce((m, r) => Math.max(m, r.value), 0);
  }

  barWidthPercent(row: BreakdownRow): number {
    const max = this.maxBreakdownValue;
    if (!max) return 0;
    const pct = (row.value / max) * 100;
    return pct > 0 && pct < 2 ? 2 : pct;
  }

  // ── Monthly trend — committed value by calendar month, oldest first ────────

  get monthlyTrend(): { key: string; label: string; value: number }[] {
    const map = new Map<string, number>();
    this.committedPOs.forEach(po => {
      if (!po.createdDate) return;
      const d = new Date(po.createdDate);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      map.set(key, (map.get(key) || 0) + (Number(po.grandTotal) || 0));
    });
    return Array.from(map.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => {
        const [y, m] = key.split('-');
        const label = new Date(Number(y), Number(m) - 1, 1)
          .toLocaleDateString('en-GB', { month: 'short', year: '2-digit' });
        return { key, label, value };
      });
  }

  // =========================================================================
  // CHART.JS CONFIG — three charts (supplier pie, status pie, monthly bar).
  //
  // IMPORTANT: data/options are cached plain fields, rebuilt only when
  // applyFilters() runs — never getters. CoreUI's <c-chart> dirty-checks these
  // inputs by reference; a getter (or a method call in the template) hands it
  // a brand-new object on every Angular change-detection cycle, which this
  // page has running once a second just from the "Session expires in" clock,
  // so the chart would tear down and fully redraw non-stop. Caching avoids that.
  // =========================================================================

  /** A fixed, distinguishable palette — reused across all pie slices in order. */
  private readonly chartPalette = [
    '#6c63ff', '#00bcd4', '#43a047', '#ffb300', '#e53935',
    '#3f51b5', '#8e24aa', '#00897b', '#fb8c00', '#607d8b'
  ];

  private readonly statusColorMap: Record<string, string> = {
    DRAFT: '#94a3b8', PENDING_APPROVAL: '#f5b301', APPROVED: '#0dcaf0',
    RELEASED: '#43a047', COMPLETED: '#43a047', CLOSED: '#2e7d32',
    REJECTED: '#e53935', FORECLOSED: '#c62828', CANCELLED: '#78909c'
  };

  supplierChartData: any = { labels: [], datasets: [{ data: [] }] };
  statusChartData: any = { labels: [], datasets: [{ data: [] }] };
  monthChartData: any = { labels: [], datasets: [{ data: [] }] };
  supplierChartOptions: any = {};
  statusChartOptions: any = {};
  monthChartOptions: any = {};

  /** Called once at the end of applyFilters() — the single place all three charts' source data can change. */
  private rebuildChartConfigs(): void {
    const supplierRows = this.bySupplier;
    this.supplierChartData = {
      labels: supplierRows.map(r => r.label),
      datasets: [{
        data: supplierRows.map(r => r.value),
        backgroundColor: supplierRows.map((r, i) => r.label.startsWith('Other') ? '#cfd3e6' : this.chartPalette[i % this.chartPalette.length]),
        borderColor: '#fff',
        borderWidth: 2
      }]
    };
    this.supplierChartOptions = this.buildPieOptions(supplierRows);

    const statusRows = this.byStatus;
    this.statusChartData = {
      labels: statusRows.map(r => r.label),
      datasets: [{
        data: statusRows.map(r => r.value),
        backgroundColor: statusRows.map(r => this.statusColorMap[r.label] || '#94a3b8'),
        borderColor: '#fff',
        borderWidth: 2
      }]
    };
    this.statusChartOptions = this.buildPieOptions(statusRows);

    const monthRows = this.monthlyTrend;
    this.monthChartData = {
      labels: monthRows.map(r => r.label),
      datasets: [{
        label: 'Committed Spend',
        data: monthRows.map(r => r.value),
        backgroundColor: monthRows.map(r => r.key === this.monthFilter ? '#4c1d95' : '#6c63ff'),
        borderRadius: 4,
        maxBarThickness: 42
      }]
    };
    this.monthChartOptions = {
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (ctx: any) => ` ${this.full(ctx.parsed.y)}` } }
      },
      scales: {
        y: { ticks: { callback: (v: any) => this.compact(Number(v)) } }
      },
      onHover: (evt: any, elements: any[]) => {
        const el = evt?.native?.target as HTMLElement | undefined;
        if (el) el.style.cursor = elements.length ? 'pointer' : 'default';
      }
    };
  }

  private buildPieOptions(rows: BreakdownRow[]): any {
    const totalVal = this.totalCommittedValue;
    return {
      // The wrapper div is a fixed 180x180 square (see .chart-pie-wrap) — let the
      // canvas fill it exactly rather than Chart.js trying to compute its own
      // aspect ratio, which is what was rendering these as thin slivers inside
      // the flex layout next to the legend list.
      maintainAspectRatio: false,
      plugins: {
        // The breakdown list beside each chart already acts as a clickable legend
        // with count/value/percent — showing Chart.js's own legend too would just
        // repeat the same labels a second time.
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx: any) => {
              const row = rows[ctx.dataIndex];
              const pct = totalVal > 0 ? Math.round((row.value / totalVal) * 100) : 0;
              return ` ${row.label}: ${this.full(row.value)} (${pct}%)`;
            }
          }
        }
      },
      onHover: (evt: any, elements: any[]) => {
        const el = evt?.native?.target as HTMLElement | undefined;
        if (el) el.style.cursor = elements.length ? 'pointer' : 'default';
      }
    };
  }

  // =========================================================================
  // DISPLAY
  // =========================================================================

  compact(value: number): string {
    const n = Number(value) || 0;
    if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
    if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
    if (n >= 1000) return '₹' + (n / 1000).toFixed(1) + 'K';
    return '₹' + n.toFixed(0);
  }

  full(value: number): string {
    return '₹' + (Number(value) || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  statusColor(status: string): string {
    switch (status) {
      case 'DRAFT':                 return 'secondary';
      case 'PENDING_APPROVAL':      return 'warning';
      case 'APPROVED':              return 'info';
      case 'RELEASED':
      case 'COMPLETED':
      case 'CLOSED':                return 'success';
      case 'REJECTED':
      case 'FORECLOSED':            return 'danger';
      default:                      return 'primary';
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

  trackById(_i: number, row: any): any { return row?.id; }
}
