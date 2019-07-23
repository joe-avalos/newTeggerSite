import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import {useDispatch, useSelector} from 'react-redux'
import {loggedFetchProfile} from '../modules/actions/loggedActions'
import TGGOnboarding from '../components/tggOnboarding'

export default function () {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.logged.isLoading)
  const loggedError = useSelector(state => state.logged.loggedError)
  const profile = useSelector(state => state.logged.profile)
  React.useEffect(() => {
    if (profile.uuid === '' && loggedError === ''){
      dispatch(loggedFetchProfile())
    }
  })
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Box className="background onboardingBG" />
      <TGGOnboarding />
    </Container>
  )
}
