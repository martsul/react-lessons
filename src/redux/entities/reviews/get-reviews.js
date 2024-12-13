// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { selectRestaurantById } from "../restaurants/restaurants-slice";
// import { selectReviewsIds } from "./reviews-slice";

// export const getReviews = createAsyncThunk(
//   "reviews/getReviews",
//   async (id, { rejectWithValue }) => {
//     const response = await fetch(
//       `http://localhost:3001/api/reviews?restaurantId=${id}`
//     );
//     const result = await response.json();

//     if (!result.length) {
//       rejectWithValue("No Reviews");
//       return;
//     }

//     return result;
//   },
//   {
//     condition: (id, { getState }) => {
//       const activeReviews = selectRestaurantById(getState(), id).reviews;
//       const availableReviews = new Set(selectReviewsIds(getState()));

//       let canUpload = false;

//       activeReviews.forEach((review) => {
//         if (!availableReviews.has(review)) {
//           canUpload = true;
//         }
//       });

//       return canUpload;
//     },
//   }
// );
