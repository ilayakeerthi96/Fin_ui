import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonDirective } from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

interface FYOption {
  value: string;
  label: string;
  from: Date;
  to: Date;
}

interface PendingAttachment {
  file: File;
  base64: string;
  previewUrl: string;
  isImage: boolean;
}

/**
 * Legal Team's own landing dashboard — styled to match the other hierarchy
 * roles' dashboard (same header banner, date-range filter bar, and stat-card
 * layout as hierarchy-dashboard.component.ts) but scoped to Contracts only -
 * no RFQ/PO/Supplier data. Fully self-contained: does not modify
 * hierarchy-dashboard.component.ts or contract-approvals.component.ts.
 */
@Component({
  selector: 'app-legal-dashboard',
  templateUrl: './legal-dashboard.component.html',
  styleUrls: ['./legal-dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, ButtonDirective
  ]
})
export class LegalDashboardComponent implements OnInit {

  // ── User / header info ──────────────────────────────────────
  userName = '';
  userEmail = '';
  companyName = '';
  hierarchyLevelName = '';

  role = '';
  userId = 0;
  fullName = '';

  // ── Contract data ────────────────────────────────────────────
  allContracts: any[] = [];
  dateFilteredContracts: any[] = [];
  pendingContracts: any[] = [];
  isLoading = true;

  // ── Financial year / date filter (same pattern as hierarchy-dashboard) ──
  financialYearOptions: FYOption[] = [];
  selectedFYOption = '';
  customFromDate = '';
  customToDate = '';
  activeDateRangeLabel = '';

  // ── Approve/reject modal ────────────────────────────────────
  showModal = false;
  modalMode: 'approve' | 'reject' | 'moreInfo' | null = null;
  selectedContract: any = null;
  comments = '';
  isSubmitting = false;

  // "Request More Info" — any number of attachments, each with a preview
  pendingAttachments: PendingAttachment[] = [];

  constructor(
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('fullName') || 'Legal Team';
    this.userEmail = localStorage.getItem('email') || '';
    this.companyName = localStorage.getItem('companyName') || '';
    this.hierarchyLevelName = localStorage.getItem('hierarchyLevelName') || 'Legal';

    this.role = localStorage.getItem('role') || '';
    this.userId = Number(localStorage.getItem('userId')) || 0;
    this.fullName = this.userName;

    this.buildFinancialYearOptions();
    this.selectedFYOption = this.getCurrentFYValue();
    this.updateActiveDateRangeLabel();
    this.loadContracts();
  }

  // ── Data loading ─────────────────────────────────────────────

  loadContracts(): void {
    this.isLoading = true;
    this.dataService.getContractsByCompany(this.companyName).subscribe({
      next: (response: any) => {
        this.allContracts = (response?.success && response.data) ? response.data : [];
        this.applyDateFilter();
        this.isLoading = false;
      },
      error: () => {
        this.messageService.showMessage('error', 'Error', 'Failed to load contracts');
        this.isLoading = false;
      }
    });
  }

  refresh(): void {
    this.loadContracts();
  }

  scrollToPending(): void {
    document.getElementById('pending-contracts')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private applyDateFilter(): void {
    this.updateActiveDateRangeLabel();
    this.dateFilteredContracts = this.applyDateFilterToArray(this.allContracts, 'createdAt');
    this.pendingContracts = this.dateFilteredContracts.filter(c => c.status === 'PENDING_APPROVAL');
  }

  // ── Stat getters ─────────────────────────────────────────────

  get totalCount(): number { return this.dateFilteredContracts.length; }
  get pendingCount(): number { return this.pendingContracts.length; }
  get approvedCount(): number { return this.dateFilteredContracts.filter(c => c.status === 'APPROVED').length; }
  get rejectedCount(): number { return this.dateFilteredContracts.filter(c => c.status === 'REJECTED').length; }

  // ── Financial year helpers (mirrors hierarchy-dashboard.component.ts) ──

  private buildFinancialYearOptions(): void {
    const today = new Date();
    let currentFYStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
    this.financialYearOptions = [];
    for (let i = 0; i < 4; i++) {
      const startYear = currentFYStartYear - i;
      const endYear = startYear + 1;
      const from = new Date(startYear, 3, 1, 0, 0, 0, 0);
      const to = new Date(endYear, 2, 31, 23, 59, 59, 999);
      this.financialYearOptions.push({
        value: `FY${startYear}-${String(endYear).slice(-2)}`,
        label: `FY ${startYear}-${String(endYear).slice(-2)}  (Apr ${startYear} – Mar ${endYear})`,
        from, to
      });
    }
  }

  getCurrentFYValue(): string {
    return this.financialYearOptions.length > 0 ? this.financialYearOptions[0].value : 'ALL';
  }

  onFYOptionChange(): void {
    if (this.selectedFYOption !== 'CUSTOM') { this.customFromDate = ''; this.customToDate = ''; }
    this.applyDateFilter();
  }

  resetDateFilter(): void {
    this.selectedFYOption = this.getCurrentFYValue();
    this.customFromDate = '';
    this.customToDate = '';
    this.applyDateFilter();
  }

  private updateActiveDateRangeLabel(): void {
    if (this.selectedFYOption === 'ALL') { this.activeDateRangeLabel = 'All Time'; return; }
    if (this.selectedFYOption === 'CUSTOM') {
      if (this.customFromDate && this.customToDate)
        this.activeDateRangeLabel = `${this.formatDisplayDate(this.customFromDate)} – ${this.formatDisplayDate(this.customToDate)}`;
      else if (this.customFromDate) this.activeDateRangeLabel = `From ${this.formatDisplayDate(this.customFromDate)}`;
      else if (this.customToDate) this.activeDateRangeLabel = `Up to ${this.formatDisplayDate(this.customToDate)}`;
      else this.activeDateRangeLabel = 'Custom Range';
      return;
    }
    const fy = this.financialYearOptions.find(f => f.value === this.selectedFYOption);
    this.activeDateRangeLabel = fy ? fy.label : '';
  }

  private formatDisplayDate(dateStr: string): string {
    if (!dateStr) return '';
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
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

  private applyDateFilterToArray(items: any[], dateField: string): any[] {
    const range = this.getActiveDateRange();
    if (!range) return items;
    return items.filter((item: any) => {
      const dateStr = item[dateField];
      if (!dateStr) return false;
      const d = new Date(dateStr);
      return d >= range.from && d <= range.to;
    });
  }

  // ── Actions ──────────────────────────────────────────────────

  viewContract(id: number): void {
    this.router.navigate(['/contract-detail', id]);
  }

  openModal(contract: any, mode: 'approve' | 'reject' | 'moreInfo'): void {
    this.selectedContract = contract;
    this.modalMode = mode;
    this.comments = '';
    this.pendingAttachments = [];
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedContract = null;
    this.modalMode = null;
    this.pendingAttachments = [];
  }

  onAttachmentsSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files ? Array.from(input.files) : [];
    input.value = '';

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const commaIndex = result.indexOf(',');
        const base64 = commaIndex >= 0 ? result.substring(commaIndex + 1) : result;
        this.pendingAttachments.push({
          file,
          base64,
          previewUrl: result,
          isImage: file.type.startsWith('image/')
        });
      };
      reader.readAsDataURL(file);
    }
  }

  removeAttachment(index: number): void {
    this.pendingAttachments.splice(index, 1);
  }

  confirm(): void {
    if (!this.selectedContract || !this.modalMode) return;
    if ((this.modalMode === 'reject' || this.modalMode === 'moreInfo') && !this.comments.trim()) {
      this.messageService.showMessage('error', 'Error',
        this.modalMode === 'reject' ? 'Rejection comments are required' : 'Please explain what additional information is needed');
      return;
    }

    this.isSubmitting = true;

    if (this.modalMode === 'moreInfo') {
      const payload = {
        approverId: this.userId,
        approverName: this.fullName,
        approverRole: this.role,
        comments: this.comments.trim(),
        attachments: this.pendingAttachments.map(a => ({
          filename: a.file.name,
          contentType: a.file.type || 'application/octet-stream',
          base64: a.base64
        }))
      };
      this.dataService.returnContractForRevision(this.selectedContract.id, payload).subscribe({
        next: (response: any) => this.handleActionResult(response, 'Request sent back to the contract creator'),
        error: (err: any) => this.handleActionError(err)
      });
      return;
    }

    const payload = {
      approverId: this.userId,
      approverName: this.fullName,
      approverRole: this.role,
      comments: this.comments.trim()
    };
    const call = this.modalMode === 'approve'
      ? this.dataService.approveContract(this.selectedContract.id, payload)
      : this.dataService.rejectContract(this.selectedContract.id, payload);

    call.subscribe({
      next: (response: any) => this.handleActionResult(response, `Contract ${this.modalMode}d`),
      error: (err: any) => this.handleActionError(err)
    });
  }

  private handleActionResult(response: any, successMessage: string): void {
    this.isSubmitting = false;
    if (response?.success) {
      this.messageService.showMessage('success', 'Success', successMessage);
      this.closeModal();
      this.loadContracts();
    } else {
      this.messageService.showMessage('error', 'Error', response?.message || 'Action failed');
    }
  }

  private handleActionError(err: any): void {
    this.isSubmitting = false;
    this.messageService.showMessage('error', 'Error', err.error?.message || 'Action failed');
  }
}
