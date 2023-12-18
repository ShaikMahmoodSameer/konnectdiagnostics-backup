// authActions.js
import { SET_AUTH } from '../constants/actionTypes';

export const setAuth = (isAuthenticated) => ({
  type: SET_AUTH,
  payload: isAuthenticated,
});
