import {push} from 'connected-react-router'
import {userLogoutSuccess} from './userActions'

export const LOGGED_ACTIONS = {
  LOGGED_IS_LOADING: 'LOGGED_IS_LOADING',
  LOGGED_ANSWERS_IS_LOADING: 'LOGGED_ANSWERS_IS_LOADING',
  LOGGED_PREFS_IS_LOADING: 'LOGGED_PREFS_IS_LOADING',
  LOGGED_HAS_ERRORED: 'LOGGED_HAS_ERRORED',
  LOGGED_PROFILE_SUCCESS: 'LOGGED_PROFILE_SUCCESS',
  LOGGED_WALLET_SUCCESS: 'LOGGED_WALLET_SUCCESS',
  LOGGED_LOGOUT_SUCCESS: 'LOGGED_LOGOUT_SUCCESS',
  LOGGED_TOTAL_ANSWERS_SUCCESS: 'LOGGED_TOTAL_ANSWERS_SUCCESS',
  LOGGED_MODULE_ANSWERS_SUCCESS: 'LOGGED_MODULE_ANSWERS_SUCCESS',
  LOGGED_PREFERENCE_CHANGE_SUCCESS: 'LOGGED_PREFERENCE_CHANGE_SUCCESS'
}

export function loggedIsLoading(bool) {
  return {
    type: LOGGED_ACTIONS.LOGGED_IS_LOADING,
    isLoading: bool
  }
}

export function loggedAnswersIsLoading(bool) {
  return {
    type: LOGGED_ACTIONS.LOGGED_ANSWERS_IS_LOADING,
    isLoading: bool
  }
}

export function loggedPrefsIsLoading(bool) {
  return {
    type: LOGGED_ACTIONS.LOGGED_PREFS_IS_LOADING,
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

export function loggedFetchTotalAnswersSuccess(answersTotals) {
  return {
    type: LOGGED_ACTIONS.LOGGED_TOTAL_ANSWERS_SUCCESS,
    answersTotals: answersTotals
  }
}

export function loggedFetchModuleAnswersSuccess(moduleAnswers) {
  return {
    type: LOGGED_ACTIONS.LOGGED_TOTAL_ANSWERS_SUCCESS,
    moduleAnswers: moduleAnswers
  }
}

export function loggedPreferenceChangeSuccess(prefs) {
  return {
    type: LOGGED_ACTIONS.LOGGED_PREFERENCE_CHANGE_SUCCESS,
    prefs: prefs
  }
}

export function loggedWalletFetchSuccess(wallet) {
  return {
    type: LOGGED_ACTIONS.LOGGED_WALLET_SUCCESS,
    wallet: wallet
  }
}

export function loggedLogoutSuccess() {
  return {
    type: LOGGED_ACTIONS.LOGGED_LOGOUT_SUCCESS
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

export function loggedFetchTotalAnswers(uuid){
  return dispatch => {
    dispatch(loggedIsLoading(true))
  
    let qURL = process.env.REACT_APP_API_ROOT + 'answers/'+uuid
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
      .then(answers => {
        dispatch(loggedFetchTotalAnswersSuccess(answers))
        dispatch(loggedIsLoading(false))
        dispatch(loggedHasErrored(''))
      })
      .catch(res => {
        res.json().then(e => {
          dispatch(loggedIsLoading(false))
          dispatch(loggedHasErrored(e.code))
        })
      })
  }
}

export function loggedPostModuleAnswers(answers, uuid, mod) {
  return dispatch => {
    dispatch(loggedAnswersIsLoading(true))
    let answerString = {answers: answers}
  
    let qURL = process.env.REACT_APP_API_ROOT + 'answer/'+uuid+'/'+mod
    fetch(qURL, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Tegger-AuthType': 'session'
      },
      body: JSON.stringify(answerString)
    })
      .then(res => {
        if (!res.ok) {
          throw res
        }
        dispatch(push('/profile'))
        dispatch(loggedAnswersIsLoading(false))
      })
      .catch(res => {
        res.json().then(e => {
          dispatch(loggedAnswersIsLoading(false))
          dispatch(loggedHasErrored(e.code))
        })
      })
  }
}

export function loggedPreferenceChange(prefs, uuid){
  return dispatch => {
    //dispatch(loggedPrefsIsLoading(true))
  
    let qURL = process.env.REACT_APP_API_ROOT + 'preferences/'+uuid
    fetch(qURL, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Tegger-AuthType': 'session'
      },
      body: JSON.stringify(prefs)
    })
      .then(res => {
        if(!res.ok){
          throw res
        }
        return res
      })
      .then(res => res.json())
      .then(newPrefs => {
        console.log(newPrefs)
        dispatch(loggedPreferenceChangeSuccess(newPrefs))
        dispatch(loggedPrefsIsLoading(false))
      })
      .catch(res => {
        res.json().then(e => {
          dispatch(loggedHasErrored(e.code))
          dispatch(loggedPrefsIsLoading(false))
        })
      })
  }
}

export function loggedFetchModuleAnswers(uuid, mod) {
  return dispatch => {
    dispatch(loggedAnswersIsLoading(true))
  
    let qURL = process.env.REACT_APP_API_ROOT + 'answers/'+uuid+'/'+mod
    fetch(qURL, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Tegger-AuthType': 'session'
      }
    })
      .then(res => {
        if (!res.ok){
          throw res
        }
        return res
      })
      .then(res => res.json())
      .then(answers => {
        dispatch(loggedFetchModuleAnswersSuccess(answers))
        dispatch(loggedAnswersIsLoading(false))
      })
      .catch(e => {
        dispatch(loggedHasErrored(e.code))
        dispatch(loggedAnswersIsLoading(false))
      })
  }
}

export function loggedPostPasswordChange(passwords) {
  return dispatch => {
    dispatch(loggedPrefsIsLoading(true))
  
    let qURL = process.env.REACT_APP_API_ROOT + 'password/change'
    fetch(qURL, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Tegger-AuthType': 'session'
      },
      body: JSON.stringify(passwords)
    })
      .then(res => {
        if (!res.ok){
          throw res
        }
        dispatch(loggedPrefsIsLoading(false))
      })
      .catch(e => {
        dispatch(loggedHasErrored(e.code))
        dispatch(loggedPrefsIsLoading(false))
      })
  }
}

export function loggedFetchWallet(uuid) {
  return dispatch => {
    dispatch(loggedIsLoading(true))
  
    let qURL = process.env.REACT_APP_API_ROOT + 'wallet/'+uuid
    fetch(qURL, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Tegger-AuthType': 'session'
      }
    })
      .then(res => {
        if (!res.ok){
          throw res
        }
        return res
      })
      .then(res => res.json())
      .then(wallet => {
        dispatch(loggedWalletFetchSuccess(wallet))
        dispatch(loggedIsLoading(false))
      })
      .catch(e => {
        dispatch(loggedHasErrored(e.code))
        dispatch(loggedIsLoading(false))
      })
  }
}

export function loggedLogout() {
  return dispatch => {
    dispatch(loggedIsLoading(true))
  
    let qURL = process.env.REACT_APP_API_ROOT + 'logout'
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
        dispatch(userLogoutSuccess())
        dispatch(loggedLogoutSuccess())
        dispatch(loggedIsLoading(false))
        dispatch(push('/'))
        })
      .catch(res => {
        res.json().then(e => {
          dispatch(loggedIsLoading(false))
          dispatch(loggedHasErrored(e.code))
        })
      })
  }
}
