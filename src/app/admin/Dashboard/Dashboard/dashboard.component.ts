import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Store } from "@ngrx/store";
import { LoginService } from './../../services/login.service';
import * as AppActions from "src/app/store/actions/app.actions";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./../../../app.component.scss', './dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements OnInit {

  prodList: any[]
  carts: any[];
  cartsn: any[];
  constructor(

    private store: Store<any>,
    private service: LoginService,
  ) { }

  ngOnInit() {
    this.getProducts();
    this.store.pipe().subscribe(
      (appState: any) => {

        if (appState && appState.applicationState == undefined) {
          this.carts = [];
          this.prodList = [];
        } else {
          var cart_data = appState.applicationState.cart == undefined ? [] : appState.applicationState.cart;
          var product_data = appState.applicationState.products == undefined ? [] : appState.applicationState.products;
          this.carts = Object.keys(cart_data).map(function (personNamedIndex) {
            let person = cart_data[personNamedIndex];
            // do something with person
            return person;
          });
          this.prodList = Object.keys(product_data).map(function (newD) {
            let pData = product_data[newD];
            // do something with person
            return pData;
          });

        }
      });
    console.log(this.prodList)
  }

  _addItemToCart(product, index) {
    this.cartsn = this.carts;
    var status = this.cartsn.some(function (el) {
      return (el.id == product.id);
    });
    if (!status) {
      let dataV = {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'quantity': 1,
        'subtotal': (product.price * 1)
      }
      this.cartsn.push(dataV);
      this.store.dispatch(new AppActions.CART(this.cartsn));

    } else {
      alert('already exits')
    }
  }
  check(prod) {

    var found = this.carts.some(el => el.id === prod.id);
    return found;

  }
  downCartUpdate(id) {

    this.carts.map((cartData, i) => {

      if (cartData.id == id) {
        if (cartData.quantity > 1) {
          var quantity = (cartData.quantity - 1)
          let dataV = {
            'id': cartData.id,
            'name': cartData.name,
            'price': cartData.price,
            'quantity': quantity,
            'subtotal': (cartData.price * quantity)
          }

          this.carts[i] = dataV;

        } else {
          var elementPos = this.carts.map(function (x) { return x.id; }).indexOf(id);
          this.carts.splice(elementPos, 1)


        }
      }
    });

    this.store.dispatch(new AppActions.CART(this.carts));

  }
  upCartUpdate(id) {
    this.carts.map((cartData, i) => {
      if (cartData.id == id) {
        var quantity = (cartData.quantity + 1)
        let dataV = {
          'id': cartData.id,
          'name': cartData.name,
          'price': cartData.price,
          'quantity': quantity,
          'subtotal': (cartData.price * quantity)
        }

        this.carts[i] = dataV;
      }
    });

    this.store.dispatch(new AppActions.CART(this.carts));

  }
  getCart(id) {
    var val = 0;
    this.carts.map((cartData, i) => {
      if (cartData.id == id) {
        val = cartData.quantity;
      }
    });
    console.log(val)
    return val;

  }
  getProducts() {


    this.service.getProducts().pipe().subscribe(
      res => {
        var productsList = res.data;
        this.store.dispatch(new AppActions.PRODUCTS(productsList));
        console.log(this.prodList)
      },
    )
  }

}
