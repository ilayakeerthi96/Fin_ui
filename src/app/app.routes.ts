 import { Routes } from '@angular/router';

  export const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
  {
    path: 'register',
    loadComponent: () =>
      import('./views/pages/supplier-register/supplier-register.component')
        .then(m => m.SupplierRegisterComponent),
    data: { title: 'Supplier Registration' }
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
        // ✅ NEW: Legal Team dashboard — contracts only, no RFQ/PO/Supplier overview
        {
          path: 'legal-dashboard',
          loadComponent: () =>
            import('./views/base/legal-dashboard/legal-dashboard.component')
              .then(m => m.LegalDashboardComponent),
          data: {
            title: 'Legal Dashboard',
            roles: ['LEGAL']
          }
        },
        {
          path: 'change-password',
          loadComponent: () =>
            import('./views/base/change-password/change-password.component')
              .then(m => m.ChangePasswordComponent),
          data: { title: 'Change Password' }
        },
        {
          path: 'superadmin-dashboard',
          loadComponent: () =>
            import('./views/base/superadmin-dashboard/superadmin-dashboard.component')
              .then(m => m.SuperAdminDashboardComponent),
          data: {
            title: 'Super Admin Dashboard',
            roles: ['SUPER_ADMIN']
          }
        },
        {
          path: 'orgadmin-dashboard',
          loadComponent: () =>
            import('./views/base/orgadmin-dashboard/orgadmin-dashboard.component')
              .then(m => m.OrgAdminDashboardComponent),
          data: {
            title: 'Organization Admin Dashboard',
            roles: ['ORGANIZATION_ADMIN']
          }
        },
        {
          path: 'hierarchy-levels',
          loadComponent: () =>
            import('./views/base/hierarchy-levels/hierarchy-level-management.component')
              .then(m => m.HierarchyLevelManagementComponent),
          data: {
            title: 'Hierarchy Levels',
            roles: ['ORGANIZATION_ADMIN']
          }
        },
        {
          path: 'hierarchy-users',
          loadComponent: () =>
            import('./views/base/hierarchy-users/hierarchy-user-management.component')
              .then(m => m.HierarchyUserManagementComponent),
          data: {
            title: 'Hierarchy Users',
            roles: ['ORGANIZATION_ADMIN']
          }
        },
        {
          path: 'reporting-structure',
          loadComponent: () =>
            import('./views/base/reporting-structure/reporting-structure.component')
              .then(m => m.ReportingStructureComponent),
          data: {
            title: 'Reporting Structure',
            roles: ['ORGANIZATION_ADMIN']
          }
        },
        {
          path: 'approval-flow-config',
          loadComponent: () =>
            import('./views/base/approval-flow-config/approval-flow-config.component')
              .then(m => m.ApprovalFlowConfigComponent),
          data: {
            title: 'Approval Configuration',
            roles: ['ORGANIZATION_ADMIN']
          }
        },

        {
          path: 'supplier-dashboard',
          loadComponent: () =>
            import('./views/base/supplier-dashboard/supplier-dashboard.component').then(m => m.SupplierDashboardComponent),
          data: {
            title: 'Supplier Dashboard',
            roles: ['ROLE_SUPPLIER']
          }
        },
        {
          path: 'dashboard',
          loadChildren: () =>
            import('./views/base/dashboard/routes').then(m => m.routes),
          data: {
            roles: ['ADMIN', 'CEO', 'COO', 'PROCUREMENT', 'FINANCE']
          }
        },
        {
          path: 'lead-create',
          loadChildren: () =>
            import('./views/base/lead-create/routes').then(m => m.routes),
          data: {
            roles: ['ADMIN', 'CEO', 'COO', 'PROCUREMENT', 'FINANCE']
          }
        },
        {
          path: 'pending-approvals',
          loadChildren: () =>
            import('./views/base/pending-approvals/routes').then(m => m.routes),
          data: {
            roles: ['CEO', 'COO', 'PROCUREMENT', 'MANAGER', 'ADMIN']
          }
        },
        { path: 'ceo-dashboard', redirectTo: 'hierarchy-dashboard', pathMatch: 'full' },
        { path: 'coo-dashboard', redirectTo: 'hierarchy-dashboard', pathMatch: 'full' },
        { path: 'procurement-dashboard', redirectTo: 'hierarchy-dashboard', pathMatch: 'full' },
        { path: 'manager-dashboard', redirectTo: 'hierarchy-dashboard', pathMatch: 'full' },

        // ✅ NEW: Finance Dashboard (Budget Management module for FINANCE users)
        {
          path: 'finance-dashboard',
          loadComponent: () =>
            import('./views/base/finance-dashboard/finance-dashboard.component')
              .then(m => m.FinanceDashboardComponent),
          data: {
            title: 'Finance Dashboard',
            roles: ['FINANCE']
          }
        },

        // ✅ NEW: Budget Dashboard for RFQ Creators (buyers)
        {
          path: 'budget-dashboard',
          loadComponent: () =>
            import('./views/base/budget-dashboard/budget-dashboard.component')
              .then(m => m.BudgetDashboardComponent),
          data: {
            title: 'My Department Budget',
            roles: ['ROLE_BUYER']
          }
        },

        // ✅ NEW: Budget Increase Request (RFQ creator, when RFQ exceeds budget)
        {
          path: 'budget-increase-request/:rfqId',
          loadComponent: () =>
            import('./views/base/budget-increase-request/budget-increase-request.component')
              .then(m => m.BudgetIncreaseRequestComponent),
          data: {
            title: 'Request Budget Increase',
            roles: ['ROLE_BUYER']
          }
        },

        // ✅ NEW: Budget Increase Request from a PO (when PO amount exceeds budget)
        {
          path: 'budget-increase-request-po/:poId',
          loadComponent: () =>
            import('./views/base/budget-increase-request/budget-increase-request.component')
              .then(m => m.BudgetIncreaseRequestComponent),
          data: {
            title: 'Request Budget Increase',
            roles: ['ROLE_BUYER']
          }
        },

        // ✅ NEW: Budget Increase Approvals (hierarchy users above Finance)
        {
          path: 'budget-approvals',
          loadComponent: () =>
            import('./views/base/budget-approvals/budget-approvals.component')
              .then(m => m.BudgetApprovalsComponent),
          data: {
            title: 'Budget Increase Approvals',
            roles: ['CEO', 'COO', 'PROCUREMENT', 'MANAGER', 'ADMIN']
          }
        },
        {
          path: 'rfq-dashboard',
          loadChildren: () =>
            import('./views/base/rfq-dashboard/routes').then(m => m.routes),
          data: { roles: ['ROLE_BUYER'] }
        },
        {
          path: 'create-rfq',
          loadChildren: () =>
            import('./views/base/create-rfq/routes').then(m => m.routes),
          data: { roles: ['ROLE_BUYER'] }
        },
        {
          path: 'quote-comparison',
          loadChildren: () =>
            import('./views/base/rfq-quote-comparison/routes').then(m => m.routes),
          data: {
            roles: ['ROLE_BUYER'],
            title: 'Quote Comparison'
          }
        },
        {
          path: 'supplier-quote',
          loadChildren: () =>
            import('./views/base/supplier-quote-submission/routes').then(m => m.routes),
          data: {
            roles: ['ROLE_SUPPLIER'],
            title: 'Submit Quote'
          }
        },
        {
          path: 'supplier-evaluation',
          loadChildren: () =>
            import('./views/base/supplier-evaluation/routes').then(m => m.routes),
          data: {
            roles: ['ROLE_BUYER'],
            title: 'Evaluate Suppliers'
          }
        },

        // ✅ NEW: Supplier Final Selection (after evaluation)
      {
          path: 'supplier-selection/:rfqId',
          loadComponent: () =>
            import('./views/base/supplier-selection/supplier-selection.component')
              .then(m => m.SupplierSelectionComponent),
          data: {
            title: 'Select Supplier',
            roles: ['ROLE_BUYER']
          }
        },

        // ✅ NEW: PO Price Negotiation (after supplier selection)
          {
          path: 'po-negotiation/:rfqId/:supplierId/:selectionId',
          loadComponent: () =>
            import('./views/base/po-negotiation/po-negotiation.component')
              .then(m => m.PONegotiationComponent),
          data: {
            title: 'PO Price Negotiation',
            roles: ['ROLE_BUYER']
          }
        },

        // Purchase Order Routes
        {
          path: 'po-list',
          loadComponent: () =>
            import('./views/base/po-list/po-list.component')
              .then(m => m.POListComponent),
          data: {
            title: 'Purchase Orders',
            roles: ['ROLE_BUYER']
          }
        },
        {
          path: 'po-details/:id',
          loadComponent: () =>
            import('./views/base/po-details/po-details.component')
              .then(m => m.PODetailsComponent),
          data: {
            title: 'Purchase Order Details',
            roles: ['ROLE_BUYER']
          }
        },
            // ✅ NEW: GRN Routes (Goods Receipt Note)
      {
        path: 'grn-list',
        loadComponent: () =>
          import('./views/base/grn-list/grn-list.component')
            .then(m => m.GrnListComponent),
        data: {
          title: 'Goods Receipt Notes',
          roles: ['ROLE_BUYER']
        }
      },
      {
        path: 'grn-create',
        loadComponent: () =>
          import('./views/base/grn-create/grn-create.component')
            .then(m => m.GrnCreateComponent),
        data: {
          title: 'Create GRN',
          roles: ['ROLE_BUYER']
        }
      },
      {
        path: 'grn-view/:id',
        loadComponent: () =>
          import('./views/base/grn-list/grn-list.component')
            .then(m => m.GrnListComponent),
        data: {
          title: 'View GRN',
          roles: ['ROLE_BUYER']
        }
      },
            {
        path: 'grn-qa/:id',
        loadComponent: () =>
          import('./views/base/grn-qa/grn-qa.component')
            .then(m => m.GrnQaComponent),
        data: {
          title: 'View GRN',
          roles: ['ROLE_BUYER']
        }
      },

      // ✅ NEW: 3-Way Match Route
      {
        path: 'three-way-match',
        loadComponent: () =>
          import('./views/base/three-way-match/three-way-match.component')
            .then(m => m.ThreeWayMatchComponent),
        data: {
          title: '3-Way Match',
          roles: ['ROLE_BUYER']
        }
      },

      // ✅ NEW: Service Entry Sheet (SES) Routes — Service-PO counterpart to GRN.
      // Either the buyer/RFQ creator or the supplier can create/fill one in; approving one
      // stays buyer-only (enforced in ses-list.component — that's the independent-confirmation
      // gate before the matching invoice can be approved, so it can't be self-approved).
      {
        path: 'ses-list',
        loadComponent: () =>
          import('./views/base/ses-list/ses-list.component')
            .then(m => m.SesListComponent),
        data: {
          title: 'Service Entry Sheets',
          roles: ['ROLE_BUYER', 'ROLE_SUPPLIER']
        }
      },
      {
        path: 'ses-create',
        loadComponent: () =>
          import('./views/base/ses-create/ses-create.component')
            .then(m => m.SesCreateComponent),
        data: {
          title: 'Create Service Entry Sheet',
          roles: ['ROLE_BUYER', 'ROLE_SUPPLIER']
        }
      },

      // Yearly supplier ↔ buyer activity calendar (planned vs actual) and the shared Q&A
      // library. Both sides open the same screens; the buyer edits, the supplier reads and asks.
      {
        path: 'service-calendar',
        loadComponent: () =>
          import('./views/base/service-calendar/service-calendar.component')
            .then(m => m.ServiceCalendarComponent),
        data: {
          title: 'Service Planner',
          roles: ['ROLE_BUYER', 'ROLE_SUPPLIER']
        }
      },
      // Consolidated spend analysis. One component serves both sides: a buyer sees their spend
      // across suppliers/categories/units; a supplier sees the same money as their own income.
      {
        path: 'spend-analysis',
        loadComponent: () =>
          import('./views/base/spend-analysis/spend-analysis.component')
            .then(m => m.SpendAnalysisComponent),
        data: {
          title: 'Spend Analysis',
          roles: ['ROLE_BUYER', 'ROLE_SUPPLIER']
        }
      },

      // Company-wide Q&A library — the admin raises/answers; RFQ creators and suppliers read.
      {
        path: 'faq',
        loadComponent: () =>
          import('./views/base/faq/faq.component')
            .then(m => m.FaqComponent),
        data: {
          title: 'Q&A Library',
          roles: ['SUPER_ADMIN', 'ORGANIZATION_ADMIN', 'ADMIN', 'ROLE_BUYER', 'ROLE_SUPPLIER']
        }
      },
      // Corrective Action Plan (CAP) — creation and tracking. Buyer QA raises a CAP against a
      // supplier when a defective/rejected delivery needs more than just a replacement; both
      // sides track root cause, actions, evidence and effectiveness verification through to close.
      {
        path: 'cap-list',
        loadComponent: () =>
          import('./views/base/cap-list/cap-list.component')
            .then(m => m.CapListComponent),
        data: {
          title: 'Corrective Action Plans',
          roles: ['ROLE_BUYER', 'ROLE_SUPPLIER']
        }
      },
      {
        path: 'cap-detail/:id',
        loadComponent: () =>
          import('./views/base/cap-detail/cap-detail.component')
            .then(m => m.CapDetailComponent),
        data: {
          title: 'Corrective Action Plan',
          roles: ['ROLE_BUYER', 'ROLE_SUPPLIER']
        }
      },

      // Edit-and-resubmit an existing (REJECTED, or APPROVED-with-a-rejected-additional-items-
      // quote) Service Entry Sheet — same component, just pre-loads sesId's data instead of
      // starting blank. See ses-create.component.ts's editSesId handling.
      {
        path: 'ses-create/:sesId',
        loadComponent: () =>
          import('./views/base/ses-create/ses-create.component')
            .then(m => m.SesCreateComponent),
        data: {
          title: 'Edit Service Entry Sheet',
          roles: ['ROLE_BUYER', 'ROLE_SUPPLIER']
        }
      },

        {
          path: 'create-b',
          loadChildren: () =>
            import('./views/base/create-b/routes').then(m => m.routes),
          data: { roles: ['ORGANIZATION_ADMIN'] }
        },
        {
          path: 'create-s',
          loadChildren: () =>
            import('./views/base/create-s/routes').then(m => m.routes),
          data: { roles: ['ADMIN', 'ORGANIZATION_ADMIN'] }
        },
        {
          path: 'evaluation-criteria',
          loadComponent: () =>
            import('./views/base/evaluation-criteria/evaluation-criteria.component')
              .then(m => m.EvaluationCriteriaComponent),
          data: {
            title: 'Evaluation Criteria Management',
            roles: ['ORGANIZATION_ADMIN']
          }
        },
        {
          path: 'registration-questionnaire',
          loadComponent: () =>
            import('./views/base/registration-questionnaire/registration-questionnaire.component')
              .then(m => m.RegistrationQuestionnaireComponent),
          data: {
            title: 'Registration Questionnaire',
            roles: ['ORGANIZATION_ADMIN']
          }
        },
        {
          path: 'risk-questions',
          loadComponent: () =>
            import('./views/base/risk-questions/risk-questions.component')
              .then(m => m.RiskQuestionsComponent),
          data: {
            title: 'Risk Assessment Questions',
            roles: ['ORGANIZATION_ADMIN']
          }
        },
        {
          path: 'supplier-risk-dashboard',
          loadComponent: () =>
            import('./views/base/supplier-risk-dashboard/supplier-risk-dashboard.component')
              .then(m => m.SupplierRiskDashboardComponent),
          data: {
            title: 'Supplier Risk Dashboard',
            roles: ['ORGANIZATION_ADMIN']
          }
        },
        {
          path: 'rfi-dashboard',
          loadComponent: () =>
            import('./views/base/rfi-dashboard/rfi-dashboard.component')
              .then(m => m.RfiDashboardComponent),
          data: { title: 'RFI Dashboard', roles: ['ROLE_BUYER'] }
        },
        {
          path: 'rfi-create',
          loadComponent: () =>
            import('./views/base/rfi-create/rfi-create.component')
              .then(m => m.RfiCreateComponent),
          data: { title: 'Create RFI', roles: ['ROLE_BUYER'] }
        },
        {
          path: 'rfi-responses/:rfiId',
          loadComponent: () =>
            import('./views/base/rfi-responses/rfi-responses.component')
              .then(m => m.RfiResponsesComponent),
          data: { title: 'RFI Responses', roles: ['ROLE_BUYER'] }
        },
        {
          path: 'rfi-inbox',
          loadComponent: () =>
            import('./views/base/rfi-inbox/rfi-inbox.component')
              .then(m => m.RfiInboxComponent),
          data: { title: 'RFI Inbox', roles: ['ROLE_SUPPLIER'] }
        },
        {
          path: 'rfi-response/:rfiId',
          loadComponent: () =>
            import('./views/base/rfi-response-form/rfi-response-form.component')
              .then(m => m.RfiResponseFormComponent),
          data: { title: 'Respond to RFI', roles: ['ROLE_SUPPLIER'] }
        },

        // ✅ NEW: ASN (Advance Shipping Notice) tracking
        {
          path: 'asn-create',
          loadComponent: () =>
            import('./views/base/asn-create/asn-create.component')
              .then(m => m.AsnCreateComponent),
          data: { title: 'Create ASN', roles: ['ROLE_SUPPLIER'] }
        },
        {
          path: 'asn-list',
          loadComponent: () =>
            import('./views/base/asn-list/asn-list.component')
              .then(m => m.AsnListComponent),
          data: { title: 'My Shipments', roles: ['ROLE_SUPPLIER'] }
        },
        {
          path: 'asn-tracking',
          loadComponent: () =>
            import('./views/base/asn-tracking/asn-tracking.component')
              .then(m => m.AsnTrackingComponent),
          data: { title: 'ASN Tracking', roles: ['ROLE_BUYER'] }
        },
        {
          path: 'contract-create/:rfqId/:supplierId',
          loadComponent: () =>
            import('./views/base/contract-create/contract-create.component')
              .then(m => m.ContractCreateComponent),
          data: { title: 'Create Contract', roles: ['ROLE_BUYER'] }
        },
        {
          path: 'contract-list',
          loadComponent: () =>
            import('./views/base/contract-list/contract-list.component')
              .then(m => m.ContractListComponent),
          data: { title: 'Contracts', roles: ['ROLE_BUYER'] }
        },
        {
          path: 'contract-detail/:contractId',
          loadComponent: () =>
            import('./views/base/contract-detail/contract-detail.component')
              .then(m => m.ContractDetailComponent),
          data: { title: 'Contract', roles: ['ROLE_BUYER', 'ROLE_SUPPLIER'] }
        },
        {
          path: 'contract-approvals',
          loadComponent: () =>
            import('./views/base/contract-approvals/contract-approvals.component')
              .then(m => m.ContractApprovalsComponent),
          data: { title: 'Contract Approvals', roles: ['CEO', 'COO', 'PROCUREMENT', 'MANAGER', 'ADMIN', 'LEGAL'] }
        },
        {
          path: 'contract-inbox',
          loadComponent: () =>
            import('./views/base/contract-inbox/contract-inbox.component')
              .then(m => m.ContractInboxComponent),
          data: { title: 'My Contracts', roles: ['ROLE_SUPPLIER'] }
        },
        {
          path: 'rfq-feedback/:rfqId',
          loadComponent: () =>
            import('./views/base/rfq-feedback/rfq-feedback.component')
              .then(m => m.RfqFeedbackComponent),
          data: {
            title: 'Supplier Performance Feedback',
            roles: ['ROLE_BUYER']
          }
        },
        {
          path: 'invoices',
          loadComponent: () =>
            import('./views/base/buyer-invoices/buyer-invoices.component')
              .then(m => m.BuyerInvoicesComponent),
          data: {
            title: 'Invoice Management',
            roles: ['ROLE_BUYER']
          }
        },
      ]
    },

    {
      path: 'login',
      loadComponent: () =>
        import('./views/pages/login/login.component')
          .then(m => m.LoginComponent),
      data: { title: 'Login Page' }
    },
    // "Forgot password" now lives as a modal directly on the login page (see
    // login.component.ts's fpStep state machine) — no separate route needed.
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