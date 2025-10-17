import React, { useState } from 'react'
import B from './B'
import C from './C'

export var nameContext = React.createContext()
console.log(nameContext)

function A() {
  var [name, setName] = useState(0)

  function updateState() {
    setName(name+1)
  }
  
  return (
    <div>
      <button onClick={updateState}>update state</button>
      <nameContext.Provider value={name}>
      <B />
      <C />
      </nameContext.Provider>
    </div>
  )
}

export default A