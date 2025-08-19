// src/app/core/core.config.ts
import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../core/interceptors/token.interceptor';

export const coreProviders: Provider[] = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
];
