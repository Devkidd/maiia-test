import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../redux/actions/productsAction'
import Card from '../Card'

export const Feed = (props) => {
    const {products, fetchProducts} = props;
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])

    
    function ProductRender(props) {
        const products = props.products;
        if (products.length > 0) {
            return <Card products={products} />
        } else {
        return (<h2>Pas de produits</h2>)
        }
    }
    return (
        <ProductRender products={products} />
    )
}

const mapStateToProps = (state) => ({
    products: state.products.productsList
})

const mapDispatchToProps = {
    fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
