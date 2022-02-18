import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateAge,
  updateFirstName,
  updateLastName,
  updateProfilePicture,
  updateUserDataBase,
} from "../redux";
import { useState } from "react";
import { TextField, Button, Avatar } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";
import { useDispatch } from "react-redux";

function UserProfile({
  authorized,
  firstName,
  lastName,
  age,
  profilePicture,
  updateFirstName,
  updateLastName,
  updateAge,
  updateProfilePicture,
}) {
  const page = "Your Profile";
  const [fname, setFname] = useState(firstName);
  const [lname, setLname] = useState(lastName);
  const [iage, setAge] = useState(age);
  const [ppic, setPpic] = useState(profilePicture);
  const dispatch = useDispatch();
  // if (!authorized) {
  //   return <Redirect to="/"></Redirect>;
  // }
  return (
    <div>
      <Header
        page={page}
        firstName={firstName}
        lastName={lastName}
        profilePicture={profilePicture}
      ></Header>
      <SideBar />
      <form>
        <TextField
          id="fname"
          label="Firstname"
          variant="filled"
          margin="normal"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <Button
          variant="contained"
          size="normal"
          onClick={() => {
            updateFirstName(fname);
            dispatch(updateUserDataBase());
          }}
        >
          Change
        </Button>
        <TextField
          id="lname"
          label="Lastname"
          variant="filled"
          margin="normal"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <Button
          variant="contained"
          size="normal"
          onClick={() => {
            updateLastName(lname);
            dispatch(updateUserDataBase());
          }}
        >
          Change
        </Button>
        <TextField
          id="age"
          label="Age"
          type="number"
          variant="filled"
          margin="normal"
          value={iage}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button
          variant="contained"
          size="normal"
          onClick={() => {
            updateAge(iage);
            dispatch(updateUserDataBase());
          }}
        >
          Change
        </Button>
        <TextField
          id="ppic"
          label="Profile picture (paste the url)"
          variant="filled"
          margin="normal"
          value={ppic}
          onChange={(e) => setPpic(e.target.value)}
        />
        <Button
          variant="contained"
          size="normal"
          onClick={() => {
            updateProfilePicture(ppic);
            dispatch(updateUserDataBase());
          }}
        >
          Change
        </Button>
        <Avatar
          alt={lname}
          variant="square"
          src={ppic}
          sx={{ width: 56, height: 56 }}
        />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    age: state.user.age,
    profilePicture: state.user.profilePicture,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFirstName: (firstName) => dispatch(updateFirstName(firstName)),
    updateLastName: (lastName) => dispatch(updateLastName(lastName)),
    updateAge: (age) => dispatch(updateAge(age)),
    updateProfilePicture: (profilePicture) =>
      dispatch(updateProfilePicture(profilePicture)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
