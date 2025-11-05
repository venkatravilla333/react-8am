import React, { useState } from 'react'
import useCount from './useCount'

function Count2() {
var [count, updateCount] = useCount()
  return (
    <div>
      <h2>Count2: {count}</h2>
      <button onMouseOver={updateCount}>update count2</button>
    </div>
  )
}

export default Count2