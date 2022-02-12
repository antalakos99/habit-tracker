import { userReducer } from "./user/userReducer";
import { combineReducers } from "redux";
import { habitReducer } from "./habit/habitReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  habits: habitReducer,
});
