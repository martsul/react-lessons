export const editReview = (reviewId, review) => {
  fetch(`http://localhost:3001/api/review/${reviewId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(review),
  }).then((resolve) => {
    if (resolve.ok) {
      location.reload();
    }
  });
};
