import React, { useEffect, useState } from 'react'
import List from '../Components/Items/Items'
import withListLoading from '../Components/Items/listLoading'
import Banner from '../Components/Banner/Banner'

const Products = () => {
    const ListLoading = withListLoading(List)
    const [prodState, setProdState] = useState({
        loading: false,
        items: null,
        images: null
    })

    useEffect(() => {
        setProdState({ loading: true })
        const apiUrl = "http://18.191.164.245:8080/Amazon/items"
        fetch(apiUrl)
            .then(res => res.json())
            .then(items => {
                setProdState({ loading: false, items: items })
            })
    }, [setProdState])


    return (
        <div className='container text-center'>
            <Banner title={'all you need'} subtitle={'Customer-loved brands'} message={'4+ star fashion with hundreds of reviews'} />
            <ListLoading isLoading={prodState.loading} items={prodState.items} />
        </div>
    )
}

export default Products