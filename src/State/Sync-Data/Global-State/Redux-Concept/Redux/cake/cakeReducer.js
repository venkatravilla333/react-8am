import { BUYCAKE } from "./actionTypes";


var initialState = {
  noOfCakes: 100
}

export function cakeReducer(state = initialState, action) {
  switch (action.type) {
    case BUYCAKE:
      return {
        noOfCakes: state.noOfCakes - 1
      }
      break;
    default:
    return  state
  }
}