
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, CardHeaderComponent,
  RowComponent, ColComponent, ContainerComponent,
  ButtonDirective, BadgeComponent, FormModule, TableModule,
  SpinnerComponent, AlertComponent, ModalModule
} from '@coreui/angular';
import { AuthService } from '../../../shared/service/AuthService';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

@Component({
  selector: 'app-supplier-quote-submission',
  templateUrl: './supplier-quote-submission.component.html',
  styleUrls: ['./supplier-quote-submission.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, ContainerComponent, RowComponent, ColComponent,
    CardComponent, CardBodyComponent, CardHeaderComponent,
    ButtonDirective, BadgeComponent, FormModule, TableModule,
    SpinnerComponent, AlertComponent, ModalModule
  ]
})
export class SupplierQuoteSubmissionComponent implements OnInit {

  // ==================== ROUTE / IDS ====================
  rfqId: number = 0;
  supplierId: number = 0;
  isViewOnlyMode: boolean = false;

  // ==================== DATA ====================
  rfqDetails: any = null;
  quoteItems: any[] = [];

  // ==================== COMMON FIELDS ====================
  paymentTerms: string = '';
  countryOfOrigin: string = 'India';
  deliveryTerms: string = '';

  // Optional quote-level charges (Training, Installation, Additional Cost,
  // Transportation, or anything else) — entirely the supplier's call whether
  // to add any, and each is its own line: Qty x Rate = Amount, plus its own
  // Tax % (since service tax commonly differs per charge type, and from the
  // per-item product tax above). Persisted via the existing customCharges
  // JSON column — no backend changes needed.
  otherCharges: {
    chargeType: string;
    qty: number | null;
    uom: string;
    rate: number | null;
    amount: number;
    taxPercentage: number | null;
    taxAmount: number;
    totalAmount: number;
    remarks: string;
  }[] = [];

  // ==================== PAYMENT PROVISIONS / MILESTONES ====================
  // The supplier's proposed payment schedule — advance is simply one row here
  // (e.g. "Advance Payment"), not a separate activity. Carried forward to the
  // buyer's PO negotiation page, then onto the PO's Terms & Conditions and the
  // invoice, as descriptive terms. Percentage/amount are calculated on the
  // quote's value EXCLUDING tax.
  paymentMilestones: {
    slNo: number;
    description: string;
    percentage: number | null;
    amount: number | null;
    remarks: string;
  }[] = [];

  private newDefaultMilestoneRows(): typeof this.paymentMilestones {
    return [
      { slNo: 1, description: 'Advance Payment', percentage: null, amount: null, remarks: '' },
      { slNo: 2, description: 'Delivery',        percentage: null, amount: null, remarks: '' },
      { slNo: 3, description: 'Final Payment',   percentage: null, amount: null, remarks: '' },
    ];
  }

  addMilestoneRow(): void {
    this.paymentMilestones.push({
      slNo: this.paymentMilestones.length + 1, description: '', percentage: null, amount: null, remarks: ''
    });
  }

  removeMilestoneRow(index: number): void {
    this.paymentMilestones.splice(index, 1);
    this.paymentMilestones.forEach((m, i) => m.slNo = i + 1);
  }

  getMilestonesTotalPercentage(): number {
    return this.paymentMilestones.reduce((sum, m) => sum + (Number(m.percentage) || 0), 0);
  }

  getMilestonesTotalAmount(): number {
    return this.paymentMilestones.reduce((sum, m) => sum + (Number(m.amount) || 0), 0);
  }

  get milestonesPercentageExceeded(): boolean {
    return this.getMilestonesTotalPercentage() > 100.01;
  }

  get milestonesAmountExceeded(): boolean {
    return this.getMilestonesTotalAmount() > this.getTotalBeforeTax() + 0.01;
  }

  // ==================== COMPLIANCE CHECK (PHARMA RFQs) ====================
  // Applies once to the whole RFQ, not per line item — the criteria list
  // comes back empty for non-pharma RFQs, so the section just doesn't show.
  complianceCriteria: any[] = [];
  complianceResponses: { [criteriaId: number]: { isCompliant: boolean | null; compliancePercentage: number | null; remarks: string } } = {};

  // ==================== USER INFO ====================
  fullName: string = '';
  email: string = '';
  phone: string = '';
  departmentName: string = '';
  companyName: string = '';
  companyPhone: string = '';
  city: string = '';
  state: string = '';

  // ==================== LOADING ====================
  isLoading: boolean = false;
  isSubmitting: boolean = false;
  showConfirmDialog: boolean = false;

  // ==================== SUBMISSION STATE ====================
  alreadySubmitted: boolean = false;
  existingQuotes: any[] = [];
  submittedDate: Date | null = null;

  // ✅ CURRENCY DETERMINATION:
  //
  // Currency is resolved on the BACKEND by comparing:
  //   buyer location country  vs  supplier HQ country
  //
  // Rule:
  //   Same country   → buyer's own currency  (INR for India, EUR for Germany, etc.)
  //   Cross-border   → always USD
  //
  // The backend sends back:
  //   rfqDetails.resolvedCurrencyCode   — e.g. 'USD' or 'INR'
  //   rfqDetails.resolvedCurrencySymbol — e.g. '$'  or '₹'
  //
  // We read those fields here. The supplier cannot change the currency.
  currencyCode: string = 'INR';
  currencySymbol: string = '₹';

  // ==================== CONSTRUCTOR ====================
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  // ==================== LIFECYCLE ====================
  ngOnInit(): void {
    this.rfqId = Number(this.route.snapshot.paramMap.get('rfqId'));
    this.supplierId = this.authService.getSupplierId() || 0;

    this.route.queryParams.subscribe(params => {
      this.isViewOnlyMode = params['viewOnly'] === 'true';
    });

    this.loadUserInfo();

    if (!this.supplierId || !this.rfqId) {
      this.messageService.showMessage('error', 'Error', 'Invalid supplier or RFQ');
      this.router.navigate(['/supplier-dashboard']);
      return;
    }

    this.loadRFQDetails();
  }

  // ==================== USER INFO ====================
  loadUserInfo(): void {
    try {
      this.fullName       = localStorage.getItem('fullName')    || 'Supplier User';
      this.email          = localStorage.getItem('email')       || '';
      this.phone          = localStorage.getItem('phone')       || '';
      this.departmentName = localStorage.getItem('departmentName') || 'Supplier';
      this.companyName    = localStorage.getItem('supplierName') || localStorage.getItem('companyName') || '';
      this.companyPhone   = localStorage.getItem('companyPhone') || '';
      this.city           = localStorage.getItem('city')        || '';
      this.state          = localStorage.getItem('state')       || '';
    } catch (error) {
      console.error('Error loading user info:', error);
    }
  }

  get userInitials(): string {
    if (!this.fullName) return 'SU';
    const parts = this.fullName.split(' ');
    return parts.length === 1
      ? parts[0].substring(0, 2).toUpperCase()
      : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  // ==================== LOAD RFQ ====================
  loadRFQDetails(): void {
    this.isLoading = true;
    this.dataService.getSupplierRFQDetails(this.supplierId, this.rfqId).subscribe({
      next: (response: any) => {
        if (response?.success && response.data) {
          this.rfqDetails = response.data;

          // ✅ READ RESOLVED CURRENCY (computed by backend using same-country rule)
          //
          // Priority order:
          //   1. rfqDetails.resolvedCurrencyCode   — backend-computed (most accurate)
          //   2. rfqDetails.currencyCode            — backward compat fallback
          //   3. rfqDetails.location.currencyCode   — raw buyer location (last resort)
          //   4. 'INR'                              — absolute fallback
          //
          // For a Singapore supplier vs India buyer → backend returns resolvedCurrencyCode='USD'
          // For an India supplier vs India buyer    → backend returns resolvedCurrencyCode='INR'
          const data = this.rfqDetails;
          this.currencyCode = data.resolvedCurrencyCode
                           || data.currencyCode
                           || data.location?.currencyCode
                           || 'INR';

          this.currencySymbol = data.resolvedCurrencySymbol
                             || data.currencySymbol
                             || data.location?.currencySymbol
                             || this.getSymbolForCode(this.currencyCode);

          console.log('💱 [QUOTE] Resolved currency:', this.currencyCode, this.currencySymbol,
            '| Buyer location country:', data.location?.country,
            '| Resolved from backend:', data.resolvedCurrencyCode);

          this.initializeQuoteItems();
          this.initializeRequestedOtherCharges();
          this.paymentMilestones = this.newDefaultMilestoneRows();
          this.checkExistingQuotes();
          this.loadComplianceCriteria();
        } else {
          this.messageService.showMessage('error', 'Error', 'Invalid response from server');
        }
        this.isLoading = false;
      },
      error: () => {
        this.messageService.showMessage('error', 'Error', 'Failed to load RFQ details');
        this.isLoading = false;
      }
    });
  }

  // ✅ Symbol lookup helper (same map used throughout the app)
  private getSymbolForCode(code: string): string {
    const map: Record<string, string> = {
      'INR': '₹', 'USD': '$', 'EUR': '€', 'GBP': '£',
      'AED': 'د.إ', 'SGD': 'S$', 'JPY': '¥', 'CNY': '¥',
      'CHF': 'Fr', 'CAD': 'C$', 'AUD': 'A$', 'NZD': 'NZ$',
      'SAR': 'ر.س', 'QAR': 'ر.ق', 'KWD': 'د.ك', 'BHD': '.د.ب',
      'OMR': 'ر.ع.', 'MYR': 'RM', 'THB': '฿', 'IDR': 'Rp',
      'PKR': '₨', 'BDT': '৳', 'LKR': '₨', 'NPR': '₨',
    };
    return map[code] || code;
  }

  // ==================== CHECK EXISTING QUOTES ====================
  checkExistingQuotes(): void {
    this.dataService.getSupplierSubmittedQuotes(this.supplierId, this.rfqId).subscribe({
      next: (response: any) => {
        let quotesData: any[] = [];
        if (response?.success && Array.isArray(response.data))     quotesData = response.data;
        else if (Array.isArray(response))                          quotesData = response;
        else if (response?.data && Array.isArray(response.data))   quotesData = response.data;

        if (quotesData.length > 0) {
          this.alreadySubmitted = true;
          this.existingQuotes = quotesData;
          if (this.existingQuotes[0]?.createdAt) {
            this.submittedDate = new Date(this.existingQuotes[0].createdAt);
          }
          // ✅ If existing quote has stored currency, use it (view-only mode)
          // but only if we didn't already get a resolved currency from the RFQ details
          if (!this.rfqDetails?.resolvedCurrencyCode && this.existingQuotes[0]?.currencyCode) {
            this.currencyCode   = this.existingQuotes[0].currencyCode;
            this.currencySymbol = this.existingQuotes[0].currencySymbol
                               || this.getSymbolForCode(this.currencyCode);
          }
          this.prefillExistingQuotes();
          if (this.isViewOnlyMode) {
            this.messageService.showMessage('info', 'Viewing Submitted Quote',
              'This is a read-only view of your submitted quote.');
          }
        } else {
          if (this.isViewOnlyMode) {
            this.messageService.showMessage('warning', 'No Quote Found',
              'No submitted quote found for this RFQ.');
            setTimeout(() => this.router.navigate(['/supplier-dashboard']), 2000);
          }
        }
      },
      error: () => {
        if (this.isViewOnlyMode) {
          this.messageService.showMessage('warning', 'No Quote Found',
            'No submitted quote found for this RFQ.');
          setTimeout(() => this.router.navigate(['/supplier-dashboard']), 2000);
        }
      }
    });
  }

  // ==================== COMPLIANCE CHECK (PHARMA) ====================

  loadComplianceCriteria(): void {
    this.dataService.getComplianceCriteria(this.rfqId).subscribe({
      next: (response: any) => {
        if (response?.success && Array.isArray(response.data)) {
          this.complianceCriteria = response.data;
          this.complianceCriteria.forEach((c: any) => {
            this.complianceResponses[c.id] = { isCompliant: null, compliancePercentage: null, remarks: '' };
          });
          this.loadExistingComplianceResponses();
        }
      },
      error: () => { /* non-pharma RFQ or lookup failure — section just stays empty */ }
    });
  }

  loadExistingComplianceResponses(): void {
    this.dataService.getSupplierComplianceResponses(this.rfqId, this.supplierId).subscribe({
      next: (response: any) => {
        if (response?.success && Array.isArray(response.data)) {
          response.data.forEach((r: any) => {
            this.complianceResponses[r.criteriaId] = {
              isCompliant: r.isCompliant,
              compliancePercentage: r.compliancePercentage != null ? Number(r.compliancePercentage) : null,
              remarks: r.remarks || ''
            };
          });
        }
      },
      error: () => { /* no responses submitted yet */ }
    });
  }

  hasUnansweredComplianceCriteria(): boolean {
    return this.complianceCriteria.some(c => this.complianceResponses[c.id]?.isCompliant === null);
  }

  private submitComplianceResponsesIfAny(): void {
    if (this.complianceCriteria.length === 0) return;
    const payload = this.complianceCriteria.map(c => ({
      criteriaId: c.id,
      isCompliant: this.complianceResponses[c.id]?.isCompliant,
      compliancePercentage: this.complianceResponses[c.id]?.compliancePercentage,
      remarks: this.complianceResponses[c.id]?.remarks
    }));
    this.dataService.submitComplianceResponses(this.rfqId, this.supplierId, payload).subscribe({
      error: (err) => console.error('[Compliance] Failed to submit responses:', err)
    });
  }

  // ==================== INIT QUOTE ITEMS ====================
  initializeQuoteItems(): void {
    if (!this.rfqDetails?.items) return;
    this.quoteItems = this.rfqDetails.items.map((item: any) => ({
      rfqItemId: item.id,
      itemDescription: item.itemDescription,
      itemDescriptionDetailed: item.itemDescriptionDetailed,
      quantity: item.quantity,
      uom: item.uom,
      specifications: item.specifications,
      dynamicFields: item.dynamicFields || {},
      unitRate: 0,
      taxPercentage: this.rfqDetails.taxPercentage || 18,
      totalAmount: 0,
      taxAmount: 0,
      grandTotal: 0,
      remarks: '',
      deliveryDays: 0,
      warrantyMonths: 0,
      brandOffered: '',
      makeModel: '',
      countryOfOrigin: 'India',
      paymentTerms: ''
    }));
  }

  // ==================== PREFILL ====================
  prefillExistingQuotes(): void {
    if (!this.existingQuotes?.length) return;
    this.existingQuotes.forEach((existingQuote: any) => {
      const matchingItem = this.quoteItems.find(
        (item: any) => item.rfqItemId === existingQuote.rfqItem?.id
      );
      if (matchingItem) {
        matchingItem.unitRate        = Number(existingQuote.unitRate)       || 0;
        matchingItem.taxPercentage   = Number(existingQuote.taxPercentage)  || matchingItem.taxPercentage;
        matchingItem.remarks         = existingQuote.remarks        || '';
        matchingItem.deliveryDays    = Number(existingQuote.deliveryDays)   || 0;
        matchingItem.warrantyMonths  = Number(existingQuote.warrantyMonths) || 0;
        matchingItem.brandOffered    = existingQuote.brandOffered   || '';
        matchingItem.makeModel       = existingQuote.makeModel      || '';
        matchingItem.countryOfOrigin = existingQuote.countryOfOrigin || 'India';
        matchingItem.paymentTerms    = existingQuote.paymentTerms   || '';
        this.calculateItemAmounts(matchingItem);
      }
    });
    if (this.existingQuotes[0]) {
      this.paymentTerms    = this.existingQuotes[0].paymentTerms    || '';
      this.countryOfOrigin = this.existingQuotes[0].countryOfOrigin || 'India';
      this.deliveryTerms   = this.existingQuotes[0].deliveryTerms   || '';

      if (this.existingQuotes[0].paymentMilestones) {
        try {
          const parsed = JSON.parse(this.existingQuotes[0].paymentMilestones) || [];
          this.paymentMilestones = parsed.length > 0
            ? parsed.map((m: any, i: number) => ({
                slNo:        m.slNo ?? (i + 1),
                description: m.description || '',
                percentage:  m.percentage ?? null,
                amount:      m.amount ?? null,
                remarks:     m.remarks || ''
              }))
            : this.newDefaultMilestoneRows();
        } catch { this.paymentMilestones = this.newDefaultMilestoneRows(); }
      }
      if (this.existingQuotes[0].customCharges) {
        try {
          const parsed = JSON.parse(this.existingQuotes[0].customCharges) || [];
          this.otherCharges = parsed.map((c: any) => ({
            chargeType:    c.chargeType || c.label || '',
            qty:           c.qty ?? null,
            uom:           c.uom || '',
            rate:          c.rate ?? null,
            amount:        Number(c.amount) || 0,
            taxPercentage: c.taxPercentage ?? null,
            taxAmount:     Number(c.taxAmount) || 0,
            totalAmount:   Number(c.totalAmount ?? c.amount) || 0,
            remarks:       c.remarks || ''
          }));
        } catch { this.otherCharges = []; }
      }
    }
    this.quoteItems = [...this.quoteItems];
  }

  // ==================== CALCULATE ====================
  calculateItemAmounts(item: any): void {
    if (!item.unitRate || !item.quantity) {
      item.totalAmount = 0;
      item.taxAmount   = 0;
      item.grandTotal  = 0;
      return;
    }
    item.totalAmount = Number(item.unitRate) * Number(item.quantity);
    item.taxAmount   = item.taxPercentage > 0
      ? (item.totalAmount * Number(item.taxPercentage)) / 100
      : 0;
    item.grandTotal  = item.totalAmount + item.taxAmount;
  }

  onUnitRateChange(item: any): void {
    if (!this.alreadySubmitted) this.calculateItemAmounts(item);
  }

  onTaxChange(item: any): void {
    if (!this.alreadySubmitted) this.calculateItemAmounts(item);
  }

  // ==================== TOTALS ====================
  getItemsSubtotal(): number {
    return this.quoteItems.reduce((sum, item) => sum + (item.grandTotal || 0), 0);
  }

  // ==================== OTHER CHARGES (Training, Installation, etc.) ====================
  // Quote-level line items — one row per charge, each with its own Qty x Rate
  // = Amount and its own Tax %, since tax on services commonly differs per
  // charge type and from the per-item product tax above.

  /**
   * If the buyer asked for specific charge types (names only, no amounts),
   * pre-populate one row per requested type so the supplier just fills in
   * qty/rate/tax — they can still remove or add further rows freely.
   * Only runs before an existing submission is loaded (checkExistingQuotes
   * runs after this and will overwrite with the actual saved data, if any).
   */
  initializeRequestedOtherCharges(): void {
    const requested: string[] = this.rfqDetails?.requestedOtherCharges || [];
    if (!requested.length) return;
    this.otherCharges = requested.map(chargeType => ({
      chargeType, qty: null, uom: '', rate: null, amount: 0,
      taxPercentage: null, taxAmount: 0, totalAmount: 0, remarks: ''
    }));
  }

  addOtherCharge(): void {
    this.otherCharges.push({
      chargeType: '', qty: null, uom: '', rate: null, amount: 0,
      taxPercentage: null, taxAmount: 0, totalAmount: 0, remarks: ''
    });
  }

  removeOtherCharge(index: number): void {
    this.otherCharges.splice(index, 1);
  }

  calculateOtherChargeAmounts(charge: any): void {
    const qty  = Number(charge.qty)  || 0;
    const rate = Number(charge.rate) || 0;
    charge.amount = qty * rate;
    const taxRate = Number(charge.taxPercentage) || 0;
    charge.taxAmount = taxRate > 0 ? (charge.amount * taxRate) / 100 : 0;
    charge.totalAmount = charge.amount + charge.taxAmount;
  }

  getOtherChargesAmountTotal(): number {
    return this.otherCharges.reduce((sum, c) => sum + (Number(c.amount) || 0), 0);
  }

  getOtherChargesTaxTotal(): number {
    return this.otherCharges.reduce((sum, c) => sum + (Number(c.taxAmount) || 0), 0);
  }

  getOtherChargesGrandTotal(): number {
    return this.otherCharges.reduce((sum, c) => sum + (Number(c.totalAmount) || 0), 0);
  }

  getTotalQuoteAmount(): number {
    return this.getItemsSubtotal() + this.getOtherChargesGrandTotal();
  }

  getTotalBeforeTax(): number {
    return this.quoteItems.reduce((sum, item) => sum + (item.totalAmount || 0), 0);
  }

  getTotalTax(): number {
    return this.quoteItems.reduce((sum, item) => sum + (item.taxAmount || 0), 0);
  }

  // ==================== MODAL ====================
  confirmAndSubmit(): void {
    if (!this.validateQuote()) return;
    this.showConfirmDialog = true;
  }

  cancelSubmission(): void { this.showConfirmDialog = false; }
  proceedWithSubmission(): void { this.submitQuote(); }

  // ==================== VALIDATION ====================
  validateQuote(): boolean {
    if (this.alreadySubmitted) {
      this.messageService.showMessage('warning', 'Already Submitted',
        'Quote has already been submitted. Contact the buyer for changes.');
      return false;
    }
    const hasQuotes = this.quoteItems.some(item => item.unitRate > 0);
    if (!hasQuotes) {
      this.messageService.showMessage('warning', 'Validation Error',
        'Please enter unit rate for at least one item');
      return false;
    }
    for (const item of this.quoteItems) {
      if (item.unitRate > 0 && (!item.quantity || item.quantity <= 0)) {
        this.messageService.showMessage('warning', 'Validation Error',
          `Invalid quantity for item: ${item.itemDescription}`);
        return false;
      }
    }
    // Payment Milestones — entirely optional, but if any row is filled in, the totals
    // must stay within bounds (calculated on the quote value EXCLUDING tax).
    const filledMilestones = this.paymentMilestones.filter(m =>
      (m.description || '').trim() || (Number(m.percentage) || 0) > 0 || (Number(m.amount) || 0) > 0);
    if (filledMilestones.length > 0) {
      if (this.milestonesPercentageExceeded) {
        this.messageService.showMessage('warning', 'Validation Error',
          `Payment Milestones: total percentage (${this.getMilestonesTotalPercentage().toFixed(2)}%) exceeds 100%.`);
        return false;
      }
      if (this.milestonesAmountExceeded) {
        this.messageService.showMessage('warning', 'Validation Error',
          `Payment Milestones: total amount (${this.formatCurrency(this.getMilestonesTotalAmount())}) exceeds the quote value excluding tax (${this.formatCurrency(this.getTotalBeforeTax())}).`);
        return false;
      }
    }
    return true;
  }

  // ==================== SUBMIT ====================
  submitQuote(): void {
    if (this.alreadySubmitted) {
      this.messageService.showMessage('warning', 'Already Submitted',
        'Quote has already been submitted. Cannot submit again.');
      this.showConfirmDialog = false;
      return;
    }

    const items = this.quoteItems
      .filter(item => item.unitRate > 0)
      .map(item => ({
        rfqItemId:       item.rfqItemId,
        unitRate:        item.unitRate,
        quotedQuantity:  item.quantity,
        taxPercentage:   item.taxPercentage,
        remarks:         item.remarks,
        deliveryDays:    item.deliveryDays,
        warrantyMonths:  item.warrantyMonths,
        brandOffered:    item.brandOffered,
        makeModel:       item.makeModel,
        countryOfOrigin: this.countryOfOrigin,
        paymentTerms:    this.paymentTerms,
        // Entirely optional — the supplier's own call whether to add any charges.
        // Stored via the existing customCharges JSON column.
        // Only rows the supplier actually filled in — a buyer-requested charge
        // type left untouched (amount still 0, no remarks) is dropped rather
        // than saved as a bogus zero-charge.
        customCharges: this.otherCharges.filter(c => (Number(c.amount) || 0) > 0 || (c.remarks || '').trim()),
        // Payment Provisions / Milestones — entirely optional, the supplier's own proposed
        // payment schedule. Advance is simply one row here, not a separate activity. Only
        // rows actually filled in are sent (an untouched default row is dropped).
        paymentMilestones: this.paymentMilestones.filter(m =>
          (m.description || '').trim() || (Number(m.percentage) || 0) > 0 || (Number(m.amount) || 0) > 0),
      }));

    this.isSubmitting = true;

    // Currency is NOT sent in the quote payload — it is determined at PO creation
    // time on the backend using the same-country rule in PurchaseOrderService.applyCurrency()
    this.dataService.submitSupplierItemQuote(this.supplierId, this.rfqId, items).subscribe({
      next: (response: any) => {
        this.submitComplianceResponsesIfAny();
        this.alreadySubmitted = true;
        this.submittedDate = new Date();
        this.showConfirmDialog = false;
        this.messageService.showMessage('success', 'Success',
          `Quote for RFQ ${this.rfqDetails.rfqNumber} submitted successfully`);
        setTimeout(() => this.router.navigate(['/supplier-dashboard']), 2000);
        this.isSubmitting = false;
      },
      error: (error: any) => {
        const errorMsg = error.error?.message || 'Failed to submit quote';
        this.messageService.showMessage('error', 'Error', errorMsg);
        this.showConfirmDialog = false;
        this.isSubmitting = false;
      }
    });
  }

  // ==================== CANCEL ====================
  cancel(): void {
    if (this.alreadySubmitted || this.isViewOnlyMode) {
      this.router.navigate(['/supplier-dashboard']);
    } else {
      const shouldDiscard = confirm('Discard changes and return to dashboard?');
      if (shouldDiscard) this.router.navigate(['/supplier-dashboard']);
    }
  }

  // ==================== FORMAT CURRENCY ====================
  // Uses the resolved currency (same-country vs cross-border rule applied on backend)
  formatCurrency(amount: number): string {
    const sym = this.currencySymbol;
    const val = Number(amount || 0);
    const formatted = val.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    const rtlCodes = ['AED', 'SAR', 'QAR', 'KWD', 'BHD', 'OMR', 'IRR', 'IQD', 'JOD', 'LBP'];
    return rtlCodes.includes(this.currencyCode)
      ? `${formatted} ${sym}`
      : `${sym} ${formatted}`;
  }

  // ==================== UTILITIES ====================
  objectKeys(obj: any): string[] { return obj ? Object.keys(obj) : []; }

  getPriorityColor(priority: string): string {
    const colors: { [key: string]: string } = { HIGH: 'danger', MEDIUM: 'warning', LOW: 'info' };
    return colors[priority] || 'secondary';
  }
}