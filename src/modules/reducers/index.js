import {combineReducers} from 'redux'
import {connectRouter} from "connected-react-router"
import {userReduce} from './userReducer'
import {loggedReduce} from './loggedReducer'
import {languageReduce} from './languageReducer'

export default history => combineReducers({
  router: connectRouter(history),
  user: userReduce,
  logged: loggedReduce,
  language: languageReduce
})
