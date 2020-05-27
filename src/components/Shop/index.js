import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Card from '../Card'

import { Container } from './styles'

export const Shop = () => {
    const [shopList, setShopList] = useState([])
    const getItemShop = () => {
        setShopList(JSON.parse(localStorage.getItem('panier')))
    }

    useEffect(() => {
        getItemShop()
    }, [])
    console.log('shoplist', shopList)
    return (
        <Container>
            <h2>Panier</h2>
            { /* shopList.map((item) => {
                console.log(item)
                return (
                    <section key={item.id}>
                        <Card product={item} />
                    </section>
                )
                */})}
        </Container>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
