import { useReducer } from "react";

const DEFAULT_FORM_VALUES = {
  text: "",
  rating: 0,
};

const SET_TEXT_ACTION = "SET_TEXT";
const CLEAR_INPUTS_ACTION = "CLEAR_INPUTS";
const INCREASE_RATING_ACTION = "INCREASE_RATING";
const DECREASE_RATING_ACTION = "DECREASE_RATING";
const SET_RATING_ACTION = "SET_RATING";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case CLEAR_INPUTS_ACTION:
      return { ...DEFAULT_FORM_VALUES };
    case INCREASE_RATING_ACTION:
      if (state.rating + 1 <= 5) {
        return { ...state, rating: state.rating + 1 };
      }
      return state;
    case DECREASE_RATING_ACTION:
      if (state.rating - 1 >= 0) {
        return { ...state, rating: state.rating - 1 };
      }
      return state;
    case SET_RATING_ACTION:
      return { ...state, rating: payload };
    default:
      return state;
  }
};

export const useForm = () => {
  const [formParams, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUES);

  const setText = (text) => {
    dispatch({ type: SET_TEXT_ACTION, payload: text });
  };
  const clearInputs = () => {
    dispatch({ type: CLEAR_INPUTS_ACTION });
  };
  const increaseValue = () => {
    dispatch({ type: INCREASE_RATING_ACTION });
  };
  const decreaseValue = () => {
    dispatch({ type: DECREASE_RATING_ACTION });
  };
  const setRating = (rating) => {
    dispatch({ type: SET_RATING_ACTION, payload: rating });
  };

  return {
    formParams,
    setText,
    clearInputs,
    increaseValue,
    decreaseValue,
    setRating,
  };
};
