import { useParams } from "react-router-dom";
import { RestaurantsCardsContainer } from "../restaurants-cards/restaurants-cards-container";

export const Restaurant = () => {
  const { restaurantId } = useParams();

  return <RestaurantsCardsContainer id={restaurantId} />;
};
