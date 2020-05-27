import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
    const products = props.products
    return (
        <>
       {products.map((product) => {
           return (
        <div key={product.id}>
            <img src={product.thumbnailUrl} alt={product.title} />
            <h3>{product.title}</h3>
        </div>
           )
       })}
       </>
        )
    }

Card.propTypes = {
    products: PropTypes.array.isRequired
}

export default Card;

