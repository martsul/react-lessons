import styles from "./list-info.module.css";

export const ListInfo = ({ title, items, Element }) => {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <Element cost={item.price} element={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};
