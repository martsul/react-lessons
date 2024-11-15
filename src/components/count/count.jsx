import { useCount } from "./use-count";

export const Count = () => {
  const { value, increaseValue, decreaseValue } = useCount();

  return (
    <div>
      <button onClick={decreaseValue}>-</button>
      <span>{value}</span>
      <button onClick={increaseValue}>+</button>
    </div>
  );
};
