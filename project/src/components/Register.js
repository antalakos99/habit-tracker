import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { setAccount } from "../redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registration } from "../redux";
import { Paper } from "@mui/material";
import { getNames } from "../redux";

function Register({ setAccount }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = () => {
    setFormErrors(validate(userName, password));
    setIsSubmit(true);
  };
  const names = dispatch(getNames());
  const validate = (name, password) => {
    const errors = {};
    names.map((dbname) => {
      if (dbname === name) {
        errors.username = "Username is taken";
      }
    });
    if (!name) {
      errors.username = "Username is required";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 5) {
      errors.password = "Your password must be longer than 5 characters";
    }
    return errors;
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setAccount(userName, password);
      dispatch(registration());
      history.push("/");
    }
  }, [formErrors]);
  return (
    <Paper elevation={2} className="wrapper">
      <div className="formBox">
        {!formErrors.username ? (
          <TextField
            id="nameInput"
            label="Name"
            variant="filled"
            margin="normal"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            fullWidth
          />
        ) : (
          <TextField
            error
            id="nameInput"
            label="Name"
            variant="filled"
            margin="normal"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            helperText={formErrors.username}
            fullWidth
          />
        )}
        {!formErrors.password ? (
          <TextField
            id="passwordInput"
            label="Password"
            type="password"
            variant="filled"
            margin="normal"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth
          />
        ) : (
          <TextField
            error
            id="passwordInput"
            label="Password"
            type="password"
            variant="filled"
            margin="normal"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            helperText={formErrors.password}
            fullWidth
          />
        )}
        <Button
          className="center"
          variant="contained"
          size="Large"
          onClick={() => handleSubmit()}
        >
          Register
        </Button>
      </div>
    </Paper>
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
