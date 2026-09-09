import {
  ChartjsComponent
} from "./chunk-Q3LRYO47.js";
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ContainerComponent,
  RowComponent,
  SpinnerComponent
} from "./chunk-U7YW3DHP.js";
import {
  AuthService
} from "./chunk-S3OSUDOO.js";
import "./chunk-4TRDTO5Y.js";
import {
  DataService
} from "./chunk-OQIPAMNU.js";
import "./chunk-JKMYCEKN.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-BCCUO726.js";
import "./chunk-SO7Q7VKX.js";

// src/app/views/base/supplier-reports/supplier-reports.component.ts
function SupplierReportsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "c-spinner", 8);
    \u0275\u0275elementEnd();
  }
}
function SupplierReportsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function SupplierReportsComponent_div_9_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1, "No invoices yet.");
    \u0275\u0275elementEnd();
  }
}
function SupplierReportsComponent_div_9_div_56_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function SupplierReportsComponent_div_9_div_56_div_4_Template_div_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.filterByStatus(row_r4));
    });
    \u0275\u0275elementStart(1, "span", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("breakdown-active", ctx_r0.statusFilter === row_r4.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", row_r4.badgeClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", row_r4.count, " invoice", row_r4.count === 1 ? "" : "s", " \xB7 ", ctx_r0.formatCurrency(row_r4.value, ctx_r0.reportCurrencyCode));
  }
}
function SupplierReportsComponent_div_9_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "c-chart", 43);
    \u0275\u0275listener("getElementAtEvent", function SupplierReportsComponent_div_9_div_56_Template_c_chart_getElementAtEvent_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onStatusChartClick($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275template(4, SupplierReportsComponent_div_9_div_56_div_4_Template, 5, 7, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx_r0.statusChartData)("options", ctx_r0.statusChartOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.reportInvoiceStatusBreakdown);
  }
}
function SupplierReportsComponent_div_9_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1, "No invoices to chart yet.");
    \u0275\u0275elementEnd();
  }
}
function SupplierReportsComponent_div_9_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "c-chart", 49);
    \u0275\u0275listener("getElementAtEvent", function SupplierReportsComponent_div_9_div_66_Template_c_chart_getElementAtEvent_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onMonthChartClick($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.monthChartData)("options", ctx_r0.monthChartOptions);
  }
}
function SupplierReportsComponent_div_9_div_67_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "i", 56);
    \u0275\u0275listener("click", function SupplierReportsComponent_div_9_div_67_span_4_Template_i_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.clearStatusFilter());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Status: ", ctx_r0.getInvoiceStatusLabel(ctx_r0.statusFilter), " ");
  }
}
function SupplierReportsComponent_div_9_div_67_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "i", 56);
    \u0275\u0275listener("click", function SupplierReportsComponent_div_9_div_67_span_5_Template_i_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.clearMonthFilter());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Month: ", ctx_r0.monthFilterLabel, " ");
  }
}
function SupplierReportsComponent_div_9_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "span", 51);
    \u0275\u0275element(2, "i", 52);
    \u0275\u0275text(3, "Filtered by:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SupplierReportsComponent_div_9_div_67_span_4_Template, 3, 1, "span", 53)(5, SupplierReportsComponent_div_9_div_67_span_5_Template, 3, 1, "span", 53);
    \u0275\u0275elementStart(6, "button", 54);
    \u0275\u0275listener("click", function SupplierReportsComponent_div_9_div_67_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearAllClickFilters());
    });
    \u0275\u0275text(7, "Clear all");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.statusFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.monthFilter);
  }
}
function SupplierReportsComponent_div_9_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "No purchase orders yet.");
    \u0275\u0275elementEnd();
  }
}
function SupplierReportsComponent_div_9_div_76_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 65)(1, "td", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 66);
    \u0275\u0275element(5, "i", 67);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "small", 3);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 68);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 63)(13, "span", 47);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const po_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r10 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(po_r9.poNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(po_r9.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(po_r9.grandTotal, po_r9.currencyCode));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.poInvoiceStatusBadgeClass(po_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.poInvoiceStatusLabel(po_r9));
  }
}
function SupplierReportsComponent_div_9_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "table", 59)(2, "thead", 60)(3, "tr")(4, "th", 61);
    \u0275\u0275text(5, "SL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "PO Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "PO Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 62);
    \u0275\u0275text(11, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 63);
    \u0275\u0275text(13, "Invoice Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, SupplierReportsComponent_div_9_div_76_tr_15_Template, 15, 6, "tr", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.sortedPOList);
  }
}
function SupplierReportsComponent_div_9_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "No invoices yet.");
    \u0275\u0275elementEnd();
  }
}
function SupplierReportsComponent_div_9_div_85_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 65)(1, "td", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 66);
    \u0275\u0275element(5, "i", 69);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "small", 3);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "small", 3);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 68);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 63)(16, "span", 47);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "small", 3);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const inv_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r12 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(inv_r11.invoiceNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inv_r11.poNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(inv_r11.invoiceDate || inv_r11.submittedAt || inv_r11.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(inv_r11.grandTotal, inv_r11.currencyCode));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.reportStatusBadgeClass(inv_r11.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getInvoiceStatusLabel(inv_r11.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inv_r11.status === "PAID" ? ctx_r0.formatDate(inv_r11.paidAt) : "\u2014");
  }
}
function SupplierReportsComponent_div_9_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "table", 59)(2, "thead", 60)(3, "tr")(4, "th", 61);
    \u0275\u0275text(5, "SL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Invoice Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "PO Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Invoice Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 62);
    \u0275\u0275text(13, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 63);
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Paid On");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, SupplierReportsComponent_div_9_div_85_tr_19_Template, 21, 8, "tr", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r0.sortedInvoiceList);
  }
}
function SupplierReportsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "c-row", 10)(2, "c-col", 11)(3, "c-card", 12)(4, "c-card-body", 13)(5, "div", 14)(6, "div", 15);
    \u0275\u0275element(7, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "div", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18);
    \u0275\u0275text(12, "POs Received");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(13, "c-col", 11)(14, "c-card", 19)(15, "c-card-body", 13)(16, "div", 14)(17, "div", 15);
    \u0275\u0275element(18, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "div", 17);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 18);
    \u0275\u0275text(23, "Invoices Submitted");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(24, "c-col", 11)(25, "c-card", 21)(26, "c-card-body", 13)(27, "div", 14)(28, "div", 15);
    \u0275\u0275element(29, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "div", 23);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 18);
    \u0275\u0275text(34, "Payment Received");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(35, "c-col", 11)(36, "c-card", 24)(37, "c-card-body", 13)(38, "div", 14)(39, "div", 15);
    \u0275\u0275element(40, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div")(42, "div", 23);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 18);
    \u0275\u0275text(45, "Awaiting Payment");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(46, "c-row")(47, "c-col", 26)(48, "c-card", 27)(49, "c-card-header", 28)(50, "strong");
    \u0275\u0275text(51, "Invoice Status Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "small", 29);
    \u0275\u0275text(53, "Click a slice to filter");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "c-card-body");
    \u0275\u0275template(55, SupplierReportsComponent_div_9_div_55_Template, 2, 0, "div", 30)(56, SupplierReportsComponent_div_9_div_56_Template, 5, 3, "div", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "c-col", 32)(58, "c-card", 27)(59, "c-card-header", 28)(60, "strong");
    \u0275\u0275text(61, "Invoice Value by Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "small", 29);
    \u0275\u0275text(63, "Click a bar to filter");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "c-card-body");
    \u0275\u0275template(65, SupplierReportsComponent_div_9_div_65_Template, 2, 0, "div", 30)(66, SupplierReportsComponent_div_9_div_66_Template, 2, 2, "div", 33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(67, SupplierReportsComponent_div_9_div_67_Template, 8, 2, "div", 34);
    \u0275\u0275elementStart(68, "c-card", 35)(69, "c-card-header", 28)(70, "strong");
    \u0275\u0275text(71, "Purchase Orders \u2014 Full Detail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 36);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "c-card-body", 37);
    \u0275\u0275template(75, SupplierReportsComponent_div_9_div_75_Template, 2, 0, "div", 38)(76, SupplierReportsComponent_div_9_div_76_Template, 16, 1, "div", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "c-card", 35)(78, "c-card-header", 28)(79, "strong");
    \u0275\u0275text(80, "Invoices \u2014 Full Detail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span", 36);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "c-card-body", 37);
    \u0275\u0275template(84, SupplierReportsComponent_div_9_div_84_Template, 2, 0, "div", 38)(85, SupplierReportsComponent_div_9_div_85_Template, 20, 1, "div", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.reportPOCount);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.reportInvoiceCount);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.reportPaidValue, ctx_r0.reportCurrencyCode));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.reportPendingValue, ctx_r0.reportCurrencyCode));
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r0.reportInvoiceStatusBreakdown.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.reportInvoiceStatusBreakdown.length > 0);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r0.reportMonthlyTrend.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.reportMonthlyTrend.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasClickFilters);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r0.sortedPOList.length, " PO", ctx_r0.sortedPOList.length === 1 ? "" : "s");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.sortedPOList.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sortedPOList.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r0.sortedInvoiceList.length, " invoice", ctx_r0.sortedInvoiceList.length === 1 ? "" : "s");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.sortedInvoiceList.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sortedInvoiceList.length > 0);
  }
}
var _SupplierReportsComponent = class _SupplierReportsComponent {
  constructor(authService, dataService) {
    this.authService = authService;
    this.dataService = dataService;
    this.supplierId = 0;
    this.companyName = "";
    this.isLoading = true;
    this.errorMessage = "";
    this.poList = [];
    this.invoiceList = [];
    this.statusFilter = null;
    this.monthFilter = null;
    this.statusColorMap = {
      DRAFT: "#94a3b8",
      SUBMITTED: "#0d6efd",
      APPROVED: "#43a047",
      PAID: "#2e7d32",
      REJECTED: "#f5b301",
      REJECTED_CLOSED: "#e53935"
    };
    this.statusChartData = { labels: [], datasets: [{ data: [] }] };
    this.monthChartData = { labels: [], datasets: [{ data: [] }] };
    this.statusChartOptions = {};
    this.monthChartOptions = {};
  }
  ngOnInit() {
    this.companyName = localStorage.getItem("supplierName") || "";
    const sid = this.authService.getSupplierId();
    this.supplierId = sid ? sid : Number(localStorage.getItem("supplierId") || "0");
    if (!this.supplierId) {
      this.errorMessage = "Supplier ID not found. Please login again.";
      this.isLoading = false;
      return;
    }
    this.loadData();
  }
  loadData() {
    this.isLoading = true;
    let pending = 2;
    const done = () => {
      if (--pending === 0) {
        this.isLoading = false;
        this.rebuildChartConfigs();
      }
    };
    this.dataService.getApprovedPOsForSupplier(this.supplierId).subscribe({
      next: (r) => {
        this.poList = r?.success ? r.data || [] : [];
        done();
      },
      error: () => {
        this.poList = [];
        done();
      }
    });
    this.dataService.getSupplierInvoices(this.supplierId).subscribe({
      next: (r) => {
        this.invoiceList = r?.success ? r.data || [] : [];
        done();
      },
      error: () => {
        this.invoiceList = [];
        done();
      }
    });
  }
  monthKeyOf(raw) {
    if (!raw)
      return null;
    const d = new Date(raw);
    if (isNaN(d.getTime()))
      return null;
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  }
  // =========================================================================
  // FILTERED LISTS — the single source every KPI, chart, and detail table
  // below reads from. Clicking a chart segment sets statusFilter/monthFilter,
  // which narrows these, which in turn recomputes everything downstream —
  // same drill-down behaviour as the buyer-side Purchase Order Report.
  // =========================================================================
  get filteredInvoiceList() {
    let data = [...this.invoiceList].sort((a, b) => {
      const bd = new Date(b.invoiceDate || b.submittedAt || b.createdAt || 0).getTime();
      const ad = new Date(a.invoiceDate || a.submittedAt || a.createdAt || 0).getTime();
      return bd - ad;
    });
    if (this.statusFilter)
      data = data.filter((i) => i.status === this.statusFilter);
    if (this.monthFilter)
      data = data.filter((i) => this.monthKeyOf(i.invoiceDate || i.submittedAt || i.createdAt) === this.monthFilter);
    return data;
  }
  get filteredPOList() {
    let data = [...this.poList].sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
    if (this.monthFilter)
      data = data.filter((po) => this.monthKeyOf(po.createdAt) === this.monthFilter);
    return data;
  }
  // Kept as the template's names for the detail tables, unchanged from before.
  get sortedPOList() {
    return this.filteredPOList;
  }
  get sortedInvoiceList() {
    return this.filteredInvoiceList;
  }
  // =========================================================================
  // CHART CLICK-TO-FILTER
  // =========================================================================
  onStatusChartClick(items) {
    const item = items?.[0];
    if (!item)
      return;
    const row = this.reportInvoiceStatusBreakdown[item.index];
    if (row)
      this.filterByStatus(row);
  }
  onMonthChartClick(items) {
    const item = items?.[0];
    if (!item)
      return;
    const row = this.reportMonthlyTrend[item.index];
    if (row)
      this.filterByMonth(row);
  }
  filterByStatus(row) {
    this.statusFilter = this.statusFilter === row.status ? null : row.status;
    this.rebuildChartConfigs();
  }
  filterByMonth(row) {
    this.monthFilter = this.monthFilter === row.key ? null : row.key;
    this.rebuildChartConfigs();
  }
  get hasClickFilters() {
    return !!this.statusFilter || !!this.monthFilter;
  }
  clearStatusFilter() {
    this.statusFilter = null;
    this.rebuildChartConfigs();
  }
  clearMonthFilter() {
    this.monthFilter = null;
    this.rebuildChartConfigs();
  }
  clearAllClickFilters() {
    this.statusFilter = null;
    this.monthFilter = null;
    this.rebuildChartConfigs();
  }
  get monthFilterLabel() {
    if (!this.monthFilter)
      return "";
    return this.reportMonthlyTrend.find((m) => m.key === this.monthFilter)?.label || this.allMonthsUnfiltered.find((m) => m.key === this.monthFilter)?.label || this.monthFilter;
  }
  /** Every month with invoice activity, ignoring the current filters — used only so the
   *  active-filter chip still shows a readable label even after its own bar is filtered away. */
  get allMonthsUnfiltered() {
    const map = /* @__PURE__ */ new Map();
    this.invoiceList.forEach((inv) => {
      const key = this.monthKeyOf(inv.invoiceDate || inv.submittedAt || inv.createdAt);
      if (!key)
        return;
      const [y, m] = key.split("-");
      map.set(key, new Date(Number(y), Number(m) - 1, 1).toLocaleDateString("en-GB", { month: "short", year: "2-digit" }));
    });
    return Array.from(map.entries()).map(([key, label]) => ({ key, label }));
  }
  // =========================================================================
  // REPORT METRICS — all derived from filteredInvoiceList / filteredPOList
  // =========================================================================
  get reportCurrencyCode() {
    return this.invoiceList[0]?.currencyCode || this.poList[0]?.currencyCode || "INR";
  }
  get reportPOCount() {
    return this.filteredPOList.length;
  }
  /** DRAFT invoices haven't actually been sent to the buyer yet, so they don't count as "submitted". */
  get reportInvoiceCount() {
    return this.filteredInvoiceList.filter((i) => i.status !== "DRAFT").length;
  }
  get reportPaidValue() {
    return this.filteredInvoiceList.filter((i) => i.status === "PAID").reduce((sum, i) => sum + (Number(i.grandTotal) || 0), 0);
  }
  /** Submitted or Approved and not yet paid — money the buyer still owes. */
  get reportPendingValue() {
    return this.filteredInvoiceList.filter((i) => i.status === "SUBMITTED" || i.status === "APPROVED").reduce((sum, i) => sum + (Number(i.grandTotal) || 0), 0);
  }
  reportStatusBadgeClass(status) {
    switch (status) {
      case "DRAFT":
        return "bg-secondary";
      case "SUBMITTED":
        return "bg-primary";
      case "APPROVED":
      case "PAID":
        return "bg-success";
      case "REJECTED":
        return "bg-warning text-dark";
      case "REJECTED_CLOSED":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  }
  get reportInvoiceStatusBreakdown() {
    const order = ["DRAFT", "SUBMITTED", "APPROVED", "PAID", "REJECTED", "REJECTED_CLOSED"];
    return order.map((status) => {
      const rows = this.filteredInvoiceList.filter((i) => i.status === status);
      return {
        status,
        label: this.getInvoiceStatusLabel(status),
        badgeClass: this.reportStatusBadgeClass(status),
        count: rows.length,
        value: rows.reduce((sum, i) => sum + (Number(i.grandTotal) || 0), 0)
      };
    }).filter((row) => row.count > 0);
  }
  /** Invoice value by calendar month, oldest first — same approach as the buyer-side report. */
  get reportMonthlyTrend() {
    const map = /* @__PURE__ */ new Map();
    this.filteredInvoiceList.forEach((inv) => {
      const key = this.monthKeyOf(inv.invoiceDate || inv.submittedAt || inv.createdAt);
      if (!key)
        return;
      map.set(key, (map.get(key) || 0) + (Number(inv.grandTotal) || 0));
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b)).map(([key, value]) => {
      const [y, m] = key.split("-");
      const label = new Date(Number(y), Number(m) - 1, 1).toLocaleDateString("en-GB", { month: "short", year: "2-digit" });
      return { key, label, value };
    });
  }
  rebuildChartConfigs() {
    const statusRows = this.reportInvoiceStatusBreakdown;
    this.statusChartData = {
      labels: statusRows.map((r) => r.label),
      datasets: [{
        data: statusRows.map((r) => r.value),
        backgroundColor: statusRows.map((r) => this.statusColorMap[r.status] || "#94a3b8"),
        borderColor: "#fff",
        borderWidth: 2
      }]
    };
    const totalVal = statusRows.reduce((s, r) => s + r.value, 0);
    this.statusChartOptions = {
      maintainAspectRatio: false,
      plugins: {
        // The breakdown list beside the chart already acts as a clickable legend
        // with count/value — showing Chart.js's own legend too would just repeat it.
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const row = statusRows[ctx.dataIndex];
              const pct = totalVal > 0 ? Math.round(row.value / totalVal * 100) : 0;
              return ` ${row.label}: ${this.formatCurrency(row.value, this.reportCurrencyCode)} (${pct}%)`;
            }
          }
        }
      },
      onHover: (evt, elements) => {
        const el = evt?.native?.target;
        if (el)
          el.style.cursor = elements.length ? "pointer" : "default";
      }
    };
    const monthRows = this.reportMonthlyTrend;
    this.monthChartData = {
      labels: monthRows.map((r) => r.label),
      datasets: [{
        label: "Invoice Value",
        data: monthRows.map((r) => r.value),
        backgroundColor: monthRows.map((r) => r.key === this.monthFilter ? "#4c1d95" : "#6c63ff"),
        borderRadius: 4,
        maxBarThickness: 42
      }]
    };
    this.monthChartOptions = {
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (ctx) => ` ${this.formatCurrency(ctx.parsed.y, this.reportCurrencyCode)}` } }
      },
      scales: { y: { beginAtZero: true } },
      onHover: (evt, elements) => {
        const el = evt?.native?.target;
        if (el)
          el.style.cursor = elements.length ? "pointer" : "default";
      }
    };
  }
  // =========================================================================
  // DISPLAY HELPERS
  // =========================================================================
  poInvoiceStatusLabel(po) {
    return po.hasInvoice ? this.getInvoiceStatusLabel(po.invoiceStatus) : "No Invoice";
  }
  poInvoiceStatusBadgeClass(po) {
    return po.hasInvoice ? this.reportStatusBadgeClass(po.invoiceStatus) : "bg-light text-dark";
  }
  formatDate(d) {
    if (!d)
      return "N/A";
    try {
      return new Date(d).toLocaleDateString("en-GB");
    } catch {
      return "N/A";
    }
  }
  getInvoiceStatusLabel(status) {
    const m = { DRAFT: "Draft", SUBMITTED: "Submitted", APPROVED: "Approved", PAID: "Paid", REJECTED: "Rejected", REJECTED_CLOSED: "Closed" };
    return m[status] || status;
  }
  getSymbolForCode(code) {
    const m = {
      INR: "\u20B9",
      USD: "$",
      EUR: "\u20AC",
      GBP: "\xA3",
      AED: "\u062F.\u0625",
      SGD: "S$",
      JPY: "\xA5",
      CNY: "\xA5",
      CHF: "Fr",
      CAD: "C$",
      AUD: "A$"
    };
    return m[code] || code;
  }
  formatCurrency(amount, currencyCode) {
    const code = currencyCode || "INR";
    const symbol = this.getSymbolForCode(code);
    const val = Number(amount ?? 0);
    const formatted = val.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const rtl = ["AED", "SAR", "QAR", "KWD", "BHD", "OMR", "IRR", "IQD", "JOD", "LBP"];
    return rtl.includes(code) ? formatted + " " + symbol : symbol + " " + formatted;
  }
};
_SupplierReportsComponent.\u0275fac = function SupplierReportsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SupplierReportsComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DataService));
};
_SupplierReportsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierReportsComponent, selectors: [["app-supplier-reports"]], decls: 10, vars: 4, consts: [["fluid", "", 1, "px-4", "py-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4", "flex-wrap", "gap-2"], [1, "fw-bold", "mb-1"], [1, "text-muted"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["color", "primary"], [1, "alert", "alert-danger"], [1, "mb-2"], ["xs", "12", "sm", "6", "lg", "3", 1, "mb-3"], [1, "stat-card", "stat-card-blue"], [1, "p-3"], [1, "d-flex", "align-items-center"], [1, "stat-icon", "me-3"], [1, "bi", "bi-cart-check"], [1, "stat-number"], [1, "stat-label"], [1, "stat-card", "stat-card-info"], [1, "bi", "bi-receipt"], [1, "stat-card", "stat-card-success"], [1, "bi", "bi-check-circle"], [1, "stat-number", 2, "font-size", "1.15rem"], [1, "stat-card", "stat-card-warning"], [1, "bi", "bi-hourglass-split"], ["lg", "5", 1, "mb-4"], [1, "border-0", "shadow-sm", "h-100", 2, "border-radius", "12px"], [1, "bg-white", "border-0", "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted", "fw-normal"], ["class", "text-muted small py-3", 4, "ngIf"], ["class", "chart-legend-layout", 4, "ngIf"], ["lg", "7", 1, "mb-4"], ["class", "month-chart-wrap", 4, "ngIf"], ["class", "active-filter-bar mb-3", 4, "ngIf"], [1, "border-0", "shadow-sm", "po-style-card", "mb-4", 2, "border-radius", "12px"], [1, "text-muted", "small"], [1, "p-0"], ["class", "text-muted small text-center py-4", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "text-muted", "small", "py-3"], [1, "chart-legend-layout"], [1, "chart-pie-wrap"], ["type", "pie", 3, "getElementAtEvent", "data", "options"], [1, "chart-legend-list"], ["class", "d-flex justify-content-between align-items-center py-2 breakdown-clickable", 3, "breakdown-active", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "py-2", "breakdown-clickable", 3, "click"], [1, "badge", 3, "ngClass"], [1, "month-chart-wrap"], ["type", "bar", 3, "getElementAtEvent", "data", "options"], [1, "active-filter-bar", "mb-3"], [1, "text-muted", "small", "me-2"], [1, "bi", "bi-funnel-fill", "me-1"], ["class", "filter-chip", 4, "ngIf"], [1, "btn", "btn-link", "btn-sm", "text-decoration-none", 3, "click"], [1, "filter-chip"], [1, "bi", "bi-x-lg", 3, "click"], [1, "text-muted", "small", "text-center", "py-4"], [1, "table-responsive"], [1, "table", "po-table", "mb-0"], [1, "table-header"], [1, "ps-4"], [1, "text-end"], [1, "text-center"], ["class", "po-main-row", 4, "ngFor", "ngForOf"], [1, "po-main-row"], [1, "po-number-link"], [1, "bi", "bi-file-earmark-text", "me-1"], [1, "text-end", "fw-bold", "text-success"], [1, "bi", "bi-receipt", "me-1"]], template: function SupplierReportsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-container", 0)(1, "div", 1)(2, "div")(3, "h4", 2);
    \u0275\u0275text(4, "Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, SupplierReportsComponent_div_7_Template, 2, 0, "div", 4)(8, SupplierReportsComponent_div_8_Template, 2, 1, "div", 5)(9, SupplierReportsComponent_div_9_Template, 86, 17, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Your purchase order and invoice activity", ctx.companyName ? " \u2014 " + ctx.companyName : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.errorMessage);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardBodyComponent,
  CardHeaderComponent,
  SpinnerComponent,
  ChartjsComponent
], styles: ['\n\n.stat-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.75rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s, box-shadow 0.2s;\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n}\n.stat-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 120px;\n  height: 120px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  transform: translate(40%, -40%);\n}\n.stat-card-blue[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.stat-card-warning[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n}\n.stat-card-success[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n}\n.stat-card-info[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #43e97b 0%,\n      #38f9d7 100%);\n  color: white;\n}\n.stat-card[_ngcontent-%COMP%]   c-card-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  opacity: 0.9;\n}\n.chart-legend-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n.chart-pie-wrap[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  flex-shrink: 0;\n  position: relative;\n}\n.chart-pie-wrap[_ngcontent-%COMP%]   c-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.chart-legend-list[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.breakdown-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 8px;\n  padding: 6px 8px;\n  margin: 0 -8px;\n  transition: background 0.15s ease;\n}\n.breakdown-clickable[_ngcontent-%COMP%]:hover {\n  background: #f5f6fa;\n}\n.breakdown-clickable.breakdown-active[_ngcontent-%COMP%] {\n  background: #eef0ff;\n  box-shadow: inset 3px 0 0 #6c63ff;\n}\n.month-chart-wrap[_ngcontent-%COMP%] {\n  height: 220px;\n  position: relative;\n  overflow: hidden;\n}\n.month-chart-wrap[_ngcontent-%COMP%]   c-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.active-filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #eef0f4;\n  border-radius: 10px;\n  padding: 10px 14px;\n}\n.filter-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #eef0ff;\n  color: #4c1d95;\n  border-radius: 20px;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.filter-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 0.7rem;\n  opacity: 0.7;\n}\n.filter-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.po-style-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.po-table[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  border-collapse: collapse;\n}\n.table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #e8eaf6 !important;\n  color: #1a237e !important;\n  font-weight: 700;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 12px 14px;\n  border-bottom: 2px solid #c5cae9 !important;\n}\n.po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  vertical-align: middle;\n  border-top: 1px solid #e9ecef !important;\n  border-bottom: none !important;\n}\n.po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  border-top: none !important;\n}\n.po-main-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f9ff !important;\n}\n.po-number-link[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1976d2;\n}\n/*# sourceMappingURL=supplier-reports.component.css.map */'] });
var SupplierReportsComponent = _SupplierReportsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierReportsComponent, [{
    type: Component,
    args: [{ selector: "app-supplier-reports", standalone: true, imports: [
      CommonModule,
      ContainerComponent,
      RowComponent,
      ColComponent,
      CardComponent,
      CardBodyComponent,
      CardHeaderComponent,
      SpinnerComponent,
      ChartjsComponent
    ], template: `<c-container fluid class="px-4 py-3">

  <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
    <div>
      <h4 class="fw-bold mb-1">Reports</h4>
      <div class="text-muted">Your purchase order and invoice activity{{ companyName ? ' \u2014 ' + companyName : '' }}</div>
    </div>
  </div>

  <div *ngIf="isLoading" class="text-center py-5"><c-spinner color="primary"></c-spinner></div>

  <div *ngIf="!isLoading && errorMessage" class="alert alert-danger">{{ errorMessage }}</div>

  <div *ngIf="!isLoading && !errorMessage">

    <!-- ==================== KPI TILES ==================== -->
    <c-row class="mb-2">
      <c-col xs="12" sm="6" lg="3" class="mb-3">
        <c-card class="stat-card stat-card-blue"><c-card-body class="p-3">
          <div class="d-flex align-items-center">
            <div class="stat-icon me-3"><i class="bi bi-cart-check"></i></div>
            <div><div class="stat-number">{{ reportPOCount }}</div><div class="stat-label">POs Received</div></div>
          </div>
        </c-card-body></c-card>
      </c-col>
      <c-col xs="12" sm="6" lg="3" class="mb-3">
        <c-card class="stat-card stat-card-info"><c-card-body class="p-3">
          <div class="d-flex align-items-center">
            <div class="stat-icon me-3"><i class="bi bi-receipt"></i></div>
            <div><div class="stat-number">{{ reportInvoiceCount }}</div><div class="stat-label">Invoices Submitted</div></div>
          </div>
        </c-card-body></c-card>
      </c-col>
      <c-col xs="12" sm="6" lg="3" class="mb-3">
        <c-card class="stat-card stat-card-success"><c-card-body class="p-3">
          <div class="d-flex align-items-center">
            <div class="stat-icon me-3"><i class="bi bi-check-circle"></i></div>
            <div><div class="stat-number" style="font-size:1.15rem;">{{ formatCurrency(reportPaidValue, reportCurrencyCode) }}</div><div class="stat-label">Payment Received</div></div>
          </div>
        </c-card-body></c-card>
      </c-col>
      <c-col xs="12" sm="6" lg="3" class="mb-3">
        <c-card class="stat-card stat-card-warning"><c-card-body class="p-3">
          <div class="d-flex align-items-center">
            <div class="stat-icon me-3"><i class="bi bi-hourglass-split"></i></div>
            <div><div class="stat-number" style="font-size:1.15rem;">{{ formatCurrency(reportPendingValue, reportCurrencyCode) }}</div><div class="stat-label">Awaiting Payment</div></div>
          </div>
        </c-card-body></c-card>
      </c-col>
    </c-row>

    <!-- ==================== BREAKDOWN + TREND ==================== -->
    <c-row>
      <c-col lg="5" class="mb-4">
        <c-card class="border-0 shadow-sm h-100" style="border-radius:12px;">
          <c-card-header class="bg-white border-0 d-flex justify-content-between align-items-center">
            <strong>Invoice Status Breakdown</strong>
            <small class="text-muted fw-normal">Click a slice to filter</small>
          </c-card-header>
          <c-card-body>
            <div class="text-muted small py-3" *ngIf="reportInvoiceStatusBreakdown.length===0">No invoices yet.</div>
            <div class="chart-legend-layout" *ngIf="reportInvoiceStatusBreakdown.length>0">
              <div class="chart-pie-wrap">
                <c-chart type="pie" [data]="statusChartData" [options]="statusChartOptions"
                         (getElementAtEvent)="onStatusChartClick($event)"></c-chart>
              </div>
              <div class="chart-legend-list">
                <div class="d-flex justify-content-between align-items-center py-2 breakdown-clickable"
                     [class.breakdown-active]="statusFilter === row.status"
                     (click)="filterByStatus(row)"
                     *ngFor="let row of reportInvoiceStatusBreakdown">
                  <span class="badge" [ngClass]="row.badgeClass">{{ row.label }}</span>
                  <span class="text-muted small">{{ row.count }} invoice{{ row.count === 1 ? '' : 's' }} &middot; {{ formatCurrency(row.value, reportCurrencyCode) }}</span>
                </div>
              </div>
            </div>
          </c-card-body>
        </c-card>
      </c-col>
      <c-col lg="7" class="mb-4">
        <c-card class="border-0 shadow-sm h-100" style="border-radius:12px;">
          <c-card-header class="bg-white border-0 d-flex justify-content-between align-items-center">
            <strong>Invoice Value by Month</strong>
            <small class="text-muted fw-normal">Click a bar to filter</small>
          </c-card-header>
          <c-card-body>
            <div class="text-muted small py-3" *ngIf="reportMonthlyTrend.length===0">No invoices to chart yet.</div>
            <div class="month-chart-wrap" *ngIf="reportMonthlyTrend.length>0">
              <c-chart type="bar" [data]="monthChartData" [options]="monthChartOptions"
                       (getElementAtEvent)="onMonthChartClick($event)"></c-chart>
            </div>
          </c-card-body>
        </c-card>
      </c-col>
    </c-row>

    <!-- ==================== ACTIVE FILTERS ==================== -->
    <div class="active-filter-bar mb-3" *ngIf="hasClickFilters">
      <span class="text-muted small me-2"><i class="bi bi-funnel-fill me-1"></i>Filtered by:</span>
      <span class="filter-chip" *ngIf="statusFilter">
        Status: {{ getInvoiceStatusLabel(statusFilter) }}
        <i class="bi bi-x-lg" (click)="clearStatusFilter()"></i>
      </span>
      <span class="filter-chip" *ngIf="monthFilter">
        Month: {{ monthFilterLabel }}
        <i class="bi bi-x-lg" (click)="clearMonthFilter()"></i>
      </span>
      <button class="btn btn-link btn-sm text-decoration-none" (click)="clearAllClickFilters()">Clear all</button>
    </div>

    <!-- ==================== DETAILED PURCHASE ORDERS ==================== -->
    <c-card class="border-0 shadow-sm po-style-card mb-4" style="border-radius:12px;">
      <c-card-header class="bg-white border-0 d-flex justify-content-between align-items-center">
        <strong>Purchase Orders \u2014 Full Detail</strong>
        <span class="text-muted small">{{ sortedPOList.length }} PO{{ sortedPOList.length === 1 ? '' : 's' }}</span>
      </c-card-header>
      <c-card-body class="p-0">
        <div class="text-muted small text-center py-4" *ngIf="sortedPOList.length===0">No purchase orders yet.</div>
        <div class="table-responsive" *ngIf="sortedPOList.length>0">
          <table class="table po-table mb-0">
            <thead class="table-header">
              <tr>
                <th class="ps-4">SL</th>
                <th>PO Number</th>
                <th>PO Date</th>
                <th class="text-end">Value</th>
                <th class="text-center">Invoice Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="po-main-row" *ngFor="let po of sortedPOList; let i = index">
                <td class="ps-4">{{ i + 1 }}</td>
                <td><span class="po-number-link"><i class="bi bi-file-earmark-text me-1"></i>{{ po.poNumber }}</span></td>
                <td><small class="text-muted">{{ formatDate(po.createdAt) }}</small></td>
                <td class="text-end fw-bold text-success">{{ formatCurrency(po.grandTotal, po.currencyCode) }}</td>
                <td class="text-center"><span class="badge" [ngClass]="poInvoiceStatusBadgeClass(po)">{{ poInvoiceStatusLabel(po) }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </c-card-body>
    </c-card>

    <!-- ==================== DETAILED INVOICES ==================== -->
    <c-card class="border-0 shadow-sm po-style-card mb-4" style="border-radius:12px;">
      <c-card-header class="bg-white border-0 d-flex justify-content-between align-items-center">
        <strong>Invoices \u2014 Full Detail</strong>
        <span class="text-muted small">{{ sortedInvoiceList.length }} invoice{{ sortedInvoiceList.length === 1 ? '' : 's' }}</span>
      </c-card-header>
      <c-card-body class="p-0">
        <div class="text-muted small text-center py-4" *ngIf="sortedInvoiceList.length===0">No invoices yet.</div>
        <div class="table-responsive" *ngIf="sortedInvoiceList.length>0">
          <table class="table po-table mb-0">
            <thead class="table-header">
              <tr>
                <th class="ps-4">SL</th>
                <th>Invoice Number</th>
                <th>PO Number</th>
                <th>Invoice Date</th>
                <th class="text-end">Value</th>
                <th class="text-center">Status</th>
                <th>Paid On</th>
              </tr>
            </thead>
            <tbody>
              <tr class="po-main-row" *ngFor="let inv of sortedInvoiceList; let i = index">
                <td class="ps-4">{{ i + 1 }}</td>
                <td><span class="po-number-link"><i class="bi bi-receipt me-1"></i>{{ inv.invoiceNumber }}</span></td>
                <td><small class="text-muted">{{ inv.poNumber }}</small></td>
                <td><small class="text-muted">{{ formatDate(inv.invoiceDate || inv.submittedAt || inv.createdAt) }}</small></td>
                <td class="text-end fw-bold text-success">{{ formatCurrency(inv.grandTotal, inv.currencyCode) }}</td>
                <td class="text-center"><span class="badge" [ngClass]="reportStatusBadgeClass(inv.status)">{{ getInvoiceStatusLabel(inv.status) }}</span></td>
                <td><small class="text-muted">{{ inv.status === 'PAID' ? formatDate(inv.paidAt) : '\u2014' }}</small></td>
              </tr>
            </tbody>
          </table>
        </div>
      </c-card-body>
    </c-card>

  </div>

</c-container>
`, styles: ['/* src/app/views/base/supplier-reports/supplier-reports.component.css */\n.stat-card {\n  border: none;\n  border-radius: 0.75rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s, box-shadow 0.2s;\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n}\n.stat-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 120px;\n  height: 120px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  transform: translate(40%, -40%);\n}\n.stat-card-blue .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.stat-card-warning .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n}\n.stat-card-success .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n}\n.stat-card-info .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #43e97b 0%,\n      #38f9d7 100%);\n  color: white;\n}\n.stat-card c-card-body {\n  position: relative;\n  z-index: 1;\n}\n.stat-icon {\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n}\n.stat-number {\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.stat-label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  opacity: 0.9;\n}\n.chart-legend-layout {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n.chart-pie-wrap {\n  width: 180px;\n  height: 180px;\n  flex-shrink: 0;\n  position: relative;\n}\n.chart-pie-wrap c-chart {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.chart-legend-list {\n  flex: 1;\n  min-width: 0;\n}\n.breakdown-clickable {\n  cursor: pointer;\n  border-radius: 8px;\n  padding: 6px 8px;\n  margin: 0 -8px;\n  transition: background 0.15s ease;\n}\n.breakdown-clickable:hover {\n  background: #f5f6fa;\n}\n.breakdown-clickable.breakdown-active {\n  background: #eef0ff;\n  box-shadow: inset 3px 0 0 #6c63ff;\n}\n.month-chart-wrap {\n  height: 220px;\n  position: relative;\n  overflow: hidden;\n}\n.month-chart-wrap c-chart {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.active-filter-bar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #eef0f4;\n  border-radius: 10px;\n  padding: 10px 14px;\n}\n.filter-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #eef0ff;\n  color: #4c1d95;\n  border-radius: 20px;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.filter-chip i {\n  cursor: pointer;\n  font-size: 0.7rem;\n  opacity: 0.7;\n}\n.filter-chip i:hover {\n  opacity: 1;\n}\n.po-style-card {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.po-table {\n  font-size: 0.88rem;\n  border-collapse: collapse;\n}\n.table-header th {\n  background: #e8eaf6 !important;\n  color: #1a237e !important;\n  font-weight: 700;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 12px 14px;\n  border-bottom: 2px solid #c5cae9 !important;\n}\n.po-table tbody .po-main-row td {\n  padding: 12px 14px;\n  vertical-align: middle;\n  border-top: 1px solid #e9ecef !important;\n  border-bottom: none !important;\n}\n.po-table tbody .po-main-row:first-child td {\n  border-top: none !important;\n}\n.po-main-row:hover td {\n  background: #f8f9ff !important;\n}\n.po-number-link {\n  font-weight: 700;\n  color: #1976d2;\n}\n/*# sourceMappingURL=supplier-reports.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierReportsComponent, { className: "SupplierReportsComponent", filePath: "src/app/views/base/supplier-reports/supplier-reports.component.ts", lineNumber: 29 });
})();
export {
  SupplierReportsComponent
};
//# sourceMappingURL=chunk-HKM34M6V.js.map
