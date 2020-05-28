import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../redux/actions/productsAction'

import Card from '../Card'
import AddCart from '../AddCart'

import { CardContainer, Title, Article } from './styles'

export const Feed = (props) => {
    const {products, fetchProducts} = props;
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])

    return (
        <>
        <Title>Listes des produits ({products.length})</Title>
        <CardContainer>
        {products.map((product) => {
            return (
                <Article>
                <Card product={product} key={product.id} />
                <AddCart product={product} />
                </Article>
            )
        })}
        </CardContainer>
        </>
    )
}

const mapStateToProps = (state) => ({
    products: state.products.productsList,
})

const mapDispatchToProps = {
    fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
