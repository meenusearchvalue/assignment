import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as AppActions from "src/app/store/actions/app.actions";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../app.component.scss'],
  providers: []
})
export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  currentUser
  counter: number = 0;
  totalAmount: number = 0;
  prodList: any[];
  carts: any[];
  cartPopup:boolean=false

  constructor(private store: Store, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.store.pipe().subscribe(
      (appState: any) => {
        if (appState && appState.applicationState == undefined) {
          this.carts = [];
          this.prodList = [];
        } else {
          var total = 0;
          var cart_data = appState.applicationState.cart == undefined ? [] : appState.applicationState.cart;
          var product_data = appState.applicationState.products == undefined ? [] : appState.applicationState.products;
          this.carts = Object.keys(cart_data).map(function (personNamedIndex) {
            let person = cart_data[personNamedIndex];
            // do something with person
            console.log(person)
            total = total + person.subtotal

            return person;
          });
          this.totalAmount = total;
          this.counter = this.carts.length;

          this.prodList = Object.keys(product_data).map(function (newD) {
            let pData = product_data[newD];
            // do something with person
            return pData;
          });

        }
      });



  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    });
  }
  _addToCart(cart) {
    this.carts.map((cartData, i) => {
      if (cartData.id == cart.id) {
        var quantity = (cart.quantity + 1)
        let dataV = {
          'id': cart.id,
          'name': cart.name,
          'price': cart.price,
          'quantity': quantity,
          'subtotal': (cart.price * quantity)
        }

        this.carts[i] = dataV;
      }
    });

    this.store.dispatch(new AppActions.CART(this.carts));

  }
  _removeToCartValue(product_id, i) {

    this.carts.splice(i, 1)

    this.store.dispatch(new AppActions.CART(this.carts));

  }
  openCart(){
    this.cartPopup=!this.cartPopup
  }
  _removeToCart(cart) {
    if(cart.quantity>1){
    this.carts.map((cartData, i) => {
      if (cartData.id == cart.id) {
        var quantity = (cart.quantity - 1)
        let dataV = {
          'id': cart.id,
          'name': cart.name,
          'price': cart.price,
          'quantity': quantity,
          'subtotal': (cart.price * quantity)
        }

        this.carts[i] = dataV;
      }
    });
  
  }else{
    var elementPos = this.carts.map(function(x) {return x.id; }).indexOf(cart.id);
    this.carts.splice(elementPos, 1)
  }
    this.store.dispatch(new AppActions.CART(this.carts));
  

  }

  
  logout() {


    localStorage.clear();
  }




}
