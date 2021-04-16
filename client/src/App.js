import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Sequencer from './components/sequencer/Sequencer'

const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Sequencer />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
