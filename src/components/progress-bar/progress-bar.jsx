import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  const maxScroll = scrollHeight - document.documentElement.clientHeight;
  let percentBar = (window.scrollY * 100) / maxScroll + "%";

  const [barWidth, setBarWidth] = useState(percentBar);

  const scrollCallback = () => {
    percentBar = (window.scrollY * 100) / maxScroll + "%";
    setBarWidth(percentBar);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollCallback);

    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  });

  return (
    <section
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "15px",
      }}
    >
      <div style={{ background: "red", height: "100%", width: barWidth }}></div>
    </section>
  );
};
