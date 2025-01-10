import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/conter/CounterSlice.jsx';

const store = configureStore({
  reducer: {
   counter: counterReducer,
  },
})

export default store