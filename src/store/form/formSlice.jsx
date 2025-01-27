import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  module: 'React Mod7',
  username: '',
  email: '',
  password: 'mod7USIP-Oscar-Herbas-Velasco',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const { username, email, password } = action.payload;
      // Solo guarda los valores si el password es válido
      if (password === 'mod7USIP-Oscar-Herbas-Velasco') {
        state.username = username;
        state.email = email;
        state.password = password;
      }
    },
    resetFormData: (state) => {
      state.username = '';
      state.email = '';
      state.password = 'mod7USIP-Oscar-Herbas-Velasco';
    },
  },
});

export const { setFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;
