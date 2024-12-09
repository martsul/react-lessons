import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { RestaurantsFilters } from "./restaurants-filters";

export const RestaurantsFiltersContainer = () => {
  const ids = useSelector(selectRestaurantsIds);

  if (!ids) {
    return;
  }

  return ids.map((id) => <RestaurantsFilters id={id} key={id} />);
};
