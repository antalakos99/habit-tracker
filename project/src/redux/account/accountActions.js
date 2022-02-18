import axios from "axios";
import { SET_ACCOUNT } from "./accountTypes";
import { LOGIN } from "./accountTypes";

export const setAccount = (name, password) => {
  return {
    type: SET_ACCOUNT,
    payload: {
      name,
      password,
    },
  };
};

export const login = (id) => {
  return {
    type: LOGIN,
    payload: {
      id,
    },
  };
};

export const registration = () => (dispatch, getState) => {
  const id = Math.random().toString(16).slice(2);
  const name = getState().account.name;
  const password = getState().account.password;
  axios.post("http://localhost:3004/users", {
    id: id,
    name: name,
    password: password,
    user: {},
    habits: [],
  });
};
