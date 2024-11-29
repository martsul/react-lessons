import classNames from "classnames";
import styles from "./count.module.css";
import { useTheme } from "../theme-context/use-theme";
import { MinusSvg } from "../svg/minus-svg";
import { PlusSvg } from "../svg/plus-svg";

export const Count = ({ value, increaseValue, decreaseValue }) => {
  const { isLightTheme } = useTheme();

  return (
    <div className={classNames(styles.block, { [styles.light]: isLightTheme })}>
      <button className={styles.button} type="button" onClick={decreaseValue}>
        <MinusSvg />
      </button>
      <span className={styles.num}>{value}</span>
      <button className={styles.button} type="button" onClick={increaseValue}>
        <PlusSvg />
      </button>
    </div>
  );
};
