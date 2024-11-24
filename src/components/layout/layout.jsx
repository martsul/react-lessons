import classNames from "classnames";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <header className={classNames(styles["header"])}>
        <div className={classNames(styles["container-header"])}>
          <a href="#" className={classNames(styles["company-name"])}>
            food delivery
          </a>
        </div>
      </header>
      {children}
      <footer className={classNames(styles["footer"])}>
        <div className={classNames(styles["container-footer"])}>
          <a href="#" className={classNames(styles["company-name"])}>food delivery</a>
        </div>
      </footer>
    </>
  );
};
