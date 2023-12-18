// index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  // Other reducers
  auth: authReducer,
});

export default rootReducer;
