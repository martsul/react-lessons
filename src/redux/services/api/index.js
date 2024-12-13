import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getMenuByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query({
      query: (dishId) => `/dish/${dishId}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: (...result) => [{ type: "Reviews", id: result[2] }],
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: (...result) => [
        { type: "Reviews", restaurantId: result[2].restaurantId },
      ],
    }),
    editReview: builder.mutation({
      query: ({ reviewId, review }) => ({
        url: `/review/${reviewId}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: (...result) => [
        { type: "Reviews", reviewId: result[2].reviewId },
      ],
    }),
  }),
});

export const {
  useGetDishByIdQuery,
  useGetMenuByRestaurantIdQuery,
  useGetRestaurantByIdQuery,
  useGetRestaurantsQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useAddReviewMutation,
  useEditReviewMutation,
} = apiSlice;
