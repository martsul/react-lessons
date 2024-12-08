import { Outlet, useParams } from "react-router-dom";
import { RestaurantsCardsContainer } from "../../components/restaurants-cards/restaurants-cards-container";
import { useRequest } from "../../redux/hooks/use-request";
import { getRestaurantById } from "../../redux/entities/restaurants/get-restaurant-by-id";
import { STATUS_PENDING, STATUS_REJECTED } from "../../redux/ui/request/request-slice";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  const requestStatus = useRequest(getRestaurantById, restaurantId);

  if (requestStatus == STATUS_PENDING) {
    return "Loading";
  }

  if (requestStatus == STATUS_REJECTED) {
    return "Error";
  }

  return (
    <RestaurantsCardsContainer id={restaurantId}>
      <Outlet />
    </RestaurantsCardsContainer>
  );
};
