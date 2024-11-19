import { useReducer } from "react";

const DEFAULT_FORM_VALUES = {
  name: "",
  text: "",
  score: 0,
};

const SET_NAME_ACTION = "SET_NAME";
const SET_TEXT_ACTION = "SET_TEXT";
const CLEAR_INPUTS_ACTION = "CLEAR_INPUTS";
const INCREASE_SCORE_ACTION = "INCREASE_SCORE";
const DECREASE_SCORE_ACTION = "DECREASE_SCORE";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case CLEAR_INPUTS_ACTION:
      return { ...DEFAULT_FORM_VALUES };
    case INCREASE_SCORE_ACTION:
      if (state.score + 1 <= 5) {
        return { ...state, score: state.score + 1 };
      }
      return state;
    case DECREASE_SCORE_ACTION:
      if (state.score - 1 >= 0) {
        return { ...state, score: state.score - 1 };
      }
      return state;
    default:
      return state;
  }
};

export const useForm = () => {
  const [formParams, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUES);

  const setName = (name) => {
    dispatch({ type: "SET_NAME", payload: name });
  };
  const setText = (text) => {
    dispatch({ type: "SET_TEXT", payload: text });
  };
  const setScore = (score) => {
    dispatch({ type: "SET_SCORE", payload: score });
  };
  const clearInputs = () => {
    dispatch({ type: "CLEAR_INPUTS" });
  };
  const increaseValue = () => {
    dispatch({ type: "INCREASE_SCORE" });
  };
  const decreaseValue = () => {
    dispatch({ type: "DECREASE_SCORE" });
  };

  return {
    formParams,
    setName,
    setText,
    setScore,
    clearInputs,
    increaseValue,
    decreaseValue,
  };
};
