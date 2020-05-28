import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../redux/actions/productsAction'
import Pagination from "react-js-pagination";

import Card from '../Card'
import AddCart from '../AddCart'

import { CardContainer, Title, Article, PaginationContainer } from './styles'

export const Feed = ({products, fetchProducts}) => {
    const [productPerPage, setProductPerPage] = useState(15)
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    const indexOfLastProduct = currentPage * productPerPage
    const indexOfFirstProduct = indexOfLastProduct - productPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)


    useEffect(() => {
        fetchProducts();
        setIsLoading(false);
    }, [fetchProducts])



    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
      }

    return (
        <>
        <Title>Listes des produits ({products.length})</Title>
        <CardContainer>
        {isLoading && (<h2>Chargements des produits...</h2>)}
        {products && currentProducts.map((product) => {
            return (
                <Article key={product.id}>
                <Card product={product} />
                <AddCart product={product} />
                </Article>
            )
        })}
        </CardContainer>
        <PaginationContainer> 
        <Pagination 
            activePage={currentPage}
            itemsCountPerPage={15}
            totalItemsCount={products.length}
            pageRangeDisplayed={5}
            onChange={handlePageChange.bind(this)}
        />
    </PaginationContainer>
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
