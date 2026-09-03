import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../../../shared/service/DataService';
import { AuthService } from '../../../shared/service/AuthService';

/** One donut segment, with its pre-computed SVG arc path. */
interface Segment {
  label: string;
  value: number;
  percent: number;
  color: string;
  path: string;
}

interface Donut {
  key: string;
  title: string;
  subtitle: string;
  segments: Segment[];
  total: number;
}

/**
 * Consolidated spend analysis — where the money actually goes, across suppliers, categories and
 * business units.
 *
 * Charts are hand-rolled inline SVG rather than a charting library: the palette, the 2px gaps
 * between segments and the label placement all have to be exact, and four small donuts plus one
 * bar chart is far less code than bending a library's defaults into the same shape.
 */
@Component({
  selector: 'app-spend-analysis',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './spend-analysis.component.html',
  styleUrls: ['./spend-analysis.component.css']
})
export class SpendAnalysisComponent implements OnInit {

  /** The same screen serves both sides — a buyer's spend and a supplier's income. */
  isSupplierMode = false;
  buyerId = 0;
  supplierId = 0;
  fyStartYear = 0;
  fyOptions: number[] = [];
  financialYear = '';

  /** Sentinel value for the "All Time" option in the period selector — every year with committed
   *  spend, not just one financial year. */
  readonly ALL_TIME = -1;
  get isAllTimeView(): boolean { return this.fyStartYear === this.ALL_TIME; }

  /** Sentinel for the "Custom Range" option — an arbitrary From/To instead of a financial year. */
  readonly CUSTOM_RANGE = -2;
  get isCustomRangeView(): boolean { return this.fyStartYear === this.CUSTOM_RANGE; }
  customFrom = '';
  customTo = '';

  kpis: any = null;
  kpiTiles: { label: string; value: string; foot: string; primary?: boolean }[] = [];
  donuts: Donut[] = [];
  monthlyTrend: any[] = [];
  supplierTable: any[] = [];

  isLoading = false;
  errorMessage = '';

  // ── Copy that differs between the two sides ──
  get pageTitle(): string { return this.isSupplierMode ? 'Revenue Analysis' : 'Spend Analysis'; }
  get pageSubtitle(): string {
    return this.isSupplierMode
      ? 'Where your income comes from — by customer, order type and delivery site'
      : 'Categorised spend across suppliers, categories and business units';
  }
  get trendTitle(): string {
    if (this.isAllTimeView) {
      return this.isSupplierMode ? 'Order Value Won by Month — All Time' : 'Committed Spend by Month — All Time';
    }
    return this.isSupplierMode ? 'Order Value Won by Month' : 'Committed Spend by Month';
  }
  get trendSubtitle(): string {
    if (this.isAllTimeView) {
      return this.isSupplierMode
        ? 'Every month customers have raised orders on you, from the very first order'
        : 'Every month you have raised orders in, from the very first order';
    }
    return this.isSupplierMode
      ? 'When customers raised orders on you across ' + this.financialYear
      : 'When orders were raised across ' + this.financialYear;
  }
  get rankingTitle(): string {
    return this.isSupplierMode ? 'Customer Revenue Ranking' : 'Supplier Spend Ranking';
  }
  get rankingSubtitle(): string {
    return this.isSupplierMode
      ? 'Every customer, not just the top five shown in the chart'
      : 'Every supplier, not just the top five shown in the chart';
  }
  get counterpartyColumn(): string { return this.isSupplierMode ? 'Customer' : 'Supplier'; }
  get valueColumn(): string { return this.isSupplierMode ? 'Revenue' : 'Spend'; }
  get emptyMessage(): string {
    return this.isSupplierMode
      ? 'No order value recorded for ' + this.financialYear + '.'
      : 'No committed spend recorded for ' + this.financialYear + '.';
  }
  get emptyHint(): string {
    return this.isSupplierMode
      ? 'Income is counted from purchase orders your customers have approved or beyond — drafts, '
        + 'cancellations and rejected orders are excluded. Try another financial year.'
      : 'Spend is counted from purchase orders that have been approved or beyond — drafts, '
        + 'cancellations and rejected orders are excluded. Try another financial year.';
  }
  get footNote(): string {
    return this.isSupplierMode
      ? 'Order Value Won is the value of purchase orders your customers have actually issued — approved '
        + 'or beyond. Invoiced is what you have billed, and Received is what has been settled. Each '
        + 'breakdown shows the top five with the remainder grouped as "Other" — the full customer list '
        + 'is in the ranking table above.'
      : 'Committed is the value of purchase orders actually issued — approved or beyond; drafts, '
        + 'cancelled and rejected orders are excluded. Invoiced is what suppliers have billed, and Paid '
        + 'is what has been settled. Each breakdown shows the top five with the remainder grouped as '
        + '"Other" — the full supplier list is in the ranking table above.';
  }

  /** Show the full supplier ranking — the table view the capped charts fall back on. */
  showTable = false;

  // ── Spares card drill-down ──────────────────────────────────────────
  showSparesModal = false;
  isLoadingSpares = false;
  sparesData: any = null;
  sparesFrom = '';
  sparesTo = '';
  get sparesLabel(): string { return this.isSupplierMode ? 'Spares Revenue' : 'Spares Spend'; }

  /* Categorical slots in fixed order — a category keeps its colour regardless of how many
   * series survive a filter, and slots are never cycled. "Other" always takes the grey. */
  private readonly SERIES = ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4', '#008300'];
  private readonly OTHER_COLOR = '#8d8d86';

  constructor(private dataService: DataService, private authService: AuthService) {}

  ngOnInit(): void {
    this.isSupplierMode = this.authService.isSupplier();

    const now = new Date();
    const currentFy = now.getMonth() + 1 >= 4 ? now.getFullYear() : now.getFullYear() - 1;
    this.fyOptions = [currentFy - 2, currentFy - 1, currentFy, currentFy + 1];
    // Lands on the full history by default — a single financial year is still one click away
    // via the Period dropdown, but the first thing shown is every year, not just the current one.
    this.fyStartYear = this.ALL_TIME;

    if (this.isSupplierMode) {
      this.supplierId = this.authService.getSupplierId() || 0;
      if (this.supplierId) this.load();
      else this.errorMessage = 'No supplier account found. Please sign in again.';
    } else {
      this.buyerId = Number(localStorage.getItem('buyerId')) || 0;
      if (this.buyerId) this.load();
      else this.errorMessage = 'No buyer account found. Please sign in again.';
    }
  }

  load(): void {
    this.isLoading = true;
    this.errorMessage = '';

    const source$ = this.isCustomRangeView
      ? (this.isSupplierMode
          ? this.dataService.getSupplierRevenueAnalysisCustomRange(this.supplierId, this.customFrom, this.customTo)
          : this.dataService.getSpendAnalysisCustomRange(this.buyerId, this.customFrom, this.customTo))
      : this.isAllTimeView
      ? (this.isSupplierMode
          ? this.dataService.getSupplierRevenueAnalysisAllTime(this.supplierId)
          : this.dataService.getSpendAnalysisAllTime(this.buyerId))
      : (this.isSupplierMode
          ? this.dataService.getSupplierRevenueAnalysis(this.supplierId, this.fyStartYear)
          : this.dataService.getSpendAnalysis(this.buyerId, this.fyStartYear));

    source$.subscribe({
      next: (res: any) => {
        const d = res?.success ? res.data : (res?.data || res);
        this.kpis = d?.kpis || null;
        this.financialYear = d?.financialYear || '';
        this.monthlyTrend = d?.monthlyTrend || [];
        this.supplierTable = d?.counterpartyTable || d?.supplierTable || [];
        this.donuts = this.isSupplierMode
          ? [
              this.buildDonut('counterparty', 'Revenue by Customer', 'Who your income comes from', d?.byCounterparty),
              this.buildDonut('potype', 'Revenue by Order Type', 'Goods, service, contract or project', d?.byPoType),
              this.buildDonut('unit', 'Revenue by Delivery Site', 'Where you deliver', d?.byBusinessUnit),
              this.buildDonut('status', 'Order Book by Status', 'Where your orders sit in fulfilment', d?.byOrderStatus),
              this.buildDonut('spares', 'Revenue from Spares', 'Which spare parts you are supplying', d?.bySparesItem)
            ]
          : [
              this.buildDonut('counterparty', 'Spend by Supplier', 'Who the money goes to', d?.byCounterparty || d?.bySupplier),
              this.buildDonut('category', 'Spend by Category', 'What kind of supply it is', d?.byCategory),
              this.buildDonut('unit', 'Spend by Business Unit', 'Which site or unit is spending', d?.byBusinessUnit),
              this.buildDonut('potype', 'Spend by Order Type', 'Goods, service, contract or project', d?.byPoType),
              this.buildDonut('spares', 'Spend by Spares', 'Which spare parts you are buying', d?.bySparesItem)
            ];
        this.buildKpiTiles();
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errorMessage = this.isSupplierMode
          ? (err?.error?.message || 'Failed to load the revenue analysis.')
          : (err?.error?.message || 'Failed to load the spend analysis.');
        this.isLoading = false;
      }
    });
  }

  /** Tiles are built here rather than hardcoded in the template — the two sides use the same
   *  five numbers under different names, so branching once in code beats duplicating markup. */
  private buildKpiTiles(): void {
    const k = this.kpis;
    if (!k) { this.kpiTiles = []; return; }

    const orders = `${k.poCount} purchase order${k.poCount === 1 ? '' : 's'}`;
    const invoices = `${k.invoiceCount} invoice${k.invoiceCount === 1 ? '' : 's'}`;
    const counterparties = k.counterpartyCount ?? k.supplierCount ?? 0;

    this.kpiTiles = this.isSupplierMode
      ? [
          { label: 'Order Value Won', value: this.compact(k.committed),   foot: orders, primary: true },
          { label: 'Invoiced',        value: this.compact(k.invoiced),    foot: invoices },
          { label: 'Received',        value: this.compact(k.paid),        foot: 'Settled by customers' },
          { label: 'Awaiting Payment',value: this.compact(k.outstanding), foot: 'Invoiced, not yet received' },
          { label: 'Active Customers',value: String(counterparties),      foot: 'Avg order ' + this.compact(k.averagePoValue) }
        ]
      : [
          { label: 'Committed Spend', value: this.compact(k.committed),   foot: orders, primary: true },
          { label: 'Invoiced',        value: this.compact(k.invoiced),    foot: invoices },
          { label: 'Paid',            value: this.compact(k.paid),        foot: 'Settled with suppliers' },
          { label: 'Outstanding',     value: this.compact(k.outstanding), foot: 'Invoiced, not yet paid' },
          { label: 'Active Suppliers',value: String(counterparties),      foot: 'Avg order ' + this.compact(k.averagePoValue) }
        ];
  }

  /** Picking a financial year or All Time loads immediately, same as before. Picking Custom Range
   *  just reveals the From/To inputs — pre-filled with the current financial year so Apply works
   *  right away — and waits for the user to press Apply rather than firing on an empty range. */
  onYearChange(): void {
    if (this.isCustomRangeView) {
      if (!this.customFrom || !this.customTo) {
        const now = new Date();
        const currentFy = now.getMonth() + 1 >= 4 ? now.getFullYear() : now.getFullYear() - 1;
        this.customFrom = `${currentFy}-04-01`;
        this.customTo = `${currentFy + 1}-03-31`;
      }
      return;
    }
    this.load();
  }

  applyCustomRange(): void {
    if (!this.customFrom || !this.customTo) {
      this.errorMessage = 'Pick both a From and a To date for the custom range.';
      return;
    }
    this.load();
  }

  // ── Spares card drill-down ──────────────────────────────────────────

  /** Opens the Spares detail modal, defaulting the date filter to whatever period is currently
   *  selected on the dashboard (a specific financial year, or blank/unbounded for All Time). */
  openSparesModal(): void {
    if (this.isAllTimeView) {
      this.sparesFrom = '';
      this.sparesTo = '';
    } else if (this.isCustomRangeView) {
      this.sparesFrom = this.customFrom;
      this.sparesTo = this.customTo;
    } else {
      this.sparesFrom = `${this.fyStartYear}-04-01`;
      this.sparesTo = `${this.fyStartYear + 1}-03-31`;
    }
    this.showSparesModal = true;
    this.loadSparesDetail();
  }

  closeSparesModal(): void {
    this.showSparesModal = false;
    this.sparesData = null;
  }

  /** Re-runs the drill-down with whatever from/to the user has typed into the filter — lets them
   *  narrow to a week, widen to years, or clear both for the full history. */
  applySparesFilter(): void { this.loadSparesDetail(); }

  clearSparesFilter(): void {
    this.sparesFrom = '';
    this.sparesTo = '';
    this.loadSparesDetail();
  }

  private loadSparesDetail(): void {
    this.isLoadingSpares = true;
    this.errorMessage = '';

    const from = this.sparesFrom || null;
    const to = this.sparesTo || null;
    const source$ = this.isSupplierMode
      ? this.dataService.getSupplierSparesDetail(this.supplierId, from, to)
      : this.dataService.getSparesDetail(this.buyerId, from, to);

    source$.subscribe({
      next: (res: any) => {
        this.sparesData = res?.success ? res.data : (res?.data || res);
        this.isLoadingSpares = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to load the spares breakdown.';
        this.isLoadingSpares = false;
        this.showSparesModal = false;
      }
    });
  }

  // ── Donut card drill-down (Supplier/Customer, Category, Business Unit, Order Type, Status) ──
  showBreakdownModal = false;
  isLoadingBreakdown = false;
  breakdownData: any = null;
  breakdownDimension = '';
  breakdownTitle = '';
  breakdownFrom = '';
  breakdownTo = '';

  /** Every donut card is clickable — Spares reuses the existing Spares modal (it already has this
   *  exact filter-by-date + detailed-view behaviour); every other donut opens the generic
   *  breakdown modal, keyed by the same dimension the donut itself was grouped by. */
  openDonutDetail(d: Donut): void {
    if (d.key === 'spares') { this.openSparesModal(); return; }

    this.breakdownDimension = d.key;
    this.breakdownTitle = d.title;
    if (this.isAllTimeView) {
      this.breakdownFrom = '';
      this.breakdownTo = '';
    } else if (this.isCustomRangeView) {
      this.breakdownFrom = this.customFrom;
      this.breakdownTo = this.customTo;
    } else {
      this.breakdownFrom = `${this.fyStartYear}-04-01`;
      this.breakdownTo = `${this.fyStartYear + 1}-03-31`;
    }
    this.showBreakdownModal = true;
    this.loadBreakdownDetail();
  }

  closeBreakdownModal(): void {
    this.showBreakdownModal = false;
    this.breakdownData = null;
  }

  applyBreakdownFilter(): void { this.loadBreakdownDetail(); }

  clearBreakdownFilter(): void {
    this.breakdownFrom = '';
    this.breakdownTo = '';
    this.loadBreakdownDetail();
  }

  private loadBreakdownDetail(): void {
    this.isLoadingBreakdown = true;
    this.errorMessage = '';

    const from = this.breakdownFrom || null;
    const to = this.breakdownTo || null;
    const source$ = this.isSupplierMode
      ? this.dataService.getSupplierSpendBreakdownDetail(this.supplierId, this.breakdownDimension, from, to)
      : this.dataService.getSpendBreakdownDetail(this.buyerId, this.breakdownDimension, from, to);

    source$.subscribe({
      next: (res: any) => {
        this.breakdownData = res?.success ? res.data : (res?.data || res);
        this.isLoadingBreakdown = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to load the detailed breakdown.';
        this.isLoadingBreakdown = false;
        this.showBreakdownModal = false;
      }
    });
  }

  // ── Donut geometry ──────────────────────────────────────────────────

  private buildDonut(key: string, title: string, subtitle: string, raw: any[]): Donut {
    const rows = (raw || []).filter(r => Number(r.value) > 0);
    const total = rows.reduce((s, r) => s + Number(r.value || 0), 0);

    const segments: Segment[] = [];
    let cursor = 0;
    rows.forEach((r, i) => {
      const value = Number(r.value || 0);
      const fraction = total > 0 ? value / total : 0;
      segments.push({
        label: r.label,
        value,
        percent: Number(r.percent || 0),
        color: r.isOther ? this.OTHER_COLOR : this.SERIES[i % this.SERIES.length],
        path: this.arcPath(cursor, cursor + fraction)
      });
      cursor += fraction;
    });

    return { key, title, subtitle, segments, total };
  }

  /**
   * Donut arc between two fractions of the whole (0–1), as an SVG path on a 100×100 box.
   * A small angular inset leaves a 2px surface gap between neighbouring segments so they read
   * as separate marks rather than one continuous ring.
   */
  private arcPath(startFraction: number, endFraction: number): string {
    const cx = 50, cy = 50, rOuter = 42, rInner = 26;
    const GAP_DEG = 1.2;

    let a0 = startFraction * 360;
    let a1 = endFraction * 360;
    const sweep = a1 - a0;

    // Only inset when the slice is wide enough to survive it; a hairline slice keeps its width.
    if (sweep > GAP_DEG * 2.5) {
      a0 += GAP_DEG / 2;
      a1 -= GAP_DEG / 2;
    }
    // A single full-circle segment has no neighbour to gap against — draw it as two half arcs.
    if (sweep >= 359.99) {
      return `M ${cx} ${cy - rOuter} A ${rOuter} ${rOuter} 0 1 1 ${cx - 0.01} ${cy - rOuter} Z`
           + `M ${cx} ${cy - rInner} A ${rInner} ${rInner} 0 1 0 ${cx - 0.01} ${cy - rInner} Z`;
    }

    const p0 = this.pointOn(cx, cy, rOuter, a0);
    const p1 = this.pointOn(cx, cy, rOuter, a1);
    const p2 = this.pointOn(cx, cy, rInner, a1);
    const p3 = this.pointOn(cx, cy, rInner, a0);
    const largeArc = (a1 - a0) > 180 ? 1 : 0;

    return `M ${p0.x} ${p0.y} `
         + `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${p1.x} ${p1.y} `
         + `L ${p2.x} ${p2.y} `
         + `A ${rInner} ${rInner} 0 ${largeArc} 0 ${p3.x} ${p3.y} Z`;
  }

  private pointOn(cx: number, cy: number, r: number, angleDeg: number) {
    const rad = (angleDeg - 90) * Math.PI / 180;
    return { x: +(cx + r * Math.cos(rad)).toFixed(3), y: +(cy + r * Math.sin(rad)).toFixed(3) };
  }

  // ── Monthly trend bars ──────────────────────────────────────────────

  get maxMonthlyValue(): number {
    return this.monthlyTrend.reduce((m, r) => Math.max(m, Number(r.value || 0)), 0);
  }

  barHeightPercent(value: any): number {
    const max = this.maxMonthlyValue;
    if (!max) return 0;
    const pct = (Number(value || 0) / max) * 100;
    // Give a non-zero month at least a visible sliver rather than nothing at all.
    return pct > 0 && pct < 1.5 ? 1.5 : pct;
  }

  get hasAnySpend(): boolean {
    return !!this.kpis && Number(this.kpis.committed) > 0;
  }

  /** Bare "Apr" repeats meaninglessly once the trend spans more than one year — All Time labels
   *  carry the year too (compact, "Apr '26") so which April is which stays unambiguous. */
  barLabel(m: any): string {
    return this.isAllTimeView ? `${m.monthLabel} '${String(m.year).slice(-2)}` : m.monthLabel;
  }

  /** Compact money for axis/labels — full precision stays in the table. */
  compact(value: any): string {
    const n = Number(value || 0);
    if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
    if (n >= 100000)   return '₹' + (n / 100000).toFixed(2) + ' L';
    if (n >= 1000)     return '₹' + (n / 1000).toFixed(1) + 'K';
    return '₹' + n.toFixed(0);
  }
}
