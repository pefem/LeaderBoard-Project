import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap(
            nonErrorEvent => {
                // nothing to do there
            },
            (error: HttpErrorResponse) => {
                if (error.status === 401) {
                    // this.authService.setUserAsNotAuthenticated();
                }
            }
        ));
    }
}