import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faSearch } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import Shop from '../Shop'
import InputSearch from '../InputSearch'

import { NavContainer, BasketIcon, Logo, Badge } from './styles'

export const Navbar = ({ shoplist }) => {
    const[isOpen, setIsOpen] = useState(false);
    return (
        <NavContainer>
            <Logo>MAIIA</Logo>
            <BasketIcon>
                <InputSearch />
                <FontAwesomeIcon icon={faSearch} size='1x' style={{marginRight: '16px'}} />
                <span style={{position: 'relative'}}>  
                    <FontAwesomeIcon icon={faShoppingBasket} size='1x' onClick={() => setIsOpen(!isOpen)}/>
                    { shoplist.length > 0 && (
                        <Badge>{shoplist.length}</Badge>
                    )}
                </span>
                <Shop isOpen={isOpen}/>
            </BasketIcon>     
        </NavContainer>
    )
}

const mapStateToProps = (state) => ({
    shoplist: state.shop.shopList
})

export default connect(mapStateToProps)(Navbar)

