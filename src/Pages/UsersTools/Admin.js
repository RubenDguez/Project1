import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

import UsersToolsProducts from '../UsersTools/UsersToolsProducts'
import UsersToolsUsers from '../UsersTools/UsersToolsUsers'

const Admin = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
        <a className="navbar-brand text-uppercase">{props.user.roleName}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/users/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users/users">Users</Link>
            </li>
          </ul>
        </div>
      </nav>

      {
        <div className='container mt-3 p-2'>
          <Route path='/users/products'>
            <UsersToolsProducts />
          </Route>
          <Route path='/users/users'>
            <UsersToolsUsers />
          </Route>
        </div>
      }

    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Admin)
