import { createSlice } from "@reduxjs/toolkit";



let cakeSlice = createSlice({
  name: 'cake',
  initialState: {
    noOfCakes: 100
  },
  reducers: {
    buyCake: (state) => {
      state.noOfCakes -=1
    }
  }
})

export default cakeSlice.reducer

export var {buyCake} = cakeSlice.actions