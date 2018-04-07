import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch, Route} from 'react-router'
import App from './App'
import NotFound from './components/Notfound'

render(
    <Router>
      <Switch>
        <Route path="/" component={App}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
  ,
  document.getElementById('root')
)

