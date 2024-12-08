import { useSelector } from "react-redux";
import { selectReviewsById } from "../../redux/entities/reviews/reviews-slice";
import { RestaurantsReviewItem } from "./restaurants-review-item";

export const RestaurantsReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewsById(state, id));

  if (!review) {
    return;
  }

  const { text, userId, rating } = review;

  if (!review) {
    return;
  }

  return <RestaurantsReviewItem text={text} rating={rating} userId={userId} />;
};
