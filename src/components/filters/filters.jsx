import styles from "./filters.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";

export const Filters = ({ clickFunc, selectedRestaurant, id, name }) => {
  const { isLightTheme } = useTheme();

  return (
    <label className={classNames({ [styles.light]: isLightTheme })}>
      <input
        checked={id === selectedRestaurant}
        className={styles.radio}
        name="filter"
        onChange={clickFunc}
        type="radio"
        id={id}
      />
      <span className={styles.filter}>{name}</span>
    </label>
  );
};
