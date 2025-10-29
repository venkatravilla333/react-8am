import React, { useEffect, useState } from 'react'

function Parent() {
  var [X, setX] = useState(0)
  var [Y, setY] = useState(0)

  function updateState(e) {
    console.log('update state')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('effect called')
    window.addEventListener('click', updateState)
    return () => {
      console.log('cleanup task')
       window.removeEventListener('click', updateState)
      }
  }, [])

  console.log('render')
 
  return (
    <div>
      <h3>X: {X}</h3>
      <h3>Y: {Y}</h3>
    </div>
  )
}

export default Parent