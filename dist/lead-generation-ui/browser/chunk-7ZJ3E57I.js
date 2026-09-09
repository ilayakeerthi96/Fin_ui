import {
  BuyerService
} from "./chunk-PQ25B5FP.js";
import {
  BadgeComponent,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ContainerComponent,
  RowComponent,
  SpinnerComponent,
  TableModule
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
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  Router,
  TitleCasePipe,
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
  ɵɵpipeBind1,
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

// src/app/views/base/po-list/po-list.component.ts
function POListComponent_div_1_span_53_Template(rf, ctx) {
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
function POListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 45)(3, "div", 46)(4, "div", 47)(5, "div", 48)(6, "div", 49)(7, "div", 50);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 51)(10, "h3", 52);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 53);
    \u0275\u0275element(13, "i", 54);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 55)(16, "div", 56)(17, "div", 57)(18, "div", 58)(19, "div", 59);
    \u0275\u0275element(20, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 61)(22, "div", 62);
    \u0275\u0275text(23, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 63);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 57)(27, "div", 58)(28, "div", 59);
    \u0275\u0275element(29, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 61)(31, "div", 62);
    \u0275\u0275text(32, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 63);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 57)(36, "div", 58)(37, "div", 59);
    \u0275\u0275element(38, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 61)(40, "div", 62);
    \u0275\u0275text(41, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 63);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 57)(45, "div", 58)(46, "div", 59);
    \u0275\u0275element(47, "i", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 61)(49, "div", 62);
    \u0275\u0275text(50, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 63);
    \u0275\u0275text(52);
    \u0275\u0275template(53, POListComponent_div_1_span_53_Template, 2, 1, "span", 42);
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
function POListComponent_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
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
function POListComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69);
    \u0275\u0275element(2, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 71);
    \u0275\u0275text(5, "Active Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 72);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.activeDateRangeLabel);
  }
}
function POListComponent_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function POListComponent_button_56_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetDateFilter());
    });
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275text(2, "Current FY ");
    \u0275\u0275elementEnd();
  }
}
function POListComponent_c_row_57_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.getTotalValueInLocalCurrency(), "1.0-0"), " ");
  }
}
function POListComponent_c_row_57_ng_container_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 97);
    \u0275\u0275text(2, "Loading...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function POListComponent_c_row_57_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.activeDateRangeLabel, " ");
  }
}
function POListComponent_c_row_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-row", 75)(1, "c-col", 76)(2, "div", 77);
    \u0275\u0275listener("click", function POListComponent_c_row_57_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.statusFilter = "ALL";
      return \u0275\u0275resetView(ctx_r0.applyStatusFilter());
    });
    \u0275\u0275elementStart(3, "div", 78);
    \u0275\u0275element(4, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 80)(6, "div", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 82);
    \u0275\u0275text(9, "Total POs");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "c-col", 76)(11, "div", 77);
    \u0275\u0275listener("click", function POListComponent_c_row_57_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.statusFilter = "PENDING_APPROVAL";
      return \u0275\u0275resetView(ctx_r0.applyStatusFilter());
    });
    \u0275\u0275elementStart(12, "div", 83);
    \u0275\u0275element(13, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 80)(15, "div", 81);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 82);
    \u0275\u0275text(18, "Pending Approvals");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "c-col", 76)(20, "div", 77);
    \u0275\u0275listener("click", function POListComponent_c_row_57_Template_div_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.statusFilter = "APPROVED";
      return \u0275\u0275resetView(ctx_r0.applyStatusFilter());
    });
    \u0275\u0275elementStart(21, "div", 85);
    \u0275\u0275element(22, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 80)(24, "div", 81);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 82);
    \u0275\u0275text(27, "Approved POs");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "c-col", 76)(29, "div", 77);
    \u0275\u0275listener("click", function POListComponent_c_row_57_Template_div_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.statusFilter = "DRAFT";
      return \u0275\u0275resetView(ctx_r0.applyStatusFilter());
    });
    \u0275\u0275elementStart(30, "div", 87);
    \u0275\u0275element(31, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 80)(33, "div", 81);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 82);
    \u0275\u0275text(36, "Draft");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "c-col", 76)(38, "div", 77);
    \u0275\u0275listener("click", function POListComponent_c_row_57_Template_div_click_38_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.statusFilter = "REJECTED";
      return \u0275\u0275resetView(ctx_r0.applyStatusFilter());
    });
    \u0275\u0275elementStart(39, "div", 89);
    \u0275\u0275element(40, "i", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 80)(42, "div", 81);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 82);
    \u0275\u0275text(45, "Rejected");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "c-col", 76)(47, "div", 77);
    \u0275\u0275listener("click", function POListComponent_c_row_57_Template_div_click_47_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.statusFilter = "HOLD";
      return \u0275\u0275resetView(ctx_r0.applyStatusFilter());
    });
    \u0275\u0275elementStart(48, "div", 91);
    \u0275\u0275element(49, "i", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 80)(51, "div", 81);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 82);
    \u0275\u0275text(54, "On HOLD");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "c-col", 76)(56, "div", 77);
    \u0275\u0275listener("click", function POListComponent_c_row_57_Template_div_click_56_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.statusFilter = "ALL";
      return \u0275\u0275resetView(ctx_r0.applyStatusFilter());
    });
    \u0275\u0275elementStart(57, "div", 93);
    \u0275\u0275element(58, "i", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 80)(60, "div", 95);
    \u0275\u0275template(61, POListComponent_c_row_57_ng_container_61_Template, 3, 4, "ng-container", 42)(62, POListComponent_c_row_57_ng_container_62_Template, 3, 0, "ng-container", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 82);
    \u0275\u0275text(64, "Total Value ");
    \u0275\u0275template(65, POListComponent_c_row_57_span_65_Template, 2, 1, "span", 96);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.dateFilteredOrders.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.countByStatus("PENDING_APPROVAL"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.countByStatus("APPROVED"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.countByStatus("DRAFT"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.countByStatus("REJECTED"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.dateFilteredHoldCount);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r0.exchangeRatesLoaded || !ctx_r0.hasCrossBorderPOs());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.exchangeRatesLoaded && ctx_r0.hasCrossBorderPOs());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.activeDateRangeLabel && ctx_r0.activeDateRangeLabel !== "All Time");
  }
}
function POListComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99)(1, "button", 100);
    \u0275\u0275listener("click", function POListComponent_div_58_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createPO());
    });
    \u0275\u0275element(2, "i", 101);
    \u0275\u0275text(3, "Create PO ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 102);
    \u0275\u0275listener("click", function POListComponent_div_58_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setOriginFilter("ALL"));
    });
    \u0275\u0275text(5, " All ");
    \u0275\u0275elementStart(6, "span", 103);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 102);
    \u0275\u0275listener("click", function POListComponent_div_58_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setOriginFilter("REGULAR"));
    });
    \u0275\u0275element(9, "i", 104);
    \u0275\u0275text(10, "Regular ");
    \u0275\u0275elementStart(11, "span", 103);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 102);
    \u0275\u0275listener("click", function POListComponent_div_58_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setOriginFilter("SERVICE"));
    });
    \u0275\u0275element(14, "i", 105);
    \u0275\u0275text(15, "Service (Spares) ");
    \u0275\u0275elementStart(16, "span", 103);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r0.originFilter === "ALL" ? "btn-dark" : "btn-outline-secondary");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.dateFilteredOrders.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.originFilter === "REGULAR" ? "btn-dark" : "btn-outline-secondary");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.regularOriginCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.originFilter === "SERVICE" ? "btn-warning" : "btn-outline-warning");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.serviceOriginCount);
  }
}
function POListComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "c-spinner", 107);
    \u0275\u0275elementStart(2, "p", 108);
    \u0275\u0275text(3, "Loading purchase orders...");
    \u0275\u0275elementEnd()();
  }
}
function POListComponent_c_row_60_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i", 111);
    \u0275\u0275elementStart(2, "h5", 112);
    \u0275\u0275text(3, "No Purchase Orders Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 113);
    \u0275\u0275text(5, "Create your first purchase order to get started");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 114);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.createPO());
    });
    \u0275\u0275element(7, "i", 101);
    \u0275\u0275text(8, " Create PO ");
    \u0275\u0275elementEnd()();
  }
}
function POListComponent_c_row_60_div_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 128);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r0.activeDateRangeLabel, " ");
  }
}
function POListComponent_c_row_60_div_5_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 cross-border shows original + (", ctx_r0.currencyCode, ")");
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 153);
    \u0275\u0275element(1, "i", 154);
    \u0275\u0275text(2, " Service ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const po_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", "Follow-up PO from Service Entry Sheet " + po_r8.sourceSesNumber);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 155);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const po_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatCurrencyAmount(po_r8.grandTotal), " ");
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_ng_container_23_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 159);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const po_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.formatInCurrency(po_r8.grandTotal, po_r8.currencyCode), " (", ctx_r0.getConvertedDisplay(po_r8), ") ");
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_ng_container_23_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 160);
    \u0275\u0275element(2, "i", 161);
    \u0275\u0275text(3, "Converting... ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 156);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 157);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 158);
    \u0275\u0275template(6, POListComponent_c_row_60_div_5_ng_container_31_ng_container_23_ng_container_6_Template, 3, 2, "ng-container", 42)(7, POListComponent_c_row_60_div_5_ng_container_31_ng_container_23_ng_container_7_Template, 4, 0, "ng-container", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const po_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatInCurrency(po_r8.grandTotal, po_r8.currencyCode), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", po_r8.currencyCode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.exchangeRatesLoaded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.exchangeRatesLoaded);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 162);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(label_r9);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const po_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", po_r8.currencySymbol, "", \u0275\u0275pipeBind2(2, 2, po_r8.totalPaidAmount, "1.0-0"), " paid ");
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 163);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_ng_container_31_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const po_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editPO(po_r8));
    });
    \u0275\u0275element(1, "i", 164);
    \u0275\u0275elementEnd();
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_button_37_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 167);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_button_37_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 168);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 165);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_ng_container_31_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const po_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.releasePO(po_r8));
    });
    \u0275\u0275template(1, POListComponent_c_row_60_div_5_ng_container_31_button_37_span_1_Template, 1, 0, "span", 147)(2, POListComponent_c_row_60_div_5_ng_container_31_button_37_i_2_Template, 1, 0, "i", 166);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const po_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.releasingId === po_r8.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.releasingId === po_r8.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.releasingId !== po_r8.id);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 169);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_ng_container_31_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const po_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.requestBudgetIncrease(po_r8));
    });
    \u0275\u0275element(1, "i", 94);
    \u0275\u0275elementEnd();
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 167);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_i_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 170);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 167);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_i_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 171);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_button_45_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 167);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_button_45_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 174);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 172);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_ng_container_31_button_45_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const po_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deletePO(po_r8));
    });
    \u0275\u0275template(1, POListComponent_c_row_60_div_5_ng_container_31_button_45_span_1_Template, 1, 0, "span", 147)(2, POListComponent_c_row_60_div_5_ng_container_31_button_45_i_2_Template, 1, 0, "i", 173);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const po_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.deletingId === po_r8.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.deletingId === po_r8.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.deletingId !== po_r8.id);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_3_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const po_r8 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", (tmp_7_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_7_0.byLevel, ")");
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 182)(1, "div", 183);
    \u0275\u0275element(2, "i", 184);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 185)(4, "span", 186);
    \u0275\u0275text(5, "Rejected:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 187);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 188);
    \u0275\u0275text(9, "By ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_3_span_12_Template, 2, 1, "span", 42);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const po_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(((tmp_6_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_6_0.remarks) || "No remarks provided");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_7_0.byName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_8_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_8_0.byLevel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" on ", ctx_r0.formatDateTime((tmp_9_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_9_0.date));
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_4_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const po_r8 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", (tmp_7_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_7_0.byLevel, ")");
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 189)(1, "div", 183);
    \u0275\u0275element(2, "i", 190);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 185)(4, "span", 186);
    \u0275\u0275text(5, "Revision needed:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 187);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 188);
    \u0275\u0275text(9, "By ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_4_span_12_Template, 2, 1, "span", 42);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const po_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(((tmp_6_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_6_0.remarks) || "No remarks provided");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_7_0.byName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_8_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_8_0.byLevel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" on ", ctx_r0.formatDateTime((tmp_9_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_9_0.date));
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_5_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const po_r8 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", (tmp_7_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_7_0.byLevel, ")");
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 191)(1, "div", 183);
    \u0275\u0275element(2, "i", 192);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 185)(4, "span", 186);
    \u0275\u0275text(5, "On Hold:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 187);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 188);
    \u0275\u0275text(9, "By ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_5_span_12_Template, 2, 1, "span", 42);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const po_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(((tmp_6_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_6_0.remarks) || "No remarks provided");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_7_0.byName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_8_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_8_0.byLevel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" on ", ctx_r0.formatDateTime((tmp_9_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_9_0.date));
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_6_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 188);
    \u0275\u0275text(1, "Assigned to ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const po_r8 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_7_0.byName);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 193)(1, "div", 183);
    \u0275\u0275element(2, "i", 194);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 185)(4, "span", 186);
    \u0275\u0275text(5, "Pending Approval at:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 187);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_6_span_8_Template, 4, 1, "span", 195);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const po_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(((tmp_6_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_6_0.byLevel) || "Current Level");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_7_0.byName);
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 175)(1, "td", 176);
    \u0275\u0275elementContainerStart(2, 177);
    \u0275\u0275template(3, POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_3_Template, 14, 4, "div", 178)(4, POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_4_Template, 14, 4, "div", 179)(5, POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_5_Template, 14, 4, "div", 180)(6, POListComponent_c_row_60_div_5_ng_container_31_tr_46_div_6_Template, 9, 2, "div", 181);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const po_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitch", (tmp_5_0 = ctx_r0.getApprovalRemark(po_r8.id)) == null ? null : tmp_5_0.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "rejected");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "revision");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "hold");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "pending");
  }
}
function POListComponent_c_row_60_div_5_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 130);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_ng_container_31_Template_tr_click_1_listener() {
      const po_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.viewPO(po_r8.id));
    });
    \u0275\u0275elementStart(2, "td")(3, "a", 131);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_ng_container_31_Template_a_click_3_listener($event) {
      const po_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.viewPO(po_r8.id));
    });
    \u0275\u0275element(4, "i", 104);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, POListComponent_c_row_60_div_5_ng_container_31_span_6_Template, 3, 1, "span", 132);
    \u0275\u0275elementStart(7, "div", 133);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "small", 112);
    \u0275\u0275element(11, "i", 134);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 135);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "small", 112);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 122)(19, "span", 136);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 123);
    \u0275\u0275template(22, POListComponent_c_row_60_div_5_ng_container_31_ng_container_22_Template, 3, 1, "ng-container", 42)(23, POListComponent_c_row_60_div_5_ng_container_31_ng_container_23_Template, 8, 4, "ng-container", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 122)(25, "span", 137);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, POListComponent_c_row_60_div_5_ng_container_31_span_28_Template, 2, 1, "span", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 122)(30, "span", 137);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, POListComponent_c_row_60_div_5_ng_container_31_div_32_Template, 3, 5, "div", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 140);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_ng_container_31_Template_td_click_33_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(34, "button", 141);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_ng_container_31_Template_button_click_34_listener() {
      const po_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.viewPO(po_r8.id));
    });
    \u0275\u0275element(35, "i", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, POListComponent_c_row_60_div_5_ng_container_31_button_36_Template, 2, 0, "button", 143)(37, POListComponent_c_row_60_div_5_ng_container_31_button_37_Template, 3, 3, "button", 144)(38, POListComponent_c_row_60_div_5_ng_container_31_button_38_Template, 2, 0, "button", 145);
    \u0275\u0275elementStart(39, "button", 146);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_ng_container_31_Template_button_click_39_listener() {
      const po_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadPOExcel(po_r8));
    });
    \u0275\u0275template(40, POListComponent_c_row_60_div_5_ng_container_31_span_40_Template, 1, 0, "span", 147)(41, POListComponent_c_row_60_div_5_ng_container_31_i_41_Template, 1, 0, "i", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 149);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_ng_container_31_Template_button_click_42_listener() {
      const po_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadPOPdf(po_r8));
    });
    \u0275\u0275template(43, POListComponent_c_row_60_div_5_ng_container_31_span_43_Template, 1, 0, "span", 147)(44, POListComponent_c_row_60_div_5_ng_container_31_i_44_Template, 1, 0, "i", 150);
    \u0275\u0275elementEnd();
    \u0275\u0275template(45, POListComponent_c_row_60_div_5_ng_container_31_button_45_Template, 3, 3, "button", 151);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, POListComponent_c_row_60_div_5_ng_container_31_tr_46_Template, 7, 5, "tr", 152);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const po_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", po_r8.poNumber, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", po_r8.sourceSesId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Created ", ctx_r0.formatDate(po_r8.createdAt));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(po_r8.poDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(po_r8.supplierName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(po_r8.supplierContactEmail || "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((po_r8.lineItems == null ? null : po_r8.lineItems.length) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isCrossBorderPO(po_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isCrossBorderPO(po_r8));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getStatusBadgeClass(po_r8.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 26, po_r8.status));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.poTypeLabels(po_r8.poType));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.paymentBadgeClass(po_r8.paymentStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentStatusLabel(po_r8.paymentStatus), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", po_r8.totalPaidAmount > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.canEdit(po_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canRelease(po_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canRequestBudgetIncrease(po_r8));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.downloadingExcelId === po_r8.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.downloadingExcelId === po_r8.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.downloadingExcelId !== po_r8.id);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.downloadingPdfId === po_r8.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.downloadingPdfId === po_r8.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.downloadingPdfId !== po_r8.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", po_r8.status === "DRAFT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasRemark(po_r8));
  }
}
function POListComponent_c_row_60_div_5_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 196);
    \u0275\u0275element(2, "i", 197);
    \u0275\u0275elementStart(3, "p", 198);
    \u0275\u0275text(4, "No purchase orders found for this period.");
    \u0275\u0275elementEnd()()();
  }
}
function POListComponent_c_row_60_div_5_div_33_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 214);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_div_33_button_14_Template_button_click_0_listener() {
      const size_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onPageSizeChange(size_r16));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r16 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r0.pageSize === size_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r16, " ");
  }
}
function POListComponent_c_row_60_div_5_div_33_ng_container_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 217);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function POListComponent_c_row_60_div_5_div_33_ng_container_20_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 218);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_div_33_ng_container_20_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const page_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.goToPage(page_r18));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r0.currentPage === page_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r18, " ");
  }
}
function POListComponent_c_row_60_div_5_div_33_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, POListComponent_c_row_60_div_5_div_33_ng_container_20_span_1_Template, 2, 0, "span", 215)(2, POListComponent_c_row_60_div_5_div_33_ng_container_20_button_2_Template, 2, 3, "button", 216);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const page_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", page_r18 === -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", page_r18 !== -1);
  }
}
function POListComponent_c_row_60_div_5_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 199)(1, "div", 200)(2, "span", 113);
    \u0275\u0275text(3, " Showing ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " of ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " orders ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 201)(11, "label", 202);
    \u0275\u0275text(12, "Rows per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 203);
    \u0275\u0275template(14, POListComponent_c_row_60_div_5_div_33_button_14_Template, 2, 3, "button", 204);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 205)(16, "button", 206);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_div_33_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.goToPage(1));
    });
    \u0275\u0275element(17, "i", 207);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 208);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_div_33_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage - 1));
    });
    \u0275\u0275element(19, "i", 209);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, POListComponent_c_row_60_div_5_div_33_ng_container_20_Template, 3, 2, "ng-container", 126);
    \u0275\u0275elementStart(21, "button", 210);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_div_33_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage + 1));
    });
    \u0275\u0275element(22, "i", 211);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 212);
    \u0275\u0275listener("click", function POListComponent_c_row_60_div_5_div_33_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.totalPages));
    });
    \u0275\u0275element(24, "i", 213);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.startIndex, "\u2013", ctx_r0.endIndex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.filteredOrders.length);
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
function POListComponent_c_row_60_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 116)(2, "h5", 117);
    \u0275\u0275element(3, "i", 118);
    \u0275\u0275text(4, "All Purchase Orders ");
    \u0275\u0275template(5, POListComponent_c_row_60_div_5_span_5_Template, 2, 1, "span", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 112);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "table", 120)(9, "thead", 121)(10, "tr")(11, "th");
    \u0275\u0275text(12, "PO Number / Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "PO Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 122);
    \u0275\u0275text(18, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 123);
    \u0275\u0275text(20, " Grand Total ");
    \u0275\u0275elementStart(21, "div", 124);
    \u0275\u0275text(22);
    \u0275\u0275template(23, POListComponent_c_row_60_div_5_span_23_Template, 2, 1, "span", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "th", 122);
    \u0275\u0275text(25, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 122);
    \u0275\u0275text(27, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 122);
    \u0275\u0275text(29, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "tbody");
    \u0275\u0275template(31, POListComponent_c_row_60_div_5_ng_container_31_Template, 47, 28, "ng-container", 126)(32, POListComponent_c_row_60_div_5_tr_32_Template, 5, 0, "tr", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, POListComponent_c_row_60_div_5_div_33_Template, 25, 9, "div", 127);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.activeDateRangeLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.filteredOrders.length, " result", ctx_r0.filteredOrders.length !== 1 ? "s" : "", " ");
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1(" ", ctx_r0.currencyCode, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.exchangeRatesLoaded);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r0.paginatedOrders);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredOrders.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredOrders.length > 0);
  }
}
function POListComponent_c_row_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 3)(2, "c-card", 4)(3, "c-card-body", 109);
    \u0275\u0275template(4, POListComponent_c_row_60_div_4_Template, 9, 0, "div", 41)(5, POListComponent_c_row_60_div_5_Template, 34, 8, "div", 110);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.purchaseOrders.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.purchaseOrders.length > 0);
  }
}
var _POListComponent = class _POListComponent {
  constructor(router, dataService, messageService, buyerService) {
    this.router = router;
    this.dataService = dataService;
    this.messageService = messageService;
    this.buyerService = buyerService;
    this.purchaseOrders = [];
    this.dateFilteredOrders = [];
    this.filteredOrders = [];
    this.isLoading = false;
    this.deletingId = null;
    this.buyerId = null;
    this.holdCount = 0;
    this.loggedInBuyer = null;
    this.approvalRemarksMap = /* @__PURE__ */ new Map();
    this.loadingRemarks = false;
    this.currencyCode = "INR";
    this.currencySymbol = "\u20B9";
    this.exchangeRates = {};
    this.exchangeRatesLoaded = false;
    this.statusFilter = "ALL";
    this.originFilter = "ALL";
    this.currentPage = 1;
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25, 50];
    this.financialYearOptions = [];
    this.selectedFYOption = "";
    this.customFromDate = "";
    this.customToDate = "";
    this.activeDateRangeLabel = "";
    this.downloadingExcelId = null;
    this.downloadingPdfId = null;
    this.downloadingXmlId = null;
    this.releasingId = null;
  }
  ngOnInit() {
    const raw = Number(localStorage.getItem("buyerId"));
    this.buyerId = raw && !isNaN(raw) ? raw : null;
    this.buildFinancialYearOptions();
    this.selectedFYOption = this.getCurrentFYValue();
    this.updateActiveDateRangeLabel();
    this.loadLoggedInBuyer();
    this.loadPurchaseOrders();
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
    this.applyFiltersAndPagination();
  }
  resetDateFilter() {
    this.selectedFYOption = this.getCurrentFYValue();
    this.customFromDate = "";
    this.customToDate = "";
    this.updateActiveDateRangeLabel();
    this.applyFiltersAndPagination();
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
  applyDateFilter(orders) {
    const range = this.getActiveDateRange();
    if (!range)
      return orders;
    return orders.filter((po) => {
      const dateStr = po.createdAt || po.poDate;
      if (!dateStr)
        return false;
      const created = new Date(dateStr);
      return created >= range.from && created <= range.to;
    });
  }
  // ── Stat card counts (based on date-filtered data) ───────────
  countByStatus(status) {
    return this.dateFilteredOrders.filter((po) => po.status === status).length;
  }
  get dateFilteredHoldCount() {
    return this.dateFilteredOrders.filter((po) => po.status === "PENDING_APPROVAL" && po.internalNotes?.toLowerCase().includes("hold")).length;
  }
  getTotalValueInLocalCurrency() {
    return this.dateFilteredOrders.reduce((sum, po) => {
      const code = po.currencyCode || this.currencyCode;
      if (code === this.currencyCode)
        return sum + (po.grandTotal || 0);
      const converted = this.convertToLocalCurrency(po.grandTotal || 0, code);
      return sum + converted;
    }, 0);
  }
  // =========================================================================
  //  FILTERING & PAGINATION
  // =========================================================================
  applyFiltersAndPagination() {
    this.updateActiveDateRangeLabel();
    this.dateFilteredOrders = this.applyDateFilter(this.purchaseOrders);
    let data = [...this.dateFilteredOrders];
    if (this.statusFilter === "HOLD") {
      data = data.filter((po) => po.status === "PENDING_APPROVAL" && po.internalNotes?.toLowerCase().includes("hold"));
    } else if (this.statusFilter !== "ALL") {
      data = data.filter((po) => po.status === this.statusFilter);
    }
    if (this.originFilter === "SERVICE") {
      data = data.filter((po) => !!po.sourceSesId);
    } else if (this.originFilter === "REGULAR") {
      data = data.filter((po) => !po.sourceSesId);
    }
    this.filteredOrders = data;
    this.currentPage = 1;
  }
  applyStatusFilter() {
    this.applyFiltersAndPagination();
  }
  setOriginFilter(filter) {
    this.originFilter = filter;
    this.applyFiltersAndPagination();
  }
  get serviceOriginCount() {
    return this.dateFilteredOrders.filter((po) => !!po.sourceSesId).length;
  }
  get regularOriginCount() {
    return this.dateFilteredOrders.filter((po) => !po.sourceSesId).length;
  }
  // =========================================================================
  //  BUYER INFO
  // =========================================================================
  loadLoggedInBuyer() {
    if (!this.buyerId)
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
  hasCrossBorderPOs() {
    return this.purchaseOrders.some((po) => this.isCrossBorderPO(po));
  }
  // =========================================================================
  //  EXCHANGE RATES
  // =========================================================================
  loadExchangeRates() {
    const base = this.currencyCode;
    fetch(`https://open.er-api.com/v6/latest/${base}`).then((r) => r.json()).then((data) => {
      if (data && data.rates) {
        this.exchangeRates = data.rates;
        this.exchangeRatesLoaded = true;
      }
    }).catch((err) => {
      console.warn("[POList] Exchange rate fetch failed:", err);
      this.exchangeRatesLoaded = false;
    });
  }
  // =========================================================================
  //  CURRENCY HELPERS
  // =========================================================================
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
      "IDR": "Rp"
    };
    return map[code] || code;
  }
  formatCurrencyAmount(amount) {
    const val = Number(amount || 0);
    const formatted = val.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const rtlCodes = ["AED", "SAR", "QAR", "KWD", "BHD", "OMR", "IRR", "IQD", "JOD", "LBP"];
    if (rtlCodes.includes(this.currencyCode))
      return `${formatted} ${this.currencySymbol}`;
    return `${this.currencySymbol} ${formatted}`;
  }
  formatInCurrency(amount, code) {
    const sym = this.getSymbolForCode(code);
    const val = Number(amount || 0);
    const formatted = val.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const rtlCodes = ["AED", "SAR", "QAR", "KWD", "BHD", "OMR", "IRR", "IQD", "JOD", "LBP"];
    if (rtlCodes.includes(code))
      return `${formatted} ${sym}`;
    return `${sym} ${formatted}`;
  }
  isCrossBorderPO(po) {
    const poCode = po.currencyCode || this.currencyCode;
    return poCode !== this.currencyCode;
  }
  convertToLocalCurrency(amount, fromCurrencyCode) {
    if (!this.exchangeRatesLoaded || !this.exchangeRates)
      return 0;
    if (fromCurrencyCode === this.currencyCode)
      return amount;
    const rate = this.exchangeRates[fromCurrencyCode];
    if (!rate || rate === 0)
      return 0;
    return amount / rate;
  }
  getConvertedDisplay(po) {
    if (!this.isCrossBorderPO(po))
      return "";
    if (!this.exchangeRatesLoaded)
      return "Loading...";
    const converted = this.convertToLocalCurrency(po.grandTotal, po.currencyCode || "USD");
    if (converted === 0)
      return "";
    return `\u2248 ${this.formatCurrencyAmount(converted)}`;
  }
  // =========================================================================
  //  PURCHASE ORDERS
  // =========================================================================
  /**
   * Loads the PO list for whoever is signed in.
   *
   * The Admin has no buyerId — that identifier belongs to a buyer login, and the Admin is a
   * different account entirely — so scoping this to a buyer would have shown them an empty
   * list with no error. When there is no buyerId we fetch every PO instead, which is exactly
   * what the Admin is meant to see; a buyer login keeps its existing buyer-scoped query.
   */
  loadPurchaseOrders() {
    this.isLoading = true;
    const request = this.buyerId ? this.dataService.getPurchaseOrdersByBuyer(this.buyerId) : this.dataService.getAllPurchaseOrders();
    request.subscribe({
      next: (response) => {
        if (Array.isArray(response)) {
          this.purchaseOrders = response;
        } else if (response && response.success) {
          this.purchaseOrders = response.data || [];
        } else if (Array.isArray(response?.data)) {
          this.purchaseOrders = response.data;
        } else {
          this.purchaseOrders = [];
        }
        if (this.purchaseOrders.length > 0) {
          const sameCurrencyPO = this.purchaseOrders.find((po) => po.currencyCode && po.currencyCode !== "USD");
          const refPO = sameCurrencyPO || this.purchaseOrders[0];
          if (refPO.currencyCode) {
            this.currencyCode = refPO.currencyCode;
            this.currencySymbol = refPO.currencySymbol || this.getSymbolForCode(refPO.currencyCode);
          }
        }
        this.holdCount = this.purchaseOrders.filter((po) => po.status === "PENDING_APPROVAL" && po.internalNotes?.toLowerCase().includes("hold")).length;
        this.applyFiltersAndPagination();
        this.isLoading = false;
        this.loadApprovalRemarks();
        this.loadExchangeRates();
      },
      error: () => {
        this.messageService.showMessage("error", "Error", "Failed to load Purchase Orders");
        this.isLoading = false;
      }
    });
  }
  loadApprovalRemarks() {
    const actionedPOs = this.purchaseOrders.filter((po) => ["REJECTED", "RETURNED_FOR_REVISION", "PENDING_APPROVAL", "HOLD"].includes(po.status));
    if (actionedPOs.length === 0)
      return;
    this.loadingRemarks = true;
    let completed = 0;
    actionedPOs.forEach((po) => {
      this.dataService.getPOApprovalHistory(po.id).subscribe({
        next: (response) => {
          const history = response?.data || response || [];
          const latestAction = this.extractLatestAction(history, po.status);
          if (latestAction)
            this.approvalRemarksMap.set(po.id, latestAction);
          completed++;
          if (completed === actionedPOs.length)
            this.loadingRemarks = false;
        },
        error: () => {
          completed++;
          if (completed === actionedPOs.length)
            this.loadingRemarks = false;
        }
      });
    });
  }
  extractLatestAction(history, status) {
    if (!history || history.length === 0)
      return null;
    const sorted = [...history].sort((a, b) => new Date(b.actionDate || 0).getTime() - new Date(a.actionDate || 0).getTime());
    if (status === "REJECTED") {
      const r = sorted.find((h) => h.rejectedByUserName || h.rejectRemarks || h.status === "REJECTED");
      if (r)
        return { type: "rejected", remarks: r.rejectRemarks || r.comments, byName: r.rejectedByUserName || r.approverUserName, byLevel: r.hierarchyLevelName, date: r.rejectDate || r.actionDate };
    }
    if (status === "RETURNED_FOR_REVISION") {
      const r = sorted.find((h) => h.returnedByUserName || h.returnRemarks || h.status === "RESUBMITTED");
      if (r)
        return { type: "revision", remarks: r.returnRemarks || r.revisionComments || r.comments, byName: r.returnedByUserName || r.approverUserName, byLevel: r.hierarchyLevelName, date: r.returnDate || r.actionDate };
    }
    if (status === "HOLD") {
      const r = sorted.find((h) => h.heldByUserName || h.holdRemarks || h.status === "HOLD");
      if (r)
        return { type: "hold", remarks: r.holdRemarks || r.comments, byName: r.heldByUserName || r.approverUserName, byLevel: r.hierarchyLevelName, date: r.holdDate || r.actionDate };
    }
    if (status === "PENDING_APPROVAL") {
      const r = sorted.find((h) => h.status === "PENDING");
      if (r)
        return { type: "pending", remarks: null, byName: r.approverUserName, byLevel: r.hierarchyLevelName, date: r.actionDate };
    }
    return null;
  }
  getApprovalRemark(poId) {
    return this.approvalRemarksMap.get(poId) || null;
  }
  hasRemark(po) {
    return this.approvalRemarksMap.has(po.id);
  }
  // =========================================================================
  //  PAGINATION
  // =========================================================================
  get totalPages() {
    return Math.max(1, Math.ceil(this.filteredOrders.length / this.pageSize));
  }
  get paginatedOrders() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredOrders.slice(start, start + this.pageSize);
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
    if (this.filteredOrders.length === 0)
      return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }
  get endIndex() {
    return Math.min(this.currentPage * this.pageSize, this.filteredOrders.length);
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
  // =========================================================================
  //  ACTIONS
  // =========================================================================
  viewPO(poId) {
    this.router.navigate(["/po-details", poId]);
  }
  deletePO(po) {
    if (po.status !== "DRAFT") {
      this.messageService.showMessage("warning", "Warning", "Only DRAFT Purchase Orders can be deleted");
      return;
    }
    if (!confirm(`Delete Purchase Order ${po.poNumber}?

This action cannot be undone.`))
      return;
    this.deletingId = po.id;
    this.dataService.deletePurchaseOrder(po.id).subscribe({
      next: (response) => {
        if (response && response.success) {
          this.messageService.showMessage("success", "Success", "Purchase Order deleted successfully");
          this.purchaseOrders = this.purchaseOrders.filter((p) => p.id !== po.id);
          this.approvalRemarksMap.delete(po.id);
          this.holdCount = this.purchaseOrders.filter((p) => p.status === "PENDING_APPROVAL" && p.internalNotes?.toLowerCase().includes("hold")).length;
          this.applyFiltersAndPagination();
          if (this.paginatedOrders.length === 0 && this.currentPage > 1)
            this.currentPage--;
        }
        this.deletingId = null;
      },
      error: (error) => {
        this.messageService.showMessage("error", "Error", error.error?.message || "Failed to delete");
        this.deletingId = null;
      }
    });
  }
  submitForApproval(po) {
    if (po.status !== "DRAFT") {
      this.messageService.showMessage("warning", "Warning", "Only DRAFT POs can be submitted for approval");
      return;
    }
    const userId = Number(localStorage.getItem("userId"));
    this.dataService.initiatePOApproval(po.id, userId).subscribe({
      next: (response) => {
        if (response?.budgetExceeded) {
          this.messageService.showMessage("warning", "Budget Exceeded", response.message || "The requested PO amount exceeds the available department budget. Please submit a Budget Increase Request to the Finance Team.");
          this.loadPurchaseOrders();
          if (confirm("The PO amount exceeds your department's remaining budget.\n\nPO Amount: \u20B9" + (response.poAmount ?? "\u2014") + "\nRemaining Budget: \u20B9" + (response.remainingBudget ?? "\u2014") + "\nShortfall: \u20B9" + (response.shortfall ?? "\u2014") + "\n\nDo you want to submit a Budget Increase Request to the Finance Team now?")) {
            this.router.navigate(["/budget-increase-request-po", po.id], {
              queryParams: {
                poNumber: po.poNumber,
                rfqNumber: response.rfqNumber,
                poAmount: response.poAmount,
                remaining: response.remainingBudget,
                shortfall: response.shortfall
              }
            });
          }
          return;
        }
        if (response && response.success) {
          this.messageService.showMessage("success", "Success", `PO ${po.poNumber} submitted for approval`);
          this.loadPurchaseOrders();
        } else {
          this.messageService.showMessage("error", "Error", response?.message || "Failed to submit");
        }
      },
      error: (error) => {
        this.messageService.showMessage("error", "Error", error.error?.message || "Failed to submit for approval");
      }
    });
  }
  // ✅ NEW: Budget increase request action for POs blocked by budget check
  canRequestBudgetIncrease(po) {
    return po.status === "PENDING_BUDGET_APPROVAL";
  }
  requestBudgetIncrease(po) {
    this.router.navigate(["/budget-increase-request-po", po.id], {
      queryParams: { poNumber: po.poNumber }
    });
  }
  downloadPOExcel(po) {
    this.downloadingExcelId = po.id;
    this.dataService.getPOSummaryExcel(po.id).subscribe({
      next: (blob) => {
        this.dataService.saveBlob(blob, `PO_Report_${po.poNumber}_${this.dataService.todayStr()}.xlsx`);
        this.downloadingExcelId = null;
      },
      error: () => {
        this.messageService.showMessage("error", "Error", "Failed to download PO Excel");
        this.downloadingExcelId = null;
      }
    });
  }
  downloadPOPdf(po) {
    this.downloadingPdfId = po.id;
    this.dataService.getPOSummaryPDF(po.id).subscribe({
      next: (blob) => {
        this.dataService.saveBlob(blob, `PO_Report_${po.poNumber}_${this.dataService.todayStr()}.pdf`);
        this.downloadingPdfId = null;
      },
      error: () => {
        this.messageService.showMessage("error", "Error", "Failed to download PO PDF");
        this.downloadingPdfId = null;
      }
    });
  }
  downloadPOCxml(po) {
    this.downloadingXmlId = po.id;
    this.dataService.getPOCxml(po.id).subscribe({
      next: (blob) => {
        this.dataService.saveBlob(blob, `PO_${po.poNumber}_${this.dataService.todayStr()}.cxml.xml`);
        this.downloadingXmlId = null;
      },
      error: () => {
        this.messageService.showMessage("error", "Error", "Failed to download PO cXML");
        this.downloadingXmlId = null;
      }
    });
  }
  /**
   * POs are typed in by the Admin now rather than derived from a quote comparison, so this
   * points at the manual PO form. The method name is kept because the empty-state markup
   * still calls it.
   */
  goToQuoteComparison() {
    this.router.navigate(["/po-create"]);
  }
  /** RFQ dashboard is gone; the PO list is this screen's own home. */
  goBack() {
    this.router.navigate(["/po-list"]);
  }
  createPO() {
    this.router.navigate(["/po-create"]);
  }
  editPO(po) {
    this.router.navigate(["/po-edit", po.id]);
  }
  /** Only DRAFT and returned POs can be edited — the same rule the API enforces. */
  canEdit(po) {
    return po?.status === "DRAFT" || po?.status === "RETURNED_FOR_REVISION";
  }
  /**
   * There is no approval step: a freshly created PO releases straight to the supplier, one
   * click, no intermediate state. DRAFT and RETURNED_FOR_REVISION (from before this change)
   * both qualify; APPROVED is kept only so a PO created under the old flow still has a way
   * out.
   */
  canRelease(po) {
    return po?.status === "DRAFT" || po?.status === "RETURNED_FOR_REVISION" || po?.status === "APPROVED";
  }
  /**
   * Releases a PO to the supplier — the moment they can see it and raise an invoice against
   * it. No approval step precedes this: the PO goes straight from DRAFT to RELEASED.
   */
  releasePO(po) {
    if (!this.canRelease(po)) {
      this.messageService.showMessage("warning", "Cannot release", "PO " + po.poNumber + " is " + po.status + " and cannot be released from this status.");
      return;
    }
    this.releasingId = po.id;
    this.dataService.releasePO(po.id, "").subscribe({
      next: () => {
        this.releasingId = null;
        this.messageService.showMessage("success", "PO released", po.poNumber + " has been released. The supplier can now see it and invoice against it.");
        this.loadPurchaseOrders();
      },
      error: (err) => {
        this.releasingId = null;
        this.messageService.showMessage("error", "Release failed", err?.error?.message || "The PO could not be released.");
      }
    });
  }
  /** Colour for the PO-level payment roll-up badge. */
  paymentBadgeClass(status) {
    switch (status) {
      case "PAID":
        return "bg-success";
      case "PARTIALLY_PAID":
        return "bg-warning text-dark";
      default:
        return "bg-secondary";
    }
  }
  /** "Unpaid" reads like something's wrong; it's just the normal starting state for a PO
   *  that hasn't reached payment yet. */
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
  // =========================================================================
  //  HELPERS
  // =========================================================================
  getTotalValue() {
    return this.purchaseOrders.reduce((sum, po) => sum + (po.grandTotal || 0), 0);
  }
  getStatusBadgeClass(status) {
    const c = {
      "DRAFT": "bg-secondary",
      "PENDING_APPROVAL": "bg-warning text-dark",
      "PENDING_BUDGET_APPROVAL": "bg-danger",
      "APPROVED": "bg-success",
      "REJECTED": "bg-danger",
      "RETURNED_FOR_REVISION": "bg-warning text-dark",
      "HOLD": "bg-warning text-dark",
      "SENT_TO_SUPPLIER": "bg-info",
      "COMPLETED": "bg-dark",
      "CANCELLED": "bg-danger"
    };
    return c[status] || "bg-secondary";
  }
  /** Human-readable label for po.poType, e.g. "BLANKET_CONTRACT" → "Blanket / Contract". */
  poTypeLabel(poType) {
    const map = {
      GOODS: "Goods",
      SERVICE: "Service",
      BLANKET_CONTRACT: "Blanket / Contract",
      PROJECT_MILESTONE: "Project / Milestone"
    };
    return map[poType] || poType;
  }
  /** po.poType is comma-separated when more than one is selected. Goods is excluded here
   *  since it's the default/baseline and stays visually unmarked, as before. */
  poTypeLabels(poTypeCsv) {
    if (!poTypeCsv)
      return [];
    return poTypeCsv.split(",").map((t) => t.trim()).filter((t) => t && t !== "GOODS").map((t) => this.poTypeLabel(t));
  }
  formatDate(dateString) {
    if (!dateString)
      return "N/A";
    return new Date(dateString).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
  }
  formatDateTime(dateString) {
    if (!dateString)
      return "N/A";
    return new Date(dateString).toLocaleString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
};
_POListComponent.\u0275fac = function POListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _POListComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(BuyerService));
};
_POListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POListComponent, selectors: [["app-po-list"]], decls: 61, vars: 15, consts: [["fluid", "", 1, "mt-4"], ["class", "row mb-4", 4, "ngIf"], [1, "mb-4"], ["xs", "12"], [1, "border-0", "shadow-sm"], [1, "bg-white", "border-0", "pt-4", "px-4", "pb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-3"], [1, "mb-0", "fw-bold"], [1, "bi", "bi-file-earmark-text", "me-2", "text-primary"], [1, "text-muted", "mb-0", "mt-1"], ["cButton", "", "color", "secondary", "variant", "outline", 3, "click"], [1, "bi", "bi-arrow-left", "me-1"], [1, "date-filter-card", "mb-4"], [1, "date-filter-accent"], [1, "date-filter-inner"], [1, "date-filter-title-wrap"], [1, "date-filter-icon-wrap"], [1, "bi", "bi-calendar3-range"], [1, "date-filter-title"], [1, "date-filter-subtitle"], [1, "date-filter-divider"], [1, "date-filter-controls"], [1, "date-filter-field"], [1, "date-filter-label"], [1, "bi", "bi-calendar2-check", "me-1"], [1, "date-filter-select-wrap"], [1, "date-filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", "ALL"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "CUSTOM"], [1, "bi", "bi-chevron-down", "date-filter-select-icon"], [1, "date-filter-field", "date-filter-custom-field"], [1, "bi", "bi-calendar-event", "me-1"], [1, "date-filter-input-wrap"], ["type", "date", 1, "date-filter-input", 3, "ngModelChange", "change", "ngModel"], [1, "bi", "bi-calendar-event-fill", "me-1"], [1, "date-filter-right"], ["class", "date-filter-badge-wrap", 4, "ngIf"], ["class", "date-filter-reset-btn", "title", "Reset to current financial year", 3, "click", 4, "ngIf"], ["class", "mb-4 g-3", 4, "ngIf"], ["class", "d-flex gap-2 mb-3 align-items-center flex-wrap", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-0", "shadow-lg", 2, "border-radius", "12px", "overflow", "hidden"], [1, "gradient-header"], [1, "row", "align-items-center"], [1, "col-12", "col-lg-3", "text-center", "text-lg-start", "mb-3", "mb-lg-0"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-start"], [1, "avatar-circle-large", "me-3"], [1, "text-white"], [1, "mb-1", "fw-bold", 2, "font-size", "1.5rem"], [1, "mb-0", 2, "opacity", "0.9", "font-size", "0.95rem"], [1, "bi", "bi-briefcase-fill", "me-1"], [1, "col-12", "col-lg-9"], [1, "row", "g-2"], [1, "col-12", "col-md-3"], [1, "info-card"], [1, "info-card-icon"], [1, "bi", "bi-building-fill"], [1, "info-card-content"], [1, "info-label"], [1, "info-value"], [1, "bi", "bi-envelope-fill"], [1, "bi", "bi-telephone-fill"], [1, "bi", "bi-geo-alt-fill"], [3, "value"], [1, "date-filter-badge-wrap"], [1, "date-filter-badge-icon"], [1, "bi", "bi-funnel-fill"], [1, "date-filter-badge-label"], [1, "date-filter-badge-value"], ["title", "Reset to current financial year", 1, "date-filter-reset-btn", 3, "click"], [1, "bi", "bi-arrow-counterclockwise", "me-1"], [1, "mb-4", "g-3"], ["xs", "12", "sm", "6", "lg", "3"], [1, "stat-card", 2, "cursor", "pointer", 3, "click"], [1, "stat-icon-wrap", "stat-purple"], [1, "bi", "bi-file-earmark-text"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon-wrap", "stat-pink"], [1, "bi", "bi-clock-history"], [1, "stat-icon-wrap", "stat-teal"], [1, "bi", "bi-check-circle"], [1, "stat-icon-wrap", "stat-orange-pink"], [1, "bi", "bi-pencil-square"], [1, "stat-icon-wrap", "stat-red"], [1, "bi", "bi-x-circle"], [1, "stat-icon-wrap", "stat-hold"], [1, "bi", "bi-pause-circle"], [1, "stat-icon-wrap", "stat-green"], [1, "bi", "bi-cash-coin"], [1, "stat-value", "stat-value-sm"], ["class", "text-muted fw-normal", "style", "font-size:0.7rem; display:block;", 4, "ngIf"], [2, "font-size", "0.8rem"], [1, "text-muted", "fw-normal", 2, "font-size", "0.7rem", "display", "block"], [1, "d-flex", "gap-2", "mb-3", "align-items-center", "flex-wrap"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "me-2", 3, "click"], [1, "bi", "bi-plus-circle", "me-1"], ["type", "button", 1, "btn", "btn-sm", 3, "click", "ngClass"], [1, "badge", "bg-light", "text-dark", "ms-1"], [1, "bi", "bi-file-earmark-text", "me-1"], [1, "bi", "bi-tools", "me-1"], [1, "text-center", "py-5"], ["color", "primary", 2, "width", "3rem", "height", "3rem"], [1, "mt-3", "text-muted"], [1, "p-0"], ["class", "table-responsive", 4, "ngIf"], [1, "bi", "bi-inbox", "display-1", "text-muted", "mb-3", "d-block", "opacity-25"], [1, "text-muted"], [1, "text-muted", "small"], ["cButton", "", "color", "primary", 3, "click"], [1, "table-responsive"], [1, "px-4", "pt-3", "pb-2", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold", "text-dark", "mb-0"], [1, "bi", "bi-table", "me-2", "text-primary"], ["class", "text-muted fw-normal", "style", "font-size: 0.85rem;", 4, "ngIf"], [1, "table", "po-table", "mb-0"], [1, "table-header"], [1, "text-center"], [1, "text-end"], [2, "font-size", "0.7rem", "font-weight", "400", "opacity", "0.8"], ["style", "opacity:0.7;", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "pagination-bar d-flex align-items-center justify-content-between flex-wrap gap-3 px-4 py-3", 4, "ngIf"], [1, "text-muted", "fw-normal", 2, "font-size", "0.85rem"], [2, "opacity", "0.7"], [1, "po-main-row", 2, "cursor", "pointer", 3, "click"], [1, "po-number-link", 3, "click"], ["class", "badge bg-warning text-dark ms-1", "style", "font-size:0.65rem;", 3, "title", 4, "ngIf"], [1, "text-muted", "small", "mt-1"], [1, "bi", "bi-calendar3", "me-1"], [1, "fw-semibold"], [1, "badge", "bg-light", "text-dark", "border"], [1, "badge", 3, "ngClass"], ["class", "badge bg-secondary ms-1", 4, "ngFor", "ngForOf"], ["class", "text-muted small mt-1", 4, "ngIf"], [1, "text-center", 3, "click"], ["title", "View Details", 1, "btn", "btn-sm", "btn-light", "text-info", "me-1", "shadow-sm", 3, "click"], [1, "bi", "bi-eye"], ["class", "btn btn-sm btn-light text-warning me-1 shadow-sm", "title", "Edit PO", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-light text-success me-1 shadow-sm", "title", "Release to Supplier", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-sm btn-light text-danger me-1 shadow-sm", "title", "Request Budget Increase", 3, "click", 4, "ngIf"], ["title", "Download Excel", 1, "btn", "btn-sm", "btn-light", "text-success", "me-1", "shadow-sm", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], ["class", "bi bi-file-earmark-excel", 4, "ngIf"], ["title", "Download PDF", 1, "btn", "btn-sm", "btn-light", "text-danger", "me-1", "shadow-sm", 3, "click", "disabled"], ["class", "bi bi-file-earmark-pdf", 4, "ngIf"], ["class", "btn btn-sm btn-light text-danger shadow-sm", "title", "Delete PO", 3, "disabled", "click", 4, "ngIf"], ["class", "remark-row", 4, "ngIf"], [1, "badge", "bg-warning", "text-dark", "ms-1", 2, "font-size", "0.65rem", 3, "title"], [1, "bi", "bi-tools"], [1, "fw-bold", "text-success", "fs-6"], [1, "fw-bold", "text-primary", "fs-6"], [1, "badge", "ms-1", 2, "font-size", "0.62rem", "background", "#dbeafe", "color", "#1d4ed8", "vertical-align", "middle"], [1, "mt-1", 2, "font-size", "0.78rem"], [1, "fw-semibold", 2, "color", "#16a34a"], [1, "text-muted", 2, "font-size", "0.7rem"], [1, "bi", "bi-hourglass-split", "me-1"], [1, "badge", "bg-secondary", "ms-1"], ["title", "Edit PO", 1, "btn", "btn-sm", "btn-light", "text-warning", "me-1", "shadow-sm", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Release to Supplier", 1, "btn", "btn-sm", "btn-light", "text-success", "me-1", "shadow-sm", 3, "click", "disabled"], ["class", "bi bi-box-arrow-up-right", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm"], [1, "bi", "bi-box-arrow-up-right"], ["title", "Request Budget Increase", 1, "btn", "btn-sm", "btn-light", "text-danger", "me-1", "shadow-sm", 3, "click"], [1, "bi", "bi-file-earmark-excel"], [1, "bi", "bi-file-earmark-pdf"], ["title", "Delete PO", 1, "btn", "btn-sm", "btn-light", "text-danger", "shadow-sm", 3, "click", "disabled"], ["class", "bi bi-trash", 4, "ngIf"], [1, "bi", "bi-trash"], [1, "remark-row"], ["colspan", "9", 1, "p-0", "border-0"], [3, "ngSwitch"], ["class", "remark-banner remark-rejected", 4, "ngSwitchCase"], ["class", "remark-banner remark-revision", 4, "ngSwitchCase"], ["class", "remark-banner remark-hold", 4, "ngSwitchCase"], ["class", "remark-banner remark-pending", 4, "ngSwitchCase"], [1, "remark-banner", "remark-rejected"], [1, "remark-icon"], [1, "bi", "bi-x-circle-fill"], [1, "remark-body"], [1, "remark-label"], [1, "remark-text"], [1, "remark-meta"], [1, "remark-banner", "remark-revision"], [1, "bi", "bi-arrow-return-left"], [1, "remark-banner", "remark-hold"], [1, "bi", "bi-pause-circle-fill"], [1, "remark-banner", "remark-pending"], [1, "bi", "bi-clock-fill"], ["class", "remark-meta", 4, "ngIf"], ["colspan", "9", 1, "text-center", "py-5"], [1, "bi", "bi-inbox", "display-6", "mb-3", "d-block", "opacity-25"], [1, "text-muted", "mb-0"], [1, "pagination-bar", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "px-4", "py-3"], [1, "d-flex", "align-items-center", "gap-3", "flex-wrap"], [1, "d-flex", "align-items-center", "gap-2"], [1, "text-muted", "small", "mb-0", "text-nowrap"], [1, "page-size-group"], ["class", "page-size-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "gap-1"], ["title", "First page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-left"], ["title", "Previous page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], ["title", "Next page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], ["title", "Last page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-right"], [1, "page-size-btn", 3, "click"], ["class", "page-ellipsis", 4, "ngIf"], ["class", "page-num-btn", 3, "active", "click", 4, "ngIf"], [1, "page-ellipsis"], [1, "page-num-btn", 3, "click"]], template: function POListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-container", 0);
    \u0275\u0275template(1, POListComponent_div_1_Template, 54, 8, "div", 1);
    \u0275\u0275elementStart(2, "c-row", 2)(3, "c-col", 3)(4, "c-card", 4)(5, "c-card-header", 5)(6, "div", 6)(7, "div")(8, "h3", 7);
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, "Purchase Orders ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 9);
    \u0275\u0275text(12, "View and manage all your purchase orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 10);
    \u0275\u0275listener("click", function POListComponent_Template_button_click_13_listener() {
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
    \u0275\u0275text(26, "Filter POs by creation date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(27, "div", 20);
    \u0275\u0275elementStart(28, "div", 21)(29, "div", 22)(30, "label", 23);
    \u0275\u0275element(31, "i", 24);
    \u0275\u0275text(32, "Financial Year / Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 25)(34, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function POListComponent_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedFYOption, $event) || (ctx.selectedFYOption = $event);
      return $event;
    });
    \u0275\u0275listener("change", function POListComponent_Template_select_change_34_listener() {
      return ctx.onFYOptionChange();
    });
    \u0275\u0275elementStart(35, "option", 27);
    \u0275\u0275text(36, "All Time");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, POListComponent_option_37_Template, 2, 2, "option", 28);
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
    \u0275\u0275twoWayListener("ngModelChange", function POListComponent_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.customFromDate, $event) || (ctx.customFromDate = $event);
      return $event;
    });
    \u0275\u0275listener("change", function POListComponent_Template_input_change_46_listener() {
      return ctx.applyFiltersAndPagination();
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 31)(48, "label", 23);
    \u0275\u0275element(49, "i", 35);
    \u0275\u0275text(50, "To Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 33)(52, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function POListComponent_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.customToDate, $event) || (ctx.customToDate = $event);
      return $event;
    });
    \u0275\u0275listener("change", function POListComponent_Template_input_change_52_listener() {
      return ctx.applyFiltersAndPagination();
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(53, "div", 20);
    \u0275\u0275elementStart(54, "div", 36);
    \u0275\u0275template(55, POListComponent_div_55_Template, 8, 1, "div", 37)(56, POListComponent_button_56_Template, 3, 0, "button", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(57, POListComponent_c_row_57_Template, 66, 9, "c-row", 39)(58, POListComponent_div_58_Template, 18, 6, "div", 40)(59, POListComponent_div_59_Template, 4, 0, "div", 41)(60, POListComponent_c_row_60_Template, 6, 2, "c-row", 42);
    \u0275\u0275elementEnd();
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
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
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
  TableModule,
  SpinnerComponent,
  DecimalPipe,
  TitleCasePipe
], styles: ["\n\n.date-filter-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.date-filter-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.10);\n}\n.date-filter-accent[_ngcontent-%COMP%] {\n  width: 5px;\n  background:\n    linear-gradient(\n      180deg,\n      #667eea 0%,\n      #764ba2 100%);\n  flex-shrink: 0;\n}\n.date-filter-inner[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  padding: 18px 24px;\n  flex-wrap: wrap;\n  gap: 0;\n}\n.date-filter-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  min-width: 160px;\n}\n.date-filter-icon-wrap[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-title[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.2;\n}\n.date-filter-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #8a8a9a;\n  margin-top: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  font-weight: 500;\n}\n.date-filter-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 44px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      #e2e5f0,\n      transparent);\n  margin: 0 24px;\n  flex-shrink: 0;\n  align-self: center;\n}\n.date-filter-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.date-filter-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 220px;\n}\n.date-filter-custom-field[_ngcontent-%COMP%] {\n  max-width: 0;\n  min-width: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition:\n    max-width 0.3s ease,\n    opacity 0.3s ease,\n    min-width 0.3s ease;\n  pointer-events: none;\n}\n.date-filter-custom-field.date-filter-field-visible[_ngcontent-%COMP%] {\n  max-width: 200px;\n  min-width: 160px;\n  opacity: 1;\n  pointer-events: all;\n}\n.date-filter-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 0;\n  white-space: nowrap;\n}\n.date-filter-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.date-filter-select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.date-filter-select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n  padding: 9px 36px 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-select[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-select[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-select-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.75rem;\n  color: #667eea;\n  pointer-events: none;\n}\n.date-filter-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.date-filter-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-input[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-input[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  margin-left: auto;\n  flex-wrap: wrap;\n}\n.date-filter-badge-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  border: 1.5px solid rgba(102, 126, 234, 0.2);\n  border-radius: 12px;\n  padding: 8px 14px 8px 10px;\n}\n.date-filter-badge-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-badge-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  line-height: 1;\n}\n.date-filter-badge-value[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #667eea;\n  margin-top: 3px;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n.date-filter-reset-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 9px 16px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #667eea;\n  background: #f0f2ff;\n  border: 1.5px solid #d0d5f5;\n  border-radius: 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.date-filter-reset-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n  transform: translateY(-1px);\n}\n.date-filter-reset-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n@media (max-width: 992px) {\n  .date-filter-inner[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 16px;\n    padding: 16px 18px;\n  }\n  .date-filter-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .date-filter-title-wrap[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-controls[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .date-filter-right[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 576px) {\n  .date-filter-field[_ngcontent-%COMP%], \n   .date-filter-custom-field.date-filter-field-visible[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-badge-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px 22px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  cursor: default;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.11);\n}\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: #ffffff;\n  flex-shrink: 0;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6c63ff,\n      #9b59b6);\n}\n.stat-pink[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f953c6,\n      #b91d73);\n}\n.stat-teal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #43cea2,\n      #185a9d);\n}\n.stat-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #56ab2f,\n      #a8e063);\n}\n.stat-orange-pink[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n}\n.stat-red[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff416c,\n      #ff4b2b);\n}\n.stat-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe,\n      #00f2fe);\n}\n.stat-hold[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f7971e,\n      #ffd200);\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1a2e;\n  line-height: 1.1;\n  letter-spacing: -0.5px;\n}\n.stat-value-sm[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 2px;\n}\n.gradient-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  padding: 10px;\n}\n.avatar-circle-large[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  color: white;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n}\n.info-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-card-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  font-size: 1.5rem;\n  color: white;\n}\n.info-card-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.9;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: white;\n  margin-top: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.po-table[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  border-collapse: collapse;\n}\n.table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #e8eaf6 !important;\n  color: #1a237e !important;\n  font-weight: 700;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 12px 14px;\n  border-bottom: 2px solid #c5cae9 !important;\n}\n.po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  vertical-align: middle;\n  border-bottom: none !important;\n  border-color: transparent;\n}\n.po-main-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f9ff !important;\n}\n.remark-row[_ngcontent-%COMP%]    + tr.po-main-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .po-main-row[_ngcontent-%COMP%]:not(:first-child)   td[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef !important;\n}\n.po-number-link[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1976d2;\n  cursor: pointer;\n  text-decoration: none;\n}\n.po-number-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.remark-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  border: none !important;\n}\n.remark-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 8px 16px 10px 20px;\n  margin: 0 0 1px 0;\n  font-size: 0.84rem;\n  line-height: 1.5;\n}\n.remark-rejected[_ngcontent-%COMP%] {\n  background-color: #fde8e8;\n  border-left: 4px solid #e53935;\n}\n.remark-rejected[_ngcontent-%COMP%]   .remark-icon[_ngcontent-%COMP%] {\n  color: #c62828;\n  font-size: 1rem;\n  padding-top: 2px;\n}\n.remark-rejected[_ngcontent-%COMP%]   .remark-label[_ngcontent-%COMP%] {\n  color: #c62828;\n  font-weight: 700;\n  margin-right: 6px;\n}\n.remark-revision[_ngcontent-%COMP%] {\n  background-color: #fffde7;\n  border-left: 4px solid #f9a825;\n}\n.remark-revision[_ngcontent-%COMP%]   .remark-icon[_ngcontent-%COMP%] {\n  color: #f57f17;\n  font-size: 1rem;\n  padding-top: 2px;\n}\n.remark-revision[_ngcontent-%COMP%]   .remark-label[_ngcontent-%COMP%] {\n  color: #f57f17;\n  font-weight: 700;\n  margin-right: 6px;\n}\n.remark-hold[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  border-left: 4px solid #ff6f00;\n}\n.remark-hold[_ngcontent-%COMP%]   .remark-icon[_ngcontent-%COMP%] {\n  color: #e65100;\n  font-size: 1rem;\n  padding-top: 2px;\n}\n.remark-hold[_ngcontent-%COMP%]   .remark-label[_ngcontent-%COMP%] {\n  color: #e65100;\n  font-weight: 700;\n  margin-right: 6px;\n}\n.remark-pending[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-left: 4px solid #1976d2;\n}\n.remark-pending[_ngcontent-%COMP%]   .remark-icon[_ngcontent-%COMP%] {\n  color: #1565c0;\n  font-size: 1rem;\n  padding-top: 2px;\n}\n.remark-pending[_ngcontent-%COMP%]   .remark-label[_ngcontent-%COMP%] {\n  color: #1565c0;\n  font-weight: 700;\n  margin-right: 6px;\n}\n.remark-text[_ngcontent-%COMP%] {\n  color: #333;\n}\n.remark-meta[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 0.78rem;\n  margin-left: 4px;\n}\n.remark-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n}\n.remark-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.35em 0.65em;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.8rem;\n  font-size: 0.85rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.btn-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n}\n.btn-light[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.display-1[_ngcontent-%COMP%] {\n  font-size: 5rem;\n}\n.opacity-25[_ngcontent-%COMP%] {\n  opacity: 0.25;\n}\n.pagination-bar[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef;\n  background: #fafbff;\n  border-radius: 0 0 12px 12px;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n}\n.page-size-group[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.page-size-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: none;\n  border-right: 1px solid #d0d5dd;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #555;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  line-height: 1;\n}\n.page-size-btn[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.page-size-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  color: #1976d2;\n}\n.page-size-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-weight: 700;\n}\n.page-num-btn[_ngcontent-%COMP%] {\n  min-width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #444;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  padding: 0 4px;\n}\n.page-num-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #1976d2;\n}\n.page-num-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border-color: #667eea;\n  color: #fff;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);\n}\n.page-nav-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #555;\n  font-size: 0.85rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.page-nav-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #667eea;\n}\n.page-nav-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.page-ellipsis[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  color: #aaa;\n  font-size: 0.9rem;\n  line-height: 34px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media (max-width: 768px) {\n  .avatar-circle-large[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    font-size: 1.5rem;\n  }\n  .info-card-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 1.2rem;\n  }\n  .info-label[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .pagination-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n  .page-size-btn[_ngcontent-%COMP%] {\n    padding: 5px 9px;\n  }\n}\n/*# sourceMappingURL=po-list.component.css.map */"] });
var POListComponent = _POListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(POListComponent, [{
    type: Component,
    args: [{ selector: "app-po-list", standalone: true, imports: [
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
      TableModule,
      SpinnerComponent
    ], template: `<!-- \r
<c-container fluid class="mt-4">\r
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
                  <h3 class="mb-1 fw-bold" style="font-size: 1.5rem;">{{ loggedInBuyer.contactPersonName }}</h3>\r
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
                    <div class="info-card-content">\r
                      <div class="info-label">Company Name</div>\r
                      <div class="info-value">{{ loggedInBuyer.companyName }}</div>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="col-12 col-md-3">\r
                  <div class="info-card">\r
                    <div class="info-card-icon"><i class="bi bi-envelope-fill"></i></div>\r
                    <div class="info-card-content">\r
                      <div class="info-label">Email</div>\r
                      <div class="info-value">{{ loggedInBuyer.email }}</div>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="col-12 col-md-3">\r
                  <div class="info-card">\r
                    <div class="info-card-icon"><i class="bi bi-telephone-fill"></i></div>\r
                    <div class="info-card-content">\r
                      <div class="info-label">Phone</div>\r
                      <div class="info-value">{{ loggedInBuyer.contactPersonPhone }}</div>\r
                    </div>\r
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
                <i class="bi bi-file-earmark-text me-2 text-primary"></i>Purchase Orders\r
              </h3>\r
              <p class="text-muted mb-0 mt-1">View and manage all your purchase orders</p>\r
              <span class="badge bg-primary mt-1" style="font-size:0.8rem;">\r
                <i class="bi bi-globe2 me-1"></i>{{ currencySymbol }} {{ currencyCode }}\r
              </span>\r
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
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='ALL'; applyStatusFilter()">\r
        <div class="stat-icon-wrap stat-purple"><i class="bi bi-file-earmark-text"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ purchaseOrders.length }}</div><div class="stat-label">Total POs</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='PENDING_APPROVAL'; applyStatusFilter()">\r
        <div class="stat-icon-wrap stat-pink"><i class="bi bi-clock-history"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ countByStatus('PENDING_APPROVAL') }}</div><div class="stat-label">Pending Approvals</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='APPROVED'; applyStatusFilter()">\r
        <div class="stat-icon-wrap stat-teal"><i class="bi bi-check-circle"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ countByStatus('APPROVED') }}</div><div class="stat-label">Approved POs</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='DRAFT'; applyStatusFilter()">\r
        <div class="stat-icon-wrap stat-orange-pink"><i class="bi bi-pencil-square"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ countByStatus('DRAFT') }}</div><div class="stat-label">Draft</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='REJECTED'; applyStatusFilter()">\r
        <div class="stat-icon-wrap stat-red"><i class="bi bi-x-circle"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ countByStatus('REJECTED') }}</div><div class="stat-label">Rejected</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='HOLD'; applyStatusFilter()">\r
        <div class="stat-icon-wrap stat-hold"><i class="bi bi-pause-circle"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ holdCount }}</div><div class="stat-label">On HOLD</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='ALL'; applyStatusFilter()">\r
        <div class="stat-icon-wrap stat-green"><i class="bi bi-cash-coin"></i></div>\r
        <div class="stat-info">\r
<div class="stat-value stat-value-sm">\r
  <ng-container *ngIf="exchangeRatesLoaded || !hasCrossBorderPOs()">\r
    {{ currencySymbol }}{{ getTotalValueInLocalCurrency() | number:'1.0-0' }}\r
  </ng-container>\r
  <ng-container *ngIf="!exchangeRatesLoaded && hasCrossBorderPOs()">\r
    <span style="font-size:0.8rem;">Loading...</span>\r
  </ng-container>\r
</div>\r
          <div class="stat-label">Total Value</div>\r
        </div>\r
      </div>\r
    </c-col>\r
  </c-row>\r
\r
  <div *ngIf="isLoading" class="text-center py-5">\r
    <c-spinner color="primary" style="width:3rem;height:3rem;"></c-spinner>\r
    <p class="mt-3 text-muted">Loading purchase orders...</p>\r
  </div>\r
\r
  <c-row *ngIf="!isLoading">\r
    <c-col xs="12">\r
      <c-card class="border-0 shadow-sm">\r
        <c-card-body class="p-0">\r
\r
          <div *ngIf="purchaseOrders.length === 0" class="text-center py-5">\r
            <i class="bi bi-inbox display-1 text-muted mb-3 d-block opacity-25"></i>\r
            <h5 class="text-muted">No Purchase Orders Found</h5>\r
            <p class="text-muted small">Create your first purchase order to get started</p>\r
            <button cButton color="primary" (click)="createPO()">\r
              <i class="bi bi-plus-circle me-1"></i> Create PO\r
            </button>\r
          </div>\r
\r
          <div class="table-responsive" *ngIf="purchaseOrders.length > 0">\r
            <table class="table po-table mb-0">\r
              <thead class="table-header">\r
                <tr>\r
                  <th>PO Number / Details</th>\r
                  <th>PO Date</th>\r
                  <th>RFQ Reference</th>\r
                  <th>Supplier</th>\r
                  <th class="text-center">Items</th>\r
               \r
                  <th class="text-end">\r
                    Grand Total\r
                    <div style="font-size:0.7rem; font-weight:400; opacity:0.8;">\r
                      {{ currencySymbol }} {{ currencyCode }}\r
                      <span *ngIf="exchangeRatesLoaded" style="opacity:0.7;">\xB7 cross-border shows original + ({{ currencyCode }})</span>\r
                    </div>\r
                  </th>\r
                  <th class="text-center">Status</th>\r
                  <th class="text-center">Payment</th>\r
                  <th class="text-center">Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <ng-container *ngFor="let po of paginatedOrders">\r
                  <tr class="po-main-row" (click)="viewPO(po.id)" style="cursor:pointer;">\r
                    <td>\r
                      <a class="po-number-link" (click)="$event.stopPropagation(); viewPO(po.id)">\r
                        <i class="bi bi-file-earmark-text me-1"></i>{{ po.poNumber }}\r
                      </a>\r
                      <span *ngIf="po.sourceSesId" class="badge bg-warning text-dark ms-1" style="font-size:0.65rem;"\r
                            [title]="'Follow-up PO from Service Entry Sheet ' + po.sourceSesNumber">\r
                        <i class="bi bi-tools"></i> Service\r
                      </span>\r
                      <div class="text-muted small mt-1">Created {{ formatDate(po.createdAt) }}</div>\r
                    </td>\r
                    <td>\r
                      <small class="text-muted"><i class="bi bi-calendar3 me-1"></i>{{ formatDate(po.poDate) }}</small>\r
                    </td>\r
                    <td>\r
                      <div class="fw-semibold text-dark">{{ po.rfqNumber || 'N/A' }}</div>\r
                      <small class="text-muted">{{ po.rfqTitle || '' }}</small>\r
                    </td>\r
                    <td>\r
                      <div class="fw-semibold">{{ po.supplierName || 'N/A' }}</div>\r
                      <small class="text-muted">{{ po.supplierContactEmail || '' }}</small>\r
                    </td>\r
                    <td class="text-center">\r
                      <span class="badge bg-light text-dark border">{{ po.lineItems?.length || 0 }}</span>\r
                    </td>\r
\r
                    <td class="text-end">\r
\r
                      <ng-container *ngIf="!isCrossBorderPO(po)">\r
                        <div class="fw-bold text-success fs-6">\r
                          {{ formatCurrencyAmount(po.grandTotal) }}\r
                        </div>\r
                      </ng-container>\r
                      <ng-container *ngIf="isCrossBorderPO(po)">\r
                     \r
                        <div class="fw-bold text-primary fs-6">\r
                          {{ formatInCurrency(po.grandTotal, po.currencyCode) }}\r
                         \r
                          <span class="badge ms-1"\r
                                style="font-size:0.62rem; background:#dbeafe; color:#1d4ed8; vertical-align:middle;">\r
                            {{ po.currencyCode }}\r
                          </span>\r
                        </div>\r
                        \r
                        <div class="mt-1" style="font-size:0.78rem;">\r
                          <ng-container *ngIf="exchangeRatesLoaded">\r
                            <span class="fw-semibold" style="color:#16a34a;">\r
                                 {{ formatInCurrency(po.grandTotal, po.currencyCode) }}\r
                              ({{ getConvertedDisplay(po) }})\r
                            </span>\r
                          </ng-container>\r
                          <ng-container *ngIf="!exchangeRatesLoaded">\r
                            <span class="text-muted" style="font-size:0.7rem;">\r
                              <i class="bi bi-hourglass-split me-1"></i>Converting...\r
                            </span>\r
                          </ng-container>\r
                        </div>\r
                      </ng-container>\r
\r
                    </td>\r
\r
                    <td class="text-center">\r
                      <span class="badge" [ngClass]="getStatusBadgeClass(po.status)">{{ po.status | titlecase }}</span>\r
                      <span class="badge bg-secondary ms-1" *ngFor="let label of poTypeLabels(po.poType)">{{ label }}</span>\r
                    </td>\r
                    <td class="text-center">\r
                      <span class="badge" [ngClass]="paymentBadgeClass(po.paymentStatus)">\r
                        {{ paymentStatusLabel(po.paymentStatus) }}\r
                      </span>\r
                      <div class="text-muted small mt-1" *ngIf="po.totalPaidAmount > 0">\r
                        {{ po.currencySymbol }}{{ po.totalPaidAmount | number:'1.0-0' }} paid\r
                      </div>\r
                    </td>\r
                    <td class="text-center" (click)="$event.stopPropagation()">\r
                      <button class="btn btn-sm btn-light text-info me-1 shadow-sm"\r
                              (click)="viewPO(po.id)" title="View Details">\r
                        <i class="bi bi-eye"></i>\r
                      </button>\r
                      <button *ngIf="canEdit(po)"\r
                              class="btn btn-sm btn-light text-warning me-1 shadow-sm"\r
                              (click)="editPO(po)" title="Edit PO">\r
                        <i class="bi bi-pencil"></i>\r
                      </button>\r
                      <button *ngIf="po.status === 'DRAFT'"\r
                              class="btn btn-sm btn-light text-primary me-1 shadow-sm"\r
                              (click)="submitForApproval(po)" title="Submit for Approval">\r
                        <i class="bi bi-send"></i>\r
                      </button>\r
                      <button *ngIf="canRelease(po)"\r
                              class="btn btn-sm btn-light text-success me-1 shadow-sm"\r
                              (click)="releasePO(po)" [disabled]="releasingId === po.id"\r
                              title="Release to Supplier">\r
                        <span *ngIf="releasingId === po.id" class="spinner-border spinner-border-sm"></span>\r
                        <i *ngIf="releasingId !== po.id" class="bi bi-box-arrow-up-right"></i>\r
                      </button>\r
                      <button *ngIf="canRequestBudgetIncrease(po)"\r
                              class="btn btn-sm btn-light text-danger me-1 shadow-sm"\r
                              (click)="requestBudgetIncrease(po)" title="Request Budget Increase">\r
                        <i class="bi bi-cash-coin"></i>\r
                      </button>\r
                      <button class="btn btn-sm btn-light text-success me-1 shadow-sm"\r
                              (click)="downloadPOExcel(po)" [disabled]="downloadingExcelId === po.id" title="Download Excel">\r
                        <span *ngIf="downloadingExcelId === po.id" class="spinner-border spinner-border-sm"></span>\r
                        <i *ngIf="downloadingExcelId !== po.id" class="bi bi-file-earmark-excel"></i>\r
                      </button>\r
                      <button class="btn btn-sm btn-light text-danger me-1 shadow-sm"\r
                              (click)="downloadPOPdf(po)" [disabled]="downloadingPdfId === po.id" title="Download PDF">\r
                        <span *ngIf="downloadingPdfId === po.id" class="spinner-border spinner-border-sm"></span>\r
                        <i *ngIf="downloadingPdfId !== po.id" class="bi bi-file-earmark-pdf"></i>\r
                      </button>\r
                      <button class="btn btn-sm btn-light text-primary me-1 shadow-sm"\r
                              (click)="downloadPOCxml(po)" [disabled]="downloadingXmlId === po.id" title="Download cXML">\r
                        <span *ngIf="downloadingXmlId === po.id" class="spinner-border spinner-border-sm"></span>\r
                        <i *ngIf="downloadingXmlId !== po.id" class="bi bi-filetype-xml"></i>\r
                      </button>\r
                      <button *ngIf="po.status === 'DRAFT'"\r
                              class="btn btn-sm btn-light text-danger shadow-sm"\r
                              (click)="deletePO(po)"\r
                              [disabled]="deletingId === po.id"\r
                              title="Delete PO">\r
                        <span *ngIf="deletingId === po.id" class="spinner-border spinner-border-sm"></span>\r
                        <i *ngIf="deletingId !== po.id" class="bi bi-trash"></i>\r
                      </button>\r
                    </td>\r
                  </tr>\r
\r
                  \r
                  <tr *ngIf="hasRemark(po)" class="remark-row">\r
                    <td colspan="9" class="p-0 border-0">\r
                      <ng-container [ngSwitch]="getApprovalRemark(po.id)?.type">\r
                        <div *ngSwitchCase="'rejected'" class="remark-banner remark-rejected">\r
                          <div class="remark-icon"><i class="bi bi-x-circle-fill"></i></div>\r
                          <div class="remark-body">\r
                            <span class="remark-label">Rejected:</span>\r
                            <span class="remark-text">{{ getApprovalRemark(po.id)?.remarks || 'No remarks provided' }}</span>\r
                            <span class="remark-meta">By <strong>{{ getApprovalRemark(po.id)?.byName }}</strong><span *ngIf="getApprovalRemark(po.id)?.byLevel"> ({{ getApprovalRemark(po.id)?.byLevel }})</span> on {{ formatDateTime(getApprovalRemark(po.id)?.date) }}</span>\r
                          </div>\r
                        </div>\r
                        <div *ngSwitchCase="'revision'" class="remark-banner remark-revision">\r
                          <div class="remark-icon"><i class="bi bi-arrow-return-left"></i></div>\r
                          <div class="remark-body">\r
                            <span class="remark-label">Revision needed:</span>\r
                            <span class="remark-text">{{ getApprovalRemark(po.id)?.remarks || 'No remarks provided' }}</span>\r
                            <span class="remark-meta">By <strong>{{ getApprovalRemark(po.id)?.byName }}</strong><span *ngIf="getApprovalRemark(po.id)?.byLevel"> ({{ getApprovalRemark(po.id)?.byLevel }})</span> on {{ formatDateTime(getApprovalRemark(po.id)?.date) }}</span>\r
                          </div>\r
                        </div>\r
                        <div *ngSwitchCase="'hold'" class="remark-banner remark-hold">\r
                          <div class="remark-icon"><i class="bi bi-pause-circle-fill"></i></div>\r
                          <div class="remark-body">\r
                            <span class="remark-label">On Hold:</span>\r
                            <span class="remark-text">{{ getApprovalRemark(po.id)?.remarks || 'No remarks provided' }}</span>\r
                            <span class="remark-meta">By <strong>{{ getApprovalRemark(po.id)?.byName }}</strong><span *ngIf="getApprovalRemark(po.id)?.byLevel"> ({{ getApprovalRemark(po.id)?.byLevel }})</span> on {{ formatDateTime(getApprovalRemark(po.id)?.date) }}</span>\r
                          </div>\r
                        </div>\r
                        <div *ngSwitchCase="'pending'" class="remark-banner remark-pending">\r
                          <div class="remark-icon"><i class="bi bi-clock-fill"></i></div>\r
                          <div class="remark-body">\r
                            <span class="remark-label">Pending Approval at:</span>\r
                            <span class="remark-text">{{ getApprovalRemark(po.id)?.byLevel || 'Current Level' }}</span>\r
                            <span class="remark-meta" *ngIf="getApprovalRemark(po.id)?.byName">Assigned to <strong>{{ getApprovalRemark(po.id)?.byName }}</strong></span>\r
                          </div>\r
                        </div>\r
                      </ng-container>\r
                    </td>\r
                  </tr>\r
                </ng-container>\r
              </tbody>\r
            </table>\r
\r
           \r
            <div class="pagination-bar d-flex align-items-center justify-content-between flex-wrap gap-3 px-4 py-3">\r
              <div class="d-flex align-items-center gap-3 flex-wrap">\r
                <span class="pagination-info text-muted small">\r
                  Showing <strong>{{ startIndex }}\u2013{{ endIndex }}</strong> of <strong>{{ purchaseOrders.length }}</strong> orders\r
                </span>\r
                <div class="d-flex align-items-center gap-2">\r
                  <label class="text-muted small mb-0 text-nowrap">Rows per page:</label>\r
                  <div class="page-size-group">\r
                    <button *ngFor="let size of pageSizeOptions" class="page-size-btn"\r
                            [class.active]="pageSize === size" (click)="onPageSizeChange(size)">\r
                      {{ size }}\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="d-flex align-items-center gap-1">\r
                <button class="page-nav-btn" [disabled]="currentPage === 1" (click)="goToPage(1)" title="First page">\r
                  <i class="bi bi-chevron-double-left"></i>\r
                </button>\r
                <button class="page-nav-btn" [disabled]="currentPage === 1" (click)="goToPage(currentPage - 1)" title="Previous page">\r
                  <i class="bi bi-chevron-left"></i>\r
                </button>\r
                <ng-container *ngFor="let page of pageNumbers">\r
                  <span *ngIf="page === -1" class="page-ellipsis">\u2026</span>\r
                  <button *ngIf="page !== -1" class="page-num-btn" [class.active]="currentPage === page" (click)="goToPage(page)">\r
                    {{ page }}\r
                  </button>\r
                </ng-container>\r
                <button class="page-nav-btn" [disabled]="currentPage === totalPages" (click)="goToPage(currentPage + 1)" title="Next page">\r
                  <i class="bi bi-chevron-right"></i>\r
                </button>\r
                <button class="page-nav-btn" [disabled]="currentPage === totalPages" (click)="goToPage(totalPages)" title="Last page">\r
                  <i class="bi bi-chevron-double-right"></i>\r
                </button>\r
              </div>\r
            </div>\r
            \r
\r
          </div>\r
        </c-card-body>\r
      </c-card>\r
    </c-col>\r
  </c-row>\r
\r
</c-container> -->\r
\r
<c-container fluid class="mt-4">\r
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
                  <h3 class="mb-1 fw-bold" style="font-size: 1.5rem;">{{ loggedInBuyer.contactPersonName }}</h3>\r
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
                <i class="bi bi-file-earmark-text me-2 text-primary"></i>Purchase Orders\r
              </h3>\r
              <p class="text-muted mb-0 mt-1">View and manage all your purchase orders</p>\r
              <!-- <span class="badge bg-primary mt-1" style="font-size:0.8rem;">\r
                <i class="bi bi-globe2 me-1"></i>{{ currencySymbol }} {{ currencyCode }}\r
              </span> -->\r
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
          <div class="date-filter-subtitle">Filter POs by creation date</div>\r
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
                   [(ngModel)]="customFromDate" (change)="applyFiltersAndPagination()" />\r
          </div>\r
        </div>\r
\r
        <div class="date-filter-field date-filter-custom-field"\r
             [class.date-filter-field-visible]="selectedFYOption === 'CUSTOM'">\r
          <label class="date-filter-label"><i class="bi bi-calendar-event-fill me-1"></i>To Date</label>\r
          <div class="date-filter-input-wrap">\r
            <input type="date" class="date-filter-input"\r
                   [(ngModel)]="customToDate" (change)="applyFiltersAndPagination()" />\r
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
  <!-- ===== STAT CARDS ===== -->\r
  <c-row class="mb-4 g-3" *ngIf="!isLoading">\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='ALL'; applyStatusFilter()">\r
        <div class="stat-icon-wrap stat-purple"><i class="bi bi-file-earmark-text"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ dateFilteredOrders.length }}</div><div class="stat-label">Total POs</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='PENDING_APPROVAL'; applyStatusFilter()">\r
        <div class="stat-icon-wrap stat-pink"><i class="bi bi-clock-history"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ countByStatus('PENDING_APPROVAL') }}</div><div class="stat-label">Pending Approvals</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='APPROVED'; applyStatusFilter()">\r
        <div class="stat-icon-wrap stat-teal"><i class="bi bi-check-circle"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ countByStatus('APPROVED') }}</div><div class="stat-label">Approved POs</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='DRAFT'; applyStatusFilter()">\r
        <div class="stat-icon-wrap stat-orange-pink"><i class="bi bi-pencil-square"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ countByStatus('DRAFT') }}</div><div class="stat-label">Draft</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='REJECTED'; applyStatusFilter()">\r
        <div class="stat-icon-wrap stat-red"><i class="bi bi-x-circle"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ countByStatus('REJECTED') }}</div><div class="stat-label">Rejected</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='HOLD'; applyStatusFilter()">\r
        <div class="stat-icon-wrap stat-hold"><i class="bi bi-pause-circle"></i></div>\r
        <div class="stat-info"><div class="stat-value">{{ dateFilteredHoldCount }}</div><div class="stat-label">On HOLD</div></div>\r
      </div>\r
    </c-col>\r
    <c-col xs="12" sm="6" lg="3">\r
      <div class="stat-card" style="cursor:pointer;" (click)="statusFilter='ALL'; applyStatusFilter()">\r
        <div class="stat-icon-wrap stat-green"><i class="bi bi-cash-coin"></i></div>\r
        <div class="stat-info">\r
          <div class="stat-value stat-value-sm">\r
            <ng-container *ngIf="exchangeRatesLoaded || !hasCrossBorderPOs()">\r
              {{ getTotalValueInLocalCurrency() | number:'1.0-0' }}\r
            </ng-container>\r
            <ng-container *ngIf="!exchangeRatesLoaded && hasCrossBorderPOs()">\r
              <span style="font-size:0.8rem;">Loading...</span>\r
            </ng-container>\r
          </div>\r
          <div class="stat-label">Total Value\r
            <span *ngIf="activeDateRangeLabel && activeDateRangeLabel !== 'All Time'"\r
                  class="text-muted fw-normal" style="font-size:0.7rem; display:block;">\r
              {{ activeDateRangeLabel }}\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
    </c-col>\r
  </c-row>\r
\r
  <!-- ===== SERVICE vs REGULAR TABS ===== -->\r
  <!-- "Service" = follow-up POs auto-created from an approved Service Entry Sheet's\r
       additional-items (spares) quote. "Regular" = everything else, exactly as before. -->\r
  <div class="d-flex gap-2 mb-3 align-items-center flex-wrap" *ngIf="!isLoading">\r
    <!-- POs are created by hand in this application, so the primary action lives here\r
         rather than behind a quote-comparison flow. -->\r
    <button type="button" class="btn btn-sm btn-primary me-2" (click)="createPO()">\r
      <i class="bi bi-plus-circle me-1"></i>Create PO\r
    </button>\r
    <button type="button" class="btn btn-sm" [ngClass]="originFilter==='ALL' ? 'btn-dark' : 'btn-outline-secondary'"\r
            (click)="setOriginFilter('ALL')">\r
      All <span class="badge bg-light text-dark ms-1">{{ dateFilteredOrders.length }}</span>\r
    </button>\r
    <button type="button" class="btn btn-sm" [ngClass]="originFilter==='REGULAR' ? 'btn-dark' : 'btn-outline-secondary'"\r
            (click)="setOriginFilter('REGULAR')">\r
      <i class="bi bi-file-earmark-text me-1"></i>Regular <span class="badge bg-light text-dark ms-1">{{ regularOriginCount }}</span>\r
    </button>\r
    <button type="button" class="btn btn-sm" [ngClass]="originFilter==='SERVICE' ? 'btn-warning' : 'btn-outline-warning'"\r
            (click)="setOriginFilter('SERVICE')">\r
      <i class="bi bi-tools me-1"></i>Service (Spares) <span class="badge bg-light text-dark ms-1">{{ serviceOriginCount }}</span>\r
    </button>\r
  </div>\r
\r
  <!-- ===== LOADING ===== -->\r
  <div *ngIf="isLoading" class="text-center py-5">\r
    <c-spinner color="primary" style="width:3rem;height:3rem;"></c-spinner>\r
    <p class="mt-3 text-muted">Loading purchase orders...</p>\r
  </div>\r
\r
  <!-- ===== PO TABLE ===== -->\r
  <c-row *ngIf="!isLoading">\r
    <c-col xs="12">\r
      <c-card class="border-0 shadow-sm">\r
        <c-card-body class="p-0">\r
\r
          <div *ngIf="purchaseOrders.length === 0" class="text-center py-5">\r
            <i class="bi bi-inbox display-1 text-muted mb-3 d-block opacity-25"></i>\r
            <h5 class="text-muted">No Purchase Orders Found</h5>\r
            <p class="text-muted small">Create your first purchase order to get started</p>\r
            <button cButton color="primary" (click)="createPO()">\r
              <i class="bi bi-plus-circle me-1"></i> Create PO\r
            </button>\r
          </div>\r
\r
          <div class="table-responsive" *ngIf="purchaseOrders.length > 0">\r
\r
            <!-- Table header with result count -->\r
            <div class="px-4 pt-3 pb-2 d-flex align-items-center justify-content-between">\r
              <h5 class="fw-bold text-dark mb-0">\r
                <i class="bi bi-table me-2 text-primary"></i>All Purchase Orders\r
                <span *ngIf="activeDateRangeLabel" class="text-muted fw-normal" style="font-size: 0.85rem;">\r
                  \u2014 {{ activeDateRangeLabel }}\r
                </span>\r
              </h5>\r
              <small class="text-muted">\r
                {{ filteredOrders.length }} result{{ filteredOrders.length !== 1 ? 's' : '' }}\r
              </small>\r
            </div>\r
\r
            <table class="table po-table mb-0">\r
              <thead class="table-header">\r
                <tr>\r
                  <th>PO Number / Details</th>\r
                  <th>PO Date</th>\r
                  <!-- <th>RFQ Reference</th> -->\r
                  <th>Supplier</th>\r
                  <th class="text-center">Items</th>\r
                  <th class="text-end">\r
                    Grand Total\r
                    <div style="font-size:0.7rem; font-weight:400; opacity:0.8;">\r
                     {{ currencyCode }}\r
                      <span *ngIf="exchangeRatesLoaded" style="opacity:0.7;">\xB7 cross-border shows original + ({{ currencyCode }})</span>\r
                    </div>\r
                  </th>\r
                  <th class="text-center">Status</th>\r
                  <th class="text-center">Payment</th>\r
                  <th class="text-center">Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <ng-container *ngFor="let po of paginatedOrders">\r
                  <tr class="po-main-row" (click)="viewPO(po.id)" style="cursor:pointer;">\r
                    <td>\r
                      <a class="po-number-link" (click)="$event.stopPropagation(); viewPO(po.id)">\r
                        <i class="bi bi-file-earmark-text me-1"></i>{{ po.poNumber }}\r
                      </a>\r
                      <span *ngIf="po.sourceSesId" class="badge bg-warning text-dark ms-1" style="font-size:0.65rem;"\r
                            [title]="'Follow-up PO from Service Entry Sheet ' + po.sourceSesNumber">\r
                        <i class="bi bi-tools"></i> Service\r
                      </span>\r
                      <div class="text-muted small mt-1">Created {{ formatDate(po.createdAt) }}</div>\r
                    </td>\r
                    <td>\r
                      <small class="text-muted"><i class="bi bi-calendar3 me-1"></i>{{ formatDate(po.poDate) }}</small>\r
                    </td>\r
                    <!-- <td>\r
                      <div class="fw-semibold text-dark">{{ po.rfqNumber || 'N/A' }}</div>\r
                      <small class="text-muted">{{ po.rfqTitle || '' }}</small>\r
                    </td> -->\r
                    <td>\r
                      <div class="fw-semibold">{{ po.supplierName || 'N/A' }}</div>\r
                      <small class="text-muted">{{ po.supplierContactEmail || '' }}</small>\r
                    </td>\r
                    <td class="text-center">\r
                      <span class="badge bg-light text-dark border">{{ po.lineItems?.length || 0 }}</span>\r
                    </td>\r
\r
                    <td class="text-end">\r
                      <ng-container *ngIf="!isCrossBorderPO(po)">\r
                        <div class="fw-bold text-success fs-6">\r
                          {{ formatCurrencyAmount(po.grandTotal) }}\r
                        </div>\r
                      </ng-container>\r
                      <ng-container *ngIf="isCrossBorderPO(po)">\r
                        <div class="fw-bold text-primary fs-6">\r
                          {{ formatInCurrency(po.grandTotal, po.currencyCode) }}\r
                          <span class="badge ms-1"\r
                                style="font-size:0.62rem; background:#dbeafe; color:#1d4ed8; vertical-align:middle;">\r
                            {{ po.currencyCode }}\r
                          </span>\r
                        </div>\r
                        <div class="mt-1" style="font-size:0.78rem;">\r
                          <ng-container *ngIf="exchangeRatesLoaded">\r
                            <span class="fw-semibold" style="color:#16a34a;">\r
                              {{ formatInCurrency(po.grandTotal, po.currencyCode) }}\r
                              ({{ getConvertedDisplay(po) }})\r
                            </span>\r
                          </ng-container>\r
                          <ng-container *ngIf="!exchangeRatesLoaded">\r
                            <span class="text-muted" style="font-size:0.7rem;">\r
                              <i class="bi bi-hourglass-split me-1"></i>Converting...\r
                            </span>\r
                          </ng-container>\r
                        </div>\r
                      </ng-container>\r
                    </td>\r
\r
                    <td class="text-center">\r
                      <span class="badge" [ngClass]="getStatusBadgeClass(po.status)">{{ po.status | titlecase }}</span>\r
                      <span class="badge bg-secondary ms-1" *ngFor="let label of poTypeLabels(po.poType)">{{ label }}</span>\r
                    </td>\r
                    <!-- Payment status is rolled up onto the PO by the server whenever an\r
                         invoice is paid, so this needs no per-row invoice lookup. -->\r
                    <td class="text-center">\r
                      <span class="badge" [ngClass]="paymentBadgeClass(po.paymentStatus)">\r
                        {{ paymentStatusLabel(po.paymentStatus) }}\r
                      </span>\r
                      <div class="text-muted small mt-1" *ngIf="po.totalPaidAmount > 0">\r
                        {{ po.currencySymbol }}{{ po.totalPaidAmount | number:'1.0-0' }} paid\r
                      </div>\r
                    </td>\r
                    <td class="text-center" (click)="$event.stopPropagation()">\r
                      <button class="btn btn-sm btn-light text-info me-1 shadow-sm"\r
                              (click)="viewPO(po.id)" title="View Details">\r
                        <i class="bi bi-eye"></i>\r
                      </button>\r
                      <button *ngIf="canEdit(po)"\r
                              class="btn btn-sm btn-light text-warning me-1 shadow-sm"\r
                              (click)="editPO(po)" title="Edit PO">\r
                        <i class="bi bi-pencil"></i>\r
                      </button>\r
                      <!-- No approval step: a DRAFT PO releases straight to the supplier.\r
                           Release is what makes it visible to them. -->\r
                      <button *ngIf="canRelease(po)"\r
                              class="btn btn-sm btn-light text-success me-1 shadow-sm"\r
                              (click)="releasePO(po)" [disabled]="releasingId === po.id"\r
                              title="Release to Supplier">\r
                        <span *ngIf="releasingId === po.id" class="spinner-border spinner-border-sm"></span>\r
                        <i *ngIf="releasingId !== po.id" class="bi bi-box-arrow-up-right"></i>\r
                      </button>\r
                      <button *ngIf="canRequestBudgetIncrease(po)"\r
                              class="btn btn-sm btn-light text-danger me-1 shadow-sm"\r
                              (click)="requestBudgetIncrease(po)" title="Request Budget Increase">\r
                        <i class="bi bi-cash-coin"></i>\r
                      </button>\r
                      <button class="btn btn-sm btn-light text-success me-1 shadow-sm"\r
                              (click)="downloadPOExcel(po)" [disabled]="downloadingExcelId === po.id" title="Download Excel">\r
                        <span *ngIf="downloadingExcelId === po.id" class="spinner-border spinner-border-sm"></span>\r
                        <i *ngIf="downloadingExcelId !== po.id" class="bi bi-file-earmark-excel"></i>\r
                      </button>\r
                      <button class="btn btn-sm btn-light text-danger me-1 shadow-sm"\r
                              (click)="downloadPOPdf(po)" [disabled]="downloadingPdfId === po.id" title="Download PDF">\r
                        <span *ngIf="downloadingPdfId === po.id" class="spinner-border spinner-border-sm"></span>\r
                        <i *ngIf="downloadingPdfId !== po.id" class="bi bi-file-earmark-pdf"></i>\r
                      </button>\r
                      <!-- <button class="btn btn-sm btn-light text-primary me-1 shadow-sm"\r
                              (click)="downloadPOCxml(po)" [disabled]="downloadingXmlId === po.id" title="Download cXML">\r
                        <span *ngIf="downloadingXmlId === po.id" class="spinner-border spinner-border-sm"></span>\r
                        <i *ngIf="downloadingXmlId !== po.id" class="bi bi-filetype-xml"></i>\r
                      </button> -->\r
                      <button *ngIf="po.status === 'DRAFT'"\r
                              class="btn btn-sm btn-light text-danger shadow-sm"\r
                              (click)="deletePO(po)"\r
                              [disabled]="deletingId === po.id"\r
                              title="Delete PO">\r
                        <span *ngIf="deletingId === po.id" class="spinner-border spinner-border-sm"></span>\r
                        <i *ngIf="deletingId !== po.id" class="bi bi-trash"></i>\r
                      </button>\r
                    </td>\r
                  </tr>\r
\r
                  <!-- Approval Remark Row -->\r
                  <tr *ngIf="hasRemark(po)" class="remark-row">\r
                    <td colspan="9" class="p-0 border-0">\r
                      <ng-container [ngSwitch]="getApprovalRemark(po.id)?.type">\r
                        <div *ngSwitchCase="'rejected'" class="remark-banner remark-rejected">\r
                          <div class="remark-icon"><i class="bi bi-x-circle-fill"></i></div>\r
                          <div class="remark-body">\r
                            <span class="remark-label">Rejected:</span>\r
                            <span class="remark-text">{{ getApprovalRemark(po.id)?.remarks || 'No remarks provided' }}</span>\r
                            <span class="remark-meta">By <strong>{{ getApprovalRemark(po.id)?.byName }}</strong><span *ngIf="getApprovalRemark(po.id)?.byLevel"> ({{ getApprovalRemark(po.id)?.byLevel }})</span> on {{ formatDateTime(getApprovalRemark(po.id)?.date) }}</span>\r
                          </div>\r
                        </div>\r
                        <div *ngSwitchCase="'revision'" class="remark-banner remark-revision">\r
                          <div class="remark-icon"><i class="bi bi-arrow-return-left"></i></div>\r
                          <div class="remark-body">\r
                            <span class="remark-label">Revision needed:</span>\r
                            <span class="remark-text">{{ getApprovalRemark(po.id)?.remarks || 'No remarks provided' }}</span>\r
                            <span class="remark-meta">By <strong>{{ getApprovalRemark(po.id)?.byName }}</strong><span *ngIf="getApprovalRemark(po.id)?.byLevel"> ({{ getApprovalRemark(po.id)?.byLevel }})</span> on {{ formatDateTime(getApprovalRemark(po.id)?.date) }}</span>\r
                          </div>\r
                        </div>\r
                        <div *ngSwitchCase="'hold'" class="remark-banner remark-hold">\r
                          <div class="remark-icon"><i class="bi bi-pause-circle-fill"></i></div>\r
                          <div class="remark-body">\r
                            <span class="remark-label">On Hold:</span>\r
                            <span class="remark-text">{{ getApprovalRemark(po.id)?.remarks || 'No remarks provided' }}</span>\r
                            <span class="remark-meta">By <strong>{{ getApprovalRemark(po.id)?.byName }}</strong><span *ngIf="getApprovalRemark(po.id)?.byLevel"> ({{ getApprovalRemark(po.id)?.byLevel }})</span> on {{ formatDateTime(getApprovalRemark(po.id)?.date) }}</span>\r
                          </div>\r
                        </div>\r
                        <div *ngSwitchCase="'pending'" class="remark-banner remark-pending">\r
                          <div class="remark-icon"><i class="bi bi-clock-fill"></i></div>\r
                          <div class="remark-body">\r
                            <span class="remark-label">Pending Approval at:</span>\r
                            <span class="remark-text">{{ getApprovalRemark(po.id)?.byLevel || 'Current Level' }}</span>\r
                            <span class="remark-meta" *ngIf="getApprovalRemark(po.id)?.byName">Assigned to <strong>{{ getApprovalRemark(po.id)?.byName }}</strong></span>\r
                          </div>\r
                        </div>\r
                      </ng-container>\r
                    </td>\r
                  </tr>\r
                </ng-container>\r
\r
                <tr *ngIf="filteredOrders.length === 0">\r
                  <td colspan="9" class="text-center py-5">\r
                    <i class="bi bi-inbox display-6 mb-3 d-block opacity-25"></i>\r
                    <p class="text-muted mb-0">No purchase orders found for this period.</p>\r
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
\r
            <!-- ===== PAGINATION BAR ===== -->\r
            <div class="pagination-bar d-flex align-items-center justify-content-between flex-wrap gap-3 px-4 py-3"\r
                 *ngIf="filteredOrders.length > 0">\r
              <div class="d-flex align-items-center gap-3 flex-wrap">\r
                <span class="text-muted small">\r
                  Showing <strong>{{ startIndex }}\u2013{{ endIndex }}</strong> of <strong>{{ filteredOrders.length }}</strong> orders\r
                </span>\r
                <div class="d-flex align-items-center gap-2">\r
                  <label class="text-muted small mb-0 text-nowrap">Rows per page:</label>\r
                  <div class="page-size-group">\r
                    <button *ngFor="let size of pageSizeOptions" class="page-size-btn"\r
                            [class.active]="pageSize === size" (click)="onPageSizeChange(size)">\r
                      {{ size }}\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="d-flex align-items-center gap-1">\r
                <button class="page-nav-btn" [disabled]="currentPage === 1" (click)="goToPage(1)" title="First page">\r
                  <i class="bi bi-chevron-double-left"></i>\r
                </button>\r
                <button class="page-nav-btn" [disabled]="currentPage === 1" (click)="goToPage(currentPage - 1)" title="Previous page">\r
                  <i class="bi bi-chevron-left"></i>\r
                </button>\r
                <ng-container *ngFor="let page of pageNumbers">\r
                  <span *ngIf="page === -1" class="page-ellipsis">\u2026</span>\r
                  <button *ngIf="page !== -1" class="page-num-btn" [class.active]="currentPage === page" (click)="goToPage(page)">\r
                    {{ page }}\r
                  </button>\r
                </ng-container>\r
                <button class="page-nav-btn" [disabled]="currentPage === totalPages" (click)="goToPage(currentPage + 1)" title="Next page">\r
                  <i class="bi bi-chevron-right"></i>\r
                </button>\r
                <button class="page-nav-btn" [disabled]="currentPage === totalPages" (click)="goToPage(totalPages)" title="Last page">\r
                  <i class="bi bi-chevron-double-right"></i>\r
                </button>\r
              </div>\r
            </div>\r
            <!-- ===== END PAGINATION BAR ===== -->\r
\r
          </div>\r
        </c-card-body>\r
      </c-card>\r
    </c-col>\r
  </c-row>\r
\r
</c-container>`, styles: ["/* src/app/views/base/po-list/po-list.component.css */\n.date-filter-card {\n  display: flex;\n  align-items: stretch;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.date-filter-card:hover {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.10);\n}\n.date-filter-accent {\n  width: 5px;\n  background:\n    linear-gradient(\n      180deg,\n      #667eea 0%,\n      #764ba2 100%);\n  flex-shrink: 0;\n}\n.date-filter-inner {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  padding: 18px 24px;\n  flex-wrap: wrap;\n  gap: 0;\n}\n.date-filter-title-wrap {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  min-width: 160px;\n}\n.date-filter-icon-wrap {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-title {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.2;\n}\n.date-filter-subtitle {\n  font-size: 0.72rem;\n  color: #8a8a9a;\n  margin-top: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  font-weight: 500;\n}\n.date-filter-divider {\n  width: 1px;\n  height: 44px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      #e2e5f0,\n      transparent);\n  margin: 0 24px;\n  flex-shrink: 0;\n  align-self: center;\n}\n.date-filter-controls {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.date-filter-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 220px;\n}\n.date-filter-custom-field {\n  max-width: 0;\n  min-width: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition:\n    max-width 0.3s ease,\n    opacity 0.3s ease,\n    min-width 0.3s ease;\n  pointer-events: none;\n}\n.date-filter-custom-field.date-filter-field-visible {\n  max-width: 200px;\n  min-width: 160px;\n  opacity: 1;\n  pointer-events: all;\n}\n.date-filter-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 0;\n  white-space: nowrap;\n}\n.date-filter-label i {\n  color: #667eea;\n}\n.date-filter-select-wrap {\n  position: relative;\n}\n.date-filter-select {\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n  padding: 9px 36px 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-select:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-select:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-select-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.75rem;\n  color: #667eea;\n  pointer-events: none;\n}\n.date-filter-input-wrap {\n  position: relative;\n}\n.date-filter-input {\n  width: 100%;\n  padding: 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-input:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-input:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-right {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  margin-left: auto;\n  flex-wrap: wrap;\n}\n.date-filter-badge-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  border: 1.5px solid rgba(102, 126, 234, 0.2);\n  border-radius: 12px;\n  padding: 8px 14px 8px 10px;\n}\n.date-filter-badge-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-badge-label {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  line-height: 1;\n}\n.date-filter-badge-value {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #667eea;\n  margin-top: 3px;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n.date-filter-reset-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 9px 16px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #667eea;\n  background: #f0f2ff;\n  border: 1.5px solid #d0d5f5;\n  border-radius: 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.date-filter-reset-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n  transform: translateY(-1px);\n}\n.date-filter-reset-btn i {\n  font-size: 0.85rem;\n}\n@media (max-width: 992px) {\n  .date-filter-inner {\n    flex-wrap: wrap;\n    gap: 16px;\n    padding: 16px 18px;\n  }\n  .date-filter-divider {\n    display: none;\n  }\n  .date-filter-title-wrap {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-controls {\n    width: 100%;\n  }\n  .date-filter-right {\n    width: 100%;\n    margin-left: 0;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 576px) {\n  .date-filter-field,\n  .date-filter-custom-field.date-filter-field-visible {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-badge-wrap {\n    width: 100%;\n  }\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px 22px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  cursor: default;\n}\n.stat-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.11);\n}\n.stat-icon-wrap {\n  width: 58px;\n  height: 58px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: #ffffff;\n  flex-shrink: 0;\n}\n.stat-purple {\n  background:\n    linear-gradient(\n      135deg,\n      #6c63ff,\n      #9b59b6);\n}\n.stat-pink {\n  background:\n    linear-gradient(\n      135deg,\n      #f953c6,\n      #b91d73);\n}\n.stat-teal {\n  background:\n    linear-gradient(\n      135deg,\n      #43cea2,\n      #185a9d);\n}\n.stat-green {\n  background:\n    linear-gradient(\n      135deg,\n      #56ab2f,\n      #a8e063);\n}\n.stat-orange-pink {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n}\n.stat-red {\n  background:\n    linear-gradient(\n      135deg,\n      #ff416c,\n      #ff4b2b);\n}\n.stat-blue {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe,\n      #00f2fe);\n}\n.stat-hold {\n  background:\n    linear-gradient(\n      135deg,\n      #f7971e,\n      #ffd200);\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.stat-value {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1a2e;\n  line-height: 1.1;\n  letter-spacing: -0.5px;\n}\n.stat-value-sm {\n  font-size: 1.3rem;\n}\n.stat-label {\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 2px;\n}\n.gradient-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  padding: 10px;\n}\n.avatar-circle-large {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  color: white;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n}\n.info-card {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  font-size: 1.5rem;\n  color: white;\n}\n.info-card-content {\n  flex: 1;\n}\n.info-label {\n  font-size: 0.75rem;\n  opacity: 0.9;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.info-value {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: white;\n  margin-top: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.po-table {\n  font-size: 0.88rem;\n  border-collapse: collapse;\n}\n.table-header th {\n  background: #e8eaf6 !important;\n  color: #1a237e !important;\n  font-weight: 700;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 12px 14px;\n  border-bottom: 2px solid #c5cae9 !important;\n}\n.po-table tbody .po-main-row td {\n  padding: 12px 14px;\n  vertical-align: middle;\n  border-bottom: none !important;\n  border-color: transparent;\n}\n.po-main-row:hover td {\n  background: #f8f9ff !important;\n}\n.remark-row + tr.po-main-row td,\n.po-table tbody .po-main-row:not(:first-child) td {\n  border-top: 1px solid #e9ecef !important;\n}\n.po-number-link {\n  font-weight: 700;\n  color: #1976d2;\n  cursor: pointer;\n  text-decoration: none;\n}\n.po-number-link:hover {\n  text-decoration: underline;\n}\n.remark-row td {\n  padding: 0 !important;\n  border: none !important;\n}\n.remark-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 8px 16px 10px 20px;\n  margin: 0 0 1px 0;\n  font-size: 0.84rem;\n  line-height: 1.5;\n}\n.remark-rejected {\n  background-color: #fde8e8;\n  border-left: 4px solid #e53935;\n}\n.remark-rejected .remark-icon {\n  color: #c62828;\n  font-size: 1rem;\n  padding-top: 2px;\n}\n.remark-rejected .remark-label {\n  color: #c62828;\n  font-weight: 700;\n  margin-right: 6px;\n}\n.remark-revision {\n  background-color: #fffde7;\n  border-left: 4px solid #f9a825;\n}\n.remark-revision .remark-icon {\n  color: #f57f17;\n  font-size: 1rem;\n  padding-top: 2px;\n}\n.remark-revision .remark-label {\n  color: #f57f17;\n  font-weight: 700;\n  margin-right: 6px;\n}\n.remark-hold {\n  background-color: #fff3e0;\n  border-left: 4px solid #ff6f00;\n}\n.remark-hold .remark-icon {\n  color: #e65100;\n  font-size: 1rem;\n  padding-top: 2px;\n}\n.remark-hold .remark-label {\n  color: #e65100;\n  font-weight: 700;\n  margin-right: 6px;\n}\n.remark-pending {\n  background-color: #e3f2fd;\n  border-left: 4px solid #1976d2;\n}\n.remark-pending .remark-icon {\n  color: #1565c0;\n  font-size: 1rem;\n  padding-top: 2px;\n}\n.remark-pending .remark-label {\n  color: #1565c0;\n  font-weight: 700;\n  margin-right: 6px;\n}\n.remark-text {\n  color: #333;\n}\n.remark-meta {\n  color: #777;\n  font-size: 0.78rem;\n  margin-left: 4px;\n}\n.remark-meta strong {\n  color: #333;\n}\n.remark-body {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.badge {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.35em 0.65em;\n}\n.btn-sm {\n  padding: 0.4rem 0.8rem;\n  font-size: 0.85rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.btn-light {\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n}\n.btn-light:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.display-1 {\n  font-size: 5rem;\n}\n.opacity-25 {\n  opacity: 0.25;\n}\n.pagination-bar {\n  border-top: 1px solid #e9ecef;\n  background: #fafbff;\n  border-radius: 0 0 12px 12px;\n}\n.pagination-info {\n  font-size: 0.84rem;\n}\n.page-size-group {\n  display: flex;\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.page-size-btn {\n  background: #fff;\n  border: none;\n  border-right: 1px solid #d0d5dd;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #555;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  line-height: 1;\n}\n.page-size-btn:last-child {\n  border-right: none;\n}\n.page-size-btn:hover {\n  background: #f0f4ff;\n  color: #1976d2;\n}\n.page-size-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-weight: 700;\n}\n.page-num-btn {\n  min-width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #444;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  padding: 0 4px;\n}\n.page-num-btn:hover {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #1976d2;\n}\n.page-num-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border-color: #667eea;\n  color: #fff;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);\n}\n.page-nav-btn {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #d0d5dd;\n  background: #fff;\n  color: #555;\n  font-size: 0.85rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.page-nav-btn:hover:not(:disabled) {\n  background: #f0f4ff;\n  border-color: #667eea;\n  color: #667eea;\n}\n.page-nav-btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.page-ellipsis {\n  padding: 0 4px;\n  color: #aaa;\n  font-size: 0.9rem;\n  line-height: 34px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media (max-width: 768px) {\n  .avatar-circle-large {\n    width: 60px;\n    height: 60px;\n    font-size: 1.5rem;\n  }\n  .info-card-icon {\n    width: 40px;\n    height: 40px;\n    font-size: 1.2rem;\n  }\n  .info-label {\n    font-size: 0.7rem;\n  }\n  .info-value {\n    font-size: 0.85rem;\n  }\n  .pagination-bar {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n  .page-size-btn {\n    padding: 5px 9px;\n  }\n}\n/*# sourceMappingURL=po-list.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: DataService }, { type: MessageService }, { type: BuyerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(POListComponent, { className: "POListComponent", filePath: "src/app/views/base/po-list/po-list.component.ts", lineNumber: 502 });
})();
export {
  POListComponent
};
//# sourceMappingURL=chunk-7ZJ3E57I.js.map
