import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import { NavContainer, BasketIcon } from './styles'

export default function Navbar() {
    return (
        <NavContainer>
            <h2>MAIIA</h2>
            <BasketIcon>
                <FontAwesomeIcon icon={faShoppingBasket}/>
            </BasketIcon>
        </NavContainer>
    )
}
