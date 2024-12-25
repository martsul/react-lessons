import styles from "./restaurants-layout.module.css";
import { RestaurantsFiltersContainer } from "../../components/restaurants-filters/restaurants-filters-container";
import { Suspense } from "react";

export const RestaurantsLayout = ({ children }) => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <RestaurantsFiltersContainer />
      </Suspense>
      <section>
        <div className={styles.container}>{children}</div>
      </section>
    </>
  );
};
