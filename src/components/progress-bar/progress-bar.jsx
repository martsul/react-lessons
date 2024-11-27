import { useEffect, useState } from "react";
import styles from "./progress-bar.module.css"

function scrollOccupancy() {
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  const maxScroll = scrollHeight - document.documentElement.clientHeight;
  return (window.scrollY * 100) / maxScroll + "%";
}

export const ProgressBar = () => {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const scrollCallback = () => {
      setBarWidth(scrollOccupancy());
    };

    window.addEventListener("scroll", scrollCallback);

    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, []);

  return (
    <section className={styles.progressBar} style={{width: barWidth}}></section>
  );
};
