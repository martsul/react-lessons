export const editReview = (reviewId, review) => {
  const response = fetch(`http://localhost:3001/api/review/${reviewId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(review),
  })

  return response;
};
