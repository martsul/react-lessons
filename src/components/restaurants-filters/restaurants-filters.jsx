import styles from "./restaurants-filters.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";
import Link from "next/link";
import { useParams } from "next/navigation";

export const RestaurantsFilters = ({ parameters }) => {
  const { isLightTheme } = useTheme();
  const { name, id } = parameters;
  const { restaurantId } = useParams();
  const tabIsACtive = restaurantId === id;

  return (
    <Link
      className={classNames(styles.filter, {
        [styles.active]: tabIsACtive,
        [styles.light]: isLightTheme,
      })}
      href={`/restaurants/${id}`}
    >
      {name}
    </Link>
  );
};
