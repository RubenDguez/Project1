import React from 'react'

const signUp = () => {
    return (
        <div className='card'>
            <div className='card-body px-5 py-4'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='inputUsername'>Username</label>
                        <input type='email' className='form-control' id='inputUsername' aria-describedby='usernameHelp' placeholder='Enter username' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='inputEmail'>Email address</label>
                        <input type='email' className='form-control' id='inputEmail' aria-describedby='emailHelp' placeholder='Enter email' />
                        <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='inputPassword'>Password</label>
                        <input type='password' className='form-control' id='inputPassword' placeholder='Password' />
                    </div>
                    <div className='form-group'>
                        <p>Make sure it's at least 15 characters OR at leaset 8 characters including a number and a lowercase letter.</p>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary btn-lg btn-block pa-5'>Sign up for Bootleg Amazon</button>
                    </div>
                    <div className='form-group'>
                        <small>By clicking “Sign up for Bootleg Amazon”, you agree to our Terms of Service and Privacy Statement. We’ll occasionally send you account related emails.</small>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default signUp