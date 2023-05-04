import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface JokeState {
  value: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: JokeState = {
  value: '',
  status: 'idle',
  error: null,
};

export const fetchJoke = createAsyncThunk('joke/fetchJoke', async () => {
  const response = await axios.get('https://api.chucknorris.io/jokes/random');
  return response.data.value;
});

export const jokeSlice = createSlice({
  name: 'joke',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchJoke.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export default jokeSlice.reducer;
