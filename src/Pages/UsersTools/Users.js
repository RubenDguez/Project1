import React from "react";
import { connect } from "react-redux";

import * as userTypes from '../../store/userTypes'

import Admin from './Admin'
import Seller from './Seller'
import Buyer from '../Buyer'

const Users = (props) => {

    const role = String.prototype.toUpperCase.call(props.user.roleName === undefined ? '' : props.user.roleName);

    switch (role) {
        case userTypes.ADMIN:
            return (
                <Admin />
            )
        case userTypes.SELLER:
            return (
                <Seller />
            )
        case userTypes.BUYER:
            return (
                <Buyer />
            )
        default:
            return (
                <div className='container text-center mt-5'>
                    <div className="alert alert-danger" role="alert">
                        You need to be logged in as Administrator, Seller or Buyer to visit this page
                    </div>
                </div>
            )
    }

}


const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Users)
