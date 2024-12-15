import { ListInfo } from "../../components/list-info/list-info";
import { RestaurantsReviewContainer } from "../../components/restaurants-review-item/restaurants-review-container";
import { ReviewForm } from "../../components/review-form/review-form";
import { useSign } from "../../components/sign-context/use-sign";

export const Reviews = ({ data, onAddReview, onAditReview }) => {
  const { signIn } = useSign();

  return (
    <>
      <ListInfo
        title="reviews"
        data={data}
        Element={RestaurantsReviewContainer}
      />
      {signIn && (
        <ReviewForm onAditReview={onAditReview} onAddReview={onAddReview} />
      )}
    </>
  );
};
