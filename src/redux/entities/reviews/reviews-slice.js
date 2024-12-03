import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../mock-constants/normalized-mock";

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewsById: (state, id) => state.entities[id],
  },
});

export const { selectReviewsIds, selectReviewsById } = reviewsSlice.selectors;