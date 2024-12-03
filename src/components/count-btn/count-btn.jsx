import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import styles from "./count-btn.module.css";

export const CountBtn = ({ clickFunc, Content }) => {
  const { isLightTheme } = useTheme();

  return (
    <button
      className={classNames(styles.button, { [styles.light]: isLightTheme })}
      type="button"
      onClick={clickFunc}
    >
      <Content />
    </button>
  );
};
