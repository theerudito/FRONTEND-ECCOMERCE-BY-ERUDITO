import { createSlice } from "@reduxjs/toolkit";

export const laptopsSlice = createSlice({
  name: "laptops",
  initialState: {
    laptops: [],
    isLoading: false,
  },
  reducers: {
    getLaptops: (state, action) => {
      state.laptops = action.payload;
    },
  },
});

// actions para el reducer
export const { getLaptops } = laptopsSlice.actions;
