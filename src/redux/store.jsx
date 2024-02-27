import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './usersSlice/registrationSlice';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
});

export default store;
