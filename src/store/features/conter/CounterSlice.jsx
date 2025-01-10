import { createSlice } from '@reduxjs/toolkit';

const initialState = {  // Aca se define todas las variables globales
  value: 0,
  isLogged: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    toggleIsLogged: (state) => {
      state.isLogged = !state.isLogged; 
    },
  },
})


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, toggleIsLogged } = counterSlice.actions

export default counterSlice.reducer