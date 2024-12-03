import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import styles from "./cart-item.module.css";
import { useSign } from "../sign-context/use-sign";
import { Count } from "../count/count";
import { CountBtn } from "../count-btn/count-btn";
import { CrossSvg } from "../svg/cross-svg";

export const CartItem = ({ params, functions }) => {
  const { isLightTheme } = useTheme();
  const { signIn } = useSign();

  const { ingredients, name, price, quantity } = params;
  const { increaseValue, decreaseValue, deleteItem } = functions;

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
      <div className={styles.interaction}>
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
        <CountBtn clickFunc={deleteItem} Content={CrossSvg} />
      </div>
    </li>
  );
};
