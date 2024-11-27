import { useState } from "react";

export const useCounter = () => {
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

  return { quantity, increaseValue, decreaseValue };
};
