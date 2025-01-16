import styles from "./restaurants-layout.module.css";
import { getRestaurants } from "../../services/get-restaurants";
import { RestaurantsFilters } from "../../components/restaurants-filters/restaurants-filters";

export const RestaurantsLayout = async ({ children }) => {
  const data = await getRestaurants();

  return (
    <>
      <RestaurantsFilters data={data} />
      <section>
        <div className={styles.container}>{children}</div>
      </section>
    </>
  );
};
