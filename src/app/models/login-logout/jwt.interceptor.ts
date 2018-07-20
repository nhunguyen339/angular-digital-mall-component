import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>>{
    let _currentUser = JSON.parse(localStorage.getItem('_currentUser'));
    if (_currentUser && _currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${_currentUser.token}`
        }
      });
    }
    return next.handle(request);
  }
}
