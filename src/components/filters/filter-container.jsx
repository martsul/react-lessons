import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { Filters } from "./filters";

export const FilterContainer = ({ id, selectedRestaurant, clickFunc }) => {
  const filter = useSelector((state) => selectRestaurantById(state, id));

  if (!filter) {
    return;
  }
  return (
    <Filters id={id} name={filter.name} clickFunc={clickFunc} selectedRestaurant={selectedRestaurant} />
  );
};
