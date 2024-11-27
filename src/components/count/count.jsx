import classNames from "classnames";
import { CountSvg } from "./count-svg";
import styles from "./count.module.css";
import { useTheme } from "../theme-context/use-theme";

export const Count = ({ value, increaseValue, decreaseValue }) => {
  const { theme } = useTheme();

  return (
    <div className={classNames(styles.block, { [styles.light]: theme })}>
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
