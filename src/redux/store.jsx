import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import boatReducer from './slices/boatSlice';
import newBoatreducer from './slices/newBoatSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    boats: boatReducer,
    newBoat: newBoatreducer,
  },
});

export default store;
