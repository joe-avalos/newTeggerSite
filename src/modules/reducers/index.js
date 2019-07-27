import {combineReducers} from 'redux'
import {connectRouter} from "connected-react-router"
import {userReduce} from './userReducer'
import {loggedReduce} from './loggedReducer'

export default history => combineReducers({
  router: connectRouter(history),
  user: userReduce,
  logged: loggedReduce
})
