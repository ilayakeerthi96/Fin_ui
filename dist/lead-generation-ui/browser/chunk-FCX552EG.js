import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-E33XJXHD.js";
import {
  AuthService
} from "./chunk-S3OSUDOO.js";
import {
  MessageService
} from "./chunk-4TRDTO5Y.js";
import {
  DataService,
  environment
} from "./chunk-OQIPAMNU.js";
import "./chunk-JKMYCEKN.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  HttpClient,
  HttpEventType,
  HttpHeaders,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  Observable,
  Router,
  catchError,
  setClassMetadata,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BCCUO726.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-SO7Q7VKX.js";

// src/app/views/base/models/rfq.service.ts
var _RFQService = class _RFQService {
  constructor(http) {
    this.http = http;
    this.API = environment.API_URL + "leadcapture/api";
  }
  // ==================== HEADER MANAGEMENT ====================
  getAuthHeaders() {
    const token = localStorage.getItem("token") || "";
    return new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    });
  }
  getAuthHeadersForUpload() {
    const token = localStorage.getItem("token") || "";
    return new HttpHeaders({
      "Authorization": `Bearer ${token}`
      // Don't set Content-Type for multipart/form-data
    });
  }
  // ==================== CREATE RFQ ====================
  /**
   * POST /api/rfq/{buyerId}/{locationId}/{userId}
   * Create a new RFQ
   */
  createRFQ(buyerId, locationId, userId, payload) {
    const url = `${this.API}/rfq/${buyerId}/${locationId}/${userId}`;
    console.log("%c[CREATE RFQ]", "color: #0066cc; font-weight: bold;", {
      buyerId,
      locationId,
      userId,
      rfqTitle: payload.rfqTitle
    });
    return this.http.post(url, payload, { headers: this.getAuthHeaders() }).pipe(tap((response) => {
      console.log("%c[\u2713 RFQ Created]", "color: #00aa00; font-weight: bold;", response.data?.rfqNumber);
    }), catchError((error) => {
      console.error("%c[\u2717 Create Error]", "color: #cc0000; font-weight: bold;", error);
      return throwError(() => error);
    }));
  }
  // ==================== UPDATE RFQ ====================
  /**
   * PUT /api/rfq/{id}
   * Update RFQ details (only in DRAFT status)
   */
  updateRFQ(rfqId, payload) {
    const url = `${this.API}/rfq/${rfqId}`;
    console.log("%c[UPDATE RFQ]", "color: #0066cc; font-weight: bold;", rfqId);
    return this.http.put(url, payload, { headers: this.getAuthHeaders() }).pipe(tap(() => {
      console.log("%c[\u2713 RFQ Updated]", "color: #00aa00; font-weight: bold;", rfqId);
    }), catchError((error) => {
      console.error("%c[\u2717 Update Error]", "color: #cc0000; font-weight: bold;", error);
      return throwError(() => error);
    }));
  }
  // ==================== RFQ ITEMS ====================
  /**
   * POST /api/rfq-item/{rfqId}
   * Add an item to RFQ
   */
  addItemToRFQ(rfqId, item) {
    const url = `${this.API}/rfq-item/${rfqId}`;
    console.log("%c[ADD ITEM]", "color: #0066cc;", item.itemDescription);
    return this.http.post(url, item, { headers: this.getAuthHeaders() }).pipe(tap(() => {
      console.log("%c[\u2713 Item Added]", "color: #00aa00;", item.itemDescription);
    }), catchError((error) => {
      console.error("%c[\u2717 Item Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  /**
   * PUT /api/rfq-item/{itemId}
   * Update RFQ item
   */
  updateRFQItem(itemId, item) {
    const url = `${this.API}/rfq-item/${itemId}`;
    console.log("%c[UPDATE ITEM]", "color: #0066cc;", itemId);
    return this.http.put(url, item, { headers: this.getAuthHeaders() }).pipe(tap(() => {
      console.log("%c[\u2713 Item Updated]", "color: #00aa00;", itemId);
    }), catchError((error) => {
      console.error("%c[\u2717 Update Item Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  /**
   * DELETE /api/rfq-item/{itemId}
   * Delete RFQ item
   */
  deleteRFQItem(itemId) {
    const url = `${this.API}/rfq-item/${itemId}`;
    console.log("%c[DELETE ITEM]", "color: #cc0000;", itemId);
    return this.http.delete(url, { headers: this.getAuthHeaders() }).pipe(tap(() => {
      console.log("%c[\u2713 Item Deleted]", "color: #00aa00;", itemId);
    }), catchError((error) => {
      console.error("%c[\u2717 Delete Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  /**
   * GET /api/rfq-item/rfq/{rfqId}
   * Get all items for an RFQ
   */
  getRFQItems(rfqId) {
    const url = `${this.API}/rfq-item/rfq/${rfqId}`;
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(catchError((error) => {
      console.error("%c[\u2717 Get Items Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  // ==================== RFQ ITEM ATTACHMENTS ====================
  /**
   * POST /api/rfq-item-attachment/upload/{itemId}
   * Upload attachment for RFQ item
   */
  uploadItemAttachment(itemId, file, description) {
    const url = `${this.API}/rfq-item-attachment/upload/${itemId}`;
    const formData = new FormData();
    formData.append("file", file);
    if (description) {
      formData.append("description", description);
    }
    console.log("%c[UPLOAD ATTACHMENT]", "color: #0066cc; font-weight: bold;", {
      itemId,
      fileName: file.name,
      fileSize: file.size
    });
    return this.http.post(url, formData, {
      headers: this.getAuthHeadersForUpload(),
      reportProgress: true,
      observe: "events"
    }).pipe(tap((event) => {
      if (event.type === HttpEventType.Response) {
        console.log("%c[\u2713 File Uploaded]", "color: #00aa00; font-weight: bold;", file.name);
      }
    }), catchError((error) => {
      console.error("%c[\u2717 Upload Error]", "color: #cc0000; font-weight: bold;", error);
      return throwError(() => error);
    }));
  }
  /**
   * GET /api/rfq-item-attachment/item/{itemId}
   * Get all attachments for an item
   */
  getItemAttachments(itemId) {
    const url = `${this.API}/rfq-item-attachment/item/${itemId}`;
    console.log("%c[GET ATTACHMENTS]", "color: #0066cc;", itemId);
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(tap((response) => {
      const count = response?.data?.length || 0;
      console.log("%c[\u2713 Attachments Loaded]", "color: #00aa00;", count);
    }), catchError((error) => {
      console.error("%c[\u2717 Get Attachments Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  /**
   * DELETE /api/rfq-item-attachment/{attachmentId}
   * Delete attachment
   */
  deleteItemAttachment(attachmentId) {
    const url = `${this.API}/rfq-item-attachment/${attachmentId}`;
    console.log("%c[DELETE ATTACHMENT]", "color: #cc0000;", attachmentId);
    return this.http.delete(url, { headers: this.getAuthHeaders() }).pipe(tap(() => {
      console.log("%c[\u2713 Attachment Deleted]", "color: #00aa00;", attachmentId);
    }), catchError((error) => {
      console.error("%c[\u2717 Delete Attachment Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  /**
   * GET /api/rfq-item-attachment/download/{attachmentId}
   * Download attachment
   */
  downloadItemAttachment(attachmentId, fileName) {
    const url = `${this.API}/rfq-item-attachment/download/${attachmentId}`;
    console.log("%c[DOWNLOAD ATTACHMENT]", "color: #0066cc;", { attachmentId, fileName });
    return new Observable((observer) => {
      this.http.get(url, {
        headers: this.getAuthHeaders(),
        responseType: "blob"
      }).subscribe({
        next: (blob) => {
          const downloadUrl = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(downloadUrl);
          console.log("%c[\u2713 File Downloaded]", "color: #00aa00;", fileName);
          observer.next();
          observer.complete();
        },
        error: (error) => {
          console.error("%c[\u2717 Download Error]", "color: #cc0000;", error);
          observer.error(error);
        }
      });
    });
  }
  // ==================== SUPPLIERS ====================
  /**
   * POST /api/rfq/{id}/suppliers
   * Add suppliers to RFQ
   */
  addSuppliersToRFQ(rfqId, supplierIds) {
    const url = `${this.API}/rfq/${rfqId}/suppliers`;
    console.log("%c[ADD SUPPLIERS]", "color: #0066cc;", supplierIds);
    return this.http.post(url, supplierIds, { headers: this.getAuthHeaders() }).pipe(tap(() => {
      console.log("%c[\u2713 Suppliers Added]", "color: #00aa00;", supplierIds.length);
    }), catchError((error) => {
      console.error("%c[\u2717 Suppliers Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  // ==================== APPROVERS ====================
  /**
   * POST /api/rfq/{id}/approvers
   * Add approvers to RFQ
   */
  addApproversToRFQ(rfqId, approverIds) {
    const url = `${this.API}/rfq/${rfqId}/approvers`;
    console.log("%c[ADD APPROVERS]", "color: #0066cc;", approverIds);
    return this.http.post(url, approverIds, { headers: this.getAuthHeaders() }).pipe(tap(() => {
      console.log("%c[\u2713 Approvers Added]", "color: #00aa00;", approverIds.length);
    }), catchError((error) => {
      console.error("%c[\u2717 Approvers Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  // ==================== WORKFLOW ====================
  /**
   * POST /api/rfq/{id}/publish
   * Publish RFQ to suppliers
   */
  publishRFQ(rfqId) {
    const url = `${this.API}/rfq/${rfqId}/publish`;
    console.log("%c[PUBLISH RFQ]", "color: #0066cc; font-weight: bold;", rfqId);
    return this.http.post(url, {}, { headers: this.getAuthHeaders() }).pipe(tap(() => {
      console.log("%c[\u2713 RFQ Published]", "color: #00aa00; font-weight: bold;", rfqId);
    }), catchError((error) => {
      console.error("%c[\u2717 Publish Error]", "color: #cc0000; font-weight: bold;", error);
      return throwError(() => error);
    }));
  }
  /**
   * POST /api/rfq/{id}/approve
   * Approve RFQ (for approval workflow)
   */
  approveRFQ(rfqId, approverId, comments) {
    const url = `${this.API}/rfq/${rfqId}/approve`;
    const params = new URLSearchParams();
    params.set("approverId", approverId.toString());
    if (comments) {
      params.set("comments", comments);
    }
    console.log("%c[APPROVE RFQ]", "color: #00aa00; font-weight: bold;", rfqId);
    return this.http.post(`${url}?${params}`, {}, { headers: this.getAuthHeaders() }).pipe(tap(() => {
      console.log("%c[\u2713 RFQ Approved]", "color: #00aa00; font-weight: bold;", rfqId);
    }), catchError((error) => {
      console.error("%c[\u2717 Approve Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  /**
   * POST /api/rfq/{id}/reject
   * Reject RFQ (for approval workflow)
   */
  rejectRFQ(rfqId, rejectedBy, comments) {
    const url = `${this.API}/rfq/${rfqId}/reject`;
    const params = new URLSearchParams();
    params.set("rejectedBy", rejectedBy.toString());
    params.set("comments", comments);
    console.log("%c[REJECT RFQ]", "color: #cc0000; font-weight: bold;", rfqId);
    return this.http.post(`${url}?${params}`, {}, { headers: this.getAuthHeaders() }).pipe(tap(() => {
      console.log("%c[\u2713 RFQ Rejected]", "color: #00aa00;", rfqId);
    }), catchError((error) => {
      console.error("%c[\u2717 Reject Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  /**
   * POST /api/rfq/{id}/close
   * Close RFQ
   */
  closeRFQ(rfqId) {
    const url = `${this.API}/rfq/${rfqId}/close`;
    console.log("%c[CLOSE RFQ]", "color: #cc0000; font-weight: bold;", rfqId);
    return this.http.post(url, {}, { headers: this.getAuthHeaders() }).pipe(tap(() => {
      console.log("%c[\u2713 RFQ Closed]", "color: #00aa00;", rfqId);
    }), catchError((error) => {
      console.error("%c[\u2717 Close Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  // ==================== READ OPERATIONS ====================
  /**
   * GET /api/rfq/{id}
   * Get RFQ by ID with full details
   */
  getRFQById(rfqId) {
    const url = `${this.API}/rfq/${rfqId}`;
    console.log("%c[GET RFQ]", "color: #0066cc;", rfqId);
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(tap((response) => {
      console.log("%c[\u2713 RFQ Loaded]", "color: #00aa00;", response.data?.rfqNumber);
    }), catchError((error) => {
      console.error("%c[\u2717 Load Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  /**
   * GET /api/rfq
   * Get all RFQs
   */
  getAllRFQs() {
    const url = `${this.API}/rfq`;
    console.log("%c[GET ALL RFQs]", "color: #0066cc;");
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(tap((response) => {
      console.log("%c[\u2713 RFQs Loaded]", "color: #00aa00;", response.count || 0);
    }), catchError((error) => {
      console.error("%c[\u2717 Load Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  /**
   * GET /api/rfq/buyer/{buyerId}
   * Get all RFQs for a buyer
   */
  getRFQsByBuyer(buyerId) {
    const url = `${this.API}/rfq/buyer/${buyerId}`;
    console.log("%c[GET RFQs BY BUYER]", "color: #0066cc;", buyerId);
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(catchError((error) => {
      console.error("%c[\u2717 Load Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  /**
   * GET /api/rfq/buyer/{buyerId}/status/{status}
   * Get RFQs by buyer and status
   */
  getRFQsByBuyerAndStatus(buyerId, status) {
    const url = `${this.API}/rfq/buyer/${buyerId}/status/${status}`;
    console.log("%c[GET RFQs BY STATUS]", "color: #0066cc;", { buyerId, status });
    return this.http.get(url, { headers: this.getAuthHeaders() }).pipe(catchError((error) => {
      console.error("%c[\u2717 Load Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
  // ==================== DELETE ====================
  /**
   * DELETE /api/rfq/{id}
   * Delete RFQ (soft delete)
   */
  deleteRFQ(rfqId) {
    const url = `${this.API}/rfq/${rfqId}`;
    console.log("%c[DELETE RFQ]", "color: #cc0000; font-weight: bold;", rfqId);
    return this.http.delete(url, { headers: this.getAuthHeaders() }).pipe(tap(() => {
      console.log("%c[\u2713 RFQ Deleted]", "color: #00aa00;", rfqId);
    }), catchError((error) => {
      console.error("%c[\u2717 Delete Error]", "color: #cc0000;", error);
      return throwError(() => error);
    }));
  }
};
_RFQService.\u0275fac = function RFQService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RFQService)(\u0275\u0275inject(HttpClient));
};
_RFQService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RFQService, factory: _RFQService.\u0275fac, providedIn: "root" });
var RFQService = _RFQService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RFQService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/views/base/pending-approvals/pending-approvals.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "bg-warning text-dark": a0, "bg-success": a1, "bg-danger": a2, "bg-info": a3 });
var _c1 = (a0, a1, a2, a3) => ({ "text-warning": a0, "text-success": a1, "text-danger": a2, "text-info": a3 });
function PendingApprovalsComponent_option_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fy_r1 = ctx.$implicit;
    \u0275\u0275property("value", fy_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(fy_r1.label);
  }
}
function PendingApprovalsComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 134);
    \u0275\u0275element(2, "i", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 136);
    \u0275\u0275text(5, "Active Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 137);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.activeDateRangeLabel);
  }
}
function PendingApprovalsComponent_button_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 138);
    \u0275\u0275listener("click", function PendingApprovalsComponent_button_108_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetDateFilter());
    });
    \u0275\u0275element(1, "i", 139);
    \u0275\u0275text(2, "Current FY ");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_div_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "small", 140);
    \u0275\u0275element(2, "i", 141);
    \u0275\u0275text(3, "Showing: ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.activeDateRangeLabel);
  }
}
function PendingApprovalsComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275element(1, "div", 143);
    \u0275\u0275elementStart(2, "p", 144);
    \u0275\u0275text(3, "Loading approvals...");
    \u0275\u0275elementEnd()();
  }
}
function PendingApprovalsComponent_div_124_tr_38_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 183);
    \u0275\u0275element(1, "i", 184);
    \u0275\u0275text(2, " Service ");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_div_124_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 162)(1, "td", 163)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 164);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_124_tr_38_Template_div_click_5_listener() {
      const approval_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewPODetails(approval_r6));
    });
    \u0275\u0275text(6);
    \u0275\u0275template(7, PendingApprovalsComponent_div_124_tr_38_span_7_Template, 3, 0, "span", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 140);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "div", 166);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 167);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "div", 168);
    \u0275\u0275element(18, "i", 169);
    \u0275\u0275elementStart(19, "span", 170);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td")(22, "span", 97);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 171)(25, "div", 172)(26, "button", 173);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_124_tr_38_Template_button_click_26_listener() {
      const approval_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewPODetails(approval_r6));
    });
    \u0275\u0275element(27, "i", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 175);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_124_tr_38_Template_button_click_28_listener() {
      const approval_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openApprovalModal(approval_r6, "approve", "po"));
    });
    \u0275\u0275element(29, "i", 176);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 177);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_124_tr_38_Template_button_click_30_listener() {
      const approval_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openApprovalModal(approval_r6, "hold", "po"));
    });
    \u0275\u0275element(31, "i", 178);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 179);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_124_tr_38_Template_button_click_32_listener() {
      const approval_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openApprovalModal(approval_r6, "return", "po"));
    });
    \u0275\u0275element(33, "i", 180);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 181);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_124_tr_38_Template_button_click_34_listener() {
      const approval_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openApprovalModal(approval_r6, "reject", "po"));
    });
    \u0275\u0275element(35, "i", 182);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const approval_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", approval_r6.poNumber, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", approval_r6.sourceSesId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(approval_r6.rfqNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(approval_r6.supplierName || "N/A");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(approval_r6.grandTotal, approval_r6.currencyCode));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(approval_r6.hierarchyLevelName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(approval_r6.actionDate || approval_r6.createdAt));
  }
}
function PendingApprovalsComponent_div_124_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 185);
    \u0275\u0275element(2, "i", 186);
    \u0275\u0275elementStart(3, "h5", 140);
    \u0275\u0275text(4, "No Pending PO Approvals");
    \u0275\u0275elementEnd()()();
  }
}
function PendingApprovalsComponent_div_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 145)(1, "div", 146)(2, "h5", 147);
    \u0275\u0275element(3, "i", 148);
    \u0275\u0275text(4, " PO Pending Approvals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 149)(6, "button", 150);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_124_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPoOriginFilter("ALL"));
    });
    \u0275\u0275text(7, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 150);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_124_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPoOriginFilter("REGULAR"));
    });
    \u0275\u0275element(9, "i", 151);
    \u0275\u0275text(10, "Regular ");
    \u0275\u0275elementStart(11, "span", 152);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 150);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_124_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPoOriginFilter("SERVICE"));
    });
    \u0275\u0275element(14, "i", 153);
    \u0275\u0275text(15, "Service (Spares) ");
    \u0275\u0275elementStart(16, "span", 152);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 154)(19, "div", 155)(20, "table", 156)(21, "thead", 157)(22, "tr")(23, "th", 158);
    \u0275\u0275text(24, "Sl No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 159);
    \u0275\u0275text(26, "PO Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 159);
    \u0275\u0275text(28, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 159);
    \u0275\u0275text(30, "Grand Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 159);
    \u0275\u0275text(32, "Approval Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 159);
    \u0275\u0275text(34, "Submitted Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 160);
    \u0275\u0275text(36, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "tbody");
    \u0275\u0275template(38, PendingApprovalsComponent_div_124_tr_38_Template, 36, 8, "tr", 161)(39, PendingApprovalsComponent_div_124_tr_39_Template, 5, 0, "tr", 83);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.poOriginFilter === "ALL" ? "btn-dark" : "btn-outline-secondary");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.poOriginFilter === "REGULAR" ? "btn-dark" : "btn-outline-secondary");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.regularPOApprovalsCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.poOriginFilter === "SERVICE" ? "btn-warning" : "btn-outline-warning");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.servicePOApprovalsCount);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.filteredPOApprovals);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredPOApprovals.length === 0);
  }
}
function PendingApprovalsComponent_div_125_tr_38_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 183);
    \u0275\u0275element(1, "i", 184);
    \u0275\u0275text(2, " Service ");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_div_125_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 162)(1, "td", 163)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 189);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_125_tr_38_Template_div_click_5_listener() {
      const approval_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewPODetails(approval_r10));
    });
    \u0275\u0275text(6);
    \u0275\u0275template(7, PendingApprovalsComponent_div_125_tr_38_span_7_Template, 3, 0, "span", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 140);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "div", 166);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 167);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 190)(17, "div", 191);
    \u0275\u0275element(18, "i", 192);
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td")(22, "span", 97);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 171)(25, "div", 193)(26, "button", 173);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_125_tr_38_Template_button_click_26_listener() {
      const approval_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewPODetails(approval_r10));
    });
    \u0275\u0275element(27, "i", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 194);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_125_tr_38_Template_button_click_28_listener() {
      const approval_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openApprovalModal(approval_r10, "release", "po"));
    });
    \u0275\u0275element(29, "i", 195);
    \u0275\u0275text(30, " Release ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const approval_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r11 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", approval_r10.poNumber, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", approval_r10.sourceSesId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(approval_r10.rfqNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(approval_r10.supplierName || "N/A");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(approval_r10.grandTotal, approval_r10.currencyCode));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(approval_r10.holdRemarks || "No remarks");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(approval_r10.holdDate));
  }
}
function PendingApprovalsComponent_div_125_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 185);
    \u0275\u0275element(2, "i", 186);
    \u0275\u0275elementStart(3, "h5", 140);
    \u0275\u0275text(4, "No POs on HOLD");
    \u0275\u0275elementEnd()()();
  }
}
function PendingApprovalsComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 145)(1, "div", 146)(2, "h5", 147);
    \u0275\u0275element(3, "i", 187);
    \u0275\u0275text(4, " Purchase Orders on HOLD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 149)(6, "button", 150);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_125_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPoOriginFilter("ALL"));
    });
    \u0275\u0275text(7, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 150);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_125_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPoOriginFilter("REGULAR"));
    });
    \u0275\u0275element(9, "i", 151);
    \u0275\u0275text(10, "Regular ");
    \u0275\u0275elementStart(11, "span", 152);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 150);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_125_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPoOriginFilter("SERVICE"));
    });
    \u0275\u0275element(14, "i", 153);
    \u0275\u0275text(15, "Service (Spares) ");
    \u0275\u0275elementStart(16, "span", 152);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 154)(19, "div", 155)(20, "table", 156)(21, "thead", 188)(22, "tr")(23, "th", 158);
    \u0275\u0275text(24, "Sl No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 159);
    \u0275\u0275text(26, "PO Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 159);
    \u0275\u0275text(28, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 159);
    \u0275\u0275text(30, "Grand Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 159);
    \u0275\u0275text(32, "HOLD Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 159);
    \u0275\u0275text(34, "HOLD Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 160);
    \u0275\u0275text(36, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "tbody");
    \u0275\u0275template(38, PendingApprovalsComponent_div_125_tr_38_Template, 31, 8, "tr", 161)(39, PendingApprovalsComponent_div_125_tr_39_Template, 5, 0, "tr", 83);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.poOriginFilter === "ALL" ? "btn-dark" : "btn-outline-secondary");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.poOriginFilter === "REGULAR" ? "btn-dark" : "btn-outline-secondary");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.regularPOApprovalsCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.poOriginFilter === "SERVICE" ? "btn-warning" : "btn-outline-warning");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.servicePOApprovalsCount);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.filteredHoldPOApprovals);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredHoldPOApprovals.length === 0);
  }
}
function PendingApprovalsComponent_span_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.selectedSupplierDetail == null ? null : ctx_r1.selectedSupplierDetail.companyName), " ");
  }
}
function PendingApprovalsComponent_img_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 196);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.selectedSupplierDetail == null ? null : ctx_r1.selectedSupplierDetail.logoBase64, \u0275\u0275sanitizeUrl);
  }
}
function PendingApprovalsComponent_div_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197)(1, "div", 198)(2, "div", 199)(3, "div", 200);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 201);
    \u0275\u0275text(6, "Locations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 198)(8, "div", 199)(9, "div", 200);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 201);
    \u0275\u0275text(12, "Departments");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 198)(14, "div", 199)(15, "div", 200);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 201);
    \u0275\u0275text(18, "Contacts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 198)(20, "div", 199)(21, "div", 200);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 201);
    \u0275\u0275text(24, "Country");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedSupplierDetail == null ? null : ctx_r1.selectedSupplierDetail.locations == null ? null : ctx_r1.selectedSupplierDetail.locations.length) || 0, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTotalDepartments(ctx_r1.selectedSupplierDetail), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTotalUsers(ctx_r1.selectedSupplierDetail), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedSupplierDetail == null ? null : ctx_r1.selectedSupplierDetail.country) || "\u2014", " ");
  }
}
function PendingApprovalsComponent_div_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275element(1, "div", 202);
    \u0275\u0275elementStart(2, "p", 203);
    \u0275\u0275text(3, "Loading supplier details...");
    \u0275\u0275elementEnd()();
  }
}
function PendingApprovalsComponent_div_152_a_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 230);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "i", 231);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.selectedSupplierDetail.website, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSupplierDetail.website);
  }
}
function PendingApprovalsComponent_div_152_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 140);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_div_152_span_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r1.selectedSupplierDetail.addressLine2);
  }
}
function PendingApprovalsComponent_div_152_div_120_div_4_div_24_div_26_div_4_div_17_tr_18_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ", ");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_div_152_div_120_div_4_div_24_div_26_div_4_div_17_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 270)(1, "td", 271);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 168)(5, "div", 272);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 273);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "a", 274);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 275);
    \u0275\u0275text(17);
    \u0275\u0275template(18, PendingApprovalsComponent_div_152_div_120_div_4_div_24_div_26_div_4_div_17_tr_18_span_18_Template, 2, 0, "span", 83);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r16 = ctx.$implicit;
    const ui_r17 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ui_r17 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials((user_r16.firstName || "") + " " + (user_r16.lastName || "")), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", user_r16.firstName, " ", user_r16.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "mailto:" + user_r16.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r16.email || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r16.phone || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r16.designation || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r16.city);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r16.city && user_r16.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", user_r16.state, " ");
  }
}
function PendingApprovalsComponent_div_152_div_120_div_4_div_24_div_26_div_4_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 264)(1, "div", 155)(2, "table", 265)(3, "thead", 266)(4, "tr")(5, "th", 267);
    \u0275\u0275text(6, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Designation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 268);
    \u0275\u0275text(16, "City / State");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, PendingApprovalsComponent_div_152_div_120_div_4_div_24_div_26_div_4_div_17_tr_18_Template, 20, 11, "tr", 269);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const dept_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", dept_r18.users);
  }
}
function PendingApprovalsComponent_div_152_div_120_div_4_div_24_div_26_div_4_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 276);
    \u0275\u0275element(1, "i", 277);
    \u0275\u0275text(2, " No contacts assigned to this department. ");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_div_152_div_120_div_4_div_24_div_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 254)(1, "div", 255);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_152_div_120_div_4_div_24_div_26_div_4_Template_div_click_1_listener() {
      const di_r15 = \u0275\u0275restoreView(_r14).index;
      const li_r13 = \u0275\u0275nextContext(3).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleDeptExpand(li_r13, di_r15));
    });
    \u0275\u0275elementStart(2, "div", 80)(3, "div", 168)(4, "div", 256);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "div", 257);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 258);
    \u0275\u0275element(10, "i", 259);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 168)(13, "span", 260);
    \u0275\u0275element(14, "i", 243);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "i", 261);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, PendingApprovalsComponent_div_152_div_120_div_4_div_24_div_26_div_4_div_17_Template, 19, 1, "div", 262)(18, PendingApprovalsComponent_div_152_div_120_div_4_div_24_div_26_div_4_div_18_Template, 3, 0, "div", 263);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r18 = ctx.$implicit;
    const di_r15 = ctx.index;
    const li_r13 = \u0275\u0275nextContext(3).index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(di_r15 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dept_r18.departmentName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", dept_r18.categoryOfProducts || "No Category", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", (dept_r18.users == null ? null : dept_r18.users.length) || 0, " users ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.expandedDepts[li_r13 + "-" + di_r15] ? "bi-chevron-up" : "bi-chevron-down");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expandedDepts[li_r13 + "-" + di_r15] && (dept_r18.users == null ? null : dept_r18.users.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expandedDepts[li_r13 + "-" + di_r15] && (!dept_r18.users || dept_r18.users.length === 0));
  }
}
function PendingApprovalsComponent_div_152_div_120_div_4_div_24_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 251);
    \u0275\u0275element(2, "i", 252);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PendingApprovalsComponent_div_152_div_120_div_4_div_24_div_26_div_4_Template, 19, 7, "div", 253);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Departments (", loc_r19.departments.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", loc_r19.departments);
  }
}
function PendingApprovalsComponent_div_152_div_120_div_4_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 246)(1, "div", 247)(2, "div", 228)(3, "div", 248)(4, "span", 211);
    \u0275\u0275text(5, "Contact Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 226);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 209)(9, "div", 248)(10, "span", 211);
    \u0275\u0275text(11, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 249);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 250)(15, "div", 248)(16, "span", 211);
    \u0275\u0275text(17, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 212);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 228)(21, "div", 248)(22, "span", 211);
    \u0275\u0275text(23, "Landline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 212);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(26, PendingApprovalsComponent_div_152_div_120_div_4_div_24_div_26_Template, 5, 2, "div", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(loc_r19.locationContactName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275property("href", "mailto:" + loc_r19.locationContactEmail, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", loc_r19.locationContactEmail || "\u2014", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(loc_r19.locationContactPhone || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(loc_r19.landlineNumber || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (loc_r19.departments == null ? null : loc_r19.departments.length) > 0);
  }
}
function PendingApprovalsComponent_div_152_div_120_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 234)(2, "div", 235);
    \u0275\u0275listener("click", function PendingApprovalsComponent_div_152_div_120_div_4_Template_div_click_2_listener() {
      const li_r13 = \u0275\u0275restoreView(_r12).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleLocationExpand(li_r13));
    });
    \u0275\u0275elementStart(3, "div", 80)(4, "div", 81)(5, "div", 236);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "div", 237);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 97)(11, "span", 238);
    \u0275\u0275element(12, "i", 98);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "i", 239);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 168)(17, "span", 240);
    \u0275\u0275element(18, "i", 241);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 242);
    \u0275\u0275element(21, "i", 243);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "i", 244);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, PendingApprovalsComponent_div_152_div_120_div_4_div_24_Template, 27, 6, "div", 245);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loc_r19 = ctx.$implicit;
    const li_r13 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(li_r13 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(loc_r19.locationName || "Location " + (li_r13 + 1));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", loc_r19.locationType || "N/A", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", loc_r19.city, ", ", loc_r19.state, ", ", loc_r19.country, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", (loc_r19.departments == null ? null : loc_r19.departments.length) || 0, " Depts ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.getUserCountForLocation(loc_r19), " Users ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.expandedLocations[li_r13] ? "bi-chevron-up" : "bi-chevron-down");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expandedLocations[li_r13]);
  }
}
function PendingApprovalsComponent_div_152_div_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 205)(1, "div", 206);
    \u0275\u0275element(2, "i", 232);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PendingApprovalsComponent_div_152_div_120_div_4_Template, 25, 10, "div", 233);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Locations (", ctx_r1.selectedSupplierDetail.locations.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedSupplierDetail.locations);
  }
}
function PendingApprovalsComponent_div_152_div_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 205)(1, "div", 206);
    \u0275\u0275element(2, "i", 232);
    \u0275\u0275text(3, " Locations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 278);
    \u0275\u0275element(5, "i", 279);
    \u0275\u0275elementStart(6, "p", 280);
    \u0275\u0275text(7, "No locations added for this supplier.");
    \u0275\u0275elementEnd()()();
  }
}
function PendingApprovalsComponent_div_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 204)(1, "div", 205)(2, "div", 206);
    \u0275\u0275element(3, "i", 18);
    \u0275\u0275text(4, " Company Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 207)(6, "div", 208)(7, "div", 209)(8, "div", 210)(9, "span", 211);
    \u0275\u0275text(10, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 212);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 209)(14, "div", 210)(15, "span", 211);
    \u0275\u0275text(16, "Company Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 212);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 209)(20, "div", 210)(21, "span", 211);
    \u0275\u0275text(22, "Industry Sector");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 212);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 209)(26, "div", 210)(27, "span", 211);
    \u0275\u0275element(28, "i", 213);
    \u0275\u0275text(29, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 212);
    \u0275\u0275template(31, PendingApprovalsComponent_div_152_a_31_Template, 3, 2, "a", 214)(32, PendingApprovalsComponent_div_152_span_32_Template, 2, 0, "span", 123);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 209)(34, "div", 210)(35, "span", 211);
    \u0275\u0275element(36, "i", 215);
    \u0275\u0275text(37, "GST Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 216);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 209)(41, "div", 210)(42, "span", 211);
    \u0275\u0275element(43, "i", 217);
    \u0275\u0275text(44, "PAN Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 216);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(47, "div", 205)(48, "div", 206);
    \u0275\u0275element(49, "i", 218);
    \u0275\u0275text(50, " Primary Contact Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 207)(52, "div", 219)(53, "div", 220);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 221)(56, "div", 209)(57, "div", 210)(58, "span", 211);
    \u0275\u0275text(59, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 222);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 209)(63, "div", 210)(64, "span", 211);
    \u0275\u0275text(65, "Designation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 212);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 209)(69, "div", 210)(70, "span", 211);
    \u0275\u0275element(71, "i", 223);
    \u0275\u0275text(72, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 212)(74, "a", 224);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(76, "div", 209)(77, "div", 210)(78, "span", 211);
    \u0275\u0275element(79, "i", 225);
    \u0275\u0275text(80, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span", 226);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(83, "div", 205)(84, "div", 206);
    \u0275\u0275element(85, "i", 227);
    \u0275\u0275text(86, " Headquarters Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 207)(88, "div", 208)(89, "div", 2)(90, "div", 210)(91, "span", 211);
    \u0275\u0275text(92, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 212);
    \u0275\u0275text(94);
    \u0275\u0275template(95, PendingApprovalsComponent_div_152_span_95_Template, 2, 1, "span", 83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "div", 228)(97, "div", 210)(98, "span", 211);
    \u0275\u0275text(99, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "span", 212);
    \u0275\u0275text(101);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "div", 228)(103, "div", 210)(104, "span", 211);
    \u0275\u0275text(105, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span", 212);
    \u0275\u0275text(107);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(108, "div", 228)(109, "div", 210)(110, "span", 211);
    \u0275\u0275text(111, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span", 216);
    \u0275\u0275text(113);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(114, "div", 228)(115, "div", 210)(116, "span", 211);
    \u0275\u0275text(117, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "span", 212);
    \u0275\u0275text(119);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(120, PendingApprovalsComponent_div_152_div_120_Template, 5, 2, "div", 229)(121, PendingApprovalsComponent_div_152_div_121_Template, 8, 0, "div", 229);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplierDetail.companyName || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplierDetail.companyType || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplierDetail.industrySector || "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.selectedSupplierDetail.website);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedSupplierDetail.website);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplierDetail.gstNumber || "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplierDetail.panNumber || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(ctx_r1.selectedSupplierDetail.contactPersonName));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplierDetail.contactPersonName || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplierDetail.contactPersonDesignation || "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275property("href", "mailto:" + ctx_r1.selectedSupplierDetail.contactPersonEmail, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSupplierDetail.contactPersonEmail || "\u2014", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplierDetail.contactPersonPhone || "\u2014");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSupplierDetail.addressLine1 || "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSupplierDetail.addressLine2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplierDetail.city || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplierDetail.state || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplierDetail.postalCode || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplierDetail.country || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedSupplierDetail == null ? null : ctx_r1.selectedSupplierDetail.locations == null ? null : ctx_r1.selectedSupplierDetail.locations.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.selectedSupplierDetail == null ? null : ctx_r1.selectedSupplierDetail.locations) || ctx_r1.selectedSupplierDetail.locations.length === 0);
  }
}
function PendingApprovalsComponent_ng_container_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 281);
    \u0275\u0275listener("click", function PendingApprovalsComponent_ng_container_167_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.closeSupplierDetailModal();
      return \u0275\u0275resetView(ctx_r1.openApprovalModal(ctx_r1.selectedSupplierApprovalItem, "approve", "supplier"));
    });
    \u0275\u0275element(2, "i", 282);
    \u0275\u0275text(3, "Approve ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 283);
    \u0275\u0275listener("click", function PendingApprovalsComponent_ng_container_167_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.closeSupplierDetailModal();
      return \u0275\u0275resetView(ctx_r1.openApprovalModal(ctx_r1.selectedSupplierApprovalItem, "hold", "supplier"));
    });
    \u0275\u0275element(5, "i", 284);
    \u0275\u0275text(6, "Hold ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 285);
    \u0275\u0275listener("click", function PendingApprovalsComponent_ng_container_167_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.closeSupplierDetailModal();
      return \u0275\u0275resetView(ctx_r1.openApprovalModal(ctx_r1.selectedSupplierApprovalItem, "need_more_info", "supplier"));
    });
    \u0275\u0275element(8, "i", 286);
    \u0275\u0275text(9, "Need Info ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 287);
    \u0275\u0275listener("click", function PendingApprovalsComponent_ng_container_167_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.closeSupplierDetailModal();
      return \u0275\u0275resetView(ctx_r1.openApprovalModal(ctx_r1.selectedSupplierApprovalItem, "reject", "supplier"));
    });
    \u0275\u0275element(11, "i", 288);
    \u0275\u0275text(12, "Reject ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function PendingApprovalsComponent_ng_container_168_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 281);
    \u0275\u0275listener("click", function PendingApprovalsComponent_ng_container_168_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.closeSupplierDetailModal();
      return \u0275\u0275resetView(ctx_r1.openApprovalModal(ctx_r1.selectedSupplierApprovalItem, "release", "supplier"));
    });
    \u0275\u0275element(2, "i", 289);
    \u0275\u0275text(3, "Release Hold ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function PendingApprovalsComponent_ng_container_169_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 281);
    \u0275\u0275listener("click", function PendingApprovalsComponent_ng_container_169_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.closeSupplierDetailModal();
      return \u0275\u0275resetView(ctx_r1.openApprovalModal(ctx_r1.selectedSupplierApprovalItem, "approve", "supplier"));
    });
    \u0275\u0275element(2, "i", 282);
    \u0275\u0275text(3, "Approve ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 285);
    \u0275\u0275listener("click", function PendingApprovalsComponent_ng_container_169_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.closeSupplierDetailModal();
      return \u0275\u0275resetView(ctx_r1.openApprovalModal(ctx_r1.selectedSupplierApprovalItem, "need_more_info", "supplier"));
    });
    \u0275\u0275element(5, "i", 290);
    \u0275\u0275text(6, "Ask Again ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function PendingApprovalsComponent_div_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 291);
  }
}
function PendingApprovalsComponent_div_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "small", 115);
    \u0275\u0275text(2, "RFQ Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h6", 116);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedItem == null ? null : ctx_r1.selectedItem.rfqNumber);
  }
}
function PendingApprovalsComponent_div_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "small", 115);
    \u0275\u0275text(2, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 292);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedItem == null ? null : ctx_r1.selectedItem.rfqTitle);
  }
}
function PendingApprovalsComponent_div_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "small", 115);
    \u0275\u0275text(2, "PO Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h6", 293);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedItem == null ? null : ctx_r1.selectedItem.poNumber);
  }
}
function PendingApprovalsComponent_div_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "small", 115);
    \u0275\u0275text(2, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 294);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedItem == null ? null : ctx_r1.selectedItem.supplierName);
  }
}
function PendingApprovalsComponent_div_186_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "small", 115);
    \u0275\u0275text(2, "Grand Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 295);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.selectedItem == null ? null : ctx_r1.selectedItem.grandTotal, ctx_r1.selectedItem == null ? null : ctx_r1.selectedItem.currencyCode));
  }
}
function PendingApprovalsComponent_div_187_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "small", 115);
    \u0275\u0275text(2, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h6", 116);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedItem == null ? null : ctx_r1.selectedItem.supplierCompanyName);
  }
}
function PendingApprovalsComponent_div_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "small", 115);
    \u0275\u0275text(2, "Contact Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 296);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r1.selectedItem == null ? null : ctx_r1.selectedItem.supplierContactEmail) || "\u2014");
  }
}
function PendingApprovalsComponent_div_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "small", 115);
    \u0275\u0275text(2, "Supplier ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 292);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedItem == null ? null : ctx_r1.selectedItem.supplierId);
  }
}
function PendingApprovalsComponent_div_195_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 297)(1, "div", 298);
    \u0275\u0275element(2, "i", 299);
    \u0275\u0275elementStart(3, "div")(4, "strong", 300);
    \u0275\u0275text(5, "\u2B50 Final Approval \u2014 Set RFQ Dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 140);
    \u0275\u0275text(7, "You must set dates before publishing to suppliers");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 119)(9, "label", 120);
    \u0275\u0275text(10, "RFQ Due Date ");
    \u0275\u0275elementStart(11, "span", 301);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 302);
    \u0275\u0275twoWayListener("ngModelChange", function PendingApprovalsComponent_div_195_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rfqDueDate, $event) || (ctx_r1.rfqDueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PendingApprovalsComponent_div_195_Template_input_change_13_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDueDateChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 119)(15, "label", 120);
    \u0275\u0275text(16, "Expected Delivery Date ");
    \u0275\u0275elementStart(17, "span", 301);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 303);
    \u0275\u0275twoWayListener("ngModelChange", function PendingApprovalsComponent_div_195_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rfqDeliveryDate, $event) || (ctx_r1.rfqDeliveryDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 304)(21, "div", 305)(22, "div", 306)(23, "div", 80)(24, "div")(25, "small", 166);
    \u0275\u0275text(26, "Supplier PDF Download");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "br");
    \u0275\u0275elementStart(28, "small", 140);
    \u0275\u0275text(29, "Allow suppliers to download RFQ as PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 307)(31, "input", 308);
    \u0275\u0275twoWayListener("ngModelChange", function PendingApprovalsComponent_div_195_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.allowSupplierDownload, $event) || (ctx_r1.allowSupplierDownload = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label", 309)(33, "span", 310);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rfqDueDate);
    \u0275\u0275property("min", ctx_r1.minDueDate)("disabled", ctx_r1.isSubmitting);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rfqDeliveryDate);
    \u0275\u0275property("min", ctx_r1.minDeliveryDate)("disabled", ctx_r1.isSubmitting || !ctx_r1.rfqDueDate);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.allowSupplierDownload);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.allowSupplierDownload ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.allowSupplierDownload ? "ENABLED" : "DISABLED", " ");
  }
}
function PendingApprovalsComponent_div_196_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 311);
    \u0275\u0275element(1, "i", 312);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "An email will be sent");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " to ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " with your question. The supplier approval will be paused until you proceed. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r1.selectedItem == null ? null : ctx_r1.selectedItem.supplierContactEmail) || "the supplier");
  }
}
function PendingApprovalsComponent_span_200_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 301);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_small_202_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 140);
    \u0275\u0275text(1, " Be specific \u2014 the more detail you provide, the faster the supplier can respond. ");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_div_203_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 313);
    \u0275\u0275element(1, "i", 192);
    \u0275\u0275text(2, " Approving will move this RFQ to the next approval level. ");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_div_204_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 314);
    \u0275\u0275element(1, "i", 176);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Final Approval:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " RFQ will be published to suppliers after setting dates. ");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_div_205_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 314);
    \u0275\u0275element(1, "i", 176);
    \u0275\u0275text(2, " Will forward to the next approval level or fully approve the PO. ");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_div_206_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 314);
    \u0275\u0275element(1, "i", 176);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Supplier Approve:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Will activate this supplier for RFQ participation and notify them by email. ");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_div_207_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 315);
    \u0275\u0275element(1, "i", 316);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, " Warning:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" This will PERMANENTLY reject the ", ctx_r1.modalMode === "rfq" ? "RFQ" : ctx_r1.modalMode === "po" ? "PO" : "Supplier", ". ");
  }
}
function PendingApprovalsComponent_div_208_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 317);
    \u0275\u0275element(1, "i", 178);
    \u0275\u0275text(2, " Approval workflow will be paused at your level. ");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_div_209_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 314);
    \u0275\u0275element(1, "i", 195);
    \u0275\u0275text(2, " Approval workflow will resume from your level. ");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_span_214_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 108);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getModalIcon());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getActionButtonText(), " ");
  }
}
function PendingApprovalsComponent_span_215_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 318);
    \u0275\u0275text(2, "Processing... ");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_div_216_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 319);
  }
}
var _PendingApprovalsComponent = class _PendingApprovalsComponent {
  constructor(dataService, rfqService, messageService, authService, router, cdr) {
    this.dataService = dataService;
    this.rfqService = rfqService;
    this.messageService = messageService;
    this.authService = authService;
    this.router = router;
    this.cdr = cdr;
    this.userId = 0;
    this.userName = "";
    this.userEmail = "";
    this.hierarchyLevelId = null;
    this.hierarchyLevelName = "";
    this.hierarchyLevelOrder = null;
    this.companyName = "";
    this.pendingApprovals = [];
    this.holdApprovals = [];
    this.pendingPOApprovals = [];
    this.holdPOApprovals = [];
    this.pendingSupplierApprovals = [];
    this.holdSupplierApprovals = [];
    this.needMoreInfoSupplierApprovals = [];
    this.pendingSupplierCount = 0;
    this.holdSupplierCount = 0;
    this.needMoreInfoSupplierCount = 0;
    this.dateFilteredPendingApprovals = [];
    this.dateFilteredHoldApprovals = [];
    this.dateFilteredPOApprovals = [];
    this.dateFilteredHoldPOApprovals = [];
    this.dateFilteredSupplierApprovals = [];
    this.dateFilteredHoldSupplierApprovals = [];
    this.dateFilteredNeedMoreInfoApprovals = [];
    this.filteredApprovals = [];
    this.filteredHoldApprovals = [];
    this.filteredPOApprovals = [];
    this.filteredHoldPOApprovals = [];
    this.filteredSupplierApprovals = [];
    this.filteredHoldSupplierApprovals = [];
    this.filteredNeedMoreInfoApprovals = [];
    this.activeTab = "po-pending";
    this.isLoading = false;
    this.searchText = "";
    this.showApprovalModal = false;
    this.selectedItem = null;
    this.modalMode = "rfq";
    this.actionType = "approve";
    this.actionComments = "";
    this.isSubmitting = false;
    this.isLastApprover = false;
    this.requiresDates = false;
    this.minDueDate = "";
    this.minDeliveryDate = "";
    this.rfqDueDate = "";
    this.rfqDeliveryDate = "";
    this.allowSupplierDownload = false;
    this.showSupplierDetailModal = false;
    this.selectedSupplierDetail = null;
    this.selectedSupplierApprovalItem = null;
    this.isLoadingSupplierDetail = false;
    this.expandedLocations = {};
    this.expandedDepts = {};
    this.financialYearOptions = [];
    this.selectedFYOption = "";
    this.customFromDate = "";
    this.customToDate = "";
    this.activeDateRangeLabel = "";
    this.holdApprovalsCount = 0;
    this.pendingPOCount = 0;
    this.holdPOCount = 0;
    this.poOriginFilter = "ALL";
  }
  ngOnInit() {
    this.initializeUser();
    this.buildFinancialYearOptions();
    this.selectedFYOption = this.getCurrentFYValue();
    this.updateActiveDateRangeLabel();
    this.loadAllData();
    this.setMinDates();
  }
  // =========================================================================
  //  INITIALIZE USER
  // =========================================================================
  initializeUser() {
    this.userId = Number(localStorage.getItem("userId")) || 0;
    this.userName = localStorage.getItem("fullName") || "User";
    this.userEmail = localStorage.getItem("email") || localStorage.getItem("username") || "";
    this.companyName = localStorage.getItem("companyName") || "NA";
    this.hierarchyLevelId = this.authService.getHierarchyLevelId();
    this.hierarchyLevelName = this.authService.getHierarchyLevelName() || "";
    this.hierarchyLevelOrder = this.authService.getHierarchyLevelOrder();
    if (!this.userId) {
      this.messageService.showMessage("error", "Error", "User ID not found. Please login again.");
      this.router.navigate(["/login"]);
    }
  }
  setMinDates() {
    const now = /* @__PURE__ */ new Date();
    this.minDueDate = this.formatDateForInput(now);
    this.minDeliveryDate = this.formatDateForInput(now);
  }
  formatDateForInput(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    const h = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    return `${y}-${m}-${d}T${h}:${min}`;
  }
  // =========================================================================
  //  FINANCIAL YEAR HELPERS
  // =========================================================================
  buildFinancialYearOptions() {
    const today = /* @__PURE__ */ new Date();
    let currentFYStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
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
    this.applyDateAndSearchFilters();
  }
  resetDateFilter() {
    this.selectedFYOption = this.getCurrentFYValue();
    this.customFromDate = "";
    this.customToDate = "";
    this.updateActiveDateRangeLabel();
    this.applyDateAndSearchFilters();
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
    return (/* @__PURE__ */ new Date(dateStr + "T00:00:00")).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
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
  filterByDate(items, dateField = "createdAt") {
    const range = this.getActiveDateRange();
    if (!range)
      return items;
    return items.filter((item) => {
      const dateStr = item[dateField] || item.createdAt || item.actionDate;
      if (!dateStr)
        return false;
      const d = new Date(dateStr);
      return d >= range.from && d <= range.to;
    });
  }
  // =========================================================================
  //  COMBINED DATE + SEARCH FILTER
  // =========================================================================
  applyDateAndSearchFilters() {
    this.updateActiveDateRangeLabel();
    const term = this.searchText.toLowerCase().trim();
    const filterArr = (arr, fields) => term ? arr.filter((item) => fields.some((f) => (item[f] || "").toLowerCase().includes(term))) : [...arr];
    this.dateFilteredPendingApprovals = this.filterByDate(this.pendingApprovals, "createdAt");
    this.dateFilteredHoldApprovals = this.filterByDate(this.holdApprovals, "holdDate");
    this.dateFilteredPOApprovals = this.filterByDate(this.pendingPOApprovals, "createdAt");
    this.dateFilteredHoldPOApprovals = this.filterByDate(this.holdPOApprovals, "holdDate");
    this.dateFilteredSupplierApprovals = this.filterByDate(this.pendingSupplierApprovals, "createdAt");
    this.dateFilteredHoldSupplierApprovals = this.filterByDate(this.holdSupplierApprovals, "holdDate");
    this.dateFilteredNeedMoreInfoApprovals = this.filterByDate(this.needMoreInfoSupplierApprovals, "infoRequestDate");
    this.filteredApprovals = filterArr(this.dateFilteredPendingApprovals, ["rfqNumber", "rfqTitle", "buyerName"]);
    this.filteredHoldApprovals = filterArr(this.dateFilteredHoldApprovals, ["rfqNumber", "rfqTitle", "buyerName"]);
    this.filteredPOApprovals = this.applyPoOriginFilter(filterArr(this.dateFilteredPOApprovals, ["poNumber", "supplierName", "buyerName"]));
    this.filteredHoldPOApprovals = this.applyPoOriginFilter(filterArr(this.dateFilteredHoldPOApprovals, ["poNumber", "supplierName", "buyerName"]));
    this.filteredSupplierApprovals = filterArr(this.dateFilteredSupplierApprovals, ["supplierCompanyName", "hierarchyLevelName"]);
    this.filteredHoldSupplierApprovals = filterArr(this.dateFilteredHoldSupplierApprovals, ["supplierCompanyName", "hierarchyLevelName"]);
    this.filteredNeedMoreInfoApprovals = filterArr(this.dateFilteredNeedMoreInfoApprovals, ["supplierCompanyName", "infoRequest"]);
    this.cdr.markForCheck();
  }
  onSearch() {
    this.applyDateAndSearchFilters();
  }
  // ── Service vs Regular PO-approvals tab ──────────────────────────────────
  applyPoOriginFilter(arr) {
    if (this.poOriginFilter === "SERVICE")
      return arr.filter((p) => !!p.sourceSesId);
    if (this.poOriginFilter === "REGULAR")
      return arr.filter((p) => !p.sourceSesId);
    return arr;
  }
  setPoOriginFilter(filter) {
    this.poOriginFilter = filter;
    this.applyDateAndSearchFilters();
  }
  get servicePOApprovalsCount() {
    return this.dateFilteredPOApprovals.filter((p) => !!p.sourceSesId).length + this.dateFilteredHoldPOApprovals.filter((p) => !!p.sourceSesId).length;
  }
  get regularPOApprovalsCount() {
    return this.dateFilteredPOApprovals.filter((p) => !p.sourceSesId).length + this.dateFilteredHoldPOApprovals.filter((p) => !p.sourceSesId).length;
  }
  // =========================================================================
  //  DATA LOADING
  // =========================================================================
  /**
   * Loads only the PO approval queues.
   *
   * The RFQ and Supplier loaders are deliberately not called: their modules are out of
   * scope, and every one of those calls would hit an endpoint this application no longer
   * uses — four failing requests on every visit to this screen. The methods themselves are
   * left in place for now; they are simply never invoked.
   */
  loadAllData() {
    this.loadPendingPOApprovals();
    this.loadHoldPOApprovals();
  }
  loadPendingApprovals() {
    if (!this.userId)
      return;
    this.isLoading = true;
    this.dataService.getPendingApprovalsForUser(this.userId).subscribe({
      next: (response) => {
        let data = [];
        if (response?.success === true && Array.isArray(response.data))
          data = response.data;
        else if (Array.isArray(response))
          data = response;
        this.pendingApprovals = data;
        this.isLoading = false;
        this.applyDateAndSearchFilters();
        this.cdr.markForCheck();
      },
      error: () => {
        this.pendingApprovals = [];
        this.isLoading = false;
        this.applyDateAndSearchFilters();
      }
    });
  }
  loadHoldApprovals() {
    if (!this.userId)
      return;
    this.dataService.getHoldApprovalsForUser(this.userId).subscribe({
      next: (response) => {
        let data = [];
        if (response?.success === true && Array.isArray(response.data))
          data = response.data;
        else if (Array.isArray(response))
          data = response;
        this.holdApprovals = data;
        this.holdApprovalsCount = data.length;
        this.applyDateAndSearchFilters();
        this.cdr.markForCheck();
      },
      error: () => {
        this.holdApprovals = [];
        this.applyDateAndSearchFilters();
      }
    });
  }
  loadPendingPOApprovals() {
    if (!this.userId)
      return;
    this.dataService.getPendingPOApprovalsForUser(this.userId).subscribe({
      next: (response) => {
        let data = [];
        if (response?.success === true && Array.isArray(response.data))
          data = response.data;
        else if (Array.isArray(response))
          data = response;
        this.pendingPOApprovals = data.map((item) => __spreadProps(__spreadValues({}, item), {
          poId: item.purchaseOrderId ?? item.poId ?? item.id,
          currencyCode: item.currencyCode || "INR",
          currencySymbol: item.currencySymbol || "\u20B9"
        }));
        this.pendingPOCount = this.pendingPOApprovals.length;
        this.applyDateAndSearchFilters();
        this.cdr.markForCheck();
      },
      error: () => {
        this.pendingPOApprovals = [];
        this.applyDateAndSearchFilters();
      }
    });
  }
  loadHoldPOApprovals() {
    if (!this.userId)
      return;
    this.dataService.getHoldPOApprovalsForUser(this.userId).subscribe({
      next: (response) => {
        let data = [];
        if (response?.success === true && Array.isArray(response.data))
          data = response.data;
        else if (Array.isArray(response))
          data = response;
        this.holdPOApprovals = data.map((item) => __spreadProps(__spreadValues({}, item), {
          poId: item.purchaseOrderId ?? item.poId ?? item.id,
          currencyCode: item.currencyCode || "INR",
          currencySymbol: item.currencySymbol || "\u20B9"
        }));
        this.holdPOCount = this.holdPOApprovals.length;
        this.applyDateAndSearchFilters();
        this.cdr.markForCheck();
      },
      error: () => {
        this.holdPOApprovals = [];
        this.applyDateAndSearchFilters();
      }
    });
  }
  loadPendingSupplierApprovals() {
    if (!this.userId)
      return;
    this.dataService.getPendingSupplierApprovalsForUser(this.userId).subscribe({
      next: (response) => {
        let data = [];
        if (response?.success === true && Array.isArray(response.data))
          data = response.data;
        else if (Array.isArray(response))
          data = response;
        this.needMoreInfoSupplierApprovals = data.filter((d) => d.status === "NEED_MORE_INFO");
        this.pendingSupplierApprovals = data.filter((d) => d.status !== "NEED_MORE_INFO");
        this.pendingSupplierCount = this.pendingSupplierApprovals.length;
        this.needMoreInfoSupplierCount = this.needMoreInfoSupplierApprovals.length;
        this.applyDateAndSearchFilters();
        this.cdr.markForCheck();
      },
      error: () => {
        this.pendingSupplierApprovals = [];
        this.needMoreInfoSupplierApprovals = [];
        this.applyDateAndSearchFilters();
      }
    });
  }
  loadHoldSupplierApprovals() {
    if (!this.userId)
      return;
    this.dataService.getHoldSupplierApprovalsForUser(this.userId).subscribe({
      next: (response) => {
        let data = [];
        if (response?.success === true && Array.isArray(response.data))
          data = response.data;
        else if (Array.isArray(response))
          data = response;
        this.holdSupplierApprovals = data;
        this.holdSupplierCount = data.length;
        this.applyDateAndSearchFilters();
        this.cdr.markForCheck();
      },
      error: () => {
        this.holdSupplierApprovals = [];
        this.applyDateAndSearchFilters();
      }
    });
  }
  // =========================================================================
  //  SUPPLIER DETAIL MODAL
  // =========================================================================
  viewSupplierDetails(approval) {
    this.selectedSupplierApprovalItem = approval;
    this.showSupplierDetailModal = true;
    this.selectedSupplierDetail = null;
    this.expandedLocations = {};
    this.expandedDepts = {};
    this.isLoadingSupplierDetail = true;
    this.cdr.markForCheck();
    const supplierId = approval.supplierId;
    if (!supplierId) {
      this.selectedSupplierDetail = {
        id: approval.supplierId,
        companyName: approval.supplierCompanyName,
        approvalStatus: "PENDING",
        locations: []
      };
      this.isLoadingSupplierDetail = false;
      this.cdr.markForCheck();
      return;
    }
    this.dataService.getSupplierById(supplierId).subscribe({
      next: (response) => {
        if (response && response.data)
          this.selectedSupplierDetail = response.data;
        else if (response && response.companyName)
          this.selectedSupplierDetail = response;
        else
          this.selectedSupplierDetail = {
            id: supplierId,
            companyName: approval.supplierCompanyName,
            approvalStatus: approval.status || "PENDING",
            locations: []
          };
        if (this.selectedSupplierDetail?.locations?.length > 0) {
          this.expandedLocations[0] = true;
          if (this.selectedSupplierDetail.locations[0]?.departments?.length > 0)
            this.expandedDepts["0-0"] = true;
        }
        this.isLoadingSupplierDetail = false;
        this.cdr.markForCheck();
        this.loadSupplierLogo(supplierId);
      },
      error: () => {
        this.selectedSupplierDetail = {
          id: supplierId,
          companyName: approval.supplierCompanyName,
          approvalStatus: approval.status || "PENDING",
          industrySector: approval.industrySector || "",
          locations: []
        };
        this.isLoadingSupplierDetail = false;
        this.cdr.markForCheck();
      }
    });
  }
  loadSupplierLogo(supplierId) {
    this.dataService.getSupplierLogoBase64(supplierId).subscribe({
      next: (logoData) => {
        if (logoData && this.selectedSupplierDetail) {
          this.selectedSupplierDetail = __spreadProps(__spreadValues({}, this.selectedSupplierDetail), { logoBase64: logoData });
          this.cdr.markForCheck();
        }
      },
      error: () => {
      }
    });
  }
  closeSupplierDetailModal() {
    this.showSupplierDetailModal = false;
    this.selectedSupplierDetail = null;
    this.selectedSupplierApprovalItem = null;
    this.expandedLocations = {};
    this.expandedDepts = {};
    this.cdr.markForCheck();
  }
  toggleLocationExpand(index) {
    this.expandedLocations[index] = !this.expandedLocations[index];
    this.cdr.markForCheck();
  }
  toggleDeptExpand(locIdx, deptIdx) {
    const key = `${locIdx}-${deptIdx}`;
    this.expandedDepts[key] = !this.expandedDepts[key];
    this.cdr.markForCheck();
  }
  // =========================================================================
  //  SUPPLIER DETAIL — DISPLAY HELPERS
  // =========================================================================
  getInitials(name) {
    if (!name || !name.trim())
      return "??";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1)
      return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  getTotalDepartments(supplier) {
    if (!supplier?.locations)
      return 0;
    return supplier.locations.reduce((sum, loc) => sum + (loc.departments?.length || 0), 0);
  }
  getTotalUsers(supplier) {
    if (!supplier?.locations)
      return 0;
    return supplier.locations.reduce((sum, loc) => sum + (loc.departments || []).reduce((s, dept) => s + (dept.users?.length || 0), 0), 0);
  }
  getUserCountForLocation(loc) {
    if (!loc?.departments)
      return 0;
    return loc.departments.reduce((sum, dept) => sum + (dept.users?.length || 0), 0);
  }
  // =========================================================================
  //  APPROVAL MODAL
  // =========================================================================
  openApprovalModal(item, action, mode) {
    this.selectedItem = item;
    this.actionType = action;
    this.modalMode = mode;
    this.actionComments = "";
    this.rfqDueDate = "";
    this.rfqDeliveryDate = "";
    this.isLastApprover = false;
    this.requiresDates = false;
    this.allowSupplierDownload = item.allowSupplierDownload !== void 0 ? item.allowSupplierDownload : true;
    if (mode === "rfq" && action === "approve") {
      this.checkIfLastApprover(item.rfqId);
    }
    this.showApprovalModal = true;
    this.cdr.markForCheck();
  }
  checkIfLastApprover(rfqId) {
    this.dataService.isLastApprover(rfqId, this.userId).subscribe({
      next: (response) => {
        if (response.success) {
          this.isLastApprover = response.isLastApprover || false;
          this.requiresDates = response.requiresDates || false;
          this.cdr.markForCheck();
        }
      },
      error: () => {
        this.isLastApprover = false;
      }
    });
  }
  onDueDateChange() {
    if (this.rfqDueDate) {
      this.minDeliveryDate = this.rfqDueDate;
      if (this.rfqDeliveryDate && this.rfqDeliveryDate < this.rfqDueDate)
        this.rfqDeliveryDate = "";
      this.cdr.markForCheck();
    }
  }
  closeApprovalModal() {
    this.showApprovalModal = false;
    this.selectedItem = null;
    this.actionComments = "";
    this.isSubmitting = false;
    this.cdr.markForCheck();
  }
  isCommentsRequired() {
    return ["reject", "return", "hold", "need_more_info"].includes(this.actionType);
  }
  submitApprovalAction() {
    if (!this.selectedItem || !this.userId) {
      this.messageService.showMessage("error", "Error", "Invalid approval data");
      return;
    }
    if (this.isCommentsRequired() && !this.actionComments.trim()) {
      const msgs = {
        reject: "Please provide rejection reason",
        return: "Please provide revision comments",
        hold: "Please provide hold remarks",
        need_more_info: "Please describe what information you need"
      };
      this.messageService.showMessage("warning", "Warning", msgs[this.actionType]);
      return;
    }
    if (this.modalMode === "rfq" && this.actionType === "approve" && this.isLastApprover) {
      if (!this.rfqDueDate || !this.rfqDeliveryDate) {
        this.messageService.showMessage("error", "Validation Error", "As final approver, you must set both RFQ dates");
        return;
      }
    }
    this.isSubmitting = true;
    const comments = this.actionComments.trim() || "No comments provided";
    let apiCall;
    if (this.modalMode === "rfq") {
      const rfqId = this.selectedItem.rfqId;
      if (!rfqId) {
        this.messageService.showMessage("error", "Error", "Invalid RFQ ID");
        this.isSubmitting = false;
        return;
      }
      if (this.actionType === "approve")
        apiCall = this.dataService.approveRFQWithDates(rfqId, this.userId, comments, this.rfqDueDate || void 0, this.rfqDeliveryDate || void 0, this.allowSupplierDownload);
      else if (this.actionType === "reject")
        apiCall = this.dataService.rejectRFQDynamic(rfqId, this.userId, comments);
      else if (this.actionType === "return")
        apiCall = this.dataService.returnRFQForRevision(rfqId, this.userId, comments);
      else if (this.actionType === "hold")
        apiCall = this.dataService.holdRFQ(rfqId, this.userId, comments);
      else if (this.actionType === "release")
        apiCall = this.dataService.releaseHold(rfqId, this.userId, comments);
    } else if (this.modalMode === "po") {
      const poId = this.selectedItem.poId ?? this.selectedItem.purchaseOrderId ?? this.selectedItem.id;
      if (!poId) {
        this.messageService.showMessage("error", "Error", "Invalid Purchase Order ID");
        this.isSubmitting = false;
        return;
      }
      if (this.actionType === "approve")
        apiCall = this.dataService.approvePO(poId, this.userId, comments);
      else if (this.actionType === "reject")
        apiCall = this.dataService.rejectPO(poId, this.userId, comments);
      else if (this.actionType === "return")
        apiCall = this.dataService.returnPOForRevision(poId, this.userId, comments);
      else if (this.actionType === "hold")
        apiCall = this.dataService.holdPO(poId, this.userId, comments);
      else if (this.actionType === "release")
        apiCall = this.dataService.releasePOHold(poId, this.userId, comments);
    } else if (this.modalMode === "supplier") {
      const supplierId = this.selectedItem.supplierId;
      if (!supplierId) {
        this.messageService.showMessage("error", "Error", "Invalid Supplier ID");
        this.isSubmitting = false;
        return;
      }
      if (this.actionType === "approve")
        apiCall = this.dataService.approveSupplier(supplierId, this.userId, comments);
      else if (this.actionType === "reject")
        apiCall = this.dataService.rejectSupplier(supplierId, this.userId, comments);
      else if (this.actionType === "hold")
        apiCall = this.dataService.holdSupplier(supplierId, this.userId, comments);
      else if (this.actionType === "release")
        apiCall = this.dataService.releaseSupplierHold(supplierId, this.userId, comments);
      else if (this.actionType === "need_more_info")
        apiCall = this.dataService.requestMoreInfoFromSupplier(supplierId, this.userId, comments);
    }
    if (!apiCall) {
      this.messageService.showMessage("error", "Error", "Invalid action");
      this.isSubmitting = false;
      return;
    }
    apiCall.subscribe({
      next: () => {
        const labels = {
          approve: "approved",
          reject: "permanently rejected",
          return: "returned for revision",
          hold: "put on HOLD",
          release: "released from HOLD",
          need_more_info: "\u2014 information request sent to supplier"
        };
        const ref = this.modalMode === "rfq" ? this.selectedItem.rfqNumber : this.modalMode === "po" ? this.selectedItem.poNumber : this.selectedItem.supplierCompanyName;
        this.messageService.showMessage("success", "Success", `${ref} ${labels[this.actionType]} successfully`);
        this.closeApprovalModal();
        this.loadAllData();
      },
      error: (error) => {
        this.messageService.showMessage("error", "Error", error.error?.message || `Failed to ${this.actionType}`);
        this.isSubmitting = false;
        this.cdr.markForCheck();
      }
    });
  }
  // =========================================================================
  //  NAVIGATION & TAB
  // =========================================================================
  viewRFQDetailsInNewTab(approval) {
    this.router.navigate([`/create-rfq/${approval.rfqId}/view`]);
  }
  viewPODetails(approval) {
    const poId = approval?.poId ?? approval?.purchaseOrderId ?? approval?.id;
    if (!poId) {
      this.messageService.showMessage("error", "Error", "Invalid Purchase Order ID");
      return;
    }
    this.router.navigate([`/po-details/${poId}`]);
  }
  switchTab(tab) {
    this.activeTab = tab;
    this.searchText = "";
    this.applyDateAndSearchFilters();
    this.cdr.markForCheck();
  }
  refresh() {
    this.searchText = "";
    this.loadAllData();
  }
  /** PO approvals are the only kind now, so the header badge counts just those. */
  get totalBadgeCount() {
    return this.pendingPOCount;
  }
  // =========================================================================
  //  MODAL DISPLAY HELPERS
  // =========================================================================
  getActionButtonText() {
    const labels = {
      approve: "Approve",
      reject: "Reject Permanently",
      return: "Return for Revision",
      hold: "Put on HOLD",
      release: "Release HOLD",
      need_more_info: "Send Info Request"
    };
    return labels[this.actionType] || "Submit";
  }
  getActionButtonClass() {
    if (this.actionType === "approve" || this.actionType === "release")
      return "btn-success";
    if (this.actionType === "reject")
      return "btn-danger";
    if (this.actionType === "need_more_info")
      return "btn-info text-white";
    return "btn-warning";
  }
  getModalTitle() {
    const type = this.modalMode === "rfq" ? "RFQ" : this.modalMode === "po" ? "PO" : "Supplier";
    if (this.actionType === "approve")
      return `Approve ${type}`;
    if (this.actionType === "reject")
      return `Reject ${type} (Permanent)`;
    if (this.actionType === "return")
      return `Return ${type} for Revision`;
    if (this.actionType === "hold")
      return `Put ${type} on HOLD`;
    if (this.actionType === "release")
      return `Release ${type} HOLD`;
    if (this.actionType === "need_more_info")
      return `Request More Info from Supplier`;
    return "Action";
  }
  getModalHeaderClass() {
    if (this.actionType === "approve" || this.actionType === "release")
      return "bg-success";
    if (this.actionType === "reject")
      return "bg-danger";
    if (this.actionType === "need_more_info")
      return "bg-info";
    return "bg-warning";
  }
  getModalIcon() {
    const icons = {
      approve: "bi-check-circle",
      reject: "bi-x-circle",
      return: "bi-arrow-return-left",
      hold: "bi-pause-circle",
      release: "bi-play-circle",
      need_more_info: "bi-question-circle"
    };
    return icons[this.actionType] || "bi-check";
  }
  getCommentsPlaceholder() {
    const map = {
      approve: "Optional: Add approval comments...",
      reject: "Required: Reason for permanent rejection...",
      return: "Required: What needs to be revised...",
      hold: "Required: Why are you putting this on HOLD?",
      release: "Optional: Comments about releasing the hold...",
      need_more_info: "Required: Describe exactly what information you need from the supplier..."
    };
    return map[this.actionType] || "Enter comments...";
  }
  getCommentsLabel() {
    const map = {
      hold: "Hold Remarks",
      release: "Release Comments (Optional)",
      need_more_info: "Information Required from Supplier",
      reject: "Rejection Reason",
      return: "Revision Comments"
    };
    return map[this.actionType] || "Comments";
  }
  // =========================================================================
  //  UTILITIES
  // =========================================================================
  formatDate(dateString) {
    if (!dateString)
      return "N/A";
    try {
      return new Date(dateString).toLocaleString("en-GB");
    } catch {
      return "Invalid Date";
    }
  }
  formatCurrency(value, currencyCode) {
    const code = currencyCode || "INR";
    const symbol = this.getSymbolForCode(code);
    if (!value)
      return `${symbol} 0.00`;
    const formatted = Number(value).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    const rtlCodes = ["AED", "SAR", "QAR", "KWD", "BHD", "OMR", "IRR", "IQD", "JOD", "LBP"];
    return rtlCodes.includes(code) ? `${formatted} ${symbol}` : `${symbol} ${formatted}`;
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
      "AUD": "A$"
    };
    return map[code] || code;
  }
  getStatusBadgeClass(status) {
    const m = {
      "PENDING": "bg-warning text-dark",
      "APPROVED": "bg-success",
      "REJECTED": "bg-danger",
      "DRAFT": "bg-secondary",
      "AWAITING_APPROVAL": "bg-warning",
      "RETURNED_FOR_REVISION": "bg-warning text-dark",
      "HOLD": "bg-warning text-dark",
      "PENDING_APPROVAL": "bg-warning text-dark",
      "NEED_MORE_INFO": "bg-info text-white"
    };
    return m[status] || "bg-light text-dark";
  }
  // These three used to drive the supplier-detail modal footer. The supplier approval tabs
  // are gone, so the tab can never be one of those values — they now always report false
  // rather than comparing against statuses that no longer exist in the union. The modal
  // markup that calls them is retained for the moment and simply renders no footer buttons.
  isSupplierPendingTab() {
    return false;
  }
  isSupplierHoldTab() {
    return false;
  }
  isSupplierInfoTab() {
    return false;
  }
};
_PendingApprovalsComponent.\u0275fac = function PendingApprovalsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PendingApprovalsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(RFQService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_PendingApprovalsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PendingApprovalsComponent, selectors: [["app-pending-approvals"]], decls: 217, vars: 103, consts: [[1, "container-fluid", "p-4"], [1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-0", "shadow-lg", 2, "border-radius", "12px", "overflow", "hidden"], [1, "gradient-header"], [1, "row", "align-items-center"], [1, "col-12", "col-lg-4", "text-center", "text-lg-start", "mb-3", "mb-lg-0"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-start"], [1, "avatar-circle-large", "me-3"], [1, "text-white"], [1, "mb-1", "fw-bold", 2, "font-size", "1.5rem"], [1, "mb-0", 2, "opacity", ".9", "font-size", ".95rem"], [1, "bi", "bi-shield-check", "me-1"], [1, "col-12", "col-lg-8"], [1, "row", "g-2"], [1, "col-12", "col-md-4"], [1, "info-card"], [1, "info-card-icon"], [1, "bi", "bi-building-fill"], [1, "info-card-content"], [1, "info-label"], [1, "info-value"], [1, "bi", "bi-envelope-fill"], [1, "bi", "bi-diagram-3-fill"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fw-bold", "text-dark", "mb-1"], [1, "bi", "bi-clipboard-check"], [1, "text-muted", "small", "mb-0"], [1, "d-flex", "gap-2"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "bi", "bi-arrow-clockwise"], [1, "row", "mb-3"], [1, "col-lg-5"], [1, "input-group"], [1, "input-group-text", "bg-white", "border-end-0"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search by number, title, supplier...", 1, "form-control", "border-start-0", "ps-0", 3, "ngModelChange", "ngModel"], [1, "date-filter-card", "mb-4"], [1, "date-filter-accent"], [1, "date-filter-inner"], [1, "date-filter-title-wrap"], [1, "date-filter-icon-wrap"], [1, "bi", "bi-calendar3-range"], [1, "date-filter-title"], [1, "date-filter-subtitle"], [1, "date-filter-divider"], [1, "date-filter-controls"], [1, "date-filter-field"], [1, "date-filter-label"], [1, "bi", "bi-calendar2-check", "me-1"], [1, "date-filter-select-wrap"], [1, "date-filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", "ALL"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "CUSTOM"], [1, "bi", "bi-chevron-down", "date-filter-select-icon"], [1, "date-filter-field", "date-filter-custom-field"], [1, "bi", "bi-calendar-event", "me-1"], [1, "date-filter-input-wrap"], ["type", "date", 1, "date-filter-input", 3, "ngModelChange", "change", "ngModel"], [1, "bi", "bi-calendar-event-fill", "me-1"], [1, "date-filter-right"], ["class", "date-filter-badge-wrap", 4, "ngIf"], ["class", "date-filter-reset-btn", 3, "click", 4, "ngIf"], [1, "nav", "nav-tabs", "mb-4", "flex-wrap"], [1, "nav-item"], [1, "nav-link", 2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-file-earmark-text"], [1, "badge", "ms-2"], [1, "bi", "bi-pause-fill"], ["class", "mb-3", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card border-0 shadow-sm", "style", "border-radius:12px;overflow:hidden;", 4, "ngIf"], ["tabindex", "-1", 1, "modal", "fade", "supplier-detail-modal", 2, "background-color", "rgba(0,0,0,.6)", "z-index", "1055"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl", "modal-dialog-scrollable"], [1, "modal-content", "border-0", "shadow-lg", 2, "border-radius", "16px", "overflow", "hidden", "max-height", "90vh"], [1, "modal-header", "border-0", "p-0"], [1, "w-100", 2, "background", "linear-gradient(135deg,#1a237e,#283593,#1565c0)", "padding", "1.5rem 2rem"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "gap-3"], [1, "supplier-avatar-lg"], [4, "ngIf"], ["alt", "Logo", "class", "supplier-logo-img", 3, "src", 4, "ngIf"], [1, "mb-0", "fw-bold", 2, "font-size", "1.4rem"], [1, "d-flex", "align-items-center", "gap-2", "mt-1", "flex-wrap"], [1, "badge", 2, "background", "rgba(255,255,255,.2)", "font-size", ".75rem"], [1, "bi", "bi-briefcase", "me-1"], [1, "bi", "bi-diagram-3", "me-1"], [1, "badge", 2, "font-size", ".75rem", 3, "ngClass"], ["type", "button", 1, "btn-close", "btn-close-white", "btn-lg", 3, "click"], ["class", "row g-2 mt-3", 4, "ngIf"], [1, "modal-body", "p-0", 2, "overflow-y", "auto", "background", "#f8f9fa"], ["class", "p-4", 4, "ngIf"], [1, "modal-footer", "border-top", "bg-white", "p-3"], [1, "d-flex", "justify-content-between", "align-items-center", "w-100", "flex-wrap", "gap-2"], [1, "text-muted", "small"], [1, "bi", "bi-building", "me-1"], [1, "fw-bold", 3, "ngClass"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "bi", "bi-x-lg", "me-1"], ["class", "modal-backdrop fade show", "style", "z-index:1050;", 4, "ngIf"], ["tabindex", "-1", 1, "modal", "fade", 2, "background-color", "rgba(0,0,0,.5)"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "border-0", "shadow-lg", 2, "border-radius", "12px"], [1, "modal-header", "border-0", "text-white", 2, "padding", "1.5rem", "border-radius", "12px 12px 0 0", 3, "ngClass"], [1, "modal-title", "fw-bold", "mb-0"], [1, "bi", 3, "ngClass"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click", "disabled"], [1, "modal-body", "p-4"], [1, "alert", "alert-light", "border", "mb-4", 2, "background", "#f8f9fa"], ["class", "col-12", 4, "ngIf"], ["class", "col-6", 4, "ngIf"], [1, "col-6"], [1, "text-muted", "fw-bold", "text-uppercase", "d-block", 2, "font-size", ".7rem"], [1, "mb-0", "fw-bold", "text-primary"], ["class", "alert alert-warning mb-4", "style", "border-left:4px solid #f59e0b;", 4, "ngIf"], ["class", "alert alert-info mb-3", "style", "border-left:4px solid #0dcaf0;", 4, "ngIf"], [1, "mb-3"], [1, "form-label", "fw-bold"], ["class", "text-danger", 4, "ngIf"], ["rows", "4", 1, "form-control", 2, "border", "2px solid #e2e8f0", "border-radius", "8px", 3, "ngModelChange", "ngModel", "placeholder", "disabled"], ["class", "text-muted", 4, "ngIf"], ["class", "alert alert-info mb-0", 4, "ngIf"], ["class", "alert alert-success mb-0", 4, "ngIf"], ["class", "alert alert-danger mb-0", 4, "ngIf"], ["class", "alert alert-warning mb-0", 4, "ngIf"], [1, "modal-footer", "border-0", "p-4", "pt-0"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], ["type", "button", 3, "click", "disabled"], ["class", "modal-backdrop fade show", 4, "ngIf"], [3, "value"], [1, "date-filter-badge-wrap"], [1, "date-filter-badge-icon"], [1, "bi", "bi-funnel-fill"], [1, "date-filter-badge-label"], [1, "date-filter-badge-value"], [1, "date-filter-reset-btn", 3, "click"], [1, "bi", "bi-arrow-counterclockwise", "me-1"], [1, "text-muted"], [1, "bi", "bi-funnel", "me-1"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "text-muted", "mt-3"], [1, "card", "border-0", "shadow-sm", 2, "border-radius", "12px", "overflow", "hidden"], [1, "card-header", "bg-white", "border-0", "pt-4", "px-4", "pb-3"], [1, "fw-bold", "text-dark", "mb-0"], [1, "bi", "bi-file-earmark-check", "text-danger"], [1, "d-flex", "gap-2", "mt-3"], ["type", "button", 1, "btn", "btn-sm", 3, "click", "ngClass"], [1, "bi", "bi-file-earmark-text", "me-1"], [1, "badge", "bg-light", "text-dark", "ms-1"], [1, "bi", "bi-tools", "me-1"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "align-middle", "mb-0", 2, "font-size", ".9rem"], [2, "background", "#fce4ec"], [1, "ps-4", "text-uppercase", "text-muted", "small", "fw-bold"], [1, "text-uppercase", "text-muted", "small", "fw-bold"], [1, "pe-4", "text-uppercase", "text-muted", "small", "fw-bold"], ["style", "border-bottom:1px solid #e9ecef;", 4, "ngFor", "ngForOf"], [2, "border-bottom", "1px solid #e9ecef"], [1, "ps-4"], [1, "fw-bold", "text-primary", 2, "cursor", "pointer", 3, "click"], ["class", "badge bg-warning text-dark ms-1", "style", "font-size:0.65rem;", 4, "ngIf"], [1, "fw-bold"], [1, "fw-bold", "text-success"], [1, "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-layers", "text-danger"], [1, "fw-bold", "text-danger", "small"], [1, "pe-4"], ["role", "group", 1, "btn-group"], ["title", "View", 1, "btn", "btn-sm", "btn-light", "text-info", "shadow-sm", 3, "click"], [1, "bi", "bi-eye"], ["title", "Approve", 1, "btn", "btn-sm", "btn-light", "text-success", "shadow-sm", 3, "click"], [1, "bi", "bi-check-circle"], ["title", "Hold", 1, "btn", "btn-sm", "btn-light", "text-warning", "shadow-sm", 3, "click"], [1, "bi", "bi-pause-circle"], ["title", "Return for Revision", 1, "btn", "btn-sm", "btn-light", "text-warning", "shadow-sm", 3, "click"], [1, "bi", "bi-arrow-return-left"], ["title", "Reject Permanently", 1, "btn", "btn-sm", "btn-light", "text-danger", "shadow-sm", 3, "click"], [1, "bi", "bi-x-circle"], [1, "badge", "bg-warning", "text-dark", "ms-1", 2, "font-size", "0.65rem"], [1, "bi", "bi-tools"], ["colspan", "7", 1, "text-center", "text-muted", "py-5"], [1, "bi", "bi-inbox", "display-6", "mb-3", "d-block", "opacity-25"], [1, "bi", "bi-pause-fill", "text-warning"], [2, "background", "#fff3cd"], [1, "fw-bold", "text-warning", 2, "cursor", "pointer", 3, "click"], [2, "max-width", "250px"], [1, "alert", "alert-warning", "mb-0", "p-2", 2, "font-size", ".85rem"], [1, "bi", "bi-info-circle"], [1, "btn-group"], [1, "btn", "btn-sm", "btn-success", "shadow-sm", 3, "click"], [1, "bi", "bi-play-circle"], ["alt", "Logo", 1, "supplier-logo-img", 3, "src"], [1, "row", "g-2", "mt-3"], [1, "col-6", "col-md-3"], [2, "background", "rgba(255,255,255,.12)", "border-radius", "8px", "padding", "10px", "text-align", "center"], [1, "text-white", "fw-bold", 2, "font-size", "1.3rem"], [2, "color", "rgba(255,255,255,.75)", "font-size", ".72rem"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "3rem", "height", "3rem"], [1, "text-muted", "mt-3", "fw-semibold"], [1, "p-4"], [1, "detail-section", "mb-4"], [1, "detail-section-header"], [1, "detail-card"], [1, "row", "g-3"], [1, "col-md-4"], [1, "detail-field"], [1, "detail-label"], [1, "detail-value"], [1, "bi", "bi-globe", "me-1", "text-primary"], ["target", "_blank", "class", "text-primary", 3, "href", 4, "ngIf"], [1, "bi", "bi-file-text", "me-1", "text-success"], [1, "detail-value", "fw-semibold", "font-monospace"], [1, "bi", "bi-card-text", "me-1", "text-info"], [1, "bi", "bi-person-badge-fill"], [1, "d-flex", "align-items-start", "gap-3"], [1, "contact-avatar"], [1, "row", "g-3", "flex-grow-1"], [1, "detail-value", "fw-bold"], [1, "bi", "bi-envelope", "me-1", "text-primary"], [1, "text-primary", 3, "href"], [1, "bi", "bi-telephone", "me-1", "text-success"], [1, "detail-value", "fw-semibold"], [1, "bi", "bi-geo-alt-fill"], [1, "col-md-3"], ["class", "detail-section mb-4", 4, "ngIf"], ["target", "_blank", 1, "text-primary", 3, "href"], [1, "bi", "bi-box-arrow-up-right", "ms-1", 2, "font-size", ".7rem"], [1, "bi", "bi-pin-map-fill"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "location-card"], [1, "location-header", 2, "cursor", "pointer", "user-select", "none", 3, "click"], [1, "location-number"], [1, "fw-bold", "text-dark", 2, "font-size", "1rem"], [1, "badge", "bg-light", "text-secondary", "border", "me-2"], [1, "bi", "bi-geo-alt", "me-1"], ["title", "Departments", 1, "badge", "bg-info"], [1, "bi", "bi-diagram-2", "me-1"], ["title", "Users", 1, "badge", "bg-secondary"], [1, "bi", "bi-people", "me-1"], [1, "bi", "text-muted", 3, "ngClass"], ["class", "location-body", 4, "ngIf"], [1, "location-body"], [1, "row", "g-3", "mb-3"], [1, "detail-field-sm"], [1, "detail-value", "text-primary", "d-block", 3, "href"], [1, "col-md-2"], [1, "sub-section-label", "mb-2"], [1, "bi", "bi-diagram-2-fill", "me-1"], ["class", "dept-card mb-2", 4, "ngFor", "ngForOf"], [1, "dept-card", "mb-2"], [1, "dept-header", 2, "cursor", "pointer", "user-select", "none", 3, "click"], [1, "dept-number"], [1, "fw-semibold", "text-dark"], [1, "text-muted", 2, "font-size", ".78rem"], [1, "bi", "bi-tag", "me-1"], [1, "badge", "bg-light", "text-dark", "border", 2, "font-size", ".72rem"], [1, "bi", "text-muted", "small", 3, "ngClass"], ["style", "border-top:1px solid #e9ecef;", 4, "ngIf"], ["class", "text-center text-muted py-3", "style", "font-size:.85rem;", 4, "ngIf"], [2, "border-top", "1px solid #e9ecef"], [1, "table", "table-sm", "mb-0", 2, "font-size", ".82rem"], [2, "background", "#f1f3f5"], [1, "ps-3"], [1, "pe-3"], ["style", "border-bottom:1px solid #f0f0f0;", 4, "ngFor", "ngForOf"], [2, "border-bottom", "1px solid #f0f0f0"], [1, "ps-3", "text-muted"], [1, "user-mini-avatar"], [1, "fw-semibold"], [1, "text-primary", 2, "font-size", ".8rem", 3, "href"], [1, "pe-3", "text-muted", 2, "font-size", ".78rem"], [1, "text-center", "text-muted", "py-3", 2, "font-size", ".85rem"], [1, "bi", "bi-person-x", "opacity-50"], [1, "detail-card", "text-center", "text-muted", "py-4"], [1, "bi", "bi-geo-alt", "display-6", "opacity-25"], [1, "mt-2", "mb-0"], [1, "btn", "btn-success", "btn-sm", "px-3", 3, "click"], [1, "bi", "bi-check-circle", "me-1"], [1, "btn", "btn-warning", "btn-sm", "px-3", 3, "click"], [1, "bi", "bi-pause-circle", "me-1"], [1, "btn", "btn-info", "text-white", "btn-sm", "px-3", 3, "click"], [1, "bi", "bi-question-circle", "me-1"], [1, "btn", "btn-danger", "btn-sm", "px-3", 3, "click"], [1, "bi", "bi-x-circle", "me-1"], [1, "bi", "bi-play-circle", "me-1"], [1, "bi", "bi-arrow-repeat", "me-1"], [1, "modal-backdrop", "fade", "show", 2, "z-index", "1050"], [1, "mb-0"], [1, "mb-0", "fw-bold", "text-danger"], [1, "mb-0", "fw-bold"], [1, "mb-0", "fw-bold", "text-success"], [1, "mb-0", "small"], [1, "alert", "alert-warning", "mb-4", 2, "border-left", "4px solid #f59e0b"], [1, "d-flex", "align-items-center", "mb-3"], [1, "bi", "bi-calendar-event", "fs-4", "me-2", "text-warning"], [1, "d-block"], [1, "text-danger"], ["type", "datetime-local", 1, "form-control", 2, "border-radius", "8px", 3, "ngModelChange", "change", "ngModel", "min", "disabled"], ["type", "datetime-local", 1, "form-control", 2, "border-radius", "8px", 3, "ngModelChange", "ngModel", "min", "disabled"], [1, "mb-2"], [1, "card", "border-primary"], [1, "card-body", "py-2"], [1, "form-check", "form-switch"], ["type", "checkbox", 1, "form-check-input", 2, "width", "3em", "height", "1.5em", 3, "ngModelChange", "ngModel"], [1, "form-check-label", "ms-2"], [1, "badge", 3, "ngClass"], [1, "alert", "alert-info", "mb-3", 2, "border-left", "4px solid #0dcaf0"], [1, "bi", "bi-envelope-check", "me-2"], [1, "alert", "alert-info", "mb-0"], [1, "alert", "alert-success", "mb-0"], [1, "alert", "alert-danger", "mb-0"], [1, "bi", "bi-exclamation-triangle"], [1, "alert", "alert-warning", "mb-0"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "modal-backdrop", "fade", "show"]], template: function PendingApprovalsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "h3", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 11);
    \u0275\u0275element(14, "i", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17);
    \u0275\u0275element(21, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 19)(23, "div", 20);
    \u0275\u0275text(24, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 21);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 15)(28, "div", 16)(29, "div", 17);
    \u0275\u0275element(30, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 19)(32, "div", 20);
    \u0275\u0275text(33, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 21);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 15)(37, "div", 16)(38, "div", 17);
    \u0275\u0275element(39, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 19)(41, "div", 20);
    \u0275\u0275text(42, "Approval Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 21);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()()()()()()()()();
    \u0275\u0275elementStart(45, "div", 24)(46, "div")(47, "h3", 25);
    \u0275\u0275element(48, "i", 26);
    \u0275\u0275text(49, " Pending Approval Queue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 27);
    \u0275\u0275text(51, "RFQs, Purchase Orders and Suppliers requiring your approval at ");
    \u0275\u0275elementStart(52, "strong");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " level.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 28)(56, "button", 29);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_56_listener() {
      return ctx.router.navigate(["/hierarchy-dashboard"]);
    });
    \u0275\u0275element(57, "i", 30);
    \u0275\u0275text(58, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 31);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_59_listener() {
      return ctx.refresh();
    });
    \u0275\u0275element(60, "i", 32);
    \u0275\u0275text(61, " Refresh ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 33)(63, "div", 34)(64, "div", 35)(65, "span", 36);
    \u0275\u0275element(66, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PendingApprovalsComponent_Template_input_ngModelChange_67_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function PendingApprovalsComponent_Template_input_ngModelChange_67_listener() {
      return ctx.onSearch();
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "div", 39);
    \u0275\u0275element(69, "div", 40);
    \u0275\u0275elementStart(70, "div", 41)(71, "div", 42)(72, "div", 43);
    \u0275\u0275element(73, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div")(75, "div", 45);
    \u0275\u0275text(76, "Date Range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 46);
    \u0275\u0275text(78, "Filter approvals by creation date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(79, "div", 47);
    \u0275\u0275elementStart(80, "div", 48)(81, "div", 49)(82, "label", 50);
    \u0275\u0275element(83, "i", 51);
    \u0275\u0275text(84, "Financial Year / Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 52)(86, "select", 53);
    \u0275\u0275twoWayListener("ngModelChange", function PendingApprovalsComponent_Template_select_ngModelChange_86_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedFYOption, $event) || (ctx.selectedFYOption = $event);
      return $event;
    });
    \u0275\u0275listener("change", function PendingApprovalsComponent_Template_select_change_86_listener() {
      return ctx.onFYOptionChange();
    });
    \u0275\u0275elementStart(87, "option", 54);
    \u0275\u0275text(88, "All Time");
    \u0275\u0275elementEnd();
    \u0275\u0275template(89, PendingApprovalsComponent_option_89_Template, 2, 2, "option", 55);
    \u0275\u0275elementStart(90, "option", 56);
    \u0275\u0275text(91, "Custom Range");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(92, "i", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 58)(94, "label", 50);
    \u0275\u0275element(95, "i", 59);
    \u0275\u0275text(96, "From Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 60)(98, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function PendingApprovalsComponent_Template_input_ngModelChange_98_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.customFromDate, $event) || (ctx.customFromDate = $event);
      return $event;
    });
    \u0275\u0275listener("change", function PendingApprovalsComponent_Template_input_change_98_listener() {
      return ctx.onFYOptionChange();
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(99, "div", 58)(100, "label", 50);
    \u0275\u0275element(101, "i", 62);
    \u0275\u0275text(102, "To Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 60)(104, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function PendingApprovalsComponent_Template_input_ngModelChange_104_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.customToDate, $event) || (ctx.customToDate = $event);
      return $event;
    });
    \u0275\u0275listener("change", function PendingApprovalsComponent_Template_input_change_104_listener() {
      return ctx.onFYOptionChange();
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(105, "div", 47);
    \u0275\u0275elementStart(106, "div", 63);
    \u0275\u0275template(107, PendingApprovalsComponent_div_107_Template, 8, 1, "div", 64)(108, PendingApprovalsComponent_button_108_Template, 3, 0, "button", 65);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(109, "ul", 66)(110, "li", 67)(111, "a", 68);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Template_a_click_111_listener() {
      return ctx.switchTab("po-pending");
    });
    \u0275\u0275element(112, "i", 69);
    \u0275\u0275text(113, " PO Pending ");
    \u0275\u0275elementStart(114, "span", 70);
    \u0275\u0275text(115);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(116, "li", 67)(117, "a", 68);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Template_a_click_117_listener() {
      return ctx.switchTab("po-hold");
    });
    \u0275\u0275element(118, "i", 71);
    \u0275\u0275text(119, " PO On Hold ");
    \u0275\u0275elementStart(120, "span", 70);
    \u0275\u0275text(121);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(122, PendingApprovalsComponent_div_122_Template, 6, 1, "div", 72)(123, PendingApprovalsComponent_div_123_Template, 4, 0, "div", 73)(124, PendingApprovalsComponent_div_124_Template, 40, 7, "div", 74)(125, PendingApprovalsComponent_div_125_Template, 40, 7, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "div", 75)(127, "div", 76)(128, "div", 77)(129, "div", 78)(130, "div", 79)(131, "div", 80)(132, "div", 81)(133, "div", 82);
    \u0275\u0275template(134, PendingApprovalsComponent_span_134_Template, 2, 1, "span", 83)(135, PendingApprovalsComponent_img_135_Template, 1, 1, "img", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div", 9)(137, "h4", 85);
    \u0275\u0275text(138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "div", 86)(140, "span", 87);
    \u0275\u0275element(141, "i", 88);
    \u0275\u0275text(142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "span", 87);
    \u0275\u0275element(144, "i", 89);
    \u0275\u0275text(145);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "span", 90);
    \u0275\u0275text(147);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(148, "button", 91);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_148_listener() {
      return ctx.closeSupplierDetailModal();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(149, PendingApprovalsComponent_div_149_Template, 25, 4, "div", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "div", 93);
    \u0275\u0275template(151, PendingApprovalsComponent_div_151_Template, 4, 0, "div", 73)(152, PendingApprovalsComponent_div_152_Template, 122, 21, "div", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "div", 95)(154, "div", 96)(155, "div", 97);
    \u0275\u0275element(156, "i", 98);
    \u0275\u0275text(157, " Supplier ID: ");
    \u0275\u0275elementStart(158, "strong");
    \u0275\u0275text(159);
    \u0275\u0275elementEnd();
    \u0275\u0275text(160, " \xA0|\xA0 Status: ");
    \u0275\u0275elementStart(161, "span", 99);
    \u0275\u0275text(162);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(163, "div", 100)(164, "button", 29);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_164_listener() {
      return ctx.closeSupplierDetailModal();
    });
    \u0275\u0275element(165, "i", 101);
    \u0275\u0275text(166, "Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(167, PendingApprovalsComponent_ng_container_167_Template, 13, 0, "ng-container", 83)(168, PendingApprovalsComponent_ng_container_168_Template, 4, 0, "ng-container", 83)(169, PendingApprovalsComponent_ng_container_169_Template, 7, 0, "ng-container", 83);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(170, PendingApprovalsComponent_div_170_Template, 1, 0, "div", 102);
    \u0275\u0275elementStart(171, "div", 103)(172, "div", 104)(173, "div", 105)(174, "div", 106)(175, "h5", 107);
    \u0275\u0275element(176, "i", 108);
    \u0275\u0275text(177);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "button", 109);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_178_listener() {
      return ctx.closeApprovalModal();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(179, "div", 110)(180, "div", 111)(181, "div", 14);
    \u0275\u0275template(182, PendingApprovalsComponent_div_182_Template, 5, 1, "div", 112)(183, PendingApprovalsComponent_div_183_Template, 5, 1, "div", 112)(184, PendingApprovalsComponent_div_184_Template, 5, 1, "div", 112)(185, PendingApprovalsComponent_div_185_Template, 5, 1, "div", 113)(186, PendingApprovalsComponent_div_186_Template, 5, 1, "div", 113)(187, PendingApprovalsComponent_div_187_Template, 5, 1, "div", 112)(188, PendingApprovalsComponent_div_188_Template, 5, 1, "div", 113)(189, PendingApprovalsComponent_div_189_Template, 5, 1, "div", 113);
    \u0275\u0275elementStart(190, "div", 114)(191, "small", 115);
    \u0275\u0275text(192, "Your Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "p", 116);
    \u0275\u0275text(194);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(195, PendingApprovalsComponent_div_195_Template, 35, 9, "div", 117)(196, PendingApprovalsComponent_div_196_Template, 8, 1, "div", 118);
    \u0275\u0275elementStart(197, "div", 119)(198, "label", 120);
    \u0275\u0275text(199);
    \u0275\u0275template(200, PendingApprovalsComponent_span_200_Template, 2, 0, "span", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "textarea", 122);
    \u0275\u0275twoWayListener("ngModelChange", function PendingApprovalsComponent_Template_textarea_ngModelChange_201_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.actionComments, $event) || (ctx.actionComments = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(202, PendingApprovalsComponent_small_202_Template, 2, 0, "small", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275template(203, PendingApprovalsComponent_div_203_Template, 3, 0, "div", 124)(204, PendingApprovalsComponent_div_204_Template, 5, 0, "div", 125)(205, PendingApprovalsComponent_div_205_Template, 3, 0, "div", 125)(206, PendingApprovalsComponent_div_206_Template, 5, 0, "div", 125)(207, PendingApprovalsComponent_div_207_Template, 5, 1, "div", 126)(208, PendingApprovalsComponent_div_208_Template, 3, 0, "div", 127)(209, PendingApprovalsComponent_div_209_Template, 3, 0, "div", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "div", 128)(211, "button", 129);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_211_listener() {
      return ctx.closeApprovalModal();
    });
    \u0275\u0275text(212, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "button", 130);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_213_listener() {
      return ctx.submitApprovalAction();
    });
    \u0275\u0275template(214, PendingApprovalsComponent_span_214_Template, 3, 2, "span", 83)(215, PendingApprovalsComponent_span_215_Template, 3, 0, "span", 83);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(216, PendingApprovalsComponent_div_216_Template, 1, 0, "div", 131);
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.userName.substring(0, 2).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.userName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.hierarchyLevelName, " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.companyName);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.userEmail);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Level ", ctx.hierarchyLevelOrder);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.hierarchyLevelName);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
    \u0275\u0275advance(19);
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
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx.activeTab === "po-pending");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx.filteredPOApprovals.length > 0 ? "bg-danger" : "bg-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.filteredPOApprovals.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.activeTab === "po-hold");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx.filteredHoldPOApprovals.length > 0 ? "bg-warning text-dark" : "bg-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.filteredHoldPOApprovals.length, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeDateRangeLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.activeTab === "po-pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.activeTab === "po-hold");
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx.showSupplierDetailModal ? "block" : "none");
    \u0275\u0275classProp("show", ctx.showSupplierDetailModal);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !(ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.logoBase64));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.logoBase64);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.companyName) || "Supplier Details", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", (ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.companyType) || "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.industrySector) || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(93, _c0, (ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.approvalStatus) === "PENDING", (ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.approvalStatus) === "APPROVED", (ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.approvalStatus) === "REJECTED", (ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.approvalStatus) === "NEED_MORE_INFO"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.approvalStatus) || "PENDING", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.selectedSupplierDetail);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isLoadingSupplierDetail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoadingSupplierDetail && ctx.selectedSupplierDetail);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.id) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(98, _c1, (ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.approvalStatus) === "PENDING", (ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.approvalStatus) === "APPROVED", (ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.approvalStatus) === "REJECTED", (ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.approvalStatus) === "NEED_MORE_INFO"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx.selectedSupplierDetail == null ? null : ctx.selectedSupplierDetail.approvalStatus) || "\u2014", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.isSupplierPendingTab() && ctx.selectedSupplierApprovalItem);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSupplierHoldTab() && ctx.selectedSupplierApprovalItem);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSupplierInfoTab() && ctx.selectedSupplierApprovalItem);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showSupplierDetailModal);
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx.showApprovalModal ? "block" : "none");
    \u0275\u0275classProp("show", ctx.showApprovalModal);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx.getModalHeaderClass());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx.getModalIcon());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.getModalTitle(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isSubmitting);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.modalMode === "rfq");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.modalMode === "rfq");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.modalMode === "po");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.modalMode === "po");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.modalMode === "po");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.modalMode === "supplier");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.modalMode === "supplier");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.modalMode === "supplier");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.hierarchyLevelName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.modalMode === "rfq" && ctx.actionType === "approve" && ctx.isLastApprover);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.actionType === "need_more_info");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.getCommentsLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isCommentsRequired());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.actionComments);
    \u0275\u0275property("placeholder", ctx.getCommentsPlaceholder())("disabled", ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.actionType === "need_more_info");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.actionType === "approve" && ctx.modalMode === "rfq" && !ctx.isLastApprover);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.actionType === "approve" && ctx.modalMode === "rfq" && ctx.isLastApprover);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.actionType === "approve" && ctx.modalMode === "po");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.actionType === "approve" && ctx.modalMode === "supplier");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.actionType === "reject");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.actionType === "hold");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.actionType === "release");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isSubmitting);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn " + ctx.getActionButtonClass());
    \u0275\u0275property("disabled", ctx.isSubmitting || ctx.isCommentsRequired() && !ctx.actionComments.trim() || ctx.actionType === "approve" && ctx.modalMode === "rfq" && ctx.isLastApprover && (!ctx.rfqDueDate || !ctx.rfqDeliveryDate));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showApprovalModal);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.supplier-avatar-lg[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.25);\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.supplier-logo-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.contact-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #1565c0,\n      #283593);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-mini-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #42a5f5,\n      #1565c0);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.65rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.detail-section-header[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #1565c0;\n  padding: 0.4rem 0.75rem;\n  background:\n    linear-gradient(\n      90deg,\n      #e3f2fd,\n      #f8f9fa);\n  border-left: 4px solid #1565c0;\n  border-radius: 0 6px 6px 0;\n  margin-bottom: 0.75rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.detail-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  padding: 1.25rem;\n}\n.detail-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #8c96a3;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #212529;\n  font-weight: 500;\n}\n.detail-field-sm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sub-section-label[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: #495057;\n  border-bottom: 1px solid #e9ecef;\n  padding-bottom: 0.35rem;\n  margin-bottom: 0.5rem;\n}\n.location-card[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 10px;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.2s;\n}\n.location-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.location-header[_ngcontent-%COMP%] {\n  padding: 0.9rem 1.1rem;\n  background: #f8f9fa;\n  border-bottom: 1px solid transparent;\n  transition: background 0.2s;\n}\n.location-header[_ngcontent-%COMP%]:hover {\n  background: #f0f4f8;\n}\n.location-body[_ngcontent-%COMP%] {\n  padding: 1rem 1.1rem;\n  background: #fff;\n  border-top: 1px solid #e9ecef;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.location-number[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1565c0,\n      #283593);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.78rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.dept-card[_ngcontent-%COMP%] {\n  border: 1px solid #e3e8ef;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #fff;\n}\n.dept-header[_ngcontent-%COMP%] {\n  padding: 0.7rem 1rem;\n  background: #f4f6fa;\n  transition: background 0.2s;\n}\n.dept-header[_ngcontent-%COMP%]:hover {\n  background: #eef1f8;\n}\n.dept-number[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #26a69a,\n      #00838f);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.68rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n  border-bottom: 2px solid #dee2e6;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.supplier-detail-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_modalFadeIn 0.25s ease;\n}\n@keyframes _ngcontent-%COMP%_modalFadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.date-filter-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.date-filter-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.10);\n}\n.date-filter-accent[_ngcontent-%COMP%] {\n  width: 5px;\n  background:\n    linear-gradient(\n      180deg,\n      #667eea 0%,\n      #764ba2 100%);\n  flex-shrink: 0;\n}\n.date-filter-inner[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  padding: 18px 24px;\n  flex-wrap: wrap;\n  gap: 0;\n}\n.date-filter-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  min-width: 160px;\n}\n.date-filter-icon-wrap[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-title[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.2;\n}\n.date-filter-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #8a8a9a;\n  margin-top: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  font-weight: 500;\n}\n.date-filter-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 44px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      #e2e5f0,\n      transparent);\n  margin: 0 24px;\n  flex-shrink: 0;\n  align-self: center;\n}\n.date-filter-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.date-filter-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 220px;\n}\n.date-filter-custom-field[_ngcontent-%COMP%] {\n  max-width: 0;\n  min-width: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition:\n    max-width 0.3s ease,\n    opacity 0.3s ease,\n    min-width 0.3s ease;\n  pointer-events: none;\n}\n.date-filter-custom-field.date-filter-field-visible[_ngcontent-%COMP%] {\n  max-width: 200px;\n  min-width: 160px;\n  opacity: 1;\n  pointer-events: all;\n}\n.date-filter-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 0;\n  white-space: nowrap;\n}\n.date-filter-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.date-filter-select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.date-filter-select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n  padding: 9px 36px 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-select[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-select[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-select-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.75rem;\n  color: #667eea;\n  pointer-events: none;\n}\n.date-filter-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.date-filter-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-input[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-input[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  margin-left: auto;\n  flex-wrap: wrap;\n}\n.date-filter-badge-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  border: 1.5px solid rgba(102, 126, 234, 0.2);\n  border-radius: 12px;\n  padding: 8px 14px 8px 10px;\n}\n.date-filter-badge-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-badge-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  line-height: 1;\n}\n.date-filter-badge-value[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #667eea;\n  margin-top: 3px;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n.date-filter-reset-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 9px 16px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #667eea;\n  background: #f0f2ff;\n  border: 1.5px solid #d0d5f5;\n  border-radius: 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.date-filter-reset-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n  transform: translateY(-1px);\n}\n.date-filter-reset-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n@media (max-width: 992px) {\n  .date-filter-inner[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 16px;\n    padding: 16px 18px;\n  }\n  .date-filter-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .date-filter-title-wrap[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-controls[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .date-filter-right[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 576px) {\n  .date-filter-field[_ngcontent-%COMP%], \n   .date-filter-custom-field.date-filter-field-visible[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-badge-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.container-fluid[_ngcontent-%COMP%] {\n  background-color: #f7fafc;\n  min-height: 100vh;\n}\ninput[type=datetime-local][_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: 0.95rem;\n  padding: 0.625rem;\n  transition: all 0.2s ease;\n}\ninput[type=datetime-local][_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6 !important;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\ninput[type=datetime-local][_ngcontent-%COMP%]:disabled {\n  background-color: #f3f4f6;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.alert-warning[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  border-color: #f59e0b;\n}\n.alert-warning[_ngcontent-%COMP%]   .bi-calendar-event[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  border-color: #16a34a;\n}\n@keyframes _ngcontent-%COMP%_pulse-border {\n  0%, 100% {\n    border-color: #e2e8f0;\n  }\n  50% {\n    border-color: #3b82f6;\n  }\n}\ninput[type=datetime-local][_ngcontent-%COMP%]:focus {\n  animation: _ngcontent-%COMP%_pulse-border 1s ease-in-out;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #64748b;\n  letter-spacing: 0.5px;\n  padding: 1rem 0.75rem;\n  border: none;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 0.75rem;\n  vertical-align: middle;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.cursor-pointer[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: #4c51bf !important;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.4rem 0.7rem;\n  font-weight: 600;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  margin: 0 2px;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.modal-content[_ngcontent-%COMP%] {\n  border: none;\n}\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n}\n.approval-timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1rem 0;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.timeline-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.timeline-marker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n.timeline-marker-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: white;\n  border: 3px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  z-index: 2;\n  transition: all 0.3s;\n}\n.timeline-item.completed[_ngcontent-%COMP%]   .timeline-marker-circle[_ngcontent-%COMP%] {\n  border-color: #48bb78;\n  background-color: #f0fff4;\n}\n.timeline-item.rejected[_ngcontent-%COMP%]   .timeline-marker-circle[_ngcontent-%COMP%] {\n  border-color: #f56565;\n  background-color: #fff5f5;\n}\n.timeline-item.pending[_ngcontent-%COMP%]   .timeline-marker-circle[_ngcontent-%COMP%] {\n  border-color: #ed8936;\n  background-color: #fffaf0;\n}\n.timeline-line[_ngcontent-%COMP%] {\n  width: 2px;\n  flex-grow: 1;\n  background-color: #e2e8f0;\n  margin-top: 0.5rem;\n}\n.timeline-item.completed[_ngcontent-%COMP%]   .timeline-line[_ngcontent-%COMP%] {\n  background-color: #48bb78;\n}\n.timeline-content[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: white;\n  padding: 1rem;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid;\n}\n.alert-info[_ngcontent-%COMP%] {\n  background-color: #ebf8ff;\n  border-color: #bee3f8;\n  color: #2c5282;\n}\n.alert-warning[_ngcontent-%COMP%] {\n  background-color: #fffaf0;\n  border-color: #fbd38d;\n  color: #7c2d12;\n}\n.alert-light[_ngcontent-%COMP%] {\n  background-color: #f7fafc;\n  border-color: #e2e8f0;\n}\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: white;\n  border-right: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #6c757d;\n  border: none;\n  border-bottom: 3px solid transparent;\n  padding: 0.75rem 1.5rem;\n  font-weight: 600;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #495057;\n  border-bottom-color: #dee2e6;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #0066cc;\n  border-bottom-color: #0066cc;\n  background-color: transparent;\n}\n.badge.bg-warning[_ngcontent-%COMP%] {\n  background-color: #ffc107 !important;\n  color: #000 !important;\n}\nthead.bg-warning-light[_ngcontent-%COMP%] {\n  background-color: #fff3cd !important;\n}\n.alert-warning[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  border-color: #ffc107;\n  color: #856404;\n}\n@media (max-width: 768px) {\n  .btn-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .timeline-item[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .timeline-marker-circle[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    font-size: 1rem;\n  }\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n.bi-inbox[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n.gradient-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  padding: 10px;\n}\n.avatar-circle-large[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  color: white;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n}\n.info-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-card-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  font-size: 1.5rem;\n  color: white;\n}\n.info-card-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.9;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: white;\n  margin-top: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .avatar-circle-large[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    font-size: 1.5rem;\n  }\n  .info-card[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .info-card-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 1.2rem;\n  }\n  .info-label[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n@media (max-width: 576px) {\n  .gradient-header[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .avatar-circle-large[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    font-size: 1.2rem;\n    border-width: 2px;\n  }\n}\n/*# sourceMappingURL=pending-approvals.component.css.map */"] });
var PendingApprovalsComponent = _PendingApprovalsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingApprovalsComponent, [{
    type: Component,
    args: [{ selector: "app-pending-approvals", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="container-fluid p-4">\r
\r
  <!-- ==================== COMPANY INFO CARD ==================== -->\r
  <div class="row mb-4">\r
    <div class="col-12">\r
      <div class="card border-0 shadow-lg" style="border-radius:12px;overflow:hidden;">\r
        <div class="gradient-header">\r
          <div class="row align-items-center">\r
            <div class="col-12 col-lg-4 text-center text-lg-start mb-3 mb-lg-0">\r
              <div class="d-flex align-items-center justify-content-center justify-content-lg-start">\r
                <div class="avatar-circle-large me-3">{{ userName.substring(0,2).toUpperCase() }}</div>\r
                <div class="text-white">\r
                  <h3 class="mb-1 fw-bold" style="font-size:1.5rem;">{{ userName }}</h3>\r
                  <p class="mb-0" style="opacity:.9;font-size:.95rem;">\r
                    <i class="bi bi-shield-check me-1"></i>{{ hierarchyLevelName }}\r
                  </p>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-12 col-lg-8">\r
              <div class="row g-2">\r
                <div class="col-12 col-md-4">\r
                  <div class="info-card">\r
                    <div class="info-card-icon"><i class="bi bi-building-fill"></i></div>\r
                    <div class="info-card-content">\r
                      <div class="info-label">Company</div>\r
                      <div class="info-value">{{ companyName }}</div>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="col-12 col-md-4">\r
                  <div class="info-card">\r
                    <div class="info-card-icon"><i class="bi bi-envelope-fill"></i></div>\r
                    <div class="info-card-content">\r
                      <div class="info-label">Email</div>\r
                      <div class="info-value">{{ userEmail }}</div>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="col-12 col-md-4">\r
                  <div class="info-card">\r
                    <div class="info-card-icon"><i class="bi bi-diagram-3-fill"></i></div>\r
                    <div class="info-card-content">\r
                      <div class="info-label">Approval Level</div>\r
                      <div class="info-value">Level {{ hierarchyLevelOrder }}</div>\r
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
  <!-- ==================== HEADER ==================== -->\r
  <div class="d-flex justify-content-between align-items-center mb-4">\r
    <div>\r
      <h3 class="fw-bold text-dark mb-1"><i class="bi bi-clipboard-check"></i> Pending Approval Queue</h3>\r
      <p class="text-muted small mb-0">RFQs, Purchase Orders and Suppliers requiring your approval at <strong>{{ hierarchyLevelName }}</strong> level.</p>\r
    </div>\r
    <div class="d-flex gap-2">\r
      <button class="btn btn-outline-secondary" (click)="router.navigate(['/hierarchy-dashboard'])">\r
        <i class="bi bi-arrow-left"></i> Back\r
      </button>\r
      <button class="btn btn-outline-primary" (click)="refresh()" [disabled]="isLoading">\r
        <i class="bi bi-arrow-clockwise"></i> Refresh\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- ==================== SEARCH ==================== -->\r
  <div class="row mb-3">\r
    <div class="col-lg-5">\r
      <div class="input-group">\r
        <span class="input-group-text bg-white border-end-0"><i class="bi bi-search"></i></span>\r
        <input type="text" class="form-control border-start-0 ps-0"\r
               placeholder="Search by number, title, supplier..."\r
               [(ngModel)]="searchText" (ngModelChange)="onSearch()"/>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- ==================== DATE FILTER BAR ==================== -->\r
  <div class="date-filter-card mb-4">\r
    <div class="date-filter-accent"></div>\r
    <div class="date-filter-inner">\r
      <div class="date-filter-title-wrap">\r
        <div class="date-filter-icon-wrap"><i class="bi bi-calendar3-range"></i></div>\r
        <div>\r
          <div class="date-filter-title">Date Range</div>\r
          <div class="date-filter-subtitle">Filter approvals by creation date</div>\r
        </div>\r
      </div>\r
      <div class="date-filter-divider"></div>\r
      <div class="date-filter-controls">\r
        <div class="date-filter-field">\r
          <label class="date-filter-label"><i class="bi bi-calendar2-check me-1"></i>Financial Year / Period</label>\r
          <div class="date-filter-select-wrap">\r
            <select class="date-filter-select" [(ngModel)]="selectedFYOption" (change)="onFYOptionChange()">\r
              <option value="ALL">All Time</option>\r
              <option *ngFor="let fy of financialYearOptions" [value]="fy.value">{{ fy.label }}</option>\r
              <option value="CUSTOM">Custom Range</option>\r
            </select>\r
            <i class="bi bi-chevron-down date-filter-select-icon"></i>\r
          </div>\r
        </div>\r
        <div class="date-filter-field date-filter-custom-field"\r
             [class.date-filter-field-visible]="selectedFYOption === 'CUSTOM'">\r
          <label class="date-filter-label"><i class="bi bi-calendar-event me-1"></i>From Date</label>\r
          <div class="date-filter-input-wrap">\r
            <input type="date" class="date-filter-input" [(ngModel)]="customFromDate" (change)="onFYOptionChange()"/>\r
          </div>\r
        </div>\r
        <div class="date-filter-field date-filter-custom-field"\r
             [class.date-filter-field-visible]="selectedFYOption === 'CUSTOM'">\r
          <label class="date-filter-label"><i class="bi bi-calendar-event-fill me-1"></i>To Date</label>\r
          <div class="date-filter-input-wrap">\r
            <input type="date" class="date-filter-input" [(ngModel)]="customToDate" (change)="onFYOptionChange()"/>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="date-filter-divider"></div>\r
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
                (click)="resetDateFilter()">\r
          <i class="bi bi-arrow-counterclockwise me-1"></i>Current FY\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- ==================== TABS ====================\r
       PO approvals only. The RFQ, Supplier and Info-Requested tabs were removed with\r
       their modules \u2014 the loaders behind them are also skipped in the component, so this\r
       screen no longer makes calls to endpoints that are out of scope. -->\r
  <ul class="nav nav-tabs mb-4 flex-wrap">\r
    <li class="nav-item">\r
      <a class="nav-link" [class.active]="activeTab==='po-pending'" (click)="switchTab('po-pending')" style="cursor:pointer;">\r
        <i class="bi bi-file-earmark-text"></i> PO Pending\r
        <span class="badge ms-2" [class]="filteredPOApprovals.length>0?'bg-danger':'bg-secondary'">\r
          {{ filteredPOApprovals.length }}\r
        </span>\r
      </a>\r
    </li>\r
    <li class="nav-item">\r
      <a class="nav-link" [class.active]="activeTab==='po-hold'" (click)="switchTab('po-hold')" style="cursor:pointer;">\r
        <i class="bi bi-pause-fill"></i> PO On Hold\r
        <span class="badge ms-2" [class]="filteredHoldPOApprovals.length>0?'bg-warning text-dark':'bg-secondary'">\r
          {{ filteredHoldPOApprovals.length }}\r
        </span>\r
      </a>\r
    </li>\r
  </ul>\r
\r
  <div *ngIf="activeDateRangeLabel" class="mb-3">\r
    <small class="text-muted"><i class="bi bi-funnel me-1"></i>Showing: <strong>{{ activeDateRangeLabel }}</strong></small>\r
  </div>\r
\r
  <div *ngIf="isLoading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status"></div>\r
    <p class="text-muted mt-3">Loading approvals...</p>\r
  </div>\r
\r
  <!-- The RFQ and Supplier approval panels were removed along with their modules.\r
       Only PO Pending and PO On Hold remain. -->\r
\r
  <!-- ==================== TAB: PO PENDING ==================== -->\r
  <div *ngIf="!isLoading && activeTab==='po-pending'"\r
       class="card border-0 shadow-sm" style="border-radius:12px;overflow:hidden;">\r
    <div class="card-header bg-white border-0 pt-4 px-4 pb-3">\r
      <h5 class="fw-bold text-dark mb-0"><i class="bi bi-file-earmark-check text-danger"></i> PO Pending Approvals</h5>\r
      <!-- Service vs Regular \u2014 "Service" = follow-up POs auto-created from an approved SES\r
           additional-items (spares) quote. Applies to both PO Pending and PO Hold tabs. -->\r
      <div class="d-flex gap-2 mt-3">\r
        <button type="button" class="btn btn-sm" [ngClass]="poOriginFilter==='ALL' ? 'btn-dark' : 'btn-outline-secondary'"\r
                (click)="setPoOriginFilter('ALL')">All</button>\r
        <button type="button" class="btn btn-sm" [ngClass]="poOriginFilter==='REGULAR' ? 'btn-dark' : 'btn-outline-secondary'"\r
                (click)="setPoOriginFilter('REGULAR')">\r
          <i class="bi bi-file-earmark-text me-1"></i>Regular <span class="badge bg-light text-dark ms-1">{{ regularPOApprovalsCount }}</span>\r
        </button>\r
        <button type="button" class="btn btn-sm" [ngClass]="poOriginFilter==='SERVICE' ? 'btn-warning' : 'btn-outline-warning'"\r
                (click)="setPoOriginFilter('SERVICE')">\r
          <i class="bi bi-tools me-1"></i>Service (Spares) <span class="badge bg-light text-dark ms-1">{{ servicePOApprovalsCount }}</span>\r
        </button>\r
      </div>\r
    </div>\r
    <div class="card-body p-0">\r
      <div class="table-responsive">\r
        <table class="table align-middle mb-0" style="font-size:.9rem;">\r
          <thead style="background:#fce4ec;">\r
            <tr>\r
              <th class="ps-4 text-uppercase text-muted small fw-bold">Sl No</th>\r
              <th class="text-uppercase text-muted small fw-bold">PO Number</th>\r
              <th class="text-uppercase text-muted small fw-bold">Supplier</th>\r
              <th class="text-uppercase text-muted small fw-bold">Grand Total</th>\r
              <th class="text-uppercase text-muted small fw-bold">Approval Level</th>\r
              <th class="text-uppercase text-muted small fw-bold">Submitted Date</th>\r
              <th class="pe-4 text-uppercase text-muted small fw-bold">Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let approval of filteredPOApprovals; let i=index" style="border-bottom:1px solid #e9ecef;">\r
              <td class="ps-4"><strong>{{ i+1 }}</strong></td>\r
              <td>\r
                <div class="fw-bold text-primary" style="cursor:pointer;"\r
                     (click)="viewPODetails(approval)">\r
                  {{ approval.poNumber }}\r
                  <span *ngIf="approval.sourceSesId" class="badge bg-warning text-dark ms-1" style="font-size:0.65rem;">\r
                    <i class="bi bi-tools"></i> Service\r
                  </span>\r
                </div>\r
                <small class="text-muted">{{ approval.rfqNumber }}</small>\r
              </td>\r
              <td><div class="fw-bold">{{ approval.supplierName||'N/A' }}</div></td>\r
              <td><span class="fw-bold text-success">{{ formatCurrency(approval.grandTotal,approval.currencyCode) }}</span></td>\r
              <td>\r
                <div class="d-flex align-items-center gap-2">\r
                  <i class="bi bi-layers text-danger"></i>\r
                  <span class="fw-bold text-danger small">{{ approval.hierarchyLevelName }}</span>\r
                </div>\r
              </td>\r
              <td><span class="text-muted small">{{ formatDate(approval.actionDate||approval.createdAt) }}</span></td>\r
              <td class="pe-4">\r
                <div class="btn-group" role="group">\r
                  <button class="btn btn-sm btn-light text-info shadow-sm"\r
                          (click)="viewPODetails(approval)" title="View"><i class="bi bi-eye"></i></button>\r
                  <button class="btn btn-sm btn-light text-success shadow-sm"\r
                          (click)="openApprovalModal(approval,'approve','po')" title="Approve"><i class="bi bi-check-circle"></i></button>\r
                  <button class="btn btn-sm btn-light text-warning shadow-sm"\r
                          (click)="openApprovalModal(approval,'hold','po')" title="Hold"><i class="bi bi-pause-circle"></i></button>\r
                  <button class="btn btn-sm btn-light text-warning shadow-sm"\r
                          (click)="openApprovalModal(approval,'return','po')" title="Return for Revision"><i class="bi bi-arrow-return-left"></i></button>\r
                  <button class="btn btn-sm btn-light text-danger shadow-sm"\r
                          (click)="openApprovalModal(approval,'reject','po')" title="Reject Permanently"><i class="bi bi-x-circle"></i></button>\r
                </div>\r
              </td>\r
            </tr>\r
            <tr *ngIf="filteredPOApprovals.length===0">\r
              <td colspan="7" class="text-center text-muted py-5">\r
                <i class="bi bi-inbox display-6 mb-3 d-block opacity-25"></i>\r
                <h5 class="text-muted">No Pending PO Approvals</h5>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- ==================== TAB: PO HOLD ==================== -->\r
  <div *ngIf="!isLoading && activeTab==='po-hold'"\r
       class="card border-0 shadow-sm" style="border-radius:12px;overflow:hidden;">\r
    <div class="card-header bg-white border-0 pt-4 px-4 pb-3">\r
      <h5 class="fw-bold text-dark mb-0"><i class="bi bi-pause-fill text-warning"></i> Purchase Orders on HOLD</h5>\r
      <div class="d-flex gap-2 mt-3">\r
        <button type="button" class="btn btn-sm" [ngClass]="poOriginFilter==='ALL' ? 'btn-dark' : 'btn-outline-secondary'"\r
                (click)="setPoOriginFilter('ALL')">All</button>\r
        <button type="button" class="btn btn-sm" [ngClass]="poOriginFilter==='REGULAR' ? 'btn-dark' : 'btn-outline-secondary'"\r
                (click)="setPoOriginFilter('REGULAR')">\r
          <i class="bi bi-file-earmark-text me-1"></i>Regular <span class="badge bg-light text-dark ms-1">{{ regularPOApprovalsCount }}</span>\r
        </button>\r
        <button type="button" class="btn btn-sm" [ngClass]="poOriginFilter==='SERVICE' ? 'btn-warning' : 'btn-outline-warning'"\r
                (click)="setPoOriginFilter('SERVICE')">\r
          <i class="bi bi-tools me-1"></i>Service (Spares) <span class="badge bg-light text-dark ms-1">{{ servicePOApprovalsCount }}</span>\r
        </button>\r
      </div>\r
    </div>\r
    <div class="card-body p-0">\r
      <div class="table-responsive">\r
        <table class="table align-middle mb-0" style="font-size:.9rem;">\r
          <thead style="background:#fff3cd;">\r
            <tr>\r
              <th class="ps-4 text-uppercase text-muted small fw-bold">Sl No</th>\r
              <th class="text-uppercase text-muted small fw-bold">PO Number</th>\r
              <th class="text-uppercase text-muted small fw-bold">Supplier</th>\r
              <th class="text-uppercase text-muted small fw-bold">Grand Total</th>\r
              <th class="text-uppercase text-muted small fw-bold">HOLD Remarks</th>\r
              <th class="text-uppercase text-muted small fw-bold">HOLD Date</th>\r
              <th class="pe-4 text-uppercase text-muted small fw-bold">Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let approval of filteredHoldPOApprovals; let i=index" style="border-bottom:1px solid #e9ecef;">\r
              <td class="ps-4"><strong>{{ i+1 }}</strong></td>\r
              <td>\r
                <div class="fw-bold text-warning" style="cursor:pointer;"\r
                     (click)="viewPODetails(approval)">\r
                  {{ approval.poNumber }}\r
                  <span *ngIf="approval.sourceSesId" class="badge bg-warning text-dark ms-1" style="font-size:0.65rem;">\r
                    <i class="bi bi-tools"></i> Service\r
                  </span>\r
                </div>\r
                <small class="text-muted">{{ approval.rfqNumber }}</small>\r
              </td>\r
              <td><div class="fw-bold">{{ approval.supplierName||'N/A' }}</div></td>\r
              <td><span class="fw-bold text-success">{{ formatCurrency(approval.grandTotal,approval.currencyCode) }}</span></td>\r
              <td style="max-width:250px;">\r
                <div class="alert alert-warning mb-0 p-2" style="font-size:.85rem;">\r
                  <i class="bi bi-info-circle"></i> <strong>{{ approval.holdRemarks||'No remarks' }}</strong>\r
                </div>\r
              </td>\r
              <td><span class="text-muted small">{{ formatDate(approval.holdDate) }}</span></td>\r
              <td class="pe-4">\r
                <div class="btn-group">\r
                  <button class="btn btn-sm btn-light text-info shadow-sm"\r
                          (click)="viewPODetails(approval)" title="View"><i class="bi bi-eye"></i></button>\r
                  <button class="btn btn-sm btn-success shadow-sm"\r
                          (click)="openApprovalModal(approval,'release','po')">\r
                    <i class="bi bi-play-circle"></i> Release\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
            <tr *ngIf="filteredHoldPOApprovals.length===0">\r
              <td colspan="7" class="text-center text-muted py-5">\r
                <i class="bi bi-inbox display-6 mb-3 d-block opacity-25"></i>\r
                <h5 class="text-muted">No POs on HOLD</h5>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div><!-- end container -->\r
\r
<!-- ==================== SUPPLIER DETAIL MODAL ==================== -->\r
<div class="modal fade supplier-detail-modal"\r
     [class.show]="showSupplierDetailModal"\r
     [style.display]="showSupplierDetailModal?'block':'none'"\r
     tabindex="-1"\r
     style="background-color:rgba(0,0,0,.6);z-index:1055;">\r
  <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">\r
    <div class="modal-content border-0 shadow-lg" style="border-radius:16px;overflow:hidden;max-height:90vh;">\r
\r
      <!-- HEADER -->\r
      <div class="modal-header border-0 p-0">\r
        <div class="w-100" style="background:linear-gradient(135deg,#1a237e,#283593,#1565c0);padding:1.5rem 2rem;">\r
          <div class="d-flex align-items-center justify-content-between">\r
            <div class="d-flex align-items-center gap-3">\r
              <div class="supplier-avatar-lg">\r
                <span *ngIf="!selectedSupplierDetail?.logoBase64">\r
                  {{ getInitials(selectedSupplierDetail?.companyName) }}\r
                </span>\r
                <img *ngIf="selectedSupplierDetail?.logoBase64"\r
                     [src]="selectedSupplierDetail?.logoBase64" alt="Logo" class="supplier-logo-img"/>\r
              </div>\r
              <div class="text-white">\r
                <h4 class="mb-0 fw-bold" style="font-size:1.4rem;">\r
                  {{ selectedSupplierDetail?.companyName||'Supplier Details' }}\r
                </h4>\r
                <div class="d-flex align-items-center gap-2 mt-1 flex-wrap">\r
                  <span class="badge" style="background:rgba(255,255,255,.2);font-size:.75rem;">\r
                    <i class="bi bi-briefcase me-1"></i>{{ selectedSupplierDetail?.companyType||'\u2014' }}\r
                  </span>\r
                  <span class="badge" style="background:rgba(255,255,255,.2);font-size:.75rem;">\r
                    <i class="bi bi-diagram-3 me-1"></i>{{ selectedSupplierDetail?.industrySector||'\u2014' }}\r
                  </span>\r
                  <span class="badge"\r
                        [ngClass]="{\r
                          'bg-warning text-dark': selectedSupplierDetail?.approvalStatus==='PENDING',\r
                          'bg-success':           selectedSupplierDetail?.approvalStatus==='APPROVED',\r
                          'bg-danger':            selectedSupplierDetail?.approvalStatus==='REJECTED',\r
                          'bg-info':              selectedSupplierDetail?.approvalStatus==='NEED_MORE_INFO'\r
                        }"\r
                        style="font-size:.75rem;">\r
                    {{ selectedSupplierDetail?.approvalStatus||'PENDING' }}\r
                  </span>\r
                </div>\r
              </div>\r
            </div>\r
            <button type="button" class="btn-close btn-close-white btn-lg"\r
                    (click)="closeSupplierDetailModal()"></button>\r
          </div>\r
\r
          <!-- Quick Stats -->\r
          <div class="row g-2 mt-3" *ngIf="selectedSupplierDetail">\r
            <div class="col-6 col-md-3">\r
              <div style="background:rgba(255,255,255,.12);border-radius:8px;padding:10px;text-align:center;">\r
                <div class="text-white fw-bold" style="font-size:1.3rem;">\r
                  {{ selectedSupplierDetail?.locations?.length||0 }}\r
                </div>\r
                <div style="color:rgba(255,255,255,.75);font-size:.72rem;">Locations</div>\r
              </div>\r
            </div>\r
            <div class="col-6 col-md-3">\r
              <div style="background:rgba(255,255,255,.12);border-radius:8px;padding:10px;text-align:center;">\r
                <div class="text-white fw-bold" style="font-size:1.3rem;">\r
                  {{ getTotalDepartments(selectedSupplierDetail) }}\r
                </div>\r
                <div style="color:rgba(255,255,255,.75);font-size:.72rem;">Departments</div>\r
              </div>\r
            </div>\r
            <div class="col-6 col-md-3">\r
              <div style="background:rgba(255,255,255,.12);border-radius:8px;padding:10px;text-align:center;">\r
                <div class="text-white fw-bold" style="font-size:1.3rem;">\r
                  {{ getTotalUsers(selectedSupplierDetail) }}\r
                </div>\r
                <div style="color:rgba(255,255,255,.75);font-size:.72rem;">Contacts</div>\r
              </div>\r
            </div>\r
            <div class="col-6 col-md-3">\r
              <div style="background:rgba(255,255,255,.12);border-radius:8px;padding:10px;text-align:center;">\r
                <div class="text-white fw-bold" style="font-size:1.3rem;">\r
                  {{ selectedSupplierDetail?.country||'\u2014' }}\r
                </div>\r
                <div style="color:rgba(255,255,255,.75);font-size:.72rem;">Country</div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- BODY -->\r
      <div class="modal-body p-0" style="overflow-y:auto;background:#f8f9fa;">\r
\r
        <div *ngIf="isLoadingSupplierDetail" class="text-center py-5">\r
          <div class="spinner-border text-primary" style="width:3rem;height:3rem;" role="status"></div>\r
          <p class="text-muted mt-3 fw-semibold">Loading supplier details...</p>\r
        </div>\r
\r
        <div *ngIf="!isLoadingSupplierDetail && selectedSupplierDetail" class="p-4">\r
\r
          <!-- SECTION 1: COMPANY INFO -->\r
          <div class="detail-section mb-4">\r
            <div class="detail-section-header"><i class="bi bi-building-fill"></i> Company Information</div>\r
            <div class="detail-card">\r
              <div class="row g-3">\r
                <div class="col-md-4">\r
                  <div class="detail-field">\r
                    <span class="detail-label">Company Name</span>\r
                    <span class="detail-value">{{ selectedSupplierDetail.companyName||'\u2014' }}</span>\r
                  </div>\r
                </div>\r
                <div class="col-md-4">\r
                  <div class="detail-field">\r
                    <span class="detail-label">Company Type</span>\r
                    <span class="detail-value">{{ selectedSupplierDetail.companyType||'\u2014' }}</span>\r
                  </div>\r
                </div>\r
                <div class="col-md-4">\r
                  <div class="detail-field">\r
                    <span class="detail-label">Industry Sector</span>\r
                    <span class="detail-value">{{ selectedSupplierDetail.industrySector||'\u2014' }}</span>\r
                  </div>\r
                </div>\r
                <div class="col-md-4">\r
                  <div class="detail-field">\r
                    <span class="detail-label"><i class="bi bi-globe me-1 text-primary"></i>Website</span>\r
                    <span class="detail-value">\r
                      <a *ngIf="selectedSupplierDetail.website"\r
                         [href]="selectedSupplierDetail.website" target="_blank" class="text-primary">\r
                        {{ selectedSupplierDetail.website }}<i class="bi bi-box-arrow-up-right ms-1" style="font-size:.7rem;"></i>\r
                      </a>\r
                      <span *ngIf="!selectedSupplierDetail.website" class="text-muted">\u2014</span>\r
                    </span>\r
                  </div>\r
                </div>\r
                <div class="col-md-4">\r
                  <div class="detail-field">\r
                    <span class="detail-label"><i class="bi bi-file-text me-1 text-success"></i>GST Number</span>\r
                    <span class="detail-value fw-semibold font-monospace">{{ selectedSupplierDetail.gstNumber||'\u2014' }}</span>\r
                  </div>\r
                </div>\r
                <div class="col-md-4">\r
                  <div class="detail-field">\r
                    <span class="detail-label"><i class="bi bi-card-text me-1 text-info"></i>PAN Number</span>\r
                    <span class="detail-value fw-semibold font-monospace">{{ selectedSupplierDetail.panNumber||'\u2014' }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- SECTION 2: PRIMARY CONTACT -->\r
          <div class="detail-section mb-4">\r
            <div class="detail-section-header"><i class="bi bi-person-badge-fill"></i> Primary Contact Person</div>\r
            <div class="detail-card">\r
              <div class="d-flex align-items-start gap-3">\r
                <div class="contact-avatar">{{ getInitials(selectedSupplierDetail.contactPersonName) }}</div>\r
                <div class="row g-3 flex-grow-1">\r
                  <div class="col-md-4">\r
                    <div class="detail-field">\r
                      <span class="detail-label">Full Name</span>\r
                      <span class="detail-value fw-bold">{{ selectedSupplierDetail.contactPersonName||'\u2014' }}</span>\r
                    </div>\r
                  </div>\r
                  <div class="col-md-4">\r
                    <div class="detail-field">\r
                      <span class="detail-label">Designation</span>\r
                      <span class="detail-value">{{ selectedSupplierDetail.contactPersonDesignation||'\u2014' }}</span>\r
                    </div>\r
                  </div>\r
                  <div class="col-md-4">\r
                    <div class="detail-field">\r
                      <span class="detail-label"><i class="bi bi-envelope me-1 text-primary"></i>Email</span>\r
                      <span class="detail-value">\r
                        <a [href]="'mailto:'+selectedSupplierDetail.contactPersonEmail" class="text-primary">\r
                          {{ selectedSupplierDetail.contactPersonEmail||'\u2014' }}\r
                        </a>\r
                      </span>\r
                    </div>\r
                  </div>\r
                  <div class="col-md-4">\r
                    <div class="detail-field">\r
                      <span class="detail-label"><i class="bi bi-telephone me-1 text-success"></i>Phone</span>\r
                      <span class="detail-value fw-semibold">{{ selectedSupplierDetail.contactPersonPhone||'\u2014' }}</span>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- SECTION 3: ADDRESS -->\r
          <div class="detail-section mb-4">\r
            <div class="detail-section-header"><i class="bi bi-geo-alt-fill"></i> Headquarters Address</div>\r
            <div class="detail-card">\r
              <div class="row g-3">\r
                <div class="col-12">\r
                  <div class="detail-field">\r
                    <span class="detail-label">Address</span>\r
                    <span class="detail-value">\r
                      {{ selectedSupplierDetail.addressLine1||'' }}\r
                      <span *ngIf="selectedSupplierDetail.addressLine2">, {{ selectedSupplierDetail.addressLine2 }}</span>\r
                    </span>\r
                  </div>\r
                </div>\r
                <div class="col-md-3">\r
                  <div class="detail-field">\r
                    <span class="detail-label">City</span>\r
                    <span class="detail-value">{{ selectedSupplierDetail.city||'\u2014' }}</span>\r
                  </div>\r
                </div>\r
                <div class="col-md-3">\r
                  <div class="detail-field">\r
                    <span class="detail-label">State</span>\r
                    <span class="detail-value">{{ selectedSupplierDetail.state||'\u2014' }}</span>\r
                  </div>\r
                </div>\r
                <div class="col-md-3">\r
                  <div class="detail-field">\r
                    <span class="detail-label">Postal Code</span>\r
                    <span class="detail-value fw-semibold font-monospace">{{ selectedSupplierDetail.postalCode||'\u2014' }}</span>\r
                  </div>\r
                </div>\r
                <div class="col-md-3">\r
                  <div class="detail-field">\r
                    <span class="detail-label">Country</span>\r
                    <span class="detail-value">{{ selectedSupplierDetail.country||'\u2014' }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- SECTION 4: LOCATIONS -->\r
          <div class="detail-section mb-4" *ngIf="selectedSupplierDetail?.locations?.length>0">\r
            <div class="detail-section-header">\r
              <i class="bi bi-pin-map-fill"></i> Locations ({{ selectedSupplierDetail.locations.length }})\r
            </div>\r
            <div *ngFor="let loc of selectedSupplierDetail.locations; let li=index" class="mb-3">\r
              <div class="location-card">\r
                <div class="location-header" (click)="toggleLocationExpand(li)" style="cursor:pointer;user-select:none;">\r
                  <div class="d-flex align-items-center justify-content-between">\r
                    <div class="d-flex align-items-center gap-3">\r
                      <div class="location-number">{{ li+1 }}</div>\r
                      <div>\r
                        <div class="fw-bold text-dark" style="font-size:1rem;">{{ loc.locationName||'Location '+(li+1) }}</div>\r
                        <div class="text-muted small">\r
                          <span class="badge bg-light text-secondary border me-2">\r
                            <i class="bi bi-building me-1"></i>{{ loc.locationType||'N/A' }}\r
                          </span>\r
                          <i class="bi bi-geo-alt me-1"></i>{{ loc.city }}, {{ loc.state }}, {{ loc.country }}\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="d-flex align-items-center gap-2">\r
                      <span class="badge bg-info" title="Departments">\r
                        <i class="bi bi-diagram-2 me-1"></i>{{ loc.departments?.length||0 }} Depts\r
                      </span>\r
                      <span class="badge bg-secondary" title="Users">\r
                        <i class="bi bi-people me-1"></i>{{ getUserCountForLocation(loc) }} Users\r
                      </span>\r
                      <i class="bi text-muted"\r
                         [ngClass]="expandedLocations[li]?'bi-chevron-up':'bi-chevron-down'"></i>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div *ngIf="expandedLocations[li]" class="location-body">\r
                  <div class="row g-3 mb-3">\r
                    <div class="col-md-3">\r
                      <div class="detail-field-sm">\r
                        <span class="detail-label">Contact Name</span>\r
                        <span class="detail-value fw-semibold">{{ loc.locationContactName||'\u2014' }}</span>\r
                      </div>\r
                    </div>\r
                    <div class="col-md-4">\r
                      <div class="detail-field-sm">\r
                        <span class="detail-label">Email</span>\r
                        <a [href]="'mailto:'+loc.locationContactEmail" class="detail-value text-primary d-block">\r
                          {{ loc.locationContactEmail||'\u2014' }}\r
                        </a>\r
                      </div>\r
                    </div>\r
                    <div class="col-md-2">\r
                      <div class="detail-field-sm">\r
                        <span class="detail-label">Phone</span>\r
                        <span class="detail-value">{{ loc.locationContactPhone||'\u2014' }}</span>\r
                      </div>\r
                    </div>\r
                    <div class="col-md-3">\r
                      <div class="detail-field-sm">\r
                        <span class="detail-label">Landline</span>\r
                        <span class="detail-value">{{ loc.landlineNumber||'\u2014' }}</span>\r
                      </div>\r
                    </div>\r
                  </div>\r
\r
                  <!-- Departments -->\r
                  <div *ngIf="loc.departments?.length>0">\r
                    <div class="sub-section-label mb-2">\r
                      <i class="bi bi-diagram-2-fill me-1"></i>Departments ({{ loc.departments.length }})\r
                    </div>\r
                    <div *ngFor="let dept of loc.departments; let di=index" class="dept-card mb-2">\r
                      <div class="dept-header" (click)="toggleDeptExpand(li,di)" style="cursor:pointer;user-select:none;">\r
                        <div class="d-flex align-items-center justify-content-between">\r
                          <div class="d-flex align-items-center gap-2">\r
                            <div class="dept-number">{{ di+1 }}</div>\r
                            <div>\r
                              <div class="fw-semibold text-dark">{{ dept.departmentName||'\u2014' }}</div>\r
                              <div class="text-muted" style="font-size:.78rem;">\r
                                <i class="bi bi-tag me-1"></i>{{ dept.categoryOfProducts||'No Category' }}\r
                              </div>\r
                            </div>\r
                          </div>\r
                          <div class="d-flex align-items-center gap-2">\r
                            <span class="badge bg-light text-dark border" style="font-size:.72rem;">\r
                              <i class="bi bi-people me-1"></i>{{ dept.users?.length||0 }} users\r
                            </span>\r
                            <i class="bi text-muted small"\r
                               [ngClass]="expandedDepts[li+'-'+di]?'bi-chevron-up':'bi-chevron-down'"></i>\r
                          </div>\r
                        </div>\r
                      </div>\r
\r
                      <div *ngIf="expandedDepts[li+'-'+di] && dept.users?.length>0"\r
                           style="border-top:1px solid #e9ecef;">\r
                        <div class="table-responsive">\r
                          <table class="table table-sm mb-0" style="font-size:.82rem;">\r
                            <thead style="background:#f1f3f5;">\r
                              <tr>\r
                                <th class="ps-3">#</th>\r
                                <th>Name</th>\r
                                <th>Email</th>\r
                                <th>Phone</th>\r
                                <th>Designation</th>\r
                                <th class="pe-3">City / State</th>\r
                              </tr>\r
                            </thead>\r
                            <tbody>\r
                              <tr *ngFor="let user of dept.users; let ui=index"\r
                                  style="border-bottom:1px solid #f0f0f0;">\r
                                <td class="ps-3 text-muted">{{ ui+1 }}</td>\r
                                <td>\r
                                  <div class="d-flex align-items-center gap-2">\r
                                    <div class="user-mini-avatar">\r
                                      {{ getInitials((user.firstName||'')+' '+(user.lastName||'')) }}\r
                                    </div>\r
                                    <span class="fw-semibold">{{ user.firstName }} {{ user.lastName }}</span>\r
                                  </div>\r
                                </td>\r
                                <td>\r
                                  <a [href]="'mailto:'+user.email" class="text-primary" style="font-size:.8rem;">\r
                                    {{ user.email||'\u2014' }}\r
                                  </a>\r
                                </td>\r
                                <td>{{ user.phone||'\u2014' }}</td>\r
                                <td>{{ user.designation||'\u2014' }}</td>\r
                                <td class="pe-3 text-muted" style="font-size:.78rem;">\r
                                  {{ user.city }}<span *ngIf="user.city&&user.state">, </span>{{ user.state }}\r
                                </td>\r
                              </tr>\r
                            </tbody>\r
                          </table>\r
                        </div>\r
                      </div>\r
                      <div *ngIf="expandedDepts[li+'-'+di] && (!dept.users||dept.users.length===0)"\r
                           class="text-center text-muted py-3" style="font-size:.85rem;">\r
                        <i class="bi bi-person-x opacity-50"></i> No contacts assigned to this department.\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="!selectedSupplierDetail?.locations||selectedSupplierDetail.locations.length===0"\r
               class="detail-section mb-4">\r
            <div class="detail-section-header"><i class="bi bi-pin-map-fill"></i> Locations</div>\r
            <div class="detail-card text-center text-muted py-4">\r
              <i class="bi bi-geo-alt display-6 opacity-25"></i>\r
              <p class="mt-2 mb-0">No locations added for this supplier.</p>\r
            </div>\r
          </div>\r
\r
        </div><!-- end !isLoading -->\r
      </div><!-- end modal-body -->\r
\r
      <!-- MODAL FOOTER -->\r
      <div class="modal-footer border-top bg-white p-3">\r
        <div class="d-flex justify-content-between align-items-center w-100 flex-wrap gap-2">\r
          <div class="text-muted small">\r
            <i class="bi bi-building me-1"></i>\r
            Supplier ID: <strong>{{ selectedSupplierDetail?.id||'\u2014' }}</strong>\r
            &nbsp;|&nbsp;\r
            Status:\r
            <span class="fw-bold"\r
                  [ngClass]="{\r
                    'text-warning': selectedSupplierDetail?.approvalStatus==='PENDING',\r
                    'text-success': selectedSupplierDetail?.approvalStatus==='APPROVED',\r
                    'text-danger':  selectedSupplierDetail?.approvalStatus==='REJECTED',\r
                    'text-info':    selectedSupplierDetail?.approvalStatus==='NEED_MORE_INFO'\r
                  }">\r
              {{ selectedSupplierDetail?.approvalStatus||'\u2014' }}\r
            </span>\r
          </div>\r
          <div class="d-flex gap-2 flex-wrap">\r
            <button class="btn btn-outline-secondary" (click)="closeSupplierDetailModal()">\r
              <i class="bi bi-x-lg me-1"></i>Close\r
            </button>\r
            <!-- Pending tab quick actions -->\r
            <ng-container *ngIf="isSupplierPendingTab() && selectedSupplierApprovalItem">\r
              <button class="btn btn-success btn-sm px-3"\r
                      (click)="closeSupplierDetailModal();openApprovalModal(selectedSupplierApprovalItem,'approve','supplier')">\r
                <i class="bi bi-check-circle me-1"></i>Approve\r
              </button>\r
              <button class="btn btn-warning btn-sm px-3"\r
                      (click)="closeSupplierDetailModal();openApprovalModal(selectedSupplierApprovalItem,'hold','supplier')">\r
                <i class="bi bi-pause-circle me-1"></i>Hold\r
              </button>\r
              <button class="btn btn-info text-white btn-sm px-3"\r
                      (click)="closeSupplierDetailModal();openApprovalModal(selectedSupplierApprovalItem,'need_more_info','supplier')">\r
                <i class="bi bi-question-circle me-1"></i>Need Info\r
              </button>\r
              <button class="btn btn-danger btn-sm px-3"\r
                      (click)="closeSupplierDetailModal();openApprovalModal(selectedSupplierApprovalItem,'reject','supplier')">\r
                <i class="bi bi-x-circle me-1"></i>Reject\r
              </button>\r
            </ng-container>\r
            <!-- Hold tab quick actions -->\r
            <ng-container *ngIf="isSupplierHoldTab() && selectedSupplierApprovalItem">\r
              <button class="btn btn-success btn-sm px-3"\r
                      (click)="closeSupplierDetailModal();openApprovalModal(selectedSupplierApprovalItem,'release','supplier')">\r
                <i class="bi bi-play-circle me-1"></i>Release Hold\r
              </button>\r
            </ng-container>\r
            <!-- Info requested tab quick actions -->\r
            <ng-container *ngIf="isSupplierInfoTab() && selectedSupplierApprovalItem">\r
              <button class="btn btn-success btn-sm px-3"\r
                      (click)="closeSupplierDetailModal();openApprovalModal(selectedSupplierApprovalItem,'approve','supplier')">\r
                <i class="bi bi-check-circle me-1"></i>Approve\r
              </button>\r
              <button class="btn btn-info text-white btn-sm px-3"\r
                      (click)="closeSupplierDetailModal();openApprovalModal(selectedSupplierApprovalItem,'need_more_info','supplier')">\r
                <i class="bi bi-arrow-repeat me-1"></i>Ask Again\r
              </button>\r
            </ng-container>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
<div class="modal-backdrop fade show" *ngIf="showSupplierDetailModal" style="z-index:1050;"></div>\r
\r
<!-- ==================== APPROVAL MODAL ==================== -->\r
<div class="modal fade"\r
     [class.show]="showApprovalModal"\r
     [style.display]="showApprovalModal?'block':'none'"\r
     tabindex="-1"\r
     style="background-color:rgba(0,0,0,.5);">\r
  <div class="modal-dialog modal-dialog-centered">\r
    <div class="modal-content border-0 shadow-lg" style="border-radius:12px;">\r
\r
      <!-- MODAL HEADER -->\r
      <div class="modal-header border-0 text-white" [ngClass]="getModalHeaderClass()"\r
           style="padding:1.5rem;border-radius:12px 12px 0 0;">\r
        <h5 class="modal-title fw-bold mb-0">\r
          <i class="bi" [ngClass]="getModalIcon()"></i> {{ getModalTitle() }}\r
        </h5>\r
        <button type="button" class="btn-close btn-close-white"\r
                (click)="closeApprovalModal()" [disabled]="isSubmitting"></button>\r
      </div>\r
\r
      <!-- MODAL BODY -->\r
      <div class="modal-body p-4">\r
\r
        <!-- Item summary -->\r
        <div class="alert alert-light border mb-4" style="background:#f8f9fa;">\r
          <div class="row g-2">\r
            <!-- RFQ -->\r
            <div class="col-12" *ngIf="modalMode==='rfq'">\r
              <small class="text-muted fw-bold text-uppercase d-block" style="font-size:.7rem;">RFQ Number</small>\r
              <h6 class="mb-0 fw-bold text-primary">{{ selectedItem?.rfqNumber }}</h6>\r
            </div>\r
            <div class="col-12" *ngIf="modalMode==='rfq'">\r
              <small class="text-muted fw-bold text-uppercase d-block" style="font-size:.7rem;">Title</small>\r
              <p class="mb-0">{{ selectedItem?.rfqTitle }}</p>\r
            </div>\r
            <!-- PO -->\r
            <div class="col-12" *ngIf="modalMode==='po'">\r
              <small class="text-muted fw-bold text-uppercase d-block" style="font-size:.7rem;">PO Number</small>\r
              <h6 class="mb-0 fw-bold text-danger">{{ selectedItem?.poNumber }}</h6>\r
            </div>\r
            <div class="col-6" *ngIf="modalMode==='po'">\r
              <small class="text-muted fw-bold text-uppercase d-block" style="font-size:.7rem;">Supplier</small>\r
              <p class="mb-0 fw-bold">{{ selectedItem?.supplierName }}</p>\r
            </div>\r
            <div class="col-6" *ngIf="modalMode==='po'">\r
              <small class="text-muted fw-bold text-uppercase d-block" style="font-size:.7rem;">Grand Total</small>\r
              <p class="mb-0 fw-bold text-success">{{ formatCurrency(selectedItem?.grandTotal,selectedItem?.currencyCode) }}</p>\r
            </div>\r
            <!-- Supplier -->\r
            <div class="col-12" *ngIf="modalMode==='supplier'">\r
              <small class="text-muted fw-bold text-uppercase d-block" style="font-size:.7rem;">Company Name</small>\r
              <h6 class="mb-0 fw-bold text-primary">{{ selectedItem?.supplierCompanyName }}</h6>\r
            </div>\r
            <div class="col-6" *ngIf="modalMode==='supplier'">\r
              <small class="text-muted fw-bold text-uppercase d-block" style="font-size:.7rem;">Contact Email</small>\r
              <p class="mb-0 small">{{ selectedItem?.supplierContactEmail||'\u2014' }}</p>\r
            </div>\r
            <div class="col-6" *ngIf="modalMode==='supplier'">\r
              <small class="text-muted fw-bold text-uppercase d-block" style="font-size:.7rem;">Supplier ID</small>\r
              <p class="mb-0">{{ selectedItem?.supplierId }}</p>\r
            </div>\r
            <!-- Common -->\r
            <div class="col-6">\r
              <small class="text-muted fw-bold text-uppercase d-block" style="font-size:.7rem;">Your Level</small>\r
              <p class="mb-0 fw-bold text-primary">{{ hierarchyLevelName }}</p>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Last-approver date fields (RFQ only) -->\r
        <div *ngIf="modalMode==='rfq' && actionType==='approve' && isLastApprover"\r
             class="alert alert-warning mb-4" style="border-left:4px solid #f59e0b;">\r
          <div class="d-flex align-items-center mb-3">\r
            <i class="bi bi-calendar-event fs-4 me-2 text-warning"></i>\r
            <div>\r
              <strong class="d-block">\u2B50 Final Approval \u2014 Set RFQ Dates</strong>\r
              <small class="text-muted">You must set dates before publishing to suppliers</small>\r
            </div>\r
          </div>\r
          <div class="mb-3">\r
            <label class="form-label fw-bold">RFQ Due Date <span class="text-danger">*</span></label>\r
            <input type="datetime-local" class="form-control" [(ngModel)]="rfqDueDate"\r
                   [min]="minDueDate" (change)="onDueDateChange()" [disabled]="isSubmitting"\r
                   style="border-radius:8px;"/>\r
          </div>\r
          <div class="mb-3">\r
            <label class="form-label fw-bold">Expected Delivery Date <span class="text-danger">*</span></label>\r
            <input type="datetime-local" class="form-control" [(ngModel)]="rfqDeliveryDate"\r
                   [min]="minDeliveryDate" [disabled]="isSubmitting||!rfqDueDate"\r
                   style="border-radius:8px;"/>\r
          </div>\r
          <div class="mb-2">\r
            <div class="card border-primary">\r
              <div class="card-body py-2">\r
                <div class="d-flex align-items-center justify-content-between">\r
                  <div>\r
                    <small class="fw-bold">Supplier PDF Download</small><br>\r
                    <small class="text-muted">Allow suppliers to download RFQ as PDF</small>\r
                  </div>\r
                  <div class="form-check form-switch">\r
                    <input class="form-check-input" type="checkbox" [(ngModel)]="allowSupplierDownload"\r
                           style="width:3em;height:1.5em;">\r
                    <label class="form-check-label ms-2">\r
                      <span class="badge" [ngClass]="allowSupplierDownload?'bg-success':'bg-danger'">\r
                        {{ allowSupplierDownload?'ENABLED':'DISABLED' }}\r
                      </span>\r
                    </label>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u2705 Need More Info: email notice -->\r
        <div *ngIf="actionType==='need_more_info'"\r
             class="alert alert-info mb-3" style="border-left:4px solid #0dcaf0;">\r
          <i class="bi bi-envelope-check me-2"></i>\r
          <strong>An email will be sent</strong> to\r
          <strong>{{ selectedItem?.supplierContactEmail||'the supplier' }}</strong> with your question.\r
          The supplier approval will be paused until you proceed.\r
        </div>\r
\r
        <!-- Comments / Info textarea -->\r
        <div class="mb-3">\r
          <label class="form-label fw-bold">\r
            {{ getCommentsLabel() }}\r
            <span *ngIf="isCommentsRequired()" class="text-danger">*</span>\r
          </label>\r
          <textarea class="form-control" rows="4" [(ngModel)]="actionComments"\r
                    [placeholder]="getCommentsPlaceholder()"\r
                    [disabled]="isSubmitting"\r
                    style="border:2px solid #e2e8f0;border-radius:8px;"></textarea>\r
          <small *ngIf="actionType==='need_more_info'" class="text-muted">\r
            Be specific \u2014 the more detail you provide, the faster the supplier can respond.\r
          </small>\r
        </div>\r
\r
        <!-- Status banners -->\r
        <div class="alert alert-info mb-0"    *ngIf="actionType==='approve'&&modalMode==='rfq'&&!isLastApprover">\r
          <i class="bi bi-info-circle"></i> Approving will move this RFQ to the next approval level.\r
        </div>\r
        <div class="alert alert-success mb-0" *ngIf="actionType==='approve'&&modalMode==='rfq'&&isLastApprover">\r
          <i class="bi bi-check-circle"></i> <strong>Final Approval:</strong> RFQ will be published to suppliers after setting dates.\r
        </div>\r
        <div class="alert alert-success mb-0" *ngIf="actionType==='approve'&&modalMode==='po'">\r
          <i class="bi bi-check-circle"></i> Will forward to the next approval level or fully approve the PO.\r
        </div>\r
        <div class="alert alert-success mb-0" *ngIf="actionType==='approve'&&modalMode==='supplier'">\r
          <i class="bi bi-check-circle"></i> <strong>Supplier Approve:</strong> Will activate this supplier for RFQ participation and notify them by email.\r
        </div>\r
        <div class="alert alert-danger mb-0"  *ngIf="actionType==='reject'">\r
          <i class="bi bi-exclamation-triangle"></i>\r
          <strong> Warning:</strong> This will PERMANENTLY reject the {{ modalMode==='rfq'?'RFQ':modalMode==='po'?'PO':'Supplier' }}.\r
        </div>\r
        <div class="alert alert-warning mb-0" *ngIf="actionType==='hold'">\r
          <i class="bi bi-pause-circle"></i> Approval workflow will be paused at your level.\r
        </div>\r
        <div class="alert alert-success mb-0" *ngIf="actionType==='release'">\r
          <i class="bi bi-play-circle"></i> Approval workflow will resume from your level.\r
        </div>\r
      </div>\r
\r
      <!-- MODAL FOOTER -->\r
      <div class="modal-footer border-0 p-4 pt-0">\r
        <button type="button" class="btn btn-outline-secondary"\r
                (click)="closeApprovalModal()" [disabled]="isSubmitting">Cancel</button>\r
        <button type="button" [class]="'btn '+getActionButtonClass()"\r
                (click)="submitApprovalAction()"\r
                [disabled]="isSubmitting\r
                  || (isCommentsRequired() && !actionComments.trim())\r
                  || (actionType==='approve'&&modalMode==='rfq'&&isLastApprover&&(!rfqDueDate||!rfqDeliveryDate))">\r
          <span *ngIf="!isSubmitting">\r
            <i class="bi" [ngClass]="getModalIcon()"></i> {{ getActionButtonText() }}\r
          </span>\r
          <span *ngIf="isSubmitting">\r
            <span class="spinner-border spinner-border-sm me-2"></span>Processing...\r
          </span>\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
<div class="modal-backdrop fade show" *ngIf="showApprovalModal"></div>`, styles: ["/* src/app/views/base/pending-approvals/pending-approvals.component.css */\n.supplier-avatar-lg {\n  width: 60px;\n  height: 60px;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.25);\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.supplier-logo-img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.contact-avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #1565c0,\n      #283593);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-mini-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #42a5f5,\n      #1565c0);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.65rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.detail-section-header {\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #1565c0;\n  padding: 0.4rem 0.75rem;\n  background:\n    linear-gradient(\n      90deg,\n      #e3f2fd,\n      #f8f9fa);\n  border-left: 4px solid #1565c0;\n  border-radius: 0 6px 6px 0;\n  margin-bottom: 0.75rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.detail-card {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  padding: 1.25rem;\n}\n.detail-field {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #8c96a3;\n}\n.detail-value {\n  font-size: 0.9rem;\n  color: #212529;\n  font-weight: 500;\n}\n.detail-field-sm {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sub-section-label {\n  font-size: 0.73rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: #495057;\n  border-bottom: 1px solid #e9ecef;\n  padding-bottom: 0.35rem;\n  margin-bottom: 0.5rem;\n}\n.location-card {\n  border: 1px solid #dee2e6;\n  border-radius: 10px;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.2s;\n}\n.location-card:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.location-header {\n  padding: 0.9rem 1.1rem;\n  background: #f8f9fa;\n  border-bottom: 1px solid transparent;\n  transition: background 0.2s;\n}\n.location-header:hover {\n  background: #f0f4f8;\n}\n.location-body {\n  padding: 1rem 1.1rem;\n  background: #fff;\n  border-top: 1px solid #e9ecef;\n  animation: slideDown 0.2s ease;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.location-number {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1565c0,\n      #283593);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.78rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.dept-card {\n  border: 1px solid #e3e8ef;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #fff;\n}\n.dept-header {\n  padding: 0.7rem 1rem;\n  background: #f4f6fa;\n  transition: background 0.2s;\n}\n.dept-header:hover {\n  background: #eef1f8;\n}\n.dept-number {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #26a69a,\n      #00838f);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.68rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.table th {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n  border-bottom: 2px solid #dee2e6;\n  white-space: nowrap;\n}\n.table td {\n  vertical-align: middle;\n}\n.supplier-detail-modal .modal-content {\n  animation: modalFadeIn 0.25s ease;\n}\n@keyframes modalFadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.date-filter-card {\n  display: flex;\n  align-items: stretch;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.date-filter-card:hover {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.10);\n}\n.date-filter-accent {\n  width: 5px;\n  background:\n    linear-gradient(\n      180deg,\n      #667eea 0%,\n      #764ba2 100%);\n  flex-shrink: 0;\n}\n.date-filter-inner {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  padding: 18px 24px;\n  flex-wrap: wrap;\n  gap: 0;\n}\n.date-filter-title-wrap {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  min-width: 160px;\n}\n.date-filter-icon-wrap {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-title {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.2;\n}\n.date-filter-subtitle {\n  font-size: 0.72rem;\n  color: #8a8a9a;\n  margin-top: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  font-weight: 500;\n}\n.date-filter-divider {\n  width: 1px;\n  height: 44px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      #e2e5f0,\n      transparent);\n  margin: 0 24px;\n  flex-shrink: 0;\n  align-self: center;\n}\n.date-filter-controls {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.date-filter-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 220px;\n}\n.date-filter-custom-field {\n  max-width: 0;\n  min-width: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition:\n    max-width 0.3s ease,\n    opacity 0.3s ease,\n    min-width 0.3s ease;\n  pointer-events: none;\n}\n.date-filter-custom-field.date-filter-field-visible {\n  max-width: 200px;\n  min-width: 160px;\n  opacity: 1;\n  pointer-events: all;\n}\n.date-filter-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 0;\n  white-space: nowrap;\n}\n.date-filter-label i {\n  color: #667eea;\n}\n.date-filter-select-wrap {\n  position: relative;\n}\n.date-filter-select {\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n  padding: 9px 36px 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-select:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-select:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-select-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.75rem;\n  color: #667eea;\n  pointer-events: none;\n}\n.date-filter-input-wrap {\n  position: relative;\n}\n.date-filter-input {\n  width: 100%;\n  padding: 9px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  background: #f4f5fb;\n  border: 1.5px solid #e2e5f0;\n  border-radius: 10px;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.date-filter-input:hover {\n  border-color: #667eea;\n  background: #f0f2ff;\n}\n.date-filter-input:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: #fff;\n}\n.date-filter-right {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n  margin-left: auto;\n  flex-wrap: wrap;\n}\n.date-filter-badge-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  border: 1.5px solid rgba(102, 126, 234, 0.2);\n  border-radius: 12px;\n  padding: 8px 14px 8px 10px;\n}\n.date-filter-badge-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.date-filter-badge-label {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #8a8a9a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  line-height: 1;\n}\n.date-filter-badge-value {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #667eea;\n  margin-top: 3px;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n.date-filter-reset-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 9px 16px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #667eea;\n  background: #f0f2ff;\n  border: 1.5px solid #d0d5f5;\n  border-radius: 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.date-filter-reset-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n  transform: translateY(-1px);\n}\n.date-filter-reset-btn i {\n  font-size: 0.85rem;\n}\n@media (max-width: 992px) {\n  .date-filter-inner {\n    flex-wrap: wrap;\n    gap: 16px;\n    padding: 16px 18px;\n  }\n  .date-filter-divider {\n    display: none;\n  }\n  .date-filter-title-wrap {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-controls {\n    width: 100%;\n  }\n  .date-filter-right {\n    width: 100%;\n    margin-left: 0;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 576px) {\n  .date-filter-field,\n  .date-filter-custom-field.date-filter-field-visible {\n    min-width: unset;\n    width: 100%;\n  }\n  .date-filter-badge-wrap {\n    width: 100%;\n  }\n}\n.container-fluid {\n  background-color: #f7fafc;\n  min-height: 100vh;\n}\ninput[type=datetime-local] {\n  font-family: inherit;\n  font-size: 0.95rem;\n  padding: 0.625rem;\n  transition: all 0.2s ease;\n}\ninput[type=datetime-local]:focus {\n  border-color: #3b82f6 !important;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\ninput[type=datetime-local]:disabled {\n  background-color: #f3f4f6;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.alert-warning {\n  background-color: #fef3c7;\n  border-color: #f59e0b;\n}\n.alert-warning .bi-calendar-event {\n  color: #f59e0b;\n}\n.alert-success {\n  background-color: #d1fae5;\n  border-color: #16a34a;\n}\n@keyframes pulse-border {\n  0%, 100% {\n    border-color: #e2e8f0;\n  }\n  50% {\n    border-color: #3b82f6;\n  }\n}\ninput[type=datetime-local]:focus {\n  animation: pulse-border 1s ease-in-out;\n}\n.table thead th {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #64748b;\n  letter-spacing: 0.5px;\n  padding: 1rem 0.75rem;\n  border: none;\n}\n.table tbody td {\n  padding: 1rem 0.75rem;\n  vertical-align: middle;\n}\n.cursor-pointer {\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.cursor-pointer:hover {\n  text-decoration: underline;\n  color: #4c51bf !important;\n}\n.badge {\n  font-size: 0.75rem;\n  padding: 0.4rem 0.7rem;\n  font-weight: 600;\n}\n.btn-group .btn {\n  border-radius: 6px;\n  margin: 0 2px;\n}\n.btn-group .btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.modal-content {\n  border: none;\n}\n.modal-header {\n  border-bottom: none;\n}\n.modal-footer {\n  border-top: 1px solid #e2e8f0;\n}\n.approval-timeline {\n  position: relative;\n  padding: 1rem 0;\n}\n.timeline-item {\n  position: relative;\n  display: flex;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.timeline-item:last-child {\n  margin-bottom: 0;\n}\n.timeline-marker {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n.timeline-marker-circle {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: white;\n  border: 3px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  z-index: 2;\n  transition: all 0.3s;\n}\n.timeline-item.completed .timeline-marker-circle {\n  border-color: #48bb78;\n  background-color: #f0fff4;\n}\n.timeline-item.rejected .timeline-marker-circle {\n  border-color: #f56565;\n  background-color: #fff5f5;\n}\n.timeline-item.pending .timeline-marker-circle {\n  border-color: #ed8936;\n  background-color: #fffaf0;\n}\n.timeline-line {\n  width: 2px;\n  flex-grow: 1;\n  background-color: #e2e8f0;\n  margin-top: 0.5rem;\n}\n.timeline-item.completed .timeline-line {\n  background-color: #48bb78;\n}\n.timeline-content {\n  flex: 1;\n  background-color: white;\n  padding: 1rem;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.alert {\n  border-radius: 8px;\n  border: 1px solid;\n}\n.alert-info {\n  background-color: #ebf8ff;\n  border-color: #bee3f8;\n  color: #2c5282;\n}\n.alert-warning {\n  background-color: #fffaf0;\n  border-color: #fbd38d;\n  color: #7c2d12;\n}\n.alert-light {\n  background-color: #f7fafc;\n  border-color: #e2e8f0;\n}\n.input-group-text {\n  background-color: white;\n  border-right: none;\n}\n.form-control:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.nav-tabs .nav-link {\n  color: #6c757d;\n  border: none;\n  border-bottom: 3px solid transparent;\n  padding: 0.75rem 1.5rem;\n  font-weight: 600;\n}\n.nav-tabs .nav-link:hover {\n  color: #495057;\n  border-bottom-color: #dee2e6;\n}\n.nav-tabs .nav-link.active {\n  color: #0066cc;\n  border-bottom-color: #0066cc;\n  background-color: transparent;\n}\n.badge.bg-warning {\n  background-color: #ffc107 !important;\n  color: #000 !important;\n}\nthead.bg-warning-light {\n  background-color: #fff3cd !important;\n}\n.alert-warning {\n  background-color: #fff3cd;\n  border-color: #ffc107;\n  color: #856404;\n}\n@media (max-width: 768px) {\n  .btn-group {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .btn-group .btn {\n    width: 100%;\n  }\n  .timeline-item {\n    gap: 1rem;\n  }\n  .timeline-marker-circle {\n    width: 32px;\n    height: 32px;\n    font-size: 1rem;\n  }\n}\n.spinner-border {\n  width: 3rem;\n  height: 3rem;\n}\n.bi-inbox {\n  font-size: 4rem;\n}\n.gradient-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  padding: 10px;\n}\n.avatar-circle-large {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  color: white;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n}\n.info-card {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  font-size: 1.5rem;\n  color: white;\n}\n.info-card-content {\n  flex: 1;\n}\n.info-label {\n  font-size: 0.75rem;\n  opacity: 0.9;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.info-value {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: white;\n  margin-top: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .avatar-circle-large {\n    width: 60px;\n    height: 60px;\n    font-size: 1.5rem;\n  }\n  .info-card {\n    margin-bottom: 10px;\n  }\n  .info-card-icon {\n    width: 40px;\n    height: 40px;\n    font-size: 1.2rem;\n  }\n  .info-label {\n    font-size: 0.7rem;\n  }\n  .info-value {\n    font-size: 0.85rem;\n  }\n}\n@media (max-width: 576px) {\n  .gradient-header {\n    padding: 15px;\n  }\n  .avatar-circle-large {\n    width: 50px;\n    height: 50px;\n    font-size: 1.2rem;\n    border-width: 2px;\n  }\n}\n/*# sourceMappingURL=pending-approvals.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: RFQService }, { type: MessageService }, { type: AuthService }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PendingApprovalsComponent, { className: "PendingApprovalsComponent", filePath: "src/app/views/base/pending-approvals/pending-approvals.component.ts", lineNumber: 923 });
})();

// src/app/views/base/pending-approvals/routes.ts
var routes = [
  {
    path: "",
    component: PendingApprovalsComponent,
    data: {
      title: "Pending Approvals"
    }
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-FCX552EG.js.map
