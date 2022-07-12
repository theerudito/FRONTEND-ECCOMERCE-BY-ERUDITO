import {createSlice} from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    collection: [],
    products: [],
    computers: [],
    headsets: [],
    laptops: [],
    monitors: [],
    keyboards: [],
    accessories: [],
    isLoading: true,
    oneProduct: {},
    imageModal: {}
  },
  reducers: {
    //======================IMAGE MODAL=============================
      getImageModal: (state, action) => {
        state.imageModal = action.payload;
      },
    //======================IMAGE MODAL=============================


    //======================COLLECTIONS=============================
    getCollection: (state, actions) => {
            state.collection = actions.payload;
            state.isLoading = false;
      },
    //======================COLLECTIONS============================


    //=======================PRODUCTS==============================
    getProduct: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    oneProductModal: (state,action) => {
      state.oneProduct = action.payload
    },

    //=======================PRODUCTS==============================


    //=======================COMPUTERS=============================
    getComputers: (state, action) => {
        state.computers = action.payload;
        state.isLoading = false;
    },
    oneComputerModal: (state,action) => {
        state.oneProduct = action.payload
    },
    //=======================COMPUTERS=============================


    //=======================HEADSETS==============================
    getHeadsets: (state, action) => {
      state.headsets = action.payload;
      state.isLoading = false;
    },
    oneHeadsetModal: (state,action) => {
      state.oneProduct = action.payload
    },
    //=======================HEADSETS==============================


    //========================LAPTOPS==============================
    getLaptops: (state, action) => {
        state.laptops = action.payload;
        state.isLoading = false;
    },
    oneLaptopModal: (state,action) => {
        state.oneProduct = action.payload
    },
    //========================LAPTOPS===============================


    //=======================MONITORS===============================
    getMonitors: (state, action) => {
        state.monitors = action.payload;
        state.isLoading = false;
    },
    oneMonitorModal: (state,action) => {
        state.oneProduct = action.payload
    },
    //========================MONITORS==============================


    //=======================KEYBOARDS==============================
    getKeyboards: (state, action) => {
        state.keyboards = action.payload;
        state.isLoading = false;
    },
    oneKeyboardModal: (state,action) => {
        state.oneProduct = action.payload
    },
    //=======================KEYBOARDS==============================


    //=======================ACCESSORIES============================
    getAccessories: (state, action) => {
        state.accessories = action.payload;
        state.isLoading = false;
    },
    oneAccessoryModal: (state,action) => {
        state.oneProduct = action.payload
    }
  },
});

// actions para el reducer
export const {
  getCollection, getImageModal,
  getProduct, oneProductModal,
  getComputers, oneComputerModal,
  getHeadsets, oneHeadsetModal,
  getLaptops, oneLaptopModal,
  getMonitors, oneMonitorModal,
  getKeyboards, oneKeyboardModal,
  getAccessories, oneAccessoryModal
} = productsSlice.actions;
