import {NAV_ACTIONS} from '../actions/navs'

const defaultState = {
  activeNav: '/',
  open: false
}

export function navsReduce(state = defaultState, action) {

  switch (action.type) {
    case NAV_ACTIONS.NAV_TAB_CLICK:
      return {...state,
        activeNav: action.activeNav
      }
    case NAV_ACTIONS.NAV_EXPAND_TOGGLE:
      return {...state,
        open: action.open
      }
    default:
      return state
  }
}
