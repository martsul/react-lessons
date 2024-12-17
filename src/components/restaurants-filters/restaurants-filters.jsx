import styles from "./restaurants-filters.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";
import Link from "next/link";

export const RestaurantsFilters = ({ parameters }) => {
  const { isLightTheme } = useTheme();
  const { name, id } = parameters;

  return (
    <Link
      className={classNames(styles.filter, {
        [styles.light]: isLightTheme,
      })}
      href={`/restaurants/${id}`}
    >
      {name}
    </Link>
  );
};
