import {ITEMS_ACTIONS} from "../actions/items"
import _ from 'lodash'

const defaultState = {
  hasErrored: false,
  isLoading: false,
  items: [],
  item: ''
}

export function itemsReduce(state = defaultState, action) {
  let newState;
  switch (action.type) {
    case ITEMS_ACTIONS.ITEMS_HAS_ERRORED:
      return {
        ...state,
        hasErrored: action.hasErrored
      }
    case ITEMS_ACTIONS.ITEMS_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case ITEMS_ACTIONS.ITEMS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: action.items
      }
    case ITEMS_ACTIONS.ITEMS_INPUT_CHANGE:
      return {
        ...state,
        item: action.item
      }
    case ITEMS_ACTIONS.ITEMS_DELETE_ITEM:
      newState = _.cloneDeep(state)
      let index = _.findKey(newState.items, {id: action.payload})
      newState.items.splice(index, 1)
      return newState
    case ITEMS_ACTIONS.ITEMS_CREATE_ITEM:
      newState = _.cloneDeep(state)
      newState.items.unshift({id: JSON.stringify(newState.items.length + 1), label: action.payload})
      return newState
    default:
      return state
  }
}
