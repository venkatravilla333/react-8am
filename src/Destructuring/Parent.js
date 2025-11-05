import React, { useState } from 'react'
import Child from './Child'

function Parent() {
  var [data] = useState({ name: 'sachin', age: 40, properties: ['cash', 'bats', 'cars'] })
  var {name, age, properties:[cash, bats, cars]} = data
  return (
    <div>
      <h2>Parent</h2>
      {/* <h3>Name: {data.name}</h3>
      <h3>Age: {data.age}</h3> */}
      {/* <h3>{data.properties[0] }</h3>
      <h3>{data.properties[1] }</h3>
      <h3>{data.properties[2] }</h3> */}
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Cash: {cash}</h3>
      <h3>Bats: {bats}</h3>
      <h3>Cars: {cars}</h3>
      <Child data = {data} />
    </div>
  )
}

export default Parent