import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './postsSlice.js'



export var store = configureStore({
  reducer: {
    postsReducer
  }
})