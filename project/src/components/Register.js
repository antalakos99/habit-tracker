import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { createUser } from "../redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Register({ makeUser }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [ppic, setPpic] = useState("");
  let history = useHistory();
  const handleSubmit = () => {
    makeUser(fname, lname, password, age, ppic);
    history.push("/");
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
      <TextField
        id="age"
        label="Age"
        type="number"
        variant="filled"
        margin="normal"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <TextField
        id="ppic"
        label="Profile picture (paste the url)"
        variant="filled"
        margin="normal"
        value={ppic}
        onChange={(e) => setPpic(e.target.value)}
      />
      <Button variant="contained" size="normal" onClick={handleSubmit}>
        Register
      </Button>
      <Link to="/">Login</Link>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    fname: state.user.firstName,
    lname: state.user.lastName,
    age: state.user.age,
    proPic: state.user.profilePicture,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeUser: (firstName, lastName, password, age, profilePicture) =>
      dispatch(createUser(firstName, lastName, password, age, profilePicture)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
