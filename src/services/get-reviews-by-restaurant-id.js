export const getReviewsByRestaurantId = async (restaurantId) => {
  const response = await fetch(
    `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`, {
      next: {tags: ["getReviews"]}
    }

  );

  return response.json();
};
