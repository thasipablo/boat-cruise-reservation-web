import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Update path

const store = configureStore({
  reducer: rootReducer,
});

export default store;
