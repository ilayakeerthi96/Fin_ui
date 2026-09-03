import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../../../shared/service/DataService';
import { AuthService } from '../../../shared/service/AuthService';

interface SESLineItem {
  id?:                number;  // the SES line item's own DB id — only set/needed in edit mode,
                                // so updateSES() can match this row back to the right one to update
  poLineItemId:      number;
  itemOrder:         number;
  itemDescription:   string;
  uom:                string;
  poQuantity:         number;
  poUnitRate:         number;
  poLineTotal:        number;
  serviceCompleted:   boolean;
  completedQuantity:  number;
  remarks:            string;
}

/** A spare part / extra item the supplier needs for this visit, with a cost attached — a
 *  mini "quote" the buyer reviews independently of the SES itself (see ses-list for approval).
 *  Approving it spins up a brand-new follow-up PO for just these items. */
interface AdditionalItem {
  id?:              number;  // the additional item's own DB id — only set in edit mode, needed
                              // so attachments can be uploaded against this specific row
  itemDescription: string;
  uom:              string;
  quantity:         number;
  unitRate:         number;
  remarks:          string;
}

const FREQUENCY_OPTIONS = [
  { value: 'MONTHLY',     label: 'Monthly' },
  { value: 'QUARTERLY',   label: 'Quarterly' },
  { value: 'HALF_YEARLY', label: 'Half-Yearly' },
  { value: 'YEARLY',      label: 'Yearly' },
  { value: 'ON_CALL',     label: 'On-Call' },
];

@Component({
  selector: 'app-ses-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ses-create.component.html',
  styleUrls: ['./ses-create.component.css']
})
export class SesCreateComponent implements OnInit {

  // ── PO Selection ──────────────────────────────────────────────────────
  servicePOs:    any[] = [];
  filteredPOs:   any[] = [];
  poSearch         = '';
  selectedPO:    any   = null;
  poLoading        = false;
  poDropdownOpen   = false;

  // ── SES form ─────────────────────────────────────────────────────────
  frequencyOptions = FREQUENCY_OPTIONS;
  ses = {
    serviceFrequency: 'MONTHLY',
    servicePeriodFrom: '',
    servicePeriodTo:   '',
    submittedByName:   '',
    remarks:            ''
  };

  lineItems: SESLineItem[] = [];

  // ── Additional Items / Spares Quote ─────────────────────────────────────
  // Optional: if the supplier needs to change spares or otherwise needs extra money for this
  // visit, they list it here. The buyer reviews and approves/rejects just this quote,
  // independently of approving the SES itself.
  hasAdditionalItems = false;
  additionalItems: AdditionalItem[] = [];

  get additionalItemsTotal(): number {
    return this.additionalItems.reduce((s, i) => s + (Number(i.quantity) || 0) * (Number(i.unitRate) || 0), 0);
  }

  addAdditionalItem(): void {
    this.additionalItems.push({ itemDescription: '', uom: 'Nos', quantity: 1, unitRate: 0, remarks: '' });
  }

  removeAdditionalItem(index: number): void {
    this.additionalItems.splice(index, 1);
  }

  onToggleAdditionalItems(): void {
    if (this.hasAdditionalItems && this.additionalItems.length === 0) this.addAdditionalItem();
  }

  // ── UI state ─────────────────────────────────────────────────────────
  isSubmitting   = false;
  errorMessage   = '';
  successMessage = '';
  companyName    = '';
  userId         = 0;

  // Either the buyer/RFQ creator or the supplier can fill in an SES — the buyer knows what
  // was ordered, the supplier knows what they actually delivered. Approval stays buyer-only
  // regardless (see ses-list.component.ts), this only affects who can create/submit one.
  isSupplierMode = false;

  // ── Edit & Resubmit mode ────────────────────────────────────────────────
  // Reached via /ses-create/:sesId (see ses-list's "Edit & Resubmit" button) instead of a blank
  // /ses-create. Two distinct cases, matching updateSES()'s backend guard exactly:
  //  - the SES itself is REJECTED  -> everything is editable, re-saving + re-submitting
  //    puts it through SUBMITTED -> APPROVED/REJECTED again.
  //  - the SES is APPROVED but its additional-items quote was REJECTED -> the SES/line items
  //    stay locked (already confirmed, invoices may depend on it); only the spares quote is
  //    editable, and saving IS the resubmission (no separate submit step for just that).
  isEditMode = false;
  editSesId: number | null = null;
  sesEditableFully = true;

  get totalServiceValue(): number {
    return this.lineItems.reduce((s, l) => s + (l.serviceCompleted ? (Number(l.completedQuantity) || 0) * (Number(l.poUnitRate) || 0) : 0), 0);
  }

  get anyLineCompleted(): boolean {
    return this.lineItems.some(l => l.serviceCompleted);
  }

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isSupplierMode = this.authService.isSupplier();

    if (this.isSupplierMode) {
      this.userId = this.authService.getSupplierId() || 0;
      this.ses.submittedByName =
        this.authService.getSupplierName() ||
        localStorage.getItem('fullName')   ||
        localStorage.getItem('email')      || '';
    } else {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const p = JSON.parse(atob(token.split('.')[1]));
          this.userId = p.userId || p.id || p.sub || 0;
        } catch {}
      }
      if (!this.userId) this.userId = Number(localStorage.getItem('buyerId') || 0);

      this.ses.submittedByName =
        localStorage.getItem('buyerName') ||
        localStorage.getItem('fullName')  ||
        localStorage.getItem('email')     || '';

      try {
        const buyer = JSON.parse(localStorage.getItem('buyer') || '{}');
        this.companyName = buyer.name || '';
      } catch {}
      if (!this.companyName) this.companyName = localStorage.getItem('companyName') || '';
    }

    const sesIdParam = this.route.snapshot.paramMap.get('sesId');
    if (sesIdParam) {
      this.isEditMode = true;
      this.editSesId  = Number(sesIdParam);
      this.loadExistingSESForEdit(this.editSesId);
    } else {
      this.loadServicePOs(Number(this.route.snapshot.queryParamMap.get('poId')) || null);
    }
  }

  /** Edit & Resubmit mode — pre-loads an existing SES instead of starting blank. */
  loadExistingSESForEdit(sesId: number): void {
    this.poLoading = true;
    this.dataService.getSESById(sesId).subscribe({
      next: (res: any) => {
        const data = res?.success ? res.data : (res.data || res);
        if (!data) {
          this.errorMessage = 'Could not load this Service Entry Sheet.';
          this.poLoading = false;
          return;
        }

        // Only a REJECTED SES has its period/line items editable; an APPROVED SES with only its
        // additional-items quote REJECTED keeps those locked — mirrors updateSES()'s backend guard.
        this.sesEditableFully = data.status === 'REJECTED';

        // selectedPO here is just enough for display (PO is fixed once an SES exists — you can't
        // move an edit to a different PO), not the full searchable-dropdown shape used on create.
        this.selectedPO = {
          id: data.purchaseOrderId,
          poNumber: data.poNumber,
          supplierName: data.supplierName,
          status: 'APPROVED',
          totalAmount: data.totalPoValue,
          poDate: data.createdAt
        };
        this.poSearch = data.poNumber;

        this.ses.serviceFrequency  = data.serviceFrequency || 'MONTHLY';
        this.ses.servicePeriodFrom = data.servicePeriodFrom ? String(data.servicePeriodFrom).substring(0, 10) : '';
        this.ses.servicePeriodTo   = data.servicePeriodTo ? String(data.servicePeriodTo).substring(0, 10) : '';
        this.ses.submittedByName   = data.submittedByName || this.ses.submittedByName;
        this.ses.remarks           = data.remarks || '';

        this.lineItems = (data.lineItems || []).map((li: any) => ({
          id:                li.id,
          poLineItemId:      li.poLineItemId,
          itemOrder:         li.itemOrder,
          itemDescription:   li.itemDescription || '',
          uom:               li.uom || 'Month',
          poQuantity:        Number(li.poQuantity) || 0,
          poUnitRate:        Number(li.poUnitRate) || 0,
          poLineTotal:       Number(li.poLineTotal) || 0,
          serviceCompleted:  !!li.serviceCompleted,
          completedQuantity: Number(li.completedQuantity) || 0,
          remarks:           li.remarks || ''
        }));

        this.hasAdditionalItems = !!data.hasAdditionalItems;
        this.additionalItems = (data.additionalItems || []).map((ai: any) => ({
          id:              ai.id,
          itemDescription: ai.itemDescription || '',
          uom:             ai.uom || 'Nos',
          quantity:        Number(ai.quantity) || 0,
          unitRate:        Number(ai.unitRate) || 0,
          remarks:         ai.remarks || ''
        }));

        this.poLoading = false;
        this.loadAttachments(sesId);
      },
      error: () => {
        this.errorMessage = 'Failed to load this Service Entry Sheet. Please try again.';
        this.poLoading = false;
      }
    });
  }

  // ── Attachments (only meaningful in edit mode — a brand-new SES has no saved line items/
  // additional items yet for a file to attach to; see "Save first" hints in the template) ──
  commonAttachments: any[] = [];
  lineItemAttachmentsMap: { [lineItemId: number]: any[] } = {};
  additionalItemAttachmentsMap: { [additionalItemId: number]: any[] } = {};
  isUploadingAttachment = false;

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

  private filesToAttachmentPayload(event: Event, callback: (files: { filename: string; contentType: string; base64: string }[]) => void): void {
    const input = event.target as HTMLInputElement;
    const files = input.files ? Array.from(input.files) : [];
    input.value = '';
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
    if (!this.editSesId) return;
    const sesId = this.editSesId;
    this.filesToAttachmentPayload(event, (files) => {
      this.isUploadingAttachment = true;
      this.dataService.uploadSESCommonAttachments(sesId, files, this.ses.submittedByName).subscribe({
        next: (res: any) => { this.commonAttachments = res?.data || this.commonAttachments; this.isUploadingAttachment = false; },
        error: (err: any) => { this.errorMessage = err?.error?.message || 'Failed to upload attachment.'; this.isUploadingAttachment = false; }
      });
    });
  }

  onLineItemAttachmentSelected(event: Event, lineItemId: number | undefined): void {
    if (!lineItemId) return;
    this.filesToAttachmentPayload(event, (files) => {
      this.isUploadingAttachment = true;
      this.dataService.uploadSESLineItemAttachments(lineItemId, files, this.ses.submittedByName).subscribe({
        next: (res: any) => { this.lineItemAttachmentsMap = { ...this.lineItemAttachmentsMap, [lineItemId]: res?.data || [] }; this.isUploadingAttachment = false; },
        error: (err: any) => { this.errorMessage = err?.error?.message || 'Failed to upload attachment.'; this.isUploadingAttachment = false; }
      });
    });
  }

  onAdditionalItemAttachmentSelected(event: Event, additionalItemId: number | undefined): void {
    if (!additionalItemId) return;
    this.filesToAttachmentPayload(event, (files) => {
      this.isUploadingAttachment = true;
      this.dataService.uploadSESAdditionalItemAttachments(additionalItemId, files, this.ses.submittedByName).subscribe({
        next: (res: any) => { this.additionalItemAttachmentsMap = { ...this.additionalItemAttachmentsMap, [additionalItemId]: res?.data || [] }; this.isUploadingAttachment = false; },
        error: (err: any) => { this.errorMessage = err?.error?.message || 'Failed to upload attachment.'; this.isUploadingAttachment = false; }
      });
    });
  }

  getCommonAttachmentDownloadUrl(attachmentId: number): string { return this.dataService.getSESCommonAttachmentDownloadUrl(attachmentId); }
  getLineItemAttachmentDownloadUrl(attachmentId: number): string { return this.dataService.getSESLineItemAttachmentDownloadUrl(attachmentId); }
  getAdditionalItemAttachmentDownloadUrl(attachmentId: number): string { return this.dataService.getSESAdditionalItemAttachmentDownloadUrl(attachmentId); }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.po-search-wrap')) this.poDropdownOpen = false;
  }

  // ── PO Loading & Selection ────────────────────────────────────────────

  loadServicePOs(preselectPoId: number | null): void {
    if (this.isSupplierMode) {
      if (!this.userId) {
        this.errorMessage = 'Could not determine your supplier account. Please log out and log in again.';
        return;
      }
      this.poLoading = true;
      this.dataService.getApprovedPOsForSupplier(this.userId).subscribe({
        next: (res: any) => {
          const all = res?.success ? (res.data || []) : (Array.isArray(res) ? res : []);
          // Already scoped server-side to this supplier's own approved POs — just narrow to Service.
          this.servicePOs = all.filter((p: any) => this.hasPoType(p.poType, 'SERVICE'));
          this.filteredPOs = [...this.servicePOs];
          this.poLoading   = false;

          if (preselectPoId) {
            const match = this.servicePOs.find(p => p.id === preselectPoId);
            if (match) this.selectPO(match);
          }
        },
        error: () => {
          this.errorMessage = 'Failed to load purchase orders. Please refresh and try again.';
          this.poLoading    = false;
        }
      });
      return;
    }

    if (!this.companyName) {
      this.errorMessage = 'Company name could not be determined. Please log out and log in again.';
      return;
    }
    this.poLoading = true;
    this.dataService.getPurchaseOrdersByCompany(this.companyName).subscribe({
      next: (res: any) => {
        const all = Array.isArray(res) ? res : (res.data || []);
        this.servicePOs = all.filter((p: any) =>
          this.hasPoType(p.poType, 'SERVICE') &&
          ['APPROVED', 'SENT_TO_SUPPLIER', 'ACKNOWLEDGED', 'IN_PROGRESS', 'ACTIVE'].includes(p.status)
        );
        this.filteredPOs = [...this.servicePOs];
        this.poLoading   = false;

        if (preselectPoId) {
          const match = this.servicePOs.find(p => p.id === preselectPoId);
          if (match) this.selectPO(match);
        }
      },
      error: () => {
        this.errorMessage = 'Failed to load purchase orders. Please refresh and try again.';
        this.poLoading    = false;
      }
    });
  }

  /** A PO can carry more than one type at once (stored as CSV, e.g. "GOODS,SERVICE") — this
   *  checks membership rather than exact equality so a PO tagged Service alongside something
   *  else still counts as a Service PO here. */
  hasPoType(poTypeCsv: string | undefined, type: string): boolean {
    return (poTypeCsv || 'GOODS').split(',').map(t => t.trim()).includes(type);
  }

  filterPOs(): void {
    const q = this.poSearch.toLowerCase().trim();
    this.filteredPOs = !q
      ? [...this.servicePOs]
      : this.servicePOs.filter(p =>
          (p.poNumber || '').toLowerCase().includes(q) ||
          (p.supplierName || p.supplier?.companyName || '').toLowerCase().includes(q)
        );
    this.poDropdownOpen = true;
  }

  getSupplierName(po: any): string {
    return po?.supplierName || po?.supplier?.companyName || po?.supplier?.name || '—';
  }

  selectPO(po: any): void {
    this.selectedPO     = po;
    this.poSearch       = po.poNumber;
    this.poDropdownOpen = false;
    this.errorMessage   = '';
    this.lineItems      = [];

    if (this.isSupplierMode) {
      // getApprovedPOsForSupplier() only returns summary fields — fetch full line items
      // the same way the supplier's invoice-creation flow already does.
      this.poLoading = true;
      this.dataService.getPODetailsForInvoice(this.userId, po.id).subscribe({
        next: (res: any) => {
          const data = res?.success ? res.data : res;
          this.lineItems = this.buildLineItems(data?.lineItems || []);
          this.poLoading = false;
        },
        error: () => {
          this.errorMessage = 'Failed to load this PO\'s line items. Please try again.';
          this.poLoading = false;
        }
      });
      return;
    }

    this.lineItems = this.buildLineItems(po.lineItems || po.items || []);
  }

  private buildLineItems(rawItems: any[]): SESLineItem[] {
    return (rawItems || []).map((item: any, idx: number) => {
      const qty  = Number(item.quantity || item.poQuantity || item.orderedQuantity || 0);
      const rate = Number(item.unitRate || item.unitPrice || item.rate || 0);
      return {
        poLineItemId:      item.id,
        itemOrder:         item.slNo || item.itemOrder || idx + 1,
        itemDescription:   item.itemDescription || item.itemName || item.name || '',
        uom:               item.uom || item.unit || 'Month',
        poQuantity:        qty,
        poUnitRate:        rate,
        poLineTotal:       Number((qty * rate).toFixed(2)),
        serviceCompleted:  false,
        completedQuantity: qty,
        remarks:           ''
      };
    });
  }

  clearPO(): void {
    this.selectedPO       = null;
    this.poSearch         = '';
    this.lineItems        = [];
    this.hasAdditionalItems = false;
    this.additionalItems    = [];
    this.errorMessage     = '';
  }

  // ── Submit ──────────────────────────────────────────────────────────

  submitSES(saveAsDraft: boolean): void {
    this.errorMessage   = '';
    this.successMessage = '';

    if (!this.selectedPO) {
      this.errorMessage = 'Please select a Service Purchase Order before submitting.';
      this.scrollToTop(); return;
    }
    if (!this.ses.servicePeriodFrom || !this.ses.servicePeriodTo) {
      this.errorMessage = 'Service period (from and to) is required.';
      this.scrollToTop(); return;
    }
    if (new Date(this.ses.servicePeriodTo) < new Date(this.ses.servicePeriodFrom)) {
      this.errorMessage = 'Service period "To" date cannot be before "From" date.';
      this.scrollToTop(); return;
    }
    if (!this.ses.submittedByName?.trim()) {
      this.errorMessage = 'Submitted-by name is required.';
      this.scrollToTop(); return;
    }
    if (this.lineItems.length === 0) {
      this.errorMessage = 'No line items found for the selected PO.';
      this.scrollToTop(); return;
    }
    if (!saveAsDraft && !this.anyLineCompleted) {
      this.errorMessage = 'Mark at least one line item as service-completed before submitting.';
      this.scrollToTop(); return;
    }
    for (const li of this.lineItems) {
      if (li.serviceCompleted && (Number(li.completedQuantity) || 0) <= 0) {
        this.errorMessage = `Completed quantity must be greater than zero for: "${li.itemDescription}".`;
        this.scrollToTop(); return;
      }
    }
    if (this.hasAdditionalItems) {
      if (this.additionalItems.length === 0) {
        this.errorMessage = 'Add at least one additional item, or turn off "Need spares / extra cost" if not needed.';
        this.scrollToTop(); return;
      }
      for (const ai of this.additionalItems) {
        if (!ai.itemDescription?.trim()) {
          this.errorMessage = 'Every additional item needs a description.';
          this.scrollToTop(); return;
        }
        if ((Number(ai.quantity) || 0) <= 0) {
          this.errorMessage = `Quantity must be greater than zero for: "${ai.itemDescription}".`;
          this.scrollToTop(); return;
        }
        if ((Number(ai.unitRate) || 0) < 0) {
          this.errorMessage = `Rate cannot be negative for: "${ai.itemDescription}".`;
          this.scrollToTop(); return;
        }
      }
    }

    this.isSubmitting = true;

    const payload: any = {
      purchaseOrderId:    this.selectedPO.id,
      serviceFrequency:   this.ses.serviceFrequency,
      servicePeriodFrom:  this.ses.servicePeriodFrom,
      servicePeriodTo:    this.ses.servicePeriodTo,
      submittedByUserId:  this.userId,
      submittedByName:    this.ses.submittedByName,
      submittedByRole:    this.isSupplierMode ? 'SUPPLIER' : 'BUYER',
      remarks:            this.ses.remarks || null,
      lineItems: this.lineItems.map((l, idx) => ({
        id:                l.id ?? null,   // only meaningful in edit mode — see updateSES()
        poLineItemId:      l.poLineItemId,
        itemOrder:         l.itemOrder || idx + 1,
        itemDescription:   l.itemDescription || 'Item',
        uom:               l.uom || 'Month',
        poQuantity:        l.poQuantity,
        poUnitRate:        l.poUnitRate || 0,
        poLineTotal:       l.poLineTotal || 0,
        serviceCompleted:  l.serviceCompleted,
        completedQuantity: l.serviceCompleted ? l.completedQuantity : 0,
        remarks:           l.remarks || null
      })),
      hasAdditionalItems: this.hasAdditionalItems,
      additionalItems: this.hasAdditionalItems
        ? this.additionalItems.map((ai, idx) => ({
            itemOrder:       idx + 1,
            itemDescription: ai.itemDescription,
            uom:             ai.uom || 'Nos',
            quantity:        ai.quantity,
            unitRate:        ai.unitRate || 0,
            remarks:         ai.remarks || null
          }))
        : []
    };

    if (this.isEditMode && this.editSesId) {
      this.submitEditedSES(payload, saveAsDraft);
      return;
    }

    this.dataService.createSES(payload).subscribe({
      next: (res: any) => {
        const created = res.data || res;
        if (!saveAsDraft && created?.id) {
          this.dataService.submitSES(created.id).subscribe({
            next: () => {
              this.successMessage = 'Service Entry Sheet created and submitted successfully! Redirecting…';
              this.isSubmitting   = false;
              this.scrollToTop();
              setTimeout(() => this.router.navigate(['/ses-list']), 1800);
            },
            error: (err: any) => {
              this.errorMessage = 'SES was created but could not be submitted: ' +
                (err?.error?.message || 'Unknown error. Please try submitting from the SES list.');
              this.isSubmitting = false;
              this.scrollToTop();
            }
          });
        } else {
          this.successMessage = 'Service Entry Sheet saved as draft successfully! Redirecting…';
          this.isSubmitting   = false;
          this.scrollToTop();
          setTimeout(() => this.router.navigate(['/ses-list']), 1800);
        }
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to create Service Entry Sheet. Please check your inputs and try again.';
        this.isSubmitting = false;
        this.scrollToTop();
      }
    });
  }

  /** Edit & Resubmit path. Two cases (see sesEditableFully):
   *   - full edit (was REJECTED): updateSES() puts it back to DRAFT, then a separate submitSES()
   *     call moves it to SUBMITTED again — mirrors create's update-then-submit combo, unless
   *     saving as draft only.
   *   - additional-items-only edit (SES stays APPROVED): updateSES() alone IS the resubmission —
   *     the backend moves the quote straight to PENDING, there's no separate submit step. */
  private submitEditedSES(payload: any, saveAsDraft: boolean): void {
    this.dataService.updateSES(this.editSesId!, payload).subscribe({
      next: () => {
        if (this.sesEditableFully && !saveAsDraft) {
          this.dataService.submitSES(this.editSesId!).subscribe({
            next: () => {
              this.successMessage = 'Service Entry Sheet updated and resubmitted successfully! Redirecting…';
              this.isSubmitting   = false;
              this.scrollToTop();
              setTimeout(() => this.router.navigate(['/ses-list']), 1800);
            },
            error: (err: any) => {
              this.errorMessage = 'Changes were saved but could not be resubmitted: ' +
                (err?.error?.message || 'Unknown error. Please try submitting from the SES list.');
              this.isSubmitting = false;
              this.scrollToTop();
            }
          });
        } else {
          this.successMessage = this.sesEditableFully
            ? 'Service Entry Sheet saved as draft successfully! Redirecting…'
            : 'Additional items quote updated and resubmitted for buyer review! Redirecting…';
          this.isSubmitting = false;
          this.scrollToTop();
          setTimeout(() => this.router.navigate(['/ses-list']), 1800);
        }
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to update this Service Entry Sheet. Please check your inputs and try again.';
        this.isSubmitting = false;
        this.scrollToTop();
      }
    });
  }

  cancel(): void { this.router.navigate(['/ses-list']); }

  private scrollToTop(): void { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
