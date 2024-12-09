import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsIds } from "./restaurants-slice";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants/");
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("No Data!");
      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectRestaurantsIds(getState()).length == 0;
    },
  }
);
