import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent,
  RowComponent, ColComponent, ContainerComponent, ButtonDirective,
  SpinnerComponent, AlertComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

/**
 * Post-closure supplier performance feedback form. Shown once an RFQ is
 * CLOSED (invoice paid - see InvoiceService#markInvoicePaid) via a "Give
 * Feedback" prompt on the RFQ dashboard. Scores the winning supplier
 * (SupplierFinalSelection) against the same criteria/weightage already
 * assigned to this RFQ, manually, plus any custom/ad-hoc criteria the RFQ
 * creator adds themselves - writes to the separate rfq_feedback table,
 * never touching the original pre-award supplier_scores. Feedback can only
 * be submitted once per RFQ.
 */
let customEntrySeq = 0;

interface CustomEntry {
  key: number;
  name: string;
  score: number;
  comments: string;
}

@Component({
  selector: 'app-rfq-feedback',
  templateUrl: './rfq-feedback.component.html',
  styleUrls: ['./rfq-feedback.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, ContainerComponent, RowComponent, ColComponent,
    CardComponent, CardBodyComponent, ButtonDirective,
    SpinnerComponent, AlertComponent
  ]
})
export class RfqFeedbackComponent implements OnInit {

  rfqId: number = 0;
  userId: number = 0;
  fullName: string = '';

  readonly MAX_SCORE = 5;

  isLoading: boolean = true;
  isSubmitting: boolean = false;
  loadError: string = '';
  alreadySubmitted: boolean = false;

  criteria: any[] = []; // RFQCriterion items: { id, weightage, criterion: {...} }
  supplierId: number | null = null;
  supplierName: string = '';

  // criterionId (RFQCriterion.id) -> raw score (0-5)
  scores: Record<number, number> = {};
  comments: Record<number, string> = {};
  scoreSource: Record<number, 'manual'> = {};

  customEntries: CustomEntry[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.rfqId = Number(this.route.snapshot.paramMap.get('rfqId'));
    this.userId = Number(localStorage.getItem('userId')) || 0;
    this.fullName = localStorage.getItem('fullName') || 'Buyer';

    if (!this.rfqId) {
      this.loadError = 'Invalid RFQ.';
      this.isLoading = false;
      return;
    }
    this.loadFeedbackForm();
  }

  loadFeedbackForm(): void {
    this.isLoading = true;
    this.loadError = '';

    this.dataService.getRfqFeedbackStatus(this.rfqId).subscribe({
      next: (statusRes: any) => {
        if (!statusRes?.isClosed) {
          this.loadError = 'This RFQ is not closed yet - feedback can only be given after payment is completed.';
          this.isLoading = false;
          return;
        }
        if (statusRes?.hasFeedback) {
          this.alreadySubmitted = true;
          this.isLoading = false;
          return;
        }
        this.loadWinningSupplierAndCriteria();
      },
      error: () => {
        this.loadError = 'Failed to check RFQ status.';
        this.isLoading = false;
      }
    });
  }

  private loadWinningSupplierAndCriteria(): void {
    this.dataService.getRfqWinningSupplier(this.rfqId).subscribe({
      next: (supplierRes: any) => {
        if (!supplierRes?.success) {
          this.loadError = 'No final supplier selection found for this RFQ.';
          this.isLoading = false;
          return;
        }
        this.supplierId = supplierRes.data.supplierId;
        this.supplierName = supplierRes.data.supplierName;

        this.dataService.getRFQCriteria(this.rfqId).subscribe({
          next: (critRes: any) => {
            this.criteria = (critRes?.success && critRes.data) ? critRes.data : [];
            this.criteria.forEach(c => {
              this.scores[c.id] = 3;
              this.scoreSource[c.id] = 'manual';
            });
            this.isLoading = false;
          },
          error: () => {
            this.loadError = 'Failed to load evaluation criteria for this RFQ.';
            this.isLoading = false;
          }
        });
      },
      error: () => {
        this.loadError = 'No final supplier selection found for this RFQ.';
        this.isLoading = false;
      }
    });
  }

  updateManualScore(rfqCriterionId: number, value: any): void {
    const score = Math.max(0, Math.min(this.MAX_SCORE, Number(value)));
    if (isNaN(score)) return;
    this.scores[rfqCriterionId] = score;
  }

  addCustomEntry(): void {
    this.customEntries.push({ key: ++customEntrySeq, name: '', score: 3, comments: '' });
  }

  removeCustomEntry(key: number): void {
    this.customEntries = this.customEntries.filter(e => e.key !== key);
  }

  updateCustomScore(entry: CustomEntry, value: any): void {
    const score = Math.max(0, Math.min(this.MAX_SCORE, Number(value)));
    if (isNaN(score)) return;
    entry.score = score;
  }

  submitFeedback(): void {
    if (!this.supplierId || this.criteria.length === 0) return;

    const customItems = this.customEntries.filter(e => e.name && e.name.trim());
    if (this.customEntries.some(e => !e.name || !e.name.trim())) {
      this.messageService.showMessage('error', 'Error', 'Each custom criterion needs a name, or remove the blank entry.');
      return;
    }

    this.isSubmitting = true;
    const payload = {
      scoredByUserId: this.userId,
      scoredByName: this.fullName,
      scores: [
        ...this.criteria.map(c => ({
          rfqCriterionId: c.id,
          rawScore: this.scores[c.id] ?? 0,
          comments: this.comments[c.id] || '',
          scoreSource: 'manual'
        })),
        ...customItems.map(e => ({
          customCriterionName: e.name.trim(),
          rawScore: e.score ?? 0,
          comments: e.comments || '',
          scoreSource: 'manual'
        }))
      ]
    };

    this.dataService.submitRfqFeedback(this.rfqId, this.supplierId, payload).subscribe({
      next: (response: any) => {
        this.isSubmitting = false;
        if (response?.success) {
          this.messageService.showMessage('success', 'Success', 'Feedback submitted successfully');
          this.router.navigate(['/rfq-dashboard']);
        } else {
          this.messageService.showMessage('error', 'Error', response?.message || 'Failed to submit feedback');
        }
      },
      error: (err: any) => {
        this.isSubmitting = false;
        this.messageService.showMessage('error', 'Error', err.error?.message || 'Failed to submit feedback');
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/rfq-dashboard']);
  }
}
