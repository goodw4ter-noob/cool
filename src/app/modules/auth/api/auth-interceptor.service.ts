import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService
  implements HttpInterceptor
{
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token') ?? '';
    request = request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : '',
      },
    });

    return next.handle(request);
  }
}
