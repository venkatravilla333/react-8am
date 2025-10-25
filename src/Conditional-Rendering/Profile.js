import React from 'react'

function Profile(props) {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NULSQowGGlDvyPonqQLvLy4cwcjn8DZ1aw&s" alt="" />
      <h2>Name: sachin</h2>
      <h2>Age: 40</h2>
      <h2>City: Mumbai</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat optio quaerat id vero veniam est esse tempora perspiciatis sapiente repellat eveniet ab expedita quasi reiciendis provident, hic repudiandae ex? Sit, minima! Adipisci quaerat fugiat ipsam ipsum, qui eveniet, quod maiores maxime sed recusandae fuga labore sint harum delectus neque eos.</p>

      <button onClick={()=>props.setLogin(false)}>Logout</button>
      
    </div>
  )
}

export default Profile