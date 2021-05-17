import { Injectable } from '@angular/core';
import { CanLoad, Router, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
 import { Store } from '@ngrx/store';
import * as AppActions from 'src/app/store/actions/app.actions';
import { AppService } from './../admin/services/app.service';
import { LoginService } from './../admin/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
     private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private appSer: AppService,
    private LoginService: LoginService
  ) { }

  // here route is used for get the route
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve) => {
     
    });
  }
}
