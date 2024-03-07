import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import boatReducer from './slices/boatSlice';
import newBoatreducer from './slices/newBoatSlice';
import reservationReducer from './slices/reservationSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    boats: boatReducer,
    newBoat: newBoatreducer,
    reservation: reservationReducer,
  },
});

export default store;
