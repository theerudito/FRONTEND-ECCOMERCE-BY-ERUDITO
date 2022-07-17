import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    data: { user: "jorge", password: "123" },
    login: false,
  },
  reducers: {
    getUser: (state, action) => {
      console.log(action.payload);
      state.data =
        action.payload.user === "jorge" && action.payload.password === "123"
          ? { user: "jorge", password: "123" }
          : { user: "", password: "" };
      state.login = true;
    },
  },
});

export const { getUser } = accountSlice.actions;
