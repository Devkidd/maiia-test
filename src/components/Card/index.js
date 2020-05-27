import React from 'react'
import PropTypes from 'prop-types'
import { AddItemToShop } from '../../redux/actions/shopAction'
import { connect } from 'react-redux'

import { CardContainer, CardTitle, CardImage, CardButton } from './styles'

function Card(props) {
    const {AddItemToShop} = props
    const product = props.product
    return (
        <CardContainer>
            <a href={product.url}>
                <CardImage src={product.thumbnailUrl} alt={product.title} />
                <CardTitle>{product.title}</CardTitle>
            </a>
            <CardButton onClick={() => AddItemToShop(product)}>Ajouter au panier</CardButton>
        </CardContainer>
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

