import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-E33XJXHD.js";
import {
  AuthService
} from "./chunk-S3OSUDOO.js";
import {
  MessageService
} from "./chunk-4TRDTO5Y.js";
import {
  DataService
} from "./chunk-OQIPAMNU.js";
import "./chunk-JKMYCEKN.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BCCUO726.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-SO7Q7VKX.js";

// src/app/views/base/hierarchy-dashboard/hierarchy-dashboard.component.ts
function HierarchyDashboardComponent_button_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 92);
    \u0275\u0275listener("click", function HierarchyDashboardComponent_button_55_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToPendingApprovals());
    });
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275text(2, " Pending Approvals ");
    \u0275\u0275elementStart(3, "span", 94);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.totalBadgeCount, " ");
  }
}
function HierarchyDashboardComponent_option_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fy_r3 = ctx.$implicit;
    \u0275\u0275property("value", fy_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(fy_r3.label);
  }
}
function HierarchyDashboardComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97);
    \u0275\u0275element(2, "i", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 99);
    \u0275\u0275text(5, "Active Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 100);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.activeDateRangeLabel);
  }
}
function HierarchyDashboardComponent_button_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function HierarchyDashboardComponent_button_99_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetDateFilter());
    });
    \u0275\u0275element(1, "i", 102);
    \u0275\u0275text(2, "Current FY ");
    \u0275\u0275elementEnd();
  }
}
function HierarchyDashboardComponent_small_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 103);
    \u0275\u0275element(1, "i", 104);
    \u0275\u0275text(2, "Action Required ");
    \u0275\u0275elementEnd();
  }
}
function HierarchyDashboardComponent_small_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 105);
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275text(2, "Awaiting Release ");
    \u0275\u0275elementEnd();
  }
}
function HierarchyDashboardComponent_option_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", s_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getPOStatusLabel(s_r5));
  }
}
function HierarchyDashboardComponent_div_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "div", 108);
    \u0275\u0275elementStart(2, "p", 109);
    \u0275\u0275text(3, "Loading Purchase Orders\u2026");
    \u0275\u0275elementEnd()();
  }
}
function HierarchyDashboardComponent_div_160_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 118)(1, "td", 113)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 119);
    \u0275\u0275listener("click", function HierarchyDashboardComponent_div_160_tr_23_Template_div_click_5_listener() {
      const po_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewPODetails(po_r7));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 120);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 114)(11, "span", 121);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 115)(14, "span", 122);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "span", 123);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "span", 124);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 114)(26, "button", 125);
    \u0275\u0275listener("click", function HierarchyDashboardComponent_div_160_tr_23_Template_button_click_26_listener() {
      const po_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewPODetails(po_r7));
    });
    \u0275\u0275element(27, "i", 126);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const po_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.poCurrentPage - 1) * ctx_r1.poPageSize + i_r8 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", po_r7.poNumber || "PO-" + po_r7.id, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(po_r7.supplierName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(po_r7.itemsCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(po_r7.grandTotal, po_r7.currencyCode), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(po_r7.createdDate));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("po-status-badge " + ctx_r1.getPOStatusClass(po_r7.approvalStatus || po_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPOStatusLabel(po_r7.approvalStatus || po_r7.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", po_r7.paymentStatus === "PAID")("bg-warning", po_r7.paymentStatus === "PARTIALLY_PAID")("bg-secondary", !po_r7.paymentStatus || po_r7.paymentStatus === "UNPAID");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.paymentStatusLabel(po_r7.paymentStatus), " ");
  }
}
function HierarchyDashboardComponent_div_160_tr_24_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" You have ", ctx_r1.pendingPOCount, " PO(s) awaiting your approval in Pending Approvals. ");
  }
}
function HierarchyDashboardComponent_div_160_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 127);
    \u0275\u0275element(2, "i", 128);
    \u0275\u0275elementStart(3, "p", 129);
    \u0275\u0275text(4, "No purchase orders found for the current filter.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, HierarchyDashboardComponent_div_160_tr_24_small_5_Template, 2, 1, "small", 130);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.pendingPOCount > 0);
  }
}
function HierarchyDashboardComponent_div_160_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "table", 111)(2, "thead", 112)(3, "tr")(4, "th", 113);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "PO Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 114);
    \u0275\u0275text(11, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 115);
    \u0275\u0275text(13, "Grand Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "PO Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 114);
    \u0275\u0275text(21, "View");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, HierarchyDashboardComponent_div_160_tr_23_Template, 28, 16, "tr", 116)(24, HierarchyDashboardComponent_div_160_tr_24_Template, 6, 1, "tr", 117);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r1.pagedPOs)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagedPOs.length === 0);
  }
}
function HierarchyDashboardComponent_div_161_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132)(1, "div", 123);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28)(4, "button", 133);
    \u0275\u0275listener("click", function HierarchyDashboardComponent_div_161_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPOPageChange(ctx_r1.poCurrentPage - 1));
    });
    \u0275\u0275element(5, "i", 134);
    \u0275\u0275text(6, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 133);
    \u0275\u0275listener("click", function HierarchyDashboardComponent_div_161_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPOPageChange(ctx_r1.poCurrentPage + 1));
    });
    \u0275\u0275text(8, " Next ");
    \u0275\u0275element(9, "i", 135);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Page ", ctx_r1.poCurrentPage, " of ", ctx_r1.totalPOPages, " \xA0\xB7\xA0 ", ctx_r1.filteredPOs.length, " PO(s) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.poCurrentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.poCurrentPage >= ctx_r1.totalPOPages);
  }
}
var _HierarchyDashboardComponent = class _HierarchyDashboardComponent {
  get totalBadgeCount() {
    return this.pendingPOCount + this.holdPOCount;
  }
  get approvedPOCount() {
    return this.dateFilteredPOs.filter((po) => (po.approvalStatus || po.status) === "APPROVED").length;
  }
  constructor(dataService, messageService, authService, router, cdr) {
    this.dataService = dataService;
    this.messageService = messageService;
    this.authService = authService;
    this.router = router;
    this.cdr = cdr;
    this.userId = 0;
    this.userName = "";
    this.userEmail = "";
    this.hierarchyLevelId = null;
    this.hierarchyLevelName = "";
    this.hierarchyLevelOrder = null;
    this.companyName = "";
    this.allPOs = [];
    this.filteredPOs = [];
    this.pagedPOs = [];
    this.dateFilteredPOs = [];
    this.poSearchText = "";
    this.poCurrentPage = 1;
    this.poPageSize = 10;
    this.poStatusFilter = "";
    this.isPOLoading = false;
    this.pendingPOCount = 0;
    this.holdPOCount = 0;
    this.poStatuses = [
      "DRAFT",
      "PENDING_APPROVAL",
      "APPROVED",
      "REJECTED",
      "RETURNED_FOR_REVISION",
      "RELEASED",
      "IN_PROGRESS",
      "DELIVERED",
      "COMPLETED",
      "CLOSED",
      "FORECLOSED",
      "CANCELLED"
    ];
    this.financialYearOptions = [];
    this.selectedFYOption = "";
    this.customFromDate = "";
    this.customToDate = "";
    this.activeDateRangeLabel = "";
  }
  ngOnInit() {
    this.initializeUser();
    this.buildFinancialYearOptions();
    this.selectedFYOption = this.getCurrentFYValue();
    this.updateActiveDateRangeLabel();
    this.loadData();
  }
  initializeUser() {
    this.userId = Number(localStorage.getItem("userId")) || 0;
    this.userName = localStorage.getItem("fullName") || "User";
    this.userEmail = localStorage.getItem("email") || localStorage.getItem("username") || "";
    this.companyName = localStorage.getItem("companyName") || "NA";
    this.hierarchyLevelId = this.authService.getHierarchyLevelId();
    this.hierarchyLevelName = this.authService.getHierarchyLevelName() || "Approver";
    this.hierarchyLevelOrder = this.authService.getHierarchyLevelOrder();
    if (!this.userId) {
      this.messageService.showMessage("error", "Error", "User ID not found. Please login again.");
      this.router.navigate(["/login"]);
    }
  }
  // ===========================================================================
  // FINANCIAL YEAR HELPERS
  // ===========================================================================
  buildFinancialYearOptions() {
    const today = /* @__PURE__ */ new Date();
    const currentFYStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
    this.financialYearOptions = [];
    for (let i = 0; i < 4; i++) {
      const startYear = currentFYStartYear - i;
      const endYear = startYear + 1;
      this.financialYearOptions.push({
        value: `FY${startYear}-${String(endYear).slice(-2)}`,
        label: `FY ${startYear}-${String(endYear).slice(-2)}  (Apr ${startYear} \u2013 Mar ${endYear})`,
        from: new Date(startYear, 3, 1, 0, 0, 0, 0),
        to: new Date(endYear, 2, 31, 23, 59, 59, 999)
      });
    }
  }
  getCurrentFYValue() {
    return this.financialYearOptions.length > 0 ? this.financialYearOptions[0].value : "ALL";
  }
  onFYOptionChange() {
    if (this.selectedFYOption !== "CUSTOM") {
      this.customFromDate = "";
      this.customToDate = "";
    }
    this.updateActiveDateRangeLabel();
    this.applyPOFilters();
  }
  resetDateFilter() {
    this.selectedFYOption = this.getCurrentFYValue();
    this.customFromDate = "";
    this.customToDate = "";
    this.updateActiveDateRangeLabel();
    this.applyPOFilters();
  }
  updateActiveDateRangeLabel() {
    if (this.selectedFYOption === "ALL") {
      this.activeDateRangeLabel = "All Time";
      return;
    }
    if (this.selectedFYOption === "CUSTOM") {
      if (this.customFromDate && this.customToDate)
        this.activeDateRangeLabel = `${this.fmtDate(this.customFromDate)} \u2013 ${this.fmtDate(this.customToDate)}`;
      else if (this.customFromDate)
        this.activeDateRangeLabel = `From ${this.fmtDate(this.customFromDate)}`;
      else if (this.customToDate)
        this.activeDateRangeLabel = `Up to ${this.fmtDate(this.customToDate)}`;
      else
        this.activeDateRangeLabel = "Custom Range";
      return;
    }
    const fy = this.financialYearOptions.find((f) => f.value === this.selectedFYOption);
    this.activeDateRangeLabel = fy ? fy.label : "";
  }
  fmtDate(dateStr) {
    return (/* @__PURE__ */ new Date(dateStr + "T00:00:00")).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  }
  getActiveDateRange() {
    if (this.selectedFYOption === "ALL")
      return null;
    if (this.selectedFYOption === "CUSTOM") {
      const from = this.customFromDate ? /* @__PURE__ */ new Date(this.customFromDate + "T00:00:00") : null;
      const to = this.customToDate ? /* @__PURE__ */ new Date(this.customToDate + "T23:59:59") : null;
      if (!from && !to)
        return null;
      return { from: from ?? /* @__PURE__ */ new Date(0), to: to ?? /* @__PURE__ */ new Date(864e13) };
    }
    const fy = this.financialYearOptions.find((f) => f.value === this.selectedFYOption);
    return fy ? { from: fy.from, to: fy.to } : null;
  }
  applyDateFilter(items, dateField = "createdAt") {
    const range = this.getActiveDateRange();
    if (!range)
      return items;
    return items.filter((item) => {
      const d = new Date(item[dateField] || item.createdAt || "");
      return d >= range.from && d <= range.to;
    });
  }
  // ===========================================================================
  // DATA LOADING
  // ===========================================================================
  loadData() {
    this.loadPOs();
    this.loadPendingPOApprovalCount();
    this.loadHoldPOApprovalCount();
  }
  loadPOs() {
    if (!this.userId)
      return;
    this.isPOLoading = true;
    this.dataService.getPurchaseOrdersByCompany(this.companyName).subscribe({
      next: (response) => {
        let raw = [];
        if (Array.isArray(response))
          raw = response;
        else if (Array.isArray(response?.data))
          raw = response.data;
        else if (Array.isArray(response?.content))
          raw = response.content;
        this.allPOs = raw.map((po) => __spreadProps(__spreadValues({}, po), {
          supplierName: po.supplierName || po.supplier?.companyName || "N/A",
          grandTotal: po.grandTotal || po.totalAmount || 0,
          itemsCount: po.itemsCount || po.items?.length || 0,
          poNumber: po.poNumber || po.id || "N/A",
          createdDate: po.createdAt || po.createdDate || po.poDate || null,
          approvalStatus: po.approvalStatus || po.status || "DRAFT",
          currencyCode: po.currencyCode || "INR",
          currencySymbol: po.currencySymbol || "\u20B9"
        }));
        this.applyPOFilters();
        this.isPOLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.allPOs = [];
        this.filteredPOs = [];
        this.pagedPOs = [];
        this.isPOLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
  loadPendingPOApprovalCount() {
    if (!this.userId)
      return;
    this.dataService.getPendingPOApprovalCount(this.userId).subscribe({
      next: (res) => {
        this.pendingPOCount = res.pendingCount ?? res.count ?? res.data ?? 0;
        this.cdr.markForCheck();
      },
      error: () => {
        this.pendingPOCount = 0;
      }
    });
  }
  loadHoldPOApprovalCount() {
    if (!this.userId)
      return;
    this.dataService.getHoldPOApprovalCount(this.userId).subscribe({
      next: (res) => {
        this.holdPOCount = res.holdCount ?? res.count ?? res.data ?? 0;
        this.cdr.markForCheck();
      },
      error: () => {
        this.holdPOCount = 0;
      }
    });
  }
  // ===========================================================================
  // FILTERING & PAGINATION
  // ===========================================================================
  applyPOFilters() {
    this.updateActiveDateRangeLabel();
    const dateFiltered = this.applyDateFilter(this.allPOs, "createdDate");
    this.dateFilteredPOs = dateFiltered;
    let data = [...dateFiltered];
    if (this.poSearchText.trim()) {
      const term = this.poSearchText.toLowerCase();
      data = data.filter((po) => (po.poNumber || "").toString().toLowerCase().includes(term) || (po.supplierName || "").toLowerCase().includes(term));
    }
    if (this.poStatusFilter) {
      data = data.filter((po) => (po.approvalStatus || po.status) === this.poStatusFilter);
    }
    this.filteredPOs = data;
    this.poCurrentPage = 1;
    this.updatePOPagination();
  }
  updatePOPagination() {
    const start = (this.poCurrentPage - 1) * this.poPageSize;
    this.pagedPOs = this.filteredPOs.slice(start, start + this.poPageSize);
    this.cdr.markForCheck();
  }
  get totalPOPages() {
    return Math.ceil(this.filteredPOs.length / this.poPageSize);
  }
  onPOPageChange(page) {
    if (page >= 1 && page <= this.totalPOPages) {
      this.poCurrentPage = page;
      this.updatePOPagination();
    }
  }
  // ===========================================================================
  // NAVIGATION
  // ===========================================================================
  viewPODetails(po) {
    this.router.navigate(["/po-details", po.id]);
  }
  navigateToPendingApprovals() {
    this.router.navigate(["/pending-approvals"]);
  }
  refresh() {
    this.loadData();
  }
  // ===========================================================================
  // DISPLAY UTILITIES
  // ===========================================================================
  formatDate(dateString) {
    if (!dateString)
      return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-GB");
    } catch {
      return "\u2014";
    }
  }
  formatCurrency(amount, currencyCode) {
    const code = currencyCode || "INR";
    const symbol = this.getSymbolForCode(code);
    if (amount == null || isNaN(Number(amount)))
      return `${symbol} 0.00`;
    const formatted = Number(amount).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `${symbol} ${formatted}`;
  }
  getSymbolForCode(code) {
    const map = {
      "INR": "\u20B9",
      "USD": "$",
      "EUR": "\u20AC",
      "GBP": "\xA3",
      "AED": "\u062F.\u0625",
      "SGD": "S$",
      "JPY": "\xA5",
      "CNY": "\xA5",
      "CHF": "Fr",
      "CAD": "C$",
      "AUD": "A$",
      "MYR": "RM"
    };
    return map[code] || code;
  }
  getPOStatusClass(status) {
    const m = {
      "DRAFT": "badge-po-draft",
      "PENDING_APPROVAL": "badge-po-pending",
      "APPROVED": "badge-po-approved",
      "REJECTED": "badge-po-rejected",
      "RETURNED_FOR_REVISION": "badge-po-pending",
      "RELEASED": "badge-po-sent",
      "IN_PROGRESS": "badge-po-ack",
      "DELIVERED": "badge-po-ack",
      "COMPLETED": "badge-po-done",
      "CLOSED": "badge-po-done",
      "FORECLOSED": "badge-po-cancelled",
      "CANCELLED": "badge-po-cancelled"
    };
    return m[status] || "badge-po-draft";
  }
  getPOStatusLabel(status) {
    const m = {
      "DRAFT": "Draft",
      "PENDING_APPROVAL": "Pending Approval",
      "APPROVED": "Approved",
      "REJECTED": "Rejected",
      "RETURNED_FOR_REVISION": "Returned for Revision",
      "RELEASED": "Released",
      "IN_PROGRESS": "In Progress",
      "DELIVERED": "Delivered",
      "COMPLETED": "Completed",
      "CLOSED": "Closed",
      "FORECLOSED": "Foreclosed",
      "CANCELLED": "Cancelled"
    };
    return m[status] || (status || "Unknown").replace(/_/g, " ");
  }
  /** "Unpaid" reads like something's wrong; it's just the normal starting state. */
  paymentStatusLabel(status) {
    switch (status) {
      case "PAID":
        return "Paid";
      case "PARTIALLY_PAID":
        return "Partially Paid";
      default:
        return "Awaiting Payment";
    }
  }
  trackById(_i, row) {
    return row?.id;
  }
};
_HierarchyDashboardComponent.\u0275fac = function HierarchyDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HierarchyDashboardComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_HierarchyDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HierarchyDashboardComponent, selectors: [["app-hierarchy-dashboard"]], decls: 162, vars: 36, consts: [[1, "container-fluid", "p-4"], [1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-0", "shadow-lg", 2, "border-radius", "12px", "overflow", "hidden"], [1, "gradient-header"], [1, "row", "align-items-center"], [1, "col-12", "col-lg-4", "text-center", "text-lg-start", "mb-3", "mb-lg-0"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-start"], [1, "avatar-circle-large", "me-3"], [1, "text-white"], [1, "mb-1", "fw-bold", 2, "font-size", "1.5rem"], [1, "mb-0", 2, "opacity", "0.9", "font-size", "0.95rem"], [1, "bi", "bi-shield-check", "me-1"], [1, "col-12", "col-lg-8"], [1, "row", "g-2"], [1, "col-12", "col-md-4"], [1, "info-card"], [1, "info-card-icon"], [1, "bi", "bi-building-fill"], [1, "info-card-content"], [1, "info-label"], [1, "info-value"], [1, "bi", "bi-envelope-fill"], [1, "bi", "bi-diagram-3-fill"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "fw-bold", "text-dark", "mb-1"], [1, "bi", "bi-speedometer2"], [1, "text-muted", "small", "mb-0"], [1, "d-flex", "gap-2"], ["class", "btn btn-warning position-relative", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "bi", "bi-arrow-clockwise"], [1, "date-filter-card", "mb-4"], [1, "date-filter-accent"], [1, "date-filter-inner"], [1, "date-filter-title-wrap"], [1, "date-filter-icon-wrap"], [1, "bi", "bi-calendar3-range"], [1, "date-filter-title"], [1, "date-filter-subtitle"], [1, "date-filter-divider"], [1, "date-filter-controls"], [1, "date-filter-field"], [1, "date-filter-label"], [1, "bi", "bi-calendar2-check", "me-1"], [1, "date-filter-select-wrap"], [1, "date-filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", "ALL"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "CUSTOM"], [1, "bi", "bi-chevron-down", "date-filter-select-icon"], [1, "date-filter-field", "date-filter-custom-field"], [1, "bi", "bi-calendar-event", "me-1"], [1, "date-filter-input-wrap"], ["type", "date", 1, "date-filter-input", 3, "ngModelChange", "change", "ngModel"], [1, "bi", "bi-calendar-event-fill", "me-1"], [1, "date-filter-right"], ["class", "date-filter-badge-wrap", 4, "ngIf"], ["class", "date-filter-reset-btn", "title", "Reset to current financial year", 3, "click", 4, "ngIf"], [1, "section-label-row", "mb-2"], [1, "section-label-text"], [1, "bi", "bi-file-earmark-check", "me-1"], [1, "section-label-line"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-md-3"], [1, "stat-card"], [1, "stat-icon", 2, "background", "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", "color", "white"], [1, "bi", "bi-file-earmark-text"], [1, "stat-info"], [1, "stat-card", 2, "cursor", "pointer", 3, "click"], [1, "stat-icon", 2, "background", "linear-gradient(135deg, #e53935 0%, #b71c1c 100%)", "color", "white"], [1, "bi", "bi-hourglass-split"], ["class", "text-danger fw-bold", "style", "font-size:0.72rem;", 4, "ngIf"], [1, "stat-icon", 2, "background", "linear-gradient(135deg, #ff8f00 0%, #e65100 100%)", "color", "white"], [1, "bi", "bi-pause-circle"], ["class", "fw-bold", "style", "font-size:0.72rem; color:#e65100;", 4, "ngIf"], [1, "stat-icon", 2, "background", "linear-gradient(135deg, #43e97b 0%, #1a8a3c 100%)", "color", "white"], [1, "bi", "bi-check-circle"], [1, "card", "border-0", "shadow-sm", 2, "border-radius", "12px"], [1, "card-header", "bg-white", "border-0", "pt-3", "px-4", "pb-0", 2, "border-radius", "12px 12px 0 0"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fw-bold", "mb-0"], [1, "bi", "bi-cart-check", "me-2"], [1, "badge", "bg-secondary", "ms-2"], [1, "d-flex", "gap-2", "align-items-center"], ["type", "text", "placeholder", "Search PO number or supplier\u2026", 1, "form-control", "form-control-sm", 2, "width", "220px", 3, "ngModelChange", "ngModel"], [1, "form-select", "form-select-sm", 2, "width", "190px", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [1, "card-body", "p-0"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center p-4 border-top", 4, "ngIf"], [1, "btn", "btn-warning", "position-relative", 3, "click"], [1, "bi", "bi-clock-history"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger"], [3, "value"], [1, "date-filter-badge-wrap"], [1, "date-filter-badge-icon"], [1, "bi", "bi-funnel-fill"], [1, "date-filter-badge-label"], [1, "date-filter-badge-value"], ["title", "Reset to current financial year", 1, "date-filter-reset-btn", 3, "click"], [1, "bi", "bi-arrow-counterclockwise", "me-1"], [1, "text-danger", "fw-bold", 2, "font-size", "0.72rem"], [1, "bi", "bi-exclamation-circle-fill", "me-1"], [1, "fw-bold", 2, "font-size", "0.72rem", "color", "#e65100"], [1, "bi", "bi-info-circle-fill", "me-1"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-warning"], [1, "text-muted", "mt-3"], [1, "table-responsive"], [1, "table", "align-middle", "mb-0"], [2, "background-color", "#f8f9fa"], [1, "ps-4"], [1, "text-center"], [1, "text-end"], ["class", "table-row-hover", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "table-row-hover"], [1, "fw-bold", "text-primary", 2, "cursor", "pointer", 3, "click"], [1, "fw-semibold"], [1, "badge", "bg-secondary"], [1, "fw-bold", "text-success"], [1, "text-muted", "small"], [1, "badge"], ["title", "View PO details", 1, "btn", "btn-sm", "btn-light", "text-info", "shadow-sm", 3, "click"], [1, "bi", "bi-eye"], ["colspan", "9", 1, "text-center", "text-muted", "py-5"], [1, "bi", "bi-cart-x", "display-6", "mb-3", "d-block", "opacity-25"], [1, "mb-0"], ["class", "text-warning", 4, "ngIf"], [1, "text-warning"], [1, "d-flex", "justify-content-between", "align-items-center", "p-4", "border-top"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [1, "bi", "bi-chevron-right"]], template: function HierarchyDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "h3", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 11);
    \u0275\u0275element(14, "i", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17);
    \u0275\u0275element(21, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 19)(23, "div", 20);
    \u0275\u0275text(24, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 21);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 15)(28, "div", 16)(29, "div", 17);
    \u0275\u0275element(30, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 19)(32, "div", 20);
    \u0275\u0275text(33, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 21);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 15)(37, "div", 16)(38, "div", 17);
    \u0275\u0275element(39, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 19)(41, "div", 20);
    \u0275\u0275text(42, "Approval Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 21);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()()()()()()()()();
    \u0275\u0275elementStart(45, "div", 1)(46, "div", 2)(47, "div", 24)(48, "div")(49, "h3", 25);
    \u0275\u0275element(50, "i", 26);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p", 27);
    \u0275\u0275text(53, " Purchase orders pending your approval, and the full PO list for your company. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 28);
    \u0275\u0275template(55, HierarchyDashboardComponent_button_55_Template, 5, 1, "button", 29);
    \u0275\u0275elementStart(56, "button", 30);
    \u0275\u0275listener("click", function HierarchyDashboardComponent_Template_button_click_56_listener() {
      return ctx.refresh();
    });
    \u0275\u0275element(57, "i", 31);
    \u0275\u0275text(58, " Refresh ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(59, "div", 32);
    \u0275\u0275element(60, "div", 33);
    \u0275\u0275elementStart(61, "div", 34)(62, "div", 35)(63, "div", 36);
    \u0275\u0275element(64, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div")(66, "div", 38);
    \u0275\u0275text(67, "Date Range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 39);
    \u0275\u0275text(69, "Filter POs by creation date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(70, "div", 40);
    \u0275\u0275elementStart(71, "div", 41)(72, "div", 42)(73, "label", 43);
    \u0275\u0275element(74, "i", 44);
    \u0275\u0275text(75, "Financial Year / Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 45)(77, "select", 46);
    \u0275\u0275twoWayListener("ngModelChange", function HierarchyDashboardComponent_Template_select_ngModelChange_77_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedFYOption, $event) || (ctx.selectedFYOption = $event);
      return $event;
    });
    \u0275\u0275listener("change", function HierarchyDashboardComponent_Template_select_change_77_listener() {
      return ctx.onFYOptionChange();
    });
    \u0275\u0275elementStart(78, "option", 47);
    \u0275\u0275text(79, "All Time");
    \u0275\u0275elementEnd();
    \u0275\u0275template(80, HierarchyDashboardComponent_option_80_Template, 2, 2, "option", 48);
    \u0275\u0275elementStart(81, "option", 49);
    \u0275\u0275text(82, "Custom Range");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(83, "i", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 51)(85, "label", 43);
    \u0275\u0275element(86, "i", 52);
    \u0275\u0275text(87, "From Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 53)(89, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function HierarchyDashboardComponent_Template_input_ngModelChange_89_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.customFromDate, $event) || (ctx.customFromDate = $event);
      return $event;
    });
    \u0275\u0275listener("change", function HierarchyDashboardComponent_Template_input_change_89_listener() {
      return ctx.onFYOptionChange();
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "div", 51)(91, "label", 43);
    \u0275\u0275element(92, "i", 55);
    \u0275\u0275text(93, "To Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 53)(95, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function HierarchyDashboardComponent_Template_input_ngModelChange_95_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.customToDate, $event) || (ctx.customToDate = $event);
      return $event;
    });
    \u0275\u0275listener("change", function HierarchyDashboardComponent_Template_input_change_95_listener() {
      return ctx.onFYOptionChange();
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(96, "div", 40);
    \u0275\u0275elementStart(97, "div", 56);
    \u0275\u0275template(98, HierarchyDashboardComponent_div_98_Template, 8, 1, "div", 57)(99, HierarchyDashboardComponent_button_99_Template, 3, 0, "button", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "div", 59)(101, "span", 60);
    \u0275\u0275element(102, "i", 61);
    \u0275\u0275text(103, "Purchase Order Overview ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(104, "hr", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "div", 63)(106, "div", 64)(107, "div", 65)(108, "div", 66);
    \u0275\u0275element(109, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 68)(111, "h4");
    \u0275\u0275text(112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "p");
    \u0275\u0275text(114, "Total POs");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(115, "div", 64)(116, "div", 69);
    \u0275\u0275listener("click", function HierarchyDashboardComponent_Template_div_click_116_listener() {
      return ctx.navigateToPendingApprovals();
    });
    \u0275\u0275elementStart(117, "div", 70);
    \u0275\u0275element(118, "i", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "div", 68)(120, "h4");
    \u0275\u0275text(121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "p");
    \u0275\u0275text(123, "Pending My Approval");
    \u0275\u0275elementEnd();
    \u0275\u0275template(124, HierarchyDashboardComponent_small_124_Template, 3, 0, "small", 72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(125, "div", 64)(126, "div", 69);
    \u0275\u0275listener("click", function HierarchyDashboardComponent_Template_div_click_126_listener() {
      return ctx.navigateToPendingApprovals();
    });
    \u0275\u0275elementStart(127, "div", 73);
    \u0275\u0275element(128, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "div", 68)(130, "h4");
    \u0275\u0275text(131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "p");
    \u0275\u0275text(133, "POs On HOLD by Me");
    \u0275\u0275elementEnd();
    \u0275\u0275template(134, HierarchyDashboardComponent_small_134_Template, 3, 0, "small", 75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(135, "div", 64)(136, "div", 65)(137, "div", 76);
    \u0275\u0275element(138, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "div", 68)(140, "h4");
    \u0275\u0275text(141);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "p");
    \u0275\u0275text(143, "Approved POs");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(144, "div", 78)(145, "div", 79)(146, "div", 80)(147, "h6", 81);
    \u0275\u0275element(148, "i", 82);
    \u0275\u0275text(149, "Purchase Orders ");
    \u0275\u0275elementStart(150, "span", 83);
    \u0275\u0275text(151);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "div", 84)(153, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function HierarchyDashboardComponent_Template_input_ngModelChange_153_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.poSearchText, $event) || (ctx.poSearchText = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function HierarchyDashboardComponent_Template_input_ngModelChange_153_listener() {
      return ctx.applyPOFilters();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "select", 86);
    \u0275\u0275twoWayListener("ngModelChange", function HierarchyDashboardComponent_Template_select_ngModelChange_154_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.poStatusFilter, $event) || (ctx.poStatusFilter = $event);
      return $event;
    });
    \u0275\u0275listener("change", function HierarchyDashboardComponent_Template_select_change_154_listener() {
      return ctx.applyPOFilters();
    });
    \u0275\u0275elementStart(155, "option", 87);
    \u0275\u0275text(156, "All Statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275template(157, HierarchyDashboardComponent_option_157_Template, 2, 2, "option", 48);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(158, "div", 88);
    \u0275\u0275template(159, HierarchyDashboardComponent_div_159_Template, 4, 0, "div", 89)(160, HierarchyDashboardComponent_div_160_Template, 25, 3, "div", 90)(161, HierarchyDashboardComponent_div_161_Template, 10, 5, "div", 91);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.userName.substring(0, 2).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.userName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.hierarchyLevelName, " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.companyName);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.userEmail);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Level ", ctx.hierarchyLevelOrder);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\xA0\xA0", ctx.hierarchyLevelName, " Dashboard ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.totalBadgeCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isPOLoading);
    \u0275\u0275advance(21);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedFYOption);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.financialYearOptions);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("date-filter-field-visible", ctx.selectedFYOption === "CUSTOM");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.customFromDate);
    \u0275\u0275advance();
    \u0275\u0275classProp("date-filter-field-visible", ctx.selectedFYOption === "CUSTOM");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.customToDate);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.activeDateRangeLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedFYOption !== ctx.getCurrentFYValue());
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.dateFilteredPOs.length);
    \u0275\u0275advance(8);
    \u0275\u0275styleProp("color", ctx.pendingPOCount > 0 ? "#c62828" : "#2d3748");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.pendingPOCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.pendingPOCount > 0);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("color", ctx.holdPOCount > 0 ? "#e65100" : "#2d3748");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.holdPOCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.holdPOCount > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.approvedPOCount);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.filteredPOs.length);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.poSearchText);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.poStatusFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.poStatuses);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isPOLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isPOLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isPOLoading && ctx.filteredPOs.length > 0);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.date-filter-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.date-filter-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.10);\n}\n.date-filter-accent[_ngcontent-%COMP%] {\n  width: 5px;\n  background:\n    linear-gradient(\n      180deg,\n      #667eea 0%,\n      #764ba2 100%);\n  flex-shrink: 0;\n}\n.date-filter-inner[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  padding: 18px 24px;\n  flex-wrap: wrap;\n  gap: 0;\n}\n.date-filter-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  min-width: 160px;\n}\n.date-filter-icon-wrap[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-title[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.2;\n}\n.date-filter-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #8a8a9a;\n  margin-top: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  font-weight: 500;\n}\n.date-filter-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 44px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      #e2e5f0,\n      transparent);\n  margin: 0 24px;\n  flex-shrink: 0;\n  align-self: center;\n}\n.date-filter-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.date-filter-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 220px;\n}\n.date-filter-custom-field[_ngcontent-%COMP%] {\n  max-width: 0;\n  min-width: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition:\n    max-width 0.3s ease,\n    opacity 0.3s ease,\n    min-width 0.3s ease;\n  pointer-events: none;\n}\n.date-filter-custom-field.date-filter-field-visible[_ngcontent-%COMP%] {\n  max-width: 200px;\n  min-width: 160px;\n  opacity: 1;\n  pointer-events: all;\n}\n.date-filter-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 0;\n  white-space: nowrap;\n}\n.date-filter-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.date-filter-select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.date-filter-select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n  padding: 9px 36px 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-select[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-select[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-select-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.75rem;\n  color: #667eea;\n  pointer-events: none;\n}\n.date-filter-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.date-filter-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-input[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-input[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  margin-left: auto;\n  flex-wrap: wrap;\n}\n.date-filter-badge-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  border: 1.5px solid rgba(102, 126, 234, 0.2);\n  border-radius: 12px;\n  padding: 8px 14px 8px 10px;\n}\n.date-filter-badge-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-badge-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  line-height: 1;\n}\n.date-filter-badge-value[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #667eea;\n  margin-top: 3px;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n.date-filter-reset-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 9px 16px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #667eea;\n  background: #f0f2ff;\n  border: 1.5px solid #d0d5f5;\n  border-radius: 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.date-filter-reset-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n  transform: translateY(-1px);\n}\n.date-filter-reset-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n@media (max-width: 992px) {\n  .date-filter-inner[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 16px;\n    padding: 16px 18px;\n  }\n  .date-filter-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .date-filter-title-wrap[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-controls[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .date-filter-right[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 576px) {\n  .date-filter-field[_ngcontent-%COMP%], \n   .date-filter-custom-field.date-filter-field-visible[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-badge-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.8rem;\n}\n.stat-card-blue[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.stat-card-warning[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n}\n.stat-card-success[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n}\n.stat-card-info[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #43e97b 0%,\n      #38f9d7 100%);\n  color: white;\n}\n.stat-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 0;\n  color: #2d3748;\n}\n.stat-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #718096;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #64748b;\n  letter-spacing: 0.5px;\n  padding: 1rem 0.75rem;\n  border: none;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 0.75rem;\n  vertical-align: middle;\n  font-size: 0.9rem;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.cursor-pointer[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.4rem 0.7rem;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    font-size: 1.5rem;\n  }\n  .stat-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.gradient-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  padding: 10px;\n}\n.avatar-circle-large[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  color: white;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n}\n.info-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-card-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  font-size: 1.5rem;\n  color: white;\n}\n.info-card-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.9;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: white;\n  margin-top: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .avatar-circle-large[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    font-size: 1.5rem;\n  }\n  .info-card[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .info-card-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 1.2rem;\n  }\n  .info-label[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n@media (max-width: 576px) {\n  .gradient-header[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .avatar-circle-large[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    font-size: 1.2rem;\n    border-width: 2px;\n  }\n}\n.section-label-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.section-label-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  white-space: nowrap;\n}\n.section-label-line[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin: 0;\n  border-color: #e2e8f0;\n}\n.table-row-hover[_ngcontent-%COMP%] {\n  transition: background-color 0.15s;\n}\n.table-row-hover[_ngcontent-%COMP%]:hover {\n  background-color: #f0f4ff;\n}\n.dash-tab-btn[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 3px solid transparent;\n  background: transparent;\n  color: #718096;\n  font-weight: 600;\n  font-size: 0.9rem;\n  padding: 0.6rem 1.1rem;\n  border-radius: 6px 6px 0 0;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.dash-tab-btn[_ngcontent-%COMP%]:hover {\n  color: #4a5568;\n  background-color: #f7fafc;\n}\n.dash-tab-btn.active[_ngcontent-%COMP%] {\n  color: #667eea;\n  border-bottom-color: #667eea;\n  background-color: #fff;\n}\n.tab-count-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 22px;\n  height: 20px;\n  padding: 0 6px;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  background-color: #e2e8f0;\n  color: #4a5568;\n  transition: all 0.2s;\n}\n.tab-count-badge.badge-active[_ngcontent-%COMP%] {\n  background-color: #667eea;\n  color: white;\n}\n.tab-count-badge.badge-alert[_ngcontent-%COMP%] {\n  background-color: #fed7d7;\n  color: #c53030;\n}\n.po-status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.3rem 0.65rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n}\n.badge-po-draft[_ngcontent-%COMP%] {\n  background: #edf2f7;\n  color: #4a5568;\n}\n.badge-po-pending[_ngcontent-%COMP%] {\n  background: #fefcbf;\n  color: #744210;\n}\n.badge-po-approved[_ngcontent-%COMP%] {\n  background: #c6f6d5;\n  color: #22543d;\n}\n.badge-po-rejected[_ngcontent-%COMP%] {\n  background: #fed7d7;\n  color: #822727;\n}\n.badge-po-hold[_ngcontent-%COMP%] {\n  background: #feebc8;\n  color: #7b341e;\n}\n.badge-po-sent[_ngcontent-%COMP%] {\n  background: #bee3f8;\n  color: #2a4365;\n}\n.badge-po-ack[_ngcontent-%COMP%] {\n  background: #d6f5d6;\n  color: #276749;\n}\n.badge-po-done[_ngcontent-%COMP%] {\n  background: #b2f5ea;\n  color: #234e52;\n}\n.badge-po-cancelled[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #2d3748;\n}\n/*# sourceMappingURL=hierarchy-dashboard.component.css.map */"] });
var HierarchyDashboardComponent = _HierarchyDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HierarchyDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-hierarchy-dashboard", standalone: true, imports: [CommonModule, FormsModule], template: `
<div class="container-fluid p-4">

  <!-- ==================== USER INFO CARD ==================== -->
  <div class="row mb-4">
    <div class="col-12">
      <div class="card border-0 shadow-lg" style="border-radius: 12px; overflow: hidden;">
        <div class="gradient-header">
          <div class="row align-items-center">
            <div class="col-12 col-lg-4 text-center text-lg-start mb-3 mb-lg-0">
              <div class="d-flex align-items-center justify-content-center justify-content-lg-start">
                <div class="avatar-circle-large me-3">{{ userName.substring(0, 2).toUpperCase() }}</div>
                <div class="text-white">
                  <h3 class="mb-1 fw-bold" style="font-size: 1.5rem;">{{ userName }}</h3>
                  <p class="mb-0" style="opacity: 0.9; font-size: 0.95rem;">
                    <i class="bi bi-shield-check me-1"></i>{{ hierarchyLevelName }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-8">
              <div class="row g-2">
                <div class="col-12 col-md-4">
                  <div class="info-card">
                    <div class="info-card-icon"><i class="bi bi-building-fill"></i></div>
                    <div class="info-card-content">
                      <div class="info-label">Company Name</div>
                      <div class="info-value">{{ companyName }}</div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="info-card">
                    <div class="info-card-icon"><i class="bi bi-envelope-fill"></i></div>
                    <div class="info-card-content">
                      <div class="info-label">Email</div>
                      <div class="info-value">{{ userEmail }}</div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="info-card">
                    <div class="info-card-icon"><i class="bi bi-diagram-3-fill"></i></div>
                    <div class="info-card-content">
                      <div class="info-label">Approval Level</div>
                      <div class="info-value">Level {{ hierarchyLevelOrder }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== PAGE HEADER ==================== -->
  <div class="row mb-4">
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h3 class="fw-bold text-dark mb-1">
            <i class="bi bi-speedometer2"></i>&nbsp;&nbsp;{{ hierarchyLevelName }} Dashboard
          </h3>
          <p class="text-muted small mb-0">
            Purchase orders pending your approval, and the full PO list for your company.
          </p>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-warning position-relative"
                  (click)="navigateToPendingApprovals()" *ngIf="totalBadgeCount > 0">
            <i class="bi bi-clock-history"></i> Pending Approvals
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {{ totalBadgeCount }}
            </span>
          </button>
          <button class="btn btn-outline-primary" (click)="refresh()" [disabled]="isPOLoading">
            <i class="bi bi-arrow-clockwise"></i> Refresh
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== DATE FILTER BAR ==================== -->
  <div class="date-filter-card mb-4">
    <div class="date-filter-accent"></div>
    <div class="date-filter-inner">

      <div class="date-filter-title-wrap">
        <div class="date-filter-icon-wrap"><i class="bi bi-calendar3-range"></i></div>
        <div>
          <div class="date-filter-title">Date Range</div>
          <div class="date-filter-subtitle">Filter POs by creation date</div>
        </div>
      </div>

      <div class="date-filter-divider"></div>

      <div class="date-filter-controls">
        <div class="date-filter-field">
          <label class="date-filter-label">
            <i class="bi bi-calendar2-check me-1"></i>Financial Year / Period
          </label>
          <div class="date-filter-select-wrap">
            <select class="date-filter-select" [(ngModel)]="selectedFYOption" (change)="onFYOptionChange()">
              <option value="ALL">All Time</option>
              <option *ngFor="let fy of financialYearOptions" [value]="fy.value">{{ fy.label }}</option>
              <option value="CUSTOM">Custom Range</option>
            </select>
            <i class="bi bi-chevron-down date-filter-select-icon"></i>
          </div>
        </div>

        <div class="date-filter-field date-filter-custom-field"
             [class.date-filter-field-visible]="selectedFYOption === 'CUSTOM'">
          <label class="date-filter-label"><i class="bi bi-calendar-event me-1"></i>From Date</label>
          <div class="date-filter-input-wrap">
            <input type="date" class="date-filter-input" [(ngModel)]="customFromDate" (change)="onFYOptionChange()" />
          </div>
        </div>

        <div class="date-filter-field date-filter-custom-field"
             [class.date-filter-field-visible]="selectedFYOption === 'CUSTOM'">
          <label class="date-filter-label"><i class="bi bi-calendar-event-fill me-1"></i>To Date</label>
          <div class="date-filter-input-wrap">
            <input type="date" class="date-filter-input" [(ngModel)]="customToDate" (change)="onFYOptionChange()" />
          </div>
        </div>
      </div>

      <div class="date-filter-divider"></div>

      <div class="date-filter-right">
        <div class="date-filter-badge-wrap" *ngIf="activeDateRangeLabel">
          <div class="date-filter-badge-icon"><i class="bi bi-funnel-fill"></i></div>
          <div>
            <div class="date-filter-badge-label">Active Filter</div>
            <div class="date-filter-badge-value">{{ activeDateRangeLabel }}</div>
          </div>
        </div>
        <button class="date-filter-reset-btn"
                *ngIf="selectedFYOption !== getCurrentFYValue()"
                (click)="resetDateFilter()"
                title="Reset to current financial year">
          <i class="bi bi-arrow-counterclockwise me-1"></i>Current FY
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== PO STAT CARDS ==================== -->
  <div class="section-label-row mb-2">
    <span class="section-label-text">
      <i class="bi bi-file-earmark-check me-1"></i>Purchase Order Overview
    </span>
    <hr class="section-label-line">
  </div>
  <div class="row g-3 mb-4">
    <div class="col-6 col-md-3">
      <div class="stat-card">
        <div class="stat-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color:white;">
          <i class="bi bi-file-earmark-text"></i>
        </div>
        <div class="stat-info">
          <h4>{{ dateFilteredPOs.length }}</h4>
          <p>Total POs</p>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="stat-card" style="cursor:pointer;" (click)="navigateToPendingApprovals()">
        <div class="stat-icon" style="background: linear-gradient(135deg, #e53935 0%, #b71c1c 100%); color:white;">
          <i class="bi bi-hourglass-split"></i>
        </div>
        <div class="stat-info">
          <h4 [style.color]="pendingPOCount > 0 ? '#c62828' : '#2d3748'">{{ pendingPOCount }}</h4>
          <p>Pending My Approval</p>
          <small *ngIf="pendingPOCount > 0" class="text-danger fw-bold" style="font-size:0.72rem;">
            <i class="bi bi-exclamation-circle-fill me-1"></i>Action Required
          </small>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="stat-card" style="cursor:pointer;" (click)="navigateToPendingApprovals()">
        <div class="stat-icon" style="background: linear-gradient(135deg, #ff8f00 0%, #e65100 100%); color:white;">
          <i class="bi bi-pause-circle"></i>
        </div>
        <div class="stat-info">
          <h4 [style.color]="holdPOCount > 0 ? '#e65100' : '#2d3748'">{{ holdPOCount }}</h4>
          <p>POs On HOLD by Me</p>
          <small *ngIf="holdPOCount > 0" class="fw-bold" style="font-size:0.72rem; color:#e65100;">
            <i class="bi bi-info-circle-fill me-1"></i>Awaiting Release
          </small>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="stat-card">
        <div class="stat-icon" style="background: linear-gradient(135deg, #43e97b 0%, #1a8a3c 100%); color:white;">
          <i class="bi bi-check-circle"></i>
        </div>
        <div class="stat-info">
          <h4>{{ approvedPOCount }}</h4>
          <p>Approved POs</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== PO TABLE ==================== -->
  <div class="card border-0 shadow-sm" style="border-radius: 12px;">

    <div class="card-header bg-white border-0 pt-3 px-4 pb-0" style="border-radius: 12px 12px 0 0;">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="fw-bold mb-0">
          <i class="bi bi-cart-check me-2"></i>Purchase Orders
          <span class="badge bg-secondary ms-2">{{ filteredPOs.length }}</span>
        </h6>
        <div class="d-flex gap-2 align-items-center">
          <input type="text" class="form-control form-control-sm" style="width: 220px;"
                 placeholder="Search PO number or supplier\u2026"
                 [(ngModel)]="poSearchText" (ngModelChange)="applyPOFilters()"/>
          <select class="form-select form-select-sm" style="width: 190px;"
                  [(ngModel)]="poStatusFilter" (change)="applyPOFilters()">
            <option value="">All Statuses</option>
            <option *ngFor="let s of poStatuses" [value]="s">{{ getPOStatusLabel(s) }}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="card-body p-0">

      <div *ngIf="isPOLoading" class="text-center py-5">
        <div class="spinner-border text-warning" role="status"></div>
        <p class="text-muted mt-3">Loading Purchase Orders\u2026</p>
      </div>

      <div *ngIf="!isPOLoading" class="table-responsive">
        <table class="table align-middle mb-0">
          <thead style="background-color: #f8f9fa;">
            <tr>
              <th class="ps-4">#</th>
              <th>PO Number</th>
              <th>Supplier</th>
              <th class="text-center">Items</th>
              <th class="text-end">Grand Total</th>
              <th>PO Date</th>
              <th>Status</th>
              <th>Payment</th>
              <th class="text-center">View</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let po of pagedPOs; let i = index; trackBy: trackById"
                class="table-row-hover">
              <td class="ps-4"><strong>{{ (poCurrentPage - 1) * poPageSize + i + 1 }}</strong></td>
              <td>
                <div class="fw-bold text-primary" style="cursor:pointer;" (click)="viewPODetails(po)">
                  {{ po.poNumber || ('PO-' + po.id) }}
                </div>
              </td>
              <td>
                <div class="fw-semibold">{{ po.supplierName }}</div>
              </td>
              <td class="text-center">
                <span class="badge bg-secondary">{{ po.itemsCount }}</span>
              </td>
              <td class="text-end">
                <span class="fw-bold text-success">
                  {{ formatCurrency(po.grandTotal, po.currencyCode) }}
                </span>
              </td>
              <td><span class="text-muted small">{{ formatDate(po.createdDate) }}</span></td>
              <td>
                <span [class]="'po-status-badge ' + getPOStatusClass(po.approvalStatus || po.status)">
                  {{ getPOStatusLabel(po.approvalStatus || po.status) }}
                </span>
              </td>
              <td>
                <span class="badge"
                      [class.bg-success]="po.paymentStatus === 'PAID'"
                      [class.bg-warning]="po.paymentStatus === 'PARTIALLY_PAID'"
                      [class.bg-secondary]="!po.paymentStatus || po.paymentStatus === 'UNPAID'">
                  {{ paymentStatusLabel(po.paymentStatus) }}
                </span>
              </td>
              <td class="text-center">
                <button class="btn btn-sm btn-light text-info shadow-sm"
                        (click)="viewPODetails(po)" title="View PO details">
                  <i class="bi bi-eye"></i>
                </button>
              </td>
            </tr>
            <tr *ngIf="pagedPOs.length === 0">
              <td colspan="9" class="text-center text-muted py-5">
                <i class="bi bi-cart-x display-6 mb-3 d-block opacity-25"></i>
                <p class="mb-0">No purchase orders found for the current filter.</p>
                <small *ngIf="pendingPOCount > 0" class="text-warning">
                  You have {{ pendingPOCount }} PO(s) awaiting your approval in Pending Approvals.
                </small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="d-flex justify-content-between align-items-center p-4 border-top"
           *ngIf="!isPOLoading && filteredPOs.length > 0">
        <div class="text-muted small">
          Page {{ poCurrentPage }} of {{ totalPOPages }}
          &nbsp;\xB7&nbsp; {{ filteredPOs.length }} PO(s)
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-sm btn-outline-secondary" [disabled]="poCurrentPage === 1"
                  (click)="onPOPageChange(poCurrentPage - 1)">
            <i class="bi bi-chevron-left"></i> Previous
          </button>
          <button class="btn btn-sm btn-outline-secondary" [disabled]="poCurrentPage >= totalPOPages"
                  (click)="onPOPageChange(poCurrentPage + 1)">
            Next <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

    </div>
  </div>

</div>
`, styles: ["/* src/app/views/base/hierarchy-dashboard/hierarchy-dashboard.component.css */\n.date-filter-card {\n  display: flex;\n  align-items: stretch;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.date-filter-card:hover {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.10);\n}\n.date-filter-accent {\n  width: 5px;\n  background:\n    linear-gradient(\n      180deg,\n      #667eea 0%,\n      #764ba2 100%);\n  flex-shrink: 0;\n}\n.date-filter-inner {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  padding: 18px 24px;\n  flex-wrap: wrap;\n  gap: 0;\n}\n.date-filter-title-wrap {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  min-width: 160px;\n}\n.date-filter-icon-wrap {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-title {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.2;\n}\n.date-filter-subtitle {\n  font-size: 0.72rem;\n  color: #8a8a9a;\n  margin-top: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  font-weight: 500;\n}\n.date-filter-divider {\n  width: 1px;\n  height: 44px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      #e2e5f0,\n      transparent);\n  margin: 0 24px;\n  flex-shrink: 0;\n  align-self: center;\n}\n.date-filter-controls {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.date-filter-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 220px;\n}\n.date-filter-custom-field {\n  max-width: 0;\n  min-width: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition:\n    max-width 0.3s ease,\n    opacity 0.3s ease,\n    min-width 0.3s ease;\n  pointer-events: none;\n}\n.date-filter-custom-field.date-filter-field-visible {\n  max-width: 200px;\n  min-width: 160px;\n  opacity: 1;\n  pointer-events: all;\n}\n.date-filter-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 0;\n  white-space: nowrap;\n}\n.date-filter-label i {\n  color: #667eea;\n}\n.date-filter-select-wrap {\n  position: relative;\n}\n.date-filter-select {\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n  padding: 9px 36px 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-select:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-select:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-select-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.75rem;\n  color: #667eea;\n  pointer-events: none;\n}\n.date-filter-input-wrap {\n  position: relative;\n}\n.date-filter-input {\n  width: 100%;\n  padding: 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-input:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-input:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-right {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  margin-left: auto;\n  flex-wrap: wrap;\n}\n.date-filter-badge-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  border: 1.5px solid rgba(102, 126, 234, 0.2);\n  border-radius: 12px;\n  padding: 8px 14px 8px 10px;\n}\n.date-filter-badge-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-badge-label {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  line-height: 1;\n}\n.date-filter-badge-value {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #667eea;\n  margin-top: 3px;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n.date-filter-reset-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 9px 16px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #667eea;\n  background: #f0f2ff;\n  border: 1.5px solid #d0d5f5;\n  border-radius: 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.date-filter-reset-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n  transform: translateY(-1px);\n}\n.date-filter-reset-btn i {\n  font-size: 0.85rem;\n}\n@media (max-width: 992px) {\n  .date-filter-inner {\n    flex-wrap: wrap;\n    gap: 16px;\n    padding: 16px 18px;\n  }\n  .date-filter-divider {\n    display: none;\n  }\n  .date-filter-title-wrap {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-controls {\n    width: 100%;\n  }\n  .date-filter-right {\n    width: 100%;\n    margin-left: 0;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 576px) {\n  .date-filter-field,\n  .date-filter-custom-field.date-filter-field-visible {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-badge-wrap {\n    width: 100%;\n  }\n}\n.stat-card {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.stat-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n}\n.stat-icon {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.8rem;\n}\n.stat-card-blue .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.stat-card-warning .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n}\n.stat-card-success .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n}\n.stat-card-info .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #43e97b 0%,\n      #38f9d7 100%);\n  color: white;\n}\n.stat-info h4 {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 0;\n  color: #2d3748;\n}\n.stat-info p {\n  margin: 0;\n  color: #718096;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.table thead th {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #64748b;\n  letter-spacing: 0.5px;\n  padding: 1rem 0.75rem;\n  border: none;\n}\n.table tbody td {\n  padding: 1rem 0.75rem;\n  vertical-align: middle;\n  font-size: 0.9rem;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.cursor-pointer:hover {\n  text-decoration: underline;\n}\n.badge {\n  font-size: 0.75rem;\n  padding: 0.4rem 0.7rem;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .stat-card {\n    padding: 1rem;\n  }\n  .stat-icon {\n    width: 50px;\n    height: 50px;\n    font-size: 1.5rem;\n  }\n  .stat-info h4 {\n    font-size: 1.5rem;\n  }\n}\n.gradient-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  padding: 10px;\n}\n.avatar-circle-large {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  color: white;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n}\n.info-card {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  font-size: 1.5rem;\n  color: white;\n}\n.info-card-content {\n  flex: 1;\n}\n.info-label {\n  font-size: 0.75rem;\n  opacity: 0.9;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.info-value {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: white;\n  margin-top: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .avatar-circle-large {\n    width: 60px;\n    height: 60px;\n    font-size: 1.5rem;\n  }\n  .info-card {\n    margin-bottom: 10px;\n  }\n  .info-card-icon {\n    width: 40px;\n    height: 40px;\n    font-size: 1.2rem;\n  }\n  .info-label {\n    font-size: 0.7rem;\n  }\n  .info-value {\n    font-size: 0.85rem;\n  }\n}\n@media (max-width: 576px) {\n  .gradient-header {\n    padding: 15px;\n  }\n  .avatar-circle-large {\n    width: 50px;\n    height: 50px;\n    font-size: 1.2rem;\n    border-width: 2px;\n  }\n}\n.section-label-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.section-label-text {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  white-space: nowrap;\n}\n.section-label-line {\n  flex-grow: 1;\n  margin: 0;\n  border-color: #e2e8f0;\n}\n.table-row-hover {\n  transition: background-color 0.15s;\n}\n.table-row-hover:hover {\n  background-color: #f0f4ff;\n}\n.dash-tab-btn {\n  border: none;\n  border-bottom: 3px solid transparent;\n  background: transparent;\n  color: #718096;\n  font-weight: 600;\n  font-size: 0.9rem;\n  padding: 0.6rem 1.1rem;\n  border-radius: 6px 6px 0 0;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.dash-tab-btn:hover {\n  color: #4a5568;\n  background-color: #f7fafc;\n}\n.dash-tab-btn.active {\n  color: #667eea;\n  border-bottom-color: #667eea;\n  background-color: #fff;\n}\n.tab-count-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 22px;\n  height: 20px;\n  padding: 0 6px;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  background-color: #e2e8f0;\n  color: #4a5568;\n  transition: all 0.2s;\n}\n.tab-count-badge.badge-active {\n  background-color: #667eea;\n  color: white;\n}\n.tab-count-badge.badge-alert {\n  background-color: #fed7d7;\n  color: #c53030;\n}\n.po-status-badge {\n  display: inline-block;\n  padding: 0.3rem 0.65rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n}\n.badge-po-draft {\n  background: #edf2f7;\n  color: #4a5568;\n}\n.badge-po-pending {\n  background: #fefcbf;\n  color: #744210;\n}\n.badge-po-approved {\n  background: #c6f6d5;\n  color: #22543d;\n}\n.badge-po-rejected {\n  background: #fed7d7;\n  color: #822727;\n}\n.badge-po-hold {\n  background: #feebc8;\n  color: #7b341e;\n}\n.badge-po-sent {\n  background: #bee3f8;\n  color: #2a4365;\n}\n.badge-po-ack {\n  background: #d6f5d6;\n  color: #276749;\n}\n.badge-po-done {\n  background: #b2f5ea;\n  color: #234e52;\n}\n.badge-po-cancelled {\n  background: #e2e8f0;\n  color: #2d3748;\n}\n/*# sourceMappingURL=hierarchy-dashboard.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: MessageService }, { type: AuthService }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HierarchyDashboardComponent, { className: "HierarchyDashboardComponent", filePath: "src/app/views/base/hierarchy-dashboard/hierarchy-dashboard.component.ts", lineNumber: 35 });
})();
export {
  HierarchyDashboardComponent
};
//# sourceMappingURL=chunk-CUO7W4TE.js.map
