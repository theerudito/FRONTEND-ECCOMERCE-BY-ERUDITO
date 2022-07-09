import { createSlice } from "@reduxjs/toolkit";

export const accessoriesSlice = createSlice({
  name: "accessories",
  initialState: {
    accessories: [],
    isLoading: true,
    oneAccessory: {},
  },
  reducers: {
    getAccessories: (state, actions) => {
      state.accessories = actions.payload;
    },
      oneAccessoriesModal: (state, actions) => {
          state.oneAccessory = actions.payload;
      }
  },
});

// actions para el reducer
export const { getAccessories, oneAccessoriesModal } = accessoriesSlice.actions;
