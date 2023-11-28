import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  no: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateNo: (state, action) => {
      state.no = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateNo } = cartSlice.actions;

export default cartSlice.reducer;
