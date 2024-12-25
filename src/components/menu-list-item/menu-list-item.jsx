"use client";

import classNames from "classnames";
import { Count } from "../count/count";
import { useSign } from "../sign-context/use-sign";
import styles from "./menu-list-item.module.css";
import { useTheme } from "../theme-context/use-theme";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemsInCart,
  increaseItemsInCart,
  selectAmountItemsInCart,
} from "../../redux/ui/cart/cart-slice";

export const MenuListItem = ({ dish }) => {
  const { signIn } = useSign();
  const { isLightTheme } = useTheme();

  const dispatch = useDispatch();

  const quantity =
    useSelector((state) => selectAmountItemsInCart(state, dish.id)) || 0;
  const increaseValue = () => dispatch(increaseItemsInCart(dish.id));
  const decreaseValue = () => dispatch(decreaseItemsInCart(dish.id));

  const { name, price, ingredients, id } = dish;

  return (
    <li
      className={classNames(styles.item, {
        [styles.light]: isLightTheme,
      })}
    >
      <Link href={`/dish/${id}`}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.ingredients}>{ingredients.join(", ")}</p>
      </Link>
      <div className={styles.count}>
        <span className={styles.price}>
          {signIn ? (quantity || 1) * price : price} $
        </span>
        {signIn && (
          <Count
            value={quantity}
            increaseValue={increaseValue}
            decreaseValue={decreaseValue}
          />
        )}
      </div>
    </li>
  );
};
