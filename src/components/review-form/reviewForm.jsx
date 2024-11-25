import { Count } from "../count/count";
import { useForm } from "./use-form";
import styles from "./reviewForm.module.css";

export const ReviewForm = () => {
  const {
    formParams,
    setName,
    setText,
    clearInputs,
    increaseValue,
    decreaseValue,
  } = useForm();
  const { name, text, score } = formParams;

  return (
    <form className={styles.form}>
      <h3 className={styles.title}>Оставить отзыв</h3>
      <div className={styles.block}>
        <label className={styles.label}>
          <span className={styles.name}>
            Name<span className={styles.star}>*</span>
          </span>
          <input
            type="text"
            value={name}
            onInput={(event) => setName(event.target.value)}
            className={styles.input}
            placeholder="Antony"
          />
        </label>
        <label className={styles.label}>
          <span className={styles.name}>
            Text<span className={styles.star}>*</span>
          </span>
          <input
            type="text"
            value={text}
            onInput={(event) => setText(event.target.value)}
            className={styles.input}
            placeholder="Review"
          />
        </label>
        <div className={styles.label}>
          <span className={styles.name}>
            Rating<span className={styles.star}>*</span>
          </span>
          <Count
            value={score}
            increaseValue={increaseValue}
            decreaseValue={decreaseValue}
          />
        </div>
        <button type="button" onClick={clearInputs} className={styles.clear}>
          clear
        </button>
      </div>
    </form>
  );
};
