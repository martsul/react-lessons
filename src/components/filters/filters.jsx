import classNames from "classnames";
import styles from "./filters.module.css";

export const Filters = ({ filters, clickFunc, selectedRestaurant }) => {
  return (
    <section className={classNames(styles["section"])}>
      <div className={classNames(styles["container"])}>
        {filters.map((filter) => (
          <label key={filter.id}>
            <input
              checked={filter.id === selectedRestaurant}
              className={classNames(styles["radio"])}
              name="filter"
              onClick={clickFunc}
              type="radio"
              id={filter.id}
            />
            <span className={classNames(styles["filter"])}>{filter.name}</span>
          </label>
        ))}
      </div>
    </section>
  );
};
