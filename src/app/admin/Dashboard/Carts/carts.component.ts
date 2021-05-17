import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
// import { Store } from "@ngrx/store";
import { AppService } from './../../services/app.service';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./../../../app.component.scss', './carts.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CartsComponent implements OnInit {
 
  carts:[]
  constructor(
    private ngxservice: NgxUiLoaderService,
    // private store: Store<any>,
    private appService: AppService,
    private builder: FormBuilder,
    private router: Router,
    private service: LoginService,
  ) { }

  ngOnInit() {
   
  }
  _addItemToCart(product,quantity){

  }

  
}
