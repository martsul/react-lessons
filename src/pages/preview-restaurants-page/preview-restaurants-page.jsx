"use client";

import styles from "./restaurants-page.module.css";
import classNames from "classnames";
import { useTheme } from "../../components/theme-context/use-theme";
import { RestaurantsFiltersContainer } from "../../components/restaurants-filters/restaurants-filters-container";

export const PreviewRestaurantsPage = ({ children }) => {
  const { isLightTheme } = useTheme();

  return (
    <>
      <section
        className={classNames(styles.filters, { [styles.light]: isLightTheme })}
      >
        <div className={styles.filtersContainer}>
          <RestaurantsFiltersContainer />
        </div>
      </section>
      <section>
        <div className={styles.container}>{children}</div>
      </section>
    </>
  );
};
