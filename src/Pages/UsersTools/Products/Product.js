import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons'
import { useAlert } from 'react-alert'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import * as actionTypes from '../../../store/actionTypes'
import Axios from 'axios'

const Product = (props) => {

    const alert = useAlert()

    const [id, setId] = useState(props.item.id)
    const [name, setName] = useState(props.item.name)
    const [price, setPrice] = useState(props.item.price)
    const [description, setDescription] = useState(props.item.description)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    const handleOptionsYes = () => {
        Axios.delete(`http://localhost:8080/Amazon/items/${id}`)
            .then(function (response) {
                props.dispatchLoadItems(response.data)
            })
            .catch((error) => console.error('Error: ', error));
    }

    const options = {
        title: 'Confirm to Delete',
        message: 'Are you sure you want to delete: ' + props.item.name + '?',
        buttons: [
            {
                label: 'Yes',
                onClick: () => handleOptionsYes()
            },
            {
                label: 'No',
                //onClick: () => handleOptionsNo()
            }
        ],
        closeOnEscape: true,
        closeOnClickOutside: true,
        willUnmount: () => { },
        afterClose: () => { },
        onClickOutside: () => { },
        onKeypressEscape: () => { }
    }

    const handleOnDeleteButton = (e) => {
        e.preventDefault()
        confirmAlert(options)
    }

    const handleOnNameChange = (e) => {
        setName(e.target.value)
    }

    const handleOnPriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handleOnDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleOnItemUpdate = (e) => {
        e.preventDefault()
        const data = JSON.stringify(
            {
                name: name,
                price: price,
                description: description,
                seller_id: 2
            }
        )
        Axios.put(`http://localhost:8080/Amazon/items/${id}`, data)
            .then(function (response) {
                props.dispatchLoadItems(response.data)
            })
            .catch((error) => console.error('Error: ', error));

        alert.show(`Item: ${name} has been updated`)
    }

    return (
        <tr>
            <th scope="row">{id}</th>
            <td><input value={name} className='form-control' onChange={(e) => handleOnNameChange(e)}></input></td>
            <td><input value={price} className='form-control' onChange={(e) => handleOnPriceChange(e)}></input> </td>
            <td><input value={description} className='form-control' onChange={(e) => handleOnDescriptionChange(e)}></input></td>
            <td className='text-right'>
                <button className="btn mr-1 btn-sm" type="button" onClick={(e) => handleOnItemUpdate(e)}><FontAwesomeIcon icon={faCheck} /> </button>
                <button className="btn mr-1 btn-sm" onClick={(e) => handleOnDeleteButton(e)}> <FontAwesomeIcon icon={faBan} /> </button>
            </td>

        </tr>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLoadItems: (initialData) => dispatch({
            type: actionTypes.LOAD_ITEMS, payload: initialData
        })
    };
}

export default connect(null, mapDispatchToProps)(Product)