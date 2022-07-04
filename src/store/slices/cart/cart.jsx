import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isLoading: false,
  },
  reducers: {
    addCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    getCounter: (state, action) => {
      state.counter += action.payload;
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
  },
});

// actions para el reducer
export const { addCart, getCounter, deleteCart } = cartSlice.actions;
