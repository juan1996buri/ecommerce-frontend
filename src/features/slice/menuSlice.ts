import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface menuStatus {
  isActive: boolean;
}
const initialState: menuStatus = {
  isActive: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    stateMenu: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { stateMenu } = menuSlice.actions;
