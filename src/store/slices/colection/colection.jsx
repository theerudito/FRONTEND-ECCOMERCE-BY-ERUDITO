import { createSlice } from "@reduxjs/toolkit";

export const colectionSlice = createSlice({
  name: "colection",
  initialState: {
    colection: [],
    isLoading: false,
  },
  reducers: {
    getColection: (state, actions) => {
      state.colection = actions.payload;
    },
  },
});

// actions para el reducer
export const { getColection } = colectionSlice.actions;
