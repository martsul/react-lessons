import { useDispatch, useSelector } from "react-redux";
import { MenuListItem } from "./menu-list-item";
import {
  decreaseItemsInCart,
  increaseItemsInCart,
  selectAmountItemsInCart,
} from "../../redux/ui/cart/cart-slice";

export const MenuListContainer = ({ parameters }) => {
  const dispatch = useDispatch();

  const quantity =
    useSelector((state) => selectAmountItemsInCart(state, parameters.id)) || 0;
  const increaseValue = () => dispatch(increaseItemsInCart(parameters.id));
  const decreaseValue = () => dispatch(decreaseItemsInCart(parameters.id));

  return (
    <MenuListItem
      parameters={{ ...parameters, quantity }}
      decreaseValue={decreaseValue}
      increaseValue={increaseValue}
    />
  );
};
