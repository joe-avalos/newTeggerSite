import {USER_ACTIONS} from '../actions/userActions'
import _ from 'lodash'

const defaultState = {
  isLoading: false,
  userError: '',
  email: '',
  subEmail: '',
  username: '',
  subUsername: '',
  referrerIsLoading: false,
  referrerError: '',
  referrer: '',
  subReferrer: '',
  confirmIsLoading: false,
  confirmError: '',
  confirmCode: '',
  confirmUsername: ''
}

export function userReduce(state = defaultState, action) {
  let newState = {}
  switch (action.type) {
    case USER_ACTIONS.USER_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case USER_ACTIONS.USER_REFERRER_IS_LOADING:
      return {
        ...state,
        referrerIsLoading: action.referrerIsLoading
      }
    case USER_ACTIONS.USER_CONFIRM_IS_LOADING:
      return {
        ...state,
        confirmIsLoading: action.confirmIsLoading
      }
    case USER_ACTIONS.USER_HAS_ERRORED:
      return {
        ...state,
        userError: action.error
      }
    case USER_ACTIONS.USER_REFERRER_HAS_ERRORED:
      return {
        ...state,
        referrerError: action.error
      }
    case USER_ACTIONS.USER_CONFIRM_HAS_ERRORED:
      return {
        ...state,
        confirmError: action.error
      }
    case USER_ACTIONS.USER_EMAIL_SUBMIT:
      return {
        ...state,
        subEmail: action.subEmail
      }
    case USER_ACTIONS.USER_USERNAME_SUBMIT:
      return {
        ...state,
        subUsername: action.subUsername
      }
    case USER_ACTIONS.USER_REFERRER_SUBMIT:
      return {
        ...state,
        subReferrer: action.subReferrer
      }
    case USER_ACTIONS.USER_CONFIRM_SUBMIT:
      return {
        ...state,
        confirmCode: action.confirmCode,
        confirmUsername: action.confirmUsername
      }
    case USER_ACTIONS.USER_FETCH_DATA_SUCCESS:
      return {
        ...state,
        email: action.email,
        username: action.username
      }
    case USER_ACTIONS.USER_REFERRER_SUCCESS:
      return {
        ...state,
        referrer: action.subReferrer
      }
    case USER_ACTIONS.USER_DELETE_SUBMIT:
      newState = _.cloneDeep(state)
      newState.email = ''
      newState.subEmail = ''
      newState.username = ''
      newState.subUsername = ''
      newState.userError = ''
      newState.subReferrer = ''
      newState.referrer = ''
      newState.referrerError = ''
      return newState
    default:
      return state
  }
}
