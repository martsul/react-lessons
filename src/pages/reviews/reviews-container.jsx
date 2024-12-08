import { useParams } from "react-router-dom";
import { Reviews } from "./reviews";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getReviews } from "../../redux/entities/reviews/get-reviews";
import { getUsers } from "../../redux/entities/users/get-uesrs";
import {
  STATUS_PENDING,
  STATUS_REJECTED,
} from "../../redux/ui/request/request-slice";

export const ReviewsContainer = () => {
  const { restaurantId } = useParams();
  const requestReviewsStatus = useRequest(getReviews, restaurantId);
  const requestUsersStatus = useRequest(getUsers);

  const { reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (
    requestReviewsStatus == STATUS_PENDING ||
    requestUsersStatus == STATUS_PENDING
  ) {
    return "Loading";
  }

  if (
    requestReviewsStatus == STATUS_REJECTED ||
    requestUsersStatus == STATUS_REJECTED
  ) {
    return "Error";
  }

  if (!reviews) {
    return;
  }

  return <Reviews reviews={reviews} />;
};
