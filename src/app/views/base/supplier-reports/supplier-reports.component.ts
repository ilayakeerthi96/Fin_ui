import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ContainerComponent, RowComponent, ColComponent,
  CardComponent, CardBodyComponent, CardHeaderComponent, SpinnerComponent
} from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { InteractionItem } from 'chart.js';
import { AuthService } from '../../../shared/service/AuthService';
import { DataService } from '../../../shared/service/DataService';

/**
 * Supplier's own Reports page — a standalone menu item (not a dashboard tab), showing
 * only this supplier's own POs and invoices with the buyer. Built the same way as the
 * buyer-side "Purchase Order Report" (spend-analysis), pie/bar charts and click-to-filter
 * included: everything is computed client-side from the two lists already served by the
 * existing supplier-dashboard endpoints, so no new backend work was needed.
 */
@Component({
  selector: 'app-supplier-reports',
  standalone: true,
  imports: [
    CommonModule, ContainerComponent, RowComponent, ColComponent,
    CardComponent, CardBodyComponent, CardHeaderComponent, SpinnerComponent, ChartjsComponent
  ],
  templateUrl: './supplier-reports.component.html',
  styleUrls: ['./supplier-reports.component.css']
})
export class SupplierReportsComponent implements OnInit {

  supplierId   = 0;
  companyName  = '';
  isLoading    = true;
  errorMessage = '';

  poList: any[]      = [];
  invoiceList: any[] = [];

  /** Set by clicking a chart segment (or its matching legend row) — see the click handlers below. */
  statusFilter: string | null = null;
  monthFilter: string | null = null;   // 'YYYY-MM'

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.companyName = localStorage.getItem('supplierName') || '';
    const sid = this.authService.getSupplierId();
    this.supplierId = sid ? sid : Number(localStorage.getItem('supplierId') || '0');

    if (!this.supplierId) {
      this.errorMessage = 'Supplier ID not found. Please login again.';
      this.isLoading = false;
      return;
    }
    this.loadData();
  }

  private loadData(): void {
    this.isLoading = true;
    let pending = 2;
    const done = () => { if (--pending === 0) { this.isLoading = false; this.rebuildChartConfigs(); } };

    this.dataService.getApprovedPOsForSupplier(this.supplierId).subscribe({
      next: (r: any) => { this.poList = r?.success ? (r.data || []) : []; done(); },
      error: () => { this.poList = []; done(); }
    });

    this.dataService.getSupplierInvoices(this.supplierId).subscribe({
      next: (r: any) => { this.invoiceList = r?.success ? (r.data || []) : []; done(); },
      error: () => { this.invoiceList = []; done(); }
    });
  }

  private monthKeyOf(raw: string): string | null {
    if (!raw) return null;
    const d = new Date(raw);
    if (isNaN(d.getTime())) return null;
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  }

  // =========================================================================
  // FILTERED LISTS — the single source every KPI, chart, and detail table
  // below reads from. Clicking a chart segment sets statusFilter/monthFilter,
  // which narrows these, which in turn recomputes everything downstream —
  // same drill-down behaviour as the buyer-side Purchase Order Report.
  // =========================================================================

  get filteredInvoiceList(): any[] {
    let data = [...this.invoiceList].sort((a, b) => {
      const bd = new Date(b.invoiceDate || b.submittedAt || b.createdAt || 0).getTime();
      const ad = new Date(a.invoiceDate || a.submittedAt || a.createdAt || 0).getTime();
      return bd - ad;
    });
    if (this.statusFilter) data = data.filter(i => i.status === this.statusFilter);
    if (this.monthFilter) data = data.filter(i => this.monthKeyOf(i.invoiceDate || i.submittedAt || i.createdAt) === this.monthFilter);
    return data;
  }

  get filteredPOList(): any[] {
    let data = [...this.poList].sort((a, b) =>
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
    if (this.monthFilter) data = data.filter(po => this.monthKeyOf(po.createdAt) === this.monthFilter);
    return data;
  }

  // Kept as the template's names for the detail tables, unchanged from before.
  get sortedPOList(): any[] { return this.filteredPOList; }
  get sortedInvoiceList(): any[] { return this.filteredInvoiceList; }

  // =========================================================================
  // CHART CLICK-TO-FILTER
  // =========================================================================

  onStatusChartClick(items: InteractionItem[]): void {
    const item = items?.[0];
    if (!item) return;
    const row = this.reportInvoiceStatusBreakdown[item.index];
    if (row) this.filterByStatus(row);
  }

  onMonthChartClick(items: InteractionItem[]): void {
    const item = items?.[0];
    if (!item) return;
    const row = this.reportMonthlyTrend[item.index];
    if (row) this.filterByMonth(row);
  }

  filterByStatus(row: { status: string }): void {
    this.statusFilter = this.statusFilter === row.status ? null : row.status;
    this.rebuildChartConfigs();
  }

  filterByMonth(row: { key: string }): void {
    this.monthFilter = this.monthFilter === row.key ? null : row.key;
    this.rebuildChartConfigs();
  }

  get hasClickFilters(): boolean {
    return !!this.statusFilter || !!this.monthFilter;
  }

  clearStatusFilter(): void { this.statusFilter = null; this.rebuildChartConfigs(); }
  clearMonthFilter(): void { this.monthFilter = null; this.rebuildChartConfigs(); }

  clearAllClickFilters(): void {
    this.statusFilter = null;
    this.monthFilter = null;
    this.rebuildChartConfigs();
  }

  get monthFilterLabel(): string {
    if (!this.monthFilter) return '';
    return this.reportMonthlyTrend.find(m => m.key === this.monthFilter)?.label
      || this.allMonthsUnfiltered.find(m => m.key === this.monthFilter)?.label
      || this.monthFilter;
  }

  /** Every month with invoice activity, ignoring the current filters — used only so the
   *  active-filter chip still shows a readable label even after its own bar is filtered away. */
  private get allMonthsUnfiltered(): { key: string; label: string }[] {
    const map = new Map<string, string>();
    this.invoiceList.forEach(inv => {
      const key = this.monthKeyOf(inv.invoiceDate || inv.submittedAt || inv.createdAt);
      if (!key) return;
      const [y, m] = key.split('-');
      map.set(key, new Date(Number(y), Number(m) - 1, 1).toLocaleDateString('en-GB', { month: 'short', year: '2-digit' }));
    });
    return Array.from(map.entries()).map(([key, label]) => ({ key, label }));
  }

  // =========================================================================
  // REPORT METRICS — all derived from filteredInvoiceList / filteredPOList
  // =========================================================================

  get reportCurrencyCode(): string {
    return this.invoiceList[0]?.currencyCode || this.poList[0]?.currencyCode || 'INR';
  }

  get reportPOCount(): number {
    return this.filteredPOList.length;
  }

  /** DRAFT invoices haven't actually been sent to the buyer yet, so they don't count as "submitted". */
  get reportInvoiceCount(): number {
    return this.filteredInvoiceList.filter(i => i.status !== 'DRAFT').length;
  }

  get reportPaidValue(): number {
    return this.filteredInvoiceList
      .filter(i => i.status === 'PAID')
      .reduce((sum, i) => sum + (Number(i.grandTotal) || 0), 0);
  }

  /** Submitted or Approved and not yet paid — money the buyer still owes. */
  get reportPendingValue(): number {
    return this.filteredInvoiceList
      .filter(i => i.status === 'SUBMITTED' || i.status === 'APPROVED')
      .reduce((sum, i) => sum + (Number(i.grandTotal) || 0), 0);
  }

  reportStatusBadgeClass(status: string): string {
    switch (status) {
      case 'DRAFT':           return 'bg-secondary';
      case 'SUBMITTED':       return 'bg-primary';
      case 'APPROVED':
      case 'PAID':            return 'bg-success';
      case 'REJECTED':        return 'bg-warning text-dark';
      case 'REJECTED_CLOSED': return 'bg-danger';
      default:                return 'bg-secondary';
    }
  }

  private readonly statusColorMap: Record<string, string> = {
    DRAFT: '#94a3b8', SUBMITTED: '#0d6efd', APPROVED: '#43a047', PAID: '#2e7d32',
    REJECTED: '#f5b301', REJECTED_CLOSED: '#e53935'
  };

  get reportInvoiceStatusBreakdown(): { status: string; label: string; badgeClass: string; count: number; value: number }[] {
    const order = ['DRAFT', 'SUBMITTED', 'APPROVED', 'PAID', 'REJECTED', 'REJECTED_CLOSED'];
    return order
      .map(status => {
        const rows = this.filteredInvoiceList.filter(i => i.status === status);
        return {
          status,
          label: this.getInvoiceStatusLabel(status),
          badgeClass: this.reportStatusBadgeClass(status),
          count: rows.length,
          value: rows.reduce((sum, i) => sum + (Number(i.grandTotal) || 0), 0)
        };
      })
      .filter(row => row.count > 0);
  }

  /** Invoice value by calendar month, oldest first — same approach as the buyer-side report. */
  get reportMonthlyTrend(): { key: string; label: string; value: number }[] {
    const map = new Map<string, number>();
    this.filteredInvoiceList.forEach(inv => {
      const key = this.monthKeyOf(inv.invoiceDate || inv.submittedAt || inv.createdAt);
      if (!key) return;
      map.set(key, (map.get(key) || 0) + (Number(inv.grandTotal) || 0));
    });
    return Array.from(map.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => {
        const [y, m] = key.split('-');
        const label = new Date(Number(y), Number(m) - 1, 1).toLocaleDateString('en-GB', { month: 'short', year: '2-digit' });
        return { key, label, value };
      });
  }

  // =========================================================================
  // CHART.JS CONFIG — cached plain fields, rebuilt only on load/filter change.
  //
  // IMPORTANT: never bind [data]/[options] to a getter or a method call in the
  // template. <c-chart> dirty-checks those inputs by reference, and this page
  // (like every authenticated page here) has a "Session expires in" clock
  // ticking every second, driving Angular change detection constantly — a
  // getter would hand it a brand-new object every tick and the chart would
  // tear down and redraw non-stop. Caching avoids that entirely.
  // =========================================================================

  statusChartData: any = { labels: [], datasets: [{ data: [] }] };
  monthChartData: any = { labels: [], datasets: [{ data: [] }] };
  statusChartOptions: any = {};
  monthChartOptions: any = {};

  private rebuildChartConfigs(): void {
    const statusRows = this.reportInvoiceStatusBreakdown;
    this.statusChartData = {
      labels: statusRows.map(r => r.label),
      datasets: [{
        data: statusRows.map(r => r.value),
        backgroundColor: statusRows.map(r => this.statusColorMap[r.status] || '#94a3b8'),
        borderColor: '#fff',
        borderWidth: 2
      }]
    };
    const totalVal = statusRows.reduce((s, r) => s + r.value, 0);
    this.statusChartOptions = {
      maintainAspectRatio: false,
      plugins: {
        // The breakdown list beside the chart already acts as a clickable legend
        // with count/value — showing Chart.js's own legend too would just repeat it.
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx: any) => {
              const row = statusRows[ctx.dataIndex];
              const pct = totalVal > 0 ? Math.round((row.value / totalVal) * 100) : 0;
              return ` ${row.label}: ${this.formatCurrency(row.value, this.reportCurrencyCode)} (${pct}%)`;
            }
          }
        }
      },
      onHover: (evt: any, elements: any[]) => {
        const el = evt?.native?.target as HTMLElement | undefined;
        if (el) el.style.cursor = elements.length ? 'pointer' : 'default';
      }
    };

    const monthRows = this.reportMonthlyTrend;
    this.monthChartData = {
      labels: monthRows.map(r => r.label),
      datasets: [{
        label: 'Invoice Value',
        data: monthRows.map(r => r.value),
        backgroundColor: monthRows.map(r => r.key === this.monthFilter ? '#4c1d95' : '#6c63ff'),
        borderRadius: 4,
        maxBarThickness: 42
      }]
    };
    this.monthChartOptions = {
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (ctx: any) => ` ${this.formatCurrency(ctx.parsed.y, this.reportCurrencyCode)}` } }
      },
      scales: { y: { beginAtZero: true } },
      onHover: (evt: any, elements: any[]) => {
        const el = evt?.native?.target as HTMLElement | undefined;
        if (el) el.style.cursor = elements.length ? 'pointer' : 'default';
      }
    };
  }

  // =========================================================================
  // DISPLAY HELPERS
  // =========================================================================

  poInvoiceStatusLabel(po: any): string {
    return po.hasInvoice ? this.getInvoiceStatusLabel(po.invoiceStatus) : 'No Invoice';
  }

  poInvoiceStatusBadgeClass(po: any): string {
    return po.hasInvoice ? this.reportStatusBadgeClass(po.invoiceStatus) : 'bg-light text-dark';
  }

  formatDate(d: string): string {
    if (!d) return 'N/A';
    try { return new Date(d).toLocaleDateString('en-GB'); } catch { return 'N/A'; }
  }

  getInvoiceStatusLabel(status: string): string {
    const m: any = { DRAFT: 'Draft', SUBMITTED: 'Submitted', APPROVED: 'Approved', PAID: 'Paid', REJECTED: 'Rejected', REJECTED_CLOSED: 'Closed' };
    return m[status] || status;
  }

  private getSymbolForCode(code: string): string {
    const m: Record<string, string> = {
      INR: '₹', USD: '$', EUR: '€', GBP: '£', AED: 'د.إ', SGD: 'S$',
      JPY: '¥', CNY: '¥', CHF: 'Fr', CAD: 'C$', AUD: 'A$'
    };
    return m[code] || code;
  }

  formatCurrency(amount: number | null, currencyCode?: string): string {
    const code      = currencyCode || 'INR';
    const symbol    = this.getSymbolForCode(code);
    const val       = Number(amount ?? 0);
    const formatted = val.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const rtl       = ['AED', 'SAR', 'QAR', 'KWD', 'BHD', 'OMR', 'IRR', 'IQD', 'JOD', 'LBP'];
    return rtl.includes(code) ? formatted + ' ' + symbol : symbol + ' ' + formatted;
  }
}
