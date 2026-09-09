import {
  passwordMatchValidator,
  passwordPolicyValidator
} from "./chunk-4OT4RRV7.js";
import {
  TranslatePipe
} from "./chunk-5RNEFPGC.js";
import {
  AlertComponent,
  AlertModule,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  IconDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent,
  TextColorDirective
} from "./chunk-U7YW3DHP.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  BehaviorSubject,
  CommonModule,
  Component,
  DOCUMENT,
  Inject,
  Injectable,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  catchError,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BCCUO726.js";
import "./chunk-SO7Q7VKX.js";

// src/app/shared/service/theme.service.ts
var _ThemeService = class _ThemeService {
  get active() {
    return this._active$.value;
  }
  constructor(doc, dataService) {
    this.doc = doc;
    this.dataService = dataService;
    this.themes = [
      { name: "default", label: "Default", color: "#3c4b64" },
      { name: "orange", label: "Orange", color: "#f47820" },
      { name: "indigo", label: "Indigo", color: "#3f51b5" },
      { name: "teal", label: "Teal", color: "#009688" },
      { name: "purple", label: "Purple", color: "#7b1fa2" },
      { name: "pink", label: "Baby Pink", color: "#f48fb1" },
      { name: "yellow", label: "Pale Yellow", color: "#f9d976" },
      { name: "green", label: "Pale Green", color: "#a8d5b5" },
      { name: "grey", label: "Soft Grey", color: "#607d8b" }
    ];
    this.STORAGE_KEY = "app-theme";
    this.ADMIN_ROLES = ["SUPER_ADMIN", "ORGANIZATION_ADMIN"];
    this.VALID_THEMES = [
      "default",
      "orange",
      "indigo",
      "teal",
      "purple",
      "pink",
      "yellow",
      "green",
      "grey"
    ];
    this._active$ = new BehaviorSubject(this.getSaved());
    this.active$ = this._active$.asObservable();
    const saved = this.getSaved();
    if (saved && saved !== "default") {
      this.applyToDOM(saved);
    }
  }
  // ============================================================
  // Called after every login — localStorage must be fully set first
  // ============================================================
  loadThemeOnLogin() {
    const role = localStorage.getItem("role") || "";
    const userId = localStorage.getItem("userId");
    console.log("\u{1F3A8} [THEME] loadThemeOnLogin \u2014 role:", role);
    if (role === "SUPER_ADMIN" && userId) {
      this.dataService.getSuperAdminTheme(Number(userId)).pipe(catchError(() => of(null))).subscribe((res) => {
        this.applyLocally(this._extract(res));
      });
      return;
    }
    if (role === "ORGANIZATION_ADMIN" && userId) {
      this.dataService.getOrgAdminTheme(Number(userId)).pipe(catchError(() => of(null))).subscribe((res) => {
        this.applyLocally(this._extract(res));
      });
      return;
    }
    if (role === "ROLE_SUPPLIER") {
      const supplierTheme = localStorage.getItem("supplierTheme");
      if (supplierTheme && this.VALID_THEMES.includes(supplierTheme)) {
        console.log("\u2705 [THEME] Supplier theme from login response:", supplierTheme);
        this.applyLocally(supplierTheme);
      } else {
        console.log("\u2139\uFE0F [THEME] No supplier theme \u2014 applying default");
        this.applyLocally("default");
      }
      return;
    }
    if (role === "ROLE_BUYER") {
      const companyName2 = localStorage.getItem("companyName") || "";
      if (companyName2) {
        console.log("\u{1F3A8} [THEME] Buyer \u2014 fetching org admin theme by company:", companyName2);
        this._fetchByCompany(companyName2, role);
      } else {
        this.applyLocally("default");
      }
      return;
    }
    const companyName = localStorage.getItem("companyName") || "";
    if (companyName) {
      console.log("\u{1F3A8} [THEME] Hierarchy \u2014 fetching org admin theme by company:", companyName);
      this._fetchByCompany(companyName, role);
    } else {
      this.applyLocally("default");
    }
  }
  // ── Fetch org admin theme by company name ─────────────────────
  _fetchByCompany(companyName, role) {
    this.dataService.getOrganizationAdminsByCompany(companyName).pipe(catchError((e) => {
      console.warn("\u26A0\uFE0F [THEME] getOrgAdminsByCompany error:", e);
      return of(null);
    })).subscribe((res) => {
      let list = [];
      if (Array.isArray(res?.data))
        list = res.data;
      else if (Array.isArray(res))
        list = res;
      else if (res?.success && res?.data)
        list = Array.isArray(res.data) ? res.data : [res.data];
      console.log("\u{1F3A8} [THEME] OrgAdmins for", companyName, ":", list.length);
      if (!list.length) {
        this.applyLocally("default");
        return;
      }
      const admin = list.find((a) => a.isActive === true) ?? list[0];
      if (!admin?.id) {
        this.applyLocally("default");
        return;
      }
      this.dataService.getOrgAdminTheme(admin.id).pipe(catchError(() => of(null))).subscribe((tr) => {
        console.log("\u2705 [THEME] OrgAdmin theme for", role, ":", tr);
        this.applyLocally(this._extract(tr));
      });
    });
  }
  // ── Extract valid ThemeName from API response ─────────────────
  _extract(res) {
    const raw = res?.data ?? res?.theme ?? null;
    if (raw && this.VALID_THEMES.includes(raw)) {
      return raw;
    }
    return "default";
  }
  // ── Called by ThemeSwitcherComponent ─────────────────────────
  setTheme(name) {
    this.applyLocally(name);
    this.saveToBackend(name);
  }
  canChangeTheme() {
    return this.ADMIN_ROLES.includes(localStorage.getItem("role") || "");
  }
  // ── Private helpers ───────────────────────────────────────────
  applyLocally(name) {
    this.applyToDOM(name);
    this._active$.next(name);
    localStorage.setItem(this.STORAGE_KEY, name);
    console.log("\u2705 [THEME] Applied:", name);
  }
  applyToDOM(name) {
    if (!name || name === "default") {
      this.doc.body.removeAttribute("data-theme");
    } else {
      this.doc.body.setAttribute("data-theme", name);
    }
  }
  getSaved() {
    return localStorage.getItem(this.STORAGE_KEY) || "default";
  }
  saveToBackend(name) {
    const role = localStorage.getItem("role") || "";
    const userId = localStorage.getItem("userId");
    if (!userId)
      return;
    if (role === "SUPER_ADMIN") {
      this.dataService.saveSuperAdminTheme(Number(userId), name).pipe(catchError(() => of(null))).subscribe();
    } else if (role === "ORGANIZATION_ADMIN") {
      this.dataService.saveOrgAdminTheme(Number(userId), name).pipe(catchError(() => of(null))).subscribe();
    }
  }
};
_ThemeService.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemeService)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(DataService));
};
_ThemeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
var ThemeService = _ThemeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }, { type: DataService }], null);
})();

// src/app/views/pages/login/login.component.ts
function LoginComponent_div_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "LOGIN_EMAIL_REQUIRED"));
  }
}
function LoginComponent_div_21_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "LOGIN_EMAIL_INVALID"));
  }
}
function LoginComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, LoginComponent_div_21_span_1_Template, 3, 3, "span", 23)(2, LoginComponent_div_21_span_2_Template, 3, 3, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loginF["email"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loginF["email"].errors["email"]);
  }
}
function LoginComponent_div_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "LOGIN_PASSWORD_REQUIRED"));
  }
}
function LoginComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, LoginComponent_div_27_span_1_Template, 3, 3, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loginF["password"].errors["required"]);
  }
}
function LoginComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "LOGIN_SIGN_IN_BUTTON"));
  }
}
function LoginComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "LOGIN_SIGNING_IN"), " ");
  }
}
function LoginComponent_c_alert_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-alert", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function LoginComponent_c_alert_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-alert", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function LoginComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function LoginComponent_div_53_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForgotPassword());
    });
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_54_ng_container_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fpError);
  }
}
function LoginComponent_div_54_ng_container_3_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Send OTP \u2192");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_54_ng_container_3_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 55);
    \u0275\u0275text(2, "Sending...");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_54_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 45)(2, "div", 46);
    \u0275\u0275text(3, "\u{1F511}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 47);
    \u0275\u0275text(5, "Forgot Password?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 48);
    \u0275\u0275text(7, " Enter your email and we'll send a one-time password to your registered address. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 49)(9, "label", 50);
    \u0275\u0275text(10, "EMAIL ADDRESS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_54_ng_container_3_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.fpEmail, $event) || (ctx_r0.fpEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function LoginComponent_div_54_ng_container_3_Template_input_keyup_enter_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.requestOtp());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, LoginComponent_div_54_ng_container_3_div_12_Template, 2, 1, "div", 52);
    \u0275\u0275elementStart(13, "button", 53);
    \u0275\u0275listener("click", function LoginComponent_div_54_ng_container_3_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.requestOtp());
    });
    \u0275\u0275template(14, LoginComponent_div_54_ng_container_3_span_14_Template, 2, 0, "span", 23)(15, LoginComponent_div_54_ng_container_3_span_15_Template, 3, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fpEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fpError);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.fpLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.fpLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fpLoading);
  }
}
function LoginComponent_div_54_ng_container_4_input_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 60);
    \u0275\u0275listener("input", function LoginComponent_div_54_ng_container_4_input_15_Template_input_input_0_listener($event) {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onOtpInput($event, i_r7));
    })("keydown", function LoginComponent_div_54_ng_container_4_input_15_Template_input_keydown_0_listener($event) {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onOtpKeydown($event, i_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", "otp-" + i_r7)("value", ctx_r0.fpOtp[i_r7]);
  }
}
function LoginComponent_div_54_ng_container_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fpError);
  }
}
function LoginComponent_div_54_ng_container_4_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Verify OTP \u2192");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_54_ng_container_4_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 55);
    \u0275\u0275text(2, "Verifying...");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_54_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 45)(2, "div", 46);
    \u0275\u0275text(3, "\u{1F4E7}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 47);
    \u0275\u0275text(5, "Check Your Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 48);
    \u0275\u0275text(7, " We sent a 6-digit OTP to ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ". It expires in ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12, "10 minutes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 56);
    \u0275\u0275listener("paste", function LoginComponent_div_54_ng_container_4_Template_div_paste_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOtpPaste($event));
    });
    \u0275\u0275template(15, LoginComponent_div_54_ng_container_4_input_15_Template, 1, 2, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, LoginComponent_div_54_ng_container_4_div_16_Template, 2, 1, "div", 52);
    \u0275\u0275elementStart(17, "button", 53);
    \u0275\u0275listener("click", function LoginComponent_div_54_ng_container_4_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.verifyOtp());
    });
    \u0275\u0275template(18, LoginComponent_div_54_ng_container_4_span_18_Template, 2, 0, "span", 23)(19, LoginComponent_div_54_ng_container_4_span_19_Template, 3, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 58);
    \u0275\u0275text(21, " Didn't receive it? ");
    \u0275\u0275elementStart(22, "a", 59);
    \u0275\u0275listener("click", function LoginComponent_div_54_ng_container_4_Template_a_click_22_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.resendOtp());
    });
    \u0275\u0275text(23, "Resend OTP");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.fpMaskedEmail);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.fpOtp)("ngForTrackBy", ctx_r0.trackByIndex);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fpError);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.fpLoading || ctx_r0.otpString.length < 6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.fpLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fpLoading);
  }
}
function LoginComponent_div_54_ng_container_5_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73);
    \u0275\u0275element(2, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getStrengthPercent(), "%")("background", ctx_r0.getStrengthColor());
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getStrengthColor());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getStrengthLabel());
  }
}
function LoginComponent_div_54_ng_container_5_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77)(2, "span", 78);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Minimum 8 characters ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 77)(6, "span", 78);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "At least one uppercase letter (A\u2013Z) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 77)(10, "span", 78);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "At least one lowercase letter (a\u2013z) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 77)(14, "span", 78);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "At least one number (0\u20139) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 77)(18, "span", 78);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "At least one special character (!@#$%...) ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("met", !(ctx_r0.np == null ? null : ctx_r0.np.errors == null ? null : ctx_r0.np.errors["minLength"]));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(!(ctx_r0.np == null ? null : ctx_r0.np.errors == null ? null : ctx_r0.np.errors["minLength"]) ? "\u2713" : "\u25CB");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", !(ctx_r0.np == null ? null : ctx_r0.np.errors == null ? null : ctx_r0.np.errors["uppercase"]));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(!(ctx_r0.np == null ? null : ctx_r0.np.errors == null ? null : ctx_r0.np.errors["uppercase"]) ? "\u2713" : "\u25CB");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", !(ctx_r0.np == null ? null : ctx_r0.np.errors == null ? null : ctx_r0.np.errors["lowercase"]));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(!(ctx_r0.np == null ? null : ctx_r0.np.errors == null ? null : ctx_r0.np.errors["lowercase"]) ? "\u2713" : "\u25CB");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", !(ctx_r0.np == null ? null : ctx_r0.np.errors == null ? null : ctx_r0.np.errors["digit"]));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(!(ctx_r0.np == null ? null : ctx_r0.np.errors == null ? null : ctx_r0.np.errors["digit"]) ? "\u2713" : "\u25CB");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", !(ctx_r0.np == null ? null : ctx_r0.np.errors == null ? null : ctx_r0.np.errors["symbol"]));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(!(ctx_r0.np == null ? null : ctx_r0.np.errors == null ? null : ctx_r0.np.errors["symbol"]) ? "\u2713" : "\u25CB");
  }
}
function LoginComponent_div_54_ng_container_5_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1, " Passwords do not match. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_54_ng_container_5_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fpError);
  }
}
function LoginComponent_div_54_ng_container_5_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Reset Password \u2192");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_54_ng_container_5_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 55);
    \u0275\u0275text(2, "Resetting...");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_54_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 45)(2, "div", 46);
    \u0275\u0275text(3, "\u{1F512}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 47);
    \u0275\u0275text(5, "Set New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 48);
    \u0275\u0275text(7, "Create a strong password for your account.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "form", 61)(9, "div", 49)(10, "label", 50);
    \u0275\u0275text(11, "NEW PASSWORD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 62);
    \u0275\u0275element(13, "input", 63);
    \u0275\u0275elementStart(14, "button", 64);
    \u0275\u0275listener("mousedown", function LoginComponent_div_54_ng_container_5_Template_button_mousedown_14_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fpShowNew = true);
    })("mouseup", function LoginComponent_div_54_ng_container_5_Template_button_mouseup_14_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fpShowNew = false);
    })("mouseleave", function LoginComponent_div_54_ng_container_5_Template_button_mouseleave_14_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fpShowNew = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 65);
    \u0275\u0275element(16, "path", 66)(17, "path", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, LoginComponent_div_54_ng_container_5_div_18_Template, 5, 7, "div", 68)(19, LoginComponent_div_54_ng_container_5_div_19_Template, 21, 15, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 49)(21, "label", 50);
    \u0275\u0275text(22, "CONFIRM PASSWORD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 62);
    \u0275\u0275element(24, "input", 70);
    \u0275\u0275elementStart(25, "button", 64);
    \u0275\u0275listener("mousedown", function LoginComponent_div_54_ng_container_5_Template_button_mousedown_25_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fpShowConfirm = true);
    })("mouseup", function LoginComponent_div_54_ng_container_5_Template_button_mouseup_25_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fpShowConfirm = false);
    })("mouseleave", function LoginComponent_div_54_ng_container_5_Template_button_mouseleave_25_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fpShowConfirm = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 65);
    \u0275\u0275element(27, "path", 66)(28, "path", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, LoginComponent_div_54_ng_container_5_div_29_Template, 2, 0, "div", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, LoginComponent_div_54_ng_container_5_div_30_Template, 2, 1, "div", 52);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "button", 53);
    \u0275\u0275listener("click", function LoginComponent_div_54_ng_container_5_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.resetPassword());
    });
    \u0275\u0275template(32, LoginComponent_div_54_ng_container_5_span_32_Template, 2, 0, "span", 23)(33, LoginComponent_div_54_ng_container_5_span_33_Template, 3, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_9_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r0.fpNewPassForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("fp-input-error", (ctx_r0.np == null ? null : ctx_r0.np.touched) && (ctx_r0.np == null ? null : ctx_r0.np.invalid));
    \u0275\u0275property("type", ctx_r0.fpShowNew ? "text" : "password");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.np == null ? null : ctx_r0.np.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.np == null ? null : ctx_r0.np.touched) || (ctx_r0.np == null ? null : ctx_r0.np.value));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("fp-input-error", (ctx_r0.fpNewPassForm.errors == null ? null : ctx_r0.fpNewPassForm.errors["passwordsMismatch"]) && ((tmp_7_0 = ctx_r0.fpNewPassForm.get("confirmPassword")) == null ? null : tmp_7_0.touched));
    \u0275\u0275property("type", ctx_r0.fpShowConfirm ? "text" : "password");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (ctx_r0.fpNewPassForm.errors == null ? null : ctx_r0.fpNewPassForm.errors["passwordsMismatch"]) && ((tmp_9_0 = ctx_r0.fpNewPassForm.get("confirmPassword")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fpError);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.fpLoading || ctx_r0.fpNewPassForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.fpLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fpLoading);
  }
}
function LoginComponent_div_54_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 80)(2, "div", 81);
    \u0275\u0275text(3, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 47);
    \u0275\u0275text(5, "Password Reset!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 48);
    \u0275\u0275text(7, "Your password has been updated successfully. A confirmation has been sent to your email.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 82);
    \u0275\u0275listener("click", function LoginComponent_div_54_ng_container_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeForgotPassword());
    });
    \u0275\u0275text(9, "Back to Login \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function LoginComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44);
    \u0275\u0275listener("click", function LoginComponent_div_54_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForgotPassword());
    });
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LoginComponent_div_54_ng_container_3_Template, 16, 5, "ng-container", 23)(4, LoginComponent_div_54_ng_container_4_Template, 24, 7, "ng-container", 23)(5, LoginComponent_div_54_ng_container_5_Template, 34, 14, "ng-container", 23)(6, LoginComponent_div_54_ng_container_6_Template, 10, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.fpStep === "enter_email");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fpStep === "enter_otp");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fpStep === "enter_new_pass");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fpStep === "done");
  }
}
var _LoginComponent = class _LoginComponent {
  constructor(authService, messageService, themeService) {
    this.authService = authService;
    this.messageService = messageService;
    this.themeService = themeService;
    this.errorMessage = null;
    this.successMessage = null;
    this.isLoading = false;
    this.submitted = false;
    this.dataService = inject(DataService);
    this.router = inject(Router);
    this.fpStep = "idle";
    this.fpLoading = false;
    this.fpError = null;
    this.fpEmail = "";
    this.fpMaskedEmail = "";
    this.fpOtp = ["", "", "", "", "", ""];
    this.fpNewPassForm = new FormGroup({
      newPassword: new FormControl("", [Validators.required, passwordPolicyValidator()]),
      confirmPassword: new FormControl("", Validators.required)
    }, { validators: passwordMatchValidator() });
    this.fpShowNew = false;
    this.fpShowConfirm = false;
    this.initializeForm();
  }
  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }
  get loginF() {
    return this.loginForm.controls;
  }
  // ============================================
  // Navigate to supplier registration page
  // ============================================
  goToRegister() {
    this.router.navigate(["/register"]);
  }
  // ============================================
  // UNIFIED LOGIN
  // ============================================
  unifiedLogin() {
    this.isLoading = true;
    this.submitted = true;
    this.errorMessage = null;
    this.successMessage = null;
    if (this.loginForm.valid) {
      const loginRequest = {
        email: this.loginForm.get("email")?.value,
        password: this.loginForm.get("password")?.value
      };
      console.log("\u{1F535} UNIFIED LOGIN ATTEMPT for:", loginRequest.email);
      forkJoin({
        orgAdmin: this.dataService.organizationAdminLogin(loginRequest).pipe(catchError((err) => of({ success: false, error: err, type: "orgadmin" }))),
        hierarchy: this.dataService.hierarchyLogin(loginRequest).pipe(catchError((err) => of({ success: false, error: err, type: "hierarchy" }))),
        buyer: this.dataService.buyerLogin(loginRequest).pipe(catchError((err) => of({ success: false, error: err, type: "buyer" }))),
        supplier: this.dataService.supplierLogin(loginRequest).pipe(catchError((err) => of({ success: false, error: err, type: "supplier" })))
      }).subscribe({
        next: (results) => {
          console.log("\u{1F4CA} Login Results:", results);
          if (results.orgAdmin?.success === true && results.orgAdmin?.data?.token) {
            this.handleOrgAdminLogin(results.orgAdmin, loginRequest);
          } else if (results.hierarchy?.success === true && results.hierarchy?.data?.token) {
            this.handleHierarchyLogin(results.hierarchy, loginRequest);
          } else if (results.buyer?.success === true && results.buyer?.token) {
            this.handleBuyerLogin(results.buyer, loginRequest);
          } else if (results.supplier?.success === true && results.supplier?.token) {
            this.handleSupplierLogin(results.supplier, loginRequest);
          } else {
            this.isLoading = false;
            this.errorMessage = "Invalid email or password. Please try again.";
            console.error("\u274C All login attempts failed");
          }
        },
        error: (error) => {
          this.isLoading = false;
          console.error("\u274C Login error:", error);
          this.errorMessage = "An error occurred. Please try again.";
        }
      });
    } else {
      this.isLoading = false;
      this.loginForm.markAllAsTouched();
    }
  }
  // ============================================
  // ORG ADMIN LOGIN
  // ============================================
  handleOrgAdminLogin(response, loginRequest) {
    console.log("\u2705 ORGANIZATION ADMIN LOGIN SUCCESS");
    this.isLoading = false;
    const userData = response.data;
    const now = (/* @__PURE__ */ new Date()).getTime();
    localStorage.setItem("token", userData.token);
    localStorage.setItem("expirationTime", JSON.stringify(now + 24 * 60 * 60 * 1e3));
    localStorage.setItem("loginTimestamp", JSON.stringify(now));
    localStorage.setItem("userId", userData.id?.toString() || "");
    localStorage.setItem("email", userData.email || "");
    localStorage.setItem("fullName", userData.fullName || "");
    localStorage.setItem("phone", userData.phone || "");
    localStorage.setItem("companyName", userData.companyName || "");
    localStorage.setItem("role", "ORGANIZATION_ADMIN");
    localStorage.setItem("userType", "ORGANIZATION_ADMIN");
    localStorage.setItem("loginStatus", "true");
    localStorage.setItem("mustChangePassword", userData.mustChangePassword?.toString() || "false");
    if (userData.logoBase64 && userData.logoBase64 !== "null") {
      localStorage.setItem("logoBase64", userData.logoBase64);
    } else {
      localStorage.removeItem("logoBase64");
    }
    this.themeService.loadThemeOnLogin();
    const currentUser = {
      id: userData.id || 0,
      username: userData.email || loginRequest.email,
      roles: ["ORGANIZATION_ADMIN"],
      department: []
    };
    const signinData = {
      userId: userData.id,
      email: userData.email,
      fullName: userData.fullName,
      companyName: userData.companyName,
      role: "ORGANIZATION_ADMIN",
      userType: "ORGANIZATION_ADMIN",
      isActive: userData.isActive,
      mustChangePassword: userData.mustChangePassword,
      userRoleAccess: [{
        userRoleAccessId: 0,
        userRoles: "ORGANIZATION_ADMIN",
        pageAccess: "ALL",
        createdDate: null,
        accessRead: true,
        accessEdit: true,
        accessDelete: true
      }]
    };
    localStorage.setItem("signinData", JSON.stringify(signinData));
    localStorage.setItem("userRole", JSON.stringify(signinData.userRoleAccess));
    this.authService.setUser(currentUser);
    this.authService.setLoginStatus(true);
    this.router.navigate(["/orgadmin-dashboard"]);
  }
  // ============================================
  // HIERARCHY LOGIN
  // ============================================
  handleHierarchyLogin(response, loginRequest) {
    console.log("\u2705 HIERARCHY LOGIN SUCCESS");
    this.isLoading = false;
    let userData = response?.data || response;
    let hierarchyLevelData = null;
    if (userData.hierarchyLevel && userData.hierarchyLevel.id) {
      hierarchyLevelData = userData.hierarchyLevel;
    } else if (userData.hierarchyLevelId) {
      hierarchyLevelData = {
        id: userData.hierarchyLevelId,
        levelName: userData.hierarchyLevelName || "Unknown Level",
        levelOrder: userData.hierarchyLevelOrder || 0,
        companyName: userData.companyName || ""
      };
    } else {
      this.messageService.showMessage("error", "Login Failed", "Account not assigned to any hierarchy level.");
      this.isLoading = false;
      return;
    }
    const now = (/* @__PURE__ */ new Date()).getTime();
    localStorage.setItem("token", userData.token);
    localStorage.setItem("expirationTime", JSON.stringify(now + 24 * 60 * 60 * 1e3));
    localStorage.setItem("loginTimestamp", JSON.stringify(now));
    localStorage.setItem("userId", userData.id?.toString() || "");
    localStorage.setItem("email", userData.email || "");
    localStorage.setItem("fullName", userData.fullName || "");
    localStorage.setItem("phone", userData.phone || "");
    localStorage.setItem("role", userData.role || "");
    localStorage.setItem("userType", userData.role || "");
    localStorage.setItem("loginStatus", "true");
    localStorage.setItem("hierarchyLevelId", hierarchyLevelData.id?.toString() || "");
    localStorage.setItem("hierarchyLevelName", hierarchyLevelData.levelName || "");
    localStorage.setItem("hierarchyLevelOrder", hierarchyLevelData.levelOrder?.toString() || "");
    localStorage.setItem("companyName", hierarchyLevelData.companyName || "");
    localStorage.removeItem("logoBase64");
    this.themeService.loadThemeOnLogin();
    const currentUser = {
      id: userData.id || 0,
      username: userData.email || loginRequest.email,
      roles: [userData.role || "ADMIN"],
      department: []
    };
    const signinData = {
      userId: userData.id,
      email: userData.email,
      fullName: userData.fullName,
      role: userData.role,
      userType: userData.role,
      isActive: userData.isActive,
      hierarchyLevel: hierarchyLevelData,
      userRoleAccess: [{
        userRoleAccessId: 0,
        userRoles: userData.role,
        pageAccess: "ALL",
        createdDate: null,
        accessRead: true,
        accessEdit: true,
        accessDelete: true
      }]
    };
    localStorage.setItem("signinData", JSON.stringify(signinData));
    localStorage.setItem("userRole", JSON.stringify(signinData.userRoleAccess));
    this.authService.setUser(currentUser);
    this.authService.setLoginStatus(true);
    const roleUpper = (userData.role || "").toUpperCase();
    if (roleUpper === "LEGAL") {
      this.router.navigate(["/legal-dashboard"]);
    } else if (roleUpper === "PROCUREMENT_OPERATOR") {
      this.router.navigate(["/po-list"]);
    } else {
      this.router.navigate(["/hierarchy-dashboard"]);
    }
  }
  // ============================================
  // BUYER LOGIN
  // ============================================
  handleBuyerLogin(authResponse, loginRequest) {
    console.log("\u2705 BUYER LOGIN SUCCESS");
    this.isLoading = false;
    if (!authResponse.token) {
      this.errorMessage = "Login failed: Invalid response from server";
      return;
    }
    const now = (/* @__PURE__ */ new Date()).getTime();
    localStorage.setItem("token", authResponse.token);
    localStorage.setItem("expirationTime", JSON.stringify(now + 60 * 60 * 1e3));
    localStorage.setItem("loginTimestamp", JSON.stringify(now));
    localStorage.setItem("role", "ROLE_BUYER");
    localStorage.setItem("userType", "ROLE_BUYER");
    localStorage.setItem("loginStatus", "true");
    localStorage.removeItem("logoBase64");
    const userId = authResponse.userId || authResponse.id || 0;
    localStorage.setItem("userId", userId.toString());
    const email = authResponse.email || loginRequest.email;
    localStorage.setItem("email", email);
    let fullName = "";
    if (authResponse.fullName?.trim()) {
      fullName = authResponse.fullName.trim();
    } else if (authResponse.firstName || authResponse.lastName) {
      fullName = ((authResponse.firstName || "") + " " + (authResponse.lastName || "")).trim();
    }
    if (!fullName)
      fullName = email.split("@")[0];
    localStorage.setItem("fullName", fullName);
    if (authResponse.department) {
      localStorage.setItem("departmentId", authResponse.department.id?.toString() || "");
      localStorage.setItem("departmentName", authResponse.department.name || "");
      localStorage.setItem("department", JSON.stringify(authResponse.department));
    }
    if (authResponse.location) {
      localStorage.setItem("locationId", authResponse.location.id?.toString() || "");
      localStorage.setItem("city", authResponse.location.city || "");
      localStorage.setItem("state", authResponse.location.state || "");
      localStorage.setItem("postalCode", authResponse.location.postalCode || "");
      localStorage.setItem("country", authResponse.location.country || "");
      localStorage.setItem("location", JSON.stringify(authResponse.location));
    }
    if (authResponse.buyer) {
      const buyerId = authResponse.buyer.id?.toString() || "";
      const companyName = authResponse.buyer.name || "";
      localStorage.setItem("buyerId", buyerId);
      localStorage.setItem("buyerName", companyName);
      localStorage.setItem("buyerEmail", authResponse.buyer.email || "");
      localStorage.setItem("companyName", companyName);
      localStorage.setItem("buyer", JSON.stringify(authResponse.buyer));
    } else {
      localStorage.removeItem("buyerId");
      localStorage.setItem("companyName", "");
    }
    this.themeService.loadThemeOnLogin();
    const currentUser = {
      id: userId,
      username: email,
      roles: ["ROLE_BUYER"],
      department: authResponse.department?.id ? [authResponse.department.id] : []
    };
    this.authService.setUser(currentUser);
    this.authService.setLoginStatus(true);
    localStorage.setItem("signinData", JSON.stringify(authResponse));
    localStorage.setItem("userRole", JSON.stringify([{
      userRoleAccessId: 0,
      userRoles: "ROLE_BUYER",
      pageAccess: "ALL",
      createdDate: null,
      accessRead: true,
      accessEdit: true,
      accessDelete: true
    }]));
    this.router.navigate(["/rfq-dashboard"]);
  }
  // ============================================
  // SUPPLIER LOGIN
  // ============================================
  handleSupplierLogin(response, loginRequest) {
    console.log("\u2705 SUPPLIER LOGIN SUCCESS");
    this.isLoading = false;
    if (!response.token) {
      this.errorMessage = "Login failed: Invalid response from server";
      return;
    }
    const now = (/* @__PURE__ */ new Date()).getTime();
    localStorage.setItem("token", response.token);
    localStorage.setItem("expirationTime", JSON.stringify(now + 60 * 60 * 1e3));
    localStorage.setItem("loginTimestamp", JSON.stringify(now));
    localStorage.setItem("role", "ROLE_SUPPLIER");
    localStorage.setItem("userType", "ROLE_SUPPLIER");
    localStorage.setItem("loginStatus", "true");
    localStorage.removeItem("logoBase64");
    const userId = response.userId || response.id || 0;
    localStorage.setItem("userId", userId.toString());
    const email = response.email || loginRequest.email;
    localStorage.setItem("email", email);
    let fullName = response.fullName?.trim() || email.split("@")[0];
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("phone", response.phone || response.supplier?.phone || "");
    if (response.department) {
      localStorage.setItem("departmentId", response.department.id?.toString() || "");
      localStorage.setItem("departmentName", response.department.name || "");
      localStorage.setItem("department", JSON.stringify(response.department));
    }
    if (response.location) {
      localStorage.setItem("locationId", response.location.id?.toString() || "");
      localStorage.setItem("locationName", response.location.locationName || "");
      localStorage.setItem("city", response.location.city || "");
      localStorage.setItem("state", response.location.state || "");
      localStorage.setItem("postalCode", response.location.postalCode || "");
      localStorage.setItem("country", response.location.country || "");
      localStorage.setItem("location", JSON.stringify(response.location));
    }
    if (response.supplier) {
      localStorage.setItem("supplierId", response.supplier.id?.toString() || "");
      localStorage.setItem("supplierName", response.supplier.name || "");
      localStorage.setItem("supplierEmail", response.supplier.email || "");
      localStorage.setItem("supplierPhone", response.supplier.phone || "");
      localStorage.setItem("companyName", response.supplier.name || "");
      localStorage.setItem("supplier", JSON.stringify(response.supplier));
    }
    this.themeService.loadThemeOnLogin();
    const currentUser = {
      id: userId,
      username: email,
      roles: ["ROLE_SUPPLIER"],
      department: response.department?.id ? [response.department.id] : []
    };
    this.authService.setUser(currentUser);
    this.authService.setLoginStatus(true);
    localStorage.setItem("signinData", JSON.stringify(response));
    localStorage.setItem("userRole", JSON.stringify([{
      userRoleAccessId: 0,
      userRoles: "ROLE_SUPPLIER",
      pageAccess: "ALL",
      createdDate: null,
      accessRead: true,
      accessEdit: true,
      accessDelete: true
    }]));
    this.router.navigate(["/supplier-dashboard"]);
  }
  clearError() {
    this.errorMessage = null;
    this.successMessage = null;
  }
  // Backend error bodies here are { success:false, message:"..." } — pull the real message out
  // instead of silently falling back to a generic one.
  extractErrorMessage(err, fallback) {
    const msg = err?.error?.message;
    return typeof msg === "string" && msg ? msg : fallback;
  }
  openForgotPassword() {
    this.fpStep = "enter_email";
    this.fpEmail = "";
    this.fpMaskedEmail = "";
    this.fpOtp = ["", "", "", "", "", ""];
    this.fpError = null;
    this.fpNewPassForm.reset();
  }
  closeForgotPassword() {
    this.fpStep = "idle";
    this.fpError = null;
  }
  // Step 1: Request OTP
  requestOtp() {
    if (!this.fpEmail.trim()) {
      this.fpError = "Please enter your email address.";
      return;
    }
    this.fpLoading = true;
    this.fpError = null;
    this.dataService.requestPasswordResetOtp(this.fpEmail.trim()).subscribe({
      next: (res) => {
        this.fpLoading = false;
        const data = res?.success ? res.data : res?.data || res;
        this.fpMaskedEmail = data?.maskedEmail || "";
        this.fpStep = "enter_otp";
      },
      error: (err) => {
        this.fpLoading = false;
        this.fpError = this.extractErrorMessage(err, "Failed to send OTP. Please try again.");
      }
    });
  }
  // OTP box navigation
  onOtpInput(event, index) {
    const input = event.target;
    const val = input.value.replace(/\D/g, "");
    this.fpOtp[index] = val.slice(-1);
    if (val && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  }
  onOtpKeydown(event, index) {
    if (event.key === "Backspace" && !this.fpOtp[index] && index > 0) {
      const prev = document.getElementById(`otp-${index - 1}`);
      prev?.focus();
    }
  }
  onOtpPaste(event) {
    event.preventDefault();
    const pasted = event.clipboardData?.getData("text")?.replace(/\D/g, "") || "";
    for (let i = 0; i < 6 && i < pasted.length; i++) {
      this.fpOtp[i] = pasted[i];
    }
  }
  // Ties each box to its position, not its current value — without this, ngFor can't tell boxes
  // apart while several of them hold the same string (all start out '').
  trackByIndex(index) {
    return index;
  }
  get otpString() {
    return this.fpOtp.join("");
  }
  // Step 2: Verify OTP
  verifyOtp() {
    if (this.otpString.length < 6) {
      this.fpError = "Please enter all 6 digits of the OTP.";
      return;
    }
    this.fpLoading = true;
    this.fpError = null;
    this.dataService.verifyPasswordResetOtp(this.fpEmail.trim(), this.otpString).subscribe({
      next: () => {
        this.fpLoading = false;
        this.fpStep = "enter_new_pass";
      },
      error: (err) => {
        this.fpLoading = false;
        this.fpError = this.extractErrorMessage(err, "OTP verification failed.");
      }
    });
  }
  resendOtp() {
    this.fpOtp = ["", "", "", "", "", ""];
    this.fpError = null;
    this.fpStep = "enter_email";
    this.requestOtp();
  }
  // Step 3: Reset password
  resetPassword() {
    if (this.fpNewPassForm.invalid) {
      this.fpNewPassForm.markAllAsTouched();
      return;
    }
    this.fpLoading = true;
    this.fpError = null;
    this.dataService.resetPasswordWithOtp(this.fpEmail.trim(), this.otpString, this.fpNewPassForm.get("newPassword")?.value).subscribe({
      next: () => {
        this.fpLoading = false;
        this.fpStep = "done";
      },
      error: (err) => {
        this.fpLoading = false;
        this.fpError = this.extractErrorMessage(err, "Password reset failed.");
      }
    });
  }
  // Password strength helpers
  get np() {
    return this.fpNewPassForm.get("newPassword");
  }
  getStrengthPercent() {
    const v = this.np?.value || "";
    let score = 0;
    if (v.length >= 8)
      score += 20;
    if (/[A-Z]/.test(v))
      score += 20;
    if (/[a-z]/.test(v))
      score += 20;
    if (/\d/.test(v))
      score += 20;
    if (/[!@#$%^&*()_+\-=\[\]{};':",./<>?]/.test(v))
      score += 20;
    return score;
  }
  getStrengthLabel() {
    const p = this.getStrengthPercent();
    if (p <= 20)
      return "Very Weak";
    if (p <= 40)
      return "Weak";
    if (p <= 60)
      return "Fair";
    if (p <= 80)
      return "Strong";
    return "Very Strong";
  }
  getStrengthColor() {
    const p = this.getStrengthPercent();
    if (p <= 20)
      return "#ef4444";
    if (p <= 40)
      return "#f97316";
    if (p <= 60)
      return "#eab308";
    if (p <= 80)
      return "#3b82f6";
    return "#22c55e";
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ThemeService));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 55, vars: 35, consts: [[1, "bg-light", "dark:bg-transparent", "min-vh-100", "d-flex", "flex-row", "align-items-center"], ["breakpoint", "md"], [1, "justify-content-center"], ["lg", "5", "xl", "4"], [1, "p-4", "shadow-lg", "border-0", 2, "border-radius", "12px"], [1, "text-center", "mb-4"], ["src", "assets/images/ITTI-Logo.png", "alt", "Company Logo", 1, "mb-2", 2, "height", "60px"], [1, "mt-3", "fw-semibold", "text-muted"], [1, "small", "text-muted"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["cInputGroupText", ""], ["cIcon", "", "name", "cilUser"], ["formControlName", "email", "cFormControl", "", "type", "email", 3, "input", "placeholder"], ["class", "text-danger mb-2 small", 4, "ngIf"], [1, "mb-4"], ["cIcon", "", "name", "cilLockLocked"], ["formControlName", "password", "cFormControl", "", "type", "password", 3, "input", "placeholder"], ["class", "text-danger mb-3 small", 4, "ngIf"], [1, "text-end", "mb-3"], ["href", "javascript:void(0)", 1, "small", "text-decoration-none", 3, "click"], ["xs", "12", 1, "text-center"], ["type", "submit", "cButton", "", "color", "primary", 1, "px-4", "w-100", "fw-semibold", 3, "disabled"], [4, "ngIf"], ["color", "danger", "class", "py-2 my-3 small text-center", 4, "ngIf"], ["color", "success", "class", "py-2 my-3 small text-center", 4, "ngIf"], [1, "text-center", "mt-3", "pt-2", "border-top"], [1, "text-muted", "small", "mb-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", "px-4", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "me-1", 2, "vertical-align", "-1px"], ["d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["x1", "19", "x2", "19", "y1", "8", "y2", "14"], ["x1", "22", "x2", "16", "y1", "11", "y2", "11"], [1, "text-center", "small", "text-muted", "pb-2"], ["class", "fp-overlay", 3, "click", 4, "ngIf"], ["class", "fp-modal", "role", "dialog", "aria-modal", "true", 4, "ngIf"], [1, "text-danger", "mb-2", "small"], [1, "text-danger", "mb-3", "small"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], ["color", "danger", 1, "py-2", "my-3", "small", "text-center"], ["color", "success", 1, "py-2", "my-3", "small", "text-center"], [1, "fp-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "fp-modal"], ["aria-label", "Close", 1, "fp-close", 3, "click"], [1, "fp-icon-wrap"], [1, "fp-icon"], [1, "fp-title"], [1, "fp-subtitle"], [1, "fp-field"], [1, "fp-label"], ["type", "email", "placeholder", "you@company.com", "autocomplete", "username", 1, "fp-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "fp-error", 4, "ngIf"], [1, "fp-btn", 3, "click", "disabled"], [1, "fp-error"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "otp-boxes", 3, "paste"], ["class", "otp-box", "type", "text", "inputmode", "numeric", "maxlength", "1", "autocomplete", "one-time-code", 3, "id", "value", "input", "keydown", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "fp-resend"], ["href", "javascript:void(0)", 3, "click"], ["type", "text", "inputmode", "numeric", "maxlength", "1", "autocomplete", "one-time-code", 1, "otp-box", 3, "input", "keydown", "id", "value"], [3, "formGroup"], [1, "fp-pass-wrap"], ["formControlName", "newPassword", "placeholder", "Enter new password", 1, "fp-input", 3, "type"], ["type", "button", 1, "fp-eye", 3, "mousedown", "mouseup", "mouseleave"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"], ["d", "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"], ["class", "strength-meter", 4, "ngIf"], ["class", "pw-checklist", 4, "ngIf"], ["formControlName", "confirmPassword", "placeholder", "Re-enter new password", 1, "fp-input", 3, "type"], ["class", "fp-error fp-mismatch", 4, "ngIf"], [1, "strength-meter"], [1, "strength-bar-track"], [1, "strength-bar-fill"], [1, "strength-label"], [1, "pw-checklist"], [1, "pw-req"], [1, "req-icon"], [1, "fp-error", "fp-mismatch"], [1, "fp-success-wrap"], [1, "fp-success-icon"], [1, "fp-btn", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "c-container", 1)(2, "c-row", 2)(3, "c-col", 3)(4, "c-card-group")(5, "c-card", 4)(6, "c-card-body")(7, "div", 5);
    \u0275\u0275element(8, "img", 6);
    \u0275\u0275elementStart(9, "h4", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 8);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "form", 9);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_15_listener() {
      return ctx.unifiedLogin();
    });
    \u0275\u0275elementStart(16, "c-input-group", 10)(17, "span", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(18, "svg", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "input", 13);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275listener("input", function LoginComponent_Template_input_input_19_listener() {
      return ctx.clearError();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, LoginComponent_div_21_Template, 3, 2, "div", 14);
    \u0275\u0275elementStart(22, "c-input-group", 15)(23, "span", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(24, "svg", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "input", 17);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275listener("input", function LoginComponent_Template_input_input_25_listener() {
      return ctx.clearError();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, LoginComponent_div_27_Template, 2, 1, "div", 18);
    \u0275\u0275elementStart(28, "div", 19)(29, "a", 20);
    \u0275\u0275listener("click", function LoginComponent_Template_a_click_29_listener() {
      return ctx.openForgotPassword();
    });
    \u0275\u0275text(30, "Forgot password?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "c-row", 2)(32, "c-col", 21)(33, "button", 22);
    \u0275\u0275template(34, LoginComponent_span_34_Template, 3, 3, "span", 23)(35, LoginComponent_span_35_Template, 4, 3, "span", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(36, LoginComponent_c_alert_36_Template, 2, 1, "c-alert", 24)(37, LoginComponent_c_alert_37_Template, 2, 1, "c-alert", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 26)(39, "p", 27);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 28);
    \u0275\u0275listener("click", function LoginComponent_Template_button_click_42_listener() {
      return ctx.goToRegister();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 29);
    \u0275\u0275element(44, "path", 30)(45, "circle", 31)(46, "line", 32)(47, "line", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "div", 34);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(53, LoginComponent_div_53_Template, 1, 0, "div", 35)(54, LoginComponent_div_54_Template, 7, 4, "div", 36);
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 21, "LOGIN_WELCOME_BACK"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 23, "LOGIN_SIGN_IN_SUBTITLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.loginForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx.submitted && ctx.loginF["email"].errors);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 25, "LOGIN_EMAIL_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.submitted && ctx.loginF["email"].errors);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx.submitted && ctx.loginF["password"].errors);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(26, 27, "LOGIN_PASSWORD_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.submitted && ctx.loginF["password"].errors);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.successMessage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 29, "LOGIN_SUPPLIER_PROMPT"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 31, "LOGIN_REGISTER_BUTTON"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \xA9 2026 ITTI. ", \u0275\u0275pipeBind1(52, 33, "LOGIN_FOOTER_RIGHTS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.fpStep !== "idle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.fpStep !== "idle");
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  // ✅ FIX: Added RouterLink so routerLink directive works
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardGroupComponent,
  CardComponent,
  CardBodyComponent,
  InputGroupComponent,
  InputGroupTextDirective,
  IconDirective,
  FormControlDirective,
  ButtonDirective,
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  AlertModule,
  AlertComponent,
  TranslatePipe
], styles: ["\n\n.fp-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 20, 40, 0.55);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 9998;\n  animation: _ngcontent-%COMP%_fpFadeIn 0.2s ease;\n}\n.fp-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n  width: 100%;\n  max-width: 420px;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 36px 32px 32px;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);\n  animation: _ngcontent-%COMP%_fpSlideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n@media (max-width: 480px) {\n  .fp-modal[_ngcontent-%COMP%] {\n    max-width: calc(100vw - 32px);\n    padding: 28px 20px 24px;\n  }\n}\n@keyframes _ngcontent-%COMP%_fpFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fpSlideUp {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -44%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n.fp-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: #f1f5f9;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  font-size: 14px;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.fp-close[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #1a2942;\n}\n.fp-icon-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 16px;\n}\n.fp-icon-wrap[_ngcontent-%COMP%]   .fp-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 1;\n}\n.fp-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #1a2942;\n  margin-bottom: 8px;\n}\n.fp-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.88rem;\n  color: #64748b;\n  margin-bottom: 24px;\n  line-height: 1.6;\n}\n.fp-field[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.fp-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  color: #94a3b8;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n}\n.fp-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.92rem;\n  color: #1e293b;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.fp-input[_ngcontent-%COMP%]:focus {\n  border-color: #1e6ab5;\n  box-shadow: 0 0 0 3px rgba(30, 106, 181, 0.12);\n  background: #fff;\n}\n.fp-input.fp-input-error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  background: #fff5f5;\n}\n.fp-pass-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.fp-pass-wrap[_ngcontent-%COMP%]   .fp-input[_ngcontent-%COMP%] {\n  padding-right: 44px;\n}\n.fp-pass-wrap[_ngcontent-%COMP%]   .fp-eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n}\n.fp-pass-wrap[_ngcontent-%COMP%]   .fp-eye[_ngcontent-%COMP%]:hover {\n  color: #1e6ab5;\n}\n.strength-meter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n}\n.strength-meter[_ngcontent-%COMP%]   .strength-bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.strength-meter[_ngcontent-%COMP%]   .strength-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease, background 0.4s ease;\n}\n.strength-meter[_ngcontent-%COMP%]   .strength-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: color 0.3s ease;\n}\n.pw-checklist[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 12px 14px;\n  background: #f8fafc;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n}\n.pw-req[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  color: #94a3b8;\n  padding: 3px 0;\n  transition: color 0.25s ease;\n}\n.pw-req[_ngcontent-%COMP%]   .req-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  width: 16px;\n  text-align: center;\n  transition: all 0.25s ease;\n}\n.pw-req.met[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.pw-req.met[_ngcontent-%COMP%]   .req-icon[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.otp-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 24px;\n}\n.otp-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 56px;\n  text-align: center;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #1a2942;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  background: #f8fafc;\n  outline: none;\n  caret-color: #1e6ab5;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    transform 0.1s ease;\n}\n.otp-box[_ngcontent-%COMP%]:focus {\n  border-color: #1e6ab5;\n  box-shadow: 0 0 0 3px rgba(30, 106, 181, 0.15);\n  background: #fff;\n  transform: scale(1.05);\n}\n@media (max-width: 400px) {\n  .otp-box[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 48px;\n    font-size: 1.2rem;\n  }\n}\n.fp-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 0.82rem;\n  padding: 10px 14px;\n  margin-bottom: 16px;\n  text-align: center;\n}\n.fp-mismatch[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 4px 0 0;\n  text-align: left;\n  margin-bottom: 0;\n}\n.fp-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a2942,\n      #2d4a7a);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.92rem;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.fp-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(26, 41, 66, 0.25);\n}\n.fp-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.fp-resend[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 14px;\n  font-size: 0.82rem;\n  color: #94a3b8;\n}\n.fp-resend[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1e6ab5;\n  text-decoration: none;\n  font-weight: 500;\n  margin-left: 4px;\n}\n.fp-resend[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.fp-success-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.fp-success-wrap[_ngcontent-%COMP%]   .fp-success-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  margin-bottom: 16px;\n  animation: _ngcontent-%COMP%_fpBounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n@keyframes _ngcontent-%COMP%_fpBounceIn {\n  0% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n  70% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      CommonModule,
      RouterLink,
      // ✅ FIX: Added RouterLink so routerLink directive works
      ContainerComponent,
      RowComponent,
      ColComponent,
      CardGroupComponent,
      TextColorDirective,
      CardComponent,
      CardBodyComponent,
      InputGroupComponent,
      InputGroupTextDirective,
      IconDirective,
      FormControlDirective,
      ButtonDirective,
      FormsModule,
      ReactiveFormsModule,
      AlertModule,
      TranslatePipe
    ], template: `<!-- <div class="bg-light dark:bg-transparent min-vh-100 d-flex flex-row align-items-center">\r
  <c-container breakpoint="md">\r
    <c-row class="justify-content-center">\r
      <c-col lg="5" xl="4">\r
        <c-card-group>\r
          <c-card class="p-4 shadow-lg border-0" style="border-radius: 12px;">\r
            <c-card-body>\r
            \r
              <div class="text-center mb-4">\r
                <img src="assets/images/ITTI-Logo.png" alt="Company Logo" style="height: 60px;" class="mb-2" />\r
                <h4 class="mt-3 fw-semibold text-muted">Welcome Back</h4>\r
                <p class="small text-muted">Sign in to your account</p>\r
              </div>\r
\r
              <form [formGroup]="loginForm" (ngSubmit)="unifiedLogin()">\r
                \r
               \r
                <c-input-group class="mb-3">\r
                  <span cInputGroupText>\r
                    <svg cIcon name="cilUser"></svg>\r
                  </span>\r
                  <input \r
                    formControlName="email" \r
                    cFormControl \r
                    placeholder="Email Address"\r
                    type="email"\r
                    [class.is-invalid]="submitted && loginF['email'].errors"\r
                    (input)="clearError()" />\r
                </c-input-group>\r
                <div *ngIf="submitted && loginF['email'].errors" class="text-danger mb-2 small">\r
                  <span *ngIf="loginF['email'].errors['required']">Email is required.</span>\r
                  <span *ngIf="loginF['email'].errors['email']">Please enter a valid email address.</span>\r
                </div>\r
\r
               \r
                <c-input-group class="mb-4">\r
                  <span cInputGroupText>\r
                    <svg cIcon name="cilLockLocked"></svg>\r
                  </span>\r
                  <input \r
                    formControlName="password" \r
                    cFormControl \r
                    type="password" \r
                    placeholder="Password"\r
                    [class.is-invalid]="submitted && loginF['password'].errors"\r
                    (input)="clearError()" />\r
                </c-input-group>\r
                <div *ngIf="submitted && loginF['password'].errors" class="text-danger mb-3 small">\r
                  <span *ngIf="loginF['password'].errors['required']">Password is required.</span>\r
                </div>\r
\r
               \r
                <c-row class="justify-content-center">\r
                  <c-col xs="12" class="text-center">\r
                    <button \r
                      type="submit" \r
                      cButton \r
                      class="px-4 w-100 fw-semibold" \r
                      color="primary"\r
                      [disabled]="isLoading">\r
                      <span *ngIf="!isLoading">Sign In</span>\r
                      <span *ngIf="isLoading">\r
                        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>\r
                        Signing in...\r
                      </span>\r
                    </button>\r
                  </c-col>\r
                </c-row>\r
\r
\r
\r
               \r
                <c-alert color="danger" *ngIf="errorMessage" class="py-2 my-3 small text-center">\r
                  {{ errorMessage }}\r
                </c-alert>\r
\r
               \r
                <c-alert color="success" *ngIf="successMessage" class="py-2 my-3 small text-center">\r
                  {{ successMessage }}\r
                </c-alert>\r
              </form>\r
\r
\r
                             \r
<div class="text-center mt-3 pt-2 border-top">\r
  <p class="text-muted small mb-1">Are you a supplier looking to work with us?</p>\r
  <a routerLink="/register" class="btn btn-outline-secondary btn-sm px-4">\r
    Register as Supplier\r
  </a>\r
</div>\r
\r
            </c-card-body>\r
\r
          \r
            <div class="text-center small text-muted pb-2">\r
              \xA9 2025 ITTI. All Rights Reserved.\r
            </div>\r
          </c-card>\r
        </c-card-group>\r
      </c-col>\r
    </c-row>\r
  </c-container>\r
</div> -->\r
\r
\r
<div class="bg-light dark:bg-transparent min-vh-100 d-flex flex-row align-items-center">\r
  <c-container breakpoint="md">\r
    <c-row class="justify-content-center">\r
      <c-col lg="5" xl="4">\r
        <c-card-group>\r
          <c-card class="p-4 shadow-lg border-0" style="border-radius: 12px;">\r
            <c-card-body>\r
              <!-- Company Logo -->\r
              <div class="text-center mb-4">\r
                <img src="assets/images/ITTI-Logo.png" alt="Company Logo" style="height: 60px;" class="mb-2" />\r
                <h4 class="mt-3 fw-semibold text-muted">{{ 'LOGIN_WELCOME_BACK' | translate }}</h4>\r
                <p class="small text-muted">{{ 'LOGIN_SIGN_IN_SUBTITLE' | translate }}</p>\r
              </div>\r
\r
              <!-- Single Unified Login Form -->\r
              <form [formGroup]="loginForm" (ngSubmit)="unifiedLogin()">\r
\r
                <!-- Email Input -->\r
                <c-input-group class="mb-3">\r
                  <span cInputGroupText>\r
                    <svg cIcon name="cilUser"></svg>\r
                  </span>\r
                  <input\r
                    formControlName="email"\r
                    cFormControl\r
                    [placeholder]="'LOGIN_EMAIL_PLACEHOLDER' | translate"\r
                    type="email"\r
                    [class.is-invalid]="submitted && loginF['email'].errors"\r
                    (input)="clearError()" />\r
                </c-input-group>\r
                <div *ngIf="submitted && loginF['email'].errors" class="text-danger mb-2 small">\r
                  <span *ngIf="loginF['email'].errors['required']">{{ 'LOGIN_EMAIL_REQUIRED' | translate }}</span>\r
                  <span *ngIf="loginF['email'].errors['email']">{{ 'LOGIN_EMAIL_INVALID' | translate }}</span>\r
                </div>\r
\r
                <!-- Password Input -->\r
                <c-input-group class="mb-4">\r
                  <span cInputGroupText>\r
                    <svg cIcon name="cilLockLocked"></svg>\r
                  </span>\r
                  <input\r
                    formControlName="password"\r
                    cFormControl\r
                    type="password"\r
                    [placeholder]="'LOGIN_PASSWORD_PLACEHOLDER' | translate"\r
                    [class.is-invalid]="submitted && loginF['password'].errors"\r
                    (input)="clearError()" />\r
                </c-input-group>\r
                <div *ngIf="submitted && loginF['password'].errors" class="text-danger mb-3 small">\r
                  <span *ngIf="loginF['password'].errors['required']">{{ 'LOGIN_PASSWORD_REQUIRED' | translate }}</span>\r
                </div>\r
\r
                <div class="text-end mb-3">\r
                  <a href="javascript:void(0)" class="small text-decoration-none" (click)="openForgotPassword()">Forgot password?</a>\r
                </div>\r
\r
                <!-- Login Button -->\r
                <c-row class="justify-content-center">\r
                  <c-col xs="12" class="text-center">\r
                    <button\r
                      type="submit"\r
                      cButton\r
                      class="px-4 w-100 fw-semibold"\r
                      color="primary"\r
                      [disabled]="isLoading">\r
                      <span *ngIf="!isLoading">{{ 'LOGIN_SIGN_IN_BUTTON' | translate }}</span>\r
                      <span *ngIf="isLoading">\r
                        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>\r
                        {{ 'LOGIN_SIGNING_IN' | translate }}\r
                      </span>\r
                    </button>\r
                  </c-col>\r
                </c-row>\r
\r
                <!-- Error Message -->\r
                <c-alert color="danger" *ngIf="errorMessage" class="py-2 my-3 small text-center">\r
                  {{ errorMessage }}\r
                </c-alert>\r
\r
                <!-- Success Message -->\r
                <c-alert color="success" *ngIf="successMessage" class="py-2 my-3 small text-center">\r
                  {{ successMessage }}\r
                </c-alert>\r
              </form>\r
\r
              <!-- \u2705 FIX: Use [routerLink] (property binding) instead of routerLink attribute -->\r
              <!-- This is properly imported via RouterLink in the component -->\r
              <div class="text-center mt-3 pt-2 border-top">\r
                <p class="text-muted small mb-2">{{ 'LOGIN_SUPPLIER_PROMPT' | translate }}</p>\r
                <button\r
                  type="button"\r
                  class="btn btn-outline-secondary btn-sm px-4"\r
                  (click)="goToRegister()">\r
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"\r
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"\r
                    stroke-linejoin="round" class="me-1" style="vertical-align: -1px;">\r
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>\r
                    <circle cx="9" cy="7" r="4"/>\r
                    <line x1="19" x2="19" y1="8" y2="14"/>\r
                    <line x1="22" x2="16" y1="11" y2="11"/>\r
                  </svg>\r
                  {{ 'LOGIN_REGISTER_BUTTON' | translate }}\r
                </button>\r
              </div>\r
\r
            </c-card-body>\r
\r
            <!-- Footer -->\r
            <div class="text-center small text-muted pb-2">\r
              &copy; 2026 ITTI. {{ 'LOGIN_FOOTER_RIGHTS' | translate }}\r
            </div>\r
          </c-card>\r
        </c-card-group>\r
      </c-col>\r
    </c-row>\r
  </c-container>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     FORGOT PASSWORD MODAL \u2014 OTP flow, adapted from the team's HRMS pattern.\r
     One email box covers every login type this page already tries (buyer, supplier, org\r
     admin, super admin, hierarchy) \u2014 the backend resolves which one it belongs to.\r
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="fp-overlay" *ngIf="fpStep !== 'idle'" (click)="closeForgotPassword()"></div>\r
\r
<div class="fp-modal" *ngIf="fpStep !== 'idle'" role="dialog" aria-modal="true">\r
\r
  <button class="fp-close" (click)="closeForgotPassword()" aria-label="Close">\u2715</button>\r
\r
  <!-- \u2500\u2500 STEP 1: Enter email \u2500\u2500 -->\r
  <ng-container *ngIf="fpStep === 'enter_email'">\r
    <div class="fp-icon-wrap"><div class="fp-icon">\u{1F511}</div></div>\r
    <h3 class="fp-title">Forgot Password?</h3>\r
    <p class="fp-subtitle">\r
      Enter your email and we'll send a one-time password to your registered address.\r
    </p>\r
\r
    <div class="fp-field">\r
      <label class="fp-label">EMAIL ADDRESS</label>\r
      <input class="fp-input" type="email" placeholder="you@company.com" autocomplete="username"\r
        [(ngModel)]="fpEmail" (keyup.enter)="requestOtp()" />\r
    </div>\r
\r
    <div class="fp-error" *ngIf="fpError">{{ fpError }}</div>\r
\r
    <button class="fp-btn" (click)="requestOtp()" [disabled]="fpLoading">\r
      <span *ngIf="!fpLoading">Send OTP \u2192</span>\r
      <span *ngIf="fpLoading"><span class="spinner-border spinner-border-sm me-2"></span>Sending...</span>\r
    </button>\r
  </ng-container>\r
\r
  <!-- \u2500\u2500 STEP 2: Enter OTP \u2500\u2500 -->\r
  <ng-container *ngIf="fpStep === 'enter_otp'">\r
    <div class="fp-icon-wrap"><div class="fp-icon">\u{1F4E7}</div></div>\r
    <h3 class="fp-title">Check Your Email</h3>\r
    <p class="fp-subtitle">\r
      We sent a 6-digit OTP to <strong>{{ fpMaskedEmail }}</strong>.\r
      It expires in <strong>10 minutes</strong>.\r
    </p>\r
\r
    <div class="otp-boxes" (paste)="onOtpPaste($event)">\r
      <input *ngFor="let digit of fpOtp; let i = index; trackBy: trackByIndex" [id]="'otp-' + i" class="otp-box"\r
        type="text" inputmode="numeric" maxlength="1" [value]="fpOtp[i]" (input)="onOtpInput($event, i)"\r
        (keydown)="onOtpKeydown($event, i)" autocomplete="one-time-code" />\r
    </div>\r
\r
    <div class="fp-error" *ngIf="fpError">{{ fpError }}</div>\r
\r
    <button class="fp-btn" (click)="verifyOtp()" [disabled]="fpLoading || otpString.length < 6">\r
      <span *ngIf="!fpLoading">Verify OTP \u2192</span>\r
      <span *ngIf="fpLoading"><span class="spinner-border spinner-border-sm me-2"></span>Verifying...</span>\r
    </button>\r
\r
    <div class="fp-resend">\r
      Didn't receive it?\r
      <a href="javascript:void(0)" (click)="resendOtp()">Resend OTP</a>\r
    </div>\r
  </ng-container>\r
\r
  <!-- \u2500\u2500 STEP 3: New Password \u2500\u2500 -->\r
  <ng-container *ngIf="fpStep === 'enter_new_pass'">\r
    <div class="fp-icon-wrap"><div class="fp-icon">\u{1F512}</div></div>\r
    <h3 class="fp-title">Set New Password</h3>\r
    <p class="fp-subtitle">Create a strong password for your account.</p>\r
\r
    <form [formGroup]="fpNewPassForm">\r
      <div class="fp-field">\r
        <label class="fp-label">NEW PASSWORD</label>\r
        <div class="fp-pass-wrap">\r
          <input class="fp-input" [type]="fpShowNew ? 'text' : 'password'" formControlName="newPassword"\r
            placeholder="Enter new password" [class.fp-input-error]="np?.touched && np?.invalid" />\r
          <button type="button" class="fp-eye" (mousedown)="fpShowNew=true" (mouseup)="fpShowNew=false"\r
            (mouseleave)="fpShowNew=false">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">\r
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\r
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <div class="strength-meter" *ngIf="np?.value">\r
          <div class="strength-bar-track">\r
            <div class="strength-bar-fill" [style.width.%]="getStrengthPercent()" [style.background]="getStrengthColor()"></div>\r
          </div>\r
          <span class="strength-label" [style.color]="getStrengthColor()">{{ getStrengthLabel() }}</span>\r
        </div>\r
\r
        <div class="pw-checklist" *ngIf="np?.touched || np?.value">\r
          <div class="pw-req" [class.met]="!np?.errors?.['minLength']">\r
            <span class="req-icon">{{ !np?.errors?.['minLength'] ? '\u2713' : '\u25CB' }}</span>Minimum 8 characters\r
          </div>\r
          <div class="pw-req" [class.met]="!np?.errors?.['uppercase']">\r
            <span class="req-icon">{{ !np?.errors?.['uppercase'] ? '\u2713' : '\u25CB' }}</span>At least one uppercase letter (A\u2013Z)\r
          </div>\r
          <div class="pw-req" [class.met]="!np?.errors?.['lowercase']">\r
            <span class="req-icon">{{ !np?.errors?.['lowercase'] ? '\u2713' : '\u25CB' }}</span>At least one lowercase letter (a\u2013z)\r
          </div>\r
          <div class="pw-req" [class.met]="!np?.errors?.['digit']">\r
            <span class="req-icon">{{ !np?.errors?.['digit'] ? '\u2713' : '\u25CB' }}</span>At least one number (0\u20139)\r
          </div>\r
          <div class="pw-req" [class.met]="!np?.errors?.['symbol']">\r
            <span class="req-icon">{{ !np?.errors?.['symbol'] ? '\u2713' : '\u25CB' }}</span>At least one special character (!&#64;#$%...)\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="fp-field">\r
        <label class="fp-label">CONFIRM PASSWORD</label>\r
        <div class="fp-pass-wrap">\r
          <input class="fp-input" [type]="fpShowConfirm ? 'text' : 'password'" formControlName="confirmPassword"\r
            placeholder="Re-enter new password"\r
            [class.fp-input-error]="fpNewPassForm.errors?.['passwordsMismatch'] && fpNewPassForm.get('confirmPassword')?.touched" />\r
          <button type="button" class="fp-eye" (mousedown)="fpShowConfirm=true" (mouseup)="fpShowConfirm=false"\r
            (mouseleave)="fpShowConfirm=false">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">\r
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\r
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\r
            </svg>\r
          </button>\r
        </div>\r
        <div class="fp-error fp-mismatch"\r
          *ngIf="fpNewPassForm.errors?.['passwordsMismatch'] && fpNewPassForm.get('confirmPassword')?.touched">\r
          Passwords do not match.\r
        </div>\r
      </div>\r
    </form>\r
\r
    <div class="fp-error" *ngIf="fpError">{{ fpError }}</div>\r
\r
    <button class="fp-btn" (click)="resetPassword()" [disabled]="fpLoading || fpNewPassForm.invalid">\r
      <span *ngIf="!fpLoading">Reset Password \u2192</span>\r
      <span *ngIf="fpLoading"><span class="spinner-border spinner-border-sm me-2"></span>Resetting...</span>\r
    </button>\r
  </ng-container>\r
\r
  <!-- \u2500\u2500 STEP 4: Done \u2500\u2500 -->\r
  <ng-container *ngIf="fpStep === 'done'">\r
    <div class="fp-success-wrap">\r
      <div class="fp-success-icon">\u2705</div>\r
      <h3 class="fp-title">Password Reset!</h3>\r
      <p class="fp-subtitle">Your password has been updated successfully. A confirmation has been sent to your email.</p>\r
      <button class="fp-btn" (click)="closeForgotPassword()">Back to Login \u2192</button>\r
    </div>\r
  </ng-container>\r
\r
</div>`, styles: ["/* src/app/views/pages/login/login.component.scss */\n.fp-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 20, 40, 0.55);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 9998;\n  animation: fpFadeIn 0.2s ease;\n}\n.fp-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n  width: 100%;\n  max-width: 420px;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 36px 32px 32px;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);\n  animation: fpSlideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n@media (max-width: 480px) {\n  .fp-modal {\n    max-width: calc(100vw - 32px);\n    padding: 28px 20px 24px;\n  }\n}\n@keyframes fpFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fpSlideUp {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -44%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n.fp-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: #f1f5f9;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  font-size: 14px;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.fp-close:hover {\n  background: #e2e8f0;\n  color: #1a2942;\n}\n.fp-icon-wrap {\n  text-align: center;\n  margin-bottom: 16px;\n}\n.fp-icon-wrap .fp-icon {\n  font-size: 40px;\n  line-height: 1;\n}\n.fp-title {\n  text-align: center;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #1a2942;\n  margin-bottom: 8px;\n}\n.fp-subtitle {\n  text-align: center;\n  font-size: 0.88rem;\n  color: #64748b;\n  margin-bottom: 24px;\n  line-height: 1.6;\n}\n.fp-field {\n  margin-bottom: 18px;\n}\n.fp-label {\n  display: block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  color: #94a3b8;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n}\n.fp-input {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.92rem;\n  color: #1e293b;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.fp-input:focus {\n  border-color: #1e6ab5;\n  box-shadow: 0 0 0 3px rgba(30, 106, 181, 0.12);\n  background: #fff;\n}\n.fp-input.fp-input-error {\n  border-color: #ef4444;\n  background: #fff5f5;\n}\n.fp-pass-wrap {\n  position: relative;\n}\n.fp-pass-wrap .fp-input {\n  padding-right: 44px;\n}\n.fp-pass-wrap .fp-eye {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n}\n.fp-pass-wrap .fp-eye:hover {\n  color: #1e6ab5;\n}\n.strength-meter {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n}\n.strength-meter .strength-bar-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.strength-meter .strength-bar-fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease, background 0.4s ease;\n}\n.strength-meter .strength-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: color 0.3s ease;\n}\n.pw-checklist {\n  margin-top: 12px;\n  padding: 12px 14px;\n  background: #f8fafc;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n}\n.pw-req {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  color: #94a3b8;\n  padding: 3px 0;\n  transition: color 0.25s ease;\n}\n.pw-req .req-icon {\n  font-size: 0.75rem;\n  width: 16px;\n  text-align: center;\n  transition: all 0.25s ease;\n}\n.pw-req.met {\n  color: #22c55e;\n}\n.pw-req.met .req-icon {\n  color: #22c55e;\n}\n.otp-boxes {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 24px;\n}\n.otp-box {\n  width: 48px;\n  height: 56px;\n  text-align: center;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #1a2942;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  background: #f8fafc;\n  outline: none;\n  caret-color: #1e6ab5;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    transform 0.1s ease;\n}\n.otp-box:focus {\n  border-color: #1e6ab5;\n  box-shadow: 0 0 0 3px rgba(30, 106, 181, 0.15);\n  background: #fff;\n  transform: scale(1.05);\n}\n@media (max-width: 400px) {\n  .otp-box {\n    width: 40px;\n    height: 48px;\n    font-size: 1.2rem;\n  }\n}\n.fp-error {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 0.82rem;\n  padding: 10px 14px;\n  margin-bottom: 16px;\n  text-align: center;\n}\n.fp-mismatch {\n  background: none;\n  border: none;\n  padding: 4px 0 0;\n  text-align: left;\n  margin-bottom: 0;\n}\n.fp-btn {\n  width: 100%;\n  padding: 13px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a2942,\n      #2d4a7a);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.92rem;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.fp-btn:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(26, 41, 66, 0.25);\n}\n.fp-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.fp-resend {\n  text-align: center;\n  margin-top: 14px;\n  font-size: 0.82rem;\n  color: #94a3b8;\n}\n.fp-resend a {\n  color: #1e6ab5;\n  text-decoration: none;\n  font-weight: 500;\n  margin-left: 4px;\n}\n.fp-resend a:hover {\n  text-decoration: underline;\n}\n.fp-success-wrap {\n  text-align: center;\n}\n.fp-success-wrap .fp-success-icon {\n  font-size: 56px;\n  margin-bottom: 16px;\n  animation: fpBounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n@keyframes fpBounceIn {\n  0% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n  70% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: MessageService }, { type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/views/pages/login/login.component.ts", lineNumber: 552 });
})();
export {
  LoginComponent,
  passwordMatchValidator,
  passwordPolicyValidator
};
//# sourceMappingURL=chunk-RNVKUZJA.js.map
