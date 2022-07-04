import { createSlice } from "@reduxjs/toolkit";

export const computerSlice = createSlice({
  name: "computer",
  initialState: {
    computer: [],
    isLoading: true,
    oneComputer: {},
    counter: 0,
    increment: 0,
    decrement: 0,
  },
  reducers: {
    getComputer: (state, action) => {
      state.computer = action.payload;
      state.isLoading = false;
    },
    oneComputer: (state, action) => {
      state.oneComputer = action.payload;
    },
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1 ? state.counter : 0;
    },
  },
});

// actions para el reducer
export const { getComputer, oneComputer, increment, decrement } =
  computerSlice.actions;
