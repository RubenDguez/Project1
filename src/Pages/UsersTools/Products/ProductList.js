import React from 'react'
import { connect, content } from 'react-redux'

import Product from './Product'

const ProductList = (props) => {

    if (!props || props.length === 0) return <p>No products to show, sorry</p>

    return (
        <div>
            <div className='row justify-content-center'>
                {
                    props.stateProducts.map((item) => (

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <div key={item.id}>
                                    <Product item={item} />
                                </div>
                            </tbody>
                        </table>


                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stateProducts: state.products,
    };
}

export default connect(mapStateToProps)(ProductList)