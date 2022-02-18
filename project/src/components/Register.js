import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { setAccount } from "../redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registration } from "../redux";

function Register({ setAccount }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();
  const handleSubmit = () => {
    setAccount(name, password);
    dispatch(registration());
    history.push("/");
  };
  return (
    <form>
      <TextField
        id="name"
        label="name"
        variant="filled"
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
      <Button variant="contained" size="normal" onClick={handleSubmit}>
        Register
      </Button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.account.name,
    password: state.account.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAccount: (name, password) => dispatch(setAccount(name, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
