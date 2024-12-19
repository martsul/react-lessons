"use client";

import classNames from "classnames";
import { Header } from "../header/header";
import { useTheme } from "../theme-context/use-theme";
import styles from "./layout.module.css";
import { Cart } from "../cart/cart";
import { useSign } from "../sign-context/use-sign";
import { ProgressBar } from "../progress-bar/progress-bar";

export const Layout = ({ children }) => {
  const { isLightTheme } = useTheme();
  const { signIn } = useSign();

  return (
    <div
      className={classNames(styles.window, { [styles.light]: isLightTheme })}
    >
      <Header />
      <main>
        <ProgressBar />
        {children}
        {signIn && <Cart />}
      </main>
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
