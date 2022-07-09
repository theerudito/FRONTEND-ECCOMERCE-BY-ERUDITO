import { createSlice } from "@reduxjs/toolkit";

export const computerSlice = createSlice({
  name: "computer",
  initialState: {
    computer: [],
    isLoading: true,
    oneComputer: {},
  },
  reducers: {
    getComputer: (state, action) => {
      state.computer = action.payload;
      state.isLoading = false;
    },
    oneComputer: (state,action) => {
      state.oneComputer = action.payload;
    },
  },
});

// actions para el reducer
export const { getComputer, oneComputer } = computerSlice.actions;
