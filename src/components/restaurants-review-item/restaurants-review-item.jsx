import styles from "./restaurants-review-item.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";
import { useSign } from "../sign-context/use-sign";
import { useEditReview } from "../edit-review-context/use-edit-review";

export const RestaurantsReviewItem = ({
  isReviewChanging,
  userName,
  text,
  rating,
  id,
}) => {
  const { isLightTheme } = useTheme();
  const { signIn } = useSign();
  const { onChangeReview } = useEditReview();

  return (
    <>
      <li className={classNames(styles.item, { [styles.light]: isLightTheme })}>
        <div>
          {signIn && isReviewChanging && (
            <button
              onClick={() => {
                onChangeReview({
                  reviewId: id,
                  text: text,
                  rating: rating,
                  isEdit: true,
                  needСhangeParameters: true,
                });
              }}
              type="button"
            >
              Change
            </button>
          )}
          <div>
            <h4 className={styles.name}>{userName}</h4>
            <span className={styles.review}>{`"${text}"`}</span>
          </div>
        </div>
        <span className={styles.score}>{rating}</span>
      </li>
    </>
  );
};
