import {LOGGED_ACTIONS} from '../actions/loggedActions'
import _ from 'lodash'

const defaultState = {
  'isLoading': true,
  'answersIsLoading': false,
  'prefsIsLoading': false,
  'loggedError': '',
  'answersTotals': {},
  'moduleAnswers': {},
  'wallet': {},
  'postAnswersSuccess': {
    'open':false,
    'content': ''
  },
  'profile': {
    'uuid': '',
    'name': '',
    'email': '',
    'genre': '',
    'tour': false,
    'gift': false,
    'onboarding': false,
    'preferences': {
      'location': true,
      'tracking': true
    },
    'tokenBalance': '',
    'gamification': 0,
  }
}

export function loggedReduce(state = defaultState, action) {
  let newState = {}
  switch (action.type) {
    case LOGGED_ACTIONS.LOGGED_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case LOGGED_ACTIONS.LOGGED_ANSWERS_IS_LOADING:
      return {
        ...state,
        answersIsLoading: action.isLoading
      }
    case LOGGED_ACTIONS.LOGGED_PREFS_IS_LOADING:
      return {
        ...state,
        prefsIsLoading: action.isLoading
      }
    case LOGGED_ACTIONS.LOGGED_HAS_ERRORED:
      return {
        ...state,
        loggedError: action.loggedError
      }
    case LOGGED_ACTIONS.LOGGED_PROFILE_SUCCESS:
      newState = _.cloneDeep(state)
      newState.profile.uuid = action.profile.uuid
      newState.profile.name = action.profile.name
      newState.profile.email = action.profile.email
      newState.profile.genre = action.profile.genre
      newState.profile.tour = action.profile.tour
      newState.profile.gift = action.profile.gift
      newState.profile.onboarding = action.profile.onboarding
      newState.profile.preferences.location = action.profile.preferences.location
      newState.profile.preferences.tracking = action.profile.preferences.tracking
      newState.profile.tokenBalance = action.profile.tokenBalance
      newState.profile.gamification = action.profile.gamification
      return newState
    case LOGGED_ACTIONS.LOGGED_TOTAL_ANSWERS_SUCCESS:
      return {
        ...state,
        answersTotals: action.answersTotals
      }
    case LOGGED_ACTIONS.LOGGED_PREFERENCE_CHANGE_SUCCESS:
      newState = _.cloneDeep(state)
      newState.profile.preferences.location = action.prefs.location
      newState.profile.preferences.tracking = action.prefs.tracking
      return newState
    case LOGGED_ACTIONS.LOGGED_MODULE_ANSWERS_SUCCESS:
      let modAns = {}
      _.forEach(action.moduleAnswers, (value)=>{
        modAns[Object.keys(value)[0]] = Object.values(value)[0]
      })
      return {
        ...state,
        moduleAnswers: modAns
      }
    case LOGGED_ACTIONS.LOGGED_POST_ANSWERS_SUCCESS:
      if (action.success) {
        newState = {
          ...state,
          moduleAnswers: {},
          postAnswersSuccess: {
            open: true,
            content: 'success'
          }
        }
      }else {
        newState = {
          ...state,
          moduleAnswers: {}
        }
      }
      return newState
    case LOGGED_ACTIONS.LOGGED_CLOSE_SUCCESS_DIALOG:
      return {
        ...state,
        postAnswersSuccess: {
          open: false,
          content: ''
        }
      }
    case LOGGED_ACTIONS.LOGGED_WALLET_SUCCESS:
      return {
        ...state,
        wallet: action.wallet
      }
    case LOGGED_ACTIONS.LOGGED_LOGOUT_SUCCESS:
      return defaultState
    default:
      return state
  }
}
