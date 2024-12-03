import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../mock-constants/normalized-mock";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  },
});

export const { selectRestaurantById, selectRestaurantsIds } =
  restaurantSlice.selectors;
