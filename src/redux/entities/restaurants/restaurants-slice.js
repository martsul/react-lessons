// import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
// import { getRestaurants } from "./get-restaurants";

// const entityAdapter = createEntityAdapter();

// export const restaurantSlice = createSlice({
//   name: "restaurant",
//   initialState: entityAdapter.getInitialState(),
//   selectors: {
//     selectRestaurantsIds: (state) => state.ids,
//     selectRestaurantById: (state, id) => state.entities[id],
//   },
//   extraReducers: (builder) =>
//     builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
//       entityAdapter.setMany(state, payload);
//     }),
// });

// export const { selectRestaurantById, selectRestaurantsIds } =
//   restaurantSlice.selectors;
