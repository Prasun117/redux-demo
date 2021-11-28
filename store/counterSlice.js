import { createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0, counterSwitch: true };
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      if (state.counter < 100) state.counter = state.counter + 1;
    },
    decrement(state) {
      if (state.counter > 0) state.counter = state.counter - 1;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    }
  }
});
