import { Component, OnInit } from '@angular/core';

import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title= 'App';
  lang= 'en';
  message:Observable<any>;
  showMessage:boolean = false;
  tempMessag;

  subscription: Subscription;

  constructor(

  ) { }

  ngOnInit(): void {
   
  }

 

}
