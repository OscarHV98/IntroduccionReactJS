import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/conter/CounterSlice.jsx';
import productReducer from './features/product/ProductSlice.jsx';
import formReducer from './form/formSlice.jsx';

const store = configureStore({
  reducer: {
   counter: counterReducer,
   product: productReducer,
   form: formReducer,
  },
})

export default store