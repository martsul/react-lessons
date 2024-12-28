import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import styles from "./cart-item.module.css";

export const CartItemSkeleton = () => {
  const { isLightTheme } = useTheme();
  return (
    <div
      className={classNames(styles.skeletonItem, {
        [styles.light]: isLightTheme,
      })}
    />
  );
};
