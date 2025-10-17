import React, { useContext } from 'react'
import { nameContext } from './A'

function G() {
  // var value = nameContext._currentValue
  var name = useContext(nameContext)
  
  return <div>
    <h3>Value: {name}</h3>
  </div>
}

export default G