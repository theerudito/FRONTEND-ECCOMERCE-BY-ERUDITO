import { createSlice } from "@reduxjs/toolkit";

const LocalStorage = JSON.parse(localStorage.getItem("token"));

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    data: {
      name: LocalStorage === null ? "" : LocalStorage.name,
      email: LocalStorage === null ? "" : LocalStorage.email,
      token: LocalStorage === null ? "" : LocalStorage.accesToken,
    },
    login: false,
    register: true,
  },
  reducers: {
    getUser: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    },
    goLogin: (state, action) => {
      console.log(action.payload);
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
