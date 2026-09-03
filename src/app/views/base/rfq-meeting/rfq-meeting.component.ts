import {
  Component, Input, Output, EventEmitter,
  OnDestroy, AfterViewInit, ViewChild, ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

/* Jitsi Meet External API loaded dynamically from meet.jit.si */
declare const JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-rfq-meeting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rfq-meeting.component.html',
  styleUrls: ['./rfq-meeting.component.css']
})
export class RfqMeetingComponent implements AfterViewInit, OnDestroy {

  /** Unique Jitsi room name, e.g. SMS-RFQ-21-1748500000 */
  @Input() roomName!: string;
  /** Display name shown inside the call */
  @Input() displayName: string = 'User';
  /** RFQ number shown in the meeting header */
  @Input() rfqNumber: string = '';
  /** Emitted when the user hangs up or closes the modal */
  @Output() meetingClosed = new EventEmitter<void>();

  @ViewChild('jitsiContainer') jitsiContainer!: ElementRef;

  isLoading  = true;
  loadError  = false;
  private api: any = null;

  ngAfterViewInit(): void {
    if (typeof JitsiMeetExternalAPI !== 'undefined') {
      this.initApi();
    } else {
      const script = document.createElement('script');
      script.src   = 'https://meet.jit.si/external_api.js';
      script.async  = true;
      script.onload = () => this.initApi();
      script.onerror = () => { this.loadError = true; this.isLoading = false; };
      document.head.appendChild(script);
    }
  }

  private initApi(): void {
    try {
      this.api = new JitsiMeetExternalAPI('meet.jit.si', {
        roomName : this.roomName,
        width    : '100%',
        height   : '100%',
        parentNode: this.jitsiContainer.nativeElement,
        userInfo : { displayName: this.displayName },
        configOverwrite: {
          startWithAudioMuted    : false,
          startWithVideoMuted    : false,
          disableDeepLinking     : true,
          enableNoisyMicDetection: true,
          prejoinPageEnabled     : false,
        },
        interfaceConfigOverwrite: {
          TOOLBAR_BUTTONS: [
            'microphone', 'camera', 'desktop', 'fullscreen',
            'hangup', 'settings', 'videoquality', 'tileview', 'chat'
          ],
          SHOW_JITSI_WATERMARK        : false,
          SHOW_WATERMARK_FOR_GUESTS   : false,
          GENERATE_ROOMNAMES_ON_WELCOME_PAGE: false,
          MOBILE_APP_PROMO            : false,
        }
      });

      this.api.addEventListener('videoConferenceJoined', () => {
        this.isLoading = false;
      });
      this.api.addEventListener('readyToClose', () => this.close());
    } catch {
      this.loadError  = true;
      this.isLoading  = false;
    }
  }

  close(): void {
    if (this.api) { try { this.api.dispose(); } catch { /* ignore */ } this.api = null; }
    this.meetingClosed.emit();
  }

  ngOnDestroy(): void {
    if (this.api) { try { this.api.dispose(); } catch { /* ignore */ } this.api = null; }
  }

  get meetingLink(): string {
    return `https://meet.jit.si/${this.roomName}`;
  }
}
