import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/conter/CounterSlice.jsx';
import productReducer from './features/product/ProductSlice.jsx';


const store = configureStore({
  reducer: {
   counter: counterReducer,
   product: productReducer,
  },
})

export default store