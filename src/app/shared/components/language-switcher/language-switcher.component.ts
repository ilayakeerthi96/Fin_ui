import { Component, inject, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../service/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

/** Language dropdown shown in the header next to the session timer. */
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="ls-root">
      <button class="ls-btn" (click)="open = !open" title="Change language">
        <span class="ls-flag">{{ activeFlag }}</span>
        <span class="ls-code">{{ svc.currentLang().toUpperCase() }}</span>
        <svg class="ls-chevron" [class.flipped]="open" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
      </button>

      <div class="ls-panel" *ngIf="open">
        <div class="ls-panel-title">{{ 'HEADER_LANGUAGE' | translate }}</div>
        <ul class="ls-list">
          <li *ngFor="let lang of svc.languages">
            <button
              class="ls-item"
              [class.ls-item-active]="svc.currentLang() === lang.code"
              (click)="select(lang.code)">
              <span class="ls-flag">{{ lang.flag }}</span>
              <span>{{ lang.label }}</span>
              <span *ngIf="svc.currentLang() === lang.code" class="ls-check">✓</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .ls-root { position: relative; display: inline-block; }

    .ls-btn {
      display: flex;
      align-items: center;
      gap: 5px;
      background: rgba(255,255,255,0.18);
      border: 1.5px solid rgba(255,255,255,0.30);
      border-radius: 10px;
      padding: 6px 10px;
      cursor: pointer;
      color: var(--navbar-text, #fff);
      transition: background 0.2s, transform 0.15s;
      backdrop-filter: blur(6px);
      font-weight: 600;
      font-size: 12px;
    }
    .ls-btn:hover { background: rgba(255,255,255,0.28); transform: translateY(-1px); }

    .ls-flag { font-size: 15px; line-height: 1; }
    .ls-code { letter-spacing: 0.5px; }

    .ls-chevron { width: 14px; height: 14px; opacity: 0.85; transition: transform 0.2s; flex-shrink: 0; }
    .ls-chevron.flipped { transform: rotate(180deg); }

    .ls-panel {
      all: initial;
      display: block;
      position: absolute;
      top: calc(100% + 10px);
      right: 0;
      width: 200px;
      background-color: #ffffff !important;
      color: #374151 !important;
      border-radius: 14px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10);
      border: 1px solid rgba(0,0,0,0.06);
      overflow: hidden;
      z-index: 99999;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .ls-panel-title {
      padding: 12px 14px 8px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.9px;
      color: #6b7280 !important;
      border-bottom: 1px solid #f3f4f6;
      background: #ffffff;
    }

    .ls-list { list-style: none; margin: 0; padding: 6px; background: #ffffff; }

    .ls-item {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 8px 10px;
      background: transparent !important;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      color: #374151 !important;
      font-size: 13px;
      font-family: inherit;
      text-align: left;
    }
    .ls-item:hover { background: #f3f4f6 !important; }
    .ls-item-active { background: #f0f2ff !important; font-weight: 600; }
    .ls-check { margin-left: auto; color: #667eea !important; font-weight: 700; }
  `]
})
export class LanguageSwitcherComponent {
  svc = inject(TranslationService);
  open = false;

  get activeFlag(): string {
    return this.svc.languages.find(l => l.code === this.svc.currentLang())?.flag ?? '🇬🇧';
  }

  select(code: string): void {
    this.svc.setLanguage(code);
    this.open = false;
  }

  @HostListener('document:click', ['$event'])
  onOutside(e: Event): void {
    if (!this._el.nativeElement.contains(e.target)) this.open = false;
  }

  constructor(private _el: ElementRef) {}
}
