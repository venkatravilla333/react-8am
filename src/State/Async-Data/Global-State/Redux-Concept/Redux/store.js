import {applyMiddleware, combineReducers, createStore} from 'redux'
import { postsReducer } from './PostsReducer'
import {thunk} from 'redux-thunk'



var rootReducer = combineReducers({
  postsReducer,
})

export var store = createStore(rootReducer, applyMiddleware(thunk))