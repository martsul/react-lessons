import { useParams } from "react-router-dom";
import { Reviews } from "./reviews";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";

export const ReviewsContainer = () => {
  const { restaurantId } = useParams();
  const { reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Reviews reviews={reviews} />;
};
