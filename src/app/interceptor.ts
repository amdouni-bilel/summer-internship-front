import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  private refreshTokenInProgress = false;
  private refreshTokenSubject = new BehaviorSubject(null);

  constructor(    private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var token = localStorage.getItem("token");
    var modifiedReq;
    if(token)
    {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if(event.status == 401) {
              alert('Unauthorize access!!!')
            }
        //    console.log('hello response');
          }
       //   console.log('hello  not response');
          return event;
        },
        error: (error) => {
          if(error.status == 401) {
            localStorage.clear();
           // this.router.navigate(['/auth/login']);

          }
          if(error.status == 404) {
          //  alert('Page Not Found!!!')
          }
          if(error.status == 500) {
         //   alert('Page Not Found!!!')
          }
        }

      }
      )
    );
  }
}
