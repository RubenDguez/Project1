import React, { useEffect } from "react";
import { connect } from "react-redux";

const Buyer = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='container mt-5 text-center'>
            <h2 className='text-uppercase'>{props.user.roleName}</h2>
            <h3>Welcome: {props.user.emal}</h3>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Buyer)
