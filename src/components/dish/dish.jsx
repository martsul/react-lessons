import classNames from "classnames";
import { Count } from "../../components/count/count";
import { useSign } from "../../components/sign-context/use-sign";
import styles from "./dish.module.css";
import { useTheme } from "../../components/theme-context/use-theme";

export const Dish = ({ data, quantity, increaseValue, decreaseValue }) => {
  const { signIn } = useSign();
  const { isLightTheme } = useTheme();

  const { ingredients, price, name } = data;

  return (
    <section>
      <div
        className={classNames(styles.item, { [styles.light]: isLightTheme })}
      >
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
