import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../mock-constants/normalized-mock";

const initialState = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  selectors: {
    selectMenuIds: (state) => state.id,
    selectMenuById: (state, id) => state.entities[id],
  }
});

export const {selectMenuIds,selectMenuById} = menuSlice.selectors
