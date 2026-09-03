import {
  Component, OnInit, OnDestroy, Input, Output, EventEmitter,
  ViewChild, ElementRef, AfterViewChecked, ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChatService, ChatMessageDTO, ChatRoomInfoDTO, RfqAnnouncementDTO } from '../../../shared/service/chat.service';
import { RfqMeetingComponent } from '../rfq-meeting/rfq-meeting.component';

@Component({
  selector: 'app-rfq-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, RfqMeetingComponent],
  templateUrl: './rfq-chat.component.html',
  styleUrls: ['./rfq-chat.component.css']
})
export class RfqChatComponent implements OnInit, OnDestroy, AfterViewChecked {

  @Input() rfqId!: number;
  @Input() userId!: number;
  @Input() userType!: string; // 'BUYER' | 'SUPPLIER'
  @Input() userName: string = '';
  @Input() rfqNumber: string = '';

  @Output() chatClosed = new EventEmitter<void>();
  @Output() unreadCountChange = new EventEmitter<number>();

  @ViewChild('messagesContainer') messagesContainer!: ElementRef;
  @ViewChild('announcementsContainer') announcementsContainer!: ElementRef;

  // Chat state
  chatRoomInfo: ChatRoomInfoDTO | null = null;
  messages: ChatMessageDTO[] = [];
  announcements: RfqAnnouncementDTO[] = [];
  newMessage: string = '';

  // Active tab: 'chat' | 'announcements'
  activeTab: 'chat' | 'announcements' = 'chat';

  // UI state
  isLoading = false;
  isSending = false;
  isSendingAnnouncement = false;
  isConnected = false;
  errorMessage = '';
  chatAvailable = false;
  newAnnouncement: string = '';

  // ── Meeting state ─────────────────────────────────────────────────────────
  isMeetingOpen     = false;
  currentMeetingRoom = '';

  private wsSubscription?: Subscription;
  private annSubscription?: Subscription;
  private connectionSubscription?: Subscription;
  private shouldScrollToBottom = false;
  private shouldScrollAnnouncementsToBottom = false;

  constructor(
    private chatService: ChatService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadChatRoomInfo();
    this.loadAnnouncements();
    this.connectionSubscription = this.chatService.isConnected$.subscribe(
      connected => {
        this.isConnected = connected;
        this.cdr.detectChanges();
      }
    );
    // Subscribe to live announcements via WebSocket
    this.annSubscription = this.chatService.announcements$.subscribe(
      (ann: RfqAnnouncementDTO) => {
        if (!this.announcements.find(a => a.id === ann.id)) {
          this.announcements = [...this.announcements, ann];
          this.shouldScrollAnnouncementsToBottom = true;
          this.cdr.detectChanges();
        }
      }
    );
  }

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom(this.messagesContainer);
      this.shouldScrollToBottom = false;
    }
    if (this.shouldScrollAnnouncementsToBottom) {
      this.scrollToBottom(this.announcementsContainer);
      this.shouldScrollAnnouncementsToBottom = false;
    }
  }

  ngOnDestroy(): void {
    this.wsSubscription?.unsubscribe();
    this.annSubscription?.unsubscribe();
    this.connectionSubscription?.unsubscribe();
    this.chatService.disconnectWebSocket();
  }

  // =========================================================================
  //  TABS
  // =========================================================================

  setTab(tab: 'chat' | 'announcements'): void {
    this.activeTab = tab;
    if (tab === 'chat') {
      this.shouldScrollToBottom = true;
    } else {
      this.shouldScrollAnnouncementsToBottom = true;
    }
  }

  // =========================================================================
  //  LOAD CHAT ROOM
  // =========================================================================

  loadChatRoomInfo(): void {
    if (!this.rfqId || !this.userId || !this.userType) return;

    this.isLoading = true;
    this.errorMessage = '';

    this.chatService.getChatRoomInfo(this.rfqId, this.userId, this.userType).subscribe({
      next: (res: any) => {
        const info: ChatRoomInfoDTO = res?.data || res;
        this.chatRoomInfo = info;
        this.chatAvailable = info?.chatAvailable === true;

        if (this.chatAvailable) {
          this.loadMessages();
          this.connectWebSocket();
        } else {
          this.errorMessage = info?.message || 'Chat is not available for this RFQ yet.';
        }
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Failed to load chat. Please try again.';
        this.isLoading = false;
      }
    });
  }

  // =========================================================================
  //  LOAD MESSAGES
  // =========================================================================

  loadMessages(): void {
    this.chatService.getMessages(this.rfqId, this.userId, this.userType).subscribe({
      next: (res: any) => {
        this.messages = res?.data || [];
        this.shouldScrollToBottom = true;
        this.markAsRead();
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Failed to load messages.';
      }
    });
  }

  // =========================================================================
  //  LOAD ANNOUNCEMENTS
  // =========================================================================

  loadAnnouncements(): void {
    this.chatService.getBroadcasts(this.rfqId).subscribe({
      next: (res: any) => {
        this.announcements = res?.data || [];
        this.shouldScrollAnnouncementsToBottom = true;
        this.cdr.detectChanges();
      },
      error: () => {
        // Silently fail — announcements are optional
      }
    });
  }

  // =========================================================================
  //  WEBSOCKET
  // =========================================================================

  connectWebSocket(): void {
    this.wsSubscription = this.chatService.connectToRfqChat(this.rfqId).subscribe({
      next: (msg: ChatMessageDTO) => {
        if (!this.messages.find(m => m.id === msg.id)) {
          this.messages = [...this.messages, msg];
          this.shouldScrollToBottom = true;
          if (msg.senderType !== this.userType) {
            this.markAsRead();
          }
          this.cdr.detectChanges();
        }
      }
    });
  }

  // =========================================================================
  //  SEND CHAT MESSAGE
  // =========================================================================

  sendMessage(): void {
    const content = this.newMessage.trim();
    if (!content || this.isSending) return;

    this.isSending = true;
    const request = {
      senderId: this.userId,
      senderName: this.userName || this.userType,
      senderType: this.userType,
      content
    };

    this.chatService.sendMessage(this.rfqId, request).subscribe({
      next: (res: any) => {
        this.newMessage = '';
        this.isSending = false;
        const sent: ChatMessageDTO = res?.data;
        if (sent && !this.messages.find(m => m.id === sent.id)) {
          this.messages = [...this.messages, sent];
          this.shouldScrollToBottom = true;
          this.cdr.detectChanges();
        }
      },
      error: (err: any) => {
        this.isSending = false;
        alert(err?.error?.message || 'Failed to send message. Please try again.');
      }
    });
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  // =========================================================================
  //  SEND ANNOUNCEMENT (Buyer only)
  // =========================================================================

  sendAnnouncement(): void {
    const content = this.newAnnouncement.trim();
    if (!content || this.isSendingAnnouncement) return;

    this.isSendingAnnouncement = true;

    this.chatService.sendBroadcast(this.rfqId, this.userId, this.userName || 'Buyer', content).subscribe({
      next: (res: any) => {
        this.newAnnouncement = '';
        this.isSendingAnnouncement = false;
        const saved: RfqAnnouncementDTO = res?.data;
        if (saved && !this.announcements.find(a => a.id === saved.id)) {
          this.announcements = [...this.announcements, saved];
          this.shouldScrollAnnouncementsToBottom = true;
          this.cdr.detectChanges();
        }
      },
      error: (err: any) => {
        this.isSendingAnnouncement = false;
        alert(err?.error?.message || 'Failed to send broadcast. Please try again.');
      }
    });
  }

  onAnnouncementKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendAnnouncement();
    }
  }

  // =========================================================================
  //  MARK AS READ
  // =========================================================================

  markAsRead(): void {
    this.chatService.markAsRead(this.rfqId, this.userId, this.userType).subscribe({
      next: () => { this.unreadCountChange.emit(0); },
      error: () => {}
    });
  }

  // =========================================================================
  //  MEETING — Video / Audio calls via Jitsi
  // =========================================================================

  /** Called by the 📹 button in the chat header — starts a new meeting */
  startMeeting(): void {
    // Generate a short unique room name (no spaces — Jitsi requirement)
    const ts   = Date.now();
    const room = `SMS-RFQ-${this.rfqId}-${ts}`;
    this.currentMeetingRoom = room;
    this.isMeetingOpen      = true;

    // Send a meeting-invite chat message so the other party sees a "Join" card
    const invite = `MEETING_INVITE::${room}`;
    const req = {
      senderId  : this.userId,
      senderName: this.userName || this.userType,
      senderType: this.userType,
      content   : invite
    };
    this.chatService.sendMessage(this.rfqId, req).subscribe({
      next: (res: any) => {
        const sent: ChatMessageDTO = res?.data;
        if (sent && !this.messages.find(m => m.id === sent.id)) {
          this.messages = [...this.messages, sent];
          this.shouldScrollToBottom = true;
          this.cdr.detectChanges();
        }
      },
      error: () => { /* invite send failed — meeting still opens locally */ }
    });
  }

  /** Called when the other party clicks "Join Meeting" on the invite card */
  joinMeeting(content: string): void {
    const room = this.parseMeetingRoom(content);
    if (!room) return;
    this.currentMeetingRoom = room;
    this.isMeetingOpen      = true;
  }

  closeMeeting(): void {
    this.isMeetingOpen      = false;
    this.currentMeetingRoom = '';
  }

  /** Returns true when the message content is a meeting invite */
  isMeetingInvite(content: string): boolean {
    return typeof content === 'string' && content.startsWith('MEETING_INVITE::');
  }

  /** Extracts the Jitsi room name from invite content */
  parseMeetingRoom(content: string): string {
    return content?.split('::')[1] || '';
  }

  // =========================================================================
  //  HELPERS
  // =========================================================================

  close(): void {
    this.chatClosed.emit();
  }

  isMine(msg: ChatMessageDTO): boolean {
    return msg.senderType === this.userType && msg.senderId === this.userId;
  }

  get isBuyer(): boolean {
    return this.userType === 'BUYER';
  }

  formatTime(sentAt: string): string {
    if (!sentAt) return '';
    try {
      const date = new Date(sentAt);
      const today = new Date();
      const isToday =
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

      if (isToday) {
        return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
      }
      return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) +
             ' ' + date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    } catch { return ''; }
  }

  getOtherPartyName(): string {
    if (!this.chatRoomInfo) return 'Other Party';
    return this.userType === 'BUYER'
      ? (this.chatRoomInfo.supplierName || 'Supplier')
      : (this.chatRoomInfo.buyerName || 'Buyer');
  }

  private scrollToBottom(ref?: ElementRef): void {
    try {
      const el = ref?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    } catch {}
  }
}
