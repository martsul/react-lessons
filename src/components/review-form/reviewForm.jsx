import { Count } from "../count/count";
import { useForm } from "./use-form";

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
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "15px",
      }}
    >
      <label>
        <span>Имя</span>
        <input
          type="text"
          value={name}
          onInput={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        <span>Текст</span>
        <input
          type="text"
          value={text}
          onInput={(event) => setText(event.target.value)}
        />
      </label>
      <div>
        <span>Рейтинг</span>
        <Count
          value={score}
          increaseValue={increaseValue}
          decreaseValue={decreaseValue}
        />
      </div>
      <button type="button" onClick={clearInputs}>
        clear
      </button>
    </form>
  );
};
