import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
  var [name, setName] = useState('sachin')
  var [age, setAge] = useState(30)
  
  function test(x) {
    console.log('called', x)
    setAge(x)
  }
  return (
    <div>
      <h2>Parent: Name: {name}</h2>
      <h2>Parent: Age from child: {age}</h2>
      <Child1 name={name} test = {test} />
      <Child2 name = {name}/>
    </div>
  )
}

export default Parent