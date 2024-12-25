import { ReviewsPageContainer } from "../../../../content/reviews-page/reviews-page-container";
import { getRestaurantById } from "../../../../services/get-restaurant-by-id";

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;
  const { name } = await getRestaurantById(restaurantId);

  return {
    title: `Reviews ${name}`,
    description: `Reviews ${name}`,
  };
};

export default ReviewsPageContainer;
