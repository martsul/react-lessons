"use client";

import classNames from "classnames";
import styles from "./list-info.module.css";
import { useTheme } from "../theme-context/use-theme";
import { useSign } from "../sign-context/use-sign";
import { usePathname } from "next/navigation";

export const ListInfoSkeleton = () => {
  const { isLightTheme } = useTheme();
  const { signIn } = useSign();
  const itReviewsPage = usePathname().match("/reviews");

  return (
    <div className={classNames({ [styles.light]: isLightTheme })}>
      <div
        className={classNames([styles.skeletonSubtitle, styles.animation])}
      />
      <div className={classNames([styles.skeletonList, styles.animation])} />
      {signIn && itReviewsPage && (
        <div className={classNames([styles.skeletonForm, styles.animation])} />
      )}
    </div>
  );
};
