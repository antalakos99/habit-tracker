import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { createUser } from "../redux";
import { useHistory } from "react-router-dom";
import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  authorized: false,
});

function Login({ user }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  useEffect(() => {
    console.log();
  }, []);
  const handleSubmit = (fname, lname, password) => {
    if (
      fname === user.firstName &&
      lname === user.lastName &&
      password === user.password
    ) {
      history.push("/habittracker");
      setGlobalState("authorized", true);
    } else {
      alert("not Aight");
      console.log(fname, lname, password);
      console.log(user.firstName, user.lastName, user.password);
    }
  };
  return (
    <form>
      <TextField
        id="fname"
        label="Firstname"
        variant="filled"
        margin="normal"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <TextField
        id="lname"
        label="Lastname"
        variant="filled"
        margin="normal"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        size="normal"
        onClick={() => handleSubmit(fname, lname, password)}
      >
        Login
      </Button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeUser: (firstName, lastName, password, age, profilePicture) =>
      dispatch(createUser(firstName, lastName, password, age, profilePicture)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
export { useGlobalState, setGlobalState };
