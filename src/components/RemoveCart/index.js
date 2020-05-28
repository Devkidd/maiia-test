import React, { useEffect } from 'react'
import { RemoveItemShop } from '../../redux/actions/shopAction'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const RemoveCart = ({product, RemoveItemShop, shoplist}) => {

    const handleRemove = (e) => {
        e.preventDefault();
        RemoveItemShop(product.id)
    }
    return (
        <>
            <button onClick={handleRemove}>
                <FontAwesomeIcon icon={faTrash} color='#333' size='lg' style={{cursor: 'pointer'}}/>
            </button>
        </>
    )
}

const mapStateToProps = (state) => ({
    shoplist: state.shop.shopList
})

const mapDispatchToProps = {
    RemoveItemShop,
}


export default connect(mapStateToProps, mapDispatchToProps)(RemoveCart)
