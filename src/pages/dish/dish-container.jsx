"use client";

import { Dish } from "./dish";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemsInCart,
  increaseItemsInCart,
  selectAmountItemsInCart,
} from "../../redux/ui/cart/cart-slice";
import { useGetDishByIdQuery } from "../../redux/services/api";
import { usePathname } from "next/navigation";

export const DishContainer = () => {
  const dishId = usePathname().split("/")[2];

  const { data, isError, isLoading } = useGetDishByIdQuery(dishId);

  const dispatch = useDispatch();

  const quantity =
    useSelector((state) => selectAmountItemsInCart(state, dishId)) || 0;

  const increaseValue = () => dispatch(increaseItemsInCart(dishId));

  const decreaseValue = () => dispatch(decreaseItemsInCart(dishId));

  if (isError) {
    return "Error";
  }

  if (isLoading) {
    return "Loading";
  }

  if (!data) {
    return;
  }

  return (
    <Dish
      data={data}
      quantity={quantity}
      increaseValue={increaseValue}
      decreaseValue={decreaseValue}
    />
  );
};
