import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authService: AuthService = inject(AuthService);

    if (authService.currentUser) {
      let token = authService.currentUser.accessToken;
      let clone = request.clone({
        setHeaders: { 'Authorization': 'Bearer ' + token }
      });
      return next.handle(clone);
    }
    return next.handle(request);
  }
}
