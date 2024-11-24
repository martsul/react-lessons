import { Count } from "../count/count";
import styles from "./menu-list-item.module.css";
import classNames from "classnames";
import { useCounter } from "./use-conter";

export const MenuListItem = ({ element }) => {
  const { quantity, price, increaseValue, decreaseValue } = useCounter(
    element.price
  );

  return (
    <li className={classNames(styles["item"])}>
      <div>
        <h4 className={classNames(styles["name"])}>{element.name}</h4>
        <p className={classNames(styles["ingredients"])}>
          {element.ingredients.join(", ")}
        </p>
      </div>
      <div className={classNames(styles["count"])}>
        <span className={classNames(styles["price"])}>{price} $</span>
        <Count
          value={quantity}
          increaseValue={increaseValue}
          decreaseValue={decreaseValue}
        />
      </div>
    </li>
  );
};
