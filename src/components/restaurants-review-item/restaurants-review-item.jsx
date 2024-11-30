import styles from "./restaurants-review-item.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";

export const RestaurantsReviewItem = ({ element }) => {
  const { isLightTheme } = useTheme();

  return (
    <>
      <li className={classNames(styles.item, { [styles.light]: isLightTheme })}>
        <div>
          <h4 className={styles.name}>{element.user}</h4>
          <span className={styles.review}>{`"${element.text}"`}</span>
        </div>
        <span className={styles.score}>{element.rating}</span>
      </li>
    </>
  );
};
