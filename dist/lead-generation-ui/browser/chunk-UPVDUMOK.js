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

// src/app/views/base/status-tracking/status-tracking.component.ts
function StatusTrackingComponent_option_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1);
  }
}
function StatusTrackingComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function StatusTrackingComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "c-spinner", 41);
    \u0275\u0275elementStart(2, "p", 42);
    \u0275\u0275text(3, "Loading purchase orders\u2026");
    \u0275\u0275elementEnd()();
  }
}
function StatusTrackingComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " No purchase orders match the current filters. ");
    \u0275\u0275elementEnd();
  }
}
function StatusTrackingComponent_div_74_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 70);
    \u0275\u0275listener("click", function StatusTrackingComponent_div_74_tr_21_Template_tr_click_0_listener() {
      const po_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectPO(po_r5));
    });
    \u0275\u0275elementStart(1, "td")(2, "a", 71);
    \u0275\u0275listener("click", function StatusTrackingComponent_div_74_tr_21_Template_a_click_2_listener($event) {
      const po_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewPO(po_r5, $event));
    });
    \u0275\u0275element(3, "i", 72);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 73);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 51)(11, "div", 74);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 52)(15, "span", 75);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 52)(18, "span", 75);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const po_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("table-active", (ctx_r1.selectedPO == null ? null : ctx_r1.selectedPO.id) === po_r5.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", po_r5.poNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Created ", \u0275\u0275pipeBind2(7, 11, po_r5.createdAt, "dd MMM yy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(po_r5.supplierName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", po_r5.currencySymbol, "", \u0275\u0275pipeBind2(13, 14, po_r5.grandTotal, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "bg-" + ctx_r1.statusColor(po_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(po_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "bg-" + ctx_r1.paymentColor(po_r5.paymentStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.paymentStatusLabel(po_r5.paymentStatus));
  }
}
function StatusTrackingComponent_div_74_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function StatusTrackingComponent_div_74_button_36_Template_button_click_0_listener() {
      const size_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange(size_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.pageSize === size_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r7);
  }
}
function StatusTrackingComponent_div_74_ng_container_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function StatusTrackingComponent_div_74_ng_container_42_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function StatusTrackingComponent_div_74_ng_container_42_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const page_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.currentPage === page_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r9);
  }
}
function StatusTrackingComponent_div_74_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StatusTrackingComponent_div_74_ng_container_42_span_1_Template, 2, 0, "span", 77)(2, StatusTrackingComponent_div_74_ng_container_42_button_2_Template, 2, 3, "button", 78);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const page_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", page_r9 === -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", page_r9 !== -1);
  }
}
function StatusTrackingComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "h5", 46);
    \u0275\u0275element(3, "i", 47);
    \u0275\u0275text(4, "Purchase Orders ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "table", 49)(8, "thead", 50)(9, "tr")(10, "th");
    \u0275\u0275text(11, "PO Number / Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 51);
    \u0275\u0275text(15, "Grand Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 52);
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 52);
    \u0275\u0275text(19, "Payment");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, StatusTrackingComponent_div_74_tr_21_Template, 20, 17, "tr", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 54)(23, "div", 55)(24, "span", 31);
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
    \u0275\u0275elementStart(32, "div", 56)(33, "label", 57);
    \u0275\u0275text(34, "Rows per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 58);
    \u0275\u0275template(36, StatusTrackingComponent_div_74_button_36_Template, 2, 3, "button", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 60)(38, "button", 61);
    \u0275\u0275listener("click", function StatusTrackingComponent_div_74_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(1));
    });
    \u0275\u0275element(39, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 63);
    \u0275\u0275listener("click", function StatusTrackingComponent_div_74_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(41, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, StatusTrackingComponent_div_74_ng_container_42_Template, 3, 2, "ng-container", 65);
    \u0275\u0275elementStart(43, "button", 66);
    \u0275\u0275listener("click", function StatusTrackingComponent_div_74_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(44, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 68);
    \u0275\u0275listener("click", function StatusTrackingComponent_div_74_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.totalPages));
    });
    \u0275\u0275element(46, "i", 69);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.filtered.length, " result", ctx_r1.filtered.length !== 1 ? "s" : "");
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.paginated)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.startIndex, "\u2013", ctx_r1.endIndex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.filtered.length);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function StatusTrackingComponent_c_col_75_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "span", 94);
    \u0275\u0275elementStart(2, "span", 95);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stage_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("done", ctx_r1.isStageDone(ctx_r1.selectedPO, i_r12));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stage_r11);
  }
}
function StatusTrackingComponent_c_col_75_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91);
    \u0275\u0275template(2, StatusTrackingComponent_c_col_75_div_8_div_2_Template, 4, 3, "div", 92);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.lifecycle);
  }
}
function StatusTrackingComponent_c_col_75_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275text(1, " This PO left the normal workflow \u2014 current status ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ". ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedPO.status);
  }
}
function StatusTrackingComponent_c_col_75_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275element(1, "c-spinner", 98);
    \u0275\u0275elementEnd();
  }
}
function StatusTrackingComponent_c_col_75_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " No recorded events for this PO yet. ");
    \u0275\u0275elementEnd();
  }
}
function StatusTrackingComponent_c_col_75_ul_49_li_1_c_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-badge", 112);
    \u0275\u0275text(1, "Failed");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("color", ctx_r1.eventColor(event_r13));
  }
}
function StatusTrackingComponent_c_col_75_ul_49_li_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", event_r13.actorRole);
  }
}
function StatusTrackingComponent_c_col_75_ul_49_li_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r13.remarks);
  }
}
function StatusTrackingComponent_c_col_75_ul_49_li_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("From ", event_r13.ipAddress);
  }
}
function StatusTrackingComponent_c_col_75_ul_49_li_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 114);
    \u0275\u0275listener("click", function StatusTrackingComponent_c_col_75_ul_49_li_1_span_13_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const event_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleDetail(event_r13));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isExpanded(event_r13) ? "\u25BE Hide details" : "\u25B8 What changed", " ");
  }
}
function StatusTrackingComponent_c_col_75_ul_49_li_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 116)(2, "div")(3, "div", 117);
    \u0275\u0275text(4, "Before");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre", 118);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "div", 117);
    \u0275\u0275text(9, "After");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "pre", 118);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.prettyJson(event_r13.oldValue));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.prettyJson(event_r13.newValue));
  }
}
function StatusTrackingComponent_c_col_75_ul_49_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 101)(1, "div", 102)(2, "div", 103);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StatusTrackingComponent_c_col_75_ul_49_li_1_c_badge_5_Template, 2, 1, "c-badge", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 105);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 106);
    \u0275\u0275text(9);
    \u0275\u0275template(10, StatusTrackingComponent_c_col_75_ul_49_li_1_span_10_Template, 2, 1, "span", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, StatusTrackingComponent_c_col_75_ul_49_li_1_div_11_Template, 2, 1, "div", 108)(12, StatusTrackingComponent_c_col_75_ul_49_li_1_div_12_Template, 2, 1, "div", 109)(13, StatusTrackingComponent_c_col_75_ul_49_li_1_span_13_Template, 2, 1, "span", 110)(14, StatusTrackingComponent_c_col_75_ul_49_li_1_div_14_Template, 12, 2, "div", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-failure", event_r13.status === "FAILURE");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 11, event_r13.eventTime, "dd MMM yy, HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", event_r13.status === "FAILURE");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r13.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r13.actorName || event_r13.actorEmail || "System", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r13.actorRole);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r13.remarks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r13.ipAddress);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasSnapshot(event_r13));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isExpanded(event_r13));
  }
}
function StatusTrackingComponent_c_col_75_ul_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 99);
    \u0275\u0275template(1, StatusTrackingComponent_c_col_75_ul_49_li_1_Template, 15, 14, "li", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.timeline);
  }
}
function StatusTrackingComponent_c_col_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-col", 2)(1, "c-card")(2, "c-card-header", 81)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 82);
    \u0275\u0275listener("click", function StatusTrackingComponent_c_col_75_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectPO(ctx_r1.selectedPO));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "c-card-body");
    \u0275\u0275template(8, StatusTrackingComponent_c_col_75_div_8_Template, 3, 1, "div", 83)(9, StatusTrackingComponent_c_col_75_div_9_Template, 5, 1, "div", 84);
    \u0275\u0275elementStart(10, "c-row", 1)(11, "c-col", 25)(12, "div", 85);
    \u0275\u0275text(13, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "c-col", 25)(17, "div", 85);
    \u0275\u0275text(18, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "c-col", 25)(23, "div", 85);
    \u0275\u0275text(24, "Invoiced");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "c-col", 25)(29, "div", 85);
    \u0275\u0275text(30, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "c-col", 25)(35, "div", 85);
    \u0275\u0275text(36, "Released");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "c-col", 25)(41, "div", 85);
    \u0275\u0275text(42, "Fully Supplied");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "h6", 86);
    \u0275\u0275text(46, "History");
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, StatusTrackingComponent_c_col_75_div_47_Template, 2, 0, "div", 87)(48, StatusTrackingComponent_c_col_75_div_48_Template, 2, 0, "div", 88)(49, StatusTrackingComponent_c_col_75_ul_49_Template, 2, 1, "ul", 89);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("md", 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedPO.poNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.lifecycleIndex(ctx_r1.selectedPO) >= 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lifecycleIndex(ctx_r1.selectedPO) < 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("md", 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedPO.supplierName);
    \u0275\u0275advance();
    \u0275\u0275property("md", 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedPO.currencySymbol, "", \u0275\u0275pipeBind2(21, 22, ctx_r1.selectedPO.grandTotal, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("md", 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedPO.currencySymbol, "", \u0275\u0275pipeBind2(27, 25, ctx_r1.selectedPO.totalInvoicedAmount, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("md", 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedPO.currencySymbol, "", \u0275\u0275pipeBind2(33, 28, ctx_r1.selectedPO.totalPaidAmount, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("md", 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedPO.releasedAt ? \u0275\u0275pipeBind2(39, 31, ctx_r1.selectedPO.releasedAt, "dd MMM yy") : "Not yet");
    \u0275\u0275advance(2);
    \u0275\u0275property("md", 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedPO.fullySupplied ? "Yes" : "No");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingTimeline);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingTimeline && ctx_r1.timeline.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingTimeline && ctx_r1.timeline.length > 0);
  }
}
var _StatusTrackingComponent = class _StatusTrackingComponent {
  get totalPages() {
    return Math.max(1, Math.ceil(this.filtered.length / this.pageSize));
  }
  get paginated() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filtered.slice(start, start + this.pageSize);
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
    if (this.filtered.length === 0)
      return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }
  get endIndex() {
    return Math.min(this.currentPage * this.pageSize, this.filtered.length);
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
  constructor(dataService, messageService, router) {
    this.dataService = dataService;
    this.messageService = messageService;
    this.router = router;
    this.allPOs = [];
    this.filtered = [];
    this.isLoading = false;
    this.errorMessage = "";
    this.statusFilter = "ALL";
    this.searchText = "";
    this.currentPage = 1;
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25, 50];
    this.statusOptions = [
      "ALL",
      "DRAFT",
      "PENDING_APPROVAL",
      "APPROVED",
      "RETURNED_FOR_REVISION",
      "REJECTED",
      "RELEASED",
      "IN_PROGRESS",
      "DELIVERED",
      "COMPLETED",
      "CLOSED",
      "FORECLOSED",
      "CANCELLED"
    ];
    this.lifecycle = ["DRAFT", "RELEASED", "CLOSED"];
    this.selectedPO = null;
    this.timeline = [];
    this.isLoadingTimeline = false;
    this.expandedEvents = /* @__PURE__ */ new Set();
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading = true;
    this.errorMessage = "";
    this.dataService.getAllPurchaseOrders().subscribe({
      next: (res) => {
        this.allPOs = this.unwrapList(res);
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || "Could not load purchase orders.";
        this.allPOs = [];
        this.filtered = [];
        this.isLoading = false;
      }
    });
  }
  applyFilters() {
    let data = [...this.allPOs];
    if (this.statusFilter !== "ALL") {
      data = data.filter((po) => po.status === this.statusFilter);
    }
    const q = this.searchText.trim().toLowerCase();
    if (q) {
      data = data.filter((po) => (po.poNumber || "").toLowerCase().includes(q) || (po.supplierName || "").toLowerCase().includes(q));
    }
    this.filtered = data;
    this.currentPage = 1;
  }
  // ==================================================================
  // COUNTS
  // ==================================================================
  countBy(status) {
    return this.allPOs.filter((po) => po.status === status).length;
  }
  // No approval step in the live flow — this stays at 0 except for a PO created before
  // approval was removed and never resolved. Kept rather than deleted so that PO is still
  // visible and countable instead of silently vanishing from every tile.
  get inApprovalCount() {
    return this.countBy("PENDING_APPROVAL");
  }
  /** DRAFT is "created, not yet released" now that release needs no prior approval —
   *  this is the number that actually needs someone's attention. APPROVED is folded in
   *  for the same legacy-PO reason as inApprovalCount above. */
  get awaitingReleaseCount() {
    return this.countBy("DRAFT") + this.countBy("APPROVED");
  }
  get activeCount() {
    return this.allPOs.filter((po) => ["RELEASED", "SENT_TO_SUPPLIER", "ACKNOWLEDGED", "IN_PROGRESS", "DELIVERED", "COMPLETED"].includes(po.status)).length;
  }
  get closedCount() {
    return this.allPOs.filter((po) => ["CLOSED", "FORECLOSED"].includes(po.status)).length;
  }
  // ==================================================================
  // TIMELINE
  // ==================================================================
  selectPO(po) {
    if (this.selectedPO?.id === po.id) {
      this.selectedPO = null;
      this.timeline = [];
      return;
    }
    this.selectedPO = po;
    this.timeline = [];
    this.expandedEvents.clear();
    this.isLoadingTimeline = true;
    this.dataService.getPOStatusTimeline(po.id).subscribe({
      next: (res) => {
        const data = res?.data || {};
        if (data.po)
          this.selectedPO = data.po;
        this.timeline = data.timeline || [];
        this.isLoadingTimeline = false;
      },
      error: (err) => {
        this.isLoadingTimeline = false;
        this.messageService.showMessage("error", "Timeline unavailable", err?.error?.message || "Could not load the history for this PO.");
      }
    });
  }
  /**
   * How far along the happy path this PO is, for the progress indicator.
   * Statuses off the happy path (rejected, foreclosed) return -1 so the indicator is
   * hidden rather than showing a misleading position.
   */
  lifecycleIndex(po) {
    const status = po?.status;
    if (["REJECTED", "CANCELLED", "FORECLOSED", "RETURNED_FOR_REVISION"].includes(status))
      return -1;
    if (["PENDING_APPROVAL", "APPROVED"].includes(status))
      return this.lifecycle.indexOf("DRAFT");
    if (["SENT_TO_SUPPLIER", "ACKNOWLEDGED", "IN_PROGRESS", "DELIVERED", "COMPLETED"].includes(status)) {
      return this.lifecycle.indexOf("RELEASED");
    }
    return this.lifecycle.indexOf(status);
  }
  isStageDone(po, stageIndex) {
    const current = this.lifecycleIndex(po);
    return current >= 0 && stageIndex <= current;
  }
  // ==================================================================
  // TIMELINE DETAIL — "very detailed for every change"
  //
  // Every audit entry already carries the full before/after snapshot (the same data the
  // Audit Log screen shows) — this just surfaces it inline per event instead of making
  // someone cross-reference the Audit Log separately to see what actually changed.
  // ==================================================================
  hasSnapshot(event) {
    return !!(event?.oldValue || event?.newValue);
  }
  isExpanded(event) {
    return this.expandedEvents.has(event.id);
  }
  toggleDetail(event) {
    if (!this.hasSnapshot(event))
      return;
    if (this.expandedEvents.has(event.id))
      this.expandedEvents.delete(event.id);
    else
      this.expandedEvents.add(event.id);
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
  /** Colour by outcome first, then by how significant the action is — same rule as
   *  the Audit Log screen, so an event reads the same severity in both places. */
  eventColor(event) {
    if (event?.status === "FAILURE")
      return "danger";
    const a = event?.action || "";
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
  // ==================================================================
  // DISPLAY
  // ==================================================================
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
      case "RETURNED_FOR_REVISION":
        return "warning";
      default:
        return "primary";
    }
  }
  paymentColor(status) {
    switch (status) {
      case "PAID":
        return "success";
      case "PARTIALLY_PAID":
        return "warning";
      default:
        return "secondary";
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
  viewPO(po, event) {
    event.stopPropagation();
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
_StatusTrackingComponent.\u0275fac = function StatusTrackingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StatusTrackingComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router));
};
_StatusTrackingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusTrackingComponent, selectors: [["app-status-tracking"]], decls: 76, vars: 21, consts: [["fluid", "", 1, "status-tracking"], [1, "mb-3"], [3, "md"], [1, "page-title", "mb-1"], [1, "page-subtitle", "mb-0"], [1, "text-end", 3, "md"], ["cButton", "", "color", "secondary", "variant", "outline", "size", "sm", 3, "click", "disabled"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-md-3"], [1, "stat-card"], [1, "stat-icon-wrap", "stat-hold"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon-wrap", "stat-teal"], ["d", "M20 6 9 17l-5-5"], [1, "stat-icon-wrap", "stat-green"], ["d", "M16 3H8a2 2 0 0 0-2 2v16l6-4 6 4V5a2 2 0 0 0-2-2Z"], [1, "stat-icon-wrap", "stat-purple"], ["x", "3", "y", "11", "width", "18", "height", "10", "rx", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "align-items-end"], [1, "mb-2", 3, "md"], [1, "form-label"], ["name", "statusFilter", 1, "form-select", "form-select-sm", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "searchText", "placeholder", "PO number or supplier", 1, "form-control", "form-control-sm", 3, "ngModelChange", "input", "ngModel"], [1, "mb-2", "text-end", 3, "md"], [1, "text-muted", "small"], ["class", "alert alert-danger", 4, "ngIf"], [1, "card", "po-style-card"], ["class", "text-center py-5", 4, "ngIf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [3, "md", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [1, "text-center", "py-5"], ["color", "primary"], [1, "mt-2", "text-muted"], [1, "text-center", "py-5", "text-muted"], [1, "table-responsive"], [1, "px-4", "pt-3", "pb-2", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold", "text-dark", "mb-0"], [1, "bi", "bi-table", "me-2", "text-primary"], [1, "text-muted"], [1, "table", "po-table", "mb-0"], [1, "table-header"], [1, "text-end"], [1, "text-center"], ["class", "po-main-row", 3, "table-active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "pagination-bar", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "px-4", "py-3"], [1, "d-flex", "align-items-center", "gap-3", "flex-wrap"], [1, "d-flex", "align-items-center", "gap-2"], [1, "text-muted", "small", "mb-0", "text-nowrap"], [1, "page-size-group"], ["class", "page-size-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "gap-1"], ["title", "First page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-left"], ["title", "Previous page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [4, "ngFor", "ngForOf"], ["title", "Next page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], ["title", "Last page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-right"], [1, "po-main-row", 3, "click"], ["href", "javascript:void(0)", 1, "po-number-link", 3, "click"], [1, "bi", "bi-file-earmark-text", "me-1"], [1, "text-muted", "small", "mt-1"], [1, "fw-bold", "text-success", "fs-6"], [1, "badge", 3, "ngClass"], [1, "page-size-btn", 3, "click"], ["class", "page-ellipsis", 4, "ngIf"], ["class", "page-num-btn", 3, "active", "click", 4, "ngIf"], [1, "page-ellipsis"], [1, "page-num-btn", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center"], ["cButton", "", "color", "secondary", "variant", "ghost", "size", "sm", 3, "click"], ["class", "mb-4", 4, "ngIf"], ["class", "alert alert-warning py-2", 4, "ngIf"], [1, "fact-label"], [1, "mb-2"], ["class", "text-center py-4", 4, "ngIf"], ["class", "text-muted small", 4, "ngIf"], ["class", "timeline", 4, "ngIf"], [1, "mb-4"], [1, "stage-track"], ["class", "stage", 3, "done", 4, "ngFor", "ngForOf"], [1, "stage"], [1, "stage-dot"], [1, "stage-label"], [1, "alert", "alert-warning", "py-2"], [1, "text-center", "py-4"], ["size", "sm", "color", "primary"], [1, "timeline"], ["class", "timeline-item", 3, "is-failure", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "timeline-time"], [3, "color", 4, "ngIf"], [1, "timeline-action"], [1, "timeline-meta"], [4, "ngIf"], ["class", "timeline-meta", 4, "ngIf"], ["class", "timeline-ip", 4, "ngIf"], ["class", "timeline-toggle", 3, "click", 4, "ngIf"], ["class", "timeline-snapshot", 4, "ngIf"], [3, "color"], [1, "timeline-ip"], [1, "timeline-toggle", 3, "click"], [1, "timeline-snapshot"], [1, "snapshot-cols"], [1, "snapshot-col-label"], [1, "snapshot"]], template: function StatusTrackingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-container", 0)(1, "c-row", 1)(2, "c-col", 2)(3, "h4", 3);
    \u0275\u0275text(4, "Status Tracking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, " Where every purchase order sits in the workflow. Select a PO to replay its full history \u2014 who did what, and when. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "c-col", 5)(8, "button", 6);
    \u0275\u0275listener("click", function StatusTrackingComponent_Template_button_click_8_listener() {
      return ctx.load();
    });
    \u0275\u0275text(9, "Refresh");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 11);
    \u0275\u0275element(15, "circle", 12)(16, "path", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 14)(18, "div", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 16);
    \u0275\u0275text(21, "In Approval");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 8)(23, "div", 9)(24, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 11);
    \u0275\u0275element(26, "path", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 14)(28, "div", 15);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 16);
    \u0275\u0275text(31, "Awaiting Release");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 8)(33, "div", 9)(34, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 11);
    \u0275\u0275element(36, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "div", 14)(38, "div", 15);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 16);
    \u0275\u0275text(41, "Active with Supplier");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 8)(43, "div", 9)(44, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 11);
    \u0275\u0275element(46, "rect", 22)(47, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "div", 14)(49, "div", 15);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 16);
    \u0275\u0275text(52, "Closed / Foreclosed");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(53, "c-card", 1)(54, "c-card-body")(55, "c-row", 24)(56, "c-col", 25)(57, "label", 26);
    \u0275\u0275text(58, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function StatusTrackingComponent_Template_select_ngModelChange_59_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
      return $event;
    });
    \u0275\u0275listener("change", function StatusTrackingComponent_Template_select_change_59_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275template(60, StatusTrackingComponent_option_60_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "c-col", 25)(62, "label", 26);
    \u0275\u0275text(63, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function StatusTrackingComponent_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
      return $event;
    });
    \u0275\u0275listener("input", function StatusTrackingComponent_Template_input_input_64_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "c-col", 30)(66, "span", 31);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(68, StatusTrackingComponent_div_68_Template, 2, 1, "div", 32);
    \u0275\u0275elementStart(69, "c-row")(70, "c-col", 2)(71, "div", 33);
    \u0275\u0275template(72, StatusTrackingComponent_div_72_Template, 4, 0, "div", 34)(73, StatusTrackingComponent_div_73_Template, 2, 0, "div", 35)(74, StatusTrackingComponent_div_74_Template, 47, 13, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(75, StatusTrackingComponent_c_col_75_Template, 50, 34, "c-col", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("md", 8);
    \u0275\u0275advance(5);
    \u0275\u0275property("md", 4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.inApprovalCount);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.awaitingReleaseCount);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.activeCount);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.closedCount);
    \u0275\u0275advance(6);
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.statusOptions);
    \u0275\u0275advance();
    \u0275\u0275property("md", 6);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
    \u0275\u0275advance();
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx.filtered.length, " of ", ctx.allPOs.length, " PO(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("md", ctx.selectedPO ? 7 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filtered.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filtered.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedPO);
  }
}, dependencies: [
  CommonModule,
  NgClass,
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
  DecimalPipe,
  DatePipe
], styles: ['\n\n.status-tracking[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.status-tracking[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.status-tracking[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  margin-bottom: 0.25rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.status-tracking[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--cui-danger, #e55353);\n  font-weight: 700;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px 22px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  height: 100%;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.11);\n}\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  flex-shrink: 0;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6c63ff,\n      #9b59b6);\n}\n.stat-teal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #43cea2,\n      #185a9d);\n}\n.stat-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #56ab2f,\n      #a8e063);\n}\n.stat-hold[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f7971e,\n      #ffd200);\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 0;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1a2e;\n  line-height: 1.1;\n  letter-spacing: -0.5px;\n}\n.stat-value-sm[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 2px;\n}\n.status-tracking[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.status-tracking[_ngcontent-%COMP%]   .modal-backdrop-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1040;\n}\n.status-tracking[_ngcontent-%COMP%]   .modal-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(520px, calc(100vw - 2rem));\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n  z-index: 1050;\n}\n.status-tracking[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  padding: 0 0 0 1.75rem;\n  list-style: none;\n}\n.status-tracking[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0.5rem;\n  top: 0.35rem;\n  bottom: 0.35rem;\n  width: 2px;\n  background: var(--cui-border-color, #dee2e6);\n}\n.status-tracking[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 1.1rem;\n}\n.status-tracking[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.status-tracking[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -1.4rem;\n  top: 0.3rem;\n  width: 0.7rem;\n  height: 0.7rem;\n  border-radius: 50%;\n  background: var(--cui-body-bg, #fff);\n  border: 2px solid var(--cui-primary, #321fdb);\n}\n.status-tracking[_ngcontent-%COMP%]   .timeline-item.is-failure[_ngcontent-%COMP%]::before {\n  border-color: var(--cui-danger, #e55353);\n}\n.status-tracking[_ngcontent-%COMP%]   .timeline-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.status-tracking[_ngcontent-%COMP%]   .timeline-action[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.status-tracking[_ngcontent-%COMP%]   .timeline-meta[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.status-tracking[_ngcontent-%COMP%]   .timeline-toggle[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--cui-primary, #321fdb);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  margin-top: 0.15rem;\n  display: inline-block;\n}\n.status-tracking[_ngcontent-%COMP%]   .timeline-snapshot[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding: 0.5rem 0.65rem;\n  background: var(--cui-tertiary-bg, #f8f9fa);\n  border: 1px solid var(--cui-border-color, #dee2e6);\n  border-radius: 6px;\n}\n.status-tracking[_ngcontent-%COMP%]   .snapshot-cols[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n}\n@media (max-width: 576px) {\n  .status-tracking[_ngcontent-%COMP%]   .snapshot-cols[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.status-tracking[_ngcontent-%COMP%]   .snapshot-col-label[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: var(--cui-secondary-color, #6c757d);\n  margin-bottom: 0.2rem;\n}\n.status-tracking[_ngcontent-%COMP%]   .snapshot[_ngcontent-%COMP%] {\n  max-height: 220px;\n  overflow: auto;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Consolas,\n    monospace;\n  font-size: 0.6875rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin: 0;\n}\n.status-tracking[_ngcontent-%COMP%]   .timeline-ip[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--cui-secondary-color, #6c757d);\n  margin-top: 0.3rem;\n}\n.status-tracking[_ngcontent-%COMP%]   .stage-track[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.25rem;\n}\n.status-tracking[_ngcontent-%COMP%]   .stage[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  position: relative;\n}\n.status-tracking[_ngcontent-%COMP%]   .stage[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  top: 0.4rem;\n  left: 50%;\n  width: 100%;\n  height: 2px;\n  background: var(--cui-border-color, #dee2e6);\n  z-index: 0;\n}\n.status-tracking[_ngcontent-%COMP%]   .stage.done[_ngcontent-%COMP%]:not(:last-child)::after {\n  background: var(--cui-success, #2eb85c);\n}\n.status-tracking[_ngcontent-%COMP%]   .stage-dot[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: block;\n  width: 0.85rem;\n  height: 0.85rem;\n  margin: 0 auto 0.35rem;\n  border-radius: 50%;\n  background: var(--cui-body-bg, #fff);\n  border: 2px solid var(--cui-border-color, #dee2e6);\n}\n.status-tracking[_ngcontent-%COMP%]   .stage.done[_ngcontent-%COMP%]   .stage-dot[_ngcontent-%COMP%] {\n  background: var(--cui-success, #2eb85c);\n  border-color: var(--cui-success, #2eb85c);\n}\n.status-tracking[_ngcontent-%COMP%]   .stage-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: var(--cui-secondary-color, #6c757d);\n  word-break: break-word;\n}\n.status-tracking[_ngcontent-%COMP%]   .stage.done[_ngcontent-%COMP%]   .stage-label[_ngcontent-%COMP%] {\n  color: var(--cui-body-color, #212529);\n  font-weight: 600;\n}\n.status-tracking[_ngcontent-%COMP%]   .fact-label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.status-tracking[_ngcontent-%COMP%]   .po-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.status-tracking[_ngcontent-%COMP%]   .po-style-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.status-tracking[_ngcontent-%COMP%]   .po-table[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  border-collapse: collapse;\n}\n.status-tracking[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #e8eaf6 !important;\n  color: #1a237e !important;\n  font-weight: 700;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 12px 14px;\n  border-bottom: 2px solid #c5cae9 !important;\n}\n.status-tracking[_ngcontent-%COMP%]   .po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.status-tracking[_ngcontent-%COMP%]   .po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  vertical-align: middle;\n  border-top: 1px solid #e9ecef !important;\n  border-bottom: none !important;\n}\n.status-tracking[_ngcontent-%COMP%]   .po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  border-top: none !important;\n}\n.status-tracking[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f9ff !important;\n}\n.status-tracking[_ngcontent-%COMP%]   .po-main-row.table-active[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #eef1ff !important;\n}\n.status-tracking[_ngcontent-%COMP%]   .po-number-link[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1976d2;\n  cursor: pointer;\n  text-decoration: none;\n}\n.status-tracking[_ngcontent-%COMP%]   .po-number-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.status-tracking[_ngcontent-%COMP%]   .pagination-bar[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef;\n  background: #fafbff;\n}\n.status-tracking[_ngcontent-%COMP%]   .page-size-group[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.status-tracking[_ngcontent-%COMP%]   .page-size-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: none;\n  border-right: 1px solid #d0d5dd;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #555;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  line-height: 1;\n}\n.status-tracking[_ngcontent-%COMP%]   .page-size-btn[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.status-tracking[_ngcontent-%COMP%]   .page-size-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  color: #1976d2;\n}\n.status-tracking[_ngcontent-%COMP%]   .page-size-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-weight: 700;\n}\n.status-tracking[_ngcontent-%COMP%]   .page-num-btn[_ngcontent-%COMP%] {\n  min-width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #444;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  padding: 0 4px;\n}\n.status-tracking[_ngcontent-%COMP%]   .page-num-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #1976d2;\n}\n.status-tracking[_ngcontent-%COMP%]   .page-num-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border-color: #667eea;\n  color: #fff;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);\n}\n.status-tracking[_ngcontent-%COMP%]   .page-nav-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #555;\n  font-size: 0.85rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.status-tracking[_ngcontent-%COMP%]   .page-nav-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #667eea;\n}\n.status-tracking[_ngcontent-%COMP%]   .page-nav-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.status-tracking[_ngcontent-%COMP%]   .page-ellipsis[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  color: #aaa;\n  font-size: 0.9rem;\n  line-height: 34px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media (max-width: 768px) {\n  .status-tracking[_ngcontent-%COMP%]   .pagination-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n  .status-tracking[_ngcontent-%COMP%]   .page-size-btn[_ngcontent-%COMP%] {\n    padding: 5px 9px;\n  }\n}\n/*# sourceMappingURL=status-tracking.component.css.map */'] });
var StatusTrackingComponent = _StatusTrackingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusTrackingComponent, [{
    type: Component,
    args: [{ selector: "app-status-tracking", standalone: true, imports: [
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
    ], template: `<c-container fluid class="status-tracking">

  <c-row class="mb-3">
    <c-col [md]="8">
      <h4 class="page-title mb-1">Status Tracking</h4>
      <p class="page-subtitle mb-0">
        Where every purchase order sits in the workflow. Select a PO to replay its full
        history \u2014 who did what, and when.
      </p>
    </c-col>
    <c-col [md]="4" class="text-end">
      <button cButton color="secondary" variant="outline" size="sm"
              (click)="load()" [disabled]="isLoading">Refresh</button>
    </c-col>
  </c-row>

  <!-- ===================== DASHBOARD-STYLE SUMMARY TILES ===================== -->
  <div class="row g-3 mb-4">
    <div class="col-6 col-md-3">
      <div class="stat-card">
        <div class="stat-icon-wrap stat-hold">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ inApprovalCount }}</div>
          <div class="stat-label">In Approval</div>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="stat-card">
        <div class="stat-icon-wrap stat-teal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ awaitingReleaseCount }}</div>
          <div class="stat-label">Awaiting Release</div>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="stat-card">
        <div class="stat-icon-wrap stat-green">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3H8a2 2 0 0 0-2 2v16l6-4 6 4V5a2 2 0 0 0-2-2Z"/></svg>
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ activeCount }}</div>
          <div class="stat-label">Active with Supplier</div>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="stat-card">
        <div class="stat-icon-wrap stat-purple">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ closedCount }}</div>
          <div class="stat-label">Closed / Foreclosed</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ===================== FILTERS ===================== -->
  <c-card class="mb-3">
    <c-card-body>
      <c-row class="align-items-end">
        <c-col [md]="3" class="mb-2">
          <label class="form-label">Status</label>
          <select class="form-select form-select-sm" [(ngModel)]="statusFilter"
                  name="statusFilter" (change)="applyFilters()">
            <option *ngFor="let s of statusOptions" [value]="s">{{ s }}</option>
          </select>
        </c-col>
        <c-col [md]="6" class="mb-2">
          <label class="form-label">Search</label>
          <input class="form-control form-control-sm" [(ngModel)]="searchText" name="searchText"
                 (input)="applyFilters()" placeholder="PO number or supplier">
        </c-col>
        <c-col [md]="3" class="mb-2 text-end">
          <span class="text-muted small">{{ filtered.length }} of {{ allPOs.length }} PO(s)</span>
        </c-col>
      </c-row>
    </c-card-body>
  </c-card>

  <div class="alert alert-danger" *ngIf="errorMessage">{{ errorMessage }}</div>

  <c-row>

    <!-- ===================== PO LIST ===================== -->
    <c-col [md]="selectedPO ? 7 : 12">
      <div class="card po-style-card">

        <div class="text-center py-5" *ngIf="isLoading">
          <c-spinner color="primary"></c-spinner>
          <p class="mt-2 text-muted">Loading purchase orders\u2026</p>
        </div>

        <div class="text-center py-5 text-muted" *ngIf="!isLoading && filtered.length === 0">
          No purchase orders match the current filters.
        </div>

        <div class="table-responsive" *ngIf="!isLoading && filtered.length > 0">

          <!-- Table header with result count -->
          <div class="px-4 pt-3 pb-2 d-flex align-items-center justify-content-between">
            <h5 class="fw-bold text-dark mb-0">
              <i class="bi bi-table me-2 text-primary"></i>Purchase Orders
            </h5>
            <small class="text-muted">{{ filtered.length }} result{{ filtered.length !== 1 ? 's' : '' }}</small>
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
              <tr *ngFor="let po of paginated; trackBy: trackById"
                  class="po-main-row"
                  [class.table-active]="selectedPO?.id === po.id"
                  (click)="selectPO(po)">
                <td>
                  <a class="po-number-link" href="javascript:void(0)" (click)="viewPO(po, $event)">
                    <i class="bi bi-file-earmark-text me-1"></i>{{ po.poNumber }}
                  </a>
                  <div class="text-muted small mt-1">Created {{ po.createdAt | date:'dd MMM yy' }}</div>
                </td>
                <td>{{ po.supplierName }}</td>
                <td class="text-end">
                  <div class="fw-bold text-success fs-6">{{ po.currencySymbol }}{{ po.grandTotal | number:'1.2-2' }}</div>
                </td>
                <td class="text-center"><span class="badge" [ngClass]="'bg-' + statusColor(po.status)">{{ po.status }}</span></td>
                <td class="text-center">
                  <span class="badge" [ngClass]="'bg-' + paymentColor(po.paymentStatus)">{{ paymentStatusLabel(po.paymentStatus) }}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- ===== PAGINATION BAR ===== -->
          <div class="pagination-bar d-flex align-items-center justify-content-between flex-wrap gap-3 px-4 py-3">
            <div class="d-flex align-items-center gap-3 flex-wrap">
              <span class="text-muted small">
                Showing <strong>{{ startIndex }}\u2013{{ endIndex }}</strong> of <strong>{{ filtered.length }}</strong> orders
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
    </c-col>

    <!-- ===================== DETAIL / TIMELINE ===================== -->
    <c-col [md]="5" *ngIf="selectedPO">
      <c-card>
        <c-card-header class="d-flex justify-content-between align-items-center">
          <strong>{{ selectedPO.poNumber }}</strong>
          <button cButton color="secondary" variant="ghost" size="sm"
                  (click)="selectPO(selectedPO)">\u2715</button>
        </c-card-header>
        <c-card-body>

          <!-- Lifecycle progress -->
          <div class="mb-4" *ngIf="lifecycleIndex(selectedPO) >= 0">
            <div class="stage-track">
              <div class="stage" *ngFor="let stage of lifecycle; let i = index"
                   [class.done]="isStageDone(selectedPO, i)">
                <span class="stage-dot"></span>
                <span class="stage-label">{{ stage }}</span>
              </div>
            </div>
          </div>
          <div class="alert alert-warning py-2" *ngIf="lifecycleIndex(selectedPO) < 0">
            This PO left the normal workflow \u2014 current status
            <strong>{{ selectedPO.status }}</strong>.
          </div>

          <!-- Key facts -->
          <c-row class="mb-3">
            <c-col [md]="6" class="mb-2">
              <div class="fact-label">Supplier</div>
              <div>{{ selectedPO.supplierName }}</div>
            </c-col>
            <c-col [md]="6" class="mb-2">
              <div class="fact-label">Value</div>
              <div>{{ selectedPO.currencySymbol }}{{ selectedPO.grandTotal | number:'1.2-2' }}</div>
            </c-col>
            <c-col [md]="6" class="mb-2">
              <div class="fact-label">Invoiced</div>
              <div>{{ selectedPO.currencySymbol }}{{ selectedPO.totalInvoicedAmount | number:'1.2-2' }}</div>
            </c-col>
            <c-col [md]="6" class="mb-2">
              <div class="fact-label">Paid</div>
              <div>{{ selectedPO.currencySymbol }}{{ selectedPO.totalPaidAmount | number:'1.2-2' }}</div>
            </c-col>
            <c-col [md]="6" class="mb-2">
              <div class="fact-label">Released</div>
              <div>{{ selectedPO.releasedAt ? (selectedPO.releasedAt | date:'dd MMM yy') : 'Not yet' }}</div>
            </c-col>
            <c-col [md]="6" class="mb-2">
              <div class="fact-label">Fully Supplied</div>
              <div>{{ selectedPO.fullySupplied ? 'Yes' : 'No' }}</div>
            </c-col>
          </c-row>

          <!-- Audit timeline -->
          <h6 class="mb-2">History</h6>

          <div class="text-center py-4" *ngIf="isLoadingTimeline">
            <c-spinner size="sm" color="primary"></c-spinner>
          </div>

          <div class="text-muted small" *ngIf="!isLoadingTimeline && timeline.length === 0">
            No recorded events for this PO yet.
          </div>

          <ul class="timeline" *ngIf="!isLoadingTimeline && timeline.length > 0">
            <li class="timeline-item" *ngFor="let event of timeline"
                [class.is-failure]="event.status === 'FAILURE'">
              <div class="d-flex justify-content-between align-items-start">
                <div class="timeline-time">{{ event.eventTime | date:'dd MMM yy, HH:mm' }}</div>
                <c-badge [color]="eventColor(event)" *ngIf="event.status === 'FAILURE'">Failed</c-badge>
              </div>
              <div class="timeline-action">{{ event.action }}</div>
              <div class="timeline-meta">
                {{ event.actorName || event.actorEmail || 'System' }}
                <span *ngIf="event.actorRole"> \xB7 {{ event.actorRole }}</span>
              </div>
              <div class="timeline-meta" *ngIf="event.remarks">{{ event.remarks }}</div>
              <div class="timeline-ip" *ngIf="event.ipAddress">From {{ event.ipAddress }}</div>

              <!-- Expandable before/after detail \u2014 the same snapshot the Audit Log shows,
                   surfaced here so the full history of one PO reads in one place. -->
              <span class="timeline-toggle" *ngIf="hasSnapshot(event)" (click)="toggleDetail(event)">
                {{ isExpanded(event) ? '\u25BE Hide details' : '\u25B8 What changed' }}
              </span>

              <div class="timeline-snapshot" *ngIf="isExpanded(event)">
                <div class="snapshot-cols">
                  <div>
                    <div class="snapshot-col-label">Before</div>
                    <pre class="snapshot">{{ prettyJson(event.oldValue) }}</pre>
                  </div>
                  <div>
                    <div class="snapshot-col-label">After</div>
                    <pre class="snapshot">{{ prettyJson(event.newValue) }}</pre>
                  </div>
                </div>
              </div>
            </li>
          </ul>

        </c-card-body>
      </c-card>
    </c-col>

  </c-row>

</c-container>
`, styles: ['/* src/app/views/base/status-tracking/status-tracking.component.css */\n.status-tracking .page-title {\n  font-weight: 600;\n}\n.status-tracking .page-subtitle {\n  font-size: 0.875rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.status-tracking .form-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  margin-bottom: 0.25rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.status-tracking .req {\n  color: var(--cui-danger, #e55353);\n  font-weight: 700;\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px 22px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  height: 100%;\n}\n.stat-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.11);\n}\n.stat-icon-wrap {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  flex-shrink: 0;\n}\n.stat-purple {\n  background:\n    linear-gradient(\n      135deg,\n      #6c63ff,\n      #9b59b6);\n}\n.stat-teal {\n  background:\n    linear-gradient(\n      135deg,\n      #43cea2,\n      #185a9d);\n}\n.stat-green {\n  background:\n    linear-gradient(\n      135deg,\n      #56ab2f,\n      #a8e063);\n}\n.stat-hold {\n  background:\n    linear-gradient(\n      135deg,\n      #f7971e,\n      #ffd200);\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 0;\n}\n.stat-value {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1a2e;\n  line-height: 1.1;\n  letter-spacing: -0.5px;\n}\n.stat-value-sm {\n  font-size: 1.3rem;\n}\n.stat-label {\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 2px;\n}\n.status-tracking table th {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.status-tracking .modal-backdrop-custom {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1040;\n}\n.status-tracking .modal-custom {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(520px, calc(100vw - 2rem));\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n  z-index: 1050;\n}\n.status-tracking .timeline {\n  position: relative;\n  margin: 0;\n  padding: 0 0 0 1.75rem;\n  list-style: none;\n}\n.status-tracking .timeline::before {\n  content: "";\n  position: absolute;\n  left: 0.5rem;\n  top: 0.35rem;\n  bottom: 0.35rem;\n  width: 2px;\n  background: var(--cui-border-color, #dee2e6);\n}\n.status-tracking .timeline-item {\n  position: relative;\n  padding-bottom: 1.1rem;\n}\n.status-tracking .timeline-item:last-child {\n  padding-bottom: 0;\n}\n.status-tracking .timeline-item::before {\n  content: "";\n  position: absolute;\n  left: -1.4rem;\n  top: 0.3rem;\n  width: 0.7rem;\n  height: 0.7rem;\n  border-radius: 50%;\n  background: var(--cui-body-bg, #fff);\n  border: 2px solid var(--cui-primary, #321fdb);\n}\n.status-tracking .timeline-item.is-failure::before {\n  border-color: var(--cui-danger, #e55353);\n}\n.status-tracking .timeline-time {\n  font-size: 0.75rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.status-tracking .timeline-action {\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.status-tracking .timeline-meta {\n  font-size: 0.8125rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.status-tracking .timeline-toggle {\n  font-size: 0.75rem;\n  color: var(--cui-primary, #321fdb);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  margin-top: 0.15rem;\n  display: inline-block;\n}\n.status-tracking .timeline-snapshot {\n  margin-top: 0.5rem;\n  padding: 0.5rem 0.65rem;\n  background: var(--cui-tertiary-bg, #f8f9fa);\n  border: 1px solid var(--cui-border-color, #dee2e6);\n  border-radius: 6px;\n}\n.status-tracking .snapshot-cols {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n}\n@media (max-width: 576px) {\n  .status-tracking .snapshot-cols {\n    grid-template-columns: 1fr;\n  }\n}\n.status-tracking .snapshot-col-label {\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: var(--cui-secondary-color, #6c757d);\n  margin-bottom: 0.2rem;\n}\n.status-tracking .snapshot {\n  max-height: 220px;\n  overflow: auto;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Consolas,\n    monospace;\n  font-size: 0.6875rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin: 0;\n}\n.status-tracking .timeline-ip {\n  font-size: 0.6875rem;\n  color: var(--cui-secondary-color, #6c757d);\n  margin-top: 0.3rem;\n}\n.status-tracking .stage-track {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.25rem;\n}\n.status-tracking .stage {\n  flex: 1;\n  text-align: center;\n  position: relative;\n}\n.status-tracking .stage:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  top: 0.4rem;\n  left: 50%;\n  width: 100%;\n  height: 2px;\n  background: var(--cui-border-color, #dee2e6);\n  z-index: 0;\n}\n.status-tracking .stage.done:not(:last-child)::after {\n  background: var(--cui-success, #2eb85c);\n}\n.status-tracking .stage-dot {\n  position: relative;\n  z-index: 1;\n  display: block;\n  width: 0.85rem;\n  height: 0.85rem;\n  margin: 0 auto 0.35rem;\n  border-radius: 50%;\n  background: var(--cui-body-bg, #fff);\n  border: 2px solid var(--cui-border-color, #dee2e6);\n}\n.status-tracking .stage.done .stage-dot {\n  background: var(--cui-success, #2eb85c);\n  border-color: var(--cui-success, #2eb85c);\n}\n.status-tracking .stage-label {\n  display: block;\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: var(--cui-secondary-color, #6c757d);\n  word-break: break-word;\n}\n.status-tracking .stage.done .stage-label {\n  color: var(--cui-body-color, #212529);\n  font-weight: 600;\n}\n.status-tracking .fact-label {\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.status-tracking .po-row {\n  cursor: pointer;\n}\n.status-tracking .po-style-card {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.status-tracking .po-table {\n  font-size: 0.88rem;\n  border-collapse: collapse;\n}\n.status-tracking .table-header th {\n  background: #e8eaf6 !important;\n  color: #1a237e !important;\n  font-weight: 700;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 12px 14px;\n  border-bottom: 2px solid #c5cae9 !important;\n}\n.status-tracking .po-table tbody .po-main-row {\n  cursor: pointer;\n}\n.status-tracking .po-table tbody .po-main-row td {\n  padding: 12px 14px;\n  vertical-align: middle;\n  border-top: 1px solid #e9ecef !important;\n  border-bottom: none !important;\n}\n.status-tracking .po-table tbody .po-main-row:first-child td {\n  border-top: none !important;\n}\n.status-tracking .po-main-row:hover td {\n  background: #f8f9ff !important;\n}\n.status-tracking .po-main-row.table-active td {\n  background: #eef1ff !important;\n}\n.status-tracking .po-number-link {\n  font-weight: 700;\n  color: #1976d2;\n  cursor: pointer;\n  text-decoration: none;\n}\n.status-tracking .po-number-link:hover {\n  text-decoration: underline;\n}\n.status-tracking .pagination-bar {\n  border-top: 1px solid #e9ecef;\n  background: #fafbff;\n}\n.status-tracking .page-size-group {\n  display: flex;\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.status-tracking .page-size-btn {\n  background: #fff;\n  border: none;\n  border-right: 1px solid #d0d5dd;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #555;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  line-height: 1;\n}\n.status-tracking .page-size-btn:last-child {\n  border-right: none;\n}\n.status-tracking .page-size-btn:hover {\n  background: #f0f4ff;\n  color: #1976d2;\n}\n.status-tracking .page-size-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-weight: 700;\n}\n.status-tracking .page-num-btn {\n  min-width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #444;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  padding: 0 4px;\n}\n.status-tracking .page-num-btn:hover {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #1976d2;\n}\n.status-tracking .page-num-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border-color: #667eea;\n  color: #fff;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);\n}\n.status-tracking .page-nav-btn {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #555;\n  font-size: 0.85rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.status-tracking .page-nav-btn:hover:not(:disabled) {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #667eea;\n}\n.status-tracking .page-nav-btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.status-tracking .page-ellipsis {\n  padding: 0 4px;\n  color: #aaa;\n  font-size: 0.9rem;\n  line-height: 34px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media (max-width: 768px) {\n  .status-tracking .pagination-bar {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n  .status-tracking .page-size-btn {\n    padding: 5px 9px;\n  }\n}\n/*# sourceMappingURL=status-tracking.component.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: MessageService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusTrackingComponent, { className: "StatusTrackingComponent", filePath: "src/app/views/base/status-tracking/status-tracking.component.ts", lineNumber: 32 });
})();
export {
  StatusTrackingComponent
};
//# sourceMappingURL=chunk-UPVDUMOK.js.map
