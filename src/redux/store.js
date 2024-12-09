import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurants/restaurants-slice";
import { menuSlice } from "./entities/menu/menu-slice";
import { reviewsSlice } from "./entities/reviews/reviews-slice";
import { usersSlice } from "./entities/users/users-slice";
import { cartSlice } from "./ui/cart/cart-slice";
import { requestSlice } from "./ui/request/request-slice";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [menuSlice.name]: menuSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer
  },
});
