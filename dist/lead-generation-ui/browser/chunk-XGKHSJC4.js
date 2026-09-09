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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  ɵɵtextInterpolate5,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BCCUO726.js";
import "./chunk-SO7Q7VKX.js";

// src/app/views/base/po-closure/po-closure.component.ts
function PoClosureComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function PoClosureComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "c-spinner", 24);
    \u0275\u0275elementStart(2, "p", 25);
    \u0275\u0275text(3, "Loading purchase orders\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PoClosureComponent_div_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " No released purchase orders are currently open. Only a released PO can be closed \u2014 drafts and POs still in approval are cancelled instead. ");
    \u0275\u0275elementEnd();
  }
}
function PoClosureComponent_div_31_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "No purchase orders have been closed yet.");
    \u0275\u0275elementEnd();
  }
}
function PoClosureComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, PoClosureComponent_div_31_span_1_Template, 2, 0, "span", 27)(2, PoClosureComponent_div_31_span_2_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.view === "OPEN");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.view === "CLOSED");
  }
}
function PoClosureComponent_div_32_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Readiness");
    \u0275\u0275elementEnd();
  }
}
function PoClosureComponent_div_32_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Closed On");
    \u0275\u0275elementEnd();
  }
}
function PoClosureComponent_div_32_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Reason / Remarks");
    \u0275\u0275elementEnd();
  }
}
function PoClosureComponent_div_32_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function PoClosureComponent_div_32_tr_27_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36)(1, "span", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const po_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "bg-" + ctx_r0.readinessColor(po_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.readinessLabel(po_r4));
  }
}
function PoClosureComponent_div_32_tr_27_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 62);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const po_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, po_r4.closedAt || po_r4.foreclosedAt, "dd MMM yy"), " ");
  }
}
function PoClosureComponent_div_32_tr_27_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const po_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", po_r4.closureRemarks || po_r4.foreclosureReason || "\u2014", " ");
  }
}
function PoClosureComponent_div_32_tr_27_td_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 36)(1, "button", 63);
    \u0275\u0275listener("click", function PoClosureComponent_div_32_tr_27_td_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const po_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openClose(po_r4));
    });
    \u0275\u0275text(2, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 64);
    \u0275\u0275listener("click", function PoClosureComponent_div_32_tr_27_td_23_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const po_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openForeclose(po_r4));
    });
    \u0275\u0275text(4, "Foreclose");
    \u0275\u0275elementEnd()();
  }
}
function PoClosureComponent_div_32_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 55)(1, "td")(2, "a", 56);
    \u0275\u0275listener("click", function PoClosureComponent_div_32_tr_27_Template_a_click_2_listener() {
      const po_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewPO(po_r4));
    });
    \u0275\u0275element(3, "i", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 35)(8, "div", 58);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 59);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 36)(15, "span", 60);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 36)(18, "span", 60);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, PoClosureComponent_div_32_tr_27_td_20_Template, 3, 2, "td", 37)(21, PoClosureComponent_div_32_tr_27_td_21_Template, 3, 4, "td", 61)(22, PoClosureComponent_div_32_tr_27_td_22_Template, 2, 1, "td", 61)(23, PoClosureComponent_div_32_tr_27_td_23_Template, 5, 0, "td", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const po_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", po_r4.poNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(po_r4.supplierName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", po_r4.currencySymbol, "", \u0275\u0275pipeBind2(10, 14, po_r4.grandTotal, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", po_r4.currencySymbol, "", \u0275\u0275pipeBind2(13, 17, po_r4.totalPaidAmount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "bg-" + ctx_r0.statusColor(po_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(po_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "bg-" + ctx_r0.paymentColor(po_r4.paymentStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.paymentStatusLabel(po_r4.paymentStatus));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.view === "OPEN");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.view === "CLOSED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.view === "CLOSED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.view === "OPEN");
  }
}
function PoClosureComponent_div_32_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function PoClosureComponent_div_32_button_42_Template_button_click_0_listener() {
      const size_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageSizeChange(size_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.pageSize === size_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r7);
  }
}
function PoClosureComponent_div_32_ng_container_48_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function PoClosureComponent_div_32_ng_container_48_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function PoClosureComponent_div_32_ng_container_48_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const page_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(page_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.currentPage === page_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r9);
  }
}
function PoClosureComponent_div_32_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PoClosureComponent_div_32_ng_container_48_span_1_Template, 2, 0, "span", 66)(2, PoClosureComponent_div_32_ng_container_48_button_2_Template, 2, 3, "button", 67);
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
function PoClosureComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "h5", 30);
    \u0275\u0275element(3, "i", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "table", 33)(8, "thead", 34)(9, "tr")(10, "th");
    \u0275\u0275text(11, "PO Number / Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 35);
    \u0275\u0275text(15, "PO Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 35);
    \u0275\u0275text(17, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 36);
    \u0275\u0275text(19, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 36);
    \u0275\u0275text(21, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, PoClosureComponent_div_32_th_22_Template, 2, 0, "th", 37)(23, PoClosureComponent_div_32_th_23_Template, 2, 0, "th", 27)(24, PoClosureComponent_div_32_th_24_Template, 2, 0, "th", 27)(25, PoClosureComponent_div_32_th_25_Template, 2, 0, "th", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275template(27, PoClosureComponent_div_32_tr_27_Template, 24, 20, "tr", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 39)(29, "div", 40)(30, "span", 14);
    \u0275\u0275text(31, " Showing ");
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " of ");
    \u0275\u0275elementStart(35, "strong");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " orders ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 41)(39, "label", 42);
    \u0275\u0275text(40, "Rows per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 43);
    \u0275\u0275template(42, PoClosureComponent_div_32_button_42_Template, 2, 3, "button", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 45)(44, "button", 46);
    \u0275\u0275listener("click", function PoClosureComponent_div_32_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(1));
    });
    \u0275\u0275element(45, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 48);
    \u0275\u0275listener("click", function PoClosureComponent_div_32_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage - 1));
    });
    \u0275\u0275element(47, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, PoClosureComponent_div_32_ng_container_48_Template, 3, 2, "ng-container", 50);
    \u0275\u0275elementStart(49, "button", 51);
    \u0275\u0275listener("click", function PoClosureComponent_div_32_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage + 1));
    });
    \u0275\u0275element(50, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 53);
    \u0275\u0275listener("click", function PoClosureComponent_div_32_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.totalPages));
    });
    \u0275\u0275element(52, "i", 54);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.view === "OPEN" ? "Purchase Orders Open for Closure" : "Closed Purchase Orders", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.filtered.length, " result", ctx_r0.filtered.length !== 1 ? "s" : "");
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ctx_r0.view === "OPEN");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.view === "CLOSED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.view === "CLOSED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.view === "OPEN");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.paginated)("ngForTrackBy", ctx_r0.trackById);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r0.startIndex, "\u2013", ctx_r0.endIndex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.filtered.length);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
  }
}
function PoClosureComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function PoClosureComponent_div_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementEnd();
  }
}
function PoClosureComponent_div_34_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275text(1, " This PO still has an outstanding payment. Closing it stops the supplier invoicing further. Confirm below only if the remaining balance will never be paid. ");
    \u0275\u0275elementStart(2, "div", 81)(3, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function PoClosureComponent_div_34_div_15_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.forceClose, $event) || (ctx_r0.forceClose = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 83);
    \u0275\u0275text(5, " Close anyway, with the balance outstanding ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.forceClose);
  }
}
function PoClosureComponent_div_34_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1, " Foreclosing ends this PO before it has been fully supplied. The remaining quantity will never be delivered against it. ");
    \u0275\u0275elementEnd();
  }
}
function PoClosureComponent_div_34_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PoClosureComponent_div_34_c_spinner_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-spinner", 86);
  }
}
function PoClosureComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "c-card")(2, "c-card-header")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "c-card-body")(6, "p", 1)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275element(10, "br");
    \u0275\u0275elementStart(11, "span", 14);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, PoClosureComponent_div_34_div_15_Template, 6, 1, "div", 72)(16, PoClosureComponent_div_34_div_16_Template, 2, 0, "div", 73);
    \u0275\u0275elementStart(17, "label", 9);
    \u0275\u0275text(18);
    \u0275\u0275template(19, PoClosureComponent_div_34_span_19_Template, 2, 0, "span", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "textarea", 75);
    \u0275\u0275twoWayListener("ngModelChange", function PoClosureComponent_div_34_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.remarks, $event) || (ctx_r0.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "small", 32);
    \u0275\u0275text(22, "This is recorded permanently in the audit trail.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 76)(24, "button", 77);
    \u0275\u0275listener("click", function PoClosureComponent_div_34_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(25, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 78);
    \u0275\u0275listener("click", function PoClosureComponent_div_34_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirm());
    });
    \u0275\u0275template(27, PoClosureComponent_div_34_c_spinner_27_Template, 1, 0, "c-spinner", 79);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.modalMode === "close" ? "Close Purchase Order" : "Foreclose Purchase Order");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.target == null ? null : ctx_r0.target.poNumber);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r0.target == null ? null : ctx_r0.target.supplierName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate5(" Value ", ctx_r0.target == null ? null : ctx_r0.target.currencySymbol, "", \u0275\u0275pipeBind2(13, 19, ctx_r0.target == null ? null : ctx_r0.target.grandTotal, "1.2-2"), " \xB7 Paid ", ctx_r0.target == null ? null : ctx_r0.target.currencySymbol, "", \u0275\u0275pipeBind2(14, 22, ctx_r0.target == null ? null : ctx_r0.target.totalPaidAmount, "1.2-2"), " \xB7 Payment status ", ctx_r0.paymentStatusLabel(ctx_r0.target == null ? null : ctx_r0.target.paymentStatus), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.modalMode === "close" && !ctx_r0.isFullyPaid(ctx_r0.target));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.modalMode === "foreclose");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.modalMode === "close" ? "Closure Remarks" : "Foreclosure Reason", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.modalMode === "foreclose");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.remarks);
    \u0275\u0275property("placeholder", ctx_r0.modalMode === "close" ? "Optional \u2014 anything worth recording about this closure" : "Required \u2014 why is this PO being ended early?");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting);
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx_r0.modalMode === "close" ? "success" : "danger")("disabled", ctx_r0.isSubmitting || ctx_r0.modalMode === "close" && !ctx_r0.isFullyPaid(ctx_r0.target) && !ctx_r0.forceClose);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.modalMode === "close" ? "Confirm Close" : "Confirm Foreclose", " ");
  }
}
var _PoClosureComponent = class _PoClosureComponent {
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
    this.view = "OPEN";
    this.searchText = "";
    this.currentPage = 1;
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25, 50];
    this.showModal = false;
    this.modalMode = "close";
    this.target = null;
    this.remarks = "";
    this.forceClose = false;
    this.isSubmitting = false;
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
    const endedStatuses = ["CLOSED", "FORECLOSED", "CANCELLED"];
    let data = this.allPOs.filter((po) => this.view === "CLOSED" ? endedStatuses.includes(po.status) : !endedStatuses.includes(po.status) && this.isReleased(po));
    const q = this.searchText.trim().toLowerCase();
    if (q) {
      data = data.filter((po) => (po.poNumber || "").toLowerCase().includes(q) || (po.supplierName || "").toLowerCase().includes(q));
    }
    this.filtered = data;
  }
  switchView(view) {
    this.view = view;
    this.applyFilters();
  }
  isReleased(po) {
    return [
      "RELEASED",
      "SENT_TO_SUPPLIER",
      "ACKNOWLEDGED",
      "IN_PROGRESS",
      "DELIVERED",
      "COMPLETED"
    ].includes(po.status);
  }
  // ==================================================================
  // READINESS
  // ==================================================================
  isFullyPaid(po) {
    return po?.paymentStatus === "PAID";
  }
  /** A PO is ready for a clean close when everything is supplied and everything is paid. */
  isReadyToClose(po) {
    return this.isFullyPaid(po) && po?.fullySupplied === true;
  }
  readinessLabel(po) {
    if (this.isReadyToClose(po))
      return "Ready to close";
    if (!this.isFullyPaid(po))
      return "Payment outstanding";
    return "Delivery outstanding";
  }
  readinessColor(po) {
    return this.isReadyToClose(po) ? "success" : "warning";
  }
  // ==================================================================
  // ACTIONS
  // ==================================================================
  openClose(po) {
    this.modalMode = "close";
    this.target = po;
    this.remarks = "";
    this.forceClose = !this.isFullyPaid(po);
    this.showModal = true;
  }
  openForeclose(po) {
    this.modalMode = "foreclose";
    this.target = po;
    this.remarks = "";
    this.forceClose = false;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.target = null;
    this.remarks = "";
    this.forceClose = false;
  }
  confirm() {
    if (!this.target)
      return;
    if (this.modalMode === "foreclose" && !this.remarks.trim()) {
      this.messageService.showMessage("warning", "Reason required", "Foreclosing a PO early requires a reason. It is recorded in the audit trail.");
      return;
    }
    this.isSubmitting = true;
    const request = this.modalMode === "close" ? this.dataService.closePO(this.target.id, this.remarks.trim(), this.forceClose) : this.dataService.foreclosePO(this.target.id, this.remarks.trim());
    request.subscribe({
      next: () => {
        this.messageService.showMessage("success", this.modalMode === "close" ? "PO closed" : "PO foreclosed", `${this.target.poNumber} has been ${this.modalMode === "close" ? "closed" : "foreclosed"}.`);
        this.isSubmitting = false;
        this.closeModal();
        this.load();
      },
      error: (err) => {
        this.isSubmitting = false;
        const msg = err?.error?.message || "The operation could not be completed.";
        this.messageService.showMessage("error", "Failed", msg);
      }
    });
  }
  // ==================================================================
  // DISPLAY
  // ==================================================================
  statusColor(status) {
    switch (status) {
      case "CLOSED":
        return "success";
      case "FORECLOSED":
        return "danger";
      case "CANCELLED":
        return "secondary";
      case "RELEASED":
        return "info";
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
_PoClosureComponent.\u0275fac = function PoClosureComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PoClosureComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router));
};
_PoClosureComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PoClosureComponent, selectors: [["app-po-closure"]], decls: 35, vars: 18, consts: [["fluid", "", 1, "po-closure"], [1, "mb-3"], [3, "md"], [1, "page-title", "mb-1"], [1, "page-subtitle", "mb-0"], [1, "text-end", 3, "md"], ["cButton", "", "color", "secondary", "variant", "outline", "size", "sm", 3, "click", "disabled"], [1, "align-items-end"], [1, "mb-2", 3, "md"], [1, "form-label"], ["cButton", "", "size", "sm", 1, "me-2", 3, "click", "color", "variant"], ["cButton", "", "size", "sm", 3, "click", "color", "variant"], ["name", "searchText", "placeholder", "PO number or supplier", 1, "form-control", "form-control-sm", 3, "ngModelChange", "input", "ngModel"], [1, "mb-2", "text-end", 3, "md"], [1, "text-muted", "small"], ["class", "alert alert-danger", 4, "ngIf"], [1, "card", "po-style-card"], ["class", "text-center py-5", 4, "ngIf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "modal-backdrop-custom", 3, "click", 4, "ngIf"], ["class", "modal-custom", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "text-center", "py-5"], ["color", "primary"], [1, "mt-2", "text-muted"], [1, "text-center", "py-5", "text-muted"], [4, "ngIf"], [1, "table-responsive"], [1, "px-4", "pt-3", "pb-2", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold", "text-dark", "mb-0"], [1, "bi", "bi-table", "me-2", "text-primary"], [1, "text-muted"], [1, "table", "po-table", "mb-0"], [1, "table-header"], [1, "text-end"], [1, "text-center"], ["class", "text-center", 4, "ngIf"], ["class", "po-main-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "pagination-bar", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "px-4", "py-3"], [1, "d-flex", "align-items-center", "gap-3", "flex-wrap"], [1, "d-flex", "align-items-center", "gap-2"], [1, "text-muted", "small", "mb-0", "text-nowrap"], [1, "page-size-group"], ["class", "page-size-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "gap-1"], ["title", "First page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-left"], ["title", "Previous page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [4, "ngFor", "ngForOf"], ["title", "Next page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], ["title", "Last page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-right"], [1, "po-main-row"], ["href", "javascript:void(0)", 1, "po-number-link", 3, "click"], [1, "bi", "bi-file-earmark-text", "me-1"], [1, "fw-bold", "text-success", "fs-6"], [1, "text-end", "text-muted"], [1, "badge", 3, "ngClass"], ["class", "small text-muted", 4, "ngIf"], [1, "small", "text-muted"], ["cButton", "", "color", "success", "size", "sm", 1, "me-1", 3, "click"], ["cButton", "", "color", "danger", "variant", "outline", "size", "sm", 3, "click"], [1, "page-size-btn", 3, "click"], ["class", "page-ellipsis", 4, "ngIf"], ["class", "page-num-btn", 3, "active", "click", 4, "ngIf"], [1, "page-ellipsis"], [1, "page-num-btn", 3, "click"], [1, "modal-backdrop-custom", 3, "click"], [1, "modal-custom"], ["class", "alert alert-warning py-2", 4, "ngIf"], ["class", "alert alert-danger py-2", 4, "ngIf"], ["class", "req", 4, "ngIf"], ["rows", "3", "name", "remarks", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "text-end", "mt-4"], ["cButton", "", "color", "secondary", "variant", "outline", 1, "me-2", 3, "click", "disabled"], ["cButton", "", 3, "click", "color", "disabled"], ["size", "sm", 4, "ngIf"], [1, "alert", "alert-warning", "py-2"], [1, "form-check", "mt-2"], ["type", "checkbox", "id", "forceClose", "name", "forceClose", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "forceClose", 1, "form-check-label"], [1, "alert", "alert-danger", "py-2"], [1, "req"], ["size", "sm"]], template: function PoClosureComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-container", 0)(1, "c-row", 1)(2, "c-col", 2)(3, "h4", 3);
    \u0275\u0275text(4, "PO Closure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, " Close a purchase order once everything has been supplied, invoiced and paid \u2014 or foreclose it early with a reason. Closing stops the supplier invoicing further. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "c-col", 5)(8, "button", 6);
    \u0275\u0275listener("click", function PoClosureComponent_Template_button_click_8_listener() {
      return ctx.load();
    });
    \u0275\u0275text(9, "Refresh");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "c-card", 1)(11, "c-card-body")(12, "c-row", 7)(13, "c-col", 8)(14, "label", 9);
    \u0275\u0275text(15, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "button", 10);
    \u0275\u0275listener("click", function PoClosureComponent_Template_button_click_17_listener() {
      return ctx.switchView("OPEN");
    });
    \u0275\u0275text(18, "Open POs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 11);
    \u0275\u0275listener("click", function PoClosureComponent_Template_button_click_19_listener() {
      return ctx.switchView("CLOSED");
    });
    \u0275\u0275text(20, "Closed / Foreclosed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "c-col", 8)(22, "label", 9);
    \u0275\u0275text(23, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function PoClosureComponent_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
      return $event;
    });
    \u0275\u0275listener("input", function PoClosureComponent_Template_input_input_24_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "c-col", 13)(26, "span", 14);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(28, PoClosureComponent_div_28_Template, 2, 1, "div", 15);
    \u0275\u0275elementStart(29, "div", 16);
    \u0275\u0275template(30, PoClosureComponent_div_30_Template, 4, 0, "div", 17)(31, PoClosureComponent_div_31_Template, 3, 2, "div", 18)(32, PoClosureComponent_div_32_Template, 53, 18, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, PoClosureComponent_div_33_Template, 1, 0, "div", 20)(34, PoClosureComponent_div_34_Template, 29, 25, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("md", 8);
    \u0275\u0275advance(5);
    \u0275\u0275property("md", 4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance(5);
    \u0275\u0275property("md", 5);
    \u0275\u0275advance(4);
    \u0275\u0275property("color", ctx.view === "OPEN" ? "primary" : "secondary")("variant", ctx.view === "OPEN" ? void 0 : "outline");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx.view === "CLOSED" ? "primary" : "secondary")("variant", ctx.view === "CLOSED" ? void 0 : "outline");
    \u0275\u0275advance(2);
    \u0275\u0275property("md", 5);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
    \u0275\u0275advance();
    \u0275\u0275property("md", 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.filtered.length, " PO(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filtered.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filtered.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showModal);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  FormsModule,
  DefaultValueAccessor,
  CheckboxControlValueAccessor,
  NgControlStatus,
  NgModel,
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardBodyComponent,
  CardHeaderComponent,
  ButtonDirective,
  SpinnerComponent,
  DecimalPipe,
  DatePipe
], styles: ["\n\n.po-closure[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.po-closure[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.po-closure[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  margin-bottom: 0.25rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.po-closure[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--cui-danger, #e55353);\n  font-weight: 700;\n}\n.po-closure[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  height: 100%;\n  border-left: 3px solid var(--cui-border-color, #dee2e6);\n}\n.po-closure[_ngcontent-%COMP%]   .stat-card.stat-success[_ngcontent-%COMP%] {\n  border-left-color: var(--cui-success, #2eb85c);\n}\n.po-closure[_ngcontent-%COMP%]   .stat-card.stat-warning[_ngcontent-%COMP%] {\n  border-left-color: var(--cui-warning, #f9b115);\n}\n.po-closure[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--cui-secondary-color, #6c757d);\n  margin-bottom: 0.25rem;\n}\n.po-closure[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.po-closure[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.po-closure[_ngcontent-%COMP%]   .po-style-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.po-closure[_ngcontent-%COMP%]   .po-table[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  border-collapse: collapse;\n}\n.po-closure[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #e8eaf6 !important;\n  color: #1a237e !important;\n  font-weight: 700;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 12px 14px;\n  border-bottom: 2px solid #c5cae9 !important;\n}\n.po-closure[_ngcontent-%COMP%]   .po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  vertical-align: middle;\n  border-top: 1px solid #e9ecef !important;\n  border-bottom: none !important;\n}\n.po-closure[_ngcontent-%COMP%]   .po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  border-top: none !important;\n}\n.po-closure[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f9ff !important;\n}\n.po-closure[_ngcontent-%COMP%]   .po-number-link[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1976d2;\n  cursor: pointer;\n  text-decoration: none;\n}\n.po-closure[_ngcontent-%COMP%]   .po-number-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.po-closure[_ngcontent-%COMP%]   .pagination-bar[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef;\n  background: #fafbff;\n}\n.po-closure[_ngcontent-%COMP%]   .page-size-group[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.po-closure[_ngcontent-%COMP%]   .page-size-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: none;\n  border-right: 1px solid #d0d5dd;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #555;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  line-height: 1;\n}\n.po-closure[_ngcontent-%COMP%]   .page-size-btn[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.po-closure[_ngcontent-%COMP%]   .page-size-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  color: #1976d2;\n}\n.po-closure[_ngcontent-%COMP%]   .page-size-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-weight: 700;\n}\n.po-closure[_ngcontent-%COMP%]   .page-num-btn[_ngcontent-%COMP%] {\n  min-width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #444;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  padding: 0 4px;\n}\n.po-closure[_ngcontent-%COMP%]   .page-num-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #1976d2;\n}\n.po-closure[_ngcontent-%COMP%]   .page-num-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border-color: #667eea;\n  color: #fff;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);\n}\n.po-closure[_ngcontent-%COMP%]   .page-nav-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #555;\n  font-size: 0.85rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.po-closure[_ngcontent-%COMP%]   .page-nav-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #667eea;\n}\n.po-closure[_ngcontent-%COMP%]   .page-nav-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.po-closure[_ngcontent-%COMP%]   .page-ellipsis[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  color: #aaa;\n  font-size: 0.9rem;\n  line-height: 34px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media (max-width: 768px) {\n  .po-closure[_ngcontent-%COMP%]   .pagination-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n  .po-closure[_ngcontent-%COMP%]   .page-size-btn[_ngcontent-%COMP%] {\n    padding: 5px 9px;\n  }\n}\n.po-closure[_ngcontent-%COMP%]   .modal-backdrop-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1040;\n}\n.po-closure[_ngcontent-%COMP%]   .modal-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(520px, calc(100vw - 2rem));\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n  z-index: 1050;\n}\n/*# sourceMappingURL=po-closure.component.css.map */"] });
var PoClosureComponent = _PoClosureComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoClosureComponent, [{
    type: Component,
    args: [{ selector: "app-po-closure", standalone: true, imports: [
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
    ], template: `<c-container fluid class="po-closure">

  <c-row class="mb-3">
    <c-col [md]="8">
      <h4 class="page-title mb-1">PO Closure</h4>
      <p class="page-subtitle mb-0">
        Close a purchase order once everything has been supplied, invoiced and paid \u2014 or
        foreclose it early with a reason. Closing stops the supplier invoicing further.
      </p>
    </c-col>
    <c-col [md]="4" class="text-end">
      <button cButton color="secondary" variant="outline" size="sm"
              (click)="load()" [disabled]="isLoading">Refresh</button>
    </c-col>
  </c-row>

  <!-- ===================== VIEW SWITCH + SEARCH ===================== -->
  <c-card class="mb-3">
    <c-card-body>
      <c-row class="align-items-end">
        <c-col [md]="5" class="mb-2">
          <label class="form-label">View</label>
          <div>
            <button cButton size="sm" class="me-2"
                    [color]="view === 'OPEN' ? 'primary' : 'secondary'"
                    [variant]="view === 'OPEN' ? undefined : 'outline'"
                    (click)="switchView('OPEN')">Open POs</button>
            <button cButton size="sm"
                    [color]="view === 'CLOSED' ? 'primary' : 'secondary'"
                    [variant]="view === 'CLOSED' ? undefined : 'outline'"
                    (click)="switchView('CLOSED')">Closed / Foreclosed</button>
          </div>
        </c-col>
        <c-col [md]="5" class="mb-2">
          <label class="form-label">Search</label>
          <input class="form-control form-control-sm" [(ngModel)]="searchText" name="searchText"
                 (input)="applyFilters()" placeholder="PO number or supplier">
        </c-col>
        <c-col [md]="2" class="mb-2 text-end">
          <span class="text-muted small">{{ filtered.length }} PO(s)</span>
        </c-col>
      </c-row>
    </c-card-body>
  </c-card>

  <div class="alert alert-danger" *ngIf="errorMessage">{{ errorMessage }}</div>

  <!-- ===================== TABLE ===================== -->
  <div class="card po-style-card">

    <div class="text-center py-5" *ngIf="isLoading">
      <c-spinner color="primary"></c-spinner>
      <p class="mt-2 text-muted">Loading purchase orders\u2026</p>
    </div>

    <div class="text-center py-5 text-muted" *ngIf="!isLoading && filtered.length === 0">
      <span *ngIf="view === 'OPEN'">
        No released purchase orders are currently open. Only a released PO can be closed \u2014
        drafts and POs still in approval are cancelled instead.
      </span>
      <span *ngIf="view === 'CLOSED'">No purchase orders have been closed yet.</span>
    </div>

    <div class="table-responsive" *ngIf="!isLoading && filtered.length > 0">

      <!-- Table header with result count -->
      <div class="px-4 pt-3 pb-2 d-flex align-items-center justify-content-between">
        <h5 class="fw-bold text-dark mb-0">
          <i class="bi bi-table me-2 text-primary"></i>
          {{ view === 'OPEN' ? 'Purchase Orders Open for Closure' : 'Closed Purchase Orders' }}
        </h5>
        <small class="text-muted">{{ filtered.length }} result{{ filtered.length !== 1 ? 's' : '' }}</small>
      </div>

      <table class="table po-table mb-0">
        <thead class="table-header">
          <tr>
            <th>PO Number / Details</th>
            <th>Supplier</th>
            <th class="text-end">PO Value</th>
            <th class="text-end">Paid</th>
            <th class="text-center">Status</th>
            <th class="text-center">Payment</th>
            <th class="text-center" *ngIf="view === 'OPEN'">Readiness</th>
            <th *ngIf="view === 'CLOSED'">Closed On</th>
            <th *ngIf="view === 'CLOSED'">Reason / Remarks</th>
            <th class="text-center" *ngIf="view === 'OPEN'">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="po-main-row" *ngFor="let po of paginated; trackBy: trackById">
            <td>
              <a class="po-number-link" href="javascript:void(0)" (click)="viewPO(po)">
                <i class="bi bi-file-earmark-text me-1"></i>{{ po.poNumber }}
              </a>
            </td>
            <td>{{ po.supplierName }}</td>
            <td class="text-end">
              <div class="fw-bold text-success fs-6">{{ po.currencySymbol }}{{ po.grandTotal | number:'1.2-2' }}</div>
            </td>
            <td class="text-end text-muted">
              {{ po.currencySymbol }}{{ po.totalPaidAmount | number:'1.2-2' }}
            </td>
            <td class="text-center"><span class="badge" [ngClass]="'bg-' + statusColor(po.status)">{{ po.status }}</span></td>
            <td class="text-center"><span class="badge" [ngClass]="'bg-' + paymentColor(po.paymentStatus)">{{ paymentStatusLabel(po.paymentStatus) }}</span></td>

            <td class="text-center" *ngIf="view === 'OPEN'">
              <span class="badge" [ngClass]="'bg-' + readinessColor(po)">{{ readinessLabel(po) }}</span>
            </td>

            <td class="small text-muted" *ngIf="view === 'CLOSED'">
              {{ (po.closedAt || po.foreclosedAt) | date:'dd MMM yy' }}
            </td>
            <td class="small text-muted" *ngIf="view === 'CLOSED'">
              {{ po.closureRemarks || po.foreclosureReason || '\u2014' }}
            </td>

            <td class="text-center" *ngIf="view === 'OPEN'">
              <button cButton color="success" size="sm" class="me-1"
                      (click)="openClose(po)">Close</button>
              <button cButton color="danger" variant="outline" size="sm"
                      (click)="openForeclose(po)">Foreclose</button>
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

  <!-- ===================== CLOSE / FORECLOSE DIALOG ===================== -->
  <div class="modal-backdrop-custom" *ngIf="showModal" (click)="closeModal()"></div>
  <div class="modal-custom" *ngIf="showModal">
    <c-card>
      <c-card-header>
        <strong>{{ modalMode === 'close' ? 'Close Purchase Order' : 'Foreclose Purchase Order' }}</strong>
      </c-card-header>
      <c-card-body>

        <p class="mb-3">
          <strong>{{ target?.poNumber }}</strong> \u2014 {{ target?.supplierName }}<br>
          <span class="text-muted small">
            Value {{ target?.currencySymbol }}{{ target?.grandTotal | number:'1.2-2' }} \xB7
            Paid {{ target?.currencySymbol }}{{ target?.totalPaidAmount | number:'1.2-2' }} \xB7
            Payment status {{ paymentStatusLabel(target?.paymentStatus) }}
          </span>
        </p>

        <!-- Outstanding-payment warning, close mode only -->
        <div class="alert alert-warning py-2" *ngIf="modalMode === 'close' && !isFullyPaid(target)">
          This PO still has an outstanding payment. Closing it stops the supplier invoicing
          further. Confirm below only if the remaining balance will never be paid.
          <div class="form-check mt-2">
            <input class="form-check-input" type="checkbox" id="forceClose"
                   [(ngModel)]="forceClose" name="forceClose">
            <label class="form-check-label" for="forceClose">
              Close anyway, with the balance outstanding
            </label>
          </div>
        </div>

        <div class="alert alert-danger py-2" *ngIf="modalMode === 'foreclose'">
          Foreclosing ends this PO before it has been fully supplied. The remaining quantity
          will never be delivered against it.
        </div>

        <label class="form-label">
          {{ modalMode === 'close' ? 'Closure Remarks' : 'Foreclosure Reason' }}
          <span class="req" *ngIf="modalMode === 'foreclose'">*</span>
        </label>
        <textarea class="form-control" rows="3" [(ngModel)]="remarks" name="remarks"
                  [placeholder]="modalMode === 'close'
                    ? 'Optional \u2014 anything worth recording about this closure'
                    : 'Required \u2014 why is this PO being ended early?'"></textarea>
        <small class="text-muted">This is recorded permanently in the audit trail.</small>

        <div class="text-end mt-4">
          <button cButton color="secondary" variant="outline" class="me-2"
                  (click)="closeModal()" [disabled]="isSubmitting">Cancel</button>
          <button cButton [color]="modalMode === 'close' ? 'success' : 'danger'"
                  (click)="confirm()"
                  [disabled]="isSubmitting || (modalMode === 'close' && !isFullyPaid(target) && !forceClose)">
            <c-spinner size="sm" *ngIf="isSubmitting"></c-spinner>
            {{ modalMode === 'close' ? 'Confirm Close' : 'Confirm Foreclose' }}
          </button>
        </div>

      </c-card-body>
    </c-card>
  </div>

</c-container>
`, styles: ["/* src/app/views/base/po-closure/po-closure.component.css */\n.po-closure .page-title {\n  font-weight: 600;\n}\n.po-closure .page-subtitle {\n  font-size: 0.875rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.po-closure .form-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  margin-bottom: 0.25rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.po-closure .req {\n  color: var(--cui-danger, #e55353);\n  font-weight: 700;\n}\n.po-closure .stat-card {\n  height: 100%;\n  border-left: 3px solid var(--cui-border-color, #dee2e6);\n}\n.po-closure .stat-card.stat-success {\n  border-left-color: var(--cui-success, #2eb85c);\n}\n.po-closure .stat-card.stat-warning {\n  border-left-color: var(--cui-warning, #f9b115);\n}\n.po-closure .stat-label {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--cui-secondary-color, #6c757d);\n  margin-bottom: 0.25rem;\n}\n.po-closure .stat-value {\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.po-closure table th {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.po-closure .po-style-card {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.po-closure .po-table {\n  font-size: 0.88rem;\n  border-collapse: collapse;\n}\n.po-closure .table-header th {\n  background: #e8eaf6 !important;\n  color: #1a237e !important;\n  font-weight: 700;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 12px 14px;\n  border-bottom: 2px solid #c5cae9 !important;\n}\n.po-closure .po-table tbody .po-main-row td {\n  padding: 12px 14px;\n  vertical-align: middle;\n  border-top: 1px solid #e9ecef !important;\n  border-bottom: none !important;\n}\n.po-closure .po-table tbody .po-main-row:first-child td {\n  border-top: none !important;\n}\n.po-closure .po-main-row:hover td {\n  background: #f8f9ff !important;\n}\n.po-closure .po-number-link {\n  font-weight: 700;\n  color: #1976d2;\n  cursor: pointer;\n  text-decoration: none;\n}\n.po-closure .po-number-link:hover {\n  text-decoration: underline;\n}\n.po-closure .pagination-bar {\n  border-top: 1px solid #e9ecef;\n  background: #fafbff;\n}\n.po-closure .page-size-group {\n  display: flex;\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.po-closure .page-size-btn {\n  background: #fff;\n  border: none;\n  border-right: 1px solid #d0d5dd;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #555;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  line-height: 1;\n}\n.po-closure .page-size-btn:last-child {\n  border-right: none;\n}\n.po-closure .page-size-btn:hover {\n  background: #f0f4ff;\n  color: #1976d2;\n}\n.po-closure .page-size-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-weight: 700;\n}\n.po-closure .page-num-btn {\n  min-width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #444;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  padding: 0 4px;\n}\n.po-closure .page-num-btn:hover {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #1976d2;\n}\n.po-closure .page-num-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border-color: #667eea;\n  color: #fff;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);\n}\n.po-closure .page-nav-btn {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #555;\n  font-size: 0.85rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.po-closure .page-nav-btn:hover:not(:disabled) {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #667eea;\n}\n.po-closure .page-nav-btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.po-closure .page-ellipsis {\n  padding: 0 4px;\n  color: #aaa;\n  font-size: 0.9rem;\n  line-height: 34px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media (max-width: 768px) {\n  .po-closure .pagination-bar {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n  .po-closure .page-size-btn {\n    padding: 5px 9px;\n  }\n}\n.po-closure .modal-backdrop-custom {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1040;\n}\n.po-closure .modal-custom {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(520px, calc(100vw - 2rem));\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n  z-index: 1050;\n}\n/*# sourceMappingURL=po-closure.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: MessageService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PoClosureComponent, { className: "PoClosureComponent", filePath: "src/app/views/base/po-closure/po-closure.component.ts", lineNumber: 39 });
})();
export {
  PoClosureComponent
};
//# sourceMappingURL=chunk-XGKHSJC4.js.map
