import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'

const App = () => (
  <div className="app" lang="EN">
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </div>
)

export default App
