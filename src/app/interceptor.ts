import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  private refreshTokenInProgress = false;
  private refreshTokenSubject = new BehaviorSubject<any>(null);

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Bypass the token for the /api/auth/send-otp endpoint
    if (request.url.includes('/api/auth/send-otp')) {
      return next.handle(request);
    }
    if (request.url.includes('/api/auth/reset-password')) {
      return next.handle(request);
    }
    if (request.url.includes('/api/auth/register')) {
      return next.handle(request);
    }

    const token = localStorage.getItem('auth_token');
    console.log('Retrieved token:', token); 
    if (token && token.split('.').length === 3) {
      request = this.addToken(request, token);
    } else {
      console.error('Invalid token format or no token found');
    }

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          if (event.status === 401) {
            alert('Unauthorized access!!!');
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.error('Unauthorized access, clearing token.');
          localStorage.clear();
          this.router.navigate(['/auth/login']);
        }
        return throwError(error);
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
