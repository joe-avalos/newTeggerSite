import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import withStyles from '@material-ui/styles/withStyles'

import {useDispatch, useSelector} from "react-redux"
import {push} from 'connected-react-router'

import {TGGShop, TGGWallet, TGGProfile, TGGSettings, TGGLogout} from './tggIcons'
import '../stylesheets/components/navBar.scss'
import {loggedLogout} from '../modules/actions/loggedActions'

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

const NavBarTab = withStyles( (theme) => ({
  root:{
    height: 38,
    fontWeight:'600',
    '&:first-of-type':{
      width: 150,
      marginRight: theme.spacing(9)
    }
  }
}))(Tab)


const NavBarTabs = withStyles({
  indicator:{
    display: 'none'
  }
})(Tabs)

const NavRight = withStyles({
  root:{
    position: 'absolute',
    right: 0
  }
})(Box)

const MenuButton = withStyles({
  contained:{
    marginRight: 0,
    paddingRight: 5,
    "& .MuiButton-label svg:first-of-type":{
      left: -20,
      height: 20
    },
    "& .MuiButton-label p:first-of-type":{
      marginLeft: 7
    }
  }
})(Button)

const MobileNavList = withStyles({
  root:{
    width: '100%'
  }
})(List)

export default function (props) {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const loggedIn = useSelector(state => state.logged.profile.uuid) !== ''
  const profile = useSelector(state => state.logged.profile)
  const [activeNav, setActiveNav] = React.useState(loggedIn ? '/profile':'/')
  const [anchorEl, setAnchorEl] = React.useState(null)
  const MenuOpen = Boolean(anchorEl)
  const staticPages = window.location.pathname === '/' ||
    window.location.pathname === '/wwa' ||
    window.location.pathname === '/wwd' ||
    window.location.pathname === '/benefits'

  function handleTabClick(e,v){
    setActiveNav(v)
    dispatch(push(v))
    setOpen(false)
  }

  function handleExpandToggle(){
    setOpen(!open)
  }

  function handleMenu(e) {
    setAnchorEl(e.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }
  
  function handleLogout() {
    handleClose()
    dispatch(loggedLogout())
  }

  return(
    <ElevationScroll {...props}>
      <AppBar position={"sticky"} style={{backgroundColor: "transparent"}}>
          <Hidden mdDown>
        <Container maxWidth="lg" className="appBarContainer">
          <NavBarTabs value={activeNav} onChange={handleTabClick}>
            <NavBarTab
              value={loggedIn ? '/profile' : '/'}
              label={<img src="https://files.tegger.io/assets/tegger/images/tegger-logo.svg" alt="Tegger Logo"/>}
            />
            {staticPages && <NavBarTab label="Acerca De" value="/wwa" />}
            {staticPages && <NavBarTab label="Qué Hacemos" value="/wwd" />}
            {staticPages && <NavBarTab label="Beneficios" value="/benefits" />}
            {staticPages && <NavBarTab label="Blog" value="/blog/"/>}
          </NavBarTabs>
          {!loggedIn &&
            <NavRight component="div">
              <Button href="/getin">Get in</Button>
            </NavRight>
          }
          {loggedIn &&
            <NavRight component="div">
              <IconButton href="/marketplace">
                <TGGShop />
              </IconButton>
              <IconButton href="/wallet">
                <TGGWallet />
              </IconButton>
              <Button variant={'contained'} onClick={handleMenu}>
                <Avatar>{profile.name.substr(0,2)}</Avatar>
                <Typography>{profile.name}</Typography>
              </Button>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                getContentAnchorEl={null}
                open={MenuOpen}
                onClose={handleClose}
                >
                <MenuItem onClick={handleClose}>
                  <MenuButton variant={'contained'} href="/profile">
                    <TGGProfile/>
                    <Typography variant={'body2'}>Profile</Typography>
                  </MenuButton>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <MenuButton variant={'contained'} href="/settings">
                  <TGGSettings/>
                  <Typography variant={'body2'}>Settings</Typography>
                  </MenuButton>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <MenuButton variant={'contained'}>
                  <TGGLogout/>
                  <Typography variant={'body2'}>Logout</Typography>
                  </MenuButton>
                </MenuItem>
              </Menu>
            </NavRight>
          }
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
              <MobileNavList component="nav">
                {staticPages ?
                  <>
                    <ListItem>
                      <ListItemText
                        onClick={e => handleTabClick(e, '/')}
                        primary={'Inicio'}/>
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        onClick={e => handleTabClick(e,'/wwa')}
                        primary="Acerca De"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        onClick={e => handleTabClick(e,'/wwd')}
                        primary="Qué Hacemos" />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        onClick={e => handleTabClick(e,'/benefits')}
                        primary="Beneficios" />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        onClick={e => handleTabClick(e,'/blog/')}
                        primary="Blog" />
                    </ListItem>
                    {!loggedIn &&
                      <ListItem>
                        <Button href="/getin">Get In!</Button>
                      </ListItem>
                    }
                  </>
                  :
                  <>
                    <ListItem>
                      <Avatar>{profile.name.substr(0,2)}</Avatar>
                      <Typography>{profile.name}</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <MenuButton fullWidth href="/profile" variant={'contained'} onClick={handleExpandToggle}>
                        <TGGProfile/>
                        <Typography variant={'body2'}>Profile</Typography>
                      </MenuButton>
                    </ListItem>
                    <ListItem>
                      <MenuButton fullWidth href="/wallet" variant={'contained'} onClick={handleExpandToggle}>
                        <TGGWallet />
                        <Typography variant={'body2'}>Wallet</Typography>
                      </MenuButton>
                    </ListItem>
                    <ListItem>
                      <MenuButton fullWidth href="/marketplace" variant={'contained'} onClick={handleExpandToggle}>
                        <TGGWallet />
                        <Typography variant={'body2'}>Marketplace</Typography>
                      </MenuButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <MenuButton fullWidth href="/settings" variant={'contained'} onClick={handleExpandToggle}>
                        <TGGSettings />
                        <Typography variant={'body2'}>Settings</Typography>
                      </MenuButton>
                    </ListItem>
                    <ListItem>
                      <MenuButton fullWidth href="/logout" variant={'contained'} onClick={handleExpandToggle}>
                        <TGGLogout />
                        <Typography variant={'body2'}>Logout</Typography>
                      </MenuButton>
                    </ListItem>
                  </>
                }
              </MobileNavList>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Hidden>
      </AppBar>
    </ElevationScroll>
  )
}
