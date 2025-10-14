
import axios from 'axios'
import { useEffect, useState } from 'react'

function Fetchdata() {

  var [loading, setLoading] = useState(false)
  var [posts, setPosts] = useState([])
  var [error, setError] = useState(null)


  // async function getData() {
  //   try {
  //     setLoading(true)
  //     var res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  //     setPosts(res.data)
  //     setLoading(false)
  //   } catch (error) {
  //     setError(error.message)
  //     setLoading(false)
  //   }
  // }

  useEffect(() => {
    console.log('effect called')
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data)
        setLoading(false)
      }).catch((error) => {
        setError(error.message)
        setLoading(false)
    })
  }, [])

  console.log('render')
  return <div>
    <h2>Data from api call</h2>
    {
      loading ? <h2>Loading</h2> : error ? <h2>{error}</h2> :
        posts.map((post) => {
         return <div key={post.id} style={{border:"2px solid red", padding: "20px", margin: "20px"}}>
            <p>User id: {post.userId}</p>
            <p>Id: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
          </div>
        })
     }
    {/* <button onClick={getData}>get data</button> */}
  </div>
}

export default Fetchdata