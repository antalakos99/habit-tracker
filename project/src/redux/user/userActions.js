import {
  CREATE_USER,
  UPDATE_USER_FIRST_NAME,
  UPDATE_USER_LAST_NAME,
  UPDATE_USER_AGE,
  UPDATE_USER_PROFILE_PICTURE,
} from "./userTypes";

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
