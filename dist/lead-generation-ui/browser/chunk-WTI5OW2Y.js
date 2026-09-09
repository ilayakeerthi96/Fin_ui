import {
  BadgeComponent,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ContainerComponent,
  RowComponent,
  SpinnerComponent
} from "./chunk-U7YW3DHP.js";
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
  MessageService
} from "./chunk-4TRDTO5Y.js";
import {
  DataService
} from "./chunk-OQIPAMNU.js";
import "./chunk-JKMYCEKN.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BCCUO726.js";
import "./chunk-SO7Q7VKX.js";

// src/app/views/base/audit-log/audit-log.component.ts
function AuditLogComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    \u0275\u0275property("value", o_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r1.label);
  }
}
function AuditLogComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275property("value", a_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r2 || "All actions");
  }
}
function AuditLogComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMessage);
  }
}
function AuditLogComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "c-spinner", 28);
    \u0275\u0275elementStart(2, "p", 29);
    \u0275\u0275text(3, "Loading audit entries\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AuditLogComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " No audit entries match these filters. ");
    \u0275\u0275elementEnd();
  }
}
function AuditLogComponent_div_48_ng_container_20_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", log_r5.remarks);
  }
}
function AuditLogComponent_div_48_ng_container_20_button_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r2.selectedLog === log_r5 ? "Hide values" : "Show before/after values");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedLog === log_r5 ? "\u25B4" : "\u25BE", " ");
  }
}
function AuditLogComponent_div_48_ng_container_20_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 51)(1, "td", 52)(2, "c-row")(3, "c-col", 2)(4, "div", 53);
    \u0275\u0275text(5, "Before");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "pre", 54);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "c-col", 2)(9, "div", 53);
    \u0275\u0275text(10, "After");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "pre", 54);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 55);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const log_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("md", 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.prettyJson(log_r5.oldValue));
    \u0275\u0275advance();
    \u0275\u0275property("md", 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.prettyJson(log_r5.newValue));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" IP ", log_r5.ipAddress || "unknown", " \xB7 ", log_r5.userAgent || "unknown client", " ");
  }
}
function AuditLogComponent_div_48_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 41);
    \u0275\u0275listener("click", function AuditLogComponent_div_48_ng_container_20_Template_tr_click_1_listener() {
      const log_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showDetail(log_r5));
    });
    \u0275\u0275elementStart(2, "td", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 6);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "c-badge", 42);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 43);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 43)(19, "span", 44);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AuditLogComponent_div_48_ng_container_20_span_21_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "c-badge", 42);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 46);
    \u0275\u0275template(26, AuditLogComponent_div_48_ng_container_20_button_26_Template, 2, 2, "button", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, AuditLogComponent_div_48_ng_container_20_tr_27_Template, 15, 6, "tr", 48);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const log_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 13, log_r5.eventTime, "dd MMM yy, HH:mm:ss"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(log_r5.actorName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r5.actorEmail);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r5.actorRole || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx_r2.badgeColor(log_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r5.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r5.entityType);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r5.entityRef || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", log_r5.remarks);
    \u0275\u0275advance(2);
    \u0275\u0275property("color", log_r5.status === "SUCCESS" ? "success" : "danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r5.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.hasSnapshot(log_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedLog === log_r5 && ctx_r2.hasSnapshot(log_r5));
  }
}
function AuditLogComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "table", 32)(2, "thead")(3, "tr")(4, "th", 33);
    \u0275\u0275text(5, "When");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 34);
    \u0275\u0275text(7, "Who");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 35);
    \u0275\u0275text(9, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 36);
    \u0275\u0275text(11, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 37);
    \u0275\u0275text(13, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Record");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 38);
    \u0275\u0275text(17, "Result");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "th", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, AuditLogComponent_div_48_ng_container_20_Template, 28, 16, "ng-container", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r2.logs)("ngForTrackBy", ctx_r2.trackById);
  }
}
function AuditLogComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "button", 57);
    \u0275\u0275listener("click", function AuditLogComponent_div_49_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prevPage());
    });
    \u0275\u0275text(5, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 58);
    \u0275\u0275listener("click", function AuditLogComponent_div_49_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(7, "Next");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Page ", ctx_r2.page + 1, " of ", ctx_r2.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.page === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.page + 1 >= ctx_r2.totalPages);
  }
}
var _AuditLogComponent = class _AuditLogComponent {
  constructor(dataService, messageService) {
    this.dataService = dataService;
    this.messageService = messageService;
    this.logs = [];
    this.isLoading = false;
    this.errorMessage = "";
    this.filters = {
      entityType: "",
      action: "",
      actorEmail: "",
      fromDate: "",
      toDate: ""
    };
    this.entityTypeOptions = [
      { value: "", label: "All types" },
      { value: "PURCHASE_ORDER", label: "Purchase Orders" },
      { value: "INVOICE", label: "Invoices" },
      { value: "SUPPLIER", label: "Suppliers" },
      { value: "USER", label: "Users" },
      { value: "APPROVAL_FLOW", label: "Approval Flow" },
      { value: "AUTH", label: "Authentication" },
      { value: "REQUEST", label: "Other requests" }
    ];
    this.actionOptions = [
      "",
      "PO_CREATED",
      "PO_UPDATED",
      "PO_SUBMITTED_FOR_APPROVAL",
      "PO_APPROVED",
      "PO_REJECTED",
      "PO_RETURNED_FOR_REVISION",
      "PO_RELEASED",
      "PO_CLOSED",
      "PO_FORECLOSED",
      "INVOICE_SUBMITTED",
      "INVOICE_APPROVED",
      "INVOICE_REJECTED",
      "PAYMENT_MARKED_PAID",
      "ADVANCE_PAYMENT_RECORDED",
      "SUPPLIER_CREATED",
      "USER_CREATED",
      "LOGIN_SUCCESS",
      "LOGIN_FAILURE"
    ];
    this.page = 0;
    this.size = 50;
    this.totalElements = 0;
    this.totalPages = 0;
    this.selectedLog = null;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading = true;
    this.errorMessage = "";
    this.dataService.getAuditLogs({
      entityType: this.filters.entityType || void 0,
      action: this.filters.action || void 0,
      actorEmail: this.filters.actorEmail || void 0,
      // <input type="date"> gives a bare date; the API expects ISO date-time, and the
      // "to" bound must cover the whole of that day or a same-day search finds nothing.
      fromDate: this.filters.fromDate ? this.filters.fromDate + "T00:00:00" : void 0,
      toDate: this.filters.toDate ? this.filters.toDate + "T23:59:59" : void 0,
      page: this.page,
      size: this.size
    }).subscribe({
      next: (res) => {
        const data = res?.data || {};
        this.logs = data.content || [];
        this.totalElements = data.totalElements || 0;
        this.totalPages = data.totalPages || 0;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || "Could not load the audit log.";
        this.logs = [];
        this.isLoading = false;
        this.messageService.showMessage("error", "Load failed", this.errorMessage);
      }
    });
  }
  applyFilters() {
    this.page = 0;
    this.load();
  }
  clearFilters() {
    this.filters = { entityType: "", action: "", actorEmail: "", fromDate: "", toDate: "" };
    this.page = 0;
    this.load();
  }
  nextPage() {
    if (this.page + 1 < this.totalPages) {
      this.page++;
      this.load();
    }
  }
  prevPage() {
    if (this.page > 0) {
      this.page--;
      this.load();
    }
  }
  // ==================================================================
  // DISPLAY
  // ==================================================================
  showDetail(log) {
    this.selectedLog = this.selectedLog === log ? null : log;
  }
  /** Colour by outcome first, then by how significant the action is. */
  badgeColor(log) {
    if (log?.status === "FAILURE")
      return "danger";
    const a = log?.action || "";
    if (a.includes("REJECT") || a.includes("FORECLOSE"))
      return "danger";
    if (a.includes("APPROV") || a.includes("PAID") || a.includes("RELEASE"))
      return "success";
    if (a.includes("CREATE") || a.includes("SUBMIT"))
      return "primary";
    if (a.includes("RETURN") || a.includes("HOLD"))
      return "warning";
    return "secondary";
  }
  /** Pretty-print a JSON snapshot; fall back to the raw string if it is not JSON. */
  prettyJson(value) {
    if (!value)
      return "\u2014";
    try {
      return JSON.stringify(JSON.parse(value), null, 2);
    } catch {
      return String(value);
    }
  }
  hasSnapshot(log) {
    return !!(log?.oldValue || log?.newValue);
  }
  get rangeLabel() {
    if (this.totalElements === 0)
      return "No entries";
    const from = this.page * this.size + 1;
    const to = Math.min((this.page + 1) * this.size, this.totalElements);
    return `${from}\u2013${to} of ${this.totalElements}`;
  }
  trackById(_i, log) {
    return log?.id;
  }
};
_AuditLogComponent.\u0275fac = function AuditLogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuditLogComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MessageService));
};
_AuditLogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditLogComponent, selectors: [["app-audit-log"]], decls: 50, vars: 20, consts: [["fluid", "", 1, "audit-log"], [1, "mb-3"], [3, "md"], [1, "page-title", "mb-1"], [1, "page-subtitle", "mb-0"], [1, "text-end", 3, "md"], [1, "text-muted", "small"], [1, "align-items-end"], [1, "mb-2", 3, "md"], [1, "form-label"], ["name", "entityType", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "action", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["name", "actorEmail", "placeholder", "e.g. admin@itti.com", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "fromDate", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "toDate", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "mt-2"], ["cButton", "", "color", "primary", "size", "sm", 1, "me-2", 3, "click"], ["cButton", "", "color", "secondary", "variant", "outline", "size", "sm", 3, "click"], ["class", "alert alert-danger", 4, "ngIf"], [1, "p-0"], ["class", "text-center py-5", 4, "ngIf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center mt-3", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [1, "text-center", "py-5"], ["color", "primary"], [1, "mt-2", "text-muted"], [1, "text-center", "py-5", "text-muted"], [1, "table-responsive"], [1, "table", "table-sm", "table-hover", "align-middle", "mb-0"], [2, "width", "160px"], [2, "width", "200px"], [2, "width", "120px"], [2, "width", "230px"], [2, "width", "150px"], [2, "width", "90px"], [2, "width", "70px"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "log-row", 3, "click"], [3, "color"], [1, "small"], [1, "fw-semibold"], ["class", "text-muted", 4, "ngIf"], [1, "text-center"], ["cButton", "", "color", "secondary", "variant", "ghost", "size", "sm", 3, "title", 4, "ngIf"], ["class", "detail-row", 4, "ngIf"], [1, "text-muted"], ["cButton", "", "color", "secondary", "variant", "ghost", "size", "sm", 3, "title"], [1, "detail-row"], ["colspan", "8"], [1, "snapshot-label"], [1, "snapshot"], [1, "text-muted", "small", "mt-2"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], ["cButton", "", "color", "secondary", "variant", "outline", "size", "sm", 1, "me-2", 3, "click", "disabled"], ["cButton", "", "color", "secondary", "variant", "outline", "size", "sm", 3, "click", "disabled"]], template: function AuditLogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-container", 0)(1, "c-row", 1)(2, "c-col", 2)(3, "h4", 3);
    \u0275\u0275text(4, "Audit Log");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, " Every action recorded across POs, invoices, payments, suppliers and users. Entries are append-only and cannot be edited or deleted. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "c-col", 5)(8, "span", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "c-card", 1)(11, "c-card-body")(12, "c-row", 7)(13, "c-col", 8)(14, "label", 9);
    \u0275\u0275text(15, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 10);
    \u0275\u0275twoWayListener("ngModelChange", function AuditLogComponent_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filters.entityType, $event) || (ctx.filters.entityType = $event);
      return $event;
    });
    \u0275\u0275template(17, AuditLogComponent_option_17_Template, 2, 2, "option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "c-col", 8)(19, "label", 9);
    \u0275\u0275text(20, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function AuditLogComponent_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filters.action, $event) || (ctx.filters.action = $event);
      return $event;
    });
    \u0275\u0275template(22, AuditLogComponent_option_22_Template, 2, 2, "option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "c-col", 8)(24, "label", 9);
    \u0275\u0275text(25, "User email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AuditLogComponent_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filters.actorEmail, $event) || (ctx.filters.actorEmail = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "c-col", 8)(28, "label", 9);
    \u0275\u0275text(29, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function AuditLogComponent_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filters.fromDate, $event) || (ctx.filters.fromDate = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "c-col", 8)(32, "label", 9);
    \u0275\u0275text(33, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function AuditLogComponent_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filters.toDate, $event) || (ctx.filters.toDate = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 16)(36, "button", 17);
    \u0275\u0275listener("click", function AuditLogComponent_Template_button_click_36_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275text(37, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 18);
    \u0275\u0275listener("click", function AuditLogComponent_Template_button_click_38_listener() {
      return ctx.clearFilters();
    });
    \u0275\u0275text(39, "Clear");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(40, AuditLogComponent_div_40_Template, 2, 1, "div", 19);
    \u0275\u0275elementStart(41, "c-card")(42, "c-card-header")(43, "strong");
    \u0275\u0275text(44, "Entries");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "c-card-body", 20);
    \u0275\u0275template(46, AuditLogComponent_div_46_Template, 4, 0, "div", 21)(47, AuditLogComponent_div_47_Template, 2, 0, "div", 22)(48, AuditLogComponent_div_48_Template, 21, 2, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, AuditLogComponent_div_49_Template, 8, 4, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("md", 8);
    \u0275\u0275advance(5);
    \u0275\u0275property("md", 4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.rangeLabel);
    \u0275\u0275advance(4);
    \u0275\u0275property("md", 2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.filters.entityType);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.entityTypeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.filters.action);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.actionOptions);
    \u0275\u0275advance();
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.filters.actorEmail);
    \u0275\u0275advance();
    \u0275\u0275property("md", 2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.filters.fromDate);
    \u0275\u0275advance();
    \u0275\u0275property("md", 2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.filters.toDate);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.errorMessage);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.logs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.logs.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.totalPages > 1);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardBodyComponent,
  CardHeaderComponent,
  ButtonDirective,
  BadgeComponent,
  SpinnerComponent,
  DatePipe
], styles: ['\n\n.audit-log[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.audit-log[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.audit-log[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  margin-bottom: 0.25rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.audit-log[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.audit-log[_ngcontent-%COMP%]   .log-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.audit-log[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background: var(--cui-tertiary-bg, #f8f9fa);\n}\n.audit-log[_ngcontent-%COMP%]   .snapshot-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: var(--cui-secondary-color, #6c757d);\n  margin-bottom: 0.25rem;\n}\n.audit-log[_ngcontent-%COMP%]   .snapshot[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    "SF Mono",\n    Menlo,\n    Consolas,\n    monospace;\n  font-size: 0.75rem;\n  line-height: 1.45;\n  max-height: 260px;\n  overflow: auto;\n  padding: 0.5rem 0.75rem;\n  margin: 0;\n  border: 1px solid var(--cui-border-color, #dee2e6);\n  border-radius: 4px;\n  background: var(--cui-body-bg, #fff);\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n/*# sourceMappingURL=audit-log.component.css.map */'] });
var AuditLogComponent = _AuditLogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditLogComponent, [{
    type: Component,
    args: [{ selector: "app-audit-log", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ContainerComponent,
      RowComponent,
      ColComponent,
      CardComponent,
      CardBodyComponent,
      CardHeaderComponent,
      ButtonDirective,
      BadgeComponent,
      SpinnerComponent
    ], template: `<c-container fluid class="audit-log">

  <c-row class="mb-3">
    <c-col [md]="8">
      <h4 class="page-title mb-1">Audit Log</h4>
      <p class="page-subtitle mb-0">
        Every action recorded across POs, invoices, payments, suppliers and users.
        Entries are append-only and cannot be edited or deleted.
      </p>
    </c-col>
    <c-col [md]="4" class="text-end">
      <span class="text-muted small">{{ rangeLabel }}</span>
    </c-col>
  </c-row>

  <!-- ===================== FILTERS ===================== -->
  <c-card class="mb-3">
    <c-card-body>
      <c-row class="align-items-end">
        <c-col [md]="2" class="mb-2">
          <label class="form-label">Type</label>
          <select class="form-select form-select-sm" [(ngModel)]="filters.entityType" name="entityType">
            <option *ngFor="let o of entityTypeOptions" [value]="o.value">{{ o.label }}</option>
          </select>
        </c-col>
        <c-col [md]="3" class="mb-2">
          <label class="form-label">Action</label>
          <select class="form-select form-select-sm" [(ngModel)]="filters.action" name="action">
            <option *ngFor="let a of actionOptions" [value]="a">{{ a || 'All actions' }}</option>
          </select>
        </c-col>
        <c-col [md]="3" class="mb-2">
          <label class="form-label">User email</label>
          <input class="form-control form-control-sm" [(ngModel)]="filters.actorEmail"
                 name="actorEmail" placeholder="e.g. admin@itti.com">
        </c-col>
        <c-col [md]="2" class="mb-2">
          <label class="form-label">From</label>
          <input type="date" class="form-control form-control-sm"
                 [(ngModel)]="filters.fromDate" name="fromDate">
        </c-col>
        <c-col [md]="2" class="mb-2">
          <label class="form-label">To</label>
          <input type="date" class="form-control form-control-sm"
                 [(ngModel)]="filters.toDate" name="toDate">
        </c-col>
      </c-row>
      <div class="mt-2">
        <button cButton color="primary" size="sm" class="me-2" (click)="applyFilters()">Search</button>
        <button cButton color="secondary" variant="outline" size="sm" (click)="clearFilters()">Clear</button>
      </div>
    </c-card-body>
  </c-card>

  <div class="alert alert-danger" *ngIf="errorMessage">{{ errorMessage }}</div>

  <!-- ===================== RESULTS ===================== -->
  <c-card>
    <c-card-header><strong>Entries</strong></c-card-header>
    <c-card-body class="p-0">

      <div class="text-center py-5" *ngIf="isLoading">
        <c-spinner color="primary"></c-spinner>
        <p class="mt-2 text-muted">Loading audit entries\u2026</p>
      </div>

      <div class="text-center py-5 text-muted" *ngIf="!isLoading && logs.length === 0">
        No audit entries match these filters.
      </div>

      <div class="table-responsive" *ngIf="!isLoading && logs.length > 0">
        <table class="table table-sm table-hover align-middle mb-0">
          <thead>
            <tr>
              <th style="width:160px">When</th>
              <th style="width:200px">Who</th>
              <th style="width:120px">Role</th>
              <th style="width:230px">Action</th>
              <th style="width:150px">Type</th>
              <th>Record</th>
              <th style="width:90px">Result</th>
              <th style="width:70px"></th>
            </tr>
          </thead>
          <tbody>
            <ng-container *ngFor="let log of logs; trackBy: trackById">
              <tr (click)="showDetail(log)" class="log-row">
                <td class="text-muted small">{{ log.eventTime | date:'dd MMM yy, HH:mm:ss' }}</td>
                <td>
                  <div>{{ log.actorName || '\u2014' }}</div>
                  <div class="text-muted small">{{ log.actorEmail }}</div>
                </td>
                <td><span class="text-muted small">{{ log.actorRole || '\u2014' }}</span></td>
                <td>
                  <c-badge [color]="badgeColor(log)">{{ log.action }}</c-badge>
                </td>
                <td class="small">{{ log.entityType }}</td>
                <td class="small">
                  <span class="fw-semibold">{{ log.entityRef || '\u2014' }}</span>
                  <span class="text-muted" *ngIf="log.remarks"> \u2014 {{ log.remarks }}</span>
                </td>
                <td>
                  <c-badge [color]="log.status === 'SUCCESS' ? 'success' : 'danger'">
                    {{ log.status }}
                  </c-badge>
                </td>
                <td class="text-center">
                  <button cButton color="secondary" variant="ghost" size="sm"
                          *ngIf="hasSnapshot(log)"
                          [title]="selectedLog === log ? 'Hide values' : 'Show before/after values'">
                    {{ selectedLog === log ? '\u25B4' : '\u25BE' }}
                  </button>
                </td>
              </tr>

              <!-- Before / after snapshot -->
              <tr *ngIf="selectedLog === log && hasSnapshot(log)" class="detail-row">
                <td colspan="8">
                  <c-row>
                    <c-col [md]="6">
                      <div class="snapshot-label">Before</div>
                      <pre class="snapshot">{{ prettyJson(log.oldValue) }}</pre>
                    </c-col>
                    <c-col [md]="6">
                      <div class="snapshot-label">After</div>
                      <pre class="snapshot">{{ prettyJson(log.newValue) }}</pre>
                    </c-col>
                  </c-row>
                  <div class="text-muted small mt-2">
                    IP {{ log.ipAddress || 'unknown' }} \xB7 {{ log.userAgent || 'unknown client' }}
                  </div>
                </td>
              </tr>
            </ng-container>
          </tbody>
        </table>
      </div>

    </c-card-body>
  </c-card>

  <!-- ===================== PAGING ===================== -->
  <div class="d-flex justify-content-between align-items-center mt-3"
       *ngIf="!isLoading && totalPages > 1">
    <span class="text-muted small">Page {{ page + 1 }} of {{ totalPages }}</span>
    <div>
      <button cButton color="secondary" variant="outline" size="sm" class="me-2"
              [disabled]="page === 0" (click)="prevPage()">Previous</button>
      <button cButton color="secondary" variant="outline" size="sm"
              [disabled]="page + 1 >= totalPages" (click)="nextPage()">Next</button>
    </div>
  </div>

</c-container>
`, styles: ['/* src/app/views/base/audit-log/audit-log.component.css */\n.audit-log .page-title {\n  font-weight: 600;\n}\n.audit-log .page-subtitle {\n  font-size: 0.875rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.audit-log .form-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  margin-bottom: 0.25rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.audit-log table th {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.audit-log .log-row {\n  cursor: pointer;\n}\n.audit-log .detail-row > td {\n  background: var(--cui-tertiary-bg, #f8f9fa);\n}\n.audit-log .snapshot-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: var(--cui-secondary-color, #6c757d);\n  margin-bottom: 0.25rem;\n}\n.audit-log .snapshot {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    "SF Mono",\n    Menlo,\n    Consolas,\n    monospace;\n  font-size: 0.75rem;\n  line-height: 1.45;\n  max-height: 260px;\n  overflow: auto;\n  padding: 0.5rem 0.75rem;\n  margin: 0;\n  border: 1px solid var(--cui-border-color, #dee2e6);\n  border-radius: 4px;\n  background: var(--cui-body-bg, #fff);\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n/*# sourceMappingURL=audit-log.component.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditLogComponent, { className: "AuditLogComponent", filePath: "src/app/views/base/audit-log/audit-log.component.ts", lineNumber: 33 });
})();
export {
  AuditLogComponent
};
//# sourceMappingURL=chunk-WTI5OW2Y.js.map
