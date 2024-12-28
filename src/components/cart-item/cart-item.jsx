"use client";

import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import styles from "./cart-item.module.css";
import { useSign } from "../sign-context/use-sign";
import { Count } from "../count/count";
import { CountButton } from "../count-button/count-button";
import { CrossSvg } from "../svg/cross-svg";
import Link from "next/link";

export const CartItem = ({ parameters, functions }) => {
  const { isLightTheme } = useTheme();
  const { signIn } = useSign();

  const { ingredients, name, price, quantity, id } = parameters;
  const { increaseValue, decreaseValue, deleteItem } = functions;

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
      <div className={styles.interaction}>
        <div className={styles.count}>
          <span className={styles.price}>{(quantity || 1) * price} $</span>
          {signIn && (
            <Count
              value={quantity}
              increaseValue={increaseValue}
              decreaseValue={decreaseValue}
            />
          )}
        </div>
        <CountButton clickFunc={deleteItem} Content={CrossSvg} />
      </div>
    </li>
  );
};
