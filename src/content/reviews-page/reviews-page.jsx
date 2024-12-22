import { ListInfo } from "../../components/list-info/list-info";
import { RestaurantsReviewItem } from "../../components/restaurants-review-item/restaurants-review-item";
import { ReviewForm } from "../../components/review-form/review-form";
import { getReviewsByRestaurantId } from "../../services/get-reviews-by-restaurant-id";
import {getUsers} from "../../services/get-users"

export const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;

  const data = await getReviewsByRestaurantId(restaurantId);
  const users = await getUsers();

  return (
    <>
      <ListInfo title="reviews">
        {data.map((review) => (
          <RestaurantsReviewItem
            key={review.id}
            text={review.text}
            rating={review.rating}
            reviewId={review.id}
            userId={review.userId}
            users={users}
          />
        ))}
      </ListInfo>
      <ReviewForm />
    </>
  );
};
