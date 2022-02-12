import { ADD_HABIT, UPDATE_HABIT } from "./habitTypes";

const initialState = [
  {
    name: "korcsoja",
    days: ["X", "X", "X", "", "", "", ""],
    completed: 3,
  },
  {
    name: "gaming",
    days: ["X", "", "X", "X", "", "", ""],
    completed: 3,
  },
  {
    name: "bape",
    days: ["X", "X", "", "", "", "", ""],
    completed: 0,
  },
];

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
    default:
      return state;
  }
};
