import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Landing from './Pages/Landing'
import About from './Pages/About'
import Products from './Pages/Products'
import SignIn from './Pages/Login'

import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get('http://18.191.164.245:8080/Amazon/items')
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }

  render() {
    return (
      < Router >
        <div className='px-5 pb-5 pt-4' style={{ backgroundColor: '#37474F' }}>
          <NavBar />
        </div>
        <div style={{ minHeight: '100vh' }}>
          <Switch>
            <Route exact path='/'>
              <Landing items={this.state.items} />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/products'>
              <Products items={this.state.items} />
            </Route>
            <Route path='/login'>
              <SignIn />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router >
    )
  }
}

export default App;

