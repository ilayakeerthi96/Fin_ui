import {
  Component, OnInit, OnDestroy, ViewChild, ElementRef,
  Input, Output, EventEmitter, ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MeetingService, MeetingDTO, MeetingSignalMessage } from '../../../shared/service/meeting.service';

interface Peer {
  userId   : number;
  userName : string;
  pc       : RTCPeerConnection;
  stream?  : MediaStream;
  videoEl? : HTMLVideoElement;
  muted    : boolean;
  videoOff : boolean;
}

const ICE_SERVERS: RTCIceServer[] = [
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' }
];

@Component({
  selector: 'app-meeting-room',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meeting-room.component.html',
  styleUrls: ['./meeting-room.component.css']
})
export class MeetingRoomComponent implements OnInit, OnDestroy {

  @Input() meetingRoomId!: string;
  @Input() userId!:        number;
  @Input() userName!:      string;
  @Input() userType!:      string;
  @Output() meetingLeft = new EventEmitter<void>();

  @ViewChild('localVideo')         localVideoRef!:  ElementRef<HTMLVideoElement>;
  @ViewChild('remoteVideosWrap')   remoteWrapRef!:  ElementRef<HTMLDivElement>;
  @ViewChild('chatMessagesWrap')   chatWrapRef!:    ElementRef<HTMLDivElement>;

  // Meeting info
  meeting: MeetingDTO | null = null;
  isHost   = false;
  isLoading = true;
  error     = '';

  // Media
  localStream:      MediaStream | null = null;
  isMuted           = false;
  isVideoOff        = false;
  isScreenSharing   = false;
  private screenStream: MediaStream | null = null;

  // Peers (one per remote participant)
  peers: Map<number, Peer> = new Map();

  // UI
  activeTab: 'participants' | 'chat' = 'participants';
  isChatOpen  = true;
  participants: { userId: number; userName: string; muted: boolean; videoOff: boolean; isYou: boolean }[] = [];

  // In-meeting chat
  chatMessages: { senderId: number; senderName: string; content: string; sentAt: string }[] = [];
  newChatMessage = '';
  unreadChat     = 0;

  // Timer
  elapsedSeconds = 0;
  private timerRef: any = null;

  private signalSub?: Subscription;
  private connSub?:   Subscription;

  constructor(
    private meetingService: MeetingService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadMeetingAndJoin();
  }

  // ── Setup ──────────────────────────────────────────────────────────────────

  private async loadMeetingAndJoin(): Promise<void> {
    // 1. Validate access
    this.meetingService.canJoin(this.meetingRoomId, this.userId).subscribe({
      next: async (res: any) => {
        if (!res.canJoin) { this.error = 'Access denied. You are not invited to this meeting.'; this.isLoading = false; return; }
        this.meetingService.getMeetingByRoomId(this.meetingRoomId).subscribe({
          next: async (r: any) => {
            this.meeting = r.data || r;
            this.isHost  = this.meeting!.hostId === this.userId;
            await this.initMedia();
            this.connectSignaling();
            this.loadChatHistory();
            this.startTimer();
            this.isLoading = false;
            this.cdr.detectChanges();
          },
          error: () => { this.error = 'Failed to load meeting details.'; this.isLoading = false; }
        });
      },
      error: () => { this.error = 'Could not verify meeting access.'; this.isLoading = false; }
    });
  }

  private async initMedia(): Promise<void> {
    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setTimeout(() => {
        if (this.localVideoRef?.nativeElement) {
          this.localVideoRef.nativeElement.srcObject = this.localStream;
        }
      }, 100);
    } catch {
      // Try audio-only fallback
      try {
        this.localStream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true });
        this.isVideoOff = true;
      } catch { this.localStream = null; }
    }
  }

  private connectSignaling(): void {
    this.meetingService.connectToMeeting(this.meetingRoomId, this.userId);

    this.connSub = this.meetingService.isConnected$.subscribe(connected => {
      if (connected) {
        // Announce presence to existing peers
        this.sendSignal({ type: 'join', senderId: this.userId, senderName: this.userName });
        this.updateParticipantList();
      }
    });

    this.signalSub = this.meetingService.signal$.subscribe(async (sig: MeetingSignalMessage) => {
      if (sig.senderId === this.userId) return;  // ignore own signals

      switch (sig.type) {
        case 'join':          await this.handlePeerJoined(sig);    break;
        case 'leave':               this.handlePeerLeft(sig);      break;
        case 'offer':         await this.handleOffer(sig);         break;
        case 'answer':        await this.handleAnswer(sig);        break;
        case 'ice-candidate': await this.handleIce(sig);           break;
        case 'chat':                this.handleChatMessage(sig);   break;
        case 'mute':                this.handleMuteStatus(sig);    break;
        case 'video-off':           this.handleVideoStatus(sig);   break;
        case 'meeting-ended':       this.onMeetingEnded();         break;
      }
      this.cdr.detectChanges();
    });
  }

  // ── WebRTC peer management ─────────────────────────────────────────────────

  private createPeerConnection(peerId: number): RTCPeerConnection {
    const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS });

    // Send local tracks to remote peer
    if (this.localStream) {
      this.localStream.getTracks().forEach(t => pc.addTrack(t, this.localStream!));
    }

    // Handle incoming tracks (remote video/audio)
    pc.ontrack = (event) => {
      const peer = this.peers.get(peerId);
      if (peer) {
        peer.stream = event.streams[0];
        this.attachRemoteStream(peerId, event.streams[0]);
        this.cdr.detectChanges();
      }
    };

    // ICE candidate ready — send to remote peer
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        this.sendSignal({
          type: 'ice-candidate',
          senderId: this.userId,
          senderName: this.userName,
          targetId: peerId,
          payload: JSON.stringify(event.candidate)
        });
      }
    };

    pc.onconnectionstatechange = () => this.cdr.detectChanges();
    return pc;
  }

  private async handlePeerJoined(sig: MeetingSignalMessage): Promise<void> {
    if (this.peers.has(sig.senderId)) return;
    const pc = this.createPeerConnection(sig.senderId);
    this.peers.set(sig.senderId, { userId: sig.senderId, userName: sig.senderName, pc, muted: false, videoOff: false });
    this.updateParticipantList();

    // Initiator creates the offer
    const offer = await pc.createOffer({ offerToReceiveAudio: true, offerToReceiveVideo: true });
    await pc.setLocalDescription(offer);
    this.sendSignal({
      type: 'offer',
      senderId: this.userId,
      senderName: this.userName,
      targetId: sig.senderId,
      payload: JSON.stringify(offer)
    });
  }

  private handlePeerLeft(sig: MeetingSignalMessage): void {
    const peer = this.peers.get(sig.senderId);
    if (peer) {
      peer.pc.close();
      peer.videoEl?.remove();
    }
    this.peers.delete(sig.senderId);
    this.updateParticipantList();
  }

  private async handleOffer(sig: MeetingSignalMessage): Promise<void> {
    if (sig.targetId && sig.targetId !== this.userId) return;
    let peer = this.peers.get(sig.senderId);
    if (!peer) {
      const pc = this.createPeerConnection(sig.senderId);
      peer = { userId: sig.senderId, userName: sig.senderName, pc, muted: false, videoOff: false };
      this.peers.set(sig.senderId, peer);
      this.updateParticipantList();
    }
    await peer.pc.setRemoteDescription(new RTCSessionDescription(JSON.parse(sig.payload!)));
    const answer = await peer.pc.createAnswer();
    await peer.pc.setLocalDescription(answer);
    this.sendSignal({
      type: 'answer',
      senderId: this.userId,
      senderName: this.userName,
      targetId: sig.senderId,
      payload: JSON.stringify(answer)
    });
  }

  private async handleAnswer(sig: MeetingSignalMessage): Promise<void> {
    if (sig.targetId && sig.targetId !== this.userId) return;
    const peer = this.peers.get(sig.senderId);
    if (peer && peer.pc.signalingState !== 'stable') {
      await peer.pc.setRemoteDescription(new RTCSessionDescription(JSON.parse(sig.payload!)));
    }
  }

  private async handleIce(sig: MeetingSignalMessage): Promise<void> {
    if (sig.targetId && sig.targetId !== this.userId) return;
    const peer = this.peers.get(sig.senderId);
    if (peer && sig.payload) {
      try { await peer.pc.addIceCandidate(new RTCIceCandidate(JSON.parse(sig.payload))); }
      catch { /* ignore stale candidates */ }
    }
  }

  private handleChatMessage(sig: MeetingSignalMessage): void {
    this.chatMessages.push({
      senderId: sig.senderId,
      senderName: sig.senderName,
      content: sig.payload || '',
      sentAt: sig.timestamp || new Date().toISOString()
    });
    if (this.activeTab !== 'chat') this.unreadChat++;
    setTimeout(() => this.scrollChat(), 50);
  }

  private handleMuteStatus(sig: MeetingSignalMessage): void {
    const peer = this.peers.get(sig.senderId);
    if (peer) peer.muted = sig.muted ?? false;
    this.updateParticipantList();
  }

  private handleVideoStatus(sig: MeetingSignalMessage): void {
    const peer = this.peers.get(sig.senderId);
    if (peer) peer.videoOff = sig.muted ?? false;
    this.updateParticipantList();
  }

  private onMeetingEnded(): void {
    alert('The host has ended the meeting.');
    this.leave();
  }

  private attachRemoteStream(peerId: number, stream: MediaStream): void {
    const wrap = this.remoteWrapRef?.nativeElement;
    if (!wrap) return;
    let vid = wrap.querySelector(`#remote-video-${peerId}`) as HTMLVideoElement;
    if (!vid) {
      const container = document.createElement('div');
      container.className = 'remote-video-container';
      container.id = `remote-container-${peerId}`;
      vid = document.createElement('video');
      vid.id        = `remote-video-${peerId}`;
      vid.autoplay  = true;
      vid.playsInline = true;
      vid.className = 'remote-video';
      const label = document.createElement('div');
      label.className = 'video-label';
      label.textContent = this.peers.get(peerId)?.userName || 'Participant';
      container.appendChild(vid);
      container.appendChild(label);
      wrap.appendChild(container);
    }
    vid.srcObject = stream;
    const peer = this.peers.get(peerId);
    if (peer) peer.videoEl = vid;
  }

  // ── Media controls ─────────────────────────────────────────────────────────

  toggleMute(): void {
    if (!this.localStream) return;
    this.isMuted = !this.isMuted;
    this.localStream.getAudioTracks().forEach(t => t.enabled = !this.isMuted);
    this.sendSignal({ type: 'mute', senderId: this.userId, senderName: this.userName, muted: this.isMuted });
  }

  toggleVideo(): void {
    if (!this.localStream) return;
    this.isVideoOff = !this.isVideoOff;
    this.localStream.getVideoTracks().forEach(t => t.enabled = !this.isVideoOff);
    this.sendSignal({ type: 'video-off', senderId: this.userId, senderName: this.userName, muted: this.isVideoOff });
  }

  async toggleScreenShare(): Promise<void> {
    if (this.isScreenSharing) {
      this.stopScreenShare();
    } else {
      try {
        this.screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        const screenTrack = this.screenStream.getVideoTracks()[0];
        // Replace video track in all peer connections
        this.peers.forEach(peer => {
          const sender = peer.pc.getSenders().find(s => s.track?.kind === 'video');
          if (sender) sender.replaceTrack(screenTrack);
        });
        // Show screen in local video
        if (this.localVideoRef?.nativeElement) {
          this.localVideoRef.nativeElement.srcObject = this.screenStream;
        }
        this.isScreenSharing = true;
        screenTrack.onended = () => this.stopScreenShare();
      } catch { /* user cancelled */ }
    }
  }

  private stopScreenShare(): void {
    this.screenStream?.getTracks().forEach(t => t.stop());
    this.screenStream = null;
    this.isScreenSharing = false;
    // Restore camera track
    const camTrack = this.localStream?.getVideoTracks()[0];
    if (camTrack) {
      this.peers.forEach(peer => {
        const sender = peer.pc.getSenders().find(s => s.track?.kind === 'video');
        if (sender) sender.replaceTrack(camTrack);
      });
    }
    if (this.localVideoRef?.nativeElement) {
      this.localVideoRef.nativeElement.srcObject = this.localStream;
    }
  }

  // ── Chat ───────────────────────────────────────────────────────────────────

  sendChatMessage(): void {
    const content = this.newChatMessage.trim();
    if (!content) return;
    const msg = { senderId: this.userId, senderName: this.userName, content, sentAt: new Date().toISOString() };
    this.chatMessages.push(msg);
    this.sendSignal({ type: 'chat', senderId: this.userId, senderName: this.userName, payload: content });
    this.newChatMessage = '';
    setTimeout(() => this.scrollChat(), 50);
  }

  onChatKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.sendChatMessage(); }
  }

  setTab(tab: 'participants' | 'chat'): void {
    this.activeTab = tab;
    if (tab === 'chat') { this.unreadChat = 0; setTimeout(() => this.scrollChat(), 50); }
  }

  private scrollChat(): void {
    try {
      const el = this.chatWrapRef?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    } catch { /* ignore */ }
  }

  private loadChatHistory(): void {
    this.meetingService.getChatHistory(this.meetingRoomId).subscribe({
      next: (res: any) => {
        this.chatMessages = (res.data || []).map((m: any) => ({
          senderId: m.senderId, senderName: m.senderName, content: m.content,
          sentAt: m.sentAt
        }));
        this.cdr.detectChanges();
        setTimeout(() => this.scrollChat(), 100);
      },
      error: () => {}
    });
  }

  // ── Host controls ──────────────────────────────────────────────────────────

  endMeetingForAll(): void {
    if (!confirm('End the meeting for all participants?')) return;
    this.meetingService.endMeeting(this.meetingRoomId, this.userId).subscribe({
      next: () => this.cleanupAndLeave(),
      error: () => alert('Failed to end meeting.')
    });
  }

  // ── Leave ──────────────────────────────────────────────────────────────────

  leave(): void {
    this.sendSignal({ type: 'leave', senderId: this.userId, senderName: this.userName });
    this.meetingService.canJoin(this.meetingRoomId, this.userId).subscribe(); // record leave via /leave endpoint
    this.cleanupAndLeave();
  }

  private cleanupAndLeave(): void {
    this.stopTimer();
    this.peers.forEach(p => p.pc.close());
    this.peers.clear();
    this.localStream?.getTracks().forEach(t => t.stop());
    this.screenStream?.getTracks().forEach(t => t.stop());
    this.meetingService.disconnect();
    this.meetingLeft.emit();
  }

  // ── Timer ──────────────────────────────────────────────────────────────────

  private startTimer(): void {
    this.timerRef = setInterval(() => { this.elapsedSeconds++; this.cdr.detectChanges(); }, 1000);
  }

  private stopTimer(): void {
    if (this.timerRef) { clearInterval(this.timerRef); this.timerRef = null; }
  }

  get timerDisplay(): string {
    const h = Math.floor(this.elapsedSeconds / 3600);
    const m = Math.floor((this.elapsedSeconds % 3600) / 60);
    const s = this.elapsedSeconds % 60;
    return h > 0
      ? `${this.pad(h)}:${this.pad(m)}:${this.pad(s)}`
      : `${this.pad(m)}:${this.pad(s)}`;
  }

  private pad(n: number): string { return n.toString().padStart(2, '0'); }

  // ── Helpers ────────────────────────────────────────────────────────────────

  private sendSignal(partial: Partial<MeetingSignalMessage>): void {
    this.meetingService.sendSignal(this.meetingRoomId, partial as MeetingSignalMessage);
  }

  private updateParticipantList(): void {
    this.participants = [
      { userId: this.userId, userName: this.userName + ' (You)', muted: this.isMuted, videoOff: this.isVideoOff, isYou: true },
      ...Array.from(this.peers.values()).map(p => ({
        userId: p.userId, userName: p.userName, muted: p.muted, videoOff: p.videoOff, isYou: false
      }))
    ];
  }

  get peerList(): Peer[] { return Array.from(this.peers.values()); }

  isMe(id: number): boolean { return id === this.userId; }

  formatTime(iso: string): string {
    try { return new Date(iso).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }); }
    catch { return ''; }
  }

  ngOnDestroy(): void {
    this.signalSub?.unsubscribe();
    this.connSub?.unsubscribe();
    this.stopTimer();
    this.localStream?.getTracks().forEach(t => t.stop());
    this.screenStream?.getTracks().forEach(t => t.stop());
    this.meetingService.disconnect();
  }
}
