"use client";

import styles from "./restaurants-cards.module.css";
import classNames from "classnames";
import { RestaurantInfoTabs } from "../restaurant-info-tabs/restaurant-info-tabs";
import { useTheme } from "../theme-context/use-theme";

export const RestaurantsCard = ({ name, children }) => {
  const { isLightTheme } = useTheme();

  return (
    <>
      <div>
        <h2
          className={classNames(styles.name, {
            [styles.light]: isLightTheme,
          })}
        >
          {name}
        </h2>
        <RestaurantInfoTabs />
        {children}
      </div>
    </>
  );
};
