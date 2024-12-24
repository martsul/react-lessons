export const getReviewsByRestaurantId = async (restaurantId) => {
  const response = await fetch(
    `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
    {
      next: { revalidate: 0 },
    }
  );

  return response.json();
};
