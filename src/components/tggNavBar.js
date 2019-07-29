import React from 'react'
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
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
import {useDispatch} from "react-redux"
import {push} from 'connected-react-router'
import '../stylesheets/components/navBar.scss'
import withStyles from '@material-ui/styles/withStyles'

function ElevationScroll(props) {
  const {children} = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
    style: {
      backgroundColor: (trigger ? "white" : "white")
    },
    className: (trigger ? "elevated" : "notElevated" )
  })
}

const NavBarTab = withStyles( (theme) => ({
  root:{
    height: 38,
    '&:first-of-type':{
      width: 150,
      marginRight: theme.spacing(9)
    }
  }
}))(Tab)

export default function (props) {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const [activeNav, setActiveNav] = React.useState('/')

  function handleTabClick(e,v){
    setActiveNav(v)
    dispatch(push(v))
    setOpen(false)
  }

  function handleExpandToggle(){
    setOpen(!open)
  }

  return(
    <ElevationScroll {...props}>
      <AppBar position={"sticky"} style={{backgroundColor: "transparent"}}>
          <Hidden mdDown>
        <Container maxWidth="lg" className="appBarContainer">
            <Tabs value={activeNav} onChange={handleTabClick}>
              <NavBarTab
                value="/"
                label={<img src="https://files.tegger.io/assets/tegger/images/tegger-logo.svg" alt="Tegger Logo"/>}
              />
              <NavBarTab label="Acerca De" value="/wwa" />
              <NavBarTab label="Qué Hacemos" value="/wwd" />
              <NavBarTab label="Beneficios" value="/benefits" />
              <NavBarTab label="Blog" value="/blog"/>
            </Tabs>
        </Container>
          </Hidden>
          <Hidden lgUp>
            <ExpansionPanel
              square={true}
              expanded={open}
              onChange={handleExpandToggle}
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
                    handleTabClick(e,'/')
                  }} primary="Inicio"/>
                </ListItem>
                <ListItem>
                  <ListItemText onClick={e => {
                    handleTabClick(e,'/wwa')
                  }} primary="Acerca De"/>
                </ListItem>
                <ListItem>
                  <ListItemText onClick={e => {
                    handleTabClick(e,'/wwd')
                  }} primary="Qué Hacemos" />
                </ListItem>
                <ListItem>
                  <ListItemText onClick={e => {
                    handleTabClick(e,'/benefits')
                  }} primary="Beneficios" />
                </ListItem>
                <ListItem>
                  <ListItemText onClick={e => {
                    handleTabClick(e,'/blog')
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
