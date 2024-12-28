import { RestaurantsCardsContainer } from "../../components/restaurants-cards/restaurants-cards-container";
import { getRestaurantById } from "../../services/get-restaurant-by-id";

export const ActiveRestaurantLayout = async ({ children, params }) => {
  const { restaurantId } = await params;

  const activeRestaurant = await getRestaurantById(restaurantId);

  return (
    <RestaurantsCardsContainer activeRestaurant={activeRestaurant}>
      {children}
    </RestaurantsCardsContainer>
  );
};
