"use client";

import styles from "./list-info.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";
import { Suspense } from "react";
import { ListInfoSkeleton } from "./list-info-skeleton";

export const ListInfo = ({ title, children }) => {
  const { isLightTheme } = useTheme();

  return (
    <>
      <h3
        className={classNames(styles.title, {
          [styles.light]: isLightTheme,
        })}
      >
        {title}
      </h3>
      <Suspense fallback={<ListInfoSkeleton />}>
        <ul
          className={classNames(styles.list, {
            [styles.light]: isLightTheme,
          })}
        >
          {children}
        </ul>
      </Suspense>
    </>
  );
};
