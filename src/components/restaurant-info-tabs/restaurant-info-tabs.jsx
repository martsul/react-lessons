import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import styles from "./restaurant-info-tabs.module.css";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export const RestaurantInfoTabs = () => {
  const { isLightTheme } = useTheme();
  const { restaurantId } = useParams();
  const path = usePathname().split("/");
  const menuIsActive = path.includes("menu");
  const reviewsIsActive = path.includes("reviews");

  return (
    <div
      className={classNames(styles.container, { [styles.light]: isLightTheme })}
    >
      <Link
        href={`/restaurants/${restaurantId}/menu`}
        className={classNames(styles.link, {
          [styles.active]: menuIsActive,
        })}
      >
        Menu
      </Link>
      <Link
        href={`/restaurants/${restaurantId}/reviews`}
        className={classNames(styles.link, {
          [styles.active]: reviewsIsActive,
        })}
      >
        Reviews
      </Link>
    </div>
  );
};
