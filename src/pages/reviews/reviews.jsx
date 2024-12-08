import { ListInfo } from "../../components/list-info/list-info";
import { RestaurantsReviewContainer } from "../../components/restaurants-review-item/restaurants-review-container";

export const Reviews = ({ reviews }) => {

  
  return (
    <ListInfo
      title="reviews"
      ids={reviews}
      Element={RestaurantsReviewContainer}
    />
  );
};
