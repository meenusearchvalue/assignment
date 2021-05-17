import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { environment as ENV } from './../../../environments/environment';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  [x: string]: any;
  loggedIn: boolean = false;
  private options= {
    //  headers:this.headers,
  }

  data: any;
  comm: any;

  constructor(
    private http: HttpClient
  ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res) {
    return res || {};
  }

 
  getProducts(): Observable<any> {
    return this.http.get<any>(`https://www.mocky.io/v2/5eda4003330000740079ea60`).pipe(
      tap((res) => { }),
      map(this.extractData),
      catchError(this.handleError)
    );
  }


}