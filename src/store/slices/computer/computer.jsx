import { createSlice } from "@reduxjs/toolkit";

export const computerSlice = createSlice({
  name: "computer",
  initialState: {
    computer: [],
    isLoading: false,
  },
  reducers: {
    getComputer: (state, action) => {
      state.computer = action.payload;
    },
  },
});

// actions para el reducer
export const { getComputer } = computerSlice.actions;
