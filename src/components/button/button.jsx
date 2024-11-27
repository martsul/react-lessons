import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import styles from "./button.module.css";

export const Button = ({ type, content, clickFunction }) => {
  const { theme } = useTheme();

  return (
    <button
      className={classNames(styles.button, { [styles.light]: theme })}
      onClick={clickFunction}
      type={type}
    >
      {content}
    </button>
  );
};
