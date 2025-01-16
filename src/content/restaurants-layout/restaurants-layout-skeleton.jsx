"use client";

import classNames from "classnames";
import styles from "./restaurants-layout.module.css";
import { useTheme } from "../../components/theme-context/use-theme";

export const RestaurantsLayoutSkeleton = () => {
  const { isLightTheme } = useTheme();
  return (
    <div className={classNames({ [styles.light]: isLightTheme })}>
      <div className={classNames([styles.skeletonTitle, styles.animation])} />
      <div className={styles.skeletonFilters}>
        <div
          className={classNames([styles.skeletonFilter, styles.animation])}
        />
        <div
          className={classNames([styles.skeletonFilter, styles.animation])}
        />
      </div>
      <div
        className={classNames([styles.skeletonSubtitle, styles.animation])}
      />
      <div className={classNames([styles.skeletonList, styles.animation])} />
    </div>
  );
};
