export const Count = ({ value, increaseValue, decreaseValue }) => {
  return (
    <span>
      <button type="button" onClick={decreaseValue}>
        -
      </button>
      <span>{value}</span>
      <button type="button" onClick={increaseValue}>
        +
      </button>
    </span>
  );
};
