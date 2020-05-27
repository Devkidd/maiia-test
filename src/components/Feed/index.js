import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../redux/actions/productsAction'

export const Feed = (props) => {
    const {fetchProducts} = props;
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])
    return (
        <h2>Listes des produits</h2>
    )
}

const mapStateToProps = (state) => ({
    products: state.products.productsList
})

const mapDispatchToProps = {
    fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
