import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  // ============================================
  // SUPERADMIN MENU
  // ============================================
  {
    name: 'Dashboard',
    url: '/superadmin-dashboard',
    iconComponent: { name: 'cil-shield-alt' },
    attributes: { roles: ['SUPER_ADMIN'] }
  },

  // ============================================
  // ORGANIZATION ADMIN MENU
  // ============================================
  {
    name: 'Org Admin Dashboard',
    url: '/orgadmin-dashboard',
    iconComponent: { name: 'cil-speedometer' },
    attributes: { roles: ['ORGANIZATION_ADMIN'] }
  },
  {
    name: 'Hierarchy Management',
    url: '/hierarchy-management',
    iconComponent: { name: 'cil-sitemap' },
    attributes: { roles: ['ORGANIZATION_ADMIN'] },
    children: [
      {
        name: 'Hierarchy Levels',
        url: '/hierarchy-levels',
        iconComponent: { name: 'cil-layers' }
      },
      {
        name: 'Hierarchy Users',
        url: '/hierarchy-users',
        iconComponent: { name: 'cil-people' }
      },
      {
        name: 'Reporting Structure',
        url: '/reporting-structure',
        iconComponent: { name: 'cil-sitemap' }
      },
      {
        name: 'Approval Configuration',
        url: '/approval-flow-config',
        iconComponent: { name: 'cil-check-circle' }
      }
    ]
  },
  {
    name: 'Management',
    url: '/supplier-management',
    iconComponent: { name: 'cil-sitemap' },
    attributes: { roles: ['ORGANIZATION_ADMIN'] },
    children: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        iconComponent: { name: 'cil-layers' }
      },
      {
        name: 'Buyer Management',
        url: '/create-b',
        iconComponent: { name: 'cil-people' },
        attributes: { roles: ['ORGANIZATION_ADMIN'] }
      },
      {
        name: 'Supplier Management',
        url: '/create-s',
        iconComponent: { name: 'cil-building' },
           attributes: { roles: ['ORGANIZATION_ADMIN',] }
      },
      {
        name: 'Evaluation Criteria',
        url: '/evaluation-criteria',
        iconComponent: { name: 'cil-star' },
        attributes: { roles: ['ORGANIZATION_ADMIN'] }
      },
      {
        name: 'Q&A Library',
        url: '/faq',
        iconComponent: { name: 'cil-question-mark' },
        attributes: { roles: ['ORGANIZATION_ADMIN'] }
      },
      {
        name: 'Registration Questionnaire',
        url: '/registration-questionnaire',
        iconComponent: { name: 'cil-clipboard' },
        attributes: { roles: ['ORGANIZATION_ADMIN'] }
      },
      {
        name: 'Risk Questions',
        url: '/risk-questions',
        iconComponent: { name: 'cil-warning' },
        attributes: { roles: ['ORGANIZATION_ADMIN'] }
      },
      {
        name: 'Supplier Risk Dashboard',
        url: '/supplier-risk-dashboard',
        iconComponent: { name: 'cil-shield-alt' },
        attributes: { roles: ['ORGANIZATION_ADMIN'] }
      }
    ]
  },

  // ============================================
  // DYNAMIC HIERARCHY USER DASHBOARD
  // ============================================
  {
    name: 'Dashboard',
    url: '/hierarchy-dashboard',
    iconComponent: { name: 'cil-speedometer' },
    attributes: { roles: ['ADMIN', 'CEO', 'COO', 'MANAGER', 'PROCUREMENT', 'FINANCE'] }
  },

  // ============================================
  // LEGAL TEAM — contracts only, no RFQ/PO/Supplier
  // ============================================
  {
    name: 'Dashboard',
    url: '/legal-dashboard',
    iconComponent: { name: 'cil-speedometer' },
    attributes: { roles: ['LEGAL'] }
  },

  // ============================================
  // FINANCE — BUDGET MANAGEMENT MODULE
  // ============================================
  {
    name: 'Budget Management',
    url: '/finance-dashboard',
    iconComponent: { name: 'cil-money' },
    attributes: { roles: ['FINANCE'] }
  },

  // ============================================
  // BUYER MENU ITEMS
  // ============================================
  {
    name: 'RFQ Dashboard',
    url: '/rfq-dashboard',
    iconComponent: { name: 'cil-layers' },
    attributes: { roles: ['ROLE_BUYER'] }
  },
  {
    name: 'Budget Dashboard',
    url: '/budget-dashboard',
    iconComponent: { name: 'cil-money' },
    attributes: { roles: ['ROLE_BUYER'] }
  },
  {
    name: 'Create RFQ',
    url: '/create-rfq',
    iconComponent: { name: 'cil-file' },
    attributes: { roles: ['ROLE_BUYER'] }
  },
  {
    name: 'RFI Dashboard',
    url: '/rfi-dashboard',
    iconComponent: { name: 'cil-question-mark' },
    attributes: { roles: ['ROLE_BUYER'] }
  },
  {
    name: 'Contracts',
    url: '/contract-list',
    iconComponent: { name: 'cil-description' },
    attributes: { roles: ['ROLE_BUYER'] }
  },
    {
    name: 'Supplier Management',
    url: '/create-s',
    iconComponent: { name: 'cil-building' },
    attributes: { roles: ['ROLE_BUYER'] }
  },
  // {
  //   name: 'Quote Comparison',
  //   url: '/quote-comparison',
  //   iconComponent: { name: 'cil-chart-line' },
  //   attributes: { roles: ['ROLE_BUYER'] }
  // },
  // ✅ NEW: Purchase Orders nav item
  {
    name: 'Purchase Orders',
    url: '/po-list',
    iconComponent: { name: 'cil-description' },
    attributes: { roles: ['ROLE_BUYER'] }
  },
  {
  name: 'Invoice Management',
  url: '/invoices',
  iconComponent: { name: 'cil-description' },
  attributes: { roles: ['ROLE_BUYER'] }
},
  {
  name: 'GRN',
  url: '/grn-list',
  iconComponent: { name: 'cil-description' },
  attributes: { roles: ['ROLE_BUYER','ROLE_BUYER'] }
},
  {
  name: '3-Way Match',
  url: '/three-way-match',
  iconComponent: { name: 'cil-description' },
  attributes: { roles: ['ROLE_BUYER','ROLE_BUYER'] }
},
  {
  name: 'Service Entry Sheets',
  url: '/ses-list',
  iconComponent: { name: 'cil-description' },
  attributes: { roles: ['ROLE_BUYER'] }
},
  {
  name: 'Service Planner',
  url: '/service-calendar',
  iconComponent: { name: 'cil-calendar' },
  attributes: { roles: ['ROLE_BUYER'] }
},
  {
  name: 'Spend Analysis',
  url: '/spend-analysis',
  iconComponent: { name: 'cil-chart-pie' },
  attributes: { roles: ['ROLE_BUYER'] }
},
  {
  name: 'Corrective Actions',
  url: '/cap-list',
  iconComponent: { name: 'cil-warning' },
  attributes: { roles: ['ROLE_BUYER'] }
},
  {
  name: 'Q&A Library',
  url: '/faq',
  iconComponent: { name: 'cil-question-mark' },
  attributes: { roles: ['ROLE_BUYER'] }
},
  {
    name: 'ASN Tracking',
    url: '/asn-tracking',
    iconComponent: { name: 'cil-location-pin' },
    attributes: { roles: ['ROLE_BUYER'] }
  },

  // ============================================
  // SUPPLIER MENU
  // ============================================
  {
    name: 'Supplier Dashboard',
    url: '/supplier-dashboard',
    iconComponent: { name: 'cil-speedometer' },
    attributes: { roles: ['ROLE_SUPPLIER'] }
  },
  {
    name: 'My Shipments (ASN)',
    url: '/asn-list',
    iconComponent: { name: 'cil-truck' },
    attributes: { roles: ['ROLE_SUPPLIER'] }
  },
  {
    name: 'Service Entry Sheets',
    url: '/ses-list',
    iconComponent: { name: 'cil-description' },
    attributes: { roles: ['ROLE_SUPPLIER'] }
  },
  {
    name: 'Service Planner',
    url: '/service-calendar',
    iconComponent: { name: 'cil-calendar' },
    attributes: { roles: ['ROLE_SUPPLIER'] }
  },
  {
    name: 'Revenue Analysis',
    url: '/spend-analysis',
    iconComponent: { name: 'cil-chart-pie' },
    attributes: { roles: ['ROLE_SUPPLIER'] }
  },
  {
    name: 'Corrective Actions',
    url: '/cap-list',
    iconComponent: { name: 'cil-warning' },
    attributes: { roles: ['ROLE_SUPPLIER'] }
  },
  {
    name: 'Q&A Library',
    url: '/faq',
    iconComponent: { name: 'cil-question-mark' },
    attributes: { roles: ['ROLE_SUPPLIER'] }
  },
  {
    name: 'RFI Inbox',
    url: '/rfi-inbox',
    iconComponent: { name: 'cil-question-mark' },
    attributes: { roles: ['ROLE_SUPPLIER'] }
  },
  {
    name: 'My Contracts',
    url: '/contract-inbox',
    iconComponent: { name: 'cil-description' },
    attributes: { roles: ['ROLE_SUPPLIER'] }
  },

  // ============================================
  // APPROVAL WORKFLOWS
  // ============================================
  {
    name: 'Pending Approvals',
    url: '/pending-approvals',
    iconComponent: { name: 'cil-task' },
    attributes: { roles: ['CEO', 'COO', 'PROCUREMENT', 'MANAGER', 'ADMIN'] },
  },
  {
    name: 'Contract Approvals',
    url: '/contract-approvals',
    iconComponent: { name: 'cil-description' },
    attributes: { roles: ['CEO', 'COO', 'PROCUREMENT', 'MANAGER', 'ADMIN', 'LEGAL'] },
  },
  {
    name: 'Budget Approvals',
    url: '/budget-approvals',
    iconComponent: { name: 'cil-money' },
    attributes: { roles: ['CEO', 'COO', 'PROCUREMENT', 'MANAGER', 'ADMIN'] },
  }
];