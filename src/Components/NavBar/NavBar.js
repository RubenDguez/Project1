import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actionTypes'
import Axios from 'axios'

const navBar = (props) => {
    let button;
    if (props.isUserLoggedIn) {
        button = <Link className='btn btn-outline-light ml-2 my-2 my-sm-0 ' onClick={() => handleLogOutButton()} to='/' role='button'>Log Out</Link>
    } else {
        button = <Link className='btn btn-outline-light ml-2 my-2 my-sm-0 ' to='/login' role='button'>Log In</Link>
    }

    let emailAddress;
    if (props.isUserLoggedIn) {
        emailAddress = <p className='text-right pr-3 text-warning'><small>Welcome: {props.user.email}</small></p>
    } else {
        emailAddress = ''
    }

    const handleLogOutButton = () => {

        window.sessionStorage.clear()
        props.onLogOut()

        // Due to CORS issues this secction has been skipped for now

        // Axios.delete('http://18.191.164.245:8080/Amazon/sessions',
        //     {
        //         headers: {}
        //     })
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })
        //     .catch(error => console.log(error))
    }

    return (
        <div>
            {/* This section will auto render if user is logged in */}
            {emailAddress}
            <nav className="navbar navbar-expand-lg navbar-dark">

                <a className="navbar-brand" href=''>Bootleg Amazon</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/products'>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">

                        <input className="form-control mr-sm-2 input-sm" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light my-2 my-sm-0 " type="submit">Search</button>

                        {/* This button will auto-render when user log status changes */}
                        {button}

                    </form>
                </div>
            </nav>
        </div>
    )
}

// Hooking up the props we need from the store
const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.isUserLoggedIn,
        user: state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch({ type: actionTypes.LOG_OUT })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(navBar);