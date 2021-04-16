import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/LoginRegister/Login'

import Sequencer from './components/sequencer/Sequencer'

const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Sequencer />
        </Route>

        <Route path='/login'>
          <Login/>
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App
