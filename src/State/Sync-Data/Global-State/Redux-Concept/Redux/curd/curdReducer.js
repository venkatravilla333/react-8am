import { BUYCURD } from "./actionTypes"


var initialState = {
  noOfCurds: 50
}

export var curdReducer = (state=initialState, action) => {
  switch (action.type) {
    case BUYCURD:
      return {
        noOfCurds: state.noOfCurds - 1
      }
      break;
    default:
      return state
  }
}