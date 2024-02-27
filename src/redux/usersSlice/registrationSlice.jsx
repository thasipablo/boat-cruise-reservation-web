import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:4000/signup';

export const fetchRegistration = createAsyncThunk(
  'user/fetchRegistration',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  status: 'idle',
  userToken: '',
  error: null,
  message: '',
  isLoading: true,
};

const registrationSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegistration.fulfilled, (state, action) => ({
      ...state,
      message: action.payload.content,
      isLoading: false,
    }));
    builder.addCase(fetchRegistration.rejected, (state, action) => {
      console.error('Error fetching registration form:', action.payload);
      return {
        ...state,
        isLoading: false,
      };
    });
  },
});

export default registrationSlice.reducer;
