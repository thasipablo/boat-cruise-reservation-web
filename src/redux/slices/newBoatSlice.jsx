/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const newBoat = createAsyncThunk('addNewBoat/', async (boatData) => {
  try {
    const response = await axios.post('http://localhost:3000/api/boats', boatData);
    localStorage.setItem('boat', JSON.stringify(response.data.data));
    console.log('Fetched data in addNewBoat:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error in addNewBoat:', error.message);
    throw error;
  }
});

const newBoatSlice = createSlice({
  name: 'boat',
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(newBoat.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(newBoat.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(newBoat.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.error('Error in addNewBoat:', action.error.message);
        if (action.error.message === 'Request failed with status code 401') {
          state.error = 'Access denied! Invalid credentials';
        } else {
          state.error = action.error.message;
        }
      });
  },
});
export default newBoatSlice.reducer;
/* eslint-disable no-param-reassign */
