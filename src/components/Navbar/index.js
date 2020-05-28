import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faSearch } from '@fortawesome/free-solid-svg-icons'
import Shop from '../Shop'
import InputSearch from '../InputSearch'

import { NavContainer, BasketIcon, Logo } from './styles'

export default function Navbar() {
    const[isOpen, setIsOpen] = useState(false);
    return (
        <NavContainer>
            <Logo>MAIIA</Logo>
            <BasketIcon>
                <InputSearch />
                <FontAwesomeIcon icon={faSearch} size='1x' style={{marginRight: '16px'}} />
                <FontAwesomeIcon icon={faShoppingBasket} size='1x' onClick={() => setIsOpen(!isOpen)}/>
                <Shop isOpen={isOpen}/>
            </BasketIcon>     
        </NavContainer>
    )
}
