import classNames from "classnames";
import { Count } from "../count/count";
import { useSign } from "../sign-context/use-sign";
import styles from "./menu-list-item.module.css";
import { useTheme } from "../theme-context/use-theme";
import { Link } from "react-router-dom";

export const MenuListItem = ({ parameters, increaseValue, decreaseValue }) => {
  const { signIn } = useSign();
  const { isLightTheme } = useTheme();

  const { name, price, ingredients, quantity, id } = parameters;

  return (
    <li
      className={classNames(styles.item, {
        [styles.light]: isLightTheme,
      })}
    >
      <Link to={`/dish/${id}`}>
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
