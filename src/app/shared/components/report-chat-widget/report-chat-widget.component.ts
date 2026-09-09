import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataService } from '../../service/DataService';
import { ReportChatService, ChatReply } from '../../service/ReportChatService';

interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
  highlight?: string;
  rows?: { label: string; value: string }[];
}

/**
 * Report Assistant — floating widget, available on every page rather than embedded in one
 * screen. Lives in DefaultLayoutComponent's template (outside <router-outlet>) so it survives
 * route navigation instead of resetting every time the page changes, and never renders on
 * the login screen, which sits outside the layout shell entirely.
 *
 * Same rule-based engine as before (see ReportChatService) — this component is just the
 * shell: the floating button, the open/minimise state, and fetching the PO data the engine
 * answers from. No AI API, no cost per question, every figure is a real calculation over
 * real rows.
 */
@Component({
  selector: 'app-report-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './report-chat-widget.component.html',
  styleUrls: ['./report-chat-widget.component.css']
})
export class ReportChatWidgetComponent implements OnInit, AfterViewChecked {

  @ViewChild('chatScroll') private chatScrollRef?: ElementRef<HTMLDivElement>;

  /** Only Admin and Procurement have any PO/report data worth asking about — a supplier
   *  login has no use for this, so the widget stays hidden rather than answering "0" to
   *  everything they ask. */
  visibleForRole = false;

  isOpen = false;
  isLoadingData = false;
  allPOs: any[] = [];
  allInvoices: any[] = [];

  chatMessages: ChatMessage[] = [];
  chatInput = '';

  constructor(
    private dataService: DataService,
    private reportChat: ReportChatService
  ) {}

  ngOnInit(): void {
    const role = localStorage.getItem('role') || '';
    this.visibleForRole = role === 'ORGANIZATION_ADMIN' || role === 'PROCUREMENT_OPERATOR';

    this.chatMessages.push({
      role: 'bot',
      text: "Ask me about spend, payments, PO or invoice counts, or a specific supplier, PO or invoice number — I'll answer from your real data. Try one of these:",
      rows: this.reportChat.examplePrompts.map(p => ({ label: '', value: p }))
    });
  }

  ngAfterViewChecked(): void {
    if (this.chatScrollRef) {
      const el = this.chatScrollRef.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
    // Fetch fresh every time it's opened rather than once on app load — this widget can sit
    // open in the background for an entire session, and PO/invoice data changes constantly
    // (new POs, invoices, payments, closures) while the user works elsewhere in the app.
    if (this.isOpen) this.loadData();
  }

  private loadData(): void {
    this.isLoadingData = true;
    const companyName = localStorage.getItem('companyName') || '';

    forkJoin({
      pos: this.dataService.getAllPurchaseOrders().pipe(catchError(() => of([]))),
      // Same endpoint Payment Tracking / Invoice Management already use — scoped to the
      // whole company rather than one buyer account, since Admin/Procurement have no
      // buyerId of their own (see buyer-invoices.component.ts for the same fallback).
      invoices: companyName
        ? this.dataService.getBuyerInvoices(companyName).pipe(catchError(() => of([])))
        : of([])
    }).subscribe(({ pos, invoices }) => {
      this.allPOs = this.unwrapList(pos);
      this.allInvoices = this.unwrapList(invoices);
      this.isLoadingData = false;
    });
  }

  askExample(prompt: string): void {
    this.chatInput = prompt;
    this.sendMessage();
  }

  sendMessage(): void {
    const question = this.chatInput.trim();
    if (!question) return;

    this.chatMessages.push({ role: 'user', text: question });
    this.chatInput = '';

    const reply: ChatReply = this.reportChat.ask(question, this.allPOs, this.allInvoices);
    this.chatMessages.push({ role: 'bot', ...reply });
  }

  private unwrapList(res: any): any[] {
    if (Array.isArray(res)) return res;
    if (Array.isArray(res?.data)) return res.data;
    if (Array.isArray(res?.data?.content)) return res.data.content;
    return [];
  }
}
