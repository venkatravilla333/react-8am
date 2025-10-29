import React, { useEffect, useState } from 'react'
import B from './B'
import C from './C'
import axios from 'axios'

export var postsContext = React.createContext()

function A() {

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
  return (
    <div>
      <postsContext.Provider value={{loading, posts, error}}>
      <B />
      <C />
      </postsContext.Provider>
    </div>
  )
}

export default A