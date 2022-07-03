import { createSlice } from "@reduxjs/toolkit";

export const monitorsSlice = createSlice({
  name: "monitors",
  initialState: {
    monitors: [],
    isLoading: false,
  },
  reducers: {
    getMonitors: (state, action) => {
      state.monitors = action.payload;
    },
  },
});

// actions para el reducer
export const { getMonitors } = monitorsSlice.actions;
