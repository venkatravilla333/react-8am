import React, { useContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios'

import {apiContext} from './A'

function G() {

  var  data  = useContext(apiContext)
  
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