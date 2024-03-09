/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const newBoat = createAsyncThunk('boat/addNewBoat', async (boatData) => {
  console.log(boatData);
  try {
    const response = await axios.post('http://localhost:3000/api/boats', boatData);
    console.log(boatData);
    localStorage.setItem('boat', JSON.stringify(response.data.data));
    return response.data.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
});

const newBoatSlice = createSlice({
  name: 'newBoat',
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
          state.error = 'rejected';
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default newBoatSlice.reducer;
/* eslint-disable no-param-reassign */
