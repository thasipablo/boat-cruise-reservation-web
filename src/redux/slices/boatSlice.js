import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBoats = createAsyncThunk('boats/fetchBoats', async () => {
  const response = await fetch('http://localhost:3000/api/boats');
  return response.json();
});

export const fetchToDeleteBoats = createAsyncThunk('boats/fetchToDeleteBoats', async (boatId) => {
  try {
    console.log('Deleting boat with id:', boatId); // Log boat deletion
    const response = await fetch(`http://localhost:3000/api/boats/${boatId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('Delete response:', data); // Log delete response
    return data;
  } catch (error) {
    console.error('Delete error:', error); // Log delete error
    throw error;
  }
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
      })
      .addCase(fetchToDeleteBoats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchToDeleteBoats.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchToDeleteBoats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default boatSlice.reducer;
