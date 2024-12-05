import styles from "./restaurants-filters.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

export const RestaurantsFilters = ({ id, name }) => {
  const { isLightTheme } = useTheme();

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.filter, {
          [styles.light]: isLightTheme,
          [styles.active]: isActive,
        })
      }
      to={`${id}`}
    >
      {name}
    </NavLink>
  );
};
