import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const API = environment.API_URL + 'leadcapture/api/budget';

type ActionType = 'view' | 'approve' | 'reject' | 'hold' | 'release' | 'return';

/**
 * Budget Increase Approvals — for hierarchy users (CEO, COO, Procurement, etc.)
 * Styled to match the existing Pending Approvals (RFQ/PO) screen, and reuses
 * the exact same sequential one-approver-at-a-time flow: only the CURRENT
 * approver ever sees a request as pending here.
 */
@Component({
  selector: 'app-budget-approvals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget-approvals.component.html'
})
export class BudgetApprovalsComponent implements OnInit {

  userId = 0;
  userName = '';
  companyName = '';
  levelName = '';
  levelOrder = '';

  activeTab: 'pending' | 'hold' = 'pending';
  pending: any[] = [];
  held: any[] = [];
  isLoading = true;

  // Action modal
  showModal = false;
  selectedItem: any = null;
  actionType: ActionType = 'view';
  actionComments = '';
  actionError = '';
  isSubmitting = false;

  constructor(private http: HttpClient, public router: Router) {}

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId')) || 0;
    this.userName = localStorage.getItem('fullName') || '';
    this.companyName = localStorage.getItem('companyName') || '';
    this.levelName = localStorage.getItem('hierarchyLevelName') || '';
    this.levelOrder = localStorage.getItem('hierarchyLevelOrder') || '';
    this.refresh();
  }

  refresh() {
    this.isLoading = true;
    this.http.get<any[]>(`${API}/increase-requests/hierarchy-user/${this.userId}/pending`).subscribe({
      next: r => { this.pending = r; this.isLoading = false; },
      error: () => { this.isLoading = false; }
    });
    this.http.get<any[]>(`${API}/increase-requests/hierarchy-user/${this.userId}/held`).subscribe({
      next: r => this.held = r,
      error: () => {}
    });
  }

  switchTab(tab: 'pending' | 'hold') { this.activeTab = tab; }

  // ── Modal ──────────────────────────────────────────────────
  openModal(item: any, type: ActionType) {
    this.selectedItem = item;
    this.actionType = type;
    this.actionComments = '';
    this.actionError = '';
    this.showModal = true;
  }
  closeModal() { this.showModal = false; this.selectedItem = null; }

  isCommentsRequired(): boolean {
    return this.actionType === 'reject' || this.actionType === 'hold' || this.actionType === 'return';
  }
  getCommentsLabel(): string {
    const map: Record<ActionType, string> = {
      view: 'Details', approve: 'Comments (optional)', reject: 'Rejection Reason',
      hold: 'Hold Reason', release: 'Release Remarks (optional)', return: 'Revision Comments'
    };
    return map[this.actionType];
  }
  getCommentsPlaceholder(): string {
    const map: Record<ActionType, string> = {
      view: '', approve: 'Any notes for the audit trail...',
      reject: 'Explain why this request is being rejected...',
      hold: 'Explain why this request is being put on hold...',
      release: 'Any notes about releasing the hold...',
      return: 'Explain what needs to change before resubmission...'
    };
    return map[this.actionType];
  }
  getModalTitle(): string {
    const map: Record<ActionType, string> = {
      view: 'Request Details', approve: 'Approve Budget Increase', reject: 'Reject Request',
      hold: 'Put On Hold', release: 'Release Hold', return: 'Return for Revision'
    };
    return map[this.actionType] + (this.selectedItem ? ' — ' + this.selectedItem.requestNumber : '');
  }
  getModalHeaderClass(): string {
    const map: Record<ActionType, string> = {
      view: 'bg-info', approve: 'bg-success', reject: 'bg-danger',
      hold: 'bg-warning', release: 'bg-success', return: 'bg-warning'
    };
    return map[this.actionType];
  }
  getModalIcon(): string {
    const map: Record<ActionType, string> = {
      view: 'bi-eye', approve: 'bi-check-circle', reject: 'bi-x-circle',
      hold: 'bi-pause-circle', release: 'bi-play-circle', return: 'bi-arrow-return-left'
    };
    return map[this.actionType];
  }
  getActionButtonClass(): string {
    const map: Record<ActionType, string> = {
      view: 'btn-info', approve: 'btn-success', reject: 'btn-danger',
      hold: 'btn-warning', release: 'btn-success', return: 'btn-warning'
    };
    return map[this.actionType];
  }
  getActionButtonText(): string {
    const map: Record<ActionType, string> = {
      view: 'Close', approve: 'Approve', reject: 'Reject Request',
      hold: 'Put on Hold', release: 'Release Hold', return: 'Return for Revision'
    };
    return map[this.actionType];
  }

  submitAction() {
    if (this.actionType === 'view') { this.closeModal(); return; }
    this.actionError = '';
    if (this.isCommentsRequired() && !this.actionComments.trim()) {
      this.actionError = 'This field is required.';
      return;
    }

    const id = this.selectedItem.id;
    this.isSubmitting = true;
    let url = '';
    let body: any = {};

    switch (this.actionType) {
      case 'approve':
        url = `${API}/increase-requests/${id}/hierarchy-approve`;
        body = { approverUserId: this.userId, comments: this.actionComments.trim() };
        break;
      case 'reject':
        url = `${API}/increase-requests/${id}/hierarchy-reject`;
        body = { approverUserId: this.userId, comments: this.actionComments.trim(), rejectionReason: this.actionComments.trim() };
        break;
      case 'hold':
        url = `${API}/increase-requests/${id}/hierarchy-hold`;
        body = { holderId: this.userId, holdRemarks: this.actionComments.trim() };
        break;
      case 'release':
        url = `${API}/increase-requests/${id}/hierarchy-release-hold`;
        body = { releaserId: this.userId, releaseRemarks: this.actionComments.trim() };
        break;
      case 'return':
        url = `${API}/increase-requests/${id}/hierarchy-return`;
        body = { approverUserId: this.userId, comments: this.actionComments.trim() };
        break;
    }

    this.http.post<any>(url, body).subscribe({
      next: r => {
        this.isSubmitting = false;
        this.closeModal();
        alert(r.message || 'Action completed.');
        this.refresh();
      },
      error: err => {
        this.isSubmitting = false;
        this.actionError = err.error?.message || 'Action failed.';
      }
    });
  }

  formatCurrency(val: number | null | undefined): string {
    if (val == null) return '₹0.00';
    return '₹' + Number(val).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  formatDate(d: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleString('en-IN', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }
}
