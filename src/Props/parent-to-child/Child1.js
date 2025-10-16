import React from 'react'

function Child1(props) {
  console.log(props)
  // props.name = 'kohli'
  return (
    <div>
      <h3>Child1: {props.name}</h3>
      
    </div>
  )

}

export default Child1