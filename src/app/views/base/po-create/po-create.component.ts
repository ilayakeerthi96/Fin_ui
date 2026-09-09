import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, CardHeaderComponent,
  RowComponent, ColComponent, ContainerComponent,
  ButtonDirective, SpinnerComponent, TableModule, BadgeComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

/**
 * Manual PO entry — the Admin's primary screen.
 *
 * Serves both /po-create and /po-edit/:id. Editing is only ever reached for a PO the API
 * still considers editable (DRAFT or RETURNED_FOR_REVISION); the API enforces that too, so
 * a stale tab cannot smuggle a change into an approved PO.
 *
 * Totals are shown live here so the Admin can see what they are authorising, but they are
 * NEVER sent to the server: the payload carries only quantity, rate, discount and tax rate,
 * and the backend recomputes every money figure from those. The two must agree — if they
 * ever diverge, the server is right.
 */
@Component({
  selector: 'app-po-create',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ContainerComponent, RowComponent, ColComponent,
    CardComponent, CardBodyComponent, CardHeaderComponent,
    ButtonDirective, SpinnerComponent, TableModule, BadgeComponent
  ],
  templateUrl: './po-create.component.html',
  styleUrls: ['./po-create.component.css']
})
export class PoCreateComponent implements OnInit {

  // ── Mode ──────────────────────────────────────────────────────────────
  poId: number | null = null;
  isEditMode = false;
  isLoading = false;
  isSaving = false;

  // ── Header ────────────────────────────────────────────────────────────
  po: any = {
    poNumber: '',
    poDate: this.today(),
    supplierId: null,
    supplierCode: '',
    buyerId: null,
    buyerLocationId: null,
    deliveryLocationId: null,
    departmentId: null,
    currencyCode: 'INR',
    currencySymbol: '₹',
    paymentTerms: '',
    deliveryTerms: '',
    otherTerms: '',
    deliveryDate: null,
    taxPercentage: 0,
    remarks: '',
    internalNotes: '',
    poType: 'GOODS'
  };

  // ── Line items ────────────────────────────────────────────────────────
  items: any[] = [];

  // ── Lookups ───────────────────────────────────────────────────────────
  suppliers: any[] = [];
  buyers: any[] = [];
  locations: any[] = [];
  departments: any[] = [];

  uomOptions = ['NOS', 'PCS', 'SET', 'BOX', 'KG', 'LTR', 'MTR', 'HRS', 'DAYS', 'LOT'];
  poTypeOptions = ['GOODS', 'SERVICE', 'BLANKET_CONTRACT'];

  errorMessage = '';

  constructor(
    private dataService: DataService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadLookups();

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.poId = Number(idParam);
      this.isEditMode = true;
      this.loadExistingPO(this.poId);
    } else {
      this.addItem();   // a PO always has at least one line, so start with one
    }
  }

  // ==================================================================
  // LOOKUPS
  // ==================================================================

  private loadLookups(): void {
    this.dataService.getAllSuppliersForPO().subscribe({
      next: (res: any) => { this.suppliers = this.unwrapList(res); },
      error: () => { this.suppliers = []; }
    });

    this.dataService.getAllBuyersForPO().subscribe({
      next: (res: any) => {
        this.buyers = this.unwrapList(res);
        // Buyer Company is shown as a fixed, non-editable field (see buyerName getter) — this
        // is a single-buyer app, so there is never a real choice to present. Auto-select only
        // when creating a new PO; loadExistingPO() already set po.buyerId for edit mode and
        // must not be overridden by whichever of these two calls happens to resolve first.
        if (!this.isEditMode && this.buyers.length === 1 && !this.po.buyerId) {
          this.po.buyerId = this.buyers[0].id;
          this.onBuyerChange();
        }
      },
      error: () => { this.buyers = []; }
    });
  }

  /** Static display name for the non-editable Buyer Company field. */
  get buyerName(): string {
    const b = this.buyers.find(x => x.id === Number(this.po.buyerId));
    return b?.companyName || (this.po.buyerId ? `Buyer #${this.po.buyerId}` : 'Loading…');
  }

  /**
   * Populates locations/departments for a PO already loaded in edit mode, without touching
   * the buyerLocationId/deliveryLocationId/departmentId that loadExistingPO() just set —
   * onBuyerChange()/onLocationChange() null those out on purpose for the create-mode cascade,
   * which would otherwise wipe a saved PO's location and department the instant it opens.
   */
  private populateDependentLookupsForEdit(): void {
    if (!this.po.buyerId) return;
    this.dataService.getLocationsForBuyer(this.po.buyerId).subscribe({
      next: (res: any) => { this.locations = this.unwrapList(res); },
      error: () => { this.locations = []; }
    });
    if (!this.po.buyerLocationId) return;
    this.dataService.getDepartmentsForLocation(this.po.buyerLocationId).subscribe({
      next: (res: any) => { this.departments = this.unwrapList(res); },
      error: () => { this.departments = []; }
    });
  }

  onBuyerChange(): void {
    this.locations = [];
    this.departments = [];
    this.po.buyerLocationId = null;
    this.po.deliveryLocationId = null;
    this.po.departmentId = null;
    if (!this.po.buyerId) return;

    this.dataService.getLocationsForBuyer(this.po.buyerId).subscribe({
      next: (res: any) => {
        this.locations = this.unwrapList(res);
        if (this.locations.length === 1) {
          this.po.buyerLocationId = this.locations[0].id;
          this.onLocationChange();
        }
      },
      error: () => { this.locations = []; }
    });
  }

  onLocationChange(): void {
    this.departments = [];
    this.po.departmentId = null;

    const loc = this.locations.find(l => l.id === Number(this.po.buyerLocationId));
    if (loc) {
      // Currency belongs to the location, not the PO form — a Chennai PO is in INR whatever
      // the Admin last typed. Delivery defaults to the buying location unless changed.
      this.po.currencyCode = loc.currencyCode || 'INR';
      this.po.currencySymbol = loc.currencySymbol || '₹';
      if (!this.po.deliveryLocationId) this.po.deliveryLocationId = loc.id;
    }

    if (!this.po.buyerLocationId) return;
    this.dataService.getDepartmentsForLocation(this.po.buyerLocationId).subscribe({
      next: (res: any) => { this.departments = this.unwrapList(res); },
      error: () => { this.departments = []; }
    });
  }

  onSupplierChange(): void {
    const sup = this.suppliers.find(s => s.id === Number(this.po.supplierId));
    // Prefill from the supplier master, but leave it editable — the code on this PO is a
    // snapshot, and the Admin may need to override it for a one-off.
    if (sup && !this.po.supplierCode) {
      this.po.supplierCode = sup.supplierCode || '';
    }
  }

  // ==================================================================
  // LINE ITEMS
  // ==================================================================

  addItem(): void {
    this.items.push({
      id: null,
      slNo: this.items.length + 1,
      itemCode: '',
      itemDescription: '',
      specifications: '',
      brandMakeModel: '',
      quantity: null,
      uom: 'NOS',
      unitRate: null,
      discountAmount: 0,
      taxPercentage: 0,
      deliveryDays: null,
      warrantyMonths: null,
      suppliedQuantity: 0
    });
  }

  removeItem(index: number): void {
    if (this.items.length === 1) {
      this.messageService.showMessage('warning', 'Cannot remove',
        'A purchase order must have at least one item.');
      return;
    }
    this.items.splice(index, 1);
    this.items.forEach((it, i) => it.slNo = i + 1);
  }

  // ── Live totals (display only — the server recomputes all of these) ──

  lineNet(item: any): number {
    const qty = Number(item.quantity) || 0;
    const rate = Number(item.unitRate) || 0;
    const discount = Number(item.discountAmount) || 0;
    const net = (qty * rate) - discount;
    return net > 0 ? net : 0;      // mirrors the server's clamp on an over-large discount
  }

  lineTax(item: any): number {
    const pct = Number(item.taxPercentage) || 0;
    return this.round(this.lineNet(item) * pct / 100);
  }

  lineTotal(item: any): number {
    return this.round(this.lineNet(item) + this.lineTax(item));
  }

  lineRemaining(item: any): number {
    const qty = Number(item.quantity) || 0;
    const supplied = Number(item.suppliedQuantity) || 0;
    const remaining = qty - supplied;
    return remaining > 0 ? remaining : 0;
  }

  get subtotal(): number {
    return this.round(this.items.reduce((sum, it) => sum + this.lineNet(it), 0));
  }

  get totalTax(): number {
    // Header tax applies only when no line carries its own rate — the same rule the server
    // uses in PurchaseOrder.calculateTotals(). Adding both would double-charge tax.
    const lineTaxSum = this.items.reduce((sum, it) => sum + this.lineTax(it), 0);
    if (lineTaxSum > 0) return this.round(lineTaxSum);
    const headerPct = Number(this.po.taxPercentage) || 0;
    return this.round(this.subtotal * headerPct / 100);
  }

  get grandTotal(): number {
    return this.round(this.subtotal + this.totalTax);
  }

  // ==================================================================
  // LOAD (edit mode)
  // ==================================================================

  private loadExistingPO(poId: number): void {
    this.isLoading = true;
    this.dataService.getPurchaseOrderById(poId).subscribe({
      next: (res: any) => {
        const data = res?.data || res;
        if (!data) {
          this.errorMessage = 'Purchase order not found.';
          this.isLoading = false;
          return;
        }

        if (data.editable === false) {
          // Belt and braces: the API refuses the save too, but telling the Admin here
          // saves them filling in a form that was never going to be accepted.
          this.errorMessage =
            `PO ${data.poNumber} is in status ${data.status} and can no longer be edited.`;
        }

        this.po = {
          poNumber: data.poNumber,
          poDate: this.toDateInput(data.poDate),
          supplierId: data.supplierId,
          supplierCode: data.supplierCode || '',
          buyerId: data.buyerId,
          buyerLocationId: data.buyerLocationId,
          deliveryLocationId: data.deliveryLocationId,
          departmentId: data.departmentId,
          currencyCode: data.currencyCode || 'INR',
          currencySymbol: data.currencySymbol || '₹',
          paymentTerms: data.paymentTerms || '',
          deliveryTerms: data.deliveryTerms || '',
          otherTerms: data.otherTerms || '',
          deliveryDate: data.deliveryDate || null,
          taxPercentage: data.taxPercentage || 0,
          remarks: data.buyerRemarks || '',
          internalNotes: data.internalNotes || '',
          poType: data.poType || 'GOODS',
          status: data.status
        };

        // loadLookups() (fired in ngOnInit before this resolves) only cascades locations and
        // departments reactively on a change event — it never fires for a PO whose buyerId is
        // already set. Populate them explicitly here so Buying Location / Delivery Location /
        // Department are not left showing empty against the values just loaded above.
        this.populateDependentLookupsForEdit();

        this.items = (data.lineItems || []).map((li: any, i: number) => ({
          id: li.id,
          slNo: li.slNo || i + 1,
          itemCode: li.itemCode || '',
          itemDescription: li.itemDescription || '',
          specifications: li.specifications || '',
          brandMakeModel: li.brandMakeModel || '',
          quantity: li.quantity,
          uom: li.uom || 'NOS',
          unitRate: li.unitRate,
          discountAmount: li.discountAmount || 0,
          taxPercentage: li.taxPercentage || 0,
          deliveryDays: li.deliveryDays,
          warrantyMonths: li.warrantyMonths,
          suppliedQuantity: li.suppliedQuantity || 0
        }));
        if (this.items.length === 0) this.addItem();

        if (this.po.buyerId) {
          this.dataService.getLocationsForBuyer(this.po.buyerId).subscribe({
            next: (r: any) => { this.locations = this.unwrapList(r); },
            error: () => {}
          });
        }
        if (this.po.buyerLocationId) {
          this.dataService.getDepartmentsForLocation(this.po.buyerLocationId).subscribe({
            next: (r: any) => { this.departments = this.unwrapList(r); },
            error: () => {}
          });
        }

        this.isLoading = false;
      },
      error: (err: any) => {
        this.errorMessage = this.apiError(err, 'Could not load the purchase order.');
        this.isLoading = false;
      }
    });
  }

  // ==================================================================
  // VALIDATION & SAVE
  // ==================================================================

  /** Client-side check mirroring the server's validation, so mistakes surface before a round trip. */
  private validate(): string | null {
    if (!this.po.supplierId) return 'Select a supplier.';
    if (!this.po.buyerId) return 'Select a buyer company.';
    if (this.items.length === 0) return 'Add at least one item.';

    for (let i = 0; i < this.items.length; i++) {
      const it = this.items[i];
      const row = `Item ${i + 1}`;
      if (!it.itemDescription || !String(it.itemDescription).trim()) return `${row}: description is required.`;
      if (!it.uom) return `${row}: unit of measure is required.`;
      if (it.quantity === null || it.quantity === undefined || Number(it.quantity) <= 0) {
        return `${row}: quantity must be greater than zero.`;
      }
      if (it.unitRate === null || it.unitRate === undefined || Number(it.unitRate) < 0) {
        return `${row}: unit price is required and cannot be negative.`;
      }
      if (Number(it.suppliedQuantity) > Number(it.quantity)) {
        return `${row}: supplied quantity cannot exceed the ordered quantity.`;
      }
    }
    if (this.grandTotal <= 0) return 'The purchase order total must be greater than zero.';
    return null;
  }

  savePO(releaseAfterSave: boolean = false): void {
    this.errorMessage = '';
    const problem = this.validate();
    if (problem) {
      this.errorMessage = problem;
      this.messageService.showMessage('warning', 'Check the form', problem);
      return;
    }

    this.isSaving = true;
    const payload = this.buildPayload();

    const request = this.isEditMode && this.poId
      ? this.dataService.updateManualPO(this.poId, payload)
      : this.dataService.createManualPO(payload);

    request.subscribe({
      next: (res: any) => {
        const saved = res?.data || res;
        const savedId = saved?.id || this.poId;
        this.messageService.showMessage('success',
          this.isEditMode ? 'PO updated' : 'PO created',
          `${saved?.poNumber || 'Purchase order'} saved as DRAFT.`);

        if (releaseAfterSave && savedId) {
          this.releaseToSupplier(savedId);
        } else {
          this.isSaving = false;
          this.router.navigate(['/po-details', savedId]);
        }
      },
      error: (err: any) => {
        this.isSaving = false;
        this.errorMessage = this.apiError(err, 'Could not save the purchase order.');
        this.messageService.showMessage('error', 'Save failed', this.errorMessage);
      }
    });
  }

  /**
   * Saving and releasing are two calls, not one transaction. If the release fails, the PO is
   * still safely saved as a DRAFT and can be released later from the PO list rather than
   * losing everything just typed. There is no approval step in between — a DRAFT PO releases
   * straight to the supplier.
   */
  private releaseToSupplier(poId: number): void {
    this.dataService.releasePO(poId, '').subscribe({
      next: () => {
        this.isSaving = false;
        this.messageService.showMessage('success', 'Released',
          'The PO has been released to the supplier.');
        this.router.navigate(['/po-details', poId]);
      },
      error: (err: any) => {
        this.isSaving = false;
        const msg = this.apiError(err, 'The PO was saved but could not be released.');
        this.messageService.showMessage('warning', 'Saved, not released', msg);
        this.router.navigate(['/po-details', poId]);
      }
    });
  }

  private buildPayload(): any {
    return {
      poNumber: this.po.poNumber || null,
      poDate: this.po.poDate || null,
      supplierId: Number(this.po.supplierId),
      supplierCode: this.po.supplierCode || null,
      buyerId: Number(this.po.buyerId),
      buyerLocationId: this.po.buyerLocationId ? Number(this.po.buyerLocationId) : null,
      deliveryLocationId: this.po.deliveryLocationId ? Number(this.po.deliveryLocationId) : null,
      departmentId: this.po.departmentId ? Number(this.po.departmentId) : null,
      currencyCode: this.po.currencyCode,
      currencySymbol: this.po.currencySymbol,
      paymentTerms: this.po.paymentTerms || null,
      deliveryTerms: this.po.deliveryTerms || null,
      otherTerms: this.po.otherTerms || null,
      deliveryDate: this.po.deliveryDate || null,
      taxPercentage: Number(this.po.taxPercentage) || 0,
      remarks: this.po.remarks || null,
      internalNotes: this.po.internalNotes || null,
      poType: this.po.poType || 'GOODS',
      // sourceSystem is left unset so the server applies MANUAL. A future Business Central
      // import sets it to BUSINESS_CENTRAL and supplies externalPoRef; nothing else changes.
      items: this.items.map((it, i) => ({
        id: it.id,
        slNo: i + 1,
        itemCode: it.itemCode || null,
        itemDescription: it.itemDescription,
        specifications: it.specifications || null,
        brandMakeModel: it.brandMakeModel || null,
        quantity: Number(it.quantity),
        uom: it.uom,
        unitRate: Number(it.unitRate),
        discountAmount: Number(it.discountAmount) || 0,
        taxPercentage: Number(it.taxPercentage) || 0,
        deliveryDays: it.deliveryDays ? Number(it.deliveryDays) : null,
        warrantyMonths: it.warrantyMonths ? Number(it.warrantyMonths) : null,
        suppliedQuantity: Number(it.suppliedQuantity) || 0
      }))
    };
  }

  cancel(): void {
    this.router.navigate(['/po-list']);
  }

  // ==================================================================
  // HELPERS
  // ==================================================================

  /** Endpoints in this app return either {data:[...]}, {data:{content:[...]}} or a bare array. */
  private unwrapList(res: any): any[] {
    if (Array.isArray(res)) return res;
    if (Array.isArray(res?.data)) return res.data;
    if (Array.isArray(res?.data?.content)) return res.data.content;
    if (Array.isArray(res?.content)) return res.content;
    return [];
  }

  private apiError(err: any, fallback: string): string {
    return err?.error?.message || err?.error?.error || err?.message || fallback;
  }

  private round(n: number): number {
    return Math.round((n + Number.EPSILON) * 100) / 100;
  }

  private today(): string {
    return new Date().toISOString().split('T')[0];
  }

  private toDateInput(value: any): string {
    if (!value) return this.today();
    return String(value).split('T')[0];
  }

  trackByIndex(index: number): number {
    return index;
  }
}
