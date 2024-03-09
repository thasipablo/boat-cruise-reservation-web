import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBoats = createAsyncThunk('boats/fetchBoats', async () => {
  const response = await fetch('https://react-rails-api-he81.onrender.com/api/boats');
  return response.json();
});

const boatSlice = createSlice({
  name: 'boats',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBoats.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBoats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default boatSlice.reducer;
