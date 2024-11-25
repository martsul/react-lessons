import { Count } from "../count/count";
import styles from "./menu-list-item.module.css";
import { useCounter } from "./use-cost";

export const MenuListItem = ({ element, cost }) => {
  const { quantity, increaseValue, decreaseValue } = useCounter();

  return (
    <li className={styles.item}>
      <div>
        <h4 className={styles.name}>{element.name}</h4>
        <p className={styles.ingredients}>{element.ingredients.join(", ")}</p>
      </div>
      <div className={styles.count}>
        <span className={styles.price}>{quantity * cost} $</span>
        <Count
          value={quantity}
          increaseValue={increaseValue}
          decreaseValue={decreaseValue}
        />
      </div>
    </li>
  );
};
