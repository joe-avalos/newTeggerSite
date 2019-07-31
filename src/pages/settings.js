import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import CircularProgress from '@material-ui/core/CircularProgress'

import Privacy from '../components/content/privacy'
import Terms from '../components/content/terms'
import Help from '../components/content/help'
import UserProfileForm from '../components/forms/userProfileForm'
import {useDispatch, useSelector} from 'react-redux'
import {loggedFetchProfile} from '../modules/actions/loggedActions'

export default function () {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.logged.isLoading)
  const loggedError = useSelector(state => state.logged.loggedError)
  const profile = useSelector(state => state.logged.profile)
  
  React.useEffect(() => {
    if (profile.uuid === ''){
      dispatch(loggedFetchProfile())
    }
  })
  const [tabValue, setTabValue] = React.useState(0)
  function handleTabChange(e, v) {
    setTabValue(v)
  }
  return (
    <Container maxWidth="md" className="contentContainer">
      <Box className="background profileBG" />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant={'h3'}>
            Configuración
          </Typography>
          <Typography variant={'h2'}>
            Edita tu información
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant={'fullWidth'}
          >
            <Tab label={<Typography variant={'body1'}>Usuario y Contraseña</Typography>} />
            <Tab label={<Typography variant={'body1'}>Privacidad</Typography>} />
            <Tab label={<Typography variant={'body1'}>Términos y condiciones</Typography>} />
            <Tab label={<Typography variant={'body1'}>Ayuda</Typography>} />
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          {
            isLoading ?
              <CircularProgress/>
            : tabValue === 0 ?
              <>
                <Typography variant={'h3'}>Usuario y Contraseña</Typography>
                <UserProfileForm profile={profile} />
              </>
            : tabValue === 1 ?
              <>
                <Typography variant={'h3'}>Privacidad</Typography>
                <Privacy/>
              </>
            : tabValue === 2 ?
              <>
                <Typography variant={'h3'}>Términos y Condiciones</Typography>
                <Terms/>
              </>
            :
              <>
                <Typography variant={'h3'}>Ayuda</Typography>
                <Help/>
              </>
          }
        </Grid>
      </Grid>
    </Container>
  )
}
