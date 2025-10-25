import React from 'react'

function Login(props) {
  return (
    <div>
      <h3>Login</h3>
      <form style={{border:'2px solid black', padding: "30px", width:"400px"}}>
        <div>
        <label htmlFor="">Enter name</label>
        <input type="text" />
        </div>
        <div>
        <label htmlFor="">Enter Email</label>
        <input type="email" />
        </div>
        <div>
        <label htmlFor="">Enter Password</label>
        <input type="password" />
        </div>
        <button onClick={()=>props.setLogin(true)} style={{width: "100px"}}>Login</button>
      </form>
    </div>
  )
}

export default Login