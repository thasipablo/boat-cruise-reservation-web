/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMyReservations = createAsyncThunk(
  'message/fetchReservations',
  async (_, { rejectWithValue }) => {
    try {
      const userString = localStorage.getItem('user');
      const user = userString ? JSON.parse(userString) : null;

      if (user) {
        const url = `https://boat-cruise-reservation-api.onrender.com/api/reservations/${user.name}`;
        const response = await axios.get(url);
        console.log(response);
        return response.data;
      }
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  reservations: [],
  isLoading: true,
};

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMyReservations.fulfilled, (state, action) => {
      state.reservations = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchMyReservations.rejected, (state, action) => {
      console.error('Error fetching reservations:', action.payload);
      state.isLoading = false;
    });
  },
});

export default reservationSlice.reducer;

/* eslint-disable no-param-reassign */
