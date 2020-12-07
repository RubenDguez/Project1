import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import About from './Pages/About'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer/Footer'
import Products from './Pages/Products'

const App = () => {
  return (
    <Router>
      <div className='px-5 pb-5 pt-4' style={{ backgroundColor: '#37474F' }}>
        <NavBar />
      </div>
      <div style={{ minHeight: '100vh' }}>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default App