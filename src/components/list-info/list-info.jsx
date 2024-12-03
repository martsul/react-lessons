import styles from "./list-info.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";

export const ListInfo = ({ title, ids, Element }) => {
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
      <ul
        className={classNames(styles.list, {
          [styles.light]: isLightTheme,
        })}
      >
        {ids.map((id) => (
          <Element id={id} key={id} />
        ))}
      </ul>
    </>
  );
};
