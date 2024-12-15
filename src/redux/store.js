import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./ui/cart/cart-slice";
import { requestSlice } from "./ui/request/request-slice";
import { apiSlice } from "./services/api";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
