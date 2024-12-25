import { RestaurantsFilters } from "./restaurants-filters";
import { getRestaurants } from "../../services/get-restaurants";

export const RestaurantsFiltersContainer = async () => {
  const data = await getRestaurants();

  return <RestaurantsFilters data={data} />;
};
