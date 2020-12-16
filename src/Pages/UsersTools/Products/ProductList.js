import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'
import * as actionTypes from '../../../store/actionTypes'
import { useAlert } from 'react-alert'

import Product from './Product'



const ProductList = (props) => {

    const alert = useAlert()

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')

    const handleProductNameChange = (e) => {
        setProductName(e.target.value)
    }

    const handleProductPriceChange = (e) => {
        setProductPrice(e.target.value)
    }

    const handleProductDescriptionChange = (e) => {
        setProductDescription(e.target.value)
    }

    const handleAddProduct = (e) => {
        e.preventDefault()

        if (productName !== '' && productPrice !== '' && productDescription !== '') {
            const data = JSON.stringify({
                name: productName,
                price: productPrice,
                description: productDescription,
                seller_id: 1
            })

            Axios.post('http://localhost:8080/Amazon/items', data)
                .then(function (response) {
                    props.dispatchLoadItems(response.data)
                })
                .catch((error) => console.error('Error: ', error))

            setProductName('')
            setProductPrice('')
            setProductDescription('')
        } else {
            alert.show('Please verify all inputs')
        }
    }

    return (
        <div>
            <div className='row justify-content-center'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td> <input type='text' value={productName} onChange={(e) => handleProductNameChange(e)} className='form-control' placeholder='Name'></input> </td>
                            <td> <input type='text' value={productPrice} onChange={(e) => handleProductPriceChange(e)} className='form-control' placeholder='Price'></input> </td>
                            <td> <input type='text' value={productDescription} onChange={(e) => handleProductDescriptionChange(e)} className='form-control' placeholder='Description'></input> </td>
                            <td> <button className='btn btn-success btn-block' onClick={(e) => handleAddProduct(e)} ><FontAwesomeIcon icon={faPlus} /></button> </td>
                        </tr>

                        {
                            props.stateProducts.map((item) => (
                                <Product key={item.id} item={item} />
                            ))
                        }
                    </tbody>
                </table>
            </div >
        </div >
    );

}

const mapStateToProps = state => {
    return {
        stateProducts: state.products
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLoadItems: (items) => dispatch({ type: actionTypes.LOAD_ITEMS, payload: items })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)