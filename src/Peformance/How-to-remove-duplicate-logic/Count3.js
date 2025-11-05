import React, { useState } from 'react'
import useCount from './useCount'

function Count3() {
  var [count, updateCount] = useCount()
  return (
    <div>
      <h2>Count3: {count}</h2>
      <button onDoubleClick={updateCount}>update count</button>
    </div>
  )
}

export default Count3