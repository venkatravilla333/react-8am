
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

import logger from 'redux-logger'

import { cakeReducer } from './cake/cakeReducer'
import { curdReducer } from './curd/curdReducer'


var rootReducer = combineReducers({
  cake: cakeReducer,
  curd: curdReducer
})

export var store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))