import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/signup/sign_up';

export const fetchRegistration = createAsyncThunk(
  'message/fetchRegistration',
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
  message: '',
  isLoading: true,
};

const registrationSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegistration.fulfilled, (state, action) => ({
      ...state,
      message: action.payload.content,
      isLoading: false,
    }));
    builder.addCase(fetchRegistration.rejected, (state, action) => {
      console.error('Error fetching registration:', action.payload);
      return {
        ...state,
        isLoading: false,
      };
    });
  },
});
export default registrationSlice.reducer;
