"use client";

import styles from "./restaurants-filters.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";
import Link from "next/link";
import { useParams } from "next/navigation";

export const RestaurantsFilters = ({ data }) => {
  const { isLightTheme } = useTheme();
  const { restaurantId: activeRestaurant } = useParams();

  return (
    <section
      className={classNames(styles.filters, { [styles.light]: isLightTheme })}
    >
      <div className={styles.container}>
        {data.map((restaurant) => (
          <Link
            key={restaurant.id}
            className={classNames(styles.filter, {
              [styles.active]: restaurant.id === activeRestaurant,
              [styles.light]: isLightTheme,
            })}
            href={`/restaurants/${restaurant.id}`}
          >
            {restaurant.name}
          </Link>
        ))}
      </div>
    </section>
  );
};
