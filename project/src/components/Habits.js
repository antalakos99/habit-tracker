import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addHabit } from "../redux";
import { updateHabit } from "../redux";
import { List, ListItem, TextField, Button } from "@mui/material";

function Habits({ authorized, habits, addHabit }) {
  const [name, setName] = useState("");
  // if (!authorized) {
  //   return <Redirect to="/"></Redirect>;
  // }
  console.log(name);
  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit("name");
  };
  return (
    <div>
      <TextField
        id="newHabit"
        label="New Habbit:"
        variant="filled"
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        variant="contained"
        size="large"
        margin="normal"
        onClick={() => {
          addHabit(name);
        }}
      >
        +
      </Button>
      <List>
        {habits.map((habit) => {
          return <ListItem key={habit.name}>{habit.name}</ListItem>;
        })}
      </List>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    habits: state.habits,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHabit: (name) => dispatch(addHabit(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Habits);
