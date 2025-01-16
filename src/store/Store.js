import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/conter/CounterSlice.jsx';
import productReducer from './features/product/ProductSlice.jsx';
import authReducer from './features/auth/authSlice.jsx';

const store = configureStore({
  reducer: {
   counter: counterReducer,
   product: productReducer,
   auth: authReducer,
  },
})

export default store