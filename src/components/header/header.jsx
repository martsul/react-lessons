import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { SignIn } from "../sign-in/sign-in";
import styles from "./header.module.css";
import { SwitchTheme } from "../switch-theme/switch-theme";
import Link from "next/link";

export const Header = () => {
  const { isLightTheme } = useTheme();

  return (
    <header
      className={classNames(styles.header, {
        [styles.light]: isLightTheme,
      })}
    >
      <div className={styles.container}>
        <Link href={"/"} className={styles.companyName}>
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
