

// import { Component, HostListener, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import {
//   CardComponent, CardBodyComponent, CardHeaderComponent,
//   RowComponent, ColComponent, ContainerComponent,
//   ButtonDirective, BadgeComponent, FormModule,
//   TableModule, ModalModule, SpinnerComponent
// } from '@coreui/angular';
// import { IconDirective } from '@coreui/icons-angular';
// import { AuthService } from '../../../shared/service/AuthService';
// import { DataService } from '../../../shared/service/DataService';
// import { MessageService } from '../../../shared/service/message.service';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// // ── Financial Year option shape ──────────────────────────────
// interface FYOption {
//   value: string;
//   label: string;
//   from: Date;
//   to: Date;
// }

// @Component({
//   selector: 'app-supplier-dashboard',
//   templateUrl: './supplier-dashboard.component.html',
//   styleUrls: ['./supplier-dashboard.component.css'],
//   standalone: true,
//   imports: [
//     CommonModule, FormsModule, ContainerComponent, RowComponent, ColComponent,
//     CardComponent, CardBodyComponent, CardHeaderComponent, ButtonDirective,
//     IconDirective, BadgeComponent, FormModule, TableModule, ModalModule, SpinnerComponent
//   ]
// })
// export class SupplierDashboardComponent implements OnInit {

//   // ── User profile ──────────────────────────────────────────────────────────
//   fullName      : string = '';
//   email         : string = '';
//   phone         : string = '';
//   departmentName: string = '';
//   supplierName  : string = '';
//   supplierId    : number = 0;
//   companyName   : string = '';
//   companyPhone  : string = '';
//   city          : string = '';
//   state         : string = '';
//   userInitials  : string = 'SU';

//   // ── Tab state ─────────────────────────────────────────────────────────────
//   activeTab: 'rfq' | 'po' | 'invoice' = 'rfq';

//   // ── Statistics ────────────────────────────────────────────────────────────
//   statistics = {
//     totalRFQs    : 0,
//     pendingRFQs  : 0,
//     respondedRFQs: 0,
//     selectedRFQs : 0,
//     rejectedRFQs : 0,
//     expiredRFQs  : 0
//   };

//   // ── RFQ list ──────────────────────────────────────────────────────────────
//   rfqList        : any[] = [];
//   filteredRFQList: any[] = [];
//   searchText     : string = '';
//   statusFilter   : string = 'ALL';
//   currentPage    : number = 1;
//   pageSize       : number = 10;
//   totalRFQs      : number = 0;

//   // ── Date-filtered intermediates (tab counts use these) ────────────────────
//   dateFilteredRFQs    : any[] = [];
//   dateFilteredPOs     : any[] = [];
//   dateFilteredInvoices: any[] = [];

//   // ── PO list ───────────────────────────────────────────────────────────────
//   poList        : any[] = [];
//   filteredPOList: any[] = [];
//   poSearchText  : string = '';
//   poStatusFilter: string = 'ALL';
//   poCurrentPage : number = 1;
//   poPageSize    : number = 10;

//   // ── Invoice list ──────────────────────────────────────────────────────────
//   invoiceList         : any[] = [];
//   filteredInvoiceList : any[] = [];
//   invoiceSearchText   : string = '';
//   invoiceStatusFilter : string = 'ALL';
//   invoiceCurrentPage  : number = 1;
//   invoicePageSize     : number = 10;

//   // ── Currency ──────────────────────────────────────────────────────────────
//   poLocationCurrencyCode  : string = 'INR';
//   poLocationCurrencySymbol: string = '₹';

//   // ── Date Filter State ─────────────────────────────────────────────────────
//   financialYearOptions: FYOption[] = [];
//   selectedFYOption    : string = '';
//   customFromDate      : string = '';
//   customToDate        : string = '';
//   activeDateRangeLabel: string = '';

//   // =========================================================================
//   //  REPORT DOWNLOAD STATE
//   // =========================================================================
//   isDownloadingRFQReport    : boolean = false;
//   isDownloadingPOReport     : boolean = false;
//   isDownloadingInvoiceReport: boolean = false;

//   downloadingPOId      : number | null = null;
//   downloadingInvoiceId : number | null = null;
//   downloadingPOType    : 'excel' | 'pdf' | null = null;
//   downloadingInvType   : 'excel' | 'pdf' | null = null;
//   downloadingRfqRowId  : number | null = null;
//   downloadingRfqRowType: 'excel' | 'pdf' | null = null;

//   showRFQDownloadMenu    : boolean = false;
//   showPODownloadMenu     : boolean = false;
//   showInvoiceDownloadMenu: boolean = false;
//   openPODropdownId       : number | null = null;
//   openInvoiceDropdownId  : number | null = null;
//   openRFQDropdownId      : number | null = null;

//   // ── Invoice creation modal ────────────────────────────────────────────────
//   isInvoiceModalOpen   : boolean = false;
//   selectedPOForInvoice : any    = null;
//   isLoadingPODetails   : boolean = false;
//   isCreatingInvoice    : boolean = false;
//   isSubmittingInvoice  : boolean = false;

//   invoiceForm = {
//     invoiceDate          : this.getTodayStr(),
//     dueDate              : this.getDueDateStr(30),
//     taxPercentage        : 18,
//     paymentTerms         : 'Net 30 days from invoice date',
//     notes                : '',
//     termsAndConditions   : 'Payment is due within 30 days of invoice date. Late payment will attract 2% per month interest.',
//     bankName             : '',
//     accountHolderName    : '',
//     accountNumber        : '',
//     ifscCode             : '',
//     branchName           : '',
//     upiId                : '',
//     overallDiscountAmount: 0,
//     poGrandTotal         : 0,
//     lineItems            : [] as any[]
//   };

//   // ── Invoice view modal ────────────────────────────────────────────────────
//   isInvoiceViewModalOpen : boolean = false;
//   selectedInvoice        : any    = null;
//   isLoadingInvoice       : boolean = false;
//   isDownloadingInvoicePDF: boolean = false;

//   // ── Resubmit modal ────────────────────────────────────────────────────────
//   isResubmitModalOpen       : boolean = false;
//   selectedInvoiceForResubmit: any    = null;
//   resubmitRemarks           : string = '';
//   isResubmitting            : boolean = false;
//   isEditInvoiceModalOpen    : boolean = false;
//   editInvoiceMode           : boolean = false;

//   editInvoiceForm: {
//     invoiceDate: string; dueDate: string; taxPercentage: number;
//     paymentTerms: string; notes: string; termsAndConditions: string;
//     bankName: string; accountHolderName: string; accountNumber: string;
//     ifscCode: string; branchName: string; upiId: string;
//     resubmitRemarks: string; overallDiscountAmount: number; lineItems: any[];
//   } = {
//     invoiceDate: '', dueDate: '', taxPercentage: 18, paymentTerms: '',
//     notes: '', termsAndConditions: '', bankName: '', accountHolderName: '',
//     accountNumber: '', ifscCode: '', branchName: '', upiId: '',
//     resubmitRemarks: '', overallDiscountAmount: 0, lineItems: []
//   };

//   // ── RFQ view modal ────────────────────────────────────────────────────────
//   selectedRFQ      : any    = null;
//   isViewModalOpen  : boolean = false;
//   isQuoteModalOpen : boolean = false;
//   quoteForm = { quoteAmount: 0, notes: '' };

//   // ── Loading / error ───────────────────────────────────────────────────────
//   isLoading         : boolean = false;
//   isLoadingStats    : boolean = false;
//   isLoadingRFQs     : boolean = false;
//   isLoadingPOs      : boolean = false;
//   isLoadingInvoices : boolean = false;
//   isSubmittingQuote : boolean = false;
//   isDownloadingPDF  : boolean = false;
//   errorMessage      : string | null = null;

//   constructor(
//     private authService   : AuthService,
//     private dataService   : DataService,
//     private messageService: MessageService,
//     private router        : Router
//   ) {}

//   ngOnInit(): void {
//     this.buildFinancialYearOptions();
//     this.selectedFYOption = this.getCurrentFYValue();
//     this.updateActiveDateRangeLabel();
//     this.loadSupplierUserData();
//     this.loadDashboardData();
//   }

//   @HostListener('document:click')
//   onDocumentClick(): void {
//     this.showRFQDownloadMenu     = false;
//     this.showPODownloadMenu      = false;
//     this.showInvoiceDownloadMenu = false;
//     this.openPODropdownId        = null;
//     this.openInvoiceDropdownId   = null;
//     this.openRFQDropdownId       = null;
//   }

//   // =========================================================================
//   //  FINANCIAL YEAR HELPERS
//   // =========================================================================

//   private buildFinancialYearOptions(): void {
//     const today = new Date();
//     let currentFYStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
//     this.financialYearOptions = [];
//     for (let i = 0; i < 4; i++) {
//       const startYear = currentFYStartYear - i;
//       const endYear   = startYear + 1;
//       const from = new Date(startYear, 3, 1, 0, 0, 0, 0);
//       const to   = new Date(endYear,   2, 31, 23, 59, 59, 999);
//       this.financialYearOptions.push({
//         value: `FY${startYear}-${String(endYear).slice(-2)}`,
//         label: `FY ${startYear}-${String(endYear).slice(-2)}  (Apr ${startYear} – Mar ${endYear})`,
//         from,
//         to
//       });
//     }
//   }

//   getCurrentFYValue(): string {
//     return this.financialYearOptions.length > 0 ? this.financialYearOptions[0].value : 'ALL';
//   }

//   onFYOptionChange(): void {
//     if (this.selectedFYOption !== 'CUSTOM') {
//       this.customFromDate = '';
//       this.customToDate   = '';
//     }
//     this.updateActiveDateRangeLabel();
//     this.applyRFQFilters();
//     this.applyPOFilters();
//     this.applyInvoiceFilters();
//   }

//   resetDateFilter(): void {
//     this.selectedFYOption = this.getCurrentFYValue();
//     this.customFromDate   = '';
//     this.customToDate     = '';
//     this.updateActiveDateRangeLabel();
//     this.applyRFQFilters();
//     this.applyPOFilters();
//     this.applyInvoiceFilters();
//   }

//   private updateActiveDateRangeLabel(): void {
//     if (this.selectedFYOption === 'ALL') { this.activeDateRangeLabel = 'All Time'; return; }
//     if (this.selectedFYOption === 'CUSTOM') {
//       if (this.customFromDate && this.customToDate)
//         this.activeDateRangeLabel = `${this.formatDisplayDate(this.customFromDate)} – ${this.formatDisplayDate(this.customToDate)}`;
//       else if (this.customFromDate)
//         this.activeDateRangeLabel = `From ${this.formatDisplayDate(this.customFromDate)}`;
//       else if (this.customToDate)
//         this.activeDateRangeLabel = `Up to ${this.formatDisplayDate(this.customToDate)}`;
//       else
//         this.activeDateRangeLabel = 'Custom Range';
//       return;
//     }
//     const fy = this.financialYearOptions.find(f => f.value === this.selectedFYOption);
//     this.activeDateRangeLabel = fy ? fy.label : '';
//   }

//   private formatDisplayDate(dateStr: string): string {
//     if (!dateStr) return '';
//     const d = new Date(dateStr + 'T00:00:00');
//     return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
//   }

//   private getActiveDateRange(): { from: Date; to: Date } | null {
//     if (this.selectedFYOption === 'ALL') return null;
//     if (this.selectedFYOption === 'CUSTOM') {
//       const from = this.customFromDate ? new Date(this.customFromDate + 'T00:00:00') : null;
//       const to   = this.customToDate   ? new Date(this.customToDate   + 'T23:59:59') : null;
//       if (!from && !to) return null;
//       return { from: from ?? new Date(0), to: to ?? new Date(8640000000000000) };
//     }
//     const fy = this.financialYearOptions.find(f => f.value === this.selectedFYOption);
//     return fy ? { from: fy.from, to: fy.to } : null;
//   }

//   /**
//    * Generic date filter — tries multiple date fields in priority order.
//    * KEY FIX: If NO matching date field is found on an item, the item is INCLUDED
//    * (returns true) so records with missing/null date metadata are never silently hidden.
//    */
//   private filterByDateGeneric(items: any[], dateFields: string[]): any[] {
//     const range = this.getActiveDateRange();
//     if (!range) return items;
//     return items.filter((item: any) => {
//       for (const field of dateFields) {
//         if (item[field]) {
//           const d = new Date(item[field]);
//           // Only filter if the date parses successfully
//           if (!isNaN(d.getTime())) {
//             return d >= range.from && d <= range.to;
//           }
//         }
//       }
//       // No usable date field found → include the item (fail-open, not fail-closed)
//       return true;
//     });
//   }

//   // =========================================================================
//   //  INIT
//   // =========================================================================

//   loadSupplierUserData(): void {
//     this.fullName       = localStorage.getItem('fullName')       || 'Supplier User';
//     this.email          = localStorage.getItem('email')          || '';
//     this.phone          = localStorage.getItem('phone')          || '';
//     this.departmentName = localStorage.getItem('departmentName') || 'Supplier';
//     this.supplierName   = localStorage.getItem('supplierName')   || '';
//     this.companyName    = this.supplierName;
//     this.companyPhone   = localStorage.getItem('companyPhone')   || localStorage.getItem('phone') || '';
//     this.city           = localStorage.getItem('city')           || '';
//     this.state          = localStorage.getItem('state')          || '';
//     const sid           = this.authService.getSupplierId();
//     this.supplierId     = sid ? sid : Number(localStorage.getItem('supplierId') || '0');
//     this.userInitials   = this.getInitials(this.fullName);
//   }

//   loadDashboardData(): void {
//     if (!this.supplierId) { this.errorMessage = 'Supplier ID not found. Please login again.'; return; }
//     this.loadStatistics();
//     this.loadRFQs();
//     this.loadPOs();
//     this.loadInvoices();
//   }

//   loadStatistics(): void {
//     this.isLoadingStats = true;
//     this.dataService.getSupplierDashboardStatistics(this.supplierId).subscribe({
//       next: (r: any) => { if (r?.success && r.data) this.statistics = { ...this.statistics, ...r.data }; this.isLoadingStats = false; },
//       error: () => { this.isLoadingStats = false; }
//     });
//   }

//   // =========================================================================
//   //  DROPDOWN TOGGLES
//   // =========================================================================

//   toggleRFQDownloadMenu(e: Event): void {
//     e.stopPropagation();
//     this.showRFQDownloadMenu     = !this.showRFQDownloadMenu;
//     this.showPODownloadMenu      = false;
//     this.showInvoiceDownloadMenu = false;
//   }

//   togglePODownloadMenu(e: Event): void {
//     e.stopPropagation();
//     this.showPODownloadMenu      = !this.showPODownloadMenu;
//     this.showRFQDownloadMenu     = false;
//     this.showInvoiceDownloadMenu = false;
//   }

//   toggleInvoiceDownloadMenu(e: Event): void {
//     e.stopPropagation();
//     this.showInvoiceDownloadMenu = !this.showInvoiceDownloadMenu;
//     this.showRFQDownloadMenu     = false;
//     this.showPODownloadMenu      = false;
//   }

//   togglePORowDropdown(poId: number, e: Event): void {
//     e.stopPropagation();
//     this.openPODropdownId      = this.openPODropdownId === poId ? null : poId;
//     this.openInvoiceDropdownId = null;
//     this.openRFQDropdownId     = null;
//   }

//   toggleInvoiceRowDropdown(invId: number, e: Event): void {
//     e.stopPropagation();
//     this.openInvoiceDropdownId = this.openInvoiceDropdownId === invId ? null : invId;
//     this.openPODropdownId      = null;
//     this.openRFQDropdownId     = null;
//   }

//   toggleRFQRowDropdown(rfqId: number, e: Event): void {
//     e.stopPropagation();
//     this.openRFQDropdownId     = this.openRFQDropdownId === rfqId ? null : rfqId;
//     this.openPODropdownId      = null;
//     this.openInvoiceDropdownId = null;
//   }

//   isPORowDownloading(poId: number): boolean       { return this.downloadingPOId === poId; }
//   isInvoiceRowDownloading(invId: number): boolean  { return this.downloadingInvoiceId === invId; }
//   isRFQRowDownloading(rfqId: number): boolean     { return this.downloadingRfqRowId === rfqId; }

//   private clearPODownload(): void      { this.downloadingPOId = null; this.downloadingPOType = null; }
//   private clearInvoiceDownload(): void { this.downloadingInvoiceId = null; this.downloadingInvType = null; }
//   private clearRFQRowDownload(): void  { this.downloadingRfqRowId = null; this.downloadingRfqRowType = null; }

//   // =========================================================================
//   //  REPORT DOWNLOADS
//   // =========================================================================

//   downloadRFQListExcel(): void {
//     this.isDownloadingRFQReport = true;
//     this.showRFQDownloadMenu    = false;
//     const status = this.statusFilter || 'ALL';
//     this.dataService.getSupplierRFQListExcel(this.supplierId, status).subscribe({
//       next: (blob: Blob) => {
//         this.dataService.saveBlob(blob, 'Supplier_RFQ_List_' + status + '_' + this.getTodayStr() + '.xlsx');
//         this.isDownloadingRFQReport = false;
//         this.messageService.showMessage('success', 'Downloaded', 'RFQ list report downloaded');
//       },
//       error: () => {
//         this.messageService.showMessage('error', 'Error', 'Failed to download RFQ report');
//         this.isDownloadingRFQReport = false;
//       }
//     });
//   }

//   downloadPOListExcel(): void {
//     this.isDownloadingPOReport = true;
//     this.showPODownloadMenu    = false;
//     this.dataService.getSupplierPOListExcel(this.supplierId, 'ALL').subscribe({
//       next: (blob: Blob) => {
//         this.dataService.saveBlob(blob, 'Supplier_PO_List_' + this.getTodayStr() + '.xlsx');
//         this.isDownloadingPOReport = false;
//         this.messageService.showMessage('success', 'Downloaded', 'PO list report downloaded');
//       },
//       error: () => {
//         this.messageService.showMessage('error', 'Error', 'Failed to download PO report');
//         this.isDownloadingPOReport = false;
//       }
//     });
//   }

//   downloadInvoiceListExcel(): void {
//     this.isDownloadingInvoiceReport = true;
//     this.showInvoiceDownloadMenu    = false;
//     const status = this.invoiceStatusFilter || 'ALL';
//     this.dataService.getSupplierInvoiceListExcel(this.supplierId, status).subscribe({
//       next: (blob: Blob) => {
//         this.dataService.saveBlob(blob, 'Supplier_Invoice_List_' + status + '_' + this.getTodayStr() + '.xlsx');
//         this.isDownloadingInvoiceReport = false;
//         this.messageService.showMessage('success', 'Downloaded', 'Invoice list report downloaded');
//       },
//       error: () => {
//         this.messageService.showMessage('error', 'Error', 'Failed to download invoice report');
//         this.isDownloadingInvoiceReport = false;
//       }
//     });
//   }

//   downloadSinglePOExcel(po: any): void {
//     this.downloadingPOId = po.id; this.downloadingPOType = 'excel'; this.openPODropdownId = null;
//     this.dataService.getPOSummaryExcel(po.id).subscribe({
//       next: (blob: Blob) => { this.dataService.saveBlob(blob, 'PO_' + po.poNumber + '_' + this.getTodayStr() + '.xlsx'); this.clearPODownload(); this.messageService.showMessage('success', 'Downloaded', po.poNumber + ' Excel downloaded'); },
//       error: () => { this.messageService.showMessage('error', 'Error', 'Failed to download PO Excel'); this.clearPODownload(); }
//     });
//   }

//   downloadSinglePOPDF(po: any): void {
//     this.downloadingPOId = po.id; this.downloadingPOType = 'pdf'; this.openPODropdownId = null;
//     this.dataService.getPOSummaryPDF(po.id).subscribe({
//       next: (blob: Blob) => { this.dataService.saveBlob(blob, 'PO_' + po.poNumber + '_' + this.getTodayStr() + '.pdf'); this.clearPODownload(); this.messageService.showMessage('success', 'Downloaded', po.poNumber + ' PDF downloaded'); },
//       error: () => { this.messageService.showMessage('error', 'Error', 'Failed to download PO PDF'); this.clearPODownload(); }
//     });
//   }

//   downloadSingleInvoiceExcel(inv: any): void {
//     this.downloadingInvoiceId = inv.id; this.downloadingInvType = 'excel'; this.openInvoiceDropdownId = null;
//     this.dataService.getInvoiceExcel(inv.id).subscribe({
//       next: (blob: Blob) => { this.dataService.saveBlob(blob, 'Invoice_' + inv.invoiceNumber + '_' + this.getTodayStr() + '.xlsx'); this.clearInvoiceDownload(); this.messageService.showMessage('success', 'Downloaded', inv.invoiceNumber + ' Excel downloaded'); },
//       error: () => { this.messageService.showMessage('error', 'Error', 'Failed to download Invoice Excel'); this.clearInvoiceDownload(); }
//     });
//   }

//   downloadSingleInvoicePDF(inv: any): void {
//     this.downloadingInvoiceId = inv.id; this.downloadingInvType = 'pdf'; this.openInvoiceDropdownId = null;
//     this.dataService.getInvoicePDF(inv.id).subscribe({
//       next: (blob: Blob) => { this.dataService.saveBlob(blob, 'Invoice_' + inv.invoiceNumber + '_' + this.getTodayStr() + '.pdf'); this.clearInvoiceDownload(); this.messageService.showMessage('success', 'Downloaded', inv.invoiceNumber + ' PDF downloaded'); },
//       error: () => { this.messageService.showMessage('error', 'Error', 'Failed to download Invoice PDF'); this.clearInvoiceDownload(); }
//     });
//   }

//   downloadSingleRFQExcel(rfq: any): void {
//     const rfqId = rfq.rfqId || rfq.id;
//     this.downloadingRfqRowId = rfqId; this.downloadingRfqRowType = 'excel'; this.openRFQDropdownId = null;
//     this.dataService.getRFQSummaryExcelForSupplier(rfqId).subscribe({
//       next: (blob: Blob) => { this.dataService.saveBlob(blob, 'RFQ_Summary_' + rfq.rfqNumber + '_' + this.getTodayStr() + '.xlsx'); this.clearRFQRowDownload(); this.messageService.showMessage('success', 'Downloaded', rfq.rfqNumber + ' Excel downloaded'); },
//       error: () => { this.messageService.showMessage('error', 'Error', 'Failed to download RFQ Excel'); this.clearRFQRowDownload(); }
//     });
//   }

//   downloadSingleRFQPDF(rfq: any): void {
//     const rfqId = rfq.rfqId || rfq.id;
//     this.downloadingRfqRowId = rfqId; this.downloadingRfqRowType = 'pdf'; this.openRFQDropdownId = null;
//     this.dataService.getRFQSummaryPDF(rfqId).subscribe({
//       next: (blob: Blob) => { this.dataService.saveBlob(blob, 'RFQ_Summary_' + rfq.rfqNumber + '_' + this.getTodayStr() + '.pdf'); this.clearRFQRowDownload(); this.messageService.showMessage('success', 'Downloaded', rfq.rfqNumber + ' PDF downloaded'); },
//       error: () => { this.messageService.showMessage('error', 'Error', 'Failed to download RFQ PDF'); this.clearRFQRowDownload(); }
//     });
//   }

//   // =========================================================================
//   //  RFQ TAB
//   // =========================================================================

//   loadRFQs(): void {
//     this.isLoadingRFQs = true;
//     this.dataService.getSupplierRFQs(this.supplierId, this.statusFilter, this.searchText).subscribe({
//       next: (r: any) => {
//         const raw = r?.success ? (r.data || []) : (Array.isArray(r) ? r : []);
//         this.rfqList = raw.map((rfq: any) => ({
//           ...rfq,
//           currencyCode  : rfq.currencyCode   || 'INR',
//           currencySymbol: rfq.currencySymbol  || '₹',
//           isExpired     : rfq.isExpired !== undefined ? rfq.isExpired : this.clientSideExpiredCheck(rfq),
//           daysUntilDue  : rfq.daysUntilDue  !== undefined ? rfq.daysUntilDue : this.computeDaysUntilDue(rfq.dueDate)
//         }));
//         this.totalRFQs = this.rfqList.length;
//         this.applyRFQFilters();
//         this.isLoadingRFQs = false;
//       },
//       error: () => { this.isLoadingRFQs = false; }
//     });
//   }

//   clientSideExpiredCheck(rfq: any): boolean {
//     if (!rfq.dueDate) return false;
//     const alreadyActed = rfq.supplierStatus === 'RESPONDED' || rfq.supplierStatus === 'SELECTED' || rfq.supplierStatus === 'REJECTED';
//     return new Date() > new Date(rfq.dueDate) && !alreadyActed;
//   }

//   computeDaysUntilDue(dueDateStr: string): number | null {
//     if (!dueDateStr) return null;
//     return Math.round((new Date(dueDateStr).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
//   }

//   applyRFQFilters(): void {
//     // Step 1: Date filter — tries multiple fields in priority order.
//     // Supplier RFQ API may expose issueDate, publishedAt, or createdAt.
//     // Items with NO parseable date field are INCLUDED (fail-open) so nothing is silently hidden.
//     const dateFiltered = this.filterByDateGeneric(this.rfqList, [
//       'issueDate', 'publishedAt', 'createdAt', 'rfqDate'
//     ]);
//     this.dateFilteredRFQs = dateFiltered;

//     // Step 2: search + status on top of date filter
//     let data = [...dateFiltered];
//     if (this.searchText.trim()) {
//       const s = this.searchText.toLowerCase();
//       data = data.filter(r => r.rfqNumber?.toLowerCase().includes(s) || r.rfqTitle?.toLowerCase().includes(s));
//     }
//     if (this.statusFilter && this.statusFilter !== 'ALL') {
//       if (this.statusFilter === 'EXPIRED') {
//         data = data.filter(r => r.isExpired && !this.hasSubmittedQuote(r));
//       } else {
//         data = data.filter(r => r.supplierStatus === this.statusFilter && !(r.isExpired && !this.hasSubmittedQuote(r)));
//       }
//     }
//     this.filteredRFQList = data;
//     this.totalRFQs       = data.length;
//     this.currentPage     = 1;
//   }

//   // =========================================================================
//   //  PO TAB
//   // =========================================================================

//   loadPOs(): void {
//     this.isLoadingPOs = true;
//     this.dataService.getApprovedPOsForSupplier(this.supplierId).subscribe({
//       next: (r: any) => {
//         const raw = r?.success ? (r.data || []) : [];
//         this.poList = raw.map((po: any) => ({
//           ...po,
//           currencyCode  : po.currencyCode   || 'INR',
//           currencySymbol: po.currencySymbol  || '₹'
//         }));
//         this.applyPOFilters();
//         this.isLoadingPOs = false;
//       },
//       error: () => { this.poList = []; this.filteredPOList = []; this.isLoadingPOs = false; }
//     });
//   }

//   applyPOFilters(): void {
//     // Date filter — tries multiple PO date fields; fail-open if none found
//     const dateFiltered = this.filterByDateGeneric(this.poList, [
//       'createdAt', 'poDate', 'approvedAt', 'issueDate'
//     ]);
//     this.dateFilteredPOs = dateFiltered;

//     let data = [...dateFiltered];
//     if (this.poSearchText.trim()) {
//       const s = this.poSearchText.toLowerCase();
//       data = data.filter(p =>
//         p.poNumber?.toLowerCase().includes(s) ||
//         p.rfqNumber?.toLowerCase().includes(s) ||
//         p.buyerCompanyName?.toLowerCase().includes(s)
//       );
//     }
//     if (this.poStatusFilter !== 'ALL') data = data.filter(p => p.invoiceStatus === this.poStatusFilter);
//     this.filteredPOList = data;
//     this.poCurrentPage  = 1;
//   }

//   // =========================================================================
//   //  INVOICE TAB
//   // =========================================================================

//   loadInvoices(): void {
//     this.isLoadingInvoices = true;
//     this.dataService.getSupplierInvoices(this.supplierId).subscribe({
//       next: (r: any) => {
//         const raw = r?.success ? (r.data || []) : [];
//         this.invoiceList = raw.map((inv: any) => ({
//           ...inv,
//           currencyCode  : inv.currencyCode   || inv.currency || 'INR',
//           currencySymbol: inv.currencySymbol  || '₹'
//         }));
//         this.applyInvoiceFilters();
//         this.isLoadingInvoices = false;
//       },
//       error: () => { this.invoiceList = []; this.filteredInvoiceList = []; this.isLoadingInvoices = false; }
//     });
//   }

//   applyInvoiceFilters(): void {
//     // Date filter — tries multiple invoice date fields; fail-open if none found
//     const dateFiltered = this.filterByDateGeneric(this.invoiceList, [
//       'invoiceDate', 'createdAt', 'issueDate', 'submittedAt'
//     ]);
//     this.dateFilteredInvoices = dateFiltered;

//     let data = [...dateFiltered];
//     if (this.invoiceSearchText.trim()) {
//       const s = this.invoiceSearchText.toLowerCase();
//       data = data.filter(i =>
//         i.invoiceNumber?.toLowerCase().includes(s) ||
//         i.poNumber?.toLowerCase().includes(s) ||
//         i.rfqNumber?.toLowerCase().includes(s)
//       );
//     }
//     if (this.invoiceStatusFilter !== 'ALL') {
//       if (this.invoiceStatusFilter === 'REJECTED') {
//         data = data.filter(i => i.status === 'REJECTED' || i.status === 'REJECTED_CLOSED');
//       } else {
//         data = data.filter(i => i.status === this.invoiceStatusFilter);
//       }
//     }
//     this.filteredInvoiceList = data;
//     this.invoiceCurrentPage  = 1;
//   }

//   // =========================================================================
//   //  INVOICE CREATION
//   // =========================================================================

//   openCreateInvoiceModal(po: any): void {
//     this.isLoadingPODetails   = true;
//     this.selectedPOForInvoice = po;
//     this.isInvoiceModalOpen   = true;
//     this.poLocationCurrencyCode   = po.currencyCode   || 'INR';
//     this.poLocationCurrencySymbol = po.currencySymbol || '₹';
//     this.invoiceForm = {
//       invoiceDate: this.getTodayStr(), dueDate: this.getDueDateStr(30), taxPercentage: 18,
//       paymentTerms: 'Net 30 days from invoice date', notes: '',
//       termsAndConditions: 'Payment is due within 30 days of invoice date. Late payment will attract 2% per month interest.',
//       bankName: localStorage.getItem('bankName') || '',
//       accountHolderName: localStorage.getItem('accountHolderName') || this.supplierName,
//       accountNumber: localStorage.getItem('accountNumber') || '',
//       ifscCode: localStorage.getItem('ifscCode') || '',
//       branchName: localStorage.getItem('branchName') || '',
//       upiId: localStorage.getItem('upiId') || '',
//       overallDiscountAmount: 0, poGrandTotal: 0, lineItems: []
//     };
//     this.dataService.getPODetailsForInvoice(this.supplierId, po.id).subscribe({
//       next: (r: any) => {
//         if (r?.success && r.data) {
//           const d = r.data;
//           this.invoiceForm.overallDiscountAmount = Number(d.overallDiscountAmount || 0);
//           this.invoiceForm.poGrandTotal          = Number(d.grandTotal || 0);
//           if (d.currencyCode) {
//             this.poLocationCurrencyCode   = d.currencyCode;
//             this.poLocationCurrencySymbol = d.currencySymbol || this.getSymbolForCode(d.currencyCode);
//           }
//           this.invoiceForm.lineItems = (d.lineItems || []).map((item: any) => {
//             const poQty        = Number(item.quantity) || 0;
//             const invoicedQty  = Number(item.invoicedQty || item.alreadyInvoicedQty || 0);
//             const remainingQty = Math.max(0, poQty - invoicedQty);
//             return {
//               id: item.id, itemCode: item.itemCode || '',
//               itemDescription: item.itemDescription || item.description || '',
//               itemDescriptionDetailed: item.itemDescriptionDetailed || '',
//               hsnSacCode: item.hsnSacCode || '', uom: item.uom || 'PCS',
//               poQuantity: poQty, alreadyInvoicedQty: invoicedQty,
//               remainingQty, qtyToInvoice: remainingQty,
//               unitPrice: Number(item.unitPrice || item.rate || 0),
//               discountPercentage: Number(item.discountPercentage) || 0,
//               taxPercentage: Number(item.taxPercentage) ?? 18
//             };
//           });
//           this.selectedPOForInvoice = { ...po, ...d };
//         }
//         this.isLoadingPODetails = false;
//       },
//       error: () => { this.invoiceForm.lineItems = []; this.isLoadingPODetails = false; }
//     });
//   }

//   private getSymbolForCode(code: string): string {
//     const m: Record<string, string> = {
//       INR: '₹', USD: '$', EUR: '€', GBP: '£', AED: 'د.إ', SGD: 'S$',
//       JPY: '¥', CNY: '¥', CHF: 'Fr', CAD: 'C$', AUD: 'A$', NZD: 'NZ$',
//       SAR: 'ر.س', QAR: 'ر.ق', KWD: 'د.ك', BHD: '.د.ب', OMR: 'ر.ع.',
//       MYR: 'RM', THB: '฿', IDR: 'Rp', PKR: '₨', BDT: '৳', LKR: '₨', NPR: '₨'
//     };
//     return m[code] || code;
//   }

//   addInvoiceLineItem(): void {
//     this.invoiceForm.lineItems.push({
//       itemCode: '', itemDescription: '', uom: 'PCS',
//       poQuantity: 0, alreadyInvoicedQty: 0, remainingQty: 0,
//       qtyToInvoice: 1, unitPrice: 0, discountPercentage: 0, taxPercentage: 18, hsnSacCode: ''
//     });
//   }

//   removeInvoiceLineItem(i: number): void { this.invoiceForm.lineItems.splice(i, 1); }

//   getLineTotal(item: any): number {
//     const base  = (Number(item.qtyToInvoice) || 0) * (Number(item.unitPrice) || 0);
//     const after = base - (base * (Number(item.discountPercentage) || 0) / 100);
//     return after + (after * (Number(item.taxPercentage) || 0) / 100);
//   }

//   getInvoiceSubtotal(): number {
//     return this.invoiceForm.lineItems.reduce((s, it) => {
//       const base = (Number(it.qtyToInvoice) || 0) * (Number(it.unitPrice) || 0);
//       return s + base - (base * (Number(it.discountPercentage) || 0) / 100);
//     }, 0);
//   }

//   getInvoiceTaxTotal(): number {
//     return this.invoiceForm.lineItems.reduce((s, it) => {
//       const base  = (Number(it.qtyToInvoice) || 0) * (Number(it.unitPrice) || 0);
//       const after = base - (base * (Number(it.discountPercentage) || 0) / 100);
//       return s + (after * (Number(it.taxPercentage) || 0) / 100);
//     }, 0);
//   }

//   getInvoiceGrandTotal(): number {
//     if (!this.invoiceForm.lineItems || !this.invoiceForm.lineItems.length)
//       return Number(this.invoiceForm.poGrandTotal) || 0;
//     const full = this.invoiceForm.lineItems.every((it: any) => Number(it.qtyToInvoice) >= Number(it.remainingQty));
//     if (full && this.invoiceForm.poGrandTotal > 0) return Number(this.invoiceForm.poGrandTotal);
//     return this.getInvoiceSubtotal() + this.getInvoiceTaxTotal() - (Number(this.invoiceForm.overallDiscountAmount) || 0);
//   }

//   saveInvoiceDraft(): void {
//     if (!this.validateInvoiceForm()) return;
//     this.isCreatingInvoice = true;
//     this.dataService.createInvoice(this.supplierId, this.selectedPOForInvoice.id, this.buildInvoicePayload()).subscribe({
//       next: (r: any) => {
//         if (r?.success) {
//           this.messageService.showMessage('success', 'Saved', 'Invoice ' + (r.data?.invoiceNumber) + ' saved as DRAFT');
//           this.isInvoiceModalOpen = false; this.loadInvoices(); this.loadPOs();
//         }
//         this.isCreatingInvoice = false;
//       },
//       error: (err: any) => { this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed to create invoice'); this.isCreatingInvoice = false; }
//     });
//   }

//   createAndSubmitInvoice(): void {
//     if (!this.validateInvoiceForm(true)) return;
//     this.isSubmittingInvoice = true;
//     this.dataService.createInvoice(this.supplierId, this.selectedPOForInvoice.id, this.buildInvoicePayload()).subscribe({
//       next: (cr: any) => {
//         if (cr?.success) {
//           this.dataService.submitInvoice(cr.data.id, this.supplierId).subscribe({
//             next: () => {
//               this.messageService.showMessage('success', 'Invoice Submitted', 'Invoice ' + cr.data.invoiceNumber + ' sent to buyer');
//               this.isInvoiceModalOpen = false; this.loadInvoices(); this.loadPOs(); this.isSubmittingInvoice = false;
//             },
//             error: () => {
//               this.messageService.showMessage('warning', 'Created but not submitted', 'Invoice saved as draft. Please submit manually.');
//               this.isInvoiceModalOpen = false; this.loadInvoices(); this.isSubmittingInvoice = false;
//             }
//           });
//         }
//       },
//       error: (err: any) => { this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed to create invoice'); this.isSubmittingInvoice = false; }
//     });
//   }

//   submitExistingInvoice(invoice: any): void {
//     this.dataService.submitInvoice(invoice.id, this.supplierId).subscribe({
//       next: () => { this.messageService.showMessage('success', 'Submitted', 'Invoice sent to buyer'); this.loadInvoices(); this.loadPOs(); },
//       error: (err: any) => { this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed'); }
//     });
//   }

//   // =========================================================================
//   //  RESUBMIT MODAL
//   // =========================================================================

//   openResubmitModal(invoice: any): void {
//     this.isLoadingInvoice = true;
//     this.dataService.getInvoiceById(invoice.id).subscribe({
//       next: (r: any) => {
//         const full = r?.success ? r.data : invoice;
//         this.selectedInvoiceForResubmit = full;
//         this._populateEditForm(full);
//         this.isResubmitModalOpen = true;
//         this.isLoadingInvoice    = false;
//       },
//       error: () => {
//         this.selectedInvoiceForResubmit = invoice;
//         this._populateEditForm(invoice);
//         this.isResubmitModalOpen = true;
//         this.isLoadingInvoice    = false;
//       }
//     });
//   }

//   private _populateEditForm(inv: any): void {
//     if (inv.currencyCode || inv.currency) {
//       this.poLocationCurrencyCode   = inv.currencyCode || inv.currency || 'INR';
//       this.poLocationCurrencySymbol = inv.currencySymbol || this.getSymbolForCode(this.poLocationCurrencyCode);
//     }
//     this.editInvoiceForm = {
//       invoiceDate: inv.invoiceDate ? inv.invoiceDate.split('T')[0] : this.getTodayStr(),
//       dueDate: inv.dueDate ? inv.dueDate.split('T')[0] : this.getDueDateStr(30),
//       taxPercentage: inv.taxPercentage ?? 18,
//       paymentTerms: inv.paymentTerms || 'Net 30 days from invoice date',
//       notes: inv.notes || '', termsAndConditions: inv.termsAndConditions || '',
//       bankName: inv.bankName || '', accountHolderName: inv.accountHolderName || this.supplierName,
//       accountNumber: inv.accountNumber || '', ifscCode: inv.ifscCode || '',
//       branchName: inv.branchName || '', upiId: inv.upiId || '',
//       resubmitRemarks: '',
//       overallDiscountAmount: Number(inv.overallDiscountAmount || 0),
//       lineItems: (inv.lineItems || inv.items || []).map((it: any) => ({
//         id: it.id, itemCode: it.itemCode || '', itemDescription: it.itemDescription || '',
//         hsnSacCode: it.hsnSacCode || '', uom: it.uom || 'PCS',
//         quantity: it.quantity || 1, unitPrice: it.unitPrice || 0,
//         discountPercentage: it.discountPercentage || 0, taxPercentage: it.taxPercentage ?? 18
//       }))
//     };
//     this.resubmitRemarks = '';
//   }

//   closeResubmitModal(): void { this.isResubmitModalOpen = false; this.selectedInvoiceForResubmit = null; this.resubmitRemarks = ''; }

//   addEditInvoiceLineItem(): void {
//     this.editInvoiceForm.lineItems.push({ itemCode: '', itemDescription: '', hsnSacCode: '', uom: 'PCS', quantity: 1, unitPrice: 0, discountPercentage: 0, taxPercentage: 18 });
//   }

//   removeEditInvoiceLineItem(i: number): void { this.editInvoiceForm.lineItems.splice(i, 1); }

//   getEditLineTotal(it: any): number {
//     const base  = (Number(it.quantity) || 0) * (Number(it.unitPrice) || 0);
//     const after = base - (base * (Number(it.discountPercentage) || 0) / 100);
//     return after + (after * (Number(it.taxPercentage) || 0) / 100);
//   }

//   getEditInvoiceSubtotal(): number {
//     return this.editInvoiceForm.lineItems.reduce((s, it) => {
//       const base = (Number(it.quantity) || 0) * (Number(it.unitPrice) || 0);
//       return s + base - (base * (Number(it.discountPercentage) || 0) / 100);
//     }, 0);
//   }

//   getEditInvoiceTaxTotal(): number {
//     return this.editInvoiceForm.lineItems.reduce((s, it) => {
//       const base  = (Number(it.quantity) || 0) * (Number(it.unitPrice) || 0);
//       const after = base - (base * (Number(it.discountPercentage) || 0) / 100);
//       return s + (after * (Number(it.taxPercentage) || 0) / 100);
//     }, 0);
//   }

//   getEditInvoiceGrandTotal(): number {
//     return this.getEditInvoiceSubtotal() + this.getEditInvoiceTaxTotal() - (Number(this.editInvoiceForm.overallDiscountAmount) || 0);
//   }

//   confirmResubmit(): void {
//     const remarks = (this.editInvoiceForm.resubmitRemarks || this.resubmitRemarks || '').trim();
//     if (!remarks) { this.messageService.showMessage('warning', 'Remarks Required', 'Please describe what you corrected'); return; }
//     if (!this.editInvoiceForm.lineItems.length) { this.messageService.showMessage('warning', 'Validation', 'At least one line item required'); return; }
//     if (!this.selectedInvoiceForResubmit) return;
//     this.isResubmitting = true;
//     const payload = {
//       invoiceDate: this.editInvoiceForm.invoiceDate, dueDate: this.editInvoiceForm.dueDate,
//       taxPercentage: this.editInvoiceForm.taxPercentage, paymentTerms: this.editInvoiceForm.paymentTerms,
//       notes: this.editInvoiceForm.notes, termsAndConditions: this.editInvoiceForm.termsAndConditions,
//       bankName: this.editInvoiceForm.bankName, accountHolderName: this.editInvoiceForm.accountHolderName,
//       accountNumber: this.editInvoiceForm.accountNumber, ifscCode: this.editInvoiceForm.ifscCode,
//       branchName: this.editInvoiceForm.branchName, upiId: this.editInvoiceForm.upiId,
//       overallDiscountAmount: this.editInvoiceForm.overallDiscountAmount || 0,
//       lineItems: this.editInvoiceForm.lineItems
//     };
//     const doResubmit = () => {
//       this.dataService.resubmitInvoice(this.selectedInvoiceForResubmit.id, this.supplierId, remarks).subscribe({
//         next: () => {
//           this.messageService.showMessage('success', 'Resubmitted', 'Invoice ' + this.selectedInvoiceForResubmit.invoiceNumber + ' sent back to buyer');
//           this.isResubmitModalOpen = false; this.isInvoiceViewModalOpen = false;
//           this.selectedInvoiceForResubmit = null; this.resubmitRemarks = ''; this.isResubmitting = false;
//           this.loadInvoices(); this.loadPOs();
//         },
//         error: (e: any) => { this.messageService.showMessage('error', 'Failed', e.error?.message || 'Could not resubmit'); this.isResubmitting = false; }
//       });
//     };
//     this.dataService.updateInvoice(this.selectedInvoiceForResubmit.id, this.supplierId, payload)
//         .subscribe({ next: doResubmit, error: doResubmit });
//   }

//   canResubmit(inv: any): boolean {
//     if (!inv) return false;
//     return inv.status === 'REJECTED' && (inv.canResubmit === true || inv.resubmitCount === 0 || inv.resubmitCount == null);
//   }

//   isPermanentlyClosed(inv: any): boolean { return inv?.status === 'REJECTED_CLOSED'; }

//   // =========================================================================
//   //  VIEW INVOICE
//   // =========================================================================

//   viewInvoice(invoice: any): void {
//     this.isLoadingInvoice = true;
//     this.isInvoiceViewModalOpen = true;
//     this.dataService.getInvoiceById(invoice.id).subscribe({
//       next: (r: any) => { this.selectedInvoice = r?.success ? r.data : invoice; this.isLoadingInvoice = false; },
//       error: () => { this.selectedInvoice = invoice; this.isLoadingInvoice = false; }
//     });
//   }

//   closeInvoiceViewModal(): void { this.isInvoiceViewModalOpen = false; this.selectedInvoice = null; }

//   downloadInvoicePDF(): void {
//     if (!this.selectedInvoice) return;
//     this.isDownloadingInvoicePDF = true;
//     const el = document.getElementById('invoice-print-content');
//     if (!el) { this.isDownloadingInvoicePDF = false; return; }
//     html2canvas(el, { scale: 2, useCORS: true, backgroundColor: '#ffffff' }).then(canvas => {
//       const pdf  = new jsPDF('p', 'mm', 'a4');
//       const data = canvas.toDataURL('image/png');
//       const pw = 210, ih = (canvas.height * pw) / canvas.width;
//       let hl = ih, pos = 0;
//       pdf.addImage(data, 'PNG', 0, pos, pw, ih); hl -= 297;
//       while (hl > 0) { pos = hl - ih; pdf.addPage(); pdf.addImage(data, 'PNG', 0, pos, pw, ih); hl -= 297; }
//       pdf.save(this.selectedInvoice.invoiceNumber + '.pdf');
//       this.isDownloadingInvoicePDF = false;
//     }).catch(() => { this.isDownloadingInvoicePDF = false; });
//   }

//   // =========================================================================
//   //  FORM HELPERS
//   // =========================================================================

//   private validateInvoiceForm(requireBank = false): boolean {
//     if (!this.invoiceForm.lineItems.length) { this.messageService.showMessage('warning', 'Validation', 'Add at least one line item'); return false; }
//     const today = this.getTodayStr();
//     if (this.invoiceForm.invoiceDate < today) { this.messageService.showMessage('warning', 'Invalid Date', 'Invoice date cannot be in the past'); return false; }
//     if (this.invoiceForm.dueDate < today) { this.messageService.showMessage('warning', 'Invalid Date', 'Payment due date cannot be in the past'); return false; }
//     for (const it of this.invoiceForm.lineItems) {
//       if (!it.itemDescription) { this.messageService.showMessage('warning', 'Validation', 'Fill description for all items'); return false; }
//       if (Number(it.qtyToInvoice) <= 0) { this.messageService.showMessage('warning', 'Validation', 'Qty must be > 0 for "' + it.itemDescription + '"'); return false; }
//       if (it.remainingQty > 0 && Number(it.qtyToInvoice) > Number(it.remainingQty)) { this.messageService.showMessage('warning', 'Qty Exceeded', '"' + it.itemDescription + '" exceeds remaining PO qty'); return false; }
//     }
//     if (requireBank && (!this.invoiceForm.bankName || !this.invoiceForm.accountNumber || !this.invoiceForm.ifscCode)) { this.messageService.showMessage('warning', 'Bank Details Required', 'Enter bank name, account number and IFSC'); return false; }
//     return true;
//   }

//   private buildInvoicePayload(): any {
//     return {
//       invoiceDate: this.invoiceForm.invoiceDate, dueDate: this.invoiceForm.dueDate,
//       taxPercentage: this.invoiceForm.taxPercentage, paymentTerms: this.invoiceForm.paymentTerms,
//       notes: this.invoiceForm.notes, termsAndConditions: this.invoiceForm.termsAndConditions,
//       bankName: this.invoiceForm.bankName, accountHolderName: this.invoiceForm.accountHolderName,
//       accountNumber: this.invoiceForm.accountNumber, ifscCode: this.invoiceForm.ifscCode,
//       branchName: this.invoiceForm.branchName, upiId: this.invoiceForm.upiId,
//       overallDiscountAmount: this.invoiceForm.overallDiscountAmount || 0,
//       lineItems: this.invoiceForm.lineItems.map(it => ({
//         id: it.id, itemCode: it.itemCode, itemDescription: it.itemDescription,
//         itemDescriptionDetailed: it.itemDescriptionDetailed || '',
//         hsnSacCode: it.hsnSacCode, uom: it.uom, quantity: it.qtyToInvoice,
//         unitPrice: it.unitPrice, discountPercentage: it.discountPercentage, taxPercentage: it.taxPercentage
//       }))
//     };
//   }

//   // =========================================================================
//   //  RFQ METHODS
//   // =========================================================================

//   switchTab(tab: 'rfq' | 'po' | 'invoice'): void { this.activeTab = tab; }

//   viewRFQDetails(rfq: any): void {
//     const id = rfq.rfqId || rfq.id;
//     if (!id) { this.messageService.showMessage('error', 'Error', 'RFQ ID not found'); return; }
//     this.isLoading = true;
//     this.dataService.getSupplierRFQDetails(this.supplierId, id).subscribe({
//       next: (r: any) => {
//         if (r?.success && r.data) { this.selectedRFQ = r.data; this.isViewModalOpen = true; }
//         else this.messageService.showMessage('error', 'Error', 'Failed to load RFQ details');
//         this.isLoading = false;
//       },
//       error: () => { this.messageService.showMessage('error', 'Error', 'Failed to load RFQ details'); this.isLoading = false; }
//     });
//   }

//   closeViewModal(): void { this.isViewModalOpen = false; this.selectedRFQ = null; }

//   navigateToQuoteSubmission(rfq: any): void {
//     const expired = rfq.isExpired !== undefined ? rfq.isExpired : this.clientSideExpiredCheck(rfq);
//     if (expired) { this.messageService.showMessage('warning', 'Submission Closed', 'The deadline for RFQ ' + (rfq.rfqNumber || '') + ' has passed.'); return; }
//     if (rfq.supplierStatus === 'RESPONDED') { this.messageService.showMessage('info', 'Already Submitted', 'You have already submitted a quote for this RFQ.'); return; }
//     this.router.navigate(['/supplier-quote', rfq.rfqId || rfq.id]);
//   }

//   viewSubmittedQuote(rfq: any): void { this.router.navigate(['/supplier-quote', rfq.rfqId || rfq.id], { queryParams: { viewOnly: true } }); }

//   canSubmitQuote(rfq: any): boolean {
//     if (!rfq) return false;
//     if (rfq.canSubmitQuote !== undefined) return rfq.canSubmitQuote;
//     const expired = rfq.isExpired !== undefined ? rfq.isExpired : this.clientSideExpiredCheck(rfq);
//     return !expired && (rfq.supplierStatus === 'PENDING' || rfq.supplierStatus === 'SENT');
//   }

//   hasSubmittedQuote(rfq: any): boolean { return rfq?.supplierStatus === 'RESPONDED' || rfq?.supplierStatus === 'SELECTED'; }

//   getDueDateLabel(rfq: any): string {
//     const d = rfq?.daysUntilDue;
//     if (d === null || d === undefined) return '';
//     if (d > 1)    return d + ' days left';
//     if (d === 1)  return '1 day left';
//     if (d === 0)  return 'Due today';
//     if (d === -1) return 'Overdue by 1 day';
//     return 'Overdue by ' + Math.abs(d) + ' days';
//   }

//   openQuoteModal(_rfq: any): void {}
//   submitQuote(): void {}
//   closeQuoteModal(): void { this.isQuoteModalOpen = false; }
//   downloadRFQPDF(): void {}
//   downloadAttachment(att: any): void { window.open(environment.API_URL + 'leadcapture' + att.downloadUrl, '_blank'); }

//   // =========================================================================
//   //  PAGINATION
//   // =========================================================================

//   get paginatedRFQs():     any[] { return this.filteredRFQList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize); }
//   get totalPages():        number { return Math.ceil(this.totalRFQs / this.pageSize); }
//   nextPage():     void { if (this.currentPage < this.totalPages) this.currentPage++; }
//   previousPage(): void { if (this.currentPage > 1) this.currentPage--; }

//   get paginatedPOs():      any[] { return this.filteredPOList.slice((this.poCurrentPage - 1) * this.poPageSize, this.poCurrentPage * this.poPageSize); }
//   get totalPOPages():      number { return Math.ceil(this.filteredPOList.length / this.poPageSize); }

//   get paginatedInvoices(): any[] { return this.filteredInvoiceList.slice((this.invoiceCurrentPage - 1) * this.invoicePageSize, this.invoiceCurrentPage * this.invoicePageSize); }
//   get totalInvoicePages(): number { return Math.ceil(this.filteredInvoiceList.length / this.invoicePageSize); }

//   // =========================================================================
//   //  UTILITY
//   // =========================================================================

//   refresh(): void { this.currentPage = 1; this.poCurrentPage = 1; this.invoiceCurrentPage = 1; this.loadDashboardData(); }
//   onSearchChange(): void { this.currentPage = 1; this.applyRFQFilters(); }

//   getInitials(name: string): string {
//     if (!name?.trim()) return 'SU';
//     const p = name.trim().split(' ');
//     return p.length === 1 ? p[0].substring(0, 2).toUpperCase() : (p[0][0] + p[p.length - 1][0]).toUpperCase();
//   }

//   getStatusBadgeClass(status: string): string {
//     const m: any = { PENDING: 'warning', SENT: 'info', RESPONDED: 'success', SELECTED: 'success', REJECTED: 'danger' };
//     return m[status] || 'secondary';
//   }

//   getInvoiceStatusClass(status: string): string {
//     const m: any = { DRAFT: 'secondary', SUBMITTED: 'primary', APPROVED: 'success', PAID: 'info', REJECTED: 'warning', REJECTED_CLOSED: 'danger' };
//     return m[status] || 'secondary';
//   }

//   getInvoiceStatusLabel(status: string): string {
//     const m: any = { DRAFT: 'Draft', SUBMITTED: 'Submitted', APPROVED: 'Approved', PAID: 'Paid', REJECTED: 'Rejected', REJECTED_CLOSED: 'Closed' };
//     return m[status] || status;
//   }

//   formatDate(d: string): string {
//     if (!d) return 'N/A';
//     try { return new Date(d).toLocaleDateString('en-GB'); } catch { return 'N/A'; }
//   }

//   formatCurrency(amount: number | null, currencyCode?: string): string {
//     const code      = currencyCode || 'INR';
//     const symbol    = this.getSymbolForCode(code);
//     const val       = Number(amount ?? 0);
//     const formatted = val.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
//     const rtl       = ['AED','SAR','QAR','KWD','BHD','OMR','IRR','IQD','JOD','LBP'];
//     return rtl.includes(code) ? formatted + ' ' + symbol : symbol + ' ' + formatted;
//   }

//   formatInvoiceCurrency(amount: number | null): string { return this.formatCurrency(amount, this.poLocationCurrencyCode); }

//   formatFileSize(bytes: number): string {
//     if (!bytes) return '0 B';
//     const k = 1024, sizes = ['B','KB','MB','GB'];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
//   }

//   objectKeys(obj: any): string[] { return obj ? Object.keys(obj) : []; }
//   getTodayStr():         string  { return new Date().toISOString().split('T')[0]; }
//   getDueDateStr(days: number): string { const d = new Date(); d.setDate(d.getDate() + days); return d.toISOString().split('T')[0]; }
//   navigateTo(route: string): void { this.router.navigate([route]); }
//   isOverdue(inv: any): boolean { return !(!inv?.dueDate || inv.status === 'PAID') && new Date(inv.dueDate) < new Date(); }
// }


import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  CardComponent, CardBodyComponent, CardHeaderComponent,
  RowComponent, ColComponent, ContainerComponent,
  ButtonDirective, BadgeComponent, FormModule,
  TableModule, ModalModule, SpinnerComponent
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { AuthService } from '../../../shared/service/AuthService';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { RfqChatComponent } from '../rfq-chat/rfq-chat.component';
import { ChatService } from '../../../shared/service/chat.service';
import { MeetingScheduleComponent } from '../meeting-schedule/meeting-schedule.component';
import { MeetingListComponent }     from '../meeting-list/meeting-list.component';
import { environment } from '../../../environments/environment';
import { MeetingRoomComponent }     from '../meeting-room/meeting-room.component';
import { MeetingService, MeetingParticipantInfo } from '../../../shared/service/meeting.service';
import { ExcelService } from '../../../shared/service/ExcelService';

interface FYOption {
  value: string;
  label: string;
  from: Date;
  to: Date;
}

interface PendingInvoiceAttachment {
  file: File;
  base64: string;
  previewUrl: string;
  isImage: boolean;
}

@Component({
  selector: 'app-supplier-dashboard',
  templateUrl: './supplier-dashboard.component.html',
  styleUrls: ['./supplier-dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, ContainerComponent, RowComponent, ColComponent,
    CardComponent, CardBodyComponent, CardHeaderComponent, ButtonDirective,
    IconDirective, BadgeComponent, FormModule, TableModule, ModalModule, SpinnerComponent,
    RfqChatComponent, MeetingScheduleComponent, MeetingListComponent, MeetingRoomComponent
  ]
})
export class SupplierDashboardComponent implements OnInit, OnDestroy {

  // ── User profile ──────────────────────────────────────────────────────────
  fullName      : string = '';
  email         : string = '';
  phone         : string = '';
  departmentName: string = '';
  supplierName  : string = '';
  supplierId    : number = 0;
  companyName   : string = '';
  companyPhone  : string = '';
  city          : string = '';
  state         : string = '';
  userInitials  : string = 'SU';

  // ── Tab state ─────────────────────────────────────────────────────────────
  // The RFQ tab was removed with the RFQ module — suppliers now work directly from
  // released Purchase Orders, so the dashboard opens on 'po'. The union still allows
  // 'rfq' only because the (now unreachable) RFQ panel markup is still in the template
  // pending the file-level cleanup pass; nothing can switch to it.
  activeTab: 'rfq' | 'po' | 'invoice' = 'po';

  // ── Statistics ────────────────────────────────────────────────────────────
  statistics = {
    totalRFQs    : 0,
    pendingRFQs  : 0,
    respondedRFQs: 0,
    selectedRFQs : 0,
    rejectedRFQs : 0,
    expiredRFQs  : 0
  };

  // ── RFQ list ──────────────────────────────────────────────────────────────
  rfqList        : any[] = [];
  filteredRFQList: any[] = [];
  searchText     : string = '';
  statusFilter   : string = 'ALL';
  currentPage    : number = 1;
  pageSize       : number = 10;
  totalRFQs      : number = 0;

  // ── Date-filtered intermediates ───────────────────────────────────────────
  dateFilteredRFQs    : any[] = [];
  dateFilteredPOs     : any[] = [];
  dateFilteredInvoices: any[] = [];

  // ── PO list ───────────────────────────────────────────────────────────────
  poList        : any[] = [];
  filteredPOList: any[] = [];
  poSearchText  : string = '';
  poStatusFilter: string = 'ALL';
  poCurrentPage : number = 1;
  poPageSize    : number = 10;
  // "Service" = a follow-up PO auto-created from an approved Service Entry Sheet's
  // additional-items (spares) quote (sourceSesId is set). "Regular" = everything else, as before.
  poOriginFilter: 'ALL' | 'SERVICE' | 'REGULAR' = 'ALL';

  // ── Invoice list ──────────────────────────────────────────────────────────
  invoiceList         : any[] = [];
  filteredInvoiceList : any[] = [];
  invoiceSearchText   : string = '';
  invoiceStatusFilter : string = 'ALL';
  invoiceCurrentPage  : number = 1;
  invoicePageSize     : number = 10;
  invoiceOriginFilter: 'ALL' | 'SERVICE' | 'REGULAR' = 'ALL';

  // ── Currency ──────────────────────────────────────────────────────────────
  poLocationCurrencyCode  : string = 'INR';
  poLocationCurrencySymbol: string = '₹';

  // ── Date Filter State ─────────────────────────────────────────────────────
  financialYearOptions: FYOption[] = [];
  selectedFYOption    : string = '';
  customFromDate      : string = '';
  customToDate        : string = '';
  activeDateRangeLabel: string = '';

  // ── Report download state ─────────────────────────────────────────────────
  isDownloadingRFQReport    : boolean = false;
  isDownloadingPOReport     : boolean = false;
  isDownloadingInvoiceReport: boolean = false;
  downloadingPOId      : number | null = null;
  downloadingInvoiceId : number | null = null;
  downloadingPOType    : 'excel' | 'pdf' | null = null;
  downloadingInvType   : 'excel' | 'pdf' | null = null;
  downloadingRfqRowId  : number | null = null;
  downloadingRfqRowType: 'excel' | 'pdf' | null = null;
  showRFQDownloadMenu    : boolean = false;
  showPODownloadMenu     : boolean = false;
  showInvoiceDownloadMenu: boolean = false;
  openPODropdownId       : number | null = null;
  openInvoiceDropdownId  : number | null = null;
  openRFQDropdownId      : number | null = null;

  // ── Chat state ────────────────────────────────────────────────────────────
  isChatOpen    : boolean = false;
  chatRfqId     : number  = 0;
  chatRfqNumber : string  = '';
  chatUserId    : number  = 0;   // This will be the supplierId
  chatUserName  : string  = '';
  unreadCounts  : { [rfqId: number]: number } = {};
  private unreadPollInterval: any = null;

  // ── Meeting state ─────────────────────────────────────────────────────────
  isMeetingListOpen    : boolean = false;
  isMeetingScheduleOpen: boolean = false;
  isMeetingRoomOpen    : boolean = false;
  meetingRfqId         : number  = 0;
  meetingRfqNumber     : string  = '';
  meetingRoomId        : string  = '';
  meetingParticipants  : MeetingParticipantInfo[] = [];
  allRfqParticipants   : MeetingParticipantInfo[] = [];

  // ── Invoice creation modal ────────────────────────────────────────────────
  isInvoiceModalOpen   : boolean = false;
  selectedPOForInvoice : any    = null;
  isLoadingPODetails   : boolean = false;
  isCreatingInvoice    : boolean = false;
  isSubmittingInvoice  : boolean = false;

  // Blanket/Contract POs only: choice between filling the form in by hand ("write") or
  // attaching an existing invoice document ("upload") — the numbers below still get filled
  // in either way, the file is supporting evidence alongside them, not a replacement.
  invoiceInputMode: 'write' | 'upload' = 'write';
  pendingInvoiceAttachments: PendingInvoiceAttachment[] = [];

  invoiceForm = {
    invoiceDate          : this.getTodayStr(),
    dueDate              : this.getDueDateStr(30),
    taxPercentage        : 18,
    paymentTerms         : 'Net 30 days from invoice date',
    notes                : '',
    termsAndConditions   : 'Payment is due within 30 days of invoice date. Late payment will attract 2% per month interest.',
    bankName             : '',
    accountHolderName    : '',
    accountNumber        : '',
    ifscCode             : '',
    branchName           : '',
    upiId                : '',
    overallDiscountAmount: 0,
    poGrandTotal         : 0,
    lineItems            : [] as any[]
  };

  // ── Invoice view modal ────────────────────────────────────────────────────
  isInvoiceViewModalOpen : boolean = false;
  selectedInvoice        : any    = null;
  isLoadingInvoice       : boolean = false;
  isDownloadingInvoicePDF: boolean = false;

  // ── Resubmit modal ────────────────────────────────────────────────────────
  isResubmitModalOpen       : boolean = false;
  selectedInvoiceForResubmit: any    = null;
  resubmitRemarks           : string = '';
  isResubmitting            : boolean = false;

  editInvoiceForm: {
    invoiceDate: string; dueDate: string; taxPercentage: number;
    paymentTerms: string; notes: string; termsAndConditions: string;
    bankName: string; accountHolderName: string; accountNumber: string;
    ifscCode: string; branchName: string; upiId: string;
    resubmitRemarks: string; overallDiscountAmount: number; lineItems: any[];
  } = {
    invoiceDate: '', dueDate: '', taxPercentage: 18, paymentTerms: '',
    notes: '', termsAndConditions: '', bankName: '', accountHolderName: '',
    accountNumber: '', ifscCode: '', branchName: '', upiId: '',
    resubmitRemarks: '', overallDiscountAmount: 0, lineItems: []
  };

  // ── RFQ view modal ────────────────────────────────────────────────────────
  selectedRFQ     : any    = null;
  isViewModalOpen : boolean = false;
  isQuoteModalOpen: boolean = false;
  quoteForm = { quoteAmount: 0, notes: '' };

  // ── Loading / error ───────────────────────────────────────────────────────
  isLoading         : boolean = false;
  isLoadingStats    : boolean = false;
  isLoadingRFQs     : boolean = false;
  isLoadingPOs      : boolean = false;
  isLoadingInvoices : boolean = false;
  errorMessage      : string | null = null;

  constructor(
    private authService   : AuthService,
    private dataService   : DataService,
    private messageService: MessageService,
    private router        : Router,
    private chatService   : ChatService,
    private meetingService: MeetingService,
    private excelService  : ExcelService,
  ) {}

  ngOnInit(): void {
    this.buildFinancialYearOptions();
    this.selectedFYOption = this.getCurrentFYValue();
    this.updateActiveDateRangeLabel();
    this.loadSupplierUserData();
    this.loadDashboardData();
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.showRFQDownloadMenu     = false;
    this.showPODownloadMenu      = false;
    this.showInvoiceDownloadMenu = false;
    this.openPODropdownId        = null;
    this.openInvoiceDropdownId   = null;
    this.openRFQDropdownId       = null;
  }

  // =========================================================================
  // ✅ STATUS KEY METHODS — Core of the new status system
  // =========================================================================

  /**
   * Returns a string key that the HTML [ngSwitch] uses to render the correct
   * status pill for an RFQ row.
   *
   * Keys:
   *   'pending'      — PENDING or SENT, deadline not passed
   *   'responded'    — Quote submitted, buyer hasn't decided yet
   *   'selected'     — This supplier won (SELECTED)
   *   'not-selected' — Buyer chose someone else (REJECTED)
   *   'expired'      — Deadline passed with no response
   */
  getRFQStatusKey(rfq: any): string {
    const status  = (rfq.supplierStatus || '').toUpperCase();
    const expired = rfq.isExpired !== undefined
      ? rfq.isExpired
      : this.clientSideExpiredCheck(rfq);

    if (status === 'SELECTED') return 'selected';
    if (status === 'REJECTED') return 'not-selected';

    if (expired && status !== 'RESPONDED' && status !== 'SELECTED') return 'expired';

    if (status === 'RESPONDED') return 'responded';
    if (status === 'PENDING' || status === 'SENT' || !status) return 'pending';

    return 'pending';
  }

  /**
   * Returns a string key for the PO status pill.
   *
   * Keys:
   *   'no-invoice'       — PO received, supplier hasn't created invoice
   *   'invoice-draft'    — Invoice created but not submitted
   *   'invoice-submitted'— Invoice sent, awaiting buyer approval
   *   'invoice-approved' — Invoice approved, waiting for payment
   *   'invoice-rejected' — Invoice rejected, needs correction
   *   'invoice-closed'   — Permanently closed
   *   'paid'             — Payment received
   */
  getPOStatusKey(po: any): string {
    if (!po.hasInvoice) return 'no-invoice';

    const invStatus = (po.invoiceStatus || '').toUpperCase();

    if (invStatus === 'PAID')             return 'paid';
    if (invStatus === 'APPROVED')         return 'invoice-approved';
    if (invStatus === 'SUBMITTED')        return 'invoice-submitted';
    if (invStatus === 'DRAFT')            return 'invoice-draft';
    if (invStatus === 'REJECTED_CLOSED')  return 'invoice-closed';
    if (invStatus === 'REJECTED')         return 'invoice-rejected';

    return 'no-invoice';
  }

  /**
   * Returns a string key for the Invoice status pill.
   *
   * Keys:
   *   'draft'          — Saved, not sent
   *   'submitted'      — Sent to buyer, under review
   *   'approved'       — Approved, awaiting payment
   *   'rejected'       — Rejected, can resubmit once
   *   'rejected-closed'— Permanently closed
   *   'paid'           — Payment received
   */
  getInvoiceStatusKey(inv: any): string {
    const status = (inv.status || '').toUpperCase();

    if (status === 'PAID')            return 'paid';
    if (status === 'APPROVED')        return 'approved';
    if (status === 'SUBMITTED')       return 'submitted';
    if (status === 'DRAFT')           return 'draft';
    if (status === 'REJECTED_CLOSED') return 'rejected-closed';
    if (status === 'REJECTED')        return 'rejected';

    return 'draft';
  }

  // =========================================================================
  // FINANCIAL YEAR HELPERS
  // =========================================================================

  private buildFinancialYearOptions(): void {
    const today = new Date();
    let currentFYStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
    this.financialYearOptions = [];
    for (let i = 0; i < 4; i++) {
      const startYear = currentFYStartYear - i;
      const endYear   = startYear + 1;
      const from = new Date(startYear, 3, 1, 0, 0, 0, 0);
      const to   = new Date(endYear,   2, 31, 23, 59, 59, 999);
      this.financialYearOptions.push({
        value: `FY${startYear}-${String(endYear).slice(-2)}`,
        label: `FY ${startYear}-${String(endYear).slice(-2)}  (Apr ${startYear} – Mar ${endYear})`,
        from, to
      });
    }
  }

  getCurrentFYValue(): string {
    return this.financialYearOptions.length > 0 ? this.financialYearOptions[0].value : 'ALL';
  }

  onFYOptionChange(): void {
    if (this.selectedFYOption !== 'CUSTOM') {
      this.customFromDate = '';
      this.customToDate   = '';
    }
    this.updateActiveDateRangeLabel();
    this.applyRFQFilters();
    this.applyPOFilters();
    this.applyInvoiceFilters();
  }

  resetDateFilter(): void {
    this.selectedFYOption = this.getCurrentFYValue();
    this.customFromDate   = '';
    this.customToDate     = '';
    this.updateActiveDateRangeLabel();
    this.applyRFQFilters();
    this.applyPOFilters();
    this.applyInvoiceFilters();
  }

  private updateActiveDateRangeLabel(): void {
    if (this.selectedFYOption === 'ALL') { this.activeDateRangeLabel = 'All Time'; return; }
    if (this.selectedFYOption === 'CUSTOM') {
      if (this.customFromDate && this.customToDate)
        this.activeDateRangeLabel = `${this.formatDisplayDate(this.customFromDate)} – ${this.formatDisplayDate(this.customToDate)}`;
      else if (this.customFromDate)
        this.activeDateRangeLabel = `From ${this.formatDisplayDate(this.customFromDate)}`;
      else if (this.customToDate)
        this.activeDateRangeLabel = `Up to ${this.formatDisplayDate(this.customToDate)}`;
      else
        this.activeDateRangeLabel = 'Custom Range';
      return;
    }
    const fy = this.financialYearOptions.find(f => f.value === this.selectedFYOption);
    this.activeDateRangeLabel = fy ? fy.label : '';
  }

  private formatDisplayDate(dateStr: string): string {
    if (!dateStr) return '';
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  private getActiveDateRange(): { from: Date; to: Date } | null {
    if (this.selectedFYOption === 'ALL') return null;
    if (this.selectedFYOption === 'CUSTOM') {
      const from = this.customFromDate ? new Date(this.customFromDate + 'T00:00:00') : null;
      const to   = this.customToDate   ? new Date(this.customToDate   + 'T23:59:59') : null;
      if (!from && !to) return null;
      return { from: from ?? new Date(0), to: to ?? new Date(8640000000000000) };
    }
    const fy = this.financialYearOptions.find(f => f.value === this.selectedFYOption);
    return fy ? { from: fy.from, to: fy.to } : null;
  }

  private filterByDateGeneric(items: any[], dateFields: string[]): any[] {
    const range = this.getActiveDateRange();
    if (!range) return items;
    return items.filter((item: any) => {
      for (const field of dateFields) {
        if (item[field]) {
          const d = new Date(item[field]);
          if (!isNaN(d.getTime())) return d >= range.from && d <= range.to;
        }
      }
      return true; // fail-open: include items with no date
    });
  }

  // =========================================================================
  // INIT
  // =========================================================================

  loadSupplierUserData(): void {
    this.fullName       = localStorage.getItem('fullName')       || 'Supplier User';
    this.email          = localStorage.getItem('email')          || '';
    this.phone          = localStorage.getItem('phone')          || '';
    this.departmentName = localStorage.getItem('departmentName') || 'Supplier';
    this.supplierName   = localStorage.getItem('supplierName')   || '';
    this.companyName    = this.supplierName;
    this.companyPhone   = localStorage.getItem('companyPhone')   || localStorage.getItem('phone') || '';
    this.city           = localStorage.getItem('city')           || '';
    this.state          = localStorage.getItem('state')          || '';
    const sid           = this.authService.getSupplierId();
    this.supplierId     = sid ? sid : Number(localStorage.getItem('supplierId') || '0');
    this.userInitials   = this.getInitials(this.fullName);
  }

  loadDashboardData(): void {
    if (!this.supplierId) { this.errorMessage = 'Supplier ID not found. Please login again.'; return; }
    this.loadStatistics();
    // loadRFQs() is no longer called: the RFQ tab is gone, so fetching that list would be
    // a failing request on every dashboard load with nowhere to display the result.
    this.loadPOs();
    this.loadInvoices();
  }

  loadStatistics(): void {
    this.isLoadingStats = true;
    this.dataService.getSupplierDashboardStatistics(this.supplierId).subscribe({
      next: (r: any) => {
        if (r?.success && r.data) this.statistics = { ...this.statistics, ...r.data };
        this.isLoadingStats = false;
      },
      error: () => { this.isLoadingStats = false; }
    });
  }

  // =========================================================================
  // DROPDOWN TOGGLES
  // =========================================================================

  toggleRFQDownloadMenu(e: Event): void {
    e.stopPropagation();
    this.showRFQDownloadMenu = !this.showRFQDownloadMenu;
    this.showPODownloadMenu = false; this.showInvoiceDownloadMenu = false;
  }
  togglePODownloadMenu(e: Event): void {
    e.stopPropagation();
    this.showPODownloadMenu = !this.showPODownloadMenu;
    this.showRFQDownloadMenu = false; this.showInvoiceDownloadMenu = false;
  }
  toggleInvoiceDownloadMenu(e: Event): void {
    e.stopPropagation();
    this.showInvoiceDownloadMenu = !this.showInvoiceDownloadMenu;
    this.showRFQDownloadMenu = false; this.showPODownloadMenu = false;
  }
  togglePORowDropdown(poId: number, e: Event): void {
    e.stopPropagation();
    this.openPODropdownId = this.openPODropdownId === poId ? null : poId;
    this.openInvoiceDropdownId = null; this.openRFQDropdownId = null;
  }
  toggleInvoiceRowDropdown(invId: number, e: Event): void {
    e.stopPropagation();
    this.openInvoiceDropdownId = this.openInvoiceDropdownId === invId ? null : invId;
    this.openPODropdownId = null; this.openRFQDropdownId = null;
  }
  toggleRFQRowDropdown(rfqId: number, e: Event): void {
    e.stopPropagation();
    this.openRFQDropdownId = this.openRFQDropdownId === rfqId ? null : rfqId;
    this.openPODropdownId = null; this.openInvoiceDropdownId = null;
  }

  isPORowDownloading(poId: number): boolean       { return this.downloadingPOId === poId; }
  isInvoiceRowDownloading(invId: number): boolean  { return this.downloadingInvoiceId === invId; }
  isRFQRowDownloading(rfqId: number): boolean      { return this.downloadingRfqRowId === rfqId; }
  private clearPODownload(): void       { this.downloadingPOId = null; this.downloadingPOType = null; }
  private clearInvoiceDownload(): void  { this.downloadingInvoiceId = null; this.downloadingInvType = null; }
  private clearRFQRowDownload(): void   { this.downloadingRfqRowId = null; this.downloadingRfqRowType = null; }

  // =========================================================================
  // REPORT DOWNLOADS
  // =========================================================================

  downloadSinglePOExcel(po: any): void {
    this.downloadingPOId = po.id; this.downloadingPOType = 'excel'; this.openPODropdownId = null;
    this.dataService.getPOSummaryExcel(po.id).subscribe({
      next: (blob: Blob) => {
        this.dataService.saveBlob(blob, 'PO_' + po.poNumber + '_' + this.getTodayStr() + '.xlsx');
        this.clearPODownload();
        this.messageService.showMessage('success', 'Downloaded', po.poNumber + ' Excel downloaded');
      },
      error: () => { this.messageService.showMessage('error', 'Error', 'Failed to download PO Excel'); this.clearPODownload(); }
    });
  }

  downloadSingleInvoiceExcel(inv: any): void {
    this.downloadingInvoiceId = inv.id; this.downloadingInvType = 'excel'; this.openInvoiceDropdownId = null;
    this.dataService.getInvoiceExcel(inv.id).subscribe({
      next: (blob: Blob) => {
        this.dataService.saveBlob(blob, 'Invoice_' + inv.invoiceNumber + '_' + this.getTodayStr() + '.xlsx');
        this.clearInvoiceDownload();
        this.messageService.showMessage('success', 'Downloaded', inv.invoiceNumber + ' Excel downloaded');
      },
      error: () => { this.messageService.showMessage('error', 'Error', 'Failed to download Invoice Excel'); this.clearInvoiceDownload(); }
    });
  }

  downloadSingleRFQExcel(rfq: any): void {
    const rfqId = rfq.rfqId || rfq.id;
    this.downloadingRfqRowId = rfqId; this.downloadingRfqRowType = 'excel'; this.openRFQDropdownId = null;
    this.dataService.getRFQSummaryExcelForSupplier(rfqId).subscribe({
      next: (blob: Blob) => {
        this.dataService.saveBlob(blob, 'RFQ_Summary_' + rfq.rfqNumber + '_' + this.getTodayStr() + '.xlsx');
        this.clearRFQRowDownload();
        this.messageService.showMessage('success', 'Downloaded', rfq.rfqNumber + ' Excel downloaded');
      },
      error: () => { this.messageService.showMessage('error', 'Error', 'Failed to download RFQ Excel'); this.clearRFQRowDownload(); }
    });
  }

  // =========================================================================
  // RFQ TAB
  // =========================================================================

  loadRFQs(): void {
    this.isLoadingRFQs = true;
    this.dataService.getSupplierRFQs(this.supplierId, this.statusFilter, this.searchText).subscribe({
      next: (r: any) => {
        const raw = r?.success ? (r.data || []) : (Array.isArray(r) ? r : []);
        this.rfqList = raw.map((rfq: any) => ({
          ...rfq,
          currencyCode  : rfq.currencyCode   || 'INR',
          currencySymbol: rfq.currencySymbol  || '₹',
          isExpired     : rfq.isExpired !== undefined ? rfq.isExpired : this.clientSideExpiredCheck(rfq),
          daysUntilDue  : rfq.daysUntilDue  !== undefined ? rfq.daysUntilDue : this.computeDaysUntilDue(rfq.dueDate)
        }));
        this.totalRFQs = this.rfqList.length;
        this.applyRFQFilters();
        this.loadUnreadCounts();
        this.isLoadingRFQs = false;
      },
      error: () => { this.isLoadingRFQs = false; }
    });
  }

  clientSideExpiredCheck(rfq: any): boolean {
    if (!rfq.dueDate) return false;
    const alreadyActed = rfq.supplierStatus === 'RESPONDED'
      || rfq.supplierStatus === 'SELECTED'
      || rfq.supplierStatus === 'REJECTED';
    return new Date() > new Date(rfq.dueDate) && !alreadyActed;
  }

  computeDaysUntilDue(dueDateStr: string): number | null {
    if (!dueDateStr) return null;
    return Math.round((new Date(dueDateStr).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  }

  applyRFQFilters(): void {
    const dateFiltered = this.filterByDateGeneric(this.rfqList, ['issueDate', 'publishedAt', 'createdAt', 'rfqDate']);
    this.dateFilteredRFQs = dateFiltered;

    let data = [...dateFiltered];
    if (this.searchText.trim()) {
      const s = this.searchText.toLowerCase();
      data = data.filter(r => r.rfqNumber?.toLowerCase().includes(s) || r.rfqTitle?.toLowerCase().includes(s));
    }
    if (this.statusFilter && this.statusFilter !== 'ALL') {
      if (this.statusFilter === 'EXPIRED') {
        data = data.filter(r => r.isExpired && !this.hasSubmittedQuote(r));
      } else {
        data = data.filter(r => r.supplierStatus === this.statusFilter && !(r.isExpired && !this.hasSubmittedQuote(r)));
      }
    }
    this.filteredRFQList = data;
    this.totalRFQs       = data.length;
    this.currentPage     = 1;
  }

  // =========================================================================
  // PO TAB
  // =========================================================================

  loadPOs(): void {
    this.isLoadingPOs = true;
    this.dataService.getApprovedPOsForSupplier(this.supplierId).subscribe({
      next: (r: any) => {
        const raw = r?.success ? (r.data || []) : [];
        this.poList = raw.map((po: any) => ({
          ...po,
          currencyCode  : po.currencyCode   || 'INR',
          currencySymbol: po.currencySymbol  || '₹'
        }));
        this.applyPOFilters();
        this.isLoadingPOs = false;
      },
      error: () => { this.poList = []; this.filteredPOList = []; this.isLoadingPOs = false; }
    });
  }

  applyPOFilters(): void {
    const dateFiltered = this.filterByDateGeneric(this.poList, ['createdAt', 'poDate', 'approvedAt', 'issueDate']);
    this.dateFilteredPOs = dateFiltered;

    let data = [...dateFiltered];
    if (this.poSearchText.trim()) {
      const s = this.poSearchText.toLowerCase();
      data = data.filter(p =>
        p.poNumber?.toLowerCase().includes(s) ||
        p.rfqNumber?.toLowerCase().includes(s) ||
        p.buyerCompanyName?.toLowerCase().includes(s)
      );
    }
    if (this.poStatusFilter !== 'ALL') data = data.filter(p => p.invoiceStatus === this.poStatusFilter);
    if (this.poOriginFilter === 'SERVICE') data = data.filter(p => !!p.sourceSesId);
    else if (this.poOriginFilter === 'REGULAR') data = data.filter(p => !p.sourceSesId);
    this.filteredPOList = data;
    this.poCurrentPage  = 1;
  }

  setPoOriginFilter(filter: 'ALL' | 'SERVICE' | 'REGULAR'): void {
    this.poOriginFilter = filter;
    this.applyPOFilters();
  }

  get servicePOCount(): number {
    return this.dateFilteredPOs.filter(p => !!p.sourceSesId).length;
  }
  get regularPOCount(): number {
    return this.dateFilteredPOs.filter(p => !p.sourceSesId).length;
  }

  // =========================================================================
  // INVOICE TAB
  // =========================================================================

  loadInvoices(): void {
    this.isLoadingInvoices = true;
    this.dataService.getSupplierInvoices(this.supplierId).subscribe({
      next: (r: any) => {
        const raw = r?.success ? (r.data || []) : [];
        this.invoiceList = raw.map((inv: any) => ({
          ...inv,
          currencyCode  : inv.currencyCode   || inv.currency || 'INR',
          currencySymbol: inv.currencySymbol  || '₹'
        }));
        this.applyInvoiceFilters();
        this.isLoadingInvoices = false;
      },
      error: () => { this.invoiceList = []; this.filteredInvoiceList = []; this.isLoadingInvoices = false; }
    });
  }

  applyInvoiceFilters(): void {
    const dateFiltered = this.filterByDateGeneric(this.invoiceList, ['invoiceDate', 'createdAt', 'issueDate', 'submittedAt']);
    this.dateFilteredInvoices = dateFiltered;

    let data = [...dateFiltered];
    if (this.invoiceSearchText.trim()) {
      const s = this.invoiceSearchText.toLowerCase();
      data = data.filter(i =>
        i.invoiceNumber?.toLowerCase().includes(s) ||
        i.poNumber?.toLowerCase().includes(s) ||
        i.rfqNumber?.toLowerCase().includes(s)
      );
    }
    if (this.invoiceStatusFilter !== 'ALL') {
      if (this.invoiceStatusFilter === 'REJECTED') {
        data = data.filter(i => i.status === 'REJECTED' || i.status === 'REJECTED_CLOSED');
      } else {
        data = data.filter(i => i.status === this.invoiceStatusFilter);
      }
    }
    if (this.invoiceOriginFilter === 'SERVICE') data = data.filter(i => !!i.sourceSesId);
    else if (this.invoiceOriginFilter === 'REGULAR') data = data.filter(i => !i.sourceSesId);
    this.filteredInvoiceList = data;
    this.invoiceCurrentPage  = 1;
  }

  setInvoiceOriginFilter(filter: 'ALL' | 'SERVICE' | 'REGULAR'): void {
    this.invoiceOriginFilter = filter;
    this.applyInvoiceFilters();
  }

  get serviceInvoiceCount(): number {
    return this.dateFilteredInvoices.filter(i => !!i.sourceSesId).length;
  }
  get regularInvoiceCount(): number {
    return this.dateFilteredInvoices.filter(i => !i.sourceSesId).length;
  }

  // =========================================================================
  // INVOICE CREATION MODAL
  // =========================================================================

  openCreateInvoiceModal(po: any): void {
    this.isLoadingPODetails   = true;
    this.selectedPOForInvoice = po;
    this.isInvoiceModalOpen   = true;
    this.invoiceInputMode     = 'write';
    this.pendingInvoiceAttachments = [];
    this.itemUploadSummary = null;
    this.poLocationCurrencyCode   = po.currencyCode   || 'INR';
    this.poLocationCurrencySymbol = po.currencySymbol || '₹';
    this.invoiceForm = {
      invoiceDate: this.getTodayStr(), dueDate: this.getDueDateStr(30), taxPercentage: 18,
      // Left blank rather than pre-filled with boilerplate text — the supplier states their
      // own terms per invoice, or leaves it blank, rather than editing canned wording every
      // time.
      paymentTerms: '', notes: '', termsAndConditions: '',
      // Placeholder until the PO/supplier lookup below resolves — bank details were already
      // collected when the supplier was onboarded, so this is only ever shown for the instant
      // before that real data arrives (or as a last-resort fallback if it's genuinely missing).
      bankName: localStorage.getItem('bankName') || '',
      accountHolderName: localStorage.getItem('accountHolderName') || this.supplierName,
      accountNumber: localStorage.getItem('accountNumber') || '',
      ifscCode: localStorage.getItem('ifscCode') || '',
      branchName: localStorage.getItem('branchName') || '',
      upiId: localStorage.getItem('upiId') || '',
      overallDiscountAmount: 0, poGrandTotal: 0, lineItems: []
    };
    this.dataService.getPODetailsForInvoice(this.supplierId, po.id).subscribe({
      next: (r: any) => {
        if (r?.success && r.data) {
          const d = r.data;
          this.invoiceForm.overallDiscountAmount = Number(d.overallDiscountAmount || 0);
          this.invoiceForm.poGrandTotal          = Number(d.grandTotal || 0);
          if (d.currencyCode) {
            this.poLocationCurrencyCode   = d.currencyCode;
            this.poLocationCurrencySymbol = d.currencySymbol || this.getSymbolForCode(d.currencyCode);
          }
          // Bank details already on file from when the supplier was onboarded — shown here so
          // nobody retypes the same account number on every invoice. Still a normal editable
          // field on the form: a one-off payment to a different account is still possible.
          if (d.supplierBankName)              this.invoiceForm.bankName = d.supplierBankName;
          if (d.supplierBankAccountHolderName) this.invoiceForm.accountHolderName = d.supplierBankAccountHolderName;
          if (d.supplierBankAccountNumber)     this.invoiceForm.accountNumber = d.supplierBankAccountNumber;
          if (d.supplierBankIfscCode)          this.invoiceForm.ifscCode = d.supplierBankIfscCode;
          if (d.supplierBankBranchName)        this.invoiceForm.branchName = d.supplierBankBranchName;
          this.invoiceForm.lineItems = (d.lineItems || []).map((item: any) => {
            const poQty       = Number(item.quantity) || 0;
            const invoicedQty = Number(item.invoicedQty || item.alreadyInvoicedQty || 0);
            const remaining   = Math.max(0, poQty - invoicedQty);
            return {
              id: item.id, itemCode: item.itemCode || '',
              itemDescription: item.itemDescription || '',
              itemDescriptionDetailed: item.itemDescriptionDetailed || '',
              hsnSacCode: item.hsnSacCode || '', uom: item.uom || 'PCS',
              poQuantity: poQty, alreadyInvoicedQty: invoicedQty,
              remainingQty: remaining, qtyToInvoice: remaining,
              unitPrice: Number(item.unitPrice || item.rate || 0),
              discountPercentage: Number(item.discountPercentage) || 0,
              taxPercentage: Number(item.taxPercentage) ?? 18
            };
          });
          this.selectedPOForInvoice = { ...po, ...d };
        }
        this.isLoadingPODetails = false;
      },
      error: () => { this.invoiceForm.lineItems = []; this.isLoadingPODetails = false; }
    });
  }

  private getSymbolForCode(code: string): string {
    const m: Record<string, string> = {
      INR: '₹', USD: '$', EUR: '€', GBP: '£', AED: 'د.إ', SGD: 'S$',
      JPY: '¥', CNY: '¥', CHF: 'Fr', CAD: 'C$', AUD: 'A$'
    };
    return m[code] || code;
  }

  addInvoiceLineItem(): void {
    this.invoiceForm.lineItems.push({
      itemCode: '', itemDescription: '', uom: 'PCS',
      poQuantity: 0, alreadyInvoicedQty: 0, remainingQty: 0,
      qtyToInvoice: 1, unitPrice: 0, discountPercentage: 0, taxPercentage: 18, hsnSacCode: ''
    });
  }

  removeInvoiceLineItem(i: number): void { this.invoiceForm.lineItems.splice(i, 1); }

  getLineTotal(item: any): number {
    const base  = (Number(item.qtyToInvoice) || 0) * (Number(item.unitPrice) || 0);
    const after = base - (base * (Number(item.discountPercentage) || 0) / 100);
    return after + (after * (Number(item.taxPercentage) || 0) / 100);
  }

  getInvoiceSubtotal(): number {
    return this.invoiceForm.lineItems.reduce((s, it) => {
      const base = (Number(it.qtyToInvoice) || 0) * (Number(it.unitPrice) || 0);
      return s + base - (base * (Number(it.discountPercentage) || 0) / 100);
    }, 0);
  }

  getInvoiceTaxTotal(): number {
    return this.invoiceForm.lineItems.reduce((s, it) => {
      const base  = (Number(it.qtyToInvoice) || 0) * (Number(it.unitPrice) || 0);
      const after = base - (base * (Number(it.discountPercentage) || 0) / 100);
      return s + (after * (Number(it.taxPercentage) || 0) / 100);
    }, 0);
  }

  getInvoiceGrandTotal(): number {
    if (!this.invoiceForm.lineItems?.length) return Number(this.invoiceForm.poGrandTotal) || 0;
    const full = this.invoiceForm.lineItems.every((it: any) => Number(it.qtyToInvoice) >= Number(it.remainingQty));
    if (full && this.invoiceForm.poGrandTotal > 0) return Number(this.invoiceForm.poGrandTotal);
    return this.getInvoiceSubtotal() + this.getInvoiceTaxTotal() - (Number(this.invoiceForm.overallDiscountAmount) || 0);
  }

  saveInvoiceDraft(): void {
    if (!this.validateInvoiceForm()) return;
    this.isCreatingInvoice = true;
    this.dataService.createInvoice(this.supplierId, this.selectedPOForInvoice.id, this.buildInvoicePayload()).subscribe({
      next: (r: any) => {
        if (r?.success) {
          this.messageService.showMessage('success', 'Saved', 'Invoice ' + r.data?.invoiceNumber + ' saved as DRAFT');
          this.isInvoiceModalOpen = false; this.loadInvoices(); this.loadPOs();
        }
        this.isCreatingInvoice = false;
      },
      error: (err: any) => {
        this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed to create invoice');
        this.isCreatingInvoice = false;
      }
    });
  }

  createAndSubmitInvoice(): void {
    if (!this.validateInvoiceForm(true)) return;
    this.isSubmittingInvoice = true;
    this.dataService.createInvoice(this.supplierId, this.selectedPOForInvoice.id, this.buildInvoicePayload()).subscribe({
      next: (cr: any) => {
        if (cr?.success) {
          this.dataService.submitInvoice(cr.data.id, this.supplierId).subscribe({
            next: () => {
              this.messageService.showMessage('success', 'Invoice Submitted', 'Invoice ' + cr.data.invoiceNumber + ' sent to buyer');
              this.isInvoiceModalOpen = false; this.loadInvoices(); this.loadPOs();
              this.isSubmittingInvoice = false;
            },
            error: () => {
              this.messageService.showMessage('warning', 'Created but not submitted', 'Invoice saved as draft. Please submit manually.');
              this.isInvoiceModalOpen = false; this.loadInvoices();
              this.isSubmittingInvoice = false;
            }
          });
        }
      },
      error: (err: any) => {
        this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed to create invoice');
        this.isSubmittingInvoice = false;
      }
    });
  }

  submitExistingInvoice(invoice: any): void {
    this.dataService.submitInvoice(invoice.id, this.supplierId).subscribe({
      next: () => {
        this.messageService.showMessage('success', 'Submitted', 'Invoice sent to buyer');
        this.loadInvoices(); this.loadPOs();
      },
      error: (err: any) => { this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed'); }
    });
  }

  // =========================================================================
  // RESUBMIT MODAL
  // =========================================================================

  openResubmitModal(invoice: any): void {
    this.isLoadingInvoice = true;
    this.dataService.getInvoiceById(invoice.id).subscribe({
      next: (r: any) => {
        const full = r?.success ? r.data : invoice;
        this.selectedInvoiceForResubmit = full;
        this._populateEditForm(full);
        this.isResubmitModalOpen = true;
        this.isLoadingInvoice    = false;
      },
      error: () => {
        this.selectedInvoiceForResubmit = invoice;
        this._populateEditForm(invoice);
        this.isResubmitModalOpen = true;
        this.isLoadingInvoice    = false;
      }
    });
  }

  private _populateEditForm(inv: any): void {
    if (inv.currencyCode || inv.currency) {
      this.poLocationCurrencyCode   = inv.currencyCode || inv.currency || 'INR';
      this.poLocationCurrencySymbol = inv.currencySymbol || this.getSymbolForCode(this.poLocationCurrencyCode);
    }
    this.editInvoiceForm = {
      invoiceDate: inv.invoiceDate ? inv.invoiceDate.split('T')[0] : this.getTodayStr(),
      dueDate: inv.dueDate ? inv.dueDate.split('T')[0] : this.getDueDateStr(30),
      taxPercentage: inv.taxPercentage ?? 18,
      paymentTerms: inv.paymentTerms || 'Net 30 days from invoice date',
      notes: inv.notes || '', termsAndConditions: inv.termsAndConditions || '',
      bankName: inv.bankName || '', accountHolderName: inv.accountHolderName || this.supplierName,
      accountNumber: inv.accountNumber || '', ifscCode: inv.ifscCode || '',
      branchName: inv.branchName || '', upiId: inv.upiId || '',
      resubmitRemarks: '',
      overallDiscountAmount: Number(inv.overallDiscountAmount || 0),
      lineItems: (inv.lineItems || inv.items || []).map((it: any) => ({
        id: it.id, itemCode: it.itemCode || '', itemDescription: it.itemDescription || '',
        hsnSacCode: it.hsnSacCode || '', uom: it.uom || 'PCS',
        quantity: it.quantity || 1, unitPrice: it.unitPrice || 0,
        discountPercentage: it.discountPercentage || 0, taxPercentage: it.taxPercentage ?? 18
      }))
    };
    this.resubmitRemarks = '';
    // Attachments are per-editing-session, not per-invoice — start empty so a leftover
    // selection from a previous invoice's Create/Resubmit modal is never sent on this one.
    this.pendingInvoiceAttachments = [];
  }

  closeResubmitModal(): void {
    this.isResubmitModalOpen = false;
    this.selectedInvoiceForResubmit = null;
    this.resubmitRemarks = '';
  }

  addEditInvoiceLineItem(): void {
    this.editInvoiceForm.lineItems.push({
      itemCode: '', itemDescription: '', hsnSacCode: '', uom: 'PCS',
      quantity: 1, unitPrice: 0, discountPercentage: 0, taxPercentage: 18
    });
  }

  removeEditInvoiceLineItem(i: number): void { this.editInvoiceForm.lineItems.splice(i, 1); }

  getEditLineTotal(it: any): number {
    const base  = (Number(it.quantity) || 0) * (Number(it.unitPrice) || 0);
    const after = base - (base * (Number(it.discountPercentage) || 0) / 100);
    return after + (after * (Number(it.taxPercentage) || 0) / 100);
  }

  getEditInvoiceSubtotal(): number {
    return this.editInvoiceForm.lineItems.reduce((s, it) => {
      const base = (Number(it.quantity) || 0) * (Number(it.unitPrice) || 0);
      return s + base - (base * (Number(it.discountPercentage) || 0) / 100);
    }, 0);
  }

  getEditInvoiceTaxTotal(): number {
    return this.editInvoiceForm.lineItems.reduce((s, it) => {
      const base  = (Number(it.quantity) || 0) * (Number(it.unitPrice) || 0);
      const after = base - (base * (Number(it.discountPercentage) || 0) / 100);
      return s + (after * (Number(it.taxPercentage) || 0) / 100);
    }, 0);
  }

  getEditInvoiceGrandTotal(): number {
    return this.getEditInvoiceSubtotal() + this.getEditInvoiceTaxTotal()
      - (Number(this.editInvoiceForm.overallDiscountAmount) || 0);
  }

  confirmResubmit(): void {
    const remarks = (this.editInvoiceForm.resubmitRemarks || this.resubmitRemarks || '').trim();
    if (!remarks) { this.messageService.showMessage('warning', 'Remarks Required', 'Please describe what you corrected'); return; }
    if (!this.editInvoiceForm.lineItems.length) { this.messageService.showMessage('warning', 'Validation', 'At least one line item required'); return; }
    if (!this.selectedInvoiceForResubmit) return;

    this.isResubmitting = true;
    const payload = {
      invoiceDate: this.editInvoiceForm.invoiceDate, dueDate: this.editInvoiceForm.dueDate,
      taxPercentage: this.editInvoiceForm.taxPercentage, paymentTerms: this.editInvoiceForm.paymentTerms,
      notes: this.editInvoiceForm.notes, termsAndConditions: this.editInvoiceForm.termsAndConditions,
      bankName: this.editInvoiceForm.bankName, accountHolderName: this.editInvoiceForm.accountHolderName,
      accountNumber: this.editInvoiceForm.accountNumber, ifscCode: this.editInvoiceForm.ifscCode,
      branchName: this.editInvoiceForm.branchName, upiId: this.editInvoiceForm.upiId,
      overallDiscountAmount: this.editInvoiceForm.overallDiscountAmount || 0,
      lineItems: this.editInvoiceForm.lineItems,
      // Additive on the backend (saveAttachments never clears existing ones) — anything
      // attached during this resubmit joins whatever was already on the invoice.
      attachments: this.pendingInvoiceAttachments.map(a => ({
        filename: a.file.name,
        contentType: a.file.type || 'application/octet-stream',
        base64: a.base64
      }))
    };

    const doResubmit = () => {
      this.dataService.resubmitInvoice(this.selectedInvoiceForResubmit.id, this.supplierId, remarks).subscribe({
        next: () => {
          this.messageService.showMessage('success', 'Resubmitted', 'Invoice ' + this.selectedInvoiceForResubmit.invoiceNumber + ' sent back to buyer');
          this.isResubmitModalOpen = false; this.isInvoiceViewModalOpen = false;
          this.selectedInvoiceForResubmit = null; this.resubmitRemarks = '';
          this.isResubmitting = false;
          this.loadInvoices(); this.loadPOs();
        },
        error: (e: any) => {
          this.messageService.showMessage('error', 'Failed', e.error?.message || 'Could not resubmit');
          this.isResubmitting = false;
        }
      });
    };

    this.dataService.updateInvoice(this.selectedInvoiceForResubmit.id, this.supplierId, payload)
        .subscribe({ next: doResubmit, error: doResubmit });
  }

  canResubmit(inv: any): boolean {
    if (!inv) return false;
    return inv.status === 'REJECTED' && (inv.canResubmit === true || inv.resubmitCount === 0 || inv.resubmitCount == null);
  }

  isPermanentlyClosed(inv: any): boolean { return inv?.status === 'REJECTED_CLOSED'; }

  // =========================================================================
  // VIEW INVOICE MODAL
  // =========================================================================

  viewInvoice(invoice: any): void {
    this.isLoadingInvoice = true;
    this.isInvoiceViewModalOpen = true;
    this.dataService.getInvoiceById(invoice.id).subscribe({
      next: (r: any) => { this.selectedInvoice = r?.success ? r.data : invoice; this.isLoadingInvoice = false; },
      error: () => { this.selectedInvoice = invoice; this.isLoadingInvoice = false; }
    });
  }

  closeInvoiceViewModal(): void { this.isInvoiceViewModalOpen = false; this.selectedInvoice = null; }

  downloadInvoicePDF(): void {
    if (!this.selectedInvoice) return;
    this.isDownloadingInvoicePDF = true;
    const el = document.getElementById('invoice-print-content');
    if (!el) { this.isDownloadingInvoicePDF = false; return; }
    html2canvas(el, { scale: 2, useCORS: true, backgroundColor: '#ffffff' }).then(canvas => {
      const pdf  = new jsPDF('p', 'mm', 'a4');
      const data = canvas.toDataURL('image/png');
      const pw = 210, ih = (canvas.height * pw) / canvas.width;
      let hl = ih, pos = 0;
      pdf.addImage(data, 'PNG', 0, pos, pw, ih); hl -= 297;
      while (hl > 0) { pos = hl - ih; pdf.addPage(); pdf.addImage(data, 'PNG', 0, pos, pw, ih); hl -= 297; }
      pdf.save(this.selectedInvoice.invoiceNumber + '.pdf');
      this.isDownloadingInvoicePDF = false;
    }).catch(() => { this.isDownloadingInvoicePDF = false; });
  }

  // =========================================================================
  // FORM HELPERS
  // =========================================================================

  private validateInvoiceForm(requireBank = false): boolean {
    if (!this.invoiceForm.lineItems.length) {
      this.messageService.showMessage('warning', 'Validation', 'Add at least one line item'); return false;
    }
    const today = this.getTodayStr();
    if (this.invoiceForm.invoiceDate < today) {
      this.messageService.showMessage('warning', 'Invalid Date', 'Invoice date cannot be in the past'); return false;
    }
    if (this.invoiceForm.dueDate < today) {
      this.messageService.showMessage('warning', 'Invalid Date', 'Payment due date cannot be in the past'); return false;
    }
    for (const it of this.invoiceForm.lineItems) {
      if (!it.itemDescription) {
        this.messageService.showMessage('warning', 'Validation', 'Fill description for all items'); return false;
      }
      if (Number(it.qtyToInvoice) <= 0) {
        this.messageService.showMessage('warning', 'Validation', 'Qty must be > 0 for "' + it.itemDescription + '"'); return false;
      }
      // Cross-check against the PO: a pre-populated row can't invoice more than what's left on
      // that PO line, and a manually-added row (via "Add Item") always has remainingQty = 0
      // since it isn't tied to any real PO line — so this same rule blocks both "too much of a
      // real item" and "an item that isn't on the PO at all" in one place.
      if (Number(it.qtyToInvoice) > Number(it.remainingQty || 0)) {
        this.messageService.showMessage('warning', 'Not on This PO',
          '"' + it.itemDescription + '" (qty ' + it.qtyToInvoice + ') isn\'t on this PO, or exceeds what\'s left to invoice ('
          + (Number(it.remainingQty) || 0) + ' remaining). If the service required extra or different items, submit a '
          + 'Service Entry Sheet with an additional-items quote for it instead — go to "Service Entry Sheets" in the menu.');
        return false;
      }
    }
    if (requireBank && (!this.invoiceForm.bankName || !this.invoiceForm.accountNumber || !this.invoiceForm.ifscCode)) {
      this.messageService.showMessage('warning', 'Bank Details Required', 'Enter bank name, account number and IFSC'); return false;
    }
    return true;
  }

  private buildInvoicePayload(): any {
    return {
      invoiceDate: this.invoiceForm.invoiceDate, dueDate: this.invoiceForm.dueDate,
      taxPercentage: this.invoiceForm.taxPercentage, paymentTerms: this.invoiceForm.paymentTerms,
      notes: this.invoiceForm.notes, termsAndConditions: this.invoiceForm.termsAndConditions,
      bankName: this.invoiceForm.bankName, accountHolderName: this.invoiceForm.accountHolderName,
      accountNumber: this.invoiceForm.accountNumber, ifscCode: this.invoiceForm.ifscCode,
      branchName: this.invoiceForm.branchName, upiId: this.invoiceForm.upiId,
      overallDiscountAmount: this.invoiceForm.overallDiscountAmount || 0,
      lineItems: this.invoiceForm.lineItems.map(it => ({
        id: it.id, itemCode: it.itemCode, itemDescription: it.itemDescription,
        itemDescriptionDetailed: it.itemDescriptionDetailed || '',
        hsnSacCode: it.hsnSacCode, uom: it.uom, quantity: it.qtyToInvoice,
        unitPrice: it.unitPrice, discountPercentage: it.discountPercentage, taxPercentage: it.taxPercentage
      })),
      // Supporting documents alongside the line items above — optional, available on every
      // invoice regardless of PO type (see pendingInvoiceAttachments). Sent as an empty array
      // whenever nothing was attached, which the backend treats as a no-op.
      attachments: this.pendingInvoiceAttachments.map(a => ({
        filename: a.file.name,
        contentType: a.file.type || 'application/octet-stream',
        base64: a.base64
      }))
    };
  }

  onInvoiceAttachmentsSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files ? Array.from(input.files) : [];
    input.value = ''; // allow re-selecting the same file(s) later

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const commaIndex = result.indexOf(',');
        const base64 = commaIndex >= 0 ? result.substring(commaIndex + 1) : result;
        this.pendingInvoiceAttachments.push({
          file,
          base64,
          previewUrl: result,
          isImage: file.type.startsWith('image/')
        });
      };
      reader.readAsDataURL(file);
    }
  }

  removeInvoiceAttachment(index: number): void {
    this.pendingInvoiceAttachments.splice(index, 1);
  }

  // =========================================================================
  //  UPLOAD LINE ITEMS FROM SPREADSHEET
  //
  // A second way to fill in Qty to Invoice / Discount % / Tax % besides typing them into the
  // grid by hand — for a long line-item list, editing a spreadsheet is faster than a form.
  // Unit Price stays fixed from the PO everywhere in this app (the grid renders it read-only
  // for the same reason), so the upload never touches it even if a row's Price column was
  // edited — only Qty/Discount/Tax are ever applied. The template is generated FROM this PO's
  // actual line items, so "download template → fill in → upload" always matches on Item Code;
  // any row that doesn't match one of this PO's items is reported, never silently guessed at.
  // =========================================================================

  itemUploadSummary: { matched: number; total: number; unmatched: string[] } | null = null;
  isProcessingItemUpload = false;

  /** The exact header text used below doubles as the column keys importFromExcel() reads back
   *  on upload — keep the two in lockstep if either ever changes. */
  private static readonly ITEM_TEMPLATE_HEADERS = {
    itemCode: 'Item Code', description: 'Description', uom: 'UOM',
    poQty: 'PO Qty', remainingQty: 'Remaining Qty',
    unitPrice: 'Unit Price (reference only — fixed from PO)',
    qtyToInvoice: 'Qty To Invoice', discountPct: 'Discount %', taxPct: 'Tax %'
  };

  downloadInvoiceItemTemplate(): void {
    const h = SupplierDashboardComponent.ITEM_TEMPLATE_HEADERS;
    if (!this.invoiceForm.lineItems.length) {
      this.messageService.showMessage('warning', 'No items', 'This PO has no line items to build a template from.');
      return;
    }
    const rows = this.invoiceForm.lineItems.map((it: any, i: number) => ({
      [h.itemCode]:     it.itemCode || `ITEM-${i + 1}`,
      [h.description]:  it.itemDescription || '',
      [h.uom]:          it.uom || '',
      [h.poQty]:        it.poQuantity ?? 0,
      [h.remainingQty]: it.remainingQty ?? 0,
      [h.unitPrice]:    it.unitPrice ?? 0,
      [h.qtyToInvoice]: it.qtyToInvoice ?? it.remainingQty ?? 0,
      [h.discountPct]:  it.discountPercentage ?? 0,
      [h.taxPct]:       it.taxPercentage ?? 0
    }));
    const poNumber = this.selectedPOForInvoice?.poNumber || 'PO';
    this.excelService.exportAsExcelFile(rows, `Invoice_Items_Template_${poNumber}`);
    this.messageService.showMessage('success', 'Template downloaded',
      'Fill in Qty To Invoice / Discount % / Tax % and upload it back — do not change the Item Code column.');
  }

  onInvoiceItemsFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0];
    input.value = ''; // allow re-selecting the same file after fixing it
    if (!file) return;

    const h = SupplierDashboardComponent.ITEM_TEMPLATE_HEADERS;
    this.isProcessingItemUpload = true;
    this.itemUploadSummary = null;

    this.excelService.importFromExcel(file, (rows: any[]) => {
      let matched = 0;
      const unmatched: string[] = [];

      rows.forEach((row, i) => {
        const code = String(row[h.itemCode] ?? '').trim();

        // A blank Item Code is exactly what a brand-new row looks like — someone added an item
        // that isn't on this PO. It must be reported the same as a wrong code, never dropped
        // silently: an invoice can only ever bill for items the PO actually has.
        if (!code) { unmatched.push(`Row ${i + 2} (no Item Code)`); return; }

        const target = this.invoiceForm.lineItems.find((it: any) =>
          (it.itemCode || '').trim().toLowerCase() === code.toLowerCase());

        if (!target) { unmatched.push(code); return; }

        // Only the fields the grid itself lets a supplier edit — Unit Price is fixed from the
        // PO everywhere else in this form, so a spreadsheet upload does not get to change it.
        if (row[h.qtyToInvoice] !== undefined && row[h.qtyToInvoice] !== '') {
          const qty = Number(row[h.qtyToInvoice]);
          if (!isNaN(qty) && qty >= 0) target.qtyToInvoice = qty;
        }
        if (row[h.discountPct] !== undefined && row[h.discountPct] !== '') {
          const d = Number(row[h.discountPct]);
          if (!isNaN(d) && d >= 0) target.discountPercentage = d;
        }
        if (row[h.taxPct] !== undefined && row[h.taxPct] !== '') {
          const t = Number(row[h.taxPct]);
          if (!isNaN(t) && t >= 0) target.taxPercentage = t;
        }
        matched++;
      });

      this.itemUploadSummary = { matched, total: rows.length, unmatched };
      this.isProcessingItemUpload = false;

      if (unmatched.length > 0) {
        this.messageService.showMessage('warning', 'Some rows were skipped',
          `${matched} of ${rows.length} item(s) updated. An invoice can only bill for items already `
          + `on this PO, so new rows or unrecognized Item Codes cannot be added this way — they were `
          + `skipped, not invoiced: ${unmatched.join(', ')}`);
      } else {
        this.messageService.showMessage('success', 'Items updated',
          `${matched} of ${rows.length} item(s) updated from the uploaded sheet. Review the grid below before submitting.`);
      }
    }, () => {
      this.isProcessingItemUpload = false;
      this.messageService.showMessage('error', 'Could not read file',
        'That file could not be read as a spreadsheet. Please use the downloaded template unchanged.');
    });
  }

  getInvoiceAttachmentDownloadUrl(attachmentId: number): string {
    return this.dataService.getInvoiceAttachmentDownloadUrl(attachmentId);
  }

  /** poType is comma-separated when a PO carries more than one type at once, e.g.
   *  "GOODS,BLANKET_CONTRACT" — true if the given type is among the selected ones. */
  hasPoType(poTypeCsv: string | undefined, type: string): boolean {
    return (poTypeCsv || '').split(',').map(t => t.trim()).includes(type);
  }

  // =========================================================================
  // RFQ METHODS
  // =========================================================================

  switchTab(tab: 'rfq' | 'po' | 'invoice'): void { this.activeTab = tab; }

  viewRFQDetails(rfq: any): void {
    const id = rfq.rfqId || rfq.id;
    if (!id) { this.messageService.showMessage('error', 'Error', 'RFQ ID not found'); return; }
    this.isLoading = true;
    this.dataService.getSupplierRFQDetails(this.supplierId, id).subscribe({
      next: (r: any) => {
        if (r?.success && r.data) { this.selectedRFQ = r.data; this.isViewModalOpen = true; }
        else this.messageService.showMessage('error', 'Error', 'Failed to load RFQ details');
        this.isLoading = false;
      },
      error: () => { this.messageService.showMessage('error', 'Error', 'Failed to load RFQ details'); this.isLoading = false; }
    });
  }

  closeViewModal(): void { this.isViewModalOpen = false; this.selectedRFQ = null; }

  navigateToQuoteSubmission(rfq: any): void {
    const expired = rfq.isExpired !== undefined ? rfq.isExpired : this.clientSideExpiredCheck(rfq);
    if (expired) {
      this.messageService.showMessage('warning', 'Submission Closed', 'The deadline for RFQ ' + (rfq.rfqNumber || '') + ' has passed.');
      return;
    }
    if (rfq.supplierStatus === 'RESPONDED') {
      this.messageService.showMessage('info', 'Already Submitted', 'You have already submitted a quote for this RFQ.');
      return;
    }
    this.router.navigate(['/supplier-quote', rfq.rfqId || rfq.id]);
  }

  viewSubmittedQuote(rfq: any): void {
    this.router.navigate(['/supplier-quote', rfq.rfqId || rfq.id], { queryParams: { viewOnly: true } });
  }

  canSubmitQuote(rfq: any): boolean {
    if (!rfq) return false;
    if (rfq.canSubmitQuote !== undefined) return rfq.canSubmitQuote;
    const expired = rfq.isExpired !== undefined ? rfq.isExpired : this.clientSideExpiredCheck(rfq);
    return !expired && (rfq.supplierStatus === 'PENDING' || rfq.supplierStatus === 'SENT');
  }

  hasSubmittedQuote(rfq: any): boolean {
    return rfq?.supplierStatus === 'RESPONDED' || rfq?.supplierStatus === 'SELECTED';
  }

  getDueDateLabel(rfq: any): string {
    const d = rfq?.daysUntilDue;
    if (d === null || d === undefined) return '';
    if (d > 1)    return d + ' days left';
    if (d === 1)  return '1 day left';
    if (d === 0)  return 'Due today';
    if (d === -1) return 'Overdue by 1 day';
    return 'Overdue by ' + Math.abs(d) + ' days';
  }

  downloadAttachment(att: any): void { window.open(environment.API_URL + 'leadcapture' + att.downloadUrl, '_blank'); }

  // =========================================================================
  // PAGINATION
  // =========================================================================

  get paginatedRFQs(): any[]  { return this.filteredRFQList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize); }
  get totalPages():    number { return Math.ceil(this.totalRFQs / this.pageSize); }
  nextPage():     void { if (this.currentPage < this.totalPages) this.currentPage++; }
  previousPage(): void { if (this.currentPage > 1) this.currentPage--; }

  get paginatedPOs(): any[]   { return this.filteredPOList.slice((this.poCurrentPage - 1) * this.poPageSize, this.poCurrentPage * this.poPageSize); }
  get totalPOPages(): number  { return Math.max(1, Math.ceil(this.filteredPOList.length / this.poPageSize)); }

  // ── PO table pagination bar — same pattern as the PO list ────────────────
  poPageSizeOptions: number[] = [5, 10, 25, 50];

  get poPageNumbers(): number[] {
    const total = this.totalPOPages, current = this.poCurrentPage;
    const pages: number[] = [];
    if (total <= 7) { for (let i = 1; i <= total; i++) pages.push(i); return pages; }
    pages.push(1);
    if (current > 3) pages.push(-1);
    const start = Math.max(2, current - 1), end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (current < total - 2) pages.push(-1);
    pages.push(total);
    return pages;
  }

  get poStartIndex(): number {
    if (this.filteredPOList.length === 0) return 0;
    return (this.poCurrentPage - 1) * this.poPageSize + 1;
  }
  get poEndIndex(): number { return Math.min(this.poCurrentPage * this.poPageSize, this.filteredPOList.length); }

  goToPOPage(page: number): void {
    if (page < 1 || page > this.totalPOPages) return;
    this.poCurrentPage = page;
  }
  onPOPageSizeChange(size: number): void { this.poPageSize = size; this.poCurrentPage = 1; }

  get paginatedInvoices(): any[] { return this.filteredInvoiceList.slice((this.invoiceCurrentPage - 1) * this.invoicePageSize, this.invoiceCurrentPage * this.invoicePageSize); }
  get totalInvoicePages(): number { return Math.ceil(this.filteredInvoiceList.length / this.invoicePageSize); }

  // =========================================================================
  // UTILITY
  // =========================================================================

  refresh(): void {
    this.currentPage = 1; this.poCurrentPage = 1; this.invoiceCurrentPage = 1;
    this.loadDashboardData();
  }

  onSearchChange(): void { this.currentPage = 1; this.applyRFQFilters(); }

  getInitials(name: string): string {
    if (!name?.trim()) return 'SU';
    const p = name.trim().split(' ');
    return p.length === 1 ? p[0].substring(0, 2).toUpperCase() : (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }

  getStatusBadgeClass(status: string): string {
    const m: any = { PENDING: 'warning', SENT: 'info', RESPONDED: 'success', SELECTED: 'success', REJECTED: 'danger' };
    return m[status] || 'secondary';
  }

  getInvoiceStatusLabel(status: string): string {
    const m: any = { DRAFT: 'Draft', SUBMITTED: 'Submitted', APPROVED: 'Approved', PAID: 'Paid', REJECTED: 'Rejected', REJECTED_CLOSED: 'Closed' };
    return m[status] || status;
  }

  /** Payment Provisions / Milestones — the supplier's proposed payment schedule, carried
   *  through unchanged from the PO. Purely descriptive. */
  getPaymentMilestones(invoice: any): { slNo: number; description: string; percentage: number | null; amount: number | null; remarks: string }[] {
    const raw = invoice?.paymentMilestones;
    if (!raw) return [];
    try { return JSON.parse(raw) || []; } catch { return []; }
  }

  /** Human-readable label for invoice.advancePaymentDue, e.g. "BEFORE_DELIVERY" → "before delivery". */
  advancePaymentDueLabel(invoice: any): string {
    const map: Record<string, string> = {
      BEFORE_DELIVERY:       'before delivery',
      BEFORE_DISPATCH:       'before dispatch',
      ON_ORDER_CONFIRMATION: 'on order confirmation',
    };
    return map[invoice?.advancePaymentDue] || 'before delivery';
  }

  formatDate(d: string): string {
    if (!d) return 'N/A';
    try { return new Date(d).toLocaleDateString('en-GB'); } catch { return 'N/A'; }
  }

  formatCurrency(amount: number | null, currencyCode?: string): string {
    const code      = currencyCode || 'INR';
    const symbol    = this.getSymbolForCode(code);
    const val       = Number(amount ?? 0);
    const formatted = val.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const rtl       = ['AED','SAR','QAR','KWD','BHD','OMR','IRR','IQD','JOD','LBP'];
    return rtl.includes(code) ? formatted + ' ' + symbol : symbol + ' ' + formatted;
  }

  formatInvoiceCurrency(amount: number | null): string {
    return this.formatCurrency(amount, this.poLocationCurrencyCode);
  }

  formatFileSize(bytes: number): string {
    if (!bytes) return '0 B';
    const k = 1024, sizes = ['B','KB','MB','GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }

  objectKeys(obj: any): string[] { return obj ? Object.keys(obj) : []; }
  getTodayStr(): string          { return new Date().toISOString().split('T')[0]; }
  getDueDateStr(days: number): string { const d = new Date(); d.setDate(d.getDate() + days); return d.toISOString().split('T')[0]; }
  navigateTo(route: string): void { this.router.navigate([route]); }
  isOverdue(inv: any): boolean {
    return !(!inv?.dueDate || inv.status === 'PAID') && new Date(inv.dueDate) < new Date();
  }

  // =========================================================================
  //  CHAT — Supplier side
  // =========================================================================

  openChat(rfq: any): void {
    // For supplier, the sender ID is the supplierId, not the userId
    const rfqId = rfq.rfqId || rfq.id;
    this.chatRfqId     = rfqId;
    this.chatRfqNumber = rfq.rfqNumber || '';
    this.chatUserId    = this.supplierId;
    this.chatUserName  = this.supplierName || this.companyName || this.fullName || 'Supplier';
    this.isChatOpen    = true;
    // Clear unread badge when chat is opened
    this.unreadCounts[rfqId] = 0;
  }

  closeChat(): void {
    this.isChatOpen = false;
  }

  loadUnreadCounts(): void {
    if (!this.supplierId || !this.rfqList?.length) return;
    this.rfqList.forEach((rfq: any) => {
      const rfqId = rfq.rfqId || rfq.id;
      this.chatService.getUnreadCount(rfqId, this.supplierId, 'SUPPLIER').subscribe({
        next: (res: any) => { this.unreadCounts[rfqId] = res?.unreadCount ?? res?.count ?? 0; },
        error: () => { this.unreadCounts[rfqId] = 0; }
      });
    });
    // Start polling every 15s if not already running
    if (!this.unreadPollInterval) {
      this.unreadPollInterval = setInterval(() => this.loadUnreadCounts(), 15000);
    }
  }

  ngOnDestroy(): void {
    if (this.unreadPollInterval) { clearInterval(this.unreadPollInterval); this.unreadPollInterval = null; }
  }

  // =========================================================================
  //  MEETINGS — Supplier side
  // =========================================================================

  openMeetings(rfq: any): void {
    const rfqId = rfq.rfqId || rfq.id;
    this.meetingRfqId     = rfqId;
    this.meetingRfqNumber = rfq.rfqNumber || '';

    // Try to find buyer's user ID from multiple possible field names
    const buyerUserId = rfq.buyerId || rfq.createdByUserId || rfq.buyer?.id || 0;
    const buyerName   = rfq.buyerName || rfq.buyerCompanyName || rfq.buyer?.companyName || 'Buyer';
    const buyerEmail  = rfq.buyerEmail || rfq.buyer?.email || '';

    // Suppliers can also start meetings — host is supplier, participant is buyer
    this.meetingParticipants = buyerUserId ? [{
      userId:   buyerUserId,
      userName: buyerName,
      userType: 'BUYER',
      email:    buyerEmail
    }] : [];
    this.allRfqParticipants  = this.meetingParticipants; // only 1 buyer
    this.isMeetingListOpen     = true;
    this.isMeetingScheduleOpen = false;
  }

  openMeetingSchedule(): void {
    this.isMeetingListOpen     = false;
    this.isMeetingScheduleOpen = true;
  }

  onMeetingCreated(roomId: string): void {
    this.isMeetingScheduleOpen = false;
    this.meetingRoomId         = roomId;
    this.isMeetingRoomOpen     = true;
  }

  joinMeeting(roomId: string): void {
    this.isMeetingListOpen = false;
    this.meetingRoomId     = roomId;
    this.isMeetingRoomOpen = true;
  }

  onMeetingLeft(): void {
    this.isMeetingRoomOpen = false;
    this.meetingRoomId     = '';
  }

  closeMeetingList(): void {
    this.isMeetingListOpen = false;
  }

  closeMeetingSchedule(): void {
    this.isMeetingScheduleOpen = false;
    if (this.meetingRfqId) { this.isMeetingListOpen = true; }
  }
}