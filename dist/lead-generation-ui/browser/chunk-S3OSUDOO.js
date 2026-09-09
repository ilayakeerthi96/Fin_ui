import {
  MessageService
} from "./chunk-4TRDTO5Y.js";
import {
  BehaviorSubject,
  Injectable,
  NgZone,
  Router,
  interval,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BCCUO726.js";

// src/app/shared/service/AuthService.ts
var _AuthService = class _AuthService {
  constructor(router, ngZone, messageService) {
    this.router = router;
    this.ngZone = ngZone;
    this.messageService = messageService;
    this.loggedOut = false;
    this.remainingTimeSubject = new BehaviorSubject("00:00:00");
    this.remainingTime$ = this.remainingTimeSubject.asObservable();
    this.currentUser = null;
    this.loginStatusSubject = new BehaviorSubject(this.isLoggedIn());
    this.loginStatus$ = this.loginStatusSubject.asObservable();
    this.sessionWarningSubject = new BehaviorSubject(null);
    this.sessionWarning$ = this.sessionWarningSubject.asObservable();
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      try {
        this.currentUser = JSON.parse(savedUser);
      } catch (e) {
        console.error("Error parsing saved user:", e);
        this.currentUser = null;
      }
    }
    try {
      let currentUrl = "";
      try {
        if (this.router?.url && this.router.url !== "/" && this.router.url !== "") {
          currentUrl = this.router.url;
        } else if (typeof window !== "undefined") {
          currentUrl = window.location.hash?.replace(/^#/, "") || window.location.pathname || window.location.href || "";
        }
      } catch {
        currentUrl = window.location.href || "";
      }
      const publicPaths = ["/login", "/onboard", "/public", "/assets"];
      if (this.isSessionExpired()) {
        if (!publicPaths.some((p) => currentUrl.includes(p))) {
          this.logout();
        } else {
          this.loginStatusSubject.next(false);
        }
      } else if (this.isLoggedIn()) {
        this.startTimer();
      }
    } catch {
      if (this.isSessionExpired()) {
        this.loginStatusSubject.next(false);
      }
    }
  }
  logout() {
    this.loggedOut = true;
    localStorage.clear();
    this.currentUser = null;
    this.loginStatusSubject.next(false);
    this.stopTimer();
    this.sessionWarningSubject.next(null);
    try {
      let currentUrl = this.router?.url || "";
      if (!currentUrl && typeof window !== "undefined") {
        currentUrl = window.location.hash || window.location.pathname || window.location.href || "";
      }
      const publicPaths = ["/login", "/onboard", "/public", "/assets"];
      if (!publicPaths.some((p) => currentUrl.includes(p))) {
        this.ngZone.run(() => this.router.navigate(["/login"]));
      }
    } catch {
    }
  }
  isSessionExpired() {
    const expirationTime = localStorage.getItem("expirationTime");
    if (!expirationTime)
      return true;
    try {
      let expiry;
      if (typeof expirationTime === "string") {
        const cleanTime = expirationTime.replace(/['"]/g, "");
        expiry = parseInt(cleanTime, 10);
      } else {
        expiry = expirationTime;
      }
      if (expiry < Date.now()) {
        this.logout();
        return true;
      }
      return false;
    } catch {
      console.error("Error checking session expiry");
      return true;
    }
  }
  setLoginStatus(status) {
    this.loginStatusSubject.next(status);
    localStorage.setItem("loginStatus", status.toString());
    if (status) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }
  isLoggedIn() {
    return localStorage.getItem("loginStatus") === "true";
  }
  // 🆕 Called by the dialog when user clicks "Extend +1 Hour"
  extendSession() {
    const token = localStorage.getItem("token");
    if (!token)
      return;
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const currentExpiry = decodedToken.exp * 1e3;
      const newExpiry = currentExpiry + 60 * 60 * 1e3;
      localStorage.setItem("expirationTime", newExpiry.toString());
      this.sessionWarningSubject.next(null);
      this.startTimer();
      this.messageService.showMessage("success", "Session Extended", "Your session has been extended by 1 hour.");
    } catch {
      console.error("Failed to extend session");
    }
  }
  // Session Timer
  startTimer() {
    this.stopTimer();
    let warningShown = false;
    this.countdownSub = interval(1e3).subscribe(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        this.logout();
        return;
      }
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const expiry = decodedToken.exp * 1e3;
        const storedExpiry = localStorage.getItem("expirationTime");
        const effectiveExpiry = storedExpiry ? parseInt(storedExpiry.replace(/['"]/g, ""), 10) : expiry;
        const diff = effectiveExpiry - Date.now();
        if (diff <= 5 * 60 * 1e3 && !warningShown) {
          warningShown = true;
          this.sessionWarningSubject.next(effectiveExpiry);
        }
        if (diff <= 0) {
          this.logout();
          return;
        }
        this.remainingTimeSubject.next(this.formatDuration(diff));
      } catch {
        this.logout();
      }
    });
  }
  stopTimer() {
    if (this.countdownSub) {
      this.countdownSub.unsubscribe();
    }
  }
  formatDuration(ms) {
    const totalSeconds = Math.floor(ms / 1e3);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  setUser(user) {
    this.currentUser = user;
    if (this.currentUser.roles && Array.isArray(this.currentUser.roles)) {
      this.currentUser.roles = this.currentUser.roles.map((item) => {
        if (typeof item === "object" && item.userRoles) {
          return item.userRoles;
        }
        return item;
      });
    }
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    console.log("\u2705 User set in AuthService:", this.currentUser);
  }
  getUser() {
    return this.currentUser;
  }
  hasRole(role) {
    if (!this.currentUser?.roles)
      return false;
    return this.currentUser.roles.includes(role);
  }
  hasAnyRole(roles) {
    return roles.some((r) => this.hasRole(r));
  }
  /**
   * ✅ Check if user is SuperAdmin
   */
  isSuperAdmin() {
    return this.hasRole("SUPER_ADMIN");
  }
  /**
   * 🆕 Check if user is Organization Admin
   */
  isOrganizationAdmin() {
    return this.hasRole("ORGANIZATION_ADMIN");
  }
  /**
   * ✅ Check if user is any type of admin
   */
  isAdmin() {
    return this.hasAnyRole(["SUPER_ADMIN", "ORGANIZATION_ADMIN", "ADMIN"]);
  }
  /**
   * ✅ Check if user is Buyer
   */
  isBuyer() {
    return this.hasRole("ROLE_BUYER");
  }
  //supplier
  isSupplier() {
    return this.hasRole("ROLE_SUPPLIER");
  }
  getSupplierId() {
    const supplierId = localStorage.getItem("supplierId");
    return supplierId ? Number(supplierId) : null;
  }
  getSupplierName() {
    return localStorage.getItem("supplierName");
  }
  /**
   * 🆕 Check if user is Hierarchy User (Staff)
   */
  isHierarchyUser() {
    return this.hasAnyRole(["CEO", "COO", "MANAGER", "PROCUREMENT", "FINANCE", "ADMIN"]);
  }
  /**
   * ✅ Get user role display name
   */
  getUserRoleDisplay() {
    const role = localStorage.getItem("role");
    if (role === "SUPER_ADMIN")
      return "SuperAdmin";
    if (role === "ORGANIZATION_ADMIN")
      return "Organization Admin";
    if (role === "ADMIN")
      return "Admin";
    if (role === "CEO")
      return "CEO";
    if (role === "COO")
      return "COO";
    if (role === "MANAGER")
      return "Manager";
    if (role === "PROCUREMENT")
      return "Procurement";
    if (role === "FINANCE")
      return "Finance";
    if (role === "ROLE_BUYER")
      return "Buyer";
    if (role === "ROLE_SUPPLIER")
      return "Supplier";
    return role || "User";
  }
  /**
   * ✅ Get user company name
   */
  getCompanyName() {
    return localStorage.getItem("companyName");
  }
  /**
   * 🆕 Get dashboard route based on role
   */
  getDashboardRoute() {
    const role = localStorage.getItem("role");
    if (role === "SUPER_ADMIN")
      return "/superadmin-dashboard";
    if (role === "ORGANIZATION_ADMIN")
      return "/orgadmin-dashboard";
    if (role === "ROLE_BUYER")
      return "/rfq-dashboard";
    if (role === "ROLE_SUPPLIER")
      return "/supplier-dashboard";
    if (role === "CEO")
      return "/ceo-dashboard";
    if (role === "COO")
      return "/coo-dashboard";
    if (role === "PROCUREMENT")
      return "/procurement-dashboard";
    if (role === "FINANCE")
      return "/finance-dashboard";
    if (role === "MANAGER")
      return "/manager-dashboard";
    return "/pending-approvals";
  }
  // ADD THESE METHODS TO YOUR EXISTING AuthService
  /**
   * 🆕 Get user's hierarchy level ID
   */
  getHierarchyLevelId() {
    const levelId = localStorage.getItem("hierarchyLevelId");
    return levelId ? Number(levelId) : null;
  }
  /**
   * 🆕 Get user's hierarchy level name
   */
  getHierarchyLevelName() {
    return localStorage.getItem("hierarchyLevelName");
  }
  /**
   * 🆕 Get user's hierarchy level order
   */
  getHierarchyLevelOrder() {
    const order = localStorage.getItem("hierarchyLevelOrder");
    return order ? Number(order) : null;
  }
  /**
   * 🆕 Check if user is a hierarchy user (has hierarchy level)
   */
  isHierarchyUserWithLevel() {
    return this.getHierarchyLevelId() !== null;
  }
  /**
   * 🆕 Get dashboard route based on hierarchy level
   */
  getDashboardRouteForHierarchyUser() {
    const levelOrder = this.getHierarchyLevelOrder();
    if (levelOrder === null) {
      return "/dashboard";
    }
    if (levelOrder === 10) {
      return "/ceo-dashboard";
    }
    return "/hierarchy-dashboard";
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(Router), \u0275\u0275inject(NgZone), \u0275\u0275inject(MessageService));
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: NgZone }, { type: MessageService }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-S3OSUDOO.js.map
