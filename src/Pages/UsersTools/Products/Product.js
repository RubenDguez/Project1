import React from 'react'

const Product = (props) => {
    return (
        <tr>
            <th scope="row">{props.item.id}</th>
            <td>{props.item.name}</td>
            <td>{props.item.price}</td>
            <td>{props.item.description}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>

    )
}

export default Product