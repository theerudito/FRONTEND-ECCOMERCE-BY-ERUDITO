import { createSlice } from "@reduxjs/toolkit";

export const accessoriesSlice = createSlice({
  name: "accessories",
  initialState: {
    accessorie: [],
    isLoading: false,
  },
  reducers: {
    getAccessories: (state, actions) => {
      state.accessorie = actions.payload;
    },
  },
});

// actions para el reducer
export const { getAccessories } = accessoriesSlice.actions;
