import React, { useState } from 'react'
import Profile from './Profile'
import Login from './Login'

function Parent() {

  var [login, setLogin] = useState(true)

  // var element

  // if (login) {
  //   return <Profile  setLogin={setLogin}/>
  // } else {
  //   return <Login setLogin={setLogin} />
  // }
  // if (login) {
  //   element = <Profile  setLogin={setLogin}/>
  // } else {
  //   element = <Login setLogin={setLogin} />
  // }

  // return element

  // {
  //  return login ? <Profile  setLogin={setLogin}/> : <Login setLogin={setLogin} /> 
  // }
  
 return login && <Profile  setLogin={setLogin}/>
  
  // return (
  //   <div>
  //     <h2>Login</h2>
  //     <h2>Profile</h2>
  //   </div>
  // )
}

export default Parent