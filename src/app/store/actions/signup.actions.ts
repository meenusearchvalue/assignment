import { Action } from '@ngrx/store';

export const CARTDATA = '[Signup] Add';
export const PRODUCTDATA = '[Signup] Product';

export class Products implements Action {


    readonly type=PRODUCTDATA

    constructor(public payload: any) {

    }
}


export class Cart implements Action {

    readonly type = CARTDATA;

    constructor(public payload: any) {

    }
}


export type All = Cart | Cart | Products;
