import React from 'react'
import PropTypes from 'prop-types'
import { AddItemToShop } from '../../redux/actions/shopAction'
import { connect } from 'react-redux'

function Card(props) {
    const {AddItemToShop, shop} = props
    const product = props.product
    return (
        <div>
            <a href={product.url}>
                <img src={product.thumbnailUrl} alt={product.title} />
                <h3>{product.title}</h3>
            </a>
            <button onClick={() => AddItemToShop(product)}>Ajouter au panier</button>
        </div>
    )
    
}

Card.propTypes = {
    product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    shop: state.shop.shopList,
})

const mapDispatchToProps = {
    AddItemToShop,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

