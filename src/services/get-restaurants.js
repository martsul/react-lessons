export const getRestaurants = async () => {
  const response = await fetch("http://localhost:3001/api/restaurants", {
  });

  return response.json();
};
