import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SequencerTest from './components/sequencer/SequencerTest'

const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <SequencerTest />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
