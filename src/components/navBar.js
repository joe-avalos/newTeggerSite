import React, {Component} from 'react'
import {
  AppBar,
  Tabs,
  Tab,
  Container,
  useScrollTrigger
} from "@material-ui/core"
import {navTabClicked} from "../modules/actions/navs";
import {connect} from "react-redux";
import {push} from 'connected-react-router'

function ElevationScroll(props) {
  const {children} = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
    style: {
      backgroundColor: (trigger ? "white" : "transparent")
    },
    className: (trigger ? "elevated" : "notElevated" )
  })
}

class navBar extends Component{
  constructor(props){
    super(props)
    this.handleTabClick = this.handleTabClick.bind(this)
  }
  
  handleTabClick(e,v){
    //this.props.store.dispatch(push(v))
    this.props.navTabClick(v)
  }
  render() {
    const {activeNav} = this.props
    
    return(
      <ElevationScroll {...this.props}>
        <AppBar position={"sticky"} style={{backgroundColor: "transparent"}}>
          <Container maxWidth="lg" className="appBarContainer">
            <Tabs value={activeNav} onChange={this.handleTabClick}>
              <Tab
                value="/"
                label={<img src="https://s3.amazonaws.com/files.tegger.io/assets/tegger/images/tegger-logo.svg" alt="Tegger Logo"/>}
              />
              <Tab label="Acerca De" value="/wwa" />
              <Tab label="Qué Hacemos" value="/wwd" />
              <Tab label="Beneficios" value="/benefits" />
              <Tab label="Blog" value="/blog"/>
            </Tabs>
          </Container>
        </AppBar>
      </ElevationScroll>
    )
  }
}
const mapStateToProps = state => {
  return {
    activeNav: state.navs.activeNav
  }
}
const mapDispatchToProps = dispatch => {
  return {
    navTabClick: activeNav => {
      dispatch(navTabClicked(activeNav))
      dispatch(push(activeNav))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(navBar)
