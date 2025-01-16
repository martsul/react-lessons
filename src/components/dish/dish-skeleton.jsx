"use client";

import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import styles from "./dish.module.css";

export const DishSkeleton = () => {
  const { isLightTheme } = useTheme();

  return (
    <div
      className={classNames(styles.skeletonDish, {
        [styles.light]: isLightTheme,
      })}
    />
  );
};
