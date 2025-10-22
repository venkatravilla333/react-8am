import { configureStore } from '@reduxjs/toolkit'

import cakeReducer from './Slices/cakeSlice'
import curdReducer from './Slices/curdSlice'

export let store = configureStore({
  reducer: {
   cake: cakeReducer,
   curd: curdReducer
  }
})