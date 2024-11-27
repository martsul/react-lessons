import classNames from "classnames";
import { Button } from "../button/button";
import { useSign } from "../sign-context/use-sign";
import { useTheme } from "../theme-context/use-theme";
import { HeaderSvg } from "./header-svg";
import styles from "./header.module.css";

export const Header = () => {
  const { clickCallback, name, signIn } = useSign();
  const { theme, changeTheme } = useTheme();

  return (
    <header
      className={classNames(styles.header, {
        [styles.light]: theme,
      })}
    >
      <div className={styles.container}>
        <a href="#" className={styles.companyName}>
          food delivery
        </a>
        <div className={styles.interaction}>
          <div className={styles.sign}>
            {signIn && (
              <div className={styles.user}>
                <p className={styles.name}>{name}</p>
                <HeaderSvg id={"person"} />
              </div>
            )}
            <Button
              clickFunction={clickCallback}
              type={"button"}
              content={signIn ? "Sign out" : "Sign in"}
            />
          </div>
          <button onClick={changeTheme} type="button">
            <HeaderSvg id={theme ? "sun" : "night"} />
          </button>
        </div>
      </div>
    </header>
  );
};
