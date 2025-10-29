import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

function G() {

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
  
  
  console.log('render')
  return (
    <div>
      <h3>G: </h3>
      {/* <button onClick={getData}>get data</button> */}
      {data.loading ? <h1>Loading</h1> : data.error ? <h2>{data.error}</h2> :
        data.posts.map((post) => {
          return <div style={{border: "2px solid red", padding: "20px", margin: "20px"}}>
            <h5>User id: {post.userId}</h5>
            <h5> id: {post.id}</h5>
            <h5>Title: {post.title}</h5>
            <h5>Body: {post.body}</h5>
          </div>
        })
      }
      
      
    </div>
  )
}

export default G