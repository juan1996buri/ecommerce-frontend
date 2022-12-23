import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "./api/api";
import { cartSlice } from "./slice/cartSlice";
import { menuSlice } from "./slice/menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
