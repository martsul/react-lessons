import { useSelector } from "react-redux";
import { selectReviewsById } from "../../redux/entities/reviews/reviews-slice";
import { RestaurantsReviewItem } from "./restaurants-review-item";
import { selectUserById } from "../../redux/entities/users/users-slice";

export const RestaurantsReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewsById(state, id));
  const { text, userId, rating } = review;
  const user = useSelector((state) => selectUserById(state, userId));

  if (!review || !user) {
    return;
  }

  return (
    <RestaurantsReviewItem text={text} rating={rating} userName={user.name} />
  );
};
