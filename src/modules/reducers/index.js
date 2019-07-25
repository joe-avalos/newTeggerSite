import {combineReducers} from 'redux'
import {connectRouter} from "connected-react-router"
import {itemsReduce} from "./items"
import {userReduce} from './userReducer'
import {loggedReduce} from './loggedReducer'

export default history => combineReducers({
  router: connectRouter(history),
  items: itemsReduce,
  user: userReduce,
  logged: loggedReduce
})
