import {combineReducers} from 'redux'
import {connectRouter} from "connected-react-router"
import {itemsReduce} from "./items"
import {navsReduce} from "./navs"

export default history => combineReducers({
  router: connectRouter(history),
  items: itemsReduce,
  navs: navsReduce
})
