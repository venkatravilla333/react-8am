import React, { useEffect, useState } from 'react'

function Parent() {
  var [normalCount, setNormalCount] = useState(0)
  var [domCount, setDomCount] = useState(0)
  
  function updateNormalCount() {
    setNormalCount(normalCount+1)
  }
  function updateDomCount() {
    setDomCount(domCount+1)
  }

  useEffect(() => {
    document.title = domCount
    console.log('effect called')
  }, [domCount])
  console.log('render')
  return (
    <div>
      <h3>normalCount: {normalCount}</h3>
      <button onClick={updateNormalCount}>update normalCount</button>
      <h3>domCount: {domCount}</h3>
      <button onClick={updateDomCount}>update domCount</button>
    </div>
  )
}

export default Parent