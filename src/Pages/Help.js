import React, { useEffect } from 'react'

const Help = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='container mt-5'>
            <h1 className='text-warning'>Help</h1>
            <hr />
        </div>
    )
}

export default Help