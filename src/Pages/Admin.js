import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

const Admin = (props) => {

  if (props.user.role === 'Admin') {
    return (
      <div className='container mt-5'>
        <h1>This is the Admin Page</h1>

      </div>
    )
  } else {
    return (
      <div className='container mt-5 text-center'>
        <div className="alert alert-warning" role="alert">
          You need to be logged in as an Administrator to have access to this page. Please <Link className='font-italic font-weight-bold' to='/login'>log in</Link> with Administrator credentials.
        </div>
      </div>
    )

  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Admin)
