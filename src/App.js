import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actionTypes from './store/actionTypes'

import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Products from "./Pages/Products";
import SignIn from "./Pages/Login";
import Users from "./Pages/UsersTools/Users";
import ProductByID from './Pages/ProductByID'

import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

import './index.css'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('http://18.191.164.245:8080/Amazon/items')
      .then(response => response.json())
      .then(data => this.props.dispatchLoadItems(data));
  }

  render() {
    return (
      <Router>
        <div className="px-5 pb-5 pt-4" style={{ backgroundColor: "#37474F" }}>
          <NavBar />
        </div>

        <div id="showCase" style={{ minHeight: "100vh" }}>
          <Switch>
            <Route exact path="/">
              <Landing items={this.props.stateProducts} />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/products">
              <Products items={this.props.stateProducts} />
            </Route>

            <Route path="/login">
              <SignIn />
            </Route>

            <Route path="/users">
              <Users />
            </Route>

            <Route path='/product/:handle' component={ProductByID} />

          </Switch>
        </div>

        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    stateProducts: state.products,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadItems: (initialData) => dispatch({
      type: actionTypes.LOAD_ITEMS, payload: initialData
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
