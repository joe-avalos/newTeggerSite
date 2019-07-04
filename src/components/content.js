import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../pages/home'
import ToDo from './todo'
import {connect} from "react-redux";

class content extends Component{
  render() {
    return(
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/wwa" component={ToDo}/>
      </Switch>
    )
  }
}

export default connect()(content)
