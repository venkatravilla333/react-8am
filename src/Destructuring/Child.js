import React from 'react'

function Child(props) {
  console.log(props)
  var {name, age, properties: [cash, bats, cars]} = props.data
  return (
    <div>
      {/* <h3>Name: {props.data.name} </h3>
      <h3>Age: {props.data.age}</h3>
      <h3>Cash: {props.data.properties[0]}</h3>
      <h3>Bats: {props.data.properties[1]}</h3>
      <h3>Cars: {props.data.properties[2]}</h3> */}
      <h3>Name: {name} </h3>
      <h3>Age: {age}</h3>
      <h3>Cash: {cash}</h3>
      <h3>Bats: {bats}</h3>
      <h3>Cars: {cars}</h3>
    </div>
  )
}

export default Child