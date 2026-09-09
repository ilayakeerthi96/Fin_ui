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
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
  ActivatedRoute,
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  NgIf,
  Router,
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

// src/app/views/base/po-create/po-create.component.ts
function PoCreateComponent_c_spinner_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-spinner", 13);
  }
}
function PoCreateComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function PoCreateComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "c-spinner", 16);
    \u0275\u0275elementStart(2, "p", 17);
    \u0275\u0275text(3, "Loading purchase order\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PoCreateComponent_ng_container_17_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3.companyName);
  }
}
function PoCreateComponent_ng_container_17_option_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", l_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r4.locationName);
  }
}
function PoCreateComponent_ng_container_17_option_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", l_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r5.locationName);
  }
}
function PoCreateComponent_ng_container_17_option_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6.departmentName);
  }
}
function PoCreateComponent_ng_container_17_option_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275property("value", t_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7);
  }
}
function PoCreateComponent_ng_container_17_tr_143_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r10 = ctx.$implicit;
    \u0275\u0275property("value", u_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r10);
  }
}
function PoCreateComponent_ng_container_17_tr_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_tr_143_Template_input_ngModelChange_4_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(item_r9.itemCode, $event) || (item_r9.itemCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_tr_143_Template_input_ngModelChange_6_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(item_r9.itemDescription, $event) || (item_r9.itemDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_tr_143_Template_input_ngModelChange_8_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(item_r9.quantity, $event) || (item_r9.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_tr_143_Template_select_ngModelChange_10_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(item_r9.uom, $event) || (item_r9.uom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(11, PoCreateComponent_ng_container_17_tr_143_option_11_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_tr_143_Template_input_ngModelChange_13_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(item_r9.unitRate, $event) || (item_r9.unitRate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_tr_143_Template_input_ngModelChange_15_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(item_r9.discountAmount, $event) || (item_r9.discountAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_tr_143_Template_input_ngModelChange_17_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(item_r9.taxPercentage, $event) || (item_r9.taxPercentage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 69);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_tr_143_Template_input_ngModelChange_22_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(item_r9.suppliedQuantity, $event) || (item_r9.suppliedQuantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 70)(24, "c-badge", 71);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 72)(28, "button", 73);
    \u0275\u0275listener("click", function PoCreateComponent_ng_container_17_tr_143_Template_button_click_28_listener() {
      const i_r11 = \u0275\u0275restoreView(_r8).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeItem(i_r11));
    });
    \u0275\u0275text(29, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r11 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r9.itemCode);
    \u0275\u0275property("name", "code" + i_r11);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r9.itemDescription);
    \u0275\u0275property("name", "desc" + i_r11);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r9.quantity);
    \u0275\u0275property("name", "qty" + i_r11);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r9.uom);
    \u0275\u0275property("name", "uom" + i_r11);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.uomOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r9.unitRate);
    \u0275\u0275property("name", "rate" + i_r11);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r9.discountAmount);
    \u0275\u0275property("name", "disc" + i_r11);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r9.taxPercentage);
    \u0275\u0275property("name", "tax" + i_r11);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.po.currencySymbol, "", \u0275\u0275pipeBind2(20, 22, ctx_r0.lineTotal(item_r9), "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", item_r9.suppliedQuantity);
    \u0275\u0275property("name", "sup" + i_r11);
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx_r0.lineRemaining(item_r9) === 0 ? "success" : "warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 25, ctx_r0.lineRemaining(item_r9), "1.0-3"), " ");
  }
}
function PoCreateComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "c-card", 1)(2, "c-card-header")(3, "strong");
    \u0275\u0275text(4, "PO Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "c-card-body")(6, "c-row")(7, "c-col", 18)(8, "label", 19);
    \u0275\u0275text(9, "PO Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.poNumber, $event) || (ctx_r0.po.poNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 21);
    \u0275\u0275text(12, "Leave blank to auto-generate.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "c-col", 18)(14, "label", 19);
    \u0275\u0275text(15, "PO Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.poDate, $event) || (ctx_r0.po.poDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "c-col", 18)(18, "label", 19);
    \u0275\u0275text(19, "Supplier ");
    \u0275\u0275elementStart(20, "span", 23);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.supplierId, $event) || (ctx_r0.po.supplierId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PoCreateComponent_ng_container_17_Template_select_change_22_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSupplierChange());
    });
    \u0275\u0275elementStart(23, "option", 25);
    \u0275\u0275text(24, "\u2014 Select supplier \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, PoCreateComponent_ng_container_17_option_25_Template, 2, 2, "option", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "c-col", 18)(27, "label", 19);
    \u0275\u0275text(28, "Supplier Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.supplierCode, $event) || (ctx_r0.po.supplierCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "c-col", 18)(31, "label", 19);
    \u0275\u0275text(32, "Buyer Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 28);
    \u0275\u0275elementStart(34, "small", 21);
    \u0275\u0275text(35, "Fixed \u2014 this is a single-buyer application.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "c-col", 18)(37, "label", 19);
    \u0275\u0275text(38, "Buying Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.buyerLocationId, $event) || (ctx_r0.po.buyerLocationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PoCreateComponent_ng_container_17_Template_select_change_39_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLocationChange());
    });
    \u0275\u0275elementStart(40, "option", 25);
    \u0275\u0275text(41, "\u2014 Select location \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, PoCreateComponent_ng_container_17_option_42_Template, 2, 2, "option", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "small", 21);
    \u0275\u0275text(44, "Sets the PO currency.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "c-col", 18)(46, "label", 19);
    \u0275\u0275text(47, "Delivery Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "select", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_select_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.deliveryLocationId, $event) || (ctx_r0.po.deliveryLocationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(49, "option", 25);
    \u0275\u0275text(50, "\u2014 Same as buying location \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, PoCreateComponent_ng_container_17_option_51_Template, 2, 2, "option", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "c-col", 18)(53, "label", 19);
    \u0275\u0275text(54, "Department / Buyer Group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_select_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.departmentId, $event) || (ctx_r0.po.departmentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(56, "option", 25);
    \u0275\u0275text(57, "\u2014 None \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, PoCreateComponent_ng_container_17_option_58_Template, 2, 2, "option", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "c-col", 18)(60, "label", 19);
    \u0275\u0275text(61, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "c-col", 18)(64, "label", 19);
    \u0275\u0275text(65, "Delivery Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_input_ngModelChange_66_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.deliveryDate, $event) || (ctx_r0.po.deliveryDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "c-col", 18)(68, "label", 19);
    \u0275\u0275text(69, "PO Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_select_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.poType, $event) || (ctx_r0.po.poType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(71, PoCreateComponent_ng_container_17_option_71_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "c-col", 18)(73, "label", 19);
    \u0275\u0275text(74, "PO Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "c-col", 18)(77, "label", 19);
    \u0275\u0275text(78, "Payment Terms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_input_ngModelChange_79_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.paymentTerms, $event) || (ctx_r0.po.paymentTerms = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "c-col", 18)(81, "label", 19);
    \u0275\u0275text(82, "Delivery Terms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_input_ngModelChange_83_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.deliveryTerms, $event) || (ctx_r0.po.deliveryTerms = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "c-col", 18)(85, "label", 19);
    \u0275\u0275text(86, "Header Tax %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_input_ngModelChange_87_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.taxPercentage, $event) || (ctx_r0.po.taxPercentage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "small", 21);
    \u0275\u0275text(89, "Used only when no line has its own tax rate.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "c-col", 18)(91, "label", 19);
    \u0275\u0275text(92, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "textarea", 39);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_textarea_ngModelChange_93_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.remarks, $event) || (ctx_r0.po.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "c-col", 18)(95, "label", 19);
    \u0275\u0275text(96, "Internal Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "textarea", 40);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_textarea_ngModelChange_97_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.internalNotes, $event) || (ctx_r0.po.internalNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "small", 21);
    \u0275\u0275text(99, "Not shown to the supplier.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(100, "c-card", 1)(101, "c-card-header", 41)(102, "strong");
    \u0275\u0275text(103, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "button", 42);
    \u0275\u0275listener("click", function PoCreateComponent_ng_container_17_Template_button_click_104_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addItem());
    });
    \u0275\u0275text(105, "+ Add Item");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "c-card-body", 43)(107, "div", 44)(108, "table", 45)(109, "thead")(110, "tr")(111, "th", 46);
    \u0275\u0275text(112, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "th", 47);
    \u0275\u0275text(114, "Item Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "th", 48);
    \u0275\u0275text(116, "Description ");
    \u0275\u0275elementStart(117, "span", 23);
    \u0275\u0275text(118, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "th", 49);
    \u0275\u0275text(120, "Qty ");
    \u0275\u0275elementStart(121, "span", 23);
    \u0275\u0275text(122, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "th", 50);
    \u0275\u0275text(124, "Unit ");
    \u0275\u0275elementStart(125, "span", 23);
    \u0275\u0275text(126, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "th", 47);
    \u0275\u0275text(128, "Unit Price ");
    \u0275\u0275elementStart(129, "span", 23);
    \u0275\u0275text(130, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "th", 49);
    \u0275\u0275text(132, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "th", 51);
    \u0275\u0275text(134, "Tax %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "th", 52);
    \u0275\u0275text(136, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "th", 49);
    \u0275\u0275text(138, "Supplied");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "th", 53);
    \u0275\u0275text(140, "Remaining");
    \u0275\u0275elementEnd();
    \u0275\u0275element(141, "th", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "tbody");
    \u0275\u0275template(143, PoCreateComponent_ng_container_17_tr_143_Template, 30, 28, "tr", 55);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(144, "c-row", 56)(145, "c-col", 2)(146, "c-card")(147, "c-card-header")(148, "strong");
    \u0275\u0275text(149, "Other Terms & Conditions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "c-card-body")(151, "textarea", 57);
    \u0275\u0275twoWayListener("ngModelChange", function PoCreateComponent_ng_container_17_Template_textarea_ngModelChange_151_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.po.otherTerms, $event) || (ctx_r0.po.otherTerms = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(152, "c-col", 2)(153, "c-card", 58)(154, "c-card-header")(155, "strong");
    \u0275\u0275text(156, "Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(157, "c-card-body")(158, "div", 59)(159, "span", 21);
    \u0275\u0275text(160, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "span");
    \u0275\u0275text(162);
    \u0275\u0275pipe(163, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "div", 59)(165, "span", 21);
    \u0275\u0275text(166, "Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "span");
    \u0275\u0275text(168);
    \u0275\u0275pipe(169, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(170, "hr", 60);
    \u0275\u0275elementStart(171, "div", 61)(172, "strong");
    \u0275\u0275text(173, "Grand Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "strong");
    \u0275\u0275text(175);
    \u0275\u0275pipe(176, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(177, "p", 62);
    \u0275\u0275text(178, " Totals are recalculated by the server when the PO is saved. If these figures differ from the saved PO, the saved values are the authoritative ones. ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.poNumber);
    \u0275\u0275property("readonly", ctx_r0.isEditMode);
    \u0275\u0275advance(3);
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.poDate);
    \u0275\u0275advance();
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.supplierId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.suppliers);
    \u0275\u0275advance();
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.supplierCode);
    \u0275\u0275advance();
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r0.buyerName);
    \u0275\u0275advance(3);
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.buyerLocationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.locations);
    \u0275\u0275advance(3);
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.deliveryLocationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.locations);
    \u0275\u0275advance();
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.departmentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.departments);
    \u0275\u0275advance();
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r0.po.currencyCode + " (" + ctx_r0.po.currencySymbol + ")");
    \u0275\u0275advance();
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.deliveryDate);
    \u0275\u0275advance();
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.poType);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.poTypeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("md", 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r0.po.status || "DRAFT");
    \u0275\u0275advance();
    \u0275\u0275property("md", 4);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.paymentTerms);
    \u0275\u0275advance();
    \u0275\u0275property("md", 4);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.deliveryTerms);
    \u0275\u0275advance();
    \u0275\u0275property("md", 4);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.taxPercentage);
    \u0275\u0275advance(3);
    \u0275\u0275property("md", 6);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.remarks);
    \u0275\u0275advance();
    \u0275\u0275property("md", 6);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.internalNotes);
    \u0275\u0275advance(46);
    \u0275\u0275property("ngForOf", ctx_r0.items)("ngForTrackBy", ctx_r0.trackByIndex);
    \u0275\u0275advance(2);
    \u0275\u0275property("md", 7);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.po.otherTerms);
    \u0275\u0275advance();
    \u0275\u0275property("md", 5);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate2("", ctx_r0.po.currencySymbol, "", \u0275\u0275pipeBind2(163, 55, ctx_r0.subtotal, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r0.po.currencySymbol, "", \u0275\u0275pipeBind2(169, 58, ctx_r0.totalTax, "1.2-2"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r0.po.currencySymbol, "", \u0275\u0275pipeBind2(176, 61, ctx_r0.grandTotal, "1.2-2"));
  }
}
var _PoCreateComponent = class _PoCreateComponent {
  constructor(dataService, messageService, router, route) {
    this.dataService = dataService;
    this.messageService = messageService;
    this.router = router;
    this.route = route;
    this.poId = null;
    this.isEditMode = false;
    this.isLoading = false;
    this.isSaving = false;
    this.po = {
      poNumber: "",
      poDate: this.today(),
      supplierId: null,
      supplierCode: "",
      buyerId: null,
      buyerLocationId: null,
      deliveryLocationId: null,
      departmentId: null,
      currencyCode: "INR",
      currencySymbol: "\u20B9",
      paymentTerms: "",
      deliveryTerms: "",
      otherTerms: "",
      deliveryDate: null,
      taxPercentage: 0,
      remarks: "",
      internalNotes: "",
      poType: "GOODS"
    };
    this.items = [];
    this.suppliers = [];
    this.buyers = [];
    this.locations = [];
    this.departments = [];
    this.uomOptions = ["NOS", "PCS", "SET", "BOX", "KG", "LTR", "MTR", "HRS", "DAYS", "LOT"];
    this.poTypeOptions = ["GOODS", "SERVICE", "BLANKET_CONTRACT"];
    this.errorMessage = "";
  }
  ngOnInit() {
    this.loadLookups();
    const idParam = this.route.snapshot.paramMap.get("id");
    if (idParam) {
      this.poId = Number(idParam);
      this.isEditMode = true;
      this.loadExistingPO(this.poId);
    } else {
      this.addItem();
    }
  }
  // ==================================================================
  // LOOKUPS
  // ==================================================================
  loadLookups() {
    this.dataService.getAllSuppliersForPO().subscribe({
      next: (res) => {
        this.suppliers = this.unwrapList(res);
      },
      error: () => {
        this.suppliers = [];
      }
    });
    this.dataService.getAllBuyersForPO().subscribe({
      next: (res) => {
        this.buyers = this.unwrapList(res);
        if (!this.isEditMode && this.buyers.length === 1 && !this.po.buyerId) {
          this.po.buyerId = this.buyers[0].id;
          this.onBuyerChange();
        }
      },
      error: () => {
        this.buyers = [];
      }
    });
  }
  /** Static display name for the non-editable Buyer Company field. */
  get buyerName() {
    const b = this.buyers.find((x) => x.id === Number(this.po.buyerId));
    return b?.companyName || (this.po.buyerId ? `Buyer #${this.po.buyerId}` : "Loading\u2026");
  }
  /**
   * Populates locations/departments for a PO already loaded in edit mode, without touching
   * the buyerLocationId/deliveryLocationId/departmentId that loadExistingPO() just set —
   * onBuyerChange()/onLocationChange() null those out on purpose for the create-mode cascade,
   * which would otherwise wipe a saved PO's location and department the instant it opens.
   */
  populateDependentLookupsForEdit() {
    if (!this.po.buyerId)
      return;
    this.dataService.getLocationsForBuyer(this.po.buyerId).subscribe({
      next: (res) => {
        this.locations = this.unwrapList(res);
      },
      error: () => {
        this.locations = [];
      }
    });
    if (!this.po.buyerLocationId)
      return;
    this.dataService.getDepartmentsForLocation(this.po.buyerLocationId).subscribe({
      next: (res) => {
        this.departments = this.unwrapList(res);
      },
      error: () => {
        this.departments = [];
      }
    });
  }
  onBuyerChange() {
    this.locations = [];
    this.departments = [];
    this.po.buyerLocationId = null;
    this.po.deliveryLocationId = null;
    this.po.departmentId = null;
    if (!this.po.buyerId)
      return;
    this.dataService.getLocationsForBuyer(this.po.buyerId).subscribe({
      next: (res) => {
        this.locations = this.unwrapList(res);
        if (this.locations.length === 1) {
          this.po.buyerLocationId = this.locations[0].id;
          this.onLocationChange();
        }
      },
      error: () => {
        this.locations = [];
      }
    });
  }
  onLocationChange() {
    this.departments = [];
    this.po.departmentId = null;
    const loc = this.locations.find((l) => l.id === Number(this.po.buyerLocationId));
    if (loc) {
      this.po.currencyCode = loc.currencyCode || "INR";
      this.po.currencySymbol = loc.currencySymbol || "\u20B9";
      if (!this.po.deliveryLocationId)
        this.po.deliveryLocationId = loc.id;
    }
    if (!this.po.buyerLocationId)
      return;
    this.dataService.getDepartmentsForLocation(this.po.buyerLocationId).subscribe({
      next: (res) => {
        this.departments = this.unwrapList(res);
      },
      error: () => {
        this.departments = [];
      }
    });
  }
  onSupplierChange() {
    const sup = this.suppliers.find((s) => s.id === Number(this.po.supplierId));
    if (sup && !this.po.supplierCode) {
      this.po.supplierCode = sup.supplierCode || "";
    }
  }
  // ==================================================================
  // LINE ITEMS
  // ==================================================================
  addItem() {
    this.items.push({
      id: null,
      slNo: this.items.length + 1,
      itemCode: "",
      itemDescription: "",
      specifications: "",
      brandMakeModel: "",
      quantity: null,
      uom: "NOS",
      unitRate: null,
      discountAmount: 0,
      taxPercentage: 0,
      deliveryDays: null,
      warrantyMonths: null,
      suppliedQuantity: 0
    });
  }
  removeItem(index) {
    if (this.items.length === 1) {
      this.messageService.showMessage("warning", "Cannot remove", "A purchase order must have at least one item.");
      return;
    }
    this.items.splice(index, 1);
    this.items.forEach((it, i) => it.slNo = i + 1);
  }
  // ── Live totals (display only — the server recomputes all of these) ──
  lineNet(item) {
    const qty = Number(item.quantity) || 0;
    const rate = Number(item.unitRate) || 0;
    const discount = Number(item.discountAmount) || 0;
    const net = qty * rate - discount;
    return net > 0 ? net : 0;
  }
  lineTax(item) {
    const pct = Number(item.taxPercentage) || 0;
    return this.round(this.lineNet(item) * pct / 100);
  }
  lineTotal(item) {
    return this.round(this.lineNet(item) + this.lineTax(item));
  }
  lineRemaining(item) {
    const qty = Number(item.quantity) || 0;
    const supplied = Number(item.suppliedQuantity) || 0;
    const remaining = qty - supplied;
    return remaining > 0 ? remaining : 0;
  }
  get subtotal() {
    return this.round(this.items.reduce((sum, it) => sum + this.lineNet(it), 0));
  }
  get totalTax() {
    const lineTaxSum = this.items.reduce((sum, it) => sum + this.lineTax(it), 0);
    if (lineTaxSum > 0)
      return this.round(lineTaxSum);
    const headerPct = Number(this.po.taxPercentage) || 0;
    return this.round(this.subtotal * headerPct / 100);
  }
  get grandTotal() {
    return this.round(this.subtotal + this.totalTax);
  }
  // ==================================================================
  // LOAD (edit mode)
  // ==================================================================
  loadExistingPO(poId) {
    this.isLoading = true;
    this.dataService.getPurchaseOrderById(poId).subscribe({
      next: (res) => {
        const data = res?.data || res;
        if (!data) {
          this.errorMessage = "Purchase order not found.";
          this.isLoading = false;
          return;
        }
        if (data.editable === false) {
          this.errorMessage = `PO ${data.poNumber} is in status ${data.status} and can no longer be edited.`;
        }
        this.po = {
          poNumber: data.poNumber,
          poDate: this.toDateInput(data.poDate),
          supplierId: data.supplierId,
          supplierCode: data.supplierCode || "",
          buyerId: data.buyerId,
          buyerLocationId: data.buyerLocationId,
          deliveryLocationId: data.deliveryLocationId,
          departmentId: data.departmentId,
          currencyCode: data.currencyCode || "INR",
          currencySymbol: data.currencySymbol || "\u20B9",
          paymentTerms: data.paymentTerms || "",
          deliveryTerms: data.deliveryTerms || "",
          otherTerms: data.otherTerms || "",
          deliveryDate: data.deliveryDate || null,
          taxPercentage: data.taxPercentage || 0,
          remarks: data.buyerRemarks || "",
          internalNotes: data.internalNotes || "",
          poType: data.poType || "GOODS",
          status: data.status
        };
        this.populateDependentLookupsForEdit();
        this.items = (data.lineItems || []).map((li, i) => ({
          id: li.id,
          slNo: li.slNo || i + 1,
          itemCode: li.itemCode || "",
          itemDescription: li.itemDescription || "",
          specifications: li.specifications || "",
          brandMakeModel: li.brandMakeModel || "",
          quantity: li.quantity,
          uom: li.uom || "NOS",
          unitRate: li.unitRate,
          discountAmount: li.discountAmount || 0,
          taxPercentage: li.taxPercentage || 0,
          deliveryDays: li.deliveryDays,
          warrantyMonths: li.warrantyMonths,
          suppliedQuantity: li.suppliedQuantity || 0
        }));
        if (this.items.length === 0)
          this.addItem();
        if (this.po.buyerId) {
          this.dataService.getLocationsForBuyer(this.po.buyerId).subscribe({
            next: (r) => {
              this.locations = this.unwrapList(r);
            },
            error: () => {
            }
          });
        }
        if (this.po.buyerLocationId) {
          this.dataService.getDepartmentsForLocation(this.po.buyerLocationId).subscribe({
            next: (r) => {
              this.departments = this.unwrapList(r);
            },
            error: () => {
            }
          });
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = this.apiError(err, "Could not load the purchase order.");
        this.isLoading = false;
      }
    });
  }
  // ==================================================================
  // VALIDATION & SAVE
  // ==================================================================
  /** Client-side check mirroring the server's validation, so mistakes surface before a round trip. */
  validate() {
    if (!this.po.supplierId)
      return "Select a supplier.";
    if (!this.po.buyerId)
      return "Select a buyer company.";
    if (this.items.length === 0)
      return "Add at least one item.";
    for (let i = 0; i < this.items.length; i++) {
      const it = this.items[i];
      const row = `Item ${i + 1}`;
      if (!it.itemDescription || !String(it.itemDescription).trim())
        return `${row}: description is required.`;
      if (!it.uom)
        return `${row}: unit of measure is required.`;
      if (it.quantity === null || it.quantity === void 0 || Number(it.quantity) <= 0) {
        return `${row}: quantity must be greater than zero.`;
      }
      if (it.unitRate === null || it.unitRate === void 0 || Number(it.unitRate) < 0) {
        return `${row}: unit price is required and cannot be negative.`;
      }
      if (Number(it.suppliedQuantity) > Number(it.quantity)) {
        return `${row}: supplied quantity cannot exceed the ordered quantity.`;
      }
    }
    if (this.grandTotal <= 0)
      return "The purchase order total must be greater than zero.";
    return null;
  }
  savePO(releaseAfterSave = false) {
    this.errorMessage = "";
    const problem = this.validate();
    if (problem) {
      this.errorMessage = problem;
      this.messageService.showMessage("warning", "Check the form", problem);
      return;
    }
    this.isSaving = true;
    const payload = this.buildPayload();
    const request = this.isEditMode && this.poId ? this.dataService.updateManualPO(this.poId, payload) : this.dataService.createManualPO(payload);
    request.subscribe({
      next: (res) => {
        const saved = res?.data || res;
        const savedId = saved?.id || this.poId;
        this.messageService.showMessage("success", this.isEditMode ? "PO updated" : "PO created", `${saved?.poNumber || "Purchase order"} saved as DRAFT.`);
        if (releaseAfterSave && savedId) {
          this.releaseToSupplier(savedId);
        } else {
          this.isSaving = false;
          this.router.navigate(["/po-details", savedId]);
        }
      },
      error: (err) => {
        this.isSaving = false;
        this.errorMessage = this.apiError(err, "Could not save the purchase order.");
        this.messageService.showMessage("error", "Save failed", this.errorMessage);
      }
    });
  }
  /**
   * Saving and releasing are two calls, not one transaction. If the release fails, the PO is
   * still safely saved as a DRAFT and can be released later from the PO list rather than
   * losing everything just typed. There is no approval step in between — a DRAFT PO releases
   * straight to the supplier.
   */
  releaseToSupplier(poId) {
    this.dataService.releasePO(poId, "").subscribe({
      next: () => {
        this.isSaving = false;
        this.messageService.showMessage("success", "Released", "The PO has been released to the supplier.");
        this.router.navigate(["/po-details", poId]);
      },
      error: (err) => {
        this.isSaving = false;
        const msg = this.apiError(err, "The PO was saved but could not be released.");
        this.messageService.showMessage("warning", "Saved, not released", msg);
        this.router.navigate(["/po-details", poId]);
      }
    });
  }
  buildPayload() {
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
      poType: this.po.poType || "GOODS",
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
  cancel() {
    this.router.navigate(["/po-list"]);
  }
  // ==================================================================
  // HELPERS
  // ==================================================================
  /** Endpoints in this app return either {data:[...]}, {data:{content:[...]}} or a bare array. */
  unwrapList(res) {
    if (Array.isArray(res))
      return res;
    if (Array.isArray(res?.data))
      return res.data;
    if (Array.isArray(res?.data?.content))
      return res.data.content;
    if (Array.isArray(res?.content))
      return res.content;
    return [];
  }
  apiError(err, fallback) {
    return err?.error?.message || err?.error?.error || err?.message || fallback;
  }
  round(n) {
    return Math.round((n + Number.EPSILON) * 100) / 100;
  }
  today() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  toDateInput(value) {
    if (!value)
      return this.today();
    return String(value).split("T")[0];
  }
  trackByIndex(index) {
    return index;
  }
};
_PoCreateComponent.\u0275fac = function PoCreateComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PoCreateComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_PoCreateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PoCreateComponent, selectors: [["app-po-create"]], decls: 18, vars: 11, consts: [["fluid", "", 1, "po-create"], [1, "mb-3"], [3, "md"], [1, "page-title", "mb-1"], [1, "page-subtitle", "mb-0"], [1, "text-end", 3, "md"], ["cButton", "", "color", "secondary", "variant", "outline", 1, "me-2", 3, "click", "disabled"], ["cButton", "", "color", "primary", "variant", "outline", 1, "me-2", 3, "click", "disabled"], ["size", "sm", 4, "ngIf"], ["cButton", "", "color", "success", 3, "click", "disabled"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], ["size", "sm"], [1, "alert", "alert-danger"], [1, "text-center", "py-5"], ["color", "primary"], [1, "mt-2", "text-muted"], [1, "mb-3", 3, "md"], [1, "form-label"], ["name", "poNumber", "placeholder", "Auto-generated if left blank", 1, "form-control", 3, "ngModelChange", "ngModel", "readonly"], [1, "text-muted"], ["type", "date", "name", "poDate", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "req"], ["name", "supplierId", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "supplierCode", "placeholder", "From supplier master", 1, "form-control", 3, "ngModelChange", "ngModel"], ["disabled", "", "readonly", "", 1, "form-control", 3, "value"], ["name", "buyerLocationId", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["name", "deliveryLocationId", 1, "form-select", 3, "ngModelChange", "ngModel"], ["name", "departmentId", 1, "form-select", 3, "ngModelChange", "ngModel"], ["readonly", "", 1, "form-control", 3, "value"], ["type", "date", "name", "deliveryDate", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "poType", 1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "paymentTerms", "placeholder", "e.g. 30 days from invoice date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "deliveryTerms", "placeholder", "e.g. FOB destination", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.01", "name", "taxPercentage", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", "name", "remarks", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", "name", "internalNotes", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-between", "align-items-center"], ["cButton", "", "color", "primary", "size", "sm", 3, "click"], [1, "p-0"], [1, "table-responsive"], [1, "table", "table-sm", "align-middle", "mb-0", "items-table"], [2, "width", "44px"], [2, "width", "120px"], [2, "min-width", "220px"], [2, "width", "110px"], [2, "width", "100px"], [2, "width", "90px"], [1, "text-end", 2, "width", "120px"], [1, "text-end", 2, "width", "110px"], [2, "width", "56px"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mb-4"], ["rows", "4", "name", "otherTerms", "placeholder", "Warranty, penalties, inspection requirements\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "totals-card"], [1, "d-flex", "justify-content-between", "py-1"], [1, "my-2"], [1, "d-flex", "justify-content-between", "py-1", "grand-total"], [1, "text-muted", "small", "mt-3", "mb-0"], [3, "value"], ["placeholder", "Code", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "name"], ["placeholder", "Item / product description", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "name"], ["type", "number", "min", "0", "step", "0.001", 1, "form-control", "form-control-sm", "text-end", 3, "ngModelChange", "ngModel", "name"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel", "name"], ["type", "number", "min", "0", "step", "0.01", 1, "form-control", "form-control-sm", "text-end", 3, "ngModelChange", "ngModel", "name"], [1, "text-end", "fw-semibold"], [1, "text-end"], [3, "color"], [1, "text-center"], ["cButton", "", "color", "danger", "variant", "ghost", "size", "sm", "title", "Remove item", 3, "click"]], template: function PoCreateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-container", 0)(1, "c-row", 1)(2, "c-col", 2)(3, "h4", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "c-col", 5)(8, "button", 6);
    \u0275\u0275listener("click", function PoCreateComponent_Template_button_click_8_listener() {
      return ctx.cancel();
    });
    \u0275\u0275text(9, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 7);
    \u0275\u0275listener("click", function PoCreateComponent_Template_button_click_10_listener() {
      return ctx.savePO(false);
    });
    \u0275\u0275template(11, PoCreateComponent_c_spinner_11_Template, 1, 0, "c-spinner", 8);
    \u0275\u0275text(12, " Save as Draft ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 9);
    \u0275\u0275listener("click", function PoCreateComponent_Template_button_click_13_listener() {
      return ctx.savePO(true);
    });
    \u0275\u0275text(14, " Save & Release to Supplier ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, PoCreateComponent_div_15_Template, 2, 1, "div", 10)(16, PoCreateComponent_div_16_Template, 4, 0, "div", 11)(17, PoCreateComponent_ng_container_17_Template, 179, 64, "ng-container", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("md", 8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Edit Purchase Order" : "Create Purchase Order", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Editing " + (ctx.po.poNumber || "this PO") + " \u2014 only DRAFT and returned POs can be changed." : "Entered manually. The PO is saved as DRAFT and enters the approval flow when you submit it.", " ");
    \u0275\u0275advance();
    \u0275\u0275property("md", 4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isSaving || ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isSaving || ctx.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
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
  CardBodyComponent,
  CardHeaderComponent,
  ButtonDirective,
  SpinnerComponent,
  TableModule,
  BadgeComponent,
  DecimalPipe
], styles: ["\n\n.po-create[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.po-create[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.po-create[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--cui-danger, #e55353);\n  font-weight: 700;\n}\n.po-create[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n.po-create[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.po-create[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.po-create[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.po-create[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.po-create[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.po-create[_ngcontent-%COMP%]   .totals-card[_ngcontent-%COMP%]   .grand-total[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n/*# sourceMappingURL=po-create.component.css.map */"] });
var PoCreateComponent = _PoCreateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoCreateComponent, [{
    type: Component,
    args: [{ selector: "app-po-create", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ContainerComponent,
      RowComponent,
      ColComponent,
      CardComponent,
      CardBodyComponent,
      CardHeaderComponent,
      ButtonDirective,
      SpinnerComponent,
      TableModule,
      BadgeComponent
    ], template: `<c-container fluid class="po-create">

  <!-- ===================== HEADER BAR ===================== -->
  <c-row class="mb-3">
    <c-col [md]="8">
      <h4 class="page-title mb-1">
        {{ isEditMode ? 'Edit Purchase Order' : 'Create Purchase Order' }}
      </h4>
      <p class="page-subtitle mb-0">
        {{ isEditMode
            ? 'Editing ' + (po.poNumber || 'this PO') + ' \u2014 only DRAFT and returned POs can be changed.'
            : 'Entered manually. The PO is saved as DRAFT and enters the approval flow when you submit it.' }}
      </p>
    </c-col>
    <c-col [md]="4" class="text-end">
      <button cButton color="secondary" variant="outline" class="me-2"
              (click)="cancel()" [disabled]="isSaving">
        Cancel
      </button>
      <button cButton color="primary" variant="outline" class="me-2"
              (click)="savePO(false)" [disabled]="isSaving || isLoading">
        <c-spinner size="sm" *ngIf="isSaving"></c-spinner>
        Save as Draft
      </button>
      <button cButton color="success"
              (click)="savePO(true)" [disabled]="isSaving || isLoading">
        Save &amp; Release to Supplier
      </button>
    </c-col>
  </c-row>

  <div class="alert alert-danger" *ngIf="errorMessage">{{ errorMessage }}</div>

  <div class="text-center py-5" *ngIf="isLoading">
    <c-spinner color="primary"></c-spinner>
    <p class="mt-2 text-muted">Loading purchase order\u2026</p>
  </div>

  <ng-container *ngIf="!isLoading">

    <!-- ===================== PO HEADER ===================== -->
    <c-card class="mb-3">
      <c-card-header><strong>PO Details</strong></c-card-header>
      <c-card-body>
        <c-row>

          <c-col [md]="3" class="mb-3">
            <label class="form-label">PO Number</label>
            <input class="form-control" [(ngModel)]="po.poNumber" name="poNumber"
                   [readonly]="isEditMode"
                   placeholder="Auto-generated if left blank">
            <small class="text-muted">Leave blank to auto-generate.</small>
          </c-col>

          <c-col [md]="3" class="mb-3">
            <label class="form-label">PO Date</label>
            <input type="date" class="form-control" [(ngModel)]="po.poDate" name="poDate">
          </c-col>

          <c-col [md]="3" class="mb-3">
            <label class="form-label">Supplier <span class="req">*</span></label>
            <select class="form-select" [(ngModel)]="po.supplierId" name="supplierId"
                    (change)="onSupplierChange()">
              <option [ngValue]="null">\u2014 Select supplier \u2014</option>
              <option *ngFor="let s of suppliers" [ngValue]="s.id">{{ s.companyName }}</option>
            </select>
          </c-col>

          <c-col [md]="3" class="mb-3">
            <label class="form-label">Supplier Code</label>
            <input class="form-control" [(ngModel)]="po.supplierCode" name="supplierCode"
                   placeholder="From supplier master">
          </c-col>

          <c-col [md]="3" class="mb-3">
            <label class="form-label">Buyer Company</label>
            <input class="form-control" [value]="buyerName" disabled readonly>
            <small class="text-muted">Fixed \u2014 this is a single-buyer application.</small>
          </c-col>

          <c-col [md]="3" class="mb-3">
            <label class="form-label">Buying Location</label>
            <select class="form-select" [(ngModel)]="po.buyerLocationId" name="buyerLocationId"
                    (change)="onLocationChange()">
              <option [ngValue]="null">\u2014 Select location \u2014</option>
              <option *ngFor="let l of locations" [ngValue]="l.id">{{ l.locationName }}</option>
            </select>
            <small class="text-muted">Sets the PO currency.</small>
          </c-col>

          <c-col [md]="3" class="mb-3">
            <label class="form-label">Delivery Location</label>
            <select class="form-select" [(ngModel)]="po.deliveryLocationId" name="deliveryLocationId">
              <option [ngValue]="null">\u2014 Same as buying location \u2014</option>
              <option *ngFor="let l of locations" [ngValue]="l.id">{{ l.locationName }}</option>
            </select>
          </c-col>

          <c-col [md]="3" class="mb-3">
            <label class="form-label">Department / Buyer Group</label>
            <select class="form-select" [(ngModel)]="po.departmentId" name="departmentId">
              <option [ngValue]="null">\u2014 None \u2014</option>
              <option *ngFor="let d of departments" [ngValue]="d.id">{{ d.departmentName }}</option>
            </select>
          </c-col>

          <c-col [md]="3" class="mb-3">
            <label class="form-label">Currency</label>
            <input class="form-control" [value]="po.currencyCode + ' (' + po.currencySymbol + ')'" readonly>
          </c-col>

          <c-col [md]="3" class="mb-3">
            <label class="form-label">Delivery Date</label>
            <input type="date" class="form-control" [(ngModel)]="po.deliveryDate" name="deliveryDate">
          </c-col>

          <c-col [md]="3" class="mb-3">
            <label class="form-label">PO Type</label>
            <select class="form-select" [(ngModel)]="po.poType" name="poType">
              <option *ngFor="let t of poTypeOptions" [value]="t">{{ t }}</option>
            </select>
          </c-col>

          <c-col [md]="3" class="mb-3">
            <label class="form-label">PO Status</label>
            <input class="form-control" [value]="po.status || 'DRAFT'" readonly>
          </c-col>

          <c-col [md]="4" class="mb-3">
            <label class="form-label">Payment Terms</label>
            <input class="form-control" [(ngModel)]="po.paymentTerms" name="paymentTerms"
                   placeholder="e.g. 30 days from invoice date">
          </c-col>

          <c-col [md]="4" class="mb-3">
            <label class="form-label">Delivery Terms</label>
            <input class="form-control" [(ngModel)]="po.deliveryTerms" name="deliveryTerms"
                   placeholder="e.g. FOB destination">
          </c-col>

          <c-col [md]="4" class="mb-3">
            <label class="form-label">Header Tax %</label>
            <input type="number" min="0" step="0.01" class="form-control"
                   [(ngModel)]="po.taxPercentage" name="taxPercentage">
            <small class="text-muted">Used only when no line has its own tax rate.</small>
          </c-col>

          <c-col [md]="6" class="mb-3">
            <label class="form-label">Remarks</label>
            <textarea class="form-control" rows="2" [(ngModel)]="po.remarks" name="remarks"></textarea>
          </c-col>

          <c-col [md]="6" class="mb-3">
            <label class="form-label">Internal Notes</label>
            <textarea class="form-control" rows="2" [(ngModel)]="po.internalNotes" name="internalNotes"></textarea>
            <small class="text-muted">Not shown to the supplier.</small>
          </c-col>

        </c-row>
      </c-card-body>
    </c-card>

    <!-- ===================== LINE ITEMS ===================== -->
    <c-card class="mb-3">
      <c-card-header class="d-flex justify-content-between align-items-center">
        <strong>Items</strong>
        <button cButton color="primary" size="sm" (click)="addItem()">+ Add Item</button>
      </c-card-header>
      <c-card-body class="p-0">
        <div class="table-responsive">
          <table class="table table-sm align-middle mb-0 items-table">
            <thead>
              <tr>
                <th style="width:44px">#</th>
                <th style="width:120px">Item Code</th>
                <th style="min-width:220px">Description <span class="req">*</span></th>
                <th style="width:110px">Qty <span class="req">*</span></th>
                <th style="width:100px">Unit <span class="req">*</span></th>
                <th style="width:120px">Unit Price <span class="req">*</span></th>
                <th style="width:110px">Discount</th>
                <th style="width:90px">Tax %</th>
                <th style="width:120px" class="text-end">Total</th>
                <th style="width:110px">Supplied</th>
                <th style="width:110px" class="text-end">Remaining</th>
                <th style="width:56px"></th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of items; let i = index; trackBy: trackByIndex">
                <td class="text-muted">{{ i + 1 }}</td>
                <td>
                  <input class="form-control form-control-sm" [(ngModel)]="item.itemCode"
                         [name]="'code' + i" placeholder="Code">
                </td>
                <td>
                  <input class="form-control form-control-sm" [(ngModel)]="item.itemDescription"
                         [name]="'desc' + i" placeholder="Item / product description">
                </td>
                <td>
                  <input type="number" min="0" step="0.001" class="form-control form-control-sm text-end"
                         [(ngModel)]="item.quantity" [name]="'qty' + i">
                </td>
                <td>
                  <select class="form-select form-select-sm" [(ngModel)]="item.uom" [name]="'uom' + i">
                    <option *ngFor="let u of uomOptions" [value]="u">{{ u }}</option>
                  </select>
                </td>
                <td>
                  <input type="number" min="0" step="0.01" class="form-control form-control-sm text-end"
                         [(ngModel)]="item.unitRate" [name]="'rate' + i">
                </td>
                <td>
                  <input type="number" min="0" step="0.01" class="form-control form-control-sm text-end"
                         [(ngModel)]="item.discountAmount" [name]="'disc' + i">
                </td>
                <td>
                  <input type="number" min="0" step="0.01" class="form-control form-control-sm text-end"
                         [(ngModel)]="item.taxPercentage" [name]="'tax' + i">
                </td>
                <td class="text-end fw-semibold">
                  {{ po.currencySymbol }}{{ lineTotal(item) | number:'1.2-2' }}
                </td>
                <td>
                  <input type="number" min="0" step="0.001" class="form-control form-control-sm text-end"
                         [(ngModel)]="item.suppliedQuantity" [name]="'sup' + i">
                </td>
                <td class="text-end">
                  <c-badge [color]="lineRemaining(item) === 0 ? 'success' : 'warning'">
                    {{ lineRemaining(item) | number:'1.0-3' }}
                  </c-badge>
                </td>
                <td class="text-center">
                  <button cButton color="danger" variant="ghost" size="sm"
                          (click)="removeItem(i)" title="Remove item">\u2715</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </c-card-body>
    </c-card>

    <!-- ===================== TOTALS ===================== -->
    <c-row class="mb-4">
      <c-col [md]="7">
        <c-card>
          <c-card-header><strong>Other Terms &amp; Conditions</strong></c-card-header>
          <c-card-body>
            <textarea class="form-control" rows="4" [(ngModel)]="po.otherTerms" name="otherTerms"
                      placeholder="Warranty, penalties, inspection requirements\u2026"></textarea>
          </c-card-body>
        </c-card>
      </c-col>

      <c-col [md]="5">
        <c-card class="totals-card">
          <c-card-header><strong>Summary</strong></c-card-header>
          <c-card-body>
            <div class="d-flex justify-content-between py-1">
              <span class="text-muted">Subtotal</span>
              <span>{{ po.currencySymbol }}{{ subtotal | number:'1.2-2' }}</span>
            </div>
            <div class="d-flex justify-content-between py-1">
              <span class="text-muted">Tax</span>
              <span>{{ po.currencySymbol }}{{ totalTax | number:'1.2-2' }}</span>
            </div>
            <hr class="my-2">
            <div class="d-flex justify-content-between py-1 grand-total">
              <strong>Grand Total</strong>
              <strong>{{ po.currencySymbol }}{{ grandTotal | number:'1.2-2' }}</strong>
            </div>
            <p class="text-muted small mt-3 mb-0">
              Totals are recalculated by the server when the PO is saved. If these figures
              differ from the saved PO, the saved values are the authoritative ones.
            </p>
          </c-card-body>
        </c-card>
      </c-col>
    </c-row>

  </ng-container>
</c-container>
`, styles: ["/* src/app/views/base/po-create/po-create.component.css */\n.po-create .page-title {\n  font-weight: 600;\n}\n.po-create .page-subtitle {\n  font-size: 0.875rem;\n  color: var(--cui-secondary-color, #6c757d);\n}\n.po-create .req {\n  color: var(--cui-danger, #e55353);\n  font-weight: 700;\n}\n.po-create .form-label {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n.po-create .table-responsive {\n  overflow-x: auto;\n}\n.po-create .items-table th {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.po-create .items-table td {\n  vertical-align: middle;\n}\n.po-create .items-table input,\n.po-create .items-table select {\n  min-width: 0;\n}\n.po-create .totals-card .grand-total {\n  font-size: 1.05rem;\n}\n/*# sourceMappingURL=po-create.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: MessageService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PoCreateComponent, { className: "PoCreateComponent", filePath: "src/app/views/base/po-create/po-create.component.ts", lineNumber: 36 });
})();
export {
  PoCreateComponent
};
//# sourceMappingURL=chunk-DNC6OCWV.js.map
