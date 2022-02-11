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
        firstName: action.payload.fname,
        lastName: state.lname,
        age: state.age,
        profilePicture: state.proPic,
      };
    case UPDATE_USER_LAST_NAME:
      return {
        firstName: state.fname,
        lastName: action.payload.lname,
        age: state.age,
        profilePicture: state.proPic,
      };
    case UPDATE_USER_AGE:
      return {
        firstName: state.fname,
        lastName: state.lname,
        age: action.payload.age,
        profilePicture: state.proPic,
      };
    case UPDATE_USER_PROFILE_PICTURE:
      return {
        firstName: state.fname,
        lastName: state.lname,
        age: state.age,
        profilePicture: action.payload.proPic,
      };
    default:
      return state;
  }
};
