import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import About from './Pages/About'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer/Footer'
import Products from './Pages/Products'

class App extends Component {

  state = {
    items: []
  }

  componentDidMount() {
    fetch('http://18.191.164.245:8080/Amazon/items')
      .then(res => res.json())
      .then((data) => {
        this.setState({ items: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <Router>
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
          </Switch>
        </div>
        <Footer />
      </Router >
    )
  }
}

export default App