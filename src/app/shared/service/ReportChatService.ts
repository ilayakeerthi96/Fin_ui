import { Injectable } from '@angular/core';

export interface ChatReply {
  text: string;
  highlight?: string;
  rows?: { label: string; value: string }[];
}

export interface ChatData {
  pos: any[];
  invoices: any[];
}

interface DateRange { from: Date; to: Date; label: string; }

/**
 * Report Assistant — a typed-question interface onto the same PO and invoice data the rest
 * of the app already shows (PO list, Invoice Management, Payment Tracking, Reports).
 *
 * This is deliberately NOT an LLM integration. An AI API costs money per question (tokens,
 * a subscription) and — worse, for financial figures — can quietly make a number up. This
 * engine instead pattern-matches the question against a fixed catalog of report intents
 * (spend, invoices, payment status, supplier totals, PO/invoice lookups, ...) and, on a
 * match, computes the answer by direct calculation over the real PurchaseOrder and Invoice
 * arrays already loaded in memory. No network call, no API key, no cost per question, and
 * every figure it states is a real sum over real rows — never a guess. A question outside
 * the catalog gets an honest "I don't have a way to answer that yet" plus the list of things
 * it can answer, rather than a plausible-sounding but wrong number.
 *
 * Pure and stateless on purpose: give it the current PO/invoice data and a question, get a
 * reply back. No dependency on the page it's used from.
 */
@Injectable({ providedIn: 'root' })
export class ReportChatService {

  readonly examplePrompts = [
    'What is our total spend?',
    'How much is outstanding?',
    'How many POs are in draft?',
    'How many invoices are paid?',
    'Pending invoice count',
    'Spend on Alpha Technologies',
    'Top supplier',
    'Status of ITTI/PO/26/003',
    'Spend this month'
  ];

  ask(rawQuery: string, allPOs: any[], allInvoices: any[] = []): ChatReply {
    const q = (rawQuery || '').trim().toLowerCase();
    if (!q) return this.help();
    const data: ChatData = {
      pos: Array.isArray(allPOs) ? allPOs : [],
      invoices: Array.isArray(allInvoices) ? allInvoices : []
    };

    for (const handler of this.handlers) {
      if (handler.test(q)) {
        const reply = handler.run(q, data);
        if (reply) return reply;
      }
    }
    return this.fallback();
  }

  // ==========================================================================
  // SHARED HELPERS
  // ==========================================================================

  /** Same definition the Reports page's KPI tiles use — a cancelled/rejected/draft PO was
   *  never real spend. Keeping this identical to spend-analysis.component.ts means a chat
   *  answer and the page's own tiles can never quote different numbers for the same thing. */
  private committed(pos: any[]): any[] {
    return pos.filter(po => !['CANCELLED', 'REJECTED', 'DRAFT'].includes(po.status));
  }

  private sum(rows: any[], field: string): number {
    return rows.reduce((s, r) => s + (Number(r[field]) || 0), 0);
  }

  private currency(v: number): string {
    return '₹' + (Number(v) || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  private poDate(po: any): Date {
    return new Date(po.createdDate || po.createdAt || po.poDate || 0);
  }

  private invoiceDate(inv: any): Date {
    return new Date(inv.createdAt || inv.invoiceDate || 0);
  }

  private help(): ChatReply {
    return {
      text: 'Ask me about spend, payments, PO or invoice counts, or a specific supplier, PO or invoice number. For example:',
      rows: this.examplePrompts.map(p => ({ label: '', value: p }))
    };
  }

  private fallback(): ChatReply {
    return {
      text: "I don't have a way to answer that yet — I only answer from real PO and invoice "
          + 'data, so I won\'t guess. Try one of these instead:',
      rows: this.examplePrompts.map(p => ({ label: '', value: p }))
    };
  }

  // ==========================================================================
  // DATE RANGE PARSING — "this month", "last month", "this year", a month name,
  // or nothing at all (meaning: every record on file).
  // ==========================================================================

  private parseDateRange(q: string): DateRange | null {
    const now = new Date();
    const startOfMonth = (y: number, m: number) => new Date(y, m, 1, 0, 0, 0, 0);
    const endOfMonth   = (y: number, m: number) => new Date(y, m + 1, 0, 23, 59, 59, 999);

    if (/\btoday\b/.test(q)) {
      const from = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
      const to   = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
      return { from, to, label: 'today' };
    }
    if (/\bthis week\b/.test(q)) {
      const from = new Date(now); from.setDate(now.getDate() - now.getDay()); from.setHours(0, 0, 0, 0);
      const to = new Date(from); to.setDate(from.getDate() + 6); to.setHours(23, 59, 59, 999);
      return { from, to, label: 'this week' };
    }
    if (/\blast month\b/.test(q)) {
      const m = now.getMonth() - 1;
      const y = m < 0 ? now.getFullYear() - 1 : now.getFullYear();
      const mm = (m + 12) % 12;
      return { from: startOfMonth(y, mm), to: endOfMonth(y, mm), label: 'last month' };
    }
    if (/\bthis month\b/.test(q)) {
      return { from: startOfMonth(now.getFullYear(), now.getMonth()), to: endOfMonth(now.getFullYear(), now.getMonth()), label: 'this month' };
    }
    if (/\bthis year\b/.test(q)) {
      return { from: new Date(now.getFullYear(), 0, 1), to: new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999), label: 'this year' };
    }
    const months = ['january', 'february', 'march', 'april', 'may', 'june',
                     'july', 'august', 'september', 'october', 'november', 'december'];
    for (let i = 0; i < months.length; i++) {
      if (q.includes(months[i]) || new RegExp(`\\b${months[i].slice(0, 3)}\\b`).test(q)) {
        const yearMatch = q.match(/\b(20\d{2})\b/);
        const y = yearMatch ? Number(yearMatch[1]) : now.getFullYear();
        return { from: startOfMonth(y, i), to: endOfMonth(y, i), label: `${months[i]} ${y}` };
      }
    }
    return null;
  }

  private filterPOsByDate(pos: any[], range: DateRange | null): any[] {
    if (!range) return pos;
    return pos.filter(po => { const d = this.poDate(po); return d >= range.from && d <= range.to; });
  }

  private filterInvoicesByDate(invoices: any[], range: DateRange | null): any[] {
    if (!range) return invoices;
    return invoices.filter(inv => { const d = this.invoiceDate(inv); return d >= range.from && d <= range.to; });
  }

  // ==========================================================================
  // INTENT CATALOG — checked in order, most specific first. Keyword-based
  // (not strict sentence patterns) so ordinary phrasing variance still matches.
  // Handlers that mention "invoice" explicitly are checked before the generic
  // PO ones, so "how many invoices are approved" never gets misread as a
  // question about PO status — the two have completely different vocabularies
  // (an invoice can be PAID; a PO cannot).
  // ==========================================================================

  private readonly poStatusWords: Record<string, string> = {
    draft: 'DRAFT', released: 'RELEASED', approved: 'APPROVED',
    closed: 'CLOSED', foreclosed: 'FORECLOSED', rejected: 'REJECTED',
    cancelled: 'CANCELLED', canceled: 'CANCELLED',
    'pending approval': 'PENDING_APPROVAL', 'in progress': 'IN_PROGRESS',
    delivered: 'DELIVERED', completed: 'COMPLETED'
  };

  /** Invoice status vocabulary is deliberately separate from PO status — "approved" and
   *  "rejected" mean different things for each, and only an invoice can be PAID or
   *  "pending" (awaiting buyer review, i.e. SUBMITTED). */
  private readonly invoiceStatusWords: Record<string, string> = {
    draft: 'DRAFT', submitted: 'SUBMITTED', pending: 'SUBMITTED',
    approved: 'APPROVED', paid: 'PAID', settled: 'PAID',
    rejected: 'REJECTED', 'closed permanently': 'REJECTED_CLOSED', 'permanently closed': 'REJECTED_CLOSED'
  };

  private readonly handlers: { test: (q: string) => boolean; run: (q: string, data: ChatData) => ChatReply | null }[] = [

    // ── greeting / explicit help ──────────────────────────────────────────
    {
      test: q => /^(hi|hello|hey|help|what can you|examples?)\b/.test(q),
      run: () => this.help()
    },

    // ── specific invoice lookup — "status of invoice INV-...", "show invoice ..." ─
    {
      test: q => q.includes('invoice') && (/\binv[-\s]?\d/.test(q) || /\bstatus\b/.test(q) || /\bshow\b/.test(q)),
      run: (q, { invoices }) => {
        const numMatch = q.match(/(inv[-\s]?\d[\w-]*)/i);
        if (!numMatch) return null;
        const needle = numMatch[1].replace(/[^0-9a-z]/gi, '').toLowerCase();
        const found = invoices.find(inv => (inv.invoiceNumber || '').replace(/[^0-9a-z]/gi, '').toLowerCase().includes(needle));
        if (!found) return { text: `I couldn't find an invoice matching "${numMatch[1]}".` };
        return {
          text: `${found.invoiceNumber} — ${found.supplierName || found.supplierCompanyName || 'Unknown supplier'}`,
          rows: [
            { label: 'Status', value: found.status },
            { label: 'PO', value: found.poNumber || '—' },
            { label: 'Amount', value: this.currency(found.totalAmount ?? found.grandTotal) },
            { label: 'Due', value: found.dueDate ? new Date(found.dueDate).toLocaleDateString('en-GB') : '—' },
            { label: 'Paid on', value: found.paidAt ? new Date(found.paidAt).toLocaleDateString('en-GB') : 'Not yet' }
          ]
        };
      }
    },

    // ── invoice count by status — "how many invoices are paid", "pending invoice count" ─
    {
      test: q => q.includes('invoice') && (/\bhow many\b|\bcount\b|\bnumber of\b/.test(q)) && Object.keys(this.invoiceStatusWords).some(w => q.includes(w)),
      run: (q, { invoices }) => {
        const word = Object.keys(this.invoiceStatusWords).sort((a, b) => b.length - a.length).find(w => q.includes(w))!;
        const status = this.invoiceStatusWords[word];
        const rows = invoices.filter(inv => inv.status === status);
        const value = this.sum(rows, 'totalAmount');
        return {
          text: `${rows.length} invoice${rows.length === 1 ? ' is' : 's are'} currently ${status}${rows.length ? ', worth ' + this.currency(value) : ''}.`,
          highlight: String(rows.length)
        };
      }
    },

    // ── overdue invoices ─────────────────────────────────────────────────────
    {
      test: q => q.includes('invoice') && /\boverdue\b|\blate\b/.test(q),
      run: (q, { invoices }) => {
        const today = new Date(); today.setHours(0, 0, 0, 0);
        const rows = invoices.filter(inv => inv.status === 'APPROVED' && inv.dueDate && new Date(inv.dueDate) < today);
        return {
          text: `${rows.length} approved invoice${rows.length === 1 ? ' is' : 's are'} past due date, unpaid${rows.length ? ':' : '.'}`,
          highlight: rows.length ? this.currency(this.sum(rows, 'totalAmount')) : '0',
          rows: rows.slice(0, 5).map(inv => ({ label: inv.invoiceNumber, value: this.currency(inv.totalAmount) }))
        };
      }
    },

    // ── total invoiced amount ────────────────────────────────────────────────
    {
      test: q => q.includes('invoice') && (/\btotal invoiced\b|\bhow much.*invoiced\b|\binvoiced amount\b/.test(q)),
      run: (q, { invoices }) => {
        const range = this.parseDateRange(q);
        const scoped = this.filterInvoicesByDate(invoices.filter(i => i.status !== 'REJECTED_CLOSED'), range);
        return {
          text: `Total invoiced by suppliers${range ? ' ' + range.label : ''} (${scoped.length} invoice${scoped.length === 1 ? '' : 's'}):`,
          highlight: this.currency(this.sum(scoped, 'totalAmount'))
        };
      }
    },

    // ── invoices for a supplier — "invoices from Alpha", "how many invoices for Beta" ─
    {
      test: q => q.includes('invoice') && (/\bfrom\b|\bfor\b/.test(q)) && !Object.keys(this.invoiceStatusWords).some(w => new RegExp(`\\bfor\\s+${w}\\b`).test(q)),
      run: (q, { invoices }) => {
        const m = q.match(/\b(?:from|for)\s+([a-z0-9 &.\-]+)$/);
        if (!m) return null;
        const name = m[1].trim();
        if (!name) return null;
        const rows = invoices.filter(inv => (inv.supplierName || inv.supplierCompanyName || '').toLowerCase().includes(name));
        if (rows.length === 0) return { text: `No invoices found for a supplier matching "${name}".` };
        return {
          text: `Invoices from suppliers matching "${name}" (${rows.length} invoice${rows.length === 1 ? '' : 's'}):`,
          highlight: this.currency(this.sum(rows, 'totalAmount'))
        };
      }
    },

    // ── generic invoice count — "how many invoices", "total invoices" ──────
    {
      test: q => q.includes('invoice') && (/\bhow many\b|\btotal\b|\bnumber of\b|\bcount\b/.test(q)),
      run: (q, { invoices }) => {
        const range = this.parseDateRange(q);
        const scoped = this.filterInvoicesByDate(invoices, range);
        return {
          text: `Invoices on record${range ? ' ' + range.label : ''}:`,
          highlight: String(scoped.length)
        };
      }
    },

    // ── specific PO lookup — "status of ITTI/PO/26/003", "show po 003" ────
    {
      test: q => !q.includes('invoice') && (/\bpo[\s/-]*[\d/]+/.test(q) || /\bpo\b.*\bstatus\b/.test(q) || /\bstatus\b.*\bpo\b/.test(q)),
      run: (q, { pos }) => {
        const numMatch = q.match(/([a-z]*\/?po\/?[a-z0-9/]*\d+)/i) || q.match(/\bpo\D*(\d+)/i);
        if (!numMatch) return null;
        const needle = numMatch[1].replace(/[^0-9a-z]/gi, '').toLowerCase();
        const found = pos.find(po => (po.poNumber || '').replace(/[^0-9a-z]/gi, '').toLowerCase().includes(needle));
        if (!found) return { text: `I couldn't find a PO matching "${numMatch[1]}".` };
        return {
          text: `${found.poNumber} — ${found.supplierName || 'Unknown supplier'}`,
          rows: [
            { label: 'Status', value: found.status },
            { label: 'Payment', value: found.paymentStatus || 'UNPAID' },
            { label: 'Value', value: this.currency(found.grandTotal) },
            { label: 'Paid', value: this.currency(found.totalPaidAmount) },
            { label: 'Created', value: this.poDate(found).toLocaleDateString('en-GB') }
          ]
        };
      }
    },

    // ── top supplier — "top supplier", "which supplier do we spend most on" ─
    {
      test: q => /\btop supplier\b|\bbiggest supplier\b|\bhighest spend\b|\bmost\b.*\bsupplier\b/.test(q),
      run: (q, { pos }) => {
        const range = this.parseDateRange(q);
        const scoped = this.filterPOsByDate(this.committed(pos), range);
        if (scoped.length === 0) return { text: `No committed spend${range ? ' ' + range.label : ''} to rank suppliers by.` };
        const bySupplier = new Map<string, number>();
        scoped.forEach(po => {
          const key = po.supplierName || 'Unknown';
          bySupplier.set(key, (bySupplier.get(key) || 0) + (Number(po.grandTotal) || 0));
        });
        const ranked = Array.from(bySupplier.entries()).sort((a, b) => b[1] - a[1]);
        const [name, value] = ranked[0];
        return {
          text: `Your top supplier${range ? ' ' + range.label : ''} by spend is:`,
          highlight: name,
          rows: [
            { label: 'Spend', value: this.currency(value) },
            ...ranked.slice(1, 4).map(([n, v]) => ({ label: n, value: this.currency(v) }))
          ]
        };
      }
    },

    // ── supplier-specific PO spend — "spend on Alpha", "total for Beta Office" ─
    {
      test: q => !q.includes('invoice') && (/\bspend\b|\bspent\b|\btotal\b|\bpaid\b/.test(q)) && (/\bon\b|\bfor\b|\bwith\b/.test(q)),
      run: (q, { pos }) => {
        const m = q.match(/\b(?:on|for|with)\s+([a-z0-9 &.\-]+)$/);
        if (!m) return null;
        const name = m[1].trim();
        if (!name || this.poStatusWords[name]) return null; // let the status handler take "for draft" etc.
        const range = this.parseDateRange(q);
        const scoped = this.filterPOsByDate(this.committed(pos), range);
        const rows = scoped.filter(po => (po.supplierName || '').toLowerCase().includes(name));
        if (rows.length === 0) {
          return { text: `No committed POs found for a supplier matching "${name}"${range ? ' ' + range.label : ''}.` };
        }
        const total = this.sum(rows, 'grandTotal');
        return {
          text: `Spend with suppliers matching "${name}"${range ? ' (' + range.label + ')' : ''}, across ${rows.length} PO${rows.length === 1 ? '' : 's'}:`,
          highlight: this.currency(total)
        };
      }
    },

    // ── PO count by status — "how many draft POs", "released POs count" ────
    {
      test: q => !q.includes('invoice') && (/\bhow many\b|\bcount\b|\bnumber of\b/.test(q)) && Object.keys(this.poStatusWords).some(w => q.includes(w)),
      run: (q, { pos }) => {
        const word = Object.keys(this.poStatusWords).find(w => q.includes(w))!;
        const status = this.poStatusWords[word];
        const rows = pos.filter(po => po.status === status);
        const value = this.sum(rows, 'grandTotal');
        return {
          text: `${rows.length} PO${rows.length === 1 ? ' is' : 's are'} currently ${word.toUpperCase()}${rows.length ? ', worth ' + this.currency(value) : ''}.`,
          highlight: String(rows.length)
        };
      }
    },

    // ── outstanding / pending payment ───────────────────────────────────────
    {
      test: q => /\boutstanding\b|\bpending payment\b|\bdo we owe\b|\bunpaid\b|\bawaiting payment\b/.test(q),
      run: (q, { pos }) => {
        const range = this.parseDateRange(q);
        const scoped = this.filterPOsByDate(this.committed(pos), range);
        const committedValue = this.sum(scoped, 'grandTotal');
        const paidValue = this.sum(scoped, 'totalPaidAmount');
        const outstanding = Math.max(0, committedValue - paidValue);
        return {
          text: `Outstanding to suppliers${range ? ' ' + range.label : ''}:`,
          highlight: this.currency(outstanding),
          rows: [
            { label: 'Committed', value: this.currency(committedValue) },
            { label: 'Paid', value: this.currency(paidValue) }
          ]
        };
      }
    },

    // ── total paid (PO roll-up) ──────────────────────────────────────────────
    {
      test: q => !q.includes('invoice') && (/\btotal paid\b|\bhow much.*\bpaid\b|\bamount paid\b/.test(q)),
      run: (q, { pos }) => {
        const range = this.parseDateRange(q);
        const scoped = this.filterPOsByDate(pos, range);
        return {
          text: `Total paid to suppliers${range ? ' ' + range.label : ''}:`,
          highlight: this.currency(this.sum(scoped, 'totalPaidAmount'))
        };
      }
    },

    // ── average PO value ─────────────────────────────────────────────────────
    {
      test: q => /\baverage\b.*\b(po|order|value)\b/.test(q),
      run: (q, { pos }) => {
        const range = this.parseDateRange(q);
        const scoped = this.filterPOsByDate(this.committed(pos), range);
        if (scoped.length === 0) return { text: `No committed POs${range ? ' ' + range.label : ''} to average.` };
        return {
          text: `Average PO value${range ? ' ' + range.label : ''} (${scoped.length} PO${scoped.length === 1 ? '' : 's'}):`,
          highlight: this.currency(this.sum(scoped, 'grandTotal') / scoped.length)
        };
      }
    },

    // ── active supplier count ────────────────────────────────────────────────
    {
      test: q => /\bhow many suppliers\b|\bactive suppliers\b|\bnumber of suppliers\b/.test(q),
      run: (q, { pos }) => {
        const range = this.parseDateRange(q);
        const scoped = this.filterPOsByDate(this.committed(pos), range);
        const names = new Set(scoped.map(po => po.supplierName).filter(Boolean));
        return {
          text: `Active suppliers${range ? ' ' + range.label : ''} (with at least one committed PO):`,
          highlight: String(names.size)
        };
      }
    },

    // ── PO count (generic) — "how many POs", "total purchase orders" ───────
    {
      test: q => !q.includes('invoice') && (/\bhow many\b.*\b(po|pos|orders|purchase orders)\b|\btotal\b.*\b(po|pos|orders)\b|\bnumber of\b.*\border/.test(q)),
      run: (q, { pos }) => {
        const range = this.parseDateRange(q);
        const scoped = this.filterPOsByDate(pos, range);
        return {
          text: `Purchase orders on record${range ? ' ' + range.label : ''}:`,
          highlight: String(scoped.length)
        };
      }
    },

    // ── total spend / committed value — checked last of the "spend" family ──
    {
      test: q => !q.includes('invoice') && (/\btotal spend\b|\bcommitted spend\b|\bhow much.*\bspen[dt]\b|\btotal value\b|\btotal committed\b/.test(q)),
      run: (q, { pos }) => {
        const range = this.parseDateRange(q);
        const scoped = this.filterPOsByDate(this.committed(pos), range);
        return {
          text: `Total committed spend${range ? ' ' + range.label : ''} (${scoped.length} PO${scoped.length === 1 ? '' : 's'}, drafts/cancelled/rejected excluded):`,
          highlight: this.currency(this.sum(scoped, 'grandTotal'))
        };
      }
    }
  ];
}
