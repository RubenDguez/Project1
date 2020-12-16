import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import LogInOutBTN from "./LogInOutBTN";
import UserAvatar from "./UserAvatar"

const navBar = (props) => {

  const [productId, setProductId] = useState('')

  const handleSearchOnChange = (e) => {
    setProductId(e.target.value)
  }

  const handleOnSubmitForm = (e) => {
    e.preventDefault()
    setProductId('')
  }

  return (
    <div>
      <div className='pl-3'>
        <UserAvatar userEmail={props.userEmail} />
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          Bootleg Amazon
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form onSubmit={(e) => handleOnSubmitForm(e)} className="form-inline my-2 my-lg-0">
            <input
              onChange={(e) => handleSearchOnChange(e)}
              value={productId}
              className="form-control mr-sm-2 input-sm"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <Link
              type='submit'
              className="btn btn-outline-light my-2 my-sm-0 "
              to={`/product/${productId}`}
              style={{ textDecoration: 'none' }}
              onClick={() => { setProductId('') }}
            >
              Search
            </Link>


            {/* This button will auto-render when user log status changes */}
            <LogInOutBTN />
          </form>
        </div>
      </nav>
    </div >
  );
};

const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.isUserLoggedIn,
    user: state.user,
  };
};

export default connect(mapStateToProps)(navBar);
