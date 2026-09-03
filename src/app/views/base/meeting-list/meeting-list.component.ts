import {
  Component, Input, Output, EventEmitter, OnInit, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeetingService, MeetingDTO } from '../../../shared/service/meeting.service';

@Component({
  selector: 'app-meeting-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit, OnDestroy {

  // ── Inputs ──────────────────────────────────────────────────────────────────
  @Input() rfqId!:     number;
  @Input() rfqNumber!: string;
  @Input() userId!:    number;
  @Input() userName!:  string;
  @Input() userType!:  string;   // 'BUYER' | 'SUPPLIER'

  // ── Outputs ─────────────────────────────────────────────────────────────────
  @Output() joinMeeting    = new EventEmitter<string>();   // emits meetingRoomId
  @Output() scheduleMeeting = new EventEmitter<void>();
  @Output() closed          = new EventEmitter<void>();

  // ── State ────────────────────────────────────────────────────────────────────
  meetings: MeetingDTO[] = [];
  isLoading = true;
  errorMsg  = '';
  activeTab: 'upcoming' | 'past' = 'upcoming';

  private refreshInterval: any = null;

  constructor(private meetingService: MeetingService) {}

  ngOnInit(): void {
    this.load();
    // Refresh every 30s (in case host starts a meeting)
    this.refreshInterval = setInterval(() => this.load(), 30000);
  }

  ngOnDestroy(): void {
    if (this.refreshInterval) { clearInterval(this.refreshInterval); }
  }

  load(): void {
    if (!this.rfqId) { this.isLoading = false; return; }
    this.meetingService.getMeetingsForRfq(this.rfqId).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        const list: MeetingDTO[] = res?.data || res || [];
        this.meetings = list;
      },
      error: () => {
        this.isLoading = false;
        this.errorMsg = 'Failed to load meetings.';
      }
    });
  }

  /** Only meetings where this user is host OR an invited participant */
  private get myMeetings(): MeetingDTO[] {
    return this.meetings.filter(m =>
      m.hostId === this.userId ||
      (m.participants || []).some((p: any) => p.userId === this.userId)
    );
  }

  get upcomingMeetings(): MeetingDTO[] {
    return this.myMeetings.filter(m =>
      m.status === 'SCHEDULED' || m.status === 'ACTIVE'
    ).sort((a, b) => {
      const da = a.scheduledAt || a.startedAt || a.createdAt || '';
      const db = b.scheduledAt || b.startedAt || b.createdAt || '';
      return da < db ? -1 : 1;
    });
  }

  get pastMeetings(): MeetingDTO[] {
    return this.myMeetings.filter(m =>
      m.status === 'COMPLETED' || m.status === 'CANCELLED'
    ).sort((a, b) => {
      const da = a.endedAt || a.startedAt || a.createdAt || '';
      const db = b.endedAt || b.startedAt || b.createdAt || '';
      return da > db ? -1 : 1;
    });
  }

  canJoin(m: MeetingDTO): boolean {
    if (m.status === 'ACTIVE') return true;
    if (m.status === 'SCHEDULED') {
      const now = new Date();
      const scheduled = m.scheduledAt ? new Date(m.scheduledAt) : null;
      if (!scheduled) return true;
      // Allow joining 10 min before
      const diff = (scheduled.getTime() - now.getTime()) / 60000;
      return diff <= 10;
    }
    return false;
  }

  isHost(m: MeetingDTO): boolean {
    return m.hostId === this.userId;
  }

  join(m: MeetingDTO): void {
    this.joinMeeting.emit(m.meetingRoomId);
  }

  endMeeting(m: MeetingDTO): void {
    if (!confirm('End this meeting for all participants?')) return;
    this.meetingService.endMeeting(m.meetingRoomId, this.userId).subscribe({
      next: () => this.load(),
      error: () => alert('Failed to end meeting.')
    });
  }

  cancelMeeting(m: MeetingDTO): void {
    if (!confirm('Cancel this scheduled meeting?')) return;
    this.meetingService.cancelMeeting(m.id, this.userId).subscribe({
      next: () => this.load(),
      error: () => alert('Failed to cancel meeting.')
    });
  }

  statusBadgeClass(status: string): string {
    switch (status) {
      case 'ACTIVE':    return 'badge-active';
      case 'SCHEDULED': return 'badge-scheduled';
      case 'COMPLETED': return 'badge-completed';
      case 'CANCELLED': return 'badge-cancelled';
      default:          return 'badge-default';
    }
  }

  formatDate(dt: string | undefined): string {
    if (!dt) return '—';
    const d = new Date(dt);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
      + ' ' + d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  }

  close(): void { this.closed.emit(); }
}
