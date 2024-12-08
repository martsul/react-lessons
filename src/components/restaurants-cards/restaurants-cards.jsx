import styles from "./restaurants-cards.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { ReviewForm } from "../review-form/reviewForm";
import { useSign } from "../sign-context/use-sign";
import { ContentTab } from "../content-tab/content-tab";

export const RestaurantsCard = ({ name, children }) => {
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
        {children}
      </div>
      {signIn && <ReviewForm />}
    </>
  );
};
