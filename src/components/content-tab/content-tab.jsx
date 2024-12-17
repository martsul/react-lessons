import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import styles from "./content-tab.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ContentTab = () => {
  const { isLightTheme } = useTheme();
  const  restaurantId  = (usePathname()).split("/")[2];

  return (
    <div
      className={classNames(styles.container, { [styles.light]: isLightTheme })}
    >
      <Link href={`/restaurants/${restaurantId}/menu`} className={styles.link}>
        Menu
      </Link>
      <Link
        href={`/restaurants/${restaurantId}/reviews`}
        className={styles.link}
      >
        Reviews
      </Link>
    </div>
  );
};
