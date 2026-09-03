import {
  Component, Input, Output, EventEmitter, OnInit, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MeetingService,
  CreateMeetingRequest,
  MeetingParticipantInfo
} from '../../../shared/service/meeting.service';

@Component({
  selector: 'app-meeting-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meeting-schedule.component.html',
  styleUrls: ['./meeting-schedule.component.css']
})
export class MeetingScheduleComponent implements OnInit, OnDestroy {

  // ── Inputs ──────────────────────────────────────────────────────────────────
  @Input() rfqId!:         number;
  @Input() rfqNumber!:     string;
  @Input() hostId!:        number;
  @Input() hostName!:      string;
  @Input() hostType!:      string;      // 'BUYER' | 'SUPPLIER'

  /** Default participant (single selected supplier) */
  @Input() participants: MeetingParticipantInfo[] = [];
  /** Full list of ALL suppliers who received this RFQ — for "group meeting" option */
  @Input() allParticipants: MeetingParticipantInfo[] = [];

  // ── Outputs ─────────────────────────────────────────────────────────────────
  /** Emits the new meeting's roomId so the parent can open the meeting room */
  @Output() meetingCreated = new EventEmitter<string>();
  @Output() closed         = new EventEmitter<void>();

  // ── Form state ───────────────────────────────────────────────────────────────
  meetingType: 'INSTANT' | 'SCHEDULED' = 'INSTANT';
  /** 'one' = single supplier | 'all' = all RFQ suppliers */
  meetingScope: 'one' | 'all' = 'one';
  /** Index into allParticipants for one-to-one selection */
  selectedSupplierIndex = 0;

  title           = '';
  description     = '';
  agenda          = '';
  scheduledAt     = '';    // datetime-local string
  durationMinutes = 60;

  isCreating = false;
  errorMsg   = '';

  // Min datetime for scheduled meetings (now)
  minDateTime = '';

  ngOnInit(): void {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 5);  // at least 5 min in future
    this.minDateTime = now.toISOString().slice(0, 16);
    this.title = `Meeting – RFQ ${this.rfqNumber || this.rfqId}`;
    // If only one supplier, default scope = one
    this.meetingScope = this.allParticipants.length > 1 ? 'one' : 'one';
  }

  /** Returns whichever participants will actually be invited based on scope */
  get effectiveParticipants(): MeetingParticipantInfo[] {
    if (this.meetingScope === 'all') {
      return this.allParticipants.length > 0 ? this.allParticipants : this.participants;
    }
    // one-to-one: use the selected supplier from allParticipants, fallback to participants
    const pool = this.allParticipants.length > 0 ? this.allParticipants : this.participants;
    const idx  = Math.min(this.selectedSupplierIndex, pool.length - 1);
    return pool.length > 0 ? [pool[idx]] : [];
  }

  ngOnDestroy(): void {}

  constructor(private meetingService: MeetingService) {}

  onTypeChange(): void {
    this.errorMsg = '';
  }

  create(): void {
    this.errorMsg = '';

    if (!this.title.trim()) { this.errorMsg = 'Please enter a meeting title.'; return; }

    if (this.meetingType === 'SCHEDULED') {
      if (!this.scheduledAt) { this.errorMsg = 'Please select a scheduled date and time.'; return; }
      const selected = new Date(this.scheduledAt);
      if (selected <= new Date()) { this.errorMsg = 'Scheduled time must be in the future.'; return; }
    }

    const req: CreateMeetingRequest = {
      title:           this.title.trim(),
      description:     this.description.trim() || undefined,
      rfqId:           this.rfqId        || undefined,
      rfqNumber:       this.rfqNumber    || undefined,
      hostId:          this.hostId,
      hostName:        this.hostName,
      hostType:        this.hostType,
      meetingType:     this.meetingType,
      scheduledAt:     this.meetingType === 'SCHEDULED' ? this.scheduledAt : undefined,
      durationMinutes: this.durationMinutes,
      agenda:          this.agenda.trim() || undefined,
      participants:    this.effectiveParticipants   // ← use scope-resolved list
    };

    this.isCreating = true;
    this.meetingService.createMeeting(req).subscribe({
      next: (res: any) => {
        this.isCreating = false;
        const roomId = res?.data?.meetingRoomId || res?.meetingRoomId;
        if (roomId) {
          this.meetingCreated.emit(roomId);
        } else {
          this.errorMsg = 'Meeting created but room ID missing. Please check Meeting List.';
        }
      },
      error: (err: any) => {
        this.isCreating = false;
        this.errorMsg = err?.error?.message || 'Failed to create meeting. Please try again.';
      }
    });
  }

  close(): void {
    this.closed.emit();
  }

  get durationOptions(): { val: number; label: string }[] {
    return [
      { val: 15,  label: '15 minutes' },
      { val: 30,  label: '30 minutes' },
      { val: 45,  label: '45 minutes' },
      { val: 60,  label: '1 hour' },
      { val: 90,  label: '1.5 hours' },
      { val: 120, label: '2 hours' },
      { val: 180, label: '3 hours' }
    ];
  }
}
