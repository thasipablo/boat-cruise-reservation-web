/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservations: [],
  isLoading: false,
};

export const sendReservation = createAsyncThunk('reservation/sendReservation', async (book) => {
  const response = await axios.post('https://react-rails-api-he81.onrender.com/api/reservations', {
    user_id: book.user_id,
    boat_id: book.boat_id,
    city: book.city,
    date: book.date,
  });

  return response.data;
});

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendReservation.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(sendReservation.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        reservations: [...state.reservations, action.payload],
      }));
  },
});

export default reservationSlice.reducer;
/* eslint-disable no-param-reassign */
