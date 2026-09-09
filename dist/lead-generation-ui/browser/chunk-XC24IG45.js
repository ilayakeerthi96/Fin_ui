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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BCCUO726.js";
import "./chunk-SO7Q7VKX.js";

// src/app/views/base/po-details/po-details.component.ts
var _c0 = () => ["Name", "Signature", "Designation", "Date"];
var _c1 = () => ({ value: "GOODS", label: "Goods" });
var _c2 = () => ({ value: "SERVICE", label: "Service" });
var _c3 = () => ({ value: "BLANKET_CONTRACT", label: "Blanket / Contract" });
var _c4 = () => ({ value: "PROJECT_MILESTONE", label: "Project / Milestone" });
var _c5 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function PODetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "c-spinner", 19);
    \u0275\u0275elementStart(2, "p", 20);
    \u0275\u0275text(3, "Loading purchase order...");
    \u0275\u0275elementEnd()();
  }
}
function PODetailsComponent_div_2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275element(1, "i", 108);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", label_r3, " ");
  }
}
function PODetailsComponent_div_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275element(1, "i", 110);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Expires ", ctx_r3.formatDateShort(ctx_r3.po.expiryDate), " ");
  }
}
function PODetailsComponent_div_2_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 111);
    \u0275\u0275listener("click", function PODetailsComponent_div_2_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEditModal());
    });
    \u0275\u0275element(1, "i", 112);
    \u0275\u0275text(2, "Edit ");
    \u0275\u0275elementEnd();
  }
}
function PODetailsComponent_div_2_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 113);
    \u0275\u0275listener("click", function PODetailsComponent_div_2_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.printPO());
    });
    \u0275\u0275element(1, "i", 114);
    \u0275\u0275text(2, "Print ");
    \u0275\u0275elementEnd();
  }
}
function PODetailsComponent_div_2_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 115);
  }
}
function PODetailsComponent_div_2_i_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 116);
  }
}
function PODetailsComponent_div_2_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 115);
  }
}
function PODetailsComponent_div_2_i_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 117);
  }
}
function PODetailsComponent_div_2_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 115);
  }
}
function PODetailsComponent_div_2_i_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 118);
  }
}
function PODetailsComponent_div_2_img_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 119);
    \u0275\u0275listener("error", function PODetailsComponent_div_2_img_41_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onLogoError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("alt", \u0275\u0275interpolate1("", ctx_r3.po.buyerName, " Logo"))("src", ctx_r3.getBuyerLogoSrc(), \u0275\u0275sanitizeUrl);
  }
}
function PODetailsComponent_div_2_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getBuyerInitials(), " ");
  }
}
function PODetailsComponent_div_2_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" CIN: ", ctx_r3.po.buyerCin, " \xA0|\xA0 GSTIN: ", ctx_r3.po.buyerGstin || "NIL", " \xA0|\xA0 PAN: ", ctx_r3.po.buyerPan || "NIL", " \xA0|\xA0 Email: ", ctx_r3.po.buyerEmail || "NIL", " ");
  }
}
function PODetailsComponent_div_2_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" GSTIN: ", ctx_r3.po.buyerGstin || "NIL", " \xA0|\xA0 PAN: ", ctx_r3.po.buyerPan || "NIL", " \xA0|\xA0 Email: ", ctx_r3.po.buyerEmail || "NIL", " ");
  }
}
function PODetailsComponent_div_2_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r3.po.supplierCity);
  }
}
function PODetailsComponent_div_2_div_72_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" - ", ctx_r3.po.supplierPincode);
  }
}
function PODetailsComponent_div_2_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 60);
    \u0275\u0275text(2, "City / Pincode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 61);
    \u0275\u0275text(4, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 62);
    \u0275\u0275text(6);
    \u0275\u0275template(7, PODetailsComponent_div_2_div_72_span_7_Template, 2, 1, "span", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.po.supplierCity || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.po.supplierPincode);
  }
}
function PODetailsComponent_div_2_div_180_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("CONTACT NAME : ", ctx_r3.po.buyerContactName);
  }
}
function PODetailsComponent_div_2_div_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("CONTACT NO \xA0\xA0: ", ctx_r3.po.buyerContactPhone);
  }
}
function PODetailsComponent_div_2_div_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("CONTACT NAME : ", ctx_r3.po.deliveryContactName);
  }
}
function PODetailsComponent_div_2_div_193_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("CONTACT NO \xA0\xA0: ", ctx_r3.po.deliveryContactPhone);
  }
}
function PODetailsComponent_div_2_tr_222_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Brand: ", item_r8.brandMakeModel);
  }
}
function PODetailsComponent_div_2_tr_222_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r8.specifications);
  }
}
function PODetailsComponent_div_2_tr_222_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Delivery: ", item_r8.deliveryDays, " days");
  }
}
function PODetailsComponent_div_2_tr_222_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \xA0|\xA0 ");
    \u0275\u0275elementEnd();
  }
}
function PODetailsComponent_div_2_tr_222_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Warranty: ", item_r8.warrantyMonths, " months");
  }
}
function PODetailsComponent_div_2_tr_222_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275template(1, PODetailsComponent_div_2_tr_222_div_8_span_1_Template, 2, 1, "span", 4)(2, PODetailsComponent_div_2_tr_222_div_8_span_2_Template, 2, 0, "span", 4)(3, PODetailsComponent_div_2_tr_222_div_8_span_3_Template, 2, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8.deliveryDays);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8.deliveryDays && item_r8.warrantyMonths);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8.warrantyMonths);
  }
}
function PODetailsComponent_div_2_tr_222_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Original: ", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(2, 2, item_r8.originalQuotedPrice, "1.2-2"), " ");
  }
}
function PODetailsComponent_div_2_tr_222_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 132);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, item_r8.discountPercentage, "1.2-2"), "% ");
  }
}
function PODetailsComponent_div_2_tr_222_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PODetailsComponent_div_2_tr_222_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 133);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementStart(3, "div", 134);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 3, item_r8.taxPercentage, "1.2-2"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" +", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(5, 6, item_r8.taxAmount, "1.2-2"), " ");
  }
}
function PODetailsComponent_div_2_tr_222_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PODetailsComponent_div_2_tr_222_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Pre-tax: ", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(2, 2, item_r8.lineTotal, "1.2-2"), " ");
  }
}
function PODetailsComponent_div_2_tr_222_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 80)(4, "div", 121);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PODetailsComponent_div_2_tr_222_div_6_Template, 2, 1, "div", 122)(7, PODetailsComponent_div_2_tr_222_div_7_Template, 2, 1, "div", 122)(8, PODetailsComponent_div_2_tr_222_div_8_Template, 4, 3, "div", 122)(9, PODetailsComponent_div_2_tr_222_div_9_Template, 3, 5, "div", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 124);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 81);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 79);
    \u0275\u0275template(16, PODetailsComponent_div_2_tr_222_span_16_Template, 3, 4, "span", 125)(17, PODetailsComponent_div_2_tr_222_span_17_Template, 2, 0, "span", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 79);
    \u0275\u0275template(19, PODetailsComponent_div_2_tr_222_span_19_Template, 6, 9, "span", 127)(20, PODetailsComponent_div_2_tr_222_span_20_Template, 2, 0, "span", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 128);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275template(24, PODetailsComponent_div_2_tr_222_div_24_Template, 3, 5, "div", 129);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.slNo || i_r9 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.itemDescription || "NIL");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8.brandMakeModel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8.specifications);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8.deliveryDays || item_r8.warrantyMonths);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8.originalQuotedPrice && item_r8.discountPercentage > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.quantity != null ? item_r8.quantity : "NIL");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.unitRate != null ? \u0275\u0275pipeBind2(14, 14, item_r8.unitRate, "1.2-2") : "NIL");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r8.discountPercentage > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r8.discountPercentage || item_r8.discountPercentage === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r8.taxPercentage > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r8.taxPercentage || item_r8.taxPercentage === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 17, item_r8.lineTotalWithTax != null ? item_r8.lineTotalWithTax : item_r8.lineTotal, "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r8.taxPercentage > 0);
  }
}
function PODetailsComponent_div_2_tr_223_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 136)(1, "td", 137);
    \u0275\u0275text(2, "\xA0");
    \u0275\u0275elementEnd()();
  }
}
function PODetailsComponent_div_2_tr_225_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 138);
    \u0275\u0275text(2, "Subtotal (Pre-tax)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 81);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r3.po.subtotal, "1.2-2"));
  }
}
function PODetailsComponent_div_2_tr_226_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 138);
    \u0275\u0275text(2, "Other Charges (Training/Installation/etc.)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 81);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r3.getOtherChargesTotal(), "1.2-2"));
  }
}
function PODetailsComponent_div_2_ng_container_227_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td", 139);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 140);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const taxGroup_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" GST / Tax (", taxGroup_r10.rate, "%) on ", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(4, 4, taxGroup_r10.base, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, taxGroup_r10.amount, "1.2-2"));
  }
}
function PODetailsComponent_div_2_tr_228_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 141)(1, "td", 138)(2, "span", 142);
    \u0275\u0275text(3, "Round Off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 143);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u2212 ", \u0275\u0275pipeBind2(6, 1, ctx_r3.getOverallDiscount(), "1.2-2"));
  }
}
function PODetailsComponent_div_2_div_235_tr_26_Template(rf, ctx) {
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
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 148);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    const ci_r12 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ci_r12 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r11.chargeType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r11.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r11.uom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 10, c_r11.rate, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 13, c_r11.amount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", c_r11.taxPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 16, c_r11.taxAmount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 19, c_r11.totalAmount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r11.remarks);
  }
}
function PODetailsComponent_div_2_div_235_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 144)(2, "table", 145)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Sl No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Charge Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "UOM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Tax %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Tax Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Remarks");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, PODetailsComponent_div_2_div_235_tr_26_Template, 25, 22, "tr", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "tfoot")(28, "tr", 146)(29, "td", 147);
    \u0275\u0275text(30, "Total Other Charges:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "td");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r3.getOtherCharges());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 2, ctx_r3.getOtherChargesTotal(), "1.2-2"));
  }
}
function PODetailsComponent_div_2_div_253_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.po.otherTerms);
  }
}
function PODetailsComponent_div_2_ng_template_254_div_13_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r3.po.advancePaymentPercentage, "% of order value)");
  }
}
function PODetailsComponent_div_2_ng_template_254_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275template(3, PODetailsComponent_div_2_ng_template_254_div_13_ng_container_3_Template, 2, 1, "ng-container", 4);
    \u0275\u0275text(4, " is required ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ". Balance payable as per invoice terms. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" 7) Advance Payment: ", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(2, 4, ctx_r3.po.advancePaymentAmount, "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.po.advancePaymentPercentage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.advancePaymentDueLabel());
  }
}
function PODetailsComponent_div_2_ng_template_254_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149)(1, "div");
    \u0275\u0275text(2, "1) Kindly acknowledge and confirm the Order Immediately within 7 Days from the date of Purchase Order, failing which, it shall be deemed to be accepted.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4, "2) Please mention purchase order number in the invoice.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6, "3) TDS and Other Statutory deductions will be deducted as applicable.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275text(8, "4) Deliveries do not exceed ordered Quantity.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10, "5) GST as applicable.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PODetailsComponent_div_2_ng_template_254_div_13_Template, 8, 7, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("6) Payment Terms: ", ctx_r3.po.paymentTerms || "NIL");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.po.advancePaymentRequired);
  }
}
function PODetailsComponent_div_2_div_256_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r3.po.advancePaymentPercentage, "% of order value)");
  }
}
function PODetailsComponent_div_2_div_256_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 66);
    \u0275\u0275text(2, "ADVANCE PAYMENT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 149)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275template(7, PODetailsComponent_div_2_div_256_ng_container_7_Template, 2, 1, "ng-container", 4);
    \u0275\u0275text(8, " required ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, ". ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(6, 4, ctx_r3.po.advancePaymentAmount, "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.po.advancePaymentPercentage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.advancePaymentDueLabel());
  }
}
function PODetailsComponent_div_2_div_257_tr_18_Template(rf, ctx) {
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
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r13.slNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r13.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r13.percentage ? m_r13.percentage + "%" : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r13.amount ? \u0275\u0275pipeBind2(9, 5, m_r13.amount, "1.2-2") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r13.remarks);
  }
}
function PODetailsComponent_div_2_div_257_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 66);
    \u0275\u0275text(2, "PAYMENT PROVISIONS / MILESTONES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 144)(4, "table", 150)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "Sl No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Milestone / Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Remarks");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, PODetailsComponent_div_2_div_257_tr_18_Template, 12, 8, "tr", 82);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r3.getPaymentMilestones());
  }
}
function PODetailsComponent_div_2_div_258_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 154)(1, "div", 155)(2, "span", 156);
    \u0275\u0275text(3, "Total PO Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 157);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 155)(8, "span", 156);
    \u0275\u0275text(9, "Released");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 158);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 155)(14, "span", 156);
    \u0275\u0275text(15, "Received");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 159);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 155)(20, "span", 156);
    \u0275\u0275text(21, "Remaining");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 160);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 161);
    \u0275\u0275listener("click", function PODetailsComponent_div_2_div_258_div_4_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openReleaseModal());
    });
    \u0275\u0275element(26, "i", 162);
    \u0275\u0275text(27, "Create Release ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(6, 8, ctx_r3.poReleaseSummary.totalPoValue, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(12, 11, ctx_r3.poReleaseSummary.totalReleased, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(18, 14, ctx_r3.poReleaseSummary.totalReceived, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(24, 17, ctx_r3.poReleaseSummary.remaining, "1.2-2"));
  }
}
function PODetailsComponent_div_2_div_258_div_5_tr_17_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 166);
    \u0275\u0275listener("click", function PODetailsComponent_div_2_div_258_div_5_tr_17_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const r_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.issueRelease(r_r16));
    });
    \u0275\u0275text(1, "Issue");
    \u0275\u0275elementEnd();
  }
}
function PODetailsComponent_div_2_div_258_div_5_tr_17_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 167);
    \u0275\u0275listener("click", function PODetailsComponent_div_2_div_258_div_5_tr_17_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const r_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.cancelRelease(r_r16));
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function PODetailsComponent_div_2_div_258_div_5_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 146);
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
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 27);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, PODetailsComponent_div_2_div_258_div_5_tr_17_button_14_Template, 2, 0, "button", 164)(15, PODetailsComponent_div_2_div_258_div_5_tr_17_button_15_Template, 2, 0, "button", 165);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r16 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r16.releaseNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatDateShort(r_r16.releaseDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r16.plannedDeliveryDate ? ctx_r3.formatDateShort(r_r16.plannedDeliveryDate) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(9, 9, r_r16.totalReleasedValue, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r3.releaseStatusBadgeClass(r_r16.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r16.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r16.status === "DRAFT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r16.status !== "CANCELLED");
  }
}
function PODetailsComponent_div_2_div_258_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 163)(1, "table", 150)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Release No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Release Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Planned Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, PODetailsComponent_div_2_div_258_div_5_tr_17_Template, 16, 12, "tr", 82);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r3.poReleases);
  }
}
function PODetailsComponent_div_2_div_258_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275text(1, " No releases have been created against this PO yet. ");
    \u0275\u0275elementEnd();
  }
}
function PODetailsComponent_div_2_div_258_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 66);
    \u0275\u0275text(2, "RELEASE TRACKING \u2014 SUPPLY SCHEDULE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 149);
    \u0275\u0275template(4, PODetailsComponent_div_2_div_258_div_4_Template, 28, 20, "div", 151)(5, PODetailsComponent_div_2_div_258_div_5_Template, 18, 1, "div", 152)(6, PODetailsComponent_div_2_div_258_div_6_Template, 2, 0, "div", 153);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.poReleaseSummary);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.poReleases.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isLoadingReleases && ctx_r3.poReleases.length === 0);
  }
}
function PODetailsComponent_div_2_div_265_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169)(1, "div", 170)(2, "span", 171);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "div", 172);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", f_r18, " :");
  }
}
function PODetailsComponent_div_2_div_274_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169)(1, "div", 170)(2, "span", 171);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "div", 172);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r19 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", f_r19, " :");
  }
}
function PODetailsComponent_div_2_div_276_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.po.approvedByName);
  }
}
function PODetailsComponent_div_2_div_277_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.po.approvedByDesignation);
  }
}
function PODetailsComponent_div_2_div_281_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Digitally Signed on: ", ctx_r3.formatDateShort(ctx_r3.po.approvedAt));
  }
}
function PODetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "c-row", 21)(2, "c-col", 22)(3, "div", 23)(4, "div")(5, "h5", 24);
    \u0275\u0275element(6, "i", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 26)(9, "span", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, PODetailsComponent_div_2_span_11_Template, 3, 1, "span", 28);
    \u0275\u0275elementStart(12, "small", 29);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 30);
    \u0275\u0275element(15, "i", 31);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, PODetailsComponent_div_2_span_17_Template, 3, 1, "span", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 33)(19, "button", 34);
    \u0275\u0275listener("click", function PODetailsComponent_div_2_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goBack());
    });
    \u0275\u0275element(20, "i", 35);
    \u0275\u0275text(21, "Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, PODetailsComponent_div_2_button_22_Template, 3, 0, "button", 36)(23, PODetailsComponent_div_2_button_23_Template, 3, 0, "button", 37);
    \u0275\u0275elementStart(24, "button", 38);
    \u0275\u0275listener("click", function PODetailsComponent_div_2_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.downloadPOExcel());
    });
    \u0275\u0275template(25, PODetailsComponent_div_2_span_25_Template, 1, 0, "span", 16)(26, PODetailsComponent_div_2_i_26_Template, 1, 0, "i", 39);
    \u0275\u0275text(27, "Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 40);
    \u0275\u0275listener("click", function PODetailsComponent_div_2_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.downloadPOPdf());
    });
    \u0275\u0275template(29, PODetailsComponent_div_2_span_29_Template, 1, 0, "span", 16)(30, PODetailsComponent_div_2_i_30_Template, 1, 0, "i", 41);
    \u0275\u0275text(31, "PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 42);
    \u0275\u0275listener("click", function PODetailsComponent_div_2_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.downloadPOCxml());
    });
    \u0275\u0275template(33, PODetailsComponent_div_2_span_33_Template, 1, 0, "span", 16)(34, PODetailsComponent_div_2_i_34_Template, 1, 0, "i", 43);
    \u0275\u0275text(35, "cXML ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "c-row")(37, "c-col", 22)(38, "div", 44)(39, "div", 45)(40, "div", 46);
    \u0275\u0275template(41, PODetailsComponent_div_2_img_41_Template, 1, 3, "img", 47)(42, PODetailsComponent_div_2_div_42_Template, 2, 1, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 49)(44, "div", 50);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, PODetailsComponent_div_2_div_46_Template, 2, 4, "div", 51)(47, PODetailsComponent_div_2_div_47_Template, 2, 3, "div", 51);
    \u0275\u0275elementStart(48, "div", 52);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(50, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 54)(52, "span", 55);
    \u0275\u0275text(53, "PURCHASE ORDER");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 56)(55, "div", 57)(56, "div", 58)(57, "div", 59)(58, "span", 60);
    \u0275\u0275text(59, "Vendor Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 61);
    \u0275\u0275text(61, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 62);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 59)(65, "span", 60);
    \u0275\u0275text(66, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 61);
    \u0275\u0275text(68, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 62);
    \u0275\u0275text(70);
    \u0275\u0275template(71, PODetailsComponent_div_2_span_71_Template, 2, 1, "span", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(72, PODetailsComponent_div_2_div_72_Template, 8, 2, "div", 63);
    \u0275\u0275elementStart(73, "div", 59)(74, "span", 60);
    \u0275\u0275text(75, "Contact Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 61);
    \u0275\u0275text(77, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 62);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 59)(81, "span", 60);
    \u0275\u0275text(82, "Contact Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 61);
    \u0275\u0275text(84, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span", 62);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 59)(88, "span", 60);
    \u0275\u0275text(89, "Vendor GSTIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 61);
    \u0275\u0275text(91, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "span", 62);
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "div", 64)(95, "div", 59)(96, "span", 60);
    \u0275\u0275text(97, "Order No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "span", 61);
    \u0275\u0275text(99, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "span", 65);
    \u0275\u0275text(101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 59)(103, "span", 60);
    \u0275\u0275text(104, "Created Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "span", 61);
    \u0275\u0275text(106, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "span", 62);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 59)(110, "span", 60);
    \u0275\u0275text(111, "Document Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span", 61);
    \u0275\u0275text(113, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "span", 62);
    \u0275\u0275text(115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 59)(117, "span", 60);
    \u0275\u0275text(118, "Quote No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "span", 61);
    \u0275\u0275text(120, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "span", 62);
    \u0275\u0275text(122);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 59)(124, "span", 60);
    \u0275\u0275text(125, "Vendor Order No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "span", 61);
    \u0275\u0275text(127, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "span", 62);
    \u0275\u0275text(129, "NIL");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "div", 59)(131, "span", 60);
    \u0275\u0275text(132, "Requested Receipt:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(133, "span", 61)(134, "span", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "div", 59)(136, "span", 60);
    \u0275\u0275text(137, "Indent No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "span", 61);
    \u0275\u0275text(139, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "span", 62);
    \u0275\u0275text(141);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "div", 59)(143, "span", 60);
    \u0275\u0275text(144, "Purchaser Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "span", 61);
    \u0275\u0275text(146, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "span", 62);
    \u0275\u0275text(148);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(149, "div", 59)(150, "span", 60);
    \u0275\u0275text(151, "Campaign No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "span", 61);
    \u0275\u0275text(153, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "span", 62);
    \u0275\u0275text(155);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div", 59)(157, "span", 60);
    \u0275\u0275text(158, "Responsibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "span", 61);
    \u0275\u0275text(160, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "span", 62);
    \u0275\u0275text(162);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(163, "div", 56)(164, "div", 66);
    \u0275\u0275text(165, "DELIVERY INSTRUCTIONS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "div", 67);
    \u0275\u0275text(167);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "div", 56)(169, "div", 57)(170, "div", 68)(171, "div", 66);
    \u0275\u0275text(172, "BILLING ADDRESS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "div", 67)(174, "div", 69);
    \u0275\u0275text(175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "div");
    \u0275\u0275text(177);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "div");
    \u0275\u0275text(179);
    \u0275\u0275elementEnd();
    \u0275\u0275template(180, PODetailsComponent_div_2_div_180_Template, 2, 1, "div", 4)(181, PODetailsComponent_div_2_div_181_Template, 2, 1, "div", 4);
    \u0275\u0275elementStart(182, "div");
    \u0275\u0275text(183);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(184, "div", 70)(185, "div", 66);
    \u0275\u0275text(186, "SHIPPING ADDRESS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(187, "div", 67)(188, "div", 69);
    \u0275\u0275text(189);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(190, "div");
    \u0275\u0275text(191);
    \u0275\u0275elementEnd();
    \u0275\u0275template(192, PODetailsComponent_div_2_div_192_Template, 2, 1, "div", 4)(193, PODetailsComponent_div_2_div_193_Template, 2, 1, "div", 4);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(194, "div", 56)(195, "div", 71)(196, "table", 72)(197, "colgroup");
    \u0275\u0275element(198, "col", 73)(199, "col", 74)(200, "col", 75)(201, "col", 76)(202, "col", 77)(203, "col", 77)(204, "col", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(205, "thead")(206, "tr")(207, "th", 79);
    \u0275\u0275text(208, "S.No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "th", 80);
    \u0275\u0275text(210, "Description of Goods / Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "th", 79);
    \u0275\u0275text(212, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "th", 81);
    \u0275\u0275text(214);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(215, "th", 79);
    \u0275\u0275text(216, "Discount %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(217, "th", 79);
    \u0275\u0275text(218, "Tax %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "th", 81);
    \u0275\u0275text(220);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(221, "tbody");
    \u0275\u0275template(222, PODetailsComponent_div_2_tr_222_Template, 25, 20, "tr", 82)(223, PODetailsComponent_div_2_tr_223_Template, 3, 0, "tr", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "tfoot");
    \u0275\u0275template(225, PODetailsComponent_div_2_tr_225_Template, 6, 4, "tr", 4)(226, PODetailsComponent_div_2_tr_226_Template, 6, 4, "tr", 4)(227, PODetailsComponent_div_2_ng_container_227_Template, 8, 10, "ng-container", 82)(228, PODetailsComponent_div_2_tr_228_Template, 7, 4, "tr", 84);
    \u0275\u0275elementStart(229, "tr", 85)(230, "td", 86);
    \u0275\u0275text(231);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(232, "td", 87);
    \u0275\u0275text(233);
    \u0275\u0275pipe(234, "number");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(235, PODetailsComponent_div_2_div_235_Template, 35, 5, "div", 88);
    \u0275\u0275elementStart(236, "div", 89)(237, "span", 90);
    \u0275\u0275text(238, "Amount in Words:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(239, "span", 91);
    \u0275\u0275text(240);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(241, "div", 92)(242, "span", 93);
    \u0275\u0275text(243, "Remarks:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(244, "span", 94);
    \u0275\u0275text(245);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(246, "div", 95)(247, "strong");
    \u0275\u0275text(248, "Company's PAN:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(249);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(250, "div", 56)(251, "div", 66);
    \u0275\u0275text(252, "TERMS & CONDITIONS");
    \u0275\u0275elementEnd();
    \u0275\u0275template(253, PODetailsComponent_div_2_div_253_Template, 2, 1, "div", 96)(254, PODetailsComponent_div_2_ng_template_254_Template, 14, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(256, PODetailsComponent_div_2_div_256_Template, 12, 7, "div", 88)(257, PODetailsComponent_div_2_div_257_Template, 19, 1, "div", 88)(258, PODetailsComponent_div_2_div_258_Template, 7, 3, "div", 88);
    \u0275\u0275elementStart(259, "div", 56)(260, "div", 57)(261, "div", 97)(262, "div", 98);
    \u0275\u0275text(263, "Vendor Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(264, "div", 99);
    \u0275\u0275template(265, PODetailsComponent_div_2_div_265_Template, 5, 1, "div", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(266, "div", 101);
    \u0275\u0275text(267, "For and on behalf of ");
    \u0275\u0275elementStart(268, "strong");
    \u0275\u0275text(269);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(270, "div", 102)(271, "div", 98);
    \u0275\u0275text(272);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(273, "div", 99);
    \u0275\u0275template(274, PODetailsComponent_div_2_div_274_Template, 5, 1, "div", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(275, "div", 101);
    \u0275\u0275template(276, PODetailsComponent_div_2_div_276_Template, 2, 1, "div", 103)(277, PODetailsComponent_div_2_div_277_Template, 2, 1, "div", 104);
    \u0275\u0275text(278, " For and on behalf of ");
    \u0275\u0275elementStart(279, "strong");
    \u0275\u0275text(280);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(281, PODetailsComponent_div_2_div_281_Template, 2, 1, "div", 105);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(282, "div", 106);
    \u0275\u0275text(283);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const defaultTC_r20 = \u0275\u0275reference(255);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r3.po.poNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.getStatusBadgeClass(ctx_r3.po.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.po.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.poTypeLabels(ctx_r3.po.poType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Created on ", ctx_r3.formatDate(ctx_r3.po.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r3.currencySymbol, " ", ctx_r3.currencyCode, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.po.expiryDate);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.po.status === "DRAFT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.po.status === "APPROVED");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.isDownloadingExcel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isDownloadingExcel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isDownloadingExcel);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isDownloadingPdf);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isDownloadingPdf);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isDownloadingPdf);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isDownloadingXml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isDownloadingXml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isDownloadingXml);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.getBuyerLogoSrc());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.getBuyerLogoSrc());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.po.buyerName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.po.buyerCin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.po.buyerCin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.po.buyerLocationAddress || ctx_r3.po.buyerLocationName || "");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r3.po.supplierName || "NIL");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.po.supplierAddress || "NIL");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.po.supplierCity);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.po.supplierCity || ctx_r3.po.supplierState);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.po.supplierContactName || "NIL");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.po.supplierContactPhone || "NIL");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.po.supplierGstin || "NIL");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r3.po.poNumber || "NIL");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.formatDateShort(ctx_r3.po.createdAt) || "NIL");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.formatDateShort(ctx_r3.po.poDate) || "NIL");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.po.referenceQuoteNo || "NIL");
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate(ctx_r3.po.indentNo || "NIL");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.po.purchaserCode || "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.po.campaignNo || "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.po.responsibility || "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.po.dispatchedThrough || ctx_r3.po.destination || "NIL");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r3.po.buyerName || "NIL");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.po.buyerLocationAddress || ctx_r3.po.buyerLocationName || "NIL");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("GSTIN: ", ctx_r3.po.buyerGstin || "NIL");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.po.buyerContactName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.po.buyerContactPhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Email: ", ctx_r3.po.buyerEmail || "NIL");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.po.deliveryLocationName || ctx_r3.po.buyerName || "NIL");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.po.deliveryLocationAddress || ctx_r3.po.buyerLocationAddress || ctx_r3.po.buyerLocationName || "NIL");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.po.deliveryContactName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.po.deliveryContactPhone);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate1("Unit Price (", ctx_r3.currencySymbol, ")");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Total (", ctx_r3.currencyCode, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.po.lineItems);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.spacerRows);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.hasTax());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getOtherChargesTotal() > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getTaxGroups());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getOverallDiscount() > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Grand Total (", ctx_r3.currencyCode, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(234, 79, ctx_r3.po.grandTotal, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.getOtherCharges().length > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.po.amountInWords || "NIL");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.po.buyerRemarks || "NIL");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.po.buyerPan || "NIL", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.po.otherTerms)("ngIfElse", defaultTC_r20);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.po.advancePaymentRequired && ctx_r3.po.otherTerms);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getPaymentMilestones().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isBlanketContract);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(82, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.po.supplierName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.po.buyerName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(83, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.po.approvedByName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.po.approvedByDesignation);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.po.buyerName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.po.approvedAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.po.buyerLocationAddress || ctx_r3.po.buyerLocationName, " ");
  }
}
function PODetailsComponent_div_12_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 195)(1, "input", 196);
    \u0275\u0275listener("change", function PODetailsComponent_div_12_div_31_Template_input_change_1_listener() {
      const opt_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleEditPoType(opt_r23.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 197);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r23 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", "editPoType_" + opt_r23.value)("checked", ctx_r3.isEditPoTypeSelected(opt_r23.value));
    \u0275\u0275advance();
    \u0275\u0275property("for", "editPoType_" + opt_r23.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r23.label);
  }
}
function PODetailsComponent_div_12_div_34_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 29);
    \u0275\u0275text(1, "A reminder email sends automatically 30 days before expiry.");
    \u0275\u0275elementEnd();
  }
}
function PODetailsComponent_div_12_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 182)(1, "label", 180);
    \u0275\u0275text(2, "Expiry Date ");
    \u0275\u0275elementStart(3, "span", 198);
    \u0275\u0275text(4, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 199);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_12_div_34_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.expiryDate, $event) || (ctx_r3.editForm.expiryDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PODetailsComponent_div_12_div_34_small_6_Template, 2, 0, "small", 126);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.expiryDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.editForm.expiryDate);
  }
}
function PODetailsComponent_div_12_div_53_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 187)(1, "input", 209);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_12_div_53_div_25_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.advancePaymentNote, $event) || (ctx_r3.editForm.advancePaymentNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.advancePaymentNote);
  }
}
function PODetailsComponent_div_12_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 178)(1, "div", 182)(2, "label", 200);
    \u0275\u0275text(3, "Advance % ");
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5, "(leave blank to use flat amount)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "input", 201);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_12_div_53_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.advancePaymentPercentage, $event) || (ctx_r3.editForm.advancePaymentPercentage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 182)(8, "label", 200);
    \u0275\u0275text(9, "Flat Advance Amount ");
    \u0275\u0275elementStart(10, "span", 29);
    \u0275\u0275text(11, "(used only if % is blank)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 202);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_12_div_53_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.advancePaymentAmount, $event) || (ctx_r3.editForm.advancePaymentAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 182)(14, "label", 200);
    \u0275\u0275text(15, "Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 203);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_12_div_53_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.advancePaymentDue, $event) || (ctx_r3.editForm.advancePaymentDue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 204);
    \u0275\u0275text(18, "Before Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 205);
    \u0275\u0275text(20, "Before Dispatch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 206);
    \u0275\u0275text(22, "On Order Confirmation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 207);
    \u0275\u0275text(24, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, PODetailsComponent_div_12_div_53_div_25_Template, 2, 1, "div", 208);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.advancePaymentPercentage);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.advancePaymentAmount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.advancePaymentDue);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r3.editForm.advancePaymentDue === "OTHER");
  }
}
function PODetailsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 175)(1, "div", 176);
    \u0275\u0275element(2, "i", 177);
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Line item amounts are not editable. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 178)(7, "div", 179)(8, "label", 180);
    \u0275\u0275text(9, "Payment Terms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 181);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_12_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.paymentTerms, $event) || (ctx_r3.editForm.paymentTerms = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 179)(12, "label", 180);
    \u0275\u0275text(13, "Delivery Terms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 181);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_12_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.deliveryTerms, $event) || (ctx_r3.editForm.deliveryTerms = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 182)(16, "label", 180);
    \u0275\u0275text(17, "Dispatched Through");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 181);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_12_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.dispatchedThrough, $event) || (ctx_r3.editForm.dispatchedThrough = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 182)(20, "label", 180);
    \u0275\u0275text(21, "Mode of Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 181);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_12_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.modeOfPayment, $event) || (ctx_r3.editForm.modeOfPayment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 182)(24, "label", 180);
    \u0275\u0275text(25, "Destination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 181);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_12_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.destination, $event) || (ctx_r3.editForm.destination = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 183)(28, "label", 180);
    \u0275\u0275text(29, "PO / Business Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 184);
    \u0275\u0275template(31, PODetailsComponent_div_12_div_31_Template, 4, 4, "div", 185);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "small", 29);
    \u0275\u0275text(33, "Tick as many as apply.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, PODetailsComponent_div_12_div_34_Template, 7, 2, "div", 186);
    \u0275\u0275elementStart(35, "div", 187)(36, "label", 180);
    \u0275\u0275text(37, "Buyer Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "textarea", 188);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_12_Template_textarea_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.buyerRemarks, $event) || (ctx_r3.editForm.buyerRemarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 187)(40, "label", 180);
    \u0275\u0275text(41, "Terms & Conditions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "textarea", 189);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_12_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.otherTerms, $event) || (ctx_r3.editForm.otherTerms = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 187)(44, "label", 180);
    \u0275\u0275text(45, "Internal Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "textarea", 190);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_12_Template_textarea_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.internalNotes, $event) || (ctx_r3.editForm.internalNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 187);
    \u0275\u0275element(48, "hr");
    \u0275\u0275elementStart(49, "div", 191)(50, "input", 192);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_12_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.advancePaymentRequired, $event) || (ctx_r3.editForm.advancePaymentRequired = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "label", 193);
    \u0275\u0275text(52, "Require advance payment before delivery");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(53, PODetailsComponent_div_12_div_53_Template, 26, 4, "div", 194);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.paymentTerms);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.deliveryTerms);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.dispatchedThrough);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.modeOfPayment);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.destination);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction4(16, _c5, \u0275\u0275pureFunction0(12, _c1), \u0275\u0275pureFunction0(13, _c2), \u0275\u0275pureFunction0(14, _c3), \u0275\u0275pureFunction0(15, _c4)));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.isEditPoTypeSelected("BLANKET_CONTRACT"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.buyerRemarks);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.otherTerms);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.internalNotes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.advancePaymentRequired);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.editForm.advancePaymentRequired);
  }
}
function PODetailsComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 115);
  }
}
function PODetailsComponent_div_19_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
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
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "input", 223);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_19_tr_49_Template_input_ngModelChange_11_listener($event) {
      const li_r29 = \u0275\u0275restoreView(_r28).$implicit;
      \u0275\u0275twoWayBindingSet(li_r29.releasedQuantity, $event) || (li_r29.releasedQuantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const li_r29 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(li_r29.itemDescription);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(li_r29.uom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(li_r29.poQuantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(9, 8, li_r29.unitRate, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", li_r29.releasedQuantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(14, 11, li_r29.releasedQuantity * li_r29.unitRate, "1.2-2"));
  }
}
function PODetailsComponent_div_19_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 115);
  }
}
function PODetailsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 210);
    \u0275\u0275listener("click", function PODetailsComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeReleaseModal());
    });
    \u0275\u0275elementStart(1, "div", 211);
    \u0275\u0275listener("click", function PODetailsComponent_div_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 212)(3, "h5", 213);
    \u0275\u0275element(4, "i", 214);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 11);
    \u0275\u0275listener("click", function PODetailsComponent_div_19_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeReleaseModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 215)(8, "div", 216);
    \u0275\u0275text(9, " Remaining authorized capacity: ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 217)(14, "div", 182)(15, "label", 200);
    \u0275\u0275text(16, "Release Date ");
    \u0275\u0275elementStart(17, "span", 218);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 199);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_19_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.releaseForm.releaseDate, $event) || (ctx_r3.releaseForm.releaseDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 182)(21, "label", 200);
    \u0275\u0275text(22, "Planned Delivery Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 199);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_19_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.releaseForm.plannedDeliveryDate, $event) || (ctx_r3.releaseForm.plannedDeliveryDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 182)(25, "label", 200);
    \u0275\u0275text(26, "Released By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 181);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_19_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.releaseForm.releasedByName, $event) || (ctx_r3.releaseForm.releasedByName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 187)(29, "label", 200);
    \u0275\u0275text(30, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "textarea", 219);
    \u0275\u0275twoWayListener("ngModelChange", function PODetailsComponent_div_19_Template_textarea_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.releaseForm.remarks, $event) || (ctx_r3.releaseForm.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 144)(33, "table", 150)(34, "thead")(35, "tr")(36, "th");
    \u0275\u0275text(37, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "UOM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "PO Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43, "Unit Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 220);
    \u0275\u0275text(45, "Release Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th");
    \u0275\u0275text(47, "Line Value");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "tbody");
    \u0275\u0275template(49, PODetailsComponent_div_19_tr_49_Template, 15, 14, "tr", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "tfoot")(51, "tr")(52, "td", 221);
    \u0275\u0275text(53, "This Release Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td", 146);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "number");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(57, "div", 222)(58, "button", 14);
    \u0275\u0275listener("click", function PODetailsComponent_div_19_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeReleaseModal());
    });
    \u0275\u0275text(59, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 15);
    \u0275\u0275listener("click", function PODetailsComponent_div_19_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveRelease());
    });
    \u0275\u0275template(61, PODetailsComponent_div_19_span_61_Template, 1, 0, "span", 16);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Create Release \u2014 ", ctx_r3.po == null ? null : ctx_r3.po.poNumber);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(12, 15, ctx_r3.remainingCapacity, "1.2-2"));
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.releaseForm.releaseDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.releaseForm.plannedDeliveryDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.releaseForm.releasedByName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.releaseForm.remarks);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r3.releaseLineItems);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("text-danger", ctx_r3.releaseModalTotal > ctx_r3.remainingCapacity);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r3.currencySymbol, "", \u0275\u0275pipeBind2(56, 18, ctx_r3.releaseModalTotal, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r3.isSavingRelease);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isSavingRelease);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.isSavingRelease ? "Saving..." : "Create Release", " ");
  }
}
var _PODetailsComponent = class _PODetailsComponent {
  get spacerRows() {
    const minRows = 8;
    const extra = Math.max(0, minRows - (this.po?.lineItems?.length || 0));
    return Array(extra).fill(0);
  }
  constructor(route, router, dataService, messageService) {
    this.route = route;
    this.router = router;
    this.dataService = dataService;
    this.messageService = messageService;
    this.isDownloadingExcel = false;
    this.isDownloadingPdf = false;
    this.isDownloadingXml = false;
    this.po = null;
    this.isLoading = false;
    this.isDeleting = false;
    this.isSaving = false;
    this.poId = 0;
    this.editForm = {};
    this.logoLoadError = false;
    this.currencyCode = "INR";
    this.currencySymbol = "\u20B9";
    this.poReleaseSummary = null;
    this.poReleases = [];
    this.isLoadingReleases = false;
    this.isReleaseModalOpen = false;
    this.isSavingRelease = false;
    this.releaseForm = { releaseDate: "", plannedDeliveryDate: "", releasedByName: "", remarks: "" };
    this.releaseLineItems = [];
  }
  ngOnInit() {
    this.poId = Number(this.route.snapshot.paramMap.get("id"));
    if (!this.poId || isNaN(this.poId)) {
      this.messageService.showMessage("error", "Error", "Invalid Purchase Order ID");
      this.router.navigate(["/po-list"]);
      return;
    }
    this.loadPODetails();
  }
  downloadPOExcel() {
    if (!this.poId)
      return;
    this.isDownloadingExcel = true;
    this.dataService.getPOSummaryExcel(this.poId).subscribe({
      next: (blob) => {
        this.dataService.saveBlob(blob, `PO_Report_${this.po?.poNumber}_${this.dataService.todayStr()}.xlsx`);
        this.messageService.showMessage("success", "Success", "PO Excel report downloaded");
        this.isDownloadingExcel = false;
      },
      error: () => {
        this.messageService.showMessage("error", "Error", "Failed to download PO Excel");
        this.isDownloadingExcel = false;
      }
    });
  }
  downloadPOPdf() {
    if (!this.poId)
      return;
    this.isDownloadingPdf = true;
    this.dataService.getPOSummaryPDF(this.poId).subscribe({
      next: (blob) => {
        this.dataService.saveBlob(blob, `PO_Report_${this.po?.poNumber}_${this.dataService.todayStr()}.pdf`);
        this.messageService.showMessage("success", "Success", "PO PDF report downloaded");
        this.isDownloadingPdf = false;
      },
      error: () => {
        this.messageService.showMessage("error", "Error", "Failed to download PO PDF");
        this.isDownloadingPdf = false;
      }
    });
  }
  downloadPOCxml() {
    if (!this.poId)
      return;
    this.isDownloadingXml = true;
    this.dataService.getPOCxml(this.poId).subscribe({
      next: (blob) => {
        this.dataService.saveBlob(blob, `PO_${this.po?.poNumber}_${this.dataService.todayStr()}.cxml.xml`);
        this.messageService.showMessage("success", "Success", "PO cXML document downloaded");
        this.isDownloadingXml = false;
      },
      error: () => {
        this.messageService.showMessage("error", "Error", "Failed to download PO cXML");
        this.isDownloadingXml = false;
      }
    });
  }
  // ── Load ─────────────────────────────────────────────────────────────────
  loadPODetails() {
    this.isLoading = true;
    this.logoLoadError = false;
    this.dataService.getPurchaseOrderById(this.poId).subscribe({
      next: (response) => {
        if (response?.success) {
          this.po = response.data;
          this.currencyCode = this.po.currencyCode || "INR";
          this.currencySymbol = this.po.currencySymbol || this.getSymbolForCode(this.currencyCode);
          if (this.isBlanketContract)
            this.loadReleaseTracking();
        } else {
          this.messageService.showMessage("error", "Error", "Purchase Order not found");
          this.router.navigate(["/po-list"]);
        }
        this.isLoading = false;
      },
      error: () => {
        this.messageService.showMessage("error", "Error", "Failed to load Purchase Order details");
        this.isLoading = false;
        this.router.navigate(["/po-list"]);
      }
    });
  }
  // ── Logo helpers ─────────────────────────────────────────────────────────
  /**
   * Returns the logo src to bind to <img [src]>.
   * Works with both a URL string and a base64 data-URI.
   * Returns null if no logo is available or if it previously failed to load.
   */
  getBuyerLogoSrc() {
    if (this.logoLoadError)
      return null;
    const url = this.po?.buyerLogoUrl;
    if (url && url.trim().length > 0)
      return url;
    return null;
  }
  /**
   * Called when the logo <img> fires an error event.
   * Hides the broken image and shows the initials fallback instead.
   */
  onLogoError(event) {
    this.logoLoadError = true;
    event.target.style.display = "none";
  }
  /**
   * Returns 1–2 letter initials from the buyer company name.
   * e.g. "ITTI PVT LTD" → "IT"
   */
  getBuyerInitials() {
    const name = this.po?.buyerName || "";
    if (!name)
      return "?";
    const words = name.trim().split(/\s+/).filter((w) => w.length > 0);
    if (words.length === 1)
      return words[0].substring(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
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
      "IDR": "Rp"
    };
    return map[code] || code;
  }
  // ── Edit Modal ───────────────────────────────────────────────────────────
  openEditModal() {
    if (this.po?.status !== "DRAFT") {
      this.messageService.showMessage("warning", "Warning", "Only DRAFT Purchase Orders can be edited");
      return;
    }
    this.editForm = {
      paymentTerms: this.po.paymentTerms || "",
      deliveryTerms: this.po.deliveryTerms || "",
      otherTerms: this.po.otherTerms || "",
      dispatchedThrough: this.po.dispatchedThrough || "",
      modeOfPayment: this.po.modeOfPayment || "",
      destination: this.po.destination || "",
      buyerRemarks: this.po.buyerRemarks || "",
      internalNotes: this.po.internalNotes || "",
      poType: this.po.poType || "GOODS",
      expiryDate: this.po.expiryDate ? this.po.expiryDate.substring(0, 10) : "",
      // Advance payment
      advancePaymentRequired: !!this.po.advancePaymentRequired,
      advancePaymentPercentage: this.po.advancePaymentPercentage || null,
      advancePaymentAmount: this.po.advancePaymentAmount || null,
      advancePaymentDue: this.po.advancePaymentDue || "BEFORE_DELIVERY",
      advancePaymentNote: this.po.advancePaymentNote || ""
    };
    const modal = document.getElementById("editModal");
    if (modal) {
      modal.style.display = "block";
      modal.classList.add("show");
      document.body.classList.add("modal-open");
      const backdrop = document.createElement("div");
      backdrop.className = "modal-backdrop fade show";
      backdrop.id = "editModalBackdrop";
      document.body.appendChild(backdrop);
    }
  }
  closeEditModal() {
    const modal = document.getElementById("editModal");
    if (modal) {
      modal.style.display = "none";
      modal.classList.remove("show");
    }
    document.body.classList.remove("modal-open");
    document.getElementById("editModalBackdrop")?.remove();
  }
  saveEdit() {
    if (!this.editForm)
      return;
    this.isSaving = true;
    this.dataService.updatePurchaseOrder(this.poId, this.editForm).subscribe({
      next: (response) => {
        if (response?.success) {
          this.po = response.data;
          this.currencyCode = this.po.currencyCode || this.currencyCode;
          this.currencySymbol = this.po.currencySymbol || this.currencySymbol;
          this.messageService.showMessage("success", "Success", "Purchase Order updated successfully");
          this.closeEditModal();
        } else {
          this.messageService.showMessage("error", "Error", "Failed to update Purchase Order");
        }
        this.isSaving = false;
      },
      error: (error) => {
        this.messageService.showMessage("error", "Error", error.error?.message || "Failed to update Purchase Order");
        this.isSaving = false;
      }
    });
  }
  // ── Delete ───────────────────────────────────────────────────────────────
  deletePO() {
    if (this.po?.status !== "DRAFT") {
      this.messageService.showMessage("warning", "Warning", "Only DRAFT Purchase Orders can be deleted");
      return;
    }
    if (!confirm(`Delete Purchase Order ${this.po.poNumber}?

This action cannot be undone.`))
      return;
    this.isDeleting = true;
    this.dataService.deletePurchaseOrder(this.poId).subscribe({
      next: (response) => {
        if (response?.success) {
          this.messageService.showMessage("success", "Success", "Purchase Order deleted successfully");
          this.router.navigate(["/po-list"]);
        }
        this.isDeleting = false;
      },
      error: (error) => {
        this.messageService.showMessage("error", "Error", error.error?.message || "Failed to delete Purchase Order");
        this.isDeleting = false;
      }
    });
  }
  // ── Print ────────────────────────────────────────────────────────────────
  printPO() {
    window.print();
  }
  // ── Tax / Discount helpers ───────────────────────────────────────────────
  hasTax() {
    return (this.po?.lineItems || []).some((item) => item.taxPercentage != null && Number(item.taxPercentage) > 0);
  }
  getTaxGroups() {
    const groups = {};
    for (const item of this.po?.lineItems || []) {
      const rate = Number(item.taxPercentage || 0);
      if (rate === 0)
        continue;
      const key = rate.toFixed(2);
      if (!groups[key])
        groups[key] = { base: 0, amount: 0 };
      groups[key].base += Number(item.lineTotal || 0);
      groups[key].amount += Number(item.taxAmount || 0);
    }
    return Object.entries(groups).map(([rate, val]) => ({ rate: Number(rate), base: val.base, amount: val.amount })).sort((a, b) => a.rate - b.rate);
  }
  hasDiscount() {
    return (this.po?.lineItems || []).some((item) => item.discountPercentage != null && Number(item.discountPercentage) > 0);
  }
  getOverallDiscount() {
    if (!this.po)
      return 0;
    const subtotal = Number(this.po.subtotal || 0);
    const taxAmount = Number(this.po.taxAmount || 0);
    const grandTotal = Number(this.po.grandTotal || 0);
    const discount = subtotal + taxAmount - grandTotal;
    return discount > 5e-3 ? discount : 0;
  }
  /** Other Charges (Training, Installation, Additional Cost, Transportation,
   *  etc.) carried forward from the supplier's quote — raw JSON string. */
  getOtherCharges() {
    const raw = this.po?.otherCharges;
    if (!raw)
      return [];
    try {
      return JSON.parse(raw) || [];
    } catch {
      return [];
    }
  }
  getOtherChargesTotal() {
    return this.getOtherCharges().reduce((sum, c) => sum + (Number(c.totalAmount) || 0), 0);
  }
  /** Human-readable label for a single po.poType token, e.g. "BLANKET_CONTRACT" → "Blanket / Contract". */
  poTypeLabel(poType) {
    const map = {
      GOODS: "Goods",
      SERVICE: "Service",
      BLANKET_CONTRACT: "Blanket / Contract",
      PROJECT_MILESTONE: "Project / Milestone"
    };
    return map[poType] || poType;
  }
  /** po.poType is comma-separated when more than one is selected — a PO can carry several
   *  at once. Goods is excluded here since it's the default/baseline and stays visually
   *  unmarked, exactly as before this feature supported multiple types. */
  poTypeLabels(poTypeCsv) {
    if (!poTypeCsv)
      return [];
    return poTypeCsv.split(",").map((t) => t.trim()).filter((t) => t && t !== "GOODS").map((t) => this.poTypeLabel(t));
  }
  /** True if the PO carries the given type among its (possibly several) selected types. */
  poHasType(poTypeCsv, type) {
    return (poTypeCsv || "").split(",").map((t) => t.trim()).includes(type);
  }
  // ── Edit modal: PO Type checkboxes (reads/writes editForm.poType as CSV) ──
  isEditPoTypeSelected(value) {
    return this.poHasType(this.editForm?.poType, value);
  }
  toggleEditPoType(value) {
    const current = (this.editForm.poType || "GOODS").split(",").map((t) => t.trim()).filter((t) => !!t);
    const idx = current.indexOf(value);
    if (idx >= 0) {
      if (current.length > 1)
        current.splice(idx, 1);
    } else {
      current.push(value);
    }
    this.editForm.poType = current.join(",");
  }
  /** Payment Provisions / Milestones — the supplier's proposed payment schedule, carried
   *  through unchanged from the negotiation. Purely descriptive. */
  getPaymentMilestones() {
    const raw = this.po?.paymentMilestones;
    if (!raw)
      return [];
    try {
      return JSON.parse(raw) || [];
    } catch {
      return [];
    }
  }
  /** Human-readable label for po.advancePaymentDue, e.g. "BEFORE_DELIVERY" → "before delivery". */
  advancePaymentDueLabel() {
    const map = {
      BEFORE_DELIVERY: "before delivery",
      BEFORE_DISPATCH: "before dispatch",
      ON_ORDER_CONFIRMATION: "on order confirmation",
      OTHER: this.po?.advancePaymentNote || "as agreed"
    };
    return map[this.po?.advancePaymentDue] || "before delivery";
  }
  // ── Status / Date / Nav helpers ──────────────────────────────────────────
  getStatusBadgeClass(status) {
    const map = {
      "DRAFT": "bg-secondary",
      "PENDING_APPROVAL": "bg-warning text-dark",
      "APPROVED": "bg-success",
      "SENT_TO_SUPPLIER": "bg-info",
      "ACKNOWLEDGED": "bg-primary",
      "IN_PROGRESS": "bg-primary",
      "DELIVERED": "bg-success",
      "COMPLETED": "bg-dark",
      "CANCELLED": "bg-danger",
      "REJECTED": "bg-danger"
    };
    return map[status] || "bg-secondary";
  }
  formatDate(dateString) {
    if (!dateString)
      return "N/A";
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  formatDateShort(dateString) {
    if (!dateString)
      return "N/A";
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  goBack() {
    this.router.navigate(["/po-list"]);
  }
  // =========================================================================
  //  RELEASE TRACKING (Blanket/Contract POs only)
  //  Tracks Total / Released / Received / Remaining. This is the "supply
  //  schedule" side of a Blanket/Contract PO — deliberately separate from
  //  Payment Provisions/Milestones above, which is the payment schedule.
  // =========================================================================
  get isBlanketContract() {
    return this.poHasType(this.po?.poType, "BLANKET_CONTRACT");
  }
  loadReleaseTracking() {
    if (!this.poId)
      return;
    this.isLoadingReleases = true;
    this.dataService.getPOReleaseSummary(this.poId).subscribe({
      next: (res) => {
        this.poReleaseSummary = res?.success ? res.data : res;
      },
      error: () => {
        this.poReleaseSummary = null;
      }
    });
    this.dataService.getPOReleasesByPO(this.poId).subscribe({
      next: (res) => {
        this.poReleases = Array.isArray(res) ? res : res.data || [];
        this.isLoadingReleases = false;
      },
      error: () => {
        this.poReleases = [];
        this.isLoadingReleases = false;
      }
    });
  }
  releaseStatusBadgeClass(status) {
    const map = { DRAFT: "bg-secondary", ISSUED: "bg-success", CANCELLED: "bg-danger" };
    return map[status] || "bg-secondary";
  }
  get remainingCapacity() {
    return Number(this.poReleaseSummary?.remaining ?? 0);
  }
  openReleaseModal() {
    this.releaseForm = {
      releaseDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      plannedDeliveryDate: "",
      releasedByName: this.po?.buyerName || "",
      remarks: ""
    };
    this.releaseLineItems = (this.po?.lineItems || []).map((li) => ({
      poLineItemId: li.id,
      itemDescription: li.itemDescription || li.itemName || "",
      uom: li.uom || "NOS",
      poQuantity: Number(li.quantity || 0),
      unitRate: Number(li.unitRate || 0),
      releasedQuantity: 0,
      remarks: ""
    }));
    this.isReleaseModalOpen = true;
  }
  closeReleaseModal() {
    this.isReleaseModalOpen = false;
  }
  get releaseModalTotal() {
    return this.releaseLineItems.reduce((sum, li) => sum + (Number(li.releasedQuantity) || 0) * (Number(li.unitRate) || 0), 0);
  }
  saveRelease() {
    if (!this.releaseForm.releaseDate) {
      this.messageService.showMessage("error", "Error", "Release date is required.");
      return;
    }
    const activeLines = this.releaseLineItems.filter((li) => (Number(li.releasedQuantity) || 0) > 0);
    if (activeLines.length === 0) {
      this.messageService.showMessage("error", "Error", "Enter a released quantity greater than zero for at least one item.");
      return;
    }
    if (this.releaseModalTotal > this.remainingCapacity + 5e-3) {
      this.messageService.showMessage("error", "Error", `This release (${this.currencySymbol}${this.releaseModalTotal.toFixed(2)}) exceeds the PO's remaining capacity (${this.currencySymbol}${this.remainingCapacity.toFixed(2)}).`);
      return;
    }
    this.isSavingRelease = true;
    const payload = {
      purchaseOrderId: this.poId,
      releaseDate: this.releaseForm.releaseDate,
      plannedDeliveryDate: this.releaseForm.plannedDeliveryDate || null,
      releasedByName: this.releaseForm.releasedByName || null,
      remarks: this.releaseForm.remarks || null,
      lineItems: activeLines
    };
    this.dataService.createPORelease(payload).subscribe({
      next: (res) => {
        this.isSavingRelease = false;
        if (res?.success) {
          this.messageService.showMessage("success", "Success", `Release ${res.data.releaseNumber} created.`);
          this.closeReleaseModal();
          this.loadReleaseTracking();
        } else {
          this.messageService.showMessage("error", "Error", res?.message || "Failed to create release.");
        }
      },
      error: (err) => {
        this.isSavingRelease = false;
        this.messageService.showMessage("error", "Error", err?.error?.message || "Failed to create release.");
      }
    });
  }
  issueRelease(release) {
    this.dataService.issuePORelease(release.id, this.po?.buyerName || "").subscribe({
      next: (res) => {
        if (res?.success) {
          this.messageService.showMessage("success", "Success", `Release ${release.releaseNumber} issued to supplier.`);
          this.loadReleaseTracking();
        } else {
          this.messageService.showMessage("error", "Error", res?.message || "Failed to issue release.");
        }
      },
      error: (err) => this.messageService.showMessage("error", "Error", err?.error?.message || "Failed to issue release.")
    });
  }
  cancelRelease(release) {
    this.dataService.cancelPORelease(release.id).subscribe({
      next: (res) => {
        if (res?.success) {
          this.messageService.showMessage("success", "Success", `Release ${release.releaseNumber} cancelled \u2014 capacity freed up.`);
          this.loadReleaseTracking();
        } else {
          this.messageService.showMessage("error", "Error", res?.message || "Failed to cancel release.");
        }
      },
      error: (err) => this.messageService.showMessage("error", "Error", err?.error?.message || "Failed to cancel release.")
    });
  }
};
_PODetailsComponent.\u0275fac = function PODetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PODetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MessageService));
};
_PODetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PODetailsComponent, selectors: [["app-po-details"]], decls: 20, vars: 8, consts: [["editModalEl", ""], ["defaultTC", ""], ["fluid", "", 1, "mt-4"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], ["id", "editModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", "bg-warning"], [1, "modal-title", "fw-bold"], [1, "bi", "bi-pencil", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "rel-modal-backdrop", 3, "click", 4, "ngIf"], [1, "text-center", "py-5"], ["color", "primary", 2, "width", "3rem", "height", "3rem"], [1, "mt-3", "text-muted"], [1, "mb-3"], ["xs", "12"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-2", "px-1"], [1, "mb-0", "fw-bold", "text-dark"], [1, "bi", "bi-file-earmark-text", "me-2", "text-primary"], [1, "mt-1", "d-flex", "align-items-center", "gap-2"], [1, "badge", 3, "ngClass"], ["class", "badge bg-secondary", "style", "font-size:0.75rem;", 4, "ngFor", "ngForOf"], [1, "text-muted"], [1, "badge", "bg-primary", 2, "font-size", "0.75rem"], [1, "bi", "bi-globe2", "me-1"], ["class", "badge bg-warning text-dark", "style", "font-size:0.75rem;", 4, "ngIf"], [1, "d-flex", "gap-2", "flex-wrap"], ["cButton", "", "color", "secondary", "variant", "outline", "size", "sm", 3, "click"], [1, "bi", "bi-arrow-left", "me-1"], ["cButton", "", "color", "warning", "variant", "outline", "size", "sm", 3, "click", 4, "ngIf"], ["cButton", "", "color", "info", "variant", "outline", "size", "sm", 3, "click", 4, "ngIf"], ["cButton", "", "color", "success", "variant", "outline", "size", "sm", 3, "click", "disabled"], ["class", "bi bi-file-earmark-excel me-1", 4, "ngIf"], ["cButton", "", "color", "danger", "variant", "outline", "size", "sm", 3, "click", "disabled"], ["class", "bi bi-file-earmark-pdf me-1", 4, "ngIf"], ["cButton", "", "color", "primary", "variant", "outline", "size", "sm", 3, "click", "disabled"], ["class", "bi bi-filetype-xml me-1", 4, "ngIf"], ["id", "po-print-area", 1, "po-document"], [1, "po-header-inner"], [1, "po-logo-cell"], [3, "src", "alt", "error", 4, "ngIf"], ["class", "logo-initials-circle", 4, "ngIf"], [1, "po-company-cell"], [1, "co-name"], ["class", "co-line", 4, "ngIf"], [1, "co-line"], [1, "po-header-spacer"], [1, "po-title-box"], [1, "po-title-text"], [1, "po-box"], [1, "po-two-col"], [1, "po-col-left"], [1, "meta-row"], [1, "mk"], [1, "ms"], [1, "mv"], ["class", "meta-row", 4, "ngIf"], [1, "po-col-right"], [1, "mv", 2, "font-weight", "800"], [1, "sec-bar"], [1, "sec-body"], [1, "po-col-left", "p-0"], [1, "addr-name"], [1, "po-col-right", "p-0"], [1, "po-table-wrap"], [1, "po-table"], [2, "width", "4%"], [2, "width", "32%"], [2, "width", "6%"], [2, "width", "12%"], [2, "width", "9%"], [2, "width", "13%"], [1, "tc"], [1, "tl"], [1, "tr"], [4, "ngFor", "ngForOf"], ["class", "spacer-row", 4, "ngFor", "ngForOf"], ["style", "color:#d32f2f;", 4, "ngIf"], [1, "grand-total-row"], ["colspan", "6", 1, "tr", "fw8"], [1, "tr", "fw8"], ["class", "po-box", 4, "ngIf"], [1, "po-box", "po-words-box"], [1, "words-label"], [1, "words-val"], [1, "po-box", "po-remarks-box"], [1, "remarks-label"], [1, "remarks-val"], [1, "po-box", "po-pan-box"], ["class", "tc-body", 4, "ngIf", "ngIfElse"], [1, "po-col-left", "sig-col"], [1, "sig-header"], [1, "sig-fields"], ["class", "sig-row", 4, "ngFor", "ngForOf"], [1, "sig-behalf"], [1, "po-col-right", "sig-col"], ["class", "fw-bold", 4, "ngIf"], ["class", "sig-desig", 4, "ngIf"], ["class", "sig-digital", 4, "ngIf"], [1, "po-box", "po-footer-box"], [1, "badge", "bg-secondary", 2, "font-size", "0.75rem"], [1, "bi", "bi-tag", "me-1"], [1, "badge", "bg-warning", "text-dark", 2, "font-size", "0.75rem"], [1, "bi", "bi-calendar-x", "me-1"], ["cButton", "", "color", "warning", "variant", "outline", "size", "sm", 3, "click"], [1, "bi", "bi-pencil", "me-1"], ["cButton", "", "color", "info", "variant", "outline", "size", "sm", 3, "click"], [1, "bi", "bi-printer", "me-1"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-file-earmark-excel", "me-1"], [1, "bi", "bi-file-earmark-pdf", "me-1"], [1, "bi", "bi-filetype-xml", "me-1"], [3, "error", "src", "alt"], [1, "logo-initials-circle"], [1, "item-name"], ["class", "item-sub", 4, "ngIf"], ["class", "item-sub", "style", "color:#888; text-decoration:line-through;", 4, "ngIf"], [1, "tc", "fw7"], ["style", "color:#2a9d2a; font-weight:600;", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["style", "color:#b07a00; font-weight:600;", 4, "ngIf"], [1, "tr", "fw7"], ["style", "font-size:0.7rem; font-weight:400; color:#888;", 4, "ngIf"], [1, "item-sub"], [1, "item-sub", 2, "color", "#888", "text-decoration", "line-through"], [2, "color", "#2a9d2a", "font-weight", "600"], [2, "color", "#b07a00", "font-weight", "600"], [2, "font-size", "0.7rem", "font-weight", "400"], [2, "font-size", "0.7rem", "font-weight", "400", "color", "#888"], [1, "spacer-row"], ["colspan", "7"], ["colspan", "6", 1, "tr"], ["colspan", "6", 1, "tr", 2, "color", "#b07a00"], [1, "tr", 2, "color", "#b07a00"], [2, "color", "#d32f2f"], [2, "font-weight", "600"], [1, "tr", 2, "font-weight", "600"], [1, "table-responsive"], [1, "table", "table-sm", "align-middle"], [1, "fw-bold"], ["colspan", "8", 1, "text-end"], [1, "fw-semibold"], [1, "tc-body"], [1, "table", "table-sm", "align-middle", "mb-0"], ["class", "release-stat-bar", 4, "ngIf"], ["class", "table-responsive mt-3", 4, "ngIf"], ["class", "text-muted small mt-2", 4, "ngIf"], [1, "release-stat-bar"], [1, "release-stat"], [1, "rs-label"], [1, "rs-val"], [1, "rs-val", "rs-released"], [1, "rs-val", "rs-received"], [1, "rs-val", "rs-remaining"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "ms-auto", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], [1, "table-responsive", "mt-3"], ["type", "button", "class", "btn btn-xs btn-outline-success me-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-xs btn-outline-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-xs", "btn-outline-success", "me-1", 3, "click"], ["type", "button", 1, "btn", "btn-xs", "btn-outline-danger", 3, "click"], [1, "text-muted", "small", "mt-2"], [1, "sig-row"], [1, "sig-label-row"], [1, "sig-lbl"], [1, "sig-line"], [1, "sig-desig"], [1, "sig-digital"], [1, "modal-body"], [1, "alert", "alert-info", "mb-4"], [1, "bi", "bi-info-circle", "me-2"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-4"], [1, "col-md-8"], [1, "d-flex", "flex-wrap", "gap-3", "pt-1"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["class", "col-md-4", 4, "ngIf"], [1, "col-12"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "5", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-check", "mb-2"], ["type", "checkbox", "id", "editAdvReq", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "editAdvReq", 1, "form-check-label", "fw-semibold"], ["class", "row g-3", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "checked"], [1, "form-check-label", 3, "for"], [1, "text-muted", "fw-normal"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-label", "small"], ["type", "number", "min", "0", "max", "100", "step", "0.5", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "BEFORE_DELIVERY"], ["value", "BEFORE_DISPATCH"], ["value", "ON_ORDER_CONFIRMATION"], ["value", "OTHER"], ["class", "col-12", 4, "ngIf"], ["type", "text", "placeholder", "Specify when the advance is due", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "rel-modal-backdrop", 3, "click"], [1, "rel-modal", 3, "click"], [1, "rel-modal-header"], [1, "fw-bold", "mb-0"], [1, "bi", "bi-truck", "me-2"], [1, "rel-modal-body"], [1, "alert", "alert-info", "py-2", "mb-3"], [1, "row", "g-3", "mb-3"], [1, "text-danger"], ["rows", "2", "placeholder", "Optional notes for this release\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [2, "width", "140px"], ["colspan", "5", 1, "text-end", "fw-bold"], [1, "rel-modal-footer"], ["type", "number", "min", "0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"]], template: function PODetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-container", 2);
    \u0275\u0275template(1, PODetailsComponent_div_1_Template, 4, 0, "div", 3)(2, PODetailsComponent_div_2_Template, 284, 84, "div", 4);
    \u0275\u0275elementStart(3, "div", 5, 0)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "h5", 9);
    \u0275\u0275element(9, "i", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 11);
    \u0275\u0275listener("click", function PODetailsComponent_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeEditModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, PODetailsComponent_div_12_Template, 54, 21, "div", 12);
    \u0275\u0275elementStart(13, "div", 13)(14, "button", 14);
    \u0275\u0275listener("click", function PODetailsComponent_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeEditModal());
    });
    \u0275\u0275text(15, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 15);
    \u0275\u0275listener("click", function PODetailsComponent_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.saveEdit());
    });
    \u0275\u0275template(17, PODetailsComponent_span_17_Template, 1, 0, "span", 16);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(19, PODetailsComponent_div_19_Template, 63, 21, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.po);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Edit Purchase Order \u2014 ", ctx.po == null ? null : ctx.po.poNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.editForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isSaving ? "Saving..." : "Save Changes", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isReleaseModalOpen);
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
  NumberValueAccessor,
  CheckboxControlValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  MinValidator,
  MaxValidator,
  NgModel,
  ContainerComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  TableModule,
  SpinnerComponent,
  DecimalPipe
], styles: ["\n\n.po-logo-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 155px;\n  max-height: 115px;\n  object-fit: contain;\n}\n.logo-initials-circle[_ngcontent-%COMP%] {\n  width: 115px;\n  height: 115px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.2rem;\n  font-weight: 800;\n  color: #fff;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  letter-spacing: 2px;\n  border: 3px solid #e2e8f0;\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n}\n.po-document[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto 32px auto;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 0.85rem;\n  color: #000;\n  background: #fff;\n  border: 1.5px solid #555;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.po-header-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 175px 1fr 175px;\n  align-items: center;\n  padding: 18px 24px 16px 20px;\n  gap: 0;\n  min-height: 130px;\n  border-bottom: 1px solid #555;\n}\n.po-logo-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 175px;\n  padding-right: 10px;\n}\n.po-header-spacer[_ngcontent-%COMP%] {\n  width: 175px;\n}\n.logo-placeholder[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 105px;\n  border: 1px solid #bbb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.65rem;\n  color: #aaa;\n  font-family: Arial, sans-serif;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.po-header-divider[_ngcontent-%COMP%] {\n  display: none;\n}\n.po-company-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 4px;\n  padding: 0 10px;\n}\n.co-name[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 900;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  line-height: 1.1;\n  margin-bottom: 7px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.co-line[_ngcontent-%COMP%] {\n  font-size: 0.79rem;\n  color: #000;\n  line-height: 1.75;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-weight: 400;\n}\n.po-title-box[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 0 9px 0;\n  border-top: 1.5px solid #555;\n  border-bottom: 1.5px solid #555;\n  background: #fff;\n}\n.po-title-text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #000;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.po-box[_ngcontent-%COMP%] {\n  border-top: 1px solid #555;\n  border-bottom: none;\n  background: #fff;\n}\n.po-title-box.po-box[_ngcontent-%COMP%] {\n  border-top: 1.5px solid #555;\n}\n.po-box[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid #555;\n}\n.po-two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.po-col-left[_ngcontent-%COMP%] {\n  padding: 10px 14px 12px 16px;\n  border-right: 1px solid #555;\n}\n.po-col-right[_ngcontent-%COMP%] {\n  padding: 10px 14px 12px 16px;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  font-size: 0.8rem;\n  line-height: 1.55;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.mk[_ngcontent-%COMP%] {\n  min-width: 148px;\n  font-weight: 400;\n  flex-shrink: 0;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 1.3rem;\n}\n.ms[_ngcontent-%COMP%] {\n  min-width: 16px;\n  text-align: center;\n  flex-shrink: 0;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 1.3rem;\n}\n.mv[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 1.3rem;\n  font-weight: 400;\n}\n.sec-bar[_ngcontent-%COMP%] {\n  background: #c8c8c8;\n  border-bottom: 1px solid #555;\n  font-size: 1.33rem;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-align: center;\n  padding: 7px 12px;\n  color: #000;\n  text-transform: uppercase;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n}\n.sec-body[_ngcontent-%COMP%] {\n  padding: 9px 16px;\n  font-size: 1.3rem;\n  color: #000;\n  line-height: 1.7;\n  min-height: 32px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.addr-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 3px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 1.3rem;\n}\n.po-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.po-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.79rem;\n  table-layout: fixed;\n}\n.po-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #c8c8c8 !important;\n  color: #000 !important;\n  font-weight: 600;\n  font-size: 1.12rem;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  padding: 8px 8px;\n  border: 1px solid #555 !important;\n  vertical-align: middle;\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.po-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n  border: 1px solid #555 !important;\n  vertical-align: top;\n  color: #000;\n  font-size: 1.15rem;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.po-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 8px;\n  border: 1px solid #555 !important;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 1.15rem;\n}\n.tc[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.tl[_ngcontent-%COMP%] {\n  text-align: left !important;\n  padding-left: 10px !important;\n}\n.tr[_ngcontent-%COMP%] {\n  text-align: right !important;\n  padding-right: 10px !important;\n}\n.fw7[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.fw8[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 1.12rem;\n}\n.item-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #444;\n  margin-top: 2px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.spacer-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 24px !important;\n  border: 1px solid #555 !important;\n  padding: 0 !important;\n  background: #fff;\n}\n.grand-total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #efefef !important;\n  font-weight: 800;\n  font-size: 0.85rem;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n}\n.po-words-box[_ngcontent-%COMP%] {\n  padding: 9px 16px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  align-items: baseline;\n}\n.words-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  white-space: nowrap;\n  font-size: 1.15rem;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.words-val[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-style: italic;\n  font-size: 1.10rem;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.po-remarks-box[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  align-items: baseline;\n  font-size: 1.05rem;\n}\n.remarks-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  white-space: nowrap;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.remarks-val[_ngcontent-%COMP%] {\n  color: #333;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 1.01rem;\n}\n.po-pan-box[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  font-size: 1.03rem;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.tc-body[_ngcontent-%COMP%] {\n  padding: 10px 16px 18px 16px;\n  font-size: 1.10rem;\n  color: #000;\n  line-height: 1.70;\n  min-height: 100px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.tc-body[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n.sig-col[_ngcontent-%COMP%] {\n  padding: 22px 28px 22px 28px;\n}\n.sig-header[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.25rem;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 26px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.sig-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.sig-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 22px;\n}\n.sig-label-row[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  margin-bottom: 5px;\n}\n.sig-lbl[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.sig-line[_ngcontent-%COMP%] {\n  width: 78%;\n  border-bottom: 1px solid #444;\n  height: 1px;\n}\n.sig-behalf[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  font-size: 1.12rem;\n  color: #000;\n  line-height: 1.65;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.sig-desig[_ngcontent-%COMP%] {\n  font-size: 1.03rem;\n  color: #555;\n}\n.sig-digital[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 0.73rem;\n  color: #555;\n  font-style: italic;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.po-footer-box[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px 14px;\n  background: #efefef;\n  font-size: 1.30rem;\n  color: #333;\n  font-style: italic;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  border-bottom: 1px solid #555 !important;\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  padding: 3px 7px;\n  border-radius: 3px;\n}\n@media print {\n  .c-sidebar[_ngcontent-%COMP%], \n   .c-header[_ngcontent-%COMP%], \n   c-card-header[_ngcontent-%COMP%], \n   .btn[_ngcontent-%COMP%], \n   button[_ngcontent-%COMP%], \n   .d-flex.gap-2[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .po-document[_ngcontent-%COMP%] {\n    border: none !important;\n    max-width: 100% !important;\n    margin: 0 !important;\n  }\n  .po-box[_ngcontent-%COMP%], \n   .po-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n   .po-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .sec-bar[_ngcontent-%COMP%], \n   .grand-total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n   .po-footer-box[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact !important;\n    print-color-adjust: exact !important;\n  }\n}\n@media (max-width: 768px) {\n  .po-header-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    justify-items: center;\n    gap: 12px;\n  }\n  .po-header-spacer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .po-logo-cell[_ngcontent-%COMP%] {\n    width: auto;\n    padding-right: 0;\n  }\n  .po-two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .po-col-left[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid #555;\n  }\n  .po-table[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n  }\n  .co-name[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n.release-stat-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 22px;\n  padding: 10px 4px;\n}\n.release-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.rs-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .03em;\n  color: #666;\n}\n.rs-val[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #222;\n}\n.rs-val.rs-released[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.rs-val.rs-received[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.rs-val.rs-remaining[_ngcontent-%COMP%] {\n  color: #1d4ed8;\n}\n.btn-xs[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  font-size: 0.72rem;\n}\n.rel-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, .55);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.rel-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.rel-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.rel-modal-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n}\n.rel-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n}\n/*# sourceMappingURL=po-details.component.css.map */"] });
var PODetailsComponent = _PODetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PODetailsComponent, [{
    type: Component,
    args: [{ selector: "app-po-details", standalone: true, imports: [
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
    ], template: `\r
\r
<c-container fluid class="mt-4">\r
\r
  <div *ngIf="isLoading" class="text-center py-5">\r
    <c-spinner color="primary" style="width: 3rem; height: 3rem;"></c-spinner>\r
    <p class="mt-3 text-muted">Loading purchase order...</p>\r
  </div>\r
\r
  <div *ngIf="!isLoading && po">\r
\r
    <c-row class="mb-3">\r
      <c-col xs="12">\r
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 px-1">\r
          <div>\r
            <h5 class="mb-0 fw-bold text-dark">\r
              <i class="bi bi-file-earmark-text me-2 text-primary"></i>{{ po.poNumber }}\r
            </h5>\r
            <div class="mt-1 d-flex align-items-center gap-2">\r
              <span class="badge" [ngClass]="getStatusBadgeClass(po.status)">{{ po.status }}</span>\r
              <span class="badge bg-secondary" style="font-size:0.75rem;" *ngFor="let label of poTypeLabels(po.poType)">\r
                <i class="bi bi-tag me-1"></i>{{ label }}\r
              </span>\r
              <small class="text-muted">Created on {{ formatDate(po.createdAt) }}</small>\r
              <span class="badge bg-primary" style="font-size:0.75rem;">\r
                <i class="bi bi-globe2 me-1"></i>{{ currencySymbol }} {{ currencyCode }}\r
              </span>\r
              <span class="badge bg-warning text-dark" style="font-size:0.75rem;" *ngIf="po.expiryDate">\r
                <i class="bi bi-calendar-x me-1"></i>Expires {{ formatDateShort(po.expiryDate) }}\r
              </span>\r
            </div>\r
          </div>\r
          <div class="d-flex gap-2 flex-wrap">\r
            <button cButton color="secondary" variant="outline" size="sm" (click)="goBack()">\r
              <i class="bi bi-arrow-left me-1"></i>Back\r
            </button>\r
            <button *ngIf="po.status === 'DRAFT'" cButton color="warning" variant="outline" size="sm" (click)="openEditModal()">\r
              <i class="bi bi-pencil me-1"></i>Edit\r
            </button>\r
            <button *ngIf="po.status === 'APPROVED'" cButton color="info" variant="outline" size="sm" (click)="printPO()">\r
              <i class="bi bi-printer me-1"></i>Print\r
            </button>\r
            <button cButton color="success" variant="outline" size="sm"\r
                    (click)="downloadPOExcel()" [disabled]="isDownloadingExcel">\r
              <span *ngIf="isDownloadingExcel" class="spinner-border spinner-border-sm me-1"></span>\r
              <i *ngIf="!isDownloadingExcel" class="bi bi-file-earmark-excel me-1"></i>Excel\r
            </button>\r
            <button cButton color="danger" variant="outline" size="sm"\r
                    (click)="downloadPOPdf()" [disabled]="isDownloadingPdf">\r
              <span *ngIf="isDownloadingPdf" class="spinner-border spinner-border-sm me-1"></span>\r
              <i *ngIf="!isDownloadingPdf" class="bi bi-file-earmark-pdf me-1"></i>PDF\r
            </button>\r
            <button cButton color="primary" variant="outline" size="sm"\r
                    (click)="downloadPOCxml()" [disabled]="isDownloadingXml">\r
              <span *ngIf="isDownloadingXml" class="spinner-border spinner-border-sm me-1"></span>\r
              <i *ngIf="!isDownloadingXml" class="bi bi-filetype-xml me-1"></i>cXML\r
            </button>\r
          </div>\r
        </div>\r
      </c-col>\r
    </c-row>\r
\r
    <c-row>\r
      <c-col xs="12">\r
        <div class="po-document" id="po-print-area">\r
\r
          <!-- HEADER -->\r
          <div class="po-header-inner">\r
            <div class="po-logo-cell">\r
              <!-- \u2705 Show actual buyer logo (URL or base64 data-URI from backend) -->\r
              <img *ngIf="getBuyerLogoSrc()"\r
                   [src]="getBuyerLogoSrc()"\r
                   alt="{{ po.buyerName }} Logo"\r
                   (error)="onLogoError($event)" />\r
              <!-- \u2705 Fallback: styled initials circle when no logo available -->\r
              <div *ngIf="!getBuyerLogoSrc()" class="logo-initials-circle">\r
                {{ getBuyerInitials() }}\r
              </div>\r
            </div>\r
\r
            <!-- \u2705 Company name centered across full PO width -->\r
            <div class="po-company-cell">\r
              <div class="co-name">{{ po.buyerName }}</div>\r
              <div class="co-line" *ngIf="po.buyerCin">\r
                CIN: {{ po.buyerCin }} &nbsp;|&nbsp; GSTIN: {{ po.buyerGstin || 'NIL' }} &nbsp;|&nbsp; PAN: {{ po.buyerPan || 'NIL' }} &nbsp;|&nbsp; Email: {{ po.buyerEmail || 'NIL' }}\r
              </div>\r
              <div class="co-line" *ngIf="!po.buyerCin">\r
                GSTIN: {{ po.buyerGstin || 'NIL' }} &nbsp;|&nbsp; PAN: {{ po.buyerPan || 'NIL' }} &nbsp;|&nbsp; Email: {{ po.buyerEmail || 'NIL' }}\r
              </div>\r
              <div class="co-line">{{ po.buyerLocationAddress || po.buyerLocationName || '' }}</div>\r
            </div>\r
\r
            <!-- \u2705 Mirror spacer \u2014 keeps company name truly centered -->\r
            <div class="po-header-spacer"></div>\r
          </div>\r
\r
          <!-- PURCHASE ORDER TITLE -->\r
          <div class="po-title-box">\r
            <span class="po-title-text">PURCHASE ORDER</span>\r
          </div>\r
\r
          <!-- VENDOR + ORDER META -->\r
          <div class="po-box">\r
            <div class="po-two-col">\r
              <div class="po-col-left">\r
                <div class="meta-row"><span class="mk">Vendor Details</span><span class="ms">:</span><span class="mv">{{ po.supplierName || 'NIL' }}</span></div>\r
                <div class="meta-row"><span class="mk">Address</span><span class="ms">:</span><span class="mv">{{ po.supplierAddress || 'NIL' }}<span *ngIf="po.supplierCity">, {{ po.supplierCity }}</span></span></div>\r
                <div class="meta-row" *ngIf="po.supplierCity || po.supplierState"><span class="mk">City / Pincode</span><span class="ms">:</span><span class="mv">{{ po.supplierCity || '' }}<span *ngIf="po.supplierPincode"> - {{ po.supplierPincode }}</span></span></div>\r
                <div class="meta-row"><span class="mk">Contact Person</span><span class="ms">:</span><span class="mv">{{ po.supplierContactName || 'NIL' }}</span></div>\r
                <div class="meta-row"><span class="mk">Contact Number</span><span class="ms">:</span><span class="mv">{{ po.supplierContactPhone || 'NIL' }}</span></div>\r
                <div class="meta-row"><span class="mk">Vendor GSTIN</span><span class="ms">:</span><span class="mv">{{ po.supplierGstin || 'NIL' }}</span></div>\r
              </div>\r
              <div class="po-col-right">\r
                <div class="meta-row"><span class="mk">Order No</span><span class="ms">:</span><span class="mv" style="font-weight:800;">{{ po.poNumber || 'NIL' }}</span></div>\r
                <div class="meta-row"><span class="mk">Created Date</span><span class="ms">:</span><span class="mv">{{ formatDateShort(po.createdAt) || 'NIL' }}</span></div>\r
                <div class="meta-row"><span class="mk">Document Date</span><span class="ms">:</span><span class="mv">{{ formatDateShort(po.poDate) || 'NIL' }}</span></div>\r
                <div class="meta-row"><span class="mk">Quote No</span><span class="ms">:</span><span class="mv">{{ po.referenceQuoteNo || 'NIL' }}</span></div>\r
                <div class="meta-row"><span class="mk">Vendor Order No</span><span class="ms">:</span><span class="mv">NIL</span></div>\r
                <div class="meta-row"><span class="mk">Requested Receipt:</span><span class="ms"></span><span class="mv"></span></div>\r
                <div class="meta-row"><span class="mk">Indent No</span><span class="ms">:</span><span class="mv">{{ po.indentNo || 'NIL' }}</span></div>\r
                <div class="meta-row"><span class="mk">Purchaser Code</span><span class="ms">:</span><span class="mv">{{ po.purchaserCode || '' }}</span></div>\r
                <div class="meta-row"><span class="mk">Campaign No</span><span class="ms">:</span><span class="mv">{{ po.campaignNo || '' }}</span></div>\r
                <div class="meta-row"><span class="mk">Responsibility</span><span class="ms">:</span><span class="mv">{{ po.responsibility || '' }}</span></div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- DELIVERY INSTRUCTIONS -->\r
          <div class="po-box">\r
            <div class="sec-bar">DELIVERY INSTRUCTIONS</div>\r
            <div class="sec-body">{{ po.dispatchedThrough || po.destination || 'NIL' }}</div>\r
          </div>\r
\r
          <!-- BILLING / SHIPPING ADDRESS -->\r
          <div class="po-box">\r
            <div class="po-two-col">\r
              <div class="po-col-left p-0">\r
                <div class="sec-bar">BILLING ADDRESS</div>\r
                <div class="sec-body">\r
                  <div class="addr-name">{{ po.buyerName || 'NIL' }}</div>\r
                  <div>{{ po.buyerLocationAddress || po.buyerLocationName || 'NIL' }}</div>\r
                  <div>GSTIN: {{ po.buyerGstin || 'NIL' }}</div>\r
                  <div *ngIf="po.buyerContactName">CONTACT NAME : {{ po.buyerContactName }}</div>\r
                  <div *ngIf="po.buyerContactPhone">CONTACT NO &nbsp;&nbsp;: {{ po.buyerContactPhone }}</div>\r
                  <div>Email: {{ po.buyerEmail || 'NIL' }}</div>\r
                </div>\r
              </div>\r
              <div class="po-col-right p-0">\r
                <div class="sec-bar">SHIPPING ADDRESS</div>\r
                <div class="sec-body">\r
                  <div class="addr-name">{{ po.deliveryLocationName || po.buyerName || 'NIL' }}</div>\r
                  <div>{{ po.deliveryLocationAddress || po.buyerLocationAddress || po.buyerLocationName || 'NIL' }}</div>\r
                  <div *ngIf="po.deliveryContactName">CONTACT NAME : {{ po.deliveryContactName }}</div>\r
                  <div *ngIf="po.deliveryContactPhone">CONTACT NO &nbsp;&nbsp;: {{ po.deliveryContactPhone }}</div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- LINE ITEMS TABLE -->\r
          <div class="po-box">\r
            <div class="po-table-wrap">\r
              <table class="po-table">\r
                <colgroup>\r
                  <col style="width:4%"><col style="width:32%"><col style="width:6%">\r
                  <col style="width:12%"><col style="width:9%"><col style="width:9%"><col style="width:13%">\r
                </colgroup>\r
                <thead>\r
                  <tr>\r
                    <th class="tc">S.No</th>\r
                    <th class="tl">Description of Goods / Services</th>\r
                    <th class="tc">Qty</th>\r
                    <th class="tr">Unit Price ({{ currencySymbol }})</th>\r
                    <th class="tc">Discount %</th>\r
                    <th class="tc">Tax %</th>\r
                    <th class="tr">Total ({{ currencyCode }})</th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  <tr *ngFor="let item of po.lineItems; let i = index">\r
                    <td class="tc">{{ item.slNo || i + 1 }}</td>\r
                    <td class="tl">\r
                      <div class="item-name">{{ item.itemDescription || 'NIL' }}</div>\r
                      <div *ngIf="item.brandMakeModel" class="item-sub">Brand: {{ item.brandMakeModel }}</div>\r
                      <div *ngIf="item.specifications" class="item-sub">{{ item.specifications }}</div>\r
                      <div *ngIf="item.deliveryDays || item.warrantyMonths" class="item-sub">\r
                        <span *ngIf="item.deliveryDays">Delivery: {{ item.deliveryDays }} days</span>\r
                        <span *ngIf="item.deliveryDays && item.warrantyMonths"> &nbsp;|&nbsp; </span>\r
                        <span *ngIf="item.warrantyMonths">Warranty: {{ item.warrantyMonths }} months</span>\r
                      </div>\r
                      <div *ngIf="item.originalQuotedPrice && item.discountPercentage > 0"\r
                           class="item-sub" style="color:#888; text-decoration:line-through;">\r
                        Original: {{ currencySymbol }}{{ item.originalQuotedPrice | number:'1.2-2' }}\r
                      </div>\r
                    </td>\r
                    <td class="tc fw7">{{ item.quantity != null ? item.quantity : 'NIL' }}</td>\r
                    <td class="tr">{{ item.unitRate != null ? (item.unitRate | number:'1.2-2') : 'NIL' }}</td>\r
                    <td class="tc">\r
                      <span *ngIf="item.discountPercentage > 0" style="color:#2a9d2a; font-weight:600;">\r
                        {{ item.discountPercentage | number:'1.2-2' }}%\r
                      </span>\r
                      <span *ngIf="!item.discountPercentage || item.discountPercentage === 0" class="text-muted">\u2014</span>\r
                    </td>\r
                    <td class="tc">\r
                      <span *ngIf="item.taxPercentage > 0" style="color:#b07a00; font-weight:600;">\r
                        {{ item.taxPercentage | number:'1.2-2' }}%\r
                        <div style="font-size:0.7rem; font-weight:400;">\r
                          +{{ currencySymbol }}{{ item.taxAmount | number:'1.2-2' }}\r
                        </div>\r
                      </span>\r
                      <span *ngIf="!item.taxPercentage || item.taxPercentage === 0" class="text-muted">\u2014</span>\r
                    </td>\r
                    <td class="tr fw7">\r
                      {{ (item.lineTotalWithTax != null ? item.lineTotalWithTax : item.lineTotal) | number:'1.2-2' }}\r
                      <div *ngIf="item.taxPercentage > 0" style="font-size:0.7rem; font-weight:400; color:#888;">\r
                        Pre-tax: {{ currencySymbol }}{{ item.lineTotal | number:'1.2-2' }}\r
                      </div>\r
                    </td>\r
                  </tr>\r
                  <tr *ngFor="let _ of spacerRows" class="spacer-row">\r
                    <td colspan="7">&nbsp;</td>\r
                  </tr>\r
                </tbody>\r
                <tfoot>\r
                  <tr *ngIf="hasTax()">\r
                    <td colspan="6" class="tr">Subtotal (Pre-tax)</td>\r
                    <td class="tr">{{ po.subtotal | number:'1.2-2' }}</td>\r
                  </tr>\r
                  <tr *ngIf="getOtherChargesTotal() > 0">\r
                    <td colspan="6" class="tr">Other Charges (Training/Installation/etc.)</td>\r
                    <td class="tr">{{ getOtherChargesTotal() | number:'1.2-2' }}</td>\r
                  </tr>\r
                  <ng-container *ngFor="let taxGroup of getTaxGroups()">\r
                    <tr>\r
                      <td colspan="6" class="tr" style="color:#b07a00;">\r
                        GST / Tax ({{ taxGroup.rate }}%) on {{ currencySymbol }}{{ taxGroup.base | number:'1.2-2' }}\r
                      </td>\r
                      <td class="tr" style="color:#b07a00;">{{ taxGroup.amount | number:'1.2-2' }}</td>\r
                    </tr>\r
                  </ng-container>\r
                  <tr *ngIf="getOverallDiscount() > 0" style="color:#d32f2f;">\r
                    <td colspan="6" class="tr"><span style="font-weight:600;">Round Off</span></td>\r
                    <td class="tr" style="font-weight:600;">\u2212 {{ getOverallDiscount() | number:'1.2-2' }}</td>\r
                  </tr>\r
                  <tr class="grand-total-row">\r
                    <td colspan="6" class="tr fw8">Grand Total ({{ currencyCode }})</td>\r
                    <td class="tr fw8">{{ po.grandTotal | number:'1.2-2' }}</td>\r
                  </tr>\r
                </tfoot>\r
              </table>\r
            </div>\r
          </div>\r
\r
          <!-- OTHER CHARGES (Training, Installation, Additional Cost, Transportation, etc.) -->\r
          <div class="po-box" *ngIf="getOtherCharges().length > 0">\r
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
                  <tr *ngFor="let c of getOtherCharges(); let ci = index">\r
                    <td>{{ ci + 1 }}</td>\r
                    <td>{{ c.chargeType }}</td>\r
                    <td>{{ c.qty }}</td>\r
                    <td>{{ c.uom }}</td>\r
                    <td>{{ c.rate | number:'1.2-2' }}</td>\r
                    <td>{{ c.amount | number:'1.2-2' }}</td>\r
                    <td>{{ c.taxPercentage }}%</td>\r
                    <td>{{ c.taxAmount | number:'1.2-2' }}</td>\r
                    <td class="fw-semibold">{{ c.totalAmount | number:'1.2-2' }}</td>\r
                    <td>{{ c.remarks }}</td>\r
                  </tr>\r
                </tbody>\r
                <tfoot>\r
                  <tr class="fw-bold">\r
                    <td colspan="8" class="text-end">Total Other Charges:</td>\r
                    <td>{{ getOtherChargesTotal() | number:'1.2-2' }}</td>\r
                    <td></td>\r
                  </tr>\r
                </tfoot>\r
              </table>\r
            </div>\r
          </div>\r
\r
          <!-- AMOUNT IN WORDS -->\r
          <div class="po-box po-words-box">\r
            <span class="words-label">Amount in Words:</span>\r
            <span class="words-val">{{ po.amountInWords || 'NIL' }}</span>\r
          </div>\r
\r
          <!-- REMARKS -->\r
          <div class="po-box po-remarks-box">\r
            <span class="remarks-label">Remarks:</span>\r
            <span class="remarks-val">{{ po.buyerRemarks || 'NIL' }}</span>\r
          </div>\r
\r
          <!-- COMPANY PAN -->\r
          <div class="po-box po-pan-box">\r
            <strong>Company's PAN:</strong> {{ po.buyerPan || 'NIL' }}\r
          </div>\r
\r
          <!-- TERMS & CONDITIONS -->\r
          <div class="po-box">\r
            <div class="sec-bar">TERMS &amp; CONDITIONS</div>\r
            <div *ngIf="po.otherTerms; else defaultTC" class="tc-body">{{ po.otherTerms }}</div>\r
            <ng-template #defaultTC>\r
              <div class="tc-body">\r
                <div>1) Kindly acknowledge and confirm the Order Immediately within 7 Days from the date of Purchase Order, failing which, it shall be deemed to be accepted.</div>\r
                <div>2) Please mention purchase order number in the invoice.</div>\r
                <div>3) TDS and Other Statutory deductions will be deducted as applicable.</div>\r
                <div>4) Deliveries do not exceed ordered Quantity.</div>\r
                <div>5) GST as applicable.</div>\r
                <div>6) Payment Terms: {{ po.paymentTerms || 'NIL' }}</div>\r
                <div *ngIf="po.advancePaymentRequired">\r
                  7) Advance Payment: {{ currencySymbol }}{{ po.advancePaymentAmount | number:'1.2-2' }}\r
                  <ng-container *ngIf="po.advancePaymentPercentage">({{ po.advancePaymentPercentage }}% of order value)</ng-container>\r
                  is required <strong>{{ advancePaymentDueLabel() }}</strong>. Balance payable as per invoice terms.\r
                </div>\r
              </div>\r
            </ng-template>\r
          </div>\r
\r
          <!-- ADVANCE PAYMENT (also shown outside the default-T&C fallback, so it's\r
               visible even when otherTerms overrides the default block above) -->\r
          <div class="po-box" *ngIf="po.advancePaymentRequired && po.otherTerms">\r
            <div class="sec-bar">ADVANCE PAYMENT</div>\r
            <div class="tc-body">\r
              <div>\r
                {{ currencySymbol }}{{ po.advancePaymentAmount | number:'1.2-2' }}\r
                <ng-container *ngIf="po.advancePaymentPercentage">({{ po.advancePaymentPercentage }}% of order value)</ng-container>\r
                required <strong>{{ advancePaymentDueLabel() }}</strong>.\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- PAYMENT PROVISIONS / MILESTONES -->\r
          <div class="po-box" *ngIf="getPaymentMilestones().length > 0">\r
            <div class="sec-bar">PAYMENT PROVISIONS / MILESTONES</div>\r
            <div class="table-responsive">\r
              <table class="table table-sm align-middle mb-0">\r
                <thead>\r
                  <tr>\r
                    <th>Sl No</th>\r
                    <th>Milestone / Description</th>\r
                    <th>%</th>\r
                    <th>Amount</th>\r
                    <th>Remarks</th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  <tr *ngFor="let m of getPaymentMilestones()">\r
                    <td>{{ m.slNo }}</td>\r
                    <td>{{ m.description }}</td>\r
                    <td>{{ m.percentage ? (m.percentage + '%') : '\u2014' }}</td>\r
                    <td>{{ m.amount ? (m.amount | number:'1.2-2') : '\u2014' }}</td>\r
                    <td>{{ m.remarks }}</td>\r
                  </tr>\r
                </tbody>\r
              </table>\r
            </div>\r
          </div>\r
\r
          <!-- RELEASE TRACKING (Blanket/Contract POs only) \u2014 this is the SUPPLY SCHEDULE,\r
               kept deliberately separate from PAYMENT PROVISIONS/MILESTONES above, which is\r
               the payment schedule. "Received" here is pulled from the existing GRN totals. -->\r
          <div class="po-box" *ngIf="isBlanketContract">\r
            <div class="sec-bar">RELEASE TRACKING \u2014 SUPPLY SCHEDULE</div>\r
            <div class="tc-body">\r
              <div class="release-stat-bar" *ngIf="poReleaseSummary">\r
                <div class="release-stat">\r
                  <span class="rs-label">Total PO Value</span>\r
                  <span class="rs-val">{{ currencySymbol }}{{ poReleaseSummary.totalPoValue | number:'1.2-2' }}</span>\r
                </div>\r
                <div class="release-stat">\r
                  <span class="rs-label">Released</span>\r
                  <span class="rs-val rs-released">{{ currencySymbol }}{{ poReleaseSummary.totalReleased | number:'1.2-2' }}</span>\r
                </div>\r
                <div class="release-stat">\r
                  <span class="rs-label">Received</span>\r
                  <span class="rs-val rs-received">{{ currencySymbol }}{{ poReleaseSummary.totalReceived | number:'1.2-2' }}</span>\r
                </div>\r
                <div class="release-stat">\r
                  <span class="rs-label">Remaining</span>\r
                  <span class="rs-val rs-remaining">{{ currencySymbol }}{{ poReleaseSummary.remaining | number:'1.2-2' }}</span>\r
                </div>\r
                <button type="button" class="btn btn-sm btn-primary ms-auto" (click)="openReleaseModal()">\r
                  <i class="bi bi-plus-lg me-1"></i>Create Release\r
                </button>\r
              </div>\r
\r
              <div class="table-responsive mt-3" *ngIf="poReleases.length > 0">\r
                <table class="table table-sm align-middle mb-0">\r
                  <thead>\r
                    <tr>\r
                      <th>Release No.</th>\r
                      <th>Release Date</th>\r
                      <th>Planned Delivery</th>\r
                      <th>Value</th>\r
                      <th>Status</th>\r
                      <th>Action</th>\r
                    </tr>\r
                  </thead>\r
                  <tbody>\r
                    <tr *ngFor="let r of poReleases">\r
                      <td class="fw-bold">{{ r.releaseNumber }}</td>\r
                      <td>{{ formatDateShort(r.releaseDate) }}</td>\r
                      <td>{{ r.plannedDeliveryDate ? formatDateShort(r.plannedDeliveryDate) : '\u2014' }}</td>\r
                      <td>{{ currencySymbol }}{{ r.totalReleasedValue | number:'1.2-2' }}</td>\r
                      <td><span class="badge" [ngClass]="releaseStatusBadgeClass(r.status)">{{ r.status }}</span></td>\r
                      <td>\r
                        <button *ngIf="r.status === 'DRAFT'" type="button" class="btn btn-xs btn-outline-success me-1" (click)="issueRelease(r)">Issue</button>\r
                        <button *ngIf="r.status !== 'CANCELLED'" type="button" class="btn btn-xs btn-outline-danger" (click)="cancelRelease(r)">Cancel</button>\r
                      </td>\r
                    </tr>\r
                  </tbody>\r
                </table>\r
              </div>\r
              <div *ngIf="!isLoadingReleases && poReleases.length === 0" class="text-muted small mt-2">\r
                No releases have been created against this PO yet.\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- SIGNATURES -->\r
          <div class="po-box">\r
            <div class="po-two-col">\r
              <div class="po-col-left sig-col">\r
                <div class="sig-header">Vendor Details</div>\r
                <div class="sig-fields">\r
                  <div class="sig-row" *ngFor="let f of ['Name', 'Signature', 'Designation', 'Date']">\r
                    <div class="sig-label-row"><span class="sig-lbl">{{ f }} :</span></div>\r
                    <div class="sig-line"></div>\r
                  </div>\r
                </div>\r
                <div class="sig-behalf">For and on behalf of <strong>{{ po.supplierName }}</strong></div>\r
              </div>\r
              <div class="po-col-right sig-col">\r
                <div class="sig-header">{{ po.buyerName }}</div>\r
                <div class="sig-fields">\r
                  <div class="sig-row" *ngFor="let f of ['Name', 'Signature', 'Designation', 'Date']">\r
                    <div class="sig-label-row"><span class="sig-lbl">{{ f }} :</span></div>\r
                    <div class="sig-line"></div>\r
                  </div>\r
                </div>\r
                <div class="sig-behalf">\r
                  <div *ngIf="po.approvedByName" class="fw-bold">{{ po.approvedByName }}</div>\r
                  <div *ngIf="po.approvedByDesignation" class="sig-desig">{{ po.approvedByDesignation }}</div>\r
                  For and on behalf of <strong>{{ po.buyerName }}</strong>\r
                </div>\r
                <div *ngIf="po.approvedAt" class="sig-digital">Digitally Signed on: {{ formatDateShort(po.approvedAt) }}</div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- FOOTER -->\r
          <div class="po-box po-footer-box">\r
            {{ po.buyerLocationAddress || po.buyerLocationName }}\r
          </div>\r
\r
        </div>\r
      </c-col>\r
    </c-row>\r
  </div>\r
\r
  <!-- Edit Modal -->\r
  <div class="modal fade" id="editModal" tabindex="-1" #editModalEl>\r
    <div class="modal-dialog modal-lg">\r
      <div class="modal-content">\r
        <div class="modal-header bg-warning">\r
          <h5 class="modal-title fw-bold">\r
            <i class="bi bi-pencil me-2"></i>Edit Purchase Order \u2014 {{ po?.poNumber }}\r
          </h5>\r
          <button type="button" class="btn-close" (click)="closeEditModal()"></button>\r
        </div>\r
        <div class="modal-body" *ngIf="editForm">\r
          <div class="alert alert-info mb-4">\r
            <i class="bi bi-info-circle me-2"></i>\r
            <strong>Note:</strong> Line item amounts are not editable.\r
          </div>\r
          <div class="row g-3">\r
            <div class="col-md-6">\r
              <label class="form-label fw-semibold">Payment Terms</label>\r
              <input type="text" class="form-control" [(ngModel)]="editForm.paymentTerms">\r
            </div>\r
            <div class="col-md-6">\r
              <label class="form-label fw-semibold">Delivery Terms</label>\r
              <input type="text" class="form-control" [(ngModel)]="editForm.deliveryTerms">\r
            </div>\r
            <div class="col-md-4">\r
              <label class="form-label fw-semibold">Dispatched Through</label>\r
              <input type="text" class="form-control" [(ngModel)]="editForm.dispatchedThrough">\r
            </div>\r
            <div class="col-md-4">\r
              <label class="form-label fw-semibold">Mode of Payment</label>\r
              <input type="text" class="form-control" [(ngModel)]="editForm.modeOfPayment">\r
            </div>\r
            <div class="col-md-4">\r
              <label class="form-label fw-semibold">Destination</label>\r
              <input type="text" class="form-control" [(ngModel)]="editForm.destination">\r
            </div>\r
            <div class="col-md-8">\r
              <label class="form-label fw-semibold">PO / Business Type</label>\r
              <div class="d-flex flex-wrap gap-3 pt-1">\r
                <div class="form-check" *ngFor="let opt of [\r
                  {value:'GOODS', label:'Goods'},\r
                  {value:'SERVICE', label:'Service'},\r
                  {value:'BLANKET_CONTRACT', label:'Blanket / Contract'},\r
                  {value:'PROJECT_MILESTONE', label:'Project / Milestone'}\r
                ]">\r
                  <input type="checkbox" class="form-check-input" [id]="'editPoType_' + opt.value"\r
                         [checked]="isEditPoTypeSelected(opt.value)" (change)="toggleEditPoType(opt.value)">\r
                  <label class="form-check-label" [for]="'editPoType_' + opt.value">{{ opt.label }}</label>\r
                </div>\r
              </div>\r
              <small class="text-muted">Tick as many as apply.</small>\r
            </div>\r
            <div class="col-md-4" *ngIf="isEditPoTypeSelected('BLANKET_CONTRACT')">\r
              <label class="form-label fw-semibold">Expiry Date <span class="text-muted fw-normal">(optional)</span></label>\r
              <input type="date" class="form-control" [(ngModel)]="editForm.expiryDate">\r
              <small class="text-muted" *ngIf="editForm.expiryDate">A reminder email sends automatically 30 days before expiry.</small>\r
            </div>\r
            <div class="col-12">\r
              <label class="form-label fw-semibold">Buyer Remarks</label>\r
              <textarea class="form-control" [(ngModel)]="editForm.buyerRemarks" rows="3"></textarea>\r
            </div>\r
            <div class="col-12">\r
              <label class="form-label fw-semibold">Terms &amp; Conditions</label>\r
              <textarea class="form-control" [(ngModel)]="editForm.otherTerms" rows="5"></textarea>\r
            </div>\r
            <div class="col-12">\r
              <label class="form-label fw-semibold">Internal Notes</label>\r
              <textarea class="form-control" [(ngModel)]="editForm.internalNotes" rows="2"></textarea>\r
            </div>\r
            <div class="col-12">\r
              <hr>\r
              <div class="form-check mb-2">\r
                <input type="checkbox" class="form-check-input" id="editAdvReq" [(ngModel)]="editForm.advancePaymentRequired">\r
                <label class="form-check-label fw-semibold" for="editAdvReq">Require advance payment before delivery</label>\r
              </div>\r
              <div class="row g-3" *ngIf="editForm.advancePaymentRequired">\r
                <div class="col-md-4">\r
                  <label class="form-label small">Advance % <span class="text-muted">(leave blank to use flat amount)</span></label>\r
                  <input type="number" class="form-control" min="0" max="100" step="0.5" [(ngModel)]="editForm.advancePaymentPercentage">\r
                </div>\r
                <div class="col-md-4">\r
                  <label class="form-label small">Flat Advance Amount <span class="text-muted">(used only if % is blank)</span></label>\r
                  <input type="number" class="form-control" min="0" step="0.01" [(ngModel)]="editForm.advancePaymentAmount">\r
                </div>\r
                <div class="col-md-4">\r
                  <label class="form-label small">Due</label>\r
                  <select class="form-select" [(ngModel)]="editForm.advancePaymentDue">\r
                    <option value="BEFORE_DELIVERY">Before Delivery</option>\r
                    <option value="BEFORE_DISPATCH">Before Dispatch</option>\r
                    <option value="ON_ORDER_CONFIRMATION">On Order Confirmation</option>\r
                    <option value="OTHER">Other</option>\r
                  </select>\r
                </div>\r
                <div class="col-12" *ngIf="editForm.advancePaymentDue === 'OTHER'">\r
                  <input type="text" class="form-control" placeholder="Specify when the advance is due" [(ngModel)]="editForm.advancePaymentNote">\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" (click)="closeEditModal()">Cancel</button>\r
          <button type="button" class="btn btn-success" (click)="saveEdit()" [disabled]="isSaving">\r
            <span *ngIf="isSaving" class="spinner-border spinner-border-sm me-1"></span>\r
            {{ isSaving ? 'Saving...' : 'Save Changes' }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Create Release Modal (Blanket/Contract POs) -->\r
  <div class="rel-modal-backdrop" *ngIf="isReleaseModalOpen" (click)="closeReleaseModal()">\r
    <div class="rel-modal" (click)="$event.stopPropagation()">\r
      <div class="rel-modal-header">\r
        <h5 class="fw-bold mb-0"><i class="bi bi-truck me-2"></i>Create Release \u2014 {{ po?.poNumber }}</h5>\r
        <button type="button" class="btn-close" (click)="closeReleaseModal()"></button>\r
      </div>\r
      <div class="rel-modal-body">\r
        <div class="alert alert-info py-2 mb-3">\r
          Remaining authorized capacity: <strong>{{ currencySymbol }}{{ remainingCapacity | number:'1.2-2' }}</strong>\r
        </div>\r
        <div class="row g-3 mb-3">\r
          <div class="col-md-4">\r
            <label class="form-label small">Release Date <span class="text-danger">*</span></label>\r
            <input type="date" class="form-control" [(ngModel)]="releaseForm.releaseDate">\r
          </div>\r
          <div class="col-md-4">\r
            <label class="form-label small">Planned Delivery Date</label>\r
            <input type="date" class="form-control" [(ngModel)]="releaseForm.plannedDeliveryDate">\r
          </div>\r
          <div class="col-md-4">\r
            <label class="form-label small">Released By</label>\r
            <input type="text" class="form-control" [(ngModel)]="releaseForm.releasedByName">\r
          </div>\r
          <div class="col-12">\r
            <label class="form-label small">Remarks</label>\r
            <textarea class="form-control" rows="2" [(ngModel)]="releaseForm.remarks" placeholder="Optional notes for this release\u2026"></textarea>\r
          </div>\r
        </div>\r
\r
        <div class="table-responsive">\r
          <table class="table table-sm align-middle mb-0">\r
            <thead>\r
              <tr>\r
                <th>Item</th>\r
                <th>UOM</th>\r
                <th>PO Qty</th>\r
                <th>Unit Rate</th>\r
                <th style="width:140px;">Release Qty</th>\r
                <th>Line Value</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let li of releaseLineItems">\r
                <td>{{ li.itemDescription }}</td>\r
                <td>{{ li.uom }}</td>\r
                <td>{{ li.poQuantity }}</td>\r
                <td>{{ currencySymbol }}{{ li.unitRate | number:'1.2-2' }}</td>\r
                <td><input type="number" class="form-control form-control-sm" min="0" [(ngModel)]="li.releasedQuantity"></td>\r
                <td>{{ currencySymbol }}{{ (li.releasedQuantity * li.unitRate) | number:'1.2-2' }}</td>\r
              </tr>\r
            </tbody>\r
            <tfoot>\r
              <tr>\r
                <td colspan="5" class="text-end fw-bold">This Release Total</td>\r
                <td class="fw-bold" [class.text-danger]="releaseModalTotal > remainingCapacity">{{ currencySymbol }}{{ releaseModalTotal | number:'1.2-2' }}</td>\r
              </tr>\r
            </tfoot>\r
          </table>\r
        </div>\r
      </div>\r
      <div class="rel-modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="closeReleaseModal()">Cancel</button>\r
        <button type="button" class="btn btn-success" (click)="saveRelease()" [disabled]="isSavingRelease">\r
          <span *ngIf="isSavingRelease" class="spinner-border spinner-border-sm me-1"></span>\r
          {{ isSavingRelease ? 'Saving...' : 'Create Release' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
</c-container>`, styles: ["/* src/app/views/base/po-details/po-details.component.css */\n.po-logo-cell img {\n  max-width: 155px;\n  max-height: 115px;\n  object-fit: contain;\n}\n.logo-initials-circle {\n  width: 115px;\n  height: 115px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.2rem;\n  font-weight: 800;\n  color: #fff;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  letter-spacing: 2px;\n  border: 3px solid #e2e8f0;\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n}\n.po-document {\n  max-width: 1060px;\n  margin: 0 auto 32px auto;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 0.85rem;\n  color: #000;\n  background: #fff;\n  border: 1.5px solid #555;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.po-header-inner {\n  display: grid;\n  grid-template-columns: 175px 1fr 175px;\n  align-items: center;\n  padding: 18px 24px 16px 20px;\n  gap: 0;\n  min-height: 130px;\n  border-bottom: 1px solid #555;\n}\n.po-logo-cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 175px;\n  padding-right: 10px;\n}\n.po-header-spacer {\n  width: 175px;\n}\n.logo-placeholder {\n  width: 130px;\n  height: 105px;\n  border: 1px solid #bbb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.65rem;\n  color: #aaa;\n  font-family: Arial, sans-serif;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.po-header-divider {\n  display: none;\n}\n.po-company-cell {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 4px;\n  padding: 0 10px;\n}\n.co-name {\n  font-size: 2.3rem;\n  font-weight: 900;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  line-height: 1.1;\n  margin-bottom: 7px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.co-line {\n  font-size: 0.79rem;\n  color: #000;\n  line-height: 1.75;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-weight: 400;\n}\n.po-title-box {\n  text-align: center;\n  padding: 10px 0 9px 0;\n  border-top: 1.5px solid #555;\n  border-bottom: 1.5px solid #555;\n  background: #fff;\n}\n.po-title-text {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #000;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.po-box {\n  border-top: 1px solid #555;\n  border-bottom: none;\n  background: #fff;\n}\n.po-title-box.po-box {\n  border-top: 1.5px solid #555;\n}\n.po-box:last-child {\n  border-bottom: 1px solid #555;\n}\n.po-two-col {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.po-col-left {\n  padding: 10px 14px 12px 16px;\n  border-right: 1px solid #555;\n}\n.po-col-right {\n  padding: 10px 14px 12px 16px;\n}\n.meta-row {\n  display: flex;\n  align-items: baseline;\n  font-size: 0.8rem;\n  line-height: 1.55;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.mk {\n  min-width: 148px;\n  font-weight: 400;\n  flex-shrink: 0;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 1.3rem;\n}\n.ms {\n  min-width: 16px;\n  text-align: center;\n  flex-shrink: 0;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 1.3rem;\n}\n.mv {\n  flex: 1;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 1.3rem;\n  font-weight: 400;\n}\n.sec-bar {\n  background: #c8c8c8;\n  border-bottom: 1px solid #555;\n  font-size: 1.33rem;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-align: center;\n  padding: 7px 12px;\n  color: #000;\n  text-transform: uppercase;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n}\n.sec-body {\n  padding: 9px 16px;\n  font-size: 1.3rem;\n  color: #000;\n  line-height: 1.7;\n  min-height: 32px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.addr-name {\n  font-weight: 700;\n  margin-bottom: 3px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 1.3rem;\n}\n.po-table-wrap {\n  overflow-x: auto;\n}\n.po-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.79rem;\n  table-layout: fixed;\n}\n.po-table thead tr th {\n  background: #c8c8c8 !important;\n  color: #000 !important;\n  font-weight: 600;\n  font-size: 1.12rem;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  padding: 8px 8px;\n  border: 1px solid #555 !important;\n  vertical-align: middle;\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.po-table tbody td {\n  padding: 8px 8px;\n  border: 1px solid #555 !important;\n  vertical-align: top;\n  color: #000;\n  font-size: 1.15rem;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.po-table tfoot td {\n  padding: 7px 8px;\n  border: 1px solid #555 !important;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 1.15rem;\n}\n.tc {\n  text-align: center !important;\n}\n.tl {\n  text-align: left !important;\n  padding-left: 10px !important;\n}\n.tr {\n  text-align: right !important;\n  padding-right: 10px !important;\n}\n.fw7 {\n  font-weight: 700;\n}\n.fw8 {\n  font-weight: 800;\n}\n.item-name {\n  font-weight: 700;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 1.12rem;\n}\n.item-sub {\n  font-size: 0.75rem;\n  color: #444;\n  margin-top: 2px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.spacer-row td {\n  height: 24px !important;\n  border: 1px solid #555 !important;\n  padding: 0 !important;\n  background: #fff;\n}\n.grand-total-row td {\n  background: #efefef !important;\n  font-weight: 800;\n  font-size: 0.85rem;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n}\n.po-words-box {\n  padding: 9px 16px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  align-items: baseline;\n}\n.words-label {\n  font-weight: 700;\n  white-space: nowrap;\n  font-size: 1.15rem;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.words-val {\n  font-weight: 400;\n  font-style: italic;\n  font-size: 1.10rem;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.po-remarks-box {\n  padding: 8px 16px;\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  align-items: baseline;\n  font-size: 1.05rem;\n}\n.remarks-label {\n  font-weight: 700;\n  white-space: nowrap;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.remarks-val {\n  color: #333;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 1.01rem;\n}\n.po-pan-box {\n  padding: 7px 16px;\n  font-size: 1.03rem;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.tc-body {\n  padding: 10px 16px 18px 16px;\n  font-size: 1.10rem;\n  color: #000;\n  line-height: 1.70;\n  min-height: 100px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.tc-body > div {\n  margin-bottom: 2px;\n}\n.sig-col {\n  padding: 22px 28px 22px 28px;\n}\n.sig-header {\n  font-weight: 700;\n  font-size: 1.25rem;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 26px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.sig-fields {\n  display: flex;\n  flex-direction: column;\n}\n.sig-row {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 22px;\n}\n.sig-label-row {\n  font-size: 1.15rem;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  margin-bottom: 5px;\n}\n.sig-lbl {\n  font-size: 1.15rem;\n  color: #000;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.sig-line {\n  width: 78%;\n  border-bottom: 1px solid #444;\n  height: 1px;\n}\n.sig-behalf {\n  margin-top: 22px;\n  font-size: 1.12rem;\n  color: #000;\n  line-height: 1.65;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.sig-desig {\n  font-size: 1.03rem;\n  color: #555;\n}\n.sig-digital {\n  margin-top: 8px;\n  font-size: 0.73rem;\n  color: #555;\n  font-style: italic;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.po-footer-box {\n  text-align: center;\n  padding: 8px 14px;\n  background: #efefef;\n  font-size: 1.30rem;\n  color: #333;\n  font-style: italic;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  border-bottom: 1px solid #555 !important;\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n}\n.badge {\n  font-size: 0.68rem;\n  padding: 3px 7px;\n  border-radius: 3px;\n}\n@media print {\n  .c-sidebar,\n  .c-header,\n  c-card-header,\n  .btn,\n  button,\n  .d-flex.gap-2 {\n    display: none !important;\n  }\n  .po-document {\n    border: none !important;\n    max-width: 100% !important;\n    margin: 0 !important;\n  }\n  .po-box,\n  .po-table td,\n  .po-table th,\n  .sec-bar,\n  .grand-total-row td,\n  .po-footer-box {\n    -webkit-print-color-adjust: exact !important;\n    print-color-adjust: exact !important;\n  }\n}\n@media (max-width: 768px) {\n  .po-header-inner {\n    grid-template-columns: 1fr;\n    justify-items: center;\n    gap: 12px;\n  }\n  .po-header-spacer {\n    display: none;\n  }\n  .po-logo-cell {\n    width: auto;\n    padding-right: 0;\n  }\n  .po-two-col {\n    grid-template-columns: 1fr;\n  }\n  .po-col-left {\n    border-right: none;\n    border-bottom: 1px solid #555;\n  }\n  .po-table {\n    font-size: 0.72rem;\n  }\n  .co-name {\n    font-size: 1.2rem;\n  }\n}\n.release-stat-bar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 22px;\n  padding: 10px 4px;\n}\n.release-stat {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.rs-label {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .03em;\n  color: #666;\n}\n.rs-val {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #222;\n}\n.rs-val.rs-released {\n  color: #b45309;\n}\n.rs-val.rs-received {\n  color: #15803d;\n}\n.rs-val.rs-remaining {\n  color: #1d4ed8;\n}\n.btn-xs {\n  padding: 2px 8px;\n  font-size: 0.72rem;\n}\n.rel-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, .55);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.rel-modal {\n  background: #fff;\n  border-radius: 10px;\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.rel-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.rel-modal-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n}\n.rel-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n}\n/*# sourceMappingURL=po-details.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DataService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PODetailsComponent, { className: "PODetailsComponent", filePath: "src/app/views/base/po-details/po-details.component.ts", lineNumber: 26 });
})();
export {
  PODetailsComponent
};
//# sourceMappingURL=chunk-XC24IG45.js.map
