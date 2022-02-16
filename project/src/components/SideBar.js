import { List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

function SideBar() {
  const history = useHistory();
  const goToProfile = () => {
    history.push("/userprofile");
  };
  const goToHabits = () => {
    history.push("/habits");
  };
  const goToHabitTracker = () => {
    history.push("/habittracker");
  };
  return (
    <div className="sidebar">
      <List>
        <ListItemButton onClick={goToProfile}>
          <ListItemText
            primary="Your profile"
            secondary="Set your information here"
          ></ListItemText>
        </ListItemButton>
        <ListItemButton onClick={goToHabits}>
          <ListItemText
            primary="Your habits"
            secondary="Manage your habits here"
          ></ListItemText>
        </ListItemButton>
        <ListItemButton onClick={goToHabitTracker}>
          <ListItemText
            primary="Habit tracker"
            secondary="Manage your progress here"
          ></ListItemText>
        </ListItemButton>
      </List>
    </div>
  );
}

export default SideBar;
