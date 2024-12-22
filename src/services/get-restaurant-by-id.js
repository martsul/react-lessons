export const getRestaurantById = async (restaurantId) => {
  const response = await fetch(
    `http://localhost:3001/api/restaurant/${restaurantId}`
  );

  return response.json();
};
