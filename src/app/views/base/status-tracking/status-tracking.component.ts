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
 * Status tracking — where every PO sits in the lifecycle, and what happened to one PO.
 *
 * The left pane answers "what is the state of everything"; picking a PO answers "what
 * exactly happened to this one", by replaying its audit trail as a timeline. That is why
 * this screen reads from the audit log rather than from a status field: a status tells you
 * where a PO is now, the trail tells you how it got there and who moved it.
 */
@Component({
  selector: 'app-status-tracking',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ContainerComponent, RowComponent, ColComponent,
    CardComponent, CardBodyComponent, CardHeaderComponent,
    ButtonDirective, BadgeComponent, SpinnerComponent
  ],
  templateUrl: './status-tracking.component.html',
  styleUrls: ['./status-tracking.component.css']
})
export class StatusTrackingComponent implements OnInit {

  allPOs: any[] = [];
  filtered: any[] = [];
  isLoading = false;
  errorMessage = '';

  statusFilter = 'ALL';
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

  /** Mirrors POStatus on the server, in lifecycle order. */
  statusOptions = [
    'ALL', 'DRAFT', 'PENDING_APPROVAL', 'APPROVED', 'RETURNED_FOR_REVISION',
    'REJECTED', 'RELEASED', 'IN_PROGRESS', 'DELIVERED', 'COMPLETED',
    'CLOSED', 'FORECLOSED', 'CANCELLED'
  ];

  /**
   * The happy path, used to draw the progress indicator on the selected PO.
   * No approval step: a PO moves straight from DRAFT to RELEASED, one click.
   */
  readonly lifecycle = ['DRAFT', 'RELEASED', 'CLOSED'];

  // ── Selected PO ───────────────────────────────────────────────────────
  selectedPO: any = null;
  timeline: any[] = [];
  isLoadingTimeline = false;

  /** ids of timeline events currently expanded to show their before/after snapshot */
  expandedEvents = new Set<number>();

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
    let data = [...this.allPOs];

    if (this.statusFilter !== 'ALL') {
      data = data.filter(po => po.status === this.statusFilter);
    }

    const q = this.searchText.trim().toLowerCase();
    if (q) {
      data = data.filter(po =>
        (po.poNumber || '').toLowerCase().includes(q) ||
        (po.supplierName || '').toLowerCase().includes(q)
      );
    }

    this.filtered = data;
    this.currentPage = 1;
  }

  // ==================================================================
  // COUNTS
  // ==================================================================

  countBy(status: string): number {
    return this.allPOs.filter(po => po.status === status).length;
  }

  // No approval step in the live flow — this stays at 0 except for a PO created before
  // approval was removed and never resolved. Kept rather than deleted so that PO is still
  // visible and countable instead of silently vanishing from every tile.
  get inApprovalCount(): number { return this.countBy('PENDING_APPROVAL'); }

  /** DRAFT is "created, not yet released" now that release needs no prior approval —
   *  this is the number that actually needs someone's attention. APPROVED is folded in
   *  for the same legacy-PO reason as inApprovalCount above. */
  get awaitingReleaseCount(): number { return this.countBy('DRAFT') + this.countBy('APPROVED'); }
  get activeCount(): number {
    return this.allPOs.filter(po =>
      ['RELEASED', 'SENT_TO_SUPPLIER', 'ACKNOWLEDGED', 'IN_PROGRESS', 'DELIVERED', 'COMPLETED']
        .includes(po.status)).length;
  }
  get closedCount(): number {
    return this.allPOs.filter(po => ['CLOSED', 'FORECLOSED'].includes(po.status)).length;
  }

  // ==================================================================
  // TIMELINE
  // ==================================================================

  selectPO(po: any): void {
    if (this.selectedPO?.id === po.id) {
      this.selectedPO = null;
      this.timeline = [];
      return;
    }

    this.selectedPO = po;
    this.timeline = [];
    this.expandedEvents.clear();
    this.isLoadingTimeline = true;

    this.dataService.getPOStatusTimeline(po.id).subscribe({
      next: (res: any) => {
        const data = res?.data || {};
        // Prefer the freshly-loaded PO over the list row — the list may be a minute stale.
        if (data.po) this.selectedPO = data.po;
        this.timeline = data.timeline || [];
        this.isLoadingTimeline = false;
      },
      error: (err: any) => {
        this.isLoadingTimeline = false;
        this.messageService.showMessage('error', 'Timeline unavailable',
          err?.error?.message || 'Could not load the history for this PO.');
      }
    });
  }

  /**
   * How far along the happy path this PO is, for the progress indicator.
   * Statuses off the happy path (rejected, foreclosed) return -1 so the indicator is
   * hidden rather than showing a misleading position.
   */
  lifecycleIndex(po: any): number {
    const status = po?.status;
    if (['REJECTED', 'CANCELLED', 'FORECLOSED', 'RETURNED_FOR_REVISION'].includes(status)) return -1;
    // PENDING_APPROVAL/APPROVED only appear on a PO created before approval was removed —
    // both sit at the same point on this shorter path: created, not yet released.
    if (['PENDING_APPROVAL', 'APPROVED'].includes(status)) return this.lifecycle.indexOf('DRAFT');
    if (['SENT_TO_SUPPLIER', 'ACKNOWLEDGED', 'IN_PROGRESS', 'DELIVERED', 'COMPLETED'].includes(status)) {
      return this.lifecycle.indexOf('RELEASED');
    }
    return this.lifecycle.indexOf(status);
  }

  isStageDone(po: any, stageIndex: number): boolean {
    const current = this.lifecycleIndex(po);
    return current >= 0 && stageIndex <= current;
  }

  // ==================================================================
  // TIMELINE DETAIL — "very detailed for every change"
  //
  // Every audit entry already carries the full before/after snapshot (the same data the
  // Audit Log screen shows) — this just surfaces it inline per event instead of making
  // someone cross-reference the Audit Log separately to see what actually changed.
  // ==================================================================

  hasSnapshot(event: any): boolean {
    return !!(event?.oldValue || event?.newValue);
  }

  isExpanded(event: any): boolean {
    return this.expandedEvents.has(event.id);
  }

  toggleDetail(event: any): void {
    if (!this.hasSnapshot(event)) return;
    if (this.expandedEvents.has(event.id)) this.expandedEvents.delete(event.id);
    else this.expandedEvents.add(event.id);
  }

  /** Pretty-print a JSON snapshot; fall back to the raw string if it is not JSON. */
  prettyJson(value: any): string {
    if (!value) return '—';
    try {
      return JSON.stringify(JSON.parse(value), null, 2);
    } catch {
      return String(value);
    }
  }

  /** Colour by outcome first, then by how significant the action is — same rule as
   *  the Audit Log screen, so an event reads the same severity in both places. */
  eventColor(event: any): string {
    if (event?.status === 'FAILURE') return 'danger';
    const a = event?.action || '';
    if (a.includes('REJECT') || a.includes('FORECLOSE')) return 'danger';
    if (a.includes('APPROV') || a.includes('PAID') || a.includes('RELEASE')) return 'success';
    if (a.includes('CREATE') || a.includes('SUBMIT')) return 'primary';
    if (a.includes('RETURN') || a.includes('HOLD')) return 'warning';
    return 'secondary';
  }

  // ==================================================================
  // DISPLAY
  // ==================================================================

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
      case 'RETURNED_FOR_REVISION': return 'warning';
      default:                      return 'primary';
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

  viewPO(po: any, event: Event): void {
    event.stopPropagation();     // the row click selects; the link navigates
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
