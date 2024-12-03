import classNames from "classnames";
import { NavLink, useParams } from "react-router-dom";
import { useTheme } from "../theme-context/use-theme";
import styles from "./content-tab.module.css";

export const ContentTab = () => {
  const { isLightTheme } = useTheme();
  const { restaurantId } = useParams();  

  return (
    <div
      className={classNames(styles.container, { [styles.light]: isLightTheme })}
    >
      <NavLink
        to={`/restaurant/${restaurantId}/menu`}
        className={({ isActive }) =>
          classNames(styles.link, {
            [styles.active]: isActive,
          })
        }
      >
        Menu
      </NavLink>
      <NavLink
        to={`/restaurant/${restaurantId}/reviews`}
        className={({ isActive }) =>
          classNames(styles.link, {
            [styles.active]: isActive,
          })
        }
      >
        Reviews
      </NavLink>
    </div>
  );
};
