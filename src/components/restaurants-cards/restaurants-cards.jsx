import styles from "./restaurants-cards.module.css";
import classNames from "classnames";
import { ContentTab } from "../content-tab/content-tab";
import { useTheme } from "../theme-context/use-theme";

export const RestaurantsCard = ({ name, children }) => {
  const { isLightTheme } = useTheme();

  return (
    <>
      <div>
        <h2
          className={classNames(styles.name, {
            [styles.light]: isLightTheme,
          })}
        >
          {name}
        </h2>
        <ContentTab />
        {children}
      </div>
    </>
  );
};
