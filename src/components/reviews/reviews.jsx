import { ListInfo } from "../list-info/list-info";
import { RestaurantsReviewContainer } from "../restaurants-review-item/restaurants-review-container";

export const Reviews = ({ reviews }) => {
  return (
    <ListInfo
      title="reviews"
      ids={reviews}
      Element={RestaurantsReviewContainer}
    />
  );
};
