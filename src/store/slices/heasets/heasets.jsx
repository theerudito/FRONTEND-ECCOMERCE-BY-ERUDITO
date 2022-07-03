import { createSlice } from "@reduxjs/toolkit";

export const heasetsSlice = createSlice({
  name: "heasets",
  initialState: {
    heasets: [],
    isLoading: false,
  },
  reducers: {
    getHeasets: (state, action) => {
      state.heasets = action.payload;
    },
  },
});

// actions para el reducer
export const { getHeasets } = heasetsSlice.actions;
