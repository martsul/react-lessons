import styles from "./restaurants-review-item.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";

export const RestaurantsReviewItem = ({ userName, text, rating }) => {
  const { isLightTheme } = useTheme();

  return (
    <>
      <li className={classNames(styles.item, { [styles.light]: isLightTheme })}>
        <div>
          <h4 className={styles.name}>{userName}</h4>
          <span className={styles.review}>{`"${text}"`}</span>
        </div>
        <span className={styles.score}>{rating}</span>
      </li>
    </>
  );
};
