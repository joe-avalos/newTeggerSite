import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'

import {useDispatch, useSelector} from 'react-redux'

import {loggedFetchProfile} from '../modules/actions/loggedActions'
import TGGOnBoarding from '../components/tggOnboarding'
import TGGMainProfile from '../components/tggMainProfile'

import '../stylesheets/pages/profile.scss'

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
  
  return (
    <Container maxWidth="lg" className="contentContainer">
      {isLoading ? <CircularProgress />
      : !profile.onboarding ? <TGGOnBoarding />
      : <>
          <Box className="background profileBG"/>
          <TGGMainProfile profile={profile}/>
        </>
      }
    </Container>
  )
}
