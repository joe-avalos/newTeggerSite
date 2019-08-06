import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import CircularProgress from '@material-ui/core/CircularProgress'
import withStyles from '@material-ui/styles/withStyles'
import Privacy from '../components/content/privacy'
import Terms from '../components/content/terms'
import Help from '../components/content/help'
import UserProfileForm from '../components/forms/userProfileForm'
import {useDispatch, useSelector} from 'react-redux'
import {loggedFetchProfile} from '../modules/actions/loggedActions'
import Hidden from '@material-ui/core/Hidden'


/*const BoxHeader = withStyles({
  root:{
    background: '#ededed',
    width: '100%',
    position: 'absolute',
    left: '0',
    display: 'block',
    height: '240px',
    top: '70px',
    padding: '50px 250px',
 }
})(Box)*/

const TypographySettings = withStyles({
  root: {
    color: '#5F5F5F',
    textTransform: 'none',
    fontSize: '1.125rem',
  }
})(Typography)

const TabsSettings = withStyles({
  root: {
    borderBottom: '1px solid #b8b8b8',
    marginTop: 'auto 60px 0'
  }
})(Tabs)

export default function () {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.logged.isLoading)
  //const loggedError = useSelector(state => state.logged.loggedError)
  const profile = useSelector(state => state.logged.profile)
  const langSettings = useSelector(state => state.language.langJson.settings)
  
  React.useEffect(() => {
    if (profile.uuid === '') {
      dispatch(loggedFetchProfile())
    }
  })
  const [tabValue, setTabValue] = React.useState(0)
  
  function handleTabChange(e, v) {
    setTabValue(v)
  }
  
  //TODO tabs fullwidth scroll
  return (
    <Container maxWidth="md" className="contentContainer">
      <Grid container>
        <Grid item xs={12} style={{paddingTop: 50}}>
          <Box className="background questionBG"/>
          <Typography variant={'h3'}>
            {langSettings.title}
          </Typography>
          <Typography variant={'h2'}>
            {langSettings.subTitle}
          </Typography>
        </Grid>
        <Grid item xs={12} style={{marginTop: '100px', marginBottom: '30px'}}>
          
          <TabsSettings
            value={tabValue}
            onChange={handleTabChange}
            variant={'scrollable'}
            scrollButtons={'auto'}
          >
            <Tab label={<TypographySettings variant={'body1'}>{langSettings.tabs[0]}</TypographySettings>}/>
            <Tab label={<TypographySettings variant={'body1'}>{langSettings.tabs[1]}</TypographySettings>}/>
            <Tab label={<TypographySettings variant={'body1'}>{langSettings.tabs[2]}</TypographySettings>}/>
            <Tab label={<TypographySettings variant={'body1'}>{langSettings.tabs[3]}</TypographySettings>}/>
          </TabsSettings>
        </Grid>
        <Grid container style={{marginTop: 40, margin: 'auto'}}>
          <Hidden mdDown>
            <Grid item md={1}/>
          </Hidden>
          <Grid item xs={12} style={{marginBottom: 40}}>
            {
              isLoading
                ? <CircularProgress/>
                : tabValue === 0
                ? <>
                    <UserProfileForm profile={profile}/>
                  </>
                : tabValue === 1
                ? <>
                    <Typography variant={'h3'}>{langSettings.tabs[1]}</Typography>
                    <Privacy/>
                  </>
                : tabValue === 2
                ? <>
                    <Typography variant={'h3'}>{langSettings.tabs[2]}</Typography>
                    <Terms/>
                  </>
                : <>
                    <Typography variant={'h3'}>{langSettings.tabs[3]}</Typography>
                    <Help/>
                  </>
            }
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
