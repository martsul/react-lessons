import { useParams } from "react-router-dom";
import { RestaurantsCardsContainer } from "../../components/restaurants-cards/restaurants-cards-container";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return <RestaurantsCardsContainer id={restaurantId} />;
};
