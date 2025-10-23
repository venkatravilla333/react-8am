import React, { useEffect, useState } from 'react'
import axios from 'axios'

function G(props) {

  var [loading, setLoading] = useState(false)
  var [posts, setPosts] = useState([])
  var [error, setError] = useState(null)

  function getData() {
    
  }

  useEffect(() => {
    console.log('effect called')
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      console.log(res.data)
      setPosts(res.data)
      setLoading(false)
    }).catch((err) => {
      setError(err.message)
      setLoading(false)
    })
  }, [])
  
  console.log('render')
  return (
    <div>
      <h3>G: </h3>
      {/* <button onClick={getData}>get data</button> */}
      {loading ? <h1>Loading</h1> : error ? <h2>{error}</h2> :
        posts.map((post) => {
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