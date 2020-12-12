import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actionTypes'

const LogInOutBTN = (props) => {

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
