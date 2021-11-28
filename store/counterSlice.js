import { createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0, counterSwitch: true };
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    decrement(state) {
      state.counter = state.decrement - 1;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    }
  }
});
