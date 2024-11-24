import { useState } from "react";

export const useCounter = (cost) => {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const increaseValue = () => {
    if (quantity + 1 <= 5) {
      setQuantity(quantity + 1);
      setPrice(price + cost);
    }
  };
  const decreaseValue = () => {
    if (quantity - 1 >= 0) {
      setQuantity(quantity - 1);
      setPrice(price - cost);
    }
  };

  return { quantity, price, increaseValue, decreaseValue };
};
