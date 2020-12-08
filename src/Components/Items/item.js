import React from 'react'
import img from '../../img/blank.svg'

const item = props => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return (
    <div className='col-sm-6 card-goup'>
      <div className='card mb-5' style={{ width: '21.7rem' }}>
        <img className='card-img-top' src={img} alt='Card cap' />
        <div className='card-body' style={{ height: '15rem', maxheight: '15rem', overflow: 'hidden' }}>
          <h5 className='card-title'>{props.name}</h5>
          <p className='card-text'>{props.description}</p>
        </div>
        <div className='card-footer '>
          <div className='row'>
            <div className='col'>
              <p className='card-text align-middle'>{formatter.format(props.price)}</p>
            </div>
            <div className='col text-right'>
              <button className="btn btn-warning btn-sm align-middle" type="submit">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default item
