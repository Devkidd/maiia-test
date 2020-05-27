import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../redux/actions/productsAction'

import Card from '../Card'

export const Feed = (props) => {
    const {products, fetchProducts} = props;
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])

    return (
        products.map((product) => {
            return <Card product={product} key={product.id} />
        })
    )
}

const mapStateToProps = (state) => ({
    products: state.products.productsList,
})

const mapDispatchToProps = {
    fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
