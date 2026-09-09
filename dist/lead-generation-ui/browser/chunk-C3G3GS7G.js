import {
  TranslatePipe
} from "./chunk-5RNEFPGC.js";
import {
  AvatarComponent,
  BreadcrumbRouterComponent,
  ColorModeService,
  ContainerComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FooterComponent,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  IconDirective,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective
} from "./chunk-U7YW3DHP.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-E33XJXHD.js";
import {
  AuthService
} from "./chunk-S3OSUDOO.js";
import {
  Directionality,
  MatDialog,
  MatDialogModule,
  coerceBooleanProperty,
  getRtlScrollAxisType
} from "./chunk-4TRDTO5Y.js";
import {
  DataService
} from "./chunk-OQIPAMNU.js";
import {
  Platform,
  coerceElement,
  coerceNumberProperty
} from "./chunk-JKMYCEKN.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererStyleFlags2,
  RouterLink,
  RouterModule,
  RouterOutlet,
  Subject,
  Subscription,
  ViewChild,
  animationFrameScheduler,
  auditTime,
  catchError,
  computed,
  debounceTime,
  distinctUntilChanged,
  expand,
  filter,
  finalize,
  forkJoin,
  fromEvent,
  inject,
  input,
  interval,
  isPlatformBrowser,
  map,
  merge,
  mergeMap,
  of,
  pairwise,
  setClassMetadata,
  signal,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BCCUO726.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __spreadProps,
  __spreadValues
} from "./chunk-SO7Q7VKX.js";

// src/app/layout/default-layout/default-footer/default-footer.component.ts
var _DefaultFooterComponent = class _DefaultFooterComponent extends FooterComponent {
  constructor() {
    super();
  }
};
_DefaultFooterComponent.\u0275fac = function DefaultFooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultFooterComponent)();
};
_DefaultFooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DefaultFooterComponent, selectors: [["app-default-footer"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 0, consts: [["href", "https://itti.com/", "target", "_blank"]], template: function DefaultFooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "a", 0)(2, "span");
    \u0275\u0275text(3, " \xA9 2025 ITTI Pvt Ltd");
    \u0275\u0275domElementEnd()()();
  }
}, encapsulation: 2 });
var DefaultFooterComponent = _DefaultFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultFooterComponent, [{
    type: Component,
    args: [{ selector: "app-default-footer", template: '<!--<c-footer>-->\r\n  <div>\r\n    <a href="https://itti.com/" target="_blank"><span> &copy; 2025 ITTI Pvt Ltd</span></a>\r\n    \r\n  </div>\r\n  <!-- <div class="ms-auto">\r\n    Powered by\r\n    <a href="https://coreui.io/angular" target="_blank">\r\n      <span> CoreUI for Angular</span>\r\n    </a>\r\n  </div> -->\r\n<!--</c-footer>-->\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DefaultFooterComponent, { className: "DefaultFooterComponent", filePath: "src/app/layout/default-layout/default-footer/default-footer.component.ts", lineNumber: 9 });
})();

// src/app/views/session-timer/session-timer-component.ts
var _SessionTimerComponent = class _SessionTimerComponent {
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    this.time$ = this.authService.remainingTime$;
  }
};
_SessionTimerComponent.\u0275fac = function SessionTimerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SessionTimerComponent)(\u0275\u0275directiveInject(AuthService));
};
_SessionTimerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SessionTimerComponent, selectors: [["app-session-timer"]], decls: 5, vars: 3, consts: [[1, "alert", "alert-warning", "p-2", "text-end", "small", 2, "float", "right"]], template: function SessionTimerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275text(1, " Session expires in: ");
    \u0275\u0275domElementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx.time$));
  }
}, dependencies: [CommonModule, AsyncPipe], encapsulation: 2 });
var SessionTimerComponent = _SessionTimerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionTimerComponent, [{
    type: Component,
    args: [{
      selector: "app-session-timer",
      imports: [CommonModule],
      template: `
   <div class="alert alert-warning p-2 text-end small" style="float:right;">
  Session expires in: <strong>{{ time$ | async }}</strong>
</div>
  `
    }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SessionTimerComponent, { className: "SessionTimerComponent", filePath: "src/app/views/session-timer/session-timer-component.ts", lineNumber: 16 });
})();

// src/app/shared/session-expiry-dialog/session-expiry-dialog.component.ts
function SessionExpiryDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function SessionExpiryDialogComponent_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275element(2, "div", 3);
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 6);
    \u0275\u0275element(6, "circle", 7)(7, "polyline", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h2", 9);
    \u0275\u0275text(9, "Session Expiring Soon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 10);
    \u0275\u0275text(11, "Your session is about to expire due to inactivity.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 11)(13, "div", 12);
    \u0275\u0275text(14, "Time remaining");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 14);
    \u0275\u0275element(18, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 16);
    \u0275\u0275text(20, " Would you like to extend your session by ");
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22, "1 hour");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " or logout now? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 17)(25, "button", 18);
    \u0275\u0275listener("click", function SessionExpiryDialogComponent_div_0_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 6);
    \u0275\u0275element(27, "path", 19)(28, "polyline", 20)(29, "line", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Logout Now ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "button", 22);
    \u0275\u0275listener("click", function SessionExpiryDialogComponent_div_0_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onExtend());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 6);
    \u0275\u0275element(33, "circle", 7)(34, "polyline", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Extend +1 Hour ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r1.countdown);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.progressPercent + "%");
  }
}
var _SessionExpiryDialogComponent = class _SessionExpiryDialogComponent {
  constructor() {
    this.expiryMs = 0;
    this.extend = new EventEmitter();
    this.logout = new EventEmitter();
    this.isVisible = false;
    this.countdown = "05:00";
    this.progressPercent = 100;
    this.WARN_WINDOW_MS = 5 * 60 * 1e3;
  }
  ngOnInit() {
    this.isVisible = true;
    this.startCountdown();
  }
  ngOnDestroy() {
    this.tickSub?.unsubscribe();
  }
  startCountdown() {
    this.tickSub = interval(1e3).subscribe(() => {
      const diff = this.expiryMs - Date.now();
      if (diff <= 0) {
        this.countdown = "00:00";
        this.progressPercent = 0;
        this.tickSub?.unsubscribe();
        this.logout.emit();
        return;
      }
      this.countdown = this.formatMs(diff);
      this.progressPercent = Math.max(0, Math.min(100, diff / this.WARN_WINDOW_MS * 100));
    });
  }
  formatMs(ms) {
    const totalSecs = Math.floor(ms / 1e3);
    const m = Math.floor(totalSecs / 60).toString().padStart(2, "0");
    const s = (totalSecs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }
  onExtend() {
    this.isVisible = false;
    this.tickSub?.unsubscribe();
    this.extend.emit();
  }
  onLogout() {
    this.isVisible = false;
    this.tickSub?.unsubscribe();
    this.logout.emit();
  }
  /** Prevent accidental close on overlay click */
  onOverlayClick(event) {
    if (event.target.classList.contains("session-dialog-overlay")) {
    }
  }
};
_SessionExpiryDialogComponent.\u0275fac = function SessionExpiryDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SessionExpiryDialogComponent)();
};
_SessionExpiryDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SessionExpiryDialogComponent, selectors: [["app-session-expiry-dialog"]], inputs: { expiryMs: "expiryMs" }, outputs: { extend: "extend", logout: "logout" }, decls: 1, vars: 1, consts: [["class", "session-dialog-overlay", 3, "click", 4, "ngIf"], [1, "session-dialog-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "sessionDialogTitle", 1, "session-dialog-box"], [1, "session-dialog-topbar"], [1, "session-dialog-header"], [1, "session-dialog-icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["id", "sessionDialogTitle", 1, "session-dialog-title"], [1, "session-dialog-subtitle"], [1, "session-dialog-countdown-wrapper"], [1, "session-dialog-countdown-label"], [1, "session-dialog-countdown"], [1, "session-dialog-progress-bar"], [1, "session-dialog-progress-fill"], [1, "session-dialog-message"], [1, "session-dialog-actions"], [1, "session-btn", "session-btn-logout", 3, "click"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "session-btn", "session-btn-extend", 3, "click"]], template: function SessionExpiryDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SessionExpiryDialogComponent_div_0_Template, 36, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.isVisible);
  }
}, dependencies: [CommonModule, NgIf], styles: ['\n\n.session-dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(15, 23, 42, 0.55);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_overlayFadeIn 0.25s ease;\n}\n@keyframes _ngcontent-%COMP%_overlayFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.session-dialog-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  width: 100%;\n  max-width: 420px;\n  margin: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.08);\n  animation: _ngcontent-%COMP%_dialogSlideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes _ngcontent-%COMP%_dialogSlideUp {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.session-dialog-topbar[_ngcontent-%COMP%] {\n  height: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b 0%,\n      #ef4444 100%);\n}\n.session-dialog-header[_ngcontent-%COMP%] {\n  padding: 28px 28px 0;\n  text-align: center;\n}\n.session-dialog-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #d97706;\n  margin-bottom: 14px;\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.35);\n  }\n  50% {\n    transform: scale(1.06);\n    box-shadow: 0 0 0 10px rgba(245, 158, 11, 0);\n  }\n}\n.session-dialog-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n.session-dialog-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 6px;\n  letter-spacing: -0.3px;\n}\n.session-dialog-subtitle[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n}\n.session-dialog-countdown-wrapper[_ngcontent-%COMP%] {\n  margin: 22px 28px 0;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px 20px;\n  text-align: center;\n}\n.session-dialog-countdown-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  margin-bottom: 6px;\n}\n.session-dialog-countdown[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 800;\n  color: #ef4444;\n  letter-spacing: 2px;\n  font-variant-numeric: tabular-nums;\n  line-height: 1;\n  margin-bottom: 12px;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n}\n.session-dialog-progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.session-dialog-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b 0%,\n      #ef4444 100%);\n  transition: width 1s linear;\n}\n.session-dialog-message[_ngcontent-%COMP%] {\n  margin: 18px 28px 0;\n  font-size: 13.5px;\n  color: #475569;\n  text-align: center;\n  line-height: 1.6;\n}\n.session-dialog-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1e293b;\n}\n.session-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 20px 28px 28px;\n}\n.session-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 11px 16px;\n  border-radius: 10px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.session-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.session-btn-logout[_ngcontent-%COMP%] {\n  background: #fff1f2;\n  color: #e11d48;\n  border: 1.5px solid #fecdd3;\n}\n.session-btn-logout[_ngcontent-%COMP%]:hover {\n  background: #ffe4e6;\n  border-color: #fda4af;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(225, 29, 72, 0.18);\n}\n.session-btn-logout[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.session-btn-extend[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #ffffff;\n  border: 1.5px solid transparent;\n}\n.session-btn-extend[_ngcontent-%COMP%]:hover {\n  opacity: 0.92;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.35);\n}\n.session-btn-extend[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n@media (max-width: 480px) {\n  .session-dialog-box[_ngcontent-%COMP%] {\n    border-radius: 14px;\n  }\n  .session-dialog-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .session-dialog-countdown[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=session-expiry-dialog.component.css.map */'] });
var SessionExpiryDialogComponent = _SessionExpiryDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionExpiryDialogComponent, [{
    type: Component,
    args: [{ selector: "app-session-expiry-dialog", standalone: true, imports: [CommonModule], template: `<!-- session-expiry-dialog.component.html -->\r
<div class="session-dialog-overlay" *ngIf="isVisible" (click)="onOverlayClick($event)">\r
  <div class="session-dialog-box" role="dialog" aria-modal="true" aria-labelledby="sessionDialogTitle">\r
\r
    <!-- Top Warning Bar -->\r
    <div class="session-dialog-topbar"></div>\r
\r
    <!-- Icon + Header -->\r
    <div class="session-dialog-header">\r
      <div class="session-dialog-icon">\r
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"\r
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
          <circle cx="12" cy="12" r="10"/>\r
          <polyline points="12 6 12 12 16 14"/>\r
        </svg>\r
      </div>\r
      <h2 class="session-dialog-title" id="sessionDialogTitle">Session Expiring Soon</h2>\r
      <p class="session-dialog-subtitle">Your session is about to expire due to inactivity.</p>\r
    </div>\r
\r
    <!-- Countdown Display -->\r
    <div class="session-dialog-countdown-wrapper">\r
      <div class="session-dialog-countdown-label">Time remaining</div>\r
      <div class="session-dialog-countdown">{{ countdown }}</div>\r
      <div class="session-dialog-progress-bar">\r
        <div class="session-dialog-progress-fill" [style.width]="progressPercent + '%'"></div>\r
      </div>\r
    </div>\r
\r
    <!-- Message -->\r
    <p class="session-dialog-message">\r
      Would you like to extend your session by <strong>1 hour</strong> or logout now?\r
    </p>\r
\r
    <!-- Action Buttons -->\r
    <div class="session-dialog-actions">\r
      <button class="session-btn session-btn-logout" (click)="onLogout()">\r
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"\r
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>\r
          <polyline points="16 17 21 12 16 7"/>\r
          <line x1="21" y1="12" x2="9" y2="12"/>\r
        </svg>\r
        Logout Now\r
      </button>\r
      <button class="session-btn session-btn-extend" (click)="onExtend()">\r
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"\r
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
          <circle cx="12" cy="12" r="10"/>\r
          <polyline points="12 6 12 12 16 14"/>\r
        </svg>\r
        Extend +1 Hour\r
      </button>\r
    </div>\r
\r
  </div>\r
</div>`, styles: ['/* src/app/shared/session-expiry-dialog/session-expiry-dialog.component.css */\n.session-dialog-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(15, 23, 42, 0.55);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: overlayFadeIn 0.25s ease;\n}\n@keyframes overlayFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.session-dialog-box {\n  background: #ffffff;\n  border-radius: 16px;\n  width: 100%;\n  max-width: 420px;\n  margin: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.08);\n  animation: dialogSlideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes dialogSlideUp {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.session-dialog-topbar {\n  height: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b 0%,\n      #ef4444 100%);\n}\n.session-dialog-header {\n  padding: 28px 28px 0;\n  text-align: center;\n}\n.session-dialog-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #d97706;\n  margin-bottom: 14px;\n  animation: pulse 2s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.35);\n  }\n  50% {\n    transform: scale(1.06);\n    box-shadow: 0 0 0 10px rgba(245, 158, 11, 0);\n  }\n}\n.session-dialog-icon svg {\n  width: 26px;\n  height: 26px;\n}\n.session-dialog-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 6px;\n  letter-spacing: -0.3px;\n}\n.session-dialog-subtitle {\n  font-size: 13.5px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n}\n.session-dialog-countdown-wrapper {\n  margin: 22px 28px 0;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px 20px;\n  text-align: center;\n}\n.session-dialog-countdown-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  margin-bottom: 6px;\n}\n.session-dialog-countdown {\n  font-size: 36px;\n  font-weight: 800;\n  color: #ef4444;\n  letter-spacing: 2px;\n  font-variant-numeric: tabular-nums;\n  line-height: 1;\n  margin-bottom: 12px;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n}\n.session-dialog-progress-bar {\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.session-dialog-progress-fill {\n  height: 100%;\n  border-radius: 99px;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b 0%,\n      #ef4444 100%);\n  transition: width 1s linear;\n}\n.session-dialog-message {\n  margin: 18px 28px 0;\n  font-size: 13.5px;\n  color: #475569;\n  text-align: center;\n  line-height: 1.6;\n}\n.session-dialog-message strong {\n  color: #1e293b;\n}\n.session-dialog-actions {\n  display: flex;\n  gap: 12px;\n  padding: 20px 28px 28px;\n}\n.session-btn {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 11px 16px;\n  border-radius: 10px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.session-btn svg {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.session-btn-logout {\n  background: #fff1f2;\n  color: #e11d48;\n  border: 1.5px solid #fecdd3;\n}\n.session-btn-logout:hover {\n  background: #ffe4e6;\n  border-color: #fda4af;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(225, 29, 72, 0.18);\n}\n.session-btn-logout:active {\n  transform: translateY(0);\n}\n.session-btn-extend {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #ffffff;\n  border: 1.5px solid transparent;\n}\n.session-btn-extend:hover {\n  opacity: 0.92;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.35);\n}\n.session-btn-extend:active {\n  transform: translateY(0);\n}\n@media (max-width: 480px) {\n  .session-dialog-box {\n    border-radius: 14px;\n  }\n  .session-dialog-actions {\n    flex-direction: column;\n  }\n  .session-dialog-countdown {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=session-expiry-dialog.component.css.map */\n'] }]
  }], null, { expiryMs: [{
    type: Input
  }], extend: [{
    type: Output
  }], logout: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SessionExpiryDialogComponent, { className: "SessionExpiryDialogComponent", filePath: "src/app/shared/session-expiry-dialog/session-expiry-dialog.component.ts", lineNumber: 20 });
})();

// src/app/layout/default-layout/default-header/default-header.component.ts
var _c0 = () => ({ placement: "bottom-end" });
function DefaultHeaderComponent_img_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.companyLogo, \u0275\u0275sanitizeUrl)("title", ctx_r0.companyName);
  }
}
function DefaultHeaderComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.companyName, " ");
  }
}
function DefaultHeaderComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25)(1, "span", 13);
    \u0275\u0275text(2, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.departmentName, " ");
  }
}
function DefaultHeaderComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DefaultHeaderComponent_ng_template_29_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.departmentName);
  }
}
function DefaultHeaderComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-dropdown", 26)(1, "button", 27);
    \u0275\u0275element(2, "c-avatar", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 29)(4, "li", 30)(5, "div", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, DefaultHeaderComponent_ng_template_29_small_9_Template, 2, 1, "small", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275element(11, "hr", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "a", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(14, "svg", 36);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275element(18, "hr", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li")(20, "a", 37);
    \u0275\u0275listener("click", function DefaultHeaderComponent_ng_template_29_Template_a_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(21, "svg", 38);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("popperOptions", \u0275\u0275pureFunction0(12, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("caret", false);
    \u0275\u0275advance();
    \u0275\u0275property("size", "md");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.designationDisplay);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.departmentName);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 8, "HEADER_CHANGE_PASSWORD"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 10, "HEADER_LOGOUT"), " ");
  }
}
function DefaultHeaderComponent_app_session_expiry_dialog_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-session-expiry-dialog", 40);
    \u0275\u0275listener("extend", function DefaultHeaderComponent_app_session_expiry_dialog_31_Template_app_session_expiry_dialog_extend_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onExtendSession());
    })("logout", function DefaultHeaderComponent_app_session_expiry_dialog_31_Template_app_session_expiry_dialog_logout_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("expiryMs", ctx_r0.sessionExpiryMs);
  }
}
function DefaultHeaderComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "p", 43);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 44);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 45)(9, "button", 46);
    \u0275\u0275listener("click", function DefaultHeaderComponent_div_32_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.performLogout());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 47);
    \u0275\u0275listener("click", function DefaultHeaderComponent_div_32_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showLogoutConfirm = false);
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "HEADER_CONFIRM_LOGOUT_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "HEADER_CONFIRM_LOGOUT_MESSAGE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "HEADER_LOGOUT_YES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 10, "HEADER_LOGOUT_NO"));
  }
}
var _colorModeService;
var _DefaultHeaderComponent = class _DefaultHeaderComponent extends HeaderComponent {
  constructor(dialog, dataService, authService) {
    super();
    __privateAdd(this, _colorModeService);
    this.dialog = dialog;
    this.dataService = dataService;
    this.authService = authService;
    __privateSet(this, _colorModeService, inject(ColorModeService));
    this.colorMode = __privateGet(this, _colorModeService).colorMode;
    this.userName = "Guest";
    this.designation = "N/A";
    this.designationDisplay = "N/A";
    this.companyName = "";
    this.companyLogo = null;
    this.departmentName = "";
    this.buyerId = null;
    this.supplierId = null;
    this.showSessionDialog = false;
    this.sessionExpiryMs = 0;
    this.sidebarId = input("sidebar1", ...ngDevMode ? [{ debugName: "sidebarId" }] : []);
    this.colorModes = [
      { name: "light", text: "Light", icon: "cilSun" },
      { name: "dark", text: "Dark", icon: "cilMoon" },
      { name: "auto", text: "Auto", icon: "cilContrast" }
    ];
    this.icons = computed(() => {
      const currentMode = this.colorMode();
      return this.colorModes.find((mode) => mode.name === currentMode)?.icon ?? "cilSun";
    }, ...ngDevMode ? [{ debugName: "icons" }] : []);
    this.showLogoutConfirm = false;
    this.newMessages = [];
    this.newNotifications = [];
    this.newStatus = [];
    this.newTasks = [];
  }
  ngOnInit() {
    this.loadUserInfo();
    this.loadCompanyLogo();
    this.warningSub = this.authService.sessionWarning$.subscribe((expiryMs) => {
      if (expiryMs !== null) {
        this.sessionExpiryMs = expiryMs;
        this.showSessionDialog = true;
      } else {
        this.showSessionDialog = false;
      }
    });
  }
  ngOnDestroy() {
    this.warningSub?.unsubscribe();
  }
  // ============================================
  // LOAD USER INFO FROM localStorage
  // ============================================
  loadUserInfo() {
    try {
      const signinRaw = localStorage.getItem("signinData");
      const signinData = signinRaw ? JSON.parse(signinRaw) : null;
      this.userName = signinData?.fullName || localStorage.getItem("fullName") || "Guest";
      const role = signinData?.role || signinData?.userType || localStorage.getItem("role") || "";
      this.designation = role;
      this.designationDisplay = this.getRoleDisplayName(role);
      this.companyName = signinData?.buyer?.name || signinData?.supplier?.name || // ✅ also check supplier.name
      localStorage.getItem("companyName") || signinData?.companyName || "";
      this.departmentName = this.getDepartmentName(signinData);
      const buyerIdRaw = localStorage.getItem("buyerId");
      this.buyerId = buyerIdRaw ? Number(buyerIdRaw) : null;
      if (!this.buyerId && signinData?.buyer?.id) {
        this.buyerId = Number(signinData.buyer.id);
      }
      const supplierIdRaw = localStorage.getItem("supplierId");
      this.supplierId = supplierIdRaw ? Number(supplierIdRaw) : null;
      if (!this.supplierId && signinData?.supplier?.id) {
        this.supplierId = Number(signinData.supplier.id);
      }
      console.log("\u{1F50D} [HEADER] userName:", this.userName);
      console.log("\u{1F50D} [HEADER] companyName:", this.companyName);
      console.log("\u{1F50D} [HEADER] buyerId:", this.buyerId);
      console.log("\u{1F50D} [HEADER] supplierId:", this.supplierId);
      console.log("\u{1F50D} [HEADER] role:", role);
    } catch (error) {
      console.error("Error loading user info:", error);
      this.setDefaultValues();
    }
  }
  // ============================================
  // ✅ FIXED: LOAD COMPANY LOGO — handles BOTH buyer and supplier
  // ============================================
  // private loadCompanyLogo(): void {
  //   // ✅ Try buyer logo first
  //   if (this.buyerId) {
  //     console.log('🖼️ [HEADER] Loading buyer logo for buyerId:', this.buyerId);
  //     this.dataService.getBuyerLogoBase64(this.buyerId).subscribe({
  //       next: (logoData: string | null) => {
  //         if (logoData && logoData.trim() && logoData.trim() !== 'null') {
  //           this.companyLogo = logoData;
  //           console.log('✅ [HEADER] Buyer logo loaded successfully');
  //         } else {
  //           this.companyLogo = null;
  //           console.log('⚠️ [HEADER] No buyer logo — showing text:', this.companyName);
  //         }
  //       },
  //       error: (err: any) => {
  //         this.companyLogo = null;
  //         console.warn('⚠️ [HEADER] Buyer logo fetch error:', err?.status);
  //       }
  //     });
  //     return;
  //   }
  //   // ✅ Try supplier logo if no buyerId
  //   if (this.supplierId) {
  //     console.log('🖼️ [HEADER] Loading supplier logo for supplierId:', this.supplierId);
  //     this.dataService.getSupplierLogoBase64(this.supplierId).subscribe({
  //       next: (logoData: string | null) => {
  //         if (logoData && logoData.trim() && logoData.trim() !== 'null') {
  //           this.companyLogo = logoData;
  //           console.log('✅ [HEADER] Supplier logo loaded successfully');
  //         } else {
  //           this.companyLogo = null;
  //           console.log('⚠️ [HEADER] No supplier logo — showing text:', this.companyName);
  //         }
  //       },
  //       error: (err: any) => {
  //         this.companyLogo = null;
  //         console.warn('⚠️ [HEADER] Supplier logo fetch error:', err?.status);
  //       }
  //     });
  //     return;
  //   }
  //   // No ID at all — just show text badge
  //   console.log('⚠️ [HEADER] No buyerId or supplierId — showing companyName text badge');
  // }
  loadCompanyLogo() {
    const role = localStorage.getItem("role") || "";
    const userId = localStorage.getItem("userId");
    const cachedLogo = localStorage.getItem("logoBase64");
    if (cachedLogo && cachedLogo.trim() && cachedLogo !== "null") {
      this.companyLogo = cachedLogo;
      console.log("\u2705 [HEADER] Logo loaded from cache for role:", role);
      return;
    }
    if (role === "SUPER_ADMIN") {
      this.companyLogo = "assets/images/ITTI-Logo.png";
      console.log("\u2705 [HEADER] SuperAdmin logo set to hardcoded image");
      return;
    }
    if (role === "ORGANIZATION_ADMIN" && userId) {
      console.log("\u{1F5BC}\uFE0F [HEADER] Fetching OrgAdmin logo for userId:", userId);
      this.dataService.getOrgAdminLogoBase64(Number(userId)).subscribe({
        next: (logoData) => {
          if (logoData && logoData.trim() && logoData !== "null") {
            this.companyLogo = logoData;
            localStorage.setItem("logoBase64", logoData);
            console.log("\u2705 [HEADER] OrgAdmin logo loaded from API");
          } else {
            this.companyLogo = null;
            console.log("\u26A0\uFE0F [HEADER] No OrgAdmin logo \u2014 showing text:", this.companyName);
          }
        },
        error: (err) => {
          this.companyLogo = null;
          console.warn("\u26A0\uFE0F [HEADER] OrgAdmin logo fetch error:", err?.status);
        }
      });
      return;
    }
    if (this.buyerId) {
      this.dataService.getBuyerLogoBase64(this.buyerId).subscribe({
        next: (logoData) => {
          this.companyLogo = logoData && logoData.trim() && logoData !== "null" ? logoData : null;
          console.log(this.companyLogo ? "\u2705 [HEADER] Buyer logo loaded" : "\u26A0\uFE0F [HEADER] No buyer logo \u2014 showing text: " + this.companyName);
        },
        error: () => {
          this.companyLogo = null;
        }
      });
      return;
    }
    if (this.supplierId) {
      this.dataService.getSupplierLogoBase64(this.supplierId).subscribe({
        next: (logoData) => {
          this.companyLogo = logoData && logoData.trim() && logoData !== "null" ? logoData : null;
          console.log(this.companyLogo ? "\u2705 [HEADER] Supplier logo loaded" : "\u26A0\uFE0F [HEADER] No supplier logo \u2014 showing text: " + this.companyName);
        },
        error: () => {
          this.companyLogo = null;
        }
      });
      return;
    }
    console.log("\u26A0\uFE0F [HEADER] No ID found \u2014 showing companyName text badge");
  }
  // ============================================
  // HELPERS
  // ============================================
  getDepartmentName(signinData) {
    if (!signinData)
      return localStorage.getItem("departmentName") || "";
    if (signinData.department) {
      if (typeof signinData.department === "string")
        return signinData.department;
      if (signinData.department.departmentName)
        return signinData.department.departmentName;
      if (signinData.department.name)
        return signinData.department.name;
    }
    return localStorage.getItem("departmentName") || "";
  }
  getRoleDisplayName(role) {
    const roleMap = {
      SUPER_ADMIN: "Super Admin",
      ORGANIZATION_ADMIN: "Organization Admin",
      CEO: "CEO",
      COO: "COO",
      MANAGER: "Manager",
      PROCUREMENT: "Procurement Manager",
      PROCUREMENT_OPERATOR: "Procurement",
      FINANCE: "Finance Manager",
      ADMIN: "Administrator",
      ROLE_BUYER: "RFQ Creator",
      ROLE_SUPPLIER: "Supplier"
    };
    return roleMap[role] || role || "User";
  }
  setDefaultValues() {
    this.userName = "Guest";
    this.designation = "N/A";
    this.designationDisplay = "N/A";
    this.companyName = "";
    this.departmentName = "";
    this.companyLogo = null;
    this.buyerId = null;
    this.supplierId = null;
  }
  onExtendSession() {
    this.showSessionDialog = false;
    this.authService.extendSession();
  }
  // Rename the old logout() trigger to this:
  logout() {
    this.showLogoutConfirm = true;
  }
  // The actual logout logic moves here:
  performLogout() {
    this.showLogoutConfirm = false;
    this.showSessionDialog = false;
    this.authService.logout();
  }
};
_colorModeService = new WeakMap();
_DefaultHeaderComponent.\u0275fac = function DefaultHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultHeaderComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService));
};
_DefaultHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DefaultHeaderComponent, selectors: [["app-default-header"]], inputs: { sidebarId: [1, "sidebarId"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 33, vars: 14, consts: [["userDropdown", ""], [1, "border-bottom", "header-wrapper", 3, "fluid"], [1, "header-flex-container"], [1, "header-section", "header-left"], ["cHeaderToggler", "", "toggle", "visible", "aria-label", "Toggle sidebar navigation", 1, "sidebar-toggle-btn", 3, "cSidebarToggle"], [1, "menu-icon"], [1, "company-logo-wrapper"], ["alt", "Company Logo", "class", "company-logo", 3, "src", "title", 4, "ngIf"], ["class", "company-name-badge", 4, "ngIf"], [1, "header-section", "header-center"], [1, "system-title"], [1, "user-info-line"], [1, "user-name"], [1, "separator"], [1, "user-designation"], ["class", "department-info", 4, "ngIf"], [1, "header-section", "header-right"], [1, "timer-wrapper"], [1, "avatar-wrapper"], [4, "ngTemplateOutlet"], [1, "px-4", "py-2", "bg-light", 3, "fluid"], [3, "expiryMs", "extend", "logout", 4, "ngIf"], ["class", "logout-confirm-overlay", 4, "ngIf"], ["alt", "Company Logo", 1, "company-logo", 3, "src", "title"], [1, "company-name-badge"], [1, "department-info"], ["variant", "nav-item", 3, "popperOptions"], ["cDropdownToggle", "", "aria-label", "Open user menu", 1, "avatar-btn", 3, "caret"], ["shape", "rounded-circle", "src", "assets/images/profile.jpg", "status", "success", "textColor", "primary", "alt", "User avatar", 1, "user-avatar", 3, "size"], ["cDropdownMenu", "", 1, "dropdown-menu-custom"], [1, "dropdown-header"], [1, "fw-bold", "text-dark"], [1, "text-muted"], ["class", "text-muted d-block", 4, "ngIf"], [1, "dropdown-divider", "m-0"], ["cDropdownItem", "", "routerLink", "/change-password", 1, "dropdown-item-custom"], ["cIcon", "", "name", "cilLockLocked", 1, "me-2"], ["cDropdownItem", "", 1, "dropdown-item-custom", "text-danger", 3, "click"], ["cIcon", "", "name", "cilAccountLogout", 1, "me-2"], [1, "text-muted", "d-block"], [3, "extend", "logout", "expiryMs"], [1, "logout-confirm-overlay"], [1, "logout-confirm-dialog"], [1, "logout-confirm-title"], [1, "logout-confirm-message"], [1, "logout-confirm-actions"], [1, "btn-confirm-yes", 3, "click"], [1, "btn-confirm-no", 3, "click"]], template: function DefaultHeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "c-container", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4)(5, "span", 5);
    \u0275\u0275text(6, "\u2630");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, DefaultHeaderComponent_img_8_Template, 1, 2, "img", 7)(9, DefaultHeaderComponent_div_9_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 9)(11, "h5", 10);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11)(15, "span", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 13);
    \u0275\u0275text(18, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 14);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, DefaultHeaderComponent_span_21_Template, 4, 1, "span", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 16)(23, "div", 17);
    \u0275\u0275element(24, "app-session-timer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 18);
    \u0275\u0275template(26, DefaultHeaderComponent_ng_container_26_Template, 1, 0, "ng-container", 19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "c-container", 20);
    \u0275\u0275element(28, "c-breadcrumb-router");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(29, DefaultHeaderComponent_ng_template_29_Template, 24, 13, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(31, DefaultHeaderComponent_app_session_expiry_dialog_31_Template, 1, 1, "app-session-expiry-dialog", 21)(32, DefaultHeaderComponent_div_32_Template, 15, 12, "div", 22);
  }
  if (rf & 2) {
    const userDropdown_r5 = \u0275\u0275reference(30);
    \u0275\u0275advance();
    \u0275\u0275property("fluid", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("cSidebarToggle", ctx.sidebarId());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.companyLogo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.companyLogo && ctx.companyName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "HEADER_SYSTEM_TITLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.userName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.designationDisplay);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.departmentName);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngTemplateOutlet", userDropdown_r5);
    \u0275\u0275advance();
    \u0275\u0275property("fluid", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.showSessionDialog);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showLogoutConfirm);
  }
}, dependencies: [
  CommonModule,
  NgIf,
  NgTemplateOutlet,
  ContainerComponent,
  HeaderTogglerDirective,
  SidebarToggleDirective,
  IconDirective,
  RouterLink,
  DropdownComponent,
  DropdownToggleDirective,
  AvatarComponent,
  DropdownMenuDirective,
  DropdownItemDirective,
  MatDialogModule,
  SessionTimerComponent,
  BreadcrumbRouterComponent,
  SessionExpiryDialogComponent,
  TranslatePipe
], styles: ["\n\n.logout-confirm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.logout-confirm-dialog[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  padding: 28px 32px;\n  min-width: 300px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n  text-align: center;\n}\n.logout-confirm-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #222;\n  margin-bottom: 8px;\n}\n.logout-confirm-message[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #555;\n  margin-bottom: 24px;\n}\n.logout-confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.btn-confirm-yes[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n  background: #dc3545;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn-confirm-yes[_ngcontent-%COMP%]:hover {\n  background: #b02a37;\n}\n.btn-confirm-no[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n  background: #f0f0f0;\n  color: #333;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn-confirm-no[_ngcontent-%COMP%]:hover {\n  background: #ddd;\n}\n.header-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 12px 24px !important;\n  position: relative;\n}\n.header-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  min-height: 60px;\n  width: 100%;\n}\n.header-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.header-left[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  gap: 12px;\n  z-index: 10;\n}\n.sidebar-toggle-btn[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  color: #4a5568 !important;\n  padding: 8px !important;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  min-height: 40px;\n  margin-right: 4px;\n}\n.sidebar-toggle-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px !important;\n  height: 24px !important;\n  display: block !important;\n}\n.sidebar-toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #667eea !important;\n  transform: scale(1.1);\n  background-color: rgba(102, 126, 234, 0.1) !important;\n  border-radius: 6px;\n}\n.sidebar-toggle-btn[_ngcontent-%COMP%]:focus, \n.sidebar-toggle-btn[_ngcontent-%COMP%]:active {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.company-logo-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.company-logo[_ngcontent-%COMP%] {\n  height: 70px;\n  max-width: 400px;\n  width: auto;\n  object-fit: contain;\n  transition: transform 0.2s ease;\n  border-radius: 6px;\n  padding: 6px;\n  background-color: white;\n}\n.company-logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.company-name-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);\n  white-space: nowrap;\n}\n.header-center[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  z-index: 5;\n  pointer-events: none;\n}\n.header-center[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.system-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n.user-info-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  font-size: 14px;\n  color: #718096;\n  line-height: 1.4;\n  white-space: nowrap;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2d3748;\n}\n.user-designation[_ngcontent-%COMP%] {\n  color: #718096;\n}\n.department-info[_ngcontent-%COMP%] {\n  color: #718096;\n}\n.separator[_ngcontent-%COMP%] {\n  margin: 0 4px;\n  color: #cbd5e0;\n}\n.header-right[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  gap: 16px;\n  z-index: 10;\n}\n.timer-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.avatar-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.avatar-btn[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  cursor: pointer;\n}\n.avatar-btn[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 2px solid transparent;\n}\n.user-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  border-color: #667eea;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.dropdown-menu-custom[_ngcontent-%COMP%] {\n  min-width: 240px;\n  border: none;\n  border-radius: 12px;\n  padding: 8px;\n  margin-top: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  background-color: #ffffff !important;\n  color: #212529 !important;\n}\n.dropdown-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background-color: #f7fafc;\n  border-radius: 8px;\n  margin-bottom: 4px;\n}\n.dropdown-header[_ngcontent-%COMP%]   .fw-bold[_ngcontent-%COMP%] {\n  color: #1a1a2e !important;\n  font-size: 0.95rem;\n}\n.dropdown-header[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%], \n.dropdown-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n.dropdown-item-custom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  font-size: 14px;\n  cursor: pointer;\n  color: #374151 !important;\n  background-color: transparent !important;\n  text-decoration: none;\n}\n.dropdown-item-custom[_ngcontent-%COMP%]:hover {\n  background-color: #f7fafc;\n  color: #667eea;\n  transform: translateX(4px);\n}\n.dropdown-item-custom.text-danger[_ngcontent-%COMP%] {\n  color: #e53e3e !important;\n}\n.dropdown-item-custom.text-danger[_ngcontent-%COMP%]:hover {\n  background-color: #fff5f5;\n  color: #e53e3e;\n}\n.dropdown-item-custom[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: inherit;\n}\n.dropdown-divider[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-color: #e9ecef !important;\n}\n@media (max-width: 991px) {\n  .system-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .user-info-line[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .company-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    max-width: 150px;\n  }\n  .company-name-badge[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 13px;\n  }\n}\n[data-theme][_ngcontent-%COMP%]   .dropdown-menu-custom[_ngcontent-%COMP%], \n[data-theme][_ngcontent-%COMP%]   .dropdown-menu-custom[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n}\n[data-theme][_ngcontent-%COMP%]   .dropdown-menu-custom[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n}\n[data-theme][_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .fw-bold[_ngcontent-%COMP%] {\n  color: #1a1a2e !important;\n}\n[data-theme][_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n[data-theme][_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n[data-theme][_ngcontent-%COMP%]   .dropdown-item-custom[_ngcontent-%COMP%] {\n  color: #374151 !important;\n}\n[data-theme][_ngcontent-%COMP%]   .dropdown-item-custom.text-danger[_ngcontent-%COMP%] {\n  color: #e53e3e !important;\n}\n@media (max-width: 767px) {\n  .header-wrapper[_ngcontent-%COMP%] {\n    padding: 10px 16px !important;\n  }\n  .system-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .user-info-line[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .department-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .company-logo[_ngcontent-%COMP%] {\n    height: 36px;\n    max-width: 120px;\n  }\n  .company-name-badge[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 12px;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n}\n@media (max-width: 575px) {\n  .header-wrapper[_ngcontent-%COMP%] {\n    padding: 8px 12px !important;\n  }\n  .system-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n    letter-spacing: 0.5px;\n  }\n  .user-info-line[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .company-logo[_ngcontent-%COMP%] {\n    height: 32px;\n    max-width: 100px;\n  }\n  .company-name-badge[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    font-size: 11px;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .user-avatar[_ngcontent-%COMP%] {\n    --cui-avatar-size: 36px;\n  }\n}\n@media (max-width: 400px) {\n  .system-title[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .user-info-line[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .company-logo[_ngcontent-%COMP%] {\n    height: 28px;\n    max-width: 80px;\n  }\n  .separator[_ngcontent-%COMP%] {\n    margin: 0 2px;\n  }\n  .header-left[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n}\n/*# sourceMappingURL=default-header.component.css.map */"] });
var DefaultHeaderComponent = _DefaultHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-default-header", imports: [
      CommonModule,
      ContainerComponent,
      HeaderTogglerDirective,
      SidebarToggleDirective,
      IconDirective,
      HeaderNavComponent,
      RouterLink,
      NgTemplateOutlet,
      DropdownComponent,
      DropdownToggleDirective,
      AvatarComponent,
      DropdownMenuDirective,
      DropdownItemDirective,
      MatDialogModule,
      SessionTimerComponent,
      BreadcrumbRouterComponent,
      SessionExpiryDialogComponent,
      TranslatePipe
    ], template: `<!-- <ng-container>\r
  <c-container [fluid]="true" class="border-bottom header-wrapper">\r
    \r
    <div class="header-flex-container">\r
      \r
      <div class="header-section header-left">\r
        <button\r
          [cSidebarToggle]="sidebarId()"\r
          cHeaderToggler\r
          class="sidebar-toggle-btn"\r
          toggle="visible"\r
          aria-label="Toggle sidebar navigation"\r
        >\r
           <span class="menu-icon">\u2630</span>\r
        </button>\r
\r
        <div class="company-logo-wrapper">\r
          <img \r
            *ngIf="companyLogo" \r
            [src]="companyLogo" \r
            alt="Company Logo" \r
            class="company-logo"\r
            [title]="companyName" />\r
          \r
          <div *ngIf="!companyLogo && companyName" class="company-name-badge">\r
            {{ companyName }} \r
          </div>\r
          \r
        \r
        </div>\r
      </div>\r
\r
      <div class="header-section header-center">\r
        <h5 class="system-title">SUPPLIER MANAGEMENT SYSTEM</h5>\r
        <div class="user-info-line">\r
          <span class="user-name">{{ userName }}</span>\r
          <span class="separator">-</span>\r
          <span class="user-designation">{{ designationDisplay }}</span>\r
          <span *ngIf="departmentName" class="department-info">\r
            <span class="separator">\u2022</span>\r
            {{ departmentName }}\r
          </span>\r
        </div>\r
      </div>\r
\r
      <div class="header-section header-right">\r
        <div class="timer-wrapper">\r
          <app-session-timer></app-session-timer>\r
        </div>\r
        <div class="avatar-wrapper">\r
          <ng-container *ngTemplateOutlet="userDropdown"></ng-container>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </c-container>\r
\r
  <c-container [fluid]="true" class="px-4 py-2 bg-light">\r
    <c-breadcrumb-router></c-breadcrumb-router>\r
  </c-container>\r
</ng-container>\r
\r
\r
<ng-template #userDropdown>\r
  <c-dropdown [popperOptions]="{ placement: 'bottom-end' }" variant="nav-item">\r
    <button [caret]="false" cDropdownToggle class="avatar-btn" aria-label="Open user menu">\r
      <c-avatar\r
        shape="rounded-circle"\r
        [size]="'md'"\r
        src="assets/images/profile.jpg"\r
        status="success"\r
        textColor="primary"\r
        alt="User avatar"\r
        class="user-avatar"\r
      />\r
    </button>\r
    <ul cDropdownMenu class="dropdown-menu-custom">\r
      \r
      <li class="dropdown-header">\r
        <div class="fw-bold text-dark">{{ userName }}</div>\r
        <small class="text-muted">{{ designationDisplay }}</small>\r
        <small *ngIf="departmentName" class="text-muted d-block">{{ departmentName }}</small>\r
      </li>\r
\r
      <li><hr class="dropdown-divider m-0"></li>\r
\r
      <li>\r
        <a cDropdownItem routerLink="/change-password" class="dropdown-item-custom">\r
          <svg cIcon class="me-2" name="cilLockLocked"></svg>\r
          Change Password\r
        </a>\r
      </li>\r
      \r
      <li><hr class="dropdown-divider m-0"></li>\r
      \r
      <li>\r
        <a cDropdownItem (click)="logout()" class="dropdown-item-custom text-danger">\r
          <svg cIcon class="me-2" name="cilAccountLogout"></svg>\r
          Logout\r
        </a>\r
      </li>\r
    </ul>\r
  </c-dropdown>\r
</ng-template>\r
\r
<app-session-expiry-dialog\r
  *ngIf="showSessionDialog"\r
  [expiryMs]="sessionExpiryMs"\r
  (extend)="onExtendSession()"\r
  (logout)="logout()"\r
></app-session-expiry-dialog> -->\r
\r
<ng-container>\r
  <c-container [fluid]="true" class="border-bottom header-wrapper">\r
    \r
    <div class="header-flex-container">\r
      \r
      <div class="header-section header-left">\r
        <button\r
          [cSidebarToggle]="sidebarId()"\r
          cHeaderToggler\r
          class="sidebar-toggle-btn"\r
          toggle="visible"\r
          aria-label="Toggle sidebar navigation"\r
        >\r
           <span class="menu-icon">\u2630</span>\r
        </button>\r
\r
        <div class="company-logo-wrapper">\r
          <img \r
            *ngIf="companyLogo" \r
            [src]="companyLogo" \r
            alt="Company Logo" \r
            class="company-logo"\r
            [title]="companyName" />\r
          \r
          <div *ngIf="!companyLogo && companyName" class="company-name-badge">\r
            {{ companyName }} \r
          </div>\r
          \r
          <!-- <div *ngIf="!companyLogo && !companyName" class="company-name-badge">\r
            ITTI Pvt Ltd Bangalore\r
          </div> -->\r
        </div>\r
      </div>\r
\r
      <div class="header-section header-center">\r
        <h5 class="system-title">{{ 'HEADER_SYSTEM_TITLE' | translate }}</h5>\r
        <div class="user-info-line">\r
          <span class="user-name">{{ userName }}</span>\r
          <span class="separator">-</span>\r
          <span class="user-designation">{{ designationDisplay }}</span>\r
          <span *ngIf="departmentName" class="department-info">\r
            <span class="separator">\u2022</span>\r
            {{ departmentName }}\r
          </span>\r
        </div>\r
      </div>\r
\r
      <div class="header-section header-right">\r
        <div class="timer-wrapper">\r
          <app-session-timer></app-session-timer>\r
        </div>\r
        <div class="avatar-wrapper">\r
          <ng-container *ngTemplateOutlet="userDropdown"></ng-container>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </c-container>\r
\r
  <c-container [fluid]="true" class="px-4 py-2 bg-light">\r
    <c-breadcrumb-router></c-breadcrumb-router>\r
  </c-container>\r
</ng-container>\r
\r
\r
<ng-template #userDropdown>\r
  <c-dropdown [popperOptions]="{ placement: 'bottom-end' }" variant="nav-item">\r
    <button [caret]="false" cDropdownToggle class="avatar-btn" aria-label="Open user menu">\r
      <c-avatar\r
        shape="rounded-circle"\r
        [size]="'md'"\r
        src="assets/images/profile.jpg"\r
        status="success"\r
        textColor="primary"\r
        alt="User avatar"\r
        class="user-avatar"\r
      />\r
    </button>\r
    <ul cDropdownMenu class="dropdown-menu-custom">\r
\r
      <li class="dropdown-header">\r
        <div class="fw-bold text-dark">{{ userName }}</div>\r
        <small class="text-muted">{{ designationDisplay }}</small>\r
        <small *ngIf="departmentName" class="text-muted d-block">{{ departmentName }}</small>\r
      </li>\r
\r
      <li><hr class="dropdown-divider m-0"></li>\r
\r
      <li>\r
        <a cDropdownItem routerLink="/change-password" class="dropdown-item-custom">\r
          <svg cIcon class="me-2" name="cilLockLocked"></svg>\r
          {{ 'HEADER_CHANGE_PASSWORD' | translate }}\r
        </a>\r
      </li>\r
\r
      <li><hr class="dropdown-divider m-0"></li>\r
\r
      <li>\r
        <a cDropdownItem (click)="logout()" class="dropdown-item-custom text-danger">\r
          <svg cIcon class="me-2" name="cilAccountLogout"></svg>\r
          {{ 'HEADER_LOGOUT' | translate }}\r
        </a>\r
      </li>\r
    </ul>\r
  </c-dropdown>\r
</ng-template>\r
\r
\r
\r
<app-session-expiry-dialog\r
  *ngIf="showSessionDialog"\r
  [expiryMs]="sessionExpiryMs"\r
  (extend)="onExtendSession()"\r
  (logout)="logout()"\r
></app-session-expiry-dialog>\r
\r
\r
\r
<!-- Add this block at the very end, alongside the session expiry dialog -->\r
<div *ngIf="showLogoutConfirm" class="logout-confirm-overlay">\r
  <div class="logout-confirm-dialog">\r
    <p class="logout-confirm-title">{{ 'HEADER_CONFIRM_LOGOUT_TITLE' | translate }}</p>\r
    <p class="logout-confirm-message">{{ 'HEADER_CONFIRM_LOGOUT_MESSAGE' | translate }}</p>\r
    <div class="logout-confirm-actions">\r
      <button class="btn-confirm-yes" (click)="performLogout()">{{ 'HEADER_LOGOUT_YES' | translate }}</button>\r
      <button class="btn-confirm-no" (click)="showLogoutConfirm = false">{{ 'HEADER_LOGOUT_NO' | translate }}</button>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/layout/default-layout/default-header/default-header.component.css */\n.logout-confirm-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.logout-confirm-dialog {\n  background: #fff;\n  border-radius: 10px;\n  padding: 28px 32px;\n  min-width: 300px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n  text-align: center;\n}\n.logout-confirm-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #222;\n  margin-bottom: 8px;\n}\n.logout-confirm-message {\n  font-size: 0.95rem;\n  color: #555;\n  margin-bottom: 24px;\n}\n.logout-confirm-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.btn-confirm-yes {\n  padding: 8px 24px;\n  background: #dc3545;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn-confirm-yes:hover {\n  background: #b02a37;\n}\n.btn-confirm-no {\n  padding: 8px 24px;\n  background: #f0f0f0;\n  color: #333;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn-confirm-no:hover {\n  background: #ddd;\n}\n.header-wrapper {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 12px 24px !important;\n  position: relative;\n}\n.header-flex-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  min-height: 60px;\n  width: 100%;\n}\n.header-section {\n  display: flex;\n  align-items: center;\n}\n.header-left {\n  flex: 0 0 auto;\n  gap: 12px;\n  z-index: 10;\n}\n.sidebar-toggle-btn {\n  background: transparent !important;\n  border: none !important;\n  color: #4a5568 !important;\n  padding: 8px !important;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  min-height: 40px;\n  margin-right: 4px;\n}\n.sidebar-toggle-btn svg {\n  width: 24px !important;\n  height: 24px !important;\n  display: block !important;\n}\n.sidebar-toggle-btn:hover {\n  color: #667eea !important;\n  transform: scale(1.1);\n  background-color: rgba(102, 126, 234, 0.1) !important;\n  border-radius: 6px;\n}\n.sidebar-toggle-btn:focus,\n.sidebar-toggle-btn:active {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.company-logo-wrapper {\n  display: flex;\n  align-items: center;\n}\n.company-logo {\n  height: 70px;\n  max-width: 400px;\n  width: auto;\n  object-fit: contain;\n  transition: transform 0.2s ease;\n  border-radius: 6px;\n  padding: 6px;\n  background-color: white;\n}\n.company-logo:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.company-name-badge {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);\n  white-space: nowrap;\n}\n.header-center {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  z-index: 5;\n  pointer-events: none;\n}\n.header-center * {\n  pointer-events: auto;\n}\n.system-title {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n.user-info-line {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  font-size: 14px;\n  color: #718096;\n  line-height: 1.4;\n  white-space: nowrap;\n}\n.user-name {\n  font-weight: 600;\n  color: #2d3748;\n}\n.user-designation {\n  color: #718096;\n}\n.department-info {\n  color: #718096;\n}\n.separator {\n  margin: 0 4px;\n  color: #cbd5e0;\n}\n.header-right {\n  flex: 0 0 auto;\n  gap: 16px;\n  z-index: 10;\n}\n.timer-wrapper {\n  display: flex;\n  align-items: center;\n}\n.avatar-wrapper {\n  display: flex;\n  align-items: center;\n}\n.avatar-btn {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  cursor: pointer;\n}\n.avatar-btn:focus {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.user-avatar {\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 2px solid transparent;\n}\n.user-avatar:hover {\n  transform: scale(1.1);\n  border-color: #667eea;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.dropdown-menu-custom {\n  min-width: 240px;\n  border: none;\n  border-radius: 12px;\n  padding: 8px;\n  margin-top: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  background-color: #ffffff !important;\n  color: #212529 !important;\n}\n.dropdown-header {\n  padding: 12px 16px;\n  background-color: #f7fafc;\n  border-radius: 8px;\n  margin-bottom: 4px;\n}\n.dropdown-header .fw-bold {\n  color: #1a1a2e !important;\n  font-size: 0.95rem;\n}\n.dropdown-header .text-muted,\n.dropdown-header small {\n  color: #6c757d !important;\n}\n.dropdown-item-custom {\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  font-size: 14px;\n  cursor: pointer;\n  color: #374151 !important;\n  background-color: transparent !important;\n  text-decoration: none;\n}\n.dropdown-item-custom:hover {\n  background-color: #f7fafc;\n  color: #667eea;\n  transform: translateX(4px);\n}\n.dropdown-item-custom.text-danger {\n  color: #e53e3e !important;\n}\n.dropdown-item-custom.text-danger:hover {\n  background-color: #fff5f5;\n  color: #e53e3e;\n}\n.dropdown-item-custom svg {\n  width: 18px;\n  height: 18px;\n  color: inherit;\n}\n.dropdown-divider {\n  margin: 4px 0;\n  border-color: #e9ecef !important;\n}\n@media (max-width: 991px) {\n  .system-title {\n    font-size: 18px;\n  }\n  .user-info-line {\n    font-size: 13px;\n  }\n  .company-logo {\n    height: 40px;\n    max-width: 150px;\n  }\n  .company-name-badge {\n    padding: 8px 16px;\n    font-size: 13px;\n  }\n}\n[data-theme] .dropdown-menu-custom,\n[data-theme] .dropdown-menu-custom * {\n}\n[data-theme] .dropdown-menu-custom {\n  background-color: #ffffff !important;\n}\n[data-theme] .dropdown-header .fw-bold {\n  color: #1a1a2e !important;\n}\n[data-theme] .dropdown-header small,\n[data-theme] .dropdown-header .text-muted {\n  color: #6c757d !important;\n}\n[data-theme] .dropdown-item-custom {\n  color: #374151 !important;\n}\n[data-theme] .dropdown-item-custom.text-danger {\n  color: #e53e3e !important;\n}\n@media (max-width: 767px) {\n  .header-wrapper {\n    padding: 10px 16px !important;\n  }\n  .system-title {\n    font-size: 16px;\n  }\n  .user-info-line {\n    font-size: 12px;\n  }\n  .department-info {\n    display: none;\n  }\n  .company-logo {\n    height: 36px;\n    max-width: 120px;\n  }\n  .company-name-badge {\n    padding: 6px 12px;\n    font-size: 12px;\n  }\n  .header-right {\n    gap: 12px;\n  }\n}\n@media (max-width: 575px) {\n  .header-wrapper {\n    padding: 8px 12px !important;\n  }\n  .system-title {\n    font-size: 14px;\n    letter-spacing: 0.5px;\n  }\n  .user-info-line {\n    font-size: 11px;\n  }\n  .company-logo {\n    height: 32px;\n    max-width: 100px;\n  }\n  .company-name-badge {\n    padding: 6px 10px;\n    font-size: 11px;\n  }\n  .header-right {\n    gap: 10px;\n  }\n  .user-avatar {\n    --cui-avatar-size: 36px;\n  }\n}\n@media (max-width: 400px) {\n  .system-title {\n    font-size: 12px;\n  }\n  .user-info-line {\n    font-size: 10px;\n  }\n  .company-logo {\n    height: 28px;\n    max-width: 80px;\n  }\n  .separator {\n    margin: 0 2px;\n  }\n  .header-left {\n    gap: 8px;\n  }\n  .header-right {\n    gap: 8px;\n  }\n}\n/*# sourceMappingURL=default-header.component.css.map */\n"] }]
  }], () => [{ type: MatDialog }, { type: DataService }, { type: AuthService }], { sidebarId: [{ type: Input, args: [{ isSignal: true, alias: "sidebarId", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DefaultHeaderComponent, { className: "DefaultHeaderComponent", filePath: "src/app/layout/default-layout/default-header/default-header.component.ts", lineNumber: 334 });
})();

// node_modules/@angular/cdk/fesm2022/platform.mjs
var PlatformModule = class _PlatformModule {
  static \u0275fac = function PlatformModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PlatformModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar-smooth-scroll.mjs
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
    let currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    let currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function LinearEasing(x) {
  return x;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }
  let sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    let lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    let dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    let guessForT = intervalStart + dist * kSampleStepSize;
    let initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing(x) {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
}
var SMOOTH_SCROLL_OPTIONS = new InjectionToken("SMOOTH_SCROLL_OPTIONS");
var _SmoothScrollManager = class _SmoothScrollManager {
  get _w() {
    return this._document.defaultView;
  }
  /**
   * Timing method
   */
  get _now() {
    return this._w.performance && this._w.performance.now ? this._w.performance.now.bind(this._w.performance) : Date.now;
  }
  constructor(_document, _platform, customDefaultOptions) {
    this._document = _document;
    this._platform = _platform;
    this._onGoingScrolls = /* @__PURE__ */ new Map();
    this._defaultOptions = __spreadValues({
      duration: 468,
      easing: {
        x1: 0.42,
        y1: 0,
        x2: 0.58,
        y2: 1
      }
    }, customDefaultOptions);
  }
  /**
   * changes scroll position inside an element
   */
  _scrollElement(el, x, y) {
    el.scrollLeft = x;
    el.scrollTop = y;
  }
  /**
   * Handles a given parameter of type HTMLElement, ElementRef or selector
   */
  _getElement(el, parent) {
    if (typeof el === "string") {
      return (parent || this._document).querySelector(el);
    }
    return coerceElement(el);
  }
  /**
   * Initializes a destroyer stream, re-initializes it if the element is already being scrolled
   */
  _initSmoothScroll(el) {
    if (this._onGoingScrolls.has(el)) {
      this._onGoingScrolls.get(el).next();
    }
    return this._onGoingScrolls.set(el, new Subject()).get(el);
  }
  /**
   * Checks if smooth scroll has reached, cleans up the smooth scroll stream and resolves its promise
   */
  _isFinished(context, destroyed, resolve) {
    if (context.currentX !== context.x || context.currentY !== context.y) {
      return true;
    }
    destroyed.next();
    resolve();
    return false;
  }
  /**
   * Terminates an ongoing smooth scroll
   */
  _interrupted(el, destroyed) {
    return merge(fromEvent(el, "wheel", {
      passive: true,
      capture: true
    }), fromEvent(el, "touchmove", {
      passive: true,
      capture: true
    }), destroyed).pipe(take(1));
  }
  /**
   * Deletes the destroyer function, runs if the smooth scroll has finished or interrupted
   */
  _destroy(el, destroyed) {
    destroyed.complete();
    this._onGoingScrolls.delete(el);
  }
  /**
   * A function called recursively that, given a context, steps through scrolling
   */
  _step(context) {
    return new Observable((subscriber) => {
      let elapsed = (this._now() - context.startTime) / context.duration;
      elapsed = elapsed > 1 ? 1 : elapsed;
      const value = context.easing(elapsed);
      context.currentX = context.startX + (context.x - context.startX) * value;
      context.currentY = context.startY + (context.y - context.startY) * value;
      this._scrollElement(context.scrollable, context.currentX, context.currentY);
      animationFrameScheduler.schedule(() => subscriber.next(context));
    });
  }
  _applyScrollToOptions(el, options) {
    if (!options.duration) {
      this._scrollElement(el, options.left, options.top);
      return Promise.resolve();
    }
    const destroyed = this._initSmoothScroll(el);
    const context = {
      scrollable: el,
      startTime: this._now(),
      startX: el.scrollLeft,
      startY: el.scrollTop,
      x: options.left == null ? el.scrollLeft : ~~options.left,
      y: options.top == null ? el.scrollTop : ~~options.top,
      duration: options.duration,
      easing: bezier(options.easing.x1, options.easing.y1, options.easing.x2, options.easing.y2)
    };
    return new Promise((resolve) => {
      of(null).pipe(expand(() => this._step(context).pipe(takeWhile((currContext) => this._isFinished(currContext, destroyed, resolve)))), takeUntil(this._interrupted(el, destroyed)), finalize(() => this._destroy(el, destroyed))).subscribe();
    });
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param scrollable element
   * @param customOptions specified the offsets to scroll to.
   */
  scrollTo(scrollable, customOptions) {
    if (isPlatformBrowser(this._platform)) {
      const el = this._getElement(scrollable);
      const isRtl = getComputedStyle(el).direction === "rtl";
      const rtlScrollAxisType = getRtlScrollAxisType();
      const options = __spreadValues(__spreadValues(__spreadValues({}, this._defaultOptions), customOptions), {
        // Rewrite start & end offsets as right or left offsets.
        left: customOptions.left == null ? isRtl ? customOptions.end : customOptions.start : customOptions.left,
        right: customOptions.right == null ? isRtl ? customOptions.start : customOptions.end : customOptions.right
      });
      if (options.bottom != null) {
        options.top = el.scrollHeight - el.clientHeight - options.bottom;
      }
      if (isRtl && rtlScrollAxisType !== 0) {
        if (options.left != null) {
          options.right = el.scrollWidth - el.clientWidth - options.left;
        }
        if (rtlScrollAxisType === 2) {
          options.left = options.right;
        } else if (rtlScrollAxisType === 1) {
          options.left = options.right ? -options.right : options.right;
        }
      } else {
        if (options.right != null) {
          options.left = el.scrollWidth - el.clientWidth - options.right;
        }
      }
      return this._applyScrollToOptions(el, options);
    }
    return Promise.resolve();
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(scrollable, target, customOptions = {}) {
    const scrollableEl = this._getElement(scrollable);
    const targetEl = this._getElement(target, scrollableEl);
    const options = __spreadValues(__spreadValues({}, customOptions), {
      left: targetEl.offsetLeft + (customOptions.left || 0),
      top: targetEl.offsetTop + (customOptions.top || 0)
    });
    return targetEl ? this.scrollTo(scrollableEl, options) : Promise.resolve();
  }
};
_SmoothScrollManager.\u0275fac = function SmoothScrollManager_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SmoothScrollManager)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(SMOOTH_SCROLL_OPTIONS, 8));
};
_SmoothScrollManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SmoothScrollManager,
  factory: _SmoothScrollManager.\u0275fac,
  providedIn: "root"
});
var SmoothScrollManager = _SmoothScrollManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScrollManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [SMOOTH_SCROLL_OPTIONS]
      }]
    }];
  }, null);
})();
var _SmoothScroll = class _SmoothScroll {
  constructor(element, smoothScroll) {
    this.element = element;
    this.smoothScroll = smoothScroll;
  }
  scrollTo(options) {
    return this.smoothScroll.scrollTo(this.element, options);
  }
  scrollToElement(target, options) {
    return this.smoothScroll.scrollToElement(this.element, target, options);
  }
};
_SmoothScroll.\u0275fac = function SmoothScroll_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SmoothScroll)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(SmoothScrollManager));
};
_SmoothScroll.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SmoothScroll,
  selectors: [["", "smoothScroll", ""], ["", "smooth-scroll", ""]],
  exportAs: ["smoothScroll"]
});
var SmoothScroll = _SmoothScroll;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScroll, [{
    type: Directive,
    args: [{
      selector: "[smoothScroll], [smooth-scroll]",
      exportAs: "smoothScroll",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: SmoothScrollManager
    }];
  }, null);
})();

// node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar.mjs
var _c02 = ["scrollbarY"];
var _c1 = ["scrollbarX"];
var _c2 = ["*"];
function NgScrollbar_ng_container_5_scrollbar_x_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "scrollbar-x", null, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("scrollable", ctx_r0.state.isHorizontallyScrollable)("fit", ctx_r0.state.verticalUsed);
  }
}
function NgScrollbar_ng_container_5_scrollbar_y_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "scrollbar-y", null, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("scrollable", ctx_r0.state.isVerticallyScrollable)("fit", ctx_r0.state.horizontalUsed);
  }
}
function NgScrollbar_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NgScrollbar_ng_container_5_scrollbar_x_1_Template, 2, 2, "scrollbar-x", 5)(2, NgScrollbar_ng_container_5_scrollbar_y_2_Template, 2, 2, "scrollbar-y", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.state.horizontalUsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.state.verticalUsed);
  }
}
var _NgAttr = class _NgAttr {
  constructor(el) {
    this.el = el;
  }
  set ngAttr(attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      this.el.nativeElement.setAttribute(key, value);
    }
  }
};
_NgAttr.\u0275fac = function NgAttr_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgAttr)(\u0275\u0275directiveInject(ElementRef));
};
_NgAttr.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgAttr,
  selectors: [["", "ngAttr", ""]],
  inputs: {
    ngAttr: "ngAttr"
  }
});
var NgAttr = _NgAttr;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgAttr, [{
    type: Directive,
    args: [{
      selector: "[ngAttr]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    ngAttr: [{
      type: Input
    }]
  });
})();
function preventSelection(doc) {
  return tap(() => {
    doc.onselectstart = () => false;
  });
}
function enableSelection(doc) {
  return tap(() => {
    doc.onselectstart = null;
  });
}
function stopPropagation() {
  return tap((e) => e.stopPropagation());
}
function isWithinBounds(e, rect) {
  return e.clientX >= rect.left && e.clientX <= rect.left + rect.width && e.clientY >= rect.top && e.clientY <= rect.top + rect.height;
}
var _ScrollViewport = class _ScrollViewport {
  // Get viewport size, clientHeight or clientWidth
  get clientHeight() {
    return this.nativeElement.clientHeight;
  }
  get clientWidth() {
    return this.nativeElement.clientWidth;
  }
  get scrollHeight() {
    return this.nativeElement.scrollHeight;
  }
  get scrollWidth() {
    return this.nativeElement.scrollWidth;
  }
  // Get viewport scroll offset, scrollTop or scrollLeft
  get scrollTop() {
    return this.nativeElement.scrollTop;
  }
  get scrollLeft() {
    return this.nativeElement.scrollLeft;
  }
  // Get the available scrollable size
  get scrollMaxX() {
    return this.scrollWidth - this.clientWidth;
  }
  get scrollMaxY() {
    return this.scrollHeight - this.clientHeight;
  }
  get contentHeight() {
    return this.contentWrapperElement?.clientHeight || 0;
  }
  get contentWidth() {
    return this.contentWrapperElement?.clientWidth || 0;
  }
  constructor(viewPort) {
    this.viewPort = viewPort;
    this.nativeElement = viewPort.nativeElement;
  }
  /**
   * Activate viewport pointer events such as 'hovered' and 'clicked' events
   */
  activatePointerEvents(propagate, destroyed) {
    this.hovered = new Observable((subscriber) => {
      const mouseMoveStream = fromEvent(this.nativeElement, "mousemove", {
        passive: true
      });
      const mouseMove = propagate ? mouseMoveStream : mouseMoveStream.pipe(stopPropagation());
      const mouseLeave = fromEvent(this.nativeElement, "mouseleave", {
        passive: true
      }).pipe(map(() => false));
      merge(mouseMove, mouseLeave).pipe(tap((e) => subscriber.next(e)), takeUntil(destroyed)).subscribe();
    });
    this.clicked = new Observable((subscriber) => {
      const mouseDown = fromEvent(this.nativeElement, "mousedown", {
        passive: true
      }).pipe(tap((e) => subscriber.next(e)));
      const mouseUp = fromEvent(this.nativeElement, "mouseup", {
        passive: true
      }).pipe(tap(() => subscriber.next(false)));
      mouseDown.pipe(switchMap(() => mouseUp), takeUntil(destroyed)).subscribe();
    });
  }
  /**
   * Set this directive as a non-functional wrapper, called when a custom viewport is used
   */
  setAsWrapper() {
    this.nativeElement.className = "ng-native-scrollbar-hider ng-scroll-layer";
    if (this.nativeElement.firstElementChild) {
      this.nativeElement.firstElementChild.className = "ng-scroll-layer";
    }
  }
  /**
   * Set this directive as  the viewport, called when no custom viewport is used
   */
  setAsViewport(customClassName) {
    this.nativeElement.className += ` ng-native-scrollbar-hider ng-scroll-viewport ${customClassName}`;
    if (this.nativeElement.firstElementChild) {
      this.contentWrapperElement = this.nativeElement.firstElementChild;
      this.contentWrapperElement.classList.add("ng-scroll-content");
    }
  }
  /**
   * Scroll viewport vertically
   */
  scrollYTo(value) {
    this.nativeElement.scrollTop = value;
  }
  /**
   * Scroll viewport horizontally
   */
  scrollXTo(value) {
    this.nativeElement.scrollLeft = value;
  }
};
_ScrollViewport.\u0275fac = function ScrollViewport_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollViewport)(\u0275\u0275directiveInject(ElementRef));
};
_ScrollViewport.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ScrollViewport,
  selectors: [["", "scrollViewport", ""]]
});
var ScrollViewport = _ScrollViewport;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollViewport, [{
    type: Directive,
    args: [{
      selector: "[scrollViewport]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, null);
})();
var _NgScrollbarBase = class _NgScrollbarBase {
};
_NgScrollbarBase.\u0275fac = function NgScrollbarBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgScrollbarBase)();
};
_NgScrollbarBase.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgScrollbarBase,
  standalone: false
});
var NgScrollbarBase = _NgScrollbarBase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarBase, [{
    type: Directive
  }], null, null);
})();
var _TrackAdapter = class _TrackAdapter {
  // Stream that emits when the track element is clicked
  get clicked() {
    const mouseDown = fromEvent(this.trackElement, "mousedown", {
      passive: true
    }).pipe(stopPropagation(), preventSelection(this.document));
    const mouseup = fromEvent(this.document, "mouseup", {
      passive: true
    }).pipe(stopPropagation(), enableSelection(this.document), switchMap(() => EMPTY));
    return merge(mouseDown, mouseup);
  }
  // Get track client rect
  get clientRect() {
    return this.trackElement.getBoundingClientRect();
  }
  constructor(cmp, trackElement, document2) {
    this.cmp = cmp;
    this.trackElement = trackElement;
    this.document = document2;
  }
  /**
   * Stream that emits when scrollbar track is clicked
   */
  onTrackClicked(e, thumbSize, scrollSize) {
    return of(e).pipe(
      map((e2) => e2[this.pageProperty]),
      // Calculate scrollTo position
      map((pageOffset) => {
        const clickOffset = pageOffset - this.offset;
        const offset = clickOffset - thumbSize / 2;
        const ratio = offset / this.size;
        return ratio * scrollSize;
      }),
      // Smooth scroll to position
      tap((value) => {
        this.cmp.scrollTo(__spreadProps(__spreadValues({}, this.mapToScrollToOption(value)), {
          duration: coerceNumberProperty(this.cmp.trackClickScrollDuration)
        }));
      })
    );
  }
};
_TrackAdapter.\u0275fac = function TrackAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrackAdapter)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(HTMLElement), \u0275\u0275directiveInject(Document));
};
_TrackAdapter.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TrackAdapter,
  standalone: false
});
var TrackAdapter = _TrackAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackAdapter, [{
    type: Directive
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: HTMLElement
    }, {
      type: Document
    }];
  }, null);
})();
var _TrackXDirective = class _TrackXDirective extends TrackAdapter {
  get pageProperty() {
    return "pageX";
  }
  get offset() {
    return this.clientRect.left;
  }
  get size() {
    return this.trackElement.clientWidth;
  }
  constructor(cmp, trackElement, document2) {
    super(cmp, trackElement.nativeElement, document2);
    this.cmp = cmp;
    this.document = document2;
  }
  mapToScrollToOption(value) {
    return {
      left: value
    };
  }
};
_TrackXDirective.\u0275fac = function TrackXDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrackXDirective)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT));
};
_TrackXDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TrackXDirective,
  selectors: [["", "scrollbarTrackX", ""]],
  features: [\u0275\u0275InheritDefinitionFeature]
});
var TrackXDirective = _TrackXDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackXDirective, [{
    type: Directive,
    args: [{
      selector: "[scrollbarTrackX]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: ElementRef
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var _TrackYDirective = class _TrackYDirective extends TrackAdapter {
  get pageProperty() {
    return "pageY";
  }
  get offset() {
    return this.clientRect.top;
  }
  get size() {
    return this.trackElement.clientHeight;
  }
  constructor(cmp, trackElement, document2) {
    super(cmp, trackElement.nativeElement, document2);
    this.cmp = cmp;
    this.document = document2;
  }
  mapToScrollToOption(value) {
    return {
      top: value
    };
  }
};
_TrackYDirective.\u0275fac = function TrackYDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrackYDirective)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT));
};
_TrackYDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TrackYDirective,
  selectors: [["", "scrollbarTrackY", ""]],
  features: [\u0275\u0275InheritDefinitionFeature]
});
var TrackYDirective = _TrackYDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackYDirective, [{
    type: Directive,
    args: [{
      selector: "[scrollbarTrackY]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: ElementRef
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var _ThumbAdapter = class _ThumbAdapter {
  get trackMax() {
    return this.track.size - this.size;
  }
  // Get thumb client rect
  get clientRect() {
    return this.thumbElement.getBoundingClientRect();
  }
  // Stream that emits when scrollbar thumb is clicked
  get clicked() {
    return fromEvent(this.thumbElement, "mousedown", {
      passive: true
    }).pipe(stopPropagation());
  }
  constructor(cmp, track, thumbElement, document2) {
    this.cmp = cmp;
    this.track = track;
    this.thumbElement = thumbElement;
    this.document = document2;
    this._dragging = new Subject();
    this.dragging = this._dragging.pipe(distinctUntilChanged());
  }
  // Calculate and update thumb position and size
  update() {
    const size = calculateThumbSize(this.track.size, this.viewportScrollSize, this.cmp.minThumbSize);
    const position = calculateThumbPosition(this.viewportScrollOffset, this.viewportScrollMax, this.trackMax);
    animationFrameScheduler.schedule(() => this.updateStyles(this.handleDirection(position, this.trackMax), size));
  }
  /**
   * Stream that emits the 'scrollTo' position when a scrollbar thumb element is dragged
   * This function is called by thumb drag event using viewport or scrollbar pointer events
   */
  dragged(event) {
    let trackMaxStart;
    let scrollMaxStart;
    const dragStart = of(event).pipe(preventSelection(this.document), tap(() => {
      trackMaxStart = this.trackMax;
      scrollMaxStart = this.viewportScrollMax;
      this.setDragging(true);
    }));
    const dragging = fromEvent(this.document, "mousemove", {
      capture: true,
      passive: true
    }).pipe(stopPropagation());
    const dragEnd = fromEvent(this.document, "mouseup", {
      capture: true
    }).pipe(stopPropagation(), enableSelection(this.document), tap(() => this.setDragging(false)));
    return dragStart.pipe(map((e) => e[this.pageProperty]), map((pageOffset) => pageOffset - this.dragStartOffset), mergeMap((mouseDownOffset) => dragging.pipe(
      map((e) => e[this.clientProperty]),
      // Calculate how far the pointer is from the top/left of the scrollbar (minus the dragOffset).
      map((mouseOffset) => mouseOffset - this.track.offset),
      map((offset) => scrollMaxStart * (offset - mouseDownOffset) / trackMaxStart),
      map((position) => this.handleDrag(position, scrollMaxStart)),
      tap((position) => this.scrollTo(position)),
      takeUntil(dragEnd)
    )));
  }
};
_ThumbAdapter.\u0275fac = function ThumbAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThumbAdapter)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(TrackAdapter), \u0275\u0275directiveInject(HTMLElement), \u0275\u0275directiveInject(Document));
};
_ThumbAdapter.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ThumbAdapter,
  outputs: {
    dragging: "dragging"
  },
  standalone: false
});
var ThumbAdapter = _ThumbAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbAdapter, [{
    type: Directive
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: TrackAdapter
    }, {
      type: HTMLElement
    }, {
      type: Document
    }];
  }, {
    dragging: [{
      type: Output
    }]
  });
})();
function calculateThumbSize(trackSize, contentSize, minThumbSize) {
  const scrollbarRatio = trackSize / contentSize;
  const thumbSize = scrollbarRatio * trackSize;
  return Math.max(~~thumbSize, minThumbSize);
}
function calculateThumbPosition(scrollPosition, scrollMax, trackMax) {
  return scrollPosition * trackMax / scrollMax;
}
var _ThumbXDirective = class _ThumbXDirective extends ThumbAdapter {
  get clientProperty() {
    return "clientX";
  }
  get pageProperty() {
    return "pageX";
  }
  get viewportScrollSize() {
    return this.cmp.viewport.scrollWidth;
  }
  get viewportScrollOffset() {
    return this.cmp.viewport.scrollLeft;
  }
  get viewportScrollMax() {
    return this.cmp.viewport.scrollMaxX;
  }
  get dragStartOffset() {
    return this.clientRect.left + this.document.defaultView.pageXOffset || 0;
  }
  get size() {
    return this.thumbElement.clientWidth;
  }
  constructor(cmp, track, element, document2, dir) {
    super(cmp, track, element.nativeElement, document2);
    this.cmp = cmp;
    this.track = track;
    this.element = element;
    this.document = document2;
    this.dir = dir;
  }
  updateStyles(position, size) {
    this.thumbElement.style.width = `${size}px`;
    this.thumbElement.style.transform = `translate3d(${position}px, 0, 0)`;
  }
  handleDrag(position, scrollMax) {
    if (this.dir.value === "rtl") {
      if (this.cmp.manager.rtlScrollAxisType === 1) {
        return position - scrollMax;
      }
      if (this.cmp.manager.rtlScrollAxisType === 2) {
        return scrollMax - position;
      }
    }
    return position;
  }
  handleDirection(position, trackMax) {
    if (this.dir.value === "rtl") {
      if (this.cmp.manager.rtlScrollAxisType === 2) {
        return -position;
      }
      if (this.cmp.manager.rtlScrollAxisType === 0) {
        return position - trackMax;
      }
    }
    return position;
  }
  setDragging(value) {
    this.cmp.setDragging({
      horizontalDragging: value
    });
  }
  scrollTo(position) {
    this.cmp.viewport.scrollXTo(position);
  }
};
_ThumbXDirective.\u0275fac = function ThumbXDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThumbXDirective)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(TrackXDirective), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(Directionality));
};
_ThumbXDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ThumbXDirective,
  selectors: [["", "scrollbarThumbX", ""]],
  features: [\u0275\u0275InheritDefinitionFeature]
});
var ThumbXDirective = _ThumbXDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbXDirective, [{
    type: Directive,
    args: [{
      selector: "[scrollbarThumbX]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: TrackXDirective
    }, {
      type: ElementRef
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: Directionality
    }];
  }, null);
})();
var _ThumbYDirective = class _ThumbYDirective extends ThumbAdapter {
  get pageProperty() {
    return "pageY";
  }
  get viewportScrollSize() {
    return this.cmp.viewport.scrollHeight;
  }
  get viewportScrollOffset() {
    return this.cmp.viewport.scrollTop;
  }
  get viewportScrollMax() {
    return this.cmp.viewport.scrollMaxY;
  }
  get clientProperty() {
    return "clientY";
  }
  get dragStartOffset() {
    return this.clientRect.top + this.document.defaultView.pageYOffset || 0;
  }
  get size() {
    return this.thumbElement.clientHeight;
  }
  constructor(cmp, track, element, document2) {
    super(cmp, track, element.nativeElement, document2);
    this.cmp = cmp;
    this.track = track;
    this.element = element;
    this.document = document2;
  }
  updateStyles(position, size) {
    this.thumbElement.style.height = `${size}px`;
    this.thumbElement.style.transform = `translate3d(0px, ${position}px, 0)`;
  }
  handleDrag(position) {
    return position;
  }
  handleDirection(position) {
    return position;
  }
  setDragging(value) {
    this.cmp.setDragging({
      verticalDragging: value
    });
  }
  scrollTo(position) {
    this.cmp.viewport.scrollYTo(position);
  }
};
_ThumbYDirective.\u0275fac = function ThumbYDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThumbYDirective)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(TrackYDirective), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT));
};
_ThumbYDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ThumbYDirective,
  selectors: [["", "scrollbarThumbY", ""]],
  features: [\u0275\u0275InheritDefinitionFeature]
});
var ThumbYDirective = _ThumbYDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbYDirective, [{
    type: Directive,
    args: [{
      selector: "[scrollbarThumbY]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: TrackYDirective
    }, {
      type: ElementRef
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var _Scrollbar = class _Scrollbar {
  constructor(el, cmp, platform, document2, zone) {
    this.el = el;
    this.cmp = cmp;
    this.platform = platform;
    this.document = document2;
    this.zone = zone;
    this.destroyed = new Subject();
  }
  /**
   * Activate scrollbar pointer events
   */
  activatePointerEvents() {
    let thumbDragEvent;
    let trackClickEvent;
    let trackHoveredEvent;
    if (this.cmp.pointerEventsMethod === "viewport") {
      this.viewportTrackClicked = new Subject();
      this.viewportThumbClicked = new Subject();
      this.cmp.viewport.activatePointerEvents(this.cmp.viewportPropagateMouseMove, this.destroyed);
      thumbDragEvent = this.viewportThumbClicked;
      trackClickEvent = this.viewportTrackClicked;
      trackHoveredEvent = this.cmp.viewport.hovered.pipe(
        // Check if track is hovered
        map((e) => e ? isWithinBounds(e, this.el.getBoundingClientRect()) : false),
        distinctUntilChanged(),
        // Enable / disable text selection
        tap((hovered) => this.document.onselectstart = hovered ? () => false : null)
      );
      this.cmp.viewport.clicked.pipe(tap((e) => {
        if (e) {
          if (isWithinBounds(e, this.thumb.clientRect)) {
            this.viewportThumbClicked.next(e);
          } else if (isWithinBounds(e, this.track.clientRect)) {
            this.cmp.setClicked(true);
            this.viewportTrackClicked.next(e);
          }
        } else {
          this.cmp.setClicked(false);
        }
      }), takeUntil(this.destroyed)).subscribe();
    } else {
      thumbDragEvent = this.thumb.clicked;
      trackClickEvent = this.track.clicked;
      trackHoveredEvent = this.hovered;
    }
    return merge(
      // Activate scrollbar hovered event
      trackHoveredEvent.pipe(tap((e) => this.setHovered(e))),
      // Activate scrollbar thumb drag event
      thumbDragEvent.pipe(switchMap((e) => this.thumb.dragged(e))),
      // Activate scrollbar track click event
      trackClickEvent.pipe(switchMap((e) => this.track.onTrackClicked(e, this.thumb.size, this.viewportScrollSize)))
    );
  }
  // Stream that emits when the track element is hovered
  get hovered() {
    const mouseEnter = fromEvent(this.el, "mouseenter", {
      passive: true
    }).pipe(stopPropagation(), map(() => true));
    const mouseLeave = fromEvent(this.el, "mouseleave", {
      passive: true
    }).pipe(stopPropagation(), map(() => false));
    return merge(mouseEnter, mouseLeave);
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      if (!(this.platform.IOS || this.platform.ANDROID) && !this.cmp.pointerEventsDisabled) {
        this.activatePointerEvents().pipe(takeUntil(this.destroyed)).subscribe();
      }
      merge(this.cmp.scrolled, this.cmp.updated).pipe(tap(() => this.thumb?.update()), takeUntil(this.destroyed)).subscribe();
    });
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
    if (this.viewportThumbClicked && this.viewportTrackClicked) {
      this.viewportTrackClicked.complete();
      this.viewportThumbClicked.complete();
    }
  }
};
_Scrollbar.\u0275fac = function Scrollbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Scrollbar)(\u0275\u0275directiveInject(HTMLElement), \u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(Document), \u0275\u0275directiveInject(NgZone));
};
_Scrollbar.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _Scrollbar,
  standalone: false
});
var Scrollbar = _Scrollbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Scrollbar, [{
    type: Directive
  }], function() {
    return [{
      type: HTMLElement
    }, {
      type: NgScrollbarBase
    }, {
      type: Platform
    }, {
      type: Document
    }, {
      type: NgZone
    }];
  }, null);
})();
var _ScrollbarY = class _ScrollbarY extends Scrollbar {
  get viewportScrollSize() {
    return this.cmp.viewport.scrollHeight;
  }
  constructor(el, cmp, platform, document2, zone) {
    super(el.nativeElement, cmp, platform, document2, zone);
    this.cmp = cmp;
    this.platform = platform;
    this.document = document2;
    this.zone = zone;
  }
  setHovered(value) {
    this.cmp.setHovered({
      verticalHovered: value
    });
  }
};
_ScrollbarY.\u0275fac = function ScrollbarY_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollbarY)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(NgZone));
};
_ScrollbarY.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ScrollbarY,
  selectors: [["scrollbar-y"]],
  viewQuery: function ScrollbarY_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(TrackYDirective, 7);
      \u0275\u0275viewQuery(ThumbYDirective, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.track = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.thumb = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function ScrollbarY_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("scrollbar-control", true);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 2,
  vars: 6,
  consts: [["scrollbarTrackY", ""], ["scrollbarThumbY", ""]],
  template: function ScrollbarY_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-track ", ctx.cmp.trackClass));
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-thumb ", ctx.cmp.thumbClass));
    }
  },
  dependencies: [TrackYDirective, ThumbYDirective],
  styles: [".ng-scrollbar-wrapper>scrollbar-y.scrollbar-control{width:var(--vertical-scrollbar-total-size)}  .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track{width:var(--vertical-scrollbar-size);height:calc(100% - var(--scrollbar-padding) * 2)}  .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{height:0;width:100%}  .ng-scrollbar-wrapper[verticalHovered=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb,   .ng-scrollbar-wrapper[verticalDragging=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}  .ng-scrollbar-wrapper[deactivated=false]>scrollbar-y.scrollbar-control{top:0;bottom:0}  .ng-scrollbar-wrapper[deactivated=false][dir=ltr]>scrollbar-y.scrollbar-control{right:0;left:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertY]>scrollbar-y.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertAll]>scrollbar-y.scrollbar-control{left:0;right:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=rtl]>scrollbar-y.scrollbar-control{left:0;right:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertY]>scrollbar-y.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertAll]>scrollbar-y.scrollbar-control{left:unset;right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all]>scrollbar-y.scrollbar-control[fit=true]{bottom:var(--scrollbar-total-size);top:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertX]>scrollbar-y.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertAll]>scrollbar-y.scrollbar-control[fit=true]{top:var(--scrollbar-total-size);bottom:0}"],
  changeDetection: 0
});
var ScrollbarY = _ScrollbarY;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarY, [{
    type: Component,
    args: [{
      selector: "scrollbar-y",
      host: {
        "[class.scrollbar-control]": "true"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div scrollbarTrackY class="ng-scrollbar-track {{cmp.trackClass}}">
      <div scrollbarThumbY class="ng-scrollbar-thumb {{cmp.thumbClass}}"></div>
    </div>
  `,
      standalone: true,
      imports: [TrackYDirective, ThumbYDirective],
      styles: ["::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control{width:var(--vertical-scrollbar-total-size)}::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track{width:var(--vertical-scrollbar-size);height:calc(100% - var(--scrollbar-padding) * 2)}::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{height:0;width:100%}::ng-deep .ng-scrollbar-wrapper[verticalHovered=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb,::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}::ng-deep .ng-scrollbar-wrapper[deactivated=false]>scrollbar-y.scrollbar-control{top:0;bottom:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr]>scrollbar-y.scrollbar-control{right:0;left:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertY]>scrollbar-y.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertAll]>scrollbar-y.scrollbar-control{left:0;right:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl]>scrollbar-y.scrollbar-control{left:0;right:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertY]>scrollbar-y.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertAll]>scrollbar-y.scrollbar-control{left:unset;right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all]>scrollbar-y.scrollbar-control[fit=true]{bottom:var(--scrollbar-total-size);top:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertX]>scrollbar-y.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertAll]>scrollbar-y.scrollbar-control[fit=true]{top:var(--scrollbar-total-size);bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgScrollbarBase
    }, {
      type: Platform
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: NgZone
    }];
  }, {
    track: [{
      type: ViewChild,
      args: [TrackYDirective, {
        static: true
      }]
    }],
    thumb: [{
      type: ViewChild,
      args: [ThumbYDirective, {
        static: true
      }]
    }]
  });
})();
var _ScrollbarX = class _ScrollbarX extends Scrollbar {
  get viewportScrollSize() {
    return this.cmp.viewport.scrollWidth;
  }
  constructor(el, cmp, platform, document2, zone) {
    super(el.nativeElement, cmp, platform, document2, zone);
    this.cmp = cmp;
    this.platform = platform;
    this.document = document2;
    this.zone = zone;
  }
  setHovered(value) {
    this.cmp.setHovered({
      horizontalHovered: value
    });
  }
};
_ScrollbarX.\u0275fac = function ScrollbarX_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollbarX)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(NgZone));
};
_ScrollbarX.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ScrollbarX,
  selectors: [["scrollbar-x"]],
  viewQuery: function ScrollbarX_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(TrackXDirective, 7);
      \u0275\u0275viewQuery(ThumbXDirective, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.track = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.thumb = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function ScrollbarX_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("scrollbar-control", true);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 2,
  vars: 6,
  consts: [["scrollbarTrackX", ""], ["scrollbarThumbX", ""]],
  template: function ScrollbarX_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-track ", ctx.cmp.trackClass));
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("ng-scrollbar-thumb ", ctx.cmp.thumbClass));
    }
  },
  dependencies: [TrackXDirective, ThumbXDirective],
  styles: [".ng-scrollbar-wrapper>scrollbar-x.scrollbar-control{height:var(--horizontal-scrollbar-total-size)}  .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track{height:var(--horizontal-scrollbar-size);width:calc(100% - var(--scrollbar-padding) * 2)}  .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{width:0;height:100%}  .ng-scrollbar-wrapper[horizontalHovered=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb,   .ng-scrollbar-wrapper[horizontalDragging=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}  .ng-scrollbar-wrapper[position=invertX]>scrollbar-x.scrollbar-control,   .ng-scrollbar-wrapper[position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}  .ng-scrollbar-wrapper[deactivated=false]>scrollbar-x.scrollbar-control{left:0;right:0;bottom:0;top:unset}  .ng-scrollbar-wrapper[deactivated=false][position=invertX]>scrollbar-x.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertY]>scrollbar-x.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertY]>scrollbar-x.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}"],
  changeDetection: 0
});
var ScrollbarX = _ScrollbarX;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarX, [{
    type: Component,
    args: [{
      selector: "scrollbar-x",
      host: {
        "[class.scrollbar-control]": "true"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div scrollbarTrackX class="ng-scrollbar-track {{cmp.trackClass}}">
      <div scrollbarThumbX class="ng-scrollbar-thumb {{cmp.thumbClass}}"></div>
    </div>
  `,
      standalone: true,
      imports: [TrackXDirective, ThumbXDirective],
      styles: ["::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control{height:var(--horizontal-scrollbar-total-size)}::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track{height:var(--horizontal-scrollbar-size);width:calc(100% - var(--scrollbar-padding) * 2)}::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{width:0;height:100%}::ng-deep .ng-scrollbar-wrapper[horizontalHovered=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb,::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}::ng-deep .ng-scrollbar-wrapper[position=invertX]>scrollbar-x.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false]>scrollbar-x.scrollbar-control{left:0;right:0;bottom:0;top:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][position=invertX]>scrollbar-x.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertY]>scrollbar-x.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertY]>scrollbar-x.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgScrollbarBase
    }, {
      type: Platform
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: NgZone
    }];
  }, {
    track: [{
      type: ViewChild,
      args: [TrackXDirective, {
        static: true
      }]
    }],
    thumb: [{
      type: ViewChild,
      args: [ThumbXDirective, {
        static: true
      }]
    }]
  });
})();
var NG_SCROLLBAR_OPTIONS = new InjectionToken("NG_SCROLLBAR_OPTIONS");
var defaultOptions = {
  viewClass: "",
  trackClass: "",
  thumbClass: "",
  track: "vertical",
  appearance: "compact",
  visibility: "native",
  position: "native",
  pointerEventsMethod: "viewport",
  trackClickScrollDuration: 300,
  minThumbSize: 20,
  windowResizeDebounce: 0,
  sensorDebounce: 0,
  scrollAuditTime: 0,
  viewportPropagateMouseMove: true,
  autoHeightDisabled: true,
  autoWidthDisabled: true,
  sensorDisabled: false,
  pointerEventsDisabled: false
};
var _ScrollbarManager = class _ScrollbarManager {
  constructor(options) {
    this.globalOptions = options ? __spreadValues(__spreadValues({}, defaultOptions), options) : defaultOptions;
    this.rtlScrollAxisType = getRtlScrollAxisType();
  }
};
_ScrollbarManager.\u0275fac = function ScrollbarManager_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollbarManager)(\u0275\u0275inject(NG_SCROLLBAR_OPTIONS, 8));
};
_ScrollbarManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ScrollbarManager,
  factory: _ScrollbarManager.\u0275fac,
  providedIn: "root"
});
var ScrollbarManager = _ScrollbarManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [NG_SCROLLBAR_OPTIONS]
      }]
    }];
  }, null);
})();
var _NativeScrollbarSizeFactory = class _NativeScrollbarSizeFactory {
  constructor(document2, manager, platform) {
    this.document = document2;
    this.manager = manager;
    this.platform = platform;
    this._scrollbarSize = new BehaviorSubject(this.getNativeScrollbarSize());
    this.scrollbarSize = this._scrollbarSize.asObservable();
    if (platform.isBrowser) {
      fromEvent(this.document.defaultView, "resize", {
        passive: true
      }).pipe(debounceTime(this.manager.globalOptions.windowResizeDebounce), map(() => this.getNativeScrollbarSize()), distinctUntilChanged(), tap((size) => this._scrollbarSize.next(size))).subscribe();
    }
  }
  /**
   * Get native scrollbar size
   */
  getNativeScrollbarSize() {
    if (!this.platform.isBrowser) {
      return 0;
    }
    if (this.platform.IOS) {
      return 6;
    }
    const box = this.document.createElement("div");
    box.className = "ng-scrollbar-measure";
    box.style.left = "0px";
    box.style.overflow = "scroll";
    box.style.position = "fixed";
    box.style.top = "-9999px";
    this.document.body.appendChild(box);
    const size = box.getBoundingClientRect().right;
    this.document.body.removeChild(box);
    return size;
  }
};
_NativeScrollbarSizeFactory.\u0275fac = function NativeScrollbarSizeFactory_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NativeScrollbarSizeFactory)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(ScrollbarManager), \u0275\u0275inject(Platform));
};
_NativeScrollbarSizeFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NativeScrollbarSizeFactory,
  factory: _NativeScrollbarSizeFactory.\u0275fac,
  providedIn: "root"
});
var NativeScrollbarSizeFactory = _NativeScrollbarSizeFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeScrollbarSizeFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ScrollbarManager
    }, {
      type: Platform
    }];
  }, null);
})();
var _HideNativeScrollbar = class _HideNativeScrollbar {
  constructor(el, renderer, hideNativeScrollbar) {
    this.renderer = renderer;
    this.hideNativeScrollbar = hideNativeScrollbar;
    this._subscriber = Subscription.EMPTY;
    this._subscriber = hideNativeScrollbar.scrollbarSize.subscribe((size) => {
      this.renderer.setStyle(el.nativeElement, "--native-scrollbar-size", `-${size}px`, RendererStyleFlags2.DashCase);
    });
  }
  ngOnDestroy() {
    this._subscriber.unsubscribe();
  }
};
_HideNativeScrollbar.\u0275fac = function HideNativeScrollbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HideNativeScrollbar)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NativeScrollbarSizeFactory));
};
_HideNativeScrollbar.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _HideNativeScrollbar,
  selectors: [["", "hideNativeScrollbar", ""]]
});
var HideNativeScrollbar = _HideNativeScrollbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HideNativeScrollbar, [{
    type: Directive,
    args: [{
      selector: "[hideNativeScrollbar]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NativeScrollbarSizeFactory
    }];
  }, null);
})();
var _ResizeSensor = class _ResizeSensor {
  /** Debounce interval for emitting the changes. */
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  /** Whether ResizeObserver is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  constructor(zone, platform, scrollbar) {
    this.zone = zone;
    this.platform = platform;
    this.scrollbar = scrollbar;
    this._disabled = false;
    this._currentSubscription = null;
    this.event = new EventEmitter();
    if (!scrollbar) {
      throw new Error("[NgScrollbar Resize Sensor Directive]: Host element must be an NgScrollbar component.");
    }
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this._disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    if (this.platform.isBrowser) {
      const stream = new Observable((observer) => {
        this._resizeObserver = new ResizeObserver((e) => observer.next(e));
        this._resizeObserver.observe(this.scrollbar.viewport.nativeElement);
        if (this.scrollbar.viewport.contentWrapperElement) {
          this._resizeObserver.observe(this.scrollbar.viewport.contentWrapperElement);
        }
      });
      this.zone.runOutsideAngular(() => {
        this._currentSubscription = (this._debounce ? stream.pipe(debounceTime(this._debounce)) : stream).subscribe(this.event);
      });
    }
  }
  _unsubscribe() {
    this._resizeObserver?.disconnect();
    this._currentSubscription?.unsubscribe();
  }
};
_ResizeSensor.\u0275fac = function ResizeSensor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResizeSensor)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(NgScrollbarBase));
};
_ResizeSensor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ResizeSensor,
  selectors: [["", "resizeSensor", ""]],
  inputs: {
    debounce: [0, "sensorDebounce", "debounce"],
    disabled: [0, "sensorDisabled", "disabled"]
  },
  outputs: {
    event: "resizeSensor"
  }
});
var ResizeSensor = _ResizeSensor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeSensor, [{
    type: Directive,
    args: [{
      selector: "[resizeSensor]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: Platform
    }, {
      type: NgScrollbarBase
    }];
  }, {
    debounce: [{
      type: Input,
      args: ["sensorDebounce"]
    }],
    disabled: [{
      type: Input,
      args: ["sensorDisabled"]
    }],
    event: [{
      type: Output,
      args: ["resizeSensor"]
    }]
  });
})();
var _NgScrollbar = class _NgScrollbar {
  /** Disable custom scrollbar and switch back to native scrollbar */
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled) {
    this._disabled = coerceBooleanProperty(disabled);
  }
  /** Whether ResizeObserver is disabled */
  get sensorDisabled() {
    return this._sensorDisabled;
  }
  set sensorDisabled(disabled) {
    this._sensorDisabled = coerceBooleanProperty(disabled);
  }
  /** A flag used to enable/disable the scrollbar thumb dragged event */
  get pointerEventsDisabled() {
    return this._pointerEventsDisabled;
  }
  set pointerEventsDisabled(disabled) {
    this._pointerEventsDisabled = coerceBooleanProperty(disabled);
  }
  /** Enable viewport mousemove event propagation (only when pointerEventsMethod="viewport") */
  get viewportPropagateMouseMove() {
    return this._viewportPropagateMouseMove;
  }
  set viewportPropagateMouseMove(disabled) {
    this._viewportPropagateMouseMove = coerceBooleanProperty(disabled);
  }
  /** Disable auto-height */
  get autoHeightDisabled() {
    return this._autoHeightDisabled;
  }
  set autoHeightDisabled(disabled) {
    this._autoHeightDisabled = coerceBooleanProperty(disabled);
  }
  /** Disable auto-width */
  get autoWidthDisabled() {
    return this._autoWidthDisabled;
  }
  set autoWidthDisabled(disabled) {
    this._autoWidthDisabled = coerceBooleanProperty(disabled);
  }
  get nativeElement() {
    return this.el.nativeElement;
  }
  constructor(el, zone, changeDetectorRef, dir, smoothScroll, manager) {
    this.el = el;
    this.zone = zone;
    this.changeDetectorRef = changeDetectorRef;
    this.dir = dir;
    this.smoothScroll = smoothScroll;
    this.manager = manager;
    this._disabled = false;
    this._sensorDisabled = this.manager.globalOptions.sensorDisabled;
    this._pointerEventsDisabled = this.manager.globalOptions.pointerEventsDisabled;
    this._autoHeightDisabled = this.manager.globalOptions.autoHeightDisabled;
    this._autoWidthDisabled = this.manager.globalOptions.autoWidthDisabled;
    this._viewportPropagateMouseMove = this.manager.globalOptions.viewportPropagateMouseMove;
    this.viewClass = this.manager.globalOptions.viewClass;
    this.trackClass = this.manager.globalOptions.trackClass;
    this.thumbClass = this.manager.globalOptions.thumbClass;
    this.minThumbSize = this.manager.globalOptions.minThumbSize;
    this.trackClickScrollDuration = this.manager.globalOptions.trackClickScrollDuration;
    this.pointerEventsMethod = this.manager.globalOptions.pointerEventsMethod;
    this.track = this.manager.globalOptions.track;
    this.visibility = this.manager.globalOptions.visibility;
    this.appearance = this.manager.globalOptions.appearance;
    this.position = this.manager.globalOptions.position;
    this.sensorDebounce = this.manager.globalOptions.sensorDebounce;
    this.scrollAuditTime = this.manager.globalOptions.scrollAuditTime;
    this.updated = new EventEmitter();
    this.state = {};
    this.destroyed = new Subject();
  }
  /**
   * Update local state with each change detection
   */
  updateState() {
    let verticalUsed = false;
    let horizontalUsed = false;
    let isVerticallyScrollable = false;
    let isHorizontallyScrollable = false;
    if (this.track === "all" || this.track === "vertical") {
      isVerticallyScrollable = this.viewport.scrollHeight > this.viewport.clientHeight;
      verticalUsed = this.visibility === "always" || isVerticallyScrollable;
    }
    if (this.track === "all" || this.track === "horizontal") {
      isHorizontallyScrollable = this.viewport.scrollWidth > this.viewport.clientWidth;
      horizontalUsed = this.visibility === "always" || isHorizontallyScrollable;
    }
    this.setState({
      position: this.position,
      track: this.track,
      appearance: this.appearance,
      visibility: this.visibility,
      deactivated: this.disabled,
      dir: this.dir.value,
      pointerEventsMethod: this.pointerEventsMethod,
      verticalUsed,
      horizontalUsed,
      isVerticallyScrollable,
      isHorizontallyScrollable
    });
  }
  setState(state) {
    this.state = __spreadValues(__spreadValues({}, this.state), state);
    this.changeDetectorRef.detectChanges();
  }
  getScrolledByDirection(property) {
    let event;
    return this.scrolled.pipe(tap((e) => event = e), map((e) => e.target[property]), pairwise(), filter(([prev, curr]) => prev !== curr), map(() => event));
  }
  /**
   * Set hovered state if a scrollbar is being hovered
   */
  setHovered(hovered) {
    this.zone.run(() => this.setState(__spreadValues({}, hovered)));
  }
  /**
   * Set dragging state if a scrollbar is being dragged
   */
  setDragging(dragging) {
    this.zone.run(() => this.setState(__spreadValues({}, dragging)));
  }
  /**
   * Set clicked state if a scrollbar track is being clicked
   */
  setClicked(scrollbarClicked) {
    this.zone.run(() => this.setState({
      scrollbarClicked
    }));
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      if (this.customViewPort) {
        this.viewport = this.customViewPort;
        this.defaultViewPort.setAsWrapper();
      } else {
        this.viewport = this.defaultViewPort;
      }
      this.viewport.setAsViewport(this.viewClass);
      let scrollStream = fromEvent(this.viewport.nativeElement, "scroll", {
        passive: true
      });
      scrollStream = this.scrollAuditTime ? scrollStream.pipe(auditTime(this.scrollAuditTime)) : scrollStream;
      this.scrolled = scrollStream.pipe(takeUntil(this.destroyed));
      this.verticalScrolled = this.getScrolledByDirection("scrollTop");
      this.horizontalScrolled = this.getScrolledByDirection("scrollLeft");
    });
  }
  ngOnChanges(changes) {
    if (this.viewport) {
      this.update();
    }
  }
  ngAfterViewInit() {
    this.update();
    this.dir.change.pipe(tap(() => this.update()), takeUntil(this.destroyed)).subscribe();
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  /**
   * Update local state and the internal scrollbar controls
   */
  update() {
    if (!this.autoHeightDisabled) {
      this.updateHeight();
    }
    if (!this.autoWidthDisabled) {
      this.updateWidth();
    }
    this.updateState();
    this.updated.next();
  }
  /**
   * Smooth scroll functions
   */
  scrollTo(options) {
    return this.smoothScroll.scrollTo(this.viewport.nativeElement, options);
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(target, options) {
    return this.smoothScroll.scrollToElement(this.viewport.nativeElement, target, options);
  }
  updateHeight() {
    if (this.appearance === "standard" && this.scrollbarX) {
      this.nativeElement.style.height = `${this.viewport.contentHeight + this.scrollbarX.nativeElement.clientHeight}px`;
    } else {
      this.nativeElement.style.height = `${this.viewport.contentHeight}px`;
    }
  }
  updateWidth() {
    if (this.appearance === "standard" && this.scrollbarY) {
      this.nativeElement.style.width = `${this.viewport.contentWidth + this.scrollbarY.nativeElement.clientWidth}px`;
    } else {
      this.nativeElement.style.width = `${this.viewport.contentWidth}px`;
    }
  }
};
_NgScrollbar.\u0275fac = function NgScrollbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgScrollbar)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Directionality), \u0275\u0275directiveInject(SmoothScrollManager), \u0275\u0275directiveInject(ScrollbarManager));
};
_NgScrollbar.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NgScrollbar,
  selectors: [["ng-scrollbar"]],
  contentQueries: function NgScrollbar_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, ScrollViewport, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.customViewPort = _t.first);
    }
  },
  viewQuery: function NgScrollbar_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5, ElementRef);
      \u0275\u0275viewQuery(_c1, 5, ElementRef);
      \u0275\u0275viewQuery(ScrollViewport, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollbarY = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollbarX = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultViewPort = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function NgScrollbar_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-scrollbar", true);
    }
  },
  inputs: {
    disabled: "disabled",
    sensorDisabled: "sensorDisabled",
    pointerEventsDisabled: "pointerEventsDisabled",
    viewportPropagateMouseMove: "viewportPropagateMouseMove",
    autoHeightDisabled: "autoHeightDisabled",
    autoWidthDisabled: "autoWidthDisabled",
    viewClass: "viewClass",
    trackClass: "trackClass",
    thumbClass: "thumbClass",
    minThumbSize: "minThumbSize",
    trackClickScrollDuration: "trackClickScrollDuration",
    pointerEventsMethod: "pointerEventsMethod",
    track: "track",
    visibility: "visibility",
    appearance: "appearance",
    position: "position",
    sensorDebounce: "sensorDebounce",
    scrollAuditTime: "scrollAuditTime"
  },
  outputs: {
    updated: "updated"
  },
  exportAs: ["ngScrollbar"],
  features: [\u0275\u0275ProvidersFeature([{
    provide: NgScrollbarBase,
    useExisting: _NgScrollbar
  }]), \u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c2,
  decls: 6,
  vars: 4,
  consts: [["scrollbarX", ""], ["scrollbarY", ""], [1, "ng-scrollbar-wrapper", 3, "ngAttr"], [1, "ng-scroll-viewport-wrapper", 3, "resizeSensor", "sensorDebounce", "sensorDisabled"], ["scrollViewport", "", "hideNativeScrollbar", ""], [4, "ngIf"]],
  template: function NgScrollbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275listener("resizeSensor", function NgScrollbar_Template_div_resizeSensor_1_listener() {
        return ctx.update();
      });
      \u0275\u0275elementStart(2, "div", 4)(3, "div");
      \u0275\u0275projection(4);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(5, NgScrollbar_ng_container_5_Template, 3, 2, "ng-container", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngAttr", ctx.state);
      \u0275\u0275advance();
      \u0275\u0275property("sensorDebounce", ctx.sensorDebounce)("sensorDisabled", ctx.sensorDisabled);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.disabled);
    }
  },
  dependencies: [NgIf, NgAttr, ResizeSensor, ScrollViewport, HideNativeScrollbar, ScrollbarX, ScrollbarY],
  styles: [".ng-scrollbar-measure{scrollbar-width:none;-ms-overflow-style:none}  .ng-scrollbar-measure::-webkit-scrollbar{display:none}[_nghost-%COMP%]{--scrollbar-border-radius: 7px;--scrollbar-padding: 4px;--scrollbar-track-color: transparent;--scrollbar-thumb-color: rgba(0, 0, 0, .2);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-color);--scrollbar-size: 5px;--scrollbar-hover-size: var(--scrollbar-size);--scrollbar-overscroll-behavior: initial;--scrollbar-transition-duration: .4s;--scrollbar-transition-delay: .8s;--scrollbar-thumb-transition: height ease-out .15s, width ease-out .15s;--scrollbar-track-transition: height ease-out .15s, width ease-out .15s;display:block;position:relative;height:100%;max-height:100%;max-width:100%;box-sizing:content-box!important}[_nghost-%COMP%] > .ng-scrollbar-wrapper[_ngcontent-%COMP%]{--scrollbar-total-size: calc(var(--scrollbar-size) + var(--scrollbar-padding) * 2);--vertical-scrollbar-size: var(--scrollbar-size);--horizontal-scrollbar-size: var(--scrollbar-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalHovered=true][_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalDragging=true][_ngcontent-%COMP%]{--vertical-scrollbar-size: var(--scrollbar-hover-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}[_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalHovered=true][_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalDragging=true][_ngcontent-%COMP%]{--horizontal-scrollbar-size: var(--scrollbar-hover-size);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:0;right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:var(--scrollbar-total-size);right:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:var(--scrollbar-total-size);right:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:0;right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{top:0;bottom:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-bottom:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-bottom:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{top:var(--scrollbar-total-size);bottom:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-top:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-top:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{scrollbar-width:none;-ms-overflow-style:none}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport::-webkit-scrollbar{display:none}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-native-scrollbar-hider{bottom:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-native-scrollbar-hider{left:0;right:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-native-scrollbar-hider{right:0;left:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%] > .scrollbar-control[_ngcontent-%COMP%]{opacity:0;transition-property:opacity;transition-duration:var(--scrollbar-transition-duration);transition-delay:var(--scrollbar-transition-delay)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:hover > .scrollbar-control[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:active > .scrollbar-control[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:focus > .scrollbar-control[_ngcontent-%COMP%]{opacity:1;transition-duration:var(--scrollbar-transition-duration);transition-delay:0ms}[_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{overflow-x:auto;overflow-y:hidden}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{overflow-y:auto;overflow-x:hidden}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{overflow:auto}.ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{overflow:hidden}.ng-scroll-viewport[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch;contain:strict;will-change:scroll-position;overscroll-behavior:var(--scrollbar-overscroll-behavior)}  .ng-scroll-content{display:inline-block;min-width:100%}.ng-scrollbar-wrapper[_ngcontent-%COMP%], .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], .ng-scroll-layer[_ngcontent-%COMP%],   .ng-scroll-viewport{position:absolute;inset:0}", ".ng-scrollbar-wrapper[pointerEventsMethod=viewport]>.scrollbar-control{pointer-events:none}  .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,   .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>*>*>  .ng-scroll-viewport,   .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,   .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>*>*>  .ng-scroll-viewport,   .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,   .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>*>*>  .ng-scroll-viewport{-webkit-user-select:none;-moz-user-select:none;user-select:none}  .ng-scrollbar-wrapper>.scrollbar-control{position:absolute;display:flex;justify-content:center;align-items:center;transition:var(--scrollbar-track-transition)}  .ng-scrollbar-wrapper>.scrollbar-control[scrollable=false] .ng-scrollbar-thumb{display:none}  .ng-scrollbar-track{height:100%;width:100%;z-index:1;border-radius:var(--scrollbar-border-radius);background-color:var(--scrollbar-track-color);overflow:hidden;transition:var(--scrollbar-track-transition);cursor:default}  .ng-scrollbar-thumb{box-sizing:border-box;position:relative;border-radius:inherit;background-color:var(--scrollbar-thumb-color);transform:translateZ(0);transition:var(--scrollbar-thumb-transition)}"],
  changeDetection: 0
});
var NgScrollbar = _NgScrollbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbar, [{
    type: Component,
    args: [{
      selector: "ng-scrollbar",
      exportAs: "ngScrollbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.ng-scrollbar]": "true"
      },
      providers: [{
        provide: NgScrollbarBase,
        useExisting: NgScrollbar
      }],
      standalone: true,
      imports: [NgIf, NgAttr, ResizeSensor, ScrollViewport, HideNativeScrollbar, ScrollbarX, ScrollbarY],
      template: '<div class="ng-scrollbar-wrapper" [ngAttr]="state">\r\n  <div class="ng-scroll-viewport-wrapper"\r\n       (resizeSensor)="update()"\r\n       [sensorDebounce]="sensorDebounce"\r\n       [sensorDisabled]="sensorDisabled">\r\n    <div scrollViewport\r\n         hideNativeScrollbar>\r\n      <div>\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf="!disabled">\r\n    <scrollbar-x #scrollbarX\r\n                 *ngIf="state.horizontalUsed"\r\n                 [attr.scrollable]="state.isHorizontallyScrollable"\r\n                 [attr.fit]="state.verticalUsed">\r\n    </scrollbar-x>\r\n    <scrollbar-y #scrollbarY\r\n                 *ngIf="state.verticalUsed"\r\n                 [attr.scrollable]="state.isVerticallyScrollable"\r\n                 [attr.fit]="state.horizontalUsed">\r\n    </scrollbar-y>\r\n  </ng-container>\r\n</div>\r\n\r\n',
      styles: ["::ng-deep .ng-scrollbar-measure{scrollbar-width:none;-ms-overflow-style:none}::ng-deep .ng-scrollbar-measure::-webkit-scrollbar{display:none}:host{--scrollbar-border-radius: 7px;--scrollbar-padding: 4px;--scrollbar-track-color: transparent;--scrollbar-thumb-color: rgba(0, 0, 0, .2);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-color);--scrollbar-size: 5px;--scrollbar-hover-size: var(--scrollbar-size);--scrollbar-overscroll-behavior: initial;--scrollbar-transition-duration: .4s;--scrollbar-transition-delay: .8s;--scrollbar-thumb-transition: height ease-out .15s, width ease-out .15s;--scrollbar-track-transition: height ease-out .15s, width ease-out .15s;display:block;position:relative;height:100%;max-height:100%;max-width:100%;box-sizing:content-box!important}:host>.ng-scrollbar-wrapper{--scrollbar-total-size: calc(var(--scrollbar-size) + var(--scrollbar-padding) * 2);--vertical-scrollbar-size: var(--scrollbar-size);--horizontal-scrollbar-size: var(--scrollbar-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2)}:host>.ng-scrollbar-wrapper[verticalHovered=true],:host>.ng-scrollbar-wrapper[verticalDragging=true]{--vertical-scrollbar-size: var(--scrollbar-hover-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}:host>.ng-scrollbar-wrapper[horizontalHovered=true],:host>.ng-scrollbar-wrapper[horizontalDragging=true]{--horizontal-scrollbar-size: var(--scrollbar-hover-size);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:0;right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:var(--scrollbar-total-size);right:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:var(--scrollbar-total-size);right:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:0;right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{top:0;bottom:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-bottom:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-bottom:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{top:var(--scrollbar-total-size);bottom:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-top:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-top:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{scrollbar-width:none;-ms-overflow-style:none}:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport::-webkit-scrollbar,:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport::-webkit-scrollbar{display:none}:host>.ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-native-scrollbar-hider{bottom:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-native-scrollbar-hider{left:0;right:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-native-scrollbar-hider{right:0;left:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]>.scrollbar-control{opacity:0;transition-property:opacity;transition-duration:var(--scrollbar-transition-duration);transition-delay:var(--scrollbar-transition-delay)}:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:hover>.scrollbar-control,:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:active>.scrollbar-control,:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:focus>.scrollbar-control{opacity:1;transition-duration:var(--scrollbar-transition-duration);transition-delay:0ms}:host>.ng-scrollbar-wrapper[horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{overflow-x:auto;overflow-y:hidden}:host>.ng-scrollbar-wrapper[verticalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[verticalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{overflow-y:auto;overflow-x:hidden}:host>.ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{overflow:auto}.ng-scroll-viewport-wrapper{overflow:hidden}.ng-scroll-viewport{-webkit-overflow-scrolling:touch;contain:strict;will-change:scroll-position;overscroll-behavior:var(--scrollbar-overscroll-behavior)}::ng-deep .ng-scroll-content{display:inline-block;min-width:100%}.ng-scrollbar-wrapper,.ng-scroll-viewport-wrapper,.ng-scroll-layer,::ng-deep .ng-scroll-viewport{position:absolute;inset:0}\n", "::ng-deep .ng-scrollbar-wrapper[pointerEventsMethod=viewport]>.scrollbar-control{pointer-events:none}::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{-webkit-user-select:none;-moz-user-select:none;user-select:none}::ng-deep .ng-scrollbar-wrapper>.scrollbar-control{position:absolute;display:flex;justify-content:center;align-items:center;transition:var(--scrollbar-track-transition)}::ng-deep .ng-scrollbar-wrapper>.scrollbar-control[scrollable=false] .ng-scrollbar-thumb{display:none}::ng-deep .ng-scrollbar-track{height:100%;width:100%;z-index:1;border-radius:var(--scrollbar-border-radius);background-color:var(--scrollbar-track-color);overflow:hidden;transition:var(--scrollbar-track-transition);cursor:default}::ng-deep .ng-scrollbar-thumb{box-sizing:border-box;position:relative;border-radius:inherit;background-color:var(--scrollbar-thumb-color);transform:translateZ(0);transition:var(--scrollbar-thumb-transition)}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: Directionality
    }, {
      type: SmoothScrollManager
    }, {
      type: ScrollbarManager
    }];
  }, {
    disabled: [{
      type: Input
    }],
    sensorDisabled: [{
      type: Input
    }],
    pointerEventsDisabled: [{
      type: Input
    }],
    viewportPropagateMouseMove: [{
      type: Input
    }],
    autoHeightDisabled: [{
      type: Input
    }],
    autoWidthDisabled: [{
      type: Input
    }],
    viewClass: [{
      type: Input
    }],
    trackClass: [{
      type: Input
    }],
    thumbClass: [{
      type: Input
    }],
    minThumbSize: [{
      type: Input
    }],
    trackClickScrollDuration: [{
      type: Input
    }],
    pointerEventsMethod: [{
      type: Input
    }],
    track: [{
      type: Input
    }],
    visibility: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    sensorDebounce: [{
      type: Input
    }],
    scrollAuditTime: [{
      type: Input
    }],
    updated: [{
      type: Output
    }],
    scrollbarY: [{
      type: ViewChild,
      args: ["scrollbarY", {
        read: ElementRef
      }]
    }],
    scrollbarX: [{
      type: ViewChild,
      args: ["scrollbarX", {
        read: ElementRef
      }]
    }],
    defaultViewPort: [{
      type: ViewChild,
      args: [ScrollViewport, {
        static: true
      }]
    }],
    customViewPort: [{
      type: ContentChild,
      args: [ScrollViewport, {
        static: true
      }]
    }]
  });
})();
var _NgScrollbarModule = class _NgScrollbarModule {
};
_NgScrollbarModule.\u0275fac = function NgScrollbarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgScrollbarModule)();
};
_NgScrollbarModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NgScrollbarModule,
  imports: [NgScrollbar, ScrollViewport],
  exports: [NgScrollbar, ScrollViewport]
});
_NgScrollbarModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var NgScrollbarModule = _NgScrollbarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarModule, [{
    type: NgModule,
    args: [{
      imports: [NgScrollbar, ScrollViewport],
      exports: [NgScrollbar, ScrollViewport]
    }]
  }], null, null);
})();

// src/app/layout/default-layout/_nav.ts
var navItems = [
  // ============================================
  // ADMIN — user & configuration management only
  // ============================================
  {
    name: "Dashboard",
    url: "/orgadmin-dashboard",
    iconComponent: { name: "cil-speedometer" },
    attributes: { roles: ["ORGANIZATION_ADMIN"] }
  },
  {
    name: "Manage Users",
    url: "/hierarchy-users",
    iconComponent: { name: "cil-people" },
    attributes: { roles: ["ORGANIZATION_ADMIN"] }
  },
  {
    name: "Reports",
    url: "/spend-analysis",
    iconComponent: { name: "cil-chart-pie" },
    attributes: { roles: ["ORGANIZATION_ADMIN"] }
  },
  // {
  //   name: 'Audit Log',
  //   url: '/audit-log',
  //   iconComponent: { name: 'cil-history' },
  //   attributes: { roles: ['ORGANIZATION_ADMIN'] }
  // },
  // ============================================
  // PROCUREMENT OPERATOR — everything day-to-day
  // ============================================
  {
    name: "PO Management",
    url: "/po-list",
    iconComponent: { name: "cil-description" },
    attributes: { roles: ["PROCUREMENT_OPERATOR"] },
    children: [
      {
        name: "All Purchase Orders",
        url: "/po-list",
        iconComponent: { name: "cil-list" }
      },
      {
        name: "Create PO",
        url: "/po-create",
        iconComponent: { name: "cil-plus" }
      },
      {
        name: "PO Closure",
        url: "/po-closure",
        iconComponent: { name: "cil-lock-locked" }
      }
    ]
  },
  {
    name: "Invoice Management",
    url: "/invoices",
    iconComponent: { name: "cil-file" },
    attributes: { roles: ["PROCUREMENT_OPERATOR"] }
  },
  {
    name: "Payment Tracking",
    url: "/payment-tracking",
    iconComponent: { name: "cil-money" },
    attributes: { roles: ["PROCUREMENT_OPERATOR"] }
  },
  {
    name: "Status Tracking",
    url: "/status-tracking",
    iconComponent: { name: "cil-chart-line" },
    attributes: { roles: ["PROCUREMENT_OPERATOR"] }
  },
  {
    name: "Supplier Management",
    url: "/create-s",
    iconComponent: { name: "cil-building" },
    attributes: { roles: ["PROCUREMENT_OPERATOR"] }
  },
  {
    name: "Reports",
    url: "/spend-analysis",
    iconComponent: { name: "cil-chart-pie" },
    attributes: { roles: ["PROCUREMENT_OPERATOR"] }
  },
  // {
  //   name: 'Audit Log',
  //   url: '/audit-log',
  //   iconComponent: { name: 'cil-history' },
  //   attributes: { roles: ['PROCUREMENT_OPERATOR'] }
  // },
  // ============================================
  // APPROVERS (CEO/COO/MANAGER/PROCUREMENT/FINANCE) — no menu entries.
  // Nothing to approve while APPROVAL_WORKFLOW_ENABLED is false. Their logins are untouched
  // in the DB — restoring these two entries is all it takes to bring the screens back.
  // ============================================
  // ============================================
  // SUPPLIER
  // ============================================
  {
    name: "Supplier Dashboard",
    url: "/supplier-dashboard",
    iconComponent: { name: "cil-speedometer" },
    attributes: { roles: ["ROLE_SUPPLIER"] }
  },
  {
    name: "Reports",
    url: "/supplier-reports",
    iconComponent: { name: "cil-chart-pie" },
    attributes: { roles: ["ROLE_SUPPLIER"] }
  }
];

// src/app/shared/service/ReportChatService.ts
var _ReportChatService = class _ReportChatService {
  constructor() {
    this.examplePrompts = [
      "What is our total spend?",
      "How much is outstanding?",
      "How many POs are in draft?",
      "How many invoices are paid?",
      "Pending invoice count",
      "Spend on Alpha Technologies",
      "Top supplier",
      "Status of ITTI/PO/26/003",
      "Spend this month"
    ];
    this.poStatusWords = {
      draft: "DRAFT",
      released: "RELEASED",
      approved: "APPROVED",
      closed: "CLOSED",
      foreclosed: "FORECLOSED",
      rejected: "REJECTED",
      cancelled: "CANCELLED",
      canceled: "CANCELLED",
      "pending approval": "PENDING_APPROVAL",
      "in progress": "IN_PROGRESS",
      delivered: "DELIVERED",
      completed: "COMPLETED"
    };
    this.invoiceStatusWords = {
      draft: "DRAFT",
      submitted: "SUBMITTED",
      pending: "SUBMITTED",
      approved: "APPROVED",
      paid: "PAID",
      settled: "PAID",
      rejected: "REJECTED",
      "closed permanently": "REJECTED_CLOSED",
      "permanently closed": "REJECTED_CLOSED"
    };
    this.handlers = [
      // ── greeting / explicit help ──────────────────────────────────────────
      {
        test: (q) => /^(hi|hello|hey|help|what can you|examples?)\b/.test(q),
        run: () => this.help()
      },
      // ── specific invoice lookup — "status of invoice INV-...", "show invoice ..." ─
      {
        test: (q) => q.includes("invoice") && (/\binv[-\s]?\d/.test(q) || /\bstatus\b/.test(q) || /\bshow\b/.test(q)),
        run: (q, { invoices }) => {
          const numMatch = q.match(/(inv[-\s]?\d[\w-]*)/i);
          if (!numMatch)
            return null;
          const needle = numMatch[1].replace(/[^0-9a-z]/gi, "").toLowerCase();
          const found = invoices.find((inv) => (inv.invoiceNumber || "").replace(/[^0-9a-z]/gi, "").toLowerCase().includes(needle));
          if (!found)
            return { text: `I couldn't find an invoice matching "${numMatch[1]}".` };
          return {
            text: `${found.invoiceNumber} \u2014 ${found.supplierName || found.supplierCompanyName || "Unknown supplier"}`,
            rows: [
              { label: "Status", value: found.status },
              { label: "PO", value: found.poNumber || "\u2014" },
              { label: "Amount", value: this.currency(found.totalAmount ?? found.grandTotal) },
              { label: "Due", value: found.dueDate ? new Date(found.dueDate).toLocaleDateString("en-GB") : "\u2014" },
              { label: "Paid on", value: found.paidAt ? new Date(found.paidAt).toLocaleDateString("en-GB") : "Not yet" }
            ]
          };
        }
      },
      // ── invoice count by status — "how many invoices are paid", "pending invoice count" ─
      {
        test: (q) => q.includes("invoice") && /\bhow many\b|\bcount\b|\bnumber of\b/.test(q) && Object.keys(this.invoiceStatusWords).some((w) => q.includes(w)),
        run: (q, { invoices }) => {
          const word = Object.keys(this.invoiceStatusWords).sort((a, b) => b.length - a.length).find((w) => q.includes(w));
          const status = this.invoiceStatusWords[word];
          const rows = invoices.filter((inv) => inv.status === status);
          const value = this.sum(rows, "totalAmount");
          return {
            text: `${rows.length} invoice${rows.length === 1 ? " is" : "s are"} currently ${status}${rows.length ? ", worth " + this.currency(value) : ""}.`,
            highlight: String(rows.length)
          };
        }
      },
      // ── overdue invoices ─────────────────────────────────────────────────────
      {
        test: (q) => q.includes("invoice") && /\boverdue\b|\blate\b/.test(q),
        run: (q, { invoices }) => {
          const today = /* @__PURE__ */ new Date();
          today.setHours(0, 0, 0, 0);
          const rows = invoices.filter((inv) => inv.status === "APPROVED" && inv.dueDate && new Date(inv.dueDate) < today);
          return {
            text: `${rows.length} approved invoice${rows.length === 1 ? " is" : "s are"} past due date, unpaid${rows.length ? ":" : "."}`,
            highlight: rows.length ? this.currency(this.sum(rows, "totalAmount")) : "0",
            rows: rows.slice(0, 5).map((inv) => ({ label: inv.invoiceNumber, value: this.currency(inv.totalAmount) }))
          };
        }
      },
      // ── total invoiced amount ────────────────────────────────────────────────
      {
        test: (q) => q.includes("invoice") && /\btotal invoiced\b|\bhow much.*invoiced\b|\binvoiced amount\b/.test(q),
        run: (q, { invoices }) => {
          const range = this.parseDateRange(q);
          const scoped = this.filterInvoicesByDate(invoices.filter((i) => i.status !== "REJECTED_CLOSED"), range);
          return {
            text: `Total invoiced by suppliers${range ? " " + range.label : ""} (${scoped.length} invoice${scoped.length === 1 ? "" : "s"}):`,
            highlight: this.currency(this.sum(scoped, "totalAmount"))
          };
        }
      },
      // ── invoices for a supplier — "invoices from Alpha", "how many invoices for Beta" ─
      {
        test: (q) => q.includes("invoice") && /\bfrom\b|\bfor\b/.test(q) && !Object.keys(this.invoiceStatusWords).some((w) => new RegExp(`\\bfor\\s+${w}\\b`).test(q)),
        run: (q, { invoices }) => {
          const m = q.match(/\b(?:from|for)\s+([a-z0-9 &.\-]+)$/);
          if (!m)
            return null;
          const name = m[1].trim();
          if (!name)
            return null;
          const rows = invoices.filter((inv) => (inv.supplierName || inv.supplierCompanyName || "").toLowerCase().includes(name));
          if (rows.length === 0)
            return { text: `No invoices found for a supplier matching "${name}".` };
          return {
            text: `Invoices from suppliers matching "${name}" (${rows.length} invoice${rows.length === 1 ? "" : "s"}):`,
            highlight: this.currency(this.sum(rows, "totalAmount"))
          };
        }
      },
      // ── generic invoice count — "how many invoices", "total invoices" ──────
      {
        test: (q) => q.includes("invoice") && /\bhow many\b|\btotal\b|\bnumber of\b|\bcount\b/.test(q),
        run: (q, { invoices }) => {
          const range = this.parseDateRange(q);
          const scoped = this.filterInvoicesByDate(invoices, range);
          return {
            text: `Invoices on record${range ? " " + range.label : ""}:`,
            highlight: String(scoped.length)
          };
        }
      },
      // ── specific PO lookup — "status of ITTI/PO/26/003", "show po 003" ────
      {
        test: (q) => !q.includes("invoice") && (/\bpo[\s/-]*[\d/]+/.test(q) || /\bpo\b.*\bstatus\b/.test(q) || /\bstatus\b.*\bpo\b/.test(q)),
        run: (q, { pos }) => {
          const numMatch = q.match(/([a-z]*\/?po\/?[a-z0-9/]*\d+)/i) || q.match(/\bpo\D*(\d+)/i);
          if (!numMatch)
            return null;
          const needle = numMatch[1].replace(/[^0-9a-z]/gi, "").toLowerCase();
          const found = pos.find((po) => (po.poNumber || "").replace(/[^0-9a-z]/gi, "").toLowerCase().includes(needle));
          if (!found)
            return { text: `I couldn't find a PO matching "${numMatch[1]}".` };
          return {
            text: `${found.poNumber} \u2014 ${found.supplierName || "Unknown supplier"}`,
            rows: [
              { label: "Status", value: found.status },
              { label: "Payment", value: found.paymentStatus || "UNPAID" },
              { label: "Value", value: this.currency(found.grandTotal) },
              { label: "Paid", value: this.currency(found.totalPaidAmount) },
              { label: "Created", value: this.poDate(found).toLocaleDateString("en-GB") }
            ]
          };
        }
      },
      // ── top supplier — "top supplier", "which supplier do we spend most on" ─
      {
        test: (q) => /\btop supplier\b|\bbiggest supplier\b|\bhighest spend\b|\bmost\b.*\bsupplier\b/.test(q),
        run: (q, { pos }) => {
          const range = this.parseDateRange(q);
          const scoped = this.filterPOsByDate(this.committed(pos), range);
          if (scoped.length === 0)
            return { text: `No committed spend${range ? " " + range.label : ""} to rank suppliers by.` };
          const bySupplier = /* @__PURE__ */ new Map();
          scoped.forEach((po) => {
            const key = po.supplierName || "Unknown";
            bySupplier.set(key, (bySupplier.get(key) || 0) + (Number(po.grandTotal) || 0));
          });
          const ranked = Array.from(bySupplier.entries()).sort((a, b) => b[1] - a[1]);
          const [name, value] = ranked[0];
          return {
            text: `Your top supplier${range ? " " + range.label : ""} by spend is:`,
            highlight: name,
            rows: [
              { label: "Spend", value: this.currency(value) },
              ...ranked.slice(1, 4).map(([n, v]) => ({ label: n, value: this.currency(v) }))
            ]
          };
        }
      },
      // ── supplier-specific PO spend — "spend on Alpha", "total for Beta Office" ─
      {
        test: (q) => !q.includes("invoice") && /\bspend\b|\bspent\b|\btotal\b|\bpaid\b/.test(q) && /\bon\b|\bfor\b|\bwith\b/.test(q),
        run: (q, { pos }) => {
          const m = q.match(/\b(?:on|for|with)\s+([a-z0-9 &.\-]+)$/);
          if (!m)
            return null;
          const name = m[1].trim();
          if (!name || this.poStatusWords[name])
            return null;
          const range = this.parseDateRange(q);
          const scoped = this.filterPOsByDate(this.committed(pos), range);
          const rows = scoped.filter((po) => (po.supplierName || "").toLowerCase().includes(name));
          if (rows.length === 0) {
            return { text: `No committed POs found for a supplier matching "${name}"${range ? " " + range.label : ""}.` };
          }
          const total = this.sum(rows, "grandTotal");
          return {
            text: `Spend with suppliers matching "${name}"${range ? " (" + range.label + ")" : ""}, across ${rows.length} PO${rows.length === 1 ? "" : "s"}:`,
            highlight: this.currency(total)
          };
        }
      },
      // ── PO count by status — "how many draft POs", "released POs count" ────
      {
        test: (q) => !q.includes("invoice") && /\bhow many\b|\bcount\b|\bnumber of\b/.test(q) && Object.keys(this.poStatusWords).some((w) => q.includes(w)),
        run: (q, { pos }) => {
          const word = Object.keys(this.poStatusWords).find((w) => q.includes(w));
          const status = this.poStatusWords[word];
          const rows = pos.filter((po) => po.status === status);
          const value = this.sum(rows, "grandTotal");
          return {
            text: `${rows.length} PO${rows.length === 1 ? " is" : "s are"} currently ${word.toUpperCase()}${rows.length ? ", worth " + this.currency(value) : ""}.`,
            highlight: String(rows.length)
          };
        }
      },
      // ── outstanding / pending payment ───────────────────────────────────────
      {
        test: (q) => /\boutstanding\b|\bpending payment\b|\bdo we owe\b|\bunpaid\b|\bawaiting payment\b/.test(q),
        run: (q, { pos }) => {
          const range = this.parseDateRange(q);
          const scoped = this.filterPOsByDate(this.committed(pos), range);
          const committedValue = this.sum(scoped, "grandTotal");
          const paidValue = this.sum(scoped, "totalPaidAmount");
          const outstanding = Math.max(0, committedValue - paidValue);
          return {
            text: `Outstanding to suppliers${range ? " " + range.label : ""}:`,
            highlight: this.currency(outstanding),
            rows: [
              { label: "Committed", value: this.currency(committedValue) },
              { label: "Paid", value: this.currency(paidValue) }
            ]
          };
        }
      },
      // ── total paid (PO roll-up) ──────────────────────────────────────────────
      {
        test: (q) => !q.includes("invoice") && /\btotal paid\b|\bhow much.*\bpaid\b|\bamount paid\b/.test(q),
        run: (q, { pos }) => {
          const range = this.parseDateRange(q);
          const scoped = this.filterPOsByDate(pos, range);
          return {
            text: `Total paid to suppliers${range ? " " + range.label : ""}:`,
            highlight: this.currency(this.sum(scoped, "totalPaidAmount"))
          };
        }
      },
      // ── average PO value ─────────────────────────────────────────────────────
      {
        test: (q) => /\baverage\b.*\b(po|order|value)\b/.test(q),
        run: (q, { pos }) => {
          const range = this.parseDateRange(q);
          const scoped = this.filterPOsByDate(this.committed(pos), range);
          if (scoped.length === 0)
            return { text: `No committed POs${range ? " " + range.label : ""} to average.` };
          return {
            text: `Average PO value${range ? " " + range.label : ""} (${scoped.length} PO${scoped.length === 1 ? "" : "s"}):`,
            highlight: this.currency(this.sum(scoped, "grandTotal") / scoped.length)
          };
        }
      },
      // ── active supplier count ────────────────────────────────────────────────
      {
        test: (q) => /\bhow many suppliers\b|\bactive suppliers\b|\bnumber of suppliers\b/.test(q),
        run: (q, { pos }) => {
          const range = this.parseDateRange(q);
          const scoped = this.filterPOsByDate(this.committed(pos), range);
          const names = new Set(scoped.map((po) => po.supplierName).filter(Boolean));
          return {
            text: `Active suppliers${range ? " " + range.label : ""} (with at least one committed PO):`,
            highlight: String(names.size)
          };
        }
      },
      // ── PO count (generic) — "how many POs", "total purchase orders" ───────
      {
        test: (q) => !q.includes("invoice") && /\bhow many\b.*\b(po|pos|orders|purchase orders)\b|\btotal\b.*\b(po|pos|orders)\b|\bnumber of\b.*\border/.test(q),
        run: (q, { pos }) => {
          const range = this.parseDateRange(q);
          const scoped = this.filterPOsByDate(pos, range);
          return {
            text: `Purchase orders on record${range ? " " + range.label : ""}:`,
            highlight: String(scoped.length)
          };
        }
      },
      // ── total spend / committed value — checked last of the "spend" family ──
      {
        test: (q) => !q.includes("invoice") && /\btotal spend\b|\bcommitted spend\b|\bhow much.*\bspen[dt]\b|\btotal value\b|\btotal committed\b/.test(q),
        run: (q, { pos }) => {
          const range = this.parseDateRange(q);
          const scoped = this.filterPOsByDate(this.committed(pos), range);
          return {
            text: `Total committed spend${range ? " " + range.label : ""} (${scoped.length} PO${scoped.length === 1 ? "" : "s"}, drafts/cancelled/rejected excluded):`,
            highlight: this.currency(this.sum(scoped, "grandTotal"))
          };
        }
      }
    ];
  }
  ask(rawQuery, allPOs, allInvoices = []) {
    const q = (rawQuery || "").trim().toLowerCase();
    if (!q)
      return this.help();
    const data = {
      pos: Array.isArray(allPOs) ? allPOs : [],
      invoices: Array.isArray(allInvoices) ? allInvoices : []
    };
    for (const handler of this.handlers) {
      if (handler.test(q)) {
        const reply = handler.run(q, data);
        if (reply)
          return reply;
      }
    }
    return this.fallback();
  }
  // ==========================================================================
  // SHARED HELPERS
  // ==========================================================================
  /** Same definition the Reports page's KPI tiles use — a cancelled/rejected/draft PO was
   *  never real spend. Keeping this identical to spend-analysis.component.ts means a chat
   *  answer and the page's own tiles can never quote different numbers for the same thing. */
  committed(pos) {
    return pos.filter((po) => !["CANCELLED", "REJECTED", "DRAFT"].includes(po.status));
  }
  sum(rows, field) {
    return rows.reduce((s, r) => s + (Number(r[field]) || 0), 0);
  }
  currency(v) {
    return "\u20B9" + (Number(v) || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  poDate(po) {
    return new Date(po.createdDate || po.createdAt || po.poDate || 0);
  }
  invoiceDate(inv) {
    return new Date(inv.createdAt || inv.invoiceDate || 0);
  }
  help() {
    return {
      text: "Ask me about spend, payments, PO or invoice counts, or a specific supplier, PO or invoice number. For example:",
      rows: this.examplePrompts.map((p) => ({ label: "", value: p }))
    };
  }
  fallback() {
    return {
      text: "I don't have a way to answer that yet \u2014 I only answer from real PO and invoice data, so I won't guess. Try one of these instead:",
      rows: this.examplePrompts.map((p) => ({ label: "", value: p }))
    };
  }
  // ==========================================================================
  // DATE RANGE PARSING — "this month", "last month", "this year", a month name,
  // or nothing at all (meaning: every record on file).
  // ==========================================================================
  parseDateRange(q) {
    const now = /* @__PURE__ */ new Date();
    const startOfMonth = (y, m) => new Date(y, m, 1, 0, 0, 0, 0);
    const endOfMonth = (y, m) => new Date(y, m + 1, 0, 23, 59, 59, 999);
    if (/\btoday\b/.test(q)) {
      const from = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
      const to = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
      return { from, to, label: "today" };
    }
    if (/\bthis week\b/.test(q)) {
      const from = new Date(now);
      from.setDate(now.getDate() - now.getDay());
      from.setHours(0, 0, 0, 0);
      const to = new Date(from);
      to.setDate(from.getDate() + 6);
      to.setHours(23, 59, 59, 999);
      return { from, to, label: "this week" };
    }
    if (/\blast month\b/.test(q)) {
      const m = now.getMonth() - 1;
      const y = m < 0 ? now.getFullYear() - 1 : now.getFullYear();
      const mm = (m + 12) % 12;
      return { from: startOfMonth(y, mm), to: endOfMonth(y, mm), label: "last month" };
    }
    if (/\bthis month\b/.test(q)) {
      return { from: startOfMonth(now.getFullYear(), now.getMonth()), to: endOfMonth(now.getFullYear(), now.getMonth()), label: "this month" };
    }
    if (/\bthis year\b/.test(q)) {
      return { from: new Date(now.getFullYear(), 0, 1), to: new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999), label: "this year" };
    }
    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december"
    ];
    for (let i = 0; i < months.length; i++) {
      if (q.includes(months[i]) || new RegExp(`\\b${months[i].slice(0, 3)}\\b`).test(q)) {
        const yearMatch = q.match(/\b(20\d{2})\b/);
        const y = yearMatch ? Number(yearMatch[1]) : now.getFullYear();
        return { from: startOfMonth(y, i), to: endOfMonth(y, i), label: `${months[i]} ${y}` };
      }
    }
    return null;
  }
  filterPOsByDate(pos, range) {
    if (!range)
      return pos;
    return pos.filter((po) => {
      const d = this.poDate(po);
      return d >= range.from && d <= range.to;
    });
  }
  filterInvoicesByDate(invoices, range) {
    if (!range)
      return invoices;
    return invoices.filter((inv) => {
      const d = this.invoiceDate(inv);
      return d >= range.from && d <= range.to;
    });
  }
};
_ReportChatService.\u0275fac = function ReportChatService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportChatService)();
};
_ReportChatService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportChatService, factory: _ReportChatService.\u0275fac, providedIn: "root" });
var ReportChatService = _ReportChatService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportChatService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/components/report-chat-widget/report-chat-widget.component.ts
var _c03 = ["chatScroll"];
function ReportChatWidgetComponent_div_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function ReportChatWidgetComponent_div_0_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleOpen());
    });
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementEnd();
  }
}
function ReportChatWidgetComponent_div_0_div_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementEnd();
  }
}
function ReportChatWidgetComponent_div_0_div_2_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r4.highlight);
  }
}
function ReportChatWidgetComponent_div_0_div_2_div_15_div_5_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.label);
  }
}
function ReportChatWidgetComponent_div_0_div_2_div_15_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function ReportChatWidgetComponent_div_0_div_2_div_15_div_5_div_1_Template_div_click_0_listener() {
      const r_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(!r_r6.label && ctx_r1.askExample(r_r6.value));
    });
    \u0275\u0275template(1, ReportChatWidgetComponent_div_0_div_2_div_15_div_5_div_1_span_1_Template, 2, 1, "span", 32);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275classProp("widget-row-clickable", !r_r6.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r6.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("widget-row-value", r_r6.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.value);
  }
}
function ReportChatWidgetComponent_div_0_div_2_div_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, ReportChatWidgetComponent_div_0_div_2_div_15_div_5_div_1_Template, 4, 6, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", m_r4.rows);
  }
}
function ReportChatWidgetComponent_div_0_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ReportChatWidgetComponent_div_0_div_2_div_15_div_4_Template, 2, 1, "div", 26)(5, ReportChatWidgetComponent_div_0_div_2_div_15_div_5_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    \u0275\u0275classProp("widget-row-user", m_r4.role === "user");
    \u0275\u0275advance();
    \u0275\u0275classProp("bubble-user", m_r4.role === "user")("bubble-bot", m_r4.role === "bot");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r4.highlight);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r4.rows && m_r4.rows.length);
  }
}
function ReportChatWidgetComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275listener("click", function ReportChatWidgetComponent_div_0_div_2_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleOpen());
    });
    \u0275\u0275elementStart(2, "div", 9)(3, "div", 10);
    \u0275\u0275element(4, "i", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 11);
    \u0275\u0275text(7, "Report Assistant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12);
    \u0275\u0275text(9, "Answers from your PO data \u2014 no AI, no waiting");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 13);
    \u0275\u0275listener("click", function ReportChatWidgetComponent_div_0_div_2_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.toggleOpen();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(11, "i", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 15, 0);
    \u0275\u0275template(14, ReportChatWidgetComponent_div_0_div_2_div_14_Template, 2, 0, "div", 16)(15, ReportChatWidgetComponent_div_0_div_2_div_15_Template, 6, 9, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportChatWidgetComponent_div_0_div_2_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.chatInput, $event) || (ctx_r1.chatInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ReportChatWidgetComponent_div_0_div_2_Template_input_keyup_enter_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendMessage());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 20);
    \u0275\u0275listener("click", function ReportChatWidgetComponent_div_0_div_2_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendMessage());
    });
    \u0275\u0275element(19, "i", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingData);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.chatMessages);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.chatInput);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.chatInput.trim());
  }
}
function ReportChatWidgetComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, ReportChatWidgetComponent_div_0_button_1_Template, 2, 0, "button", 3)(2, ReportChatWidgetComponent_div_0_div_2_Template, 20, 4, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOpen);
  }
}
var _ReportChatWidgetComponent = class _ReportChatWidgetComponent {
  constructor(dataService, reportChat) {
    this.dataService = dataService;
    this.reportChat = reportChat;
    this.visibleForRole = false;
    this.isOpen = false;
    this.isLoadingData = false;
    this.allPOs = [];
    this.allInvoices = [];
    this.chatMessages = [];
    this.chatInput = "";
  }
  ngOnInit() {
    const role = localStorage.getItem("role") || "";
    this.visibleForRole = role === "ORGANIZATION_ADMIN" || role === "PROCUREMENT_OPERATOR";
    this.chatMessages.push({
      role: "bot",
      text: "Ask me about spend, payments, PO or invoice counts, or a specific supplier, PO or invoice number \u2014 I'll answer from your real data. Try one of these:",
      rows: this.reportChat.examplePrompts.map((p) => ({ label: "", value: p }))
    });
  }
  ngAfterViewChecked() {
    if (this.chatScrollRef) {
      const el = this.chatScrollRef.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.isOpen)
      this.loadData();
  }
  loadData() {
    this.isLoadingData = true;
    const companyName = localStorage.getItem("companyName") || "";
    forkJoin({
      pos: this.dataService.getAllPurchaseOrders().pipe(catchError(() => of([]))),
      // Same endpoint Payment Tracking / Invoice Management already use — scoped to the
      // whole company rather than one buyer account, since Admin/Procurement have no
      // buyerId of their own (see buyer-invoices.component.ts for the same fallback).
      invoices: companyName ? this.dataService.getBuyerInvoices(companyName).pipe(catchError(() => of([]))) : of([])
    }).subscribe(({ pos, invoices }) => {
      this.allPOs = this.unwrapList(pos);
      this.allInvoices = this.unwrapList(invoices);
      this.isLoadingData = false;
    });
  }
  askExample(prompt) {
    this.chatInput = prompt;
    this.sendMessage();
  }
  sendMessage() {
    const question = this.chatInput.trim();
    if (!question)
      return;
    this.chatMessages.push({ role: "user", text: question });
    this.chatInput = "";
    const reply = this.reportChat.ask(question, this.allPOs, this.allInvoices);
    this.chatMessages.push(__spreadValues({ role: "bot" }, reply));
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
};
_ReportChatWidgetComponent.\u0275fac = function ReportChatWidgetComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportChatWidgetComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ReportChatService));
};
_ReportChatWidgetComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportChatWidgetComponent, selectors: [["app-report-chat-widget"]], viewQuery: function ReportChatWidgetComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatScrollRef = _t.first);
  }
}, decls: 1, vars: 1, consts: [["chatScroll", ""], ["class", "widget-root", 4, "ngIf"], [1, "widget-root"], ["class", "launcher-btn", "title", "Report Assistant", 3, "click", 4, "ngIf"], ["class", "widget-panel", 4, "ngIf"], ["title", "Report Assistant", 1, "launcher-btn", 3, "click"], [1, "bi", "bi-chat-square-text-fill"], [1, "widget-panel"], [1, "widget-header", 3, "click"], [1, "widget-header-left"], [1, "widget-avatar"], [1, "widget-title"], [1, "widget-subtitle"], ["title", "Minimise", 1, "minimise-btn", 3, "click"], [1, "bi", "bi-dash-lg"], [1, "widget-scroll"], ["class", "text-center py-3", 4, "ngIf"], ["class", "widget-row", 3, "widget-row-user", 4, "ngFor", "ngForOf"], [1, "widget-input-bar"], ["type", "text", "placeholder", "Ask about spend, payments, a PO\u2026", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "bi", "bi-send-fill"], [1, "text-center", "py-3"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "widget-row"], [1, "widget-bubble"], ["class", "widget-highlight", 4, "ngIf"], ["class", "widget-rows", 4, "ngIf"], [1, "widget-highlight"], [1, "widget-rows"], ["class", "widget-row-item", 3, "widget-row-clickable", "click", 4, "ngFor", "ngForOf"], [1, "widget-row-item", 3, "click"], ["class", "widget-row-label", 4, "ngIf"], [1, "widget-row-label"]], template: function ReportChatWidgetComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportChatWidgetComponent_div_0_Template, 3, 2, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.visibleForRole);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.widget-root[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 24px;\n  bottom: 24px;\n  z-index: 1045;\n}\n.launcher-btn[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  border: none;\n  background: #4f46e5;\n  color: #ffffff;\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 4px 16px rgba(79, 70, 229, 0.35);\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.launcher-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.45);\n}\n.widget-panel[_ngcontent-%COMP%] {\n  width: 360px;\n  max-width: calc(100vw - 48px);\n  max-height: 70vh;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.18);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  background: #4f46e5;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.widget-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.widget-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: rgba(255, 255, 255, 0.18);\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n.widget-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.88rem;\n  color: #ffffff;\n}\n.widget-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.8);\n  margin-top: 1px;\n}\n.minimise-btn[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  border: none;\n  background: rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.minimise-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.widget-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background: #f8fafc;\n  min-height: 200px;\n}\n.widget-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.widget-row-user[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.widget-bubble[_ngcontent-%COMP%] {\n  max-width: 85%;\n  padding: 9px 12px;\n  border-radius: 12px;\n  font-size: 0.82rem;\n  line-height: 1.45;\n}\n.bubble-bot[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  color: #0f172a;\n  border-bottom-left-radius: 4px;\n}\n.bubble-user[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: #ffffff;\n  border-bottom-right-radius: 4px;\n}\n.widget-highlight[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #4f46e5;\n  margin-top: 5px;\n}\n.widget-rows[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.widget-row-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  font-size: 0.76rem;\n  padding: 3px 0;\n}\n.widget-row-label[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.widget-row-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n.widget-row-clickable[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  cursor: pointer;\n  padding: 5px 9px;\n  background: #eef2ff;\n  border-radius: 8px;\n  transition: background 0.15s ease;\n}\n.widget-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #e0e7ff;\n}\n.widget-input-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 14px;\n  border-top: 1px solid #e2e8f0;\n  background: #ffffff;\n  flex-shrink: 0;\n}\n.widget-input-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.widget-input-bar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n@media (max-width: 480px) {\n  .widget-root[_ngcontent-%COMP%] {\n    right: 12px;\n    bottom: 12px;\n  }\n  .widget-panel[_ngcontent-%COMP%] {\n    width: calc(100vw - 24px);\n  }\n}\n/*# sourceMappingURL=report-chat-widget.component.css.map */"] });
var ReportChatWidgetComponent = _ReportChatWidgetComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportChatWidgetComponent, [{
    type: Component,
    args: [{ selector: "app-report-chat-widget", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="widget-root" *ngIf="visibleForRole">

  <!-- Collapsed launcher button -->
  <button class="launcher-btn" *ngIf="!isOpen" (click)="toggleOpen()" title="Report Assistant">
    <i class="bi bi-chat-square-text-fill"></i>
  </button>

  <!-- Expanded panel -->
  <div class="widget-panel" *ngIf="isOpen">

    <div class="widget-header" (click)="toggleOpen()">
      <div class="widget-header-left">
        <div class="widget-avatar"><i class="bi bi-chat-square-text-fill"></i></div>
        <div>
          <div class="widget-title">Report Assistant</div>
          <div class="widget-subtitle">Answers from your PO data \u2014 no AI, no waiting</div>
        </div>
      </div>
      <button class="minimise-btn" (click)="toggleOpen(); $event.stopPropagation()" title="Minimise">
        <i class="bi bi-dash-lg"></i>
      </button>
    </div>

    <div class="widget-scroll" #chatScroll>
      <div class="text-center py-3" *ngIf="isLoadingData">
        <div class="spinner-border spinner-border-sm text-primary"></div>
      </div>

      <div *ngFor="let m of chatMessages" class="widget-row" [class.widget-row-user]="m.role === 'user'">
        <div class="widget-bubble" [class.bubble-user]="m.role === 'user'" [class.bubble-bot]="m.role === 'bot'">
          <div>{{ m.text }}</div>
          <div class="widget-highlight" *ngIf="m.highlight">{{ m.highlight }}</div>
          <div class="widget-rows" *ngIf="m.rows && m.rows.length">
            <div class="widget-row-item" *ngFor="let r of m.rows"
                 [class.widget-row-clickable]="!r.label"
                 (click)="!r.label && askExample(r.value)">
              <span *ngIf="r.label" class="widget-row-label">{{ r.label }}</span>
              <span [class.widget-row-value]="r.label">{{ r.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="widget-input-bar">
      <input type="text" class="form-control" placeholder="Ask about spend, payments, a PO\u2026"
             [(ngModel)]="chatInput" (keyup.enter)="sendMessage()">
      <button class="btn btn-primary" (click)="sendMessage()" [disabled]="!chatInput.trim()">
        <i class="bi bi-send-fill"></i>
      </button>
    </div>

  </div>

</div>
`, styles: ["/* src/app/shared/components/report-chat-widget/report-chat-widget.component.css */\n.widget-root {\n  position: fixed;\n  right: 24px;\n  bottom: 24px;\n  z-index: 1045;\n}\n.launcher-btn {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  border: none;\n  background: #4f46e5;\n  color: #ffffff;\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 4px 16px rgba(79, 70, 229, 0.35);\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.launcher-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.45);\n}\n.widget-panel {\n  width: 360px;\n  max-width: calc(100vw - 48px);\n  max-height: 70vh;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.18);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.widget-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  background: #4f46e5;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.widget-header-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.widget-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: rgba(255, 255, 255, 0.18);\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n.widget-title {\n  font-weight: 700;\n  font-size: 0.88rem;\n  color: #ffffff;\n}\n.widget-subtitle {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.8);\n  margin-top: 1px;\n}\n.minimise-btn {\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  border: none;\n  background: rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.minimise-btn:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.widget-scroll {\n  flex: 1;\n  overflow-y: auto;\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background: #f8fafc;\n  min-height: 200px;\n}\n.widget-row {\n  display: flex;\n}\n.widget-row-user {\n  justify-content: flex-end;\n}\n.widget-bubble {\n  max-width: 85%;\n  padding: 9px 12px;\n  border-radius: 12px;\n  font-size: 0.82rem;\n  line-height: 1.45;\n}\n.bubble-bot {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  color: #0f172a;\n  border-bottom-left-radius: 4px;\n}\n.bubble-user {\n  background: #4f46e5;\n  color: #ffffff;\n  border-bottom-right-radius: 4px;\n}\n.widget-highlight {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #4f46e5;\n  margin-top: 5px;\n}\n.widget-rows {\n  margin-top: 7px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.widget-row-item {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  font-size: 0.76rem;\n  padding: 3px 0;\n}\n.widget-row-label {\n  color: #64748b;\n}\n.widget-row-value {\n  font-weight: 600;\n  color: #0f172a;\n}\n.widget-row-clickable {\n  color: #4f46e5;\n  cursor: pointer;\n  padding: 5px 9px;\n  background: #eef2ff;\n  border-radius: 8px;\n  transition: background 0.15s ease;\n}\n.widget-row-clickable:hover {\n  background: #e0e7ff;\n}\n.widget-input-bar {\n  display: flex;\n  gap: 8px;\n  padding: 12px 14px;\n  border-top: 1px solid #e2e8f0;\n  background: #ffffff;\n  flex-shrink: 0;\n}\n.widget-input-bar input {\n  font-size: 0.82rem;\n}\n.widget-input-bar .btn {\n  flex-shrink: 0;\n}\n@media (max-width: 480px) {\n  .widget-root {\n    right: 12px;\n    bottom: 12px;\n  }\n  .widget-panel {\n    width: calc(100vw - 24px);\n  }\n}\n/*# sourceMappingURL=report-chat-widget.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: ReportChatService }], { chatScrollRef: [{
    type: ViewChild,
    args: ["chatScroll"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportChatWidgetComponent, { className: "ReportChatWidgetComponent", filePath: "src/app/shared/components/report-chat-widget/report-chat-widget.component.ts", lineNumber: 34 });
})();

// src/app/layout/default-layout/default-layout.component.ts
var _c04 = () => [];
var _DefaultLayoutComponent = class _DefaultLayoutComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.userRoles = signal([], ...ngDevMode ? [{ debugName: "userRoles" }] : []);
    this.navItemsFiltered = computed(() => {
      const roles = this.userRoles();
      if (!roles || roles.length === 0) {
        console.warn("[MENU] No roles found for user");
        return [];
      }
      return this.filterNavItems(navItems, roles);
    }, ...ngDevMode ? [{ debugName: "navItemsFiltered" }] : []);
  }
  ngOnInit() {
    const user = this.authService.getUser();
    console.log("\u2705 FULL BUYER DETAILS:\n", JSON.stringify(user, null, 2));
    console.log("RAW USER FROM AUTH:", this.authService.getUser());
    let roles = [];
    if (user?.roles?.length) {
      roles = user.roles.filter((r) => typeof r === "string" && r.trim().length > 0);
    }
    if (!roles.length) {
      const roleFromStorage = localStorage.getItem("role");
      if (roleFromStorage) {
        roles = [roleFromStorage];
      }
    }
    console.log("\u2705 CLEANED USER ROLES:", roles);
    this.userRoles.set(roles);
  }
  /**
   * ✅ Recursive role-based menu filtering
   */
  filterNavItems(items, roles) {
    return items.map((item) => {
      const allowedRoles = item.attributes?.["roles"];
      const allowed = !allowedRoles || allowedRoles.some((r) => roles.includes(r));
      if (!allowed)
        return null;
      const newItem = __spreadValues({}, item);
      if (item.children) {
        newItem.children = this.filterNavItems(item.children, roles);
        if (!newItem.children.length && !newItem.url) {
          return null;
        }
      }
      return newItem;
    }).filter((i) => i !== null);
  }
};
_DefaultLayoutComponent.\u0275fac = function DefaultLayoutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultLayoutComponent)();
};
_DefaultLayoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DefaultLayoutComponent, selectors: [["app-default-layout"]], decls: 14, vars: 4, consts: [["sidebar1", "cSidebar"], ["colorScheme", "dark", "id", "sidebar1", "visible", "", 1, "d-print-none", "sidebar", "sidebar-fixed", "border-end"], [1, "border-bottom", "d-flex", "justify-content-center", "align-items-center"], [3, "routerLink"], ["src", "assets/images/ITTI-Logo.png", "alt", "Company Logo", 2, "height", "50px"], ["pointerEventsMethod", "scrollbar", "visibility", "hover"], ["dropdownMode", "none", "compact", "", 3, "navItems"], [1, "wrapper", "d-flex", "flex-column", "min-vh-100"], ["position", "sticky", "sidebarId", "sidebar1", 1, "mb-4", "d-print-none", "header", "header-sticky", "p-0", "shadow-sm", 3, "cShadowOnScroll"], [1, "body", "flex-grow-1"], ["breakpoint", "lg", 1, "h-auto", "px-4"]], template: function DefaultLayoutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-sidebar", 1, 0)(2, "c-sidebar-header", 2)(3, "c-sidebar-brand", 3);
    \u0275\u0275element(4, "img", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ng-scrollbar", 5);
    \u0275\u0275element(6, "c-sidebar-nav", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7);
    \u0275\u0275element(8, "app-default-header", 8);
    \u0275\u0275elementStart(9, "div", 9)(10, "c-container", 10);
    \u0275\u0275element(11, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "app-default-footer");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "app-report-chat-widget");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c04));
    \u0275\u0275advance(3);
    \u0275\u0275property("navItems", ctx.navItemsFiltered());
    \u0275\u0275advance(2);
    \u0275\u0275property("cShadowOnScroll", "sm");
  }
}, dependencies: [
  CommonModule,
  RouterModule,
  RouterOutlet,
  RouterLink,
  SidebarComponent,
  SidebarHeaderComponent,
  SidebarBrandComponent,
  SidebarNavComponent,
  // SidebarToggleDirective,
  ContainerComponent,
  ShadowOnScrollDirective,
  DefaultHeaderComponent,
  DefaultFooterComponent,
  NgScrollbar,
  ReportChatWidgetComponent
], styles: ["\n\n[_nghost-%COMP%]  .ng-scrollbar {\n  --scrollbar-padding: 1px;\n  --scrollbar-size: 5px;\n  --scrollbar-thumb-color: var(--cui-gray-500, #aab3c5);\n  --scrollbar-thumb-hover-color: var(--cui-gray-400, #cfd4de);\n  --scrollbar-hover-size: calc(var(--scrollbar-size) * 1.5);\n  --scrollbar-border-radius: 5px;\n}\n[_nghost-%COMP%]  .ng-scroll-content {\n  display: flex;\n  min-height: 100%;\n}\n/*# sourceMappingURL=default-layout.component.css.map */"] });
var DefaultLayoutComponent = _DefaultLayoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-default-layout", standalone: true, imports: [
      CommonModule,
      RouterModule,
      RouterOutlet,
      RouterLink,
      SidebarComponent,
      SidebarHeaderComponent,
      SidebarBrandComponent,
      SidebarNavComponent,
      // SidebarToggleDirective,
      ContainerComponent,
      ShadowOnScrollDirective,
      DefaultHeaderComponent,
      DefaultFooterComponent,
      NgScrollbar,
      ReportChatWidgetComponent
    ], template: `<!--sidebar-->\r
<c-sidebar \r
  #sidebar1="cSidebar"\r
  class="d-print-none sidebar sidebar-fixed border-end"\r
  colorScheme="dark"\r
  id="sidebar1"\r
  visible\r
>\r
<c-sidebar-header class="border-bottom d-flex justify-content-center align-items-center">\r
  <c-sidebar-brand [routerLink]="[]">\r
    <img src="assets/images/ITTI-Logo.png" \r
         alt="Company Logo" \r
         style="height: 50px;" />\r
  </c-sidebar-brand>\r
</c-sidebar-header>\r
\r
  <!-- <ng-scrollbar pointerEventsMethod="scrollbar" visibility="hover">\r
    <c-sidebar-nav [navItems]="navItems" dropdownMode="none" compact />\r
  </ng-scrollbar> -->\r
  <ng-scrollbar pointerEventsMethod="scrollbar" visibility="hover">\r
  <c-sidebar-nav \r
    [navItems]="navItemsFiltered()" \r
    dropdownMode="none" \r
    compact \r
  />\r
</ng-scrollbar>\r
\r
\r
  <!-- @if (!sidebar1.narrow) {\r
    <c-sidebar-footer cSidebarToggle="sidebar1" class="border-top d-none d-lg-flex" toggle="unfoldable" style="cursor: pointer;">\r
      <button cSidebarToggler aria-label="Toggle sidebar fold"></button>\r
    </c-sidebar-footer>\r
  } -->\r
</c-sidebar>\r
\r
<!--main-->\r
<div class="wrapper d-flex flex-column min-vh-100">\r
  <!--app-header-->\r
  <app-default-header\r
    [cShadowOnScroll]="'sm'"\r
    class="mb-4 d-print-none header header-sticky p-0 shadow-sm"\r
    position="sticky"\r
    sidebarId="sidebar1"\r
  />\r
  <!--app-body-->\r
  <div class="body flex-grow-1">\r
    <c-container breakpoint="lg" class="h-auto px-4">\r
      <router-outlet />\r
    </c-container>\r
  </div>\r
  <!--app footer-->\r
  <app-default-footer />\r
</div>\r
\r
<!-- Report Assistant \u2014 floating, every page, outside router-outlet so it survives navigation -->\r
<app-report-chat-widget />\r
`, styles: ["/* src/app/layout/default-layout/default-layout.component.scss */\n:host::ng-deep .ng-scrollbar {\n  --scrollbar-padding: 1px;\n  --scrollbar-size: 5px;\n  --scrollbar-thumb-color: var(--cui-gray-500, #aab3c5);\n  --scrollbar-thumb-hover-color: var(--cui-gray-400, #cfd4de);\n  --scrollbar-hover-size: calc(var(--scrollbar-size) * 1.5);\n  --scrollbar-border-radius: 5px;\n}\n:host::ng-deep .ng-scroll-content {\n  display: flex;\n  min-height: 100%;\n}\n/*# sourceMappingURL=default-layout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DefaultLayoutComponent, { className: "DefaultLayoutComponent", filePath: "src/app/layout/default-layout/default-layout.component.ts", lineNumber: 120 });
})();
export {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent
};
//# sourceMappingURL=chunk-C3G3GS7G.js.map
