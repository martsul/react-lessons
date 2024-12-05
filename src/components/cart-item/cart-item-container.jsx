import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./cart-item";
import { selectMenuById } from "../../redux/entities/menu/menu-slice";
import {
  decreaseItemsInCart,
  deleteItemsInCart,
  increaseItemsInCart,
  selectAmountItemsInCart,
} from "../../redux/ui/cart/cart-slice";

export const CartItemContainer = ({ id }) => {
  const { ingredients, name, price } = useSelector((state) =>
    selectMenuById(state, id)
  );
  const quantity = useSelector((state) => selectAmountItemsInCart(state, id));

  const dispatch = useDispatch();
  const increaseValue = () => dispatch(increaseItemsInCart(id));
  const decreaseValue = () => dispatch(decreaseItemsInCart(id));
  const deleteItem = () => dispatch(deleteItemsInCart(id));

  

  return (
    <CartItem
      params={{ ingredients, name, price, quantity }}
      functions={{ increaseValue, decreaseValue, deleteItem }}
    />
  );
};
