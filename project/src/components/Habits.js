import React, { useState } from "react";
import { connect } from "react-redux";
import { addHabit } from "../redux";
import { List, ListItem, TextField, Button } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";

function Habits({ authorized, habits, addHabit, user }) {
  const [name, setName] = useState("");
  // if (!authorized) {
  //   return <Redirect to="/"></Redirect>;
  // }
  console.log(name);
  const page = "Habits";
  return (
    <div>
      <Header
        page={page}
        firstName={user.firstName}
        lastName={user.lastName}
        profilePicture={user.profilePicture}
      />
      <SideBar />
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
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHabit: (name) => dispatch(addHabit(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Habits);
