import React from 'react'
import Item from './item'
import { Link } from 'react-router-dom'

const ItemList = (props) => {

  if (!props || props.length === 0) return <p>No items, sorry</p>

  return (
    <div>
      <div className='row justify-content-center'>
        {
          props.items.map((item) => (
            <div key={item.id}>
              <Link to={`/product/${item.id}`}>
                <Item name={item.name} price={item.price} description={item.description} />
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default ItemList
