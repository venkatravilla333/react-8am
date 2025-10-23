import React, { useContext, useReducer} from 'react'
import { cakeContext } from './A'

function G() {

 var {state, dispatch} = useContext(cakeContext)
  return (
    <div>
      <h3>G: noOfcakes {state.noOfCakes} </h3>
      <button onClick={()=>dispatch({type: 'BUYCAKE'})}>update state</button>
    </div>
  )
}

export default G