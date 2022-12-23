import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface cartStatus {
  isActive: boolean;
}
const initialState: cartStatus = {
  isActive: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    stateCart: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { stateCart } = cartSlice.actions;
