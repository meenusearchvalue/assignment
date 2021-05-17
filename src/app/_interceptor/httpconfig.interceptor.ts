import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpResponse,HttpHandler,HttpEvent,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
      
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        try {
            if (!window.navigator.onLine) {
                return Observable.throw(new HttpErrorResponse({ error: 'Internet is required.' }));
            }
            let token: string = localStorage.getItem('menu_token');
            let ids: string = localStorage.getItem('id');
            var filesplits = request.url.split('/');
            if (token) {
                request = request.clone({ headers: request.headers.set('Authorization', token) });
            }
          
        } catch (error) {}
        
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if(event.body.Status==401){
                        localStorage.clear();
                        this.router.navigate(['/login']);
                    }
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
               
                if (error.status === 401) {
                    localStorage.clear();
                    this.router.navigate(['/login']);
                }
                return throwError(error);
            })
        );
    }

}
