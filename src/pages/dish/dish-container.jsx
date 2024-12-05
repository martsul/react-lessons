import { useParams } from "react-router-dom";
import { Dish } from "./dish";
import { useDispatch, useSelector } from "react-redux";
import { selectMenuById } from "../../redux/entities/menu/menu-slice";
import { decreaseItemsInCart, increaseItemsInCart, selectAmountItemsInCart } from "../../redux/ui/cart/cart-slice";

export const DishContainer = () => {
  const { menuId } = useParams();

  const dispatch = useDispatch();

  const params = useSelector((state) => selectMenuById(state, menuId));
  const quantity =
    useSelector((state) => selectAmountItemsInCart(state, menuId)) || 0;
  const increaseValue = () => dispatch(increaseItemsInCart(menuId));
  const decreaseValue = () => dispatch(decreaseItemsInCart(menuId));

  return (
    <Dish
      params={{ ...params, quantity }}
      increaseValue={increaseValue}
      decreaseValue={decreaseValue}
    />
  );
};
