import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';
import {
  ContainerComponent, RowComponent, ColComponent, CardComponent,
  CardHeaderComponent, CardBodyComponent, ButtonDirective, ModalComponent,
  ModalHeaderComponent, ModalTitleDirective, ModalBodyComponent,
  ModalFooterComponent, FormControlDirective, BadgeComponent, AlertComponent,
  ButtonCloseDirective
} from '@coreui/angular';

/**
 * Admin screen for the configurable supplier-registration questionnaire.
 * Each question belongs to a department category (matches
 * SupplierDepartment.categoryOfProducts) - whenever a supplier registers and
 * picks that category for a department, these questions are shown to them.
 * Mirrors evaluation-criteria.component's list+modal CRUD pattern.
 */
@Component({
  selector: 'app-registration-questionnaire',
  templateUrl: './registration-questionnaire.component.html',
  styleUrls: ['./registration-questionnaire.component.css'],
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    ContainerComponent, RowComponent, ColComponent, CardComponent,
    CardHeaderComponent, CardBodyComponent, ButtonDirective, ModalComponent,
    ModalHeaderComponent, ModalTitleDirective, ModalBodyComponent,
    ModalFooterComponent, FormControlDirective, BadgeComponent, AlertComponent,
    ButtonCloseDirective
  ]
})
export class RegistrationQuestionnaireComponent implements OnInit {

  /** Exposed so the template can call Math.min() for the "Showing X-Y of Z" range. */
  readonly Math = Math;

  @ViewChild('questionModal') questionModal!: ModalComponent;
  @ViewChild('deleteModal') deleteModal!: ModalComponent;

  // Known category values - covers both places a "category" is asked: the admin
  // Create Supplier flow's per-department categoryOfProducts, and the public
  // self-registration flow's supplier-level industrySector. Kept here only as
  // convenient suggestions (admin can type any category, it's a plain text field
  // on the backend) since the two flows use different value lists.
  readonly knownCategories: string[] = [
    'IT Equipment', 'Industrial Equipment', 'Software Services',
    'Hardware Supplies', 'Pharmaceutical Products',
    'IT', 'Logistics', 'Electrical', 'Construction', 'Healthcare',
    'Automotive', 'Textile', 'Food & Beverage', 'Pharmaceutical',
    'Others'
  ];

  criteria: any[] = [];
  questionForm!: FormGroup;

  companyName: string = '';
  fullName: string = '';
  email: string = '';
  role: string = 'Organization Administrator';

  isLoading: boolean = false;
  isSubmitting: boolean = false;
  isDeleting: boolean = false;

  showModal: boolean = false;
  showDeleteModal: boolean = false;

  isEditMode: boolean = false;
  selectedCriterion: any = null;

  errorMessage: string | null = null;
  successMessage: string | null = null;

  // ── Filter + pagination ──────────────────────────────────────────────
  categoryFilter: string = ''; // '' = All Categories
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private messageService: MessageService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.companyName = localStorage.getItem('companyName') || 'Unknown Company';
    this.fullName = localStorage.getItem('fullName') || 'Admin';
    this.email = localStorage.getItem('email') || 'admin@company.com';

    this.loadCriteria();
  }

  initForm(): void {
    this.questionForm = this.fb.group({
      category: ['', [Validators.required]],
      otherCategory: [''],
      questionText: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]]
    });
  }

  /** Distinct categories actually present, for the filter dropdown - in the order they
   * first appear (criteria already arrive sorted by category from the backend). */
  get availableCategories(): string[] {
    const seen: string[] = [];
    for (const c of this.criteria) {
      if (!seen.includes(c.category)) seen.push(c.category);
    }
    return seen;
  }

  /** Criteria after applying the category filter (before pagination). */
  get filteredCriteria(): any[] {
    if (!this.categoryFilter) return this.criteria;
    return this.criteria.filter(c => c.category === this.categoryFilter);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredCriteria.length / this.pageSize));
  }

  /** The current page's slice of the filtered list - what the table actually renders. */
  get pagedCriteria(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredCriteria.slice(start, start + this.pageSize);
  }

  onCategoryFilterChange(): void {
    this.currentPage = 1;
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }

  prevPage(): void { this.goToPage(this.currentPage - 1); }
  nextPage(): void { this.goToPage(this.currentPage + 1); }

  /** Page numbers to render as buttons (simple window, no ellipsis needed at this scale). */
  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  loadCriteria(): void {
    this.isLoading = true;
    this.dataService.getAllRegistrationQuestionnaireCriteria().subscribe({
      next: (response: any) => {
        this.criteria = (response && response.success && response.data) ? response.data : [];
        if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
        this.isLoading = false;
      },
      error: () => {
        this.messageService.showMessage('error', 'Error', 'Failed to load questionnaire');
        this.isLoading = false;
      }
    });
  }

  openCreateModal(): void {
    this.isEditMode = false;
    this.selectedCriterion = null;
    this.questionForm.reset();
    this.errorMessage = null;
    this.successMessage = null;
    this.showModal = true;
  }

  openEditModal(criterion: any): void {
    this.isEditMode = true;
    this.selectedCriterion = criterion;

    const isKnown = this.knownCategories.includes(criterion.category);
    this.questionForm.patchValue({
      category: isKnown ? criterion.category : 'Others',
      otherCategory: isKnown ? '' : criterion.category,
      questionText: criterion.questionText
    });

    this.errorMessage = null;
    this.successMessage = null;
    this.showModal = true;
  }

  submitQuestion(): void {
    if (this.questionForm.invalid) {
      this.questionForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = null;
    this.successMessage = null;

    const v = this.questionForm.value;
    const resolvedCategory = (v.category === 'Others' && v.otherCategory?.trim()) ? v.otherCategory.trim() : v.category;

    const payload = { category: resolvedCategory, questionText: v.questionText.trim() };

    if (this.isEditMode && this.selectedCriterion) {
      this.dataService.updateRegistrationQuestionnaireCriteria(this.selectedCriterion.id, payload).subscribe({
        next: (response: any) => {
          this.isSubmitting = false;
          if (response && response.success) {
            this.messageService.showMessage('success', 'Success', 'Question updated successfully');
            this.closeModal();
            this.loadCriteria();
          } else {
            this.errorMessage = response?.message || 'Failed to update question';
          }
        },
        error: (error: any) => {
          this.isSubmitting = false;
          this.errorMessage = error.error?.message || 'Failed to update question';
        }
      });
    } else {
      this.dataService.createRegistrationQuestionnaireCriteria(payload).subscribe({
        next: (response: any) => {
          this.isSubmitting = false;
          if (response && response.success) {
            this.messageService.showMessage('success', 'Success', 'Question created successfully');
            this.closeModal();
            this.loadCriteria();
          } else {
            this.errorMessage = response?.message || 'Failed to create question';
          }
        },
        error: (error: any) => {
          this.isSubmitting = false;
          this.errorMessage = error.error?.message || 'Failed to create question';
        }
      });
    }
  }

  confirmDelete(criterion: any): void {
    this.selectedCriterion = criterion;
    this.showDeleteModal = true;
  }

  deleteQuestion(): void {
    if (!this.selectedCriterion) return;
    this.isDeleting = true;

    this.dataService.deleteRegistrationQuestionnaireCriteria(this.selectedCriterion.id).subscribe({
      next: (response: any) => {
        this.isDeleting = false;
        if (response && response.success) {
          this.messageService.showMessage('success', 'Success', 'Question deleted successfully');
          this.showDeleteModal = false;
          this.loadCriteria();
        } else {
          this.messageService.showMessage('error', 'Error', response?.message || 'Failed to delete');
        }
      },
      error: (error: any) => {
        this.isDeleting = false;
        this.messageService.showMessage('error', 'Error', error.error?.message || 'Failed to delete');
      }
    });
  }

  toggleStatus(criterion: any): void {
    const action = criterion.isActive ? 'deactivate' : 'activate';
    if (!confirm(`Are you sure you want to ${action} this question?`)) return;

    this.dataService.toggleRegistrationQuestionnaireCriteriaActive(criterion.id).subscribe({
      next: (response: any) => {
        if (response && response.success) {
          this.messageService.showMessage('success', 'Success', `Question ${action}d`);
          this.loadCriteria();
        }
      },
      error: () => {
        this.messageService.showMessage('error', 'Error', `Failed to ${action}`);
      }
    });
  }

  closeModal(): void {
    this.showModal = false;
    this.questionForm.reset();
    this.errorMessage = null;
    this.successMessage = null;
  }

  onModalClose(visible: boolean): void {
    if (!visible) this.closeModal();
  }

  getInitials(name: string): string {
    if (!name) return 'NA';
    const parts = name.split(' ');
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.substring(0, 2).toUpperCase();
  }
}
