"use client";

import styles from "./restaurants-review-item.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";
import { useSign } from "../sign-context/use-sign";
import { useEditReview } from "../edit-review-context/use-edit-review";
import { EditSvg } from "../svg/edit-svg/edit-svg";

export const RestaurantsReviewItem = ({ review, users }) => {
  const { id: reviewId, text, rating, userId } = review;
  const userName = users.find(({ id }) => id === userId).name;
  const { isLightTheme } = useTheme();
  const { signIn } = useSign();
  const { onChangeReview } = useEditReview();
  const { userId: authorizedUser } = useSign();
  const isReviewChanging = userId === authorizedUser;

  return (
    <li className={classNames(styles.item, { [styles.light]: isLightTheme })}>
      <div>
        {signIn && isReviewChanging && (
          <a
            onClick={() => {
              onChangeReview({
                reviewId,
                text,
                rating,
                isEdit: true,
                needСhangeParameters: true,
              });
            }}
            type="button"
            className={styles.edit}
            href="#form"
          >
            <EditSvg></EditSvg>
          </a>
        )}
        <div>
          <h4 className={styles.name}>{userName}</h4>
          <span className={styles.review}>{`"${text}"`}</span>
        </div>
      </div>
      <span className={styles.score}>{rating}</span>
    </li>
  );
};
