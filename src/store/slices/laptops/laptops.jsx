import { createSlice } from "@reduxjs/toolkit";

export const laptopsSlice = createSlice({
  name: "laptops",
  initialState: {
    laptops: [],
    isLoading: true,
    oneLaptop: {},
  },
  reducers: {
    getLaptops: (state, action) => {
      state.laptops = action.payload;
    },
    oneLaptopModal: (state, action) => {
        state.oneLaptop = action.payload;
    }
  },
});

// actions para el reducer
//export const { getLaptops, oneLaptopModal } = laptopsSlice.actions;
