// Import any necessary action types
import {
    CHANGE_LOADING,
    LOGIN,
    CHANGE_TOKEN,
    ERR_MESSAGE
  } from '../actions/types'; // Make sure to define these action types
  
  // Define the initial state of your reducer
  const initialState = {
    loading: false,
    isAuthenticated: false,
    token: null,
    errorMessage: '',
  };
  
  // Define the reducer function
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_LOADING:
        return {
          ...state,
          loading: action.value,
        };
      case LOGIN:
        return {
          ...state,
          isAuthenticated: action.value,
        };
      case CHANGE_TOKEN:
        return {
          ...state,
          token: action.value,
        };
      case ERR_MESSAGE:
        return {
          ...state,
          errorMessage: action.value,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  