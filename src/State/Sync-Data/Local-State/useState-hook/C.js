import React, { useState } from 'react'
import E from './E'
import F from './F'

function C(props) {
  console.log(props)
  //  var [name, setName] = useState('sachin')
  
  // function updateState() {
  //   setName('kohli')
  // }
  return (
    <div>
      <E name={props.name} updateState={props.updateState} />
      <F name={props.name} updateState={props.updateState} />
    </div>
  )
}

export default C