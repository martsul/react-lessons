import classNames from "classnames";
import { Header } from "../header/header";
import { SignContextProvider } from "../sign-context/sign-context";
import { useTheme } from "../theme-context/use-theme";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={classNames(styles.window, { [styles.light]: theme })}>
      <SignContextProvider>
        <Header />
        {children}
        <footer className={styles.footer}>
          <div className={styles.containerFooter}>
            <a href="#" className={styles.companyName}>
              food delivery
            </a>
          </div>
        </footer>
      </SignContextProvider>
    </div>
  );
};
