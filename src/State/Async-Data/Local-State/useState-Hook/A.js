import React, { useState } from 'react'
import B from './B'
import C from './C'

function A() {

    var [name, setName] = useState('sachin')
  
  function updateState() {
    setName('kohli')
  }
  return (
    <div>
      <B />
      <C  name={name} updateState={updateState} />
    </div>
  )
}

export default A