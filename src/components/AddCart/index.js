import React, { Component } from 'react'
import { AddItemToShop } from '../../redux/actions/shopAction'
import { connect } from 'react-redux'

export const AddCart = ({product, AddItemToShop}) => {
    return (
        <>
        <button onClick={() => AddItemToShop(product)}>Ajouter au panier</button>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    AddItemToShop
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCart)
