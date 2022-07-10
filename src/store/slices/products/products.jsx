import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    computers: [],
    headsets: [],
    laptops: [],
    monitors: [],
    keyboards: [],
    accessories: [],
    isLoading: true,
    oneProduct: {},
  },
  reducers: {
    //=======================PRODUCTS==============================
    getProduct: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    oneProductModal: (state,action) => {
      state.oneProduct = action.payload
    },


    //=======================PRODUCTS==============================
    getHeadsets: (state, action) => {
        state.headsets = action.payload;
        state.isLoading = false;
    },
    //=======================COMPUTERS=============================

    //=======================COMPUTERS=============================


    //=======================HEADSETS==============================
    oneHeadsetModal: (state,action) => {
      state.oneProduct = action.payload
    },
    //=======================HEADSETS==============================

    //========================LAPTOPS==============================
    //========================LAPTOPS==============================

    //=======================MONITORS==============================
    //=======================MONITORS==============================

  },
});

// actions para el reducer
export const { getProduct, oneProductModal, getHeadsets, oneHeadsetModal } = productsSlice.actions;
