import classNames from "classnames";
import { Count } from "../count/count";
import { useSign } from "../sign-context/use-sign";
import styles from "./dish.module.css";
import { useTheme } from "../theme-context/use-theme";

export const Dish = ({ params, increaseValue, decreaseValue }) => {
  const { signIn } = useSign();
  const { isLightTheme } = useTheme();

  const { ingredients, quantity, price, name } = params;

  return (
    <section>
      <div className={classNames(styles.item, { [styles.light]: isLightTheme })}>
        <div>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.ingredients}>{ingredients.join(", ")}</p>
        </div>
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
      </div>
    </section>
  );
};
