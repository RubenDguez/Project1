import React from 'react'

import SignInForm from '../Components/LogIn/LogInForm'

const Login = (props) => {
    return (
        <div className='container mt-5 p-5'>
            <SignInForm userState={props.userState} />
        </div>
    )
}

export default Login;