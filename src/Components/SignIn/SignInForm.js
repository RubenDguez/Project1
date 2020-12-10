import Axios from 'axios'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actionTypes'

const SignInForm = (props) => {

    // local store
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [showSuccessLogIn, setShowSuccessLogIn] = useState(false)

    let errorMessage;
    if (showErrorMessage) {
        errorMessage = <div className="alert alert-danger" role="alert">Error: something went wrong with your email address and/or password!!!</div>
    } else {
        errorMessage = ''
    }

    let logInMessage;
    if (showSuccessLogIn) {
        logInMessage = <div className="alert alert-success" role="alert">Log in Success: you are now logged in as {props.emailAddress}!!!</div>
    } else {
        logInMessage = ''
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://18.191.164.245:8080/Amazon/sessions', { email: userEmail, password: userPassword })
            .then(res => {
                if (res.data === "<h2>Welcome null!</h2>") {
                    setShowErrorMessage(true)
                    setShowSuccessLogIn(false)
                } else {
                    props.onSuccessLogIn(userEmail)
                    setShowSuccessLogIn(true)
                    setShowErrorMessage(false)
                    setUserEmail('')
                    setUserPassword('')

                }
            }).catch(
                res => {
                    console.log(res)
                }
            )
    }

    const handleUserEmailChange = (e) => {
        setUserEmail(e.target.value)
    }

    const handleUserPasswordChange = (e) => {
        setUserPassword(e.target.value)
    }

    return (
        <div>
            {errorMessage}
            {logInMessage}
            <div className='card bg-light'>
                <div className='card-header'>Sign In to Bootleg Amazon</div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input value={userEmail} onChange={(e) => handleUserEmailChange(e)} type='email' className='form-control' id='email' aria-describedby='emailHelp' placeholder='Enter email address' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input value={userPassword} onChange={(e) => handleUserPasswordChange(e)} type='password' className='form-control' id='password' aria-describedby='passwordHelp' placeholder='Enter password' />
                        </div>
                        <div className='form-group'>
                            <button type='submit' className='btn btn-primary'>Log In</button>
                        </div>
                    </form >

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        emailAddress: state.emailAddress
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSuccessLogIn: (uEmail) => dispatch({ type: actionTypes.USCCESS_LOG_IN, payload: uEmail })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
