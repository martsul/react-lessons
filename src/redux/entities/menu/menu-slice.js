import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getMenu } from "./get-menu";
import { getDish } from "../dish/get-dish";

const entityAdapter = createEntityAdapter();

export const menuSlice = createSlice({
  name: "menu",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectMenuIds: (state) => state.ids,
    selectMenuById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder
      .addCase(getMenu.fulfilled, (state, { payload }) => {
        console.log(payload);
        
        entityAdapter.setMany(state, payload);
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        console.log(payload);
        
        entityAdapter.setOne(state, payload);
      }),
});

export const { selectMenuIds, selectMenuById } = menuSlice.selectors;
