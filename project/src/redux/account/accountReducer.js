import { LOGIN } from "./accountTypes";
import { SET_ACCOUNT } from "./accountTypes";
import axios from "axios";

const initialState = {};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return {
        name: action.payload.name,
        password: action.payload.password,
      };
    case LOGIN:
      return {
        id: action.payload.id,
      };
    default:
      return state;
  }
};
