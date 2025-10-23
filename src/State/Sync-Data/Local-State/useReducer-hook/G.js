import React, { useReducer} from 'react'

function G() {

  var initiaState = {
    noOfCakes: 100
  }

  var cakeReducer = (state = initiaState, action) => {
    console.log(action)
    switch (action.type) {
      case 'BUYCAKE':
        return {
          noOfCakes: state.noOfCakes - 1
        }
        break;
     
    }
  }
  
  var [state, dispatch] = useReducer(cakeReducer, initiaState)
  
 
  return (
    <div>
      <h3>G: noOfcakes {state.noOfCakes} </h3>
      <button onClick={()=>dispatch({type: 'BUYCAKE'})}>update state</button>
    </div>
  )
}

export default G