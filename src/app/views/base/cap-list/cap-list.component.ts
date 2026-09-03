import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../../shared/service/DataService';
import { AuthService } from '../../../shared/service/AuthService';

/**
 * Corrective Action Plan (CAP) list — the tracking board. A buyer's QA team raises CAPs against
 * a supplier here; a supplier sees every CAP raised against them and drills into each one to
 * update their assigned actions. Neither side ever treats "replaced the product" as the fix —
 * that's captured separately as immediateCorrection; the actual corrective action lives on each
 * CAP's action list (see cap-detail).
 */
@Component({
  selector: 'app-cap-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cap-list.component.html',
  styleUrls: ['./cap-list.component.css']
})
export class CapListComponent implements OnInit {

  /** Caps the "When Detected" date picker — an issue can't be detected in the future. */
  readonly todayIso = new Date().toISOString().slice(0, 10);

  isSupplierMode = false;
  buyerId = 0;
  supplierId = 0;

  caps: any[] = [];
  isLoading = false;
  errorMessage = '';

  statusFilter = 'ALL';
  searchText = '';

  readonly STATUSES = ['OPEN', 'ROOT_CAUSE_ANALYSIS', 'ACTION_PLANNED', 'IN_PROGRESS',
    'PENDING_VERIFICATION', 'CLOSED', 'REOPENED'];

  get pageTitle(): string { return this.isSupplierMode ? 'Corrective Actions Against You' : 'Corrective Action Plans'; }
  get pageSubtitle(): string {
    return this.isSupplierMode
      ? 'Quality issues your customers have raised — investigate, act, and prove the fix worked'
      : 'Track why a quality issue happened and what is being done so it never happens again';
  }

  get filteredCaps(): any[] {
    const q = this.searchText.trim().toLowerCase();
    if (!q) return this.caps;
    return this.caps.filter(c =>
      String(c.capNumber || '').toLowerCase().includes(q) ||
      String(c.itemDescription || '').toLowerCase().includes(q) ||
      String(c.department || '').toLowerCase().includes(q) ||
      String(c.buyerCompanyName || '').toLowerCase().includes(q) ||
      String(c.supplierCompanyName || '').toLowerCase().includes(q)
    );
  }

  // ── "Raise CAP" modal (buyer-side only) ──────────────────────────────
  showRaiseModal = false;
  isSavingCap = false;
  suppliers: any[] = [];
  raiseForm: any = this.blankRaiseForm();
  isPrefilling = false;

  /** Personnel Involved is picked from the DB, not typed — Department then auto-fills from
   *  whichever RFQ creator (buyer-side user) is selected, rather than the other way round. */
  personnelOptions: any[] = [];
  selectedPersonnelId: number | '' = '';

  // ── GRN line search — finds real rejected lines instead of asking for a raw database ID ──
  grnSearchQuery = '';
  grnSearchResults: any[] = [];
  isSearchingGrn = false;
  grnSearchAttempted = false;

  /** Date filter narrowing the search — Today / a financial year / a custom range / All time. */
  readonly GRN_TODAY = 'TODAY';
  readonly GRN_CUSTOM = 'CUSTOM';
  readonly GRN_ALL = 'ALL';
  grnPeriod: string | number = this.GRN_ALL;
  grnFyOptions: number[] = [];
  grnCustomFrom = '';
  grnCustomTo = '';

  constructor(private dataService: DataService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isSupplierMode = this.authService.isSupplier();
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
    const status = this.statusFilter === 'ALL' ? null : this.statusFilter;
    const source$ = this.isSupplierMode
      ? this.dataService.listCapsForSupplier(this.supplierId, status)
      : this.dataService.listCapsForBuyer(this.buyerId, status);

    source$.subscribe({
      next: (res: any) => {
        this.caps = res?.success ? res.data : (res?.data || res || []);
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to load corrective action plans.';
        this.isLoading = false;
      }
    });
  }

  onFilterChange(): void { this.load(); }

  openDetail(cap: any): void {
    this.router.navigate(['/cap-detail', cap.id]);
  }

  statusLabel(status: string): string {
    const map: { [k: string]: string } = {
      OPEN: 'Open', ROOT_CAUSE_ANALYSIS: 'Root Cause Analysis', ACTION_PLANNED: 'Action Planned',
      IN_PROGRESS: 'In Progress', PENDING_VERIFICATION: 'Pending Verification', CLOSED: 'Closed', REOPENED: 'Reopened'
    };
    return map[status] || status;
  }

  statusClass(status: string): string {
    const map: { [k: string]: string } = {
      OPEN: 'cap-badge-open', ROOT_CAUSE_ANALYSIS: 'cap-badge-rca', ACTION_PLANNED: 'cap-badge-planned',
      IN_PROGRESS: 'cap-badge-progress', PENDING_VERIFICATION: 'cap-badge-verify',
      CLOSED: 'cap-badge-closed', REOPENED: 'cap-badge-reopened'
    };
    return map[status] || '';
  }

  severityClass(severity: string): string {
    const map: { [k: string]: string } = {
      LOW: 'cap-sev-low', MEDIUM: 'cap-sev-medium', HIGH: 'cap-sev-high', CRITICAL: 'cap-sev-critical'
    };
    return map[severity] || '';
  }

  // ── Raise CAP ─────────────────────────────────────────────────────────

  readonly DISPOSITIONS = [
    { value: 'ACCEPT_WITH_DEVIATION', label: 'Accept with Deviation — kept and used despite the known issue' },
    { value: 'REJECT', label: 'Reject — not accepted, not used' },
    { value: 'REJECT_AND_REPLACE', label: 'Reject & Replace — rejected, replacement requested from supplier' }
  ];

  private blankRaiseForm(): any {
    const today = new Date().toISOString().slice(0, 10);
    return {
      supplierId: '', purchaseOrderId: null, grnId: null, grnLineItemId: null,
      disposition: '', returnPackedBy: '', returnInChargeName: '', internalCorrectionRequired: false,
      department: '', itemCode: '', itemDescription: '', personnelInvolved: '',
      problemDescription: '', whenDetected: today, severity: 'MEDIUM',
      immediateCorrection: '', assignedOwner: '', targetCloseDate: ''
    };
  }

  openRaiseModal(): void {
    this.raiseForm = this.blankRaiseForm();
    this.grnSearchQuery = '';
    this.grnSearchResults = [];
    this.grnSearchAttempted = false;
    this.grnPeriod = this.GRN_ALL;
    this.grnCustomFrom = '';
    this.grnCustomTo = '';
    if (!this.grnFyOptions.length) {
      const now = new Date();
      const currentFy = now.getMonth() + 1 >= 4 ? now.getFullYear() : now.getFullYear() - 1;
      this.grnFyOptions = [currentFy, currentFy - 1, currentFy - 2];
    }
    this.selectedPersonnelId = '';
    this.showRaiseModal = true;
    this.errorMessage = '';
    if (!this.suppliers.length) {
      this.dataService.getCapSuppliersForBuyer(this.buyerId).subscribe({
        next: (res: any) => { this.suppliers = res?.success ? res.data : (res?.data || res || []); },
        error: () => { this.suppliers = []; }
      });
    }
    if (!this.personnelOptions.length) {
      this.dataService.getPersonnelForBuyer(this.buyerId).subscribe({
        next: (res: any) => { this.personnelOptions = res?.success ? res.data : (res?.data || res || []); },
        error: () => { this.personnelOptions = []; }
      });
    }
  }

  closeRaiseModal(): void { this.showRaiseModal = false; }

  /** Picking the RFQ creator (Personnel Involved) fills their name in and pulls their own
   *  department along with them — Department is derived, not separately picked. */
  onPersonnelChange(): void {
    const person = this.personnelOptions.find(p => p.id === this.selectedPersonnelId);
    if (!person) { this.raiseForm.personnelInvolved = ''; this.raiseForm.department = ''; return; }
    this.raiseForm.personnelInvolved = person.name;
    this.raiseForm.department = person.departmentName || '';
  }

  /** Changing the period re-runs the search immediately — except Custom Range, which waits for
   *  both dates to be filled in and Search to be clicked, same pattern as Spend Analysis. */
  onGrnPeriodChange(): void {
    if (this.grnPeriod === this.GRN_CUSTOM) {
      if (!this.grnCustomFrom || !this.grnCustomTo) {
        const today = new Date().toISOString().slice(0, 10);
        this.grnCustomFrom = today;
        this.grnCustomTo = today;
      }
      return;
    }
    this.searchRejectedGrnLines();
  }

  /** Resolves the current period into an inclusive from/to pair, or nulls for "All time". */
  private resolveGrnDateWindow(): { from: string | null; to: string | null } {
    if (this.grnPeriod === this.GRN_ALL) return { from: null, to: null };
    if (this.grnPeriod === this.GRN_TODAY) {
      const today = new Date().toISOString().slice(0, 10);
      return { from: today, to: today };
    }
    if (this.grnPeriod === this.GRN_CUSTOM) {
      return { from: this.grnCustomFrom || null, to: this.grnCustomTo || null };
    }
    // Otherwise it's a financial-year start year, e.g. 2026 -> Apr 2026 to Mar 2027.
    const y = Number(this.grnPeriod);
    return { from: `${y}-04-01`, to: `${y + 1}-03-31` };
  }

  /** Looks up rejected GRN lines by GRN number and/or the selected date window — no database IDs
   *  needed, just what's on screen. */
  searchRejectedGrnLines(): void {
    if (this.grnPeriod === this.GRN_CUSTOM && (!this.grnCustomFrom || !this.grnCustomTo)) {
      this.errorMessage = 'Pick both a From and a To date for the custom range.';
      return;
    }
    this.isSearchingGrn = true;
    this.grnSearchAttempted = true;
    this.errorMessage = '';
    const { from, to } = this.resolveGrnDateWindow();
    this.dataService.searchRejectedGrnLines(this.buyerId, this.grnSearchQuery, from, to).subscribe({
      next: (res: any) => {
        this.grnSearchResults = res?.success ? res.data : (res?.data || res || []);
        this.isSearchingGrn = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to search GRNs.';
        this.isSearchingGrn = false;
      }
    });
  }

  /** Fired by the results dropdown's (change) — resolves the chosen grnLineItemId back to its
   *  result row, then pulls the full details in. */
  onGrnResultSelected(grnLineItemId: string): void {
    if (!grnLineItemId) return;
    const line = this.grnSearchResults.find(l => String(l.grnLineItemId) === String(grnLineItemId));
    if (line) this.selectGrnLine(line);
  }

  /** Pulls item/PO/GRN/supplier straight from the rejected line the user picked. */
  selectGrnLine(line: any): void {
    this.isPrefilling = true;
    this.errorMessage = '';
    this.dataService.prefillCapFromGrnLine(line.grnLineItemId).subscribe({
      next: (res: any) => {
        const d = res?.success ? res.data : (res?.data || res);
        this.raiseForm.supplierId = d.supplierId || this.raiseForm.supplierId;
        this.raiseForm.purchaseOrderId = d.purchaseOrderId;
        this.raiseForm.grnId = d.grnId;
        this.raiseForm.grnLineItemId = d.grnLineItemId;
        this.raiseForm.itemCode = d.itemCode || '';
        this.raiseForm.itemDescription = d.itemDescription || '';
        this.raiseForm.problemDescription = d.suggestedProblemDescription || this.raiseForm.problemDescription;
        this.isPrefilling = false;
        this.grnSearchResults = [];
        this.grnSearchQuery = `Linked: ${d.itemDescription} (GRN ${line.grnNumber})`;
        if (!this.suppliers.some(s => s.id === d.supplierId)) {
          this.dataService.getCapSuppliersForBuyer(this.buyerId).subscribe({
            next: (r: any) => { this.suppliers = r?.success ? r.data : (r?.data || r || []); }
          });
        }
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Could not load that GRN line.';
        this.isPrefilling = false;
      }
    });
  }

  submitRaiseForm(): void {
    if (!this.raiseForm.supplierId) { this.errorMessage = 'Pick a supplier.'; return; }
    if (!this.raiseForm.disposition) { this.errorMessage = 'Specify what is happening to the goods first — Accept with Deviation, Reject, or Reject & Replace.'; return; }
    if (!this.raiseForm.problemDescription?.trim()) { this.errorMessage = 'Describe the problem.'; return; }
    if (this.raiseForm.whenDetected && this.raiseForm.whenDetected > this.todayIso) {
      this.errorMessage = "When Detected can't be a future date."; return;
    }

    this.isSavingCap = true;
    this.errorMessage = '';
    const payload = {
      ...this.raiseForm,
      buyerId: this.buyerId,
      raisedByName: localStorage.getItem('fullName') || localStorage.getItem('email') || 'Buyer User',
      raisedByUserId: Number(localStorage.getItem('userId')) || null
    };
    this.dataService.createCap(payload).subscribe({
      next: (res: any) => {
        this.isSavingCap = false;
        this.showRaiseModal = false;
        const d = res?.success ? res.data : (res?.data || res);
        this.router.navigate(['/cap-detail', d.id]);
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to raise the CAP.';
        this.isSavingCap = false;
      }
    });
  }
}
