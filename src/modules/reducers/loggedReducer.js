import {LOGGED_ACTIONS} from '../actions/loggedActions'
import _ from 'lodash'

const defaultState = {
  'isLoading': true,
  'loggedError': '',
  'answers': {},
  'profile':{
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
    case LOGGED_ACTIONS.LOGGED_HAS_ERRORED:
      return {
        ...state,
        loggedError: action.loggedError
      }
    case LOGGED_ACTIONS.LOGGED_PROFILE_SUCCESS:
      newState = _.cloneDeep(state)
      newState.profile.uuid = action.profile.uuid
      newState.profile.name= action.profile.name
      newState.profile.email= action.profile.email
      newState.profile.genre= action.profile.genre
      newState.profile.tour= action.profile.tour
      newState.profile.gift= action.profile.gift
      newState.profile.onboarding= action.profile.onboarding
      newState.profile.preferences.location= action.profile.preferences.location
      newState.profile.preferences.tracking= action.profile.preferences.tracking
      newState.profile.tokenBalance= action.profile.tokenBalance
      newState.profile.gamification= action.profile.gamification
      return newState
    case LOGGED_ACTIONS.LOGGED_FETCH_ANSWERS_SUCCESS:
      return {
        ...state,
        answers: action.answers
      }
    default:
      return state
  }
}
