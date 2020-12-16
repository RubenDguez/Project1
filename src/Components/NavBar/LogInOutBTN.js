import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actionTypes'
import Axios from 'axios'

const LogInOutBTN = (props) => {

    const handleLogOutButton = () => {

        fetch('http://localhost:8080/Amazon/sessions', { method: 'DELETE' })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => console.log(error))

        window.sessionStorage.clear()
        props.onLogOut()
    }


    let button

    if (props.isUserLoggedIn) {
        button = <Link className='btn btn-outline-light ml-2 my-2 my-sm-0 ' onClick={() => handleLogOutButton()} to='/' role='button'>Log Out</Link>
    } else {
        button = <Link className='btn btn-outline-light ml-2 my-2 my-sm-0 ' to='/login' role='button'>Log In</Link>
    }

    return (
        button
    )
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.isUserLoggedIn,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch({ type: actionTypes.LOG_OUT })
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LogInOutBTN)
