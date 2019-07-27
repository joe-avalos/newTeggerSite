import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../pages/home'
import WWA from '../pages/wwa'
import WWD from '../pages/wwd'
import Benefits from '../pages/benefits'
import GetIn from '../pages/getIn'
import Confirm from '../pages/confirm'
import Profile from '../pages/profile'
import SRQuestion from '../pages/srquestion'
import ToDo from './todo'

export default function TggContent() {
  
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/wwa" component={WWA}/>
      <Route path="/wwd" component={WWD}/>
      <Route path="/benefits" component={Benefits}/>
      <Route path="/blog" component={ToDo}/>
      <Route path="/getin" component={GetIn}/>
      <Route path="/confirm" component={Confirm}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/question/:questionCode" component={SRQuestion}/>
    </Switch>
  )
}
