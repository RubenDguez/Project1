import React, { useEffect } from 'react'

import LogInForm from '../Components/LogIn/LogInForm'

const Login = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='container mt-5 p-5'>
            <LogInForm userState={props.userState} />
        </div>
    )
}

export default Login;