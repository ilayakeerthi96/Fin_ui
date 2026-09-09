import {
  AlertComponent,
  BadgeComponent,
  ButtonCloseDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  IconDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  RowComponent,
  TooltipDirective
} from "./chunk-U7YW3DHP.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-E33XJXHD.js";
import {
  DataService
} from "./chunk-OQIPAMNU.js";
import "./chunk-JKMYCEKN.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BCCUO726.js";
import {
  __spreadValues
} from "./chunk-SO7Q7VKX.js";

// src/app/views/base/hierarchy-users/hierarchy-user-management.component.ts
var _c0 = ["userModal"];
var _c1 = ["deleteModal"];
function HierarchyUserManagementComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    \u0275\u0275property("value", level_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" L", level_r2.levelOrder, ": ", level_r2.levelName, " ");
  }
}
function HierarchyUserManagementComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "span", 67);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 68);
    \u0275\u0275text(5, "Loading users...");
    \u0275\u0275elementEnd()();
  }
}
function HierarchyUserManagementComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275elementStart(2, "p", 70);
    \u0275\u0275text(3, "No users found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 71);
    \u0275\u0275listener("click", function HierarchyUserManagementComponent_div_50_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openCreateModal());
    });
    \u0275\u0275element(5, "i", 33);
    \u0275\u0275text(6, " Add First User ");
    \u0275\u0275elementEnd()();
  }
}
function HierarchyUserManagementComponent_div_51_tr_25_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 10)(2, "div", 101);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong", 102);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 103);
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "c-badge", 104);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const manager_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", manager_r6.fullName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(manager_r6.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", manager_r6.designation, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" L", manager_r6.hierarchyLevelOrder, " ");
  }
}
function HierarchyUserManagementComponent_div_51_tr_25_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275template(1, HierarchyUserManagementComponent_div_51_tr_25_div_22_div_1_Template, 11, 4, "div", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", user_r7.reportsTo);
  }
}
function HierarchyUserManagementComponent_div_51_tr_25_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "c-badge", 105);
    \u0275\u0275element(2, "i", 106);
    \u0275\u0275text(3, " No manager ");
    \u0275\u0275elementEnd()();
  }
}
function HierarchyUserManagementComponent_div_51_tr_25_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 107);
    \u0275\u0275listener("click", function HierarchyUserManagementComponent_div_51_tr_25_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const user_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleUserStatus(user_r7));
    });
    \u0275\u0275element(1, "i", 108);
    \u0275\u0275elementEnd();
  }
}
function HierarchyUserManagementComponent_div_51_tr_25_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function HierarchyUserManagementComponent_div_51_tr_25_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleUserStatus(user_r7));
    });
    \u0275\u0275element(1, "i", 110);
    \u0275\u0275elementEnd();
  }
}
function HierarchyUserManagementComponent_div_51_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 81)(1, "td")(2, "div", 10)(3, "div", 82);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong", 83);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 84);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 85)(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td")(15, "div", 86);
    \u0275\u0275element(16, "i", 75);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "c-badge", 87);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275template(22, HierarchyUserManagementComponent_div_51_tr_25_div_22_Template, 2, 1, "div", 88)(23, HierarchyUserManagementComponent_div_51_tr_25_div_23_Template, 4, 0, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "c-badge", 89);
    \u0275\u0275element(26, "i", 90);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 91)(29, "button", 92);
    \u0275\u0275listener("click", function HierarchyUserManagementComponent_div_51_tr_25_Template_button_click_29_listener() {
      const user_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEditModal(user_r7));
    });
    \u0275\u0275element(30, "i", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, HierarchyUserManagementComponent_div_51_tr_25_button_31_Template, 2, 0, "button", 94)(32, HierarchyUserManagementComponent_div_51_tr_25_button_32_Template, 2, 0, "button", 95);
    \u0275\u0275elementStart(33, "button", 96);
    \u0275\u0275listener("click", function HierarchyUserManagementComponent_div_51_tr_25_Template_button_click_33_listener() {
      const user_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.confirmDelete(user_r7));
    });
    \u0275\u0275element(34, "i", 97);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", user_r7.fullName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r7.phone || "No phone", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r7.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", user_r7.designation, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx_r3.getLevelBadgeColor(user_r7.hierarchyLevelOrder));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" L", user_r7.hierarchyLevelOrder, ": ", user_r7.hierarchyLevelName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r7.reportsTo && user_r7.reportsTo.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !user_r7.reportsTo || user_r7.reportsTo.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("color", user_r7.isActive ? "primary" : "secondary");
    \u0275\u0275advance();
    \u0275\u0275classMap(user_r7.isActive ? "cil-check-circle" : "cil-x-circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r7.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", user_r7.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !user_r7.isActive);
  }
}
function HierarchyUserManagementComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "table", 73)(2, "thead", 74)(3, "tr")(4, "th");
    \u0275\u0275element(5, "i", 48);
    \u0275\u0275text(6, "Name & Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275element(8, "i", 21);
    \u0275\u0275text(9, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275element(11, "i", 75);
    \u0275\u0275text(12, "Designation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275element(14, "i", 76);
    \u0275\u0275text(15, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275element(17, "i", 77);
    \u0275\u0275text(18, "Reports To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275element(20, "i", 78);
    \u0275\u0275text(21, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 79);
    \u0275\u0275text(23, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, HierarchyUserManagementComponent_div_51_tr_25_Template, 35, 16, "tr", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(25);
    \u0275\u0275property("ngForOf", ctx_r3.filteredUsers);
  }
}
function HierarchyUserManagementComponent_div_69_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function HierarchyUserManagementComponent_div_69_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Invalid email format");
    \u0275\u0275elementEnd();
  }
}
function HierarchyUserManagementComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275template(1, HierarchyUserManagementComponent_div_69_span_1_Template, 2, 0, "span", 55)(2, HierarchyUserManagementComponent_div_69_span_2_Template, 2, 0, "span", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r3.userForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r3.userForm.get("email")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["email"]);
  }
}
function HierarchyUserManagementComponent_div_77_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Full name is required");
    \u0275\u0275elementEnd();
  }
}
function HierarchyUserManagementComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275template(1, HierarchyUserManagementComponent_div_77_span_1_Template, 2, 0, "span", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r3.userForm.get("fullName")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function HierarchyUserManagementComponent_c_col_78_div_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function HierarchyUserManagementComponent_c_col_78_div_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Minimum 6 characters");
    \u0275\u0275elementEnd();
  }
}
function HierarchyUserManagementComponent_c_col_78_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275template(1, HierarchyUserManagementComponent_c_col_78_div_7_span_1_Template, 2, 0, "span", 55)(2, HierarchyUserManagementComponent_c_col_78_div_7_span_2_Template, 2, 0, "span", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r3.userForm.get("password")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r3.userForm.get("password")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["minlength"]);
  }
}
function HierarchyUserManagementComponent_c_col_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 112)(1, "label", 44);
    \u0275\u0275element(2, "i", 113);
    \u0275\u0275text(3, " Password ");
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 114);
    \u0275\u0275template(7, HierarchyUserManagementComponent_c_col_78_div_7_Template, 3, 2, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_3_0 = ctx_r3.userForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r3.userForm.get("password")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r3.userForm.get("password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r3.userForm.get("password")) == null ? null : tmp_4_0.touched));
  }
}
function HierarchyUserManagementComponent_c_col_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 112)(1, "label", 44);
    \u0275\u0275element(2, "i", 113);
    \u0275\u0275text(3, " New Password (Optional) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 115);
    \u0275\u0275elementStart(5, "small", 116);
    \u0275\u0275text(6, "Only fill to change password");
    \u0275\u0275elementEnd()();
  }
}
function HierarchyUserManagementComponent_c_alert_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-alert", 117);
    \u0275\u0275listener("visibleChange", function HierarchyUserManagementComponent_c_alert_80_Template_c_alert_visibleChange_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.errorMessage = null);
    });
    \u0275\u0275element(1, "i", 118);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("dismissible", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.errorMessage, " ");
  }
}
function HierarchyUserManagementComponent_c_alert_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-alert", 119);
    \u0275\u0275listener("visibleChange", function HierarchyUserManagementComponent_c_alert_81_Template_c_alert_visibleChange_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.successMessage = null);
    });
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("dismissible", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.successMessage, " ");
  }
}
function HierarchyUserManagementComponent_span_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.isEditMode ? "cil-save" : "cil-user-follow");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.isEditMode ? "Update" : "Create", " ");
  }
}
function HierarchyUserManagementComponent_span_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 120);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isEditMode ? "Updating..." : "Creating...", " ");
  }
}
function HierarchyUserManagementComponent_span_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 121);
    \u0275\u0275text(2, " Delete ");
    \u0275\u0275elementEnd();
  }
}
function HierarchyUserManagementComponent_span_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 120);
    \u0275\u0275text(2, " Deleting... ");
    \u0275\u0275elementEnd();
  }
}
var _HierarchyUserManagementComponent = class _HierarchyUserManagementComponent {
  constructor(fb, dataService) {
    this.fb = fb;
    this.dataService = dataService;
    this.hierarchyUsers = [];
    this.filteredUsers = [];
    this.hierarchyLevels = [];
    this.potentialManagers = [];
    this.companyName = "";
    this.fullName = "";
    this.email = "";
    this.role = "Organization Admin";
    this.selectedLevelFilter = "";
    this.isLoading = false;
    this.isSubmitting = false;
    this.isDeleting = false;
    this.showModal = false;
    this.showDeleteModal = false;
    this.isEditMode = false;
    this.selectedUser = null;
    this.errorMessage = null;
    this.successMessage = null;
    this.initForm();
  }
  ngOnInit() {
    this.companyName = localStorage.getItem("companyName") || "Unknown Company";
    this.fullName = localStorage.getItem("fullName") || "SuperAdmin";
    this.email = localStorage.getItem("email") || "admin@company.com";
    this.loadHierarchyLevels();
    this.loadHierarchyUsers();
  }
  /**
   * Every login created from this screen now is a Procurement Operations login — there is
   * no approval hierarchy left to place someone into, so designation, phone, the level
   * choice and the reporting structure are no longer asked for. They still exist as hidden
   * form fields (the backend still stores them) and are filled in automatically below.
   */
  initForm() {
    this.userForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      fullName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      designation: ["Procurement Operations"],
      phone: [""],
      hierarchyLevelId: ["", Validators.required],
      reportsToIds: [[]],
      password: [""],
      companyName: [""]
    });
  }
  /** The one level every user created here belongs to — resolved by name so this keeps
   *  working regardless of the level's numeric id in a given database. */
  procurementOpsLevelId() {
    const level = this.hierarchyLevels.find((l) => l.levelName === "Procurement Operations");
    return level ? level.id : null;
  }
  loadHierarchyLevels() {
    this.dataService.getHierarchyLevelsByCompany(this.companyName).subscribe({
      next: (response) => {
        if (response?.success && response?.data) {
          this.hierarchyLevels = response.data;
          console.log("\u2705 Loaded hierarchy levels:", this.hierarchyLevels.length);
        }
      },
      error: (error) => {
        console.error("\u274C Error loading hierarchy levels:", error);
      }
    });
  }
  loadHierarchyUsers() {
    this.isLoading = true;
    this.errorMessage = null;
    this.dataService.getHierarchyUsersByCompany(this.companyName).subscribe({
      next: (response) => {
        console.log("\u2705 Full Hierarchy Users Response:", response);
        this.isLoading = false;
        if (response?.success && response?.data) {
          this.hierarchyUsers = response.data;
          this.filteredUsers = [...this.hierarchyUsers];
          this.hierarchyUsers.forEach((user) => {
            console.log(`\u{1F464} User: ${user.fullName}`);
            console.log("   reportsTo:", user.reportsTo);
          });
          console.log(`\u2705 Loaded ${this.hierarchyUsers.length} hierarchy users`);
        } else {
          this.hierarchyUsers = [];
          this.filteredUsers = [];
          this.errorMessage = response?.message || "Failed to load users";
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error("\u274C Error loading hierarchy users:", error);
        this.errorMessage = error.error?.message || "Failed to load users";
      }
    });
  }
  updatePotentialManagers() {
    const selectedLevelId = this.userForm.get("hierarchyLevelId")?.value;
    if (!selectedLevelId) {
      this.potentialManagers = [];
      return;
    }
    const levelIdNumber = Number(selectedLevelId);
    const selectedLevel = this.hierarchyLevels.find((l) => l.id === levelIdNumber);
    if (!selectedLevel) {
      this.potentialManagers = [];
      return;
    }
    this.potentialManagers = this.hierarchyUsers.filter((user) => {
      if (this.isEditMode && this.selectedUser && user.id === this.selectedUser.id) {
        return false;
      }
      return user.hierarchyLevelOrder < selectedLevel.levelOrder;
    });
    console.log("\u2705 Updated potential managers:", this.potentialManagers.length);
  }
  filterByLevel() {
    if (!this.selectedLevelFilter) {
      this.filteredUsers = [...this.hierarchyUsers];
    } else {
      this.filteredUsers = this.hierarchyUsers.filter((user) => user.hierarchyLevelId?.toString() === this.selectedLevelFilter);
    }
  }
  openCreateModal() {
    console.log("\u{1F535} Opening CREATE USER modal...");
    this.isEditMode = false;
    this.selectedUser = null;
    this.userForm.reset();
    this.userForm.patchValue({
      companyName: this.companyName,
      reportsToIds: [],
      email: "",
      fullName: "",
      designation: "Procurement Operations",
      phone: "",
      hierarchyLevelId: this.procurementOpsLevelId(),
      password: ""
    });
    this.userForm.get("password")?.setValidators([Validators.required, Validators.minLength(6)]);
    this.userForm.get("password")?.updateValueAndValidity();
    this.potentialManagers = [];
    this.errorMessage = null;
    this.successMessage = null;
    this.showModal = true;
    console.log("\u2705 User Modal opened:", {
      showModal: this.showModal,
      isEditMode: this.isEditMode,
      formValue: this.userForm.value
    });
  }
  openEditModal(user) {
    console.log("\u{1F7E1} Opening EDIT USER modal for:", user);
    this.isEditMode = true;
    this.selectedUser = user;
    let managerIds = [];
    if (user.reportsTo && Array.isArray(user.reportsTo)) {
      managerIds = user.reportsTo.map((m) => m.id);
    } else if (user.reportsToId) {
      managerIds = [user.reportsToId];
    }
    this.userForm.patchValue({
      email: user.email,
      fullName: user.fullName,
      designation: user.designation,
      phone: user.phone,
      hierarchyLevelId: user.hierarchyLevelId,
      reportsToIds: managerIds,
      companyName: user.companyName
    });
    this.updatePotentialManagers();
    this.userForm.get("password")?.clearValidators();
    this.userForm.get("password")?.updateValueAndValidity();
    this.errorMessage = null;
    this.successMessage = null;
    this.showModal = true;
  }
  submitUser() {
    console.log("\u{1F4E4} Submit User Called");
    console.log("Form Valid:", this.userForm.valid);
    console.log("Form Value:", this.userForm.value);
    console.log("Is Edit Mode:", this.isEditMode);
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      console.log("\u274C Form is invalid");
      console.log("Form Errors:", this.getFormValidationErrors());
      return;
    }
    this.isSubmitting = true;
    this.errorMessage = null;
    this.successMessage = null;
    const userData = __spreadValues({}, this.userForm.value);
    if (userData.hierarchyLevelId) {
      userData.hierarchyLevelId = Number(userData.hierarchyLevelId);
    }
    if (userData.reportsToIds && Array.isArray(userData.reportsToIds)) {
      userData.reportsToIds = userData.reportsToIds.map((id) => Number(id));
    } else {
      userData.reportsToIds = [];
    }
    if (this.isEditMode && !userData.password) {
      delete userData.password;
    }
    console.log("\u{1F4E4} Submitting user data:", userData);
    if (this.isEditMode) {
      console.log("\u{1F504} Updating user:", this.selectedUser.id);
      this.dataService.updateHierarchyUser(this.selectedUser.id, userData).subscribe({
        next: (response) => {
          console.log("\u2705 User Updated:", response);
          this.isSubmitting = false;
          if (response?.success) {
            this.successMessage = "User updated successfully!";
            setTimeout(() => {
              this.closeModal();
              this.loadHierarchyUsers();
            }, 1e3);
          } else {
            this.errorMessage = response?.message || "Failed to update user";
          }
        },
        error: (error) => {
          this.isSubmitting = false;
          console.error("\u274C Error updating user:", error);
          this.errorMessage = error.error?.error || error.error?.message || "Failed to update user";
        }
      });
    } else {
      console.log("\u2795 Creating new user");
      this.dataService.createHierarchyUser(userData).subscribe({
        next: (response) => {
          console.log("\u2705 User Created:", response);
          this.isSubmitting = false;
          if (response?.success) {
            this.successMessage = "User created successfully!";
            setTimeout(() => {
              this.closeModal();
              this.loadHierarchyUsers();
            }, 1e3);
          } else {
            this.errorMessage = response?.message || "Failed to create user";
          }
        },
        error: (error) => {
          this.isSubmitting = false;
          console.error("\u274C Error creating user:", error);
          this.errorMessage = error.error?.error || error.error?.message || "Failed to create user";
        }
      });
    }
  }
  getFormValidationErrors() {
    const errors = {};
    Object.keys(this.userForm.controls).forEach((key) => {
      const controlErrors = this.userForm.get(key)?.errors;
      if (controlErrors != null) {
        errors[key] = controlErrors;
      }
    });
    return errors;
  }
  toggleUserStatus(user) {
    const action = user.isActive ? "deactivate" : "activate";
    const confirmMsg = `Are you sure you want to ${action} "${user.fullName}"?`;
    if (!confirm(confirmMsg))
      return;
    const apiCall = user.isActive ? this.dataService.deactivateHierarchyUser(user.id) : this.dataService.activateHierarchyUser(user.id);
    apiCall.subscribe({
      next: (response) => {
        console.log(`\u2705 User ${action}d:`, response);
        if (response?.success) {
          this.loadHierarchyUsers();
        } else {
          alert(response?.message || `Failed to ${action} user`);
        }
      },
      error: (error) => {
        console.error(`\u274C Error ${action}ing user:`, error);
        alert(error.error?.message || `Failed to ${action} user`);
      }
    });
  }
  confirmDelete(user) {
    this.selectedUser = user;
    this.showDeleteModal = true;
  }
  deleteUser() {
    if (!this.selectedUser)
      return;
    this.isDeleting = true;
    this.dataService.deleteHierarchyUser(this.selectedUser.id).subscribe({
      next: (response) => {
        console.log("\u2705 User Deleted:", response);
        this.isDeleting = false;
        if (response?.success) {
          this.showDeleteModal = false;
          this.loadHierarchyUsers();
        } else {
          alert(response?.message || "Failed to delete user");
        }
      },
      error: (error) => {
        this.isDeleting = false;
        console.error("\u274C Error deleting user:", error);
        alert(error.error?.message || "Failed to delete user");
      }
    });
  }
  closeModal() {
    console.log("\u{1F534} Closing user modal");
    this.showModal = false;
    this.userForm.reset();
    this.potentialManagers = [];
    this.errorMessage = null;
    this.successMessage = null;
    this.isEditMode = false;
    this.selectedUser = null;
  }
  onModalClose(visible) {
    if (!visible) {
      this.closeModal();
    }
  }
  getLevelBadgeColor(order) {
    if (order <= 10)
      return "danger";
    if (order <= 20)
      return "warning";
    if (order <= 30)
      return "info";
    return "secondary";
  }
  formatManagers(managers) {
    if (!managers || managers.length === 0)
      return "None";
    return managers.map((m) => m.fullName).join(", ");
  }
  isManagerSelectedInForm(managerId) {
    const currentSelection = this.userForm.get("reportsToIds")?.value || [];
    return currentSelection.includes(managerId);
  }
  toggleManagerInForm(managerId) {
    const currentSelection = this.userForm.get("reportsToIds")?.value || [];
    const managerIdNumber = Number(managerId);
    const index = currentSelection.indexOf(managerIdNumber);
    if (index > -1) {
      currentSelection.splice(index, 1);
    } else {
      currentSelection.push(managerIdNumber);
    }
    this.userForm.patchValue({
      reportsToIds: [...currentSelection]
    });
    console.log("\u2705 Updated managers selection:", currentSelection);
  }
  getInitials(name) {
    if (!name)
      return "NA";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
};
_HierarchyUserManagementComponent.\u0275fac = function HierarchyUserManagementComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HierarchyUserManagementComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DataService));
};
_HierarchyUserManagementComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HierarchyUserManagementComponent, selectors: [["app-hierarchy-user-management"]], viewQuery: function HierarchyUserManagementComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
    \u0275\u0275viewQuery(_c1, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.userModal = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deleteModal = _t.first);
  }
}, decls: 111, vars: 37, consts: [["userModal", ""], ["deleteModal", ""], ["fluid", "", 1, "mt-4"], [1, "mb-4"], ["xs", "12"], [1, "border-0", "shadow-lg"], [1, "gradient-header-users"], [1, "p-4"], [1, "align-items-center"], ["xs", "12", "lg", "4", 1, "mb-3", "mb-lg-0"], [1, "d-flex", "align-items-center"], [1, "avatar-circle-large", "me-3"], [1, "text-white"], [1, "mb-1", "fw-bold"], [1, "mb-0", "opacity-90"], [1, "cil-shield-alt", "me-1"], ["xs", "12", "lg", "5", 1, "mb-3", "mb-lg-0"], [1, "text-white", "mb-2", "fw-bold"], [1, "cil-people", "me-2"], [1, "text-white", "mb-0", "opacity-90"], [1, "cil-building", "me-2"], [1, "cil-envelope-closed", "me-2"], [1, "border-0", "shadow"], [1, "bg-white", "border-bottom"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap"], [1, "mb-0", "fw-bold"], [1, "cil-list", "me-2", "text-primary"], [1, "d-flex", "align-items-center", "gap-2", "mt-2", "mt-md-0"], [1, "mb-0", "me-2"], ["cFormControl", "", 1, "form-select-modern", 2, "width", "220px", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["cButton", "", 1, "btn-create-primary", 3, "click"], [1, "cil-user-follow", "me-2"], [1, "p-0"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["size", "lg", 3, "visibleChange", "visible"], [1, "modal-header-users"], ["cModalTitle", "", 1, "text-white"], [1, "me-2"], ["cButtonClose", "", 1, "text-white", 3, "click"], [3, "formGroup"], ["xs", "12", "md", "6", 1, "mb-3"], ["cLabel", "", 1, "form-label-modern"], [1, "text-danger"], ["cFormControl", "", "formControlName", "email", "type", "email", "placeholder", "user@example.com", 1, "form-control-modern", 3, "disabled"], ["class", "invalid-feedback", 4, "ngIf"], [1, "cil-user", "me-2"], ["cFormControl", "", "formControlName", "fullName", "placeholder", "John Doe", 1, "form-control-modern"], ["xs", "12", "class", "mb-3", 4, "ngIf"], ["color", "danger", "class", "modern-alert", 3, "dismissible", "visibleChange", 4, "ngIf"], ["color", "success", "class", "modern-alert", 3, "dismissible", "visibleChange", 4, "ngIf"], ["cButton", "", "color", "secondary", 1, "btn-modern", 3, "click", "disabled"], ["cButton", "", 1, "btn-modern", 3, "click", "color", "disabled"], [4, "ngIf"], ["size", "sm", 3, "visibleChange", "visible"], [1, "modal-header-danger"], [1, "cil-warning", "me-2"], [1, "mb-3"], [1, "alert", "alert-warning"], [1, "cil-info", "me-2"], ["cButton", "", "color", "secondary", 3, "click", "disabled"], ["cButton", "", "color", "danger", 3, "click", "disabled"], [3, "value"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "3rem", "height", "3rem"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], [1, "cil-user", 2, "font-size", "4rem", "color", "#6c757d"], [1, "text-muted", "mb-3", "fs-5", "mt-3"], ["cButton", "", "color", "primary", 3, "click"], [1, "table-responsive"], [1, "table", "table-hover", "modern-table", "mb-0"], [1, "table-light"], [1, "cil-briefcase", "me-2"], [1, "cil-layers", "me-2"], [1, "cil-arrow-thick-from-bottom", "me-2"], [1, "cil-check-circle", "me-2"], [1, ""], ["class", "modern-table-row", 4, "ngFor", "ngForOf"], [1, "modern-table-row"], [1, "avatar-circle", "me-3"], [1, "user-name"], [1, "user-email"], [1, "email-cell"], [1, "designation-badge"], [1, "level-badge-modern", 3, "color"], ["class", "managers-list", 4, "ngIf"], [1, "status-badge", 3, "color"], [1, "me-1"], [1, "text-end", "pe-4"], ["title", "Edit User", 1, "btn", "btn-sm", "btn-light", "text-primary", "me-2", "shadow-sm", "action-icon-btn", 3, "click"], [1, "cil-pencil"], ["class", "btn btn-sm btn-light text-warning me-2 shadow-sm action-icon-btn", "title", "Deactivate", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-light text-success me-2 shadow-sm action-icon-btn", "title", "Activate", 3, "click", 4, "ngIf"], ["title", "Delete", 1, "btn", "btn-sm", "btn-light", "text-danger", "shadow-sm", "action-icon-btn", 3, "click"], [1, "cil-trash"], [1, "managers-list"], ["class", "manager-item mb-2", 4, "ngFor", "ngForOf"], [1, "manager-item", "mb-2"], [1, "mini-avatar", "me-2"], [1, "d-block", "small"], [1, "text-muted"], ["color", "secondary", "size", "sm", 1, "ms-1"], ["color", "light", 1, "text-muted", "px-3", "py-2"], [1, "cil-ban", "me-1"], ["title", "Deactivate", 1, "btn", "btn-sm", "btn-light", "text-warning", "me-2", "shadow-sm", "action-icon-btn", 3, "click"], [1, "cil-ban"], ["title", "Activate", 1, "btn", "btn-sm", "btn-light", "text-success", "me-2", "shadow-sm", "action-icon-btn", 3, "click"], [1, "cil-check"], [1, "invalid-feedback"], ["xs", "12", 1, "mb-3"], [1, "cil-lock-locked", "me-2"], ["cFormControl", "", "formControlName", "password", "type", "password", "placeholder", "Minimum 6 characters", 1, "form-control-modern"], ["cFormControl", "", "formControlName", "password", "type", "password", "placeholder", "Leave blank to keep current", 1, "form-control-modern"], [1, "form-text", "text-muted"], ["color", "danger", 1, "modern-alert", 3, "visibleChange", "dismissible"], [1, "cil-x-circle", "me-2"], ["color", "success", 1, "modern-alert", 3, "visibleChange", "dismissible"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "cil-trash", "me-2"]], template: function HierarchyUserManagementComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-container", 2)(1, "c-row", 3)(2, "c-col", 4)(3, "c-card", 5)(4, "div", 6)(5, "c-card-body", 7)(6, "c-row", 8)(7, "c-col", 9)(8, "div", 10)(9, "div", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12)(12, "h5", 13);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 14);
    \u0275\u0275element(15, "i", 15);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "c-col", 16)(18, "h3", 17);
    \u0275\u0275element(19, "i", 18);
    \u0275\u0275text(20, " Hierarchy User Management ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 19);
    \u0275\u0275element(22, "i", 20);
    \u0275\u0275text(23, " Company: ");
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " | ");
    \u0275\u0275element(27, "i", 21);
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275elementStart(30, "c-row")(31, "c-col", 4)(32, "c-card", 22)(33, "c-card-header", 23)(34, "div", 24)(35, "h5", 25);
    \u0275\u0275element(36, "i", 26);
    \u0275\u0275text(37, " Hierarchy Users ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 27)(39, "label", 28);
    \u0275\u0275text(40, "Filter:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function HierarchyUserManagementComponent_Template_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.selectedLevelFilter, $event) || (ctx.selectedLevelFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function HierarchyUserManagementComponent_Template_select_change_41_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.filterByLevel());
    });
    \u0275\u0275elementStart(42, "option", 30);
    \u0275\u0275text(43, "All Levels");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, HierarchyUserManagementComponent_option_44_Template, 2, 3, "option", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 32);
    \u0275\u0275listener("click", function HierarchyUserManagementComponent_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCreateModal());
    });
    \u0275\u0275element(46, "i", 33);
    \u0275\u0275text(47, " Add User ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "c-card-body", 34);
    \u0275\u0275template(49, HierarchyUserManagementComponent_div_49_Template, 6, 0, "div", 35)(50, HierarchyUserManagementComponent_div_50_Template, 7, 0, "div", 35)(51, HierarchyUserManagementComponent_div_51_Template, 26, 1, "div", 36);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(52, "c-modal", 37, 0);
    \u0275\u0275listener("visibleChange", function HierarchyUserManagementComponent_Template_c_modal_visibleChange_52_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onModalClose($event));
    });
    \u0275\u0275elementStart(54, "c-modal-header", 38)(55, "h5", 39);
    \u0275\u0275element(56, "i", 40);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 41);
    \u0275\u0275listener("click", function HierarchyUserManagementComponent_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "c-modal-body", 7)(60, "form", 42)(61, "c-row")(62, "c-col", 43)(63, "label", 44);
    \u0275\u0275element(64, "i", 21);
    \u0275\u0275text(65, " Email ");
    \u0275\u0275elementStart(66, "span", 45);
    \u0275\u0275text(67, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(68, "input", 46);
    \u0275\u0275template(69, HierarchyUserManagementComponent_div_69_Template, 3, 2, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "c-col", 43)(71, "label", 44);
    \u0275\u0275element(72, "i", 48);
    \u0275\u0275text(73, " Full Name ");
    \u0275\u0275elementStart(74, "span", 45);
    \u0275\u0275text(75, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(76, "input", 49);
    \u0275\u0275template(77, HierarchyUserManagementComponent_div_77_Template, 2, 1, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275template(78, HierarchyUserManagementComponent_c_col_78_Template, 8, 3, "c-col", 50)(79, HierarchyUserManagementComponent_c_col_79_Template, 7, 0, "c-col", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275template(80, HierarchyUserManagementComponent_c_alert_80_Template, 3, 2, "c-alert", 51)(81, HierarchyUserManagementComponent_c_alert_81_Template, 3, 2, "c-alert", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "c-modal-footer")(83, "button", 53);
    \u0275\u0275listener("click", function HierarchyUserManagementComponent_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeModal());
    });
    \u0275\u0275text(84, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "button", 54);
    \u0275\u0275listener("click", function HierarchyUserManagementComponent_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submitUser());
    });
    \u0275\u0275template(86, HierarchyUserManagementComponent_span_86_Template, 3, 3, "span", 55)(87, HierarchyUserManagementComponent_span_87_Template, 3, 1, "span", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(88, "c-modal", 56, 1);
    \u0275\u0275listener("visibleChange", function HierarchyUserManagementComponent_Template_c_modal_visibleChange_88_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showDeleteModal = $event);
    });
    \u0275\u0275elementStart(90, "c-modal-header", 57)(91, "h5", 39);
    \u0275\u0275element(92, "i", 58);
    \u0275\u0275text(93, " Confirm Delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 41);
    \u0275\u0275listener("click", function HierarchyUserManagementComponent_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showDeleteModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "c-modal-body")(96, "p", 59);
    \u0275\u0275text(97, "Delete ");
    \u0275\u0275elementStart(98, "strong");
    \u0275\u0275text(99);
    \u0275\u0275elementEnd();
    \u0275\u0275text(100, "?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 60);
    \u0275\u0275element(102, "i", 61);
    \u0275\u0275elementStart(103, "small");
    \u0275\u0275text(104, "Soft delete - user will be marked inactive.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "c-modal-footer")(106, "button", 62);
    \u0275\u0275listener("click", function HierarchyUserManagementComponent_Template_button_click_106_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showDeleteModal = false);
    });
    \u0275\u0275text(107, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "button", 63);
    \u0275\u0275listener("click", function HierarchyUserManagementComponent_Template_button_click_108_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteUser());
    });
    \u0275\u0275template(109, HierarchyUserManagementComponent_span_109_Template, 3, 0, "span", 55)(110, HierarchyUserManagementComponent_span_110_Template, 3, 0, "span", 55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx.getInitials(ctx.fullName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.fullName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.role, " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.companyName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.email);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedLevelFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.hierarchyLevels);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredUsers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredUsers.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("visible", ctx.showModal);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx.isEditMode ? "cil-pencil" : "cil-user-follow");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Edit" : "Create", " Hierarchy User ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.userForm);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ((tmp_16_0 = ctx.userForm.get("email")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx.userForm.get("email")) == null ? null : tmp_16_0.touched));
    \u0275\u0275property("disabled", ctx.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_18_0 = ctx.userForm.get("email")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx.userForm.get("email")) == null ? null : tmp_18_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_19_0 = ctx.userForm.get("fullName")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx.userForm.get("fullName")) == null ? null : tmp_19_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_20_0 = ctx.userForm.get("fullName")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx.userForm.get("fullName")) == null ? null : tmp_20_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.successMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isSubmitting);
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx.isEditMode ? "warning" : "primary")("disabled", ctx.isSubmitting || ctx.userForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("visible", ctx.showDeleteModal);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.selectedUser == null ? null : ctx.selectedUser.fullName);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx.isDeleting);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isDeleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isDeleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isDeleting);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  NgModel,
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  ButtonDirective,
  ModalComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalBodyComponent,
  ModalFooterComponent,
  FormControlDirective,
  BadgeComponent,
  AlertComponent,
  ButtonCloseDirective
], styles: ['\n\n.gradient-header[_ngcontent-%COMP%], \n.gradient-header-levels[_ngcontent-%COMP%], \n.gradient-header-users[_ngcontent-%COMP%], \n.gradient-header-reporting[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  position: relative;\n  overflow: hidden;\n  padding: 10px;\n}\n.gradient-header[_ngcontent-%COMP%]::before, \n.gradient-header-levels[_ngcontent-%COMP%]::before, \n.gradient-header-users[_ngcontent-%COMP%]::before, \n.gradient-header-reporting[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n}\n.avatar-circle-large[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 1.6rem;\n  flex-shrink: 0;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.info-card-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  flex-shrink: 0;\n  margin-right: 1rem;\n  font-size: 1.5rem;\n}\n.info-card-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  color: white;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.25rem;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n}\n.stat-card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border-radius: 16px !important;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: bold;\n  color: #2c3e50;\n  margin: 0;\n}\n.stat-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.stat-footer[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n  border-top: 1px solid #e9ecef;\n  font-size: 0.85rem;\n}\n.action-button[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #e9ecef;\n  border-radius: 16px;\n  transition: all 0.3s ease;\n  text-align: center;\n  cursor: pointer;\n}\n.action-button[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9ff 0%,\n      #e7f3ff 100%);\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.2);\n}\n.action-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  color: white;\n}\n.hierarchy-level-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 12px;\n  background: white;\n  border: 2px solid #e9ecef;\n  margin-bottom: 1rem;\n  transition: all 0.2s ease;\n}\n.hierarchy-level-item[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f8f9ff;\n  transform: translateX(5px);\n}\n.level-badge[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.level-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n}\n.level-users[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.85rem;\n}\n.level-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.modern-alert[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.btn-create-primary[_ngcontent-%COMP%] {\n  background: white;\n  color: #667eea;\n  border: 2px solid white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-create-primary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.9);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn-modern[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 0.625rem 1.25rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.action-btn[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.modern-table[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.modern-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #495057;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  letter-spacing: 0.5px;\n  padding: 1rem 0.75rem;\n  border-bottom: 2px solid #dee2e6;\n  white-space: nowrap;\n}\n.modern-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 0.75rem;\n  vertical-align: middle;\n}\n.modern-table-row[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n.modern-table-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 126, 234, 0.05);\n  transform: scale(1.01);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.level-order-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  font-size: 0.9rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.level-name-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #2c3e50;\n}\n.description-text[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.date-text[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.status-badge[_ngcontent-%COMP%], \n.user-count-badge[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 500;\n  font-size: 0.85rem;\n}\n.drag-handle[_ngcontent-%COMP%] {\n  cursor: move;\n  opacity: 0.5;\n  transition: opacity 0.2s ease;\n}\n.drag-handle[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.mini-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 0.95rem;\n  margin-bottom: 0.25rem;\n}\n.user-email[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n.managers-list[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.manager-item[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 8px;\n  border-left: 3px solid #667eea;\n  transition: all 0.2s ease;\n}\n.manager-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(3px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.manager-chips-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.manager-chip-select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  border: 2px solid #dee2e6;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background: white;\n  min-width: 220px;\n}\n.manager-chip-select[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f8f9ff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);\n}\n.manager-chip-select.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background:\n    linear-gradient(\n      135deg,\n      #e7f3ff 0%,\n      #f0f8ff 100%);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.manager-chip-select[_ngcontent-%COMP%]   .manager-info[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.manager-chip-select[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n}\n.manager-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: white;\n}\n.manager-chip[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f8f9fa;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.manager-chip.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #e7f3ff;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.manager-chip[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex-grow: 1;\n}\n.org-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-width: 220px;\n  max-width: 280px;\n  transition: all 0.3s ease;\n}\n.org-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n.org-card-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f8f9fa;\n  border-bottom: 3px solid #dee2e6;\n  color: white;\n  font-weight: 600;\n}\n.org-card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.org-card.top-level[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 320px;\n  border: 3px solid #dc3545;\n}\n.org-card.top-level[_ngcontent-%COMP%]   .org-card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545 0%,\n      #c82333 100%);\n}\n.tree-children[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 2rem;\n}\n.connection-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 3px;\n  height: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #dee2e6 0%,\n      #adb5bd 100%);\n}\n.report-branch[_ngcontent-%COMP%] {\n  position: relative;\n}\n.report-branch[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 3px;\n  height: 2rem;\n  background: #dee2e6;\n}\n.org-card-mini[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #dee2e6;\n  border-radius: 8px;\n  padding: 0.75rem;\n  margin-top: 0.75rem;\n  text-align: center;\n  transition: all 0.2s ease;\n}\n.org-card-mini[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f8f9ff;\n  transform: scale(1.05);\n}\n.mini-connection[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 1rem;\n  background: #dee2e6;\n  margin: 0 auto;\n}\n.modal-header-gradient[_ngcontent-%COMP%], \n.modal-header-users[_ngcontent-%COMP%], \n.modal-header-reporting[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-bottom: none;\n}\n.modal-header-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545 0%,\n      #c82333 100%);\n  border-bottom: none;\n}\n.form-label-modern[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-control-modern[_ngcontent-%COMP%], \n.form-select-modern[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 2px solid #dee2e6;\n  padding: 0.75rem;\n  transition: all 0.2s ease;\n}\n.form-control-modern[_ngcontent-%COMP%]:focus, \n.form-select-modern[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.reporting-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: all 0.3s ease;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.reporting-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n}\n.reporting-card-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-bottom: 2px solid #dee2e6;\n}\n.reporting-card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  flex-grow: 1;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  background: white;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n}\n.info-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #667eea;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.9rem;\n  margin-bottom: 0.75rem;\n  display: flex;\n  align-items: center;\n}\n.current-managers-section[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: white;\n  border-radius: 10px;\n  border: 2px solid #e9ecef;\n}\n.managers-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.manager-badge-current[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 500;\n  font-size: 0.85rem;\n}\n.manager-selection-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.75rem;\n}\n@media (min-width: 576px) {\n  .manager-selection-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.level-badge-reporting[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.update-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 10px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.update-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.email-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.designation-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f0f2ff 0%,\n      #e7f3ff 100%);\n  color: #667eea;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 500;\n  font-size: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n}\n.level-badge-modern[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 500;\n  font-size: 0.85rem;\n}\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;\n}\n.shadow-lg[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12) !important;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  border-width: 0.3em;\n}\n@media (max-width: 768px) {\n  .modern-table[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .modern-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n    font-size: 0.7rem;\n  }\n  .modern-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n  }\n  .level-order-badge[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 0.8rem;\n  }\n  .avatar-circle[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    font-size: 1rem;\n  }\n  .avatar-circle-large[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    font-size: 1.4rem;\n  }\n  .manager-chips-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .manager-chip-select[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: unset;\n  }\n  .org-card[_ngcontent-%COMP%] {\n    min-width: 180px;\n    max-width: 220px;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stat-number[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modern-table-row[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.3s ease-out forwards;\n}\n.modern-table-row[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.modern-table-row[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.modern-table-row[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.15s;\n}\n.modern-table-row[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.2s;\n}\n.modern-table-row[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.25s;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2 0%,\n      #667eea 100%);\n}\n.action-icon-btn[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  padding: 0;\n  border-radius: 6px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.action-icon-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f1f3f5;\n}\n/*# sourceMappingURL=hierarchy-user-management.component.css.map */'] });
var HierarchyUserManagementComponent = _HierarchyUserManagementComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HierarchyUserManagementComponent, [{
    type: Component,
    args: [{ selector: "app-hierarchy-user-management", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      ContainerComponent,
      RowComponent,
      ColComponent,
      CardComponent,
      CardHeaderComponent,
      CardBodyComponent,
      ButtonDirective,
      ModalComponent,
      ModalHeaderComponent,
      ModalTitleDirective,
      ModalBodyComponent,
      ModalFooterComponent,
      FormControlDirective,
      BadgeComponent,
      AlertComponent,
      TooltipDirective,
      IconDirective,
      ButtonCloseDirective
    ], template: `<c-container class="mt-4" fluid>\r
  <!-- Header Section with User Details -->\r
  <c-row class="mb-4">\r
    <c-col xs="12">\r
      <c-card class="border-0 shadow-lg">\r
        <div class="gradient-header-users">\r
          <c-card-body class="p-4">\r
            <c-row class="align-items-center">\r
              <!-- User Info -->\r
              <c-col xs="12" lg="4" class="mb-3 mb-lg-0">\r
                <div class="d-flex align-items-center">\r
                  <div class="avatar-circle-large me-3">\r
                    {{ getInitials(fullName) }}\r
                  </div>\r
                  <div class="text-white">\r
                    <h5 class="mb-1 fw-bold">{{ fullName }}</h5>\r
                    <p class="mb-0 opacity-90">\r
                      <i class="cil-shield-alt me-1"></i>\r
                      {{ role }}\r
                    </p>\r
                  </div>\r
                </div>\r
              </c-col>\r
\r
              <!-- Page Title & Details -->\r
              <c-col xs="12" lg="5" class="mb-3 mb-lg-0">\r
                <h3 class="text-white mb-2 fw-bold">\r
                  <i class="cil-people me-2"></i>\r
                  Hierarchy User Management\r
                </h3>\r
                <p class="text-white mb-0 opacity-90">\r
                  <i class="cil-building me-2"></i>\r
                  Company: <strong>{{ companyName }}</strong> | \r
                  <i class="cil-envelope-closed me-2"></i>\r
                  <strong>{{ email }}</strong>\r
                </p>\r
              </c-col>\r
\r
              <!-- Action Button -->\r
              <!-- <c-col xs="12" lg="3" class="text-lg-end">\r
                <button cButton class="btn-create-primary" (click)="openCreateModal()">\r
                  <i class="cil-user-follow me-2"></i>\r
                  Add User\r
                </button>\r
              </c-col> -->\r
            </c-row>\r
          </c-card-body>\r
        </div>\r
      </c-card>\r
    </c-col>\r
  </c-row>\r
   \r
\r
  <!-- Users Table -->\r
  <c-row>\r
    <c-col xs="12">\r
      <c-card class="border-0 shadow">\r
        <c-card-header class="bg-white border-bottom">\r
          <div class="d-flex align-items-center justify-content-between flex-wrap">\r
            <h5 class="mb-0 fw-bold">\r
              <i class="cil-list me-2 text-primary"></i>\r
             Hierarchy Users \r
            </h5>\r
            \r
            <!-- Filter Controls -->\r
            <div class="d-flex align-items-center gap-2 mt-2 mt-md-0">\r
              <label class="mb-0 me-2">Filter:</label>\r
              <select cFormControl [(ngModel)]="selectedLevelFilter" (change)="filterByLevel()" class="form-select-modern" style="width: 220px;">\r
                <option value="">All Levels</option>\r
                <option *ngFor="let level of hierarchyLevels" [value]="level.id">\r
                  L{{ level.levelOrder }}: {{ level.levelName }}\r
                </option>\r
              </select>\r
             <button cButton class="btn-create-primary" (click)="openCreateModal()">\r
                  <i class="cil-user-follow me-2"></i>\r
                  Add User\r
                </button>\r
            </div>\r
          </div>\r
        </c-card-header>\r
        <c-card-body class="p-0">\r
          <!-- Loading -->\r
          <div *ngIf="isLoading" class="text-center py-5">\r
            <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">\r
              <span class="visually-hidden">Loading...</span>\r
            </div>\r
            <p class="mt-3 text-muted">Loading users...</p>\r
          </div>\r
\r
          <!-- No Data -->\r
          <div *ngIf="!isLoading && filteredUsers.length === 0" class="text-center py-5">\r
            <i class="cil-user" style="font-size: 4rem; color: #6c757d;"></i>\r
            <p class="text-muted mb-3 fs-5 mt-3">No users found.</p>\r
            <button cButton color="primary" (click)="openCreateModal()">\r
              <i class="cil-user-follow me-2"></i>\r
              Add First User\r
            </button>\r
          </div>\r
\r
          <!-- Users Table -->\r
          <div *ngIf="!isLoading && filteredUsers.length > 0" class="table-responsive">\r
            <table class="table table-hover modern-table mb-0">\r
              <thead class="table-light">\r
                <tr>\r
                  <th><i class="cil-user me-2"></i>Name & Contact</th>\r
                  <th><i class="cil-envelope-closed me-2"></i>Email</th>\r
                  <th><i class="cil-briefcase me-2"></i>Designation</th>\r
                  <th><i class="cil-layers me-2"></i>Level</th>\r
                  <th><i class="cil-arrow-thick-from-bottom me-2"></i>Reports To</th>\r
                  <th><i class="cil-check-circle me-2"></i>Status</th>\r
                  <th class="" >Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let user of filteredUsers" class="modern-table-row">\r
                  <!-- Name & Contact -->\r
                  <td>\r
                    <div class="d-flex align-items-center">\r
                      <div class="avatar-circle me-3">\r
                        {{ user.fullName.charAt(0).toUpperCase() }}\r
                      </div>\r
                      <div>\r
                        <strong class="user-name">{{ user.fullName }}</strong>\r
                        <div class="user-email">\r
                          <!-- <i class="cil-phone me-1"></i> -->\r
                          {{ user.phone || 'No phone' }}\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </td>\r
                  \r
                  <!-- Email -->\r
                  <td>\r
                    <div class="email-cell">\r
                      <!-- <i class="cil-envelope-closed me-2 text-muted"></i> -->\r
                      <strong>{{ user.email }}</strong>\r
                    </div>\r
                  </td>\r
                  \r
                  <!-- Designation -->\r
                  <td>\r
                    <div class="designation-badge">\r
                      <i class="cil-briefcase me-2"></i>\r
                      {{ user.designation }}\r
                    </div>\r
                  </td>\r
                  \r
                  <!-- Hierarchy Level -->\r
                  <td>\r
                    <c-badge [color]="getLevelBadgeColor(user.hierarchyLevelOrder)" class="level-badge-modern">\r
                      L{{ user.hierarchyLevelOrder }}: {{ user.hierarchyLevelName }}\r
                    </c-badge>\r
                  </td>\r
                  \r
                  <!-- Reports To - Multiple Managers -->\r
                  <td>\r
                    <div *ngIf="user.reportsTo && user.reportsTo.length > 0" class="managers-list">\r
                      <div *ngFor="let manager of user.reportsTo" class="manager-item mb-2">\r
                        <div class="d-flex align-items-center">\r
                          <div class="mini-avatar me-2">\r
                            {{ manager.fullName.charAt(0).toUpperCase() }}\r
                          </div>\r
                          <div>\r
                            <strong class="d-block small">{{ manager.fullName }}</strong>\r
                            <small class="text-muted">\r
                              {{ manager.designation }}\r
                              <c-badge color="secondary" size="sm" class="ms-1">\r
                                L{{ manager.hierarchyLevelOrder }}\r
                              </c-badge>\r
                            </small>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div *ngIf="!user.reportsTo || user.reportsTo.length === 0">\r
                      <c-badge color="light" class="text-muted px-3 py-2">\r
                        <i class="cil-ban me-1"></i>\r
                        No manager\r
                      </c-badge>\r
                    </div>\r
                  </td>\r
                  \r
                  <!-- Status -->\r
                  <td>\r
                    <c-badge [color]="user.isActive ? 'primary' : 'secondary'" class="status-badge">\r
                      <i [class]="user.isActive ? 'cil-check-circle' : 'cil-x-circle'" class="me-1"></i>\r
                      {{ user.isActive ? 'Active' : 'Inactive' }}\r
                    </c-badge>\r
                  </td>\r
                  \r
                  <!-- Actions -->\r
               <td class="text-end pe-4">\r
  <button\r
    class="btn btn-sm btn-light text-primary me-2 shadow-sm action-icon-btn"\r
    (click)="openEditModal(user)"\r
    title="Edit User">\r
    <i class="cil-pencil"></i>\r
  </button>\r
\r
  <button\r
    *ngIf="user.isActive"\r
    class="btn btn-sm btn-light text-warning me-2 shadow-sm action-icon-btn"\r
    (click)="toggleUserStatus(user)"\r
    title="Deactivate">\r
    <i class="cil-ban"></i>\r
  </button>\r
\r
  <button\r
    *ngIf="!user.isActive"\r
    class="btn btn-sm btn-light text-success me-2 shadow-sm action-icon-btn"\r
    (click)="toggleUserStatus(user)"\r
    title="Activate">\r
    <i class="cil-check"></i>\r
  </button>\r
\r
  <button\r
    class="btn btn-sm btn-light text-danger shadow-sm action-icon-btn"\r
    (click)="confirmDelete(user)"\r
    title="Delete">\r
    <i class="cil-trash"></i>\r
  </button>\r
</td>\r
\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
        </c-card-body>\r
      </c-card>\r
    </c-col>\r
  </c-row>\r
</c-container>\r
\r
<!-- CREATE/EDIT MODAL -->\r
<c-modal #userModal [visible]="showModal" (visibleChange)="onModalClose($event)" size="lg">\r
  <c-modal-header class="modal-header-users">\r
    <h5 cModalTitle class="text-white">\r
      <i [class]="isEditMode ? 'cil-pencil' : 'cil-user-follow'" class="me-2"></i>\r
      {{ isEditMode ? 'Edit' : 'Create' }} Hierarchy User\r
    </h5>\r
    <button (click)="closeModal()" cButtonClose class="text-white"></button>\r
  </c-modal-header>\r
  <c-modal-body class="p-4">\r
    <form [formGroup]="userForm">\r
      <c-row>\r
        <c-col xs="12" md="6" class="mb-3">\r
          <label cLabel class="form-label-modern">\r
            <i class="cil-envelope-closed me-2"></i>\r
            Email <span class="text-danger">*</span>\r
          </label>\r
          <input \r
            cFormControl \r
            formControlName="email" \r
            type="email"\r
            placeholder="user@example.com"\r
            [disabled]="isEditMode"\r
            class="form-control-modern"\r
            [class.is-invalid]="userForm.get('email')?.invalid && userForm.get('email')?.touched" />\r
          <div *ngIf="userForm.get('email')?.invalid && userForm.get('email')?.touched" class="invalid-feedback">\r
            <span *ngIf="userForm.get('email')?.errors?.['required']">Email is required</span>\r
            <span *ngIf="userForm.get('email')?.errors?.['email']">Invalid email format</span>\r
          </div>\r
        </c-col>\r
\r
        <c-col xs="12" md="6" class="mb-3">\r
          <label cLabel class="form-label-modern">\r
            <i class="cil-user me-2"></i>\r
            Full Name <span class="text-danger">*</span>\r
          </label>\r
          <input \r
            cFormControl \r
            formControlName="fullName" \r
            placeholder="John Doe"\r
            class="form-control-modern"\r
            [class.is-invalid]="userForm.get('fullName')?.invalid && userForm.get('fullName')?.touched" />\r
          <div *ngIf="userForm.get('fullName')?.invalid && userForm.get('fullName')?.touched" class="invalid-feedback">\r
            <span *ngIf="userForm.get('fullName')?.errors?.['required']">Full name is required</span>\r
          </div>\r
        </c-col>\r
\r
        <c-col xs="12" *ngIf="!isEditMode" class="mb-3">\r
          <label cLabel class="form-label-modern">\r
            <i class="cil-lock-locked me-2"></i>\r
            Password <span class="text-danger">*</span>\r
          </label>\r
          <input \r
            cFormControl \r
            formControlName="password" \r
            type="password"\r
            placeholder="Minimum 6 characters"\r
            class="form-control-modern"\r
            [class.is-invalid]="userForm.get('password')?.invalid && userForm.get('password')?.touched" />\r
          <div *ngIf="userForm.get('password')?.invalid && userForm.get('password')?.touched" class="invalid-feedback">\r
            <span *ngIf="userForm.get('password')?.errors?.['required']">Password is required</span>\r
            <span *ngIf="userForm.get('password')?.errors?.['minlength']">Minimum 6 characters</span>\r
          </div>\r
        </c-col>\r
\r
        <c-col xs="12" *ngIf="isEditMode" class="mb-3">\r
          <label cLabel class="form-label-modern">\r
            <i class="cil-lock-locked me-2"></i>\r
            New Password (Optional)\r
          </label>\r
          <input \r
            cFormControl \r
            formControlName="password" \r
            type="password"\r
            placeholder="Leave blank to keep current"\r
            class="form-control-modern" />\r
          <small class="form-text text-muted">Only fill to change password</small>\r
        </c-col>\r
      </c-row>\r
\r
      <c-alert *ngIf="errorMessage" color="danger" [dismissible]="true" (visibleChange)="errorMessage = null" class="modern-alert">\r
        <i class="cil-x-circle me-2"></i>\r
        {{ errorMessage }}\r
      </c-alert>\r
\r
      <c-alert *ngIf="successMessage" color="success" [dismissible]="true" (visibleChange)="successMessage = null" class="modern-alert">\r
        <i class="cil-check-circle me-2"></i>\r
        {{ successMessage }}\r
      </c-alert>\r
    </form>\r
  </c-modal-body>\r
  <c-modal-footer>\r
    <button cButton color="secondary" (click)="closeModal()" [disabled]="isSubmitting" class="btn-modern">\r
      Cancel\r
    </button>\r
    <button cButton [color]="isEditMode ? 'warning' : 'primary'" (click)="submitUser()" [disabled]="isSubmitting || userForm.invalid" class="btn-modern">\r
      <span *ngIf="!isSubmitting">\r
        <i [class]="isEditMode ? 'cil-save' : 'cil-user-follow'" class="me-2"></i>\r
        {{ isEditMode ? 'Update' : 'Create' }}\r
      </span>\r
      <span *ngIf="isSubmitting">\r
        <span class="spinner-border spinner-border-sm me-2"></span>\r
        {{ isEditMode ? 'Updating...' : 'Creating...' }}\r
      </span>\r
    </button>\r
  </c-modal-footer>\r
</c-modal>\r
\r
<!-- DELETE MODAL -->\r
<c-modal #deleteModal [visible]="showDeleteModal" (visibleChange)="showDeleteModal = $event" size="sm">\r
  <c-modal-header class="modal-header-danger">\r
    <h5 cModalTitle class="text-white">\r
      <i class="cil-warning me-2"></i>\r
      Confirm Delete\r
    </h5>\r
    <button (click)="showDeleteModal = false" cButtonClose class="text-white"></button>\r
  </c-modal-header>\r
  <c-modal-body>\r
    <p class="mb-3">Delete <strong>{{ selectedUser?.fullName }}</strong>?</p>\r
    <div class="alert alert-warning">\r
      <i class="cil-info me-2"></i>\r
      <small>Soft delete - user will be marked inactive.</small>\r
    </div>\r
  </c-modal-body>\r
  <c-modal-footer>\r
    <button cButton color="secondary" (click)="showDeleteModal = false" [disabled]="isDeleting">\r
      Cancel\r
    </button>\r
    <button cButton color="danger" (click)="deleteUser()" [disabled]="isDeleting">\r
      <span *ngIf="!isDeleting">\r
        <i class="cil-trash me-2"></i>\r
        Delete\r
      </span>\r
      <span *ngIf="isDeleting">\r
        <span class="spinner-border spinner-border-sm me-2"></span>\r
        Deleting...\r
      </span>\r
    </button>\r
  </c-modal-footer>\r
</c-modal>`, styles: ['/* src/app/views/base/hierarchy-users/hierarchy-user-management.component.css */\n.gradient-header,\n.gradient-header-levels,\n.gradient-header-users,\n.gradient-header-reporting {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  position: relative;\n  overflow: hidden;\n  padding: 10px;\n}\n.gradient-header::before,\n.gradient-header-levels::before,\n.gradient-header-users::before,\n.gradient-header-reporting::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n}\n.avatar-circle-large {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 1.6rem;\n  flex-shrink: 0;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-card {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.info-card-icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  flex-shrink: 0;\n  margin-right: 1rem;\n  font-size: 1.5rem;\n}\n.info-card-content {\n  flex-grow: 1;\n  color: white;\n}\n.info-label {\n  font-size: 0.75rem;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.25rem;\n}\n.info-value {\n  font-size: 1rem;\n  font-weight: 600;\n}\n.stat-card {\n  transition: all 0.3s ease;\n  border-radius: 16px !important;\n}\n.stat-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;\n}\n.stat-icon {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-number {\n  font-size: 2.5rem;\n  font-weight: bold;\n  color: #2c3e50;\n  margin: 0;\n}\n.stat-label {\n  color: #6c757d;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.stat-footer {\n  padding-top: 0.75rem;\n  border-top: 1px solid #e9ecef;\n  font-size: 0.85rem;\n}\n.action-button {\n  background: white;\n  border: 2px solid #e9ecef;\n  border-radius: 16px;\n  transition: all 0.3s ease;\n  text-align: center;\n  cursor: pointer;\n}\n.action-button:hover {\n  border-color: #667eea;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9ff 0%,\n      #e7f3ff 100%);\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.2);\n}\n.action-icon {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  color: white;\n}\n.hierarchy-level-item {\n  padding: 1rem;\n  border-radius: 12px;\n  background: white;\n  border: 2px solid #e9ecef;\n  margin-bottom: 1rem;\n  transition: all 0.2s ease;\n}\n.hierarchy-level-item:hover {\n  border-color: #667eea;\n  background: #f8f9ff;\n  transform: translateX(5px);\n}\n.level-badge {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.level-name {\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n}\n.level-users {\n  color: #6c757d;\n  font-size: 0.85rem;\n}\n.level-status {\n  display: flex;\n  align-items: center;\n}\n.modern-alert {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.btn-create-primary {\n  background: white;\n  color: #667eea;\n  border: 2px solid white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-create-primary:hover {\n  background: rgba(255, 255, 255, 0.9);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn-modern {\n  border-radius: 8px;\n  padding: 0.625rem 1.25rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.action-btn {\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.action-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.modern-table {\n  font-size: 0.95rem;\n}\n.modern-table thead th {\n  background: #f8f9fa;\n  color: #495057;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  letter-spacing: 0.5px;\n  padding: 1rem 0.75rem;\n  border-bottom: 2px solid #dee2e6;\n  white-space: nowrap;\n}\n.modern-table tbody td {\n  padding: 1rem 0.75rem;\n  vertical-align: middle;\n}\n.modern-table-row {\n  transition: all 0.2s ease;\n}\n.modern-table-row:hover {\n  background-color: rgba(102, 126, 234, 0.05);\n  transform: scale(1.01);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.level-order-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  font-size: 0.9rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.level-name-text {\n  font-size: 1rem;\n  color: #2c3e50;\n}\n.description-text {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.date-text {\n  color: #6c757d;\n}\n.status-badge,\n.user-count-badge {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 500;\n  font-size: 0.85rem;\n}\n.drag-handle {\n  cursor: move;\n  opacity: 0.5;\n  transition: opacity 0.2s ease;\n}\n.drag-handle:hover {\n  opacity: 1;\n}\n.avatar-circle {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.mini-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.user-name {\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 0.95rem;\n  margin-bottom: 0.25rem;\n}\n.user-email {\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n.managers-list {\n  min-width: 180px;\n}\n.manager-item {\n  padding: 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 8px;\n  border-left: 3px solid #667eea;\n  transition: all 0.2s ease;\n}\n.manager-item:hover {\n  transform: translateX(3px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.manager-chips-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.manager-chip-select {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  border: 2px solid #dee2e6;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background: white;\n  min-width: 220px;\n}\n.manager-chip-select:hover {\n  border-color: #667eea;\n  background: #f8f9ff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);\n}\n.manager-chip-select.selected {\n  border-color: #667eea;\n  background:\n    linear-gradient(\n      135deg,\n      #e7f3ff 0%,\n      #f0f8ff 100%);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.manager-chip-select .manager-info {\n  flex-grow: 1;\n}\n.manager-chip-select input[type=checkbox] {\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n}\n.manager-chip {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: white;\n}\n.manager-chip:hover {\n  border-color: #667eea;\n  background: #f8f9fa;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.manager-chip.selected {\n  border-color: #667eea;\n  background: #e7f3ff;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.manager-chip label {\n  cursor: pointer;\n  flex-grow: 1;\n}\n.org-card {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-width: 220px;\n  max-width: 280px;\n  transition: all 0.3s ease;\n}\n.org-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n.org-card-header {\n  padding: 1rem;\n  background: #f8f9fa;\n  border-bottom: 3px solid #dee2e6;\n  color: white;\n  font-weight: 600;\n}\n.org-card-body {\n  padding: 1rem;\n}\n.org-card.top-level {\n  margin: 0 auto;\n  max-width: 320px;\n  border: 3px solid #dc3545;\n}\n.org-card.top-level .org-card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545 0%,\n      #c82333 100%);\n}\n.tree-children {\n  position: relative;\n  margin-top: 2rem;\n}\n.connection-line {\n  position: absolute;\n  top: -2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 3px;\n  height: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #dee2e6 0%,\n      #adb5bd 100%);\n}\n.report-branch {\n  position: relative;\n}\n.report-branch::before {\n  content: "";\n  position: absolute;\n  top: -2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 3px;\n  height: 2rem;\n  background: #dee2e6;\n}\n.org-card-mini {\n  background: white;\n  border: 2px solid #dee2e6;\n  border-radius: 8px;\n  padding: 0.75rem;\n  margin-top: 0.75rem;\n  text-align: center;\n  transition: all 0.2s ease;\n}\n.org-card-mini:hover {\n  border-color: #667eea;\n  background: #f8f9ff;\n  transform: scale(1.05);\n}\n.mini-connection {\n  width: 2px;\n  height: 1rem;\n  background: #dee2e6;\n  margin: 0 auto;\n}\n.modal-header-gradient,\n.modal-header-users,\n.modal-header-reporting {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-bottom: none;\n}\n.modal-header-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545 0%,\n      #c82333 100%);\n  border-bottom: none;\n}\n.form-label-modern {\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-control-modern,\n.form-select-modern {\n  border-radius: 8px;\n  border: 2px solid #dee2e6;\n  padding: 0.75rem;\n  transition: all 0.2s ease;\n}\n.form-control-modern:focus,\n.form-select-modern:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.reporting-card {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: all 0.3s ease;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.reporting-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n}\n.reporting-card-header {\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-bottom: 2px solid #dee2e6;\n}\n.reporting-card-body {\n  padding: 1.5rem;\n  flex-grow: 1;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.info-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  background: white;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n}\n.info-icon {\n  font-size: 1.5rem;\n  color: #667eea;\n}\n.section-label {\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.9rem;\n  margin-bottom: 0.75rem;\n  display: flex;\n  align-items: center;\n}\n.current-managers-section {\n  padding: 1rem;\n  background: white;\n  border-radius: 10px;\n  border: 2px solid #e9ecef;\n}\n.managers-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.manager-badge-current {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 500;\n  font-size: 0.85rem;\n}\n.manager-selection-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.75rem;\n}\n@media (min-width: 576px) {\n  .manager-selection-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.level-badge-reporting {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.update-btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 10px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.update-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.email-cell {\n  display: flex;\n  align-items: center;\n}\n.designation-badge {\n  background:\n    linear-gradient(\n      135deg,\n      #f0f2ff 0%,\n      #e7f3ff 100%);\n  color: #667eea;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 500;\n  font-size: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n}\n.level-badge-modern {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 500;\n  font-size: 0.85rem;\n}\n.shadow {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;\n}\n.shadow-lg {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12) !important;\n}\n.spinner-border {\n  border-width: 0.3em;\n}\n@media (max-width: 768px) {\n  .modern-table {\n    font-size: 0.85rem;\n  }\n  .modern-table thead th {\n    padding: 0.75rem 0.5rem;\n    font-size: 0.7rem;\n  }\n  .modern-table tbody td {\n    padding: 0.75rem 0.5rem;\n  }\n  .level-order-badge {\n    width: 40px;\n    height: 40px;\n    font-size: 0.8rem;\n  }\n  .avatar-circle {\n    width: 38px;\n    height: 38px;\n    font-size: 1rem;\n  }\n  .avatar-circle-large {\n    width: 60px;\n    height: 60px;\n    font-size: 1.4rem;\n  }\n  .manager-chips-container {\n    flex-direction: column;\n  }\n  .manager-chip-select {\n    width: 100%;\n    min-width: unset;\n  }\n  .org-card {\n    min-width: 180px;\n    max-width: 220px;\n  }\n  .info-grid {\n    grid-template-columns: 1fr;\n  }\n  .stat-number {\n    font-size: 2rem;\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modern-table-row {\n  animation: fadeInUp 0.3s ease-out forwards;\n}\n.modern-table-row:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.modern-table-row:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.modern-table-row:nth-child(3) {\n  animation-delay: 0.15s;\n}\n.modern-table-row:nth-child(4) {\n  animation-delay: 0.2s;\n}\n.modern-table-row:nth-child(5) {\n  animation-delay: 0.25s;\n}\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2 0%,\n      #667eea 100%);\n}\n.action-icon-btn {\n  width: 25px;\n  height: 25px;\n  padding: 0;\n  border-radius: 6px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.action-icon-btn:hover {\n  background-color: #f1f3f5;\n}\n/*# sourceMappingURL=hierarchy-user-management.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: DataService }], { userModal: [{
    type: ViewChild,
    args: ["userModal"]
  }], deleteModal: [{
    type: ViewChild,
    args: ["deleteModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HierarchyUserManagementComponent, { className: "HierarchyUserManagementComponent", filePath: "src/app/views/base/hierarchy-users/hierarchy-user-management.component.ts", lineNumber: 29 });
})();
export {
  HierarchyUserManagementComponent
};
//# sourceMappingURL=chunk-EJROQGKC.js.map
