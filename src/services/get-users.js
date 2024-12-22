export const getUsers = async () => {
  const response = await fetch(`http://localhost:3001/api/users`);

  return response.json();
};
