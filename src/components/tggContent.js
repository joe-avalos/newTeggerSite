import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../pages/home'
import WWA from '../pages/wwa'
import WWD from '../pages/wwd'
import Benefits from '../pages/benefits'
import GetIn from '../pages/getIn'
import Confirm from '../pages/confirm'
import Profile from '../pages/profile'
import Wallet from '../pages/wallet'
import Settings from '../pages/settings'
import SRQuestion from '../pages/srquestion'

export default function () {
  
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/wwa" component={WWA}/>
      <Route path="/wwd" component={WWD}/>
      <Route path="/benefits" component={Benefits}/>
      <Route path="/getin" component={GetIn}/>
      <Route path="/confirm" component={Confirm}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/wallet" component={Wallet}/>
      <Route path="/settings" component={Settings}/>
      <Route path="/question/:moduleCode" component={SRQuestion}/>
    </Switch>
  )
}
