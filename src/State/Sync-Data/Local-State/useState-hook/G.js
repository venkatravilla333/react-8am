import React, { useState } from 'react'

function G(props) {
  // var [name, setName] = useState('sachin')
  
  // function updateState() {
  //   setName('kohli')
  // }
  console.log('render')
  return (
    <div>
      <h3>G: {props.name}</h3>
      <button onClick={props.updateState}>update state</button>
    </div>
  )
}

export default G