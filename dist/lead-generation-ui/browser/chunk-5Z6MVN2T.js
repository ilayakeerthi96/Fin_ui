import {
  AlertModule,
  BadgeComponent,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ContainerComponent,
  IconDirective,
  RowComponent
} from "./chunk-U7YW3DHP.js";
import {
  DataService
} from "./chunk-OQIPAMNU.js";
import "./chunk-JKMYCEKN.js";
import {
  CommonModule,
  Component,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-BCCUO726.js";
import "./chunk-SO7Q7VKX.js";

// src/app/views/base/orgadmin-dashboard/orgadmin-dashboard.component.ts
function OrgAdminDashboardComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "div", 51);
    \u0275\u0275elementStart(2, "p", 52);
    \u0275\u0275text(3, "Loading users\u2026");
    \u0275\u0275elementEnd()();
  }
}
function OrgAdminDashboardComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function OrgAdminDashboardComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1, " No users yet \u2014 create the first one from Manage Users. ");
    \u0275\u0275elementEnd();
  }
}
function OrgAdminDashboardComponent_div_96_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 64)(3, "div", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 67);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 62)(12, "span", 68);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 69);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getInitials(user_r3.fullName));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.hierarchyLevelName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("chip-active", user_r3.isActive)("chip-inactive", !user_r3.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(user_r3.createdAt));
  }
}
function OrgAdminDashboardComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 57);
    \u0275\u0275element(3, "i", 58);
    \u0275\u0275elementStart(4, "h5");
    \u0275\u0275text(5, "Recently Added Users");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 59);
    \u0275\u0275listener("click", function OrgAdminDashboardComponent_div_96_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.navigateTo("/hierarchy-users"));
    });
    \u0275\u0275text(7, " View All ");
    \u0275\u0275element(8, "i", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "table", 61)(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 62);
    \u0275\u0275text(19, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Added");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, OrgAdminDashboardComponent_div_96_tr_23_Template, 16, 10, "tr", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r0.recentUsers)("ngForTrackBy", ctx_r0.trackById);
  }
}
var _OrgAdminDashboardComponent = class _OrgAdminDashboardComponent {
  constructor(router, dataService) {
    this.router = router;
    this.dataService = dataService;
    this.fullName = "";
    this.email = "";
    this.companyName = "";
    this.phone = "";
    this.role = "Organization Administrator";
    this.isLoading = false;
    this.errorMessage = "";
    this.stats = {
      totalUsers: 0,
      activeUsers: 0,
      inactiveUsers: 0
    };
    this.allUsers = [];
    this.recentUsers = [];
  }
  ngOnInit() {
    this.loadUserDetails();
    this.loadDashboardData();
  }
  loadUserDetails() {
    this.fullName = localStorage.getItem("fullName") || "Admin";
    this.email = localStorage.getItem("email") || "admin@company.com";
    this.companyName = localStorage.getItem("companyName") || "Unknown Company";
    this.phone = localStorage.getItem("phone") || "Not provided";
  }
  loadDashboardData() {
    this.isLoading = true;
    this.errorMessage = "";
    this.dataService.getHierarchyUsersByCompany(this.companyName).subscribe({
      next: (response) => {
        this.allUsers = response?.success && response?.data ? response.data : [];
        this.stats.totalUsers = this.allUsers.length;
        this.stats.activeUsers = this.allUsers.filter((u) => u.isActive === true).length;
        this.stats.inactiveUsers = this.stats.totalUsers - this.stats.activeUsers;
        this.recentUsers = [...this.allUsers].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5);
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Could not load users.";
        this.allUsers = [];
        this.recentUsers = [];
        this.stats = { totalUsers: 0, activeUsers: 0, inactiveUsers: 0 };
        this.isLoading = false;
      }
    });
  }
  /** A quiet, common enterprise-dashboard touch — costs nothing, reads as more considered
   *  than a static "Welcome" every time the page loads. */
  get greeting() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 12)
      return "Good morning";
    if (hour < 17)
      return "Good afternoon";
    return "Good evening";
  }
  navigateTo(route) {
    this.router.navigate([route]);
  }
  getInitials(name) {
    if (!name)
      return "NA";
    const parts = name.split(" ");
    if (parts.length >= 2)
      return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.substring(0, 2).toUpperCase();
  }
  getActivePercentage() {
    if (this.stats.totalUsers === 0)
      return 0;
    return Math.round(this.stats.activeUsers / this.stats.totalUsers * 100);
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "N/A";
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime()))
        return "N/A";
      return date.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" });
    } catch {
      return "N/A";
    }
  }
  trackById(_i, row) {
    return row?.id;
  }
};
_OrgAdminDashboardComponent.\u0275fac = function OrgAdminDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OrgAdminDashboardComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService));
};
_OrgAdminDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrgAdminDashboardComponent, selectors: [["app-orgadmin-dashboard"]], decls: 97, vars: 15, consts: [["fluid", "", 1, "admin-dash", "mt-4", "p-4"], [1, "welcome-card", "mb-4"], [1, "welcome-main"], [1, "avatar-circle"], [1, "welcome-greeting"], [1, "role-pill"], [1, "cil-shield-alt", "me-1"], [1, "welcome-meta"], [1, "meta-item"], [1, "cil-envelope-closed"], [1, "cil-building"], [1, "cil-phone"], [1, "scope-note", "mb-4"], [1, "cil-info"], [1, "mb-4", "g-3"], ["xs", "12", "sm", "6", "lg", "4"], [1, "stat-card", "accent-indigo"], [1, "stat-icon-badge", "tint-indigo"], [1, "cil-people"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-footer"], [1, "stat-card", "accent-emerald"], [1, "stat-icon-badge", "tint-emerald"], [1, "cil-check-circle"], [1, "stat-footer", "footer-positive"], [1, "stat-card", "accent-slate"], [1, "stat-icon-badge", "tint-slate"], [1, "cil-x-circle"], [1, "panel", "mb-4"], [1, "panel-header"], [1, "cil-bolt"], [1, "panel-body", "action-row"], ["type", "button", 1, "action-item", 3, "click"], [1, "action-icon-badge", "tint-indigo"], [1, "cil-user-follow"], [1, "action-text"], [1, "action-title"], [1, "action-subtitle"], [1, "cil-arrow-right", "action-arrow"], [1, "action-icon-badge", "tint-emerald"], [1, "cil-chart-pie"], [1, "action-icon-badge", "tint-amber"], [1, "cil-history"], [1, "panel"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger m-3", 4, "ngIf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "alert", "alert-danger", "m-3"], [1, "text-center", "py-5", "text-muted"], [1, "table-responsive"], [1, "panel-header", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "cil-list"], ["cButton", "", "color", "link", "size", "sm", 1, "p-0", "view-all-link", 3, "click"], [1, "cil-arrow-right", "ms-1"], [1, "table", "users-table", "mb-0"], [1, "text-center"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "d-flex", "align-items-center", "gap-2"], [1, "avatar-circle-sm"], [1, "fw-semibold"], [1, "text-muted"], [1, "status-chip"], [1, "small", "text-muted"]], template: function OrgAdminDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-container", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275element(9, "i", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 7)(12, "span", 8);
    \u0275\u0275element(13, "i", 9);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 8);
    \u0275\u0275element(16, "i", 10);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 8);
    \u0275\u0275element(19, "i", 11);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 12);
    \u0275\u0275element(22, "i", 13);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, " You create and manage every login on this system \u2014 Procurement's day-to-day account included \u2014 plus Reports and the Audit Log. PO creation, invoices and payments are handled by Procurement, not from here. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "c-row", 14)(26, "c-col", 15)(27, "div", 16)(28, "div", 17);
    \u0275\u0275element(29, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 19)(31, "div", 20);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 21);
    \u0275\u0275text(34, "Total Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 22);
    \u0275\u0275text(36, "Every login you've created");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "c-col", 15)(38, "div", 23)(39, "div", 24);
    \u0275\u0275element(40, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 19)(42, "div", 20);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 21);
    \u0275\u0275text(45, "Active Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 26);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "c-col", 15)(49, "div", 27)(50, "div", 28);
    \u0275\u0275element(51, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 19)(53, "div", 20);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 21);
    \u0275\u0275text(56, "Inactive Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 22);
    \u0275\u0275text(58, "Deactivated, not deleted");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(59, "div", 30)(60, "div", 31);
    \u0275\u0275element(61, "i", 32);
    \u0275\u0275elementStart(62, "h5");
    \u0275\u0275text(63, "Quick Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 33)(65, "button", 34);
    \u0275\u0275listener("click", function OrgAdminDashboardComponent_Template_button_click_65_listener() {
      return ctx.navigateTo("/hierarchy-users");
    });
    \u0275\u0275elementStart(66, "div", 35);
    \u0275\u0275element(67, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 37)(69, "div", 38);
    \u0275\u0275text(70, "Manage Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 39);
    \u0275\u0275text(72, "Create and edit logins");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(73, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "button", 34);
    \u0275\u0275listener("click", function OrgAdminDashboardComponent_Template_button_click_74_listener() {
      return ctx.navigateTo("/spend-analysis");
    });
    \u0275\u0275elementStart(75, "div", 41);
    \u0275\u0275element(76, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 37)(78, "div", 38);
    \u0275\u0275text(79, "Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 39);
    \u0275\u0275text(81, "Purchase order spend");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(82, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "button", 34);
    \u0275\u0275listener("click", function OrgAdminDashboardComponent_Template_button_click_83_listener() {
      return ctx.navigateTo("/audit-log");
    });
    \u0275\u0275elementStart(84, "div", 43);
    \u0275\u0275element(85, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 37)(87, "div", 38);
    \u0275\u0275text(88, "Audit Log");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 39);
    \u0275\u0275text(90, "Everything that's happened");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(91, "i", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(92, "div", 45);
    \u0275\u0275template(93, OrgAdminDashboardComponent_div_93_Template, 4, 0, "div", 46)(94, OrgAdminDashboardComponent_div_94_Template, 2, 1, "div", 47)(95, OrgAdminDashboardComponent_div_95_Template, 2, 0, "div", 48)(96, OrgAdminDashboardComponent_div_96_Template, 24, 2, "div", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.getInitials(ctx.fullName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx.greeting, ", ", ctx.fullName.split(" ")[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.role);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.companyName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.phone);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx.stats.totalUsers);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.stats.activeUsers);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx.getActivePercentage(), "% active");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.stats.inactiveUsers);
    \u0275\u0275advance(39);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.errorMessage && ctx.recentUsers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.recentUsers.length > 0);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  ContainerComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  AlertModule
], styles: ["\n\n.admin-dash[_ngcontent-%COMP%] {\n  --ink: #0f172a;\n  --ink-muted: #64748b;\n  --ink-faint: #94a3b8;\n  --border: #e2e8f0;\n  --surface: #ffffff;\n  --surface-2: #f8fafc;\n  --indigo: #4f46e5;\n  --indigo-tint: #eef2ff;\n  --emerald: #059669;\n  --emerald-tint: #ecfdf5;\n  --amber: #d97706;\n  --amber-tint: #fffbeb;\n  --slate: #475569;\n  --slate-tint: #f1f5f9;\n}\n.welcome-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-left: 4px solid var(--indigo);\n  border-radius: 12px;\n  padding: 20px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);\n}\n.welcome-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: var(--indigo);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.welcome-greeting[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--ink);\n  margin-bottom: 4px;\n}\n.role-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--indigo);\n  background: var(--indigo-tint);\n  padding: 3px 10px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.welcome-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.82rem;\n  color: var(--ink-muted);\n}\n.meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--ink-faint);\n  font-size: 0.9rem;\n}\n.scope-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: var(--indigo-tint);\n  border: 1px solid #c7d2fe;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 0.85rem;\n  color: #3730a3;\n  line-height: 1.5;\n}\n.scope-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-top: 3px solid transparent;\n  border-radius: 12px;\n  padding: 20px;\n  height: 100%;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);\n  transform: translateY(-2px);\n}\n.stat-card.accent-indigo[_ngcontent-%COMP%] {\n  border-top-color: var(--indigo);\n}\n.stat-card.accent-emerald[_ngcontent-%COMP%] {\n  border-top-color: var(--emerald);\n}\n.stat-card.accent-slate[_ngcontent-%COMP%] {\n  border-top-color: var(--slate);\n}\n.stat-icon-badge[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  flex-shrink: 0;\n}\n.tint-indigo[_ngcontent-%COMP%] {\n  background: var(--indigo-tint);\n  color: var(--indigo);\n}\n.tint-emerald[_ngcontent-%COMP%] {\n  background: var(--emerald-tint);\n  color: var(--emerald);\n}\n.tint-amber[_ngcontent-%COMP%] {\n  background: var(--amber-tint);\n  color: var(--amber);\n}\n.tint-slate[_ngcontent-%COMP%] {\n  background: var(--slate-tint);\n  color: var(--slate);\n}\n.stat-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.85rem;\n  font-weight: 700;\n  color: var(--ink);\n  line-height: 1.1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--ink-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 2px;\n}\n.stat-footer[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--ink-faint);\n  margin-top: 6px;\n}\n.footer-positive[_ngcontent-%COMP%] {\n  color: var(--emerald);\n  font-weight: 600;\n}\n.panel[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 22px;\n  border-bottom: 1px solid var(--border);\n  background: var(--surface-2);\n}\n.panel-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--indigo);\n  font-size: 1.05rem;\n}\n.panel-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--ink);\n}\n.panel-body[_ngcontent-%COMP%] {\n  padding: 18px 22px;\n}\n.view-all-link[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--indigo) !important;\n  text-decoration: none;\n}\n.action-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 12px;\n}\n.action-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 14px 16px;\n  text-align: left;\n  cursor: pointer;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.action-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--indigo);\n  background: var(--surface-2);\n}\n.action-icon-badge[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.05rem;\n  flex-shrink: 0;\n}\n.action-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.action-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--ink);\n}\n.action-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--ink-muted);\n  margin-top: 1px;\n}\n.action-arrow[_ngcontent-%COMP%] {\n  color: var(--ink-faint);\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.users-table[_ngcontent-%COMP%] {\n  font-size: 0.87rem;\n}\n.users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  color: var(--ink-muted);\n  font-weight: 700;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  padding: 12px 22px;\n  border-bottom: 1px solid var(--border);\n  border-top: none;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 22px;\n  vertical-align: middle;\n  border-top: 1px solid var(--border);\n  color: var(--ink);\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  border-top: none;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n}\n.avatar-circle-sm[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--indigo-tint);\n  color: var(--indigo);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.68rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.chip-active[_ngcontent-%COMP%] {\n  background: var(--emerald-tint);\n  color: var(--emerald);\n}\n.chip-inactive[_ngcontent-%COMP%] {\n  background: var(--slate-tint);\n  color: var(--slate);\n}\n@media (max-width: 768px) {\n  .welcome-card[_ngcontent-%COMP%] {\n    padding: 16px 18px;\n  }\n  .avatar-circle[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n    font-size: 1rem;\n  }\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .action-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=orgadmin-dashboard.component.css.map */"] });
var OrgAdminDashboardComponent = _OrgAdminDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrgAdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-orgadmin-dashboard", standalone: true, imports: [
      CommonModule,
      ContainerComponent,
      RowComponent,
      ColComponent,
      CardComponent,
      CardHeaderComponent,
      CardBodyComponent,
      ButtonDirective,
      IconDirective,
      BadgeComponent,
      AlertModule
    ], template: `
<c-container class="admin-dash mt-4 p-4" fluid>

  <!-- \u2500\u2500 WELCOME STRIP \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="welcome-card mb-4">
    <div class="welcome-main">
      <div class="avatar-circle">{{ getInitials(fullName) }}</div>
      <div>
        <div class="welcome-greeting">{{ greeting }}, {{ fullName.split(' ')[0] }}</div>
        <span class="role-pill"><i class="cil-shield-alt me-1"></i>{{ role }}</span>
      </div>
    </div>
    <div class="welcome-meta">
      <span class="meta-item"><i class="cil-envelope-closed"></i>{{ email }}</span>
      <span class="meta-item"><i class="cil-building"></i>{{ companyName }}</span>
      <span class="meta-item"><i class="cil-phone"></i>{{ phone }}</span>
    </div>
  </div>

  <!-- \u2500\u2500 ADMIN ROLE NOTE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="scope-note mb-4">
    <i class="cil-info"></i>
    <span>
      You create and manage every login on this system \u2014 Procurement's day-to-day account
      included \u2014 plus Reports and the Audit Log. PO creation, invoices and payments are
      handled by Procurement, not from here.
    </span>
  </div>

  <!-- \u2500\u2500 STAT CARDS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <c-row class="mb-4 g-3">

    <c-col xs="12" sm="6" lg="4">
      <div class="stat-card accent-indigo">
        <div class="stat-icon-badge tint-indigo">
          <i class="cil-people"></i>
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ stats.totalUsers }}</div>
          <div class="stat-label">Total Users</div>
          <div class="stat-footer">Every login you've created</div>
        </div>
      </div>
    </c-col>

    <c-col xs="12" sm="6" lg="4">
      <div class="stat-card accent-emerald">
        <div class="stat-icon-badge tint-emerald">
          <i class="cil-check-circle"></i>
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ stats.activeUsers }}</div>
          <div class="stat-label">Active Users</div>
          <div class="stat-footer footer-positive">{{ getActivePercentage() }}% active</div>
        </div>
      </div>
    </c-col>

    <c-col xs="12" sm="6" lg="4">
      <div class="stat-card accent-slate">
        <div class="stat-icon-badge tint-slate">
          <i class="cil-x-circle"></i>
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ stats.inactiveUsers }}</div>
          <div class="stat-label">Inactive Users</div>
          <div class="stat-footer">Deactivated, not deleted</div>
        </div>
      </div>
    </c-col>

  </c-row>

  <!-- \u2500\u2500 QUICK ACTIONS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="panel mb-4">
    <div class="panel-header">
      <i class="cil-bolt"></i>
      <h5>Quick Actions</h5>
    </div>
    <div class="panel-body action-row">

      <button type="button" class="action-item" (click)="navigateTo('/hierarchy-users')">
        <div class="action-icon-badge tint-indigo"><i class="cil-user-follow"></i></div>
        <div class="action-text">
          <div class="action-title">Manage Users</div>
          <div class="action-subtitle">Create and edit logins</div>
        </div>
        <i class="cil-arrow-right action-arrow"></i>
      </button>

      <button type="button" class="action-item" (click)="navigateTo('/spend-analysis')">
        <div class="action-icon-badge tint-emerald"><i class="cil-chart-pie"></i></div>
        <div class="action-text">
          <div class="action-title">Reports</div>
          <div class="action-subtitle">Purchase order spend</div>
        </div>
        <i class="cil-arrow-right action-arrow"></i>
      </button>

      <button type="button" class="action-item" (click)="navigateTo('/audit-log')">
        <div class="action-icon-badge tint-amber"><i class="cil-history"></i></div>
        <div class="action-text">
          <div class="action-title">Audit Log</div>
          <div class="action-subtitle">Everything that's happened</div>
        </div>
        <i class="cil-arrow-right action-arrow"></i>
      </button>

    </div>
  </div>

  <!-- \u2500\u2500 RECENT USERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="panel">

    <div class="text-center py-5" *ngIf="isLoading">
      <div class="spinner-border text-primary"></div>
      <p class="mt-2 text-muted">Loading users\u2026</p>
    </div>

    <div class="alert alert-danger m-3" *ngIf="!isLoading && errorMessage">{{ errorMessage }}</div>

    <div class="text-center py-5 text-muted" *ngIf="!isLoading && !errorMessage && recentUsers.length === 0">
      No users yet \u2014 create the first one from Manage Users.
    </div>

    <div class="table-responsive" *ngIf="!isLoading && recentUsers.length > 0">

      <div class="panel-header justify-content-between">
        <div class="d-flex align-items-center">
          <i class="cil-list"></i>
          <h5>Recently Added Users</h5>
        </div>
        <button cButton color="link" size="sm" class="p-0 view-all-link" (click)="navigateTo('/hierarchy-users')">
          View All <i class="cil-arrow-right ms-1"></i>
        </button>
      </div>

      <table class="table users-table mb-0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Level</th>
            <th class="text-center">Status</th>
            <th>Added</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of recentUsers; trackBy: trackById">
            <td>
              <div class="d-flex align-items-center gap-2">
                <div class="avatar-circle-sm">{{ getInitials(user.fullName) }}</div>
                <span class="fw-semibold">{{ user.fullName }}</span>
              </div>
            </td>
            <td class="text-muted">{{ user.email }}</td>
            <td>{{ user.hierarchyLevelName || '\u2014' }}</td>
            <td class="text-center">
              <span class="status-chip" [class.chip-active]="user.isActive" [class.chip-inactive]="!user.isActive">
                {{ user.isActive ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td class="small text-muted">{{ formatDate(user.createdAt) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>

</c-container>
`, styles: ["/* src/app/views/base/orgadmin-dashboard/orgadmin-dashboard.component.css */\n.admin-dash {\n  --ink: #0f172a;\n  --ink-muted: #64748b;\n  --ink-faint: #94a3b8;\n  --border: #e2e8f0;\n  --surface: #ffffff;\n  --surface-2: #f8fafc;\n  --indigo: #4f46e5;\n  --indigo-tint: #eef2ff;\n  --emerald: #059669;\n  --emerald-tint: #ecfdf5;\n  --amber: #d97706;\n  --amber-tint: #fffbeb;\n  --slate: #475569;\n  --slate-tint: #f1f5f9;\n}\n.welcome-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-left: 4px solid var(--indigo);\n  border-radius: 12px;\n  padding: 20px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);\n}\n.welcome-main {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.avatar-circle {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: var(--indigo);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.welcome-greeting {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--ink);\n  margin-bottom: 4px;\n}\n.role-pill {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--indigo);\n  background: var(--indigo-tint);\n  padding: 3px 10px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.welcome-meta {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.82rem;\n  color: var(--ink-muted);\n}\n.meta-item i {\n  color: var(--ink-faint);\n  font-size: 0.9rem;\n}\n.scope-note {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: var(--indigo-tint);\n  border: 1px solid #c7d2fe;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 0.85rem;\n  color: #3730a3;\n  line-height: 1.5;\n}\n.scope-note i {\n  font-size: 1rem;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-top: 3px solid transparent;\n  border-radius: 12px;\n  padding: 20px;\n  height: 100%;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.stat-card:hover {\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);\n  transform: translateY(-2px);\n}\n.stat-card.accent-indigo {\n  border-top-color: var(--indigo);\n}\n.stat-card.accent-emerald {\n  border-top-color: var(--emerald);\n}\n.stat-card.accent-slate {\n  border-top-color: var(--slate);\n}\n.stat-icon-badge {\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  flex-shrink: 0;\n}\n.tint-indigo {\n  background: var(--indigo-tint);\n  color: var(--indigo);\n}\n.tint-emerald {\n  background: var(--emerald-tint);\n  color: var(--emerald);\n}\n.tint-amber {\n  background: var(--amber-tint);\n  color: var(--amber);\n}\n.tint-slate {\n  background: var(--slate-tint);\n  color: var(--slate);\n}\n.stat-info {\n  flex: 1;\n  min-width: 0;\n}\n.stat-value {\n  font-size: 1.85rem;\n  font-weight: 700;\n  color: var(--ink);\n  line-height: 1.1;\n}\n.stat-label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--ink-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 2px;\n}\n.stat-footer {\n  font-size: 0.78rem;\n  color: var(--ink-faint);\n  margin-top: 6px;\n}\n.footer-positive {\n  color: var(--emerald);\n  font-weight: 600;\n}\n.panel {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.panel-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 22px;\n  border-bottom: 1px solid var(--border);\n  background: var(--surface-2);\n}\n.panel-header i {\n  color: var(--indigo);\n  font-size: 1.05rem;\n}\n.panel-header h5 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--ink);\n}\n.panel-body {\n  padding: 18px 22px;\n}\n.view-all-link {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--indigo) !important;\n  text-decoration: none;\n}\n.action-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 12px;\n}\n.action-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 14px 16px;\n  text-align: left;\n  cursor: pointer;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.action-item:hover {\n  border-color: var(--indigo);\n  background: var(--surface-2);\n}\n.action-icon-badge {\n  width: 40px;\n  height: 40px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.05rem;\n  flex-shrink: 0;\n}\n.action-text {\n  flex: 1;\n  min-width: 0;\n}\n.action-title {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--ink);\n}\n.action-subtitle {\n  font-size: 0.78rem;\n  color: var(--ink-muted);\n  margin-top: 1px;\n}\n.action-arrow {\n  color: var(--ink-faint);\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.users-table {\n  font-size: 0.87rem;\n}\n.users-table thead th {\n  background: var(--surface-2);\n  color: var(--ink-muted);\n  font-weight: 700;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  padding: 12px 22px;\n  border-bottom: 1px solid var(--border);\n  border-top: none;\n}\n.users-table tbody td {\n  padding: 12px 22px;\n  vertical-align: middle;\n  border-top: 1px solid var(--border);\n  color: var(--ink);\n}\n.users-table tbody tr:first-child td {\n  border-top: none;\n}\n.users-table tbody tr:hover td {\n  background: var(--surface-2);\n}\n.avatar-circle-sm {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--indigo-tint);\n  color: var(--indigo);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.68rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.status-chip {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.chip-active {\n  background: var(--emerald-tint);\n  color: var(--emerald);\n}\n.chip-inactive {\n  background: var(--slate-tint);\n  color: var(--slate);\n}\n@media (max-width: 768px) {\n  .welcome-card {\n    padding: 16px 18px;\n  }\n  .avatar-circle {\n    width: 44px;\n    height: 44px;\n    font-size: 1rem;\n  }\n  .stat-value {\n    font-size: 1.5rem;\n  }\n  .action-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=orgadmin-dashboard.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrgAdminDashboardComponent, { className: "OrgAdminDashboardComponent", filePath: "src/app/views/base/orgadmin-dashboard/orgadmin-dashboard.component.ts", lineNumber: 28 });
})();
export {
  OrgAdminDashboardComponent
};
//# sourceMappingURL=chunk-5Z6MVN2T.js.map
