import { Count } from "../count/count";
import { useForm } from "./use-form";
import styles from "./reviewForm.module.css";
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

  return (
    <form className={classNames(styles["form"])}>
      <h3 className={classNames(styles["title"])}>Оставить отзыв</h3>
      <div className={classNames(styles["block"])}>
        <label className={classNames(styles["label"])}>
          <span className={classNames(styles["name"])}>
            Name<span className={classNames(styles["star"])}>*</span>
          </span>
          <input
            type="text"
            value={name}
            onInput={(event) => setName(event.target.value)}
            className={classNames(styles["input"])}
            placeholder="Antony"
          />
        </label>
        <label className={classNames(styles["label"])}>
          <span className={classNames(styles["name"])}>
            Text<span className={classNames(styles["star"])}>*</span>
          </span>
          <input
            type="text"
            value={text}
            onInput={(event) => setText(event.target.value)}
            className={classNames(styles["input"])}
            placeholder="Review"
          />
        </label>
        <div className={classNames(styles["label"])}>
          <span className={classNames(styles["name"])}>
            Rating<span className={classNames(styles["star"])}>*</span>
          </span>
          <Count
            value={score}
            increaseValue={increaseValue}
            decreaseValue={decreaseValue}
          />
        </div>
        <button
          type="button"
          onClick={clearInputs}
          className={classNames(styles["clear"])}
        >
          clear
        </button>
      </div>
    </form>
  );
};
