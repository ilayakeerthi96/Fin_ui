import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from '../service/translation.service';

/** {{ 'SOME_KEY' | translate }} - re-evaluates on every change-detection run
 *  so it picks up the active language as soon as it changes. */
@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private readonly svc = inject(TranslationService);

  transform(key: string | null | undefined): string {
    if (!key) return '';
    return this.svc.translate(key);
  }
}
