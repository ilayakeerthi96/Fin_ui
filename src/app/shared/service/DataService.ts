import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

        private headers(): HttpHeaders {
        return new HttpHeaders({
            'Authorization': 'Bearer ' + (localStorage.getItem('token') || ''),
            'Content-Type': 'application/json'
        });
    }

     private blobHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Authorization': 'Bearer ' + (localStorage.getItem('token') || '')
        });
    }

    // ============================================
    // UTILITY METHODS
    // ============================================
    invokeGetAPI(url: any) {
        var reqHeader = new HttpHeaders({
            'Authorization': 'Bearer ' + (localStorage.getItem("token") || ''),
            'Content-Type': 'application/json'
        });
        return this.http.get<{ result: string; data: any }>(url, { headers: reqHeader }).pipe(
            tap(response => console.log('%c[GET API SUCCESS]', 'color: #00aa00;', url, response)),
            catchError(error => {
                console.error('%c[GET API ERROR]', 'color: #cc0000;', url, error);
                return throwError(() => error);
            })
        );
    }

    invokePostAPI(url: any, input: any) {
        var reqHeader = new HttpHeaders({
            'Authorization': 'Bearer ' + (localStorage.getItem("token") || ''),
            'Content-Type': 'application/json'
        });
        return this.http.post<{ result: string; input: any, data: any }>(url, input, { 'headers': reqHeader }).pipe(
            tap(response => console.log('%c[POST API SUCCESS]', 'color: #00aa00;', url, response)),
            catchError(error => {
                console.error('%c[POST API ERROR]', 'color: #cc0000;', url, error);
                return throwError(() => error);
            })
        );
    }

    invokePutAPI(url: any, input: any) {
        var reqHeader = new HttpHeaders({
            'Authorization': 'Bearer ' + (localStorage.getItem("token") || ''),
            'Content-Type': 'application/json'
        });
        return this.http.put<{ result: string; input: any, data: any }>(url, input, { 'headers': reqHeader }).pipe(
            tap(response => console.log('%c[PUT API SUCCESS]', 'color: #00aa00;', url, response)),
            catchError(error => {
                console.error('%c[PUT API ERROR]', 'color: #cc0000;', url, error);
                return throwError(() => error);
            })
        );
    }

    invokeDeleteAPI(url: any) {
        var reqHeader = new HttpHeaders({
            'Authorization': 'Bearer ' + (localStorage.getItem("token") || ''),
            'Content-Type': 'application/json'
        });
        return this.http.delete<{ result: string; data: any }>(url, { headers: reqHeader }).pipe(
            tap(response => console.log('%c[DELETE API SUCCESS]', 'color: #00aa00;', url, response)),
            catchError(error => {
                console.error('%c[DELETE API ERROR]', 'color: #cc0000;', url, error);
                return throwError(() => error);
            })
        );
    }

    

    // ============================================
    // 🆕 DYNAMIC RFQ APPROVAL APIs - COMPLETE & FIXED
    // ============================================

    // ==================== ✅ NEW: HOLD RFQ ====================

/**
 * ✅ NEW: Hold RFQ
 * POST /api/dynamic-rfq-approval/hold
 */
holdRFQ(rfqId: number, holderId: number, holdRemarks: string): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/dynamic-rfq-approval/hold';
  const payload = { 
    rfqId: rfqId, 
    holderId: holderId, 
    holdRemarks: holdRemarks 
  };
  
  console.log('%c[HOLD RFQ]', 'color: #ff9800; font-weight: bold;', payload);
  
  return this.invokePostAPI(url, payload);
}

/**
 * ✅ NEW: Release Hold
 * POST /api/dynamic-rfq-approval/release-hold
 */
releaseHold(rfqId: number, releaserId: number, releaseComments: string): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/dynamic-rfq-approval/release-hold';
  const payload = { 
    rfqId: rfqId, 
    releaserId: releaserId, 
    releaseComments: releaseComments 
  };
  
  console.log('%c[RELEASE HOLD]', 'color: #00aa00; font-weight: bold;', payload);
  
  return this.invokePostAPI(url, payload);
}

/**
 * ✅ NEW: Get HOLD approvals for user
 * GET /api/dynamic-rfq-approval/hold/user/{userId}
 */
getHoldApprovalsForUser(userId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/dynamic-rfq-approval/hold/user/${userId}`;
  
  console.log('%c[GET HOLD APPROVALS]', 'color: #0066cc;', userId);
  
  return this.invokeGetAPI(url).pipe(
    map((response: any) => {
      console.log('%c[HOLD APPROVALS RAW]', 'color: #9c27b0;', response);
      
      if (response && response.success === true) {
        return {
          success: true,
          data: Array.isArray(response.data) ? response.data : []
        };
      } else if (Array.isArray(response)) {
        return {
          success: true,
          data: response
        };
      } else {
        return {
          success: true,
          data: []
        };
      }
    }),
    catchError((error: any) => {
      console.error('%c[HOLD APPROVALS ERROR]', 'color: #cc0000;', error);
      return throwError(() => error);
    })
  );
}

/**
 * ✅ NEW: Get HOLD approval count for user
 * GET /api/dynamic-rfq-approval/hold/user/{userId}/count
 */
getHoldApprovalCount(userId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/dynamic-rfq-approval/hold/user/${userId}/count`;
  
  console.log('%c[GET HOLD COUNT]', 'color: #0066cc;', userId);
  
  return this.invokeGetAPI(url).pipe(
    map((response: any) => {
      console.log('%c[HOLD COUNT RAW]', 'color: #9c27b0;', response);
      
      let count = 0;
      
      if (response && typeof response.data === 'number') {
        count = response.data;
      } else if (response && typeof response.count === 'number') {
        count = response.count;
      } else if (response && typeof response.holdCount === 'number') {
        count = response.holdCount;
      } else if (typeof response === 'number') {
        count = response;
      }
      
      return {
        success: true,
        holdCount: count
      };
    })
  );
}

    /**
     * ✅ FIXED: Initiate approval workflow (dynamic)
     */
    initiateApprovalWorkflow(rfqId: number, creatorUserId: number): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/dynamic-rfq-approval/initiate';
        const payload = { rfqId, creatorUserId };
        
        console.log('%c[INITIATE APPROVAL WORKFLOW]', 'color: #ff6600; font-weight: bold;', payload);
        
        return this.invokePostAPI(url, payload);
    }

    /**
     * ✅ FIXED: Get pending approvals for current user (dynamic)
     */
    getPendingApprovalsForUser(userId: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/dynamic-rfq-approval/pending/user/${userId}`;
        
        console.log('%c[GET PENDING APPROVALS]', 'color: #0066cc; font-weight: bold;', {
            userId: userId,
            url: url
        });
        
        return this.invokeGetAPI(url).pipe(
            map((response: any) => {
                console.log('%c[PENDING APPROVALS RAW RESPONSE]', 'color: #9c27b0;', response);
                
                if (response && response.success === true) {
                    return {
                        success: true,
                        data: Array.isArray(response.data) ? response.data : []
                    };
                } else if (Array.isArray(response)) {
                    return {
                        success: true,
                        data: response
                    };
                } else {
                    return {
                        success: true,
                        data: []
                    };
                }
            }),
            catchError((error: any) => {
                console.error('%c[PENDING APPROVALS ERROR]', 'color: #cc0000; font-weight: bold;', {
                    status: error.status,
                    message: error.error?.message || error.message,
                    url: url
                });
                return throwError(() => error);
            })
        );
    }

    /**
     * ✅ FIXED: Approve RFQ (dynamic)
     */
    approveRFQDynamic(rfqId: number, approverId: number, comments: string): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/dynamic-rfq-approval/approve';
        const payload = { 
            rfqId: rfqId, 
            approverId: approverId, 
            comments: comments || 'Approved' 
        };
        
        console.log('%c[APPROVE RFQ]', 'color: #00aa00; font-weight: bold;', payload);
        
        return this.invokePostAPI(url, payload);
    }

    /**
     * ✅ FIXED: Reject RFQ (dynamic)
     */
    rejectRFQDynamic(rfqId: number, rejectorId: number, comments: string): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/dynamic-rfq-approval/reject';
        const payload = { 
            rfqId: rfqId, 
            rejectorId: rejectorId, 
            comments: comments 
        };
        
        console.log('%c[REJECT RFQ]', 'color: #cc0000; font-weight: bold;', payload);
        
        return this.invokePostAPI(url, payload);
    }

    /**
     * ✅ NEW: Return RFQ for Revision
     */
    returnRFQForRevision(rfqId: number, approverId: number, revisionComments: string): Observable<any> {
      const url = environment.API_URL + 'leadcapture/api/dynamic-rfq-approval/return-for-revision';
      const payload = { 
        rfqId: rfqId, 
        approverId: approverId, 
        revisionComments: revisionComments 
      };
      
      console.log('%c[RETURN FOR REVISION]', 'color: #ff9800; font-weight: bold;', payload);
      
      return this.invokePostAPI(url, payload);
    }

    /**
     * ✅ NEW: Get RFQs Returned for RevisioapproveRFQWithDates
      console.log('%c[GET RETURNED RFQs]', 'color: #0066cc;', buyerId);
      
      return this.invokeGetAPI(url);
    }

    /**
     * ✅ FIXED: Resubmit RFQ (dynamic)
     */
    resubmitRFQDynamic(rfqId: number, resubmitterId: number): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/dynamic-rfq-approval/resubmit';
        const payload = { 
            rfqId: rfqId, 
            resubmitterId: resubmitterId 
        };
        
        console.log('%c[RESUBMIT RFQ]', 'color: #0066cc; font-weight: bold;', payload);
        
        return this.invokePostAPI(url, payload);
    }

    /**
     * ✅ Get approval history for RFQ
     */
    getApprovalHistory(rfqId: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/dynamic-rfq-approval/history/${rfqId}`;
        
        console.log('%c[GET APPROVAL HISTORY]', 'color: #0066cc;', rfqId);
        
        return this.invokeGetAPI(url);
    }

    /**
     * ✅ Get current pending approval level for RFQ
     */
    getCurrentPendingApproval(rfqId: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/dynamic-rfq-approval/current/${rfqId}`;
        
        console.log('%c[GET CURRENT PENDING APPROVAL]', 'color: #0066cc;', rfqId);
        
        return this.invokeGetAPI(url);
    }

    /**
     * ✅ FIXED: Get pending approval count for user
     */
    getPendingApprovalCount(userId: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/dynamic-rfq-approval/pending/user/${userId}/count`;
        
        console.log('%c[GET PENDING COUNT]', 'color: #0066cc;', userId);
        
        return this.invokeGetAPI(url).pipe(
            map((response: any) => {
                console.log('%c[PENDING COUNT RAW]', 'color: #9c27b0;', response);
                
                let count = 0;
                
                if (response && typeof response.data === 'number') {
                    count = response.data;
                } else if (response && typeof response.count === 'number') {
                    count = response.count;
                } else if (response && typeof response.pendingCount === 'number') {
                    count = response.pendingCount;
                } else if (typeof response === 'number') {
                    count = response;
                }
                
                return {
                    success: true,
                    pendingCount: count
                };
            })
        );
    }

    /**
     * ✅ NEW: Get approval statistics for dashboard
     */
    getApprovalStatistics(userId: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/dynamic-rfq-approval/statistics/user/${userId}`;
        return this.invokeGetAPI(url);
    }

    // ==================== ✅ NEW: CHECK IF USER IS LAST APPROVER ====================
  
    /**
     * Check if the current user is at the last approval level for this RFQ
     */
    isLastApprover(rfqId: number, userId: number): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/dynamic-rfq-approval/is-last-approver/${rfqId}/${userId}`;
        
        console.log('%c[API CALL] Check Last Approver', 'color: #0066cc;', {
          rfqId,
          userId,
          url
        });
        
        return this.invokeGetAPI(url);
    }
  
    // ==================== ✅ NEW: APPROVE WITH DATES ====================
  
    /**
     * Approve RFQ with optional date setting (for last level approver)
     */
    approveRFQWithDates(rfqId: number, approverId: number, comments: string, 
                        rfqDueDate?: string, rfqDeliveryDate?: string, allowSupplierDownload?: boolean): Observable<any> {
       const url = environment.API_URL + `leadcapture/api/dynamic-rfq-approval/approve-with-dates`;
        
        const payload: any = {
          rfqId,
          approverId,
          comments
        };
        
        if (rfqDueDate) {
          payload.rfqDueDate = rfqDueDate;
        }
        
        if (rfqDeliveryDate) {
          payload.rfqDeliveryDate = rfqDeliveryDate;
        }
        
        if (allowSupplierDownload !== undefined) {
          payload.allowSupplierDownload = allowSupplierDownload;
        }
        
        console.log('%c[API CALL] Approve With Dates', 'color: #00aa00; font-weight: bold;', payload);
        
        return this.invokePostAPI(url, payload);
    }

    // ============================================
    // RFQ DASHBOARD APIs
    // ============================================

    /**
     * ✅ Get RFQ dashboard statistics
     */
    getRFQDashboardStatistics(buyerId: number, userId: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/rfq-dashboard/statistics/${buyerId}/${userId}`;
        console.log('%c[GET DASHBOARD STATS]', 'color: #0066cc;', { buyerId, userId });
        return this.invokeGetAPI(url);
    }

    /**
     * ✅ NEW: Get RFQ dashboard list with supplier counts
     */
    getRFQDashboardList(userId: number, params?: any): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/rfq';
        
        console.log('%c[GET DASHBOARD LIST]', 'color: #0066cc;', url);
        return this.invokeGetAPI(url);
    }

    /**
     * ✅ Get RFQ details with full information
     */
    getRFQDetails(rfqId: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/rfq-dashboard/rfq/${rfqId}/details`;
        console.log('%c[GET RFQ DETAILS]', 'color: #0066cc;', rfqId);
        return this.invokeGetAPI(url);
    }


        // ── SUPERADMIN THEME ────────────────────────────────────────
    getSuperAdminTheme(id: number): Observable<any> {
        const url =`${environment.API_URL}leadcapture/api/superadmin/${id}/theme`;
        return this.invokeGetAPI(url);
    }
 
    saveSuperAdminTheme(id: number, theme: string): Observable<any> {
        const url = `${environment.API_URL}leadcapture/api/superadmin/${id}/theme`;
        return this.invokePutAPI(url, { theme });
    }

        // ── ORGANIZATION ADMIN THEME ────────────────────────────────
    getOrgAdminTheme(id: number): Observable<any> {
        const url = `${environment.API_URL}leadcapture/api/organization-admin/${id}/theme`;
        return this.invokeGetAPI(url);
    }
 
    saveOrgAdminTheme(id: number, theme: string): Observable<any> {
        const url = `${environment.API_URL}leadcapture/api/organization-admin/${id}/theme`;
        return this.invokePutAPI(url, { theme });
    }

    uploadSuperAdminLogo(id: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('logo', file);
    const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + (localStorage.getItem('token') || '')
    });
    const url = environment.API_URL + `leadcapture/api/superadmin/${id}/upload-logo`;
    return this.http.post<any>(url, formData, { headers });
}

uploadOrgAdminLogo(id: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('logo', file);
    const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + (localStorage.getItem('token') || '')
    });
    //const url = environment.API_URL + `leadcapture/api/organization-admin/${id}/upload-logo`;
    const url = `${environment.API_URL}leadcapture/api/organization-admin/${id}/upload-logo`;
    return this.http.post<any>(url, formData, { headers });
}

getSuperAdminLogoBase64(id: number): Observable<string | null> {
    const url =  `${environment.API_URL}leadcapture/api/superadmin/${id}/logo`;
    //const url = environment.API_URL + `leadcapture/api/superadmin/${id}/logo`;
    return this.invokeGetAPI(url).pipe(
        map((res: any) => res?.data || null),
        catchError(() => of(null))
    );
}

getOrgAdminLogoBase64(id: number): Observable<string | null> {
    const url = `${environment.API_URL}leadcapture/api/organization-admin/${id}/logo`;
    //const url = environment.API_URL + `leadcapture/api/organization-admin/${id}/logo`;
    return this.invokeGetAPI(url).pipe(
        map((res: any) => res?.data || null),
        catchError(() => of(null))
    );
}

updateOrgAdminProfile(id: number, data: any): Observable<any> {
    const url = environment.API_URL + `leadcapture/api/organization-admin/${id}`;
    return this.invokePutAPI(url, data);
}

    // ============================================
    // SUPERADMIN APIs
    // ============================================
    superAdminLogin(loginRequest: any): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/superadmin/auth/login';
        return this.http.post<any>(url, loginRequest);
    }

    superAdminRegister(registerRequest: any): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/superadmin/auth/register';
        return this.http.post<any>(url, registerRequest);
    }

    superAdminCreateOrgAdmin(orgAdminData: any): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/superadmin/create-org-admin';
        return this.invokePostAPI(url, orgAdminData);
    }

    superAdminGetAllOrgAdmins(): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/superadmin/org-admins';
        return this.invokeGetAPI(url);
    }

    // ============================================
    // ORGANIZATION ADMIN APIs
    // ============================================
    organizationAdminLogin(loginRequest: any): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/organization-admin/auth/login';
        return this.http.post<any>(url, loginRequest);
    }

    createOrganizationAdmin(orgAdminData: any): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/organization-admin';
        return this.invokePostAPI(url, orgAdminData);
    }

    changeOrganizationAdminPassword(id: number, passwordData: any): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/organization-admin/change-password/${id}`;
        return this.invokePutAPI(url, passwordData);
    }

    createBuyerByOrgAdmin(adminId: number, buyerData: any): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/organization-admin/${adminId}/buyer`;
        return this.invokePostAPI(url, buyerData);
    }

    getBuyersByOrganizationCompany(companyName: string): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/organization-admin/company/${encodeURIComponent(companyName)}/buyers`;
        return this.invokeGetAPI(url);
    }

    getBuyersByOrgAdmin(adminId: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/organization-admin/${adminId}/buyers`;
        return this.invokeGetAPI(url);
    }

    getOrganizationAdminById(id: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/organization-admin/${id}`;
        return this.invokeGetAPI(url);
    }

    getOrganizationAdminsByCompany(companyName: string): Observable<any> {
        const url = `${environment.API_URL}leadcapture/api/organization-admin/company/${companyName}`;
       // const url = environment.API_URL + `leadcapture/api/organization-admin/company/${companyName}`;
        return this.invokeGetAPI(url);
    }

    getAllOrganizationAdmins(): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/organization-admin/all';
        return this.invokeGetAPI(url);
    }

    updateOrganizationAdmin(id: number, data: any): Observable<any> {
        const url =  `${environment.API_URL}leadcapture/api/organization-admin/${id}`;
      //  const url = environment.API_URL + `leadcapture/api/organization-admin/${id}`;
        return this.invokePutAPI(url, data);
    }

    deactivateOrganizationAdmin(id: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/organization-admin/${id}/deactivate`;
        return this.invokePutAPI(url, {});
    }

    activateOrganizationAdmin(id: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/organization-admin/${id}/activate`;
        return this.invokePutAPI(url, {});
    }

    deleteOrganizationAdmin(id: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/organization-admin/${id}`;
        return this.invokeDeleteAPI(url);
    }

        // ── SUPPLIER THEME ──────────────────────────────────────────
    // supplierId = response.supplier.id from login (the Supplier company, not SupplierUser)
    getSupplierTheme(supplierId: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/supplier/${supplierId}/theme`;
        return this.invokeGetAPI(url);
    }
 
    saveSupplierTheme(supplierId: number, theme: string): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/supplier/${supplierId}/theme`;
        return this.invokePutAPI(url, { theme });
    }



    // ============================================
    // HIERARCHY LEVEL APIs
    // ============================================
    createHierarchyLevel(levelData: any): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/hierarchy-levels';
        return this.invokePostAPI(url, levelData);
    }

    getAllHierarchyLevels(): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/hierarchy-levels';
        return this.invokeGetAPI(url);
    }

    getHierarchyLevelsByCompany(companyName: string): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-levels/company/${companyName}`;
        return this.invokeGetAPI(url);
    }

    getHierarchyLevelById(id: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-levels/${id}`;
        return this.invokeGetAPI(url);
    }

    updateHierarchyLevel(id: number, levelData: any): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-levels/${id}`;
        return this.invokePutAPI(url, levelData);
    }

    deactivateHierarchyLevel(id: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-levels/${id}/deactivate`;
        return this.invokePutAPI(url, {});
    }

    activateHierarchyLevel(id: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-levels/${id}/activate`;
        return this.invokePutAPI(url, {});
    }

    deleteHierarchyLevel(id: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-levels/${id}`;
        return this.invokeDeleteAPI(url);
    }

    reorderHierarchyLevels(companyName: string, levelIds: number[]): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-levels/reorder/${companyName}`;
        return this.invokePutAPI(url, levelIds);
    }

    // ============================================
    // HIERARCHY USER APIs
    // ============================================
    hierarchyLogin(loginRequest: any): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/hierarchy-users/auth/login';
        return this.http.post<any>(url, loginRequest).pipe(
            tap((response) => {
                console.log('%c[HIERARCHY LOGIN RESPONSE]', 'color: #00aa00; font-weight: bold;', response);
            }),
            catchError((error) => {
                console.error('%c[HIERARCHY LOGIN ERROR]', 'color: #cc0000;', error);
                return throwError(() => error);
            })
        );
    }

    createHierarchyUser(userData: any): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/hierarchy-users';
        return this.invokePostAPI(url, userData);
    }

    getHierarchyUserById(id: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-users/${id}`;
        return this.invokeGetAPI(url);
    }

    getHierarchyUsersByCompany(companyName: string): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-users/company/${companyName}`;
        return this.invokeGetAPI(url);
    }

    getHierarchyUsersByLevel(levelId: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-users/level/${levelId}`;
        return this.invokeGetAPI(url);
    }

    updateHierarchyUser(id: number, userData: any): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-users/${id}`;
        return this.invokePutAPI(url, userData);
    }

    deactivateHierarchyUser(id: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-users/${id}/deactivate`;
        return this.invokePutAPI(url, {});
    }

    activateHierarchyUser(id: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-users/${id}/activate`;
        return this.invokePutAPI(url, {});
    }

    deleteHierarchyUser(id: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-users/${id}`;
        return this.invokeDeleteAPI(url);
    }

    changeHierarchyUserPassword(id: number, passwordData: any): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/hierarchy-users/${id}/change-password`;
        return this.invokePutAPI(url, passwordData);
    }

    // ============================================
    // BUYER APIs
    // ============================================
  // ── Change Password — one endpoint for every login type, for a user who is signed in.
  // The account is identified by email + current password rather than by a user id, because
  // an id is only unique within one of the five user tables (buyer 5 and supplier 5 are
  // different people) and the browser could change it anyway.
  changePassword(email: string, currentPassword: string, newPassword: string,
                 confirmPassword: string): Observable<any> {
    const url = environment.API_URL + 'leadcapture/api/auth/change-password';
    return this.invokePostAPI(url, { email, currentPassword, newPassword, confirmPassword });
  }

  // ── Forgot / Reset Password (OTP) — one flow for every login type on the unified login page ──
  private FORGOT_PASSWORD_URL = environment.API_URL + 'leadcapture/api/auth/forgot-password';

  /** Always resolves the same way regardless of whether the email is registered — by design. */
  requestPasswordResetOtp(email: string): Observable<any> {
    return this.invokePostAPI(`${this.FORGOT_PASSWORD_URL}/request`, { email });
  }

  /** Checks the OTP without consuming it — /resetPasswordWithOtp re-checks it again itself. */
  verifyPasswordResetOtp(email: string, otp: string): Observable<any> {
    return this.invokePostAPI(`${this.FORGOT_PASSWORD_URL}/verify`, { email, otp });
  }

  resetPasswordWithOtp(email: string, otp: string, newPassword: string): Observable<any> {
    return this.invokePostAPI(`${this.FORGOT_PASSWORD_URL}/reset`, { email, otp, newPassword });
  }

  buyerLogin(loginRequest: any): Observable<any> {
    const url = environment.API_URL + 'leadcapture/api/buyer/login';
    return this.http.post<any>(url, loginRequest).pipe(
      tap(response => console.log('%c[BUYER LOGIN RESPONSE]', 'color: #00aa00; font-weight: bold;', response)),
      catchError(error => {
        console.error('%c[BUYER LOGIN ERROR]', 'color: #cc0000;', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * ✅ FIXED: Get buyer logo as base64 data URL.
   * Backend returns plain text — responseType: 'text' is critical.
   */
  getBuyerLogoBase64(buyerId: number): Observable<string | null> {
  //  const url = `${environment.API_URL}leadcapture/api/buyer/${buyerId}/logo/base64`;
    const url = `${environment.API_URL}leadcapture/api/buyer/${buyerId}/logo/base64`;
 
    console.log('%c[GET BUYER LOGO BASE64]', 'color:#06c;font-weight:bold', { buyerId, url });
 
    return this.http.get(url, {
      // ✅ CRITICAL: responseType 'text' tells both Angular AND the interceptor
      // that this is NOT a JSON request — interceptor will skip Content-Type header
      responseType: 'text',
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + (localStorage.getItem('token') || '')
        // ✅ NO Content-Type here — backend returns text/plain, not application/json
      })
    }).pipe(
      map((raw: string) => {
        const trimmed = raw ? raw.trim() : '';
        if (!trimmed || trimmed === 'null') {
          console.log('%c[BUYER LOGO]', 'color:#f90', 'No logo for buyer:', buyerId);
          return null;
        }
        console.log('%c[BUYER LOGO OK]', 'color:#0a0',
          `${trimmed.substring(0, 40)}… (${trimmed.length} chars)`);
        return trimmed;
      }),
      catchError((err: HttpErrorResponse) => {
        console.warn('%c[BUYER LOGO ERR]', 'color:#c00', err.status, err.message);
        return of(null);
      })
    );
  }
 
  /**
   * ✅ Get buyer logo raw image URL
   */
  getBuyerLogoUrl(buyerId: number): string {
    return environment.API_URL + `leadcapture/api/buyer/${buyerId}/logo`;
  }

  /**
   * ✅ Get buyer by ID
   */
  getBuyerById(buyerId: number): Observable<any> {
    const url = environment.API_URL + `leadcapture/api/buyer/${buyerId}`;
    console.log('%c[GET BUYER BY ID]', 'color: #0066cc;', buyerId);
    return this.invokeGetAPI(url);
  }

  /**
   * ✅ Get all buyers
   */
  getAllBuyers(): Observable<any> {
    const url = environment.API_URL + 'leadcapture/api/buyer';
    console.log('%c[GET ALL BUYERS]', 'color: #0066cc;');
    return this.invokeGetAPI(url);
  }

  /**
   * ✅ Update buyer
   */
  updateBuyer(buyerId: number, buyerData: any): Observable<any> {
    const url = environment.API_URL + `leadcapture/api/buyer/${buyerId}`;
    console.log('%c[UPDATE BUYER]', 'color: #ff9800;', buyerId);
    return this.invokePutAPI(url, buyerData);
  }

  /**
   * ✅ Delete buyer
   */
  deleteBuyer(buyerId: number): Observable<any> {
    const url = environment.API_URL + `leadcapture/api/buyer/${buyerId}`;
    console.log('%c[DELETE BUYER]', 'color: #cc0000;', buyerId);
    return this.invokeDeleteAPI(url);
  }

    // ============================================
    // SUPPLIER APIs
    // ============================================
    
    supplierServiceHealth(): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/supplier/health';
        return this.invokeGetAPI(url);
    }

    supplierLogin(loginRequest: any): Observable<any> {
        const url = environment.API_URL + 'leadcapture/api/supplier/login';
        return this.http.post<any>(url, loginRequest).pipe(
            tap((response) => {
                console.log('%c[SUPPLIER LOGIN RESPONSE]', 'color: #00aa00; font-weight: bold;', response);
            }),
            catchError((error) => {
                console.error('%c[SUPPLIER LOGIN ERROR]', 'color: #cc0000;', error);
                return throwError(() => error);
            })
        );
    }

    // ============================================
// ADD THESE METHODS TO YOUR EXISTING DataService
// They mirror getBuyerLogoBase64() exactly
// ============================================

/**
 * ✅ Get supplier logo as base64 data URL.
 * Backend returns plain text — responseType: 'text' is CRITICAL.
 */
getSupplierLogoBase64(supplierId: number): Observable<string | null> {
    const url = environment.API_URL + `leadcapture/api/supplier/${supplierId}/logo/base64`;
    console.log('%c[GET SUPPLIER LOGO BASE64]', 'color:#06c;font-weight:bold', { supplierId, url });

    return this.http.get(url, {
        responseType: 'text',   // ✅ CRITICAL — backend returns text/plain, not JSON
        headers: new HttpHeaders({
            'Authorization': 'Bearer ' + (localStorage.getItem('token') || '')
        })
    }).pipe(
        map((raw: string) => {
            const trimmed = raw ? raw.trim() : '';
            if (!trimmed || trimmed === 'null') {
                console.log('%c[SUPPLIER LOGO]', 'color:#f90', 'No logo for supplier:', supplierId);
                return null;
            }
            console.log('%c[SUPPLIER LOGO OK]', 'color:#0a0',
                `${trimmed.substring(0, 40)}… (${trimmed.length} chars)`);
            return trimmed;
        }),
        catchError((err: HttpErrorResponse) => {
            console.warn('%c[SUPPLIER LOGO ERR]', 'color:#c00', err.status, err.message);
            return of(null);
        })
    );
}

/**
 * ✅ Get supplier logo raw image URL
 */
getSupplierLogoUrl(supplierId: number): string {
    return environment.API_URL + `leadcapture/api/supplier/${supplierId}/logo`;
}

    // ============================================
    // 🆕 SUPPLIER DASHBOARD APIs
    // ============================================

    /**
     * ✅ Get supplier dashboard statistics
     */
    getSupplierDashboardStatistics(supplierId: number): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/supplier-dashboard/statistics/${supplierId}`;
      console.log('%c[GET SUPPLIER STATS]', 'color: #0066cc;', supplierId);
      return this.invokeGetAPI(url);
    }

    /**
     * ✅ Get all RFQs for supplier with filters
     */
    getSupplierRFQs(supplierId: number, status?: string, search?: string): Observable<any> {
      let url = environment.API_URL + `leadcapture/api/supplier-dashboard/rfqs/${supplierId}`;
      
      const params = new URLSearchParams();
      if (status && status !== 'ALL') params.set('status', status);
      if (search && search.trim() !== '') params.set('search', search);
      
      if (params.toString()) {
        url += '?' + params.toString();
      }
      
      console.log('%c[GET SUPPLIER RFQs]', 'color: #0066cc;', url);
      return this.invokeGetAPI(url);
    }

    /**
     * ✅ Get RFQ details for supplier
     */
    getSupplierRFQDetails(supplierId: number, rfqId: number): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/supplier-dashboard/rfq/${supplierId}/${rfqId}`;
      console.log('%c[GET SUPPLIER RFQ DETAILS]', 'color: #0066cc;', { supplierId, rfqId });
      return this.invokeGetAPI(url);
    }

    /**
     * ✅ Submit quote for RFQ (old method - kept for compatibility)
     */
    submitSupplierQuote(supplierId: number, rfqId: number, quoteData: any): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/supplier-dashboard/submit-quote/${supplierId}/${rfqId}`;
      console.log('%c[SUBMIT QUOTE]', 'color: #00aa00;', { supplierId, rfqId, quoteData });
      return this.invokePostAPI(url, quoteData);
    }

    /**
     * ✅ Update submitted quote (old method - kept for compatibility)
     */
    updateSupplierQuote(supplierId: number, rfqId: number, quoteData: any): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/supplier-dashboard/update-quote/${supplierId}/${rfqId}`;
      console.log('%c[UPDATE QUOTE]', 'color: #ff9800;', { supplierId, rfqId, quoteData });
      return this.invokePutAPI(url, quoteData);
    }

    /**
     * ✅ Get pending RFQs
     */
    getSupplierPendingRFQs(supplierId: number): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/supplier-dashboard/pending/${supplierId}`;
      console.log('%c[GET PENDING RFQs]', 'color: #0066cc;', supplierId);
      return this.invokeGetAPI(url);
    }

    /**
     * ✅ Get responded RFQs
     */
    getSupplierRespondedRFQs(supplierId: number): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/supplier-dashboard/responded/${supplierId}`;
      console.log('%c[GET RESPONDED RFQs]', 'color: #0066cc;', supplierId);
      return this.invokeGetAPI(url);
    }

    // ============================================
    // 🆕 SUPPLIER QUOTE SUBMISSION APIs (ITEM-LEVEL)
    // ============================================

    /**
     * ✅ Submit item-level quote for RFQ
     * POST /api/supplier-quote/submit
     */
    submitSupplierItemQuote(supplierId: number, rfqId: number, items: any[]): Observable<any> {
      const url = environment.API_URL + 'leadcapture/api/supplier-quote/submit';
      const payload = {
        supplierId: supplierId,
        rfqId: rfqId,
        items: items
      };
      
      console.log('%c[SUBMIT ITEM QUOTES]', 'color: #00aa00; font-weight: bold;', payload);

      return this.invokePostAPI(url, payload);
    }

    // ============================================
    // 🆕 RFQ COMPLIANCE CHECK APIs (PHARMA)
    // ============================================

    /** GET compliance criteria list for an RFQ */
    getComplianceCriteria(rfqId: number): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/rfq-compliance/${rfqId}/criteria`;
      return this.invokeGetAPI(url);
    }

    /** POST a buyer-added custom compliance criterion */
    addCustomComplianceCriteria(rfqId: number, criteriaName: string): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/rfq-compliance/${rfqId}/custom-criteria`;
      return this.invokePostAPI(url, { criteriaName });
    }

    /** POST a supplier's compliance responses (once per RFQ) */
    submitComplianceResponses(rfqId: number, supplierId: number, responses: any[]): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/rfq-compliance/${rfqId}/supplier/${supplierId}/responses`;
      return this.invokePostAPI(url, responses);
    }

    /** GET a single supplier's own compliance responses */
    getSupplierComplianceResponses(rfqId: number, supplierId: number): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/rfq-compliance/${rfqId}/supplier/${supplierId}/responses`;
      return this.invokeGetAPI(url);
    }

    /** GET every supplier's compliance responses for an RFQ (buyer comparison view) */
    getAllComplianceResponses(rfqId: number): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/rfq-compliance/${rfqId}/responses`;
      return this.invokeGetAPI(url);
    }

    /**
     * ✅ CRITICAL FIX: Get supplier's submitted quotes for RFQ
     * GET /api/supplier-quote/supplier/{supplierId}/rfq/{rfqId}
     * 
     * This is the method that was failing with 500 error
     */
    getSupplierSubmittedQuotes(supplierId: number, rfqId: number): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/supplier-quote/supplier/${supplierId}/rfq/${rfqId}`;
      
      console.log('%c[GET SUBMITTED QUOTES]', 'color: #0066cc; font-weight: bold;', { 
        supplierId, 
        rfqId,
        url 
      });
      
      return this.invokeGetAPI(url).pipe(
        tap(response => {
          console.log('%c[SUBMITTED QUOTES SUCCESS]', 'color: #00aa00;', response);
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('%c[SUBMITTED QUOTES ERROR]', 'color: #cc0000; font-weight: bold;', {
            status: error.status,
            statusText: error.statusText,
            message: error.error?.message || error.message,
            url: url
          });
          return throwError(() => error);
        })
      );
    }

    /**
     * ✅ Update a specific quote item
     */
    updateSupplierQuoteItem(quoteItemId: number, quoteData: any): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/supplier-quote/${quoteItemId}`;
      
      console.log('%c[UPDATE QUOTE ITEM]', 'color: #ff9800;', { quoteItemId, quoteData });
      
      return this.invokePutAPI(url, quoteData);
    }

    /**
     * ✅ Delete a quote item
     */
    deleteSupplierQuoteItem(quoteItemId: number): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/supplier-quote/${quoteItemId}`;
      
      console.log('%c[DELETE QUOTE ITEM]', 'color: #cc0000;', quoteItemId);
      
      return this.invokeDeleteAPI(url);
    }

    // ============================================
    // 🆕 QUOTE COMPARISON APIs (BUYER SIDE)
    // ============================================

    /**
     * ✅ Get quote comparison for RFQ
     */
    getQuoteComparison(rfqId: number): Observable<any> {
     // const url = environment.API_URL + `leadcapture/api/quote-comparison/rfq/${rfqId}`;
      const url = `${environment.API_URL}leadcapture/api/quote-comparison/rfq/${rfqId}`;
      
      console.log('%c[GET QUOTE COMPARISON]', 'color: #0066cc; font-weight: bold;', rfqId);
      
      return this.invokeGetAPI(url).pipe(
        tap(response => {
          console.log('%c[QUOTE COMPARISON RESPONSE]', 'color: #00aa00;', response);
        }),
        catchError(error => {
          console.error('%c[QUOTE COMPARISON ERROR]', 'color: #cc0000;', error);
          return throwError(() => error);
        })
      );
    }

    /**
     * ✅ Select winning quotes for items
     */
    selectQuotes(rfqId: number, selections: any[]): Observable<any> {
      const url = environment.API_URL + 'leadcapture/api/quote-comparison/select';
      const payload = {
        rfqId: rfqId,
        selections: selections,
        remarks: 'Selected from comparison view'
      };
      
      console.log('%c[SELECT QUOTES]', 'color: #00aa00; font-weight: bold;', payload);
      
      return this.invokePostAPI(url, payload);
    }

    /**
     * ✅ Unselect a quote
     */
    unselectQuote(quoteItemId: number): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/quote-comparison/unselect/${quoteItemId}`;
      
      console.log('%c[UNSELECT QUOTE]', 'color: #ff9800;', quoteItemId);
      
      return this.invokeDeleteAPI(url);
    }

    /**
     * ✅ Get only selected quotes for RFQ
     */
    getSelectedQuotes(rfqId: number): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/quote-comparison/rfq/${rfqId}/selected`;
      
      console.log('%c[GET SELECTED QUOTES]', 'color: #0066cc;', rfqId);
      
      return this.invokeGetAPI(url);
    }

    /**
     * ✅ Get quote comparison statistics
     */
    getQuoteStatistics(rfqId: number): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/quote-comparison/rfq/${rfqId}/statistics`;
      
      console.log('%c[GET QUOTE STATISTICS]', 'color: #0066cc;', rfqId);
      
      return this.invokeGetAPI(url);
    }

    /**
     * ✅ Export quote comparison
     */
    exportQuoteComparison(rfqId: number): Observable<any> {
      const url = environment.API_URL + `leadcapture/api/quote-comparison/rfq/${rfqId}/export`;
      
      console.log('%c[EXPORT QUOTE COMPARISON]', 'color: #9c27b0;', rfqId);
      
      return this.invokeGetAPI(url);
    }


    // ==================== SUPPLIER EVALUATION APIs ====================
// ==================== ✅ UPDATED: SUPPLIER EVALUATION APIs ====================
// ==================== ✅ UPDATED: SUPPLIER EVALUATION APIs ====================

/**
 * ✅ UPDATED: Calculate final rankings AUTOMATICALLY
 * POST /api/supplier-evaluation/calculate-rankings
 * 
 * No weightage parameters needed - backend calculates automatically!
 * Quote Weightage = (NumSuppliers × 10) - (PriceRank - 1) × 10
 * Lower Price = Higher Weightage
 */
calculateFinalRankings(rfqId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/supplier-evaluation/calculate-rankings/${rfqId}`;
  
  console.log('%c[CALCULATE FINAL RANKINGS - AUTOMATIC]', 'color: #9c27b0; font-weight: bold;', { rfqId });
  console.log('  ℹ️ Quote weightages calculated automatically based on price ranking');
  console.log('  📊 Lower price = Higher weightage');
  
  // ✅ FIXED: Use POST with empty payload
  return this.invokePostAPI(url, {});
}

/**
 * Get all active evaluation criteria (UPDATED - max score always 5)
 */
getAllActiveCriteria(): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/supplier-evaluation/criteria/active';
  console.log('%c[GET ACTIVE CRITERIA]', 'color: #0066cc;', url);
  return this.invokeGetAPI(url);
}

/**
 * ✅ ADMIN: Create new evaluation criterion (max score forced to 5)
 */
createCriterion(criterion: any): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/supplier-evaluation/criteria';
  console.log('%c[CREATE CRITERION]', 'color: #00aa00;', criterion);
  console.log('  ℹ️ Backend will force maxScore = 5');
  return this.invokePostAPI(url, criterion);
}

/**
 * ✅ ADMIN: Get all criteria (including inactive)
 */
getAllCriteria(): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/supplier-evaluation/criteria';
  console.log('%c[GET ALL CRITERIA]', 'color: #0066cc;', url);
  return this.invokeGetAPI(url);
}

/**
 * ✅ ADMIN: Update evaluation criterion
 */
updateCriterion(criterionId: number, criterion: any): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/supplier-evaluation/criteria/${criterionId}`;
  console.log('%c[UPDATE CRITERION]', 'color: #ff9800;', { criterionId, criterion });
  return this.invokePutAPI(url, criterion);
}

/**
 * ✅ ADMIN: Delete evaluation criterion
 */
deleteCriterion(criterionId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/supplier-evaluation/criteria/${criterionId}`;
  console.log('%c[DELETE CRITERION]', 'color: #cc0000;', criterionId);
  return this.invokeDeleteAPI(url);
}

/**
 * ✅ ADMIN: Deactivate criterion
 */
deactivateCriterion(criterionId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/supplier-evaluation/criteria/${criterionId}/deactivate`;
  console.log('%c[DEACTIVATE CRITERION]', 'color: #ff9800;', criterionId);
  return this.invokePutAPI(url, {});
}

/**
 * ✅ ADMIN: Activate criterion
 */
activateCriterion(criterionId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/supplier-evaluation/criteria/${criterionId}/activate`;
  console.log('%c[ACTIVATE CRITERION]', 'color: #00aa00;', criterionId);
  return this.invokePutAPI(url, {});
}

// ==================== REGISTRATION QUESTIONNAIRE (admin-configurable, per department category) ====================

getAllRegistrationQuestionnaireCriteria(): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/registration-questionnaire/criteria/all';
  return this.invokeGetAPI(url);
}

getRegistrationQuestionnaireCriteriaForCategory(category: string): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/registration-questionnaire/criteria?category=${encodeURIComponent(category)}`;
  return this.invokeGetAPI(url);
}

createRegistrationQuestionnaireCriteria(criteria: { category: string; questionText: string }): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/registration-questionnaire/criteria';
  return this.invokePostAPI(url, criteria);
}

updateRegistrationQuestionnaireCriteria(id: number, criteria: { category?: string; questionText?: string }): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/registration-questionnaire/criteria/${id}`;
  return this.invokePutAPI(url, criteria);
}

toggleRegistrationQuestionnaireCriteriaActive(id: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/registration-questionnaire/criteria/${id}/toggle-active`;
  return this.invokePutAPI(url, {});
}

deleteRegistrationQuestionnaireCriteria(id: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/registration-questionnaire/criteria/${id}`;
  return this.invokeDeleteAPI(url);
}

// ==================== RISK ASSESSMENT (admin-configurable questions + supplier risk rating) ====================

getRiskQuestions(): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/risk-assessment/questions';
  return this.invokeGetAPI(url);
}

getAllRiskQuestions(): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/risk-assessment/questions/all';
  return this.invokeGetAPI(url);
}

createRiskQuestion(question: { questionText: string; riskWeight: number; riskyAnswer: string }): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/risk-assessment/questions';
  return this.invokePostAPI(url, question);
}

updateRiskQuestion(id: number, question: { questionText?: string; riskWeight?: number; riskyAnswer?: string }): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/risk-assessment/questions/${id}`;
  return this.invokePutAPI(url, question);
}

toggleRiskQuestionActive(id: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/risk-assessment/questions/${id}/toggle-active`;
  return this.invokePutAPI(url, {});
}

deleteRiskQuestion(id: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/risk-assessment/questions/${id}`;
  return this.invokeDeleteAPI(url);
}

submitRiskAssessment(supplierId: number, answers: { questionId: number; answer: string }[]): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/risk-assessment/supplier/${supplierId}/submit`;
  return this.invokePostAPI(url, { answers });
}

getSupplierRiskDetail(supplierId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/risk-assessment/supplier/${supplierId}`;
  return this.invokeGetAPI(url);
}

getRiskDashboard(): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/risk-assessment/dashboard';
  return this.invokeGetAPI(url);
}

// ==================== RFI (Request for Information) ====================

createRfi(payload: {
  buyerId: number; title: string; description?: string; dueDate?: string;
  questions: { questionText: string; isMandatory?: boolean }[];
  supplierIds: number[]; relatedRfqId?: number;
}): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/rfi';
  return this.invokePostAPI(url, payload);
}

getBuyerRfis(buyerId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/rfi/buyer/${buyerId}`;
  return this.invokeGetAPI(url);
}

getRfiDetail(rfiId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/rfi/${rfiId}`;
  return this.invokeGetAPI(url);
}

getRfiResponses(rfiId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/rfi/${rfiId}/responses`;
  return this.invokeGetAPI(url);
}

closeRfi(rfiId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/rfi/${rfiId}/close`;
  return this.invokePutAPI(url, {});
}

getSupplierRfis(supplierId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/rfi/supplier/${supplierId}`;
  return this.invokeGetAPI(url);
}

getRfiForSupplier(rfiId: number, supplierId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/rfi/${rfiId}/supplier/${supplierId}`;
  return this.invokeGetAPI(url);
}

submitRfiResponse(rfiId: number, supplierId: number, answers: { questionId: number; answerText: string }[]): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/rfi/${rfiId}/supplier/${supplierId}/submit`;
  return this.invokePostAPI(url, { answers });
}

// ==================== CONTRACTS (MSA, post-selection, pre-PO) ====================

createContract(payload: {
  rfqId: number; supplierId: number; buyerId: number;
  createdByUserId: number; createdByName: string;
  title?: string; consultantCompanyName?: string; consultantCin?: string;
  consultantAddress?: string; agreementDate?: string; expiryDate?: string | null;
}): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/contracts';
  return this.invokePostAPI(url, payload);
}

getBuyerContracts(buyerId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/contracts/buyer/${buyerId}`;
  return this.invokeGetAPI(url);
}

getSupplierContracts(supplierId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/contracts/supplier/${supplierId}`;
  return this.invokeGetAPI(url);
}

getPendingApprovalContracts(): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/contracts/pending-approval';
  return this.invokeGetAPI(url);
}

getContractsByCompany(companyName: string): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/contracts/company/${encodeURIComponent(companyName)}`;
  return this.invokeGetAPI(url);
}

getContractDetail(contractId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/contracts/${contractId}`;
  return this.invokeGetAPI(url);
}

getContractsForRfq(rfqId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/contracts/rfq/${rfqId}`;
  return this.invokeGetAPI(url);
}

submitContractForApproval(contractId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/contracts/${contractId}/submit-for-approval`;
  return this.invokePutAPI(url, {});
}

approveContract(contractId: number, payload: { approverId: number; approverName: string; approverRole: string; comments?: string }): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/contracts/${contractId}/approve`;
  return this.invokePutAPI(url, payload);
}

rejectContract(contractId: number, payload: { approverId: number; approverName: string; approverRole: string; comments: string }): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/contracts/${contractId}/reject`;
  return this.invokePutAPI(url, payload);
}

/** "Request More Info" — approver sends the contract back to its creator instead of approving/rejecting.
 *  comments are required; attachments (any number, each { filename, contentType, base64 }) are optional. */
returnContractForRevision(contractId: number, payload: {
  approverId: number; approverName: string; approverRole: string; comments: string;
  attachments?: { filename: string; contentType: string; base64: string }[];
}): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/contracts/${contractId}/return-for-revision`;
  return this.invokePutAPI(url, payload);
}

getContractReturnAttachments(contractId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/contracts/${contractId}/return-attachments`;
  return this.invokeGetAPI(url);
}

getContractReturnAttachmentDownloadUrl(attachmentId: number): string {
  return environment.API_URL + `leadcapture/api/contracts/return-attachments/${attachmentId}/download`;
}

signContractAsBuyer(contractId: number, payload: { signedByName: string; signedByTitle: string }): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/contracts/${contractId}/sign/buyer`;
  return this.invokePostAPI(url, payload);
}

signContractAsSupplier(contractId: number, payload: { signedByName: string; signedByTitle: string }): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/contracts/${contractId}/sign/supplier`;
  return this.invokePostAPI(url, payload);
}

getContractPdfDownloadUrl(contractId: number): string {
  return environment.API_URL + `leadcapture/api/contract-pdf/${contractId}`;
}

getContractPdfPreviewUrl(contractId: number): string {
  return environment.API_URL + `leadcapture/api/contract-pdf/${contractId}/preview`;
}

// ==================== ASN (Advance Shipping Notice) TRACKING ====================

getASNEligiblePOs(supplierId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/asn/available-pos/supplier/${supplierId}`;
  return this.invokeGetAPI(url);
}

createASN(payload: any): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/asn`;
  return this.invokePostAPI(url, payload);
}

getASNsByPO(poId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/asn/po/${poId}`;
  return this.invokeGetAPI(url);
}

getASNsBySupplier(supplierId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/asn/supplier/${supplierId}`;
  return this.invokeGetAPI(url);
}

getASNsByCompany(companyName: string): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/asn/company/${encodeURIComponent(companyName)}`;
  return this.invokeGetAPI(url);
}

getASNDetail(asnId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/asn/${asnId}`;
  return this.invokeGetAPI(url);
}

updateASNStatus(asnId: number, status: string, comments?: string, receiverName?: string, receiverDetails?: string, actorRole?: 'SUPPLIER' | 'BUYER'): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/asn/${asnId}/status`;
  return this.invokePutAPI(url, { status, comments, receiverName, receiverDetails, actorRole });
}

// ==================== APPROVAL FLOW CONFIGURATION (admin-configurable approvers per type) ====================

getApprovalFlowConfig(companyName: string): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/approval-flow-config/company/${encodeURIComponent(companyName)}`;
  return this.invokeGetAPI(url);
}

setApprovalFlowConfigForType(companyName: string, approvalType: string, levelIds: number[]): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/approval-flow-config/company/${encodeURIComponent(companyName)}/type/${approvalType}`;
  return this.invokePutAPI(url, { levelIds });
}

// ==================== CUSTOM APPROVAL TYPES (admin-defined approval categories) ====================

createCustomApprovalType(payload: any): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/custom-approval-types`;
  return this.invokePostAPI(url, payload);
}

getCustomApprovalTypesForCompany(companyName: string): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/custom-approval-types/company/${encodeURIComponent(companyName)}`;
  return this.invokeGetAPI(url);
}

getActiveCustomApprovalTypesForCompany(companyName: string): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/custom-approval-types/company/${encodeURIComponent(companyName)}/active`;
  return this.invokeGetAPI(url);
}

updateCustomApprovalType(id: number, payload: any): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/custom-approval-types/${id}`;
  return this.invokePutAPI(url, payload);
}

toggleCustomApprovalTypeActive(id: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/custom-approval-types/${id}/toggle-active`;
  return this.invokePutAPI(url, {});
}

deleteCustomApprovalType(id: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/custom-approval-types/${id}`;
  return this.invokeDeleteAPI(url);
}

// ==================== CUSTOM APPROVAL REQUESTS (any user raises, routed via configured hierarchy) ====================

createCustomApprovalRequest(payload: any): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/custom-approval-requests`;
  return this.invokePostAPI(url, payload);
}

getMyCustomApprovalRequests(companyName: string, userId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/custom-approval-requests/company/${encodeURIComponent(companyName)}/mine/${userId}`;
  return this.invokeGetAPI(url);
}

getAllCustomApprovalRequestsForCompany(companyName: string): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/custom-approval-requests/company/${encodeURIComponent(companyName)}`;
  return this.invokeGetAPI(url);
}

getPendingCustomApprovalsForUser(userId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/custom-approval-requests/pending/user/${userId}`;
  return this.invokeGetAPI(url);
}

getCustomApprovalRequestDetail(id: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/custom-approval-requests/${id}`;
  return this.invokeGetAPI(url);
}

approveCustomApprovalRequest(id: number, approverId: number, comments: string): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/custom-approval-requests/${id}/approve`;
  return this.invokePutAPI(url, { approverId, comments });
}

rejectCustomApprovalRequest(id: number, approverId: number, comments: string): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/custom-approval-requests/${id}/reject`;
  return this.invokePutAPI(url, { approverId, comments });
}

/**
 * Assign criteria to RFQ with weightages
 */
assignCriteriaToRFQ(rfqId: number, userId: number, criteriaWeightages: any): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/supplier-evaluation/assign-criteria';
  const payload = {
    rfqId: rfqId,
    userId: userId,
    criteriaWeightages: criteriaWeightages
  };
  
  console.log('%c[ASSIGN CRITERIA]', 'color: #00aa00; font-weight: bold;', payload);
  return this.invokePostAPI(url, payload);
}

/**
 * Get RFQ criteria with weightages
 */
getRFQCriteria(rfqId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/supplier-evaluation/rfq/${rfqId}/criteria`;
  console.log('%c[GET RFQ CRITERIA]', 'color: #0066cc;', rfqId);
  return this.invokeGetAPI(url);
}

// ==================== POST-CLOSURE RFQ FEEDBACK ====================

getRfqFeedbackStatus(rfqId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/rfq-feedback/${rfqId}/status`;
  return this.invokeGetAPI(url);
}

getRfqWinningSupplier(rfqId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/rfq-feedback/${rfqId}/winning-supplier`;
  return this.invokeGetAPI(url);
}

getRfqFeedback(rfqId: number, supplierId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/rfq-feedback/${rfqId}/supplier/${supplierId}`;
  return this.invokeGetAPI(url);
}

submitRfqFeedback(rfqId: number, supplierId: number, payload: any): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/rfq-feedback/${rfqId}/supplier/${supplierId}/submit`;
  return this.invokePostAPI(url, payload);
}

/**
 * ✅ Score supplier manually (max score 5)
 * POST /api/supplier-evaluation/score
 */
scoreSupplier(rfqId: number, supplierId: number, userId: number, scores: any): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/supplier-evaluation/score';
  const payload = {
    rfqId: rfqId,
    supplierId: supplierId,
    userId: userId,
    scores: scores  // { rfqCriterionId: rawScore (0-5) }
  };
  
  console.log('%c[SCORE SUPPLIER]', 'color: #00aa00; font-weight: bold;', payload);
  console.log('  ℹ️ Scores must be 0-5');
  return this.invokePostAPI(url, payload);
}

/**
 * ✅ AI Scoring — fetch an auto-computed score for a criterion (Market Review,
 * Delivery, Warranty, Cost, Financial Stability, Location, Payment Terms) via
 * the backend, which proxies to the separate Python AI scoring service.
 * POST /api/ai-scoring/score/{criterionName}/supplier/{supplierId}
 */
fetchAiScore(criterionName: string, supplierId: number, supplierName?: string, force: boolean = false): Observable<any> {
  let url = environment.API_URL + `leadcapture/api/ai-scoring/score/${encodeURIComponent(criterionName)}/supplier/${supplierId}?force=${force}`;
  if (supplierName) {
    url += `&supplierName=${encodeURIComponent(supplierName)}`;
  }
  console.log('%c[FETCH AI SCORE]', 'color: #6f42c1; font-weight: bold;', criterionName, supplierId);
  return this.invokePostAPI(url, {});
}

/**
 * ✅ Java-native scoring — deterministic, non-AI alternative for the same
 * criteria (except Market Review, which is AI-only). Computed directly from
 * the database with no LLM call.
 * POST /api/native-scoring/score/{criterionName}/supplier/{supplierId}
 */
fetchNativeScore(criterionName: string, supplierId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/native-scoring/score/${encodeURIComponent(criterionName)}/supplier/${supplierId}`;
  console.log('%c[FETCH NATIVE SCORE]', 'color: #0d6efd; font-weight: bold;', criterionName, supplierId);
  return this.invokePostAPI(url, {});
}

// ==================== ✅ ADD THESE METHODS TO YOUR DataService ====================

/**
 * ✅ NEW: Delete RFQ Criterion
 * DELETE /api/supplier-evaluation/rfq-criteria/{rfqCriterionId}
 * 
 * Call this after user confirms deletion
 */
deleteRFQCriterion(rfqCriterionId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/supplier-evaluation/rfq-criteria/${rfqCriterionId}`;
  console.log('%c[DELETE RFQ CRITERION]', 'color: #cc0000; font-weight: bold;', rfqCriterionId);
  return this.invokeDeleteAPI(url);
}

/**
 * ✅ NEW: Update RFQ Criterion weightage
 * PUT /api/supplier-evaluation/rfq-criteria/{rfqCriterionId}/weightage
 * 
 * Call this after user edits weightage in modal
 * Backend validates that total = 100%
 */
updateRFQCriterionWeightage(rfqCriterionId: number, newWeightage: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/supplier-evaluation/rfq-criteria/${rfqCriterionId}/weightage`;
  const payload = { weightage: newWeightage };
  console.log('%c[UPDATE RFQ CRITERION WEIGHTAGE]', 'color: #ff9800; font-weight: bold;', { 
    rfqCriterionId, 
    newWeightage 
  });
  return this.invokePutAPI(url, payload);
}

// ==================== ADD THESE METHODS AFTER getSupplierScorecard() ====================

/**
 * Get supplier rankings (UPDATED - includes automatic quote weightages)
 */
getSupplierRankings(rfqId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/supplier-evaluation/rfq/${rfqId}/rankings`;
  console.log('%c[GET RANKINGS]', 'color: #0066cc; font-weight: bold;', rfqId);
  return this.invokeGetAPI(url);
}

/**
 * Get detailed scorecard for a supplier
 */
getSupplierScorecard(rfqId: number, supplierId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/supplier-evaluation/rfq/${rfqId}/supplier/${supplierId}/scorecard`;
  console.log('%c[GET SCORECARD]', 'color: #0066cc; font-weight: bold;', { rfqId, supplierId });
  return this.invokeGetAPI(url);
}
// ==================== ✅ ADD THESE METHODS TO YOUR DataService.ts ====================
// Add these to the existing DataService class

// ==================== PURCHASE ORDER APIs ====================

/**
 * ✅ Create Purchase Order from selected supplier quotes
 * POST /api/purchase-order/create
 */
createPurchaseOrder(
  rfqId: number,
  supplierId: number,
  buyerRemarks: string,
  selectedQuoteItemIds: number[],
  userId: number
): Observable<any> {
  //const url = environment.API_URL + 'leadcapture/api/purchase-order/create';
  const url = `${environment.API_URL}leadcapture/api/purchase-order/create`;
  const payload = {
    rfqId,
    supplierId,
    buyerRemarks,
    selectedQuoteItemIds,
    userId
  };

  console.log('%c[CREATE PO]', 'color: #00aa00; font-weight: bold;', payload);

  return this.invokePostAPI(url, payload);
}

/**
 * ✅ Get Purchase Orders by Company Name
 * Used by hierarchy dashboard — hierarchy users have companyName but not buyerId
 * GET /api/purchase-order/company/{companyName}
 */
getPurchaseOrdersByCompany(companyName: string): Observable<any> {
//  const url = environment.API_URL + `leadcapture/api/purchase-order/company/${encodeURIComponent(companyName)}`;
  const url =  `${environment.API_URL}leadcapture/api/purchase-order/company/${encodeURIComponent(companyName)}`;

  console.log('%c[GET POs FOR COMPANY]', 'color: #e65100; font-weight: bold;', companyName, url);

  return this.invokeGetAPI(url).pipe(
    tap((response: any) => {
      console.log('%c[POs FOR COMPANY RAW]', 'color: #00aa00;', response);
    }),
    catchError((error: any) => {
      console.error('%c[POs FOR COMPANY ERROR]', 'color: #cc0000;', error);
      return throwError(() => error);
    })
  );
}




/**
 * ✅ Get Purchase Order by ID
 * GET /api/purchase-order/{id}
 */
getPurchaseOrderById(poId: number): Observable<any> {
 // const url = environment.API_URL + `leadcapture/api/purchase-order/${poId}`;
  const url = `${environment.API_URL}leadcapture/api/purchase-order/${poId}`;

  console.log('%c[GET PO]', 'color: #0066cc;', poId);

  return this.invokeGetAPI(url);
}

  getPurchaseOrdersBySupplierId(supplierId: number): Observable<any> {
        const url = `${environment.API_URL}leadcapture/api/supplier/purchase-order/${supplierId}`;
        console.log('%c[GET POs BY SUPPLIER]', 'color: #0066cc;', supplierId);
        return this.invokeGetAPI(url);
    }

/**
 * ✅ Get all Purchase Orders for Buyer
 * GET /api/purchase-order/buyer/{buyerId}
 */
getPurchaseOrdersByBuyer(buyerId: number): Observable<any> {
 // const url = environment.API_URL + `leadcapture/api/purchase-order/buyer/${buyerId}`;
  const url =  `${environment.API_URL}leadcapture/api/purchase-order/buyer/${buyerId}`;

  console.log('%c[GET POs FOR BUYER]', 'color: #0066cc;', buyerId);

  return this.invokeGetAPI(url);
}

/**
 * ✅ Get all Purchase Orders for RFQ
 * GET /api/purchase-order/rfq/{rfqId}
 */
getPurchaseOrdersByRFQ(rfqId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/purchase-order/rfq/${rfqId}`;

  console.log('%c[GET POs FOR RFQ]', 'color: #0066cc;', rfqId);

  return this.invokeGetAPI(url);
}

/**
 * ✅ Update Purchase Order (DRAFT only)
 * PUT /api/purchase-order/{id}
 */
updatePurchaseOrder(poId: number, updates: any): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/purchase-order/${poId}`;

  console.log('%c[UPDATE PO]', 'color: #ff9800;', { poId, updates });

  return this.invokePutAPI(url, updates);
}

/**
 * ✅ Delete Purchase Order (DRAFT only)
 * DELETE /api/purchase-order/{id}
 */
deletePurchaseOrder(poId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/purchase-order/${poId}`;

  console.log('%c[DELETE PO]', 'color: #cc0000;', poId);

  return this.invokeDeleteAPI(url);
}

// ==================================================================================
// ADD THESE METHODS TO YOUR EXISTING DataService.ts
// PO Approval Workflow APIs - mirrors the RFQ approval pattern
// ==================================================================================

// ==================== PO APPROVAL WORKFLOW APIs ====================

/**
 * Initiate PO approval workflow
 * POST /api/po-approval/initiate
 */
initiatePOApproval(poId: number, creatorUserId: number): Observable<any> {
 // const url = environment.API_URL + 'leadcapture/api/po-approval/initiate';
  const url =  `${environment.API_URL}leadcapture/api/po-approval/initiate`;
  const payload = { poId, creatorUserId };
  console.log('%c[INITIATE PO APPROVAL]', 'color: #ff6600; font-weight: bold;', payload);
  return this.invokePostAPI(url, payload);
}

/**
 * Approve PO at current level
 * POST /api/po-approval/approve
 */
approvePO(poId: number, approverId: number, comments: string): Observable<any> {
 // const url = environment.API_URL + 'leadcapture/api/po-approval/approve';
  const url =`${environment.API_URL}leadcapture/api/po-approval/approve`;
  const payload = { poId, approverId, comments: comments || 'Approved' };
  console.log('%c[APPROVE PO]', 'color: #00aa00; font-weight: bold;', payload);
  return this.invokePostAPI(url, payload);
}

/**
 * Reject PO permanently
 * POST /api/po-approval/reject
 */
rejectPO(poId: number, rejectorId: number, rejectRemarks: string): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/po-approval/reject';
  const payload = { poId, rejectorId, rejectRemarks };
  console.log('%c[REJECT PO]', 'color: #cc0000; font-weight: bold;', payload);
  return this.invokePostAPI(url, payload);
}

/**
 * Return PO for revision
 * POST /api/po-approval/return-for-revision
 */
returnPOForRevision(poId: number, approverId: number, returnRemarks: string): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/po-approval/return-for-revision';
  const payload = { poId, approverId, returnRemarks };
  console.log('%c[RETURN PO FOR REVISION]', 'color: #ff9800; font-weight: bold;', payload);
  return this.invokePostAPI(url, payload);
}

/**
 * Resubmit PO after revision
 * POST /api/po-approval/resubmit
 */
resubmitPO(poId: number, resubmitterId: number): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/po-approval/resubmit';
  const payload = { poId, resubmitterId };
  console.log('%c[RESUBMIT PO]', 'color: #0066cc; font-weight: bold;', payload);
  return this.invokePostAPI(url, payload);
}

/**
 * Hold PO
 * POST /api/po-approval/hold
 */
holdPO(poId: number, holderId: number, holdRemarks: string): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/po-approval/hold';
  const payload = { poId, holderId, holdRemarks };
  console.log('%c[HOLD PO]', 'color: #ff9800; font-weight: bold;', payload);
  return this.invokePostAPI(url, payload);
}

/**
 * Release PO hold
 * POST /api/po-approval/release-hold
 */
releasePOHold(poId: number, releaserId: number, releaseRemarks: string): Observable<any> {
  const url = environment.API_URL + 'leadcapture/api/po-approval/release-hold';
  const payload = { poId, releaserId, releaseRemarks };
  console.log('%c[RELEASE PO HOLD]', 'color: #00aa00; font-weight: bold;', payload);
  return this.invokePostAPI(url, payload);
}

/**
 * Get pending PO approvals for user
 * GET /api/po-approval/pending/user/{userId}
 */
getPendingPOApprovalsForUser(userId: number): Observable<any> {
  //const url = environment.API_URL + `leadcapture/api/po-approval/pending/user/${userId}`;
 const url =  `${environment.API_URL}leadcapture/api/po-approval/pending/user/${userId}`;
  console.log('%c[GET PENDING PO APPROVALS]', 'color: #0066cc;', userId);
  return this.invokeGetAPI(url).pipe(
    map((response: any) => {
      if (response && response.success === true) {
        return { success: true, data: Array.isArray(response.data) ? response.data : [] };
      } else if (Array.isArray(response)) {
        return { success: true, data: response };
      }
      return { success: true, data: [] };
    }),
    catchError((error: any) => {
      console.error('%c[PENDING PO APPROVALS ERROR]', 'color: #cc0000;', error);
      return throwError(() => error);
    })
  );
}

/**
 * Get pending PO approval count for user
 * GET /api/po-approval/pending/user/{userId}/count
 */
getPendingPOApprovalCount(userId: number): Observable<any> {
 //const url = environment.API_URL + `leadcapture/api/po-approval/pending/user/${userId}/count`;
   const url = `${environment.API_URL}leadcapture/api/po-approval/pending/user/${userId}/count`;  // ← FIXED PORT
  console.log('%c[GET PENDING PO COUNT]', 'color: #e53935;', userId);
  return this.invokeGetAPI(url).pipe(
    map((response: any) => {
      let count = 0;
      if (response && typeof response.data === 'number') count = response.data;
      else if (response && typeof response.count === 'number') count = response.count;
      else if (response && typeof response.pendingCount === 'number') count = response.pendingCount;
      else if (typeof response === 'number') count = response;
      console.log('%c[PENDING PO COUNT RESULT]', 'color: #00aa00;', count);
      return { success: true, pendingCount: count };
    }),
    catchError((error: any) => {
      console.error('%c[PENDING PO COUNT ERROR]', 'color: #cc0000;', error);
      return of({ success: false, pendingCount: 0 });
    })
  );
}

/**
 * Get hold PO approvals for user
 * GET /api/po-approval/hold/user/{userId}
 */
getHoldPOApprovalsForUser(userId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/po-approval/hold/user/${userId}`;
  console.log('%c[GET HOLD PO APPROVALS]', 'color: #ff9800;', userId);
  return this.invokeGetAPI(url).pipe(
    map((response: any) => {
      if (response && response.success === true) {
        return { success: true, data: Array.isArray(response.data) ? response.data : [] };
      } else if (Array.isArray(response)) {
        return { success: true, data: response };
      }
      return { success: true, data: [] };
    }),
    catchError((error: any) => {
      console.error('%c[HOLD PO APPROVALS ERROR]', 'color: #cc0000;', error);
      return throwError(() => error);
    })
  );
}

/**
 * Get hold PO approval count for user
 * GET /api/po-approval/hold/user/{userId}/count
 */
getHoldPOApprovalCount(userId: number): Observable<any> {
 //const url = environment.API_URL +  `leadcapture/api/po-approval/hold/user/${userId}/count`;
   const url = `${environment.API_URL}leadcapture/api/po-approval/hold/user/${userId}/count`;  // ← FIXED PORT
  console.log('%c[GET HOLD PO COUNT]', 'color: #ff6f00;', userId);
  return this.invokeGetAPI(url).pipe(
    map((response: any) => {
      let count = 0;
      if (response && typeof response.data === 'number') count = response.data;
      else if (response && typeof response.holdCount === 'number') count = response.holdCount;
      else if (typeof response === 'number') count = response;
      console.log('%c[HOLD PO COUNT RESULT]', 'color: #00aa00;', count);
      return { success: true, holdCount: count };
    }),
    catchError((error: any) => {
      console.error('%c[HOLD PO COUNT ERROR]', 'color: #cc0000;', error);
      return of({ success: false, holdCount: 0 });
    })
  );
}

/**
 * Get PO approval history
 * GET /api/po-approval/history/{poId}
 */
getPOApprovalHistory(poId: number): Observable<any> {
  const url =  `${environment.API_URL}leadcapture/api/po-approval/history/${poId}`;
 // const url = environment.API_URL + `leadcapture/api/po-approval/history/${poId}`;
  console.log('%c[GET PO APPROVAL HISTORY]', 'color: #0066cc;', poId);
  return this.invokeGetAPI(url);
}

/**
 * Check if user is the last PO approver
 * GET /api/po-approval/is-last-approver/{poId}/{userId}
 */
isLastPOApprover(poId: number, userId: number): Observable<any> {
  const url = environment.API_URL + `leadcapture/api/po-approval/is-last-approver/${poId}/${userId}`;
  console.log('%c[CHECK LAST PO APPROVER]', 'color: #0066cc;', { poId, userId });
  return this.invokeGetAPI(url);
}

// ============================================================
// ADD THESE METHODS TO YOUR EXISTING DataService.ts
// Place after the existing PO Approval methods
// ============================================================

// ==================== INVOICE APIs ====================

/**
 * Get approved POs for supplier (to create invoices against).
 * GET /api/invoice/supplier/{supplierId}/approved-pos
 */
getApprovedPOsForSupplier(supplierId: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/supplier/${supplierId}/approved-pos`;
     console.log('%c[GET APPROVED POs FOR SUPPLIER]', 'color: #e65100;', supplierId);
        return this.invokeGetAPI(url).pipe(
            catchError((error: any) => {
                console.error('%c[APPROVED POs ERROR]', 'color: #cc0000;', error);
                return throwError(() => error);
            })
        );
    }

/**
 * Get PO details pre-filled for invoice creation.
 * GET /api/invoice/po-details/{supplierId}/{poId}
 */
getPODetailsForInvoice(supplierId: number, poId: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/po-details/${supplierId}/${poId}`;
  console.log('%c[GET PO FOR INVOICE]', 'color: #e65100;', { supplierId, poId });
  return this.invokeGetAPI(url);
}

/**
 * Create invoice (saved as DRAFT).
 * POST /api/invoice/create/{supplierId}/{poId}
 */
createInvoice(supplierId: number, poId: number, invoiceData: any): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/create/${supplierId}/${poId}`;
  console.log('%c[CREATE INVOICE]', 'color: #00aa00; font-weight: bold;', invoiceData);
  return this.invokePostAPI(url, invoiceData);
}

/**
 * Metadata (no bytes) for files attached to an invoice — the "upload" alternative to
 * typing the invoice in by hand. GET /api/invoice/{invoiceId}/attachments
 */
getInvoiceAttachments(invoiceId: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/${invoiceId}/attachments`;
  return this.invokeGetAPI(url);
}

/**
 * Direct download/preview URL for one invoice attachment — bind straight to an <a href>,
 * no Observable needed. GET /api/invoice/attachments/{attachmentId}/download
 */
getInvoiceAttachmentDownloadUrl(attachmentId: number): string {
  return `${environment.API_URL}leadcapture/api/invoice/attachments/${attachmentId}/download`;
}

/**
 * Submit DRAFT invoice → SUBMITTED.
 * PUT /api/invoice/{invoiceId}/submit/{supplierId}
 */
submitInvoice(invoiceId: number, supplierId: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/${invoiceId}/submit/${supplierId}`;
  console.log('%c[SUBMIT INVOICE]', 'color: #2196f3; font-weight: bold;', { invoiceId, supplierId });
  return this.invokePutAPI(url, {}).pipe(
    tap(r  => console.log('%c[SUBMIT INVOICE OK]', 'color:#00aa00;', r)),
    catchError(e => { console.error('%c[SUBMIT INVOICE ERR]', 'color:#cc0000;', e); return throwError(() => e); })
  );
}

/**
 * Get all invoices for a supplier
 * GET /api/invoice/supplier/{supplierId}
 */
getSupplierInvoices(supplierId: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/supplier/${supplierId}`;
  console.log('%c[GET SUPPLIER INVOICES]', 'color: #0066cc;', supplierId);
  return this.invokeGetAPI(url);
}

/**
 * Get single invoice details
 * GET /api/invoice/{invoiceId}
 */
getInvoiceById(invoiceId: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/${invoiceId}`;
  console.log('%c[GET INVOICE]', 'color: #0066cc;', invoiceId);
  return this.invokeGetAPI(url);
}

/**
 * Get all non-DRAFT invoices for buyer company.
 * GET /api/invoice/buyer/company/{companyName}
 */
getBuyerInvoices(companyName: string): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/buyer/company/${encodeURIComponent(companyName)}`;
  console.log('%c[GET BUYER INVOICES]', 'color: #0066cc;', companyName);
  return this.invokeGetAPI(url);
}

/**
 * Get invoices for a specific PO
 * GET /api/invoice/po/{poId}
 */
getInvoicesByPO(poId: number): Observable<any> {
  //const url = environment.API_URL +  `leadcapture/api/invoice/po/${poId}`;
  const url = `${environment.API_URL}leadcapture/api/invoice/po/${poId}`;
  console.log('%c[GET PO INVOICES]', 'color: #0066cc;', poId);
  return this.invokeGetAPI(url);
}

 getBuyerInvoicesByBuyerId(buyerId: number): Observable<any> {
        const url = environment.API_URL + `leadcapture/api/invoice/buyer/${buyerId}`;
        console.log('%c[GET BUYER INVOICES by buyerId]', 'color: #0066cc;', buyerId);
        return this.invokeGetAPI(url);
    }

/**
 * BUYER: Approve invoice
 * PUT /api/invoice/{invoiceId}/approve
 */
approveInvoice(invoiceId: number, buyerName: string, remarks: string): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/${invoiceId}/approve`;
  console.log('%c[APPROVE INVOICE]', 'color: #00aa00;', invoiceId);
  return this.invokePutAPI(url, { approvedBy: buyerName, buyerName, remarks });
}

/**
 * BUYER: Reject invoice
 * PUT /api/invoice/{invoiceId}/reject
 */
rejectInvoice(invoiceId: number, buyerName: string, remarks: string): Observable<any> {
  // ✅ FIXED: use /request-resubmission (semantically correct)
  const url = `${environment.API_URL}leadcapture/api/invoice/${invoiceId}/request-resubmission`;
  console.log('%c[REJECT INVOICE (soft)]', 'color: #ff9800;', invoiceId);
  return this.invokePutAPI(url, { buyerName, remarks });
}

/**
 * BUYER: Mark invoice as paid
 * PUT /api/invoice/{invoiceId}/mark-paid
 */
markInvoicePaid(invoiceId: number, buyerName: string, paymentReference: string,
                 paymentMode: string = '', paymentRemarks: string = ''): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/${invoiceId}/mark-paid`;
  console.log('%c[MARK INVOICE PAID]', 'color: #00aa00;', invoiceId);
  return this.invokePutAPI(url, { paidBy: buyerName, buyerName, paymentReference, paymentMode, paymentRemarks });
}

/**
 * BUYER/FINANCE: record the advance payment paid to the supplier before delivery,
 * per the advance-payment terms carried onto this invoice from the PO.
 * PUT /api/invoice/{invoiceId}/record-advance-payment
 */
recordAdvancePayment(invoiceId: number, buyerName: string, paymentReference: string, amount: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/${invoiceId}/record-advance-payment`;
  console.log('%c[RECORD ADVANCE PAYMENT]', 'color: #00aa00;', { invoiceId, amount });
  return this.invokePutAPI(url, { paidBy: buyerName, buyerName, paymentReference, amount });
}

validateInvoiceMatch(invoiceId: number, supplierId: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/${invoiceId}/validate-match/${supplierId}`;
  console.log('%c[VALIDATE MATCH]', 'color: #9c27b0; font-weight: bold;', { invoiceId, supplierId });
  return this.invokeGetAPI(url).pipe(
    tap(r => console.log('%c[VALIDATE MATCH RESULT]', 'color: #9c27b0;', r)),
    catchError(error => {
      console.error('%c[VALIDATE MATCH ERROR]', 'color: #cc0000;', error);
      return throwError(() => error);
    })
  );
}

resubmitInvoice(invoiceId: number, supplierId: number, resubmitRemarks: string): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/${invoiceId}/resubmit/${supplierId}`;
  console.log('%c[RESUBMIT INVOICE]', 'color: #ff9800; font-weight: bold;', { invoiceId, supplierId });
  return this.invokePutAPI(url, { resubmitRemarks }).pipe(
    tap(r  => console.log('%c[RESUBMIT OK]', 'color:#00aa00;', r)),
    catchError(e => { console.error('%c[RESUBMIT ERR]', 'color:#cc0000;', e); return throwError(() => e); })
  );
}

rejectInvoicePermanent(invoiceId: number, buyerName: string, remarks: string): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/${invoiceId}/reject-close`;
  console.log('%c[REJECT INVOICE PERMANENT]', 'color: #b71c1c; font-weight: bold;', invoiceId);
  return this.invokePutAPI(url, { buyerName, remarks });
}

/**
 * Update invoice fields (DRAFT or REJECTED status only).
 * PUT /api/invoice/{invoiceId}/update/{supplierId}
 */
updateInvoice(invoiceId: number, supplierId: number, payload: any): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/invoice/${invoiceId}/update/${supplierId}`;
  console.log('%c[UPDATE INVOICE]', 'color: #ff9800; font-weight: bold;', { invoiceId, supplierId });
  return this.invokePutAPI(url, payload).pipe(
    tap(r  => console.log('%c[UPDATE INVOICE OK]', 'color:#00aa00;', r)),
    catchError(e => { console.error('%c[UPDATE INVOICE ERR]', 'color:#cc0000;', e); return throwError(() => e); })
  );
}



/**
 * Get recommendation status for RFQ (system recommended supplier + all rankings)
 * Used by Supplier Selection page for UI highlighting
 * GET /api/supplier-selection/rfq/{rfqId}/status
 */
getSupplierSelectionStatus(rfqId: number): Observable<any> {
  const url = environment.API_URL +  `leadcapture/api/supplier-selection/rfq/${rfqId}/status`;
 
 // const url = `http://localhost:9092/leadcapture/api/supplier-selection/rfq/${rfqId}/status`;
  console.log('%c[GET SUPPLIER SELECTION STATUS]', 'color: #9c27b0; font-weight: bold;', rfqId);
  return this.invokeGetAPI(url).pipe(
    tap(response => console.log('%c[SELECTION STATUS]', 'color: #00aa00;', response)),
    catchError(error => {
      console.error('%c[SELECTION STATUS ERROR]', 'color: #cc0000;', error);
      return throwError(() => error);
    })
  );
}

/**
 * Select final supplier for RFQ
 * Justification is MANDATORY if isSystemRecommended = false
 * POST /api/supplier-selection/select
 */
selectFinalSupplier(payload: {
  rfqId: number;
  supplierId: number;
  isSystemRecommended: boolean;
  justification?: string;
  remarks?: string;
  selectedByUserId: number;
}): Observable<any> {
    const url = environment.API_URL +  `leadcapture/api/supplier-selection/select`;
  //const url = `http://localhost:9092/leadcapture/api/supplier-selection/select`;
  console.log('%c[SELECT FINAL SUPPLIER]', 'color: #00aa00; font-weight: bold;', payload);
  return this.invokePostAPI(url, payload).pipe(
    tap(response => console.log('%c[SELECT SUPPLIER SUCCESS]', 'color: #00aa00;', response)),
    catchError(error => {
      console.error('%c[SELECT SUPPLIER ERROR]', 'color: #cc0000;', error);
      return throwError(() => error);
    })
  );
}

/**
 * Get existing supplier selection for RFQ
 * GET /api/supplier-selection/rfq/{rfqId}
 */
getSupplierSelectionByRFQ(rfqId: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/supplier-selection/rfq/${rfqId}`;
  console.log('%c[GET SUPPLIER SELECTION]', 'color: #0066cc;', rfqId);
  return this.invokeGetAPI(url);
}

/**
 * Check if a supplier selection exists for RFQ
 * GET /api/supplier-selection/rfq/{rfqId}/exists
 */
supplierSelectionExists(rfqId: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/supplier-selection/rfq/${rfqId}/exists`;
  console.log('%c[SELECTION EXISTS?]', 'color: #0066cc;', rfqId);
  return this.invokeGetAPI(url);
}

// ==================== PO NEGOTIATION APIs ====================

/**
 * Initialize PO price negotiation
 * Pre-fills line items with quoted prices (discountPercentage = 0)
 * POST /api/po-negotiation/init
 */
initPONegotiation(rfqId: number, supplierId: number, selectionId?: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/po-negotiation/init`;
  const payload = { rfqId, supplierId }; // ✅ selectionId NOT sent — backend finds it automatically
  console.log('%c[INIT PO NEGOTIATION]', 'color: #ff6600; font-weight: bold;', payload);
  return this.invokePostAPI(url, payload).pipe(
    tap(response => console.log('%c[NEGOTIATION INIT SUCCESS]', 'color: #00aa00;', response)),
    catchError(error => {
      console.error('%c[NEGOTIATION INIT ERROR]', 'color: #cc0000;', error);
      return throwError(() => error);
    })
  );
}

/**
 * Get negotiation by ID (with all line items)
 * GET /api/po-negotiation/{id}
 */
getPONegotiationById(negotiationId: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/po-negotiation/${negotiationId}`;
  console.log('%c[GET PO NEGOTIATION]', 'color: #0066cc;', negotiationId);
  return this.invokeGetAPI(url);
}

/**
 * Get all negotiations for RFQ
 * GET /api/po-negotiation/rfq/{rfqId}
 */
getPONegotiationsByRFQ(rfqId: number): Observable<any> {
   // const url = environment.API_URL + `leadcapture/api/po-negotiation/rfq/${rfqId}`;
  const url = `${environment.API_URL}leadcapture/api/po-negotiation/rfq/${rfqId}`;
  console.log('%c[GET PO NEGOTIATIONS BY RFQ]', 'color: #0066cc;', rfqId);
  return this.invokeGetAPI(url);
}

/**
 * Save negotiation line item edits
 * Accepts discountPercentage OR finalizedPrice per line item
 * PUT /api/po-negotiation/{id}
 */
savePONegotiation(negotiationId: number, payload: {
  lineItems: Array<{
    id: number;
    discountPercentage?: number;
    finalizedPrice?: number;
  }>;
  taxPercentage?: number;
  terms?: string;
  // Advance payment (before delivery) — set by the buyer on the negotiation page,
  // carried through onto the PO and from there onto the invoice.
  advancePaymentRequired?: boolean;
  advancePaymentPercentage?: number | null;
  advancePaymentAmount?: number | null;
  advancePaymentDue?: string | null;
  advancePaymentNote?: string | null;
}): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/po-negotiation/${negotiationId}`;
  console.log('%c[SAVE PO NEGOTIATION]', 'color: #ff9800; font-weight: bold;', { negotiationId, payload });
  return this.invokePutAPI(url, payload).pipe(
    tap(response => console.log('%c[NEGOTIATION SAVED]', 'color: #00aa00;', response)),
    catchError(error => {
      console.error('%c[NEGOTIATION SAVE ERROR]', 'color: #cc0000;', error);
      return throwError(() => error);
    })
  );
}

/**
 * Create PO from finalized negotiation
 * POST /api/po-negotiation/{id}/create-po
 */
createPOFromNegotiation(negotiationId: number, userId: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/po-negotiation/${negotiationId}/create-po`;
  const payload = { userId };
  console.log('%c[CREATE PO FROM NEGOTIATION]', 'color: #00aa00; font-weight: bold;', { negotiationId, userId });
  return this.invokePostAPI(url, payload).pipe(
    tap(response => console.log('%c[PO FROM NEGOTIATION SUCCESS]', 'color: #00aa00;', response)),
    catchError(error => {
      console.error('%c[PO FROM NEGOTIATION ERROR]', 'color: #cc0000;', error);
      return throwError(() => error);
    })
  );
}

// ==================== PO PDF APIs ====================

/**
 * Download PO as ITTI-format PDF (attachment)
 * GET /api/po-pdf/{poId}
 * Returns a Blob — call downloadPdfBlob() helper to trigger browser download
 */
downloadPOPdf(poId: number): Observable<Blob> {
  const url = `${environment.API_URL}leadcapture/api/po-pdf/${poId}`;
  console.log('%c[DOWNLOAD PO PDF]', 'color: #9c27b0; font-weight: bold;', poId);

  const reqHeader = new HttpHeaders({
    'Authorization': 'Bearer ' + (localStorage.getItem('token') || '')
  });

  return this.http.get(url, { headers: reqHeader, responseType: 'blob' }).pipe(
    tap(() => console.log('%c[PDF DOWNLOAD SUCCESS]', 'color: #00aa00;')),
    catchError(error => {
      console.error('%c[PDF DOWNLOAD ERROR]', 'color: #cc0000;', error);
      return throwError(() => error);
    })
  );
}

/**
 * Preview PO PDF inline in browser
 * GET /api/po-pdf/{poId}/preview
 */
previewPOPdf(poId: number): Observable<Blob> {
  const url = `${environment.API_URL}leadcapture/api/po-pdf/${poId}/preview`;
  console.log('%c[PREVIEW PO PDF]', 'color: #9c27b0;', poId);

  const reqHeader = new HttpHeaders({
    'Authorization': 'Bearer ' + (localStorage.getItem('token') || '')
  });

  return this.http.get(url, { headers: reqHeader, responseType: 'blob' }).pipe(
    catchError(error => {
      console.error('%c[PDF PREVIEW ERROR]', 'color: #cc0000;', error);
      return throwError(() => error);
    })
  );
}

/**
 * Helper: trigger browser download from a Blob
 * Usage: this.dataService.downloadPdfBlob(blob, 'PO-001.pdf')
 */
downloadPdfBlob(blob: Blob, filename: string): void {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  window.URL.revokeObjectURL(url);
}

// ============================================================
// ADD THESE METHODS TO YOUR EXISTING DataService (data.service.ts)
// Place after existing invoice methods
// ============================================================

  // ─────────────────────────────────────────────
  // GRN APIs  –  /leadcapture/api/grn
  // ─────────────────────────────────────────────
  private GRN_URL = environment.API_URL + 'leadcapture/api/grn';

      startQAReview(grnId: number, inspectedByName: string): Observable<any> {
        console.log('%c[START QA REVIEW]', 'color: #9C27B0; font-weight: bold;', grnId);
        return this.invokePutAPI(`${this.GRN_URL}/${grnId}/start-qa-review`, { inspectedByName });
    }

    submitQAReview(grnId: number, payload: any): Observable<any> {
        console.log('%c[SUBMIT QA REVIEW]', 'color: #9C27B0; font-weight: bold;', grnId);
        return this.invokePutAPI(`${this.GRN_URL}/${grnId}/qa-review`, payload);
    }

    createGRN(payload: any): Observable<any> {
        console.log('%c[DataService] createGRN', 'color: #4CAF50; font-weight:bold', payload);
        return this.invokePostAPI(this.GRN_URL, payload);
    }

    updateGRN(grnId: number, payload: any): Observable<any> {
        console.log('%c[DataService] updateGRN', 'color: #4CAF50; font-weight:bold', grnId);
        return this.invokePutAPI(`${this.GRN_URL}/${grnId}`, payload);
    }

    /**
     * Reverts a GRN back to DRAFT so quantities can be updated.
     * Called automatically before updateGRN when the GRN is SUBMITTED / QA_REVIEW / APPROVED.
     *
     * Backend endpoint: PUT /api/grn/{id}/revert-to-draft
     * See BACKEND_CHANGE_REQUIRED.java for the Spring Boot controller code to add.
     */
    revertGRNToDraft(grnId: number): Observable<any> {
        console.log('%c[REVERT GRN TO DRAFT]', 'color: #FF9800; font-weight: bold;', grnId);
        return this.invokePutAPI(`${this.GRN_URL}/${grnId}/revert-to-draft`, {});
    }

    linkInvoiceToGRN(grnId: number, invoiceId: number): Observable<any> {
        console.log('%c[DataService] linkInvoiceToGRN', 'color: #4CAF50; font-weight:bold', grnId, invoiceId);
        return this.invokePutAPI(`${this.GRN_URL}/${grnId}/link-invoice/${invoiceId}`, {});
    }

    submitGRN(grnId: number): Observable<any> {
        console.log('%c[DataService] submitGRN', 'color: #2196F3; font-weight:bold', grnId);
        return this.invokePutAPI(`${this.GRN_URL}/${grnId}/submit`, {});
    }

    approveGRN(grnId: number, approvedByName: string): Observable<any> {
        console.log('%c[APPROVE GRN]', 'color: #00aa00; font-weight: bold;', grnId);
        return this.invokePutAPI(`${this.GRN_URL}/${grnId}/approve`, { approvedByName });
    }

   cancelGRN(grnId: number, reason?: string): Observable<any> {
        console.log('%c[CANCEL GRN]', 'color: #f44336; font-weight: bold;', grnId);
        return this.invokePutAPI(`${this.GRN_URL}/${grnId}/cancel`, reason ? { reason } : {});
    }

      closeGRN(grnId: number): Observable<any> {
        console.log('%c[CLOSE GRN]', 'color: #607D8B; font-weight: bold;', grnId);
        return this.invokePutAPI(`${this.GRN_URL}/${grnId}/close`, {});
    }

     getGRNById(grnId: number): Observable<any> {
        console.log('%c[GET GRN BY ID]', 'color: #0066cc;', grnId);
        return this.invokeGetAPI(`${this.GRN_URL}/${grnId}`);
    }

    getGRNsByPO(poId: number): Observable<any> {
        console.log('%c[GET APPROVED GRNs BY PO]', 'color: #0066cc;', poId);
        return this.invokeGetAPI(`${this.GRN_URL}/po/${poId}`);
    }

    getAllGRNsByPO(poId: number): Observable<any> {
          console.log('%c[GET ALL GRNs BY PO]', 'color: #0066cc;', poId);
        return this.invokeGetAPI(`${this.GRN_URL}/po/${poId}/all`);
    }
        getGRNsByPoAndInvoice(poId: number, invoiceId: number): Observable<any> {
        console.log('%c[GET GRNs BY PO & INVOICE]', 'color: #0066cc;', { poId, invoiceId });
        return this.invokeGetAPI(`${this.GRN_URL}/po/${poId}/invoice/${invoiceId}`);
    }

    getGRNsByInvoice(invoiceId: number): Observable<any> {
       console.log('%c[GET GRNs BY INVOICE]', 'color: #0066cc;', invoiceId);
        return this.invokeGetAPI(`${this.GRN_URL}/invoice/${invoiceId}`);
    }

    getApprovedGRNsByPO(poId: number): Observable<any> {
       console.log('%c[GET APPROVED GRNs BY PO]', 'color: #0066cc;', poId);
        return this.invokeGetAPI(`${this.GRN_URL}/po/${poId}`);
    }

     getGRNsByUser(userId: number): Observable<any> {
        console.log('%c[GET GRNs BY USER]', 'color: #0066cc;', userId);
        return this.invokeGetAPI(`${this.GRN_URL}/user/${userId}`);
    }

  // ─────────────────────────────────────────────
  // Service Entry Sheet (SES) APIs  –  /leadcapture/api/ses
  // The Service-PO counterpart to GRN. Single-step approval (no QA phase):
  // DRAFT -> SUBMITTED -> APPROVED/REJECTED.
  // ─────────────────────────────────────────────
  private SES_URL = environment.API_URL + 'leadcapture/api/ses';

    createSES(payload: any): Observable<any> {
        console.log('%c[DataService] createSES', 'color: #4CAF50; font-weight:bold', payload);
        return this.invokePostAPI(this.SES_URL, payload);
    }

    updateSES(sesId: number, payload: any): Observable<any> {
        console.log('%c[DataService] updateSES', 'color: #4CAF50; font-weight:bold', sesId);
        return this.invokePutAPI(`${this.SES_URL}/${sesId}`, payload);
    }

    submitSES(sesId: number): Observable<any> {
        console.log('%c[DataService] submitSES', 'color: #2196F3; font-weight:bold', sesId);
        return this.invokePutAPI(`${this.SES_URL}/${sesId}/submit`, {});
    }

    approveSES(sesId: number, approvedByName: string): Observable<any> {
        console.log('%c[APPROVE SES]', 'color: #00aa00; font-weight: bold;', sesId);
        return this.invokePutAPI(`${this.SES_URL}/${sesId}/approve`, { approvedByName });
    }

    rejectSES(sesId: number, rejectedByName: string, remarks: string): Observable<any> {
        console.log('%c[REJECT SES]', 'color: #f44336; font-weight: bold;', sesId);
        return this.invokePutAPI(`${this.SES_URL}/${sesId}/reject`, { rejectedByName, remarks });
    }

    approveAdditionalItems(sesId: number, approvedByName: string): Observable<any> {
        console.log('%c[APPROVE ADDITIONAL ITEMS]', 'color: #00aa00; font-weight: bold;', sesId);
        return this.invokePutAPI(`${this.SES_URL}/${sesId}/approve-additional-items`, { approvedByName });
    }

    rejectAdditionalItems(sesId: number, rejectedByName: string, remarks: string): Observable<any> {
        console.log('%c[REJECT ADDITIONAL ITEMS]', 'color: #f44336; font-weight: bold;', sesId);
        return this.invokePutAPI(`${this.SES_URL}/${sesId}/reject-additional-items`, { rejectedByName, remarks });
    }

    // ── Service Performance Reviews (post-award, per-visit) ──────────────────────
    private SERVICE_PERFORMANCE_URL = `${environment.API_URL}leadcapture/api/service-performance`;

    getStandardPerformanceMetrics(): Observable<any> {
        return this.invokeGetAPI(`${this.SERVICE_PERFORMANCE_URL}/standard-metrics`);
    }

    createServicePerformanceReview(payload: {
        sesId: number;
        reviewedByUserId: number;
        reviewedByName: string;
        remarks?: string | null;
        metrics: Array<{ metricName: string; score: number }>;
    }): Observable<any> {
        console.log('%c[CREATE SERVICE PERFORMANCE REVIEW]', 'color: #4CAF50; font-weight:bold', payload);
        return this.invokePostAPI(this.SERVICE_PERFORMANCE_URL, payload);
    }

    servicePerformanceReviewExistsForSes(sesId: number): Observable<any> {
        return this.invokeGetAPI(`${this.SERVICE_PERFORMANCE_URL}/ses/${sesId}/exists`);
    }

    getSupplierPerformanceSummary(supplierId: number): Observable<any> {
        return this.invokeGetAPI(`${this.SERVICE_PERFORMANCE_URL}/supplier/${supplierId}/summary`);
    }

    getSupplierPerformanceReviews(supplierId: number): Observable<any> {
        return this.invokeGetAPI(`${this.SERVICE_PERFORMANCE_URL}/supplier/${supplierId}/reviews`);
    }

    linkInvoiceToSES(sesId: number, invoiceId: number, invoiceNumber?: string): Observable<any> {
        console.log('%c[DataService] linkInvoiceToSES', 'color: #4CAF50; font-weight:bold', sesId, invoiceId);
        return this.invokePutAPI(`${this.SES_URL}/${sesId}/link-invoice/${invoiceId}`, { invoiceNumber });
    }

    getSESById(sesId: number): Observable<any> {
        console.log('%c[GET SES BY ID]', 'color: #0066cc;', sesId);
        return this.invokeGetAPI(`${this.SES_URL}/${sesId}`);
    }

    getSESByPO(poId: number): Observable<any> {
        console.log('%c[GET SES BY PO]', 'color: #0066cc;', poId);
        return this.invokeGetAPI(`${this.SES_URL}/po/${poId}`);
    }

    getSESByUser(userId: number): Observable<any> {
        console.log('%c[GET SES BY USER]', 'color: #0066cc;', userId);
        return this.invokeGetAPI(`${this.SES_URL}/user/${userId}`);
    }

    getAllSES(): Observable<any> {
        console.log('%c[GET ALL SES]', 'color: #0066cc;');
        return this.invokeGetAPI(this.SES_URL);
    }

    sesApprovedExistsForPO(poId: number): Observable<any> {
        console.log('%c[SES APPROVED EXISTS]', 'color: #0066cc;', poId);
        return this.invokeGetAPI(`${this.SES_URL}/po/${poId}/approved-exists`);
    }

    // ── SES Attachments — common (whole-SES), per-line-item, per-additional-item ──────
    // Either side (supplier or buyer) can upload/view. Kept as standalone endpoints since
    // line items and additional items only get real ids once the SES has been saved once.

    uploadSESCommonAttachments(sesId: number, files: { filename: string; contentType: string; base64: string }[], uploadedByName: string): Observable<any> {
        return this.invokePostAPI(`${this.SES_URL}/${sesId}/attachments`, { uploadedByName, files });
    }

    getSESCommonAttachments(sesId: number): Observable<any> {
        return this.invokeGetAPI(`${this.SES_URL}/${sesId}/attachments`);
    }

    getSESCommonAttachmentDownloadUrl(attachmentId: number): string {
        return `${this.SES_URL}/attachments/${attachmentId}/download`;
    }

    uploadSESLineItemAttachments(lineItemId: number, files: { filename: string; contentType: string; base64: string }[], uploadedByName: string): Observable<any> {
        return this.invokePostAPI(`${this.SES_URL}/line-items/${lineItemId}/attachments`, { uploadedByName, files });
    }

    getSESLineItemAttachmentsForSes(sesId: number): Observable<any> {
        return this.invokeGetAPI(`${this.SES_URL}/${sesId}/line-item-attachments`);
    }

    getSESLineItemAttachmentDownloadUrl(attachmentId: number): string {
        return `${this.SES_URL}/line-item-attachments/${attachmentId}/download`;
    }

    uploadSESAdditionalItemAttachments(additionalItemId: number, files: { filename: string; contentType: string; base64: string }[], uploadedByName: string): Observable<any> {
        return this.invokePostAPI(`${this.SES_URL}/additional-items/${additionalItemId}/attachments`, { uploadedByName, files });
    }

    getSESAdditionalItemAttachmentsForSes(sesId: number): Observable<any> {
        return this.invokeGetAPI(`${this.SES_URL}/${sesId}/additional-item-attachments`);
    }

    getSESAdditionalItemAttachmentDownloadUrl(attachmentId: number): string {
        return `${this.SES_URL}/additional-item-attachments/${attachmentId}/download`;
    }

    // ── Service Reports — supplier's formal write-up filed after an SES is approved ──────
    private SERVICE_REPORT_URL = environment.API_URL + 'leadcapture/api/service-reports';

    submitServiceReport(payload: any): Observable<any> {
        console.log('%c[SUBMIT SERVICE REPORT]', 'color: #4CAF50; font-weight:bold', payload);
        return this.invokePostAPI(this.SERVICE_REPORT_URL, payload);
    }

    getServiceReportBySesId(sesId: number): Observable<any> {
        return this.invokeGetAPI(`${this.SERVICE_REPORT_URL}/ses/${sesId}`);
    }

    serviceReportExistsForSes(sesId: number): Observable<any> {
        return this.invokeGetAPI(`${this.SERVICE_REPORT_URL}/ses/${sesId}/exists`);
    }

    getServiceReportsForSupplier(supplierId: number): Observable<any> {
        return this.invokeGetAPI(`${this.SERVICE_REPORT_URL}/supplier/${supplierId}`);
    }

    getAllServiceReports(): Observable<any> {
        return this.invokeGetAPI(this.SERVICE_REPORT_URL);
    }

    getServiceReportPdfUrl(reportId: number): string {
        return `${this.SERVICE_REPORT_URL}/${reportId}/pdf`;
    }

    getServiceReportAttachmentDownloadUrl(attachmentId: number): string {
        return `${this.SERVICE_REPORT_URL}/attachments/${attachmentId}/download`;
    }

    // ── SES permanent reject (dead end) — distinct from /reject, which sends back for resubmission
    declineSES(sesId: number, rejectedByName: string, remarks: string): Observable<any> {
        return this.invokePutAPI(`${this.SES_URL}/${sesId}/decline`, { rejectedByName, remarks });
    }

    declineAdditionalItems(sesId: number, rejectedByName: string, remarks: string): Observable<any> {
        return this.invokePutAPI(`${this.SES_URL}/${sesId}/decline-additional-items`, { rejectedByName, remarks });
    }

    // ── Yearly supplier ↔ buyer activity calendar ────────────────────────────────
    private SERVICE_CALENDAR_URL = environment.API_URL + 'leadcapture/api/service-calendar';

    getServiceCalendarActivities(): Observable<any> {
        return this.invokeGetAPI(`${this.SERVICE_CALENDAR_URL}/activities`);
    }

    getServiceCalendarSuppliers(buyerId: number): Observable<any> {
        return this.invokeGetAPI(`${this.SERVICE_CALENDAR_URL}/suppliers?buyerId=${buyerId}`);
    }

    getServiceCalendarBuyerForSupplier(supplierId: number): Observable<any> {
        return this.invokeGetAPI(`${this.SERVICE_CALENDAR_URL}/buyer-for-supplier?supplierId=${supplierId}`);
    }

    getServiceCalendar(buyerId: number, supplierId: number, fy?: number): Observable<any> {
        const fyParam = fy != null ? `&fy=${fy}` : '';
        return this.invokeGetAPI(`${this.SERVICE_CALENDAR_URL}?buyerId=${buyerId}&supplierId=${supplierId}${fyParam}`);
    }

    /** Fills the Scheduled Service Visit row from the supplier's agreed service frequency. */
    autoPlanServiceVisits(payload: { buyerId: number; supplierId: number; fy: number; updatedByName?: string }): Observable<any> {
        return this.invokePutAPI(`${this.SERVICE_CALENDAR_URL}/auto-plan`, payload);
    }

    /** The individual records behind one cell's actual count. */
    getServiceCalendarCellDetails(buyerId: number, supplierId: number, monthDate: string, activityKey: string): Observable<any> {
        return this.invokeGetAPI(
            `${this.SERVICE_CALENDAR_URL}/cell-details?buyerId=${buyerId}&supplierId=${supplierId}`
            + `&monthDate=${encodeURIComponent(monthDate)}&activityKey=${encodeURIComponent(activityKey)}`);
    }

    /** Every financial year this supplier has service history in, through one year ahead, in one
     *  continuous table — the "show my manager the whole schedule" view. */
    getServiceCalendarMultiYear(buyerId: number, supplierId: number): Observable<any> {
        return this.invokeGetAPI(`${this.SERVICE_CALENDAR_URL}/multi-year?buyerId=${buyerId}&supplierId=${supplierId}`);
    }

    saveServiceCalendarCell(payload: {
        buyerId: number; supplierId: number; monthDate: string; activityKey: string;
        planned: boolean; plannedText?: string | null; updatedByName?: string;
    }): Observable<any> {
        return this.invokePutAPI(`${this.SERVICE_CALENDAR_URL}/cell`, payload);
    }

    // ── Shared supplier ↔ buyer Q&A library (FAQ) ────────────────────────────────
    private FAQ_URL = environment.API_URL + 'leadcapture/api/faq';

    /** Admin's management view — every entry, published or not. */
    getFaqForAdmin(): Observable<any> {
        return this.invokeGetAPI(`${this.FAQ_URL}/admin`);
    }

    /** Read-only feed for RFQ creators and suppliers — published, answered entries only. */
    getPublishedFaq(): Observable<any> {
        return this.invokeGetAPI(`${this.FAQ_URL}/published`);
    }

    createFaqEntry(payload: any): Observable<any> {
        return this.invokePostAPI(`${this.FAQ_URL}/admin`, payload);
    }

    updateFaqEntry(id: number, payload: any): Observable<any> {
        return this.invokePutAPI(`${this.FAQ_URL}/${id}`, payload);
    }

    deleteFaqEntry(id: number): Observable<any> {
        return this.invokeDeleteAPI(`${this.FAQ_URL}/${id}`);
    }

    // ── Spend Analysis — categorised spend across suppliers, categories, business units ──
    private SPEND_ANALYSIS_URL = environment.API_URL + 'leadcapture/api/spend-analysis';

    getSpendAnalysis(buyerId: number, fy?: number): Observable<any> {
        const fyParam = fy != null ? `&fy=${fy}` : '';
        return this.invokeGetAPI(`${this.SPEND_ANALYSIS_URL}?buyerId=${buyerId}${fyParam}`);
    }

    /** The same analysis from the supplier's side — their income rather than a buyer's spend. */
    getSupplierRevenueAnalysis(supplierId: number, fy?: number): Observable<any> {
        const fyParam = fy != null ? `&fy=${fy}` : '';
        return this.invokeGetAPI(`${this.SPEND_ANALYSIS_URL}/supplier?supplierId=${supplierId}${fyParam}`);
    }

    /** Every financial year with committed spend, no date window. */
    getSpendAnalysisAllTime(buyerId: number): Observable<any> {
        return this.invokeGetAPI(`${this.SPEND_ANALYSIS_URL}/all-time?buyerId=${buyerId}`);
    }

    getSupplierRevenueAnalysisAllTime(supplierId: number): Observable<any> {
        return this.invokeGetAPI(`${this.SPEND_ANALYSIS_URL}/supplier/all-time?supplierId=${supplierId}`);
    }

    /** The "Custom Range" period option — an arbitrary date range instead of a financial year.
     *  Both from and to are required, ISO dates (inclusive). */
    getSpendAnalysisCustomRange(buyerId: number, from: string, to: string): Observable<any> {
        return this.invokeGetAPI(`${this.SPEND_ANALYSIS_URL}/custom?buyerId=${buyerId}&from=${from}&to=${to}`);
    }

    getSupplierRevenueAnalysisCustomRange(supplierId: number, from: string, to: string): Observable<any> {
        return this.invokeGetAPI(`${this.SPEND_ANALYSIS_URL}/supplier/custom?supplierId=${supplierId}&from=${from}&to=${to}`);
    }

    /** The Spares card's drill-down — from/to are optional ISO dates (inclusive); omit both for all time. */
    getSparesDetail(buyerId: number, from?: string | null, to?: string | null): Observable<any> {
        const params = [`buyerId=${buyerId}`, from ? `from=${from}` : '', to ? `to=${to}` : '']
            .filter(Boolean).join('&');
        return this.invokeGetAPI(`${this.SPEND_ANALYSIS_URL}/spares?${params}`);
    }

    getSupplierSparesDetail(supplierId: number, from?: string | null, to?: string | null): Observable<any> {
        const params = [`supplierId=${supplierId}`, from ? `from=${from}` : '', to ? `to=${to}` : '']
            .filter(Boolean).join('&');
        return this.invokeGetAPI(`${this.SPEND_ANALYSIS_URL}/supplier/spares?${params}`);
    }

    /** The click-through behind a donut card (Supplier/Category/Business Unit/Order Type/Status) —
     *  the same grouping recomputed over a caller-chosen date window, plus the underlying POs. */
    getSpendBreakdownDetail(buyerId: number, dimension: string, from?: string | null, to?: string | null): Observable<any> {
        const params = [`buyerId=${buyerId}`, `dimension=${dimension}`, from ? `from=${from}` : '', to ? `to=${to}` : '']
            .filter(Boolean).join('&');
        return this.invokeGetAPI(`${this.SPEND_ANALYSIS_URL}/breakdown?${params}`);
    }

    getSupplierSpendBreakdownDetail(supplierId: number, dimension: string, from?: string | null, to?: string | null): Observable<any> {
        const params = [`supplierId=${supplierId}`, `dimension=${dimension}`, from ? `from=${from}` : '', to ? `to=${to}` : '']
            .filter(Boolean).join('&');
        return this.invokeGetAPI(`${this.SPEND_ANALYSIS_URL}/supplier/breakdown?${params}`);
    }

  // ── Corrective Action Plan (CAP) — creation & tracking ────────────────
  // Quality Issue -> Root Cause Analysis -> Corrective Action -> Assign Owner -> Due Date ->
  // Action Tracking -> Evidence -> Effectiveness Verification -> Closure.
  private CAP_URL = environment.API_URL + 'leadcapture/api/cap';

  createCap(payload: any): Observable<any> {
    return this.invokePostAPI(this.CAP_URL, payload);
  }

  /** Every supplier this buyer has actually placed a PO with — for the "Raise CAP" picker. */
  getCapSuppliersForBuyer(buyerId: number): Observable<any> {
    return this.invokeGetAPI(`${this.CAP_URL}/suppliers-for-buyer?buyerId=${buyerId}`);
  }

  /** The buyer's own departments, for the "Raise CAP" Department dropdown. */
  getCapDepartmentsForBuyer(buyerId: number): Observable<any> {
    return this.invokeGetAPI(`${this.CAP_URL}/departments-for-buyer?buyerId=${buyerId}`);
  }

  /** RFQ creators (buyer-side users) in a department — auto-fills Personnel Involved. */
  getRfqCreatorsForDepartment(departmentId: number): Observable<any> {
    return this.invokeGetAPI(`${this.CAP_URL}/rfq-creators-for-department?departmentId=${departmentId}`);
  }

  /** Every RFQ creator for this buyer, each carrying their own department — pick the person on
   *  "Raise CAP" and their department auto-fills, rather than picking a department first. */
  getPersonnelForBuyer(buyerId: number): Observable<any> {
    return this.invokeGetAPI(`${this.CAP_URL}/personnel-for-buyer?buyerId=${buyerId}`);
  }

  /** Seeds the "Raise CAP" form from a rejected GRN line item — item, PO, GRN, buyer/supplier all pre-filled. */
  prefillCapFromGrnLine(grnLineItemId: number): Observable<any> {
    return this.invokeGetAPI(`${this.CAP_URL}/prefill-from-grn-line/${grnLineItemId}`);
  }

  /** Search behind "Link a rejected GRN line" — type a GRN number and/or a date window (Today /
   *  financial year / custom range), get back real, selectable rejected lines. from/to optional,
   *  inclusive ISO dates. */
  searchRejectedGrnLines(buyerId: number, q?: string, from?: string | null, to?: string | null): Observable<any> {
    const params = [`buyerId=${buyerId}`, q ? `q=${encodeURIComponent(q)}` : '',
      from ? `from=${from}` : '', to ? `to=${to}` : ''].filter(Boolean).join('&');
    return this.invokeGetAPI(`${this.CAP_URL}/rejected-grn-lines?${params}`);
  }

  getCap(id: number): Observable<any> {
    return this.invokeGetAPI(`${this.CAP_URL}/${id}`);
  }

  listCapsForBuyer(buyerId: number, status?: string | null): Observable<any> {
    const statusParam = status ? `&status=${status}` : '';
    return this.invokeGetAPI(`${this.CAP_URL}?buyerId=${buyerId}${statusParam}`);
  }

  listCapsForSupplier(supplierId: number, status?: string | null): Observable<any> {
    const statusParam = status ? `&status=${status}` : '';
    return this.invokeGetAPI(`${this.CAP_URL}/supplier?supplierId=${supplierId}${statusParam}`);
  }

  /** Return logistics (packed by / in-charge) or credit-debit note details — fillable any time
   *  after creation, since these are often only known later (accounts issues the credit note days
   *  after the CAP is raised). */
  updateCapDispositionDetails(capId: number, payload: any): Observable<any> {
    return this.invokePutAPI(`${this.CAP_URL}/${capId}/disposition-details`, payload);
  }

  /** Records a Quality re-inspection — informational only, never blocks anything else. */
  recordCapReinspection(capId: number, payload: any): Observable<any> {
    return this.invokePostAPI(`${this.CAP_URL}/${capId}/reinspection`, payload);
  }

  updateCapRootCause(capId: number, payload: any): Observable<any> {
    return this.invokePutAPI(`${this.CAP_URL}/${capId}/root-cause`, payload);
  }

  addCapAction(capId: number, payload: any): Observable<any> {
    return this.invokePostAPI(`${this.CAP_URL}/${capId}/actions`, payload);
  }

  updateCapAction(actionId: number, payload: any): Observable<any> {
    return this.invokePutAPI(`${this.CAP_URL}/actions/${actionId}`, payload);
  }

  /** Evidence is a file upload (multipart), so it bypasses invokePostAPI's JSON content type —
   *  same pattern as uploadSuperAdminLogo/uploadOrgAdminLogo above. */
  uploadCapEvidence(capId: number, file: File, actionId?: number | null, description?: string, uploadedByName?: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    if (actionId) formData.append('actionId', String(actionId));
    if (description) formData.append('description', description);
    if (uploadedByName) formData.append('uploadedByName', uploadedByName);
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + (localStorage.getItem('token') || '') });
    return this.http.post<any>(`${this.CAP_URL}/${capId}/evidence`, formData, { headers });
  }

  /** Direct download/inline-view URL for one evidence file — used as an <a>/<img> href, not fetched via HttpClient. */
  getCapEvidenceDownloadUrl(evidenceId: number): string {
    return `${this.CAP_URL}/evidence/${evidenceId}/download`;
  }

  submitCapForVerification(capId: number): Observable<any> {
    return this.invokePostAPI(`${this.CAP_URL}/${capId}/submit-verification`, {});
  }

  verifyCapEffectiveness(capId: number, payload: any): Observable<any> {
    return this.invokePostAPI(`${this.CAP_URL}/${capId}/verify`, payload);
  }

  closeCap(capId: number, payload: any): Observable<any> {
    return this.invokePostAPI(`${this.CAP_URL}/${capId}/close`, payload);
  }

  reopenCap(capId: number, payload: any): Observable<any> {
    return this.invokePostAPI(`${this.CAP_URL}/${capId}/reopen`, payload);
  }

  // ─────────────────────────────────────────────
  // PO Release ("call-off") APIs  –  /leadcapture/api/po-release
  // Tracks Total / Released / Received / Remaining for Blanket/Contract POs.
  // "Received" is delegated server-side to the existing GRN totals — never duplicated here.
  // ─────────────────────────────────────────────
  private PO_RELEASE_URL = environment.API_URL + 'leadcapture/api/po-release';

    createPORelease(payload: any): Observable<any> {
        console.log('%c[DataService] createPORelease', 'color: #4CAF50; font-weight:bold', payload);
        return this.invokePostAPI(this.PO_RELEASE_URL, payload);
    }

    issuePORelease(releaseId: number, releasedByName: string): Observable<any> {
        console.log('%c[ISSUE PO RELEASE]', 'color: #00aa00; font-weight: bold;', releaseId);
        return this.invokePutAPI(`${this.PO_RELEASE_URL}/${releaseId}/issue`, { releasedByName });
    }

    cancelPORelease(releaseId: number): Observable<any> {
        console.log('%c[CANCEL PO RELEASE]', 'color: #f44336; font-weight: bold;', releaseId);
        return this.invokePutAPI(`${this.PO_RELEASE_URL}/${releaseId}/cancel`, {});
    }

    getPOReleaseById(releaseId: number): Observable<any> {
        console.log('%c[GET PO RELEASE BY ID]', 'color: #0066cc;', releaseId);
        return this.invokeGetAPI(`${this.PO_RELEASE_URL}/${releaseId}`);
    }

    getPOReleasesByPO(poId: number): Observable<any> {
        console.log('%c[GET PO RELEASES BY PO]', 'color: #0066cc;', poId);
        return this.invokeGetAPI(`${this.PO_RELEASE_URL}/po/${poId}`);
    }

    getPOReleaseSummary(poId: number): Observable<any> {
        console.log('%c[GET PO RELEASE SUMMARY]', 'color: #0066cc;', poId);
        return this.invokeGetAPI(`${this.PO_RELEASE_URL}/po/${poId}/summary`);
    }

  // ─────────────────────────────────────────────
  // 3-Way Match APIs  –  /leadcapture/api/three-way-match
  // ─────────────────────────────────────────────
 private MATCH_URL = environment.API_URL + 'leadcapture/api/three-way-match';

    performThreeWayMatch(payload: {
        purchaseOrderId: number;
        grnId: number;
        invoiceId: number;
        tolerancePercentage?: number;
        performedByUserId?: number;
        performedByName?: string;
    }): Observable<any> {
        console.log('%c[PERFORM THREE-WAY MATCH]', 'color: #9C27B0; font-weight: bold;', payload);
        return this.invokePostAPI(`${this.MATCH_URL}/perform`, payload);
    }

    resolveMatch(matchId: number, payload: {
        resolution?: string;
        resolutionStatus?: string;
        resolutionRemarks?: string;
        resolvedByUserId: number;
        resolvedByName?: string;
        approvedPaymentAmount?: number;
    }): Observable<any> {
        console.log('%c[RESOLVE MATCH]', 'color: #9C27B0; font-weight: bold;', { matchId, payload });
        return this.invokePutAPI(`${this.MATCH_URL}/${matchId}/resolve`, payload);
    }

    getMatchById(matchId: number): Observable<any> {
        console.log('%c[GET MATCH BY ID]', 'color: #0066cc;', matchId);
        return this.invokeGetAPI(`${this.MATCH_URL}/${matchId}`);
    }

    getMatchesByInvoice(invoiceId: number): Observable<any> {
        console.log('%c[GET MATCHES BY INVOICE]', 'color: #0066cc;', invoiceId);
        return this.invokeGetAPI(`${this.MATCH_URL}/invoice/${invoiceId}`);
    }

    getLatestMatch(invoiceId: number): Observable<any> {
       console.log('%c[GET LATEST MATCH]', 'color: #0066cc;', invoiceId);
        return this.invokeGetAPI(`${this.MATCH_URL}/invoice/${invoiceId}/latest`);
    }

    getMatchesByPO(poId: number): Observable<any> {
       console.log('%c[GET MATCHES BY PO]', 'color: #0066cc;', poId);
        return this.invokeGetAPI(`${this.MATCH_URL}/po/${poId}`);
    }

    getPendingMatchResolutions(): Observable<any> {
      console.log('%c[GET PENDING MATCH RESOLUTIONS]', 'color: #0066cc;');
        return this.invokeGetAPI(`${this.MATCH_URL}/pending`);
    }

    
       private BASE =   `${environment.API_URL}leadcapture`;
     // private BASE = environment.API_URL + 'leadcapture';

    private getBlobAPI(url: string): Observable<Blob> {
        return this.http.get(url, {
            headers: this.blobHeaders(),
            responseType: 'blob'
        }).pipe(
            catchError((error: any) => {
                console.error('%c[REPORT DOWNLOAD ERROR]', 'color: #cc0000;', url, error);
                return throwError(() => error);
            })
        );
    }
 
    // ── RFQ Reports ──────────────────────────────────────────────────────────
 
    /** Full RFQ summary as Excel — 4 sheets: Overview, Items, Suppliers, Approval History */
    getRFQSummaryExcel(rfqId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/rfq/${rfqId}/excel`);
       // return this.getBlobAPI(`http://localhost:9092/leadcapture/api/reports/rfq/${rfqId}/excel`);
    }

// getRFQSummaryExcels(rfqId: number, userId?: number | null): Observable<Blob> {
//     if (!userId) {
//         // Normal buyer download — no hierarchy sheet
//         return this.getBlobAPI(`${this.BASE}/api/reports/rfq/${rfqId}/excel`);
//     }
 
//     // Hierarchy user download — pass all info as URL params so backend
//     // can build the "Hierarchy Approval View" sheet without querying User model
//     const levelOrder  = localStorage.getItem('hierarchyLevelOrder') || '';
//     const levelName   = encodeURIComponent(localStorage.getItem('hierarchyLevelName') || '');
//     const viewerName  = encodeURIComponent(localStorage.getItem('fullName') || '');
//     const viewerEmail = encodeURIComponent(
//         localStorage.getItem('email') || localStorage.getItem('username') || ''
//     );
 
//     const params = `?userId=${userId}&levelOrder=${levelOrder}&levelName=${levelName}&viewerName=${viewerName}&viewerEmail=${viewerEmail}`;
//     return this.getBlobAPI(`${this.BASE}/api/reports/rfq/${rfqId}/excel${params}`);
// }

getRFQSummaryExcels(rfqId: number, userId?: number | null): Observable<Blob> {
    if (!userId) {
        // No hierarchy params → buyer download (12 sheets)
        return this.getBlobAPI(`${this.BASE}/api/reports/rfq/${rfqId}/excel`);
    }
 
    // Hierarchy user → pass all info from localStorage as URL params
    // Backend will generate 4 sheets only with rich Approval History
    const levelOrder  = localStorage.getItem('hierarchyLevelOrder') || '';
    const levelName   = encodeURIComponent(localStorage.getItem('hierarchyLevelName') || '');
    const viewerName  = encodeURIComponent(localStorage.getItem('fullName') || '');
    const viewerEmail = encodeURIComponent(
        localStorage.getItem('email') || localStorage.getItem('username') || ''
    );
 
    const params = `?userId=${userId}&levelOrder=${levelOrder}&levelName=${levelName}&viewerName=${viewerName}&viewerEmail=${viewerEmail}`;
    return this.getBlobAPI(`${this.BASE}/api/reports/rfq/${rfqId}/excel${params}`);
}
 
    /** Full RFQ summary as PDF — branded, printable */
    getRFQSummaryPDF(rfqId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/rfq/${rfqId}/pdf`);
        //return this.getBlobAPI(`http://localhost:9092/leadcapture/api/reports/rfq/${rfqId}/pdf`);
    }
 
    /** All RFQs for a buyer as Excel — with stats header row, auto-filter */
    getRFQListExcel(buyerId: number, status: string = 'ALL'): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/rfq/list/excel?buyerId=${buyerId}&status=${status}`);
    }
 
    /** Side-by-side quote comparison as Excel — lowest bid highlighted in green */
    getQuoteComparisonExcel(rfqId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/rfq/${rfqId}/quote-comparison/excel`);
    }
 
    /** Side-by-side quote comparison as PDF */
    getQuoteComparisonPDF(rfqId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/rfq/${rfqId}/quote-comparison/pdf`);
    }
 
    // ── PO Reports ───────────────────────────────────────────────────────────
 
    /** PO summary as Excel */
    getPOSummaryExcel(poId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/po/${poId}/excel`);
    }
 
    /** PO summary as PDF */
    getPOSummaryPDF(poId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/po/${poId}/pdf`);
    }

    /** PO as a cXML 1.2.038 PurchaseOrderRequest document (for supplier procurement systems) */
    getPOCxml(poId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/po/${poId}/cxml`);
    }
 
    /** Full PO list for a buyer as Excel */
    getPOListExcel(buyerId: number, status: string = 'ALL'): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/po/list/excel?buyerId=${buyerId}&status=${status}`);
    }
 
    // ── Invoice Reports ──────────────────────────────────────────────────────
 
    /** Single invoice as PDF */
    getInvoicePDF(invoiceId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/invoice/${invoiceId}/pdf`);
    }
 
    /** Single invoice as Excel */
    getInvoiceExcel(invoiceId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/invoice/${invoiceId}/excel`);
    }
 
    /** Full invoice list for a buyer as Excel */
    getInvoiceListExcel(buyerId: number, status: string = 'ALL'): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/invoice/list/excel?buyerId=${buyerId}&status=${status}`);
    }
 
    // ── GRN Reports ──────────────────────────────────────────────────────────
 

 
    // ── QA Reports ───────────────────────────────────────────────────────────
 
    /** QA inspection report as PDF */
    getQAReportPDF(qaId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/qa/${qaId}/pdf`);
    }
 
    /** QA inspection report as Excel */
    getQAReportExcel(qaId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/qa/${qaId}/excel`);
    }
 
 
    // =========================================================================
    //  ✅ UTILITY: Save blob as browser file download
    // =========================================================================
 
    /**
     * Triggers a browser file download from a Blob.
     *
     * Usage:
     *   this.dataService.getRFQSummaryExcel(rfqId).subscribe({
     *     next: blob => this.dataService.saveBlob(blob, 'RFQ_Summary.xlsx'),
     *     error: () => alert('Download failed')
     *   });
     */
    saveBlob(blob: Blob, filename: string): void {
        const url  = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href     = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }
 
    /** Returns today as YYYY-MM-DD — handy for report filenames */
    todayStr(): string {
        return new Date().toISOString().slice(0, 10);
    }

      getSupplierRFQListExcel(supplierId: number, status: string = 'ALL'): Observable<Blob> {
        const url = `${environment.API_URL}leadcapture/api/reports/supplier/rfq/list/excel?supplierId=${supplierId}&status=${status}`;
        return this.http.get(url, {
            headers: this.blobHeaders(),
            responseType: 'blob'
        }).pipe(
            catchError((error: any) => {
                console.error('%c[SUPPLIER RFQ REPORT ERROR]', 'color: #cc0000;', url, error);
                return throwError(() => error);
            })
        );
    }
 
    /**
     * Download all POs for a supplier as Excel
     * GET /api/reports/supplier/po/list/excel?supplierId=&status=
     */
    getSupplierPOListExcel(supplierId: number, status: string = 'ALL'): Observable<Blob> {
        const url = `${environment.API_URL}leadcapture/api/reports/supplier/po/list/excel?supplierId=${supplierId}&status=${status}`;
        return this.http.get(url, {
            headers: this.blobHeaders(),
            responseType: 'blob'
        }).pipe(
            catchError((error: any) => {
                console.error('%c[SUPPLIER PO REPORT ERROR]', 'color: #cc0000;', url, error);
                return throwError(() => error);
            })
        );
    }
 
    /**
     * Download all Invoices for a supplier as Excel
     * GET /api/reports/supplier/invoice/list/excel?supplierId=&status=
     */
    getSupplierInvoiceListExcel(supplierId: number, status: string = 'ALL'): Observable<Blob> {
        const url = `${environment.API_URL}leadcapture/api/reports/supplier/invoice/list/excel?supplierId=${supplierId}&status=${status}`;
        return this.http.get(url, {
            headers: this.blobHeaders(),
            responseType: 'blob'
        }).pipe(
            catchError((error: any) => {
                console.error('%c[SUPPLIER INVOICE REPORT ERROR]', 'color: #cc0000;', url, error);
                return throwError(() => error);
            })
        );
    }

        getRFQSummaryExcelForSupplier(rfqId: number): Observable<Blob> {
        return this.http.get(`${environment.API_URL}leadcapture/api/reports/rfq/${rfqId}/excel/supplier`, {
            headers: this.blobHeaders(),
            responseType: 'blob'
        }).pipe(
            catchError((error: any) => {
                console.error('%c[SUPPLIER RFQ REPORT ERROR]', 'color: #cc0000;', error);
                return throwError(() => error);
            })
        );
    }

       getGRNReportExcel(grnId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/grn/${grnId}/excel`);
    }
 
    /** Single GRN as PDF */
    getGRNReportPDF(grnId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/grn/${grnId}/pdf`);
    }
 
    // ── 3-Way Match Reports ───────────────────────────────────────────────────
 
    /** Single 3-Way Match as Excel (2 sheets: Match Summary + Line Results) */
    getThreeWayMatchExcel(matchId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/three-way-match/${matchId}/excel`);
    }
 
    /** Single 3-Way Match as PDF */
    getThreeWayMatchPDF(matchId: number): Observable<Blob> {
        return this.getBlobAPI(`${this.BASE}/api/reports/three-way-match/${matchId}/pdf`);
    }

        getPOsByRFQ(rfqId: number): Observable<any> {
        console.log('%c[GET POs BY RFQ]', 'color: #0066cc;', rfqId);
        return this.invokeGetAPI(`${this.BASE}/api/purchase-orders/rfq/${rfqId}`);
    }

// ==================== SUPPLIER APPROVAL APIs ====================

/**
 * Get pending supplier approvals for a user
 * GET /api/supplier-approval/pending/user/{userId}
 */
getPendingSupplierApprovalsForUser(userId: number): Observable<any> {
 // const url = environment.API_URL + `leadcapture/api/supplier-approval/pending/user/${userId}`;
  const url = `${environment.API_URL}leadcapture/api/supplier-approval/pending/user/${userId}`;
  console.log('%c[GET PENDING SUPPLIER APPROVALS]', 'color: #6a1b9a;', userId);
  return this.invokeGetAPI(url).pipe(
    map((response: any) => {
      if (response?.success === true && Array.isArray(response.data)) {
        return { success: true, data: response.data };
      } else if (Array.isArray(response)) {
        return { success: true, data: response };
      }
      return { success: true, data: [] };
    }),
    catchError((error: any) => {
      console.error('%c[PENDING SUPPLIER APPROVALS ERROR]', 'color: #cc0000;', error);
      return of({ success: true, data: [] });
    })
  );
}

/**
 * Get pending supplier approval count for a user
 * GET /api/supplier-approval/pending/user/{userId}/count
 */
getPendingSupplierApprovalCount(userId: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/supplier-approval/pending/user/${userId}/count`;
  //const url = environment.API_URL + `leadcapture/api/supplier-approval/pending/user/${userId}/count`;
  return this.invokeGetAPI(url).pipe(
    map((response: any) => {
      let count = 0;
      if (response && typeof response.data === 'number') count = response.data;
      else if (response && typeof response.count === 'number') count = response.count;
      else if (typeof response === 'number') count = response;
      return { success: true, pendingCount: count };
    }),
    catchError(() => of({ success: false, pendingCount: 0 }))
  );
}

/**
 * Get hold supplier approvals for a user
 * GET /api/supplier-approval/hold/user/{userId}
 */
getHoldSupplierApprovalsForUser(userId: number): Observable<any> {
 // const url = environment.API_URL + `leadcapture/api/supplier-approval/hold/user/${userId}`;
  const url = `${environment.API_URL}leadcapture/api/supplier-approval/hold/user/${userId}`;
  return this.invokeGetAPI(url).pipe(
    map((response: any) => {
      if (response?.success === true && Array.isArray(response.data)) {
        return { success: true, data: response.data };
      } else if (Array.isArray(response)) {
        return { success: true, data: response };
      }
      return { success: true, data: [] };
    }),
    catchError(() => of({ success: true, data: [] }))
  );
}

/**
 * Get hold supplier approval count for a user
 * GET /api/supplier-approval/hold/user/{userId}/count
 */
getHoldSupplierApprovalCount(userId: number): Observable<any> {
  const url =`${environment.API_URL}leadcapture/api/supplier-approval/hold/user/${userId}/count`;
//  const url = environment.API_URL + `leadcapture/api/supplier-approval/hold/user/${userId}/count`;
  return this.invokeGetAPI(url).pipe(
    map((response: any) => {
      let count = 0;
      if (response && typeof response.data === 'number') count = response.data;
      else if (response && typeof response.holdCount === 'number') count = response.holdCount;
      else if (typeof response === 'number') count = response;
      return { success: true, holdCount: count };
    }),
    catchError(() => of({ success: false, holdCount: 0 }))
  );
}

/**
 * Approve supplier at current level
 * POST /api/supplier-approval/approve
 */
approveSupplier(supplierId: number, approverId: number, comments: string): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/supplier-approval/approve`;
 // const url = environment.API_URL + 'leadcapture/api/supplier-approval/approve';
  return this.invokePostAPI(url, { supplierId, approverId, comments: comments || 'Approved' });
}

/**
 * Reject supplier permanently
 * POST /api/supplier-approval/reject
 */
rejectSupplier(supplierId: number, rejectorId: number, rejectRemarks: string): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/supplier-approval/reject`;
  //const url = environment.API_URL + 'leadcapture/api/supplier-approval/reject';
  return this.invokePostAPI(url, { supplierId, rejectorId, rejectRemarks });
}

/**
 * Hold supplier approval
 * POST /api/supplier-approval/hold
 */
holdSupplier(supplierId: number, holderId: number, holdRemarks: string): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/supplier-approval/hold`;
 // const url = environment.API_URL + 'leadcapture/api/supplier-approval/hold';
  return this.invokePostAPI(url, { supplierId, holderId, holdRemarks });
}

/**
 * Release supplier hold
 * POST /api/supplier-approval/release-hold
 */
releaseSupplierHold(supplierId: number, releaserId: number, releaseRemarks: string): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/supplier-approval/release-hold`;
  //const url = environment.API_URL + 'leadcapture/api/supplier-approval/release-hold';
  return this.invokePostAPI(url, { supplierId, releaserId, releaseRemarks });
}

/**
 * Check if user is last approver for supplier
 * GET /api/supplier-approval/is-last-approver/{supplierId}/{userId}
 */
isLastSupplierApprover(supplierId: number, userId: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/supplier-approval/is-last-approver/${supplierId}/${userId}`;
 // const url = environment.API_URL + `leadcapture/api/supplier-approval/is-last-approver/${supplierId}/${userId}`;
  return this.invokeGetAPI(url);
}

/**
 * Initiate supplier approval workflow
 * POST /api/supplier-approval/initiate
 */
initiateSupplierApproval(supplierId: number, companyName: string): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/supplier-approval/initiate`;
 // const url = environment.API_URL + 'leadcapture/api/supplier-approval/initiate';
  return this.invokePostAPI(url, { supplierId, companyName });
}
getSupplierById(supplierId: number): Observable<any> {
  const url = `${environment.API_URL}leadcapture/api/supplier/${supplierId}`;
  // const url = environment.API_URL + `leadcapture/api/supplier/${supplierId}`;
  return this.invokeGetAPI(url).pipe(
    catchError((error: any) => {
      console.error('[GET SUPPLIER BY ID ERROR]', error);
      return throwError(() => error);
    })
  );
}

  requestMoreInfoFromSupplier(
  supplierId: number,
  requesterId: number,
  infoRequest: string
): Observable<any> {

  const url = `${environment.API_URL}leadcapture/api/supplier-approval/need-more-info`;

  return this.invokePostAPI(url, {
    supplierId,
    requesterId,
    infoRequest
  });
}


  // =========================================================================
  // FINANCE PO APPLICATION — manual PO, release, closure, payment, audit
  // =========================================================================
  //
  // Every write below sends X-USER-* identity headers alongside the bearer token.
  // The backend records the audit actor from THOSE headers rather than from the
  // request body, so the trail always names the signed-in user and never whichever
  // name a form happened to contain. The token still does the authenticating —
  // these headers only carry display identity for the audit row.

  private auditHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization':  'Bearer ' + (localStorage.getItem('token') || ''),
      'Content-Type':   'application/json',
      'X-USER-ID':      localStorage.getItem('userId')      || '',
      'X-USER-EMAIL':   localStorage.getItem('email')       || '',
      'X-USER-NAME':    localStorage.getItem('fullName')    || '',
      'X-USER-ROLE':    localStorage.getItem('role')        || '',
      'X-COMPANY-NAME': localStorage.getItem('companyName') || ''
    });
  }

  // ── PO: create / edit ────────────────────────────────────────────────────

  /** Creates a PO the Admin typed in by hand. Always lands in DRAFT. */
  createManualPO(payload: any): Observable<any> {
    const url = `${environment.API_URL}leadcapture/api/purchase-order/manual`;
    return this.http.post<any>(url, payload, { headers: this.auditHeaders() });
  }

  /** Edits a DRAFT or RETURNED_FOR_REVISION PO. Rejected by the API in any other status. */
  updateManualPO(poId: number, payload: any): Observable<any> {
    const url = `${environment.API_URL}leadcapture/api/purchase-order/manual/${poId}`;
    return this.http.put<any>(url, payload, { headers: this.auditHeaders() });
  }

  // ── PO: lifecycle ────────────────────────────────────────────────────────

  submitPOForApproval(poId: number): Observable<any> {
    const url = `${environment.API_URL}leadcapture/api/purchase-order/${poId}/submit-approval`;
    return this.http.post<any>(url, {}, { headers: this.auditHeaders() });
  }

  /** Releases an APPROVED PO — this is what makes it visible to the supplier. */
  releasePO(poId: number, remarks: string = ''): Observable<any> {
    const url = `${environment.API_URL}leadcapture/api/purchase-order/${poId}/release`;
    return this.http.post<any>(url, { remarks }, { headers: this.auditHeaders() });
  }

  /**
   * Closes a completed PO. `force` is needed only when payment is still outstanding —
   * the API refuses otherwise, because closing stops the supplier invoicing further.
   */
  closePO(poId: number, remarks: string = '', force: boolean = false): Observable<any> {
    const url = `${environment.API_URL}leadcapture/api/purchase-order/${poId}/close`;
    return this.http.post<any>(url, { remarks, force }, { headers: this.auditHeaders() });
  }

  /** Closes a PO early. The API requires a non-empty reason. */
  foreclosePO(poId: number, reason: string): Observable<any> {
    const url = `${environment.API_URL}leadcapture/api/purchase-order/${poId}/foreclose`;
    return this.http.post<any>(url, { reason }, { headers: this.auditHeaders() });
  }

  /** Records delivered quantities. `quantities` is keyed by PO line-item id. */
  updateSuppliedQuantities(poId: number, quantities: Record<number, number>): Observable<any> {
    const url = `${environment.API_URL}leadcapture/api/purchase-order/${poId}/supplied-quantities`;
    return this.http.put<any>(url, { quantities }, { headers: this.auditHeaders() });
  }

  /** PO plus its full audit timeline — backs the Status Tracking screen. */
  getPOStatusTimeline(poId: number): Observable<any> {
    const url = `${environment.API_URL}leadcapture/api/purchase-order/${poId}/status-timeline`;
    return this.http.get<any>(url, { headers: this.headers() });
  }

  /** Every PO in the system, for the Admin's PO list. */
  getAllPurchaseOrders(): Observable<any> {
    const url = `${environment.API_URL}leadcapture/api/purchase-order`;
    return this.http.get<any>(url, { headers: this.headers() });
  }

  // ── Audit trail ──────────────────────────────────────────────────────────

  /**
   * Filtered, paged audit search. Any filter may be omitted.
   * Server caps page size at 500 regardless of what is asked for.
   */
  getAuditLogs(filters: {
    companyName?: string; entityType?: string; entityId?: number;
    action?: string; actorEmail?: string;
    fromDate?: string; toDate?: string;
    page?: number; size?: number;
  } = {}): Observable<any> {
    const params: string[] = [];
    Object.entries(filters).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') {
        params.push(`${k}=${encodeURIComponent(String(v))}`);
      }
    });
    const query = params.length ? `?${params.join('&')}` : '';
    const url = `${environment.API_URL}leadcapture/api/audit${query}`;
    return this.http.get<any>(url, { headers: this.headers() });
  }

  /** The complete history of one record — the audit panel on PO and invoice screens. */
  getAuditTrailForEntity(entityType: string, entityId: number): Observable<any> {
    const url = `${environment.API_URL}leadcapture/api/audit/entity/${entityType}/${entityId}`;
    return this.http.get<any>(url, { headers: this.headers() });
  }

  // ── Supporting lookups for the PO form ───────────────────────────────────

  getAllSuppliersForPO(): Observable<any> {
    const url = `${environment.API_URL}leadcapture/api/supplier`;
    return this.http.get<any>(url, { headers: this.headers() });
  }

  getAllBuyersForPO(): Observable<any> {
    const url = `${environment.API_URL}leadcapture/api/buyer`;
    return this.http.get<any>(url, { headers: this.headers() });
  }

  getLocationsForBuyer(buyerId: number): Observable<any> {
    const url = `${environment.API_URL}leadcapture/api/location/buyer/${buyerId}`;
    return this.http.get<any>(url, { headers: this.headers() });
  }

  getDepartmentsForLocation(locationId: number): Observable<any> {
    const url = `${environment.API_URL}leadcapture/api/department/location/${locationId}`;
    return this.http.get<any>(url, { headers: this.headers() });
  }
}
