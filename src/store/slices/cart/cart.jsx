import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isLoading: false,
    counter: 0,
    increment: 0,
    total: 0,
    data: { user: "", email: "" },
  },
  reducers: {
    addCart: (state, action) => {
      const id = action.payload._id;
      if (state.cart.findIndex((itemOld) => itemOld._id === id) < 0) {
        state.cart = [
          ...state.cart,
          { ...action.payload, cantidad: 1, valueTotal: 0 },
        ];
      } else {
        state.cart = state.cart.map((itemOld) => {
          if (itemOld._id === id) {
            return {
              ...itemOld,
              cantidad: itemOld.cantidad + 1,
              valueTotal: itemOld.price * (itemOld.cantidad + 1),
            };
          } else {
            return itemOld;
          }
        });
      }
    },

    getPriceTotal: (state) => {
      const cant = state.cart.map((item) => item.valueTotal);
      const vTotal = cant.reduce((cant, priceUni) => cant + priceUni, 0);
      state.priceTotal += vTotal;
    },
    getTotal: (state) => {
      const Total = state.cart
        .map((item) => item.valueTotal)
        .reduce((a, b) => a + b, 0);
      state.total += Total;
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
      state.counter = action.payload ? action.payload : 0;
    },
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
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
