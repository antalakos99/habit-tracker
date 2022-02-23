import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addHabit } from "../redux";
import {
  List,
  ListItem,
  TextField,
  Button,
  ListItemText,
  Paper,
} from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";
import { updateHabitsDataBase } from "../redux";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";

function Habits({ habits, addHabit, user }) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const page = "Habits";
  const handleClick = () => {
    let flag = true;
    habits.map((habit) => {
      if (habit.name === name) {
        flag = false;
      }
    });
    if (flag) {
      addHabit(name);
      dispatch(updateHabitsDataBase());
      setName("");
    } else alert(`You are alredy tracking ${name}`);
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
            id="newHabit"
            label="New Habbit:"
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            sx={{
              width: "fit-content",
              float: "right",
              height: "3rem",
            }}
            variant="contained"
            size="large"
            margin="normal"
            onClick={() => handleClick()}
          >
            +
          </Button>
        </div>
        <List>
          {habits.map((habit) => {
            return (
              <ListItem>
                <ListItemText
                  key={habit.name}
                  primary={habit.name}
                  primaryTypographyProps={{ fontSize: "large" }}
                ></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>
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
