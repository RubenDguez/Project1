import React, { useEffect, Component } from 'react'
import ProductList from './Products/ProductList'

const UsersToolsProducts = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <hr />
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