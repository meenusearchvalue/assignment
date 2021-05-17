import * as SignupActions from '../actions/signup.actions';


export type Action = SignupActions.All;



const defaultState: any = {

};


// Creating new state from the previous state
const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};


export function signupReducer(state: any, action: Action) {

    switch (action.type) {

        case SignupActions.CARTDATA:
            return newState(state, { cart: action.payload });
        case SignupActions.PRODUCTDATA:
            return newState(state, { products: action.payload });

        default:
            return state;

    }
}

