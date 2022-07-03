import { createSlice } from "@reduxjs/toolkit";

export const keyboardsSlice = createSlice({
  name: "keyboards",
  initialState: {
    keyboards: [],
    isLoading: false,
  },
  reducers: {
    getKeyboards: (state, action) => {
      state.keyboards = action.payload;
    },
  },
});

// actions para el reducer
export const { getKeyboards } = keyboardsSlice.actions;
