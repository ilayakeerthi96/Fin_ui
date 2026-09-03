import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent,
  ContainerComponent, ButtonDirective, AlertComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { SupplierService } from '../dashboard/supplier.service';
import { BuyerService } from '../dashboard/buyer-b.service';
import { RFQService } from '../models/rfq.service';
import { MessageService } from '../../../shared/service/message.service';
import { filterSupplierCategories } from '../models/buyer-supplier-category-mapping.config';

interface RfiQuestionDraft {
  key: number;
  questionText: string;
  isMandatory: boolean;
}

let questionSeq = 0;

/**
 * Buyer-side RFI (Request for Information) creation. Standalone: title,
 * description, due date, a set of informational questions, and a list of
 * suppliers to invite - published immediately, no line items/pricing.
 *
 * Two creation modes:
 * - "New": the original flow, unchanged - two-step department -> supplier
 *   picker (mirrors create-rfq, scoped to the buyer's company type via
 *   buyer-supplier-category-mapping.config).
 * - "Existing RFQ": for asking the suppliers already invited to a raised RFQ
 *   some clarifying questions. Buyer picks one of their own RFQs; title and
 *   the supplier list are auto-fetched from that RFQ's own invited-supplier
 *   list (RFQ.selectedSuppliers) - no manual department/supplier picking.
 *   Everything after that (questions, submit) is identical in both modes.
 */
@Component({
  selector: 'app-rfi-create',
  templateUrl: './rfi-create.component.html',
  styleUrls: ['./rfi-create.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, CardComponent, CardBodyComponent,
    RowComponent, ColComponent, ContainerComponent, ButtonDirective, AlertComponent
  ]
})
export class RfiCreateComponent implements OnInit {

  buyerId: number = 0;
  buyerCompanyType: string = '';

  /** 'new' = standalone RFI (original flow). 'existing' = raised against an already-published RFQ. */
  rfiMode: 'new' | 'existing' = 'new';

  title: string = '';
  description: string = '';
  dueDate: string = '';

  questions: RfiQuestionDraft[] = [];

  // ── "New" mode: department -> supplier picker ──────────────────────
  allSuppliers: any[] = [];
  allDepartments: string[] = [];
  filteredDepartments: string[] = [];              // allowed for this buyer's company type
  private suppliersByDepartment = new Map<string, any[]>();

  selectedDepartment: string = '';
  departmentSuppliers: any[] = [];                  // suppliers in the selected department
  supplierSearch: string = '';
  selectedSupplierIds: number[] = [];

  // ── "Existing RFQ" mode ─────────────────────────────────────────────
  buyerRfqs: any[] = [];
  isLoadingRfqs: boolean = false;
  selectedRfqId: number | null = null;
  selectedRfq: any = null;
  isLoadingRfqDetail: boolean = false;
  rfqSuppliers: any[] = [];                         // suppliers already invited to the picked RFQ

  isSubmitting: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private dataService: DataService,
    private supplierService: SupplierService,
    private buyerService: BuyerService,
    private rfqService: RFQService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.buyerId = Number(localStorage.getItem('buyerId')) || 0;
    this.addQuestion();
    this.addQuestion();
    this.loadBuyerThenSuppliers();
  }

  setMode(mode: 'new' | 'existing'): void {
    if (this.rfiMode === mode) return;
    this.rfiMode = mode;
    this.errorMessage = null;

    if (mode === 'existing' && this.buyerRfqs.length === 0) {
      this.loadBuyerRfqs();
    }
  }

  private loadBuyerThenSuppliers(): void {
    if (!this.buyerId) {
      this.loadSuppliers();
      return;
    }
    this.buyerService.getBuyerById(this.buyerId).subscribe({
      next: (response: any) => {
        const buyer = response?.data || response;
        this.buyerCompanyType = buyer?.companyType || '';
        this.loadSuppliers();
      },
      error: () => this.loadSuppliers()
    });
  }

  private loadSuppliers(): void {
    this.supplierService.getAllSuppliers().subscribe({
      next: (suppliers: any[]) => {
        this.allSuppliers = suppliers || [];
        this.extractDepartmentsFromSuppliers();
      },
      error: () => { this.allSuppliers = []; }
    });
  }

  /** Mirrors create-rfq's extractDepartmentsFromSuppliers() + filterDepartmentsByBuyerCategory(). */
  private extractDepartmentsFromSuppliers(): void {
    const departmentMap = new Map<string, any[]>();

    for (const supplier of this.allSuppliers) {
      const locations = Array.isArray(supplier?.locations) ? supplier.locations : [];
      for (const location of locations) {
        const departments = Array.isArray(location?.departments) ? location.departments : [];
        for (const dept of departments) {
          if (!dept || dept.isDeleted || !dept.departmentName) continue;
          const deptName = dept.departmentName;
          if (!departmentMap.has(deptName)) departmentMap.set(deptName, []);
          const deptSuppliers = departmentMap.get(deptName)!;
          if (!deptSuppliers.find((s: any) => s.id === supplier.id)) {
            deptSuppliers.push({
              id: supplier.id,
              companyName: supplier.companyName,
              contactPersonName: supplier.contactPersonName,
              contactPersonEmail: supplier.contactPersonEmail
            });
          }
        }
      }
    }

    this.allDepartments = Array.from(departmentMap.keys()).sort();
    this.suppliersByDepartment = departmentMap;

    this.filteredDepartments = this.buyerCompanyType
      ? filterSupplierCategories(this.buyerCompanyType, this.allDepartments)
      : [...this.allDepartments];
  }

  onDepartmentChange(): void {
    this.departmentSuppliers = this.selectedDepartment
      ? (this.suppliersByDepartment.get(this.selectedDepartment) || [])
      : [];
    this.selectedSupplierIds = [];
    this.supplierSearch = '';
  }

  get filteredSuppliers(): any[] {
    if (!this.supplierSearch.trim()) return this.departmentSuppliers;
    const term = this.supplierSearch.trim().toLowerCase();
    return this.departmentSuppliers.filter(s => (s.companyName || '').toLowerCase().includes(term));
  }

  isSupplierSelected(id: number): boolean {
    return this.selectedSupplierIds.includes(id);
  }

  toggleSupplier(id: number): void {
    if (this.isSupplierSelected(id)) {
      this.selectedSupplierIds = this.selectedSupplierIds.filter(x => x !== id);
    } else {
      this.selectedSupplierIds = [...this.selectedSupplierIds, id];
    }
  }

  selectAllSuppliers(): void {
    this.selectedSupplierIds = this.filteredSuppliers.map(s => s.id);
  }

  deselectAllSuppliers(): void {
    this.selectedSupplierIds = [];
  }

  getSupplierName(id: number): string {
    return this.departmentSuppliers.find(s => s.id === id)?.companyName
      || this.allSuppliers.find(s => s.id === id)?.companyName
      || `Supplier #${id}`;
  }

  // ── "Existing RFQ" mode ─────────────────────────────────────────────

  private loadBuyerRfqs(): void {
    if (!this.buyerId) return;
    this.isLoadingRfqs = true;
    this.rfqService.getRFQsByBuyer(this.buyerId).subscribe({
      next: (response: any) => {
        this.buyerRfqs = (response?.data || response?.rfqs || []) as any[];
        this.isLoadingRfqs = false;
      },
      error: () => {
        this.buyerRfqs = [];
        this.isLoadingRfqs = false;
        this.messageService.showMessage('error', 'Error', 'Failed to load your RFQs');
      }
    });
  }

  onRfqSelected(): void {
    this.selectedRfq = null;
    this.rfqSuppliers = [];
    this.selectedSupplierIds = [];
    if (!this.selectedRfqId) return;

    this.isLoadingRfqDetail = true;
    this.rfqService.getRFQById(this.selectedRfqId).subscribe({
      next: (response: any) => {
        const rfq = response?.data || response;
        this.selectedRfq = rfq;
        this.rfqSuppliers = rfq?.selectedSuppliers || [];
        this.selectedSupplierIds = this.rfqSuppliers.map((s: any) => s.id);

        if (!this.title.trim()) {
          this.title = `Clarification for RFQ #${rfq?.rfqNumber || this.selectedRfqId} - ${rfq?.rfqTitle || ''}`.trim();
        }
        this.isLoadingRfqDetail = false;
      },
      error: () => {
        this.isLoadingRfqDetail = false;
        this.messageService.showMessage('error', 'Error', 'Failed to load RFQ details');
      }
    });
  }

  addQuestion(): void {
    this.questions.push({ key: ++questionSeq, questionText: '', isMandatory: true });
  }

  removeQuestion(key: number): void {
    this.questions = this.questions.filter(q => q.key !== key);
  }

  submit(): void {
    this.errorMessage = null;

    if (!this.title.trim()) {
      this.errorMessage = 'Title is required.';
      return;
    }
    const validQuestions = this.questions.filter(q => q.questionText.trim());
    if (validQuestions.length === 0) {
      this.errorMessage = 'Add at least one question.';
      return;
    }
    if (this.rfiMode === 'existing' && !this.selectedRfqId) {
      this.errorMessage = 'Select the RFQ you want to raise this RFI against.';
      return;
    }
    if (this.selectedSupplierIds.length === 0) {
      this.errorMessage = this.rfiMode === 'existing'
        ? 'This RFQ has no invited suppliers to send the RFI to.'
        : 'Select a department, then at least one supplier to invite.';
      return;
    }

    this.isSubmitting = true;
    this.dataService.createRfi({
      buyerId: this.buyerId,
      title: this.title.trim(),
      description: this.description.trim(),
      dueDate: this.dueDate || undefined,
      questions: validQuestions.map(q => ({ questionText: q.questionText.trim(), isMandatory: q.isMandatory })),
      supplierIds: this.selectedSupplierIds,
      relatedRfqId: this.rfiMode === 'existing' && this.selectedRfqId ? this.selectedRfqId : undefined
    }).subscribe({
      next: (response: any) => {
        this.isSubmitting = false;
        if (response?.success) {
          this.messageService.showMessage('success', 'Success', 'RFI created and sent to selected suppliers');
          this.router.navigate(['/rfi-dashboard']);
        } else {
          this.errorMessage = response?.message || 'Failed to create RFI';
        }
      },
      error: (err: any) => {
        this.isSubmitting = false;
        this.errorMessage = err.error?.message || 'Failed to create RFI';
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/rfi-dashboard']);
  }
}
