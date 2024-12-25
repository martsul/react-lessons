export const getDishById = async (dishId) => {
  const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);

  return response.json();
};
