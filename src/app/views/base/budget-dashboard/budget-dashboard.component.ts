import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const API = environment.API_URL + 'leadcapture/api/budget';

@Component({
  selector: 'app-budget-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './budget-dashboard.component.html'
})
export class BudgetDashboardComponent implements OnInit {

  userId = 0;
  departmentId = 0;
  departmentName = '';
  deptBudget: any = null;
  budgetHistory: any[] = [];
  myRequests: any[] = [];
  activeTab = 'history';
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId')) || 0;
    this.departmentId = Number(localStorage.getItem('departmentId')) || 0;
    this.departmentName = localStorage.getItem('departmentName') || '';
    this.loadBudgetData();
  }

  loadBudgetData() {
    this.loading = true;

    if (this.departmentId) {
      this.http.get<any>(`${API}/department/${this.departmentId}`).subscribe({
        next: b => {
          this.deptBudget = b && b.id ? b : null;
          if (this.deptBudget?.id) this.loadHistory(this.deptBudget.id);
          this.loading = false;
        },
        error: () => { this.loading = false; }
      });
    } else {
      this.loading = false;
    }

    if (this.userId) {
      this.http.get<any[]>(`${API}/increase-requests/creator/${this.userId}`).subscribe({
        next: r => this.myRequests = r,
        error: () => {}
      });
    }
  }

  loadHistory(budgetId: number) {
    this.http.get<any[]>(`${API}/${budgetId}/history`).subscribe({
      next: h => this.budgetHistory = h,
      error: () => {}
    });
  }

  setTab(tab: string) { this.activeTab = tab; }

  // Request summary counts
  get pendingCount(): number {
    return this.myRequests.filter(r =>
      r.status === 'PENDING_FINANCE_REVIEW' || r.status === 'HIERARCHY_IN_PROGRESS' || r.status === 'FINANCE_APPROVED').length;
  }
  get approvedCount(): number {
    return this.myRequests.filter(r => r.status === 'APPROVED').length;
  }
  get rejectedCount(): number {
    return this.myRequests.filter(r => r.status === 'REJECTED' || r.status === 'FINANCE_REJECTED').length;
  }

  formatCurrency(val: number | null | undefined): string {
    if (val == null) return '₹0.00';
    return '₹' + Number(val).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  getUtilizationClass(pct: number): string {
    if (pct >= 90) return 'danger';
    if (pct >= 70) return 'warning';
    return 'success';
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

  formatStatus(s: string): string {
    return (s || '').replace(/_/g, ' ');
  }

  getChangeTypeClass(t: string): string {
    const map: Record<string, string> = {
      INITIAL: 'info', INCREASE: 'success', UTILIZED: 'warning', RELEASED: 'secondary'
    };
    return map[t] || 'secondary';
  }

  getChangeTypeIcon(t: string): string {
    const map: Record<string, string> = {
      INITIAL: '🏁', INCREASE: '📈', UTILIZED: '📤', RELEASED: '↩️'
    };
    return map[t] || '•';
  }
}
