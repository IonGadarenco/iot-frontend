import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  // Configurarea routing-ului
    provideClientHydration(),  // Dacă folosești SSR (Server-Side Rendering)
    provideHttpClient(),  // Configurarea corectă a HttpClient
    provideAnimationsAsync()  // Dacă folosești animații asincrone
  ]
};
