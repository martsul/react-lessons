import { getReviewsByRestaurantId } from "../../services/get-reviews-by-restaurant-id";
import { getUsers } from "../../services/get-users";
import { ReviewsPage } from "./reviews-page";

export const ReviewsPageContainer = async ({ params }) => {
  const { restaurantId } = await params;

  const data = await getReviewsByRestaurantId(restaurantId);
  const users = await getUsers();

  return <ReviewsPage data={data} users={users} />;
};
