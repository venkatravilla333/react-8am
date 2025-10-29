import React, { useState } from 'react'

function F(props) {
  // var [name, setName] = useState('sachin')
  
  // function updateState() {
  //   setName('kohli')
  // }
  return (
    <div>
      <h3>F: {props.name}</h3>
      <button onClick={props.updateState}>update state</button>
    </div>
  )
}

export default F