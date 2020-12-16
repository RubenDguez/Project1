import React, { useEffect } from 'react'
import ProductList from './Products/ProductList'

const UsersToolsProducts = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <h1 className='mb-5'>Products</h1>
            <ProductList />

        </div>
    )
}

const mapStateToProps = state => {
    return {
        stateProducts: state.products,
    };
}

export default UsersToolsProducts