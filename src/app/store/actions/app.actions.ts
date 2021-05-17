import { Action } from '@ngrx/store';

export const APP_CART = '[App] UserSignup';

export const APP_PRODUCT = '[App] Products';



export class CART implements Action {

    readonly type = APP_CART;

    constructor(public payload: any) {
    }
}

export class PRODUCTS implements Action {

    readonly type = APP_PRODUCT;

    constructor(public payload: any) {
    }
}












export type All = CART |PRODUCTS
     ;
