import { FETCH_PRODUCTS } from '../actions/types'

const initialState = {
    productsList: [],
    loading: false,
};

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS :
            return {...state, productsList: action.payload};
        case 'SEARCH' :
            let productSearch = []
            productSearch = [...state.productsList.filter((val) => val.title.includes(action.payload))]
            return Object.assign({}, state, {productsList: productSearch})
        case 'LOAD_PRODUCTS':
            return action.payload ? state.loading = true : state.loading = false;
        default:
            return state;
    }
}