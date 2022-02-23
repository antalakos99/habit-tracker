import { ADD_HABIT, UPDATE_HABIT, SET_HABITS } from "./habitTypes";

const initialState = [];

export const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      return [
        ...state,
        {
          name: action.payload.name,
          days: ["", "", "", "", "", "", ""],
          completed: 0,
        },
      ];
    case UPDATE_HABIT:
      const newstate = state.map((habit) => {
        if (habit.name === action.payload.name) {
          habit.days[action.payload.day] = action.payload.value;
          habit.completed = action.payload.completed;
          return habit;
        } else return habit;
      });
      return newstate;
    case SET_HABITS:
      return action.payload.habits;
    default:
      return state;
  }
};
