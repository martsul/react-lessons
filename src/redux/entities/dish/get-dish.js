import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectMenuById } from "../menu/menu-slice";

export const getDish = createAsyncThunk(
  "menu/getDish",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${id}`);

    const result = await response.json();

    if (!result) {
      rejectWithValue("No Dish");
      return;
    }

    return result;
  },
  {
    condition: (id, { getState }) => {
      return !selectMenuById(getState(), id);
    },
  }
);
