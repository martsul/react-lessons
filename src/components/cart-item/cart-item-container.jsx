import { CartItem } from "./cart-item";
import {
  decreaseItemsInCart,
  deleteItemsInCart,
  increaseItemsInCart,
  selectAmountItemsInCart,
} from "../../redux/ui/cart/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { getDishById } from "../../services/get-dish-by-id";
import { useState } from "react";
import { CartItemSkeleton } from "./cart-item-skeleton";

function returnedPromise(callback, resolve) {
  callback({
    compleat: true,
    data: resolve,
  });
}

export const CartItemContainer = ({ id }) => {
  const [dishIsReturned, useDishIsReturned] = useState({
    compleat: false,
    data: {},
  });

  if (!dishIsReturned.compleat) {
    getDishById(id).then((resolve) => {
      returnedPromise(useDishIsReturned, resolve);
    });
  }

  const quantity = useSelector((state) => selectAmountItemsInCart(state, id));

  const dispatch = useDispatch();
  const increaseValue = () => dispatch(increaseItemsInCart(id));
  const decreaseValue = () => dispatch(decreaseItemsInCart(id));
  const deleteItem = () => dispatch(deleteItemsInCart(id));

  if (!dishIsReturned.compleat) {
    return <CartItemSkeleton />;
  }

  const { name, ingredients, price } = dishIsReturned.data;

  return (
    <CartItem
      parameters={{ ingredients, name, price, quantity, id }}
      functions={{ increaseValue, decreaseValue, deleteItem }}
    />
  );
};
