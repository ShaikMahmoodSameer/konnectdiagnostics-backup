// authReducer.js
import { SET_AUTH } from '../constants/actionTypes';

const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload,
      };

    // Add other cases as needed for different actions

    default:
      return state;
  }
};

export default authReducer;

