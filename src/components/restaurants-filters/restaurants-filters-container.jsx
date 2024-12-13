import { RestaurantsFilters } from "./restaurants-filters";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantsFiltersContainer = () => {
  const { data, isError, isLoading } = useGetRestaurantsQuery();

  if (isError) {
    return "Error";
  }

  if (isLoading) {
    return "Loading";
  }

  if (!data) {
    return;
  }

  return data.map((parameters) => (
    <RestaurantsFilters key={parameters.id} parameters={parameters} />
  ));
};
