import { createSlice } from "@reduxjs/toolkit";

export const headsetsSlice = createSlice({
  name: "headsets",
  initialState: {
    headsets: [],
    isLoading: true,
    oneHeadset: {},
  },
  reducers: {
    getHeadsets: (state, action) => {
      state.headsets = action.payload;
    },
    oneHeadsetModal: (state, action) => {
      state.oneHeadset = action.payload;
    }
  },
});

// actions para el reducer
//export const { d } = headsetsSlice.actions;
