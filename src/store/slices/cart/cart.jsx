import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isLoading: false,
    counter: 0,
    increment: 0,
    priceTotal: 0,
    total: 0,
    data: { user: "", email: "" },
  },
  reducers: {
    addCart: (state, action) => {
      state.total = 0;
      let id = action.payload._id;
      const check = state.cart.every((item) => {
        return item._id !== id;
      });

      if (check) {
        state.cart = [...state.cart, action.payload];
        state.counter = 0;
      }
    },
    getPriceTotal: (state, action) => {
      let price = Number(action.payload);
      console.log(price);
      state.priceTotal += price;
      
    },
    getTotal: (state) => {
      state.total += state.priceTotal;
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      if (state.cart.length === 0) {
        state.priceTotal = 0;
        state.total = 0;
      }
    },
    getPayment: (state, action) => {
      state.data = action.payload;
      state.total = 0;
      state.cart = [];
    },
    getCounter: (state, action) => {
      console.log(action.payload);
      state.counter += action.payload;
    },
    increment: (state, action) => {
      state.counter += action.payload;
    },
    decrement: (state, action) => {
      state.counter -= action.payload;
    },
  },
});

// actions para el reducer
export const {
  addCart,
  getCounter,
  getPriceTotal,
  getTotal,
  deleteCart,
  getPayment,
  increment,
  decrement,
} = cartSlice.actions;
