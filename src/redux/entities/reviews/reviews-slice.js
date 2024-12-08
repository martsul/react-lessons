import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewsById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});

export const { selectReviewsIds, selectReviewsById } = reviewsSlice.selectors;
