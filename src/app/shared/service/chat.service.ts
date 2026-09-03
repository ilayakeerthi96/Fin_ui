import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Client, IMessage, IFrame } from '@stomp/stompjs';

export interface ChatMessageDTO {
  id: number;
  chatRoomId: number;
  rfqId: number;
  senderId: number;
  senderName: string;
  senderType: string; // 'BUYER' | 'SUPPLIER'
  content: string;
  isRead: boolean;
  sentAt: string;
}

export interface ChatRoomInfoDTO {
  chatAvailable: boolean;
  chatRoomId?: number;
  rfqId?: number;
  rfqNumber?: string;
  rfqTitle?: string;
  buyerId?: number;
  buyerName?: string;
  supplierId?: number;
  supplierName?: string;
  message?: string;
  unreadCount?: number;
}

export interface SendMessageRequest {
  senderId: number;
  senderName: string;
  senderType: string;
  content: string;
}

export interface RfqAnnouncementDTO {
  id: number;
  rfqId: number;
  rfqNumber: string;
  rfqTitle: string;
  senderId: number;
  senderName: string;
  content: string;
  sentAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnDestroy {

  private stompClient: Client | null = null;
  private messageSubject   = new Subject<ChatMessageDTO>();
  private announcementSubject = new Subject<RfqAnnouncementDTO>();
  private connectionStatusSubject = new BehaviorSubject<boolean>(false);

  isConnected$    = this.connectionStatusSubject.asObservable();
  messages$       = this.messageSubject.asObservable();
  announcements$  = this.announcementSubject.asObservable();

  constructor(private http: HttpClient) {}

  private headers(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + (localStorage.getItem('token') || ''),
      'Content-Type': 'application/json'
    });
  }

  // private get baseUrl(): string {
  //   return environment.API_URL + 'leadcapture/api/chat';
  // }
  private get baseUrl(): string {
  return `${environment.API_URL}leadcapture/api/chat`;
}

  // =========================================================================
  //  REST API — ONE-ON-ONE CHAT
  // =========================================================================

  getChatRoomInfo(rfqId: number, userId: number, userType: string): Observable<any> {
    const url = `${this.baseUrl}/room/${rfqId}/info?userId=${userId}&userType=${userType}`;
    return this.http.get(url, { headers: this.headers() });
  }

  getMessages(rfqId: number, userId: number, userType: string): Observable<any> {
    const url = `${this.baseUrl}/room/${rfqId}/messages?userId=${userId}&userType=${userType}`;
    return this.http.get(url, { headers: this.headers() });
  }

  sendMessage(rfqId: number, request: SendMessageRequest): Observable<any> {
    const url = `${this.baseUrl}/room/${rfqId}/send`;
    return this.http.post(url, request, { headers: this.headers() });
  }

  markAsRead(rfqId: number, userId: number, userType: string): Observable<any> {
    const url = `${this.baseUrl}/room/${rfqId}/mark-read?userId=${userId}&userType=${userType}`;
    return this.http.post(url, {}, { headers: this.headers() });
  }

  getUnreadCount(rfqId: number, userId: number, userType: string): Observable<any> {
    const url = `${this.baseUrl}/room/${rfqId}/unread-count?userId=${userId}&userType=${userType}`;
    return this.http.get(url, { headers: this.headers() });
  }

  // =========================================================================
  //  REST API — BROADCAST / MASS COMMUNICATION (Buyer → All Suppliers)
  // =========================================================================

  sendBroadcast(rfqId: number, senderId: number, senderName: string, content: string): Observable<any> {
    const url = `${this.baseUrl}/rfq/${rfqId}/broadcast`;
   // const url = `http://localhost:9092/leadcapture/api/chat/rfq/${rfqId}/broadcast`;
    return this.http.post(url, { senderId, senderName, content }, { headers: this.headers() });
  }

  getBroadcasts(rfqId: number): Observable<any> {
    const url = `${this.baseUrl}/rfq/${rfqId}/broadcasts`;
    return this.http.get(url, { headers: this.headers() });
  }

  // =========================================================================
  //  WEBSOCKET / STOMP
  // =========================================================================

  connectToRfqChat(rfqId: number): Observable<ChatMessageDTO> {
    this.disconnectWebSocket();

    // Hardcoded to 9092 (same as REST API)
    const wsUrl = environment.API_URL.replace(/^http/, 'ws') + 'leadcapture/ws-chat';

    this.stompClient = new Client({
      brokerURL: wsUrl,
      reconnectDelay: 5000,
      onConnect: () => {
        this.connectionStatusSubject.next(true);

        // Subscribe to private chat messages for this RFQ
        this.stompClient?.subscribe(`/topic/rfq-chat/${rfqId}`, (message: IMessage) => {
          try {
            const msg: ChatMessageDTO = JSON.parse(message.body);
            this.messageSubject.next(msg);
          } catch (e) {
            console.error('[ChatService] Failed to parse chat message', e);
          }
        });

        // Subscribe to broadcast announcements for this RFQ
        this.stompClient?.subscribe(`/topic/rfq-announcements/${rfqId}`, (message: IMessage) => {
          try {
            const ann: RfqAnnouncementDTO = JSON.parse(message.body);
            this.announcementSubject.next(ann);
          } catch (e) {
            console.error('[ChatService] Failed to parse announcement', e);
          }
        });
      },
      onDisconnect: () => {
        this.connectionStatusSubject.next(false);
      },
      onStompError: (frame: IFrame) => {
        console.error('[ChatService] STOMP error', frame);
        this.connectionStatusSubject.next(false);
      },
      onWebSocketClose: () => {
        this.connectionStatusSubject.next(false);
      }
    });

    this.stompClient.activate();
    return this.messageSubject.asObservable();
  }

  disconnectWebSocket(): void {
    if (this.stompClient) {
      this.stompClient.deactivate();
      this.stompClient = null;
      this.connectionStatusSubject.next(false);
    }
  }

  ngOnDestroy(): void {
    this.disconnectWebSocket();
    this.messageSubject.complete();
    this.announcementSubject.complete();
    this.connectionStatusSubject.complete();
  }
}
