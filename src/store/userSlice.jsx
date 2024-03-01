import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
/* eslint-disable no-param-reassign */

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (userCredentials) => {
    try {
      const response = await axios.post('http://localhost:4000/login', userCredentials);
      localStorage.setItem('user', JSON.stringify(response.data.data));
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error('Error in loginUser:', error.message);
      throw error;
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        console.log('Fetched data in loginUser:', action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === 'Request failed with status code 401') {
          state.error = 'Access denied! Invalid credentials';
        } else {
          state.error = action.error.message;
        }
      });
  },
});
export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (userCredentials) => {
    try {
      const response = await axios.post('http://localhost:4000/signup', userCredentials);
      localStorage.setItem('user', JSON.stringify(response.data.data));
      return response.data.data;
    } catch (error) {
      console.error('Error in registerUser:', error.message);
      console.log('Error Response:', error.response);
      throw error;
    }
  },
);

export default userSlice.reducer;
/* eslint-disable no-param-reassign */
