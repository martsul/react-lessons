import classNames from "classnames";
import styles from "./count.module.css";
import { useTheme } from "../theme-context/use-theme";
import { MinusSvg } from "../svg/minus-svg";
import { PlusSvg } from "../svg/plus-svg";
import { CountButton } from "../count-button/count-button";

export const Count = ({ value, increaseValue, decreaseValue }) => {
  const { isLightTheme } = useTheme();

  return (
    <div className={classNames(styles.block, { [styles.light]: isLightTheme })}>
      <CountButton clickFunc={decreaseValue} Content={MinusSvg} />
      <input className={styles.num} type="text" value={value} readOnly />
      <CountButton clickFunc={increaseValue} Content={PlusSvg} />
    </div>
  );
};
