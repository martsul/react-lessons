import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "../restaurants/restaurants-slice";
import { selectMenuIds } from "./menu-slice";

export const getMenu = createAsyncThunk(
  "menu/getMenu",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${id}`
    );
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("No Menu");
      return;
    }
    return result;
  },
  {
    condition: (id, { getState }) => {
      const activeMenu = selectRestaurantById(getState(), id).menu;
      const availableMenu = new Set(selectMenuIds(getState()));

      let canUpload = false;

      activeMenu.forEach((dish) => {
        if (!availableMenu.has(dish)) {
          canUpload = true;
        }
      });

      return canUpload;
    },
  }
);
