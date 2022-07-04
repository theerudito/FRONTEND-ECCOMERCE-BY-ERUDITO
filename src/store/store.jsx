import { configureStore } from "@reduxjs/toolkit";
import { colectionSlice } from "./slices/colection";
import { computerSlice } from "./slices/computer";
import { heasetsSlice } from "./slices/heasets/heasets";
import { productsSlice } from "./slices/products/";
import { laptopsSlice } from "./slices/laptops/";
import { monitorsSlice } from "./slices/monitors/monitors";
import { keyboardsSlice } from "./slices/keyboards/keyboards";
import { accessoriesSlice } from "./slices/accessories/accessories";
import { cartSlice } from "./slices/cart";

export const store = configureStore({
  reducer: {
    colections: colectionSlice.reducer,
    products: productsSlice.reducer,
    computers: computerSlice.reducer,
    heasets: heasetsSlice.reducer,
    laptops: laptopsSlice.reducer,
    monitors: monitorsSlice.reducer,
    keyboards: keyboardsSlice.reducer,
    accessories: accessoriesSlice.reducer,
    cart: cartSlice.reducer,
  },
});
