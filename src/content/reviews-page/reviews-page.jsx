"use client";

import { useState } from "react";
import { ListInfo } from "../../components/list-info/list-info";
import { RestaurantsReviewItem } from "../../components/restaurants-review-item/restaurants-review-item";
import { ReviewForm } from "../../components/review-form/review-form";

export const ReviewsPage = ({ data, users }) => {
  const [reviews, setReviews] = useState(data);

  return (
    <>
      <ListInfo title="reviews">
        {reviews.map((review) => (
          <RestaurantsReviewItem
            key={review.id}
            review={review}
            users={users}
            setReviews={setReviews}
          />
        ))}
      </ListInfo>
      <ReviewForm setReviews={setReviews} />
    </>
  );
};
