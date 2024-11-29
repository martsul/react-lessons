import styles from "./restaurants-cards.module.css";
import { ListInfo } from "../list-info/list-info";
import { MenuListItem } from "../menu-list-item/menu-list-item";
import { RestaurantsReviewItem } from "../restaurants-review-item/restaurants-review-item";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";

export const RestaurantsCard = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
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
        <ListInfo title="menu" items={menu} Element={MenuListItem} />
      )}
      {Boolean(reviews.length) && (
        <ListInfo
          title="reviews"
          items={reviews}
          Element={RestaurantsReviewItem}
        />
      )}
    </div>
  );
};
