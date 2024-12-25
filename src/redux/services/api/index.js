import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getDishById: builder.query({
      query: (dishId) => `/dish/${dishId}`,
    }),
  }),
});

export const { useGetDishByIdQuery } = apiSlice;
