import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import styles from "./count-button.module.css";

export const CountButton = ({ clickFunc, Content }) => {
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
