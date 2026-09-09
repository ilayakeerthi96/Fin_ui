import {
  passwordPolicyValidator
} from "./chunk-4OT4RRV7.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  IconDirective,
  IconSetService,
  RowComponent,
  SpinnerComponent
} from "./chunk-U7YW3DHP.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  NgIf,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BCCUO726.js";
import "./chunk-SO7Q7VKX.js";

// src/app/views/base/change-password/change-password.component.ts
function ChangePasswordComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Old password is required");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, ChangePasswordComponent_div_28_div_1_Template, 2, 0, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentPassword == null ? null : ctx_r0.currentPassword.errors == null ? null : ctx_r0.currentPassword.errors["required"]);
  }
}
function ChangePasswordComponent_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "New password is required");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_div_38_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Must be at least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_div_38_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Must include an uppercase letter");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_div_38_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Must include a lowercase letter");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_div_38_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Must include a number");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_div_38_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Must include a special character");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, ChangePasswordComponent_div_38_div_1_Template, 2, 0, "div", 39)(2, ChangePasswordComponent_div_38_div_2_Template, 2, 0, "div", 39)(3, ChangePasswordComponent_div_38_div_3_Template, 2, 0, "div", 39)(4, ChangePasswordComponent_div_38_div_4_Template, 2, 0, "div", 39)(5, ChangePasswordComponent_div_38_div_5_Template, 2, 0, "div", 39)(6, ChangePasswordComponent_div_38_div_6_Template, 2, 0, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.newPassword == null ? null : ctx_r0.newPassword.errors == null ? null : ctx_r0.newPassword.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.newPassword == null ? null : ctx_r0.newPassword.errors == null ? null : ctx_r0.newPassword.errors["minLength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.newPassword == null ? null : ctx_r0.newPassword.errors == null ? null : ctx_r0.newPassword.errors["uppercase"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.newPassword == null ? null : ctx_r0.newPassword.errors == null ? null : ctx_r0.newPassword.errors["lowercase"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.newPassword == null ? null : ctx_r0.newPassword.errors == null ? null : ctx_r0.newPassword.errors["digit"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.newPassword == null ? null : ctx_r0.newPassword.errors == null ? null : ctx_r0.newPassword.errors["symbol"]);
  }
}
function ChangePasswordComponent_div_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Confirm password is required");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, ChangePasswordComponent_div_48_div_1_Template, 2, 0, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.confirmPassword == null ? null : ctx_r0.confirmPassword.errors == null ? null : ctx_r0.confirmPassword.errors["required"]);
  }
}
function ChangePasswordComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, " Passwords do not match ");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_c_spinner_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-spinner", 40);
  }
}
function ChangePasswordComponent__svg_svg_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 41);
  }
}
var _ChangePasswordComponent = class _ChangePasswordComponent {
  constructor(fb, dataService, messageService, router, iconSetService) {
    this.fb = fb;
    this.dataService = dataService;
    this.messageService = messageService;
    this.router = router;
    this.iconSetService = iconSetService;
    this.isLoading = false;
    this.showOldPassword = false;
    this.showNewPassword = false;
    this.showConfirmPassword = false;
    this.mustChangePassword = false;
  }
  ngOnInit() {
    this.initForm();
    this.loadUserDetails();
  }
  initForm() {
    this.changePasswordForm = this.fb.group({
      currentPassword: ["", [Validators.required]],
      // Same policy the backend enforces and the forgot-password flow uses — 8+ characters
      // with upper, lower, digit and symbol. It used to ask for 6 characters, which the
      // backend would reject.
      newPassword: ["", [Validators.required, passwordPolicyValidator()]],
      confirmPassword: ["", [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  loadUserDetails() {
    this.userId = parseInt(localStorage.getItem("userId") || "0");
    this.userRole = localStorage.getItem("role") || "";
    this.userName = localStorage.getItem("fullName") || "User";
    this.userEmail = localStorage.getItem("email") || "";
    this.mustChangePassword = localStorage.getItem("mustChangePassword") === "true";
    console.log("\u2705 User Details:", {
      userId: this.userId,
      userRole: this.userRole,
      userName: this.userName,
      userEmail: this.userEmail,
      mustChangePassword: this.mustChangePassword
    });
    if (!this.userEmail) {
      this.messageService.showMessage("error", "Error", "User session not found");
      this.router.navigate(["/login"]);
    }
  }
  passwordMatchValidator(group) {
    const newPassword = group.get("newPassword")?.value;
    const confirmPassword = group.get("confirmPassword")?.value;
    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }
  togglePasswordVisibility(field) {
    switch (field) {
      case "old":
        this.showOldPassword = !this.showOldPassword;
        break;
      case "new":
        this.showNewPassword = !this.showNewPassword;
        break;
      case "confirm":
        this.showConfirmPassword = !this.showConfirmPassword;
        break;
    }
  }
  onSubmit() {
    if (this.changePasswordForm.invalid) {
      Object.keys(this.changePasswordForm.controls).forEach((key) => {
        this.changePasswordForm.get(key)?.markAsTouched();
      });
      return;
    }
    this.isLoading = true;
    console.log("\u{1F535} Sending password change request for", this.userEmail);
    this.dataService.changePassword(this.userEmail, this.changePasswordForm.value.currentPassword, this.changePasswordForm.value.newPassword, this.changePasswordForm.value.confirmPassword).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log("\u2705 Password change response:", response);
        if (response.success) {
          this.messageService.showMessage("success", "Success", response.message || "Password changed successfully");
          this.changePasswordForm.reset();
          localStorage.setItem("mustChangePassword", "false");
          setTimeout(() => {
            const dashboardRoute = this.getDashboardRoute();
            this.router.navigate([dashboardRoute]);
          }, 1500);
        } else {
          this.messageService.showMessage("error", "Error", response.message || "Failed to change password");
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error("\u274C Error changing password:", error);
        let errorMessage = "Failed to change password. Please try again.";
        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.error?.error) {
          errorMessage = error.error.error;
        } else if (error.status === 400) {
          errorMessage = "Invalid password data. Please check your inputs.";
        } else if (error.status === 401) {
          errorMessage = "Current password is incorrect.";
        } else if (error.status === 404) {
          errorMessage = "User not found.";
        }
        this.messageService.showMessage("error", "Error", errorMessage);
      }
    });
  }
  getDashboardRoute() {
    switch (this.userRole) {
      case "SUPER_ADMIN":
        return "/superadmin-dashboard";
      case "ORGANIZATION_ADMIN":
        return "/orgadmin-dashboard";
      case "ROLE_BUYER":
        return "/rfq-dashboard";
      case "CEO":
        return "/ceo-dashboard";
      case "COO":
        return "/coo-dashboard";
      case "PROCUREMENT":
        return "/procurement-dashboard";
      case "FINANCE":
        return "/finance-dashboard";
      case "MANAGER":
        return "/manager-dashboard";
      default:
        return "/dashboard";
    }
  }
  cancel() {
    if (this.mustChangePassword) {
      this.messageService.showMessage("warning", "Action Required", "You must change your password before accessing the system.");
      return;
    }
    this.router.navigate([this.getDashboardRoute()]);
  }
  // Form validation helpers
  get currentPassword() {
    return this.changePasswordForm.get("currentPassword");
  }
  get newPassword() {
    return this.changePasswordForm.get("newPassword");
  }
  get confirmPassword() {
    return this.changePasswordForm.get("confirmPassword");
  }
};
_ChangePasswordComponent.\u0275fac = function ChangePasswordComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChangePasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(IconSetService));
};
_ChangePasswordComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordComponent, selectors: [["app-change-password"]], decls: 87, vars: 24, consts: [[1, "mt-5"], [1, "justify-content-center"], ["xs", "12", "md", "8", "lg", "6"], [1, "shadow-lg", "border-0"], [1, "bg-gradient-primary", "text-white"], [1, "d-flex", "align-items-center"], ["cIcon", "", "name", "cilLockLocked", "size", "xl", 1, "me-2"], [1, "mb-0"], [1, "p-4"], [1, "alert", "alert-info", "mb-4"], ["cIcon", "", "name", "cilUser", 1, "me-2"], [1, "d-block", "text-muted"], ["cForm", "", 3, "ngSubmit", "formGroup"], [1, "mb-3"], ["cLabel", "", "for", "currentPassword", 1, "form-label"], [1, "text-danger"], [1, "input-group"], ["cFormControl", "", "id", "currentPassword", "formControlName", "currentPassword", "placeholder", "Enter your current password", 3, "type"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["cIcon", "", 3, "name"], ["class", "text-danger small mt-1", 4, "ngIf"], ["cLabel", "", "for", "newPassword", 1, "form-label"], ["cFormControl", "", "id", "newPassword", "formControlName", "newPassword", "placeholder", "Enter new password (min 8 characters)", 3, "type"], [1, "mb-4"], ["cLabel", "", "for", "confirmPassword", 1, "form-label"], ["cFormControl", "", "id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "Re-enter new password", 3, "type"], [1, "alert", "alert-light", "mb-4"], [1, "alert-heading", "mb-2"], [1, "mb-0", "small"], [1, "d-grid", "gap-2", "d-md-flex", "justify-content-md-end"], ["cButton", "", "color", "secondary", "variant", "outline", "type", "button", 3, "click", "disabled"], ["cIcon", "", "name", "cilX", 1, "me-1"], ["cButton", "", "color", "primary", "type", "submit", 3, "disabled"], ["size", "sm", "class", "me-1", 4, "ngIf"], ["cIcon", "", "name", "cilCheckCircle", "class", "me-1", 4, "ngIf"], [1, "alert", "alert-warning", "mt-3"], [1, "alert-heading"], ["cIcon", "", "name", "cilWarning", 1, "me-1"], [1, "text-danger", "small", "mt-1"], [4, "ngIf"], ["size", "sm", 1, "me-1"], ["cIcon", "", "name", "cilCheckCircle", 1, "me-1"]], template: function ChangePasswordComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-container", 0)(1, "c-row", 1)(2, "c-col", 2)(3, "c-card", 3)(4, "c-card-header", 4)(5, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(6, "svg", 6);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h4", 7);
    \u0275\u0275text(8, "Change Password");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "c-card-body", 8)(10, "div", 9)(11, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(12, "svg", 10);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div")(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "small", 11);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "form", 12);
    \u0275\u0275listener("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_18_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(19, "div", 13)(20, "label", 14);
    \u0275\u0275text(21, " Old Password ");
    \u0275\u0275elementStart(22, "span", 15);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 16);
    \u0275\u0275element(25, "input", 17);
    \u0275\u0275elementStart(26, "button", 18);
    \u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_26_listener() {
      return ctx.togglePasswordVisibility("old");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(27, "svg", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, ChangePasswordComponent_div_28_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "div", 13)(30, "label", 21);
    \u0275\u0275text(31, " New Password ");
    \u0275\u0275elementStart(32, "span", 15);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 16);
    \u0275\u0275element(35, "input", 22);
    \u0275\u0275elementStart(36, "button", 18);
    \u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_36_listener() {
      return ctx.togglePasswordVisibility("new");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(37, "svg", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, ChangePasswordComponent_div_38_Template, 7, 6, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 23)(40, "label", 24);
    \u0275\u0275text(41, " Confirm Password ");
    \u0275\u0275elementStart(42, "span", 15);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 16);
    \u0275\u0275element(45, "input", 25);
    \u0275\u0275elementStart(46, "button", 18);
    \u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_46_listener() {
      return ctx.togglePasswordVisibility("confirm");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(47, "svg", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, ChangePasswordComponent_div_48_Template, 2, 1, "div", 20)(49, ChangePasswordComponent_div_49_Template, 2, 0, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "div", 26)(51, "h6", 27);
    \u0275\u0275text(52, "Password Requirements:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ul", 28)(54, "li");
    \u0275\u0275text(55, "At least 8 characters long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "li");
    \u0275\u0275text(57, "At least one uppercase and one lowercase letter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "li");
    \u0275\u0275text(59, "At least one number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "li");
    \u0275\u0275text(61, "At least one special character (e.g. ! @ # $ %)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "li");
    \u0275\u0275text(63, "Must be different from old password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "li");
    \u0275\u0275text(65, "New password and confirm password must match");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 29)(67, "button", 30);
    \u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_67_listener() {
      return ctx.cancel();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(68, "svg", 31);
    \u0275\u0275text(69, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(70, "button", 32);
    \u0275\u0275template(71, ChangePasswordComponent_c_spinner_71_Template, 1, 0, "c-spinner", 33)(72, ChangePasswordComponent__svg_svg_72_Template, 1, 0, "svg", 34);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(74, "div", 35)(75, "h6", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(76, "svg", 37);
    \u0275\u0275text(77, " Security Tips ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(78, "ul", 28)(79, "li");
    \u0275\u0275text(80, "Use a strong, unique password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "li");
    \u0275\u0275text(82, "Don't share your password with anyone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "li");
    \u0275\u0275text(84, "Change your password regularly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "li");
    \u0275\u0275text(86, "Avoid using common words or personal information");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.userRole);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.changePasswordForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", (ctx.currentPassword == null ? null : ctx.currentPassword.invalid) && (ctx.currentPassword == null ? null : ctx.currentPassword.touched));
    \u0275\u0275property("type", ctx.showOldPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx.showOldPassword ? "cilEyeSlash" : "cilEye");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.currentPassword == null ? null : ctx.currentPassword.invalid) && (ctx.currentPassword == null ? null : ctx.currentPassword.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", (ctx.newPassword == null ? null : ctx.newPassword.invalid) && (ctx.newPassword == null ? null : ctx.newPassword.touched));
    \u0275\u0275property("type", ctx.showNewPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx.showNewPassword ? "cilEyeSlash" : "cilEye");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.newPassword == null ? null : ctx.newPassword.invalid) && (ctx.newPassword == null ? null : ctx.newPassword.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", (ctx.confirmPassword == null ? null : ctx.confirmPassword.invalid) && (ctx.confirmPassword == null ? null : ctx.confirmPassword.touched) || (ctx.changePasswordForm.errors == null ? null : ctx.changePasswordForm.errors["passwordMismatch"]) && (ctx.confirmPassword == null ? null : ctx.confirmPassword.touched));
    \u0275\u0275property("type", ctx.showConfirmPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx.showConfirmPassword ? "cilEyeSlash" : "cilEye");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.confirmPassword == null ? null : ctx.confirmPassword.invalid) && (ctx.confirmPassword == null ? null : ctx.confirmPassword.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.changePasswordForm.errors == null ? null : ctx.changePasswordForm.errors["passwordMismatch"]) && (ctx.confirmPassword == null ? null : ctx.confirmPassword.touched));
    \u0275\u0275advance(18);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.changePasswordForm.invalid || ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Changing..." : "Change Password", " ");
  }
}, dependencies: [
  CommonModule,
  NgIf,
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
  ButtonDirective,
  IconDirective,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  SpinnerComponent
], styles: ["\n\n.bg-gradient-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-right: 0;\n}\n.alert-info[_ngcontent-%COMP%] {\n  border-left: 4px solid #0dcaf0;\n}\n.alert-warning[_ngcontent-%COMP%] {\n  border-left: 4px solid #ffc107;\n}\n.alert-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545 !important;\n}\n.text-danger[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\nc-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in-out;\n}\nc-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\nbutton[type=submit][_ngcontent-%COMP%]:not(:disabled):hover {\n  transform: scale(1.02);\n  transition: transform 0.2s ease-in-out;\n}\ninput[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\n}\n@media (max-width: 768px) {\n  .d-md-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=change-password.component.css.map */"] });
var ChangePasswordComponent = _ChangePasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangePasswordComponent, [{
    type: Component,
    args: [{ selector: "app-change-password", standalone: true, imports: [
      CommonModule,
      ContainerComponent,
      RowComponent,
      ColComponent,
      CardComponent,
      CardHeaderComponent,
      CardBodyComponent,
      FormDirective,
      FormLabelDirective,
      FormControlDirective,
      ButtonDirective,
      IconDirective,
      ReactiveFormsModule,
      SpinnerComponent
    ], template: `\r
<c-container class="mt-5">\r
  <c-row class="justify-content-center">\r
    <c-col xs="12" md="8" lg="6">\r
      <c-card class="shadow-lg border-0">\r
        <c-card-header class="bg-gradient-primary text-white">\r
          <div class="d-flex align-items-center">\r
            <svg cIcon name="cilLockLocked" class="me-2" size="xl"></svg>\r
            <h4 class="mb-0">Change Password</h4>\r
          </div>\r
        </c-card-header>\r
        \r
        <c-card-body class="p-4">\r
          <!-- User Info -->\r
          <div class="alert alert-info mb-4">\r
            <div class="d-flex align-items-center">\r
              <svg cIcon name="cilUser" class="me-2"></svg>\r
              <div>\r
                <strong>{{ userName }}</strong>\r
                <small class="d-block text-muted">{{ userRole }}</small>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Change Password Form -->\r
          <form cForm [formGroup]="changePasswordForm" (ngSubmit)="onSubmit()">\r
            \r
            <!-- Old Password -->\r
            <div class="mb-3">\r
              <label cLabel for="currentPassword" class="form-label">\r
                Old Password <span class="text-danger">*</span>\r
              </label>\r
              <div class="input-group">\r
                <input \r
                  cFormControl\r
                  id="currentPassword"\r
                  formControlName="currentPassword"\r
                  [type]="showOldPassword ? 'text' : 'password'"\r
                  placeholder="Enter your current password"\r
                  [class.is-invalid]="currentPassword?.invalid && currentPassword?.touched"\r
                />\r
                <button \r
                  class="btn btn-outline-secondary" \r
                  type="button"\r
                  (click)="togglePasswordVisibility('old')">\r
                  <svg cIcon [name]="showOldPassword ? 'cilEyeSlash' : 'cilEye'"></svg>\r
                </button>\r
              </div>\r
              <div *ngIf="currentPassword?.invalid && currentPassword?.touched" class="text-danger small mt-1">\r
                <div *ngIf="currentPassword?.errors?.['required']">Old password is required</div>\r
              </div>\r
            </div>\r
\r
            <!-- New Password -->\r
            <div class="mb-3">\r
              <label cLabel for="newPassword" class="form-label">\r
                New Password <span class="text-danger">*</span>\r
              </label>\r
              <div class="input-group">\r
                <input \r
                  cFormControl\r
                  id="newPassword"\r
                  formControlName="newPassword"\r
                  [type]="showNewPassword ? 'text' : 'password'"\r
                  placeholder="Enter new password (min 8 characters)"\r
                  [class.is-invalid]="newPassword?.invalid && newPassword?.touched"\r
                />\r
                <button \r
                  class="btn btn-outline-secondary" \r
                  type="button"\r
                  (click)="togglePasswordVisibility('new')">\r
                  <svg cIcon [name]="showNewPassword ? 'cilEyeSlash' : 'cilEye'"></svg>\r
                </button>\r
              </div>\r
              <div *ngIf="newPassword?.invalid && newPassword?.touched" class="text-danger small mt-1">\r
                <div *ngIf="newPassword?.errors?.['required']">New password is required</div>\r
                <div *ngIf="newPassword?.errors?.['minLength']">Must be at least 8 characters</div>\r
                <div *ngIf="newPassword?.errors?.['uppercase']">Must include an uppercase letter</div>\r
                <div *ngIf="newPassword?.errors?.['lowercase']">Must include a lowercase letter</div>\r
                <div *ngIf="newPassword?.errors?.['digit']">Must include a number</div>\r
                <div *ngIf="newPassword?.errors?.['symbol']">Must include a special character</div>\r
              </div>\r
            </div>\r
\r
            <!-- Confirm Password -->\r
            <div class="mb-4">\r
              <label cLabel for="confirmPassword" class="form-label">\r
                Confirm Password <span class="text-danger">*</span>\r
              </label>\r
              <div class="input-group">\r
                <input \r
                  cFormControl\r
                  id="confirmPassword"\r
                  formControlName="confirmPassword"\r
                  [type]="showConfirmPassword ? 'text' : 'password'"\r
                  placeholder="Re-enter new password"\r
                  [class.is-invalid]="(confirmPassword?.invalid && confirmPassword?.touched) || \r
                                      (changePasswordForm.errors?.['passwordMismatch'] && confirmPassword?.touched)"\r
                />\r
                <button \r
                  class="btn btn-outline-secondary" \r
                  type="button"\r
                  (click)="togglePasswordVisibility('confirm')">\r
                  <svg cIcon [name]="showConfirmPassword ? 'cilEyeSlash' : 'cilEye'"></svg>\r
                </button>\r
              </div>\r
              <div *ngIf="confirmPassword?.invalid && confirmPassword?.touched" class="text-danger small mt-1">\r
                <div *ngIf="confirmPassword?.errors?.['required']">Confirm password is required</div>\r
              </div>\r
              <div *ngIf="changePasswordForm.errors?.['passwordMismatch'] && confirmPassword?.touched" \r
                   class="text-danger small mt-1">\r
                Passwords do not match\r
              </div>\r
            </div>\r
\r
            <!-- Password Requirements -->\r
            <div class="alert alert-light mb-4">\r
              <h6 class="alert-heading mb-2">Password Requirements:</h6>\r
              <ul class="mb-0 small">\r
                <li>At least 8 characters long</li>\r
                <li>At least one uppercase and one lowercase letter</li>\r
                <li>At least one number</li>\r
                <li>At least one special character (e.g. ! &#64; # $ %)</li>\r
                <li>Must be different from old password</li>\r
                <li>New password and confirm password must match</li>\r
              </ul>\r
            </div>\r
\r
            <!-- Action Buttons -->\r
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">\r
              <button \r
                cButton \r
                color="secondary" \r
                variant="outline"\r
                type="button"\r
                (click)="cancel()"\r
                [disabled]="isLoading">\r
                <svg cIcon name="cilX" class="me-1"></svg>\r
                Cancel\r
              </button>\r
              <button \r
                cButton \r
                color="primary" \r
                type="submit"\r
                [disabled]="changePasswordForm.invalid || isLoading">\r
                <c-spinner *ngIf="isLoading" size="sm" class="me-1"></c-spinner>\r
                <svg *ngIf="!isLoading" cIcon name="cilCheckCircle" class="me-1"></svg>\r
                {{ isLoading ? 'Changing...' : 'Change Password' }}\r
              </button>\r
            </div>\r
          </form>\r
        </c-card-body>\r
      </c-card>\r
\r
      <!-- Security Tips -->\r
      <div class="alert alert-warning mt-3">\r
        <h6 class="alert-heading">\r
          <svg cIcon name="cilWarning" class="me-1"></svg>\r
          Security Tips\r
        </h6>\r
        <ul class="mb-0 small">\r
          <li>Use a strong, unique password</li>\r
          <li>Don't share your password with anyone</li>\r
          <li>Change your password regularly</li>\r
          <li>Avoid using common words or personal information</li>\r
        </ul>\r
      </div>\r
    </c-col>\r
  </c-row>\r
</c-container>`, styles: ["/* src/app/views/base/change-password/change-password.component.css */\n.bg-gradient-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.input-group button {\n  border-left: 0;\n}\n.input-group input:focus {\n  border-right: 0;\n}\n.alert-info {\n  border-left: 4px solid #0dcaf0;\n}\n.alert-warning {\n  border-left: 4px solid #ffc107;\n}\n.alert-light {\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n}\n.is-invalid {\n  border-color: #dc3545 !important;\n}\n.text-danger {\n  font-size: 0.875rem;\n}\nc-card {\n  transition: transform 0.2s ease-in-out;\n}\nc-card:hover {\n  transform: translateY(-2px);\n}\nbutton[type=submit]:not(:disabled):hover {\n  transform: scale(1.02);\n  transition: transform 0.2s ease-in-out;\n}\ninput:focus {\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\n}\n@media (max-width: 768px) {\n  .d-md-flex {\n    flex-direction: column;\n  }\n  button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=change-password.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: DataService }, { type: MessageService }, { type: Router }, { type: IconSetService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordComponent, { className: "ChangePasswordComponent", filePath: "src/app/views/base/change-password/change-password.component.ts", lineNumber: 31 });
})();
export {
  ChangePasswordComponent
};
//# sourceMappingURL=chunk-FRP3KG6A.js.map
