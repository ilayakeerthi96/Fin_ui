import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardComponent, CardBodyComponent, CardHeaderComponent,
  RowComponent, ColComponent, ContainerComponent,
  ButtonDirective, BadgeComponent, SpinnerComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

/**
 * Read-only view of the audit trail.
 *
 * There is no edit or delete affordance here, and none exists in the API either — an audit
 * trail the application can rewrite is not an audit trail. The screen only filters and pages.
 *
 * Paging is server-side. The trail grows without bound, so pulling it all into the browser
 * to filter client-side would get slower every week; the API caps page size at 500 for the
 * same reason.
 */
@Component({
  selector: 'app-audit-log',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ContainerComponent, RowComponent, ColComponent,
    CardComponent, CardBodyComponent, CardHeaderComponent,
    ButtonDirective, BadgeComponent, SpinnerComponent
  ],
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.css']
})
export class AuditLogComponent implements OnInit {

  logs: any[] = [];
  isLoading = false;
  errorMessage = '';

  // ── Filters ───────────────────────────────────────────────────────────
  filters = {
    entityType: '',
    action: '',
    actorEmail: '',
    fromDate: '',
    toDate: ''
  };

  entityTypeOptions = [
    { value: '', label: 'All types' },
    { value: 'PURCHASE_ORDER', label: 'Purchase Orders' },
    { value: 'INVOICE', label: 'Invoices' },
    { value: 'SUPPLIER', label: 'Suppliers' },
    { value: 'USER', label: 'Users' },
    { value: 'APPROVAL_FLOW', label: 'Approval Flow' },
    { value: 'AUTH', label: 'Authentication' },
    { value: 'REQUEST', label: 'Other requests' }
  ];

  actionOptions = [
    '', 'PO_CREATED', 'PO_UPDATED', 'PO_SUBMITTED_FOR_APPROVAL', 'PO_APPROVED',
    'PO_REJECTED', 'PO_RETURNED_FOR_REVISION', 'PO_RELEASED', 'PO_CLOSED', 'PO_FORECLOSED',
    'INVOICE_SUBMITTED', 'INVOICE_APPROVED', 'INVOICE_REJECTED',
    'PAYMENT_MARKED_PAID', 'ADVANCE_PAYMENT_RECORDED',
    'SUPPLIER_CREATED', 'USER_CREATED', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'
  ];

  // ── Paging ────────────────────────────────────────────────────────────
  page = 0;
  size = 50;
  totalElements = 0;
  totalPages = 0;

  // ── Detail panel ──────────────────────────────────────────────────────
  selectedLog: any = null;

  constructor(
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.dataService.getAuditLogs({
      entityType: this.filters.entityType || undefined,
      action: this.filters.action || undefined,
      actorEmail: this.filters.actorEmail || undefined,
      // <input type="date"> gives a bare date; the API expects ISO date-time, and the
      // "to" bound must cover the whole of that day or a same-day search finds nothing.
      fromDate: this.filters.fromDate ? this.filters.fromDate + 'T00:00:00' : undefined,
      toDate: this.filters.toDate ? this.filters.toDate + 'T23:59:59' : undefined,
      page: this.page,
      size: this.size
    }).subscribe({
      next: (res: any) => {
        const data = res?.data || {};
        this.logs = data.content || [];
        this.totalElements = data.totalElements || 0;
        this.totalPages = data.totalPages || 0;
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Could not load the audit log.';
        this.logs = [];
        this.isLoading = false;
        this.messageService.showMessage('error', 'Load failed', this.errorMessage);
      }
    });
  }

  applyFilters(): void {
    this.page = 0;      // a filtered search always restarts at page one
    this.load();
  }

  clearFilters(): void {
    this.filters = { entityType: '', action: '', actorEmail: '', fromDate: '', toDate: '' };
    this.page = 0;
    this.load();
  }

  nextPage(): void {
    if (this.page + 1 < this.totalPages) { this.page++; this.load(); }
  }

  prevPage(): void {
    if (this.page > 0) { this.page--; this.load(); }
  }

  // ==================================================================
  // DISPLAY
  // ==================================================================

  showDetail(log: any): void {
    this.selectedLog = (this.selectedLog === log) ? null : log;
  }

  /** Colour by outcome first, then by how significant the action is. */
  badgeColor(log: any): string {
    if (log?.status === 'FAILURE') return 'danger';
    const a = log?.action || '';
    if (a.includes('REJECT') || a.includes('FORECLOSE')) return 'danger';
    if (a.includes('APPROV') || a.includes('PAID') || a.includes('RELEASE')) return 'success';
    if (a.includes('CREATE') || a.includes('SUBMIT')) return 'primary';
    if (a.includes('RETURN') || a.includes('HOLD')) return 'warning';
    return 'secondary';
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

  hasSnapshot(log: any): boolean {
    return !!(log?.oldValue || log?.newValue);
  }

  get rangeLabel(): string {
    if (this.totalElements === 0) return 'No entries';
    const from = this.page * this.size + 1;
    const to = Math.min((this.page + 1) * this.size, this.totalElements);
    return `${from}–${to} of ${this.totalElements}`;
  }

  trackById(_i: number, log: any): any {
    return log?.id;
  }
}
