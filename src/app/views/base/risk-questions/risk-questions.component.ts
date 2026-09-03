import { Component, OnInit } from '@angular/core';
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
 * Admin screen for the supplier risk-assessment question bank. Every active
 * question here is shown to every supplier during self-registration; answers
 * feed the auto-computed risk score shown on the Supplier Risk Dashboard.
 * Mirrors registration-questionnaire.component's list+modal CRUD pattern.
 */
@Component({
  selector: 'app-risk-questions',
  templateUrl: './risk-questions.component.html',
  styleUrls: ['./risk-questions.component.css'],
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
export class RiskQuestionsComponent implements OnInit {

  readonly Math = Math;

  questions: any[] = [];
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
  selectedQuestion: any = null;

  errorMessage: string | null = null;

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

    this.loadQuestions();
  }

  initForm(): void {
    this.questionForm = this.fb.group({
      questionText: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
      riskWeight: [5, [Validators.required, Validators.min(1), Validators.max(10)]],
      riskyAnswer: ['YES', [Validators.required]]
    });
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.questions.length / this.pageSize));
  }

  get pagedQuestions(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.questions.slice(start, start + this.pageSize);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }

  prevPage(): void { this.goToPage(this.currentPage - 1); }
  nextPage(): void { this.goToPage(this.currentPage + 1); }

  loadQuestions(): void {
    this.isLoading = true;
    this.dataService.getAllRiskQuestions().subscribe({
      next: (response: any) => {
        this.questions = (response && response.success && response.data) ? response.data : [];
        if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
        this.isLoading = false;
      },
      error: () => {
        this.messageService.showMessage('error', 'Error', 'Failed to load risk questions');
        this.isLoading = false;
      }
    });
  }

  openCreateModal(): void {
    this.isEditMode = false;
    this.selectedQuestion = null;
    this.questionForm.reset({ riskWeight: 5, riskyAnswer: 'YES' });
    this.errorMessage = null;
    this.showModal = true;
  }

  openEditModal(question: any): void {
    this.isEditMode = true;
    this.selectedQuestion = question;
    this.questionForm.patchValue({
      questionText: question.questionText,
      riskWeight: question.riskWeight,
      riskyAnswer: question.riskyAnswer
    });
    this.errorMessage = null;
    this.showModal = true;
  }

  submitQuestion(): void {
    if (this.questionForm.invalid) {
      this.questionForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = null;

    const v = this.questionForm.value;
    const payload = {
      questionText: v.questionText.trim(),
      riskWeight: Number(v.riskWeight),
      riskyAnswer: v.riskyAnswer
    };

    if (this.isEditMode && this.selectedQuestion) {
      this.dataService.updateRiskQuestion(this.selectedQuestion.id, payload).subscribe({
        next: (response: any) => {
          this.isSubmitting = false;
          if (response && response.success) {
            this.messageService.showMessage('success', 'Success', 'Question updated successfully');
            this.closeModal();
            this.loadQuestions();
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
      this.dataService.createRiskQuestion(payload).subscribe({
        next: (response: any) => {
          this.isSubmitting = false;
          if (response && response.success) {
            this.messageService.showMessage('success', 'Success', 'Question created successfully');
            this.closeModal();
            this.loadQuestions();
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

  confirmDelete(question: any): void {
    this.selectedQuestion = question;
    this.showDeleteModal = true;
  }

  deleteQuestion(): void {
    if (!this.selectedQuestion) return;
    this.isDeleting = true;

    this.dataService.deleteRiskQuestion(this.selectedQuestion.id).subscribe({
      next: (response: any) => {
        this.isDeleting = false;
        if (response && response.success) {
          this.messageService.showMessage('success', 'Success', 'Question deleted successfully');
          this.showDeleteModal = false;
          this.loadQuestions();
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

  toggleStatus(question: any): void {
    const action = question.isActive ? 'deactivate' : 'activate';
    if (!confirm(`Are you sure you want to ${action} this question?`)) return;

    this.dataService.toggleRiskQuestionActive(question.id).subscribe({
      next: (response: any) => {
        if (response && response.success) {
          this.messageService.showMessage('success', 'Success', `Question ${action}d`);
          this.loadQuestions();
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
