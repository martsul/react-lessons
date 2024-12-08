import { createSlice } from "@reduxjs/toolkit";

const STATUS_PENDING = "pending";
const STATUS_REJECTED = "rejected";
const STATUS_FULFILLED = "fulfilled";

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  selectors: {
    selectRequestStatusById: (state, id) => state[id],
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = STATUS_PENDING;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = STATUS_FULFILLED;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { meta }) => {
          state[meta.requestId] = STATUS_REJECTED;
        }
      ),
});

export const { selectRequestStatusById } = requestSlice.selectors;
export { STATUS_PENDING, STATUS_REJECTED };
