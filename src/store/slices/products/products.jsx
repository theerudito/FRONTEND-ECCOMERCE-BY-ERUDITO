import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    oneComputer: {},
  },
  reducers: {
    getproducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// actions para el reducer
export const { getproducts } = productsSlice.actions;
