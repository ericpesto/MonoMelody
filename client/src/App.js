import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Gallery from './components/Gallery/Gallery'
import HomePage from './components/Home/HomePage'
import Login from './components/LoginRegister/Login'
import Register from './components/LoginRegister/Register'
import Footer from './components/Nav_and_Footer/Footer'
import NavBar from './components/Nav_and_Footer/NavBar'
import Sequencer from './components/sequencer/Sequencer'

const App = () => {


  return (
         
    <BrowserRouter>
      <NavBar/>
      <Switch>

        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/register'>
          <Register/>
        </Route>

        <Route path='/gallery'>
          <Gallery/>
        </Route>

        <Route path='/create'> 
          <Sequencer />
        </Route>

      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
