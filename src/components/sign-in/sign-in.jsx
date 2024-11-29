import classNames from "classnames";
import { Button } from "../button/button";
import { useSign } from "../sign-context/use-sign";
import { PersonSvg } from "../svg/person-svg";
import { useTheme } from "../theme-context/use-theme";
import styles from "./sign-in.module.css";

export const SignIn = () => {
  const { clickCallback, name, signIn } = useSign();
  const { isLightTheme } = useTheme();

  return (
    <div className={styles.sign}>
      {signIn && (
        <div className={styles.user}>
          <p
            className={classNames(styles.name, {
              [styles.light]: isLightTheme,
            })}
          >
            {name}
          </p>
          <PersonSvg />
        </div>
      )}
      <Button
        clickFunction={clickCallback}
        type={"button"}
        content={signIn ? "Sign out" : "Sign in"}
      />
    </div>
  );
};
