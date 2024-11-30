import classNames from "classnames";
import { Header } from "../header/header";
import { useTheme } from "../theme-context/use-theme";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  const { isLightTheme } = useTheme();

  return (
    <div className={classNames(styles.window, { [styles.light]: isLightTheme })}>
      <Header />
      {children}
      <footer className={styles.footer}>
        <div className={styles.containerFooter}>
          <a href="#" className={styles.companyName}>
            food delivery
          </a>
        </div>
      </footer>
    </div>
  );
};
