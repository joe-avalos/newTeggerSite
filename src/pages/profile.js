import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'

import {useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'

import {loggedFetchProfile, loggedPostModuleAnswersSuccess} from '../modules/actions/loggedActions'
import TGGOnBoarding from '../components/tggOnboarding'
import TGGMainProfile from '../components/tggMainProfile'

import '../stylesheets/pages/profile.scss'

export default function () {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.logged.isLoading)
  //TODO const loggedError = useSelector(state => state.logged.loggedError)
  const profile = useSelector(state => state.logged.profile)
  let moduleAnswers = useSelector(state => state.logged.moduleAnswers)

  React.useEffect(() => {
    if (profile.uuid === ''){
      dispatch(loggedFetchProfile())
    }
    if (!_.isEmpty(moduleAnswers)) {
      dispatch(loggedPostModuleAnswersSuccess(false))
    }
  })

  return (
    <Container maxWidth="lg" className="contentContainer">
      {/* TODO */}
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
