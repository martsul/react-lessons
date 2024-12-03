import classNames from "classnames";
import { Count } from "../count/count";
import { useSign } from "../sign-context/use-sign";
import styles from "./menu-list-item.module.css";
import { useCounter } from "./use-cost";
import { useTheme } from "../theme-context/use-theme";

export const MenuListItem = ({ name, price, ingredients }) => {
  const { signIn } = useSign();

  const { quantity, increaseValue, decreaseValue } = useCounter();

  const { isLightTheme } = useTheme();

  return (
    <li
      className={classNames(styles.item, {
        [styles.light]: isLightTheme,
      })}
    >
      <div>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.ingredients}>{ingredients.join(", ")}</p>
      </div>
      <div className={styles.count}>
        <span className={styles.price}>
          {signIn ? quantity * price : price} $
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
