import { combineReducers } from 'redux'
import productReducer from './productsReducer'
import shopReducer from './shopReducer'

export default combineReducers({
    products: productReducer,
    shop: shopReducer
})