import React, {Component} from 'react'
import {useScrollTrigger} from "@material-ui/core"
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Container from "@material-ui/core/Container"
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import MenuIcon from '@material-ui/icons/Menu'
import {connect} from "react-redux"
import {push} from 'connected-react-router'
import {navTabClicked, navExpandClick} from "../modules/actions/navs"
import '../stylesheets/components/navBar.scss'

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
    this.handleExpandToggle = this.handleExpandToggle.bind(this)
  }
  
  handleTabClick(e,v){
    this.props.navTabClick(v)
  }
  
  handleExpandToggle(){
    this.props.navExpandClick(this.props.open)
  }
  render() {
    const {activeNav, open} = this.props
    
    return(
      <ElevationScroll {...this.props}>
        <AppBar position={"sticky"} style={{backgroundColor: "transparent"}}>
            <Hidden mdDown>
          <Container maxWidth="lg" className="appBarContainer">
              <Tabs value={activeNav} onChange={this.handleTabClick}>
                <Tab
                  value="/"
                  label={<img src="https://files.tegger.io/assets/tegger/images/tegger-logo.svg" alt="Tegger Logo"/>}
                />
                <Tab label="Acerca De" value="/wwa" />
                <Tab label="Qué Hacemos" value="/wwd" />
                <Tab label="Beneficios" value="/benefits" />
                <Tab label="Blog" value="/blog"/>
              </Tabs>
          </Container>
            </Hidden>
            <Hidden lgUp>
              <ExpansionPanel
                square={true}
                expanded={open}
                onChange={this.handleExpandToggle}
              >
                <ExpansionPanelSummary
                  expandIcon={<MenuIcon />}
                  anchor="top"
                >
                  <img
                    src="https://files.tegger.io/assets/tegger/images/tegger-logo.svg"
                    alt="Tegger Logo"
                    className="responsiveLogo"
                  />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <List component="nav">
                  <ListItem>
                    <ListItemText onClick={e => {
                      this.handleExpandToggle()
                      this.handleTabClick(e,'/')
                    }} primary="Inicio"/>
                  </ListItem>
                  <ListItem>
                    <ListItemText onClick={e => {
                      this.handleExpandToggle()
                      this.handleTabClick(e,'/wwa')
                    }} primary="Acerca De"/>
                  </ListItem>
                  <ListItem>
                    <ListItemText onClick={e => {
                      this.handleExpandToggle()
                      this.handleTabClick(e,'/wwd')
                    }} primary="Qué Hacemos" />
                  </ListItem>
                  <ListItem>
                    <ListItemText onClick={e => {
                      this.handleExpandToggle()
                      this.handleTabClick(e,'/benefits')
                    }} primary="Beneficios" />
                  </ListItem>
                  <ListItem>
                    <ListItemText onClick={e => {
                      this.handleExpandToggle()
                      this.handleTabClick(e,'/blog')
                    }} primary="Blog" />
                  </ListItem>
                </List>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Hidden>
        </AppBar>
      </ElevationScroll>
    )
  }
}
const mapStateToProps = state => {
  return {
    activeNav: state.navs.activeNav,
    open: state.navs.open
  }
}
const mapDispatchToProps = dispatch => {
  return {
    navTabClick: activeNav => {
      dispatch(navTabClicked(activeNav))
      dispatch(push(activeNav))
    },
    navExpandClick: open => {
      dispatch(navExpandClick(open))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(navBar)
