import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../Redux/actionCreators'

function G() {
 var data = useSelector((state) => {
    return state.postsReducer
 })
  
 var dispatch = useDispatch()
  
  // function getData() {
  //   dispatch(fetchPosts())
  // }

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  console.log(data)
  console.log('render')
  return (
    <div>
      <h2>G com</h2>
      {/* <button onClick={getData}>get data</button> */}
      {
        data.loading ? <h3>Loading</h3> : data.error ? <h3>{data.error}</h3> :
          data.posts.map((post) => {
            return <>
              <h4>Id: {post.id}</h4>
              <h4>Title: {post.title}</h4>
              <h4>Body: {post.body}</h4>
            </>
          })
      }
    </div>
  )
}

export default G