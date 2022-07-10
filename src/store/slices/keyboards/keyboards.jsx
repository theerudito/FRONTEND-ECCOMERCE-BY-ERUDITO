import { createSlice } from "@reduxjs/toolkit";

export const keyboardsSlice = createSlice({
  name: "keyboards",
  initialState: {
    keyboards: [],
    isLoading: false,
    oneKeyboard: {},
  },
  reducers: {
    getKeyboards: (state, action) => {
      state.keyboards = action.payload;
    },
    oneKeyboardModal: (state, action) => {
        state.oneKeyboard = action.payload;
    }
  },
});

// actions para el reducer
//export const { getKeyboards, oneKeyboardModal } = keyboardsSlice.actions;
