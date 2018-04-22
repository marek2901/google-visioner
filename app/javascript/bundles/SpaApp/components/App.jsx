import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Provider} from 'react-redux'
import store from '../store'

import RootAppComponent from './RootAppComponent'
import LoadingOverlay from './LoadingOverlay'

const MuiApp = () => <MuiThemeProvider>
  <div>
    <RootAppComponent />
    <LoadingOverlay />
  </div>
</MuiThemeProvider>

export default () => <Provider store={store}>
  <MuiApp />
</Provider>
