import {
  environment
} from "./chunk-OQIPAMNU.js";
import {
  HttpClient,
  HttpHeaders,
  Injectable,
  catchError,
  map,
  of,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BCCUO726.js";

// src/app/views/base/dashboard/buyer-b.service.ts
var _BuyerService = class _BuyerService {
  constructor(http) {
    this.http = http;
    this.API = `${environment.API_URL}leadcapture/api`;
  }
  getAuthHeaders() {
    const token = localStorage.getItem("token") || "";
    return new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    });
  }
  // ==================== CREATE BUYER ====================
  createCompleteHierarchy(buyer, adminId) {
    console.log("========================================");
    console.log("\u{1F535} CREATE BUYER SERVICE CALL");
    console.log("========================================");
    console.log("Admin ID:", adminId);
    console.log("Organization Company:", buyer.organizationCompanyName);
    if (adminId) {
      console.log("\u2705 Using Organization Admin endpoint");
      if (!buyer.organizationCompanyName) {
        console.error("\u274C organizationCompanyName is missing!");
        return throwError(() => new Error("organizationCompanyName is required"));
      }
      const url = `${this.API}/organization-admin/${adminId}/buyer`;
      console.log("\u{1F4E6} Payload (no logo \u2014 inherited from admin):", {
        companyName: buyer.companyName,
        organizationCompanyName: buyer.organizationCompanyName,
        locationsCount: buyer.locations?.length || 0
      });
      return this.http.post(url, buyer, { headers: this.getAuthHeaders() }).pipe(tap((response) => {
        console.log("\u2705 BUYER CREATED BY ORG ADMIN");
        console.log("Response:", response);
      }), map((response) => response?.data || response), catchError((error) => {
        console.error("\u274C ERROR CREATING BUYER");
        console.error("Status:", error.status);
        console.error("Message:", error.error?.message || error.message);
        return throwError(() => error);
      }));
    } else {
      console.warn("\u26A0\uFE0F Direct buyer creation is deprecated!");
      const url = `${this.API}/buyer`;
      return this.http.post(url, buyer, { headers: this.getAuthHeaders() }).pipe(tap((response) => console.log("\u2705 Buyer created:", response)), map((response) => response?.data || response), catchError((error) => {
        console.error("\u274C Error creating buyer:", error);
        return throwError(() => error);
      }));
    }
  }
  // ==================== GET BUYERS ====================
  getBuyersByOrganizationAdmin(adminId) {
    const url = `${this.API}/organization-admin/${adminId}/buyers`;
    console.log(`\u{1F4E5} Fetching buyers for Organization Admin ID: ${adminId}`);
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      let buyers = [];
      if (response?.data && Array.isArray(response.data)) {
        buyers = response.data;
      } else if (Array.isArray(response)) {
        buyers = response;
      } else {
        console.warn("\u26A0\uFE0F Unexpected response structure:", response);
        buyers = [];
      }
      console.log(`\u2705 Buyers fetched: ${buyers.length}`);
      return buyers;
    }), catchError((error) => {
      console.error(`\u274C Error fetching buyers for admin ${adminId}:`, error);
      return throwError(() => error);
    }));
  }
  /** @deprecated Use getBuyersByOrganizationAdmin instead */
  getBuyersByOrgAdmin(adminId) {
    return this.getBuyersByOrganizationAdmin(adminId);
  }
  getAllBuyers() {
    const url = `${this.API}/buyer`;
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      if (response?.data && Array.isArray(response.data))
        return response.data;
      if (Array.isArray(response))
        return response;
      return [];
    }), catchError(() => of([])));
  }
  getBuyersByOrganizationCompanyName(companyName) {
    const url = `${this.API}/organization-admin/company/${companyName}/buyers`;
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      if (response?.data && Array.isArray(response.data))
        return response.data;
      if (Array.isArray(response))
        return response;
      return [];
    }), catchError(() => of([])));
  }
  // ==================== SINGLE BUYER ====================
  getBuyerById(id) {
    const url = `${this.API}/buyer/${id}`;
    console.log(`\u{1F4E5} Fetching buyer ID: ${id}`);
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      if (response?.data)
        return response.data;
      if (response?.id)
        return response;
      throw new Error("Invalid response structure");
    }), catchError((error) => {
      console.error(`\u274C Failed to load buyer ${id}:`, error);
      return throwError(() => error);
    }));
  }
  // ==================== UPDATE / DELETE ====================
  updateCompleteHierarchy(buyerId, buyer) {
    const url = `${this.API}/buyer/${buyerId}`;
    return this.http.put(url, buyer, { headers: this.getAuthHeaders() }).pipe(tap((response) => console.log("\u2705 Buyer updated:", response)), map((response) => response?.data || response), catchError((error) => {
      console.error("\u274C Failed to update buyer:", error);
      return throwError(() => error);
    }));
  }
  deleteBuyer(id) {
    const url = `${this.API}/buyer/${id}`;
    return this.http.delete(url, { headers: this.getAuthHeaders() }).pipe(tap(() => console.log(`\u2705 Buyer ${id} deleted`)), catchError((error) => {
      console.error(`\u274C Failed to delete buyer ${id}:`, error);
      return throwError(() => error);
    }));
  }
  // ==================== LOGO — from OrganizationAdmin ====================
  /**
   * Get the logo for a buyer.
   * Backend reads it from the linked OrganizationAdmin — no per-buyer logo stored.
   * Returns a base64 data URL string (data:image/...;base64,...) or null.
   */
  getLogoForBuyer(buyerId) {
    const url = `${this.API}/buyer/${buyerId}/logo/base64`;
    console.log("\u{1F4E5} Getting logo (from OrgAdmin) for buyer:", buyerId);
    return this.http.get(url, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${localStorage.getItem("token") || ""}`
      }),
      responseType: "text"
    }).pipe(map((raw) => {
      const trimmed = raw ? raw.trim() : "";
      if (!trimmed || trimmed === "null") {
        console.log("\u26A0\uFE0F No logo available for buyer:", buyerId);
        return null;
      }
      console.log("\u2705 Logo loaded for buyer:", buyerId, `(${trimmed.length} chars)`);
      return trimmed;
    }), catchError((err) => {
      console.warn("\u26A0\uFE0F Failed to get logo for buyer:", buyerId, err.status);
      return of(null);
    }));
  }
  /**
   * Get the company name for a buyer — inherited from OrganizationAdmin.
   */
  getCompanyNameForBuyer(buyerId) {
    const url = `${this.API}/buyer/${buyerId}/company-name`;
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(map((res) => res?.companyName || null), catchError(() => of(null)));
  }
};
_BuyerService.\u0275fac = function BuyerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuyerService)(\u0275\u0275inject(HttpClient));
};
_BuyerService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuyerService, factory: _BuyerService.\u0275fac, providedIn: "root" });
var BuyerService = _BuyerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuyerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  BuyerService
};
//# sourceMappingURL=chunk-PQ25B5FP.js.map
