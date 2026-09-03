import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../../shared/service/DataService';
import { AuthService } from '../../../shared/service/AuthService';

@Component({
  selector: 'app-ses-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ses-list.component.html',
  styleUrls: ['./ses-list.component.css']
})
export class SesListComponent implements OnInit {

  allSES:      any[] = [];
  filteredSES: any[] = [];

  searchText   = '';
  statusFilter = 'ALL';

  isLoading    = false;
  errorMessage = '';
  successMessage = '';

  // ── Detail / action modal ──────────────────────────────────────────
  selectedSES: any = null;
  isDetailModalOpen = false;

  isActionModalOpen = false;
  // 'reject'  = send back for resubmission (submitter fixes and resubmits)
  // 'decline' = permanent reject, a dead end — cannot be edited or resubmitted
  pendingAction: 'approve' | 'reject' | 'decline' | null = null;
  // Which decision this action modal is for — the SES itself ("service was performed") or its
  // additional-items/spares quote ("I'll pay for these extra items"). Two independent decisions
  // that happen to share the same simple approve/reject-with-remarks modal UI.
  pendingActionTarget: 'ses' | 'additionalItems' = 'ses';
  actionRemarks = '';
  isPerformingAction = false;

  buyerName = '';

  // ── Service Performance Review ("Rate This Visit") ──────────────────
  // Optional, skippable — prompted right after a buyer approves an SES, and also reachable
  // later from the detail modal for any already-approved SES that hasn't been rated yet.
  standardMetrics: string[] = [];
  showRatingModal = false;
  ratingTargetSes: any = null;
  ratingScores: { metricName: string; score: number; isStandard: boolean }[] = [];
  ratingRemarks = '';
  isSavingRating = false;
  selectedSesHasReview = false;

  // Either side can fill in an SES; only the buyer approves/rejects one (see the *ngIf guards
  // in the template) — that's the whole point of the gate, an independent confirmation before
  // an invoice can be approved. A supplier only ever sees their own submissions here; a buyer
  // sees every SES across their company, same as before this changed.
  isSupplierMode = false;
  actorId = 0;

  // ── Attachments (common + per-line-item + per-additional-item) ──────
  // Either side can upload/view. Loaded together with the detail modal; keyed maps let the
  // template look up "this row's files" in O(1) without filtering on every change cycle.
  commonAttachments: any[] = [];
  lineItemAttachmentsMap: { [lineItemId: number]: any[] } = {};
  additionalItemAttachmentsMap: { [additionalItemId: number]: any[] } = {};
  isUploadingAttachment = false;

  // ── Service Report ("Submit Service Report" — supplier files this after the SES is
  // approved; buyer/RFQ-creator receives and downloads it) ────────────────────────────
  selectedSesHasReport = false;
  // Cached alongside the exists-check so the Download button can be a plain <a href> —
  // window.open() from inside an async subscribe() callback gets silently blocked by the
  // browser's popup blocker since it isn't a direct synchronous result of the click.
  selectedSesReportId: number | null = null;
  showReportModal = false;
  reportTargetSes: any = null;
  reportForm = {
    technicianName: '', technicianContact: '', serviceAddress: '',
    equipmentDetails: '', partsMaterialsUsed: '', issuesFound: '',
    workPerformed: '', recommendations: '',
    customerSignatureName: '', customerSignatureTitle: '',
    // Customer Service Report style fields (matches the reference layout)
    customerContactName: '', customerCity: '', customerState: '', customerZipCode: '',
    callType: '' as '' | 'WARRANTY' | 'AMC' | 'OTHER',
    instructionFromName: '', instructionDate: '',
    systemDown: null as boolean | null,
    equipmentType: '', equipmentMake: '', equipmentModel: '', equipmentSerialNo: '',
    reportedBy: '', natureOfProblem: '',
    // Outcome of the visit — was the reported problem actually fixed, plus a short note.
    resolutionStatus: '' as '' | 'RESOLVED' | 'NOT_RESOLVED' | 'PARTIALLY_RESOLVED',
    briefNote: ''
  };
  reportPhotos: { file: File; base64: string; previewUrl: string }[] = [];
  // "Machines / Parts Serviced" grid — Date | Machine Name | Part Name. Deliberately no money
  // columns: the service report is a record of work done, not a commercial document. Rates and
  // amounts live on the PO and invoice.
  reportDetailRows: { serviceDate: string; machineName: string; partName: string }[] = [];
  isSavingReport = false;

  addReportDetailRow(): void {
    this.reportDetailRows.push({ serviceDate: '', machineName: '', partName: '' });
  }

  removeReportDetailRow(index: number): void {
    this.reportDetailRows.splice(index, 1);
  }

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isSupplierMode = this.authService.isSupplier();

    if (this.isSupplierMode) {
      this.actorId  = this.authService.getSupplierId() || 0;
      this.buyerName = this.authService.getSupplierName() || localStorage.getItem('fullName') || localStorage.getItem('email') || 'Supplier';
    } else {
      this.buyerName =
        localStorage.getItem('buyerName') ||
        localStorage.getItem('fullName')  ||
        localStorage.getItem('email')     || 'Buyer';
    }

    if (!this.isSupplierMode) {
      this.dataService.getStandardPerformanceMetrics().subscribe({
        next: (res: any) => { this.standardMetrics = res?.data || []; },
        error: () => { this.standardMetrics = []; }
      });
    }

    this.loadSES();
  }

  loadSES(): void {
    this.isLoading = true;
    const source$ = this.isSupplierMode
      ? this.dataService.getSESByUser(this.actorId)
      : this.dataService.getAllSES();

    source$.subscribe({
      next: (res: any) => {
        this.allSES = Array.isArray(res) ? res : (res.data || []);
        this.applyFilters();
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load Service Entry Sheets.';
        this.isLoading = false;
      }
    });
  }

  applyFilters(): void {
    const q = this.searchText.toLowerCase().trim();
    this.filteredSES = this.allSES.filter(s => {
      const matchesStatus = this.statusFilter === 'ALL' || s.status === this.statusFilter;
      const matchesSearch = !q ||
        (s.sesNumber || '').toLowerCase().includes(q) ||
        (s.poNumber  || '').toLowerCase().includes(q) ||
        (s.supplierName || '').toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }

  get counts() {
    return {
      total:     this.allSES.length,
      draft:     this.allSES.filter(s => s.status === 'DRAFT').length,
      submitted: this.allSES.filter(s => s.status === 'SUBMITTED').length,
      approved:  this.allSES.filter(s => s.status === 'APPROVED').length,
      // "Sent back" and permanently "Rejected" are counted together here so the stat card keeps
      // meaning "not approved", but they are distinct statuses everywhere else.
      rejected:  this.allSES.filter(s => s.status === 'REJECTED' || s.status === 'DECLINED').length,
    };
  }

  statusBadgeClass(status: string): string {
    switch (status) {
      case 'DRAFT':     return 'badge-draft';
      case 'SUBMITTED': return 'badge-submitted';
      case 'APPROVED':  return 'badge-approved';
      case 'REJECTED':  return 'badge-sentback';
      case 'DECLINED':  return 'badge-rejected';
      default:          return 'badge-draft';
    }
  }

  /** REJECTED now means "sent back for resubmission" and DECLINED means a permanent reject, so
   *  the raw status names would read backwards to a user — these are the labels actually shown. */
  statusLabel(status: string): string {
    switch (status) {
      case 'REJECTED': return 'SENT BACK';
      case 'DECLINED': return 'REJECTED';
      default:         return status || '';
    }
  }

  goToCreate(): void { this.router.navigate(['/ses-create']); }

  /** Opens the edit-and-resubmit form for a REJECTED SES, or an APPROVED SES whose additional-
   *  items quote was sent back — ses-create.component figures out which case it is from the
   *  loaded data (see its sesEditableFully). */
  editAndResubmit(ses: any): void {
    this.router.navigate(['/ses-create', ses.id]);
  }

  // ── Detail modal ────────────────────────────────────────────────────

  openDetail(ses: any): void {
    this.isLoading = true;
    this.dataService.getSESById(ses.id).subscribe({
      next: (res: any) => {
        this.selectedSES = res?.success ? res.data : (res.data || res);
        this.isDetailModalOpen = true;
        this.isLoading = false;
        this.checkExistingReview();
        this.checkExistingReport();
        this.loadAttachments(this.selectedSES.id);
      },
      error: () => {
        this.selectedSES = ses;
        this.isDetailModalOpen = true;
        this.isLoading = false;
        this.checkExistingReview();
        this.checkExistingReport();
        this.loadAttachments(ses.id);
      }
    });
  }

  closeDetail(): void {
    this.isDetailModalOpen = false;
    this.selectedSES = null;
    this.selectedSesHasReview = false;
    this.selectedSesHasReport = false;
    this.selectedSesReportId = null;
    this.commonAttachments = [];
    this.lineItemAttachmentsMap = {};
    this.additionalItemAttachmentsMap = {};
  }

  // ── Attachments ──────────────────────────────────────────────────────

  private loadAttachments(sesId: number): void {
    this.dataService.getSESCommonAttachments(sesId).subscribe({
      next: (res: any) => { this.commonAttachments = res?.data || []; },
      error: () => { this.commonAttachments = []; }
    });
    this.dataService.getSESLineItemAttachmentsForSes(sesId).subscribe({
      next: (res: any) => { this.lineItemAttachmentsMap = res?.data || {}; },
      error: () => { this.lineItemAttachmentsMap = {}; }
    });
    this.dataService.getSESAdditionalItemAttachmentsForSes(sesId).subscribe({
      next: (res: any) => { this.additionalItemAttachmentsMap = res?.data || {}; },
      error: () => { this.additionalItemAttachmentsMap = {}; }
    });
  }

  /** Converts selected files to base64 and calls back with the upload-ready payload. */
  private filesToAttachmentPayload(event: Event, callback: (files: { filename: string; contentType: string; base64: string }[]) => void): void {
    const input = event.target as HTMLInputElement;
    const files = input.files ? Array.from(input.files) : [];
    input.value = ''; // allow re-selecting the same file(s) later
    if (files.length === 0) return;

    const results: { filename: string; contentType: string; base64: string }[] = [];
    let remaining = files.length;
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const commaIndex = result.indexOf(',');
        const base64 = commaIndex >= 0 ? result.substring(commaIndex + 1) : result;
        results.push({ filename: file.name, contentType: file.type || 'application/octet-stream', base64 });
        remaining--;
        if (remaining === 0) callback(results);
      };
      reader.readAsDataURL(file);
    }
  }

  onCommonAttachmentSelected(event: Event): void {
    if (!this.selectedSES) return;
    const sesId = this.selectedSES.id;
    this.filesToAttachmentPayload(event, (files) => {
      this.isUploadingAttachment = true;
      this.dataService.uploadSESCommonAttachments(sesId, files, this.buyerName).subscribe({
        next: (res: any) => {
          this.commonAttachments = res?.data || this.commonAttachments;
          this.isUploadingAttachment = false;
        },
        error: (err: any) => {
          this.errorMessage = err?.error?.message || 'Failed to upload attachment.';
          this.isUploadingAttachment = false;
        }
      });
    });
  }

  onLineItemAttachmentSelected(event: Event, lineItemId: number): void {
    this.filesToAttachmentPayload(event, (files) => {
      this.isUploadingAttachment = true;
      this.dataService.uploadSESLineItemAttachments(lineItemId, files, this.buyerName).subscribe({
        next: (res: any) => {
          this.lineItemAttachmentsMap = { ...this.lineItemAttachmentsMap, [lineItemId]: res?.data || [] };
          this.isUploadingAttachment = false;
        },
        error: (err: any) => {
          this.errorMessage = err?.error?.message || 'Failed to upload attachment.';
          this.isUploadingAttachment = false;
        }
      });
    });
  }

  onAdditionalItemAttachmentSelected(event: Event, additionalItemId: number): void {
    this.filesToAttachmentPayload(event, (files) => {
      this.isUploadingAttachment = true;
      this.dataService.uploadSESAdditionalItemAttachments(additionalItemId, files, this.buyerName).subscribe({
        next: (res: any) => {
          this.additionalItemAttachmentsMap = { ...this.additionalItemAttachmentsMap, [additionalItemId]: res?.data || [] };
          this.isUploadingAttachment = false;
        },
        error: (err: any) => {
          this.errorMessage = err?.error?.message || 'Failed to upload attachment.';
          this.isUploadingAttachment = false;
        }
      });
    });
  }

  getCommonAttachmentDownloadUrl(attachmentId: number): string {
    return this.dataService.getSESCommonAttachmentDownloadUrl(attachmentId);
  }

  getLineItemAttachmentDownloadUrl(attachmentId: number): string {
    return this.dataService.getSESLineItemAttachmentDownloadUrl(attachmentId);
  }

  getAdditionalItemAttachmentDownloadUrl(attachmentId: number): string {
    return this.dataService.getSESAdditionalItemAttachmentDownloadUrl(attachmentId);
  }

  private checkExistingReview(): void {
    this.selectedSesHasReview = false;
    if (this.isSupplierMode || this.selectedSES?.status !== 'APPROVED') return;
    this.dataService.servicePerformanceReviewExistsForSes(this.selectedSES.id).subscribe({
      next: (res: any) => { this.selectedSesHasReview = !!res?.exists; },
      error: () => { this.selectedSesHasReview = false; }
    });
  }

  // ── Service Report ──────────────────────────────────────────────────

  private checkExistingReport(): void {
    this.selectedSesHasReport = false;
    this.selectedSesReportId = null;
    if (this.selectedSES?.status !== 'APPROVED') return;
    // Fetches the full report (not just the /exists boolean) so its id is on hand up front —
    // the Download button binds straight to the PDF url as a plain <a href>, never through an
    // async window.open() call that browsers silently block as an unrequested popup.
    this.dataService.getServiceReportBySesId(this.selectedSES.id).subscribe({
      next: (res: any) => {
        const report = res?.success ? res.data : (res?.data || res);
        this.selectedSesHasReport = !!report?.id;
        this.selectedSesReportId = report?.id || null;
      },
      error: () => { this.selectedSesHasReport = false; this.selectedSesReportId = null; }
    });
  }

  openReportModal(ses: any): void {
    this.reportTargetSes = ses;
    this.reportForm = {
      technicianName: '', technicianContact: '',
      serviceAddress: '', equipmentDetails: '', partsMaterialsUsed: '',
      issuesFound: '', workPerformed: '', recommendations: '',
      customerSignatureName: '', customerSignatureTitle: '',
      customerContactName: '', customerCity: '', customerState: '', customerZipCode: '',
      callType: '', instructionFromName: '', instructionDate: '',
      systemDown: null,
      equipmentType: '', equipmentMake: '', equipmentModel: '', equipmentSerialNo: '',
      reportedBy: this.buyerName, natureOfProblem: '',
      resolutionStatus: '', briefNote: ''
    };
    this.reportPhotos = [];
    this.reportDetailRows = [];
    this.addReportDetailRow();
    this.showReportModal = true;
  }

  closeReportModal(): void {
    this.showReportModal = false;
    this.reportTargetSes = null;
    this.reportPhotos = [];
    this.reportDetailRows = [];
  }

  onReportPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files ? Array.from(input.files) : [];
    input.value = '';
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const commaIndex = result.indexOf(',');
        const base64 = commaIndex >= 0 ? result.substring(commaIndex + 1) : result;
        this.reportPhotos.push({ file, base64, previewUrl: result });
      };
      reader.readAsDataURL(file);
    }
  }

  removeReportPhoto(index: number): void {
    this.reportPhotos.splice(index, 1);
  }

  submitServiceReportForm(): void {
    if (!this.reportTargetSes) return;
    if (!this.reportForm.workPerformed?.trim()) {
      this.errorMessage = 'Please describe the work performed.';
      return;
    }
    if (!this.reportForm.resolutionStatus) {
      this.errorMessage = 'Please state whether the issue was solved.';
      return;
    }

    this.isSavingReport = true;
    const userId = Number(localStorage.getItem('userId') || localStorage.getItem('supplierId') || localStorage.getItem('buyerId')) || 0;
    const payload = {
      sesId: this.reportTargetSes.id,
      ...this.reportForm,
      submittedByUserId: userId,
      submittedByName: this.buyerName,
      attachments: this.reportPhotos.map(p => ({
        filename: p.file.name,
        contentType: p.file.type || 'application/octet-stream',
        base64: p.base64
      })),
      detailRows: this.reportDetailRows
        .filter(r => r.machineName?.trim() || r.partName?.trim())
        .map(r => ({
          serviceDate: r.serviceDate || null,
          machineName: r.machineName,
          partName: r.partName
        }))
    };

    this.dataService.submitServiceReport(payload).subscribe({
      next: (res: any) => {
        const report = res?.success ? res.data : (res?.data || res);
        this.successMessage = `Service report submitted for ${this.reportTargetSes.sesNumber}.`;
        this.isSavingReport = false;
        this.selectedSesHasReport = true;
        this.selectedSesReportId = report?.id || null;
        this.closeReportModal();
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to submit service report.';
        this.isSavingReport = false;
      }
    });
  }

  getServiceReportPdfUrl(reportId: number): string {
    return this.dataService.getServiceReportPdfUrl(reportId);
  }

  // ── Submit (from DRAFT) ─────────────────────────────────────────────

  submitSES(ses: any): void {
    this.isPerformingAction = true;
    this.dataService.submitSES(ses.id).subscribe({
      next: () => {
        this.successMessage = `${ses.sesNumber} submitted for approval.`;
        this.isPerformingAction = false;
        this.closeDetail();
        this.loadSES();
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to submit.';
        this.isPerformingAction = false;
      }
    });
  }

  // ── Approve / Reject ────────────────────────────────────────────────

  openActionModal(action: 'approve' | 'reject' | 'decline', target: 'ses' | 'additionalItems' = 'ses'): void {
    this.pendingAction = action;
    this.pendingActionTarget = target;
    this.actionRemarks = '';
    this.isActionModalOpen = true;
  }

  closeActionModal(): void {
    this.isActionModalOpen = false;
    this.pendingAction = null;
    this.pendingActionTarget = 'ses';
    this.actionRemarks = '';
  }

  confirmAction(): void {
    if (!this.selectedSES || !this.pendingAction) return;

    if (this.pendingAction !== 'approve' && !this.actionRemarks.trim()) {
      this.errorMessage = this.pendingAction === 'decline'
        ? 'A reason is required to reject this permanently.'
        : 'Remarks are required so the submitter knows what to change.';
      return;
    }

    this.isPerformingAction = true;
    const sesId = this.selectedSES.id;
    const isAdditionalItems = this.pendingActionTarget === 'additionalItems';

    const obs = isAdditionalItems
      ? (this.pendingAction === 'approve'
          ? this.dataService.approveAdditionalItems(sesId, this.buyerName)
          : this.pendingAction === 'decline'
            ? this.dataService.declineAdditionalItems(sesId, this.buyerName, this.actionRemarks)
            : this.dataService.rejectAdditionalItems(sesId, this.buyerName, this.actionRemarks))
      : (this.pendingAction === 'approve'
          ? this.dataService.approveSES(sesId, this.buyerName)
          : this.pendingAction === 'decline'
            ? this.dataService.declineSES(sesId, this.buyerName, this.actionRemarks)
            : this.dataService.rejectSES(sesId, this.buyerName, this.actionRemarks));

    // Snapshot before closeDetail() nulls selectedSES out — needed to open the rating prompt.
    const justApprovedSes = (!isAdditionalItems && this.pendingAction === 'approve') ? this.selectedSES : null;

    obs.subscribe({
      next: (res: any) => {
        if (isAdditionalItems && this.pendingAction === 'approve') {
          const followUpPoNumber = res?.data?.followUpPoNumber || res?.followUpPo?.poNumber;
          this.successMessage = `Additional items quote approved.` +
            (followUpPoNumber ? ` Follow-up PO ${followUpPoNumber} created.` : '');
        } else if (isAdditionalItems) {
          this.successMessage = this.pendingAction === 'decline'
            ? `Additional items quote rejected and closed.`
            : `Additional items quote sent back for resubmission.`;
        } else {
          this.successMessage = this.pendingAction === 'approve'
            ? `${this.selectedSES.sesNumber} approved successfully.`
            : this.pendingAction === 'decline'
              ? `${this.selectedSES.sesNumber} rejected and closed.`
              : `${this.selectedSES.sesNumber} sent back for resubmission.`;
        }
        this.isPerformingAction = false;
        this.closeActionModal();
        this.closeDetail();
        this.loadSES();
        if (justApprovedSes && this.standardMetrics.length > 0) {
          this.openRatingModal(justApprovedSes);
        }
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Action failed.';
        this.isPerformingAction = false;
      }
    });
  }

  // ── Service Performance Review ("Rate This Visit") ──────────────────

  openRatingModal(ses: any): void {
    this.ratingTargetSes = ses;
    this.ratingScores = this.standardMetrics.map(name => ({ metricName: name, score: 0, isStandard: true }));
    this.ratingRemarks = '';
    this.showRatingModal = true;
  }

  closeRatingModal(): void {
    this.showRatingModal = false;
    this.ratingTargetSes = null;
    this.ratingScores = [];
    this.ratingRemarks = '';
  }

  addCustomRatingMetric(): void {
    this.ratingScores.push({ metricName: '', score: 0, isStandard: false });
  }

  removeRatingMetric(index: number): void {
    this.ratingScores.splice(index, 1);
  }

  setRatingScore(index: number, score: number): void {
    this.ratingScores[index].score = score;
  }

  skipRating(): void {
    this.closeRatingModal();
  }

  submitRating(): void {
    if (!this.ratingTargetSes) return;
    if (this.ratingScores.length === 0) {
      this.errorMessage = 'Add at least one metric to rate.';
      return;
    }
    for (const m of this.ratingScores) {
      if (!m.metricName?.trim()) {
        this.errorMessage = 'Every metric needs a name.';
        return;
      }
      if (!m.score || m.score < 1 || m.score > 5) {
        this.errorMessage = `Please rate "${m.metricName}" (1-5 stars).`;
        return;
      }
    }

    this.isSavingRating = true;
    const userId = Number(localStorage.getItem('userId') || localStorage.getItem('buyerId')) || 0;
    this.dataService.createServicePerformanceReview({
      sesId: this.ratingTargetSes.id,
      reviewedByUserId: userId,
      reviewedByName: this.buyerName,
      remarks: this.ratingRemarks?.trim() || null,
      metrics: this.ratingScores.map(m => ({ metricName: m.metricName.trim(), score: m.score }))
    }).subscribe({
      next: () => {
        this.successMessage = `Performance review saved for ${this.ratingTargetSes?.supplierName || 'this supplier'}.`;
        this.isSavingRating = false;
        this.selectedSesHasReview = true;
        this.closeRatingModal();
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to save performance review.';
        this.isSavingRating = false;
      }
    });
  }
}
