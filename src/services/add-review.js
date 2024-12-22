export const addReview = (restaurantId, review) => {
  fetch(`http://localhost:3001/api/review/${restaurantId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(review),
    next: {tags: ["getHeadphones"]}
  });
};
