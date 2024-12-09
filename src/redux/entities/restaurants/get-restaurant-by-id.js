import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./restaurants-slice";

export const getRestaurantById = createAsyncThunk(
  "restaurants/getRestaurantById",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`/api/restaurant/${id}`);
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("No Restaurant");
      return
    }

    return result;
  },
  {
    condition: (id, { getState }) => {
      return !selectRestaurantById(getState(), id);
    },
  }
);
