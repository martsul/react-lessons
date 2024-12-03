import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { RestaurantsFilters } from "./restaurants-filters";

export const RestaurantsFiltersContainer = ({
  id,
  selectedRestaurant,
  clickFunc,
}) => {
  const filter = useSelector((state) => selectRestaurantById(state, id));

  if (!filter) {
    return;
  }
  return (
    <RestaurantsFilters
      id={id}
      name={filter.name}
      clickFunc={clickFunc}
      selectedRestaurant={selectedRestaurant}
    />
  );
};
