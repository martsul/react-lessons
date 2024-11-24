import classNames from "classnames";
import styles from "./list-info.module.css";

export const ListInfo = ({ title, items, Element }) => {
  return (
    <>
      <h3 className={classNames(styles["title"])}>{title}</h3>
      <ul className={classNames(styles["list"])}>
        {items.map((item) => (
          <Element element={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};
