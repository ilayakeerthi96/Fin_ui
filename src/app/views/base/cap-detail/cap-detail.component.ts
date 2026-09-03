import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../../../shared/service/DataService';
import { AuthService } from '../../../shared/service/AuthService';

/**
 * One Corrective Action Plan, full lifecycle: Root Cause -> Corrective Actions (each with its own
 * owner/due date/status) -> Evidence -> Effectiveness Verification -> Closure. The buyer side
 * (canManage) owns root cause, verification, closure and reopening — they're the ones confirming
 * the fix actually worked. Both sides can add/progress actions and attach evidence, since in
 * practice either the buyer's QA team or the supplier's team may be the one driving an action.
 */
@Component({
  selector: 'app-cap-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cap-detail.component.html',
  styleUrls: ['./cap-detail.component.css']
})
export class CapDetailComponent implements OnInit {

  /** Caps the re-inspection date picker — it can't have happened in the future. */
  readonly todayIso = new Date().toISOString().slice(0, 10);

  capId = 0;
  cap: any = null;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  isSupplierMode = false;
  /** Buyer/admin only — the customer side confirms root cause, verifies effectiveness and closes. */
  canManage = false;

  readonly ACTION_STATUSES = ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'BLOCKED', 'NOT_IMPLEMENTED'];

  /** True while any modal is open — used to hide the page-level alert so it doesn't bleed through
   *  a modal's translucent backdrop; each modal shows the same errorMessage inside itself instead. */
  get anyModalOpen(): boolean {
    return this.showAddActionModal || this.showEvidenceModal || this.showVerifyModal
        || this.showCloseModal || this.showReopenModal;
  }

  get isClosed(): boolean { return this.cap?.status === 'CLOSED'; }
  get canEdit(): boolean { return !!this.cap && !this.isClosed; }
  get allActionsSettled(): boolean {
    const actions = this.cap?.actions || [];
    return actions.length > 0 && actions.every((a: any) => a.status === 'COMPLETED' || a.status === 'NOT_IMPLEMENTED');
  }

  /** Who is expected to fill in the Corrective Action tab — the backend derives this from
   *  disposition + internalCorrectionRequired: default Supplier, or Internal/Maintenance team
   *  only for Accept with Deviation cases that need an in-house fix. */
  get correctiveActionOwner(): 'SUPPLIER' | 'INTERNAL' { return this.cap?.correctiveActionOwner || 'SUPPLIER'; }
  get correctiveActionOwnerLabel(): string {
    return this.correctiveActionOwner === 'INTERNAL' ? 'Internal / Maintenance Team' : 'Supplier';
  }
  /** Only the owning side may add/progress actions — the supplier for a normal CAP, or our own
   *  team for an Accept-with-Deviation case that needs an internal fix. */
  get canEditActions(): boolean {
    if (!this.canEdit) return false;
    return this.correctiveActionOwner === 'INTERNAL' ? !this.isSupplierMode : this.isSupplierMode;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isSupplierMode = this.authService.isSupplier();
    this.canManage = !this.isSupplierMode; // buyer or admin viewing this page is the managing side
    this.capId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.capId) this.load();
    else this.errorMessage = 'No CAP specified.';
  }

  load(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.dataService.getCap(this.capId).subscribe({
      next: (res: any) => {
        this.cap = res?.success ? res.data : (res?.data || res);
        this.isLoading = false;
        this.rootCauseForm.rootCause = this.cap.rootCause || '';
        this.rootCauseForm.rootCauseCategory = this.cap.rootCauseCategory || '';
        this.dispositionForm = {
          returnPackedBy: this.cap.returnPackedBy || '',
          returnInChargeName: this.cap.returnInChargeName || '',
          internalCorrectionRequired: !!this.cap.internalCorrectionRequired
        };
        this.reinspectionForm = {
          reinspectionDate: this.cap.reinspectionDate || '',
          reinspectionBy: this.cap.reinspectionBy || this.currentUserName(),
          reinspectionApproved: this.cap.reinspectionApproved,
          reinspectionRemarks: this.cap.reinspectionRemarks || ''
        };
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to load this CAP.';
        this.isLoading = false;
      }
    });
  }

  private currentUserName(): string {
    return localStorage.getItem('fullName') || localStorage.getItem('email') || 'User';
  }

  goBack(): void { this.router.navigate(['/cap-list']); }

  // ── Labels ───────────────────────────────────────────────────────────

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
    const map: { [k: string]: string } = { LOW: 'cap-sev-low', MEDIUM: 'cap-sev-medium', HIGH: 'cap-sev-high', CRITICAL: 'cap-sev-critical' };
    return map[severity] || '';
  }
  actionStatusLabel(status: string): string {
    const map: { [k: string]: string } = {
      PENDING: 'Pending', IN_PROGRESS: 'In Progress', COMPLETED: 'Completed', BLOCKED: 'Blocked', NOT_IMPLEMENTED: 'Not Implemented'
    };
    return map[status] || status;
  }

  // ── Disposition — what happened to the goods, decided first on this CAP ─────

  dispositionForm: any = {};
  isSavingDisposition = false;

  /** REJECT / REJECT_AND_REPLACE — goods are physically going back to the supplier. */
  get isReturnDisposition(): boolean {
    return this.cap?.disposition === 'REJECT' || this.cap?.disposition === 'REJECT_AND_REPLACE';
  }
  get isAcceptWithDeviation(): boolean { return this.cap?.disposition === 'ACCEPT_WITH_DEVIATION'; }
  /** Re-inspection is expected (never enforced) whenever the fix was internal, or a replacement
   *  physically arrived from the supplier — the backend derives this the same way. */
  get reinspectionExpected(): boolean { return !!this.cap?.reinspectionExpected; }

  dispositionLabel(disposition: string): string {
    const map: { [k: string]: string } = {
      ACCEPT_WITH_DEVIATION: 'Accept with Deviation', REJECT: 'Reject', REJECT_AND_REPLACE: 'Reject & Replace'
    };
    return map[disposition] || disposition;
  }

  saveDispositionDetails(): void {
    this.isSavingDisposition = true;
    this.errorMessage = ''; this.successMessage = '';
    const payload: any = this.isReturnDisposition
      ? { returnPackedBy: this.dispositionForm.returnPackedBy, returnInChargeName: this.dispositionForm.returnInChargeName }
      : { internalCorrectionRequired: !!this.dispositionForm.internalCorrectionRequired };
    this.dataService.updateCapDispositionDetails(this.capId, payload).subscribe({
      next: (res: any) => {
        this.cap = res?.success ? res.data : (res?.data || res);
        this.isSavingDisposition = false;
        this.successMessage = 'Disposition details saved.';
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to save disposition details.';
        this.isSavingDisposition = false;
      }
    });
  }

  // ── Re-inspection — recorded when the fix was internal or a replacement arrived; a log entry,
  // never a gate on anything else. ─────────────────────────────────────────

  reinspectionForm: any = {};
  isSavingReinspection = false;

  saveReinspection(): void {
    this.isSavingReinspection = true;
    this.errorMessage = ''; this.successMessage = '';
    const payload = {
      reinspectionDate: this.reinspectionForm.reinspectionDate || null,
      reinspectionBy: this.reinspectionForm.reinspectionBy,
      reinspectionApproved: this.reinspectionForm.reinspectionApproved,
      reinspectionRemarks: this.reinspectionForm.reinspectionRemarks
    };
    this.dataService.recordCapReinspection(this.capId, payload).subscribe({
      next: (res: any) => {
        this.cap = res?.success ? res.data : (res?.data || res);
        this.isSavingReinspection = false;
        this.successMessage = 'Re-inspection recorded.';
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to record the re-inspection.';
        this.isSavingReinspection = false;
      }
    });
  }

  // ── Root cause ───────────────────────────────────────────────────────

  rootCauseForm: any = { rootCause: '', rootCauseCategory: '' };
  isSavingRootCause = false;

  saveRootCause(): void {
    if (!this.rootCauseForm.rootCause?.trim()) { this.errorMessage = 'Describe the root cause first.'; return; }
    this.isSavingRootCause = true;
    this.errorMessage = ''; this.successMessage = '';
    this.dataService.updateCapRootCause(this.capId, {
      rootCause: this.rootCauseForm.rootCause,
      rootCauseCategory: this.rootCauseForm.rootCauseCategory,
      recordedBy: this.currentUserName()
    }).subscribe({
      next: (res: any) => {
        this.cap = res?.success ? res.data : (res?.data || res);
        this.isSavingRootCause = false;
        this.successMessage = 'Root cause recorded.';
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to save the root cause.';
        this.isSavingRootCause = false;
      }
    });
  }

  // ── Corrective actions ──────────────────────────────────────────────

  showAddActionModal = false;
  isSavingAction = false;
  actionForm: any = this.blankActionForm();

  private blankActionForm(): any {
    return { actionItem: '', actionCategory: '', assignedTo: '', startDate: '', targetDate: '', resourcesRequired: '', approach: '', remarks: '' };
  }

  openAddActionModal(): void {
    if (!this.cap?.rootCause) {
      this.errorMessage = 'Record the root cause before adding a corrective action.';
      return;
    }
    this.actionForm = this.blankActionForm();
    this.showAddActionModal = true;
    this.errorMessage = '';
  }
  closeAddActionModal(): void { this.showAddActionModal = false; }

  submitAddAction(): void {
    if (!this.actionForm.actionItem?.trim()) { this.errorMessage = 'Describe the corrective action.'; return; }
    if (!this.actionForm.assignedTo?.trim()) { this.errorMessage = 'Every action needs an owner.'; return; }
    if (!this.actionForm.targetDate) { this.errorMessage = 'Every action needs a due date.'; return; }

    this.isSavingAction = true;
    this.errorMessage = '';
    this.dataService.addCapAction(this.capId, this.actionForm).subscribe({
      next: (res: any) => {
        this.cap = res?.success ? res.data : (res?.data || res);
        this.isSavingAction = false;
        this.showAddActionModal = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to add the action.';
        this.isSavingAction = false;
      }
    });
  }

  /** Tracks which action row is mid-edit for its "not implemented" reason before we send the update. */
  pendingNotImplementedReason: { [actionId: number]: string } = {};

  onActionStatusChange(action: any, newStatus: string): void {
    if (newStatus === 'NOT_IMPLEMENTED' && !this.pendingNotImplementedReason[action.id]) {
      // Wait for the reason box (rendered inline) before saving — see submitNotImplemented().
      action._pendingStatus = newStatus;
      return;
    }
    this.saveActionStatus(action.id, newStatus, null);
  }

  submitNotImplemented(action: any): void {
    const reason = this.pendingNotImplementedReason[action.id];
    if (!reason?.trim()) { this.errorMessage = 'Explain why this action was not implemented.'; return; }
    this.saveActionStatus(action.id, 'NOT_IMPLEMENTED', reason);
  }

  private saveActionStatus(actionId: number, status: string, notImplementedReason: string | null): void {
    this.errorMessage = '';
    const payload: any = { status };
    if (notImplementedReason) payload.notImplementedReason = notImplementedReason;
    if (status === 'COMPLETED') payload.completedBy = this.currentUserName();
    this.dataService.updateCapAction(actionId, payload).subscribe({
      next: (res: any) => {
        this.cap = res?.success ? res.data : (res?.data || res);
        delete this.pendingNotImplementedReason[actionId];
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to update the action.';
        this.load(); // re-sync the dropdown with the real saved state
      }
    });
  }

  // ── Evidence ─────────────────────────────────────────────────────────

  showEvidenceModal = false;
  evidenceActionId: number | null = null;
  evidenceDescription = '';
  evidenceFile: File | null = null;
  isUploadingEvidence = false;

  openEvidenceModal(actionId: number | null): void {
    this.evidenceActionId = actionId;
    this.evidenceDescription = '';
    this.evidenceFile = null;
    this.showEvidenceModal = true;
    this.errorMessage = '';
  }
  closeEvidenceModal(): void { this.showEvidenceModal = false; }

  onEvidenceFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.evidenceFile = input.files && input.files.length ? input.files[0] : null;
  }

  uploadEvidence(): void {
    if (!this.evidenceFile) { this.errorMessage = 'Choose a file first.'; return; }
    this.isUploadingEvidence = true;
    this.errorMessage = '';
    this.dataService.uploadCapEvidence(
      this.capId, this.evidenceFile, this.evidenceActionId, this.evidenceDescription, this.currentUserName()
    ).subscribe({
      next: (res: any) => {
        this.cap = res?.success ? res.data : (res?.data || res);
        this.isUploadingEvidence = false;
        this.showEvidenceModal = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to upload evidence.';
        this.isUploadingEvidence = false;
      }
    });
  }

  evidenceForAction(actionId: number): any[] {
    return (this.cap?.evidence || []).filter((e: any) => e.actionId === actionId);
  }
  get capLevelEvidence(): any[] {
    return (this.cap?.evidence || []).filter((e: any) => !e.actionId);
  }

  downloadEvidence(evidenceId: number): void {
    window.open(this.dataService.getCapEvidenceDownloadUrl(evidenceId), '_blank');
  }

  // ── Verification & closure ──────────────────────────────────────────

  isSubmittingVerification = false;
  submitForVerification(): void {
    this.isSubmittingVerification = true;
    this.errorMessage = '';
    this.dataService.submitCapForVerification(this.capId).subscribe({
      next: (res: any) => { this.cap = res?.success ? res.data : (res?.data || res); this.isSubmittingVerification = false; },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to submit for verification.';
        this.isSubmittingVerification = false;
      }
    });
  }

  showVerifyModal = false;
  verifyForm: any = { result: 'EFFECTIVE', remarks: '' };
  isVerifying = false;

  openVerifyModal(): void { this.verifyForm = { result: 'EFFECTIVE', remarks: '' }; this.showVerifyModal = true; this.errorMessage = ''; }
  closeVerifyModal(): void { this.showVerifyModal = false; }

  submitVerify(): void {
    if (!this.verifyForm.remarks?.trim()) { this.errorMessage = 'Add a remark explaining the verification result.'; return; }
    this.isVerifying = true;
    this.errorMessage = '';
    this.dataService.verifyCapEffectiveness(this.capId, {
      result: this.verifyForm.result, remarks: this.verifyForm.remarks, verifiedBy: this.currentUserName()
    }).subscribe({
      next: (res: any) => { this.cap = res?.success ? res.data : (res?.data || res); this.isVerifying = false; this.showVerifyModal = false; },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to record the verification.';
        this.isVerifying = false;
      }
    });
  }

  showCloseModal = false;
  closureRemarks = '';
  isClosingCap = false;

  openCloseModal(): void { this.closureRemarks = ''; this.showCloseModal = true; this.errorMessage = ''; }
  closeCloseModal(): void { this.showCloseModal = false; }

  submitClose(): void {
    if (!this.closureRemarks?.trim()) { this.errorMessage = 'Add closure remarks.'; return; }
    this.isClosingCap = true;
    this.errorMessage = '';
    this.dataService.closeCap(this.capId, { closureRemarks: this.closureRemarks, closedBy: this.currentUserName() }).subscribe({
      next: (res: any) => { this.cap = res?.success ? res.data : (res?.data || res); this.isClosingCap = false; this.showCloseModal = false; },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to close the CAP.';
        this.isClosingCap = false;
      }
    });
  }

  showReopenModal = false;
  reopenReason = '';
  isReopeningCap = false;

  openReopenModal(): void { this.reopenReason = ''; this.showReopenModal = true; this.errorMessage = ''; }
  closeReopenModal(): void { this.showReopenModal = false; }

  submitReopen(): void {
    if (!this.reopenReason?.trim()) { this.errorMessage = 'Explain why this CAP is being reopened.'; return; }
    this.isReopeningCap = true;
    this.errorMessage = '';
    this.dataService.reopenCap(this.capId, { reason: this.reopenReason }).subscribe({
      next: (res: any) => { this.cap = res?.success ? res.data : (res?.data || res); this.isReopeningCap = false; this.showReopenModal = false; },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to reopen the CAP.';
        this.isReopeningCap = false;
      }
    });
  }
}
