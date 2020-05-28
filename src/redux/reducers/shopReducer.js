import { ADD_ITEM_SHOP, REMOVE_ITEM_SHOP, INIT_STATE } from '../actions/types'

const initialState = {
    shopList: []
};

export default function shopReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM_SHOP :
            let shopList = [
                ...state.shopList,
            ]
            //Gestion des doublons
            //Ajoute nb quand un élément est ajouter plus d'une fois
            if(shopList.find((item) => item.id === action.payload.id)) {
                shopList = shopList.map((item) => item.id === action.payload.id ? {...item, nb : item.nb ? item.nb++ : 2} : item)
            } else {
                shopList = [...shopList, action.payload]
            }
            localStorage.setItem('panier', JSON.stringify(shopList))
            return Object.assign(state, {shopList})
        case REMOVE_ITEM_SHOP :
            console.log('remove', action.payload)
            break;
        case INIT_STATE :  
            return Object.assign(state, {
                shopList: action.payload ? action.payload : []
            })
        default:
            return state;
    }
}