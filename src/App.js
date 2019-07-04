import React from 'react'
import {ThemeProvider} from "@material-ui/styles"
import {CssBaseline} from "@material-ui/core"
import theme from './stylesheets/theme'
import configureStore, {history} from './modules/store/configureStore'
import {Provider} from 'react-redux'
import {ConnectedRouter} from "connected-react-router";

import NavBar from './components/navBar'
import Content from './components/content'

require('dotenv').config()

const store = configureStore()

function App() {
  return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ConnectedRouter history={history}>
            <NavBar />
            <Content />
          </ConnectedRouter>
        </ThemeProvider>
      </Provider>
  );
}

export default App;
