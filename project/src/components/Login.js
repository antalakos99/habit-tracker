import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { createGlobalState } from "react-hooks-global-state";
import { useDispatch } from "react-redux";
import { login } from "../redux";
import axios from "axios";

const { setGlobalState, useGlobalState } = createGlobalState({
  authorized: false,
});
function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (name, password) => {
    axios.get("http://localhost:3004/users").then((res) => {
      res.data.map((account) => {
        if (name === account.name && password === account.password) {
          dispatch(login(account.id));
          history.push("/habittracker");
          setGlobalState("authorized", true);
        }
      });
    });
  };
  return (
    <form>
      <TextField
        id="name"
        label="Firstname"
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
      <Button
        variant="contained"
        size="normal"
        onClick={() => handleSubmit(name, password)}
      >
        Login
      </Button>
    </form>
  );
}

export default Login;
export { useGlobalState, setGlobalState };
