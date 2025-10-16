import React, { useState } from 'react'

function Child1(props) {
  var [age, setAge] = useState(40)
  console.log(props)
  // props.name = 'kohli'
  return (
    <>
    <div>Child1: {props.name}</div>
    <button onClick={()=>props.test(age)}>send data to pparent</button>
    </>
  )
}

export default Child1