import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';

import loadingReducer from './reducers/loading'
import messageReducer from './reducers/message'
import sourcesReducer from './reducers/sources'
import authReducer from './reducers/auth'

const reducers = combineReducers({
  loading: loadingReducer,
  message: messageReducer,
  sources: sourcesReducer,
  auth: authReducer
})

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk, logger)
  )
);

export default store;