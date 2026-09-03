import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Client, IMessage, IFrame } from '@stomp/stompjs';
import { environment } from '../../environments/environment';

// ── DTOs ─────────────────────────────────────────────────────────────────────

export interface MeetingParticipantInfo {
  userId: number;
  userName: string;
  userType: string;
  email?: string;
}

export interface CreateMeetingRequest {
  title: string;
  description?: string;
  rfqId?: number;
  rfqNumber?: string;
  hostId: number;
  hostName: string;
  hostType: string;
  meetingType: 'SCHEDULED' | 'INSTANT';
  scheduledAt?: string;       // ISO datetime
  durationMinutes?: number;
  agenda?: string;
  participants: MeetingParticipantInfo[];
}

export interface MeetingDTO {
  id: number;
  meetingRoomId: string;
  title: string;
  description?: string;
  rfqId?: number;
  rfqNumber?: string;
  hostId: number;
  hostName: string;
  hostType: string;
  meetingType: string;
  status: string;             // SCHEDULED | ACTIVE | COMPLETED | CANCELLED
  scheduledAt?: string;
  startedAt?: string;
  endedAt?: string;
  durationMinutes: number;
  agenda?: string;
  createdAt?: string;
  participants: any[];
}

export interface MeetingSignalMessage {
  type: string;               // join | leave | offer | answer | ice-candidate | chat | mute | video-off | meeting-ended
  senderId: number;
  senderName: string;
  targetId?: number;
  payload?: string;
  muted?: boolean;
  timestamp?: string;
}

export interface MeetingNotification {
  id: number;
  meetingId: number;
  userId: number;
  notificationType: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

// ── Service ───────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class MeetingService implements OnDestroy {

  private stompClient: Client | null = null;
  private signalSubject   = new Subject<MeetingSignalMessage>();
  private connectionSubject = new BehaviorSubject<boolean>(false);
  private notifSubject    = new Subject<any>();

  signal$       = this.signalSubject.asObservable();
  isConnected$  = this.connectionSubject.asObservable();
  notification$ = this.notifSubject.asObservable();

  private readonly baseUrl = `${environment.API_URL}leadcapture/api/meetings`;
  private readonly wsUrl   = environment.API_URL.replace(/^http/, 'ws') + 'leadcapture/ws-chat';

  constructor(private http: HttpClient) {}

  private headers(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + (localStorage.getItem('token') || ''),
      'Content-Type': 'application/json'
    });
  }

  // ── REST API ───────────────────────────────────────────────────────────────

  createMeeting(req: CreateMeetingRequest): Observable<any> {
    return this.http.post(this.baseUrl, req, { headers: this.headers() });
  }

  getMeetingsForUser(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${userId}`, { headers: this.headers() });
  }

  getUpcomingForUser(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${userId}/upcoming`, { headers: this.headers() });
  }

  getMeetingByRoomId(roomId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/room/${roomId}`, { headers: this.headers() });
  }

  canJoin(roomId: string, userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/room/${roomId}/can-join?userId=${userId}`, { headers: this.headers() });
  }

  startMeeting(roomId: string, hostId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/room/${roomId}/start?hostId=${hostId}`, {}, { headers: this.headers() });
  }

  endMeeting(roomId: string, hostId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/room/${roomId}/end?hostId=${hostId}`, {}, { headers: this.headers() });
  }

  cancelMeeting(meetingId: number, hostId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${meetingId}/cancel?hostId=${hostId}`, {}, { headers: this.headers() });
  }

  getNotifications(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/notifications/${userId}`, { headers: this.headers() });
  }

  markNotificationsRead(userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/notifications/${userId}/mark-read`, {}, { headers: this.headers() });
  }

  getChatHistory(roomId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/room/${roomId}/chat`, { headers: this.headers() });
  }

  getMeetingsForRfq(rfqId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/rfq/${rfqId}`, { headers: this.headers() });
  }

  // ── WebSocket (signaling + meeting notifications) ──────────────────────────

  connectToMeeting(meetingRoomId: string, userId: number): void {
    this.disconnect();

    this.stompClient = new Client({
      brokerURL: this.wsUrl,
      reconnectDelay: 5000,
      onConnect: () => {
        this.connectionSubject.next(true);

        // Subscribe to WebRTC signaling channel for this room
        this.stompClient?.subscribe(`/topic/meeting-signal/${meetingRoomId}`, (msg: IMessage) => {
          try {
            const signal: MeetingSignalMessage = JSON.parse(msg.body);
            this.signalSubject.next(signal);
          } catch (e) { console.error('[MeetingService] signal parse error', e); }
        });
      },
      onDisconnect: () => this.connectionSubject.next(false),
      onStompError: (frame: IFrame) => {
        console.error('[MeetingService] STOMP error', frame);
        this.connectionSubject.next(false);
      },
      onWebSocketClose: () => this.connectionSubject.next(false)
    });

    this.stompClient.activate();
  }

  /** Subscribe to meeting notifications for a specific user (call once at login) */
  subscribeToNotifications(userId: number): void {
    if (!this.stompClient) return;
    this.stompClient.subscribe(`/topic/meeting-notify/${userId}`, (msg: IMessage) => {
      try { this.notifSubject.next(JSON.parse(msg.body)); }
      catch (e) { /* ignore */ }
    });
  }

  sendSignal(meetingRoomId: string, signal: MeetingSignalMessage): void {
    if (this.stompClient?.connected) {
      this.stompClient.publish({
        destination: `/app/meeting-signal/${meetingRoomId}`,
        body: JSON.stringify(signal)
      });
    }
  }

  disconnect(): void {
    if (this.stompClient) {
      this.stompClient.deactivate();
      this.stompClient = null;
      this.connectionSubject.next(false);
    }
  }

  ngOnDestroy(): void {
    this.disconnect();
    this.signalSubject.complete();
    this.connectionSubject.complete();
    this.notifSubject.complete();
  }
}
