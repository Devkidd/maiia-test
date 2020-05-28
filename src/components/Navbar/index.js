import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import Shop from '../Shop'

import { NavContainer, BasketIcon, Logo } from './styles'

export default function Navbar() {
    const[isOpen, setIsOpen] = useState(false);
    return (
        <NavContainer>
            <Logo>MAIIA</Logo>
            <BasketIcon onClick={() => setIsOpen(!isOpen)} >
                <FontAwesomeIcon icon={faShoppingBasket}/>
                <Shop isOpen={isOpen}/>
            </BasketIcon>     
        </NavContainer>
    )
}
