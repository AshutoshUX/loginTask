import * as types from "./types";
  
export const resetAction = () => {

  return function (dispatch) {
    dispatch({
      type: types.RESET_USER
    });
    
  }}  


    export const updateEmailAction = (id) => {

      return function (dispatch) {
        dispatch({
          type: types.UPDATE_EMAIL,
          payload:id
        });
        
      }}  


    export const updatePassAction = (id) => {

      return function (dispatch) {
        dispatch({
          type: types.UPDATE_PASS,
          payload:id
        });
        
      }}  
    
