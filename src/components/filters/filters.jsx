import styles from "./filters.module.css";

export const Filters = ({ filters, clickFunc, selectedRestaurant }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {filters.map((filter) => (
          <label key={filter.id}>
            <input
              checked={filter.id === selectedRestaurant}
              className={styles.radio}
              name="filter"
              onClick={clickFunc}
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
