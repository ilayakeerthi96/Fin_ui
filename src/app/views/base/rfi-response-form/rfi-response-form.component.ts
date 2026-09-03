import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent,
  ContainerComponent, ButtonDirective, AlertComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

/** Supplier answers an RFI's questions and submits (or edits, before it closes). */
@Component({
  selector: 'app-rfi-response-form',
  templateUrl: './rfi-response-form.component.html',
  styleUrls: ['./rfi-response-form.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, CardComponent, CardBodyComponent, RowComponent, ColComponent,
    ContainerComponent, ButtonDirective, AlertComponent
  ]
})
export class RfiResponseFormComponent implements OnInit {

  rfiId: number = 0;
  supplierId: number = 0;

  rfi: any = null;
  questions: any[] = [];
  answers: Record<number, string> = {};
  isClosed: boolean = false;

  isLoading: boolean = true;
  isSubmitting: boolean = false;
  loadError: string = '';
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.rfiId = Number(this.route.snapshot.paramMap.get('rfiId'));
    this.supplierId = Number(localStorage.getItem('supplierId')) || 0;

    if (!this.rfiId || !this.supplierId) {
      this.loadError = 'Invalid RFI or supplier session.';
      this.isLoading = false;
      return;
    }
    this.load();
  }

  private load(): void {
    this.isLoading = true;
    this.dataService.getRfiForSupplier(this.rfiId, this.supplierId).subscribe({
      next: (response: any) => {
        if (!response?.success) {
          this.loadError = response?.message || 'Failed to load RFI.';
          this.isLoading = false;
          return;
        }
        this.rfi = response.data.rfi;
        this.questions = response.data.questions || [];
        this.isClosed = this.rfi?.status === 'CLOSED';

        const existing = response.data.existingAnswers || [];
        for (const a of existing) { this.answers[a.questionId] = a.answerText || ''; }

        this.isLoading = false;
      },
      error: (err: any) => {
        this.loadError = err.error?.message || 'Failed to load RFI.';
        this.isLoading = false;
      }
    });
  }

  submit(): void {
    this.errorMessage = null;
    const missing = this.questions.filter(q => q.isMandatory && !this.answers[q.id]?.trim());
    if (missing.length > 0) {
      this.errorMessage = 'Please answer all required questions.';
      return;
    }

    this.isSubmitting = true;
    const answers = this.questions.map(q => ({
      questionId: q.id,
      answerText: this.answers[q.id] || ''
    }));

    this.dataService.submitRfiResponse(this.rfiId, this.supplierId, answers).subscribe({
      next: (response: any) => {
        this.isSubmitting = false;
        if (response?.success) {
          this.messageService.showMessage('success', 'Success', 'Response submitted successfully');
          this.router.navigate(['/rfi-inbox']);
        } else {
          this.errorMessage = response?.message || 'Failed to submit response';
        }
      },
      error: (err: any) => {
        this.isSubmitting = false;
        this.errorMessage = err.error?.message || 'Failed to submit response';
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/rfi-inbox']);
  }
}
