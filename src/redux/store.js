import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./ui/cart/cart-slice";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
  },
});
