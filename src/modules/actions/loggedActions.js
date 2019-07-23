import {push} from 'connected-react-router'

export const LOGGED_ACTIONS = {
  LOGGED_IS_LOADING: 'LOGGED_IS_LOADING',
  LOGGED_HAS_ERRORED: 'LOGGED_HAS_ERRORED',
  LOGGED_PROFILE_SUCCESS: 'LOGGED_PROFILE_SUCCESS',
  LOGGED_LOGOUT_SUCCESS: 'LOGGED_LOGOUT_SUCCESS'
}

export function loggedIsLoading(bool) {
  return {
    type: LOGGED_ACTIONS.LOGGED_IS_LOADING,
    isLoading: bool
  }
}

export function loggedHasErrored(error) {
  return{
    type: LOGGED_ACTIONS.LOGGED_HAS_ERRORED,
    loggedError: error
  }
}

export function loggedProfileSuccess(profile) {
  return {
    type: LOGGED_ACTIONS.LOGGED_PROFILE_SUCCESS,
    profile: profile
  }
}

export function loggedFetchProfile() {
  return dispatch => {
    dispatch(loggedIsLoading(true))
    
    let qURL = process.env.REACT_APP_API_ROOT + 'profile'
    
    fetch(qURL,{
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Tegger-AuthType': 'session'
      }
    })
      .then(res => {
        if (!res.ok) {
          throw res
        }
        return res
      })
      .then(res => res.json())
      .then(profile => {
        dispatch(loggedProfileSuccess(profile))
        dispatch(loggedIsLoading(false))
        dispatch(loggedHasErrored(''))
      })
      .catch(res => {
        res.json().then(e => {
          dispatch(loggedIsLoading(false))
          dispatch(loggedHasErrored(e.code))
          dispatch(push('/getin'))
        })
      })
  }
}

