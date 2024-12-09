import styles from "./restaurants-page.module.css";
import classNames from "classnames";
import { useTheme } from "../../components/theme-context/use-theme";
import { RestaurantsFiltersContainer } from "../../components/restaurants-filters/restaurants-filters-container";
import { Outlet } from "react-router-dom";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { useRequest } from "../../redux/hooks/use-request";
import { STATUS_PENDING, STATUS_REJECTED } from "../../redux/ui/request/request-slice";

export const PreviewRestaurantsPage = () => {
  const { isLightTheme } = useTheme();

  const requestStatus = useRequest(getRestaurants);

  if (requestStatus == STATUS_PENDING) {
    return "Loading";
  }

  if (requestStatus == STATUS_REJECTED) {
    return "error";
  }

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
