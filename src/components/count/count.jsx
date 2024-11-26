import { CountSvg } from "./count-svg";
import styles from "./count.module.css";

export const Count = ({ value, increaseValue, decreaseValue }) => {
  return (
    <div className={styles.block}>
      <button className={styles.button} type="button" onClick={decreaseValue}>
        <CountSvg id={"minus"} />
      </button>
      <span className={styles.num}>{value}</span>
      <button className={styles.button} type="button" onClick={increaseValue}>
        <CountSvg id={"plus"} />
      </button>
    </div>
  );
};
