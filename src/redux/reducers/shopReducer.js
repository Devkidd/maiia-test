import { ADD_ITEM_SHOP, REMOVE_ITEM_SHOP } from '../actions/types'

const initialState = {
    shopList: []
};

export default function shopReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM_SHOP :
            const shopList = [
                ...state.shopList,
                action.payload
            ]
            localStorage.setItem('panier', JSON.stringify(shopList))
            return Object.assign(state, {shopList})
        case REMOVE_ITEM_SHOP :
            console.log('remove', action.payload)
            break;
        default:
            return state;
    }
}