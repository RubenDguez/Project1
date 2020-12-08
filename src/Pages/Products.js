import React from 'react'
import ItemList from '../Components/Items/ItemList'
import Banner from '../Components/Banner/Banner'

const Products = (props) => {
    return (
        <div className='container text-center' >
            <Banner title={'all you need'} subtitle={'Customer-loved brands'} message={'4+ star fashion with hundreds of reviews'} />
            <ItemList items={props.items} />
        </div>
    )
}

export default Products