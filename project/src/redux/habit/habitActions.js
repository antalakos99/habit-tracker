import { ADD_HABIT } from "./habitTypes";
import { UPDATE_HABIT } from "./habitTypes";

export const addHabit = (name) => {
  return {
    type: ADD_HABIT,
    payload: { name },
  };
};

export const updateHabit = (name, day, value, completed) => {
  return {
    type: UPDATE_HABIT,
    payload: {
      name,
      day,
      value,
      completed,
    },
  };
};
