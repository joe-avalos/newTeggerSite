import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../pages/home'
import WWA from '../pages/wwa'
import WWD from '../pages/wwd'
import Benefits from '../pages/benefits'
import ToDo from './todo'
import {connect} from "react-redux";

class content extends Component{
  render() {
    return(
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/wwa" component={WWA}/>
        <Route path="/wwd" component={WWD}/>
        <Route path="/benefits" component={Benefits}/>
        <Route path="/blog" component={ToDo}/>
      </Switch>
    )
  }
}

export default connect()(content)
