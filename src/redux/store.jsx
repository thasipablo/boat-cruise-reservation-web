import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import boatReducer from './slices/boatSlice';
import newBoatReducer from './slices/newBoatSlice';
import reservationReducer from './slices/reservationSlice';
import myReservationReducer from './slices/myReservationSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    boats: boatReducer,
    newBoat: newBoatReducer,
    reservation: reservationReducer,
    myReservations: myReservationReducer,
  },
});

export default store;
