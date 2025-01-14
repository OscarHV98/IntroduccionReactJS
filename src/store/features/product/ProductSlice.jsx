import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productos: [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ],
  filterText: '',
  inStock: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setFilterText: (state, action) => {
      state.filterText = action.payload;
    },
    setInStock: (state) => {
      state.inStock = !state.inStock;
    },
  },
});

export const { setFilterText, setInStock } = productSlice.actions;
export default productSlice.reducer;
