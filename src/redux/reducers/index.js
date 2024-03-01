import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Update path

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
});

export default rootReducer;
