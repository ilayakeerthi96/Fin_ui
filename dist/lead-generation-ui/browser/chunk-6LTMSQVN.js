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
import "./chunk-SO7Q7VKX.js";

// src/app/views/base/payment-tracking/payment-tracking.component.ts
function PaymentTrackingComponent_option_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1 === "ALL" ? "All Status" : ctx_r1.statusLabel(s_r1));
  }
}
function PaymentTrackingComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function PaymentTrackingComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "c-spinner", 54);
    \u0275\u0275elementStart(2, "p", 55);
    \u0275\u0275text(3, "Loading invoices\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PaymentTrackingComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, " No invoices match the current filters. ");
    \u0275\u0275elementEnd();
  }
}
function PaymentTrackingComponent_div_94_tr_25_small_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 61);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Advance ", \u0275\u0275pipeBind2(2, 1, inv_r5.advancePaidAmount, "1.2-2"), " ");
  }
}
function PaymentTrackingComponent_div_94_tr_25_span_22_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.daysOverdue(inv_r5), "d overdue)");
  }
}
function PaymentTrackingComponent_div_94_tr_25_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275template(3, PaymentTrackingComponent_div_94_tr_25_span_22_span_3_Template, 2, 1, "span", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("text-danger", ctx_r1.daysOverdue(inv_r5) > 0 && inv_r5.status === "APPROVED")("fw-bold", ctx_r1.daysOverdue(inv_r5) > 0 && inv_r5.status === "APPROVED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 6, inv_r5.dueDate, "dd MMM yy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.daysOverdue(inv_r5) > 0 && inv_r5.status === "APPROVED");
  }
}
function PaymentTrackingComponent_div_94_tr_25_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PaymentTrackingComponent_div_94_tr_25_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Ref: ", inv_r5.paymentReference);
  }
}
function PaymentTrackingComponent_div_94_tr_25_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function PaymentTrackingComponent_div_94_tr_25_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const inv_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPayModal(inv_r5));
    });
    \u0275\u0275text(1, "Mark as Paid");
    \u0275\u0275elementEnd();
  }
}
function PaymentTrackingComponent_div_94_tr_25_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "Settled");
    \u0275\u0275elementEnd();
  }
}
function PaymentTrackingComponent_div_94_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 83)(1, "td")(2, "a", 84);
    \u0275\u0275listener("click", function PaymentTrackingComponent_div_94_tr_25_Template_a_click_2_listener() {
      const inv_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewPO(inv_r5));
    });
    \u0275\u0275element(3, "i", 85);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 86);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "a", 87);
    \u0275\u0275listener("click", function PaymentTrackingComponent_div_94_tr_25_Template_a_click_8_listener() {
      const inv_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewPO(inv_r5));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 64)(11, "div", 88);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PaymentTrackingComponent_div_94_tr_25_small_14_Template, 3, 4, "small", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 90);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 65)(19, "span", 91);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 92);
    \u0275\u0275template(22, PaymentTrackingComponent_div_94_tr_25_span_22_Template, 4, 9, "span", 93)(23, PaymentTrackingComponent_div_94_tr_25_span_23_Template, 2, 0, "span", 89)(24, PaymentTrackingComponent_div_94_tr_25_div_24_Template, 2, 1, "div", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 65);
    \u0275\u0275template(26, PaymentTrackingComponent_div_94_tr_25_button_26_Template, 2, 0, "button", 95)(27, PaymentTrackingComponent_div_94_tr_25_span_27_Template, 2, 0, "span", 96);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const inv_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("table-danger", ctx_r1.daysOverdue(inv_r5) > 0 && inv_r5.status === "APPROVED");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", inv_r5.invoiceNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r5.supplierName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inv_r5.poNumber || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.getSymbolForCode(inv_r5.currency), "", \u0275\u0275pipeBind2(13, 16, inv_r5.totalAmount, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", inv_r5.advancePaidAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 19, ctx_r1.balanceDue(inv_r5), "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "bg-" + ctx_r1.statusColor(inv_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(inv_r5.status));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", inv_r5.dueDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !inv_r5.dueDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", inv_r5.paymentReference);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canMarkPaid(inv_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", inv_r5.status === "PAID");
  }
}
function PaymentTrackingComponent_div_94_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function PaymentTrackingComponent_div_94_button_40_Template_button_click_0_listener() {
      const size_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange(size_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.pageSize === size_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r8);
  }
}
function PaymentTrackingComponent_div_94_ng_container_46_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function PaymentTrackingComponent_div_94_ng_container_46_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function PaymentTrackingComponent_div_94_ng_container_46_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const page_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.currentPage === page_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r10);
  }
}
function PaymentTrackingComponent_div_94_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PaymentTrackingComponent_div_94_ng_container_46_span_1_Template, 2, 0, "span", 100)(2, PaymentTrackingComponent_div_94_ng_container_46_button_2_Template, 2, 3, "button", 101);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", page_r10 === -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", page_r10 !== -1);
  }
}
function PaymentTrackingComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "h5", 59);
    \u0275\u0275element(3, "i", 60);
    \u0275\u0275text(4, "Invoices ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "table", 62)(8, "thead", 63)(9, "tr")(10, "th");
    \u0275\u0275text(11, "Invoice / Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "PO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 64);
    \u0275\u0275text(15, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 64);
    \u0275\u0275text(17, "Balance Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 65);
    \u0275\u0275text(19, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 65);
    \u0275\u0275text(23, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, PaymentTrackingComponent_div_94_tr_25_Template, 28, 22, "tr", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 67)(27, "div", 68)(28, "span", 32);
    \u0275\u0275text(29, " Showing ");
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " of ");
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " invoices ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 69)(37, "label", 70);
    \u0275\u0275text(38, "Rows per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 71);
    \u0275\u0275template(40, PaymentTrackingComponent_div_94_button_40_Template, 2, 3, "button", 72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 73)(42, "button", 74);
    \u0275\u0275listener("click", function PaymentTrackingComponent_div_94_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(1));
    });
    \u0275\u0275element(43, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 76);
    \u0275\u0275listener("click", function PaymentTrackingComponent_div_94_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(45, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, PaymentTrackingComponent_div_94_ng_container_46_Template, 3, 2, "ng-container", 78);
    \u0275\u0275elementStart(47, "button", 79);
    \u0275\u0275listener("click", function PaymentTrackingComponent_div_94_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(48, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 81);
    \u0275\u0275listener("click", function PaymentTrackingComponent_div_94_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.totalPages));
    });
    \u0275\u0275element(50, "i", 82);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.filtered.length, " result", ctx_r1.filtered.length !== 1 ? "s" : "");
    \u0275\u0275advance(19);
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
function PaymentTrackingComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275listener("click", function PaymentTrackingComponent_div_95_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePayModal());
    });
    \u0275\u0275elementEnd();
  }
}
function PaymentTrackingComponent_div_96_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r13 = ctx.$implicit;
    \u0275\u0275property("value", m_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r13);
  }
}
function PaymentTrackingComponent_div_96_c_spinner_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-spinner", 117);
  }
}
function PaymentTrackingComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105)(1, "c-card")(2, "c-card-header")(3, "strong");
    \u0275\u0275text(4, "Record Payment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "c-card-body")(6, "p", 36);
    \u0275\u0275text(7, " Marking ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label", 39);
    \u0275\u0275text(13, "Payment Mode ");
    \u0275\u0275elementStart(14, "span", 106);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 107);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentTrackingComponent_div_96_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.paymentMode, $event) || (ctx_r1.paymentMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 108);
    \u0275\u0275text(18, "\u2014 Select how this was paid \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, PaymentTrackingComponent_div_96_option_19_Template, 2, 2, "option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label", 39);
    \u0275\u0275text(21, "Payment Reference ");
    \u0275\u0275elementStart(22, "span", 106);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentTrackingComponent_div_96_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.paymentReference, $event) || (ctx_r1.paymentReference = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "small", 110);
    \u0275\u0275text(26, " Required so the payment can be traced back to a bank record later. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "label", 39);
    \u0275\u0275text(28, "Remarks ");
    \u0275\u0275elementStart(29, "span", 111);
    \u0275\u0275text(30, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "textarea", 112);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentTrackingComponent_div_96_Template_textarea_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.paymentRemarks, $event) || (ctx_r1.paymentRemarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 113)(33, "button", 114);
    \u0275\u0275listener("click", function PaymentTrackingComponent_div_96_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePayModal());
    });
    \u0275\u0275text(34, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 115);
    \u0275\u0275listener("click", function PaymentTrackingComponent_div_96_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmPayment());
    });
    \u0275\u0275template(36, PaymentTrackingComponent_div_96_c_spinner_36_Template, 1, 0, "c-spinner", 116);
    \u0275\u0275text(37, " Confirm Payment ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.payTarget == null ? null : ctx_r1.payTarget.invoiceNumber);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" as paid (", ctx_r1.getSymbolForCode(ctx_r1.payTarget == null ? null : ctx_r1.payTarget.currency), "", \u0275\u0275pipeBind2(11, 11, ctx_r1.payTarget == null ? null : ctx_r1.payTarget.totalAmount, "1.2-2"), ") for ", ctx_r1.payTarget == null ? null : ctx_r1.payTarget.supplierName, ". ");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.paymentMode);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.paymentModeOptions);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.paymentReference);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.paymentRemarks);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmittingPayment);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmittingPayment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmittingPayment);
  }
}
var _PaymentTrackingComponent = class _PaymentTrackingComponent {
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
    this.invoices = [];
    this.filtered = [];
    this.isLoading = false;
    this.errorMessage = "";
    this.statusFilter = "ALL";
    this.searchText = "";
    this.statusOptions = ["ALL", "SUBMITTED", "APPROVED", "PAID", "REJECTED"];
    this.currentPage = 1;
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25, 50];
    this.showPayModal = false;
    this.payTarget = null;
    this.paymentReference = "";
    this.isSubmittingPayment = false;
    this.companyName = "";
    this.paymentModeOptions = ["NEFT", "RTGS", "IMPS", "UPI", "Cheque", "Cash", "Bank Transfer", "Other"];
    this.paymentMode = "";
    this.paymentRemarks = "";
  }
  ngOnInit() {
    this.companyName = localStorage.getItem("companyName") || "";
    this.load();
  }
  load() {
    if (!this.companyName) {
      this.errorMessage = "No company is associated with this login, so no invoices can be listed.";
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.dataService.getBuyerInvoices(this.companyName).subscribe({
      next: (res) => {
        this.invoices = this.unwrapList(res);
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || "Could not load invoices.";
        this.invoices = [];
        this.filtered = [];
        this.isLoading = false;
      }
    });
  }
  applyFilters() {
    let data = [...this.invoices];
    if (this.statusFilter !== "ALL") {
      data = data.filter((i) => i.status === this.statusFilter);
    }
    const q = this.searchText.trim().toLowerCase();
    if (q) {
      data = data.filter((i) => (i.invoiceNumber || "").toLowerCase().includes(q) || (i.poNumber || "").toLowerCase().includes(q) || (i.supplierName || "").toLowerCase().includes(q) || (i.paymentReference || "").toLowerCase().includes(q));
    }
    this.filtered = data;
    this.currentPage = 1;
  }
  // ==================================================================
  // SUMMARY TILES
  // ==================================================================
  get totalInvoiced() {
    return this.sum(this.invoices.filter((i) => i.status !== "REJECTED_CLOSED"), "totalAmount");
  }
  get totalPaid() {
    return this.sum(this.invoices.filter((i) => i.status === "PAID"), "totalAmount");
  }
  get totalOutstanding() {
    return this.sum(this.invoices.filter((i) => i.status === "APPROVED"), "totalAmount");
  }
  get awaitingApprovalCount() {
    return this.invoices.filter((i) => i.status === "SUBMITTED").length;
  }
  get paidCount() {
    return this.invoices.filter((i) => i.status === "PAID").length;
  }
  get approvedCount() {
    return this.invoices.filter((i) => i.status === "APPROVED").length;
  }
  /** Share of billed value actually collected — the one number that says how healthy
   *  collections are at a glance, the way the PO dashboard's tiles do for PO status. */
  get collectionPercent() {
    if (this.totalInvoiced <= 0)
      return 0;
    return Math.round(this.totalPaid / this.totalInvoiced * 100);
  }
  /** Approved invoices whose due date has already passed — the number that actually
   *  needs someone's attention today, as opposed to totalOutstanding which is everything. */
  get overdueInvoices() {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return this.invoices.filter((i) => {
      if (i.status !== "APPROVED" || !i.dueDate)
        return false;
      const due = new Date(i.dueDate);
      return due < today;
    });
  }
  get overdueCount() {
    return this.overdueInvoices.length;
  }
  get overdueAmount() {
    return this.sum(this.overdueInvoices, "totalAmount");
  }
  /** Days overdue for one invoice — negative means still within terms, shown as "due in Nd". */
  daysOverdue(invoice) {
    if (!invoice?.dueDate)
      return 0;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(invoice.dueDate);
    due.setHours(0, 0, 0, 0);
    return Math.round((today.getTime() - due.getTime()) / 864e5);
  }
  sum(list, field) {
    return list.reduce((total, item) => total + (Number(item[field]) || 0), 0);
  }
  // ==================================================================
  // MARK AS PAID
  // ==================================================================
  canMarkPaid(invoice) {
    return invoice?.status === "APPROVED";
  }
  openPayModal(invoice) {
    if (!this.canMarkPaid(invoice)) {
      this.messageService.showMessage("warning", "Not payable", `Invoice ${invoice.invoiceNumber} is ${invoice.status}. Only an invoice that's Ready for Payment can be marked paid.`);
      return;
    }
    this.payTarget = invoice;
    this.paymentReference = "";
    this.paymentMode = "";
    this.paymentRemarks = "";
    this.showPayModal = true;
  }
  closePayModal() {
    this.showPayModal = false;
    this.payTarget = null;
    this.paymentReference = "";
    this.paymentMode = "";
    this.paymentRemarks = "";
  }
  confirmPayment() {
    if (!this.payTarget)
      return;
    if (!this.paymentReference.trim()) {
      this.messageService.showMessage("warning", "Reference required", "Enter the payment reference (UTR / NEFT / cheque number) so the payment can be traced later.");
      return;
    }
    if (!this.paymentMode) {
      this.messageService.showMessage("warning", "Payment mode required", "Select how this payment was made (NEFT, UPI, cheque, etc.).");
      return;
    }
    this.isSubmittingPayment = true;
    const paidBy = localStorage.getItem("fullName") || "Admin";
    this.dataService.markInvoicePaid(this.payTarget.id, paidBy, this.paymentReference.trim(), this.paymentMode, this.paymentRemarks.trim()).subscribe({
      next: () => {
        this.messageService.showMessage("success", "Payment recorded", `${this.payTarget.invoiceNumber} marked as paid. The PO's payment status has been updated.`);
        this.isSubmittingPayment = false;
        this.closePayModal();
        this.load();
      },
      error: (err) => {
        this.isSubmittingPayment = false;
        const msg = err?.error?.message || "Could not record the payment.";
        this.messageService.showMessage("error", "Payment failed", msg);
      }
    });
  }
  // ==================================================================
  // DISPLAY
  // ==================================================================
  statusColor(status) {
    switch (status) {
      case "PAID":
        return "success";
      case "APPROVED":
        return "info";
      case "SUBMITTED":
        return "warning";
      case "REJECTED":
      case "REJECTED_CLOSED":
        return "danger";
      default:
        return "secondary";
    }
  }
  /** "Approved" reads as "done" — it isn't; the money hasn't moved yet. This is the same
   *  relabel used on the Invoice Management screen, kept in sync so the two never disagree
   *  about what an invoice's status actually means. */
  statusLabel(status) {
    switch (status) {
      case "APPROVED":
        return "Ready for Payment";
      case "SUBMITTED":
        return "Pending Review";
      case "REJECTED":
        return "Returned for Correction";
      case "REJECTED_CLOSED":
        return "Permanently Closed";
      case "PAID":
        return "Paid";
      default:
        return status;
    }
  }
  balanceDue(invoice) {
    if (invoice?.status === "PAID")
      return 0;
    const total = Number(invoice?.totalAmount) || 0;
    const advance = Number(invoice?.advancePaidAmount) || 0;
    const balance = total - advance;
    return balance > 0 ? balance : 0;
  }
  viewPO(invoice) {
    if (invoice?.poId)
      this.router.navigate(["/po-details", invoice.poId]);
  }
  /** Invoices carry a currency CODE ("INR"), not a symbol — this app has no per-invoice
   *  currencySymbol field, so every amount needs converting through this the same way the
   *  rest of the app does (po-list, buyer-invoices, etc.) rather than printing the code. */
  getSymbolForCode(code) {
    const map = {
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
      AUD: "A$",
      NZD: "NZ$"
    };
    return map[code] || code || "\u20B9";
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
_PaymentTrackingComponent.\u0275fac = function PaymentTrackingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentTrackingComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router));
};
_PaymentTrackingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentTrackingComponent, selectors: [["app-payment-tracking"]], decls: 97, vars: 49, consts: [["fluid", "", 1, "payment-tracking"], [1, "mb-3", "align-items-center"], [3, "md"], [1, "page-title", "mb-1"], [1, "page-subtitle", "mb-0"], [1, "text-end", 3, "md"], ["cButton", "", "color", "secondary", "variant", "outline", "size", "sm", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "me-1", 2, "vertical-align", "-2px"], ["d", "M21 2v6h-6"], ["d", "M3 12a9 9 0 0 1 15-6.7L21 8"], ["d", "M3 22v-6h6"], ["d", "M21 12a9 9 0 0 1-15 6.7L3 16"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-md-3"], [1, "stat-card"], [1, "stat-icon-wrap", "stat-purple"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], [1, "stat-info"], [1, "stat-value", "stat-value-sm"], [1, "stat-label"], [1, "stat-icon-wrap", "stat-green"], ["d", "M20 6 9 17l-5-5"], [1, "stat-icon-wrap", "stat-hold"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], [1, "stat-icon-wrap", "stat-red"], ["d", "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"], ["d", "M12 9v4M12 17h.01"], [1, "mb-4", "collection-card"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "fw-semibold"], [1, "text-muted", "small"], [1, "progress", 2, "height", "10px"], [1, "progress-bar", "bg-success"], [1, "text-end", "small", "text-muted", "mt-1"], [1, "mb-3"], [1, "align-items-end"], [1, "mb-2", 3, "md"], [1, "form-label"], ["name", "statusFilter", 1, "form-select", "form-select-sm", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "searchText", "placeholder", "Invoice number, PO number, supplier or payment reference", 1, "form-control", "form-control-sm", 3, "ngModelChange", "input", "ngModel"], [1, "mb-2", "text-end", 3, "md"], ["class", "alert alert-danger", 4, "ngIf"], [1, "card", "po-style-card"], ["class", "text-center py-5", 4, "ngIf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "modal-backdrop-custom", 3, "click", 4, "ngIf"], ["class", "modal-custom", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [1, "text-center", "py-5"], ["color", "primary"], [1, "mt-2", "text-muted"], [1, "text-center", "py-5", "text-muted"], [1, "table-responsive"], [1, "px-4", "pt-3", "pb-2", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold", "text-dark", "mb-0"], [1, "bi", "bi-table", "me-2", "text-primary"], [1, "text-muted"], [1, "table", "po-table", "mb-0"], [1, "table-header"], [1, "text-end"], [1, "text-center"], ["class", "po-main-row", 3, "table-danger", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "pagination-bar", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "px-4", "py-3"], [1, "d-flex", "align-items-center", "gap-3", "flex-wrap"], [1, "d-flex", "align-items-center", "gap-2"], [1, "text-muted", "small", "mb-0", "text-nowrap"], [1, "page-size-group"], ["class", "page-size-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "gap-1"], ["title", "First page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-left"], ["title", "Previous page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [4, "ngFor", "ngForOf"], ["title", "Next page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], ["title", "Last page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-right"], [1, "po-main-row"], ["href", "javascript:void(0)", 1, "po-number-link", 3, "click"], [1, "bi", "bi-file-earmark-text", "me-1"], [1, "text-muted", "small", "mt-1"], ["href", "javascript:void(0)", 3, "click"], [1, "fw-bold", "text-success", "fs-6"], ["class", "text-muted", 4, "ngIf"], [1, "text-end", "fw-semibold"], [1, "badge", 3, "ngClass"], [1, "small"], [3, "text-danger", "fw-bold", 4, "ngIf"], ["class", "text-muted small mt-1", 4, "ngIf"], ["cButton", "", "color", "success", "size", "sm", 3, "click", 4, "ngIf"], ["class", "text-muted small", 4, "ngIf"], [4, "ngIf"], ["cButton", "", "color", "success", "size", "sm", 3, "click"], [1, "page-size-btn", 3, "click"], ["class", "page-ellipsis", 4, "ngIf"], ["class", "page-num-btn", 3, "active", "click", 4, "ngIf"], [1, "page-ellipsis"], [1, "page-num-btn", 3, "click"], [1, "modal-backdrop-custom", 3, "click"], [1, "modal-custom"], [1, "req"], ["name", "paymentMode", 1, "form-select", "mb-3", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], ["name", "paymentReference", "placeholder", "UTR / NEFT / cheque number", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-muted", "d-block", "mb-3"], [1, "text-muted", "fw-normal"], ["rows", "2", "name", "paymentRemarks", "placeholder", "Anything worth noting about this payment", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-end", "mt-4"], ["cButton", "", "color", "secondary", "variant", "outline", 1, "me-2", 3, "click", "disabled"], ["cButton", "", "color", "success", 3, "click", "disabled"], ["size", "sm", 4, "ngIf"], ["size", "sm"]], template: function PaymentTrackingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-container", 0)(1, "c-row", 1)(2, "c-col", 2)(3, "h4", 3);
    \u0275\u0275text(4, "Payment Tracking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, " Supplier invoices and where their money is. Marking an invoice paid updates the purchase order's payment status automatically. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "c-col", 5)(8, "button", 6);
    \u0275\u0275listener("click", function PaymentTrackingComponent_Template_button_click_8_listener() {
      return ctx.load();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 7);
    \u0275\u0275element(10, "path", 8)(11, "path", 9)(12, "path", 10)(13, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Refresh ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 16);
    \u0275\u0275element(20, "path", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 18)(22, "div", 19);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 20);
    \u0275\u0275text(26, "Total Invoiced");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 13)(28, "div", 14)(29, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 16);
    \u0275\u0275element(31, "path", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div", 18)(33, "div", 19);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 20);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 13)(39, "div", 14)(40, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 16);
    \u0275\u0275element(42, "circle", 24)(43, "path", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "div", 18)(45, "div", 19);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 20);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 13)(51, "div", 14)(52, "div", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 16);
    \u0275\u0275element(54, "path", 27)(55, "path", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(56, "div", 18)(57, "div", 19);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 20);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "number");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(62, "c-card", 29)(63, "c-card-body")(64, "div", 30)(65, "span", 31);
    \u0275\u0275text(66, "Collection Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 32);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "number");
    \u0275\u0275pipe(70, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 33);
    \u0275\u0275element(72, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 35);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "c-card", 36)(76, "c-card-body")(77, "c-row", 37)(78, "c-col", 38)(79, "label", 39);
    \u0275\u0275text(80, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "select", 40);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentTrackingComponent_Template_select_ngModelChange_81_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
      return $event;
    });
    \u0275\u0275listener("change", function PaymentTrackingComponent_Template_select_change_81_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275template(82, PaymentTrackingComponent_option_82_Template, 2, 2, "option", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "c-col", 38)(84, "label", 39);
    \u0275\u0275text(85, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentTrackingComponent_Template_input_ngModelChange_86_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
      return $event;
    });
    \u0275\u0275listener("input", function PaymentTrackingComponent_Template_input_input_86_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "c-col", 43)(88, "span", 32);
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(90, PaymentTrackingComponent_div_90_Template, 2, 1, "div", 44);
    \u0275\u0275elementStart(91, "div", 45);
    \u0275\u0275template(92, PaymentTrackingComponent_div_92_Template, 4, 0, "div", 46)(93, PaymentTrackingComponent_div_93_Template, 2, 0, "div", 47)(94, PaymentTrackingComponent_div_94_Template, 51, 13, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(95, PaymentTrackingComponent_div_95_Template, 1, 0, "div", 49)(96, PaymentTrackingComponent_div_96_Template, 38, 14, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("md", 8);
    \u0275\u0275advance(5);
    \u0275\u0275property("md", 4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(24, 31, ctx.totalInvoiced, "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(35, 34, ctx.totalPaid, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Paid \xB7 ", ctx.paidCount, " invoice(s)");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(47, 37, ctx.totalOutstanding, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Approved \xB7 ", ctx.approvedCount, " awaiting payment");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("stat-card-alert", ctx.overdueCount > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.overdueCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Overdue \xB7 \u20B9", \u0275\u0275pipeBind2(61, 40, ctx.overdueAmount, "1.2-2"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2(" \u20B9", \u0275\u0275pipeBind2(69, 43, ctx.totalPaid, "1.2-2"), " of \u20B9", \u0275\u0275pipeBind2(70, 46, ctx.totalInvoiced, "1.2-2"), " collected ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx.collectionPercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.collectionPercent, "%");
    \u0275\u0275advance(4);
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
    \u0275\u0275textInterpolate2("", ctx.filtered.length, " of ", ctx.invoices.length, " invoice(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filtered.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filtered.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showPayModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showPayModal);
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
  SpinnerComponent,
  DecimalPipe,
  DatePipe
], styles: ["\n\n.payment-tracking[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.payment-tracking[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.payment-tracking[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  margin-bottom: 0.25rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.payment-tracking[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--cui-danger, #e55353);\n  font-weight: 700;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px 22px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  height: 100%;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.11);\n}\n.stat-card-alert[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 65, 108, 0.35);\n}\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  flex-shrink: 0;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6c63ff,\n      #9b59b6);\n}\n.stat-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #56ab2f,\n      #a8e063);\n}\n.stat-hold[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f7971e,\n      #ffd200);\n}\n.stat-red[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff416c,\n      #ff4b2b);\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 0;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1a2e;\n  line-height: 1.1;\n  letter-spacing: -0.5px;\n}\n.stat-value-sm[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 2px;\n}\n.collection-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.po-style-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.po-table[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  border-collapse: collapse;\n}\n.table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #e8eaf6 !important;\n  color: #1a237e !important;\n  font-weight: 700;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 12px 14px;\n  border-bottom: 2px solid #c5cae9 !important;\n}\n.po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  vertical-align: middle;\n  border-top: 1px solid #e9ecef !important;\n  border-bottom: none !important;\n}\n.po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  border-top: none !important;\n}\n.po-main-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f9ff !important;\n}\n.po-number-link[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1976d2;\n  cursor: pointer;\n  text-decoration: none;\n}\n.po-number-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.pagination-bar[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef;\n  background: #fafbff;\n}\n.page-size-group[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.page-size-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: none;\n  border-right: 1px solid #d0d5dd;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #555;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  line-height: 1;\n}\n.page-size-btn[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.page-size-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  color: #1976d2;\n}\n.page-size-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-weight: 700;\n}\n.page-num-btn[_ngcontent-%COMP%] {\n  min-width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #444;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  padding: 0 4px;\n}\n.page-num-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #1976d2;\n}\n.page-num-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border-color: #667eea;\n  color: #fff;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);\n}\n.page-nav-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #555;\n  font-size: 0.85rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.page-nav-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #667eea;\n}\n.page-nav-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.page-ellipsis[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  color: #aaa;\n  font-size: 0.9rem;\n  line-height: 34px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media (max-width: 768px) {\n  .pagination-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n  .page-size-btn[_ngcontent-%COMP%] {\n    padding: 5px 9px;\n  }\n}\n.payment-tracking[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.payment-tracking[_ngcontent-%COMP%]   .modal-backdrop-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1040;\n}\n.payment-tracking[_ngcontent-%COMP%]   .modal-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(520px, calc(100vw - 2rem));\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n  z-index: 1050;\n}\n/*# sourceMappingURL=payment-tracking.component.css.map */"] });
var PaymentTrackingComponent = _PaymentTrackingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentTrackingComponent, [{
    type: Component,
    args: [{ selector: "app-payment-tracking", standalone: true, imports: [
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
    ], template: `<c-container fluid class="payment-tracking">

  <c-row class="mb-3 align-items-center">
    <c-col [md]="8">
      <h4 class="page-title mb-1">Payment Tracking</h4>
      <p class="page-subtitle mb-0">
        Supplier invoices and where their money is. Marking an invoice paid updates the
        purchase order's payment status automatically.
      </p>
    </c-col>
    <c-col [md]="4" class="text-end">
      <button cButton color="secondary" variant="outline" size="sm"
              (click)="load()" [disabled]="isLoading">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" class="me-1" style="vertical-align:-2px;">
          <path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
          <path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
        </svg>
        Refresh
      </button>
    </c-col>
  </c-row>

  <!-- ===================== DASHBOARD-STYLE SUMMARY TILES ===================== -->
  <div class="row g-3 mb-4">
    <div class="col-6 col-md-3">
      <div class="stat-card">
        <div class="stat-icon-wrap stat-purple">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="stat-info">
          <div class="stat-value stat-value-sm">\u20B9{{ totalInvoiced | number:'1.2-2' }}</div>
          <div class="stat-label">Total Invoiced</div>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="stat-card">
        <div class="stat-icon-wrap stat-green">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <div class="stat-info">
          <div class="stat-value stat-value-sm">\u20B9{{ totalPaid | number:'1.2-2' }}</div>
          <div class="stat-label">Paid \xB7 {{ paidCount }} invoice(s)</div>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="stat-card">
        <div class="stat-icon-wrap stat-hold">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <div class="stat-info">
          <div class="stat-value stat-value-sm">\u20B9{{ totalOutstanding | number:'1.2-2' }}</div>
          <div class="stat-label">Approved \xB7 {{ approvedCount }} awaiting payment</div>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="stat-card" [class.stat-card-alert]="overdueCount > 0">
        <div class="stat-icon-wrap stat-red">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4M12 17h.01"/></svg>
        </div>
        <div class="stat-info">
          <div class="stat-value stat-value-sm">{{ overdueCount }}</div>
          <div class="stat-label">Overdue \xB7 \u20B9{{ overdueAmount | number:'1.2-2' }}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Collection progress \u2014 the one bar that says how healthy things are at a glance -->
  <c-card class="mb-4 collection-card">
    <c-card-body>
      <div class="d-flex justify-content-between align-items-center mb-2">
        <span class="fw-semibold">Collection Progress</span>
        <span class="text-muted small">
          \u20B9{{ totalPaid | number:'1.2-2' }} of \u20B9{{ totalInvoiced | number:'1.2-2' }} collected
        </span>
      </div>
      <div class="progress" style="height: 10px;">
        <div class="progress-bar bg-success" [style.width.%]="collectionPercent"></div>
      </div>
      <div class="text-end small text-muted mt-1">{{ collectionPercent }}%</div>
    </c-card-body>
  </c-card>

  <!-- ===================== FILTERS ===================== -->
  <c-card class="mb-3">
    <c-card-body>
      <c-row class="align-items-end">
        <c-col [md]="3" class="mb-2">
          <label class="form-label">Status</label>
          <select class="form-select form-select-sm" [(ngModel)]="statusFilter"
                  name="statusFilter" (change)="applyFilters()">
            <option *ngFor="let s of statusOptions" [value]="s">{{ s === 'ALL' ? 'All Status' : statusLabel(s) }}</option>
          </select>
        </c-col>
        <c-col [md]="6" class="mb-2">
          <label class="form-label">Search</label>
          <input class="form-control form-control-sm" [(ngModel)]="searchText" name="searchText"
                 (input)="applyFilters()"
                 placeholder="Invoice number, PO number, supplier or payment reference">
        </c-col>
        <c-col [md]="3" class="mb-2 text-end">
          <span class="text-muted small">{{ filtered.length }} of {{ invoices.length }} invoice(s)</span>
        </c-col>
      </c-row>
    </c-card-body>
  </c-card>

  <div class="alert alert-danger" *ngIf="errorMessage">{{ errorMessage }}</div>

  <!-- ===================== TABLE ===================== -->
  <div class="card po-style-card">

    <div class="text-center py-5" *ngIf="isLoading">
      <c-spinner color="primary"></c-spinner>
      <p class="mt-2 text-muted">Loading invoices\u2026</p>
    </div>

    <div class="text-center py-5 text-muted" *ngIf="!isLoading && filtered.length === 0">
      No invoices match the current filters.
    </div>

    <div class="table-responsive" *ngIf="!isLoading && filtered.length > 0">

      <!-- Table header with result count -->
      <div class="px-4 pt-3 pb-2 d-flex align-items-center justify-content-between">
        <h5 class="fw-bold text-dark mb-0">
          <i class="bi bi-table me-2 text-primary"></i>Invoices
        </h5>
        <small class="text-muted">{{ filtered.length }} result{{ filtered.length !== 1 ? 's' : '' }}</small>
      </div>

      <table class="table po-table mb-0">
        <thead class="table-header">
          <tr>
            <th>Invoice / Supplier</th>
            <th>PO</th>
            <th class="text-end">Amount</th>
            <th class="text-end">Balance Due</th>
            <th class="text-center">Status</th>
            <th>Due Date</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="po-main-row" *ngFor="let inv of paginated; trackBy: trackById"
              [class.table-danger]="daysOverdue(inv) > 0 && inv.status === 'APPROVED'">
            <td>
              <a class="po-number-link" href="javascript:void(0)" (click)="viewPO(inv)">
                <i class="bi bi-file-earmark-text me-1"></i>{{ inv.invoiceNumber }}
              </a>
              <div class="text-muted small mt-1">{{ inv.supplierName }}</div>
            </td>
            <td>
              <a href="javascript:void(0)" (click)="viewPO(inv)">{{ inv.poNumber || '\u2014' }}</a>
            </td>
            <td class="text-end">
              <div class="fw-bold text-success fs-6">{{ getSymbolForCode(inv.currency) }}{{ inv.totalAmount | number:'1.2-2' }}</div>
              <small class="text-muted" *ngIf="inv.advancePaidAmount">
                Advance {{ inv.advancePaidAmount | number:'1.2-2' }}
              </small>
            </td>
            <td class="text-end fw-semibold">{{ balanceDue(inv) | number:'1.2-2' }}</td>
            <td class="text-center"><span class="badge" [ngClass]="'bg-' + statusColor(inv.status)">{{ statusLabel(inv.status) }}</span></td>
            <td class="small">
              <span *ngIf="inv.dueDate" [class.text-danger]="daysOverdue(inv) > 0 && inv.status === 'APPROVED'"
                    [class.fw-bold]="daysOverdue(inv) > 0 && inv.status === 'APPROVED'">
                {{ inv.dueDate | date:'dd MMM yy' }}
                <span *ngIf="daysOverdue(inv) > 0 && inv.status === 'APPROVED'">({{ daysOverdue(inv) }}d overdue)</span>
              </span>
              <span *ngIf="!inv.dueDate" class="text-muted">\u2014</span>
              <div class="text-muted small mt-1" *ngIf="inv.paymentReference">Ref: {{ inv.paymentReference }}</div>
            </td>
            <td class="text-center">
              <button cButton color="success" size="sm"
                      *ngIf="canMarkPaid(inv)"
                      (click)="openPayModal(inv)">Mark as Paid</button>
              <span class="text-muted small" *ngIf="inv.status === 'PAID'">Settled</span>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- ===== PAGINATION BAR ===== -->
      <div class="pagination-bar d-flex align-items-center justify-content-between flex-wrap gap-3 px-4 py-3">
        <div class="d-flex align-items-center gap-3 flex-wrap">
          <span class="text-muted small">
            Showing <strong>{{ startIndex }}\u2013{{ endIndex }}</strong> of <strong>{{ filtered.length }}</strong> invoices
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

  <!-- ===================== MARK AS PAID DIALOG ===================== -->
  <div class="modal-backdrop-custom" *ngIf="showPayModal" (click)="closePayModal()"></div>
  <div class="modal-custom" *ngIf="showPayModal">
    <c-card>
      <c-card-header><strong>Record Payment</strong></c-card-header>
      <c-card-body>
        <p class="mb-3">
          Marking <strong>{{ payTarget?.invoiceNumber }}</strong> as paid
          ({{ getSymbolForCode(payTarget?.currency) }}{{ payTarget?.totalAmount | number:'1.2-2' }})
          for {{ payTarget?.supplierName }}.
        </p>

        <label class="form-label">Payment Mode <span class="req">*</span></label>
        <select class="form-select mb-3" [(ngModel)]="paymentMode" name="paymentMode">
          <option value="" disabled>\u2014 Select how this was paid \u2014</option>
          <option *ngFor="let m of paymentModeOptions" [value]="m">{{ m }}</option>
        </select>

        <label class="form-label">Payment Reference <span class="req">*</span></label>
        <input class="form-control" [(ngModel)]="paymentReference" name="paymentReference"
               placeholder="UTR / NEFT / cheque number">
        <small class="text-muted d-block mb-3">
          Required so the payment can be traced back to a bank record later.
        </small>

        <label class="form-label">Remarks <span class="text-muted fw-normal">(optional)</span></label>
        <textarea class="form-control" rows="2" [(ngModel)]="paymentRemarks" name="paymentRemarks"
                  placeholder="Anything worth noting about this payment"></textarea>

        <div class="text-end mt-4">
          <button cButton color="secondary" variant="outline" class="me-2"
                  (click)="closePayModal()" [disabled]="isSubmittingPayment">Cancel</button>
          <button cButton color="success" (click)="confirmPayment()" [disabled]="isSubmittingPayment">
            <c-spinner size="sm" *ngIf="isSubmittingPayment"></c-spinner>
            Confirm Payment
          </button>
        </div>
      </c-card-body>
    </c-card>
  </div>

</c-container>
`, styles: ["/* src/app/views/base/payment-tracking/payment-tracking.component.css */\n.payment-tracking .page-title {\n  font-weight: 600;\n}\n.payment-tracking .page-subtitle {\n  font-size: 0.875rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.payment-tracking .form-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  margin-bottom: 0.25rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.payment-tracking .req {\n  color: var(--cui-danger, #e55353);\n  font-weight: 700;\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px 22px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  height: 100%;\n}\n.stat-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.11);\n}\n.stat-card-alert {\n  border: 1px solid rgba(255, 65, 108, 0.35);\n}\n.stat-icon-wrap {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  flex-shrink: 0;\n}\n.stat-purple {\n  background:\n    linear-gradient(\n      135deg,\n      #6c63ff,\n      #9b59b6);\n}\n.stat-green {\n  background:\n    linear-gradient(\n      135deg,\n      #56ab2f,\n      #a8e063);\n}\n.stat-hold {\n  background:\n    linear-gradient(\n      135deg,\n      #f7971e,\n      #ffd200);\n}\n.stat-red {\n  background:\n    linear-gradient(\n      135deg,\n      #ff416c,\n      #ff4b2b);\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 0;\n}\n.stat-value {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1a2e;\n  line-height: 1.1;\n  letter-spacing: -0.5px;\n}\n.stat-value-sm {\n  font-size: 1.3rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.stat-label {\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 2px;\n}\n.collection-card {\n  border-radius: 12px;\n}\n.po-style-card {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.po-table {\n  font-size: 0.88rem;\n  border-collapse: collapse;\n}\n.table-header th {\n  background: #e8eaf6 !important;\n  color: #1a237e !important;\n  font-weight: 700;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 12px 14px;\n  border-bottom: 2px solid #c5cae9 !important;\n}\n.po-table tbody .po-main-row td {\n  padding: 12px 14px;\n  vertical-align: middle;\n  border-top: 1px solid #e9ecef !important;\n  border-bottom: none !important;\n}\n.po-table tbody .po-main-row:first-child td {\n  border-top: none !important;\n}\n.po-main-row:hover td {\n  background: #f8f9ff !important;\n}\n.po-number-link {\n  font-weight: 700;\n  color: #1976d2;\n  cursor: pointer;\n  text-decoration: none;\n}\n.po-number-link:hover {\n  text-decoration: underline;\n}\n.pagination-bar {\n  border-top: 1px solid #e9ecef;\n  background: #fafbff;\n}\n.page-size-group {\n  display: flex;\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.page-size-btn {\n  background: #fff;\n  border: none;\n  border-right: 1px solid #d0d5dd;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #555;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  line-height: 1;\n}\n.page-size-btn:last-child {\n  border-right: none;\n}\n.page-size-btn:hover {\n  background: #f0f4ff;\n  color: #1976d2;\n}\n.page-size-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-weight: 700;\n}\n.page-num-btn {\n  min-width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #444;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  padding: 0 4px;\n}\n.page-num-btn:hover {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #1976d2;\n}\n.page-num-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border-color: #667eea;\n  color: #fff;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);\n}\n.page-nav-btn {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #555;\n  font-size: 0.85rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.page-nav-btn:hover:not(:disabled) {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #667eea;\n}\n.page-nav-btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.page-ellipsis {\n  padding: 0 4px;\n  color: #aaa;\n  font-size: 0.9rem;\n  line-height: 34px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media (max-width: 768px) {\n  .pagination-bar {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n  .page-size-btn {\n    padding: 5px 9px;\n  }\n}\n.payment-tracking table th {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.payment-tracking .modal-backdrop-custom {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1040;\n}\n.payment-tracking .modal-custom {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(520px, calc(100vw - 2rem));\n  max-height: calc(100vh - 2rem);\n  overflow-y: auto;\n  z-index: 1050;\n}\n/*# sourceMappingURL=payment-tracking.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: MessageService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentTrackingComponent, { className: "PaymentTrackingComponent", filePath: "src/app/views/base/payment-tracking/payment-tracking.component.ts", lineNumber: 35 });
})();
export {
  PaymentTrackingComponent
};
//# sourceMappingURL=chunk-6LTMSQVN.js.map
