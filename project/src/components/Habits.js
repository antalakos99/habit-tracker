import React, { useState } from "react";
import { connect } from "react-redux";
import { addHabit } from "../redux";
import { List, ListItem, TextField, Button } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";
import { updateHabitsDataBase } from "../redux";
import { useDispatch } from "react-redux";

function Habits({ authorized, habits, addHabit, user }) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  // if (!authorized) {
  //   return <Redirect to="/"></Redirect>;
  // }
  const page = "Habits";
  const handleClick = () => {
    addHabit(name);
    dispatch(updateHabitsDataBase());
  };
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
        onClick={() => handleClick()}
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
