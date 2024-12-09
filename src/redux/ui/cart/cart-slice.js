import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    increaseItemsInCart: (state, { payload }) => {
      if (state[payload] == 5) {
        return;
      }

      state[payload] = (state[payload] || 0) + 1;
    },
    decreaseItemsInCart: (state, { payload }) => {
      if (!state[payload]) {
        return;
      } else if (state[payload] <= 1) {
        delete state[payload];
        return;
      }

      state[payload] = state[payload] - 1;
    },
    deleteItemsInCart: (state, { payload }) => {
      delete state[payload];
    },
  },
  selectors: {
    selectCartItems: (state) => Object.keys(state),
    selectAmountItemsInCart: (state, id) => state[id],
  },
});

export const { increaseItemsInCart, decreaseItemsInCart, deleteItemsInCart } =
  cartSlice.actions;
export const { selectAmountItemsInCart } = cartSlice.selectors;

const selectCartSlice = (state) => state.cart;
export const selectCartItems = createSelector([selectCartSlice], (cartState) =>
  Object.keys(cartState)
);
