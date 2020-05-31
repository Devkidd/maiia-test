import { combineReducers } from 'redux'
import productReducer from './products/productsReducer'
import shopReducer from './shop/shopReducer'

export default combineReducers({
    products: productReducer,
    shop: shopReducer
})