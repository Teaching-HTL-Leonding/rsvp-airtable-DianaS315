import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AIRTABLE_PAT } from './app.module';

@Injectable()
export class RsvpDataInterceptor implements HttpInterceptor {
  constructor(@Inject(AIRTABLE_PAT) private airtablePat: string) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.airtablePat}`
      },
    });
    return next.handle(authRequest);
  }
}
