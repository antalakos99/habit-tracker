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
import { TextField, Button, Paper, Divider } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";
import { useDispatch } from "react-redux";
import { Box, width } from "@mui/system";

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
  return (
    <div>
      {!authorized[0] ? <Redirect to="/"></Redirect> : null}
      <Header
        page={page}
        firstName={firstName}
        lastName={lastName}
        profilePicture={profilePicture}
      ></Header>
      <SideBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "20rem",
          position: "absolute",
          left: "40%",
          top: "10rem",
        }}
      >
        <div>
          <TextField
            id="fname"
            label="Firstname"
            variant="filled"
            margin="normal"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <Button
            sx={{
              width: "fit-content",
              float: "right",
              height: "3rem",
              marginTop: "1.3rem",
            }}
            variant="contained"
            size="normal"
            onClick={() => {
              updateFirstName(fname);
              dispatch(updateUserDataBase());
            }}
          >
            Change
          </Button>
        </div>
        <Divider />
        <div>
          <TextField
            id="lname"
            label="Lastname"
            variant="filled"
            margin="normal"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <Button
            sx={{
              width: "fit-content",
              float: "right",
              height: "3rem",
              marginTop: "1.3rem",
            }}
            variant="contained"
            size="normal"
            onClick={() => {
              updateLastName(lname);
              dispatch(updateUserDataBase());
            }}
          >
            Change
          </Button>
        </div>
        <Divider />
        <div>
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
            sx={{
              width: "fit-content",
              float: "right",
              height: "3rem",
              marginTop: "1.3rem",
            }}
            variant="contained"
            size="normal"
            onClick={() => {
              updateAge(iage);
              dispatch(updateUserDataBase());
            }}
          >
            Change
          </Button>
        </div>
        <Divider />
        <div>
          <TextField
            id="ppic"
            label="Profile picture (paste the url)"
            variant="filled"
            margin="normal"
            value={ppic}
            onChange={(e) => setPpic(e.target.value)}
          />
          <Button
            sx={{
              width: "fit-content",
              float: "right",
              height: "3rem",
              marginTop: "1.3rem",
            }}
            variant="contained"
            size="normal"
            onClick={() => {
              updateProfilePicture(ppic);
              dispatch(updateUserDataBase());
            }}
          >
            Change
          </Button>
        </div>
      </Box>
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
