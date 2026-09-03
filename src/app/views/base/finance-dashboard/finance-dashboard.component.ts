import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const API = environment.API_URL + 'leadcapture/api/budget';

@Component({
  selector: 'app-finance-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './finance-dashboard.component.html'
})
export class FinanceDashboardComponent implements OnInit {

  userId = 0;
  userName = '';
  companyName = '';
  stats: any = null;
  allBudgets: any[] = [];
  filteredBudgets: any[] = [];
  pendingRequests: any[] = [];
  allRequests: any[] = [];
  activeTab = 'overview';
  searchText = '';

  // Increase budget modal
  showIncreaseForm = false;
  increaseTarget: any = null;
  increaseForm = { amount: '', reason: '' };
  increaseError = '';
  increasing = false;

  // Budget history modal
  showHistoryModal = false;
  historyBudget: any = null;
  budgetHistory: any[] = [];

  // Request action modal (approve / reject / view)
  showActionModal = false;
  actionRequest: any = null;
  actionType: 'approve' | 'reject' | 'view' = 'approve';
  actionComments = '';
  actionError = '';
  actionSubmitting = false;

  // Create budget form
  showCreateForm = false;
  departments: any[] = [];
  createForm = { departmentId: '', fiscalYear: '', initialAmount: '', notes: '' };
  createError = '';
  createSuccess = '';
  creating = false;

  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId')) || 0;
    this.userName = localStorage.getItem('fullName') || 'Finance User';
    this.companyName = localStorage.getItem('companyName') || '';
    this.loadAll();
  }

  loadAll() {
    this.loading = true;
    this.http.get<any>(`${API}/stats/finance`).subscribe({
      next: s => this.stats = s,
      error: () => {}
    });
    this.http.get<any[]>(`${API}/all`).subscribe({
      next: b => { this.allBudgets = b; this.applyFilter(); this.loading = false; },
      error: () => { this.loading = false; }
    });
    this.http.get<any[]>(`${API}/increase-requests/pending`).subscribe({
      next: r => this.pendingRequests = r,
      error: () => {}
    });
    this.http.get<any[]>(`${API}/increase-requests/all`).subscribe({
      next: r => this.allRequests = r,
      error: () => {}
    });
    this.http.get<any[]>(`${API}/departments`, {
      params: this.companyName ? { companyName: this.companyName } : {}
    }).subscribe({
      next: d => this.departments = d,
      error: () => {}
    });
  }

  setTab(tab: string) { this.activeTab = tab; }

  applyFilter() {
    const q = this.searchText.trim().toLowerCase();
    this.filteredBudgets = !q ? this.allBudgets
      : this.allBudgets.filter(b =>
          (b.departmentName || '').toLowerCase().includes(q) ||
          (b.fiscalYear || '').toLowerCase().includes(q));
  }

  getUtilizationClass(pct: number): string {
    if (pct >= 90) return 'danger';
    if (pct >= 70) return 'warning';
    return 'success';
  }

  get approvedCount(): number {
    return this.allRequests.filter(r => r.status === 'APPROVED').length;
  }
  get rejectedCount(): number {
    return this.allRequests.filter(r => r.status === 'REJECTED' || r.status === 'FINANCE_REJECTED').length;
  }
  // ✅ NEW: requests where every hierarchy approver has signed off —
  // Finance must take the separate, explicit "Increase Budget" action
  get readyToIncrease(): any[] {
    return this.allRequests.filter(r => r.status === 'HIERARCHY_APPROVED');
  }

  // ── Create budget ─────────────────────────────────────────
  openCreateForm() {
    this.showCreateForm = true;
    this.createError = '';
    this.createSuccess = '';
  }
  closeCreateForm() { this.showCreateForm = false; }

  submitCreateBudget() {
    this.createError = '';
    if (!this.createForm.departmentId || !this.createForm.initialAmount) {
      this.createError = 'Department and initial amount are required.';
      return;
    }
    if (Number(this.createForm.initialAmount) <= 0) {
      this.createError = 'Initial amount must be greater than 0.';
      return;
    }
    this.creating = true;
    const body = {
      departmentId: Number(this.createForm.departmentId),
      fiscalYear: this.createForm.fiscalYear || null,
      initialAmount: Number(this.createForm.initialAmount),
      financeUserId: this.userId,
      financeUserName: this.userName,
      notes: this.createForm.notes
    };
    this.http.post<any>(`${API}/create`, body).subscribe({
      next: r => {
        this.creating = false;
        this.createSuccess = r.message;
        this.createForm = { departmentId: '', fiscalYear: '', initialAmount: '', notes: '' };
        setTimeout(() => { this.showCreateForm = false; this.createSuccess = ''; this.loadAll(); }, 1200);
      },
      error: err => {
        this.creating = false;
        this.createError = err.error?.message || 'Failed to create budget.';
      }
    });
  }

  // ── Increase budget ───────────────────────────────────────
  openIncreaseForm(budget: any) {
    this.increaseTarget = budget;
    this.increaseForm = { amount: '', reason: '' };
    this.increaseError = '';
    this.showIncreaseForm = true;
  }
  closeIncreaseForm() { this.showIncreaseForm = false; this.increaseTarget = null; }

  submitIncrease() {
    this.increaseError = '';
    if (!this.increaseForm.amount || Number(this.increaseForm.amount) <= 0) {
      this.increaseError = 'Increase amount must be greater than 0.';
      return;
    }
    if (!this.increaseForm.reason.trim()) {
      this.increaseError = 'Reason is required.';
      return;
    }
    this.increasing = true;
    this.http.post<any>(`${API}/${this.increaseTarget.id}/increase`, {
      increaseAmount: Number(this.increaseForm.amount),
      reason: this.increaseForm.reason.trim(),
      financeUserId: this.userId,
      financeUserName: this.userName
    }).subscribe({
      next: () => {
        this.increasing = false;
        this.closeIncreaseForm();
        this.loadAll();
      },
      error: err => {
        this.increasing = false;
        this.increaseError = err.error?.message || 'Failed to increase budget.';
      }
    });
  }

  // ── Budget history ────────────────────────────────────────
  openHistory(budget: any) {
    this.historyBudget = budget;
    this.budgetHistory = [];
    this.showHistoryModal = true;
    this.http.get<any[]>(`${API}/${budget.id}/history`).subscribe({
      next: h => this.budgetHistory = h,
      error: () => {}
    });
  }
  closeHistory() { this.showHistoryModal = false; this.historyBudget = null; }

  // ── Approve / Reject / View budget increase requests ──────
  openAction(req: any, type: 'approve' | 'reject' | 'view') {
    this.actionRequest = req;
    this.actionType = type;
    this.actionComments = '';
    this.actionError = '';
    this.showActionModal = true;
  }
  closeAction() { this.showActionModal = false; this.actionRequest = null; }

  submitAction() {
    this.actionError = '';
    if (this.actionType === 'reject' && !this.actionComments.trim()) {
      this.actionError = 'Rejection reason is required.';
      return;
    }
    this.actionSubmitting = true;
    const url = this.actionType === 'approve'
      ? `${API}/increase-requests/${this.actionRequest.id}/finance-approve`
      : `${API}/increase-requests/${this.actionRequest.id}/finance-reject`;
    const body: any = { financeUserId: this.userId, comments: this.actionComments.trim() };
    if (this.actionType === 'reject') body.rejectionReason = this.actionComments.trim();

    this.http.post<any>(url, body).subscribe({
      next: () => {
        this.actionSubmitting = false;
        this.closeAction();
        this.loadAll();
      },
      error: err => {
        this.actionSubmitting = false;
        this.actionError = err.error?.message || 'Action failed.';
      }
    });
  }

  formatCurrency(val: number | null | undefined): string {
    if (val == null) return '₹0.00';
    return '₹' + Number(val).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  getStatusClass(s: string): string {
    const map: Record<string, string> = {
      PENDING_FINANCE_REVIEW: 'warning',
      FINANCE_APPROVED: 'info',
      FINANCE_REJECTED: 'danger',
      HIERARCHY_IN_PROGRESS: 'primary',
      HIERARCHY_APPROVED: 'success',
      RETURNED_FOR_REVISION: 'warning',
      APPROVED: 'success',
      REJECTED: 'danger'
    };
    return map[s] || 'secondary';
  }

  // ── Finance: FINAL action — actually increase the budget ──
  // Only shown once every hierarchy approver has signed off. This is the
  // only click in the whole workflow that changes the department budget.
  increasingBudgetId: number | null = null;
  confirmIncreaseBudget(req: any) {
    if (!confirm(
      `All approvers have signed off on request ${req.requestNumber}.\n\n`
      + `Department: ${req.departmentName}\n`
      + `Amount to add: ${this.formatCurrency(req.requestedAdditionalAmount)}\n\n`
      + `Click OK to increase the department budget now. This cannot be undone.`
    )) return;

    this.increasingBudgetId = req.id;
    this.http.post<any>(`${API}/increase-requests/${req.id}/finance-increase-budget`, {
      financeUserId: this.userId
    }).subscribe({
      next: r => {
        this.increasingBudgetId = null;
        alert(r.message || 'Budget increased successfully.');
        this.loadAll();
      },
      error: err => {
        this.increasingBudgetId = null;
        alert(err.error?.message || 'Failed to increase budget.');
      }
    });
  }

  formatStatus(s: string): string {
    return (s || '').replace(/_/g, ' ');
  }

  getChangeTypeClass(t: string): string {
    const map: Record<string, string> = {
      INITIAL: 'info', INCREASE: 'success', UTILIZED: 'warning', RELEASED: 'secondary'
    };
    return map[t] || 'secondary';
  }
}
