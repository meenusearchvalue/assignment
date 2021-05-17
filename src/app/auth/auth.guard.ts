import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
  ) { }

  // here route is used for get the route
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve) => {
     return true;
    });
  }
}
