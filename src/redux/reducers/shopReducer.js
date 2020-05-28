import { ADD_ITEM_SHOP, REMOVE_ITEM_SHOP, INIT_STATE, INIT_LOCAL_STORAGE } from '../actions/types'

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
            return Object.assign({},state, {shopList})
        case REMOVE_ITEM_SHOP :
            let shopListTemp= []
            if(state.shopList.find((item) => item.id === action.payload && item.nb > 1)) {
                shopListTemp = state.shopList.map((item) => {
                    if (item.id === action.payload) { 
                        const newItem = {
                            ...item,
                            nb: item.nb - 1,
                        }
                        return newItem;
                    }
                    return item;
                })
            } else {
                shopListTemp = [...state.shopList.filter((item) => item.id !== action.payload)]
            }
            localStorage.setItem('panier', JSON.stringify(shopListTemp))
            return Object.assign({},state, {shopList: shopListTemp})
        case INIT_STATE :
            return Object.assign({}, state, {
                shopList: action.payload ? action.payload : []
            })
        default:
            return state;
    }
}