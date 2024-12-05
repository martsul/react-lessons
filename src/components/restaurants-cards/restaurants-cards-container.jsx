import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { RestaurantsCard } from "./restaurants-cards";

export const RestaurantsCardsContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return;
  }

  const { name } = restaurant;

  return <RestaurantsCard name={name} />;
};
