import styles from "./restaurants-filters.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";

export const RestaurantsFilters = ({ id }) => {
  const { isLightTheme } = useTheme();

  const { name } = useSelector((state) => selectRestaurantById(state, id));

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
