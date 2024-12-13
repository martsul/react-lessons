import styles from "./list-info.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";

export const ListInfo = ({ title, data, Element }) => {
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
        {data.map((parameters) => (
          <Element parameters={parameters} key={parameters.id} />
        ))}
      </ul>
    </>
  );
};
