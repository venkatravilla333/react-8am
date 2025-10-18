import React from 'react'
import { store } from '../Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Redux/cake/actionCreator'
import { buyCurd } from '../Redux/curd/actionCreator'

function G() {
  var noOfCakes =  useSelector((state) => {
    return state.cake.noOfCakes
  })
  var noOfCurds =  useSelector((state) => {
    return state.curd.noOfCurds
  })
  var dispatch = useDispatch()
  return (
    <div>
      <h3>G : noOfCakes: {noOfCakes}</h3>
      <button onClick={()=>dispatch(buyCake())}>Buycake</button>
      <h3>G : noOfCurds: {noOfCurds}</h3>
      <button onClick={()=>dispatch(buyCurd())}>Buycurd</button>
    </div>
  )
}

export default G