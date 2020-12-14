import React, { useEffect } from 'react'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='container mt-5'>
            <h1 className='text-warning'>About</h1>
            <hr />
            <p>Bootleg Amazon is an Online marketplace to buy and sell locally! No need to visit a used car dealership or thrift store to find the best local deals! Here you’ll find a wide selection of used cars for sale, home goods, used electronics, vintage clothes, used furniture, used books, sports equipment, and real estate for sale or rent. It’s everything you can wish for!.</p>
            <p>It was build using React as the front end and Toby N Boudreaux API as back end.</p>

        </div>
    )
}

export default About;