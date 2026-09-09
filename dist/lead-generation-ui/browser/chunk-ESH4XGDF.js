import {
  ChartjsComponent
} from "./chunk-Q3LRYO47.js";
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
  DataService
} from "./chunk-OQIPAMNU.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BCCUO726.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-SO7Q7VKX.js";

// src/app/views/base/spend-analysis/spend-analysis.component.ts
function SpendAnalysisComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fy_r1 = ctx.$implicit;
    \u0275\u0275property("value", fy_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(fy_r1.label);
  }
}
function SpendAnalysisComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "label", 11);
    \u0275\u0275text(2, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function SpendAnalysisComponent_div_22_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.customFromDate, $event) || (ctx_r2.customFromDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SpendAnalysisComponent_div_22_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFYOptionChange());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.customFromDate);
  }
}
function SpendAnalysisComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "label", 11);
    \u0275\u0275text(2, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function SpendAnalysisComponent_div_23_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.customToDate, $event) || (ctx_r2.customToDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SpendAnalysisComponent_div_23_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFYOptionChange());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.customToDate);
  }
}
function SpendAnalysisComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMessage);
  }
}
function SpendAnalysisComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementStart(2, "p", 28);
    \u0275\u0275text(3, "Loading purchase orders\u2026");
    \u0275\u0275elementEnd()();
  }
}
function SpendAnalysisComponent_ng_container_29_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275text(1, "No committed spend in this period.");
    \u0275\u0275elementEnd();
  }
}
function SpendAnalysisComponent_ng_container_29_div_67_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("click", function SpendAnalysisComponent_ng_container_29_div_67_div_4_Template_div_click_0_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.filterBySupplier(row_r8));
    });
    \u0275\u0275elementStart(1, "div", 72)(2, "span", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 74);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 75);
    \u0275\u0275element(7, "div", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("breakdown-active", ctx_r2.supplierFilter === row_r8.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.compact(row_r8.value), " \xB7 ", row_r8.percent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.barWidthPercent(row_r8), "%");
  }
}
function SpendAnalysisComponent_ng_container_29_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "c-chart", 68);
    \u0275\u0275listener("getElementAtEvent", function SpendAnalysisComponent_ng_container_29_div_67_Template_c_chart_getElementAtEvent_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSupplierChartClick($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 69);
    \u0275\u0275template(4, SpendAnalysisComponent_ng_container_29_div_67_div_4_Template, 8, 7, "div", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx_r2.supplierChartData)("options", ctx_r2.supplierChartOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.bySupplier);
  }
}
function SpendAnalysisComponent_ng_container_29_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275text(1, "No committed POs in this period.");
    \u0275\u0275elementEnd();
  }
}
function SpendAnalysisComponent_ng_container_29_div_77_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function SpendAnalysisComponent_ng_container_29_div_77_div_4_Template_div_click_0_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.filterByStatus(row_r11));
    });
    \u0275\u0275elementStart(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("breakdown-active", ctx_r2.statusFilter === row_r11.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "bg-" + ctx_r2.statusColor(row_r11.label));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r11.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", row_r11.count, " PO(s) \xB7 ", ctx_r2.compact(row_r11.value), " \xB7 ", row_r11.percent, "%");
  }
}
function SpendAnalysisComponent_ng_container_29_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "c-chart", 68);
    \u0275\u0275listener("getElementAtEvent", function SpendAnalysisComponent_ng_container_29_div_77_Template_c_chart_getElementAtEvent_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onStatusChartClick($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 69);
    \u0275\u0275template(4, SpendAnalysisComponent_ng_container_29_div_77_div_4_Template, 5, 7, "div", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx_r2.statusChartData)("options", ctx_r2.statusChartOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.byStatus);
  }
}
function SpendAnalysisComponent_ng_container_29_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275text(1, "No committed spend to chart yet.");
    \u0275\u0275elementEnd();
  }
}
function SpendAnalysisComponent_ng_container_29_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "c-chart", 81);
    \u0275\u0275listener("getElementAtEvent", function SpendAnalysisComponent_ng_container_29_div_86_Template_c_chart_getElementAtEvent_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMonthChartClick($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r2.monthChartData)("options", ctx_r2.monthChartOptions);
  }
}
function SpendAnalysisComponent_ng_container_29_div_87_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "i", 88);
    \u0275\u0275listener("click", function SpendAnalysisComponent_ng_container_29_div_87_span_4_Template_i_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.clearSupplierFilter());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Supplier: ", ctx_r2.supplierFilter, " ");
  }
}
function SpendAnalysisComponent_ng_container_29_div_87_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "i", 88);
    \u0275\u0275listener("click", function SpendAnalysisComponent_ng_container_29_div_87_span_5_Template_i_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.clearStatusFilter());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Status: ", ctx_r2.statusFilter, " ");
  }
}
function SpendAnalysisComponent_ng_container_29_div_87_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "i", 88);
    \u0275\u0275listener("click", function SpendAnalysisComponent_ng_container_29_div_87_span_6_Template_i_click_2_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.clearMonthFilter());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Month: ", ctx_r2.monthFilterLabel, " ");
  }
}
function SpendAnalysisComponent_ng_container_29_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "span", 83);
    \u0275\u0275element(2, "i", 84);
    \u0275\u0275text(3, "Filtered by:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SpendAnalysisComponent_ng_container_29_div_87_span_4_Template, 3, 1, "span", 85)(5, SpendAnalysisComponent_ng_container_29_div_87_span_5_Template, 3, 1, "span", 85)(6, SpendAnalysisComponent_ng_container_29_div_87_span_6_Template, 3, 1, "span", 85);
    \u0275\u0275elementStart(7, "button", 86);
    \u0275\u0275listener("click", function SpendAnalysisComponent_ng_container_29_div_87_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearAllClickFilters());
    });
    \u0275\u0275text(8, "Clear all");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.supplierFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.statusFilter !== "ALL");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.monthFilter);
  }
}
function SpendAnalysisComponent_ng_container_29_option_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r17 = ctx.$implicit;
    \u0275\u0275property("value", s_r17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r17);
  }
}
function SpendAnalysisComponent_ng_container_29_div_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1, " No purchase orders match the current filters. ");
    \u0275\u0275elementEnd();
  }
}
function SpendAnalysisComponent_ng_container_29_div_105_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 116);
    \u0275\u0275listener("click", function SpendAnalysisComponent_ng_container_29_div_105_tr_21_Template_tr_click_0_listener() {
      const po_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.viewPO(po_r20));
    });
    \u0275\u0275elementStart(1, "td")(2, "a", 117);
    \u0275\u0275element(3, "i", 118);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 119);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 97)(11, "div", 120);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 98)(15, "span", 121);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 98)(18, "span", 122);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const po_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", po_r20.poNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Created ", \u0275\u0275pipeBind2(7, 14, po_r20.createdDate, "dd MMM yy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(po_r20.supplierName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", po_r20.currencySymbol || "\u20B9", "", \u0275\u0275pipeBind2(13, 17, po_r20.grandTotal, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "bg-" + ctx_r2.statusColor(po_r20.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(po_r20.status);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", po_r20.paymentStatus === "PAID")("bg-warning", po_r20.paymentStatus === "PARTIALLY_PAID")("bg-secondary", !po_r20.paymentStatus || po_r20.paymentStatus === "UNPAID");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.paymentStatusLabel(po_r20.paymentStatus), " ");
  }
}
function SpendAnalysisComponent_ng_container_29_div_105_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 123);
    \u0275\u0275listener("click", function SpendAnalysisComponent_ng_container_29_div_105_button_36_Template_button_click_0_listener() {
      const size_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onPageSizeChange(size_r22));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.pageSize === size_r22);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r22);
  }
}
function SpendAnalysisComponent_ng_container_29_div_105_ng_container_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function SpendAnalysisComponent_ng_container_29_div_105_ng_container_42_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 127);
    \u0275\u0275listener("click", function SpendAnalysisComponent_ng_container_29_div_105_ng_container_42_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const page_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage(page_r24));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.currentPage === page_r24);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r24);
  }
}
function SpendAnalysisComponent_ng_container_29_div_105_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SpendAnalysisComponent_ng_container_29_div_105_ng_container_42_span_1_Template, 2, 0, "span", 124)(2, SpendAnalysisComponent_ng_container_29_div_105_ng_container_42_button_2_Template, 2, 3, "button", 125);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const page_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", page_r24 === -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", page_r24 !== -1);
  }
}
function SpendAnalysisComponent_ng_container_29_div_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91)(2, "h5", 92);
    \u0275\u0275element(3, "i", 93);
    \u0275\u0275text(4, "Purchase Orders ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 94);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "table", 95)(8, "thead", 96)(9, "tr")(10, "th");
    \u0275\u0275text(11, "PO Number / Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 97);
    \u0275\u0275text(15, "Grand Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 98);
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 98);
    \u0275\u0275text(19, "Payment");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, SpendAnalysisComponent_ng_container_29_div_105_tr_21_Template, 20, 20, "tr", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 100)(23, "div", 101)(24, "span", 18);
    \u0275\u0275text(25, " Showing ");
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " of ");
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " orders ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 102)(33, "label", 103);
    \u0275\u0275text(34, "Rows per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 104);
    \u0275\u0275template(36, SpendAnalysisComponent_ng_container_29_div_105_button_36_Template, 2, 3, "button", 105);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 106)(38, "button", 107);
    \u0275\u0275listener("click", function SpendAnalysisComponent_ng_container_29_div_105_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(1));
    });
    \u0275\u0275element(39, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 109);
    \u0275\u0275listener("click", function SpendAnalysisComponent_ng_container_29_div_105_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage - 1));
    });
    \u0275\u0275element(41, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, SpendAnalysisComponent_ng_container_29_div_105_ng_container_42_Template, 3, 2, "ng-container", 111);
    \u0275\u0275elementStart(43, "button", 112);
    \u0275\u0275listener("click", function SpendAnalysisComponent_ng_container_29_div_105_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage + 1));
    });
    \u0275\u0275element(44, "i", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 114);
    \u0275\u0275listener("click", function SpendAnalysisComponent_ng_container_29_div_105_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.totalPages));
    });
    \u0275\u0275element(46, "i", 115);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r2.filteredPOs.length, " result", ctx_r2.filteredPOs.length !== 1 ? "s" : "");
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r2.paginatedPOs)("ngForTrackBy", ctx_r2.trackById);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r2.startIndex, "\u2013", ctx_r2.endIndex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.filteredPOs.length);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
function SpendAnalysisComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 33);
    \u0275\u0275element(6, "path", 34)(7, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 36)(9, "div", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 38);
    \u0275\u0275text(12, "Purchase Orders");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 30)(14, "div", 31)(15, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 33);
    \u0275\u0275element(17, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div", 36)(19, "div", 41);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 38);
    \u0275\u0275text(22, "Committed Spend");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 30)(24, "div", 31)(25, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 33);
    \u0275\u0275element(27, "path", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "div", 36)(29, "div", 41);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 38);
    \u0275\u0275text(32, "Paid to Suppliers");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 30)(34, "div", 31)(35, "div", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 33);
    \u0275\u0275element(37, "circle", 45)(38, "path", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 36)(40, "div", 41);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 38);
    \u0275\u0275text(43, "Outstanding");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "div", 29)(45, "div", 47)(46, "div", 48)(47, "span", 49);
    \u0275\u0275text(48, "Active Suppliers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 50);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 47)(52, "div", 48)(53, "span", 49);
    \u0275\u0275text(54, "Average PO Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 50);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 51)(58, "div", 47)(59, "div", 52)(60, "div", 53)(61, "strong");
    \u0275\u0275text(62, "Spend by Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "small", 54);
    \u0275\u0275text(64, "Click a slice to filter the table");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 8);
    \u0275\u0275template(66, SpendAnalysisComponent_ng_container_29_div_66_Template, 2, 0, "div", 55)(67, SpendAnalysisComponent_ng_container_29_div_67_Template, 5, 3, "div", 56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 47)(69, "div", 52)(70, "div", 53)(71, "strong");
    \u0275\u0275text(72, "PO Status Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "small", 54);
    \u0275\u0275text(74, "Click a slice to filter the table");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 8);
    \u0275\u0275template(76, SpendAnalysisComponent_ng_container_29_div_76_Template, 2, 0, "div", 55)(77, SpendAnalysisComponent_ng_container_29_div_77_Template, 5, 3, "div", 56);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(78, "div", 7)(79, "div", 53)(80, "strong");
    \u0275\u0275text(81, "Committed Spend by Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "small", 54);
    \u0275\u0275text(83, "Click a bar to filter the table");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 8);
    \u0275\u0275template(85, SpendAnalysisComponent_ng_container_29_div_85_Template, 2, 0, "div", 55)(86, SpendAnalysisComponent_ng_container_29_div_86_Template, 2, 2, "div", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(87, SpendAnalysisComponent_ng_container_29_div_87_Template, 9, 3, "div", 58);
    \u0275\u0275elementStart(88, "div", 59)(89, "div", 8)(90, "div", 9)(91, "div", 23)(92, "label", 11);
    \u0275\u0275text(93, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function SpendAnalysisComponent_ng_container_29_Template_select_ngModelChange_94_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.statusFilter, $event) || (ctx_r2.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SpendAnalysisComponent_ng_container_29_Template_select_change_94_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFilters());
    });
    \u0275\u0275template(95, SpendAnalysisComponent_ng_container_29_option_95_Template, 2, 2, "option", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 47)(97, "label", 11);
    \u0275\u0275text(98, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function SpendAnalysisComponent_ng_container_29_Template_input_ngModelChange_99_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchText, $event) || (ctx_r2.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SpendAnalysisComponent_ng_container_29_Template_input_input_99_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFilters());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 61)(101, "span", 18);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(103, "div", 62);
    \u0275\u0275template(104, SpendAnalysisComponent_ng_container_29_div_104_Template, 2, 0, "div", 63)(105, SpendAnalysisComponent_ng_container_29_div_105_Template, 47, 13, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.totalPOCount);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.compact(ctx_r2.totalCommittedValue));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.compact(ctx_r2.totalPaidValue));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.compact(ctx_r2.totalOutstandingValue));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.activeSupplierCount);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.compact(ctx_r2.averagePOValue));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r2.bySupplier.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.bySupplier.length > 0);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r2.byStatus.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.byStatus.length > 0);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.monthlyTrend.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.monthlyTrend.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasClickFilters);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.statusFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.statusOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchText);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.filteredPOs.length, " of ", ctx_r2.allPOs.length, " PO(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.filteredPOs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredPOs.length > 0);
  }
}
var _SpendAnalysisComponent = class _SpendAnalysisComponent {
  get totalPages() {
    return Math.max(1, Math.ceil(this.filteredPOs.length / this.pageSize));
  }
  get paginatedPOs() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredPOs.slice(start, start + this.pageSize);
  }
  get pageNumbers() {
    const total = this.totalPages, current = this.currentPage;
    const pages = [];
    if (total <= 7) {
      for (let i = 1; i <= total; i++)
        pages.push(i);
      return pages;
    }
    pages.push(1);
    if (current > 3)
      pages.push(-1);
    const start = Math.max(2, current - 1), end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++)
      pages.push(i);
    if (current < total - 2)
      pages.push(-1);
    pages.push(total);
    return pages;
  }
  get startIndex() {
    if (this.filteredPOs.length === 0)
      return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }
  get endIndex() {
    return Math.min(this.currentPage * this.pageSize, this.filteredPOs.length);
  }
  goToPage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
  }
  onPageSizeChange(size) {
    this.pageSize = size;
    this.currentPage = 1;
  }
  constructor(dataService, router) {
    this.dataService = dataService;
    this.router = router;
    this.allPOs = [];
    this.filteredPOs = [];
    this.isLoading = false;
    this.errorMessage = "";
    this.searchText = "";
    this.statusFilter = "ALL";
    this.supplierFilter = null;
    this.monthFilter = null;
    this.currentPage = 1;
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25, 50];
    this.statusOptions = [
      "ALL",
      "DRAFT",
      "PENDING_APPROVAL",
      "APPROVED",
      "RELEASED",
      "IN_PROGRESS",
      "DELIVERED",
      "COMPLETED",
      "CLOSED",
      "FORECLOSED",
      "REJECTED",
      "CANCELLED"
    ];
    this.financialYearOptions = [];
    this.selectedFYOption = "";
    this.customFromDate = "";
    this.customToDate = "";
    this.activeDateRangeLabel = "";
    this.chartPalette = [
      "#6c63ff",
      "#00bcd4",
      "#43a047",
      "#ffb300",
      "#e53935",
      "#3f51b5",
      "#8e24aa",
      "#00897b",
      "#fb8c00",
      "#607d8b"
    ];
    this.statusColorMap = {
      DRAFT: "#94a3b8",
      PENDING_APPROVAL: "#f5b301",
      APPROVED: "#0dcaf0",
      RELEASED: "#43a047",
      COMPLETED: "#43a047",
      CLOSED: "#2e7d32",
      REJECTED: "#e53935",
      FORECLOSED: "#c62828",
      CANCELLED: "#78909c"
    };
    this.supplierChartData = { labels: [], datasets: [{ data: [] }] };
    this.statusChartData = { labels: [], datasets: [{ data: [] }] };
    this.monthChartData = { labels: [], datasets: [{ data: [] }] };
    this.supplierChartOptions = {};
    this.statusChartOptions = {};
    this.monthChartOptions = {};
  }
  ngOnInit() {
    this.buildFinancialYearOptions();
    this.selectedFYOption = "ALL";
    this.updateActiveDateRangeLabel();
    this.load();
  }
  load() {
    this.isLoading = true;
    this.errorMessage = "";
    this.dataService.getAllPurchaseOrders().subscribe({
      next: (res) => {
        this.allPOs = this.unwrapList(res).map((po) => __spreadProps(__spreadValues({}, po), {
          grandTotal: Number(po.grandTotal) || 0,
          totalPaidAmount: Number(po.totalPaidAmount) || 0,
          totalInvoicedAmount: Number(po.totalInvoicedAmount) || 0,
          supplierName: po.supplierName || "Unknown Supplier",
          createdDate: po.createdAt || po.createdDate || po.poDate || null
        }));
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || "Could not load purchase orders.";
        this.allPOs = [];
        this.filteredPOs = [];
        this.isLoading = false;
      }
    });
  }
  // =========================================================================
  // FINANCIAL YEAR HELPERS — identical pattern to po-list / hierarchy-dashboard
  // =========================================================================
  buildFinancialYearOptions() {
    const today = /* @__PURE__ */ new Date();
    const currentFYStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
    this.financialYearOptions = [];
    for (let i = 0; i < 4; i++) {
      const startYear = currentFYStartYear - i;
      const endYear = startYear + 1;
      this.financialYearOptions.push({
        value: `FY${startYear}-${String(endYear).slice(-2)}`,
        label: `FY ${startYear}-${String(endYear).slice(-2)} (Apr ${startYear} \u2013 Mar ${endYear})`,
        from: new Date(startYear, 3, 1, 0, 0, 0, 0),
        to: new Date(endYear, 2, 31, 23, 59, 59, 999)
      });
    }
  }
  onFYOptionChange() {
    if (this.selectedFYOption !== "CUSTOM") {
      this.customFromDate = "";
      this.customToDate = "";
    }
    this.updateActiveDateRangeLabel();
    this.applyFilters();
  }
  resetDateFilter() {
    this.selectedFYOption = "ALL";
    this.customFromDate = "";
    this.customToDate = "";
    this.updateActiveDateRangeLabel();
    this.applyFilters();
  }
  updateActiveDateRangeLabel() {
    if (this.selectedFYOption === "ALL") {
      this.activeDateRangeLabel = "All Time";
      return;
    }
    if (this.selectedFYOption === "CUSTOM") {
      if (this.customFromDate && this.customToDate)
        this.activeDateRangeLabel = `${this.fmtDate(this.customFromDate)} \u2013 ${this.fmtDate(this.customToDate)}`;
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
  // =========================================================================
  // FILTERING
  // =========================================================================
  applyFilters() {
    const range = this.getActiveDateRange();
    let data = [...this.allPOs];
    if (range) {
      data = data.filter((po) => {
        if (!po.createdDate)
          return false;
        const d = new Date(po.createdDate);
        return d >= range.from && d <= range.to;
      });
    }
    if (this.statusFilter !== "ALL") {
      data = data.filter((po) => po.status === this.statusFilter);
    }
    if (this.supplierFilter) {
      data = data.filter((po) => po.supplierName === this.supplierFilter);
    }
    if (this.monthFilter) {
      data = data.filter((po) => {
        if (!po.createdDate)
          return false;
        const d = new Date(po.createdDate);
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
        return key === this.monthFilter;
      });
    }
    const q = this.searchText.trim().toLowerCase();
    if (q) {
      data = data.filter((po) => (po.poNumber || "").toLowerCase().includes(q) || (po.supplierName || "").toLowerCase().includes(q));
    }
    this.filteredPOs = data;
    this.currentPage = 1;
    this.rebuildChartConfigs();
  }
  // =========================================================================
  // CHART CLICK-TO-FILTER — clicking a chart segment (or its matching legend
  // row) drills the *entire* report into just that slice: KPI tiles, both pie
  // charts, the monthly trend, and the table below all recompute from the
  // narrowed set, since they're all derived from filteredPOs. Clicking the
  // same segment again — or the chip's × in the active-filter bar — clears it.
  // =========================================================================
  onSupplierChartClick(items) {
    const item = items?.[0];
    if (!item)
      return;
    const row = this.bySupplier[item.index];
    if (row)
      this.filterBySupplier(row);
  }
  onStatusChartClick(items) {
    const item = items?.[0];
    if (!item)
      return;
    const row = this.byStatus[item.index];
    if (row)
      this.filterByStatus(row);
  }
  onMonthChartClick(items) {
    const item = items?.[0];
    if (!item)
      return;
    const row = this.monthlyTrend[item.index];
    if (row)
      this.filterByMonth(row);
  }
  /** Shared by both the pie slice click and the matching legend-row click, so either one filters the table the same way. */
  filterBySupplier(row) {
    if (row.label.startsWith("Other"))
      return;
    this.supplierFilter = this.supplierFilter === row.label ? null : row.label;
    this.applyFilters();
  }
  filterByStatus(row) {
    this.statusFilter = this.statusFilter === row.label ? "ALL" : row.label;
    this.applyFilters();
  }
  filterByMonth(row) {
    this.monthFilter = this.monthFilter === row.key ? null : row.key;
    this.applyFilters();
  }
  get hasClickFilters() {
    return !!this.supplierFilter || !!this.monthFilter || this.statusFilter !== "ALL";
  }
  clearSupplierFilter() {
    this.supplierFilter = null;
    this.applyFilters();
  }
  clearStatusFilter() {
    this.statusFilter = "ALL";
    this.applyFilters();
  }
  clearMonthFilter() {
    this.monthFilter = null;
    this.applyFilters();
  }
  clearAllClickFilters() {
    this.supplierFilter = null;
    this.statusFilter = "ALL";
    this.monthFilter = null;
    this.applyFilters();
  }
  get monthFilterLabel() {
    if (!this.monthFilter)
      return "";
    return this.monthlyTrend.find((m) => m.key === this.monthFilter)?.label || this.monthFilter;
  }
  // =========================================================================
  // KPI TILES — committed value counts every non-cancelled/rejected PO in the
  // filtered range; cancelled and rejected orders never became real spend.
  // =========================================================================
  get committedPOs() {
    return this.filteredPOs.filter((po) => !["CANCELLED", "REJECTED", "DRAFT"].includes(po.status));
  }
  get totalPOCount() {
    return this.filteredPOs.length;
  }
  get totalCommittedValue() {
    return this.sum(this.committedPOs, "grandTotal");
  }
  get totalPaidValue() {
    return this.sum(this.filteredPOs, "totalPaidAmount");
  }
  get totalOutstandingValue() {
    const v = this.totalCommittedValue - this.totalPaidValue;
    return v > 0 ? v : 0;
  }
  get activeSupplierCount() {
    return new Set(this.committedPOs.map((po) => po.supplierName)).size;
  }
  get averagePOValue() {
    const n = this.committedPOs.length;
    return n > 0 ? this.totalCommittedValue / n : 0;
  }
  sum(list, field) {
    return list.reduce((total, item) => total + (Number(item[field]) || 0), 0);
  }
  // =========================================================================
  // BREAKDOWNS — sorted rows computed on the fly, fed to both the pie charts
  // below and the clickable legend list next to each one (so a click on
  // either the slice or the matching list row filters the same way).
  // =========================================================================
  breakdownBy(keyFn) {
    const map = /* @__PURE__ */ new Map();
    this.committedPOs.forEach((po) => {
      const key = keyFn(po) || "Unspecified";
      const entry = map.get(key) || { count: 0, value: 0 };
      entry.count += 1;
      entry.value += Number(po.grandTotal) || 0;
      map.set(key, entry);
    });
    const total = this.totalCommittedValue;
    const rows = Array.from(map.entries()).map(([label, v]) => ({
      label,
      count: v.count,
      value: v.value,
      percent: total > 0 ? Math.round(v.value / total * 100) : 0
    })).sort((a, b) => b.value - a.value);
    return rows;
  }
  get bySupplier() {
    const rows = this.breakdownBy((po) => po.supplierName);
    return this.capWithOther(rows, 6);
  }
  get byStatus() {
    return this.breakdownBy((po) => po.status);
  }
  /** Top N rows kept individually, the rest folded into a single "Other" row — same
   *  convention the old spend-analysis screen used, just without the SVG machinery. */
  capWithOther(rows, topN) {
    if (rows.length <= topN)
      return rows;
    const top = rows.slice(0, topN);
    const rest = rows.slice(topN);
    const other = {
      label: `Other (${rest.length})`,
      count: rest.reduce((s, r) => s + r.count, 0),
      value: rest.reduce((s, r) => s + r.value, 0),
      percent: rest.reduce((s, r) => s + r.percent, 0)
    };
    return [...top, other];
  }
  get maxBreakdownValue() {
    const rows = [...this.bySupplier];
    return rows.reduce((m, r) => Math.max(m, r.value), 0);
  }
  barWidthPercent(row) {
    const max = this.maxBreakdownValue;
    if (!max)
      return 0;
    const pct = row.value / max * 100;
    return pct > 0 && pct < 2 ? 2 : pct;
  }
  // ── Monthly trend — committed value by calendar month, oldest first ────────
  get monthlyTrend() {
    const map = /* @__PURE__ */ new Map();
    this.committedPOs.forEach((po) => {
      if (!po.createdDate)
        return;
      const d = new Date(po.createdDate);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      map.set(key, (map.get(key) || 0) + (Number(po.grandTotal) || 0));
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b)).map(([key, value]) => {
      const [y, m] = key.split("-");
      const label = new Date(Number(y), Number(m) - 1, 1).toLocaleDateString("en-GB", { month: "short", year: "2-digit" });
      return { key, label, value };
    });
  }
  /** Called once at the end of applyFilters() — the single place all three charts' source data can change. */
  rebuildChartConfigs() {
    const supplierRows = this.bySupplier;
    this.supplierChartData = {
      labels: supplierRows.map((r) => r.label),
      datasets: [{
        data: supplierRows.map((r) => r.value),
        backgroundColor: supplierRows.map((r, i) => r.label.startsWith("Other") ? "#cfd3e6" : this.chartPalette[i % this.chartPalette.length]),
        borderColor: "#fff",
        borderWidth: 2
      }]
    };
    this.supplierChartOptions = this.buildPieOptions(supplierRows);
    const statusRows = this.byStatus;
    this.statusChartData = {
      labels: statusRows.map((r) => r.label),
      datasets: [{
        data: statusRows.map((r) => r.value),
        backgroundColor: statusRows.map((r) => this.statusColorMap[r.label] || "#94a3b8"),
        borderColor: "#fff",
        borderWidth: 2
      }]
    };
    this.statusChartOptions = this.buildPieOptions(statusRows);
    const monthRows = this.monthlyTrend;
    this.monthChartData = {
      labels: monthRows.map((r) => r.label),
      datasets: [{
        label: "Committed Spend",
        data: monthRows.map((r) => r.value),
        backgroundColor: monthRows.map((r) => r.key === this.monthFilter ? "#4c1d95" : "#6c63ff"),
        borderRadius: 4,
        maxBarThickness: 42
      }]
    };
    this.monthChartOptions = {
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (ctx) => ` ${this.full(ctx.parsed.y)}` } }
      },
      scales: {
        y: { ticks: { callback: (v) => this.compact(Number(v)) } }
      },
      onHover: (evt, elements) => {
        const el = evt?.native?.target;
        if (el)
          el.style.cursor = elements.length ? "pointer" : "default";
      }
    };
  }
  buildPieOptions(rows) {
    const totalVal = this.totalCommittedValue;
    return {
      // The wrapper div is a fixed 180x180 square (see .chart-pie-wrap) — let the
      // canvas fill it exactly rather than Chart.js trying to compute its own
      // aspect ratio, which is what was rendering these as thin slivers inside
      // the flex layout next to the legend list.
      maintainAspectRatio: false,
      plugins: {
        // The breakdown list beside each chart already acts as a clickable legend
        // with count/value/percent — showing Chart.js's own legend too would just
        // repeat the same labels a second time.
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const row = rows[ctx.dataIndex];
              const pct = totalVal > 0 ? Math.round(row.value / totalVal * 100) : 0;
              return ` ${row.label}: ${this.full(row.value)} (${pct}%)`;
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
  }
  // =========================================================================
  // DISPLAY
  // =========================================================================
  compact(value) {
    const n = Number(value) || 0;
    if (n >= 1e7)
      return "\u20B9" + (n / 1e7).toFixed(2) + " Cr";
    if (n >= 1e5)
      return "\u20B9" + (n / 1e5).toFixed(2) + " L";
    if (n >= 1e3)
      return "\u20B9" + (n / 1e3).toFixed(1) + "K";
    return "\u20B9" + n.toFixed(0);
  }
  full(value) {
    return "\u20B9" + (Number(value) || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  statusColor(status) {
    switch (status) {
      case "DRAFT":
        return "secondary";
      case "PENDING_APPROVAL":
        return "warning";
      case "APPROVED":
        return "info";
      case "RELEASED":
      case "COMPLETED":
      case "CLOSED":
        return "success";
      case "REJECTED":
      case "FORECLOSED":
        return "danger";
      default:
        return "primary";
    }
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
  viewPO(po) {
    this.router.navigate(["/po-details", po.id]);
  }
  unwrapList(res) {
    if (Array.isArray(res))
      return res;
    if (Array.isArray(res?.data))
      return res.data;
    if (Array.isArray(res?.data?.content))
      return res.data.content;
    return [];
  }
  trackById(_i, row) {
    return row?.id;
  }
};
_SpendAnalysisComponent.\u0275fac = function SpendAnalysisComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpendAnalysisComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router));
};
_SpendAnalysisComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpendAnalysisComponent, selectors: [["app-spend-analysis"]], decls: 30, vars: 9, consts: [[1, "sa-page"], [1, "row", "mb-3", "align-items-center"], [1, "col-md-8"], [1, "page-title", "mb-1"], [1, "page-subtitle", "mb-0"], [1, "col-md-4", "text-end"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click", "disabled"], [1, "card", "mb-4"], [1, "card-body"], [1, "row", "align-items-end", "g-2"], [1, "col-md-4"], [1, "form-label"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "change", "ngModel"], ["value", "ALL"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "CUSTOM"], ["class", "col-md-3", 4, "ngIf"], [1, "col-md-5", "text-end"], [1, "text-muted", "small"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [3, "value"], [1, "col-md-3"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "change", "ngModel"], [1, "alert", "alert-danger"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "text-muted", "mt-3"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-md-3"], [1, "stat-card"], [1, "stat-icon-wrap", "stat-purple"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 2h6l1 4H8l1-4Z"], ["d", "M4 6h16l-1.5 14.5A2 2 0 0 1 16.5 22h-9A2 2 0 0 1 5.5 20.5L4 6Z"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon-wrap", "stat-teal"], ["d", "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], [1, "stat-value", "stat-value-sm"], [1, "stat-icon-wrap", "stat-green"], ["d", "M20 6 9 17l-5-5"], [1, "stat-icon-wrap", "stat-hold"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], [1, "col-md-6"], [1, "mini-stat"], [1, "mini-stat-label"], [1, "mini-stat-value"], [1, "row", "g-4", "mb-4"], [1, "card", "h-100"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted", "fw-normal"], ["class", "text-muted small py-3", 4, "ngIf"], ["class", "chart-legend-layout", 4, "ngIf"], ["class", "month-chart-wrap", 4, "ngIf"], ["class", "active-filter-bar mb-3", 4, "ngIf"], [1, "card", "mb-3"], ["placeholder", "PO number or supplier", 1, "form-control", "form-control-sm", 3, "ngModelChange", "input", "ngModel"], [1, "col-md-3", "text-end"], [1, "card", "po-style-card"], ["class", "text-center py-5 text-muted", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "text-muted", "small", "py-3"], [1, "chart-legend-layout"], [1, "chart-pie-wrap"], ["type", "pie", 3, "getElementAtEvent", "data", "options"], [1, "chart-legend-list"], ["class", "breakdown-row breakdown-clickable", 3, "breakdown-active", "click", 4, "ngFor", "ngForOf"], [1, "breakdown-row", "breakdown-clickable", 3, "click"], [1, "d-flex", "justify-content-between", "mb-1"], [1, "breakdown-label"], [1, "breakdown-value"], [1, "breakdown-track"], [1, "breakdown-fill", "fill-purple"], ["class", "status-chip-row breakdown-clickable", 3, "breakdown-active", "click", 4, "ngFor", "ngForOf"], [1, "status-chip-row", "breakdown-clickable", 3, "click"], [1, "badge", "me-2", 3, "ngClass"], [1, "month-chart-wrap"], ["type", "bar", 3, "getElementAtEvent", "data", "options"], [1, "active-filter-bar", "mb-3"], [1, "text-muted", "small", "me-2"], [1, "bi", "bi-funnel-fill", "me-1"], ["class", "filter-chip", 4, "ngIf"], [1, "btn", "btn-link", "btn-sm", "text-decoration-none", 3, "click"], [1, "filter-chip"], [1, "bi", "bi-x-lg", 3, "click"], [1, "text-center", "py-5", "text-muted"], [1, "table-responsive"], [1, "px-4", "pt-3", "pb-2", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold", "text-dark", "mb-0"], [1, "bi", "bi-table", "me-2", "text-primary"], [1, "text-muted"], [1, "table", "po-table", "mb-0"], [1, "table-header"], [1, "text-end"], [1, "text-center"], ["class", "po-main-row", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "pagination-bar", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "px-4", "py-3"], [1, "d-flex", "align-items-center", "gap-3", "flex-wrap"], [1, "d-flex", "align-items-center", "gap-2"], [1, "text-muted", "small", "mb-0", "text-nowrap"], [1, "page-size-group"], ["class", "page-size-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "gap-1"], ["title", "First page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-left"], ["title", "Previous page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [4, "ngFor", "ngForOf"], ["title", "Next page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], ["title", "Last page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-right"], [1, "po-main-row", 3, "click"], ["href", "javascript:void(0)", 1, "po-number-link"], [1, "bi", "bi-file-earmark-text", "me-1"], [1, "text-muted", "small", "mt-1"], [1, "fw-bold", "text-success", "fs-6"], [1, "badge", 3, "ngClass"], [1, "badge"], [1, "page-size-btn", 3, "click"], ["class", "page-ellipsis", 4, "ngIf"], ["class", "page-num-btn", 3, "active", "click", 4, "ngIf"], [1, "page-ellipsis"], [1, "page-num-btn", 3, "click"]], template: function SpendAnalysisComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
    \u0275\u0275text(4, "Purchase Order Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, " Our purchase orders and where the money is going \u2014 nothing else. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
    \u0275\u0275listener("click", function SpendAnalysisComponent_Template_button_click_8_listener() {
      return ctx.load();
    });
    \u0275\u0275text(9, " Refresh ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "label", 11);
    \u0275\u0275text(15, "Financial Year / Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function SpendAnalysisComponent_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedFYOption, $event) || (ctx.selectedFYOption = $event);
      return $event;
    });
    \u0275\u0275listener("change", function SpendAnalysisComponent_Template_select_change_16_listener() {
      return ctx.onFYOptionChange();
    });
    \u0275\u0275elementStart(17, "option", 13);
    \u0275\u0275text(18, "All Time");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, SpendAnalysisComponent_option_19_Template, 2, 2, "option", 14);
    \u0275\u0275elementStart(20, "option", 15);
    \u0275\u0275text(21, "Custom Range");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, SpendAnalysisComponent_div_22_Template, 4, 1, "div", 16)(23, SpendAnalysisComponent_div_23_Template, 4, 1, "div", 16);
    \u0275\u0275elementStart(24, "div", 17)(25, "span", 18);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(27, SpendAnalysisComponent_div_27_Template, 2, 1, "div", 19)(28, SpendAnalysisComponent_div_28_Template, 4, 0, "div", 20)(29, SpendAnalysisComponent_ng_container_29_Template, 106, 20, "ng-container", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedFYOption);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.financialYearOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.selectedFYOption === "CUSTOM");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedFYOption === "CUSTOM");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.activeDateRangeLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ChartjsComponent, DecimalPipe, DatePipe], styles: ["\n\n.sa-page[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  margin-bottom: 0.25rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px 22px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  height: 100%;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.11);\n}\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  flex-shrink: 0;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6c63ff,\n      #9b59b6);\n}\n.stat-teal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #43cea2,\n      #185a9d);\n}\n.stat-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #56ab2f,\n      #a8e063);\n}\n.stat-hold[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f7971e,\n      #ffd200);\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 0;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1a2e;\n  line-height: 1.1;\n  letter-spacing: -0.5px;\n}\n.stat-value-sm[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 2px;\n}\n.mini-stat[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  border-radius: 10px;\n  padding: 12px 18px;\n}\n.mini-stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.mini-stat-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.breakdown-row[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.breakdown-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.breakdown-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.breakdown-value[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.breakdown-track[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 4px;\n  background: var(--cui-tertiary-bg, #f1f2f5);\n  overflow: hidden;\n}\n.breakdown-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.4s ease;\n}\n.fill-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #6c63ff,\n      #9b59b6);\n}\n.status-chip-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--cui-border-color, #eef0f4);\n}\n.status-chip-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.chart-legend-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n.chart-pie-wrap[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  flex-shrink: 0;\n  position: relative;\n}\n.chart-pie-wrap[_ngcontent-%COMP%]   c-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.chart-legend-list[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.breakdown-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 8px;\n  padding: 6px 8px;\n  margin: -6px -8px 8px -8px;\n  transition: background 0.15s ease;\n}\n.breakdown-clickable[_ngcontent-%COMP%]:hover {\n  background: var(--cui-tertiary-bg, #f5f6fa);\n}\n.breakdown-clickable.breakdown-active[_ngcontent-%COMP%] {\n  background: #eef0ff;\n  box-shadow: inset 3px 0 0 #6c63ff;\n}\n.status-chip-row.breakdown-clickable[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 8px;\n  border-radius: 8px;\n}\n.month-chart-wrap[_ngcontent-%COMP%] {\n  height: 220px;\n  position: relative;\n  overflow: hidden;\n}\n.month-chart-wrap[_ngcontent-%COMP%]   c-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.active-filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid var(--cui-border-color, #eef0f4);\n  border-radius: 10px;\n  padding: 10px 14px;\n}\n.filter-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #eef0ff;\n  color: #4c1d95;\n  border-radius: 20px;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.filter-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 0.7rem;\n  opacity: 0.7;\n}\n.filter-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.po-style-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.po-table[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  border-collapse: collapse;\n}\n.table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #e8eaf6 !important;\n  color: #1a237e !important;\n  font-weight: 700;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 12px 14px;\n  border-bottom: 2px solid #c5cae9 !important;\n}\n.po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  vertical-align: middle;\n  border-top: 1px solid #e9ecef !important;\n  border-bottom: none !important;\n}\n.po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  border-top: none !important;\n}\n.po-main-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f9ff !important;\n}\n.po-number-link[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1976d2;\n  cursor: pointer;\n  text-decoration: none;\n}\n.po-number-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.pagination-bar[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef;\n  background: #fafbff;\n}\n.page-size-group[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.page-size-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: none;\n  border-right: 1px solid #d0d5dd;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #555;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  line-height: 1;\n}\n.page-size-btn[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.page-size-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  color: #1976d2;\n}\n.page-size-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-weight: 700;\n}\n.page-num-btn[_ngcontent-%COMP%] {\n  min-width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #444;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  padding: 0 4px;\n}\n.page-num-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #1976d2;\n}\n.page-num-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border-color: #667eea;\n  color: #fff;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);\n}\n.page-nav-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #555;\n  font-size: 0.85rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.page-nav-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #667eea;\n}\n.page-nav-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.page-ellipsis[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  color: #aaa;\n  font-size: 0.9rem;\n  line-height: 34px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media (max-width: 768px) {\n  .pagination-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n  .page-size-btn[_ngcontent-%COMP%] {\n    padding: 5px 9px;\n  }\n}\n/*# sourceMappingURL=spend-analysis.component.css.map */"] });
var SpendAnalysisComponent = _SpendAnalysisComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpendAnalysisComponent, [{
    type: Component,
    args: [{ selector: "app-spend-analysis", standalone: true, imports: [CommonModule, FormsModule, ChartjsComponent], template: `<div class="sa-page">

  <div class="row mb-3 align-items-center">
    <div class="col-md-8">
      <h4 class="page-title mb-1">Purchase Order Report</h4>
      <p class="page-subtitle mb-0">
        Our purchase orders and where the money is going \u2014 nothing else.
      </p>
    </div>
    <div class="col-md-4 text-end">
      <button class="btn btn-outline-secondary btn-sm" (click)="load()" [disabled]="isLoading">
        Refresh
      </button>
    </div>
  </div>


  <!-- ===================== DATE FILTER ===================== -->
  <div class="card mb-4">
    <div class="card-body">
      <div class="row align-items-end g-2">
        <div class="col-md-4">
          <label class="form-label">Financial Year / Period</label>
          <select class="form-select form-select-sm" [(ngModel)]="selectedFYOption" (change)="onFYOptionChange()">
            <option value="ALL">All Time</option>
            <option *ngFor="let fy of financialYearOptions" [value]="fy.value">{{ fy.label }}</option>
            <option value="CUSTOM">Custom Range</option>
          </select>
        </div>
        <div class="col-md-3" *ngIf="selectedFYOption === 'CUSTOM'">
          <label class="form-label">From</label>
          <input type="date" class="form-control form-control-sm" [(ngModel)]="customFromDate" (change)="onFYOptionChange()">
        </div>
        <div class="col-md-3" *ngIf="selectedFYOption === 'CUSTOM'">
          <label class="form-label">To</label>
          <input type="date" class="form-control form-control-sm" [(ngModel)]="customToDate" (change)="onFYOptionChange()">
        </div>
        <div class="col-md-5 text-end">
          <span class="text-muted small">{{ activeDateRangeLabel }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="alert alert-danger" *ngIf="errorMessage">{{ errorMessage }}</div>

  <div class="text-center py-5" *ngIf="isLoading">
    <div class="spinner-border text-primary"></div>
    <p class="text-muted mt-3">Loading purchase orders\u2026</p>
  </div>

  <ng-container *ngIf="!isLoading">

    <!-- ===================== KPI TILES ===================== -->
    <div class="row g-3 mb-4">
      <div class="col-6 col-md-3">
        <div class="stat-card">
          <div class="stat-icon-wrap stat-purple">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2h6l1 4H8l1-4Z"/><path d="M4 6h16l-1.5 14.5A2 2 0 0 1 16.5 22h-9A2 2 0 0 1 5.5 20.5L4 6Z"/></svg>
          </div>
          <div class="stat-info">
            <div class="stat-value">{{ totalPOCount }}</div>
            <div class="stat-label">Purchase Orders</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-card">
          <div class="stat-icon-wrap stat-teal">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div class="stat-info">
            <div class="stat-value stat-value-sm">{{ compact(totalCommittedValue) }}</div>
            <div class="stat-label">Committed Spend</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-card">
          <div class="stat-icon-wrap stat-green">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
          <div class="stat-info">
            <div class="stat-value stat-value-sm">{{ compact(totalPaidValue) }}</div>
            <div class="stat-label">Paid to Suppliers</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-card">
          <div class="stat-icon-wrap stat-hold">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <div class="stat-info">
            <div class="stat-value stat-value-sm">{{ compact(totalOutstandingValue) }}</div>
            <div class="stat-label">Outstanding</div>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-3 mb-4">
      <div class="col-md-6">
        <div class="mini-stat">
          <span class="mini-stat-label">Active Suppliers</span>
          <span class="mini-stat-value">{{ activeSupplierCount }}</span>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mini-stat">
          <span class="mini-stat-label">Average PO Value</span>
          <span class="mini-stat-value">{{ compact(averagePOValue) }}</span>
        </div>
      </div>
    </div>

    <div class="row g-4 mb-4">

      <!-- ===================== SPEND BY SUPPLIER ===================== -->
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-header d-flex justify-content-between align-items-center">
            <strong>Spend by Supplier</strong>
            <small class="text-muted fw-normal">Click a slice to filter the table</small>
          </div>
          <div class="card-body">
            <div class="text-muted small py-3" *ngIf="bySupplier.length === 0">No committed spend in this period.</div>
            <div class="chart-legend-layout" *ngIf="bySupplier.length > 0">
              <div class="chart-pie-wrap">
                <c-chart type="pie" [data]="supplierChartData" [options]="supplierChartOptions"
                         (getElementAtEvent)="onSupplierChartClick($event)"></c-chart>
              </div>
              <div class="chart-legend-list">
                <div class="breakdown-row breakdown-clickable" *ngFor="let row of bySupplier"
                     [class.breakdown-active]="supplierFilter === row.label"
                     (click)="filterBySupplier(row)">
                  <div class="d-flex justify-content-between mb-1">
                    <span class="breakdown-label">{{ row.label }}</span>
                    <span class="breakdown-value">{{ compact(row.value) }} \xB7 {{ row.percent }}%</span>
                  </div>
                  <div class="breakdown-track">
                    <div class="breakdown-fill fill-purple" [style.width.%]="barWidthPercent(row)"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===================== BY STATUS ===================== -->
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-header d-flex justify-content-between align-items-center">
            <strong>PO Status Breakdown</strong>
            <small class="text-muted fw-normal">Click a slice to filter the table</small>
          </div>
          <div class="card-body">
            <div class="text-muted small py-3" *ngIf="byStatus.length === 0">No committed POs in this period.</div>
            <div class="chart-legend-layout" *ngIf="byStatus.length > 0">
              <div class="chart-pie-wrap">
                <c-chart type="pie" [data]="statusChartData" [options]="statusChartOptions"
                         (getElementAtEvent)="onStatusChartClick($event)"></c-chart>
              </div>
              <div class="chart-legend-list">
                <div class="status-chip-row breakdown-clickable" *ngFor="let row of byStatus"
                     [class.breakdown-active]="statusFilter === row.label"
                     (click)="filterByStatus(row)">
                  <span class="badge me-2" [ngClass]="'bg-' + statusColor(row.label)">{{ row.label }}</span>
                  <span class="text-muted small">{{ row.count }} PO(s) \xB7 {{ compact(row.value) }} \xB7 {{ row.percent }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ===================== MONTHLY TREND ===================== -->
    <div class="card mb-4">
      <div class="card-header d-flex justify-content-between align-items-center">
        <strong>Committed Spend by Month</strong>
        <small class="text-muted fw-normal">Click a bar to filter the table</small>
      </div>
      <div class="card-body">
        <div class="text-muted small py-3" *ngIf="monthlyTrend.length === 0">No committed spend to chart yet.</div>
        <div class="month-chart-wrap" *ngIf="monthlyTrend.length > 0">
          <c-chart type="bar" [data]="monthChartData" [options]="monthChartOptions"
                   (getElementAtEvent)="onMonthChartClick($event)"></c-chart>
        </div>
      </div>
    </div>

    <!-- ===================== ACTIVE FILTERS ===================== -->
    <div class="active-filter-bar mb-3" *ngIf="hasClickFilters">
      <span class="text-muted small me-2"><i class="bi bi-funnel-fill me-1"></i>Filtered by:</span>
      <span class="filter-chip" *ngIf="supplierFilter">
        Supplier: {{ supplierFilter }}
        <i class="bi bi-x-lg" (click)="clearSupplierFilter()"></i>
      </span>
      <span class="filter-chip" *ngIf="statusFilter !== 'ALL'">
        Status: {{ statusFilter }}
        <i class="bi bi-x-lg" (click)="clearStatusFilter()"></i>
      </span>
      <span class="filter-chip" *ngIf="monthFilter">
        Month: {{ monthFilterLabel }}
        <i class="bi bi-x-lg" (click)="clearMonthFilter()"></i>
      </span>
      <button class="btn btn-link btn-sm text-decoration-none" (click)="clearAllClickFilters()">Clear all</button>
    </div>

    <!-- ===================== FILTERS + PO TABLE ===================== -->
    <div class="card mb-3">
      <div class="card-body">
        <div class="row align-items-end g-2">
          <div class="col-md-3">
            <label class="form-label">Status</label>
            <select class="form-select form-select-sm" [(ngModel)]="statusFilter" (change)="applyFilters()">
              <option *ngFor="let s of statusOptions" [value]="s">{{ s }}</option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Search</label>
            <input class="form-control form-control-sm" [(ngModel)]="searchText" (input)="applyFilters()"
                   placeholder="PO number or supplier">
          </div>
          <div class="col-md-3 text-end">
            <span class="text-muted small">{{ filteredPOs.length }} of {{ allPOs.length }} PO(s)</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card po-style-card">
      <div class="text-center py-5 text-muted" *ngIf="filteredPOs.length === 0">
        No purchase orders match the current filters.
      </div>
      <div class="table-responsive" *ngIf="filteredPOs.length > 0">

        <!-- Table header with result count -->
        <div class="px-4 pt-3 pb-2 d-flex align-items-center justify-content-between">
          <h5 class="fw-bold text-dark mb-0">
            <i class="bi bi-table me-2 text-primary"></i>Purchase Orders
          </h5>
          <small class="text-muted">{{ filteredPOs.length }} result{{ filteredPOs.length !== 1 ? 's' : '' }}</small>
        </div>

        <table class="table po-table mb-0">
          <thead class="table-header">
            <tr>
              <th>PO Number / Details</th>
              <th>Supplier</th>
              <th class="text-end">Grand Total</th>
              <th class="text-center">Status</th>
              <th class="text-center">Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr class="po-main-row" *ngFor="let po of paginatedPOs; trackBy: trackById" (click)="viewPO(po)">
              <td>
                <a class="po-number-link" href="javascript:void(0)">
                  <i class="bi bi-file-earmark-text me-1"></i>{{ po.poNumber }}
                </a>
                <div class="text-muted small mt-1">Created {{ po.createdDate | date:'dd MMM yy' }}</div>
              </td>
              <td>{{ po.supplierName }}</td>
              <td class="text-end">
                <div class="fw-bold text-success fs-6">{{ po.currencySymbol || '\u20B9' }}{{ po.grandTotal | number:'1.2-2' }}</div>
              </td>
              <td class="text-center"><span class="badge" [ngClass]="'bg-' + statusColor(po.status)">{{ po.status }}</span></td>
              <td class="text-center">
                <span class="badge"
                      [class.bg-success]="po.paymentStatus === 'PAID'"
                      [class.bg-warning]="po.paymentStatus === 'PARTIALLY_PAID'"
                      [class.bg-secondary]="!po.paymentStatus || po.paymentStatus === 'UNPAID'">
                  {{ paymentStatusLabel(po.paymentStatus) }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- ===== PAGINATION BAR ===== -->
        <div class="pagination-bar d-flex align-items-center justify-content-between flex-wrap gap-3 px-4 py-3">
          <div class="d-flex align-items-center gap-3 flex-wrap">
            <span class="text-muted small">
              Showing <strong>{{ startIndex }}\u2013{{ endIndex }}</strong> of <strong>{{ filteredPOs.length }}</strong> orders
            </span>
            <div class="d-flex align-items-center gap-2">
              <label class="text-muted small mb-0 text-nowrap">Rows per page:</label>
              <div class="page-size-group">
                <button *ngFor="let size of pageSizeOptions" class="page-size-btn"
                        [class.active]="pageSize === size" (click)="onPageSizeChange(size)">{{ size }}</button>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center gap-1">
            <button class="page-nav-btn" [disabled]="currentPage === 1" (click)="goToPage(1)" title="First page">
              <i class="bi bi-chevron-double-left"></i>
            </button>
            <button class="page-nav-btn" [disabled]="currentPage === 1" (click)="goToPage(currentPage - 1)" title="Previous page">
              <i class="bi bi-chevron-left"></i>
            </button>
            <ng-container *ngFor="let page of pageNumbers">
              <span *ngIf="page === -1" class="page-ellipsis">\u2026</span>
              <button *ngIf="page !== -1" class="page-num-btn" [class.active]="currentPage === page" (click)="goToPage(page)">{{ page }}</button>
            </ng-container>
            <button class="page-nav-btn" [disabled]="currentPage === totalPages" (click)="goToPage(currentPage + 1)" title="Next page">
              <i class="bi bi-chevron-right"></i>
            </button>
            <button class="page-nav-btn" [disabled]="currentPage === totalPages" (click)="goToPage(totalPages)" title="Last page">
              <i class="bi bi-chevron-double-right"></i>
            </button>
          </div>
        </div>

      </div>
    </div>

  </ng-container>

</div>
`, styles: ["/* src/app/views/base/spend-analysis/spend-analysis.component.css */\n.sa-page {\n  padding: 22px;\n}\n.page-title {\n  font-weight: 600;\n}\n.page-subtitle {\n  font-size: 0.875rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.form-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  margin-bottom: 0.25rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px 22px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  height: 100%;\n}\n.stat-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.11);\n}\n.stat-icon-wrap {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  flex-shrink: 0;\n}\n.stat-purple {\n  background:\n    linear-gradient(\n      135deg,\n      #6c63ff,\n      #9b59b6);\n}\n.stat-teal {\n  background:\n    linear-gradient(\n      135deg,\n      #43cea2,\n      #185a9d);\n}\n.stat-green {\n  background:\n    linear-gradient(\n      135deg,\n      #56ab2f,\n      #a8e063);\n}\n.stat-hold {\n  background:\n    linear-gradient(\n      135deg,\n      #f7971e,\n      #ffd200);\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 0;\n}\n.stat-value {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1a2e;\n  line-height: 1.1;\n  letter-spacing: -0.5px;\n}\n.stat-value-sm {\n  font-size: 1.35rem;\n}\n.stat-label {\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 2px;\n}\n.mini-stat {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  border-radius: 10px;\n  padding: 12px 18px;\n}\n.mini-stat-label {\n  font-size: 0.8rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.mini-stat-value {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.breakdown-row {\n  margin-bottom: 14px;\n}\n.breakdown-row:last-child {\n  margin-bottom: 0;\n}\n.breakdown-label {\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.breakdown-value {\n  font-size: 0.8rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.breakdown-track {\n  height: 8px;\n  border-radius: 4px;\n  background: var(--cui-tertiary-bg, #f1f2f5);\n  overflow: hidden;\n}\n.breakdown-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.4s ease;\n}\n.fill-purple {\n  background:\n    linear-gradient(\n      90deg,\n      #6c63ff,\n      #9b59b6);\n}\n.status-chip-row {\n  display: flex;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--cui-border-color, #eef0f4);\n}\n.status-chip-row:last-child {\n  border-bottom: none;\n}\n.chart-legend-layout {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n.chart-pie-wrap {\n  width: 180px;\n  height: 180px;\n  flex-shrink: 0;\n  position: relative;\n}\n.chart-pie-wrap c-chart {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.chart-legend-list {\n  flex: 1;\n  min-width: 0;\n}\n.breakdown-clickable {\n  cursor: pointer;\n  border-radius: 8px;\n  padding: 6px 8px;\n  margin: -6px -8px 8px -8px;\n  transition: background 0.15s ease;\n}\n.breakdown-clickable:hover {\n  background: var(--cui-tertiary-bg, #f5f6fa);\n}\n.breakdown-clickable.breakdown-active {\n  background: #eef0ff;\n  box-shadow: inset 3px 0 0 #6c63ff;\n}\n.status-chip-row.breakdown-clickable {\n  margin: 0;\n  padding: 8px;\n  border-radius: 8px;\n}\n.month-chart-wrap {\n  height: 220px;\n  position: relative;\n  overflow: hidden;\n}\n.month-chart-wrap c-chart {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.active-filter-bar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid var(--cui-border-color, #eef0f4);\n  border-radius: 10px;\n  padding: 10px 14px;\n}\n.filter-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #eef0ff;\n  color: #4c1d95;\n  border-radius: 20px;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.filter-chip i {\n  cursor: pointer;\n  font-size: 0.7rem;\n  opacity: 0.7;\n}\n.filter-chip i:hover {\n  opacity: 1;\n}\n.po-style-card {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.po-table {\n  font-size: 0.88rem;\n  border-collapse: collapse;\n}\n.table-header th {\n  background: #e8eaf6 !important;\n  color: #1a237e !important;\n  font-weight: 700;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 12px 14px;\n  border-bottom: 2px solid #c5cae9 !important;\n}\n.po-table tbody .po-main-row {\n  cursor: pointer;\n}\n.po-table tbody .po-main-row td {\n  padding: 12px 14px;\n  vertical-align: middle;\n  border-top: 1px solid #e9ecef !important;\n  border-bottom: none !important;\n}\n.po-table tbody .po-main-row:first-child td {\n  border-top: none !important;\n}\n.po-main-row:hover td {\n  background: #f8f9ff !important;\n}\n.po-number-link {\n  font-weight: 700;\n  color: #1976d2;\n  cursor: pointer;\n  text-decoration: none;\n}\n.po-number-link:hover {\n  text-decoration: underline;\n}\n.pagination-bar {\n  border-top: 1px solid #e9ecef;\n  background: #fafbff;\n}\n.page-size-group {\n  display: flex;\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.page-size-btn {\n  background: #fff;\n  border: none;\n  border-right: 1px solid #d0d5dd;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #555;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  line-height: 1;\n}\n.page-size-btn:last-child {\n  border-right: none;\n}\n.page-size-btn:hover {\n  background: #f0f4ff;\n  color: #1976d2;\n}\n.page-size-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-weight: 700;\n}\n.page-num-btn {\n  min-width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #444;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  padding: 0 4px;\n}\n.page-num-btn:hover {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #1976d2;\n}\n.page-num-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border-color: #667eea;\n  color: #fff;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);\n}\n.page-nav-btn {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #555;\n  font-size: 0.85rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.page-nav-btn:hover:not(:disabled) {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #667eea;\n}\n.page-nav-btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.page-ellipsis {\n  padding: 0 4px;\n  color: #aaa;\n  font-size: 0.9rem;\n  line-height: 34px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media (max-width: 768px) {\n  .pagination-bar {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n  .page-size-btn {\n    padding: 5px 9px;\n  }\n}\n/*# sourceMappingURL=spend-analysis.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpendAnalysisComponent, { className: "SpendAnalysisComponent", filePath: "src/app/views/base/spend-analysis/spend-analysis.component.ts", lineNumber: 42 });
})();
export {
  SpendAnalysisComponent
};
//# sourceMappingURL=chunk-ESH4XGDF.js.map
