import styles from "./restaurants-page.module.css";
import classNames from "classnames";
import { useTheme } from "../../components/theme-context/use-theme";
import { RestaurantsFiltersContainer } from "../../components/restaurants-filters/restaurants-filters-container";
import { Outlet } from "react-router-dom";

export const PreviewRestaurantsPage = () => {
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
        <div className={styles.container}>
          <Outlet />
        </div>
      </section>
    </>
  );
};
