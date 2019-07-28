import React from 'react'
import {ThemeProvider} from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from './stylesheets/theme'
import configureStore, {history} from './modules/store/configureStore'
import {Provider} from 'react-redux'
import {ConnectedRouter} from "connected-react-router"
import persistStore from 'redux-persist/lib/persistStore'
import {PersistGate} from 'redux-persist/es/integration/react'

import NavBar from './components/tggNavBar'
import TggContent from './components/tggContent'

require('dotenv').config()

const store = configureStore()
const persistor = persistStore(store)

function App() {
  
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ConnectedRouter history={history}>
              <NavBar />
              <TggContent />
            </ConnectedRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
  );
}

export default App;
