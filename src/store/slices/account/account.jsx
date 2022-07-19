import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    data: { },
    login: false,
  },
  reducers: {
    getUser: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
      state.login = true;
    },
  },
});

export const { getUser } = accountSlice.actions;
