/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('login/loginUser', async (userData) => {
  try {
    const response = await axios.post('http://localhost:3000/api/users/login', userData);
    localStorage.setItem('user', JSON.stringify(response.data.data));
    console.log('Fetched data in loginUser:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error in loginUser:', error.message);
    throw error;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {}, // Add any synchronous actions or reducers here
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
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.error('Error in loginUser:', action.error.message);
        if (action.error.message === 'Request failed with status code 401') {
          state.error = 'Access denied! Invalid credentials';
        } else {
          state.error = action.error.message;
        }
      });
  },
});
export const registerUser = createAsyncThunk('register/registerUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:3000/api/users', userData);
    localStorage.setItem('user', JSON.stringify(response.data.data));
    console.log('User registered successfully:', response.data.data);
    return response.data.data; // Return the user data after successful registration
  } catch (error) {
    console.error('Error in registerUser:', error.message);
    console.log('Error Response:', error.response);
    return rejectWithValue(error.message);
  }
});
export default userSlice.reducer;
/* eslint-disable no-param-reassign */
