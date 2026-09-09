import {
  BuyerService
} from "./chunk-PQ25B5FP.js";
import {
  E
} from "./chunk-YFUTHTYN.js";
import {
  BadgeComponent,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ContainerComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalModule,
  ModalTitleDirective,
  RowComponent,
  SpinnerComponent
} from "./chunk-U7YW3DHP.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction6,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BCCUO726.js";
import {
  require_html2canvas
} from "./chunk-XQEXEAGC.js";
import "./chunk-7YWLATDR.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-SO7Q7VKX.js";

// src/app/views/base/buyer-invoices/buyer-invoices.component.ts
var import_html2canvas = __toESM(require_html2canvas());
var _c0 = (a0) => ({ "background": a0 });
var _c1 = (a0, a1, a2, a3) => ({ "bi-check-circle": a0, "bi-arrow-counterclockwise": a1, "bi-x-octagon": a2, "bi-currency-rupee": a3 });
var _c2 = (a0, a1, a2, a3, a4, a5) => ({ "bg-secondary": a0, "bg-primary": a1, "bg-success": a2, "bg-warning text-dark": a3, "bg-danger": a4, "bg-info": a5 });
var _c3 = (a0, a1) => ({ "bg-success": a0, "bg-danger": a1 });
var _c4 = (a0, a1, a2, a3) => ({ "bi-check-lg": a0, "bi-arrow-counterclockwise": a1, "bi-x-octagon": a2, "bi-check2-all": a3 });
function BuyerInvoicesComponent_div_1_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r0.loggedInBuyer.state);
  }
}
function BuyerInvoicesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85)(2, "div", 86)(3, "div", 87)(4, "div", 88)(5, "div", 89)(6, "div", 90)(7, "div", 91);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 92)(10, "h3", 93);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 94);
    \u0275\u0275element(13, "i", 95);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 96)(16, "div", 97)(17, "div", 98)(18, "div", 99)(19, "div", 100);
    \u0275\u0275element(20, "i", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 102)(22, "div", 103);
    \u0275\u0275text(23, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 104);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 98)(27, "div", 99)(28, "div", 100);
    \u0275\u0275element(29, "i", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 102)(31, "div", 103);
    \u0275\u0275text(32, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 104);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 98)(36, "div", 99)(37, "div", 100);
    \u0275\u0275element(38, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 102)(40, "div", 103);
    \u0275\u0275text(41, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 104);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 98)(45, "div", 99)(46, "div", 100);
    \u0275\u0275element(47, "i", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 102)(49, "div", 103);
    \u0275\u0275text(50, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 104);
    \u0275\u0275text(52);
    \u0275\u0275template(53, BuyerInvoicesComponent_div_1_span_53_Template, 2, 1, "span", 68);
    \u0275\u0275elementEnd()()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.getInitials(ctx_r0.loggedInBuyer.contactPersonName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.loggedInBuyer.contactPersonName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.loggedInBuyer.companyType, " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.loggedInBuyer.companyName);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.loggedInBuyer.email);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.loggedInBuyer.contactPersonPhone);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r0.loggedInBuyer.city || "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loggedInBuyer.city && ctx_r0.loggedInBuyer.state);
  }
}
function BuyerInvoicesComponent_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fy_r2 = ctx.$implicit;
    \u0275\u0275property("value", fy_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", fy_r2.label, " ");
  }
}
function BuyerInvoicesComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 110);
    \u0275\u0275element(2, "i", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 112);
    \u0275\u0275text(5, "Active Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 113);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.activeDateRangeLabel);
  }
}
function BuyerInvoicesComponent_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 114);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_button_56_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetDateFilter());
    });
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275text(2, "Current FY ");
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_c_row_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-row", 116)(1, "c-col", 117)(2, "div", 118);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_c_row_57_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.statusFilter = "ALL";
      return \u0275\u0275resetView(ctx_r0.applyFilters());
    });
    \u0275\u0275elementStart(3, "div", 119);
    \u0275\u0275element(4, "i", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 121)(6, "div", 122);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 123);
    \u0275\u0275text(9, "Total Invoice");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "c-col", 117)(11, "div", 118);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_c_row_57_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.statusFilter = "SUBMITTED";
      return \u0275\u0275resetView(ctx_r0.applyFilters());
    });
    \u0275\u0275elementStart(12, "div", 124);
    \u0275\u0275element(13, "i", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 121)(15, "div", 122);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 123);
    \u0275\u0275text(18, "Pending Invoice");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "c-col", 117)(20, "div", 118);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_c_row_57_Template_div_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.statusFilter = "APPROVED";
      return \u0275\u0275resetView(ctx_r0.applyFilters());
    });
    \u0275\u0275elementStart(21, "div", 126);
    \u0275\u0275element(22, "i", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 121)(24, "div", 122);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 123);
    \u0275\u0275text(27, "Approved Invoice");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "c-col", 117)(29, "div", 118);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_c_row_57_Template_div_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.statusFilter = "PAID";
      return \u0275\u0275resetView(ctx_r0.applyFilters());
    });
    \u0275\u0275elementStart(30, "div", 128);
    \u0275\u0275element(31, "i", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 121)(33, "div", 130);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 123);
    \u0275\u0275text(36, "Paid");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "c-col", 117)(38, "div", 118);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_c_row_57_Template_div_click_38_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.statusFilter = "REJECTED";
      return \u0275\u0275resetView(ctx_r0.applyFilters());
    });
    \u0275\u0275elementStart(39, "div", 131);
    \u0275\u0275element(40, "i", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 121)(42, "div", 122);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 123);
    \u0275\u0275text(45, "Rejected");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats.total);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats.submitted);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats.approved);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats.paid);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats.rejected);
  }
}
function BuyerInvoicesComponent_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 133);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r0.activeDateRangeLabel, " ");
  }
}
function BuyerInvoicesComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275element(1, "div", 135);
    \u0275\u0275elementStart(2, "p", 136);
    \u0275\u0275text(3, "Loading invoices...");
    \u0275\u0275elementEnd()();
  }
}
function BuyerInvoicesComponent_div_96_tr_23_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 162);
    \u0275\u0275element(1, "i", 163);
    \u0275\u0275text(2, "Resubmitted ");
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_div_96_tr_23_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 164);
    \u0275\u0275text(1, "OVERDUE");
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_div_96_tr_23_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" by ", inv_r6.paidBy, " ");
  }
}
function BuyerInvoicesComponent_div_96_tr_23_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 166);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_div_96_tr_23_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const inv_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.handleApproveClick(inv_r6));
    });
    \u0275\u0275element(1, "i", 167);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", inv_r6.canApprove ? "btn-success" : "btn-outline-secondary")("title", inv_r6.canApprove ? "Approve Invoice" : "Complete GRN & 3-Way Match first");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", inv_r6.canApprove ? "bi-check-lg" : "bi-lock-fill");
  }
}
function BuyerInvoicesComponent_div_96_tr_23_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 168);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_div_96_tr_23_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const inv_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openActionModal(inv_r6, "reject"));
    });
    \u0275\u0275element(1, "i", 169);
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_div_96_tr_23_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 170);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_div_96_tr_23_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const inv_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openAdvanceModal(inv_r6));
    });
    \u0275\u0275element(1, "i", 171);
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_div_96_tr_23_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 172);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_div_96_tr_23_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const inv_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openActionModal(inv_r6, "paid"));
    });
    \u0275\u0275element(1, "i", 129);
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_div_96_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 144)(1, "td", 140)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 145);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_div_96_tr_23_Template_div_click_5_listener() {
      const inv_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewInvoice(inv_r6));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 146);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, BuyerInvoicesComponent_div_96_tr_23_span_9_Template, 3, 0, "span", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div", 148);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 148);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "small", 146);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "small");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "small");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, BuyerInvoicesComponent_div_96_tr_23_span_24_Template, 2, 0, "span", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 141)(26, "span", 150);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 142)(29, "span", 151);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, BuyerInvoicesComponent_div_96_tr_23_div_31_Template, 2, 1, "div", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 142)(33, "div", 153)(34, "button", 154);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_div_96_tr_23_Template_button_click_34_listener() {
      const inv_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewInvoice(inv_r6));
    });
    \u0275\u0275element(35, "i", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, BuyerInvoicesComponent_div_96_tr_23_button_36_Template, 2, 3, "button", 156)(37, BuyerInvoicesComponent_div_96_tr_23_button_37_Template, 2, 0, "button", 157)(38, BuyerInvoicesComponent_div_96_tr_23_button_38_Template, 2, 0, "button", 158)(39, BuyerInvoicesComponent_div_96_tr_23_button_39_Template, 2, 0, "button", 159);
    \u0275\u0275elementStart(40, "button", 160);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_div_96_tr_23_Template_button_click_40_listener() {
      const inv_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadInvoiceFromRow(inv_r6));
    });
    \u0275\u0275element(41, "i", 161);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const inv_r6 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r0.currentPage - 1) * ctx_r0.pageSize + i_r11 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", inv_r6.invoiceNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(inv_r6.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", inv_r6.resubmitCount > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inv_r6.supplierCompanyName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inv_r6.poNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r6.rfqNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(inv_r6.invoiceDate));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-danger", ctx_r0.isOverdue(inv_r6))("fw-bold", ctx_r0.isOverdue(inv_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(inv_r6.dueDate), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isOverdue(inv_r6));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(inv_r6.grandTotal, inv_r6.currencyCode));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(22, _c2, inv_r6.status === "DRAFT", inv_r6.status === "SUBMITTED", inv_r6.status === "APPROVED", inv_r6.status === "REJECTED", inv_r6.status === "REJECTED_CLOSED", inv_r6.status === "PAID"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getInvoiceStatusLabel(inv_r6.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", inv_r6.status === "PAID" && inv_r6.paidBy);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", inv_r6.status === "SUBMITTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", inv_r6.status === "SUBMITTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", inv_r6.canRecordAdvancePayment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", inv_r6.status === "APPROVED");
  }
}
function BuyerInvoicesComponent_div_96_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 173);
    \u0275\u0275element(2, "i", 174);
    \u0275\u0275elementStart(3, "p", 175);
    \u0275\u0275text(4, "No invoices found for this period.");
    \u0275\u0275elementEnd()()();
  }
}
function BuyerInvoicesComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "table", 138)(2, "thead", 139)(3, "tr")(4, "th", 140);
    \u0275\u0275text(5, "SL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "INVOICE NO.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "SUPPLIER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "PO / RFQ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "INVOICE DATE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "DUE DATE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 141);
    \u0275\u0275text(17, "AMOUNT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 142);
    \u0275\u0275text(19, "STATUS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 142);
    \u0275\u0275text(21, "ACTIONS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, BuyerInvoicesComponent_div_96_tr_23_Template, 42, 29, "tr", 143)(24, BuyerInvoicesComponent_div_96_tr_24_Template, 5, 0, "tr", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r0.pagedInvoices);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pagedInvoices.length === 0);
  }
}
function BuyerInvoicesComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 176)(1, "small", 146);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 177)(4, "button", 178);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_div_97_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 179);
    \u0275\u0275text(6, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 178);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_div_97_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage + 1));
    });
    \u0275\u0275text(8, " Next ");
    \u0275\u0275element(9, "i", 180);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Showing ", ctx_r0.pagedInvoices.length, " of ", ctx_r0.filteredInvoices.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.currentPage >= ctx_r0.totalPages);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 229);
    \u0275\u0275element(1, "i", 163);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Resubmitted ", ctx_r0.selectedInvoice.resubmitCount, "\xD7 ");
  }
}
function BuyerInvoicesComponent_c_modal_body_104_i_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 230);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 231);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_i_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 232);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 231);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 233);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_c_modal_body_104_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.handleApproveClick(ctx_r0.selectedInvoice));
    });
    \u0275\u0275element(1, "i", 234);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.selectedInvoice.canApprove ? "btn-success" : "btn-outline-secondary")("title", ctx_r0.selectedInvoice.canApprove ? "Approve Invoice" : "Complete GRN & 3-Way Match first");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.selectedInvoice.canApprove ? "bi-check-lg" : "bi-lock-fill");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedInvoice.canApprove ? "Approve" : "Approve (Locked)", " ");
  }
}
function BuyerInvoicesComponent_c_modal_body_104_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 235);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_c_modal_body_104_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.openActionModal(ctx_r0.selectedInvoice, "reject");
      return \u0275\u0275resetView(ctx_r0.closeViewModal());
    });
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275text(2, "Return for Correction ");
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_c_modal_body_104_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 236);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_c_modal_body_104_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openAdvanceModal(ctx_r0.selectedInvoice));
    });
    \u0275\u0275element(1, "i", 237);
    \u0275\u0275text(2, "Record Advance Payment ");
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_c_modal_body_104_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 238);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_c_modal_body_104_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.openActionModal(ctx_r0.selectedInvoice, "paid");
      return \u0275\u0275resetView(ctx_r0.closeViewModal());
    });
    \u0275\u0275element(1, "i", 239);
    \u0275\u0275text(2, "Mark Paid ");
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_22_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.selectedInvoice.advancePaymentPercentage, "% of total)");
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_22_div_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Ref: ", ctx_r0.selectedInvoice.advancePaymentReference);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_22_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 247);
    \u0275\u0275text(1);
    \u0275\u0275template(2, BuyerInvoicesComponent_c_modal_body_104_div_22_div_20_span_2_Template, 2, 1, "span", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(ctx_r0.selectedInvoice.advancePaidAt), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.advancePaymentReference);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 240)(1, "div", 241);
    \u0275\u0275element(2, "i", 242);
    \u0275\u0275elementStart(3, "div", 243)(4, "strong");
    \u0275\u0275text(5, "Advance Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 244);
    \u0275\u0275text(7);
    \u0275\u0275template(8, BuyerInvoicesComponent_c_modal_body_104_div_22_ng_container_8_Template, 2, 1, "ng-container", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 245)(10, "div", 246)(11, "div", 247);
    \u0275\u0275text(12, "Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 248);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 246)(16, "div", 247);
    \u0275\u0275text(17, "Advance Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 248);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, BuyerInvoicesComponent_c_modal_body_104_div_22_div_20_Template, 3, 2, "div", 249);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 246)(22, "div", 247);
    \u0275\u0275text(23, "Balance Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 248);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-left-color", ctx_r0.selectedInvoice.advancePaidAmount > 0 ? "#198754" : "#f0ad4e");
    \u0275\u0275property("ngClass", ctx_r0.selectedInvoice.advancePaidAmount > 0 ? "alert-success" : "alert-warning");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" \u2014 required ", ctx_r0.advancePaymentDueLabel(ctx_r0.selectedInvoice), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.advancePaymentPercentage);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.selectedInvoice.advanceRequiredAmount, ctx_r0.selectedInvoice.currencyCode));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-success", ctx_r0.selectedInvoice.advancePaidAmount > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedInvoice.advancePaidAmount > 0 ? ctx_r0.formatCurrency(ctx_r0.selectedInvoice.advancePaidAmount, ctx_r0.selectedInvoice.currencyCode) : "Not yet received", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.advancePaidAmount > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.selectedInvoice.balanceDue, ctx_r0.selectedInvoice.currencyCode));
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_23_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r18 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r18.slNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r18.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r18.percentage ? m_r18.percentage + "%" : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r18.amount ? ctx_r0.formatCurrency(m_r18.amount, ctx_r0.selectedInvoice.currencyCode) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r18.remarks);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h6", 248);
    \u0275\u0275element(2, "i", 250);
    \u0275\u0275text(3, "Payment Provisions / Milestones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 137)(5, "table", 251)(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "Sl No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Milestone / Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Remarks");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, BuyerInvoicesComponent_c_modal_body_104_div_23_tr_19_Template, 11, 5, "tr", 218);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r0.getPaymentMilestones(ctx_r0.selectedInvoice));
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_24_a_5_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const att_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", att_r19.uploadedByName);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_24_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 255);
    \u0275\u0275element(1, "i", 256);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BuyerInvoicesComponent_c_modal_body_104_div_24_a_5_small_4_Template, 2, 1, "small", 257);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const att_r19 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r0.getInvoiceAttachmentDownloadUrl(att_r19.id), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(att_r19.filename);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", att_r19.uploadedByName);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h6", 248);
    \u0275\u0275element(2, "i", 252);
    \u0275\u0275text(3, "Attachments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 253);
    \u0275\u0275template(5, BuyerInvoicesComponent_c_modal_body_104_div_24_a_5_Template, 5, 3, "a", 254);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.selectedInvoice.attachments);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_25_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 261)(1, "span", 151);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c3, ctx_r0.selectedInvoice.threeWayMatchStatus === "MATCHED", ctx_r0.selectedInvoice.threeWayMatchStatus !== "MATCHED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" 3-Way Match: ", ctx_r0.selectedInvoice.threeWayMatchStatus, " ");
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 258);
    \u0275\u0275element(1, "i", 259);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Approval Locked");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "br");
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "This invoice cannot be approved yet. You must first: ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Create a GRN \u2192 Complete QA Review \u2192 Approve GRN \u2192 Run 3-Way Match.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, BuyerInvoicesComponent_c_modal_body_104_div_25_div_10_Template, 3, 5, "div", 260);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.threeWayMatchStatus);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 262)(1, "strong");
    \u0275\u0275element(2, "i", 263);
    \u0275\u0275text(3, "Rejected \u2014 Supplier may resubmit once");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "small", 146);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.approvalRemarks);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("By ", ctx_r0.selectedInvoice.approvedRejectedBy, " on ", ctx_r0.formatDate(ctx_r0.selectedInvoice.approvedRejectedAt));
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 264)(1, "strong");
    \u0275\u0275element(2, "i", 265);
    \u0275\u0275text(3, "Permanently Closed");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "small", 146);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.approvalRemarks);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("By ", ctx_r0.selectedInvoice.approvedRejectedBy, " on ", ctx_r0.formatDate(ctx_r0.selectedInvoice.approvedRejectedAt));
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 266)(1, "strong");
    \u0275\u0275element(2, "i", 163);
    \u0275\u0275text(3, "Supplier Resubmit Remarks:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "small", 267);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedInvoice.resubmitRemarks, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Resubmitted on ", ctx_r0.formatDate(ctx_r0.selectedInvoice.resubmittedAt));
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_29_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " by ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.paidBy);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_29_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " via ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.paymentMode);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_29_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" | Ref: ", ctx_r0.selectedInvoice.paymentReference);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_29_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 270);
    \u0275\u0275element(1, "i", 271);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.selectedInvoice.paymentRemarks, " ");
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 266)(1, "strong");
    \u0275\u0275element(2, "i", 268);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BuyerInvoicesComponent_c_modal_body_104_div_29_span_4_Template, 4, 1, "span", 68)(5, BuyerInvoicesComponent_c_modal_body_104_div_29_span_5_Template, 4, 1, "span", 68)(6, BuyerInvoicesComponent_c_modal_body_104_div_29_span_6_Template, 2, 1, "span", 68)(7, BuyerInvoicesComponent_c_modal_body_104_div_29_div_7_Template, 3, 1, "div", 269);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Paid on ", ctx_r0.formatDateTime(ctx_r0.selectedInvoice.paidAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.paidBy);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.paymentMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.paymentReference);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.paymentRemarks);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_tr_91_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r20.itemDescriptionDetailed);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_tr_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 148);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BuyerInvoicesComponent_c_modal_body_104_tr_91_small_6_Template, 2, 1, "small", 257);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 142);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 142);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 141);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 142);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 221);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r21 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r20.itemDescription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r20.itemDescriptionDetailed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r20.hsnSacCode || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r20.uom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r20.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(item_r20.unitPrice, ctx_r0.selectedInvoice.currencyCode));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r20.taxPercentage || 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(item_r20.lineTotal, ctx_r0.selectedInvoice.currencyCode));
  }
}
function BuyerInvoicesComponent_c_modal_body_104_tr_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 219)(1, "td", 220);
    \u0275\u0275text(2, "Other Charges (Training/Installation/etc.)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 221);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.getOtherChargesTotal(ctx_r0.selectedInvoice), ctx_r0.selectedInvoice.currencyCode));
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_109_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 148);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r22 = ctx.$implicit;
    const ci_r23 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ci_r23 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r22.chargeType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r22.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r22.uom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(c_r22.rate, ctx_r0.selectedInvoice.currencyCode));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(c_r22.amount, ctx_r0.selectedInvoice.currencyCode));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r22.taxPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(c_r22.taxAmount, ctx_r0.selectedInvoice.currencyCode));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(c_r22.totalAmount, ctx_r0.selectedInvoice.currencyCode));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r22.remarks);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 272)(1, "h6", 248);
    \u0275\u0275text(2, "Other Charges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 137)(4, "table", 251)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "Sl No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Charge Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "UOM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Tax %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Tax Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Remarks");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275template(28, BuyerInvoicesComponent_c_modal_body_104_div_109_tr_28_Template, 21, 10, "tr", 218);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", ctx_r0.getOtherCharges(ctx_r0.selectedInvoice));
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_110_div_28_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedInvoice.termsAndConditions, " ");
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_110_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 210)(1, "h6", 280);
    \u0275\u0275text(2, "Payment Terms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 281);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BuyerInvoicesComponent_c_modal_body_104_div_110_div_28_small_5_Template, 2, 1, "small", 257);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.paymentTerms);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.termsAndConditions);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_div_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 273)(1, "div", 274)(2, "div", 275)(3, "h6", 211);
    \u0275\u0275element(4, "i", 276);
    \u0275\u0275text(5, "Bank Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "table", 277)(7, "tr")(8, "td", 278);
    \u0275\u0275text(9, "Bank Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 148);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tr")(13, "td", 146);
    \u0275\u0275text(14, "Account Holder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 148);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tr")(18, "td", 146);
    \u0275\u0275text(19, "Account No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 148);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tr")(23, "td", 146);
    \u0275\u0275text(24, "IFSC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 148);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "div", 274);
    \u0275\u0275template(28, BuyerInvoicesComponent_c_modal_body_104_div_110_div_28_Template, 6, 2, "div", 279);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.bankName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.accountHolderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.accountNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.ifscCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.paymentTerms);
  }
}
function BuyerInvoicesComponent_c_modal_body_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-modal-body")(1, "div", 181)(2, "div", 182)(3, "span", 183);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BuyerInvoicesComponent_c_modal_body_104_span_5_Template, 3, 1, "span", 184);
    \u0275\u0275elementStart(6, "span", 185);
    \u0275\u0275element(7, "i", 186);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 177)(10, "button", 187);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_c_modal_body_104_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.downloadPDF());
    });
    \u0275\u0275template(11, BuyerInvoicesComponent_c_modal_body_104_i_11_Template, 1, 0, "i", 188)(12, BuyerInvoicesComponent_c_modal_body_104_span_12_Template, 1, 0, "span", 189);
    \u0275\u0275text(13, " Download PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 190);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_c_modal_body_104_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.downloadInvoiceExcel(ctx_r0.selectedInvoice.id, ctx_r0.selectedInvoice.invoiceNumber));
    });
    \u0275\u0275template(15, BuyerInvoicesComponent_c_modal_body_104_i_15_Template, 1, 0, "i", 191)(16, BuyerInvoicesComponent_c_modal_body_104_span_16_Template, 1, 0, "span", 189);
    \u0275\u0275text(17, " Download Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, BuyerInvoicesComponent_c_modal_body_104_button_18_Template, 3, 4, "button", 192)(19, BuyerInvoicesComponent_c_modal_body_104_button_19_Template, 3, 0, "button", 193)(20, BuyerInvoicesComponent_c_modal_body_104_button_20_Template, 3, 0, "button", 194)(21, BuyerInvoicesComponent_c_modal_body_104_button_21_Template, 3, 0, "button", 195);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, BuyerInvoicesComponent_c_modal_body_104_div_22_Template, 26, 11, "div", 196)(23, BuyerInvoicesComponent_c_modal_body_104_div_23_Template, 20, 1, "div", 197)(24, BuyerInvoicesComponent_c_modal_body_104_div_24_Template, 6, 1, "div", 197)(25, BuyerInvoicesComponent_c_modal_body_104_div_25_Template, 11, 1, "div", 198)(26, BuyerInvoicesComponent_c_modal_body_104_div_26_Template, 10, 3, "div", 199)(27, BuyerInvoicesComponent_c_modal_body_104_div_27_Template, 10, 3, "div", 200)(28, BuyerInvoicesComponent_c_modal_body_104_div_28_Template, 7, 2, "div", 201)(29, BuyerInvoicesComponent_c_modal_body_104_div_29_Template, 8, 5, "div", 201);
    \u0275\u0275elementStart(30, "div", 202)(31, "div", 84)(32, "div", 203)(33, "h2", 204);
    \u0275\u0275text(34, "INVOICE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 205);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 206)(38, "p", 207)(39, "strong");
    \u0275\u0275text(40, "Invoice Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 207)(43, "strong");
    \u0275\u0275text(44, "Due Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 208);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "p", 209)(48, "strong");
    \u0275\u0275text(49, "PO Ref:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p", 209)(52, "strong");
    \u0275\u0275text(53, "RFQ Ref:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 84)(56, "div", 203)(57, "div", 210)(58, "h6", 211);
    \u0275\u0275text(59, "FROM (Supplier)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p", 212);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "p", 213);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 203)(65, "div", 210)(66, "h6", 214);
    \u0275\u0275text(67, "BILL TO (Buyer)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "p", 212);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 215)(71, "table", 216)(72, "thead", 217)(73, "tr")(74, "th");
    \u0275\u0275text(75, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "th");
    \u0275\u0275text(77, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "th");
    \u0275\u0275text(79, "HSN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "th", 142);
    \u0275\u0275text(81, "UOM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "th", 142);
    \u0275\u0275text(83, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "th", 141);
    \u0275\u0275text(85, "Unit Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "th", 142);
    \u0275\u0275text(87, "Tax%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "th", 141);
    \u0275\u0275text(89, "Amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "tbody");
    \u0275\u0275template(91, BuyerInvoicesComponent_c_modal_body_104_tr_91_Template, 19, 9, "tr", 218);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "tfoot")(93, "tr", 219)(94, "td", 220);
    \u0275\u0275text(95, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "td", 221);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "tr", 219)(99, "td", 222);
    \u0275\u0275text(100, "Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "td", 223);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(103, BuyerInvoicesComponent_c_modal_body_104_tr_103_Template, 5, 1, "tr", 224);
    \u0275\u0275elementStart(104, "tr", 217)(105, "td", 225);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "td", 226);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(109, BuyerInvoicesComponent_c_modal_body_104_div_109_Template, 29, 1, "div", 227)(110, BuyerInvoicesComponent_c_modal_body_104_div_110_Template, 29, 5, "div", 228);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(38, _c2, ctx_r0.selectedInvoice.status === "DRAFT", ctx_r0.selectedInvoice.status === "SUBMITTED", ctx_r0.selectedInvoice.status === "APPROVED", ctx_r0.selectedInvoice.status === "REJECTED", ctx_r0.selectedInvoice.status === "REJECTED_CLOSED", ctx_r0.selectedInvoice.status === "PAID"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getInvoiceStatusLabel(ctx_r0.selectedInvoice.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.resubmitCount > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.selectedInvoice.currencyCode || "INR", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isDownloadingPDF);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isDownloadingPDF);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isDownloadingPDF);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isDownloadingInvoiceExcel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isDownloadingInvoiceExcel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isDownloadingInvoiceExcel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.status === "SUBMITTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.status === "SUBMITTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.canRecordAdvancePayment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.status === "APPROVED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.advancePaymentRequired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getPaymentMilestones(ctx_r0.selectedInvoice).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.selectedInvoice.attachments == null ? null : ctx_r0.selectedInvoice.attachments.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.status === "SUBMITTED" && !ctx_r0.selectedInvoice.canApprove);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.status === "REJECTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.status === "REJECTED_CLOSED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.resubmitCount > 0 && ctx_r0.selectedInvoice.resubmitRemarks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.status === "PAID");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.invoiceNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(ctx_r0.selectedInvoice.invoiceDate));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.selectedInvoice.dueDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedInvoice.poNumber);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedInvoice.rfqNumber);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.supplierCompanyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.supplierEmail);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.selectedInvoice.buyerCompanyName);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r0.selectedInvoice.lineItems);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.selectedInvoice.subtotal, ctx_r0.selectedInvoice.currencyCode));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.selectedInvoice.taxAmount, ctx_r0.selectedInvoice.currencyCode));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getOtherChargesTotal(ctx_r0.selectedInvoice) > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("GRAND TOTAL (", ctx_r0.selectedInvoice.currencyCode || "INR", ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.selectedInvoice.grandTotal, ctx_r0.selectedInvoice.currencyCode));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getOtherCharges(ctx_r0.selectedInvoice).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedInvoice.bankName);
  }
}
function BuyerInvoicesComponent_c_modal_body_114_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 286);
    \u0275\u0275element(1, "i", 287);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Reject with Resubmit Option");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "The supplier will be notified and can correct and resubmit this invoice ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "once");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ".");
    \u0275\u0275elementEnd()();
  }
}
function BuyerInvoicesComponent_c_modal_body_114_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 288);
    \u0275\u0275element(1, "i", 289);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Permanent Rejection \u2014 Cannot be undone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "The invoice will be permanently closed.");
    \u0275\u0275elementEnd()();
  }
}
function BuyerInvoicesComponent_c_modal_body_114_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 272)(1, "label", 290);
    \u0275\u0275text(2, " Remarks ");
    \u0275\u0275elementStart(3, "span", 291);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 292);
    \u0275\u0275text(6, "(visible to supplier)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "textarea", 293);
    \u0275\u0275twoWayListener("ngModelChange", function BuyerInvoicesComponent_c_modal_body_114_div_16_Template_textarea_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.actionRemarks, $event) || (ctx_r0.actionRemarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(8, "      ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.actionRemarks);
    \u0275\u0275property("placeholder", ctx_r0.pendingAction === "approve" ? "e.g. Invoice verified and approved for payment" : ctx_r0.pendingAction === "reject" ? "e.g. Invoice amount does not match PO, please correct and resubmit" : "e.g. Invoice repeatedly incorrect \u2014 closing permanently");
  }
}
function BuyerInvoicesComponent_c_modal_body_114_div_17_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r26 = ctx.$implicit;
    \u0275\u0275property("value", m_r26);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r26);
  }
}
function BuyerInvoicesComponent_c_modal_body_114_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 272)(1, "label", 290);
    \u0275\u0275text(2, " Payment Mode ");
    \u0275\u0275elementStart(3, "span", 291);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 294);
    \u0275\u0275twoWayListener("ngModelChange", function BuyerInvoicesComponent_c_modal_body_114_div_17_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.paymentMode, $event) || (ctx_r0.paymentMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 295);
    \u0275\u0275text(7, "\u2014 Select how this was paid \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, BuyerInvoicesComponent_c_modal_body_114_div_17_option_8_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 290);
    \u0275\u0275text(10, " Payment Reference ");
    \u0275\u0275elementStart(11, "span", 291);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 296);
    \u0275\u0275twoWayListener("ngModelChange", function BuyerInvoicesComponent_c_modal_body_114_div_17_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.paymentReference, $event) || (ctx_r0.paymentReference = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "small", 297);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label", 290);
    \u0275\u0275text(17, " Remarks ");
    \u0275\u0275elementStart(18, "span", 298);
    \u0275\u0275text(19, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "textarea", 299);
    \u0275\u0275twoWayListener("ngModelChange", function BuyerInvoicesComponent_c_modal_body_114_div_17_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.paymentRemarks, $event) || (ctx_r0.paymentRemarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.paymentMode);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.paymentModeOptions);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.paymentReference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Required so this payment can be traced back to a bank record later. Who recorded it (", ctx_r0.buyerName, ") and the exact date/time are captured automatically. ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.paymentRemarks);
  }
}
function BuyerInvoicesComponent_c_modal_body_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-modal-body")(1, "div", 282)(2, "strong");
    \u0275\u0275text(3, "Invoice:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275element(5, "br");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "Supplier:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275element(9, "br");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 283);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, BuyerInvoicesComponent_c_modal_body_114_div_14_Template, 10, 0, "div", 284)(15, BuyerInvoicesComponent_c_modal_body_114_div_15_Template, 7, 0, "div", 285)(16, BuyerInvoicesComponent_c_modal_body_114_div_16_Template, 9, 2, "div", 227)(17, BuyerInvoicesComponent_c_modal_body_114_div_17_Template, 21, 5, "div", 227);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedInvoice.invoiceNumber);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedInvoice.supplierCompanyName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.selectedInvoice.grandTotal, ctx_r0.selectedInvoice.currencyCode));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pendingAction === "reject");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pendingAction === "rejectClose");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pendingAction === "approve" || ctx_r0.pendingAction === "reject" || ctx_r0.pendingAction === "rejectClose");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pendingAction === "paid");
  }
}
function BuyerInvoicesComponent_c_spinner_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-spinner", 300);
  }
}
function BuyerInvoicesComponent_i_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 234);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(1, _c4, ctx_r0.pendingAction === "approve", ctx_r0.pendingAction === "reject", ctx_r0.pendingAction === "rejectClose", ctx_r0.pendingAction === "paid"));
  }
}
function BuyerInvoicesComponent_div_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275element(1, "div", 301);
    \u0275\u0275elementStart(2, "p", 302);
    \u0275\u0275text(3, "Checking prerequisites...");
    \u0275\u0275elementEnd()();
  }
}
function BuyerInvoicesComponent_div_130_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 313);
    \u0275\u0275element(1, "i", 314);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Approval requires a passed 3-Way Match.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "br");
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Complete all 4 steps below before this invoice can be approved.");
    \u0275\u0275elementEnd()()();
  }
}
function BuyerInvoicesComponent_div_130_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 313);
    \u0275\u0275element(1, "i", 314);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Approval requires an approved Service Entry Sheet (SES).");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "br");
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "This is a Service-type PO \u2014 confirm the delivered service period with an SES before this invoice can be approved.");
    \u0275\u0275elementEnd()()();
  }
}
function BuyerInvoicesComponent_div_130_div_15_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_div_130_div_15_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 328);
  }
}
function BuyerInvoicesComponent_div_130_div_15_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "2");
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_div_130_div_15_i_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 328);
  }
}
function BuyerInvoicesComponent_div_130_div_15_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "3");
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_div_130_div_15_i_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 328);
  }
}
function BuyerInvoicesComponent_div_130_div_15_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "4");
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_div_130_div_15_i_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 328);
  }
}
function BuyerInvoicesComponent_div_130_div_15_i_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 329);
  }
}
function BuyerInvoicesComponent_div_130_div_15_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 330)(1, "span", 331);
    \u0275\u0275element(2, "i", 332);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 333);
    \u0275\u0275text(5, "Please go to the 3-Way Match module and resolve the mismatch first.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Current status: ", (ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.threeWayMatchStatus) || "MISMATCH DETECTED", " ");
  }
}
function BuyerInvoicesComponent_div_130_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 315)(1, "div", 316)(2, "div", 317);
    \u0275\u0275template(3, BuyerInvoicesComponent_div_130_div_15_span_3_Template, 2, 0, "span", 68)(4, BuyerInvoicesComponent_div_130_div_15_i_4_Template, 1, 0, "i", 318);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 319)(6, "div", 320);
    \u0275\u0275text(7, "Create GRN (Goods Receipt Note)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 321);
    \u0275\u0275text(9, "Record all goods physically received against the Purchase Order.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 322)(11, "span", 323);
    \u0275\u0275element(12, "i", 324);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(14, "div", 325);
    \u0275\u0275elementStart(15, "div", 316)(16, "div", 317);
    \u0275\u0275template(17, BuyerInvoicesComponent_div_130_div_15_span_17_Template, 2, 0, "span", 68)(18, BuyerInvoicesComponent_div_130_div_15_i_18_Template, 1, 0, "i", 318);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 319)(20, "div", 320);
    \u0275\u0275text(21, "Complete QA Review & Approve GRN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 321);
    \u0275\u0275text(23, "QA team inspects received goods, then a supervisor approves the GRN.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 322)(25, "span", 323);
    \u0275\u0275element(26, "i", 324);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(28, "div", 325);
    \u0275\u0275elementStart(29, "div", 316)(30, "div", 317);
    \u0275\u0275template(31, BuyerInvoicesComponent_div_130_div_15_span_31_Template, 2, 0, "span", 68)(32, BuyerInvoicesComponent_div_130_div_15_i_32_Template, 1, 0, "i", 318);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 319)(34, "div", 320);
    \u0275\u0275text(35, "Perform 3-Way Match");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 321);
    \u0275\u0275text(37, "Navigate to the ");
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39, "3-Way Match module");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, ", select this PO, GRN, and Invoice, then run the match.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 322)(42, "span", 323);
    \u0275\u0275element(43, "i", 324);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(45, "div", 325);
    \u0275\u0275elementStart(46, "div", 316)(47, "div", 317);
    \u0275\u0275template(48, BuyerInvoicesComponent_div_130_div_15_span_48_Template, 2, 0, "span", 68)(49, BuyerInvoicesComponent_div_130_div_15_i_49_Template, 1, 0, "i", 318)(50, BuyerInvoicesComponent_div_130_div_15_i_50_Template, 1, 0, "i", 326);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 319)(52, "div", 320);
    \u0275\u0275text(53, "3-Way Match Must Pass (or Be Resolved)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 321);
    \u0275\u0275text(55, "The match result must be ");
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57, "MATCHED");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, ", ");
    \u0275\u0275elementStart(59, "strong");
    \u0275\u0275text(60, "OVERRIDDEN APPROVED");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, ", or a resolved ");
    \u0275\u0275elementStart(62, "strong");
    \u0275\u0275text(63, "PARTIAL MATCH");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, BuyerInvoicesComponent_div_130_div_15_div_65_Template, 6, 1, "div", 327);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 322)(67, "span", 323);
    \u0275\u0275element(68, "i", 324);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("step-done", ctx_r0.prereqChecks.grnCreated)("step-pending", !ctx_r0.prereqChecks.grnCreated);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.prereqChecks.grnCreated);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.prereqChecks.grnCreated);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("bg-success", ctx_r0.prereqChecks.grnCreated)("bg-light", !ctx_r0.prereqChecks.grnCreated)("text-dark", !ctx_r0.prereqChecks.grnCreated);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle-fill", ctx_r0.prereqChecks.grnCreated)("bi-hourglass", !ctx_r0.prereqChecks.grnCreated);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.prereqChecks.grnCreated ? "Done" : "Pending", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("line-done", ctx_r0.prereqChecks.grnCreated);
    \u0275\u0275advance();
    \u0275\u0275classProp("step-done", ctx_r0.prereqChecks.grnApproved)("step-pending", !ctx_r0.prereqChecks.grnApproved);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.prereqChecks.grnApproved);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.prereqChecks.grnApproved);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("bg-success", ctx_r0.prereqChecks.grnApproved)("bg-light", !ctx_r0.prereqChecks.grnApproved)("text-dark", !ctx_r0.prereqChecks.grnApproved);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle-fill", ctx_r0.prereqChecks.grnApproved)("bi-hourglass", !ctx_r0.prereqChecks.grnApproved);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.prereqChecks.grnApproved ? "Done" : "Pending", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("line-done", ctx_r0.prereqChecks.grnApproved);
    \u0275\u0275advance();
    \u0275\u0275classProp("step-done", ctx_r0.prereqChecks.matchDone)("step-pending", !ctx_r0.prereqChecks.matchDone);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.prereqChecks.matchDone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.prereqChecks.matchDone);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("bg-success", ctx_r0.prereqChecks.matchDone)("bg-light", !ctx_r0.prereqChecks.matchDone)("text-dark", !ctx_r0.prereqChecks.matchDone);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle-fill", ctx_r0.prereqChecks.matchDone)("bi-hourglass", !ctx_r0.prereqChecks.matchDone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.prereqChecks.matchDone ? "Done" : "Pending", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("line-done", ctx_r0.prereqChecks.matchDone);
    \u0275\u0275advance();
    \u0275\u0275classProp("step-done", ctx_r0.prereqChecks.matchPassed)("step-failed", ctx_r0.prereqChecks.matchDone && !ctx_r0.prereqChecks.matchPassed)("step-pending", !ctx_r0.prereqChecks.matchDone);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.prereqChecks.matchPassed && !ctx_r0.prereqChecks.matchDone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.prereqChecks.matchPassed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.prereqChecks.matchDone && !ctx_r0.prereqChecks.matchPassed);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r0.prereqChecks.matchDone && !ctx_r0.prereqChecks.matchPassed);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", ctx_r0.prereqChecks.matchPassed)("bg-danger", ctx_r0.prereqChecks.matchDone && !ctx_r0.prereqChecks.matchPassed)("bg-light", !ctx_r0.prereqChecks.matchDone)("text-dark", !ctx_r0.prereqChecks.matchDone);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle-fill", ctx_r0.prereqChecks.matchPassed)("bi-x-circle-fill", ctx_r0.prereqChecks.matchDone && !ctx_r0.prereqChecks.matchPassed)("bi-hourglass", !ctx_r0.prereqChecks.matchDone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.prereqChecks.matchPassed ? "Passed" : ctx_r0.prereqChecks.matchDone ? "Failed" : "Pending", " ");
  }
}
function BuyerInvoicesComponent_div_130_div_16_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_div_130_div_16_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 328);
  }
}
function BuyerInvoicesComponent_div_130_div_16_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "2");
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_div_130_div_16_i_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 328);
  }
}
function BuyerInvoicesComponent_div_130_div_16_div_30_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r0.prereqInvoice.serviceReportNumber, ")");
  }
}
function BuyerInvoicesComponent_div_130_div_16_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 334)(1, "a", 339);
    \u0275\u0275element(2, "i", 340);
    \u0275\u0275text(3, "View Service Report ");
    \u0275\u0275template(4, BuyerInvoicesComponent_div_130_div_16_div_30_span_4_Template, 2, 1, "span", 68);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.getServiceReportPdfUrl(ctx_r0.prereqInvoice.serviceReportId), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.serviceReportNumber);
  }
}
function BuyerInvoicesComponent_div_130_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 315)(1, "div", 316)(2, "div", 317);
    \u0275\u0275template(3, BuyerInvoicesComponent_div_130_div_16_span_3_Template, 2, 0, "span", 68)(4, BuyerInvoicesComponent_div_130_div_16_i_4_Template, 1, 0, "i", 318);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 319)(6, "div", 320);
    \u0275\u0275text(7, "Create & Get Approved: Service Entry Sheet (SES)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 321);
    \u0275\u0275text(9, "Confirm the service delivered for the billing period, then have it approved. No GRN or 3-Way Match is required for Service POs.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 334)(11, "button", 335);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_div_130_div_16_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToCreateSES());
    });
    \u0275\u0275element(12, "i", 336);
    \u0275\u0275text(13, "Create Service Entry Sheet ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 337);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_div_130_div_16_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToSESList());
    });
    \u0275\u0275element(15, "i", 250);
    \u0275\u0275text(16, "View Service Entry Sheets ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 322)(18, "span", 323);
    \u0275\u0275element(19, "i", 324);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 316)(22, "div", 317);
    \u0275\u0275template(23, BuyerInvoicesComponent_div_130_div_16_span_23_Template, 2, 0, "span", 68)(24, BuyerInvoicesComponent_div_130_div_16_i_24_Template, 1, 0, "i", 318);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 319)(26, "div", 320);
    \u0275\u0275text(27, "Supplier Submits: Service Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 321);
    \u0275\u0275text(29, " The service report is the supporting document that accompanies the invoice \u2014 the written record of what was actually done on site. The supplier submits it from the approved Service Entry Sheet. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, BuyerInvoicesComponent_div_130_div_16_div_30_Template, 5, 2, "div", 338);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 322)(32, "span", 323);
    \u0275\u0275element(33, "i", 324);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("step-done", ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.sesApproved)("step-pending", !(ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.sesApproved));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.sesApproved));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.sesApproved);
    \u0275\u0275advance(14);
    \u0275\u0275classProp("bg-success", ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.sesApproved)("bg-light", !(ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.sesApproved))("text-dark", !(ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.sesApproved));
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle-fill", ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.sesApproved)("bi-hourglass", !(ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.sesApproved));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.sesApproved) ? "Done" : "Pending", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("step-done", ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.serviceReportSubmitted)("step-pending", !(ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.serviceReportSubmitted));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.serviceReportSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.serviceReportSubmitted);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.serviceReportId);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.serviceReportSubmitted)("bg-light", !(ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.serviceReportSubmitted))("text-dark", !(ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.serviceReportSubmitted));
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle-fill", ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.serviceReportSubmitted)("bi-hourglass", !(ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.serviceReportSubmitted));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.serviceReportSubmitted) ? "Done" : "Pending", " ");
  }
}
function BuyerInvoicesComponent_div_130_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 341);
    \u0275\u0275element(1, "i", 342);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "All prerequisites completed!");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "br");
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "You can now proceed to approve this invoice.");
    \u0275\u0275elementEnd()()();
  }
}
function BuyerInvoicesComponent_div_130_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 343);
    \u0275\u0275element(1, "i", 344);
    \u0275\u0275elementStart(2, "small", 345);
    \u0275\u0275text(3, "Complete the steps above before approval becomes available.");
    \u0275\u0275elementEnd()();
  }
}
function BuyerInvoicesComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 303)(2, "div", 304)(3, "div", 305);
    \u0275\u0275element(4, "i", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 306);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 146);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 307)(11, "span", 308);
    \u0275\u0275text(12, "Pending Review");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(13, BuyerInvoicesComponent_div_130_div_13_Template, 8, 0, "div", 309)(14, BuyerInvoicesComponent_div_130_div_14_Template, 8, 0, "div", 309)(15, BuyerInvoicesComponent_div_130_div_15_Template, 70, 82, "div", 310)(16, BuyerInvoicesComponent_div_130_div_16_Template, 35, 35, "div", 310)(17, BuyerInvoicesComponent_div_130_div_17_Template, 8, 0, "div", 311)(18, BuyerInvoicesComponent_div_130_div_18_Template, 4, 0, "div", 312);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.invoiceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.supplierCompanyName, " \u2022 ", ctx_r0.formatCurrency(ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.grandTotal, ctx_r0.prereqInvoice == null ? null : ctx_r0.prereqInvoice.currencyCode), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r0.isServicePO);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isServicePO);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isServicePO);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isServicePO);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.allPrereqsPassed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.allPrereqsPassed);
  }
}
function BuyerInvoicesComponent_button_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 346);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_button_134_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.proceedToApprove());
    });
    \u0275\u0275element(1, "i", 347);
    \u0275\u0275text(2, "Proceed to Approve ");
    \u0275\u0275elementEnd();
  }
}
function BuyerInvoicesComponent_div_137_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.advanceInvoice.advancePaymentPercentage, "%)");
  }
}
function BuyerInvoicesComponent_div_137_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 231);
  }
}
function BuyerInvoicesComponent_div_137_i_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 362);
  }
}
function BuyerInvoicesComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 348)(1, "div", 349)(2, "h5", 350);
    \u0275\u0275element(3, "i", 351);
    \u0275\u0275text(4, "Record Advance Payment ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 352);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_div_137_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAdvanceModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 353)(7, "div", 282)(8, "strong");
    \u0275\u0275text(9, "Invoice:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275element(11, "br");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "Supplier:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275element(15, "br");
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17, "Invoice Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 283);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "br");
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22, "Advance Required:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275template(24, BuyerInvoicesComponent_div_137_ng_container_24_Template, 2, 1, "ng-container", 68);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 272)(27, "label", 290);
    \u0275\u0275text(28, " Amount Paid ");
    \u0275\u0275elementStart(29, "span", 291);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 354)(32, "span", 355);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 356);
    \u0275\u0275twoWayListener("ngModelChange", function BuyerInvoicesComponent_div_137_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.advanceAmountInput, $event) || (ctx_r0.advanceAmountInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "small", 146);
    \u0275\u0275text(36, "Defaults to the required advance \u2014 adjust if a different amount was actually received. If this covers the full invoice, the invoice is marked fully Paid.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 357)(38, "label", 290);
    \u0275\u0275text(39, "Payment Reference ");
    \u0275\u0275elementStart(40, "small", 146);
    \u0275\u0275text(41, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "input", 296);
    \u0275\u0275twoWayListener("ngModelChange", function BuyerInvoicesComponent_div_137_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.advanceReferenceInput, $event) || (ctx_r0.advanceReferenceInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 358)(44, "button", 359);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_div_137_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAdvanceModal());
    });
    \u0275\u0275text(45, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 360);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_div_137_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmRecordAdvance());
    });
    \u0275\u0275template(47, BuyerInvoicesComponent_div_137_span_47_Template, 1, 0, "span", 189)(48, BuyerInvoicesComponent_div_137_i_48_Template, 1, 0, "i", 361);
    \u0275\u0275text(49, " Record Payment ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.isRecordingAdvance);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.advanceInvoice.invoiceNumber);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.advanceInvoice.supplierCompanyName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.advanceInvoice.grandTotal, ctx_r0.advanceInvoice.currencyCode));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatCurrency(ctx_r0.advanceInvoice.advanceRequiredAmount, ctx_r0.advanceInvoice.currencyCode), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.advanceInvoice.advancePaymentPercentage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 due ", ctx_r0.advancePaymentDueLabel(ctx_r0.advanceInvoice), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.advanceInvoice.currencySymbol || ctx_r0.advanceInvoice.currencyCode);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.advanceAmountInput);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.advanceReferenceInput);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isRecordingAdvance);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isRecordingAdvance || !ctx_r0.advanceAmountInput || ctx_r0.advanceAmountInput <= 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isRecordingAdvance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isRecordingAdvance);
  }
}
function BuyerInvoicesComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 363);
  }
}
var _BuyerInvoicesComponent = class _BuyerInvoicesComponent {
  constructor(dataService, messageService, authService, router, cdr, buyerService) {
    this.dataService = dataService;
    this.messageService = messageService;
    this.authService = authService;
    this.router = router;
    this.cdr = cdr;
    this.buyerService = buyerService;
    this.loggedInBuyer = null;
    this.buyerId = null;
    this.buyerName = "";
    this.companyName = "";
    this.invoiceList = [];
    this.dateFilteredInvoices = [];
    this.filteredInvoices = [];
    this.pagedInvoices = [];
    this.searchText = "";
    this.statusFilter = "ALL";
    this.originFilter = "ALL";
    this.currentPage = 1;
    this.pageSize = 10;
    this.selectedInvoice = null;
    this.isViewModalOpen = false;
    this.isActionModalOpen = false;
    this.pendingAction = null;
    this.actionRemarks = "";
    this.paymentReference = "";
    this.isPerformingAction = false;
    this.showAdvanceModal = false;
    this.advanceInvoice = null;
    this.advanceAmountInput = 0;
    this.advanceReferenceInput = "";
    this.isRecordingAdvance = false;
    this.isLoading = false;
    this.isDownloadingPDF = false;
    this.isDownloadingInvoiceExcel = false;
    this.isDownloadingInvoicePdf = false;
    this.stats = { total: 0, submitted: 0, approved: 0, rejected: 0, paid: 0 };
    this.isPrereqModalOpen = false;
    this.prereqInvoice = null;
    this.prereqChecks = {
      grnCreated: false,
      grnApproved: false,
      matchDone: false,
      matchPassed: false
    };
    this.isCheckingPrereqs = false;
    this.financialYearOptions = [];
    this.selectedFYOption = "";
    this.customFromDate = "";
    this.customToDate = "";
    this.activeDateRangeLabel = "";
    this.downloadAfterOpen = false;
    this.paymentModeOptions = ["NEFT", "RTGS", "IMPS", "UPI", "Cheque", "Cash", "Bank Transfer", "Other"];
    this.paymentMode = "";
    this.paymentRemarks = "";
  }
  // =========================================================================
  //  FINANCIAL YEAR HELPERS
  // =========================================================================
  buildFinancialYearOptions() {
    const today = /* @__PURE__ */ new Date();
    const currentFYStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
    this.financialYearOptions = [];
    for (let i = 0; i < 4; i++) {
      const startYear = currentFYStartYear - i;
      const endYear = startYear + 1;
      const from = new Date(startYear, 3, 1, 0, 0, 0, 0);
      const to = new Date(endYear, 2, 31, 23, 59, 59, 999);
      this.financialYearOptions.push({
        value: `FY${startYear}-${String(endYear).slice(-2)}`,
        label: `FY ${startYear}-${String(endYear).slice(-2)}  (Apr ${startYear} \u2013 Mar ${endYear})`,
        from,
        to
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
    this.applyFilters();
  }
  resetDateFilter() {
    this.selectedFYOption = this.getCurrentFYValue();
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
        this.activeDateRangeLabel = `${this.formatDisplayDate(this.customFromDate)} \u2013 ${this.formatDisplayDate(this.customToDate)}`;
      else if (this.customFromDate)
        this.activeDateRangeLabel = `From ${this.formatDisplayDate(this.customFromDate)}`;
      else if (this.customToDate)
        this.activeDateRangeLabel = `Up to ${this.formatDisplayDate(this.customToDate)}`;
      else
        this.activeDateRangeLabel = "Custom Range";
      return;
    }
    const fy = this.financialYearOptions.find((f) => f.value === this.selectedFYOption);
    this.activeDateRangeLabel = fy ? fy.label : "";
  }
  formatDisplayDate(dateStr) {
    if (!dateStr)
      return "";
    const d = /* @__PURE__ */ new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
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
  applyDateFilter(invoices) {
    const range = this.getActiveDateRange();
    if (!range)
      return invoices;
    return invoices.filter((inv) => {
      const dateStr = inv.invoiceDate || inv.createdAt;
      if (!dateStr)
        return false;
      const d = new Date(dateStr);
      return d >= range.from && d <= range.to;
    });
  }
  // =========================================================================
  //  NGON INIT
  // =========================================================================
  ngOnInit() {
    this.companyName = localStorage.getItem("companyName") || localStorage.getItem("buyerCompanyName") || localStorage.getItem("buyerName") || "";
    this.buyerName = localStorage.getItem("buyerName") || localStorage.getItem("fullName") || localStorage.getItem("email") || "Buyer";
    this.buyerId = Number(localStorage.getItem("buyerId"));
    this.buildFinancialYearOptions();
    this.selectedFYOption = this.getCurrentFYValue();
    this.updateActiveDateRangeLabel();
    this.loadInvoices();
    this.loadLoggedInBuyer();
  }
  goBack() {
    this.router.navigate(["/rfq-dashboard"]);
  }
  // =========================================================================
  //  LOAD
  // =========================================================================
  loadInvoices() {
    this.isLoading = true;
    if (!this.buyerId || isNaN(this.buyerId)) {
      const companyName = localStorage.getItem("companyName") || "";
      if (!companyName) {
        this.isLoading = false;
        return;
      }
      this.dataService.getBuyerInvoices(companyName).subscribe({
        next: (response) => {
          const raw = response?.success ? response.data || [] : Array.isArray(response) ? response : [];
          this.invoiceList = raw.map((inv) => __spreadProps(__spreadValues({}, inv), {
            currencyCode: inv.currencyCode || inv.currency || "INR",
            currencySymbol: inv.currencySymbol || this.getSymbolForCode(inv.currencyCode || inv.currency || "INR")
          }));
          this.applyFilters();
          this.isLoading = false;
        },
        error: () => {
          this.invoiceList = [];
          this.isLoading = false;
        }
      });
      return;
    }
    this.dataService.getBuyerInvoicesByBuyerId(this.buyerId).subscribe({
      next: (response) => {
        const raw = response?.success ? response.data || [] : [];
        this.invoiceList = raw.map((inv) => __spreadProps(__spreadValues({}, inv), {
          currencyCode: inv.currencyCode || inv.currency || "INR",
          currencySymbol: inv.currencySymbol || this.getSymbolForCode(inv.currencyCode || inv.currency || "INR")
        }));
        this.applyFilters();
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error("[BuyerInvoices] Load error:", err);
        this.invoiceList = [];
        this.isLoading = false;
      }
    });
  }
  // =========================================================================
  //  FILTERING & PAGINATION
  // =========================================================================
  applyFilters() {
    this.updateActiveDateRangeLabel();
    this.dateFilteredInvoices = this.applyDateFilter(this.invoiceList);
    this.calculateStats();
    let data = [...this.dateFilteredInvoices];
    if (this.searchText.trim()) {
      const s = this.searchText.toLowerCase();
      data = data.filter((i) => i.invoiceNumber?.toLowerCase().includes(s) || i.supplierName?.toLowerCase().includes(s) || i.supplierCompanyName?.toLowerCase().includes(s) || i.poNumber?.toLowerCase().includes(s) || i.rfqNumber?.toLowerCase().includes(s));
    }
    if (this.statusFilter === "REJECTED") {
      data = data.filter((i) => i.status === "REJECTED" || i.status === "REJECTED_CLOSED");
    } else if (this.statusFilter !== "ALL") {
      data = data.filter((i) => i.status === this.statusFilter);
    }
    if (this.originFilter === "SERVICE") {
      data = data.filter((i) => !!i.sourceSesId);
    } else if (this.originFilter === "REGULAR") {
      data = data.filter((i) => !i.sourceSesId);
    }
    this.filteredInvoices = data;
    this.currentPage = 1;
    this.updatePagination();
  }
  setOriginFilter(filter) {
    this.originFilter = filter;
    this.applyFilters();
  }
  get serviceOriginCount() {
    return this.dateFilteredInvoices.filter((i) => !!i.sourceSesId).length;
  }
  get regularOriginCount() {
    return this.dateFilteredInvoices.filter((i) => !i.sourceSesId).length;
  }
  calculateStats() {
    this.stats = {
      total: this.dateFilteredInvoices.length,
      submitted: this.dateFilteredInvoices.filter((i) => i.status === "SUBMITTED").length,
      approved: this.dateFilteredInvoices.filter((i) => i.status === "APPROVED").length,
      rejected: this.dateFilteredInvoices.filter((i) => i.status === "REJECTED" || i.status === "REJECTED_CLOSED").length,
      paid: this.dateFilteredInvoices.filter((i) => i.status === "PAID").length
    };
  }
  updatePagination() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedInvoices = this.filteredInvoices.slice(start, start + this.pageSize);
    this.cdr.markForCheck();
  }
  get totalPages() {
    return Math.ceil(this.filteredInvoices.length / this.pageSize);
  }
  onPageChange(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }
  // =========================================================================
  //  BUYER INFO
  // =========================================================================
  loadLoggedInBuyer() {
    this.buyerId = Number(localStorage.getItem("buyerId"));
    if (!this.buyerId || isNaN(this.buyerId))
      return;
    this.buyerService.getBuyerById(this.buyerId).subscribe({
      next: (response) => {
        const buyerDetails = response?.data || response;
        if (!buyerDetails || !buyerDetails.id)
          return;
        const loggedInEmail = localStorage.getItem("username") || localStorage.getItem("email");
        const loggedInName = localStorage.getItem("fullName");
        const loggedInPhone = localStorage.getItem("phone");
        let city = "N/A", state = "N/A";
        const userLocationId = localStorage.getItem("locationId");
        if (buyerDetails.locations && Array.isArray(buyerDetails.locations)) {
          let selectedLoc = userLocationId ? buyerDetails.locations.find((loc) => loc.id === Number(userLocationId)) : null;
          if (!selectedLoc && buyerDetails.locations.length > 0)
            selectedLoc = buyerDetails.locations[0];
          if (selectedLoc) {
            city = selectedLoc.city || "N/A";
            state = selectedLoc.state || "N/A";
          }
        }
        this.loggedInBuyer = {
          companyName: buyerDetails.companyName || "N/A",
          companyType: buyerDetails.companyType || "IT",
          email: loggedInEmail || buyerDetails.contactPersonEmail || "N/A",
          contactPersonName: loggedInName || buyerDetails.contactPersonName || "N/A",
          contactPersonPhone: loggedInPhone || buyerDetails.contactPersonPhone || "N/A",
          city,
          state
        };
        this.cdr.markForCheck();
      },
      error: () => {
      }
    });
  }
  getInitials(name) {
    if (!name)
      return "NA";
    const parts = name.trim().split(" ");
    return parts.length >= 2 ? (parts[0][0] + parts[1][0]).toUpperCase() : name.substring(0, 2).toUpperCase();
  }
  // =========================================================================
  //  DOWNLOAD
  // =========================================================================
  downloadInvoiceExcel(invoiceId, invoiceNumber) {
    this.isDownloadingInvoiceExcel = true;
    this.dataService.getInvoiceExcel(invoiceId).subscribe({
      next: (blob) => {
        this.dataService.saveBlob(blob, `Invoice_Report_${invoiceNumber}_${this.dataService.todayStr()}.xlsx`);
        this.messageService.showMessage("success", "Success", "Invoice Excel report downloaded");
        this.isDownloadingInvoiceExcel = false;
      },
      error: () => {
        this.messageService.showMessage("error", "Error", "Failed to download Invoice Excel");
        this.isDownloadingInvoiceExcel = false;
      }
    });
  }
  downloadInvoicePdf(invoiceId, invoiceNumber) {
    this.isDownloadingInvoicePdf = true;
    this.dataService.getInvoicePDF(invoiceId).subscribe({
      next: (blob) => {
        this.dataService.saveBlob(blob, `Invoice_Report_${invoiceNumber}_${this.dataService.todayStr()}.pdf`);
        this.messageService.showMessage("success", "Success", "Invoice PDF report downloaded");
        this.isDownloadingInvoicePdf = false;
      },
      error: () => {
        this.messageService.showMessage("error", "Error", "Failed to download Invoice PDF");
        this.isDownloadingInvoicePdf = false;
      }
    });
  }
  /** Download straight from the table row — opens the invoice (downloadPDF() needs its
   *  print DOM node to exist) and downloads the instant it has rendered. */
  downloadInvoiceFromRow(invoice) {
    this.downloadAfterOpen = true;
    this.viewInvoice(invoice);
  }
  viewInvoice(invoice) {
    this.isLoading = true;
    this.dataService.getInvoiceById(invoice.id).subscribe({
      next: (response) => {
        const data = response?.success ? response.data : invoice;
        this.selectedInvoice = __spreadProps(__spreadValues({}, data), {
          currencyCode: data.currencyCode || data.currency || "INR",
          currencySymbol: data.currencySymbol || this.getSymbolForCode(data.currencyCode || data.currency || "INR")
        });
        this.isViewModalOpen = true;
        this.isLoading = false;
        if (this.downloadAfterOpen) {
          this.downloadAfterOpen = false;
          setTimeout(() => this.downloadPDF(), 150);
        }
      },
      error: () => {
        this.selectedInvoice = __spreadProps(__spreadValues({}, invoice), {
          currencyCode: invoice.currencyCode || invoice.currency || "INR",
          currencySymbol: invoice.currencySymbol || this.getSymbolForCode(invoice.currencyCode || invoice.currency || "INR")
        });
        this.isViewModalOpen = true;
        this.isLoading = false;
      }
    });
  }
  closeViewModal() {
    this.isViewModalOpen = false;
    this.selectedInvoice = null;
  }
  openActionModal(invoice, action) {
    this.selectedInvoice = invoice;
    this.pendingAction = action;
    this.actionRemarks = "";
    this.paymentReference = "";
    this.paymentMode = "";
    this.paymentRemarks = "";
    this.isActionModalOpen = true;
  }
  confirmAction() {
    if (!this.selectedInvoice || !this.pendingAction)
      return;
    if (["approve", "reject", "rejectClose"].includes(this.pendingAction) && !this.actionRemarks.trim()) {
      this.messageService.showMessage("warning", "Required", "Please enter remarks");
      return;
    }
    if (this.pendingAction === "paid" && !this.paymentReference.trim()) {
      this.messageService.showMessage("warning", "Reference required", "Enter the payment reference (UTR / NEFT / cheque number) so this payment can be traced back to a bank record later.");
      return;
    }
    if (this.pendingAction === "paid" && !this.paymentMode) {
      this.messageService.showMessage("warning", "Payment mode required", "Select how this payment was made (NEFT, UPI, cheque, etc.).");
      return;
    }
    this.isPerformingAction = true;
    let action$;
    switch (this.pendingAction) {
      case "approve":
        action$ = this.dataService.approveInvoice(this.selectedInvoice.id, this.buyerName, this.actionRemarks);
        break;
      case "reject":
        action$ = this.dataService.rejectInvoice(this.selectedInvoice.id, this.buyerName, this.actionRemarks);
        break;
      case "rejectClose":
        action$ = this.dataService.rejectInvoicePermanent(this.selectedInvoice.id, this.buyerName, this.actionRemarks);
        break;
      case "paid":
        action$ = this.dataService.markInvoicePaid(this.selectedInvoice.id, this.buyerName, this.paymentReference, this.paymentMode, this.paymentRemarks.trim());
        break;
    }
    action$.subscribe({
      next: () => {
        const msgs = {
          approve: "Invoice approved \u2014 supplier has been notified",
          reject: "Invoice returned to supplier for correction (1 resubmission allowed)",
          rejectClose: "Invoice permanently closed \u2014 supplier cannot resubmit",
          paid: "Invoice marked as paid \u2014 supplier notified"
        };
        this.messageService.showMessage("success", "Success", msgs[this.pendingAction] || "Done");
        this.isActionModalOpen = false;
        this.isViewModalOpen = false;
        this.isPerformingAction = false;
        this.loadInvoices();
      },
      error: (err) => {
        this.messageService.showMessage("error", "Error", err.error?.message || "Action failed");
        this.isPerformingAction = false;
      }
    });
  }
  // =========================================================================
  //  ADVANCE PAYMENT MODAL
  // =========================================================================
  openAdvanceModal(invoice) {
    this.advanceInvoice = invoice;
    this.advanceAmountInput = Number(invoice.advanceRequiredAmount) || 0;
    this.advanceReferenceInput = "";
    this.showAdvanceModal = true;
  }
  closeAdvanceModal() {
    this.showAdvanceModal = false;
    this.advanceInvoice = null;
  }
  confirmRecordAdvance() {
    if (!this.advanceInvoice || !this.advanceAmountInput || this.advanceAmountInput <= 0) {
      this.messageService.showMessage("error", "Error", "Enter a valid advance amount");
      return;
    }
    this.isRecordingAdvance = true;
    this.dataService.recordAdvancePayment(this.advanceInvoice.id, this.buyerName, this.advanceReferenceInput, this.advanceAmountInput).subscribe({
      next: (response) => {
        this.isRecordingAdvance = false;
        if (response?.success) {
          this.messageService.showMessage("success", "Success", "Advance payment recorded \u2014 supplier notified");
          this.closeAdvanceModal();
          this.closeViewModal();
          this.loadInvoices();
        } else {
          this.messageService.showMessage("error", "Error", response?.message || "Failed to record advance payment");
        }
      },
      error: (err) => {
        this.isRecordingAdvance = false;
        this.messageService.showMessage("error", "Error", err.error?.message || "Failed to record advance payment");
      }
    });
  }
  // =========================================================================
  //  PREREQUISITE MODAL
  // =========================================================================
  handleApproveClick(invoice) {
    if (invoice.canApprove === true) {
      this.openActionModal(invoice, "approve");
      return;
    }
    this.prereqInvoice = invoice;
    this.isCheckingPrereqs = true;
    this.isPrereqModalOpen = true;
    this.prereqChecks = { grnCreated: false, grnApproved: false, matchDone: false, matchPassed: false };
    this.dataService.getInvoiceById(invoice.id).subscribe({
      next: (response) => {
        const data = response?.success ? response.data : invoice;
        this.prereqInvoice = __spreadProps(__spreadValues({}, data), { currencyCode: data.currencyCode || data.currency || "INR" });
        const matchStatus = data.threeWayMatchStatus;
        const matchPassed = data.threeWayMatchPassed === true;
        const matchExists = matchStatus != null && matchStatus !== "null";
        this.prereqChecks = {
          grnCreated: matchExists,
          grnApproved: matchExists,
          matchDone: matchExists,
          matchPassed
        };
        this.isCheckingPrereqs = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.prereqChecks = { grnCreated: false, grnApproved: false, matchDone: false, matchPassed: false };
        this.isCheckingPrereqs = false;
        this.cdr.markForCheck();
      }
    });
  }
  closePrereqModal() {
    this.isPrereqModalOpen = false;
    this.prereqInvoice = null;
  }
  proceedToApprove() {
    const inv = this.prereqInvoice;
    this.closePrereqModal();
    this.openActionModal(inv, "approve");
  }
  // Service POs are gated by an approved Service Entry Sheet (SES) instead of
  // GRN + 3-Way Match — sesRequired/sesApproved come straight from the invoice API response,
  // already correctly computed there for POs carrying more than one type at once (a PO tagged
  // both Service and Goods needs both gates, which is exactly what sesRequired/canApprove
  // already reflect — reading them directly here instead of re-deriving from poType keeps this
  // in lockstep with what approveInvoice() actually enforces, no matter how many types a PO has).
  get isServicePO() {
    return this.prereqInvoice?.sesRequired === true;
  }
  get allPrereqsPassed() {
    if (this.isServicePO) {
      return this.prereqInvoice?.sesApproved === true;
    }
    return this.prereqChecks.grnCreated && this.prereqChecks.grnApproved && this.prereqChecks.matchDone && this.prereqChecks.matchPassed;
  }
  goToCreateSES() {
    const poId = this.prereqInvoice?.poId;
    this.closePrereqModal();
    this.router.navigate(["/ses-create"], poId ? { queryParams: { poId } } : {});
  }
  goToSESList() {
    this.closePrereqModal();
    this.router.navigate(["/ses-list"]);
  }
  /** The service report that accompanies this invoice — bound straight to an <a href> so the
   *  browser opens it directly (never via window.open from a callback, which gets popup-blocked). */
  getServiceReportPdfUrl(reportId) {
    return this.dataService.getServiceReportPdfUrl(reportId);
  }
  // =========================================================================
  //  PDF
  // =========================================================================
  downloadPDF() {
    if (!this.selectedInvoice)
      return;
    this.isDownloadingPDF = true;
    const el = document.getElementById("buyer-invoice-print");
    if (!el) {
      this.isDownloadingPDF = false;
      return;
    }
    (0, import_html2canvas.default)(el, { scale: 2, useCORS: true, backgroundColor: "#ffffff" }).then((canvas) => {
      const pdf = new E("p", "mm", "a4");
      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = 210;
      const imgH = canvas.height * pdfWidth / canvas.width;
      let hLeft = imgH, pos = 0;
      pdf.addImage(imgData, "PNG", 0, pos, pdfWidth, imgH);
      hLeft -= 297;
      while (hLeft > 0) {
        pos = hLeft - imgH;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, pos, pdfWidth, imgH);
        hLeft -= 297;
      }
      pdf.save(`${this.selectedInvoice.invoiceNumber}.pdf`);
      this.isDownloadingPDF = false;
    }).catch(() => {
      this.isDownloadingPDF = false;
    });
  }
  // =========================================================================
  //  UTILITY
  // =========================================================================
  getInvoiceStatusLabel(status) {
    const m = {
      DRAFT: "Draft",
      SUBMITTED: "Pending Review",
      // "Approved" reads as "done" — it isn't; the money hasn't moved yet. This is what's
      // actually true of the state: the invoice cleared review and is now just waiting on
      // Mark as Paid.
      APPROVED: "Ready for Payment",
      REJECTED: "Returned for Correction",
      REJECTED_CLOSED: "Permanently Closed",
      PAID: "Paid"
    };
    return m[status] || status;
  }
  getActionLabel() {
    const m = {
      approve: "Approve Invoice",
      reject: "Return for Correction (Supplier can resubmit once)",
      rejectClose: "Reject & Close Permanently",
      paid: "Mark as Paid"
    };
    return m[this.pendingAction] || "";
  }
  getActionButtonColor() {
    const m = {
      approve: "success",
      reject: "warning",
      rejectClose: "danger",
      paid: "info"
    };
    return m[this.pendingAction] || "primary";
  }
  isOverdue(invoice) {
    if (!invoice?.dueDate || invoice.status === "PAID")
      return false;
    return new Date(invoice.dueDate) < /* @__PURE__ */ new Date();
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
  /** Date + time, for moments that matter down to the minute — who marked an invoice paid
   *  and exactly when, not just which day. */
  formatDateTime(d) {
    if (!d)
      return "N/A";
    try {
      return new Date(d).toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return "N/A";
    }
  }
  formatCurrency(amount, currencyCode) {
    const code = currencyCode || "INR";
    const symbol = this.getSymbolForCode(code);
    if (amount == null || isNaN(Number(amount)))
      return `${symbol} 0.00`;
    const formatted = Number(amount).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    const rtlCodes = ["AED", "SAR", "QAR", "KWD", "BHD", "OMR", "IRR", "IQD", "JOD", "LBP"];
    return rtlCodes.includes(code) ? `${formatted} ${symbol}` : `${symbol} ${formatted}`;
  }
  /** Other Charges (Training, Installation, Additional Cost, Transportation,
   *  etc.) carried forward from the PO — raw JSON string on the invoice. */
  getOtherCharges(invoice) {
    const raw = invoice?.otherCharges;
    if (!raw)
      return [];
    try {
      return JSON.parse(raw) || [];
    } catch {
      return [];
    }
  }
  getOtherChargesTotal(invoice) {
    return this.getOtherCharges(invoice).reduce((sum, c) => sum + (Number(c.totalAmount) || 0), 0);
  }
  /** Payment Provisions / Milestones — the supplier's proposed payment schedule, carried
   *  through unchanged from the PO. Purely descriptive. */
  getPaymentMilestones(invoice) {
    const raw = invoice?.paymentMilestones;
    if (!raw)
      return [];
    try {
      return JSON.parse(raw) || [];
    } catch {
      return [];
    }
  }
  getInvoiceAttachmentDownloadUrl(attachmentId) {
    return this.dataService.getInvoiceAttachmentDownloadUrl(attachmentId);
  }
  /** Human-readable label for invoice.advancePaymentDue, e.g. "BEFORE_DELIVERY" → "before delivery". */
  advancePaymentDueLabel(invoice) {
    const map = {
      BEFORE_DELIVERY: "before delivery",
      BEFORE_DISPATCH: "before dispatch",
      ON_ORDER_CONFIRMATION: "on order confirmation"
    };
    return map[invoice?.advancePaymentDue] || "before delivery";
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
      "NZD": "NZ$",
      "SAR": "\u0631.\u0633",
      "QAR": "\u0631.\u0642",
      "KWD": "\u062F.\u0643",
      "BHD": ".\u062F.\u0628",
      "OMR": "\u0631.\u0639.",
      "MYR": "RM",
      "THB": "\u0E3F",
      "IDR": "Rp",
      "PKR": "\u20A8",
      "BDT": "\u09F3"
    };
    return map[code] || code;
  }
  refresh() {
    this.loadInvoices();
  }
};
_BuyerInvoicesComponent.\u0275fac = function BuyerInvoicesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuyerInvoicesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(BuyerService));
};
_BuyerInvoicesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuyerInvoicesComponent, selectors: [["app-buyer-invoices"]], decls: 139, vars: 56, consts: [["fluid", "", 1, "p-4"], ["class", "row mb-4", 4, "ngIf"], [1, "mb-4"], ["xs", "12"], [1, "border-0", "shadow-sm"], [1, "bg-white", "border-0", "pt-4", "px-4", "pb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-3"], [1, "mb-0", "fw-bold"], [1, "bi", "bi-file-earmark-text", "me-2", "text-primary"], [1, "text-muted", "mb-0", "mt-1"], ["cButton", "", "color", "secondary", "variant", "outline", 3, "click"], [1, "bi", "bi-arrow-left", "me-1"], [1, "date-filter-card", "mb-4"], [1, "date-filter-accent"], [1, "date-filter-inner"], [1, "date-filter-title-wrap"], [1, "date-filter-icon-wrap"], [1, "bi", "bi-calendar3-range"], [1, "date-filter-title"], [1, "date-filter-subtitle"], [1, "date-filter-divider"], [1, "date-filter-controls"], [1, "date-filter-field"], [1, "date-filter-label"], [1, "bi", "bi-calendar2-check", "me-1"], [1, "date-filter-select-wrap"], [1, "date-filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", "ALL"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "CUSTOM"], [1, "bi", "bi-chevron-down", "date-filter-select-icon"], [1, "date-filter-field", "date-filter-custom-field"], [1, "bi", "bi-calendar-event", "me-1"], [1, "date-filter-input-wrap"], ["type", "date", 1, "date-filter-input", 3, "ngModelChange", "change", "ngModel"], [1, "bi", "bi-calendar-event-fill", "me-1"], [1, "date-filter-right"], ["class", "date-filter-badge-wrap", 4, "ngIf"], ["class", "date-filter-reset-btn", "title", "Reset to current financial year", 3, "click", 4, "ngIf"], ["class", "mb-4 g-3", 4, "ngIf"], [1, "card", "border-0", "shadow-sm", 2, "border-radius", "12px"], [1, "card-header", "bg-white", "border-0", "pt-3", "px-4", "pb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-2"], [1, "fw-bold", "mb-0"], [1, "bi", "bi-table", "me-2", "text-primary"], ["class", "text-muted fw-normal", "style", "font-size: 0.85rem;", 4, "ngIf"], [1, "d-flex", "gap-2", "align-items-center", "flex-wrap"], [1, "text-muted", "me-1"], ["type", "text", "placeholder", "Search invoice, supplier, PO...", 1, "form-control", "form-control-sm", 2, "width", "200px", 3, "ngModelChange", "ngModel"], [1, "form-select", "form-select-sm", 2, "width", "160px", 3, "ngModelChange", "change", "ngModel"], ["value", "SUBMITTED"], ["value", "APPROVED"], ["value", "REJECTED"], ["value", "PAID"], [1, "d-flex", "gap-2", "mt-3"], ["type", "button", 1, "btn", "btn-sm", 3, "click", "ngClass"], [1, "bi", "bi-file-earmark-text", "me-1"], [1, "badge", "bg-light", "text-dark", "ms-1"], [1, "bi", "bi-tools", "me-1"], [1, "card-body", "p-0"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center p-4 border-top", 4, "ngIf"], ["size", "xl", "scrollable", "", 3, "visibleChange", "visible"], [2, "background", "linear-gradient(135deg,#1565c0,#0d47a1)"], ["cModalTitle", "", 1, "text-white"], [1, "bi", "bi-receipt", "me-2"], ["cButtonClose", "", 2, "filter", "brightness(0) invert(1)", 3, "click"], [4, "ngIf"], ["cButton", "", "color", "secondary", 3, "click"], ["size", "md", 3, "visibleChange", "visible"], [3, "ngStyle"], [1, "bi", "me-2", 3, "ngClass"], ["cButton", "", "color", "secondary", 3, "click", "disabled"], ["cButton", "", 3, "click", "color", "disabled"], ["size", "sm", "class", "me-1", 4, "ngIf"], ["class", "bi me-1", 3, "ngClass", 4, "ngIf"], ["size", "lg", 3, "visibleChange", "visible"], [1, "bi", "bi-shield-lock", "me-2"], ["cButton", "", "color", "success", 3, "click", 4, "ngIf"], ["tabindex", "-1", 1, "modal", "fade", 2, "background-color", "rgba(0,0,0,.5)"], [1, "modal-dialog", "modal-dialog-centered"], ["class", "modal-content", 4, "ngIf"], ["class", "modal-backdrop fade show", 4, "ngIf"], [1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-0", "shadow-lg", 2, "border-radius", "12px", "overflow", "hidden"], [1, "gradient-header"], [1, "row", "align-items-center"], [1, "col-12", "col-lg-3", "text-center", "text-lg-start", "mb-3", "mb-lg-0"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-start"], [1, "avatar-circle-large", "me-3"], [1, "text-white"], [1, "mb-1", "fw-bold", 2, "font-size", "1.5rem", "color", "white"], [1, "mb-0", 2, "opacity", "0.9", "font-size", "0.95rem"], [1, "bi", "bi-briefcase-fill", "me-1"], [1, "col-12", "col-lg-9"], [1, "row", "g-2"], [1, "col-12", "col-md-3"], [1, "info-card"], [1, "info-card-icon"], [1, "bi", "bi-building-fill"], [1, "info-card-content"], [1, "info-label"], [1, "info-value"], [1, "bi", "bi-envelope-fill"], [1, "bi", "bi-telephone-fill"], [1, "bi", "bi-geo-alt-fill"], [3, "value"], [1, "date-filter-badge-wrap"], [1, "date-filter-badge-icon"], [1, "bi", "bi-funnel-fill"], [1, "date-filter-badge-label"], [1, "date-filter-badge-value"], ["title", "Reset to current financial year", 1, "date-filter-reset-btn", 3, "click"], [1, "bi", "bi-arrow-counterclockwise", "me-1"], [1, "mb-4", "g-3"], ["xs", "12", "sm", "6", "lg", "3"], [1, "stat-card", 2, "cursor", "pointer", 3, "click"], [1, "stat-icon-wrap", "stat-purple"], [1, "bi", "bi-file-earmark-text"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon-wrap", "stat-pink"], [1, "bi", "bi-clock-history"], [1, "stat-icon-wrap", "stat-teal"], [1, "bi", "bi-check-circle"], [1, "stat-icon-wrap", "stat-green"], [1, "bi", "bi-currency-rupee"], [1, "stat-value", "stat-value-sm"], [1, "stat-icon-wrap", "stat-red"], [1, "bi", "bi-x-circle"], [1, "text-muted", "fw-normal", 2, "font-size", "0.85rem"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "table-responsive"], [1, "table", "align-middle", "mb-0"], [2, "background", "#f8f9fa"], [1, "ps-4"], [1, "text-end"], [1, "text-center"], ["class", "table-row-hover", 4, "ngFor", "ngForOf"], [1, "table-row-hover"], [1, "fw-bold", "text-primary", 2, "cursor", "pointer", 3, "click"], [1, "text-muted"], ["class", "badge bg-warning text-dark ms-1", "style", "font-size:.65rem;", 4, "ngIf"], [1, "fw-semibold"], ["class", "badge bg-danger ms-1", "style", "font-size:.65rem;", 4, "ngIf"], [1, "fw-bold", "text-success"], [1, "badge", 3, "ngClass"], ["class", "text-muted small mt-1", 4, "ngIf"], [1, "d-flex", "justify-content-center", "gap-1"], ["title", "View Invoice", 1, "btn", "btn-sm", "btn-light", "text-primary", "shadow-sm", 3, "click"], [1, "bi", "bi-eye-fill"], ["class", "btn btn-sm shadow-sm", 3, "ngClass", "title", "click", 4, "ngIf"], ["class", "btn btn-sm btn-warning shadow-sm text-white", "title", "Return for Correction", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-success shadow-sm text-white", "title", "Record Advance Payment", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-info shadow-sm text-white", "title", "Mark as Paid", 3, "click", 4, "ngIf"], ["title", "Download Invoice", 1, "btn", "btn-sm", "btn-light", "text-success", "shadow-sm", 3, "click"], [1, "bi", "bi-file-earmark-pdf"], [1, "badge", "bg-warning", "text-dark", "ms-1", 2, "font-size", ".65rem"], [1, "bi", "bi-arrow-repeat", "me-1"], [1, "badge", "bg-danger", "ms-1", 2, "font-size", ".65rem"], [1, "text-muted", "small", "mt-1"], [1, "btn", "btn-sm", "shadow-sm", 3, "click", "ngClass", "title"], [1, "bi", 3, "ngClass"], ["title", "Return for Correction", 1, "btn", "btn-sm", "btn-warning", "shadow-sm", "text-white", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], ["title", "Record Advance Payment", 1, "btn", "btn-sm", "btn-success", "shadow-sm", "text-white", 3, "click"], [1, "bi", "bi-piggy-bank-fill"], ["title", "Mark as Paid", 1, "btn", "btn-sm", "btn-info", "shadow-sm", "text-white", 3, "click"], ["colspan", "9", 1, "text-center", "py-5"], [1, "bi", "bi-receipt", "display-6", "d-block", "mb-2", 2, "opacity", ".25"], [1, "text-muted", "mb-0"], [1, "d-flex", "justify-content-between", "align-items-center", "p-4", "border-top"], [1, "d-flex", "gap-2"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [1, "bi", "bi-chevron-right"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge", "fs-6", 3, "ngClass"], ["class", "badge bg-warning text-dark", 4, "ngIf"], [1, "badge", 2, "background", "#1565c0", "font-size", "0.75rem"], [1, "bi", "bi-globe2", "me-1"], [1, "btn", "btn-sm", "btn-danger", 3, "click", "disabled"], ["class", "bi bi-file-pdf me-1", 4, "ngIf"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "btn", "btn-sm", "btn-success", 3, "click", "disabled"], ["class", "bi bi-file-earmark-excel me-1", 4, "ngIf"], ["class", "btn btn-sm", 3, "ngClass", "title", "click", 4, "ngIf"], ["class", "btn btn-sm btn-warning text-white", "title", "Reject \u2014 supplier can resubmit", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-success text-white", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-info text-white", 3, "click", 4, "ngIf"], ["class", "alert mb-4", "style", "border-left:4px solid;", 3, "ngClass", "borderLeftColor", 4, "ngIf"], ["class", "mb-4", 4, "ngIf"], ["class", "alert alert-info d-flex align-items-start gap-2 mb-4", "style", "border-left:4px solid #0288d1;", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], ["id", "buyer-invoice-print"], [1, "col-6"], [1, "fw-bold", "text-primary", 2, "font-size", "2rem"], [1, "text-muted", "fs-5"], [1, "col-6", "text-end"], [1, "mb-1"], [1, "text-danger", "fw-bold"], [1, "mb-0"], [1, "p-3", "bg-light", "rounded"], [1, "fw-bold", "text-primary", "mb-2"], [1, "mb-1", "fw-bold"], [1, "mb-0", "text-muted", "small"], [1, "fw-bold", "text-success", "mb-2"], [1, "table-responsive", "mb-4"], [1, "table", "table-bordered", 2, "font-size", ".875rem"], [2, "background", "#1565c0", "color", "white"], [4, "ngFor", "ngForOf"], [1, "table-light"], ["colspan", "7", 1, "text-end", "fw-semibold"], [1, "text-end", "fw-semibold"], ["colspan", "7", 1, "text-end", "fw-semibold", "text-warning"], [1, "text-end", "fw-semibold", "text-warning"], ["class", "table-light", 4, "ngIf"], ["colspan", "7", 1, "text-end", "fw-bold"], [1, "text-end", "fw-bold"], ["class", "mb-3", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "badge", "bg-warning", "text-dark"], [1, "bi", "bi-file-pdf", "me-1"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-file-earmark-excel", "me-1"], [1, "btn", "btn-sm", 3, "click", "ngClass", "title"], [1, "bi", "me-1", 3, "ngClass"], ["title", "Reject \u2014 supplier can resubmit", 1, "btn", "btn-sm", "btn-warning", "text-white", 3, "click"], [1, "btn", "btn-sm", "btn-success", "text-white", 3, "click"], [1, "bi", "bi-piggy-bank-fill", "me-1"], [1, "btn", "btn-sm", "btn-info", "text-white", 3, "click"], [1, "bi", "bi-currency-rupee", "me-1"], [1, "alert", "mb-4", 2, "border-left", "4px solid", 3, "ngClass"], [1, "d-flex", "align-items-start", "gap-2"], [1, "bi", "bi-piggy-bank-fill", "fs-5", "mt-1", "flex-shrink-0"], [1, "flex-grow-1"], [1, "text-muted", "small"], [1, "row", "mt-2", "g-2"], [1, "col-auto"], [1, "small", "text-muted"], [1, "fw-bold"], ["class", "small text-muted", 4, "ngIf"], [1, "bi", "bi-list-check", "me-1"], [1, "table", "table-sm", "align-middle"], [1, "bi", "bi-paperclip", "me-1"], [1, "d-flex", "flex-wrap", "gap-2"], ["target", "_blank", "class", "d-flex align-items-center gap-2 px-3 py-2 text-decoration-none", "style", "background:#f1f5f9;border-radius:8px;font-size:0.85rem;color:#1e293b;", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "d-flex", "align-items-center", "gap-2", "px-3", "py-2", "text-decoration-none", 2, "background", "#f1f5f9", "border-radius", "8px", "font-size", "0.85rem", "color", "#1e293b", 3, "href"], [1, "bi", "bi-file-earmark-arrow-down", "text-primary"], ["class", "text-muted", 4, "ngIf"], [1, "alert", "alert-info", "d-flex", "align-items-start", "gap-2", "mb-4", 2, "border-left", "4px solid #0288d1"], [1, "bi", "bi-info-circle-fill", "fs-5", "mt-1", "flex-shrink-0", 2, "color", "#0288d1"], ["class", "mt-1", 4, "ngIf"], [1, "mt-1"], [1, "alert", "alert-warning"], [1, "bi", "bi-exclamation-triangle-fill", "me-1"], [1, "alert", "alert-danger"], [1, "bi", "bi-x-octagon-fill", "me-1"], [1, "alert", "alert-info"], [1, "d-block", "text-muted", "mt-1"], [1, "bi", "bi-check-circle-fill", "me-1"], ["class", "small mt-1", 4, "ngIf"], [1, "small", "mt-1"], [1, "bi", "bi-chat-left-text", "me-1"], [1, "mb-3"], [1, "row"], [1, "col-md-6"], [1, "p-3", "border", "rounded", 2, "border-color", "#1565c0!important"], [1, "bi", "bi-bank", "me-1"], [1, "table", "table-sm", "table-borderless", "mb-0"], [1, "text-muted", 2, "width", "45%"], ["class", "p-3 bg-light rounded", 4, "ngIf"], [1, "fw-bold", "mb-2"], [1, "text-muted", "mb-2"], [1, "alert", "alert-light", "border", "mb-3"], [1, "text-success", "fw-bold"], ["class", "alert alert-warning mb-3", 4, "ngIf"], ["class", "alert alert-danger mb-3", 4, "ngIf"], [1, "alert", "alert-warning", "mb-3"], [1, "bi", "bi-arrow-counterclockwise", "me-2"], [1, "alert", "alert-danger", "mb-3"], [1, "bi", "bi-x-octagon-fill", "me-2"], [1, "form-label", "fw-semibold"], [1, "text-danger"], [1, "text-muted", "fw-normal", "ms-1"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-select", "mb-3", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], ["type", "text", "placeholder", "e.g. NEFT/UTR number, cheque number", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-muted", "d-block", "mb-3"], [1, "text-muted", "fw-normal"], ["rows", "2", "placeholder", "Anything worth noting about this payment", 1, "form-control", 3, "ngModelChange", "ngModel"], ["size", "sm", 1, "me-1"], [1, "spinner-border", "text-primary", 2, "width", "2.5rem", "height", "2.5rem"], [1, "mt-3", "text-muted", "fw-semibold"], [1, "prereq-invoice-card", "mb-4"], [1, "d-flex", "align-items-center", "gap-3"], [1, "prereq-inv-icon"], [1, "fw-bold", "fs-6"], [1, "ms-auto"], [1, "badge", "bg-primary"], ["class", "alert alert-warning d-flex gap-2 mb-4", "style", "border-left:4px solid #f57c00;", 4, "ngIf"], ["class", "prereq-checklist", 4, "ngIf"], ["class", "alert alert-success d-flex align-items-center gap-2 mt-4", "style", "border-left:4px solid #28a745;", 4, "ngIf"], ["class", "mt-4 p-3 rounded d-flex align-items-center gap-2", "style", "background:#fff3cd;border:1px solid #ffc107;", 4, "ngIf"], [1, "alert", "alert-warning", "d-flex", "gap-2", "mb-4", 2, "border-left", "4px solid #f57c00"], [1, "bi", "bi-exclamation-triangle-fill", "fs-5", "flex-shrink-0", "mt-1", 2, "color", "#f57c00"], [1, "prereq-checklist"], [1, "prereq-step"], [1, "prereq-step-number"], ["class", "bi bi-check-lg", 4, "ngIf"], [1, "prereq-step-body"], [1, "prereq-step-title"], [1, "prereq-step-desc"], [1, "prereq-step-badge"], [1, "badge", "rounded-pill"], [1, "bi", "me-1"], [1, "prereq-line"], ["class", "bi bi-x-lg", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], [1, "bi", "bi-check-lg"], [1, "bi", "bi-x-lg"], [1, "mt-2"], [1, "badge", "bg-danger", "px-2", "py-1"], [1, "bi", "bi-x-circle", "me-1"], [1, "text-danger", "small", "mt-1"], [1, "mt-2", "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["class", "mt-2 d-flex gap-2", 4, "ngIf"], ["target", "_blank", 1, "btn", "btn-sm", "btn-outline-primary", 3, "href"], [1, "bi", "bi-file-earmark-pdf", "me-1"], [1, "alert", "alert-success", "d-flex", "align-items-center", "gap-2", "mt-4", 2, "border-left", "4px solid #28a745"], [1, "bi", "bi-check-circle-fill", "fs-4", "flex-shrink-0", 2, "color", "#28a745"], [1, "mt-4", "p-3", "rounded", "d-flex", "align-items-center", "gap-2", 2, "background", "#fff3cd", "border", "1px solid #ffc107"], [1, "bi", "bi-lock-fill", "fs-5", 2, "color", "#856404"], [2, "color", "#856404"], ["cButton", "", "color", "success", 3, "click"], [1, "bi", "bi-check-lg", "me-1"], [1, "modal-content"], [1, "modal-header", 2, "background", "linear-gradient(135deg,#198754,#0f5132)"], [1, "modal-title", "text-white"], [1, "bi", "bi-piggy-bank-fill", "me-2"], ["type", "button", 1, "btn-close", 2, "filter", "brightness(0) invert(1)", 3, "click", "disabled"], [1, "modal-body"], [1, "input-group"], [1, "input-group-text"], ["type", "number", "min", "0", "step", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-2"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-success", 3, "click", "disabled"], ["class", "bi bi-check2-all me-1", 4, "ngIf"], [1, "bi", "bi-check2-all", "me-1"], [1, "modal-backdrop", "fade", "show"]], template: function BuyerInvoicesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-container", 0);
    \u0275\u0275template(1, BuyerInvoicesComponent_div_1_Template, 54, 8, "div", 1);
    \u0275\u0275elementStart(2, "c-row", 2)(3, "c-col", 3)(4, "c-card", 4)(5, "c-card-header", 5)(6, "div", 6)(7, "div")(8, "h3", 7);
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, "Invoice Management ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 9);
    \u0275\u0275text(12, "Review, approve, reject and track supplier invoices for your purchase orders.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 10);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_Template_button_click_13_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(14, "i", 11);
    \u0275\u0275text(15, " Back to Dashboard ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(16, "div", 12);
    \u0275\u0275element(17, "div", 13);
    \u0275\u0275elementStart(18, "div", 14)(19, "div", 15)(20, "div", 16);
    \u0275\u0275element(21, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "div", 18);
    \u0275\u0275text(24, "Date Range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 19);
    \u0275\u0275text(26, "Filter invoices by invoice date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(27, "div", 20);
    \u0275\u0275elementStart(28, "div", 21)(29, "div", 22)(30, "label", 23);
    \u0275\u0275element(31, "i", 24);
    \u0275\u0275text(32, "Financial Year / Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 25)(34, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function BuyerInvoicesComponent_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedFYOption, $event) || (ctx.selectedFYOption = $event);
      return $event;
    });
    \u0275\u0275listener("change", function BuyerInvoicesComponent_Template_select_change_34_listener() {
      return ctx.onFYOptionChange();
    });
    \u0275\u0275elementStart(35, "option", 27);
    \u0275\u0275text(36, "All Time");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, BuyerInvoicesComponent_option_37_Template, 2, 2, "option", 28);
    \u0275\u0275elementStart(38, "option", 29);
    \u0275\u0275text(39, "Custom Range");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(40, "i", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 31)(42, "label", 23);
    \u0275\u0275element(43, "i", 32);
    \u0275\u0275text(44, "From Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 33)(46, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function BuyerInvoicesComponent_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.customFromDate, $event) || (ctx.customFromDate = $event);
      return $event;
    });
    \u0275\u0275listener("change", function BuyerInvoicesComponent_Template_input_change_46_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 31)(48, "label", 23);
    \u0275\u0275element(49, "i", 35);
    \u0275\u0275text(50, "To Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 33)(52, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function BuyerInvoicesComponent_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.customToDate, $event) || (ctx.customToDate = $event);
      return $event;
    });
    \u0275\u0275listener("change", function BuyerInvoicesComponent_Template_input_change_52_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(53, "div", 20);
    \u0275\u0275elementStart(54, "div", 36);
    \u0275\u0275template(55, BuyerInvoicesComponent_div_55_Template, 8, 1, "div", 37)(56, BuyerInvoicesComponent_button_56_Template, 3, 0, "button", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(57, BuyerInvoicesComponent_c_row_57_Template, 46, 5, "c-row", 39);
    \u0275\u0275elementStart(58, "div", 40)(59, "div", 41)(60, "div", 42)(61, "div")(62, "h5", 43);
    \u0275\u0275element(63, "i", 44);
    \u0275\u0275text(64, "All Invoices ");
    \u0275\u0275template(65, BuyerInvoicesComponent_span_65_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 46)(67, "small", 47);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function BuyerInvoicesComponent_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function BuyerInvoicesComponent_Template_input_ngModelChange_69_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function BuyerInvoicesComponent_Template_select_ngModelChange_70_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
      return $event;
    });
    \u0275\u0275listener("change", function BuyerInvoicesComponent_Template_select_change_70_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementStart(71, "option", 27);
    \u0275\u0275text(72, "All Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "option", 50);
    \u0275\u0275text(74, "Pending Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "option", 51);
    \u0275\u0275text(76, "Ready for Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "option", 52);
    \u0275\u0275text(78, "Rejected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "option", 53);
    \u0275\u0275text(80, "Paid");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(81, "div", 54)(82, "button", 55);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_Template_button_click_82_listener() {
      return ctx.setOriginFilter("ALL");
    });
    \u0275\u0275text(83, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "button", 55);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_Template_button_click_84_listener() {
      return ctx.setOriginFilter("REGULAR");
    });
    \u0275\u0275element(85, "i", 56);
    \u0275\u0275text(86, "Regular ");
    \u0275\u0275elementStart(87, "span", 57);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "button", 55);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_Template_button_click_89_listener() {
      return ctx.setOriginFilter("SERVICE");
    });
    \u0275\u0275element(90, "i", 58);
    \u0275\u0275text(91, "Service (Spares) ");
    \u0275\u0275elementStart(92, "span", 57);
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(94, "div", 59);
    \u0275\u0275template(95, BuyerInvoicesComponent_div_95_Template, 4, 0, "div", 60)(96, BuyerInvoicesComponent_div_96_Template, 25, 2, "div", 61)(97, BuyerInvoicesComponent_div_97_Template, 10, 4, "div", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(98, "c-modal", 63);
    \u0275\u0275listener("visibleChange", function BuyerInvoicesComponent_Template_c_modal_visibleChange_98_listener($event) {
      return ctx.isViewModalOpen = $event;
    });
    \u0275\u0275elementStart(99, "c-modal-header", 64)(100, "h5", 65);
    \u0275\u0275element(101, "i", 66);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "button", 67);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_Template_button_click_103_listener() {
      return ctx.closeViewModal();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(104, BuyerInvoicesComponent_c_modal_body_104_Template, 111, 45, "c-modal-body", 68);
    \u0275\u0275elementStart(105, "c-modal-footer")(106, "button", 69);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_Template_button_click_106_listener() {
      return ctx.closeViewModal();
    });
    \u0275\u0275text(107, "Close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(108, "c-modal", 70);
    \u0275\u0275listener("visibleChange", function BuyerInvoicesComponent_Template_c_modal_visibleChange_108_listener($event) {
      return ctx.isActionModalOpen = $event;
    });
    \u0275\u0275elementStart(109, "c-modal-header", 71)(110, "h5", 65);
    \u0275\u0275element(111, "i", 72);
    \u0275\u0275text(112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "button", 67);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_Template_button_click_113_listener() {
      return ctx.isActionModalOpen = false;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(114, BuyerInvoicesComponent_c_modal_body_114_Template, 18, 7, "c-modal-body", 68);
    \u0275\u0275elementStart(115, "c-modal-footer")(116, "button", 73);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_Template_button_click_116_listener() {
      return ctx.isActionModalOpen = false;
    });
    \u0275\u0275text(117, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "button", 74);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_Template_button_click_118_listener() {
      return ctx.confirmAction();
    });
    \u0275\u0275template(119, BuyerInvoicesComponent_c_spinner_119_Template, 1, 0, "c-spinner", 75)(120, BuyerInvoicesComponent_i_120_Template, 1, 6, "i", 76);
    \u0275\u0275text(121);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(122, "c-modal", 77);
    \u0275\u0275listener("visibleChange", function BuyerInvoicesComponent_Template_c_modal_visibleChange_122_listener($event) {
      return ctx.isPrereqModalOpen = $event;
    });
    \u0275\u0275elementStart(123, "c-modal-header", 64)(124, "h5", 65);
    \u0275\u0275element(125, "i", 78);
    \u0275\u0275text(126, "Invoice Approval \u2014 Prerequisites ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "button", 67);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_Template_button_click_127_listener() {
      return ctx.closePrereqModal();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "c-modal-body");
    \u0275\u0275template(129, BuyerInvoicesComponent_div_129_Template, 4, 0, "div", 60)(130, BuyerInvoicesComponent_div_130_Template, 19, 9, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "c-modal-footer")(132, "button", 69);
    \u0275\u0275listener("click", function BuyerInvoicesComponent_Template_button_click_132_listener() {
      return ctx.closePrereqModal();
    });
    \u0275\u0275text(133, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275template(134, BuyerInvoicesComponent_button_134_Template, 3, 0, "button", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "div", 80)(136, "div", 81);
    \u0275\u0275template(137, BuyerInvoicesComponent_div_137_Template, 50, 14, "div", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(138, BuyerInvoicesComponent_div_138_Template, 1, 0, "div", 83);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loggedInBuyer);
    \u0275\u0275advance(33);
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
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx.activeDateRangeLabel);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx.filteredInvoices.length, " result", ctx.filteredInvoices.length !== 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngClass", ctx.originFilter === "ALL" ? "btn-dark" : "btn-outline-secondary");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx.originFilter === "REGULAR" ? "btn-dark" : "btn-outline-secondary");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.regularOriginCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx.originFilter === "SERVICE" ? "btn-warning" : "btn-outline-warning");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.serviceOriginCount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredInvoices.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("visible", ctx.isViewModalOpen);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx.selectedInvoice == null ? null : ctx.selectedInvoice.invoiceNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.selectedInvoice);
    \u0275\u0275advance(4);
    \u0275\u0275property("visible", ctx.isActionModalOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(49, _c0, ctx.pendingAction === "approve" ? "linear-gradient(135deg,#388e3c,#1b5e20)" : ctx.pendingAction === "reject" ? "linear-gradient(135deg,#f57c00,#e65100)" : ctx.pendingAction === "rejectClose" ? "linear-gradient(135deg,#e53935,#b71c1c)" : "linear-gradient(135deg,#0288d1,#01579b)"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(51, _c1, ctx.pendingAction === "approve", ctx.pendingAction === "reject", ctx.pendingAction === "rejectClose", ctx.pendingAction === "paid"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.getActionLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.selectedInvoice);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isPerformingAction);
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx.getActionButtonColor())("disabled", ctx.isPerformingAction);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isPerformingAction);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isPerformingAction);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.getActionLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("visible", ctx.isPrereqModalOpen);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isCheckingPrereqs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isCheckingPrereqs);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.allPrereqsPassed);
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx.showAdvanceModal ? "block" : "none");
    \u0275\u0275classProp("show", ctx.showAdvanceModal);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.showAdvanceModal && ctx.advanceInvoice);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showAdvanceModal);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  NumberValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  MinValidator,
  NgModel,
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  ButtonDirective,
  ModalModule,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  SpinnerComponent
], styles: ['\n\n.date-filter-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.date-filter-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.10);\n}\n.date-filter-accent[_ngcontent-%COMP%] {\n  width: 5px;\n  background:\n    linear-gradient(\n      180deg,\n      #667eea 0%,\n      #764ba2 100%);\n  flex-shrink: 0;\n}\n.date-filter-inner[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  padding: 18px 24px;\n  flex-wrap: wrap;\n  gap: 0;\n}\n.date-filter-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  min-width: 160px;\n}\n.date-filter-icon-wrap[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-title[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.2;\n}\n.date-filter-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #8a8a9a;\n  margin-top: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  font-weight: 500;\n}\n.date-filter-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 44px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      #e2e5f0,\n      transparent);\n  margin: 0 24px;\n  flex-shrink: 0;\n  align-self: center;\n}\n.date-filter-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.date-filter-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 220px;\n}\n.date-filter-custom-field[_ngcontent-%COMP%] {\n  max-width: 0;\n  min-width: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition:\n    max-width 0.3s ease,\n    opacity 0.3s ease,\n    min-width 0.3s ease;\n  pointer-events: none;\n}\n.date-filter-custom-field.date-filter-field-visible[_ngcontent-%COMP%] {\n  max-width: 200px;\n  min-width: 160px;\n  opacity: 1;\n  pointer-events: all;\n}\n.date-filter-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 0;\n  white-space: nowrap;\n}\n.date-filter-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.date-filter-select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.date-filter-select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n  padding: 9px 36px 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-select[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-select[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-select-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.75rem;\n  color: #667eea;\n  pointer-events: none;\n}\n.date-filter-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.date-filter-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-input[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-input[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  margin-left: auto;\n  flex-wrap: wrap;\n}\n.date-filter-badge-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  border: 1.5px solid rgba(102, 126, 234, 0.2);\n  border-radius: 12px;\n  padding: 8px 14px 8px 10px;\n}\n.date-filter-badge-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-badge-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  line-height: 1;\n}\n.date-filter-badge-value[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #667eea;\n  margin-top: 3px;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n.date-filter-reset-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 9px 16px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #667eea;\n  background: #f0f2ff;\n  border: 1.5px solid #d0d5f5;\n  border-radius: 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.date-filter-reset-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n  transform: translateY(-1px);\n}\n.date-filter-reset-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n@media (max-width: 992px) {\n  .date-filter-inner[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 16px;\n    padding: 16px 18px;\n  }\n  .date-filter-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .date-filter-title-wrap[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-controls[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .date-filter-right[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 576px) {\n  .date-filter-field[_ngcontent-%COMP%], \n   .date-filter-custom-field.date-filter-field-visible[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-badge-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.gradient-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  padding: 10px;\n}\n.avatar-circle-large[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  color: white;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n}\n.info-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-card-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  font-size: 1.5rem;\n  color: white;\n}\n.info-card-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.9;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: white;\n  margin-top: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px 22px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  cursor: default;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.11);\n}\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: #ffffff;\n  flex-shrink: 0;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6c63ff,\n      #9b59b6);\n}\n.stat-pink[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f953c6,\n      #b91d73);\n}\n.stat-teal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #43cea2,\n      #185a9d);\n}\n.stat-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #56ab2f,\n      #a8e063);\n}\n.stat-orange-pink[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n}\n.stat-red[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff416c,\n      #ff4b2b);\n}\n.stat-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe,\n      #00f2fe);\n}\n.stat-hold[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f7971e,\n      #ffd200);\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1a2e;\n  line-height: 1.1;\n  letter-spacing: -0.5px;\n}\n.stat-value-sm[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 2px;\n}\n.gradient-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  position: relative;\n  overflow: hidden;\n  padding: 1.5rem;\n  border-radius: 12px 12px 0 0;\n}\n.gradient-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n}\n.avatar-circle-large[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 1.6rem;\n  flex-shrink: 0;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  height: 100%;\n}\n.info-card-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  flex-shrink: 0;\n  margin-right: 1rem;\n  font-size: 1.5rem;\n  background: rgba(255, 255, 255, 0.25);\n}\n.info-card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  fill: currentColor;\n}\n.info-card-content[_ngcontent-%COMP%] {\n  color: white;\n  flex: 1;\n  min-width: 0;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.25rem;\n  font-weight: 600;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.75rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s, box-shadow 0.2s;\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n}\n.stat-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 120px;\n  height: 120px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  transform: translate(40%, -40%);\n}\n.stat-card-blue[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.stat-card-warning[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n}\n.stat-card-success[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n}\n.stat-card-info[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #43e97b 0%,\n      #38f9d7 100%);\n  color: white;\n}\n.stat-card[_ngcontent-%COMP%]   c-card-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n}\n.stat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  fill: currentColor;\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  opacity: 0.9;\n}\n.table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid #dee2e6;\n  padding: 0.75rem;\n  background-color: #f8f9fa;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  vertical-align: middle;\n  border-bottom: 1px solid #e9ecef;\n}\nc-badge[_ngcontent-%COMP%], \n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.35rem 0.65rem;\n  border-radius: 0.25rem;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.8rem;\n  font-size: 0.85rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.btn-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n}\n.btn-light[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.action-btn[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  padding: 6px 12px;\n  font-size: 0.85rem;\n  transition: all 0.2s ease;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\nc-modal-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-bottom: none;\n}\nc-modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: white;\n}\nc-modal-header[_ngcontent-%COMP%]   button[cButtonClose][_ngcontent-%COMP%] {\n  filter: brightness(0) invert(1);\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-bottom: 0.5rem;\n  color: #495057;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-color: #667eea;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #667eea;\n  border-color: #667eea;\n  color: white;\n}\nc-spinner[_ngcontent-%COMP%], \n.spinner-border[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\nc-card[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\nc-card[_ngcontent-%COMP%]:hover, \n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.shadow-lg[_ngcontent-%COMP%] {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.alert-success[_ngcontent-%COMP%] {\n  background-color: #d1f2eb;\n  color: #0c5460;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.alert[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n.alert[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[colspan][_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[colspan][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  margin-bottom: 1rem;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 8px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 10px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #667eea;\n  border-radius: 10px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #764ba2;\n}\nc-modal-body[_ngcontent-%COMP%]::-webkit-scrollbar, \n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\nc-modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 10px;\n}\nc-modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #667eea;\n  border-radius: 10px;\n}\nc-modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #764ba2;\n}\nc-modal-body[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%] {\n  max-height: 70vh;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.list-group-item[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px !important;\n  margin-bottom: 8px;\n  transition: all 0.2s ease;\n  padding: 1rem;\n}\n.list-group-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  transform: translateX(4px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n.list-group-item[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.list-group-item[_ngcontent-%COMP%]   i.bi[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-right: 1rem;\n}\nbutton[cButton][_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\nbutton[cButton][_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\nbutton[cButton][_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\nbutton[cButton][color=danger][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545 0%,\n      #c82333 100%);\n  border: none;\n}\nbutton[cButton][color=danger][_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #c82333 0%,\n      #bd2130 100%);\n}\nc-card-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n}\nc-card-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.no-print[_ngcontent-%COMP%] {\n  display: block;\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  body[_ngcontent-%COMP%] {\n    background: white;\n  }\n  .modal-body[_ngcontent-%COMP%], \n   c-modal-body[_ngcontent-%COMP%] {\n    max-height: none;\n    overflow: visible;\n  }\n}\n.gap-1[_ngcontent-%COMP%] {\n  gap: 0.25rem !important;\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 0.5rem !important;\n}\n.gap-3[_ngcontent-%COMP%] {\n  gap: 1rem !important;\n}\n.table[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 1.4;\n}\n.table[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.justify-content-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 0.5rem !important;\n}\n.bi[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.fs-4[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n@media (max-width: 991px) {\n  .avatar-circle-large[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    font-size: 1.4rem;\n  }\n  .info-card[_ngcontent-%COMP%] {\n    padding: 0.875rem;\n  }\n  .info-card-icon[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n    font-size: 1.3rem;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .stat-number[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 55px;\n    height: 55px;\n  }\n}\n@media (max-width: 767px) {\n  .gradient-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .avatar-circle-large[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    font-size: 1.2rem;\n  }\n  .info-card[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    margin-bottom: 0.5rem;\n  }\n  .info-card-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 1.2rem;\n    margin-right: 0.75rem;\n  }\n  .info-label[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .stat-number[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .table[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  c-modal-body[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .list-group-item[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .list-group-item[_ngcontent-%COMP%]   i.bi[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-right: 0.75rem;\n  }\n}\n.border-0[_ngcontent-%COMP%] {\n  border: 0 !important;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700 !important;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n.overflow-hidden[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n.text-white[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.opacity-90[_ngcontent-%COMP%] {\n  opacity: 0.9 !important;\n}\n.text-white[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7) !important;\n}\nc-card.text-white[_ngcontent-%COMP%] {\n  color: white !important;\n}\nc-card.text-white[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: inherit;\n}\n*[_ngcontent-%COMP%] {\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%], \nh6[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: #667eea !important;\n}\nstrong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\nsmall[_ngcontent-%COMP%] {\n  font-size: 85%;\n  color: #6c757d;\n}\n.prereq-invoice-card[_ngcontent-%COMP%] {\n  background: #f0f4ff;\n  border: 1.5px solid #c7d2fe;\n  border-radius: 12px;\n  padding: 16px 20px;\n}\n.prereq-inv-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #1565c0,\n      #0d47a1);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  flex-shrink: 0;\n}\n.prereq-checklist[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.prereq-line[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 22px;\n  background: #dee2e6;\n  margin-left: 23px;\n  transition: background 0.3s ease;\n}\n.prereq-line.line-done[_ngcontent-%COMP%] {\n  background: #28a745;\n}\n.prereq-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 16px;\n  border-radius: 12px;\n  border: 1.5px solid #e9ecef;\n  background: #f8f9fa;\n  transition: border-color 0.2s ease, background 0.2s ease;\n}\n.prereq-step.step-done[_ngcontent-%COMP%] {\n  border-color: #c3e6cb;\n  background: #f0fdf4;\n}\n.prereq-step.step-failed[_ngcontent-%COMP%] {\n  border-color: #f5c6cb;\n  background: #fff5f5;\n}\n.prereq-step.step-pending[_ngcontent-%COMP%] {\n  border-color: #e9ecef;\n  background: #f8f9fa;\n  opacity: 0.85;\n}\n.prereq-step-number[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  font-weight: 700;\n  flex-shrink: 0;\n  border: 2px solid #dee2e6;\n  background: #fff;\n  color: #6c757d;\n  transition: all 0.2s ease;\n}\n.step-done[_ngcontent-%COMP%]   .prereq-step-number[_ngcontent-%COMP%] {\n  background: #28a745;\n  border-color: #28a745;\n  color: #fff;\n}\n.step-failed[_ngcontent-%COMP%]   .prereq-step-number[_ngcontent-%COMP%] {\n  background: #dc3545;\n  border-color: #dc3545;\n  color: #fff;\n}\n.prereq-step-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.prereq-step-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.92rem;\n  color: #2c3e50;\n  margin-bottom: 4px;\n  line-height: 1.3;\n}\n.step-done[_ngcontent-%COMP%]   .prereq-step-title[_ngcontent-%COMP%] {\n  color: #1a6b30;\n}\n.step-failed[_ngcontent-%COMP%]   .prereq-step-title[_ngcontent-%COMP%] {\n  color: #842029;\n}\n.prereq-step-desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  line-height: 1.55;\n}\n.prereq-step-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  align-self: center;\n}\n.prereq-step-badge[_ngcontent-%COMP%]   .badge.bg-light[_ngcontent-%COMP%] {\n  background: #e9ecef !important;\n  color: #495057 !important;\n  border: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=buyer-invoices.component.css.map */'] });
var BuyerInvoicesComponent = _BuyerInvoicesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuyerInvoicesComponent, [{
    type: Component,
    args: [{ selector: "app-buyer-invoices", standalone: true, imports: [
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
      ModalModule,
      SpinnerComponent
    ], template: `<!-- <c-container fluid class="p-4">\r
\r
<div class="row mb-4" *ngIf="loggedInBuyer">\r
  <div class="col-12">\r
    <div class="card border-0 shadow-lg" style="border-radius: 12px; overflow: hidden;">\r
      <div class="gradient-header">\r
        <div class="row align-items-center">\r
          <div class="col-12 col-lg-3 text-center text-lg-start mb-3 mb-lg-0">\r
            <div class="d-flex align-items-center justify-content-center justify-content-lg-start">\r
              <div class="avatar-circle-large me-3">{{ getInitials(loggedInBuyer.contactPersonName) }}</div>\r
              <div class="text-white">\r
                <h3 class="mb-1 fw-bold" style="font-size: 1.5rem; color: white;">{{ loggedInBuyer.contactPersonName }}</h3>\r
                <p class="mb-0" style="opacity: 0.9; font-size: 0.95rem;">\r
                  <i class="bi bi-briefcase-fill me-1"></i>{{ loggedInBuyer.companyType }}\r
                </p>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="col-12 col-lg-9">\r
            <div class="row g-2">\r
              <div class="col-12 col-md-3">\r
                <div class="info-card">\r
                  <div class="info-card-icon"><i class="bi bi-building-fill"></i></div>\r
                  <div class="info-card-content"><div class="info-label">Company Name</div><div class="info-value">{{ loggedInBuyer.companyName }}</div></div>\r
                </div>\r
              </div>\r
              <div class="col-12 col-md-3">\r
                <div class="info-card">\r
                  <div class="info-card-icon"><i class="bi bi-envelope-fill"></i></div>\r
                  <div class="info-card-content"><div class="info-label">Email</div><div class="info-value">{{ loggedInBuyer.email }}</div></div>\r
                </div>\r
              </div>\r
              <div class="col-12 col-md-3">\r
                <div class="info-card">\r
                  <div class="info-card-icon"><i class="bi bi-telephone-fill"></i></div>\r
                  <div class="info-card-content"><div class="info-label">Phone</div><div class="info-value">{{ loggedInBuyer.contactPersonPhone }}</div></div>\r
                </div>\r
              </div>\r
              <div class="col-12 col-md-3">\r
                <div class="info-card">\r
                  <div class="info-card-icon"><i class="bi bi-geo-alt-fill"></i></div>\r
                  <div class="info-card-content">\r
                    <div class="info-label">Location</div>\r
                    <div class="info-value">\r
                      {{ loggedInBuyer.city || 'N/A' }}<span *ngIf="loggedInBuyer.city && loggedInBuyer.state">, {{ loggedInBuyer.state }}</span>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
  <c-row class="mb-4">\r
    <c-col xs="12">\r
      <c-card class="border-0 shadow-sm">\r
        <c-card-header class="bg-white border-0 pt-4 px-4 pb-3">\r
          <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">\r
            <div>\r
              <h3 class="mb-0 fw-bold">\r
                <i class="bi bi-file-earmark-text me-2 text-primary"></i>Invoice Management\r
              </h3>\r
              <p class="text-muted mb-0 mt-1">Review, approve, reject and track supplier invoices for your purchase orders.</p>\r
            </div>\r
            <button cButton color="secondary" variant="outline" (click)="goBack()">\r
              <i class="bi bi-arrow-left me-1"></i> Back to Dashboard\r
            </button>\r
          </div>\r
        </c-card-header>\r
      </c-card>\r
    </c-col>\r
  </c-row>\r
\r
  <c-row class="mb-4 g-3" *ngIf="!isLoading">\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='ALL'; applyFilters()">\r
        <div class="stat-icon-wrap stat-purple"><i class="bi bi-file-earmark-text"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ stats.total }}</div><div class="stat-label">Total Invoice</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='SUBMITTED'; applyFilters()">\r
        <div class="stat-icon-wrap stat-pink"><i class="bi bi-clock-history"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ stats.submitted }}</div><div class="stat-label">Pending Invoice</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='APPROVED'; applyFilters()">\r
        <div class="stat-icon-wrap stat-teal"><i class="bi bi-check-circle"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ stats.approved }}</div><div class="stat-label">Approved Invoice</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='PAID'; applyFilters()">\r
        <div class="stat-icon-wrap stat-green"><i class="bi bi-currency-rupee"></i></div>\r
        <div class="stat-info"><div class="stat-value stat-value-sm">{{ stats.paid }}</div><div class="stat-label">Paid</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='REJECTED'; applyFilters()">\r
        <div class="stat-icon-wrap stat-red"><i class="bi bi-x-circle"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ stats.rejected }}</div><div class="stat-label">Rejected</div></div>\r
      </div>\r
    </c-col>\r
  </c-row>\r
\r
  <div class="card border-0 shadow-sm" style="border-radius:12px;">\r
    <div class="card-header bg-white border-0 pt-3 px-4 pb-3">\r
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">\r
        <h5 class="fw-bold mb-0"><i class="bi bi-table me-2 text-primary"></i>All Invoices</h5>\r
        <div class="d-flex gap-2">\r
          <input type="text" class="form-control form-control-sm" style="width:200px;"\r
            placeholder="Search invoice, supplier, PO..."\r
            [(ngModel)]="searchText" (ngModelChange)="applyFilters()"/>\r
          <select class="form-select form-select-sm" style="width:160px;"\r
            [(ngModel)]="statusFilter" (change)="applyFilters()">\r
            <option value="ALL">All Status</option>\r
            <option value="SUBMITTED">Pending Review</option>\r
            <option value="APPROVED">Ready for Payment</option>\r
            <option value="REJECTED">Rejected</option>\r
            <option value="PAID">Paid</option>\r
          </select>\r
        </div>\r
      </div>\r
      <div class="d-flex gap-2 mt-3">\r
        <button type="button" class="btn btn-sm" [ngClass]="originFilter==='ALL' ? 'btn-dark' : 'btn-outline-secondary'"\r
                (click)="setOriginFilter('ALL')">All</button>\r
        <button type="button" class="btn btn-sm" [ngClass]="originFilter==='REGULAR' ? 'btn-dark' : 'btn-outline-secondary'"\r
                (click)="setOriginFilter('REGULAR')">\r
          <i class="bi bi-file-earmark-text me-1"></i>Regular <span class="badge bg-light text-dark ms-1">{{ regularOriginCount }}</span>\r
        </button>\r
        <button type="button" class="btn btn-sm" [ngClass]="originFilter==='SERVICE' ? 'btn-warning' : 'btn-outline-warning'"\r
                (click)="setOriginFilter('SERVICE')">\r
          <i class="bi bi-tools me-1"></i>Service (Spares) <span class="badge bg-light text-dark ms-1">{{ serviceOriginCount }}</span>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <div class="card-body p-0">\r
      <div *ngIf="isLoading" class="text-center py-5">\r
        <div class="spinner-border text-primary"></div>\r
        <p class="mt-2 text-muted">Loading invoices...</p>\r
      </div>\r
\r
      <div *ngIf="!isLoading" class="table-responsive">\r
        <table class="table align-middle mb-0">\r
          <thead style="background:#f8f9fa;">\r
            <tr>\r
              <th class="ps-4">SL</th>\r
              <th>INVOICE NO.</th>\r
              <th>SUPPLIER</th>\r
              <th>PO / RFQ</th>\r
              <th>INVOICE DATE</th>\r
              <th>DUE DATE</th>\r
              <th class="text-end">AMOUNT</th>\r
              <th class="text-center">STATUS</th>\r
              <th class="text-center">ACTIONS</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let inv of pagedInvoices; let i=index" class="table-row-hover">\r
              <td class="ps-4"><strong>{{ (currentPage-1)*pageSize+i+1 }}</strong></td>\r
\r
              <td>\r
                <div class="fw-bold text-primary" style="cursor:pointer;" (click)="viewInvoice(inv)">\r
                  {{ inv.invoiceNumber }}\r
                </div>\r
                <small class="text-muted">{{ formatDate(inv.createdAt) }}</small>\r
                <span *ngIf="inv.resubmitCount > 0"\r
                  class="badge bg-warning text-dark ms-1" style="font-size:.65rem;">\r
                  <i class="bi bi-arrow-repeat me-1"></i>Resubmitted\r
                </span>\r
              </td>\r
\r
              <td><div class="fw-semibold">{{ inv.supplierCompanyName }}</div></td>\r
\r
              <td>\r
                <div class="fw-semibold">{{ inv.poNumber }}</div>\r
                <small class="text-muted">{{ inv.rfqNumber }}</small>\r
              </td>\r
\r
              <td><small>{{ formatDate(inv.invoiceDate) }}</small></td>\r
\r
              <td>\r
                <small [class.text-danger]="isOverdue(inv)" [class.fw-bold]="isOverdue(inv)">\r
                  {{ formatDate(inv.dueDate) }}\r
                </small>\r
                <span *ngIf="isOverdue(inv)" class="badge bg-danger ms-1" style="font-size:.65rem;">OVERDUE</span>\r
              </td>\r
\r
             \r
              <td class="text-end">\r
                <span class="fw-bold text-success">{{ formatCurrency(inv.grandTotal, inv.currencyCode) }}</span>\r
              </td>\r
\r
              <td class="text-center">\r
                <span class="badge" [ngClass]="{\r
                  'bg-secondary':         inv.status==='DRAFT',\r
                  'bg-primary':           inv.status==='SUBMITTED',\r
                  'bg-success':           inv.status==='APPROVED',\r
                  'bg-warning text-dark': inv.status==='REJECTED',\r
                  'bg-danger':            inv.status==='REJECTED_CLOSED',\r
                  'bg-info':              inv.status==='PAID'\r
                }">{{ getInvoiceStatusLabel(inv.status) }}</span>\r
                <div class="text-muted small mt-1" *ngIf="inv.status==='PAID' && inv.paidBy">\r
                  by {{ inv.paidBy }}\r
                </div>\r
              </td>\r
\r
              <td class="text-center">\r
                <div class="d-flex justify-content-center gap-1">\r
                  <button class="btn btn-sm btn-light text-primary shadow-sm"\r
                    (click)="viewInvoice(inv)" title="View Invoice">\r
                    <i class="bi bi-eye-fill"></i>\r
                  </button>\r
                  <button *ngIf="inv.status==='SUBMITTED'"\r
                    class="btn btn-sm shadow-sm"\r
                    [ngClass]="inv.canApprove ? 'btn-success' : 'btn-outline-secondary'"\r
                    (click)="handleApproveClick(inv)"\r
                    [title]="inv.canApprove ? 'Approve Invoice' : 'Complete GRN & 3-Way Match first'">\r
                    <i class="bi" [ngClass]="inv.canApprove ? 'bi-check-lg' : 'bi-lock-fill'"></i>\r
                  </button>\r
                  <button *ngIf="inv.status==='SUBMITTED'" class="btn btn-sm btn-warning shadow-sm text-white"\r
                    (click)="openActionModal(inv, 'reject')" title="Return for Correction">\r
                    <i class="bi bi-arrow-counterclockwise"></i>\r
                  </button>\r
                  <button *ngIf="inv.canRecordAdvancePayment" class="btn btn-sm btn-success shadow-sm text-white"\r
                    (click)="openAdvanceModal(inv)" title="Record Advance Payment">\r
                    <i class="bi bi-piggy-bank-fill"></i>\r
                  </button>\r
                  <button *ngIf="inv.status==='APPROVED'" class="btn btn-sm btn-info shadow-sm text-white"\r
                    (click)="openActionModal(inv, 'paid')" title="Mark as Paid">\r
                    <i class="bi bi-currency-rupee"></i>\r
                  </button>\r
                  <button class="btn btn-sm btn-light text-success shadow-sm"\r
                    (click)="downloadInvoiceFromRow(inv)" title="Download Invoice">\r
                    <i class="bi bi-file-earmark-pdf"></i>\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
\r
            <tr *ngIf="pagedInvoices.length===0">\r
              <td colspan="9" class="text-center py-5">\r
                <i class="bi bi-receipt display-6 d-block mb-2" style="opacity:.25;"></i>\r
                <p class="text-muted mb-0">No invoices found</p>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <div *ngIf="!isLoading && filteredInvoices.length > 0"\r
        class="d-flex justify-content-between align-items-center p-4 border-top">\r
        <small class="text-muted">Showing {{ pagedInvoices.length }} of {{ filteredInvoices.length }}</small>\r
        <div class="d-flex gap-2">\r
          <button class="btn btn-sm btn-outline-secondary" [disabled]="currentPage===1"\r
            (click)="onPageChange(currentPage-1)">\r
            <i class="bi bi-chevron-left"></i> Previous\r
          </button>\r
          <button class="btn btn-sm btn-outline-secondary" [disabled]="currentPage>=totalPages"\r
            (click)="onPageChange(currentPage+1)">\r
            Next <i class="bi bi-chevron-right"></i>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</c-container>\r
\r
\r
<c-modal [visible]="isViewModalOpen" (visibleChange)="isViewModalOpen=$event" size="xl" scrollable>\r
  <c-modal-header style="background:linear-gradient(135deg,#1565c0,#0d47a1);">\r
    <h5 cModalTitle class="text-white">\r
      <i class="bi bi-receipt me-2"></i>{{ selectedInvoice?.invoiceNumber }}\r
    </h5>\r
    <button cButtonClose style="filter:brightness(0) invert(1);" (click)="closeViewModal()"></button>\r
  </c-modal-header>\r
\r
  <c-modal-body *ngIf="selectedInvoice">\r
\r
    <div class="d-flex justify-content-between align-items-center mb-4">\r
      <div class="d-flex align-items-center gap-2">\r
        <span class="badge fs-6" [ngClass]="{\r
          'bg-secondary':         selectedInvoice.status==='DRAFT',\r
          'bg-primary':           selectedInvoice.status==='SUBMITTED',\r
          'bg-success':           selectedInvoice.status==='APPROVED',\r
          'bg-warning text-dark': selectedInvoice.status==='REJECTED',\r
          'bg-danger':            selectedInvoice.status==='REJECTED_CLOSED',\r
          'bg-info':              selectedInvoice.status==='PAID'\r
        }">{{ getInvoiceStatusLabel(selectedInvoice.status) }}</span>\r
        <span *ngIf="selectedInvoice.resubmitCount > 0" class="badge bg-warning text-dark">\r
          <i class="bi bi-arrow-repeat me-1"></i>Resubmitted {{ selectedInvoice.resubmitCount }}\xD7\r
        </span>\r
        \r
        <span class="badge" style="background:#1565c0; font-size:0.75rem;">\r
          <i class="bi bi-globe2 me-1"></i>{{ selectedInvoice.currencyCode || 'INR' }}\r
        </span>\r
      </div>\r
      <div class="d-flex gap-2">\r
        <button class="btn btn-sm btn-danger" (click)="downloadPDF()" [disabled]="isDownloadingPDF">\r
          <i *ngIf="!isDownloadingPDF" class="bi bi-file-pdf me-1"></i>\r
          <span *ngIf="isDownloadingPDF" class="spinner-border spinner-border-sm me-1"></span>\r
          Download PDF\r
        </button>\r
        <button class="btn btn-sm btn-success" (click)="downloadInvoiceExcel(selectedInvoice.id, selectedInvoice.invoiceNumber)" [disabled]="isDownloadingInvoiceExcel">\r
          <i *ngIf="!isDownloadingInvoiceExcel" class="bi bi-file-earmark-excel me-1"></i>\r
          <span *ngIf="isDownloadingInvoiceExcel" class="spinner-border spinner-border-sm me-1"></span>\r
          Download Excel\r
        </button>\r
        <button *ngIf="selectedInvoice.status==='SUBMITTED'"\r
          class="btn btn-sm"\r
          [ngClass]="selectedInvoice.canApprove ? 'btn-success' : 'btn-outline-secondary'"\r
          (click)="handleApproveClick(selectedInvoice)"\r
          [title]="selectedInvoice.canApprove ? 'Approve Invoice' : 'Complete GRN & 3-Way Match first'">\r
          <i class="bi me-1" [ngClass]="selectedInvoice.canApprove ? 'bi-check-lg' : 'bi-lock-fill'"></i>\r
          {{ selectedInvoice.canApprove ? 'Approve' : 'Approve (Locked)' }}\r
        </button>\r
        <button *ngIf="selectedInvoice.status==='SUBMITTED'" class="btn btn-sm btn-warning text-white"\r
          (click)="openActionModal(selectedInvoice, 'reject'); closeViewModal()"\r
          title="Reject \u2014 supplier can resubmit">\r
          <i class="bi bi-arrow-counterclockwise me-1"></i>Return for Correction\r
        </button>\r
        <button *ngIf="selectedInvoice.canRecordAdvancePayment" class="btn btn-sm btn-success text-white"\r
          (click)="openAdvanceModal(selectedInvoice)">\r
          <i class="bi bi-piggy-bank-fill me-1"></i>Record Advance Payment\r
        </button>\r
        <button *ngIf="selectedInvoice.status==='APPROVED'" class="btn btn-sm btn-info text-white"\r
          (click)="openActionModal(selectedInvoice, 'paid'); closeViewModal()">\r
          <i class="bi bi-currency-rupee me-1"></i>Mark Paid\r
        </button>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="selectedInvoice.advancePaymentRequired" class="alert mb-4"\r
      [ngClass]="selectedInvoice.advancePaidAmount > 0 ? 'alert-success' : 'alert-warning'"\r
      style="border-left:4px solid;" [style.borderLeftColor]="selectedInvoice.advancePaidAmount > 0 ? '#198754' : '#f0ad4e'">\r
      <div class="d-flex align-items-start gap-2">\r
        <i class="bi bi-piggy-bank-fill fs-5 mt-1 flex-shrink-0"></i>\r
        <div class="flex-grow-1">\r
          <strong>Advance Payment</strong>\r
          <span class="text-muted small">\r
            \u2014 required {{ advancePaymentDueLabel(selectedInvoice) }}\r
            <ng-container *ngIf="selectedInvoice.advancePaymentPercentage">({{ selectedInvoice.advancePaymentPercentage }}% of total)</ng-container>\r
          </span>\r
          <div class="row mt-2 g-2">\r
            <div class="col-auto">\r
              <div class="small text-muted">Required</div>\r
              <div class="fw-bold">{{ formatCurrency(selectedInvoice.advanceRequiredAmount, selectedInvoice.currencyCode) }}</div>\r
            </div>\r
            <div class="col-auto">\r
              <div class="small text-muted">Advance Paid</div>\r
              <div class="fw-bold" [class.text-success]="selectedInvoice.advancePaidAmount > 0">\r
                {{ selectedInvoice.advancePaidAmount > 0 ? formatCurrency(selectedInvoice.advancePaidAmount, selectedInvoice.currencyCode) : 'Not yet received' }}\r
              </div>\r
              <div class="small text-muted" *ngIf="selectedInvoice.advancePaidAmount > 0">\r
                {{ formatDate(selectedInvoice.advancePaidAt) }}\r
                <span *ngIf="selectedInvoice.advancePaymentReference"> \xB7 Ref: {{ selectedInvoice.advancePaymentReference }}</span>\r
              </div>\r
            </div>\r
            <div class="col-auto">\r
              <div class="small text-muted">Balance Due</div>\r
              <div class="fw-bold">{{ formatCurrency(selectedInvoice.balanceDue, selectedInvoice.currencyCode) }}</div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="mb-4" *ngIf="getPaymentMilestones(selectedInvoice).length > 0">\r
      <h6 class="fw-bold"><i class="bi bi-list-check me-1"></i>Payment Provisions / Milestones</h6>\r
      <div class="table-responsive">\r
        <table class="table table-sm align-middle">\r
          <thead>\r
            <tr><th>Sl No</th><th>Milestone / Description</th><th>%</th><th>Amount</th><th>Remarks</th></tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let m of getPaymentMilestones(selectedInvoice)">\r
              <td>{{ m.slNo }}</td>\r
              <td>{{ m.description }}</td>\r
              <td>{{ m.percentage ? (m.percentage + '%') : '\u2014' }}</td>\r
              <td>{{ m.amount ? formatCurrency(m.amount, selectedInvoice.currencyCode) : '\u2014' }}</td>\r
              <td>{{ m.remarks }}</td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
\r
    <div class="mb-4" *ngIf="selectedInvoice.attachments?.length > 0">\r
      <h6 class="fw-bold"><i class="bi bi-paperclip me-1"></i>Attachments</h6>\r
      <div class="d-flex flex-wrap gap-2">\r
        <a *ngFor="let att of selectedInvoice.attachments" [href]="getInvoiceAttachmentDownloadUrl(att.id)" target="_blank"\r
           class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none" style="background:#f1f5f9;border-radius:8px;font-size:0.85rem;color:#1e293b;">\r
          <i class="bi bi-file-earmark-arrow-down text-primary"></i>\r
          <span>{{ att.filename }}</span>\r
          <small class="text-muted" *ngIf="att.uploadedByName">\u2014 {{ att.uploadedByName }}</small>\r
        </a>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="selectedInvoice.status==='SUBMITTED' && !selectedInvoice.canApprove"\r
      class="alert alert-info d-flex align-items-start gap-2 mb-4" style="border-left:4px solid #0288d1;">\r
      <i class="bi bi-info-circle-fill fs-5 mt-1 flex-shrink-0" style="color:#0288d1;"></i>\r
      <div>\r
        <strong>Approval Locked</strong><br>\r
        <small>This invoice cannot be approved yet. You must first:\r
          <strong>Create a GRN \u2192 Complete QA Review \u2192 Approve GRN \u2192 Run 3-Way Match.</strong>\r
        </small>\r
        <div *ngIf="selectedInvoice.threeWayMatchStatus" class="mt-1">\r
          <span class="badge"\r
            [ngClass]="{'bg-success': selectedInvoice.threeWayMatchStatus === 'MATCHED',\r
                        'bg-danger':  selectedInvoice.threeWayMatchStatus !== 'MATCHED'}">\r
            3-Way Match: {{ selectedInvoice.threeWayMatchStatus }}\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="selectedInvoice.status==='REJECTED'" class="alert alert-warning">\r
      <strong><i class="bi bi-exclamation-triangle-fill me-1"></i>Rejected \u2014 Supplier may resubmit once</strong><br>\r
      <span>{{ selectedInvoice.approvalRemarks }}</span><br>\r
      <small class="text-muted">By {{ selectedInvoice.approvedRejectedBy }} on {{ formatDate(selectedInvoice.approvedRejectedAt) }}</small>\r
    </div>\r
\r
    <div *ngIf="selectedInvoice.status==='REJECTED_CLOSED'" class="alert alert-danger">\r
      <strong><i class="bi bi-x-octagon-fill me-1"></i>Permanently Closed</strong><br>\r
      <span>{{ selectedInvoice.approvalRemarks }}</span><br>\r
      <small class="text-muted">By {{ selectedInvoice.approvedRejectedBy }} on {{ formatDate(selectedInvoice.approvedRejectedAt) }}</small>\r
    </div>\r
\r
    <div *ngIf="selectedInvoice.resubmitCount > 0 && selectedInvoice.resubmitRemarks" class="alert alert-info">\r
      <strong><i class="bi bi-arrow-repeat me-1"></i>Supplier Resubmit Remarks:</strong>\r
      {{ selectedInvoice.resubmitRemarks }}\r
      <small class="d-block text-muted mt-1">Resubmitted on {{ formatDate(selectedInvoice.resubmittedAt) }}</small>\r
    </div>\r
\r
    <div *ngIf="selectedInvoice.status==='PAID'" class="alert alert-info">\r
      <strong><i class="bi bi-check-circle-fill me-1"></i>Paid on {{ formatDateTime(selectedInvoice.paidAt) }}</strong>\r
      <span *ngIf="selectedInvoice.paidBy"> by <strong>{{ selectedInvoice.paidBy }}</strong></span>\r
      <span *ngIf="selectedInvoice.paymentMode"> via <strong>{{ selectedInvoice.paymentMode }}</strong></span>\r
      <span *ngIf="selectedInvoice.paymentReference"> | Ref: {{ selectedInvoice.paymentReference }}</span>\r
      <div class="small mt-1" *ngIf="selectedInvoice.paymentRemarks">\r
        <i class="bi bi-chat-left-text me-1"></i>{{ selectedInvoice.paymentRemarks }}\r
      </div>\r
    </div>\r
\r
    <div id="buyer-invoice-print">\r
      <div class="row mb-4">\r
        <div class="col-6">\r
          <h2 class="fw-bold text-primary" style="font-size:2rem;">INVOICE</h2>\r
          <p class="text-muted fs-5">{{ selectedInvoice.invoiceNumber }}</p>\r
        </div>\r
        <div class="col-6 text-end">\r
          <p class="mb-1"><strong>Invoice Date:</strong> {{ formatDate(selectedInvoice.invoiceDate) }}</p>\r
          <p class="mb-1"><strong>Due Date:</strong>\r
            <span class="text-danger fw-bold">{{ formatDate(selectedInvoice.dueDate) }}</span>\r
          </p>\r
          <p class="mb-0"><strong>PO Ref:</strong> {{ selectedInvoice.poNumber }}</p>\r
          <p class="mb-0"><strong>RFQ Ref:</strong> {{ selectedInvoice.rfqNumber }}</p>\r
        </div>\r
      </div>\r
\r
      <div class="row mb-4">\r
        <div class="col-6">\r
          <div class="p-3 bg-light rounded">\r
            <h6 class="fw-bold text-primary mb-2">FROM (Supplier)</h6>\r
            <p class="mb-1 fw-bold">{{ selectedInvoice.supplierCompanyName }}</p>\r
            <p class="mb-0 text-muted small">{{ selectedInvoice.supplierEmail }}</p>\r
          </div>\r
        </div>\r
        <div class="col-6">\r
          <div class="p-3 bg-light rounded">\r
            <h6 class="fw-bold text-success mb-2">BILL TO (Buyer)</h6>\r
            <p class="mb-1 fw-bold">{{ selectedInvoice.buyerCompanyName }}</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="table-responsive mb-4">\r
        <table class="table table-bordered" style="font-size:.875rem;">\r
          <thead style="background:#1565c0;color:white;">\r
            <tr>\r
              <th>#</th><th>Description</th><th>HSN</th>\r
              <th class="text-center">UOM</th><th class="text-center">Qty</th>\r
             \r
              <th class="text-end">Unit Price</th>\r
              <th class="text-center">Tax%</th>\r
              <th class="text-end">Amount</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let item of selectedInvoice.lineItems; let i=index">\r
              <td>{{ i+1 }}</td>\r
              <td>\r
                <div class="fw-semibold">{{ item.itemDescription }}</div>\r
                <small class="text-muted" *ngIf="item.itemDescriptionDetailed">\r
                  {{ item.itemDescriptionDetailed }}\r
                </small>\r
              </td>\r
              <td>{{ item.hsnSacCode || '-' }}</td>\r
              <td class="text-center">{{ item.uom }}</td>\r
              <td class="text-center">{{ item.quantity }}</td>\r
             \r
              <td class="text-end">{{ formatCurrency(item.unitPrice, selectedInvoice.currencyCode) }}</td>\r
              <td class="text-center">{{ item.taxPercentage || 0 }}%</td>\r
        \r
              <td class="text-end fw-semibold">{{ formatCurrency(item.lineTotal, selectedInvoice.currencyCode) }}</td>\r
            </tr>\r
          </tbody>\r
          <tfoot>\r
            <tr class="table-light">\r
              <td colspan="7" class="text-end fw-semibold">Subtotal</td>\r
              \r
              <td class="text-end fw-semibold">{{ formatCurrency(selectedInvoice.subtotal, selectedInvoice.currencyCode) }}</td>\r
            </tr>\r
            <tr class="table-light">\r
              <td colspan="7" class="text-end fw-semibold text-warning">Tax</td>\r
           \r
              <td class="text-end fw-semibold text-warning">{{ formatCurrency(selectedInvoice.taxAmount, selectedInvoice.currencyCode) }}</td>\r
            </tr>\r
            <tr style="background:#1565c0;color:white;">\r
            \r
              <td colspan="7" class="text-end fw-bold">GRAND TOTAL ({{ selectedInvoice.currencyCode || 'INR' }})</td>\r
              \r
              <td class="text-end fw-bold">{{ formatCurrency(selectedInvoice.grandTotal, selectedInvoice.currencyCode) }}</td>\r
            </tr>\r
          </tfoot>\r
        </table>\r
      </div>\r
\r
      <div class="row" *ngIf="selectedInvoice.bankName">\r
        <div class="col-md-6">\r
          <div class="p-3 border rounded" style="border-color:#1565c0!important;">\r
            <h6 class="fw-bold text-primary mb-2"><i class="bi bi-bank me-1"></i>Bank Details</h6>\r
            <table class="table table-sm table-borderless mb-0">\r
              <tr><td class="text-muted" style="width:45%;">Bank Name</td><td class="fw-semibold">{{ selectedInvoice.bankName }}</td></tr>\r
              <tr><td class="text-muted">Account Holder</td><td class="fw-semibold">{{ selectedInvoice.accountHolderName }}</td></tr>\r
              <tr><td class="text-muted">Account No.</td><td class="fw-semibold">{{ selectedInvoice.accountNumber }}</td></tr>\r
              <tr><td class="text-muted">IFSC</td><td class="fw-semibold">{{ selectedInvoice.ifscCode }}</td></tr>\r
            </table>\r
          </div>\r
        </div>\r
        <div class="col-md-6">\r
          <div class="p-3 bg-light rounded" *ngIf="selectedInvoice.paymentTerms">\r
            <h6 class="fw-bold mb-2">Payment Terms</h6>\r
            <p class="text-muted mb-2">{{ selectedInvoice.paymentTerms }}</p>\r
            <small class="text-muted" *ngIf="selectedInvoice.termsAndConditions">\r
              {{ selectedInvoice.termsAndConditions }}\r
            </small>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </c-modal-body>\r
\r
  <c-modal-footer>\r
    <button cButton color="secondary" (click)="closeViewModal()">Close</button>\r
  </c-modal-footer>\r
</c-modal>\r
\r
\r
<c-modal [visible]="isActionModalOpen" (visibleChange)="isActionModalOpen=$event" size="md">\r
  <c-modal-header [ngStyle]="{\r
    'background': pendingAction==='approve'     ? 'linear-gradient(135deg,#388e3c,#1b5e20)' :\r
                  pendingAction==='reject'      ? 'linear-gradient(135deg,#f57c00,#e65100)' :\r
                  pendingAction==='rejectClose' ? 'linear-gradient(135deg,#e53935,#b71c1c)' :\r
                                                 'linear-gradient(135deg,#0288d1,#01579b)'\r
  }">\r
    <h5 cModalTitle class="text-white">\r
      <i class="bi me-2" [ngClass]="{\r
        'bi-check-circle':           pendingAction==='approve',\r
        'bi-arrow-counterclockwise': pendingAction==='reject',\r
        'bi-x-octagon':              pendingAction==='rejectClose',\r
        'bi-currency-rupee':         pendingAction==='paid'\r
      }"></i>\r
      {{ getActionLabel() }}\r
    </h5>\r
    <button cButtonClose style="filter:brightness(0) invert(1);" (click)="isActionModalOpen=false"></button>\r
  </c-modal-header>\r
\r
  <c-modal-body *ngIf="selectedInvoice">\r
    <div class="alert alert-light border mb-3">\r
      <strong>Invoice:</strong> {{ selectedInvoice.invoiceNumber }}<br>\r
      <strong>Supplier:</strong> {{ selectedInvoice.supplierCompanyName }}<br>\r
      <strong>Amount:</strong>\r
     \r
      <span class="text-success fw-bold">{{ formatCurrency(selectedInvoice.grandTotal, selectedInvoice.currencyCode) }}</span>\r
    </div>\r
\r
    <div *ngIf="pendingAction==='reject'" class="alert alert-warning mb-3">\r
      <i class="bi bi-arrow-counterclockwise me-2"></i>\r
      <strong>Reject with Resubmit Option</strong><br>\r
      <small>The supplier will be notified and can correct and resubmit this invoice <strong>once</strong>.</small>\r
    </div>\r
\r
    <div *ngIf="pendingAction==='rejectClose'" class="alert alert-danger mb-3">\r
      <i class="bi bi-x-octagon-fill me-2"></i>\r
      <strong>Permanent Rejection \u2014 Cannot be undone</strong><br>\r
      <small>The invoice will be permanently closed.</small>\r
    </div>\r
\r
    <div *ngIf="pendingAction==='approve' || pendingAction==='reject' || pendingAction==='rejectClose'" class="mb-3">\r
      <label class="form-label fw-semibold">\r
        Remarks <span class="text-danger">*</span>\r
        <small class="text-muted fw-normal ms-1">(visible to supplier)</small>\r
      </label>\r
      <textarea class="form-control" rows="3" [(ngModel)]="actionRemarks"\r
        [placeholder]="pendingAction==='approve'\r
          ? 'e.g. Invoice verified and approved for payment'\r
          : pendingAction==='reject'\r
            ? 'e.g. Invoice amount does not match PO, please correct and resubmit'\r
            : 'e.g. Invoice repeatedly incorrect \u2014 closing permanently'">\r
      </textarea>\r
    </div>\r
\r
    <div *ngIf="pendingAction==='paid'" class="mb-3">\r
      <label class="form-label fw-semibold">\r
        Payment Mode <span class="text-danger">*</span>\r
      </label>\r
      <select class="form-select mb-3" [(ngModel)]="paymentMode">\r
        <option value="" disabled>\u2014 Select how this was paid \u2014</option>\r
        <option *ngFor="let m of paymentModeOptions" [value]="m">{{ m }}</option>\r
      </select>\r
\r
      <label class="form-label fw-semibold">\r
        Payment Reference <span class="text-danger">*</span>\r
      </label>\r
      <input type="text" class="form-control" [(ngModel)]="paymentReference"\r
        placeholder="e.g. NEFT/UTR number, cheque number"/>\r
      <small class="text-muted d-block mb-3">\r
        Required so this payment can be traced back to a bank record later. Who recorded it\r
        ({{ buyerName }}) and the exact date/time are captured automatically.\r
      </small>\r
\r
      <label class="form-label fw-semibold">\r
        Remarks <span class="text-muted fw-normal">(optional)</span>\r
      </label>\r
      <textarea class="form-control" rows="2" [(ngModel)]="paymentRemarks"\r
        placeholder="Anything worth noting about this payment"></textarea>\r
    </div>\r
  </c-modal-body>\r
\r
  <c-modal-footer>\r
    <button cButton color="secondary" (click)="isActionModalOpen=false"\r
      [disabled]="isPerformingAction">Cancel</button>\r
    <button cButton [color]="getActionButtonColor()" (click)="confirmAction()"\r
      [disabled]="isPerformingAction">\r
      <c-spinner *ngIf="isPerformingAction" size="sm" class="me-1"></c-spinner>\r
      <i *ngIf="!isPerformingAction" class="bi me-1" [ngClass]="{\r
        'bi-check-lg':               pendingAction==='approve',\r
        'bi-arrow-counterclockwise': pendingAction==='reject',\r
        'bi-x-octagon':              pendingAction==='rejectClose',\r
        'bi-check2-all':             pendingAction==='paid'\r
      }"></i>\r
      {{ getActionLabel() }}\r
    </button>\r
  </c-modal-footer>\r
</c-modal>\r
\r
\r
<c-modal [visible]="isPrereqModalOpen" (visibleChange)="isPrereqModalOpen=$event" size="lg">\r
  <c-modal-header style="background:linear-gradient(135deg,#1565c0,#0d47a1);">\r
    <h5 cModalTitle class="text-white">\r
      <i class="bi bi-shield-lock me-2"></i>Invoice Approval \u2014 Prerequisites\r
    </h5>\r
    <button cButtonClose style="filter:brightness(0) invert(1);" (click)="closePrereqModal()"></button>\r
  </c-modal-header>\r
\r
  <c-modal-body>\r
    <div *ngIf="isCheckingPrereqs" class="text-center py-5">\r
      <div class="spinner-border text-primary" style="width:2.5rem;height:2.5rem;"></div>\r
      <p class="mt-3 text-muted fw-semibold">Checking prerequisites...</p>\r
    </div>\r
\r
    <div *ngIf="!isCheckingPrereqs">\r
      <div class="prereq-invoice-card mb-4">\r
        <div class="d-flex align-items-center gap-3">\r
          <div class="prereq-inv-icon"><i class="bi bi-file-earmark-text"></i></div>\r
          <div>\r
            <div class="fw-bold fs-6">{{ prereqInvoice?.invoiceNumber }}</div>\r
            <small class="text-muted">\r
              {{ prereqInvoice?.supplierCompanyName }}\r
              &bull; {{ formatCurrency(prereqInvoice?.grandTotal, prereqInvoice?.currencyCode) }}\r
            </small>\r
          </div>\r
          <div class="ms-auto"><span class="badge bg-primary">Pending Review</span></div>\r
        </div>\r
      </div>\r
\r
      <div class="alert alert-warning d-flex gap-2 mb-4" style="border-left:4px solid #f57c00;">\r
        <i class="bi bi-exclamation-triangle-fill fs-5 flex-shrink-0 mt-1" style="color:#f57c00;"></i>\r
        <div>\r
          <strong>Approval requires a passed 3-Way Match.</strong><br>\r
          <small>Complete all 4 steps below before this invoice can be approved.</small>\r
        </div>\r
      </div>\r
\r
      <div class="prereq-checklist">\r
        <div class="prereq-step" [class.step-done]="prereqChecks.grnCreated" [class.step-pending]="!prereqChecks.grnCreated">\r
          <div class="prereq-step-number">\r
            <span *ngIf="!prereqChecks.grnCreated">1</span>\r
            <i *ngIf="prereqChecks.grnCreated" class="bi bi-check-lg"></i>\r
          </div>\r
          <div class="prereq-step-body">\r
            <div class="prereq-step-title">Create GRN (Goods Receipt Note)</div>\r
            <div class="prereq-step-desc">Record all goods physically received against the Purchase Order.</div>\r
          </div>\r
          <div class="prereq-step-badge">\r
            <span class="badge rounded-pill" [class.bg-success]="prereqChecks.grnCreated" [class.bg-light]="!prereqChecks.grnCreated" [class.text-dark]="!prereqChecks.grnCreated">\r
              <i class="bi me-1" [class.bi-check-circle-fill]="prereqChecks.grnCreated" [class.bi-hourglass]="!prereqChecks.grnCreated"></i>\r
              {{ prereqChecks.grnCreated ? 'Done' : 'Pending' }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <div class="prereq-line" [class.line-done]="prereqChecks.grnCreated"></div>\r
\r
        <div class="prereq-step" [class.step-done]="prereqChecks.grnApproved" [class.step-pending]="!prereqChecks.grnApproved">\r
          <div class="prereq-step-number">\r
            <span *ngIf="!prereqChecks.grnApproved">2</span>\r
            <i *ngIf="prereqChecks.grnApproved" class="bi bi-check-lg"></i>\r
          </div>\r
          <div class="prereq-step-body">\r
            <div class="prereq-step-title">Complete QA Review &amp; Approve GRN</div>\r
            <div class="prereq-step-desc">QA team inspects received goods, then a supervisor approves the GRN.</div>\r
          </div>\r
          <div class="prereq-step-badge">\r
            <span class="badge rounded-pill" [class.bg-success]="prereqChecks.grnApproved" [class.bg-light]="!prereqChecks.grnApproved" [class.text-dark]="!prereqChecks.grnApproved">\r
              <i class="bi me-1" [class.bi-check-circle-fill]="prereqChecks.grnApproved" [class.bi-hourglass]="!prereqChecks.grnApproved"></i>\r
              {{ prereqChecks.grnApproved ? 'Done' : 'Pending' }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <div class="prereq-line" [class.line-done]="prereqChecks.grnApproved"></div>\r
\r
        <div class="prereq-step" [class.step-done]="prereqChecks.matchDone" [class.step-pending]="!prereqChecks.matchDone">\r
          <div class="prereq-step-number">\r
            <span *ngIf="!prereqChecks.matchDone">3</span>\r
            <i *ngIf="prereqChecks.matchDone" class="bi bi-check-lg"></i>\r
          </div>\r
          <div class="prereq-step-body">\r
            <div class="prereq-step-title">Perform 3-Way Match</div>\r
            <div class="prereq-step-desc">Navigate to the <strong>3-Way Match module</strong>, select this PO, GRN, and Invoice, then run the match.</div>\r
          </div>\r
          <div class="prereq-step-badge">\r
            <span class="badge rounded-pill" [class.bg-success]="prereqChecks.matchDone" [class.bg-light]="!prereqChecks.matchDone" [class.text-dark]="!prereqChecks.matchDone">\r
              <i class="bi me-1" [class.bi-check-circle-fill]="prereqChecks.matchDone" [class.bi-hourglass]="!prereqChecks.matchDone"></i>\r
              {{ prereqChecks.matchDone ? 'Done' : 'Pending' }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <div class="prereq-line" [class.line-done]="prereqChecks.matchDone"></div>\r
\r
        <div class="prereq-step" [class.step-done]="prereqChecks.matchPassed"\r
             [class.step-failed]="prereqChecks.matchDone && !prereqChecks.matchPassed"\r
             [class.step-pending]="!prereqChecks.matchDone">\r
          <div class="prereq-step-number">\r
            <span *ngIf="!prereqChecks.matchPassed && !prereqChecks.matchDone">4</span>\r
            <i *ngIf="prereqChecks.matchPassed" class="bi bi-check-lg"></i>\r
            <i *ngIf="prereqChecks.matchDone && !prereqChecks.matchPassed" class="bi bi-x-lg"></i>\r
          </div>\r
          <div class="prereq-step-body">\r
            <div class="prereq-step-title">3-Way Match Must Pass (or Be Resolved)</div>\r
            <div class="prereq-step-desc">The match result must be <strong>MATCHED</strong>, <strong>OVERRIDDEN APPROVED</strong>, or a resolved <strong>PARTIAL MATCH</strong>.</div>\r
            <div *ngIf="prereqChecks.matchDone && !prereqChecks.matchPassed" class="mt-2">\r
              <span class="badge bg-danger px-2 py-1">\r
                <i class="bi bi-x-circle me-1"></i>\r
                Current status: {{ prereqInvoice?.threeWayMatchStatus || 'MISMATCH DETECTED' }}\r
              </span>\r
              <div class="text-danger small mt-1">Please go to the 3-Way Match module and resolve the mismatch first.</div>\r
            </div>\r
          </div>\r
          <div class="prereq-step-badge">\r
            <span class="badge rounded-pill"\r
              [class.bg-success]="prereqChecks.matchPassed"\r
              [class.bg-danger]="prereqChecks.matchDone && !prereqChecks.matchPassed"\r
              [class.bg-light]="!prereqChecks.matchDone"\r
              [class.text-dark]="!prereqChecks.matchDone">\r
              <i class="bi me-1"\r
                [class.bi-check-circle-fill]="prereqChecks.matchPassed"\r
                [class.bi-x-circle-fill]="prereqChecks.matchDone && !prereqChecks.matchPassed"\r
                [class.bi-hourglass]="!prereqChecks.matchDone"></i>\r
              {{ prereqChecks.matchPassed ? 'Passed' : (prereqChecks.matchDone ? 'Failed' : 'Pending') }}\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div *ngIf="allPrereqsPassed" class="alert alert-success d-flex align-items-center gap-2 mt-4" style="border-left:4px solid #28a745;">\r
        <i class="bi bi-check-circle-fill fs-4 flex-shrink-0" style="color:#28a745;"></i>\r
        <div><strong>All prerequisites completed!</strong><br><small>You can now proceed to approve this invoice.</small></div>\r
      </div>\r
      <div *ngIf="!allPrereqsPassed" class="mt-4 p-3 rounded d-flex align-items-center gap-2" style="background:#fff3cd;border:1px solid #ffc107;">\r
        <i class="bi bi-lock-fill fs-5" style="color:#856404;"></i>\r
        <small style="color:#856404;">Complete the steps above before approval becomes available.</small>\r
      </div>\r
    </div>\r
  </c-modal-body>\r
\r
  <c-modal-footer>\r
    <button cButton color="secondary" (click)="closePrereqModal()">Close</button>\r
    <button *ngIf="allPrereqsPassed" cButton color="success" (click)="proceedToApprove()">\r
      <i class="bi bi-check-lg me-1"></i>Proceed to Approve\r
    </button>\r
  </c-modal-footer>\r
</c-modal> -->\r
\r
<c-container fluid class="p-4">\r
\r
  <!-- ===== BUYER HEADER ===== -->\r
  <div class="row mb-4" *ngIf="loggedInBuyer">\r
    <div class="col-12">\r
      <div class="card border-0 shadow-lg" style="border-radius: 12px; overflow: hidden;">\r
        <div class="gradient-header">\r
          <div class="row align-items-center">\r
            <div class="col-12 col-lg-3 text-center text-lg-start mb-3 mb-lg-0">\r
              <div class="d-flex align-items-center justify-content-center justify-content-lg-start">\r
                <div class="avatar-circle-large me-3">{{ getInitials(loggedInBuyer.contactPersonName) }}</div>\r
                <div class="text-white">\r
                  <h3 class="mb-1 fw-bold" style="font-size: 1.5rem; color: white;">{{ loggedInBuyer.contactPersonName }}</h3>\r
                  <p class="mb-0" style="opacity: 0.9; font-size: 0.95rem;">\r
                    <i class="bi bi-briefcase-fill me-1"></i>{{ loggedInBuyer.companyType }}\r
                  </p>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-12 col-lg-9">\r
              <div class="row g-2">\r
                <div class="col-12 col-md-3">\r
                  <div class="info-card">\r
                    <div class="info-card-icon"><i class="bi bi-building-fill"></i></div>\r
                    <div class="info-card-content"><div class="info-label">Company Name</div><div class="info-value">{{ loggedInBuyer.companyName }}</div></div>\r
                  </div>\r
                </div>\r
                <div class="col-12 col-md-3">\r
                  <div class="info-card">\r
                    <div class="info-card-icon"><i class="bi bi-envelope-fill"></i></div>\r
                    <div class="info-card-content"><div class="info-label">Email</div><div class="info-value">{{ loggedInBuyer.email }}</div></div>\r
                  </div>\r
                </div>\r
                <div class="col-12 col-md-3">\r
                  <div class="info-card">\r
                    <div class="info-card-icon"><i class="bi bi-telephone-fill"></i></div>\r
                    <div class="info-card-content"><div class="info-label">Phone</div><div class="info-value">{{ loggedInBuyer.contactPersonPhone }}</div></div>\r
                  </div>\r
                </div>\r
                <div class="col-12 col-md-3">\r
                  <div class="info-card">\r
                    <div class="info-card-icon"><i class="bi bi-geo-alt-fill"></i></div>\r
                    <div class="info-card-content">\r
                      <div class="info-label">Location</div>\r
                      <div class="info-value">\r
                        {{ loggedInBuyer.city || 'N/A' }}<span *ngIf="loggedInBuyer.city && loggedInBuyer.state">, {{ loggedInBuyer.state }}</span>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- ===== PAGE HEADER ===== -->\r
  <c-row class="mb-4">\r
    <c-col xs="12">\r
      <c-card class="border-0 shadow-sm">\r
        <c-card-header class="bg-white border-0 pt-4 px-4 pb-3">\r
          <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">\r
            <div>\r
              <h3 class="mb-0 fw-bold">\r
                <i class="bi bi-file-earmark-text me-2 text-primary"></i>Invoice Management\r
              </h3>\r
              <p class="text-muted mb-0 mt-1">Review, approve, reject and track supplier invoices for your purchase orders.</p>\r
            </div>\r
            <button cButton color="secondary" variant="outline" (click)="goBack()">\r
              <i class="bi bi-arrow-left me-1"></i> Back to Dashboard\r
            </button>\r
          </div>\r
        </c-card-header>\r
      </c-card>\r
    </c-col>\r
  </c-row>\r
\r
  <!-- ==================== DATE FILTER BAR ==================== -->\r
  <div class="date-filter-card mb-4">\r
    <div class="date-filter-accent"></div>\r
    <div class="date-filter-inner">\r
\r
      <div class="date-filter-title-wrap">\r
        <div class="date-filter-icon-wrap"><i class="bi bi-calendar3-range"></i></div>\r
        <div>\r
          <div class="date-filter-title">Date Range</div>\r
          <div class="date-filter-subtitle">Filter invoices by invoice date</div>\r
        </div>\r
      </div>\r
\r
      <div class="date-filter-divider"></div>\r
\r
      <div class="date-filter-controls">\r
\r
        <div class="date-filter-field">\r
          <label class="date-filter-label">\r
            <i class="bi bi-calendar2-check me-1"></i>Financial Year / Period\r
          </label>\r
          <div class="date-filter-select-wrap">\r
            <select class="date-filter-select"\r
                    [(ngModel)]="selectedFYOption"\r
                    (change)="onFYOptionChange()">\r
              <option value="ALL">All Time</option>\r
              <option *ngFor="let fy of financialYearOptions" [value]="fy.value">\r
                {{ fy.label }}\r
              </option>\r
              <option value="CUSTOM">Custom Range</option>\r
            </select>\r
            <i class="bi bi-chevron-down date-filter-select-icon"></i>\r
          </div>\r
        </div>\r
\r
        <div class="date-filter-field date-filter-custom-field"\r
             [class.date-filter-field-visible]="selectedFYOption === 'CUSTOM'">\r
          <label class="date-filter-label"><i class="bi bi-calendar-event me-1"></i>From Date</label>\r
          <div class="date-filter-input-wrap">\r
            <input type="date" class="date-filter-input"\r
                   [(ngModel)]="customFromDate" (change)="applyFilters()" />\r
          </div>\r
        </div>\r
\r
        <div class="date-filter-field date-filter-custom-field"\r
             [class.date-filter-field-visible]="selectedFYOption === 'CUSTOM'">\r
          <label class="date-filter-label"><i class="bi bi-calendar-event-fill me-1"></i>To Date</label>\r
          <div class="date-filter-input-wrap">\r
            <input type="date" class="date-filter-input"\r
                   [(ngModel)]="customToDate" (change)="applyFilters()" />\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
      <div class="date-filter-divider"></div>\r
\r
      <div class="date-filter-right">\r
        <div class="date-filter-badge-wrap" *ngIf="activeDateRangeLabel">\r
          <div class="date-filter-badge-icon"><i class="bi bi-funnel-fill"></i></div>\r
          <div>\r
            <div class="date-filter-badge-label">Active Filter</div>\r
            <div class="date-filter-badge-value">{{ activeDateRangeLabel }}</div>\r
          </div>\r
        </div>\r
        <button class="date-filter-reset-btn"\r
                *ngIf="selectedFYOption !== getCurrentFYValue()"\r
                (click)="resetDateFilter()"\r
                title="Reset to current financial year">\r
          <i class="bi bi-arrow-counterclockwise me-1"></i>Current FY\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
  <!-- ==================== END DATE FILTER BAR ==================== -->\r
\r
  <!-- ===== STAT CARDS (use dateFilteredInvoices counts) ===== -->\r
  <c-row class="mb-4 g-3" *ngIf="!isLoading">\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='ALL'; applyFilters()">\r
        <div class="stat-icon-wrap stat-purple"><i class="bi bi-file-earmark-text"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ stats.total }}</div><div class="stat-label">Total Invoice</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='SUBMITTED'; applyFilters()">\r
        <div class="stat-icon-wrap stat-pink"><i class="bi bi-clock-history"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ stats.submitted }}</div><div class="stat-label">Pending Invoice</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='APPROVED'; applyFilters()">\r
        <div class="stat-icon-wrap stat-teal"><i class="bi bi-check-circle"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ stats.approved }}</div><div class="stat-label">Approved Invoice</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='PAID'; applyFilters()">\r
        <div class="stat-icon-wrap stat-green"><i class="bi bi-currency-rupee"></i></div>\r
        <div class="stat-info"><div class="stat-value stat-value-sm">{{ stats.paid }}</div><div class="stat-label">Paid</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='REJECTED'; applyFilters()">\r
        <div class="stat-icon-wrap stat-red"><i class="bi bi-x-circle"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ stats.rejected }}</div><div class="stat-label">Rejected</div></div>\r
      </div>\r
    </c-col>\r
  </c-row>\r
\r
  <!-- ===== INVOICE TABLE CARD ===== -->\r
  <div class="card border-0 shadow-sm" style="border-radius:12px;">\r
    <div class="card-header bg-white border-0 pt-3 px-4 pb-3">\r
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">\r
        <div>\r
          <h5 class="fw-bold mb-0">\r
            <i class="bi bi-table me-2 text-primary"></i>All Invoices\r
            <span *ngIf="activeDateRangeLabel" class="text-muted fw-normal" style="font-size: 0.85rem;">\r
              \u2014 {{ activeDateRangeLabel }}\r
            </span>\r
          </h5>\r
        </div>\r
        <div class="d-flex gap-2 align-items-center flex-wrap">\r
          <small class="text-muted me-1">\r
            {{ filteredInvoices.length }} result{{ filteredInvoices.length !== 1 ? 's' : '' }}\r
          </small>\r
          <input type="text" class="form-control form-control-sm" style="width:200px;"\r
            placeholder="Search invoice, supplier, PO..."\r
            [(ngModel)]="searchText" (ngModelChange)="applyFilters()"/>\r
          <select class="form-select form-select-sm" style="width:160px;"\r
            [(ngModel)]="statusFilter" (change)="applyFilters()">\r
            <option value="ALL">All Status</option>\r
            <option value="SUBMITTED">Pending Review</option>\r
            <option value="APPROVED">Ready for Payment</option>\r
            <option value="REJECTED">Rejected</option>\r
            <option value="PAID">Paid</option>\r
          </select>\r
        </div>\r
      </div>\r
      <div class="d-flex gap-2 mt-3">\r
        <button type="button" class="btn btn-sm" [ngClass]="originFilter==='ALL' ? 'btn-dark' : 'btn-outline-secondary'"\r
                (click)="setOriginFilter('ALL')">All</button>\r
        <button type="button" class="btn btn-sm" [ngClass]="originFilter==='REGULAR' ? 'btn-dark' : 'btn-outline-secondary'"\r
                (click)="setOriginFilter('REGULAR')">\r
          <i class="bi bi-file-earmark-text me-1"></i>Regular <span class="badge bg-light text-dark ms-1">{{ regularOriginCount }}</span>\r
        </button>\r
        <button type="button" class="btn btn-sm" [ngClass]="originFilter==='SERVICE' ? 'btn-warning' : 'btn-outline-warning'"\r
                (click)="setOriginFilter('SERVICE')">\r
          <i class="bi bi-tools me-1"></i>Service (Spares) <span class="badge bg-light text-dark ms-1">{{ serviceOriginCount }}</span>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <div class="card-body p-0">\r
      <div *ngIf="isLoading" class="text-center py-5">\r
        <div class="spinner-border text-primary"></div>\r
        <p class="mt-2 text-muted">Loading invoices...</p>\r
      </div>\r
\r
      <div *ngIf="!isLoading" class="table-responsive">\r
        <table class="table align-middle mb-0">\r
          <thead style="background:#f8f9fa;">\r
            <tr>\r
              <th class="ps-4">SL</th>\r
              <th>INVOICE NO.</th>\r
              <th>SUPPLIER</th>\r
              <th>PO / RFQ</th>\r
              <th>INVOICE DATE</th>\r
              <th>DUE DATE</th>\r
              <th class="text-end">AMOUNT</th>\r
              <th class="text-center">STATUS</th>\r
              <th class="text-center">ACTIONS</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let inv of pagedInvoices; let i=index" class="table-row-hover">\r
              <td class="ps-4"><strong>{{ (currentPage-1)*pageSize+i+1 }}</strong></td>\r
\r
              <td>\r
                <div class="fw-bold text-primary" style="cursor:pointer;" (click)="viewInvoice(inv)">\r
                  {{ inv.invoiceNumber }}\r
                </div>\r
                <small class="text-muted">{{ formatDate(inv.createdAt) }}</small>\r
                <span *ngIf="inv.resubmitCount > 0"\r
                  class="badge bg-warning text-dark ms-1" style="font-size:.65rem;">\r
                  <i class="bi bi-arrow-repeat me-1"></i>Resubmitted\r
                </span>\r
              </td>\r
\r
              <td><div class="fw-semibold">{{ inv.supplierCompanyName }}</div></td>\r
\r
              <td>\r
                <div class="fw-semibold">{{ inv.poNumber }}</div>\r
                <small class="text-muted">{{ inv.rfqNumber }}</small>\r
              </td>\r
\r
              <td><small>{{ formatDate(inv.invoiceDate) }}</small></td>\r
\r
              <td>\r
                <small [class.text-danger]="isOverdue(inv)" [class.fw-bold]="isOverdue(inv)">\r
                  {{ formatDate(inv.dueDate) }}\r
                </small>\r
                <span *ngIf="isOverdue(inv)" class="badge bg-danger ms-1" style="font-size:.65rem;">OVERDUE</span>\r
              </td>\r
\r
              <td class="text-end">\r
                <span class="fw-bold text-success">{{ formatCurrency(inv.grandTotal, inv.currencyCode) }}</span>\r
              </td>\r
\r
              <td class="text-center">\r
                <span class="badge" [ngClass]="{\r
                  'bg-secondary':         inv.status==='DRAFT',\r
                  'bg-primary':           inv.status==='SUBMITTED',\r
                  'bg-success':           inv.status==='APPROVED',\r
                  'bg-warning text-dark': inv.status==='REJECTED',\r
                  'bg-danger':            inv.status==='REJECTED_CLOSED',\r
                  'bg-info':              inv.status==='PAID'\r
                }">{{ getInvoiceStatusLabel(inv.status) }}</span>\r
                <div class="text-muted small mt-1" *ngIf="inv.status==='PAID' && inv.paidBy">\r
                  by {{ inv.paidBy }}\r
                </div>\r
              </td>\r
\r
              <td class="text-center">\r
                <div class="d-flex justify-content-center gap-1">\r
                  <button class="btn btn-sm btn-light text-primary shadow-sm"\r
                    (click)="viewInvoice(inv)" title="View Invoice">\r
                    <i class="bi bi-eye-fill"></i>\r
                  </button>\r
                  <button *ngIf="inv.status==='SUBMITTED'"\r
                    class="btn btn-sm shadow-sm"\r
                    [ngClass]="inv.canApprove ? 'btn-success' : 'btn-outline-secondary'"\r
                    (click)="handleApproveClick(inv)"\r
                    [title]="inv.canApprove ? 'Approve Invoice' : 'Complete GRN & 3-Way Match first'">\r
                    <i class="bi" [ngClass]="inv.canApprove ? 'bi-check-lg' : 'bi-lock-fill'"></i>\r
                  </button>\r
                  <button *ngIf="inv.status==='SUBMITTED'" class="btn btn-sm btn-warning shadow-sm text-white"\r
                    (click)="openActionModal(inv, 'reject')" title="Return for Correction">\r
                    <i class="bi bi-arrow-counterclockwise"></i>\r
                  </button>\r
                  <button *ngIf="inv.canRecordAdvancePayment" class="btn btn-sm btn-success shadow-sm text-white"\r
                    (click)="openAdvanceModal(inv)" title="Record Advance Payment">\r
                    <i class="bi bi-piggy-bank-fill"></i>\r
                  </button>\r
                  <button *ngIf="inv.status==='APPROVED'" class="btn btn-sm btn-info shadow-sm text-white"\r
                    (click)="openActionModal(inv, 'paid')" title="Mark as Paid">\r
                    <i class="bi bi-currency-rupee"></i>\r
                  </button>\r
                  <button class="btn btn-sm btn-light text-success shadow-sm"\r
                    (click)="downloadInvoiceFromRow(inv)" title="Download Invoice">\r
                    <i class="bi bi-file-earmark-pdf"></i>\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
\r
            <tr *ngIf="pagedInvoices.length===0">\r
              <td colspan="9" class="text-center py-5">\r
                <i class="bi bi-receipt display-6 d-block mb-2" style="opacity:.25;"></i>\r
                <p class="text-muted mb-0">No invoices found for this period.</p>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- ===== PAGINATION BAR ===== -->\r
      <div *ngIf="!isLoading && filteredInvoices.length > 0"\r
        class="d-flex justify-content-between align-items-center p-4 border-top">\r
        <small class="text-muted">Showing {{ pagedInvoices.length }} of {{ filteredInvoices.length }}</small>\r
        <div class="d-flex gap-2">\r
          <button class="btn btn-sm btn-outline-secondary" [disabled]="currentPage===1"\r
            (click)="onPageChange(currentPage-1)">\r
            <i class="bi bi-chevron-left"></i> Previous\r
          </button>\r
          <button class="btn btn-sm btn-outline-secondary" [disabled]="currentPage>=totalPages"\r
            (click)="onPageChange(currentPage+1)">\r
            Next <i class="bi bi-chevron-right"></i>\r
          </button>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</c-container>\r
\r
\r
<!-- ============================================================ -->\r
<!-- VIEW INVOICE MODAL                                           -->\r
<!-- ============================================================ -->\r
<c-modal [visible]="isViewModalOpen" (visibleChange)="isViewModalOpen=$event" size="xl" scrollable>\r
  <c-modal-header style="background:linear-gradient(135deg,#1565c0,#0d47a1);">\r
    <h5 cModalTitle class="text-white">\r
      <i class="bi bi-receipt me-2"></i>{{ selectedInvoice?.invoiceNumber }}\r
    </h5>\r
    <button cButtonClose style="filter:brightness(0) invert(1);" (click)="closeViewModal()"></button>\r
  </c-modal-header>\r
\r
  <c-modal-body *ngIf="selectedInvoice">\r
\r
    <div class="d-flex justify-content-between align-items-center mb-4">\r
      <div class="d-flex align-items-center gap-2">\r
        <span class="badge fs-6" [ngClass]="{\r
          'bg-secondary':         selectedInvoice.status==='DRAFT',\r
          'bg-primary':           selectedInvoice.status==='SUBMITTED',\r
          'bg-success':           selectedInvoice.status==='APPROVED',\r
          'bg-warning text-dark': selectedInvoice.status==='REJECTED',\r
          'bg-danger':            selectedInvoice.status==='REJECTED_CLOSED',\r
          'bg-info':              selectedInvoice.status==='PAID'\r
        }">{{ getInvoiceStatusLabel(selectedInvoice.status) }}</span>\r
        <span *ngIf="selectedInvoice.resubmitCount > 0" class="badge bg-warning text-dark">\r
          <i class="bi bi-arrow-repeat me-1"></i>Resubmitted {{ selectedInvoice.resubmitCount }}\xD7\r
        </span>\r
        <span class="badge" style="background:#1565c0; font-size:0.75rem;">\r
          <i class="bi bi-globe2 me-1"></i>{{ selectedInvoice.currencyCode || 'INR' }}\r
        </span>\r
      </div>\r
      <div class="d-flex gap-2">\r
        <button class="btn btn-sm btn-danger" (click)="downloadPDF()" [disabled]="isDownloadingPDF">\r
          <i *ngIf="!isDownloadingPDF" class="bi bi-file-pdf me-1"></i>\r
          <span *ngIf="isDownloadingPDF" class="spinner-border spinner-border-sm me-1"></span>\r
          Download PDF\r
        </button>\r
        <button class="btn btn-sm btn-success" (click)="downloadInvoiceExcel(selectedInvoice.id, selectedInvoice.invoiceNumber)" [disabled]="isDownloadingInvoiceExcel">\r
          <i *ngIf="!isDownloadingInvoiceExcel" class="bi bi-file-earmark-excel me-1"></i>\r
          <span *ngIf="isDownloadingInvoiceExcel" class="spinner-border spinner-border-sm me-1"></span>\r
          Download Excel\r
        </button>\r
        <button *ngIf="selectedInvoice.status==='SUBMITTED'"\r
          class="btn btn-sm"\r
          [ngClass]="selectedInvoice.canApprove ? 'btn-success' : 'btn-outline-secondary'"\r
          (click)="handleApproveClick(selectedInvoice)"\r
          [title]="selectedInvoice.canApprove ? 'Approve Invoice' : 'Complete GRN & 3-Way Match first'">\r
          <i class="bi me-1" [ngClass]="selectedInvoice.canApprove ? 'bi-check-lg' : 'bi-lock-fill'"></i>\r
          {{ selectedInvoice.canApprove ? 'Approve' : 'Approve (Locked)' }}\r
        </button>\r
        <button *ngIf="selectedInvoice.status==='SUBMITTED'" class="btn btn-sm btn-warning text-white"\r
          (click)="openActionModal(selectedInvoice, 'reject'); closeViewModal()"\r
          title="Reject \u2014 supplier can resubmit">\r
          <i class="bi bi-arrow-counterclockwise me-1"></i>Return for Correction\r
        </button>\r
        <button *ngIf="selectedInvoice.canRecordAdvancePayment" class="btn btn-sm btn-success text-white"\r
          (click)="openAdvanceModal(selectedInvoice)">\r
          <i class="bi bi-piggy-bank-fill me-1"></i>Record Advance Payment\r
        </button>\r
        <button *ngIf="selectedInvoice.status==='APPROVED'" class="btn btn-sm btn-info text-white"\r
          (click)="openActionModal(selectedInvoice, 'paid'); closeViewModal()">\r
          <i class="bi bi-currency-rupee me-1"></i>Mark Paid\r
        </button>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="selectedInvoice.advancePaymentRequired" class="alert mb-4"\r
      [ngClass]="selectedInvoice.advancePaidAmount > 0 ? 'alert-success' : 'alert-warning'"\r
      style="border-left:4px solid;" [style.borderLeftColor]="selectedInvoice.advancePaidAmount > 0 ? '#198754' : '#f0ad4e'">\r
      <div class="d-flex align-items-start gap-2">\r
        <i class="bi bi-piggy-bank-fill fs-5 mt-1 flex-shrink-0"></i>\r
        <div class="flex-grow-1">\r
          <strong>Advance Payment</strong>\r
          <span class="text-muted small">\r
            \u2014 required {{ advancePaymentDueLabel(selectedInvoice) }}\r
            <ng-container *ngIf="selectedInvoice.advancePaymentPercentage">({{ selectedInvoice.advancePaymentPercentage }}% of total)</ng-container>\r
          </span>\r
          <div class="row mt-2 g-2">\r
            <div class="col-auto">\r
              <div class="small text-muted">Required</div>\r
              <div class="fw-bold">{{ formatCurrency(selectedInvoice.advanceRequiredAmount, selectedInvoice.currencyCode) }}</div>\r
            </div>\r
            <div class="col-auto">\r
              <div class="small text-muted">Advance Paid</div>\r
              <div class="fw-bold" [class.text-success]="selectedInvoice.advancePaidAmount > 0">\r
                {{ selectedInvoice.advancePaidAmount > 0 ? formatCurrency(selectedInvoice.advancePaidAmount, selectedInvoice.currencyCode) : 'Not yet received' }}\r
              </div>\r
              <div class="small text-muted" *ngIf="selectedInvoice.advancePaidAmount > 0">\r
                {{ formatDate(selectedInvoice.advancePaidAt) }}\r
                <span *ngIf="selectedInvoice.advancePaymentReference"> \xB7 Ref: {{ selectedInvoice.advancePaymentReference }}</span>\r
              </div>\r
            </div>\r
            <div class="col-auto">\r
              <div class="small text-muted">Balance Due</div>\r
              <div class="fw-bold">{{ formatCurrency(selectedInvoice.balanceDue, selectedInvoice.currencyCode) }}</div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="mb-4" *ngIf="getPaymentMilestones(selectedInvoice).length > 0">\r
      <h6 class="fw-bold"><i class="bi bi-list-check me-1"></i>Payment Provisions / Milestones</h6>\r
      <div class="table-responsive">\r
        <table class="table table-sm align-middle">\r
          <thead>\r
            <tr><th>Sl No</th><th>Milestone / Description</th><th>%</th><th>Amount</th><th>Remarks</th></tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let m of getPaymentMilestones(selectedInvoice)">\r
              <td>{{ m.slNo }}</td>\r
              <td>{{ m.description }}</td>\r
              <td>{{ m.percentage ? (m.percentage + '%') : '\u2014' }}</td>\r
              <td>{{ m.amount ? formatCurrency(m.amount, selectedInvoice.currencyCode) : '\u2014' }}</td>\r
              <td>{{ m.remarks }}</td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
\r
    <div class="mb-4" *ngIf="selectedInvoice.attachments?.length > 0">\r
      <h6 class="fw-bold"><i class="bi bi-paperclip me-1"></i>Attachments</h6>\r
      <div class="d-flex flex-wrap gap-2">\r
        <a *ngFor="let att of selectedInvoice.attachments" [href]="getInvoiceAttachmentDownloadUrl(att.id)" target="_blank"\r
           class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none" style="background:#f1f5f9;border-radius:8px;font-size:0.85rem;color:#1e293b;">\r
          <i class="bi bi-file-earmark-arrow-down text-primary"></i>\r
          <span>{{ att.filename }}</span>\r
          <small class="text-muted" *ngIf="att.uploadedByName">\u2014 {{ att.uploadedByName }}</small>\r
        </a>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="selectedInvoice.status==='SUBMITTED' && !selectedInvoice.canApprove"\r
      class="alert alert-info d-flex align-items-start gap-2 mb-4" style="border-left:4px solid #0288d1;">\r
      <i class="bi bi-info-circle-fill fs-5 mt-1 flex-shrink-0" style="color:#0288d1;"></i>\r
      <div>\r
        <strong>Approval Locked</strong><br>\r
        <small>This invoice cannot be approved yet. You must first:\r
          <strong>Create a GRN \u2192 Complete QA Review \u2192 Approve GRN \u2192 Run 3-Way Match.</strong>\r
        </small>\r
        <div *ngIf="selectedInvoice.threeWayMatchStatus" class="mt-1">\r
          <span class="badge"\r
            [ngClass]="{'bg-success': selectedInvoice.threeWayMatchStatus === 'MATCHED',\r
                        'bg-danger':  selectedInvoice.threeWayMatchStatus !== 'MATCHED'}">\r
            3-Way Match: {{ selectedInvoice.threeWayMatchStatus }}\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="selectedInvoice.status==='REJECTED'" class="alert alert-warning">\r
      <strong><i class="bi bi-exclamation-triangle-fill me-1"></i>Rejected \u2014 Supplier may resubmit once</strong><br>\r
      <span>{{ selectedInvoice.approvalRemarks }}</span><br>\r
      <small class="text-muted">By {{ selectedInvoice.approvedRejectedBy }} on {{ formatDate(selectedInvoice.approvedRejectedAt) }}</small>\r
    </div>\r
\r
    <div *ngIf="selectedInvoice.status==='REJECTED_CLOSED'" class="alert alert-danger">\r
      <strong><i class="bi bi-x-octagon-fill me-1"></i>Permanently Closed</strong><br>\r
      <span>{{ selectedInvoice.approvalRemarks }}</span><br>\r
      <small class="text-muted">By {{ selectedInvoice.approvedRejectedBy }} on {{ formatDate(selectedInvoice.approvedRejectedAt) }}</small>\r
    </div>\r
\r
    <div *ngIf="selectedInvoice.resubmitCount > 0 && selectedInvoice.resubmitRemarks" class="alert alert-info">\r
      <strong><i class="bi bi-arrow-repeat me-1"></i>Supplier Resubmit Remarks:</strong>\r
      {{ selectedInvoice.resubmitRemarks }}\r
      <small class="d-block text-muted mt-1">Resubmitted on {{ formatDate(selectedInvoice.resubmittedAt) }}</small>\r
    </div>\r
\r
    <div *ngIf="selectedInvoice.status==='PAID'" class="alert alert-info">\r
      <strong><i class="bi bi-check-circle-fill me-1"></i>Paid on {{ formatDateTime(selectedInvoice.paidAt) }}</strong>\r
      <span *ngIf="selectedInvoice.paidBy"> by <strong>{{ selectedInvoice.paidBy }}</strong></span>\r
      <span *ngIf="selectedInvoice.paymentMode"> via <strong>{{ selectedInvoice.paymentMode }}</strong></span>\r
      <span *ngIf="selectedInvoice.paymentReference"> | Ref: {{ selectedInvoice.paymentReference }}</span>\r
      <div class="small mt-1" *ngIf="selectedInvoice.paymentRemarks">\r
        <i class="bi bi-chat-left-text me-1"></i>{{ selectedInvoice.paymentRemarks }}\r
      </div>\r
    </div>\r
\r
    <div id="buyer-invoice-print">\r
      <div class="row mb-4">\r
        <div class="col-6">\r
          <h2 class="fw-bold text-primary" style="font-size:2rem;">INVOICE</h2>\r
          <p class="text-muted fs-5">{{ selectedInvoice.invoiceNumber }}</p>\r
        </div>\r
        <div class="col-6 text-end">\r
          <p class="mb-1"><strong>Invoice Date:</strong> {{ formatDate(selectedInvoice.invoiceDate) }}</p>\r
          <p class="mb-1"><strong>Due Date:</strong>\r
            <span class="text-danger fw-bold">{{ formatDate(selectedInvoice.dueDate) }}</span>\r
          </p>\r
          <p class="mb-0"><strong>PO Ref:</strong> {{ selectedInvoice.poNumber }}</p>\r
          <p class="mb-0"><strong>RFQ Ref:</strong> {{ selectedInvoice.rfqNumber }}</p>\r
        </div>\r
      </div>\r
\r
      <div class="row mb-4">\r
        <div class="col-6">\r
          <div class="p-3 bg-light rounded">\r
            <h6 class="fw-bold text-primary mb-2">FROM (Supplier)</h6>\r
            <p class="mb-1 fw-bold">{{ selectedInvoice.supplierCompanyName }}</p>\r
            <p class="mb-0 text-muted small">{{ selectedInvoice.supplierEmail }}</p>\r
          </div>\r
        </div>\r
        <div class="col-6">\r
          <div class="p-3 bg-light rounded">\r
            <h6 class="fw-bold text-success mb-2">BILL TO (Buyer)</h6>\r
            <p class="mb-1 fw-bold">{{ selectedInvoice.buyerCompanyName }}</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="table-responsive mb-4">\r
        <table class="table table-bordered" style="font-size:.875rem;">\r
          <thead style="background:#1565c0;color:white;">\r
            <tr>\r
              <th>#</th><th>Description</th><th>HSN</th>\r
              <th class="text-center">UOM</th><th class="text-center">Qty</th>\r
              <th class="text-end">Unit Price</th>\r
              <th class="text-center">Tax%</th>\r
              <th class="text-end">Amount</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let item of selectedInvoice.lineItems; let i=index">\r
              <td>{{ i+1 }}</td>\r
              <td>\r
                <div class="fw-semibold">{{ item.itemDescription }}</div>\r
                <small class="text-muted" *ngIf="item.itemDescriptionDetailed">{{ item.itemDescriptionDetailed }}</small>\r
              </td>\r
              <td>{{ item.hsnSacCode || '-' }}</td>\r
              <td class="text-center">{{ item.uom }}</td>\r
              <td class="text-center">{{ item.quantity }}</td>\r
              <td class="text-end">{{ formatCurrency(item.unitPrice, selectedInvoice.currencyCode) }}</td>\r
              <td class="text-center">{{ item.taxPercentage || 0 }}%</td>\r
              <td class="text-end fw-semibold">{{ formatCurrency(item.lineTotal, selectedInvoice.currencyCode) }}</td>\r
            </tr>\r
          </tbody>\r
          <tfoot>\r
            <tr class="table-light">\r
              <td colspan="7" class="text-end fw-semibold">Subtotal</td>\r
              <td class="text-end fw-semibold">{{ formatCurrency(selectedInvoice.subtotal, selectedInvoice.currencyCode) }}</td>\r
            </tr>\r
            <tr class="table-light">\r
              <td colspan="7" class="text-end fw-semibold text-warning">Tax</td>\r
              <td class="text-end fw-semibold text-warning">{{ formatCurrency(selectedInvoice.taxAmount, selectedInvoice.currencyCode) }}</td>\r
            </tr>\r
            <tr class="table-light" *ngIf="getOtherChargesTotal(selectedInvoice) > 0">\r
              <td colspan="7" class="text-end fw-semibold">Other Charges (Training/Installation/etc.)</td>\r
              <td class="text-end fw-semibold">{{ formatCurrency(getOtherChargesTotal(selectedInvoice), selectedInvoice.currencyCode) }}</td>\r
            </tr>\r
            <tr style="background:#1565c0;color:white;">\r
              <td colspan="7" class="text-end fw-bold">GRAND TOTAL ({{ selectedInvoice.currencyCode || 'INR' }})</td>\r
              <td class="text-end fw-bold">{{ formatCurrency(selectedInvoice.grandTotal, selectedInvoice.currencyCode) }}</td>\r
            </tr>\r
          </tfoot>\r
        </table>\r
      </div>\r
\r
      <!-- OTHER CHARGES (Training, Installation, Additional Cost, Transportation, etc.) -->\r
      <div class="mb-3" *ngIf="getOtherCharges(selectedInvoice).length > 0">\r
        <h6 class="fw-bold">Other Charges</h6>\r
        <div class="table-responsive">\r
          <table class="table table-sm align-middle">\r
            <thead>\r
              <tr>\r
                <th>Sl No</th>\r
                <th>Charge Type</th>\r
                <th>Qty</th>\r
                <th>UOM</th>\r
                <th>Rate</th>\r
                <th>Amount</th>\r
                <th>Tax %</th>\r
                <th>Tax Amount</th>\r
                <th>Total Amount</th>\r
                <th>Remarks</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let c of getOtherCharges(selectedInvoice); let ci = index">\r
                <td>{{ ci + 1 }}</td>\r
                <td>{{ c.chargeType }}</td>\r
                <td>{{ c.qty }}</td>\r
                <td>{{ c.uom }}</td>\r
                <td>{{ formatCurrency(c.rate, selectedInvoice.currencyCode) }}</td>\r
                <td>{{ formatCurrency(c.amount, selectedInvoice.currencyCode) }}</td>\r
                <td>{{ c.taxPercentage }}%</td>\r
                <td>{{ formatCurrency(c.taxAmount, selectedInvoice.currencyCode) }}</td>\r
                <td class="fw-semibold">{{ formatCurrency(c.totalAmount, selectedInvoice.currencyCode) }}</td>\r
                <td>{{ c.remarks }}</td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
\r
      <div class="row" *ngIf="selectedInvoice.bankName">\r
        <div class="col-md-6">\r
          <div class="p-3 border rounded" style="border-color:#1565c0!important;">\r
            <h6 class="fw-bold text-primary mb-2"><i class="bi bi-bank me-1"></i>Bank Details</h6>\r
            <table class="table table-sm table-borderless mb-0">\r
              <tr><td class="text-muted" style="width:45%;">Bank Name</td><td class="fw-semibold">{{ selectedInvoice.bankName }}</td></tr>\r
              <tr><td class="text-muted">Account Holder</td><td class="fw-semibold">{{ selectedInvoice.accountHolderName }}</td></tr>\r
              <tr><td class="text-muted">Account No.</td><td class="fw-semibold">{{ selectedInvoice.accountNumber }}</td></tr>\r
              <tr><td class="text-muted">IFSC</td><td class="fw-semibold">{{ selectedInvoice.ifscCode }}</td></tr>\r
            </table>\r
          </div>\r
        </div>\r
        <div class="col-md-6">\r
          <div class="p-3 bg-light rounded" *ngIf="selectedInvoice.paymentTerms">\r
            <h6 class="fw-bold mb-2">Payment Terms</h6>\r
            <p class="text-muted mb-2">{{ selectedInvoice.paymentTerms }}</p>\r
            <small class="text-muted" *ngIf="selectedInvoice.termsAndConditions">\r
              {{ selectedInvoice.termsAndConditions }}\r
            </small>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </c-modal-body>\r
\r
  <c-modal-footer>\r
    <button cButton color="secondary" (click)="closeViewModal()">Close</button>\r
  </c-modal-footer>\r
</c-modal>\r
\r
\r
<!-- ============================================================ -->\r
<!-- ACTION MODAL                                                 -->\r
<!-- ============================================================ -->\r
<c-modal [visible]="isActionModalOpen" (visibleChange)="isActionModalOpen=$event" size="md">\r
  <c-modal-header [ngStyle]="{\r
    'background': pendingAction==='approve'     ? 'linear-gradient(135deg,#388e3c,#1b5e20)' :\r
                  pendingAction==='reject'      ? 'linear-gradient(135deg,#f57c00,#e65100)' :\r
                  pendingAction==='rejectClose' ? 'linear-gradient(135deg,#e53935,#b71c1c)' :\r
                                                 'linear-gradient(135deg,#0288d1,#01579b)'\r
  }">\r
    <h5 cModalTitle class="text-white">\r
      <i class="bi me-2" [ngClass]="{\r
        'bi-check-circle':           pendingAction==='approve',\r
        'bi-arrow-counterclockwise': pendingAction==='reject',\r
        'bi-x-octagon':              pendingAction==='rejectClose',\r
        'bi-currency-rupee':         pendingAction==='paid'\r
      }"></i>\r
      {{ getActionLabel() }}\r
    </h5>\r
    <button cButtonClose style="filter:brightness(0) invert(1);" (click)="isActionModalOpen=false"></button>\r
  </c-modal-header>\r
\r
  <c-modal-body *ngIf="selectedInvoice">\r
    <div class="alert alert-light border mb-3">\r
      <strong>Invoice:</strong> {{ selectedInvoice.invoiceNumber }}<br>\r
      <strong>Supplier:</strong> {{ selectedInvoice.supplierCompanyName }}<br>\r
      <strong>Amount:</strong>\r
      <span class="text-success fw-bold">{{ formatCurrency(selectedInvoice.grandTotal, selectedInvoice.currencyCode) }}</span>\r
    </div>\r
\r
    <div *ngIf="pendingAction==='reject'" class="alert alert-warning mb-3">\r
      <i class="bi bi-arrow-counterclockwise me-2"></i>\r
      <strong>Reject with Resubmit Option</strong><br>\r
      <small>The supplier will be notified and can correct and resubmit this invoice <strong>once</strong>.</small>\r
    </div>\r
\r
    <div *ngIf="pendingAction==='rejectClose'" class="alert alert-danger mb-3">\r
      <i class="bi bi-x-octagon-fill me-2"></i>\r
      <strong>Permanent Rejection \u2014 Cannot be undone</strong><br>\r
      <small>The invoice will be permanently closed.</small>\r
    </div>\r
\r
    <div *ngIf="pendingAction==='approve' || pendingAction==='reject' || pendingAction==='rejectClose'" class="mb-3">\r
      <label class="form-label fw-semibold">\r
        Remarks <span class="text-danger">*</span>\r
        <small class="text-muted fw-normal ms-1">(visible to supplier)</small>\r
      </label>\r
      <textarea class="form-control" rows="3" [(ngModel)]="actionRemarks"\r
        [placeholder]="pendingAction==='approve'\r
          ? 'e.g. Invoice verified and approved for payment'\r
          : pendingAction==='reject'\r
            ? 'e.g. Invoice amount does not match PO, please correct and resubmit'\r
            : 'e.g. Invoice repeatedly incorrect \u2014 closing permanently'">\r
      </textarea>\r
    </div>\r
\r
    <div *ngIf="pendingAction==='paid'" class="mb-3">\r
      <label class="form-label fw-semibold">\r
        Payment Mode <span class="text-danger">*</span>\r
      </label>\r
      <select class="form-select mb-3" [(ngModel)]="paymentMode">\r
        <option value="" disabled>\u2014 Select how this was paid \u2014</option>\r
        <option *ngFor="let m of paymentModeOptions" [value]="m">{{ m }}</option>\r
      </select>\r
\r
      <label class="form-label fw-semibold">\r
        Payment Reference <span class="text-danger">*</span>\r
      </label>\r
      <input type="text" class="form-control" [(ngModel)]="paymentReference"\r
        placeholder="e.g. NEFT/UTR number, cheque number"/>\r
      <small class="text-muted d-block mb-3">\r
        Required so this payment can be traced back to a bank record later. Who recorded it\r
        ({{ buyerName }}) and the exact date/time are captured automatically.\r
      </small>\r
\r
      <label class="form-label fw-semibold">\r
        Remarks <span class="text-muted fw-normal">(optional)</span>\r
      </label>\r
      <textarea class="form-control" rows="2" [(ngModel)]="paymentRemarks"\r
        placeholder="Anything worth noting about this payment"></textarea>\r
    </div>\r
  </c-modal-body>\r
\r
  <c-modal-footer>\r
    <button cButton color="secondary" (click)="isActionModalOpen=false"\r
      [disabled]="isPerformingAction">Cancel</button>\r
    <button cButton [color]="getActionButtonColor()" (click)="confirmAction()"\r
      [disabled]="isPerformingAction">\r
      <c-spinner *ngIf="isPerformingAction" size="sm" class="me-1"></c-spinner>\r
      <i *ngIf="!isPerformingAction" class="bi me-1" [ngClass]="{\r
        'bi-check-lg':               pendingAction==='approve',\r
        'bi-arrow-counterclockwise': pendingAction==='reject',\r
        'bi-x-octagon':              pendingAction==='rejectClose',\r
        'bi-check2-all':             pendingAction==='paid'\r
      }"></i>\r
      {{ getActionLabel() }}\r
    </button>\r
  </c-modal-footer>\r
</c-modal>\r
\r
\r
<!-- ============================================================ -->\r
<!-- PREREQUISITE MODAL                                           -->\r
<!-- ============================================================ -->\r
<c-modal [visible]="isPrereqModalOpen" (visibleChange)="isPrereqModalOpen=$event" size="lg">\r
  <c-modal-header style="background:linear-gradient(135deg,#1565c0,#0d47a1);">\r
    <h5 cModalTitle class="text-white">\r
      <i class="bi bi-shield-lock me-2"></i>Invoice Approval \u2014 Prerequisites\r
    </h5>\r
    <button cButtonClose style="filter:brightness(0) invert(1);" (click)="closePrereqModal()"></button>\r
  </c-modal-header>\r
\r
  <c-modal-body>\r
    <div *ngIf="isCheckingPrereqs" class="text-center py-5">\r
      <div class="spinner-border text-primary" style="width:2.5rem;height:2.5rem;"></div>\r
      <p class="mt-3 text-muted fw-semibold">Checking prerequisites...</p>\r
    </div>\r
\r
    <div *ngIf="!isCheckingPrereqs">\r
      <div class="prereq-invoice-card mb-4">\r
        <div class="d-flex align-items-center gap-3">\r
          <div class="prereq-inv-icon"><i class="bi bi-file-earmark-text"></i></div>\r
          <div>\r
            <div class="fw-bold fs-6">{{ prereqInvoice?.invoiceNumber }}</div>\r
            <small class="text-muted">\r
              {{ prereqInvoice?.supplierCompanyName }}\r
              &bull; {{ formatCurrency(prereqInvoice?.grandTotal, prereqInvoice?.currencyCode) }}\r
            </small>\r
          </div>\r
          <div class="ms-auto"><span class="badge bg-primary">Pending Review</span></div>\r
        </div>\r
      </div>\r
\r
      <div class="alert alert-warning d-flex gap-2 mb-4" style="border-left:4px solid #f57c00;" *ngIf="!isServicePO">\r
        <i class="bi bi-exclamation-triangle-fill fs-5 flex-shrink-0 mt-1" style="color:#f57c00;"></i>\r
        <div>\r
          <strong>Approval requires a passed 3-Way Match.</strong><br>\r
          <small>Complete all 4 steps below before this invoice can be approved.</small>\r
        </div>\r
      </div>\r
\r
      <div class="alert alert-warning d-flex gap-2 mb-4" style="border-left:4px solid #f57c00;" *ngIf="isServicePO">\r
        <i class="bi bi-exclamation-triangle-fill fs-5 flex-shrink-0 mt-1" style="color:#f57c00;"></i>\r
        <div>\r
          <strong>Approval requires an approved Service Entry Sheet (SES).</strong><br>\r
          <small>This is a Service-type PO \u2014 confirm the delivered service period with an SES before this invoice can be approved.</small>\r
        </div>\r
      </div>\r
\r
      <div class="prereq-checklist" *ngIf="!isServicePO">\r
        <div class="prereq-step" [class.step-done]="prereqChecks.grnCreated" [class.step-pending]="!prereqChecks.grnCreated">\r
          <div class="prereq-step-number">\r
            <span *ngIf="!prereqChecks.grnCreated">1</span>\r
            <i *ngIf="prereqChecks.grnCreated" class="bi bi-check-lg"></i>\r
          </div>\r
          <div class="prereq-step-body">\r
            <div class="prereq-step-title">Create GRN (Goods Receipt Note)</div>\r
            <div class="prereq-step-desc">Record all goods physically received against the Purchase Order.</div>\r
          </div>\r
          <div class="prereq-step-badge">\r
            <span class="badge rounded-pill" [class.bg-success]="prereqChecks.grnCreated" [class.bg-light]="!prereqChecks.grnCreated" [class.text-dark]="!prereqChecks.grnCreated">\r
              <i class="bi me-1" [class.bi-check-circle-fill]="prereqChecks.grnCreated" [class.bi-hourglass]="!prereqChecks.grnCreated"></i>\r
              {{ prereqChecks.grnCreated ? 'Done' : 'Pending' }}\r
            </span>\r
          </div>\r
        </div>\r
        <div class="prereq-line" [class.line-done]="prereqChecks.grnCreated"></div>\r
\r
        <div class="prereq-step" [class.step-done]="prereqChecks.grnApproved" [class.step-pending]="!prereqChecks.grnApproved">\r
          <div class="prereq-step-number">\r
            <span *ngIf="!prereqChecks.grnApproved">2</span>\r
            <i *ngIf="prereqChecks.grnApproved" class="bi bi-check-lg"></i>\r
          </div>\r
          <div class="prereq-step-body">\r
            <div class="prereq-step-title">Complete QA Review &amp; Approve GRN</div>\r
            <div class="prereq-step-desc">QA team inspects received goods, then a supervisor approves the GRN.</div>\r
          </div>\r
          <div class="prereq-step-badge">\r
            <span class="badge rounded-pill" [class.bg-success]="prereqChecks.grnApproved" [class.bg-light]="!prereqChecks.grnApproved" [class.text-dark]="!prereqChecks.grnApproved">\r
              <i class="bi me-1" [class.bi-check-circle-fill]="prereqChecks.grnApproved" [class.bi-hourglass]="!prereqChecks.grnApproved"></i>\r
              {{ prereqChecks.grnApproved ? 'Done' : 'Pending' }}\r
            </span>\r
          </div>\r
        </div>\r
        <div class="prereq-line" [class.line-done]="prereqChecks.grnApproved"></div>\r
\r
        <div class="prereq-step" [class.step-done]="prereqChecks.matchDone" [class.step-pending]="!prereqChecks.matchDone">\r
          <div class="prereq-step-number">\r
            <span *ngIf="!prereqChecks.matchDone">3</span>\r
            <i *ngIf="prereqChecks.matchDone" class="bi bi-check-lg"></i>\r
          </div>\r
          <div class="prereq-step-body">\r
            <div class="prereq-step-title">Perform 3-Way Match</div>\r
            <div class="prereq-step-desc">Navigate to the <strong>3-Way Match module</strong>, select this PO, GRN, and Invoice, then run the match.</div>\r
          </div>\r
          <div class="prereq-step-badge">\r
            <span class="badge rounded-pill" [class.bg-success]="prereqChecks.matchDone" [class.bg-light]="!prereqChecks.matchDone" [class.text-dark]="!prereqChecks.matchDone">\r
              <i class="bi me-1" [class.bi-check-circle-fill]="prereqChecks.matchDone" [class.bi-hourglass]="!prereqChecks.matchDone"></i>\r
              {{ prereqChecks.matchDone ? 'Done' : 'Pending' }}\r
            </span>\r
          </div>\r
        </div>\r
        <div class="prereq-line" [class.line-done]="prereqChecks.matchDone"></div>\r
\r
        <div class="prereq-step" [class.step-done]="prereqChecks.matchPassed"\r
             [class.step-failed]="prereqChecks.matchDone && !prereqChecks.matchPassed"\r
             [class.step-pending]="!prereqChecks.matchDone">\r
          <div class="prereq-step-number">\r
            <span *ngIf="!prereqChecks.matchPassed && !prereqChecks.matchDone">4</span>\r
            <i *ngIf="prereqChecks.matchPassed" class="bi bi-check-lg"></i>\r
            <i *ngIf="prereqChecks.matchDone && !prereqChecks.matchPassed" class="bi bi-x-lg"></i>\r
          </div>\r
          <div class="prereq-step-body">\r
            <div class="prereq-step-title">3-Way Match Must Pass (or Be Resolved)</div>\r
            <div class="prereq-step-desc">The match result must be <strong>MATCHED</strong>, <strong>OVERRIDDEN APPROVED</strong>, or a resolved <strong>PARTIAL MATCH</strong>.</div>\r
            <div *ngIf="prereqChecks.matchDone && !prereqChecks.matchPassed" class="mt-2">\r
              <span class="badge bg-danger px-2 py-1">\r
                <i class="bi bi-x-circle me-1"></i>\r
                Current status: {{ prereqInvoice?.threeWayMatchStatus || 'MISMATCH DETECTED' }}\r
              </span>\r
              <div class="text-danger small mt-1">Please go to the 3-Way Match module and resolve the mismatch first.</div>\r
            </div>\r
          </div>\r
          <div class="prereq-step-badge">\r
            <span class="badge rounded-pill"\r
              [class.bg-success]="prereqChecks.matchPassed"\r
              [class.bg-danger]="prereqChecks.matchDone && !prereqChecks.matchPassed"\r
              [class.bg-light]="!prereqChecks.matchDone"\r
              [class.text-dark]="!prereqChecks.matchDone">\r
              <i class="bi me-1"\r
                [class.bi-check-circle-fill]="prereqChecks.matchPassed"\r
                [class.bi-x-circle-fill]="prereqChecks.matchDone && !prereqChecks.matchPassed"\r
                [class.bi-hourglass]="!prereqChecks.matchDone"></i>\r
              {{ prereqChecks.matchPassed ? 'Passed' : (prereqChecks.matchDone ? 'Failed' : 'Pending') }}\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="prereq-checklist" *ngIf="isServicePO">\r
        <div class="prereq-step" [class.step-done]="prereqInvoice?.sesApproved" [class.step-pending]="!prereqInvoice?.sesApproved">\r
          <div class="prereq-step-number">\r
            <span *ngIf="!prereqInvoice?.sesApproved">1</span>\r
            <i *ngIf="prereqInvoice?.sesApproved" class="bi bi-check-lg"></i>\r
          </div>\r
          <div class="prereq-step-body">\r
            <div class="prereq-step-title">Create &amp; Get Approved: Service Entry Sheet (SES)</div>\r
            <div class="prereq-step-desc">Confirm the service delivered for the billing period, then have it approved. No GRN or 3-Way Match is required for Service POs.</div>\r
            <div class="mt-2 d-flex gap-2">\r
              <button type="button" class="btn btn-sm btn-outline-primary" (click)="goToCreateSES()">\r
                <i class="bi bi-plus-lg me-1"></i>Create Service Entry Sheet\r
              </button>\r
              <button type="button" class="btn btn-sm btn-outline-secondary" (click)="goToSESList()">\r
                <i class="bi bi-list-check me-1"></i>View Service Entry Sheets\r
              </button>\r
            </div>\r
          </div>\r
          <div class="prereq-step-badge">\r
            <span class="badge rounded-pill" [class.bg-success]="prereqInvoice?.sesApproved" [class.bg-light]="!prereqInvoice?.sesApproved" [class.text-dark]="!prereqInvoice?.sesApproved">\r
              <i class="bi me-1" [class.bi-check-circle-fill]="prereqInvoice?.sesApproved" [class.bi-hourglass]="!prereqInvoice?.sesApproved"></i>\r
              {{ prereqInvoice?.sesApproved ? 'Done' : 'Pending' }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <div class="prereq-step" [class.step-done]="prereqInvoice?.serviceReportSubmitted" [class.step-pending]="!prereqInvoice?.serviceReportSubmitted">\r
          <div class="prereq-step-number">\r
            <span *ngIf="!prereqInvoice?.serviceReportSubmitted">2</span>\r
            <i *ngIf="prereqInvoice?.serviceReportSubmitted" class="bi bi-check-lg"></i>\r
          </div>\r
          <div class="prereq-step-body">\r
            <div class="prereq-step-title">Supplier Submits: Service Report</div>\r
            <div class="prereq-step-desc">\r
              The service report is the supporting document that accompanies the invoice \u2014 the written record of\r
              what was actually done on site. The supplier submits it from the approved Service Entry Sheet.\r
            </div>\r
            <div class="mt-2 d-flex gap-2" *ngIf="prereqInvoice?.serviceReportId">\r
              <a class="btn btn-sm btn-outline-primary" target="_blank"\r
                 [href]="getServiceReportPdfUrl(prereqInvoice.serviceReportId)">\r
                <i class="bi bi-file-earmark-pdf me-1"></i>View Service Report\r
                <span *ngIf="prereqInvoice?.serviceReportNumber"> ({{ prereqInvoice.serviceReportNumber }})</span>\r
              </a>\r
            </div>\r
          </div>\r
          <div class="prereq-step-badge">\r
            <span class="badge rounded-pill" [class.bg-success]="prereqInvoice?.serviceReportSubmitted" [class.bg-light]="!prereqInvoice?.serviceReportSubmitted" [class.text-dark]="!prereqInvoice?.serviceReportSubmitted">\r
              <i class="bi me-1" [class.bi-check-circle-fill]="prereqInvoice?.serviceReportSubmitted" [class.bi-hourglass]="!prereqInvoice?.serviceReportSubmitted"></i>\r
              {{ prereqInvoice?.serviceReportSubmitted ? 'Done' : 'Pending' }}\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div *ngIf="allPrereqsPassed" class="alert alert-success d-flex align-items-center gap-2 mt-4" style="border-left:4px solid #28a745;">\r
        <i class="bi bi-check-circle-fill fs-4 flex-shrink-0" style="color:#28a745;"></i>\r
        <div><strong>All prerequisites completed!</strong><br><small>You can now proceed to approve this invoice.</small></div>\r
      </div>\r
      <div *ngIf="!allPrereqsPassed" class="mt-4 p-3 rounded d-flex align-items-center gap-2" style="background:#fff3cd;border:1px solid #ffc107;">\r
        <i class="bi bi-lock-fill fs-5" style="color:#856404;"></i>\r
        <small style="color:#856404;">Complete the steps above before approval becomes available.</small>\r
      </div>\r
    </div>\r
  </c-modal-body>\r
\r
  <c-modal-footer>\r
    <button cButton color="secondary" (click)="closePrereqModal()">Close</button>\r
    <button *ngIf="allPrereqsPassed" cButton color="success" (click)="proceedToApprove()">\r
      <i class="bi bi-check-lg me-1"></i>Proceed to Approve\r
    </button>\r
  </c-modal-footer>\r
</c-modal>\r
<!-- ============================================================ -->\r
<!-- RECORD ADVANCE PAYMENT MODAL (plain Bootstrap markup, not c-modal -\r
     see contract-approvals.component.html for why: c-modal's animation\r
     trigger is broken on this Angular/CoreUI version and leaves the\r
     dialog permanently invisible; this pattern is proven working\r
     elsewhere in the app, e.g. budget-approvals.component.html)      -->\r
<!-- ============================================================ -->\r
<div class="modal fade" [class.show]="showAdvanceModal" [style.display]="showAdvanceModal ? 'block' : 'none'"\r
     tabindex="-1" style="background-color: rgba(0,0,0,.5);">\r
  <div class="modal-dialog modal-dialog-centered">\r
    <div class="modal-content" *ngIf="showAdvanceModal && advanceInvoice">\r
      <div class="modal-header" style="background:linear-gradient(135deg,#198754,#0f5132);">\r
        <h5 class="modal-title text-white">\r
          <i class="bi bi-piggy-bank-fill me-2"></i>Record Advance Payment\r
        </h5>\r
        <button type="button" class="btn-close" style="filter:brightness(0) invert(1);"\r
                (click)="closeAdvanceModal()" [disabled]="isRecordingAdvance"></button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="alert alert-light border mb-3">\r
          <strong>Invoice:</strong> {{ advanceInvoice.invoiceNumber }}<br>\r
          <strong>Supplier:</strong> {{ advanceInvoice.supplierCompanyName }}<br>\r
          <strong>Invoice Total:</strong>\r
          <span class="text-success fw-bold">{{ formatCurrency(advanceInvoice.grandTotal, advanceInvoice.currencyCode) }}</span><br>\r
          <strong>Advance Required:</strong>\r
          {{ formatCurrency(advanceInvoice.advanceRequiredAmount, advanceInvoice.currencyCode) }}\r
          <ng-container *ngIf="advanceInvoice.advancePaymentPercentage">({{ advanceInvoice.advancePaymentPercentage }}%)</ng-container>\r
          \u2014 due {{ advancePaymentDueLabel(advanceInvoice) }}\r
        </div>\r
\r
        <div class="mb-3">\r
          <label class="form-label fw-semibold">\r
            Amount Paid <span class="text-danger">*</span>\r
          </label>\r
          <div class="input-group">\r
            <span class="input-group-text">{{ advanceInvoice.currencySymbol || advanceInvoice.currencyCode }}</span>\r
            <input type="number" class="form-control" min="0" step="0.01" [(ngModel)]="advanceAmountInput">\r
          </div>\r
          <small class="text-muted">Defaults to the required advance \u2014 adjust if a different amount was actually received.\r
            If this covers the full invoice, the invoice is marked fully Paid.</small>\r
        </div>\r
\r
        <div class="mb-2">\r
          <label class="form-label fw-semibold">Payment Reference <small class="text-muted">(optional)</small></label>\r
          <input type="text" class="form-control" [(ngModel)]="advanceReferenceInput"\r
                 placeholder="e.g. NEFT/UTR number, cheque number"/>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="closeAdvanceModal()"\r
                [disabled]="isRecordingAdvance">Cancel</button>\r
        <button type="button" class="btn btn-success" (click)="confirmRecordAdvance()"\r
                [disabled]="isRecordingAdvance || !advanceAmountInput || advanceAmountInput <= 0">\r
          <span *ngIf="isRecordingAdvance" class="spinner-border spinner-border-sm me-1"></span>\r
          <i *ngIf="!isRecordingAdvance" class="bi bi-check2-all me-1"></i>\r
          Record Payment\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div class="modal-backdrop fade show" *ngIf="showAdvanceModal"></div>\r
`, styles: ['/* src/app/views/base/buyer-invoices/buyer-invoices.component.css */\n.date-filter-card {\n  display: flex;\n  align-items: stretch;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.date-filter-card:hover {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.10);\n}\n.date-filter-accent {\n  width: 5px;\n  background:\n    linear-gradient(\n      180deg,\n      #667eea 0%,\n      #764ba2 100%);\n  flex-shrink: 0;\n}\n.date-filter-inner {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  padding: 18px 24px;\n  flex-wrap: wrap;\n  gap: 0;\n}\n.date-filter-title-wrap {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  min-width: 160px;\n}\n.date-filter-icon-wrap {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-title {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.2;\n}\n.date-filter-subtitle {\n  font-size: 0.72rem;\n  color: #8a8a9a;\n  margin-top: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  font-weight: 500;\n}\n.date-filter-divider {\n  width: 1px;\n  height: 44px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      #e2e5f0,\n      transparent);\n  margin: 0 24px;\n  flex-shrink: 0;\n  align-self: center;\n}\n.date-filter-controls {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.date-filter-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 220px;\n}\n.date-filter-custom-field {\n  max-width: 0;\n  min-width: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition:\n    max-width 0.3s ease,\n    opacity 0.3s ease,\n    min-width 0.3s ease;\n  pointer-events: none;\n}\n.date-filter-custom-field.date-filter-field-visible {\n  max-width: 200px;\n  min-width: 160px;\n  opacity: 1;\n  pointer-events: all;\n}\n.date-filter-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 0;\n  white-space: nowrap;\n}\n.date-filter-label i {\n  color: #667eea;\n}\n.date-filter-select-wrap {\n  position: relative;\n}\n.date-filter-select {\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n  padding: 9px 36px 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-select:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-select:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-select-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.75rem;\n  color: #667eea;\n  pointer-events: none;\n}\n.date-filter-input-wrap {\n  position: relative;\n}\n.date-filter-input {\n  width: 100%;\n  padding: 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-input:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-input:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-right {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  margin-left: auto;\n  flex-wrap: wrap;\n}\n.date-filter-badge-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  border: 1.5px solid rgba(102, 126, 234, 0.2);\n  border-radius: 12px;\n  padding: 8px 14px 8px 10px;\n}\n.date-filter-badge-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-badge-label {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  line-height: 1;\n}\n.date-filter-badge-value {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #667eea;\n  margin-top: 3px;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n.date-filter-reset-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 9px 16px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #667eea;\n  background: #f0f2ff;\n  border: 1.5px solid #d0d5f5;\n  border-radius: 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.date-filter-reset-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n  transform: translateY(-1px);\n}\n.date-filter-reset-btn i {\n  font-size: 0.85rem;\n}\n@media (max-width: 992px) {\n  .date-filter-inner {\n    flex-wrap: wrap;\n    gap: 16px;\n    padding: 16px 18px;\n  }\n  .date-filter-divider {\n    display: none;\n  }\n  .date-filter-title-wrap {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-controls {\n    width: 100%;\n  }\n  .date-filter-right {\n    width: 100%;\n    margin-left: 0;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 576px) {\n  .date-filter-field,\n  .date-filter-custom-field.date-filter-field-visible {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-badge-wrap {\n    width: 100%;\n  }\n}\n.gradient-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  padding: 10px;\n}\n.avatar-circle-large {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  color: white;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n}\n.info-card {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  font-size: 1.5rem;\n  color: white;\n}\n.info-card-content {\n  flex: 1;\n}\n.info-label {\n  font-size: 0.75rem;\n  opacity: 0.9;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.info-value {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: white;\n  margin-top: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px 22px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  cursor: default;\n}\n.stat-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.11);\n}\n.stat-icon-wrap {\n  width: 58px;\n  height: 58px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: #ffffff;\n  flex-shrink: 0;\n}\n.stat-purple {\n  background:\n    linear-gradient(\n      135deg,\n      #6c63ff,\n      #9b59b6);\n}\n.stat-pink {\n  background:\n    linear-gradient(\n      135deg,\n      #f953c6,\n      #b91d73);\n}\n.stat-teal {\n  background:\n    linear-gradient(\n      135deg,\n      #43cea2,\n      #185a9d);\n}\n.stat-green {\n  background:\n    linear-gradient(\n      135deg,\n      #56ab2f,\n      #a8e063);\n}\n.stat-orange-pink {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n}\n.stat-red {\n  background:\n    linear-gradient(\n      135deg,\n      #ff416c,\n      #ff4b2b);\n}\n.stat-blue {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe,\n      #00f2fe);\n}\n.stat-hold {\n  background:\n    linear-gradient(\n      135deg,\n      #f7971e,\n      #ffd200);\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.stat-value {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1a2e;\n  line-height: 1.1;\n  letter-spacing: -0.5px;\n}\n.stat-value-sm {\n  font-size: 1.3rem;\n}\n.stat-label {\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 2px;\n}\n.gradient-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  position: relative;\n  overflow: hidden;\n  padding: 1.5rem;\n  border-radius: 12px 12px 0 0;\n}\n.gradient-header::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n}\n.avatar-circle-large {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 1.6rem;\n  flex-shrink: 0;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-card {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  height: 100%;\n}\n.info-card-icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  flex-shrink: 0;\n  margin-right: 1rem;\n  font-size: 1.5rem;\n  background: rgba(255, 255, 255, 0.25);\n}\n.info-card-icon svg {\n  width: 24px;\n  height: 24px;\n  fill: currentColor;\n}\n.info-card-content {\n  color: white;\n  flex: 1;\n  min-width: 0;\n}\n.info-label {\n  font-size: 0.75rem;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.25rem;\n  font-weight: 600;\n}\n.info-value {\n  font-size: 0.95rem;\n  font-weight: 600;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n.stat-card {\n  border: none;\n  border-radius: 0.75rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s, box-shadow 0.2s;\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n}\n.stat-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 120px;\n  height: 120px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  transform: translate(40%, -40%);\n}\n.stat-card-blue .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.stat-card-warning .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n}\n.stat-card-success .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n}\n.stat-card-info .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #43e97b 0%,\n      #38f9d7 100%);\n  color: white;\n}\n.stat-card c-card-body {\n  position: relative;\n  z-index: 1;\n}\n.stat-icon {\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n}\n.stat-icon svg {\n  width: 32px;\n  height: 32px;\n  fill: currentColor;\n}\n.stat-number {\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.stat-label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  opacity: 0.9;\n}\n.table {\n  margin-bottom: 0;\n}\n.table thead th {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid #dee2e6;\n  padding: 0.75rem;\n  background-color: #f8f9fa;\n}\n.table tbody td {\n  padding: 0.75rem;\n  vertical-align: middle;\n  border-bottom: 1px solid #e9ecef;\n}\nc-badge,\n.badge {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.35rem 0.65rem;\n  border-radius: 0.25rem;\n}\n.btn-sm {\n  padding: 0.4rem 0.8rem;\n  font-size: 0.85rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.btn-light {\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n}\n.btn-light:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.action-btn {\n  border-radius: 6px;\n  padding: 6px 12px;\n  font-size: 0.85rem;\n  transition: all 0.2s ease;\n}\n.action-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\nc-modal-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-bottom: none;\n}\nc-modal-header h5 {\n  color: white;\n}\nc-modal-header button[cButtonClose] {\n  filter: brightness(0) invert(1);\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\n}\n.form-label {\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-bottom: 0.5rem;\n  color: #495057;\n}\n.btn-group .btn {\n  border-color: #667eea;\n}\n.btn-group .btn:hover:not(:disabled) {\n  background-color: #667eea;\n  border-color: #667eea;\n  color: white;\n}\nc-spinner,\n.spinner-border {\n  width: 2rem;\n  height: 2rem;\n}\nc-card,\n.card {\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\nc-card:hover,\n.card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n.alert {\n  border-radius: 0.5rem;\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.alert-success {\n  background-color: #d1f2eb;\n  color: #0c5460;\n}\n.alert-danger {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.alert h6 {\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n.alert h6 i {\n  margin-right: 0.5rem;\n}\n.table tbody tr td[colspan] {\n  text-align: center;\n  padding: 3rem 1rem;\n}\n.table tbody tr td[colspan] svg {\n  opacity: 0.3;\n  margin-bottom: 1rem;\n}\n.table-responsive::-webkit-scrollbar {\n  height: 8px;\n}\n.table-responsive::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 10px;\n}\n.table-responsive::-webkit-scrollbar-thumb {\n  background: #667eea;\n  border-radius: 10px;\n}\n.table-responsive::-webkit-scrollbar-thumb:hover {\n  background: #764ba2;\n}\nc-modal-body::-webkit-scrollbar,\n.modal-body::-webkit-scrollbar {\n  width: 8px;\n}\nc-modal-body::-webkit-scrollbar-track,\n.modal-body::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 10px;\n}\nc-modal-body::-webkit-scrollbar-thumb,\n.modal-body::-webkit-scrollbar-thumb {\n  background: #667eea;\n  border-radius: 10px;\n}\nc-modal-body::-webkit-scrollbar-thumb:hover,\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: #764ba2;\n}\nc-modal-body,\n.modal-body {\n  max-height: 70vh;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.list-group-item {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px !important;\n  margin-bottom: 8px;\n  transition: all 0.2s ease;\n  padding: 1rem;\n}\n.list-group-item:hover {\n  background-color: #f8f9fa;\n  transform: translateX(4px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n.list-group-item .btn:hover {\n  transform: scale(1.05);\n}\n.list-group-item i.bi {\n  font-size: 2rem;\n  margin-right: 1rem;\n}\nbutton[cButton] {\n  border-radius: 8px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\nbutton[cButton]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\nbutton[cButton]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\nbutton[cButton][color=danger] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545 0%,\n      #c82333 100%);\n  border: none;\n}\nbutton[cButton][color=danger]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #c82333 0%,\n      #bd2130 100%);\n}\nc-card-header strong {\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n}\nc-card-header strong i {\n  margin-right: 0.5rem;\n}\n.no-print {\n  display: block;\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n  body {\n    background: white;\n  }\n  .modal-body,\n  c-modal-body {\n    max-height: none;\n    overflow: visible;\n  }\n}\n.gap-1 {\n  gap: 0.25rem !important;\n}\n.gap-2 {\n  gap: 0.5rem !important;\n}\n.gap-3 {\n  gap: 1rem !important;\n}\n.table small {\n  display: block;\n  line-height: 1.4;\n}\n.table small strong {\n  color: #495057;\n  font-weight: 600;\n}\n.d-flex {\n  display: flex !important;\n}\n.justify-content-between {\n  justify-content: space-between !important;\n}\n.align-items-center {\n  align-items: center !important;\n}\n.bg-light {\n  background-color: #f8f9fa !important;\n}\n.rounded {\n  border-radius: 0.5rem !important;\n}\n.bi {\n  display: inline-block;\n  vertical-align: middle;\n}\n.fs-4 {\n  font-size: 1.5rem !important;\n}\n@media (max-width: 991px) {\n  .avatar-circle-large {\n    width: 60px;\n    height: 60px;\n    font-size: 1.4rem;\n  }\n  .info-card {\n    padding: 0.875rem;\n  }\n  .info-card-icon {\n    width: 45px;\n    height: 45px;\n    font-size: 1.3rem;\n  }\n  .info-value {\n    font-size: 0.875rem;\n  }\n  .stat-number {\n    font-size: 1.75rem;\n  }\n  .stat-icon {\n    width: 55px;\n    height: 55px;\n  }\n}\n@media (max-width: 767px) {\n  .gradient-header {\n    padding: 1rem;\n  }\n  .avatar-circle-large {\n    width: 50px;\n    height: 50px;\n    font-size: 1.2rem;\n  }\n  .info-card {\n    padding: 0.75rem;\n    margin-bottom: 0.5rem;\n  }\n  .info-card-icon {\n    width: 40px;\n    height: 40px;\n    font-size: 1.2rem;\n    margin-right: 0.75rem;\n  }\n  .info-label {\n    font-size: 0.7rem;\n  }\n  .info-value {\n    font-size: 0.85rem;\n  }\n  .stat-number {\n    font-size: 1.5rem;\n  }\n  .stat-icon {\n    width: 50px;\n    height: 50px;\n  }\n  .table {\n    font-size: 0.875rem;\n  }\n  c-modal-body,\n  .modal-body {\n    padding: 1rem;\n  }\n  .list-group-item {\n    padding: 0.75rem;\n  }\n  .list-group-item i.bi {\n    font-size: 1.5rem;\n    margin-right: 0.75rem;\n  }\n}\n.border-0 {\n  border: 0 !important;\n}\n.fw-bold {\n  font-weight: 700 !important;\n}\n.text-muted {\n  color: #6c757d !important;\n}\n.overflow-hidden {\n  overflow: hidden !important;\n}\n.text-white {\n  color: #ffffff !important;\n}\n.opacity-90 {\n  opacity: 0.9 !important;\n}\n.text-white .text-muted {\n  color: rgba(255, 255, 255, 0.7) !important;\n}\nc-card.text-white {\n  color: white !important;\n}\nc-card.text-white * {\n  color: inherit;\n}\n* {\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.text-primary {\n  color: #667eea !important;\n}\nstrong {\n  font-weight: 600;\n}\nsmall {\n  font-size: 85%;\n  color: #6c757d;\n}\n.prereq-invoice-card {\n  background: #f0f4ff;\n  border: 1.5px solid #c7d2fe;\n  border-radius: 12px;\n  padding: 16px 20px;\n}\n.prereq-inv-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #1565c0,\n      #0d47a1);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  flex-shrink: 0;\n}\n.prereq-checklist {\n  display: flex;\n  flex-direction: column;\n}\n.prereq-line {\n  width: 2px;\n  height: 22px;\n  background: #dee2e6;\n  margin-left: 23px;\n  transition: background 0.3s ease;\n}\n.prereq-line.line-done {\n  background: #28a745;\n}\n.prereq-step {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 16px;\n  border-radius: 12px;\n  border: 1.5px solid #e9ecef;\n  background: #f8f9fa;\n  transition: border-color 0.2s ease, background 0.2s ease;\n}\n.prereq-step.step-done {\n  border-color: #c3e6cb;\n  background: #f0fdf4;\n}\n.prereq-step.step-failed {\n  border-color: #f5c6cb;\n  background: #fff5f5;\n}\n.prereq-step.step-pending {\n  border-color: #e9ecef;\n  background: #f8f9fa;\n  opacity: 0.85;\n}\n.prereq-step-number {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  font-weight: 700;\n  flex-shrink: 0;\n  border: 2px solid #dee2e6;\n  background: #fff;\n  color: #6c757d;\n  transition: all 0.2s ease;\n}\n.step-done .prereq-step-number {\n  background: #28a745;\n  border-color: #28a745;\n  color: #fff;\n}\n.step-failed .prereq-step-number {\n  background: #dc3545;\n  border-color: #dc3545;\n  color: #fff;\n}\n.prereq-step-body {\n  flex: 1;\n  min-width: 0;\n}\n.prereq-step-title {\n  font-weight: 600;\n  font-size: 0.92rem;\n  color: #2c3e50;\n  margin-bottom: 4px;\n  line-height: 1.3;\n}\n.step-done .prereq-step-title {\n  color: #1a6b30;\n}\n.step-failed .prereq-step-title {\n  color: #842029;\n}\n.prereq-step-desc {\n  font-size: 0.8rem;\n  color: #6c757d;\n  line-height: 1.55;\n}\n.prereq-step-badge {\n  flex-shrink: 0;\n  align-self: center;\n}\n.prereq-step-badge .badge.bg-light {\n  background: #e9ecef !important;\n  color: #495057 !important;\n  border: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=buyer-invoices.component.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: MessageService }, { type: AuthService }, { type: Router }, { type: ChangeDetectorRef }, { type: BuyerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuyerInvoicesComponent, { className: "BuyerInvoicesComponent", filePath: "src/app/views/base/buyer-invoices/buyer-invoices.component.ts", lineNumber: 569 });
})();
export {
  BuyerInvoicesComponent
};
//# sourceMappingURL=chunk-5EQUVR7M.js.map
