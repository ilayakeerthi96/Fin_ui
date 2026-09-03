import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../../../shared/service/DataService';
import { AuthService } from '../../../shared/service/AuthService';

/**
 * Company-wide Q&A library. Only the admin raises and answers questions; RFQ creators (buyers)
 * and suppliers get a read-only view of the published entries — no create, edit, or delete.
 */
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  /** The single permission switch for this screen — everyone else is view-only. */
  canManage = false;
  userName = '';

  entries: any[] = [];
  pendingCount = 0;

  searchText = '';
  categoryFilter = 'ALL';
  statusFilter: 'ALL' | 'PENDING' | 'ANSWERED' = 'ALL';

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  expanded: { [id: number]: boolean } = {};

  // ── Admin: create / edit entry modal ──
  showEntryModal = false;
  isSavingEntry = false;
  editingId: number | null = null;
  entryForm = { category: '', question: '', answer: '', isPublished: true };

  constructor(private dataService: DataService, private authService: AuthService) {}

  ngOnInit(): void {
    this.canManage = this.authService.isAdmin();
    this.userName =
      localStorage.getItem('fullName') || localStorage.getItem('email') || 'User';
    this.load();
  }

  load(): void {
    this.isLoading = true;
    const source$ = this.canManage
      ? this.dataService.getFaqForAdmin()
      : this.dataService.getPublishedFaq();

    source$.subscribe({
      next: (res: any) => {
        this.entries = (res?.success ? res.data : (res?.data || res)) || [];
        this.pendingCount = res?.pendingCount ?? 0;
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to load the Q&A library.';
        this.isLoading = false;
      }
    });
  }

  get categories(): string[] {
    const set = new Set<string>();
    for (const e of this.entries) if (e.category) set.add(e.category);
    return Array.from(set).sort();
  }

  get filteredEntries(): any[] {
    const q = this.searchText.toLowerCase().trim();
    return this.entries.filter(e => {
      const matchesCategory = this.categoryFilter === 'ALL' || e.category === this.categoryFilter;
      const matchesStatus = this.statusFilter === 'ALL' || e.status === this.statusFilter;
      const matchesSearch = !q ||
        (e.question || '').toLowerCase().includes(q) ||
        (e.answer || '').toLowerCase().includes(q) ||
        (e.category || '').toLowerCase().includes(q);
      return matchesCategory && matchesStatus && matchesSearch;
    });
  }

  toggle(id: number): void { this.expanded[id] = !this.expanded[id]; }

  // ── Admin actions ───────────────────────────────────────────────────

  openCreate(): void {
    this.editingId = null;
    this.entryForm = { category: '', question: '', answer: '', isPublished: true };
    this.showEntryModal = true;
  }

  openEdit(e: any): void {
    this.editingId = e.id;
    this.entryForm = {
      category: e.category || '',
      question: e.question || '',
      answer: e.answer || '',
      isPublished: !!e.isPublished
    };
    this.showEntryModal = true;
  }

  closeEntryModal(): void {
    this.showEntryModal = false;
    this.editingId = null;
  }

  saveEntry(): void {
    if (!this.entryForm.question?.trim()) {
      this.errorMessage = 'A question is required.';
      return;
    }
    // The backend refuses to publish an unanswered entry; catch it here too so the message
    // arrives before a round trip rather than after one.
    if (this.entryForm.isPublished && !this.entryForm.answer?.trim()) {
      this.errorMessage = 'Add an answer before publishing this to the library.';
      return;
    }

    this.isSavingEntry = true;
    const payload = {
      category: this.entryForm.category?.trim() || null,
      question: this.entryForm.question.trim(),
      answer: this.entryForm.answer?.trim() || null,
      isPublished: this.entryForm.isPublished,
      askedByName: this.userName,
      answeredByName: this.userName
    };

    const obs = this.editingId
      ? this.dataService.updateFaqEntry(this.editingId, payload)
      : this.dataService.createFaqEntry(payload);

    obs.subscribe({
      next: () => {
        this.successMessage = this.editingId ? 'Q&A entry updated.' : 'Question raised.';
        this.isSavingEntry = false;
        this.closeEntryModal();
        this.load();
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to save the entry.';
        this.isSavingEntry = false;
      }
    });
  }

  togglePublish(e: any): void {
    if (!e.answer?.trim() && !e.isPublished) {
      this.errorMessage = 'Answer the question before publishing it to the library.';
      return;
    }
    this.dataService.updateFaqEntry(e.id, { isPublished: !e.isPublished }).subscribe({
      next: () => {
        this.successMessage = !e.isPublished ? 'Published to the library.' : 'Unpublished.';
        this.load();
      },
      error: (err: any) => { this.errorMessage = err?.error?.message || 'Failed to update.'; }
    });
  }

  deleteEntry(e: any): void {
    if (!confirm(`Delete this Q&A entry?\n\n"${e.question}"`)) return;
    this.dataService.deleteFaqEntry(e.id).subscribe({
      next: () => { this.successMessage = 'Entry deleted.'; this.load(); },
      error: (err: any) => { this.errorMessage = err?.error?.message || 'Failed to delete.'; }
    });
  }
}
