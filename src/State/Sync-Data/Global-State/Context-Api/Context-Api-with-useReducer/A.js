import React, { useState } from 'react'
import B from './B'
import C from './C'

export var cakeContext = React.createContext()

function A() {

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
      <cakeContext.Provider value={{state, dispatch}}>
      <B />
      <C />
      </cakeContext.Provider>
    </div>
  )
}

export default A