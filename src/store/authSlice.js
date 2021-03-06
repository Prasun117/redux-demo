import { createSlice } from "@reduxjs/toolkit";
const initialState = { isAuthenticated: false };
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    }
  }
});
