// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import {
//   provideRouter,
//   withEnabledBlockingInitialNavigation,
//   withHashLocation,
//   withInMemoryScrolling,
//   withRouterConfig,
//   withViewTransitions
// } from '@angular/router';

// import { DropdownModule, SidebarModule } from '@coreui/angular';
// import { IconSetService } from '@coreui/icons-angular';
// import { routes } from './app.routes';
// import { provideHttpClient } from '@angular/common/http';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes,
//       withRouterConfig({
//         onSameUrlNavigation: 'reload'
//       }),
//       withInMemoryScrolling({
//         scrollPositionRestoration: 'top',
//         anchorScrolling: 'enabled'
//       }),
//       withEnabledBlockingInitialNavigation(),
//       withViewTransitions(),
//       withHashLocation()
//     ),
//     importProvidersFrom(SidebarModule, DropdownModule),
//     IconSetService,
//     provideAnimationsAsync(),
//     provideHttpClient()
//   ]
// };


import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// ✅ FIX: provideAnimationsAsync() has a race condition on Angular 20 where the
// dynamically-imported animations engine isn't ready before the first animated
// element (e.g. any CoreUI c-modal) tries to run its trigger — the animation gets
// permanently stuck (InvalidStateError, element stays display:none + inert).
// provideAnimations() loads the engine synchronously at bootstrap instead, so it's
// always ready. This is why every c-modal-based dialog app-wide stopped opening.
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DropdownModule, SidebarModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { routes } from './app.routes';
import { AuthInterceptor } from '../app/shared/interceptor/auth.interceptor';

/**
 * ============================================
 * APPLICATION CONFIGURATION
 * ============================================
 * Enterprise-grade configuration with
 * HTTP interceptor for authentication
 * ============================================
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withEnabledBlockingInitialNavigation(),
      withViewTransitions(),
      withHashLocation()
    ),
    importProvidersFrom(SidebarModule, DropdownModule),
    IconSetService,
    provideAnimations(),
    provideHttpClient(),
    
    // ✅ Register HTTP Interceptor for automatic JWT inclusion
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
};