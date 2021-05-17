import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./../../../app.component.scss', './carts.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CartsComponent implements OnInit {
 
  carts:[]
  constructor(

  ) { }

  ngOnInit() {
   
  }
  _addItemToCart(product,quantity){

  }

  
}
