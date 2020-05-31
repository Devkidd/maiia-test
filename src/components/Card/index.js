import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { CardTitle, CardImage } from './styles'



function Card({product}) {
    return (
        <>
            <a href={product.url}>
                <CardImage src={product.thumbnailUrl} alt={product.title} />
                <CardTitle>{product.title}</CardTitle>
            </a>
        </>
    )
    
}

Card.propTypes = {
    product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    shop: state.shop.shopList,
})

export default connect(mapStateToProps)(memo(Card))

