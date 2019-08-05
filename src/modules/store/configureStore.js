import {createStore, applyMiddleware, compose} from "redux"
import {createBrowserHistory} from 'history'
import {routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk"
import persistReducer from 'redux-persist/lib/persistReducer'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootReducer from '../reducers'

export const history = createBrowserHistory()

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['user', 'logged'] //TODO , 'language']
}

const finalReducer = persistReducer(persistConfig, rootReducer(history))

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }))
  || compose

export default function configureStore(initialState = {}) {
  if (process.env.NODE_ENV === 'development'){
    return createStore(
      finalReducer,
      initialState,
      composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
    )
  }else{
    return createStore(
      finalReducer,
      initialState,
      applyMiddleware(routerMiddleware(history), thunk)
    );
  }
  
}
