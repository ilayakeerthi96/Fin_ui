import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const API = environment.API_URL + 'leadcapture/api/budget';

@Component({
  selector: 'app-budget-increase-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget-increase-request.component.html'
})
export class BudgetIncreaseRequestComponent implements OnInit {

  // Mode: RFQ-originated (existing) or PO-originated (new)
  isPoMode = false;
  rfqId = 0;
  poId = 0;
  userId = 0;
  departmentId = 0;
  departmentName = '';

  // Budget context (loaded from server / query params)
  rfqNumber = '';
  poNumber = '';
  rfqAmount = 0; // reused as "amount" label for both RFQ and PO
  remainingBudget = 0;
  shortfall = 0;

  reason = '';
  additionalAmount: number | null = null;
  submitting = false;
  loadingContext = true;
  error = '';
  success = '';

  // Existing requests for this RFQ/PO (to show rejection history)
  previousRequests: any[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId')) || 0;
    this.departmentId = Number(localStorage.getItem('departmentId')) || 0;
    this.departmentName = localStorage.getItem('departmentName') || '';

    const poIdParam = this.route.snapshot.paramMap.get('poId');
    this.isPoMode = !!poIdParam;
    this.poId = Number(poIdParam) || 0;
    this.rfqId = Number(this.route.snapshot.paramMap.get('rfqId')) || 0;

    // Optional context passed via query params (from submission flow)
    const qp = this.route.snapshot.queryParamMap;
    this.rfqNumber       = qp.get('rfqNumber') || '';
    this.poNumber        = qp.get('poNumber') || '';
    this.rfqAmount       = Number(qp.get(this.isPoMode ? 'poAmount' : 'rfqAmount')) || 0;
    this.remainingBudget = Number(qp.get('remaining')) || 0;
    this.shortfall       = Number(qp.get('shortfall')) || 0;

    if (this.shortfall > 0) {
      this.additionalAmount = Math.ceil(this.shortfall);
    }

    this.loadContext();
  }

  loadContext() {
    // Refresh budget context from server in case query params were not passed
    this.loadingContext = true;
    if (this.departmentId) {
      this.http.get<any>(`${API}/department/${this.departmentId}`).subscribe({
        next: b => {
          if (b?.id != null && !this.remainingBudget) {
            this.remainingBudget = Number(b.remainingBudget) || 0;
            if (this.rfqAmount > 0) {
              this.shortfall = Math.max(0, this.rfqAmount - this.remainingBudget);
              if (!this.additionalAmount && this.shortfall > 0) {
                this.additionalAmount = Math.ceil(this.shortfall);
              }
            }
          }
          this.loadingContext = false;
        },
        error: () => { this.loadingContext = false; }
      });
    } else {
      this.loadingContext = false;
    }

    if (this.isPoMode && this.poId) {
      this.http.get<any[]>(`${API}/increase-requests/po/${this.poId}`).subscribe({
        next: r => this.previousRequests = r,
        error: () => {}
      });
    } else if (this.rfqId) {
      this.http.get<any[]>(`${API}/increase-requests/rfq/${this.rfqId}`).subscribe({
        next: r => this.previousRequests = r,
        error: () => {}
      });
    }
  }

  submit() {
    this.error = '';
    if (this.isPoMode ? !this.poId : !this.rfqId) {
      this.error = (this.isPoMode ? 'PO' : 'RFQ') + ' reference is missing. Please navigate here from your ' + (this.isPoMode ? 'Purchase Order' : 'RFQ') + '.';
      return;
    }
    if (!this.reason || this.reason.trim().length < 10) {
      this.error = 'Please provide a detailed reason (at least 10 characters).';
      return;
    }
    if (!this.additionalAmount || this.additionalAmount <= 0) {
      this.error = 'Requested additional amount must be greater than 0.';
      return;
    }

    this.submitting = true;
    const url = this.isPoMode ? `${API}/increase-requests/create-for-po` : `${API}/increase-requests/create`;
    const body: any = {
      userId: this.userId,
      requestedAdditionalAmount: this.additionalAmount,
      reason: this.reason.trim()
    };
    if (this.isPoMode) body.poId = this.poId; else body.rfqId = this.rfqId;

    this.http.post<any>(url, body).subscribe({
      next: r => {
        this.submitting = false;
        this.success = r.message || 'Budget increase request submitted successfully.';
        setTimeout(() => this.router.navigate(['/budget-dashboard']), 2500);
      },
      error: err => {
        this.submitting = false;
        this.error = err.error?.message || 'Failed to submit request.';
      }
    });
  }

  cancel() {
    this.router.navigate([this.isPoMode ? '/po-list' : '/rfq-dashboard']);
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
      HIERARCHY_APPROVED: 'primary',
      RETURNED_FOR_REVISION: 'warning',
      APPROVED: 'success',
      REJECTED: 'danger'
    };
    return map[s] || 'secondary';
  }

  formatStatus(s: string): string {
    return (s || '').replace(/_/g, ' ');
  }
}
