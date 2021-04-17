import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/LoginRegister/Login'
import Register from './components/LoginRegister/Register'
import NavBar from './components/Nav_and_Footer/NavBar'

import Sequencer from './components/sequencer/Sequencer'

const App = () => {


  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>

        <Route exact path="/">
          <Sequencer />
        </Route>

        <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/register'>
          <Register/>
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App
