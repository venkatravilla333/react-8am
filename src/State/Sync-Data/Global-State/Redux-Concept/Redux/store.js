
import { combineReducers, createStore } from 'redux'

import { cakeReducer } from './cake/cakeReducer'
import { curdReducer } from './curd/curdReducer'


var rootReducer = combineReducers({
  cake: cakeReducer,
  curd: curdReducer
})

export var store = createStore(rootReducer)