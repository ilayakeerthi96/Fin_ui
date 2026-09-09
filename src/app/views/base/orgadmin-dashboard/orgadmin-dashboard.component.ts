import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../../shared/service/DataService';
import {
  ContainerComponent, RowComponent, ColComponent, CardComponent,
  CardHeaderComponent, CardBodyComponent, ButtonDirective, BadgeComponent, AlertModule
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

/**
 * Admin dashboard — a snapshot of who has a login, plus one click to the three screens Admin
 * actually owns: Manage Users, Reports, Audit Log. Admin no longer touches PO/Invoice/Payment
 * work (that's Procurement now) and there is no Hierarchy Levels or Reporting Structure screen
 * left to manage — both were specific to the approval hierarchy, which this app no longer uses.
 */
@Component({
  selector: 'app-orgadmin-dashboard',
  templateUrl: './orgadmin-dashboard.component.html',
  styleUrls: ['./orgadmin-dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule, ContainerComponent, RowComponent, ColComponent,
    CardComponent, CardHeaderComponent, CardBodyComponent, ButtonDirective,
    IconDirective, BadgeComponent, AlertModule
  ]
})
export class OrgAdminDashboardComponent implements OnInit {

  // ── User details ─────────────────────────────────────────────────────────
  fullName: string = '';
  email: string = '';
  companyName: string = '';
  phone: string = '';
  role: string = 'Organization Administrator';

  isLoading: boolean = false;
  errorMessage: string = '';

  // ── Statistics ────────────────────────────────────────────────────────────
  stats = {
    totalUsers: 0,
    activeUsers: 0,
    inactiveUsers: 0
  };

  allUsers: any[] = [];
  recentUsers: any[] = [];

  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.loadUserDetails();
    this.loadDashboardData();
  }

  loadUserDetails(): void {
    this.fullName = localStorage.getItem('fullName') || 'Admin';
    this.email = localStorage.getItem('email') || 'admin@company.com';
    this.companyName = localStorage.getItem('companyName') || 'Unknown Company';
    this.phone = localStorage.getItem('phone') || 'Not provided';
  }

  loadDashboardData(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.dataService.getHierarchyUsersByCompany(this.companyName).subscribe({
      next: (response: any) => {
        this.allUsers = response?.success && response?.data ? response.data : [];

        this.stats.totalUsers    = this.allUsers.length;
        this.stats.activeUsers   = this.allUsers.filter((u: any) => u.isActive === true).length;
        this.stats.inactiveUsers = this.stats.totalUsers - this.stats.activeUsers;

        this.recentUsers = [...this.allUsers]
          .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 5);

        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load users.';
        this.allUsers = [];
        this.recentUsers = [];
        this.stats = { totalUsers: 0, activeUsers: 0, inactiveUsers: 0 };
        this.isLoading = false;
      }
    });
  }

  /** A quiet, common enterprise-dashboard touch — costs nothing, reads as more considered
   *  than a static "Welcome" every time the page loads. */
  get greeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  getInitials(name: string): string {
    if (!name) return 'NA';
    const parts = name.split(' ');
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.substring(0, 2).toUpperCase();
  }

  getActivePercentage(): number {
    if (this.stats.totalUsers === 0) return 0;
    return Math.round((this.stats.activeUsers / this.stats.totalUsers) * 100);
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return 'N/A';
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return 'N/A';
      return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
    } catch {
      return 'N/A';
    }
  }

  trackById(_i: number, row: any): any { return row?.id; }
}
