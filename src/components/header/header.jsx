import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { SignIn } from "../sign-in/sign-in";
import styles from "./header.module.css";
import { SwitchTheme } from "../switch-theme/switch-theme";

export const Header = () => {
  const { isLightTheme } = useTheme();

  return (
    <header
      className={classNames(styles.header, {
        [styles.light]: isLightTheme,
      })}
    >
      <div className={styles.container}>
        <a href="#" className={styles.companyName}>
          food delivery
        </a>
        <div className={styles.interaction}>
          <SignIn />
          <SwitchTheme />
        </div>
      </div>
    </header>
  );
};
