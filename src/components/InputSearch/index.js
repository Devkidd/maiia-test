import React, { useState } from 'react'
import {SearchProducts, fetchProducts} from '../../redux/products/productsAction'
import { connect } from 'react-redux'

import { Input } from './styles'

export const InputSearch = ({products, SearchProducts}) => {

    const [search, setSearch] = useState(null)

    const handleSearch = (e) => {
        console.log(products.length)
        e.preventDefault();
        setSearch(e.target.value)
        SearchProducts(search)
    }

    return (
        <>
            <Input type='text' placeholder='votre recherche..' onChange={handleSearch} />
        </>
    )
}

const mapStateToProps = (state) => ({
    products: state.products.productsList,
})

const mapDispatchToProps = {
    SearchProducts,
    fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch)
