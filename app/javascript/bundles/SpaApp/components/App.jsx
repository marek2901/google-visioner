import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux'
import store from '../store'

import RootAppComponent from './RootAppComponent'

const MuiApp = () => <MuiThemeProvider>
  <RootAppComponent />
</MuiThemeProvider>

export default () => <Provider store={store}>
  <MuiApp />
</Provider>
