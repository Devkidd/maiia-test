import React, { useEffect } from 'react'
import { INIT_STATE } from '../../redux/actions/types'
import { connect } from 'react-redux'
import Card from '../Card'
import RemoveCart from '../RemoveCart'

import { Container, CardContainer} from './styles'

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
            <h2>Panier</h2>
            { shoplist  && shoplist.map((item) => {
                return (
                    <CardContainer key={item.id}>
                        <Card product={item} />
                        {item.nb && <h5>({item.nb}) </h5>}
                        <RemoveCart product={item} />
                    </CardContainer>
                )
            })}
            {shoplist && shoplist.length === 0 && (<h6>Pas de produit</h6>)}
        </Container>
    )
}

const mapStateToProps = (state) => ({
    shoplist: state.shop.shopList
})


export default connect(mapStateToProps)(Shop)
