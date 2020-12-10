import Axios from 'axios'
import React, { useState } from 'react'

const SignInForm = () => {

    const [userState, setUserState] = useState(
        {
            email: "",
            password: ""
        }
    )

    const handleUserStateChange = (e) => {
        const { name, value } = e.target;
        setUserState(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const performRequest = () => {
        Axios.post('http://18.191.164.245:8080/Amazon/sessions', userState)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                if (err.response) {
                    console.log('response error: ' + err);
                } else {
                    console.log('other erroes' + err);
                }
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        performRequest();
    }

    return (
        <div className='card bg-light'>
            <div className='card-header'>Sign In to Bootleg Amazon</div>
            <div className='card-body'>

                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input name='email' value={userState.email} onChange={(e) => handleUserStateChange(e)} type='email' className='form-control' id='email' aria-describedby='emailHelp' placeholder='Enter email address' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input name='password' value={userState.password} onChange={(e) => handleUserStateChange(e)} type='password' className='form-control' id='password' aria-describedby='passwordHelp' placeholder='Enter password' />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>Log In</button>
                    </div>
                </form >

            </div>
        </div>
    )
}

export default SignInForm
