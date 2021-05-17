import * as AppActions from '../actions/app.actions';


export type Action = AppActions.All;


//
const defaultState: any = {
    loader: false,
    cart: [],
    products: []

};


// Creating new state from the previous state
const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};


export function appReducer(state: any, action: Action) {


    switch (action.type) {



        case AppActions.APP_CART:
            return newState(state, { cart: action.payload });
        case AppActions.APP_PRODUCT:
            return newState(state, { products: action.payload });
        default:
            return state;

    }
}

