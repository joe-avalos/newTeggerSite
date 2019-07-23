import {combineReducers} from 'redux'
import {connectRouter} from "connected-react-router"
import {itemsReduce} from "./items"
import {navsReduce} from "./navsReducer"
import {userReduce} from './userReducer'
import {loggedReduce} from './loggedReducer'

export default history => combineReducers({
  router: connectRouter(history),
  items: itemsReduce,
  navs: navsReduce,
  user: userReduce,
  logged: loggedReduce
})
