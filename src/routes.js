import React             from 'react'
import { Switch, Route } from 'react-router'
import App               from './App'
import NotFound          from './components/Notfound'

export default (
  <Switch>
    <Route path="/" component={App} />
    <Route path="*" component={NotFound} />
  </Switch>
)

