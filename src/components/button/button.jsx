import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import styles from "./button.module.css";

export const Button = ({ type, content, clickFunction }) => {
  const { isLightTheme } = useTheme();

  return (
    <button
      className={classNames(styles.button, { [styles.light]: isLightTheme })}
      onClick={clickFunction}
      type={type}
    >
      {content}
    </button>
  );
};
