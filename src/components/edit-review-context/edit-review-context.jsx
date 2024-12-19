"use client";

import { useState } from "react";
import { EditReviewContext } from ".";

export const EditReviewContextProvider = ({ children }) => {
  const [changingReview, setСhangingReview] = useState({
    canChanging: false,
    reviewId: null,
    reviewParameters: {},
  });

  const onChangeReview = ({
    reviewId = undefined,
    text = undefined,
    rating = undefined,
    isEdit = false,
  }) => {
    setСhangingReview({
      reviewId: reviewId,
      canChanging: isEdit,
      reviewParameters: { text, rating },
    });
  };

  return (
    <EditReviewContext.Provider
      value={{
        onChangeReview: onChangeReview,
        changingReview: changingReview,
      }}
    >
      {children}
    </EditReviewContext.Provider>
  );
};
