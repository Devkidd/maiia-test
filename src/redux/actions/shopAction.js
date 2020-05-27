import { ADD_ITEM_SHOP, REMOVE_ITEM_SHOP } from '../actions/types'

export const AddItemToShop = (item) => (dispatch) => {
    dispatch({
        type: ADD_ITEM_SHOP,
        payload: item
    })
}

export const RemoveItemShop = (item) => (dispatch) => {
    dispatch({
        type: REMOVE_ITEM_SHOP,
        payload: item
    })
}