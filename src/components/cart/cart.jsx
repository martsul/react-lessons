import { useSelector } from "react-redux";
import { ListInfo } from "../list-info/list-info";
import { selectCartItems } from "../../redux/ui/cart/cart-slice";
import { CartItemContainer } from "../cart-item/cart-item-container";
import styles from "./cart.module.css";

export const Cart = () => {
  const cartItems = useSelector(selectCartItems);

  if (cartItems.length <= 0) {
    return null;
  }

  return (
    <section>
      <div className={styles.container}>
        <ListInfo title={"cart"} ids={cartItems} Element={CartItemContainer} />
      </div>
    </section>
  );
};
