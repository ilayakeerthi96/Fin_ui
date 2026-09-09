import { Routes } from '@angular/router';

/**
 * Routing for the Finance PO application.
 *
 * Scope: PO creation → PO release → supplier PO access → supplier invoice → invoice
 * approval → payment tracking → mark as paid → PO closure. PO approval is currently
 * auto-cleared on submit (see POApprovalService.APPROVAL_WORKFLOW_ENABLED) — there is no
 * approver step in the live flow, though the screens and roles below still exist dormant.
 *
 * Two internal roles now split what used to be one Admin doing everything:
 *   ORGANIZATION_ADMIN     — creates/manages every login (Approver Users, Approval Levels,
 *                             Reporting Structure, Approval Configuration), Reports, Audit Log.
 *   PROCUREMENT_OPERATOR   — a hierarchy login (level "Procurement Operations", distinct from
 *                             the approver level "PROCUREMENT") that runs every operational
 *                             screen day-to-day: PO Management, Invoice Management, Payment
 *                             Tracking, Status Tracking, Supplier Management. Created by the
 *                             Admin from Approver Users the same way any hierarchy login is.
 *
 * Routes for every out-of-scope module have been removed, not merely hidden from the menu:
 * RFQ creation, quotations, quote comparison, comparison statement, supplier selection,
 * negotiation, evaluation criteria, Q&A library, registration questionnaires, risk
 * questionnaires, the supplier risk board, the Super Admin dashboard, Buyer Companies
 * (single-buyer app — nothing left to register), and the modules outside the new scope
 * (contracts, legal, RFI, ASN, GRN, 3-way match, service entry sheets, service calendar,
 * budget management, corrective actions, meetings, chat).
 *
 * Removing the menu entry alone would have left every one of those URLs working for anyone
 * who typed or bookmarked it. With the route gone they fall through to the wildcard and
 * land on 404. The component files still exist on disk pending a separate cleanup pass —
 * they are simply no longer part of the compiled route graph, so Angular never loads them.
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout').then(m => m.DefaultLayoutComponent),
    data: { title: 'Home' },
    children: [
      {
        path: '',
        redirectTo: 'hierarchy-dashboard',
        pathMatch: 'full'
      },

      // ==================================================================
      // DASHBOARDS
      // ==================================================================
      {
        path: 'orgadmin-dashboard',
        loadComponent: () =>
          import('./views/base/orgadmin-dashboard/orgadmin-dashboard.component')
            .then(m => m.OrgAdminDashboardComponent),
        data: {
          title: 'Admin Dashboard',
          roles: ['ORGANIZATION_ADMIN']
        }
      },
      {
        path: 'hierarchy-dashboard',
        loadComponent: () =>
          import('./views/base/hierarchy-dashboard/hierarchy-dashboard.component')
            .then(m => m.HierarchyDashboardComponent),
        data: {
          title: 'Dashboard',
          roles: ['CEO', 'COO', 'MANAGER', 'PROCUREMENT', 'FINANCE', 'ADMIN']
        }
      },
      {
        path: 'supplier-dashboard',
        loadComponent: () =>
          import('./views/base/supplier-dashboard/supplier-dashboard.component')
            .then(m => m.SupplierDashboardComponent),
        data: {
          title: 'Supplier Dashboard',
          roles: ['ROLE_SUPPLIER']
        }
      },
      {
        path: 'supplier-reports',
        loadComponent: () =>
          import('./views/base/supplier-reports/supplier-reports.component')
            .then(m => m.SupplierReportsComponent),
        data: {
          title: 'Reports',
          roles: ['ROLE_SUPPLIER']
        }
      },

      // ==================================================================
      // PO MANAGEMENT
      // ==================================================================
      {
        path: 'po-list',
        loadComponent: () =>
          import('./views/base/po-list/po-list.component')
            .then(m => m.POListComponent),
        data: {
          title: 'Purchase Orders',
          roles: ['PROCUREMENT_OPERATOR', 'ROLE_SUPPLIER']
        }
      },
      {
        path: 'po-create',
        loadComponent: () =>
          import('./views/base/po-create/po-create.component')
            .then(m => m.PoCreateComponent),
        data: {
          title: 'Create Purchase Order',
          roles: ['PROCUREMENT_OPERATOR']
        }
      },
      {
        path: 'po-edit/:id',
        loadComponent: () =>
          import('./views/base/po-create/po-create.component')
            .then(m => m.PoCreateComponent),
        data: {
          title: 'Edit Purchase Order',
          roles: ['PROCUREMENT_OPERATOR']
        }
      },
      {
        path: 'po-details/:id',
        loadComponent: () =>
          import('./views/base/po-details/po-details.component')
            .then(m => m.PODetailsComponent),
        data: {
          title: 'Purchase Order Details',
          roles: ['PROCUREMENT_OPERATOR', 'ROLE_SUPPLIER', 'CEO', 'COO', 'MANAGER', 'PROCUREMENT', 'FINANCE']
        }
      },
      {
        path: 'po-closure',
        loadComponent: () =>
          import('./views/base/po-closure/po-closure.component')
            .then(m => m.PoClosureComponent),
        data: {
          title: 'PO Closure',
          roles: ['PROCUREMENT_OPERATOR']
        }
      },

      // ==================================================================
      // APPROVALS — PO only
      // ==================================================================
      {
        path: 'pending-approvals',
        loadChildren: () =>
          import('./views/base/pending-approvals/routes').then(m => m.routes),
        data: {
          roles: ['ORGANIZATION_ADMIN', 'CEO', 'COO', 'PROCUREMENT', 'MANAGER', 'FINANCE', 'ADMIN']
        }
      },

      // ==================================================================
      // INVOICES & PAYMENT
      // ==================================================================
      {
        path: 'invoices',
        loadComponent: () =>
          import('./views/base/buyer-invoices/buyer-invoices.component')
            .then(m => m.BuyerInvoicesComponent),
        data: {
          title: 'Invoice Management',
          roles: ['PROCUREMENT_OPERATOR']
        }
      },
      {
        path: 'payment-tracking',
        loadComponent: () =>
          import('./views/base/payment-tracking/payment-tracking.component')
            .then(m => m.PaymentTrackingComponent),
        data: {
          title: 'Payment Tracking',
          roles: ['PROCUREMENT_OPERATOR']
        }
      },
      {
        path: 'status-tracking',
        loadComponent: () =>
          import('./views/base/status-tracking/status-tracking.component')
            .then(m => m.StatusTrackingComponent),
        data: {
          title: 'Status Tracking',
          roles: ['PROCUREMENT_OPERATOR']
        }
      },

      // ==================================================================
      // MASTER DATA & USERS
      // ==================================================================
      {
        path: 'create-s',
        loadChildren: () =>
          import('./views/base/create-s/routes').then(m => m.routes),
        data: { roles: ['PROCUREMENT_OPERATOR'] }
      },
      // 'create-b' (Buyer Companies) route removed — this is a single-buyer app, so there is
      // nothing left to register. The component files stay on disk; only the route is gone.
      // 'hierarchy-levels', 'reporting-structure' and 'approval-flow-config' routes removed —
      // all three are specific to the approval hierarchy, and there is no approval step left
      // to configure (see PurchaseOrder.isReleasable()). Component files stay on disk.
      {
        path: 'hierarchy-users',
        loadComponent: () =>
          import('./views/base/hierarchy-users/hierarchy-user-management.component')
            .then(m => m.HierarchyUserManagementComponent),
        data: {
          title: 'Manage Users',
          roles: ['ORGANIZATION_ADMIN']
        }
      },

      // ==================================================================
      // REPORTS & AUDIT
      // ==================================================================
      {
        path: 'spend-analysis',
        loadComponent: () =>
          import('./views/base/spend-analysis/spend-analysis.component')
            .then(m => m.SpendAnalysisComponent),
        data: {
          title: 'Reports',
          roles: ['ORGANIZATION_ADMIN', 'PROCUREMENT_OPERATOR']
        }
      },
      {
        path: 'audit-log',
        loadComponent: () =>
          import('./views/base/audit-log/audit-log.component')
            .then(m => m.AuditLogComponent),
        data: {
          title: 'Audit Log',
          roles: ['ORGANIZATION_ADMIN', 'PROCUREMENT_OPERATOR']
        }
      },

      // ==================================================================
      // ACCOUNT
      // ==================================================================
      {
        path: 'change-password',
        loadComponent: () =>
          import('./views/base/change-password/change-password.component')
            .then(m => m.ChangePasswordComponent),
        data: { title: 'Change Password' }
      }
    ]
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./views/pages/login/login.component')
        .then(m => m.LoginComponent),
    data: { title: 'Login Page' }
  },
  // "Forgot password" lives as a modal directly on the login page (see login.component.ts's
  // fpStep state machine) — no separate route needed.
  //
  // The public /register route for supplier self-registration has been removed: suppliers
  // are created by the Admin, and its gateway allowlist entries went with it.
  {
    path: '404',
    loadComponent: () =>
      import('./views/pages/page404/page404.component')
        .then(m => m.Page404Component),
    data: { title: 'Page Not Found' }
  },
  {
    path: '500',
    loadComponent: () =>
      import('./views/pages/page500/page500.component')
        .then(m => m.Page500Component),
    data: { title: 'Server Error' }
  },
  { path: '**', redirectTo: '404' }
];
