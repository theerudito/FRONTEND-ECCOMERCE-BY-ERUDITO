import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isLoading: false,
    counter: 0,
    increment: 0,
    priceTotal: 0,
    data: { user: "", email: "" },
  },
  reducers: {
    addCart: (state, action) => {
      let id = action.payload._id;
      const check = state.cart.every((item) => {
        return item._id !== id;
      });
      if (check) {
        const products = state.cart.filter((product) => {
          return product._id === id;
        });

        state.cart = [...state.cart, ...products, action.payload];
      }
    },
    getCounter: (state) => {
      state.counter += 1;
    },
    getPriceTotal: (state, action) => {
      let price = Number(action.payload);
      state.priceTotal += price;
    },
    getTotal: (state) => {
      state.counter += 1;
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    getPayment: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
      state.cart = [];
    },
  },
});

// actions para el reducer
export const { addCart, getCounter, getPriceTotal, deleteCart, getPayment } =
  cartSlice.actions;
