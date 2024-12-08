import styles from "./restaurants-review-item.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/users-slice";

export const RestaurantsReviewItem = ({ userId, text, rating }) => {
  const { isLightTheme } = useTheme();
  const user = useSelector((state) => selectUserById(state, userId));

  return (
    <>
      <li className={classNames(styles.item, { [styles.light]: isLightTheme })}>
        <div>
          <h4 className={styles.name}>{user.name}</h4>
          <span className={styles.review}>{`"${text}"`}</span>
        </div>
        <span className={styles.score}>{rating}</span>
      </li>
    </>
  );
};
