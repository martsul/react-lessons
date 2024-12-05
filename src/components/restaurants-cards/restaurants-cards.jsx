import styles from "./restaurants-cards.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { ReviewForm } from "../review-form/reviewForm";
import { useSign } from "../sign-context/use-sign";
import { Outlet } from "react-router-dom";
import { ContentTab } from "../content-tab/content-tab";

export const RestaurantsCard = ({ name }) => {
  const { isLightTheme } = useTheme();
  const { signIn } = useSign();

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
        <Outlet />
      </div>
      {signIn && <ReviewForm />}
    </>
  );
};
