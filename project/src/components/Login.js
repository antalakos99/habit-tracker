import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { createGlobalState } from "react-hooks-global-state";
import { useDispatch } from "react-redux";
import { login } from "../redux";
import { Paper } from "@mui/material";
import { getAccounts, getNames } from "../redux";
import axios from "axios";

const { setGlobalState, useGlobalState } = createGlobalState({
  authorized: false,
});
function Login() {
  const [id, setId] = useState("");
  const [flag, setFlag] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let history = useHistory();
  const dispatch = useDispatch();
  const names = dispatch(getNames());
  const accounts = dispatch(getAccounts());
  const handleSubmit = () => {
    setFormErrors(validate(userName, password));
    setIsSubmit(true);
  };
  const validate = (userName, password) => {
    const errors = {};
    accounts.map((account) => {
      if (account.name === userName && account.password === password) {
        setFlag(true);
        setId(account.id);
      }
    });
    accounts.map((account) => {
      if (!flag && account.name !== userName) {
        errors.userName = "The given name doesn`t exist!";
      }
    });
    accounts.map((account) => {
      if (!flag && account.name === userName && account.password !== password) {
        errors.password = "Incorrect password!";
      }
    });
    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit && flag) {
      dispatch(login(id));
      history.push("/habittracker");
    }
  }, [formErrors]);
  return (
    <Paper elevation={2} className="wrapper">
      <div className="formBox">
        {!formErrors.userName ? (
          <TextField
            id="nameInput"
            label="Name"
            variant="filled"
            margin="normal"
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        ) : (
          <TextField
            error
            id="nameInput"
            label="Name"
            variant="filled"
            margin="normal"
            fullWidth
            value={userName}
            helperText={formErrors.userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        )}
        {!formErrors.password ? (
          <TextField
            id="passwordInput"
            label="Password"
            type="password"
            variant="filled"
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        ) : (
          <TextField
            error
            id="passwordInput"
            label="Password"
            type="password"
            variant="filled"
            margin="normal"
            fullWidth
            value={password}
            helperText={formErrors.password}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
        <Button variant="contained" size="large" onClick={() => handleSubmit()}>
          Login
        </Button>
        <Button
          className="right"
          variant="contained"
          size="large"
          onClick={() => {
            history.push("/register");
          }}
        >
          Sign up
        </Button>
      </div>
    </Paper>
  );
}

export default Login;
export { useGlobalState, setGlobalState };
