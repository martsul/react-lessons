"use client";

import { Count } from "../count/count";
import { useForm } from "./use-form";
import styles from "./review-form.module.css";
import { Button } from "../button/button";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";
import { useEditReview } from "../edit-review-context/use-edit-review";
import { useSign } from "../sign-context/use-sign";
import { useEffect } from "react";
import { addReview } from "../../services/add-review";
import { useParams } from "next/navigation";
import { editReview } from "../../services/edit-review";

export const ReviewForm = () => {
  const {
    setText,
    setRating,
    clearInputs,
    increaseValue,
    decreaseValue,
    formParams,
  } = useForm();
  const { isLightTheme } = useTheme();
  const { text, rating } = formParams;
  const { changingReview, onChangeReview } = useEditReview();
  const { canChanging, reviewId, reviewParameters } = changingReview;
  const { userId, signIn } = useSign();
  const { restaurantId } = useParams();

  useEffect(() => {
    if (canChanging) {
      setText(reviewParameters.text);
      setRating(reviewParameters.rating);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canChanging, reviewParameters.rating, reviewParameters.text]);

  const onSubmit = () => {
    if (canChanging) {
      editReview(reviewId, { text, rating, userId });
      onChangeReview({});
    } else {
      addReview(restaurantId, { text, rating, userId });
    }
  };

  const onCloseChanging = () => {
    onChangeReview({});
    setText("");
    setRating("");
  };

  return signIn ? (
    <form
      className={classNames(styles.form, {
        [styles.light]: isLightTheme,
        [styles.changing]: canChanging,
      })}
    >
      {canChanging && (
        <button
          onClick={onCloseChanging}
          className={styles.close}
          type="button"
        >
          close
        </button>
      )}
      <h3 className={styles.title}>Оставить отзыв</h3>
      <div className={styles.block}>
        <label className={styles.label}>
          <span className={styles.name}>
            Text<span className={styles.star}>*</span>
          </span>
          <input
            type="text"
            value={text}
            onInput={(event) => setText(event.target.value)}
            className={styles.input}
            placeholder="Review"
          />
        </label>
        <div className={styles.label}>
          <span className={styles.name}>
            Rating<span className={styles.star}>*</span>
          </span>
          <Count
            value={rating}
            increaseValue={increaseValue}
            decreaseValue={decreaseValue}
          />
        </div>
        <Button type={"button"} clickFunction={clearInputs} content={"Clear"} />
      </div>
      <Button
        type={"button"}
        clickFunction={() => {
          onSubmit({ text, rating });
        }}
        content={"Submit"}
      ></Button>
    </form>
  ) : null;
};
