import { Link } from "react-router-dom";
import styles from "./home-page.module.css";
import image from "../../img/scooter-guy.png";
import classNames from "classnames";
import { useTheme } from "../../components/theme-context/use-theme";

export const HomePage = () => {
  const { isLightTheme } = useTheme();

  return (
    <main>
      <section className={classNames({ [styles.light]: isLightTheme })}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Super fast <span>Food delivery</span> service
            </h1>
            <p className={styles.text}>
              We provide super fast-delivery service. Let’s use our services
              right now and get discounts of up to 50%
            </p>
            <Link to={"/restaurants"} className={styles.link}>
              Explore Food
            </Link>
          </div>
          <img className={styles.img} src={image} alt="Scooter Guy" />
        </div>
      </section>
    </main>
  );
};
