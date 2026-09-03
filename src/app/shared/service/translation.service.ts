import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface SupportedLanguage {
  code: string;
  label: string;
  flag: string;
}

const STORAGE_KEY = 'appLanguage';

/**
 * Runtime UI translation - loads assets/i18n/{code}.json on demand and swaps
 * the active dictionary. English is always kept loaded as the fallback for
 * any key missing from another language's file.
 */
@Injectable({ providedIn: 'root' })
export class TranslationService {

  readonly languages: SupportedLanguage[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
  ];

  readonly currentLang = signal<string>('en');
  private readonly dictionaries: Record<string, Record<string, string>> = {};
  private englishReady: Promise<void> | null = null;

  /** Our language codes -> Google Website Translator's own codes. 'en' maps to
   *  '' (its "original/untranslated" option) since the source language itself
   *  isn't a selectable translation target in the widget's dropdown. */
  private readonly googleLangCodes: Record<string, string> = {
    en: '', es: 'es', fr: 'fr', de: 'de', ar: 'ar', zh: 'zh-CN'
  };

  constructor(private http: HttpClient) {
    const saved = localStorage.getItem(STORAGE_KEY);
    this.englishReady = this.loadDictionary('en');
    if (saved && saved !== 'en' && this.languages.some(l => l.code === saved)) {
      this.setLanguage(saved);
    }
  }

  private async loadDictionary(code: string): Promise<void> {
    if (this.dictionaries[code]) return;
    try {
      const data = await firstValueFrom(
        this.http.get<Record<string, string>>(`assets/i18n/${code}.json`)
      );
      this.dictionaries[code] = data || {};
    } catch {
      this.dictionaries[code] = {};
    }
  }

  async setLanguage(code: string): Promise<void> {
    if (!this.languages.some(l => l.code === code)) return;
    await this.loadDictionary(code);
    this.currentLang.set(code);
    localStorage.setItem(STORAGE_KEY, code);
    this.applyGoogleTranslate(code);
  }

  /**
   * Drives Google's hidden Website Translator widget so the ENTIRE rendered
   * page (every component, not just the strings we've hand-translated) gets
   * machine-translated. The widget's <select class="goog-te-combo"> only
   * exists once its external script finishes loading, so this retries for a
   * few seconds if it isn't there yet (e.g. right after a fresh page load).
   */
  private applyGoogleTranslate(code: string, attempt: number = 0): void {
    const googleCode = this.googleLangCodes[code] ?? code;
    const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (!combo) {
      if (attempt < 20) {
        setTimeout(() => this.applyGoogleTranslate(code, attempt + 1), 250);
      }
      return;
    }
    if (combo.value !== googleCode) {
      combo.value = googleCode;
      combo.dispatchEvent(new Event('change'));
    }
  }

  translate(key: string): string {
    const lang = this.currentLang();
    const value = this.dictionaries[lang]?.[key];
    if (value) return value;
    const fallback = this.dictionaries['en']?.[key];
    return fallback || key;
  }
}
