import { useState } from "react";

export const useCount = () => {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    if (value + 1 > 5) return;
    setValue(value + 1);
  };

  const decreaseValue = () => {
    if (value - 1 < 0) return;
    setValue(value - 1);
  };

  return { value, increaseValue, decreaseValue };
};
