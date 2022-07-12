import {configureStore} from "@reduxjs/toolkit";
import {productsSlice} from "./slices/products/";
import {cartSlice} from "./slices/cart/";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
