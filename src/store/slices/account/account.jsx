import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    data: { email: "", password: "" },
    login: false,
    register: true,
  },
  reducers: {
    getUser: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    },
    goLogin: (state, action) => {
      state.login = action.payload;
      state.register = false;
    },
    goRegister: (state, action) => {
      console.log(action.payload);
      state.register = action.payload;
      state.login = false;
    },
  },
});

export const { getUser, goLogin, goRegister } = accountSlice.actions;
