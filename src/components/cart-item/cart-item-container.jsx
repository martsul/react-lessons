import { CartItem } from "./cart-item";
import {
  decreaseItemsInCart,
  deleteItemsInCart,
  increaseItemsInCart,
  selectAmountItemsInCart,
} from "../../redux/ui/cart/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const CartItemContainer = ({ parameters }) => {
  const { id } = parameters;
  const { data, isLoading, isError } = useGetDishByIdQuery(id);

  const quantity = useSelector((state) => selectAmountItemsInCart(state, id));

  const dispatch = useDispatch();
  const increaseValue = () => dispatch(increaseItemsInCart(id));
  const decreaseValue = () => dispatch(decreaseItemsInCart(id));
  const deleteItem = () => dispatch(deleteItemsInCart(id));

  if (isLoading) {
    return "Loading";
  }

  if (isError) {
    return "Error";
  }

  if (!data) {
    return;
  }

  const { name, ingredients, price } = data;

  return (
    <CartItem
      parameters={{ ingredients, name, price, quantity }}
      functions={{ increaseValue, decreaseValue, deleteItem }}
    />
  );
};
