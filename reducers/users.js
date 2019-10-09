import * as types from "../actions/types";


export default function users(state = { emai: "", password: "" }, action) {
  //console.log("in Reducer", action.payload);

  switch (action.type) {

    case types.RESET_USER:
      return {
        ...state,
        emai: "", password: "" 
      };

    case types.UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case types.UPDATE_PASS:
      return {
        ...state,
        password: action.payload,
      };


    default:
      return (state);
  }
}