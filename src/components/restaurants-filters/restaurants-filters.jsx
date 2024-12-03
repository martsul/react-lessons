import styles from "./restaurants-filters.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";
import { NavLink, useParams } from "react-router-dom";

export const RestaurantsFilters = ({ id, name }) => {
  const { isLightTheme } = useTheme();
  const { restaurantId } = useParams();
  const isActive = restaurantId == id;

  return (
    <NavLink
      className={classNames(styles.filter, {
        [styles.light]: isLightTheme,
        [styles.active]: isActive,
      })}
      to={`${id}/menu`}
    >
      {name}
    </NavLink>
  );
};
