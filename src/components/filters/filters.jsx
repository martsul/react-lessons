import styles from "./filters.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";

export const Filters = ({ filters, clickFunc, selectedRestaurant }) => {
  const { isLightTheme } = useTheme();

  return (
    <section
      className={classNames(styles.section, {
        [styles.light]: isLightTheme,
      })}
    >
      <div className={styles.container}>
        {filters.map((filter) => (
          <label key={filter.id}>
            <input
              checked={filter.id === selectedRestaurant}
              className={styles.radio}
              name="filter"
              onChange={clickFunc}
              type="radio"
              id={filter.id}
            />
            <span className={styles.filter}>{filter.name}</span>
          </label>
        ))}
      </div>
    </section>
  );
};
