import styles from "./restaurants-page.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import classNames from "classnames";
import { useTheme } from "../../components/theme-context/use-theme";
import { RestaurantsFiltersContainer } from "../../components/restaurants-filters/restaurants-filters-container";
import { Outlet } from "react-router-dom";

export const PreviewRestaurantsPage = () => {
  const { isLightTheme } = useTheme();

  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <>
      <section
        className={classNames(styles.filters, { [styles.light]: isLightTheme })}
      >
        <div className={styles.filtersContainer}>
          {restaurantsIds.map((id) => (
            <RestaurantsFiltersContainer key={id} id={id} />
          ))}
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
