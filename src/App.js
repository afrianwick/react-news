import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './pages'
import store from './store'

export default () => (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
)
