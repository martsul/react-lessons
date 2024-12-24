export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;
  const { name } = await getRestaurantById(restaurantId);

  return {
    title: `Reviews ${name}`,
    description: `Reviews ${name}`,
  };
};

import { ReviewsPage } from "../../../../content/reviews-page/reviews-page";
import { getRestaurantById } from "../../../../services/get-restaurant-by-id";

export default ReviewsPage;
