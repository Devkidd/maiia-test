import { FETCH_PRODUCTS } from '../actions/types'

const initialState = {
    productsList: []
};

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS :
            return {...state, productsList: action.payload};
        case 'SEARCH' :
            let productSearch = []
            productSearch = [...state.productsList.filter((val) => val.title.includes(action.payload))]
            return Object.assign({}, state, {productsList: productSearch})
        default:
            return state;
    }
}