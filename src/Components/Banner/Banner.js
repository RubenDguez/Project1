import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './Banner.css'

library.add(fas)

const Banner = (props) => {

    return (
        <div className='Banner'>
            <div className='wrapper'>
                <p className='text-uppercase title'>{props.title}</p>
                <p className='text-uppercase subtitle'>{props.subtitle}</p>
                <div className='starSection'>
                    <FontAwesomeIcon className='star' icon={['fas', 'star']} />
                    <FontAwesomeIcon className='star' icon={['fas', 'star']} />
                    <FontAwesomeIcon className='star' icon={['fas', 'star']} />
                    <FontAwesomeIcon className='star' icon={['fas', 'star']} />
                    <FontAwesomeIcon className='star' icon={['fas', 'star-half']} />
                </div>
                <p>{props.message}</p>
            </div>
        </div>
    )

}

export default Banner