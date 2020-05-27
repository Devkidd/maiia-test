import { FETCH_PRODUCTS } from '../actions/types'

const initialState = [];

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS :
            return {...state, productsList: action.payload};
        default:
            return state;
    }
}