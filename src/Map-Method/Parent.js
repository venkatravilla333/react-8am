import React, { useState } from 'react'

function Parent() {
  var [products] = useState([{ name: 'Apple', price: 200 }, { name: 'Banana', price: 60 },
    { name: 'Orange', price: 40 }, { name: 'Grape', price: 100 },
    {name: 'Papaya', price: 30}
  ])
  return (
    <div>
      <h3>Products</h3>
      {/* <h4>Name: {products[0].name}</h4>
      <h4>Price: {products[0].price}</h4>
      <h4>Name: {products[1].name}</h4>
      <h4>Price: {products[1].price}</h4>
      <h4>Name: {products[2].name}</h4>
      <h4>Price: {products[2].price}</h4>
      <h4>Name: {products[3].name}</h4>
      <h4>Price: {products[3].price}</h4> */}
      {
        products.map((product) => {
         return <>
            <h4>Name: {product.name}</h4>
            <h4>Price: {product.price}</h4>
          </>
        })
      }
    </div>
  )
}

export default Parent