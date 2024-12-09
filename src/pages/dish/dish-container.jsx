import { useParams } from "react-router-dom";
import { Dish } from "./dish";
import { useDispatch, useSelector } from "react-redux";
import { selectMenuById } from "../../redux/entities/menu/menu-slice";
import {
  decreaseItemsInCart,
  increaseItemsInCart,
  selectAmountItemsInCart,
} from "../../redux/ui/cart/cart-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getDish } from "../../redux/entities/dish/get-dish";
import {
  STATUS_PENDING,
  STATUS_REJECTED,
} from "../../redux/ui/request/request-slice";

export const DishContainer = () => {
  const { menuId } = useParams();

  const requestStatus = useRequest(getDish, menuId);

  const dispatch = useDispatch();

  const params = useSelector((state) => selectMenuById(state, menuId));

  const quantity =
    useSelector((state) => selectAmountItemsInCart(state, menuId)) || 0;

  const increaseValue = () => dispatch(increaseItemsInCart(menuId));

  const decreaseValue = () => dispatch(decreaseItemsInCart(menuId));

  if (requestStatus == STATUS_REJECTED) {
    return "Error";
  }

  if (requestStatus == STATUS_PENDING) {
    return "Loading";
  }
  if (!params) {
    return;
  }

  return (
    <Dish
      params={{ ...params, quantity }}
      increaseValue={increaseValue}
      decreaseValue={decreaseValue}
    />
  );
};
