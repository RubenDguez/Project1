import React from 'react'
import Item from './item'

const List = (props) => {

  const { items } = props

  if (!items || items.length === 0) return <p>No items, sorry</p>

  return (
    <div>
      <h2 className='my-5'>Resently added items</h2>
      <div className='row justify-content-center'>
        {items.map(item => {
          return (
            <div key={item.id}>
              <Item name={item.name} price={item.price} description={item.description} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default List
