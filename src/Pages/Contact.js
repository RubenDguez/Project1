import React, { useEffect } from 'react'

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='container mt-5'>
            <h1 className='text-warning'>Contact</h1>
            <hr />

        </div>
    )
}

export default Contact