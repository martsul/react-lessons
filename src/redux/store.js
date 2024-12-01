import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurants/restaurants-slice";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
  }
})
