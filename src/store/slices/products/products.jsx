import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: true,
    oneProduct: {},
  },
  reducers: {
    getProduct: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    oneProductModal: (state,action) => {
      state.oneProduct = action.payload
    },
  },
});

// actions para el reducer
export const { getProduct, oneProductModal } = productsSlice.actions;
