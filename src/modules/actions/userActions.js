import {push} from 'connected-react-router'

export const USER_ACTIONS = {
  USER_IS_LOADING: 'USER_IS_LOADING',
  USER_HAS_ERRORED: 'USER_HAS_ERRORED',
  USER_EMAIL_SUBMIT: 'USER_EMAIL_SUBMIT',
  USER_USERNAME_SUBMIT: 'USER_USERNAME_SUBMIT',
  USER_FETCH_DATA_SUCCESS: 'USER_FETCH_DATA_SUCCESS',
  USER_DELETE_SUBMIT: 'USER_DELETE_SUBMIT',
  USER_REFERRER_IS_LOADING: 'USER_REFERRER_IS_LOADING',
  USER_REFERRER_HAS_ERRORED: 'USER_REFERRER_HAS_ERRORED',
  USER_REFERRER_SUBMIT: 'USER_REFERRER_SUBMIT',
  USER_REFERRER_SUCCESS: 'USER_REFERRER_SUCCESS',
  USER_REFERRER_DELETE: 'USER_REFERRER_DELETE',
  USER_CONFIRM_IS_LOADING: 'USER_CONFIRM_IS_LOADING',
  USER_CONFIRM_HAS_ERRORED: 'USER_CONFIRM_HAS_ERRORED',
  USER_CONFIRM_SUBMIT: 'USER_CONFIRM_SUBMIT',
  USER_CONFIRM_SUCCESS: 'USER_CONFIRM_SUCCESS',
}

export function userIsLoading(bool) {
  return {
    type: USER_ACTIONS.USER_IS_LOADING,
    isLoading: bool
  }
}

export function userReferrerIsLoading(bool) {
  return {
    type: USER_ACTIONS.USER_REFERRER_IS_LOADING,
    referrerIsLoading: bool
  }
}

export function userConfirmIsLoading(bool) {
  return {
    type: USER_ACTIONS.USER_CONFIRM_IS_LOADING,
    confirmIsLoading: bool
  }
}

export function userHasErrored(error) {
  return {
    type: USER_ACTIONS.USER_HAS_ERRORED,
    error: error
  }
}

export function userReferrerHasErrored(error) {
  return {
    type: USER_ACTIONS.USER_REFERRER_HAS_ERRORED,
    error: error
  }
}

export function userConfirmHasErrored(error) {
  return {
    type: USER_ACTIONS.USER_CONFIRM_HAS_ERRORED,
    error: error
  }
}

export function userEmailSubmitted(email) {
  return {
    type: USER_ACTIONS.USER_EMAIL_SUBMIT,
    subEmail: email
  }
}

export function userUsernameSubmitted(username) {
  return {
    type: USER_ACTIONS.USER_EMAIL_SUBMIT,
    subUsername: username
  }
}

export function userReferrerSubmitted(username) {
  return {
    type: USER_ACTIONS.USER_REFERRER_SUBMIT,
    subReferrer: username
  }
}

export function userConfirmSubmitted(code, username) {
  return {
    type: USER_ACTIONS.USER_CONFIRM_SUBMIT,
    confirmCode: code,
    confirmUsername: username
  }
}

export function userFetchUserDataSuccess(username, email) {
  return {
    type: USER_ACTIONS.USER_FETCH_DATA_SUCCESS,
    username: username,
    email: email
  }
}

export function userFetchReferrerSuccess(username) {
  return {
    type: USER_ACTIONS.USER_REFERRER_SUCCESS,
    referrer: username
  }
}

export function userFetchConfirmSuccess() {
  return {type: USER_ACTIONS.USER_CONFIRM_SUCCESS}
}

export function userDeleteSubmit() {
  return {type: USER_ACTIONS.USER_DELETE_SUBMIT}
}

export function userReferrerDelete() {
  return {type: USER_ACTIONS.USER_REFERRER_DELETE}
}

export function userFetchUserEmail(email) {
  return dispatch => {
    dispatch(userIsLoading(true))
    let qURL = process.env.REACT_APP_API_ROOT + 'user?email=' + email
    fetch(qURL)
      .then(res =>{
        if (!res.ok) {
          throw res
        }
        return res
      })
      .then(res => res.json())
      .then(user => {
        dispatch(userFetchUserDataSuccess(user.username, user.email))
        dispatch(userEmailSubmitted(email))
        dispatch(userHasErrored(''))
        dispatch(userIsLoading(false))
      })
      .catch(e => {
        dispatch(userIsLoading(false))
        dispatch(userEmailSubmitted(email))
      })
  }
}

export function userFetchUserUsername(username, type = 'user') {
  return dispatch => {
    if (type === 'referrer') {
      dispatch(userReferrerIsLoading(true))
      dispatch(userReferrerSubmitted(username))
    }else{
      dispatch(userIsLoading(true))
      dispatch(userUsernameSubmitted(username))
    }
    let qURL = process.env.REACT_APP_API_ROOT + 'user?username=' + username
    fetch(qURL)
      .then(res =>{
        if (!res.ok) {
          throw res
        }
        return res
      })
      .then(res => res.json())
      .then(user => {
        if (type === 'referrer') {
          dispatch(userReferrerIsLoading(false))
          dispatch(userReferrerHasErrored(''))
          dispatch(userFetchReferrerSuccess(user.username))
        }else{
          dispatch(userIsLoading(false))
          dispatch(userFetchUserDataSuccess(user.username, user.email))
          dispatch(userEmailSubmitted(user.email))
          dispatch(userHasErrored(''))
        }
      })
      .catch(res => {
        res.json().then(e => {
          if (type === 'referrer') {
            dispatch(userReferrerIsLoading(false))
            dispatch(userReferrerHasErrored(e.code))
          }else{
            dispatch(userIsLoading(false))
            dispatch(userHasErrored(e.code))
          }
        })
      })
  }
}

export function userNewSignupRequest(data) {
  return dispatch =>{
    dispatch(userIsLoading(true))
    let url = process.env.REACT_APP_API_ROOT + 'signup'
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (!res.ok) {
          throw res
        }
        dispatch(userHasErrored(''))
        dispatch(userIsLoading(false))
        dispatch(push('/confirm'))
      })
      .catch(res => {
        res.json().then(e => {
          dispatch(userIsLoading(false))
          dispatch(userHasErrored(e.code))
        })
      })
  }
}
export function userLoginRequest(data) {
  return dispatch => {
    dispatch(userIsLoading(true))
    let url = process.env.REACT_APP_API_ROOT + 'login'
    
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Tegger-AuthType': 'session'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if(!res.ok){
          throw res
        }
        dispatch(userHasErrored(''))
        dispatch(userIsLoading(false))
        dispatch(push('/profile'))
      })
      .catch(res => {
        res.json().then(e => {
          dispatch(userIsLoading(false))
          dispatch(userHasErrored(e.code))
        })
      })
  }
}

export function userConfirmRequest(data) {
  return dispatch => {
    dispatch(userConfirmIsLoading(true))
    let url = process.env.REACT_APP_API_ROOT + 'confirm'
    
    fetch(url,{
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Tegger-AuthType': 'session'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (!res.ok) {
          throw res
        }
        dispatch(userConfirmHasErrored(''))
        dispatch(userConfirmIsLoading(false))
        dispatch(userFetchUserUsername(data.username))
        dispatch(push('/getin'))
      })
      .catch(res => {
        res.json().then(e => {
          dispatch(userConfirmIsLoading(false))
          dispatch(userConfirmSubmitted(data.code, data.username))
          dispatch(userConfirmHasErrored(e.code))
        })
      })
  }
}
