import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices/products/";
import { cartSlice } from "./slices/cart/";

export const store = configureStore({
  // the root reducer is the combination of all reducers
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
