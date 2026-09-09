import {
  HttpClient,
  Injectable,
  Pipe,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵinject
} from "./chunk-BCCUO726.js";
import {
  __async
} from "./chunk-SO7Q7VKX.js";

// src/app/shared/service/translation.service.ts
var STORAGE_KEY = "appLanguage";
var _TranslationService = class _TranslationService {
  constructor(http) {
    this.http = http;
    this.languages = [
      { code: "en", label: "English", flag: "\u{1F1EC}\u{1F1E7}" },
      { code: "es", label: "Espa\xF1ol", flag: "\u{1F1EA}\u{1F1F8}" },
      { code: "fr", label: "Fran\xE7ais", flag: "\u{1F1EB}\u{1F1F7}" },
      { code: "de", label: "Deutsch", flag: "\u{1F1E9}\u{1F1EA}" },
      { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", flag: "\u{1F1F8}\u{1F1E6}" },
      { code: "zh", label: "\u4E2D\u6587", flag: "\u{1F1E8}\u{1F1F3}" }
    ];
    this.currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
    this.dictionaries = {};
    this.englishReady = null;
    this.googleLangCodes = {
      en: "",
      es: "es",
      fr: "fr",
      de: "de",
      ar: "ar",
      zh: "zh-CN"
    };
    const saved = localStorage.getItem(STORAGE_KEY);
    this.englishReady = this.loadDictionary("en");
    if (saved && saved !== "en" && this.languages.some((l) => l.code === saved)) {
      this.setLanguage(saved);
    }
  }
  loadDictionary(code) {
    return __async(this, null, function* () {
      if (this.dictionaries[code])
        return;
      try {
        const data = yield firstValueFrom(this.http.get(`assets/i18n/${code}.json`));
        this.dictionaries[code] = data || {};
      } catch {
        this.dictionaries[code] = {};
      }
    });
  }
  setLanguage(code) {
    return __async(this, null, function* () {
      if (!this.languages.some((l) => l.code === code))
        return;
      yield this.loadDictionary(code);
      this.currentLang.set(code);
      localStorage.setItem(STORAGE_KEY, code);
      this.applyGoogleTranslate(code);
    });
  }
  /**
   * Drives Google's hidden Website Translator widget so the ENTIRE rendered
   * page (every component, not just the strings we've hand-translated) gets
   * machine-translated. The widget's <select class="goog-te-combo"> only
   * exists once its external script finishes loading, so this retries for a
   * few seconds if it isn't there yet (e.g. right after a fresh page load).
   */
  applyGoogleTranslate(code, attempt = 0) {
    const googleCode = this.googleLangCodes[code] ?? code;
    const combo = document.querySelector(".goog-te-combo");
    if (!combo) {
      if (attempt < 20) {
        setTimeout(() => this.applyGoogleTranslate(code, attempt + 1), 250);
      }
      return;
    }
    if (combo.value !== googleCode) {
      combo.value = googleCode;
      combo.dispatchEvent(new Event("change"));
    }
  }
  translate(key) {
    const lang = this.currentLang();
    const value = this.dictionaries[lang]?.[key];
    if (value)
      return value;
    const fallback = this.dictionaries["en"]?.[key];
    return fallback || key;
  }
};
_TranslationService.\u0275fac = function TranslationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TranslationService)(\u0275\u0275inject(HttpClient));
};
_TranslationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TranslationService, factory: _TranslationService.\u0275fac, providedIn: "root" });
var TranslationService = _TranslationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/shared/pipes/translate.pipe.ts
var _TranslatePipe = class _TranslatePipe {
  constructor() {
    this.svc = inject(TranslationService);
  }
  transform(key) {
    if (!key)
      return "";
    return this.svc.translate(key);
  }
};
_TranslatePipe.\u0275fac = function TranslatePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TranslatePipe)();
};
_TranslatePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "translate", type: _TranslatePipe, pure: false });
var TranslatePipe = _TranslatePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Pipe,
    args: [{
      name: "translate",
      standalone: true,
      pure: false
    }]
  }], null, null);
})();

export {
  TranslatePipe
};
//# sourceMappingURL=chunk-5RNEFPGC.js.map
