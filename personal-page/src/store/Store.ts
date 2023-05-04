import { configureStore } from '@reduxjs/toolkit';
import jokeReducer from '../slices/ChuckSlice';

export const Store = configureStore({
  reducer: {
    joke: jokeReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type StoreDispatch = typeof Store.dispatch;