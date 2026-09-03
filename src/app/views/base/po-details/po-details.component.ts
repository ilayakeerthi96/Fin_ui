

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, CardHeaderComponent,
  RowComponent, ColComponent, ContainerComponent,
  ButtonDirective, BadgeComponent, TableModule, SpinnerComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

@Component({
  selector: 'app-po-details',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ContainerComponent, RowComponent, ColComponent,
    CardComponent, CardBodyComponent, CardHeaderComponent,
    ButtonDirective, BadgeComponent, TableModule, SpinnerComponent
  ],
  templateUrl: './po-details.component.html',
  styleUrls: ['./po-details.component.css']
})
export class PODetailsComponent implements OnInit {

  isDownloadingExcel = false;
isDownloadingPdf   = false;
isDownloadingXml   = false;
  po: any = null;
  isLoading   = false;
  isDeleting  = false;
  isSaving    = false;
  poId        = 0;
  editForm: any = {};

  // Logo state
  logoLoadError = false;

  // Currency from PO data
  currencyCode: string = 'INR';
  currencySymbol: string = '₹';

  // ── Release Tracking (Blanket/Contract POs only) ──────────────────────────
  poReleaseSummary: any = null;
  poReleases: any[] = [];
  isLoadingReleases = false;

  isReleaseModalOpen = false;
  isSavingRelease = false;
  releaseForm: any = { releaseDate: '', plannedDeliveryDate: '', releasedByName: '', remarks: '' };
  releaseLineItems: any[] = [];

  get spacerRows(): number[] {
    const minRows = 8;
    const extra = Math.max(0, minRows - (this.po?.lineItems?.length || 0));
    return Array(extra).fill(0);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.poId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.poId || isNaN(this.poId)) {
      this.messageService.showMessage('error', 'Error', 'Invalid Purchase Order ID');
      this.router.navigate(['/po-list']);
      return;
    }
    this.loadPODetails();
  }

  downloadPOExcel(): void {
    if (!this.poId) return;
    this.isDownloadingExcel = true;
    this.dataService.getPOSummaryExcel(this.poId).subscribe({
        next: (blob: Blob) => {
            this.dataService.saveBlob(blob, `PO_Report_${this.po?.poNumber}_${this.dataService.todayStr()}.xlsx`);
            this.messageService.showMessage('success', 'Success', 'PO Excel report downloaded');
            this.isDownloadingExcel = false;
        },
        error: () => {
            this.messageService.showMessage('error', 'Error', 'Failed to download PO Excel');
            this.isDownloadingExcel = false;
        }
    });
}
 
downloadPOPdf(): void {
    if (!this.poId) return;
    this.isDownloadingPdf = true;
    this.dataService.getPOSummaryPDF(this.poId).subscribe({
        next: (blob: Blob) => {
            this.dataService.saveBlob(blob, `PO_Report_${this.po?.poNumber}_${this.dataService.todayStr()}.pdf`);
            this.messageService.showMessage('success', 'Success', 'PO PDF report downloaded');
            this.isDownloadingPdf = false;
        },
        error: () => {
            this.messageService.showMessage('error', 'Error', 'Failed to download PO PDF');
            this.isDownloadingPdf = false;
        }
    });
}

downloadPOCxml(): void {
    if (!this.poId) return;
    this.isDownloadingXml = true;
    this.dataService.getPOCxml(this.poId).subscribe({
        next: (blob: Blob) => {
            this.dataService.saveBlob(blob, `PO_${this.po?.poNumber}_${this.dataService.todayStr()}.cxml.xml`);
            this.messageService.showMessage('success', 'Success', 'PO cXML document downloaded');
            this.isDownloadingXml = false;
        },
        error: () => {
            this.messageService.showMessage('error', 'Error', 'Failed to download PO cXML');
            this.isDownloadingXml = false;
        }
    });
}

  // ── Load ─────────────────────────────────────────────────────────────────

  loadPODetails(): void {
    this.isLoading = true;
    this.logoLoadError = false;
    this.dataService.getPurchaseOrderById(this.poId).subscribe({
      next: (response: any) => {
        if (response?.success) {
          this.po = response.data;
          this.currencyCode   = this.po.currencyCode   || 'INR';
          this.currencySymbol = this.po.currencySymbol || this.getSymbolForCode(this.currencyCode);
          if (this.isBlanketContract) this.loadReleaseTracking();
        } else {
          this.messageService.showMessage('error', 'Error', 'Purchase Order not found');
          this.router.navigate(['/po-list']);
        }
        this.isLoading = false;
      },
      error: () => {
        this.messageService.showMessage('error', 'Error', 'Failed to load Purchase Order details');
        this.isLoading = false;
        this.router.navigate(['/po-list']);
      }
    });
  }

  // ── Logo helpers ─────────────────────────────────────────────────────────

  /**
   * Returns the logo src to bind to <img [src]>.
   * Works with both a URL string and a base64 data-URI.
   * Returns null if no logo is available or if it previously failed to load.
   */
  getBuyerLogoSrc(): string | null {
    if (this.logoLoadError) return null;
    const url = this.po?.buyerLogoUrl;
    if (url && url.trim().length > 0) return url;
    return null;
  }

  /**
   * Called when the logo <img> fires an error event.
   * Hides the broken image and shows the initials fallback instead.
   */
  onLogoError(event: Event): void {
    this.logoLoadError = true;
    (event.target as HTMLImageElement).style.display = 'none';
  }

  /**
   * Returns 1–2 letter initials from the buyer company name.
   * e.g. "ITTI PVT LTD" → "IT"
   */
  getBuyerInitials(): string {
    const name = this.po?.buyerName || '';
    if (!name) return '?';
    const words = name.trim().split(/\s+/).filter((w: string) => w.length > 0);
    if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  }

  private getSymbolForCode(code: string): string {
    const map: Record<string, string> = {
      'INR': '₹', 'USD': '$', 'EUR': '€', 'GBP': '£',
      'AED': 'د.إ', 'SGD': 'S$', 'JPY': '¥', 'CNY': '¥',
      'CHF': 'Fr', 'CAD': 'C$', 'AUD': 'A$', 'NZD': 'NZ$',
      'SAR': 'ر.س', 'QAR': 'ر.ق', 'KWD': 'د.ك', 'BHD': '.د.ب',
      'OMR': 'ر.ع.', 'MYR': 'RM', 'THB': '฿', 'IDR': 'Rp',
    };
    return map[code] || code;
  }

  // ── Edit Modal ───────────────────────────────────────────────────────────

  openEditModal(): void {
    if (this.po?.status !== 'DRAFT') {
      this.messageService.showMessage('warning', 'Warning', 'Only DRAFT Purchase Orders can be edited');
      return;
    }
    this.editForm = {
      paymentTerms:      this.po.paymentTerms      || '',
      deliveryTerms:     this.po.deliveryTerms      || '',
      otherTerms:        this.po.otherTerms          || '',
      dispatchedThrough: this.po.dispatchedThrough  || '',
      modeOfPayment:     this.po.modeOfPayment      || '',
      destination:       this.po.destination        || '',
      buyerRemarks:      this.po.buyerRemarks        || '',
      internalNotes:     this.po.internalNotes       || '',
      poType:            this.po.poType              || 'GOODS',
      expiryDate:        this.po.expiryDate ? this.po.expiryDate.substring(0, 10) : '',
      // Advance payment
      advancePaymentRequired:   !!this.po.advancePaymentRequired,
      advancePaymentPercentage: this.po.advancePaymentPercentage || null,
      advancePaymentAmount:     this.po.advancePaymentAmount || null,
      advancePaymentDue:        this.po.advancePaymentDue || 'BEFORE_DELIVERY',
      advancePaymentNote:       this.po.advancePaymentNote || ''
    };
    const modal = document.getElementById('editModal');
    if (modal) {
      modal.style.display = 'block';
      modal.classList.add('show');
      document.body.classList.add('modal-open');
      const backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop fade show';
      backdrop.id = 'editModalBackdrop';
      document.body.appendChild(backdrop);
    }
  }

  closeEditModal(): void {
    const modal = document.getElementById('editModal');
    if (modal) { modal.style.display = 'none'; modal.classList.remove('show'); }
    document.body.classList.remove('modal-open');
    document.getElementById('editModalBackdrop')?.remove();
  }

  saveEdit(): void {
    if (!this.editForm) return;
    this.isSaving = true;
    this.dataService.updatePurchaseOrder(this.poId, this.editForm).subscribe({
      next: (response: any) => {
        if (response?.success) {
          this.po = response.data;
          this.currencyCode   = this.po.currencyCode   || this.currencyCode;
          this.currencySymbol = this.po.currencySymbol || this.currencySymbol;
          this.messageService.showMessage('success', 'Success', 'Purchase Order updated successfully');
          this.closeEditModal();
        } else {
          this.messageService.showMessage('error', 'Error', 'Failed to update Purchase Order');
        }
        this.isSaving = false;
      },
      error: (error: any) => {
        this.messageService.showMessage('error', 'Error', error.error?.message || 'Failed to update Purchase Order');
        this.isSaving = false;
      }
    });
  }

  // ── Delete ───────────────────────────────────────────────────────────────

  deletePO(): void {
    if (this.po?.status !== 'DRAFT') {
      this.messageService.showMessage('warning', 'Warning', 'Only DRAFT Purchase Orders can be deleted'); return;
    }
    if (!confirm(`Delete Purchase Order ${this.po.poNumber}?\n\nThis action cannot be undone.`)) return;
    this.isDeleting = true;
    this.dataService.deletePurchaseOrder(this.poId).subscribe({
      next: (response: any) => {
        if (response?.success) {
          this.messageService.showMessage('success', 'Success', 'Purchase Order deleted successfully');
          this.router.navigate(['/po-list']);
        }
        this.isDeleting = false;
      },
      error: (error: any) => {
        this.messageService.showMessage('error', 'Error', error.error?.message || 'Failed to delete Purchase Order');
        this.isDeleting = false;
      }
    });
  }

  // ── Print ────────────────────────────────────────────────────────────────

  printPO(): void { window.print(); }

  // ── Tax / Discount helpers ───────────────────────────────────────────────

  hasTax(): boolean {
    return (this.po?.lineItems || []).some((item: any) =>
      item.taxPercentage != null && Number(item.taxPercentage) > 0
    );
  }

  getTaxGroups(): { rate: number; base: number; amount: number }[] {
    const groups: { [rate: string]: { base: number; amount: number } } = {};
    for (const item of (this.po?.lineItems || [])) {
      const rate = Number(item.taxPercentage || 0);
      if (rate === 0) continue;
      const key = rate.toFixed(2);
      if (!groups[key]) groups[key] = { base: 0, amount: 0 };
      groups[key].base   += Number(item.lineTotal   || 0);
      groups[key].amount += Number(item.taxAmount   || 0);
    }
    return Object.entries(groups)
      .map(([rate, val]) => ({ rate: Number(rate), base: val.base, amount: val.amount }))
      .sort((a, b) => a.rate - b.rate);
  }

  hasDiscount(): boolean {
    return (this.po?.lineItems || []).some((item: any) =>
      item.discountPercentage != null && Number(item.discountPercentage) > 0
    );
  }

  getOverallDiscount(): number {
    if (!this.po) return 0;
    const subtotal   = Number(this.po.subtotal   || 0);
    const taxAmount  = Number(this.po.taxAmount  || 0);
    const grandTotal = Number(this.po.grandTotal || 0);
    const discount   = (subtotal + taxAmount) - grandTotal;
    return discount > 0.005 ? discount : 0;
  }

  /** Other Charges (Training, Installation, Additional Cost, Transportation,
   *  etc.) carried forward from the supplier's quote — raw JSON string. */
  getOtherCharges(): { chargeType: string; qty: number; uom: string; rate: number; amount: number; taxPercentage: number; taxAmount: number; totalAmount: number; remarks: string }[] {
    const raw = this.po?.otherCharges;
    if (!raw) return [];
    try { return JSON.parse(raw) || []; } catch { return []; }
  }

  getOtherChargesTotal(): number {
    return this.getOtherCharges().reduce((sum, c) => sum + (Number(c.totalAmount) || 0), 0);
  }

  /** Human-readable label for a single po.poType token, e.g. "BLANKET_CONTRACT" → "Blanket / Contract". */
  poTypeLabel(poType: string): string {
    const map: Record<string, string> = {
      GOODS:             'Goods',
      SERVICE:           'Service',
      BLANKET_CONTRACT:  'Blanket / Contract',
      PROJECT_MILESTONE: 'Project / Milestone',
    };
    return map[poType] || poType;
  }

  /** po.poType is comma-separated when more than one is selected — a PO can carry several
   *  at once. Goods is excluded here since it's the default/baseline and stays visually
   *  unmarked, exactly as before this feature supported multiple types. */
  poTypeLabels(poTypeCsv: string): string[] {
    if (!poTypeCsv) return [];
    return poTypeCsv.split(',').map(t => t.trim()).filter(t => t && t !== 'GOODS').map(t => this.poTypeLabel(t));
  }

  /** True if the PO carries the given type among its (possibly several) selected types. */
  poHasType(poTypeCsv: string | undefined, type: string): boolean {
    return (poTypeCsv || '').split(',').map(t => t.trim()).includes(type);
  }

  // ── Edit modal: PO Type checkboxes (reads/writes editForm.poType as CSV) ──
  isEditPoTypeSelected(value: string): boolean {
    return this.poHasType(this.editForm?.poType, value);
  }

  toggleEditPoType(value: string): void {
    const current = (this.editForm.poType || 'GOODS').split(',').map((t: string) => t.trim()).filter((t: string) => !!t);
    const idx = current.indexOf(value);
    if (idx >= 0) {
      if (current.length > 1) current.splice(idx, 1); // keep at least one selected
    } else {
      current.push(value);
    }
    this.editForm.poType = current.join(',');
  }

  /** Payment Provisions / Milestones — the supplier's proposed payment schedule, carried
   *  through unchanged from the negotiation. Purely descriptive. */
  getPaymentMilestones(): { slNo: number; description: string; percentage: number | null; amount: number | null; remarks: string }[] {
    const raw = this.po?.paymentMilestones;
    if (!raw) return [];
    try { return JSON.parse(raw) || []; } catch { return []; }
  }

  /** Human-readable label for po.advancePaymentDue, e.g. "BEFORE_DELIVERY" → "before delivery". */
  advancePaymentDueLabel(): string {
    const map: Record<string, string> = {
      BEFORE_DELIVERY:          'before delivery',
      BEFORE_DISPATCH:          'before dispatch',
      ON_ORDER_CONFIRMATION:    'on order confirmation',
      OTHER:                    this.po?.advancePaymentNote || 'as agreed',
    };
    return map[this.po?.advancePaymentDue] || 'before delivery';
  }

  // ── Status / Date / Nav helpers ──────────────────────────────────────────

  getStatusBadgeClass(status: string): string {
    const map: any = {
      'DRAFT': 'bg-secondary', 'PENDING_APPROVAL': 'bg-warning text-dark',
      'APPROVED': 'bg-success', 'SENT_TO_SUPPLIER': 'bg-info',
      'ACKNOWLEDGED': 'bg-primary', 'IN_PROGRESS': 'bg-primary',
      'DELIVERED': 'bg-success', 'COMPLETED': 'bg-dark',
      'CANCELLED': 'bg-danger', 'REJECTED': 'bg-danger'
    };
    return map[status] || 'bg-secondary';
  }

  formatDate(dateString: string): string {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  }

  formatDateShort(dateString: string): string {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  }

  goBack(): void { this.router.navigate(['/po-list']); }

  // =========================================================================
  //  RELEASE TRACKING (Blanket/Contract POs only)
  //  Tracks Total / Released / Received / Remaining. This is the "supply
  //  schedule" side of a Blanket/Contract PO — deliberately separate from
  //  Payment Provisions/Milestones above, which is the payment schedule.
  // =========================================================================

  get isBlanketContract(): boolean {
    return this.poHasType(this.po?.poType, 'BLANKET_CONTRACT');
  }

  loadReleaseTracking(): void {
    if (!this.poId) return;
    this.isLoadingReleases = true;
    this.dataService.getPOReleaseSummary(this.poId).subscribe({
      next: (res: any) => { this.poReleaseSummary = res?.success ? res.data : res; },
      error: () => { this.poReleaseSummary = null; }
    });
    this.dataService.getPOReleasesByPO(this.poId).subscribe({
      next: (res: any) => {
        this.poReleases = Array.isArray(res) ? res : (res.data || []);
        this.isLoadingReleases = false;
      },
      error: () => { this.poReleases = []; this.isLoadingReleases = false; }
    });
  }

  releaseStatusBadgeClass(status: string): string {
    const map: any = { DRAFT: 'bg-secondary', ISSUED: 'bg-success', CANCELLED: 'bg-danger' };
    return map[status] || 'bg-secondary';
  }

  get remainingCapacity(): number {
    return Number(this.poReleaseSummary?.remaining ?? 0);
  }

  openReleaseModal(): void {
    this.releaseForm = {
      releaseDate: new Date().toISOString().split('T')[0],
      plannedDeliveryDate: '',
      releasedByName: this.po?.buyerName || '',
      remarks: ''
    };
    this.releaseLineItems = (this.po?.lineItems || []).map((li: any) => ({
      poLineItemId: li.id,
      itemDescription: li.itemDescription || li.itemName || '',
      uom: li.uom || 'NOS',
      poQuantity: Number(li.quantity || 0),
      unitRate: Number(li.unitRate || 0),
      releasedQuantity: 0,
      remarks: ''
    }));
    this.isReleaseModalOpen = true;
  }

  closeReleaseModal(): void {
    this.isReleaseModalOpen = false;
  }

  get releaseModalTotal(): number {
    return this.releaseLineItems.reduce((sum, li) => sum + ((Number(li.releasedQuantity) || 0) * (Number(li.unitRate) || 0)), 0);
  }

  saveRelease(): void {
    if (!this.releaseForm.releaseDate) {
      this.messageService.showMessage('error', 'Error', 'Release date is required.');
      return;
    }
    const activeLines = this.releaseLineItems.filter((li: any) => (Number(li.releasedQuantity) || 0) > 0);
    if (activeLines.length === 0) {
      this.messageService.showMessage('error', 'Error', 'Enter a released quantity greater than zero for at least one item.');
      return;
    }
    if (this.releaseModalTotal > this.remainingCapacity + 0.005) {
      this.messageService.showMessage('error', 'Error',
        `This release (${this.currencySymbol}${this.releaseModalTotal.toFixed(2)}) exceeds the PO's remaining capacity (${this.currencySymbol}${this.remainingCapacity.toFixed(2)}).`);
      return;
    }

    this.isSavingRelease = true;
    const payload = {
      purchaseOrderId: this.poId,
      releaseDate: this.releaseForm.releaseDate,
      plannedDeliveryDate: this.releaseForm.plannedDeliveryDate || null,
      releasedByName: this.releaseForm.releasedByName || null,
      remarks: this.releaseForm.remarks || null,
      lineItems: activeLines
    };

    this.dataService.createPORelease(payload).subscribe({
      next: (res: any) => {
        this.isSavingRelease = false;
        if (res?.success) {
          this.messageService.showMessage('success', 'Success', `Release ${res.data.releaseNumber} created.`);
          this.closeReleaseModal();
          this.loadReleaseTracking();
        } else {
          this.messageService.showMessage('error', 'Error', res?.message || 'Failed to create release.');
        }
      },
      error: (err: any) => {
        this.isSavingRelease = false;
        this.messageService.showMessage('error', 'Error', err?.error?.message || 'Failed to create release.');
      }
    });
  }

  issueRelease(release: any): void {
    this.dataService.issuePORelease(release.id, this.po?.buyerName || '').subscribe({
      next: (res: any) => {
        if (res?.success) {
          this.messageService.showMessage('success', 'Success', `Release ${release.releaseNumber} issued to supplier.`);
          this.loadReleaseTracking();
        } else {
          this.messageService.showMessage('error', 'Error', res?.message || 'Failed to issue release.');
        }
      },
      error: (err: any) => this.messageService.showMessage('error', 'Error', err?.error?.message || 'Failed to issue release.')
    });
  }

  cancelRelease(release: any): void {
    this.dataService.cancelPORelease(release.id).subscribe({
      next: (res: any) => {
        if (res?.success) {
          this.messageService.showMessage('success', 'Success', `Release ${release.releaseNumber} cancelled — capacity freed up.`);
          this.loadReleaseTracking();
        } else {
          this.messageService.showMessage('error', 'Error', res?.message || 'Failed to cancel release.');
        }
      },
      error: (err: any) => this.messageService.showMessage('error', 'Error', err?.error?.message || 'Failed to cancel release.')
    });
  }
}