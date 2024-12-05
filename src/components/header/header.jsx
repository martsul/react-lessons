import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { SignIn } from "../sign-in/sign-in";
import styles from "./header.module.css";
import { SwitchTheme } from "../switch-theme/switch-theme";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isLightTheme } = useTheme();

  return (
    <header
      className={classNames(styles.header, {
        [styles.light]: isLightTheme,
      })}
    >
      <div className={styles.container}>
        <Link to={"/"} className={styles.companyName}>
          food delivery
        </Link>
        <div className={styles.interaction}>
          <SignIn />
          <SwitchTheme />
        </div>
      </div>
    </header>
  );
};
