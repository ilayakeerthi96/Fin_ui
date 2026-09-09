import { INavData } from '@coreui/angular';

/**
 * Sidebar navigation for the Finance PO application.
 *
 * Scope is deliberately narrow: PO creation → release → supplier invoice → invoice
 * approval → payment → closure. PO approval is currently auto-cleared on submit (see
 * POApprovalService.APPROVAL_WORKFLOW_ENABLED) — there is no approver step in the live flow.
 *
 * Four audiences:
 *   ORGANIZATION_ADMIN   — creates logins (Manage Users), plus Reports and the Audit Log.
 *                           Does not touch day-to-day operations.
 *   PROCUREMENT_OPERATOR — a hierarchy login (level "Procurement Operations") that runs
 *                           every operational screen: PO Management, Invoice Management,
 *                           Payment Tracking, Status Tracking, Supplier Management.
 *   Approvers (CEO/COO/MANAGER/PROCUREMENT/FINANCE) — no menu entries at all. There is no
 *                           approval step in the live flow (PurchaseOrder.isReleasable()
 *                           allows release straight from DRAFT), so there is nothing for
 *                           them to see or do. Their logins still exist in the DB, dormant.
 *   ROLE_SUPPLIER         — their own POs and invoices only.
 *
 * Menu entries for RFQ, quotations, quote comparison, supplier selection, negotiation,
 * evaluation criteria, Q&A libraries, registration and risk questionnaires, the supplier
 * risk board, the Super Admin dashboard, Buyer Companies (single-buyer app), and everything
 * specific to the approval hierarchy (Approval Levels, Reporting Structure, Approval
 * Configuration — there is no approval step left to configure) have all been removed, along
 * with the modules that fall outside this scope. Those screens are unreachable from here AND
 * their routes are gone from app.routes.ts.
 */
export const navItems: INavData[] = [

  // ============================================
  // ADMIN — user & configuration management only
  // ============================================
  {
    name: 'Dashboard',
    url: '/orgadmin-dashboard',
    iconComponent: { name: 'cil-speedometer' },
    attributes: { roles: ['ORGANIZATION_ADMIN'] }
  },
  {
    name: 'Manage Users',
    url: '/hierarchy-users',
    iconComponent: { name: 'cil-people' },
    attributes: { roles: ['ORGANIZATION_ADMIN'] }
  },
  {
    name: 'Reports',
    url: '/spend-analysis',
    iconComponent: { name: 'cil-chart-pie' },
    attributes: { roles: ['ORGANIZATION_ADMIN'] }
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
    name: 'PO Management',
    url: '/po-list',
    iconComponent: { name: 'cil-description' },
    attributes: { roles: ['PROCUREMENT_OPERATOR'] },
    children: [
      {
        name: 'All Purchase Orders',
        url: '/po-list',
        iconComponent: { name: 'cil-list' }
      },
      {
        name: 'Create PO',
        url: '/po-create',
        iconComponent: { name: 'cil-plus' }
      },
      {
        name: 'PO Closure',
        url: '/po-closure',
        iconComponent: { name: 'cil-lock-locked' }
      }
    ]
  },
  {
    name: 'Invoice Management',
    url: '/invoices',
    iconComponent: { name: 'cil-file' },
    attributes: { roles: ['PROCUREMENT_OPERATOR'] }
  },
  {
    name: 'Payment Tracking',
    url: '/payment-tracking',
    iconComponent: { name: 'cil-money' },
    attributes: { roles: ['PROCUREMENT_OPERATOR'] }
  },
  {
    name: 'Status Tracking',
    url: '/status-tracking',
    iconComponent: { name: 'cil-chart-line' },
    attributes: { roles: ['PROCUREMENT_OPERATOR'] }
  },
  {
    name: 'Supplier Management',
    url: '/create-s',
    iconComponent: { name: 'cil-building' },
    attributes: { roles: ['PROCUREMENT_OPERATOR'] }
  },
  {
    name: 'Reports',
    url: '/spend-analysis',
    iconComponent: { name: 'cil-chart-pie' },
    attributes: { roles: ['PROCUREMENT_OPERATOR'] }
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
    name: 'Supplier Dashboard',
    url: '/supplier-dashboard',
    iconComponent: { name: 'cil-speedometer' },
    attributes: { roles: ['ROLE_SUPPLIER'] }
  },
  {
    name: 'Reports',
    url: '/supplier-reports',
    iconComponent: { name: 'cil-chart-pie' },
    attributes: { roles: ['ROLE_SUPPLIER'] }
  }
];
