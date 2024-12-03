import classNames from "classnames";
import styles from "./count.module.css";
import { useTheme } from "../theme-context/use-theme";
import { MinusSvg } from "../svg/minus-svg";
import { PlusSvg } from "../svg/plus-svg";
import { CountBtn } from "../count-btn/count-btn";

export const Count = ({ value, increaseValue, decreaseValue }) => {
  const { isLightTheme } = useTheme();

  return (
    <div className={classNames(styles.block, { [styles.light]: isLightTheme })}>
      <CountBtn clickFunc={decreaseValue} Content={MinusSvg} />
      <span className={styles.num}>{value}</span>
      <CountBtn clickFunc={increaseValue} Content={PlusSvg} />
    </div>
  );
};
