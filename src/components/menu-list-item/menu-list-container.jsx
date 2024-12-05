import { useDispatch, useSelector } from "react-redux";
import { selectMenuById } from "../../redux/entities/menu/menu-slice";
import { MenuListItem } from "./menu-list-item";
import {
  decreaseItemsInCart,
  increaseItemsInCart,
  selectAmountItemsInCart,
} from "../../redux/ui/cart/cart-slice";

export const MenuListContainer = ({ id }) => {
  const dish = useSelector((state) => selectMenuById(state, id));

  const dispatch = useDispatch();

  const quantity =
    useSelector((state) => selectAmountItemsInCart(state, id)) || 0;
  const increaseValue = () => dispatch(increaseItemsInCart(id));
  const decreaseValue = () => dispatch(decreaseItemsInCart(id));

  if (!dish) {
    return;
  }

  return (
    <MenuListItem
      id={id}
      params={{ ...dish, quantity }}
      decreaseValue={decreaseValue}
      increaseValue={increaseValue}
    />
  );
};
