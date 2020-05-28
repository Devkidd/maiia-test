import React from 'react'
import { AddItemToShop } from '../../redux/actions/shopAction'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import { Button } from './styles'

export const AddCart = ({product, AddItemToShop}) => {
    return (
        <>
            <Button onClick={() => AddItemToShop(product)}>
                <FontAwesomeIcon icon={faCartPlus} color='#673AB7' size='lg' style={{cursor: 'pointer'}}/>
            </Button>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    AddItemToShop
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCart)
