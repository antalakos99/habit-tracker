import {
  CREATE_USER,
  UPDATE_USER_FIRST_NAME,
  UPDATE_USER_LAST_NAME,
  UPDATE_USER_AGE,
  UPDATE_USER_PROFILE_PICTURE,
  SET_USER,
} from "./userTypes";
import axios from "axios";

export const createUser = (fname, lname, password, age, proPic) => {
  return {
    type: CREATE_USER,
    payload: {
      fname,
      lname,
      password,
      age,
      proPic,
    },
  };
};

export const updateFirstName = (fname) => {
  return {
    type: UPDATE_USER_FIRST_NAME,
    payload: {
      fname,
    },
  };
};

export const updateLastName = (lname) => {
  return {
    type: UPDATE_USER_LAST_NAME,
    payload: {
      lname,
    },
  };
};

export const updateAge = (age) => {
  return {
    type: UPDATE_USER_AGE,
    payload: {
      age,
    },
  };
};

export const updateProfilePicture = (proPic) => {
  return {
    type: UPDATE_USER_PROFILE_PICTURE,
    payload: {
      proPic,
    },
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: { user },
  };
};

export const updateUserDataBase = () => (dispatch, getState) => {
  const id = getState().account.id;
  const user = getState().user;
  axios
    .patch(`http://localhost:3004/users/${id}`, { user: user })
    .then((res) => {
      console.log(res.data);
    });
};
