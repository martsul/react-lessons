import { useEffect, useState } from "react";

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

  const scrollCallback = () => {
    setBarWidth(scrollOccupancy());
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollCallback);

    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, []);

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
