import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent,
  ContainerComponent, ButtonDirective, BadgeComponent
} from '@coreui/angular';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';

/** Buyer's read-only review of every invited supplier's RFI answers. */
@Component({
  selector: 'app-rfi-responses',
  templateUrl: './rfi-responses.component.html',
  styleUrls: ['./rfi-responses.component.css'],
  standalone: true,
  imports: [
    CommonModule, CardComponent, CardBodyComponent, RowComponent, ColComponent,
    ContainerComponent, ButtonDirective, BadgeComponent
  ]
})
export class RfiResponsesComponent implements OnInit {

  rfiId: number = 0;
  questions: any[] = [];
  suppliers: any[] = [];
  isLoading: boolean = true;
  loadError: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.rfiId = Number(this.route.snapshot.paramMap.get('rfiId'));
    if (!this.rfiId) {
      this.loadError = 'Invalid RFI.';
      this.isLoading = false;
      return;
    }
    this.loadResponses();
  }

  loadResponses(): void {
    this.isLoading = true;
    this.dataService.getRfiResponses(this.rfiId).subscribe({
      next: (response: any) => {
        if (response?.success) {
          this.questions = response.data.questions || [];
          this.suppliers = response.data.suppliers || [];
        } else {
          this.loadError = response?.message || 'Failed to load responses';
        }
        this.isLoading = false;
      },
      error: () => {
        this.loadError = 'Failed to load responses';
        this.isLoading = false;
      }
    });
  }

  getAnswer(supplier: any, questionId: number): string {
    const found = (supplier.answers || []).find((a: any) => a.questionId === questionId);
    return found?.answerText || '—';
  }

  goBack(): void {
    this.router.navigate(['/rfi-dashboard']);
  }
}
