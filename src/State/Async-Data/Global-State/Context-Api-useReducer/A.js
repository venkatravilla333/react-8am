import React, { useReducer, useState } from 'react'
import B from './B'
import C from './C'

export var apiContext = React.createContext()

function A() {
 var initialState = {
    loading: false,
    posts: [],
    error: null
  }

  var postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POST_REQUEST':
        return {
          ...state,
          loading: true
        }
        break;
      case 'FETCH_POST_SUCCESS':
        return {
          ...state,
          loading: false,
          posts: action.payload
        }
        break;
      case 'FETCH_POST_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        }
    }
  }

  var [data, dispatch] = useReducer(postsReducer, initialState)
  
  useEffect(() => {
    dispatch({ type: 'FETCH_POST_REQUEST' })
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      dispatch({ type: 'FETCH_POST_SUCCESS', payload: res.data})
       })
      .catch((err) => {
      dispatch({ type: 'FETCH_POST_FAILURE', payload: err.message})
      })
  }, [])


  return (
    <div>
      <apiContext.Provider value={data}>
      <B />
      <C />
      </apiContext.Provider>
    </div>
  )
}

export default A