import axios from 'axios'
import { FETCH_PRODUCTS } from './types'

export const fetchProducts = () => async (dispatch) => {
    await axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((Response) => {
            dispatch({
                type: FETCH_PRODUCTS,
                payload: Response.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

export const SearchProducts = (value) =>  (dispatch) => {
    dispatch({
        type: 'SEARCH',
        payload: value
    })
}