import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import boatReducer from './slices/boatSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    boats: boatReducer,
  },
});

export default store;
