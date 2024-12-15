import { Outlet } from "react-router-dom";
import { RestaurantsCardsContainer } from "../../components/restaurants-cards/restaurants-cards-container";

export const RestaurantPage = () => {
  return (
    <RestaurantsCardsContainer>
      <Outlet />
    </RestaurantsCardsContainer>
  );
};
