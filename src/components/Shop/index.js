import React, { useEffect } from 'react'
import { INIT_STATE } from '../../redux/types'
import { connect } from 'react-redux'
import Card from '../Card'
import RemoveCart from '../RemoveCart'
import EmptyCard from '../../assets/emptyCart.svg'

import { Container, CardContainer, EmptyCardImg, EmptyCardTitle} from './styles'

export const Shop = ({shoplist, dispatch, isOpen}) => {
    useEffect(() => {
        const shopListLocal = localStorage.getItem('panier');
        dispatch({
            type: INIT_STATE,
            payload: JSON.parse(shopListLocal),
        })
    }, [dispatch])
    return (
        <Container isOpen={isOpen}>
            { shoplist  && shoplist.map((item) => {
                return (
                    <CardContainer key={item.id}>
                        <Card product={item} />
                        {item.nb && <h5>({item.nb}) </h5>}
                        <RemoveCart product={item} />
                    </CardContainer>
                )
            })}
            {shoplist && shoplist.length === 0 && (
                <>
                <EmptyCardTitle>Panier vide</EmptyCardTitle>
                <EmptyCardImg src={EmptyCard} alt='empty cart'/>
                </>
            )}
        </Container>
    )
}

const mapStateToProps = (state) => ({
    shoplist: state.shop.shopList
})


export default connect(mapStateToProps)(Shop)
