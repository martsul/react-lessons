import { useParams } from "react-router-dom";
import { Reviews } from "./reviews";
import {
  useAddReviewMutation,
  useEditReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../../redux/services/api";
import { useCallback } from "react";

export const ReviewsContainer = () => {
  const { restaurantId } = useParams();

  const {
    data,
    isFetching: isGerReviewsFetching,
    isError,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);
  useGetUsersQuery();

  const [addReview, { isLoading: isAddReviewFetching }] =
    useAddReviewMutation();

  const handleAddReview = useCallback(
    (review) => {
      addReview({ restaurantId, review });
    },
    [addReview, restaurantId]
  );

  const [editReview] = useEditReviewMutation();

  const handleEditReview = useCallback(
    (reviewId, review) => {
      editReview({ reviewId, review });
    },
    [editReview]
  );

  if (isGerReviewsFetching || isAddReviewFetching) {
    return "Loading";
  }

  if (isError) {
    return "Error";
  }

  if (!data) {
    return;
  }

  return (
    <Reviews
      data={data}
      onAditReview={handleEditReview}
      onAddReview={handleAddReview}
    />
  );
};
