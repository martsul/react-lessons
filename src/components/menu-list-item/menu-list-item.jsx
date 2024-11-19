import { useState } from "react";
import { Count } from "../count/count";

export const MenuListItem = ({ dish }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseValue = () => {
    if (quantity + 1 <= 5) {
      setQuantity(quantity + 1);
    }
  };
  const decreaseValue = () => {
    if (quantity - 1 >= 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <li>
      <span>{dish.name}</span>
      <br />
      <Count
        value={quantity}
        increaseValue={increaseValue}
        decreaseValue={decreaseValue}
      />
    </li>
  );
};
