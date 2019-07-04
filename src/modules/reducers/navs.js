import {NAV_ACTIONS} from '../actions/navs'

const defaultState = {
  activeNav: '/'
}

export function navsReduce(state = defaultState, action) {

  switch (action.type) {
    case NAV_ACTIONS.NAV_TAB_CLICK:
      return {...state,
        activeNav: action.activeNav
      }
    default:
      return state
  }
}
