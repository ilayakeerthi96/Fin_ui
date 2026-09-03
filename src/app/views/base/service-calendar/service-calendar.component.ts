import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../../../shared/service/DataService';
import { AuthService } from '../../../shared/service/AuthService';

/**
 * Yearly supplier ↔ buyer activity calendar — the month × activity grid modelled on the QA
 * Activities Calendar format. Buyer plans the cells; both sides see what actually happened,
 * derived server-side from real records (never stored, so it cannot drift).
 */
@Component({
  selector: 'app-service-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './service-calendar.component.html',
  styleUrls: ['./service-calendar.component.css']
})
export class ServiceCalendarComponent implements OnInit {

  isSupplierMode = false;
  buyerId = 0;
  supplierId = 0;
  userName = '';

  suppliers: any[] = [];
  activities: any[] = [];
  months: any[] = [];
  summary: any = null;
  /** Agreed service frequency + scope of work, read off the supplier's Service Entry Sheets. */
  serviceContext: any = null;
  isAutoPlanning = false;
  financialYear = '';
  fyStartYear = 0;
  fyOptions: number[] = [];

  /** The "show my manager the whole schedule" view — every year in one continuous table
   *  instead of one financial year at a time. */
  isMultiYearView = false;

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  // Free-text cell being edited (only one at a time) — keyed "monthDate|activityKey".
  editingCellKey: string | null = null;
  editingText = '';

  // ── Cell drill-down: the actual records behind a count ──
  showDetailModal = false;
  isLoadingDetails = false;
  detailData: any = null;

  constructor(private dataService: DataService, private authService: AuthService) {}

  ngOnInit(): void {
    this.isSupplierMode = this.authService.isSupplier();
    this.userName =
      localStorage.getItem('fullName') || localStorage.getItem('email') || 'User';

    const now = new Date();
    // Indian financial year: April–March, so Jan–Mar still belongs to the previous FY.
    const currentFy = now.getMonth() + 1 >= 4 ? now.getFullYear() : now.getFullYear() - 1;
    this.fyStartYear = currentFy;
    this.fyOptions = [currentFy - 2, currentFy - 1, currentFy, currentFy + 1];

    if (this.isSupplierMode) {
      this.supplierId = this.authService.getSupplierId() || 0;
      // A supplier's calendar is against the buyer that issued their POs — resolved server-side
      // rather than assuming a buyerId happens to be sitting in local storage.
      this.dataService.getServiceCalendarBuyerForSupplier(this.supplierId).subscribe({
        next: (res: any) => {
          const data = res?.success ? res.data : (res?.data || res);
          this.buyerId = Number(data?.buyerId) || 0;
          if (this.buyerId) this.loadCalendar();
          else this.errorMessage = 'No buyer is linked to your account yet — a Purchase Order is needed first.';
        },
        error: () => { this.errorMessage = 'Could not resolve your buyer.'; }
      });
    } else {
      this.buyerId = Number(localStorage.getItem('buyerId')) || 0;
      this.loadSuppliers();
    }
  }

  loadSuppliers(): void {
    if (!this.buyerId) { this.errorMessage = 'No buyer account found. Please sign in again.'; return; }
    this.dataService.getServiceCalendarSuppliers(this.buyerId).subscribe({
      next: (res: any) => {
        this.suppliers = (res?.success ? res.data : (res?.data || res)) || [];
        if (this.suppliers.length && !this.supplierId) {
          this.supplierId = this.suppliers[0].supplierId;
          this.loadCalendar();
        }
      },
      error: () => { this.errorMessage = 'Failed to load suppliers.'; }
    });
  }

  loadCalendar(): void {
    if (!this.buyerId || !this.supplierId) return;
    this.isMultiYearView = false;
    this.isLoading = true;
    this.errorMessage = '';
    this.dataService.getServiceCalendar(this.buyerId, this.supplierId, this.fyStartYear).subscribe({
      next: (res: any) => {
        const data = res?.success ? res.data : (res?.data || res);
        this.activities = data?.activities || [];
        this.months = data?.months || [];
        this.summary = data?.summary || null;
        this.serviceContext = data?.serviceContext || null;
        this.financialYear = data?.financialYear || '';
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to load the calendar.';
        this.isLoading = false;
      }
    });
  }

  /** Every year this supplier has service history in, in one continuous table — for a manager review. */
  loadMultiYearCalendar(): void {
    if (!this.buyerId || !this.supplierId) return;
    this.isMultiYearView = true;
    this.isLoading = true;
    this.errorMessage = '';
    this.dataService.getServiceCalendarMultiYear(this.buyerId, this.supplierId).subscribe({
      next: (res: any) => {
        const data = res?.success ? res.data : (res?.data || res);
        this.activities = data?.activities || [];
        this.months = data?.months || [];
        this.summary = data?.summary || null;
        this.serviceContext = data?.serviceContext || null;
        this.financialYear = data?.financialYear || '';
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to load the multi-year schedule.';
        this.isLoading = false;
        this.isMultiYearView = false;
      }
    });
  }

  toggleMultiYearView(): void {
    if (this.isMultiYearView) this.loadCalendar();
    else this.loadMultiYearCalendar();
  }

  onSupplierChange(): void { this.loadCalendar(); }
  onYearChange(): void { this.loadCalendar(); }

  cellKey(month: any, activityKey: string): string {
    return `${month.monthDate}|${activityKey}`;
  }

  /** Only the buyer edits the plan; suppliers get a read-only grid. */
  get canEdit(): boolean { return !this.isSupplierMode; }

  togglePlanned(month: any, activity: any): void {
    if (!this.canEdit) return;
    const cell = month.cells[activity.key];
    const next = !cell.planned;
    cell.planned = next; // optimistic — reverted in the error handler below
    this.saveCell(month, activity, next, cell.plannedText);
  }

  startEditText(month: any, activity: any): void {
    if (!this.canEdit) return;
    this.editingCellKey = this.cellKey(month, activity.key);
    this.editingText = month.cells[activity.key].plannedText || '';
  }

  commitEditText(month: any, activity: any): void {
    if (!this.canEdit) return;
    const cell = month.cells[activity.key];
    const text = this.editingText?.trim() || null;
    const previous = cell.plannedText;
    cell.plannedText = text;
    this.editingCellKey = null;
    if (text !== previous) {
      this.saveCell(month, activity, cell.planned, text);
    }
  }

  cancelEditText(): void {
    this.editingCellKey = null;
    this.editingText = '';
  }

  private saveCell(month: any, activity: any, planned: boolean, plannedText: string | null): void {
    this.dataService.saveServiceCalendarCell({
      buyerId: this.buyerId,
      supplierId: this.supplierId,
      monthDate: month.monthDate,
      activityKey: activity.key,
      planned,
      plannedText,
      updatedByName: this.userName
    }).subscribe({
      next: () => { this.recomputeSummary(); },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to save the calendar cell.';
        // Reload so the grid matches what the server actually holds — in whichever view (single
        // year or multi-year) the user was actually looking at.
        if (this.isMultiYearView) this.loadMultiYearCalendar(); else this.loadCalendar();
      }
    });
  }

  /** Keeps the headline numbers live as cells are ticked, without a full round trip. */
  private recomputeSummary(): void {
    let planned = 0, done = 0, missed = 0, unplanned = 0;
    for (const m of this.months) {
      for (const key of Object.keys(m.cells || {})) {
        const c = m.cells[key];
        if (c.planned) planned++;
        if (c.planned && c.actual) done++;
        if (c.planned && !c.actual) missed++;
        if (!c.planned && c.actual) unplanned++;
      }
    }
    this.summary = {
      plannedCount: planned,
      completedCount: done,
      missedCount: missed,
      unplannedCount: unplanned,
      adherencePercent: planned === 0 ? null : Math.round((done * 100) / planned)
    };
  }

  /** Fills the Scheduled Service Visit row from the agreed frequency (e.g. quarterly → 4 months). */
  autoPlanVisits(): void {
    if (!this.canEdit || !this.buyerId || !this.supplierId) return;
    this.isAutoPlanning = true;
    this.errorMessage = '';
    this.dataService.autoPlanServiceVisits({
      buyerId: this.buyerId,
      supplierId: this.supplierId,
      fy: this.fyStartYear,
      updatedByName: this.userName
    }).subscribe({
      next: (res: any) => {
        const data = res?.success ? res.data : (res?.data || res);
        this.successMessage = `Planned ${data?.plannedMonths} service visit(s) — `
          + `${data?.frequencyLabel}.`;
        this.isAutoPlanning = false;
        this.loadCalendar();
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Could not auto-plan the service visits.';
        this.isAutoPlanning = false;
      }
    });
  }

  /**
   * Opens the drill-down for a cell's actual records. Stops propagation so clicking the tick
   * never also toggles the plan underneath it — the two are separate actions on the same cell.
   */
  openCellDetails(event: Event, month: any, activity: any): void {
    event.stopPropagation();
    if (!this.buyerId || !this.supplierId) return;

    this.showDetailModal = true;
    this.isLoadingDetails = true;
    this.detailData = null;

    this.dataService.getServiceCalendarCellDetails(
      this.buyerId, this.supplierId, month.monthDate, activity.key
    ).subscribe({
      next: (res: any) => {
        this.detailData = res?.success ? res.data : (res?.data || res);
        this.isLoadingDetails = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to load the records for this cell.';
        this.isLoadingDetails = false;
        this.showDetailModal = false;
      }
    });
  }

  closeDetailModal(): void {
    this.showDetailModal = false;
    this.detailData = null;
  }

  /** Cell state drives the colour: done / missed / unplanned / empty. */
  cellStatus(cell: any): 'done' | 'missed' | 'unplanned' | 'empty' {
    if (cell.planned && cell.actual) return 'done';
    if (cell.planned && !cell.actual) return 'missed';
    if (!cell.planned && cell.actual) return 'unplanned';
    return 'empty';
  }
}
