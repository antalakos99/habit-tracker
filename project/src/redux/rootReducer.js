import { userReducer } from "./user/userReducer";
import { combineReducers } from "redux";
import { habitReducer } from "./habit/habitReducer";
import { accountReducer } from "./account/accountReducer";

export const rootReducer = combineReducers({
  account: accountReducer,
  user: userReducer,
  habits: habitReducer,
});
