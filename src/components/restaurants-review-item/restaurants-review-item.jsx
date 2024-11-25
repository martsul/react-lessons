import styles from "./restaurants-review-item.module.css";

export const RestaurantsReviewItem = ({ element }) => {
  return (
    <>
      <li className={styles.item}>
        <div>
          <h4 className={styles.name}>{element.user}</h4>
          <span
            className={styles.review}
          >{`"${element.text}"`}</span>
        </div>
        <span className={styles.score}>{element.rating}</span>
      </li>
    </>
  );
};
