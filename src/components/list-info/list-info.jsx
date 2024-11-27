import styles from "./list-info.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";

export const ListInfo = ({ title, items, Element }) => {
  const { theme } = useTheme();

  return (
    <>
      <h3
        className={classNames(styles.title, {
          [styles.light]: theme,
        })}
      >
        {title}
      </h3>
      <ul
        className={classNames(styles.list, {
          [styles.light]: theme,
        })}
      >
        {items.map((item) => (
          <Element cost={item.price} element={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};
