import classNames from "classnames";
import styles from "./restaurants-review-item.module.css";

export const RestaurantsReviewItem = ({ element }) => {
  return (
    <>
      <li className={classNames(styles["item"])}>
        <div>
          <h4 className={classNames(styles["name"])}>{element.user}</h4>
          <span
            className={classNames(styles["review"])}
          >{`"${element.text}"`}</span>
        </div>
        <span className={classNames(styles["score"])}>{element.rating}</span>
      </li>
    </>
  );
};
