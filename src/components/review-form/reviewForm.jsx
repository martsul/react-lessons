import { Count } from "../count/count";
import { useForm } from "./use-form";
import styles from "./reviewForm.module.css";
import { Button } from "../button/button";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";

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
  const { isLightTheme } = useTheme();

  return (
    <form className={classNames(styles.form, { [styles.light]: isLightTheme })}>
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
        <Button type={"button"} clickFunction={clearInputs} content={"Clear"} />
      </div>
    </form>
  );
};
