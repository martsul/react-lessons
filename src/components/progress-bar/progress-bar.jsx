"use client"

import { useEffect, useState } from "react";
import styles from "./progress-bar.module.css";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";

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
  const { isLightTheme } = useTheme();

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
    <section
      className={classNames(styles.progressBar, {
        [styles.light]: isLightTheme,
      })}
      style={{ width: barWidth }}
    ></section>
  );
};
