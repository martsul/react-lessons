"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemsInCart,
  increaseItemsInCart,
  selectAmountItemsInCart,
} from "../../redux/ui/cart/cart-slice";
import { Dish } from "./dish";

export const DishContainer = ({ data, dishId }) => {
  const dispatch = useDispatch();

  const quantity =
    useSelector((state) => selectAmountItemsInCart(state, dishId)) || 0;

  const increaseValue = () => dispatch(increaseItemsInCart(dishId));

  const decreaseValue = () => dispatch(decreaseItemsInCart(dishId));

  return (
    <Dish
      data={data}
      quantity={quantity}
      increaseValue={increaseValue}
      decreaseValue={decreaseValue}
    />
  );
};
