import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../shared/service/DataService';
import { MessageService } from '../../../shared/service/message.service';
import {
  ContainerComponent, RowComponent, ColComponent, CardComponent,
  CardHeaderComponent, CardBodyComponent, BadgeComponent
} from '@coreui/angular';

/**
 * Admin risk dashboard: every supplier who has submitted the risk
 * questionnaire, with their auto-computed LOW/MEDIUM/HIGH rating and a
 * "Rating Changed" badge whenever the latest computed rating differs from
 * the one before it (see RiskAssessmentController#getDashboard).
 */
@Component({
  selector: 'app-supplier-risk-dashboard',
  templateUrl: './supplier-risk-dashboard.component.html',
  styleUrls: ['./supplier-risk-dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, ContainerComponent, RowComponent, ColComponent,
    CardComponent, CardHeaderComponent, CardBodyComponent, BadgeComponent
  ]
})
export class SupplierRiskDashboardComponent implements OnInit {

  rows: any[] = [];
  isLoading: boolean = false;
  levelFilter: string = ''; // '' = All

  companyName: string = '';
  fullName: string = '';

  constructor(
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.companyName = localStorage.getItem('companyName') || 'Unknown Company';
    this.fullName = localStorage.getItem('fullName') || 'Admin';
    this.loadDashboard();
  }

  loadDashboard(): void {
    this.isLoading = true;
    this.dataService.getRiskDashboard().subscribe({
      next: (response: any) => {
        this.rows = (response && response.success && response.data) ? response.data : [];
        this.isLoading = false;
      },
      error: () => {
        this.messageService.showMessage('error', 'Error', 'Failed to load risk dashboard');
        this.isLoading = false;
      }
    });
  }

  get filteredRows(): any[] {
    if (!this.levelFilter) return this.rows;
    return this.rows.filter(r => r.riskLevel === this.levelFilter);
  }

  get highRiskCount(): number {
    return this.rows.filter(r => r.riskLevel === 'HIGH').length;
  }

  get changedCount(): number {
    return this.rows.filter(r => r.ratingChanged).length;
  }

  levelColor(level: string): string {
    if (level === 'HIGH') return 'danger';
    if (level === 'MEDIUM') return 'warning';
    return 'success';
  }

  getInitials(name: string): string {
    if (!name) return 'NA';
    const parts = name.split(' ');
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.substring(0, 2).toUpperCase();
  }
}
