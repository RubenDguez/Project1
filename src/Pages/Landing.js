import React, { useEffect } from 'react'
import ItemList from '../Components/Items/ItemList'
import Jumbotron from '../Components/Jumbotron/Jumbotron'
import Featured from '../Components/FeaturedProduct/Featured'
import SignUp from '../Components/SignUp/SignUp'

const Landing = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className='px-5 pb-5 pt-4 mb-3' style={{ backgroundColor: '#37474F' }}>
                <div className='container'>
                    <div className='mt-5 row'>
                        <div className='col'><Jumbotron /></div>
                        <div className='col'><SignUp /></div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <Featured />
                <ItemList items={props.items} />
            </div>
        </div>
    )
}

export default Landing