import {
  CREATE_USER,
  UPDATE_USER_FIRST_NAME,
  UPDATE_USER_LAST_NAME,
  UPDATE_USER_AGE,
  UPDATE_USER_PROFILE_PICTURE,
} from "./userTypes";

const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        firstName: action.payload.fname,
        lastName: action.payload.lname,
        password: action.payload.password,
        age: action.payload.age,
        profilePicture: action.payload.proPic,
      };
    case UPDATE_USER_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload.fname,
      };
    case UPDATE_USER_LAST_NAME:
      return {
        ...state,
        lastName: action.payload.lname,
      };
    case UPDATE_USER_AGE:
      return {
        ...state,
        age: action.payload.age,
      };
    case UPDATE_USER_PROFILE_PICTURE:
      return {
        ...state,
        profilePicture: action.payload.proPic,
      };
    default:
      return state;
  }
};
