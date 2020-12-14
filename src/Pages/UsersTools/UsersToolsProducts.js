import React, { useEffect, Component } from 'react'
import { connect } from 'react-redux'

const UsersToolsProducts = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <hr />


        </div>
    )
}

const mapStateToProps = state => {
    return {
        stateProducts: state.products,
    };
}

export default connect(mapStateToProps)(UsersToolsProducts)