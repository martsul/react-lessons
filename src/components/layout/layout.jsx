import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.containerHeader}>
          <a href="#" className={styles.companyName}>
            food delivery
          </a>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <div className={styles.containerFooter}>
          <a href="#" className={styles.companyName}>
            food delivery
          </a>
        </div>
      </footer>
    </>
  );
};
