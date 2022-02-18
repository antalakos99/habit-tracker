import { ADD_HABIT } from "./habitTypes";
import { UPDATE_HABIT } from "./habitTypes";
import { SET_HABITS } from "./habitTypes";
import axios from "axios";

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

export const setHabits = (habits) => {
  return {
    type: SET_HABITS,
    payload: {
      habits,
    },
  };
};

export const updateHabitsDataBase = () => (dispatch, getState) => {
  const id = getState().account.id;
  const habits = getState().habits;
  axios
    .patch(`http://localhost:3004/users/${id}`, { habits: habits })
    .then((res) => {
      console.log(res.data);
    });
};
