import styles from "./restaurants-cards.module.css";
import { ListInfo } from "../list-info/list-info";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { MenuListContainer } from "../menu-list-item/menu-list-container";
import { RestaurantsReviewContainer } from "../restaurants-review-item/restaurants-review-container";

export const RestaurantsCard = ({ name, menu, reviews }) => {
  const { isLightTheme } = useTheme();

  return (
    <div>
      <h2
        className={classNames(styles.name, {
          [styles.light]: isLightTheme,
        })}
      >
        {name}
      </h2>
      {Boolean(menu.length) && (
        <ListInfo title="menu" ids={menu} Element={MenuListContainer} />
      )}
      {Boolean(reviews.length) && (
        <ListInfo
          title="reviews"
          ids={reviews}
          Element={RestaurantsReviewContainer}
        />
      )}
    </div>
  );
};
