import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowDimensions from "../getWindowDimensions";

function SideBar() {
  const history = useHistory();
  const { width, height } = useWindowDimensions();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const goToProfile = () => {
    history.push("/userprofile");
  };
  const goToHabits = () => {
    history.push("/habits");
  };
  const goToHabitTracker = () => {
    history.push("/habittracker");
  };
  useEffect(() => {
    if (width < 1200 && sidebar === false) {
      setSidebar(true);
    }
  }, [width]);

  return (
    <div className={sidebar ? "side-bar" : "side-bar active"}>
      <MenuIcon
        fontSize="large"
        onClick={() => showSidebar()}
        sx={{
          float: "right",
          marginTop: "1rem",
          marginRight: "1.5rem",
          ":hover": { cursor: "pointer", color: "white" },
        }}
      />
      <Box sx={{ position: "relative", top: "10rem" }}>
        <List>
          <ListItemButton onClick={goToProfile}>
            <ListItemText
              className="sideItem"
              primary="Your profile"
              secondary="Set your information here"
              primaryTypographyProps={{
                fontSize: "larger",
              }}
            ></ListItemText>
          </ListItemButton>
          <ListItemButton onClick={goToHabits}>
            <ListItemText
              className="sideItem"
              primary="Your habits"
              secondary="Manage your habits here"
              primaryTypographyProps={{
                fontSize: "larger",
              }}
            ></ListItemText>
          </ListItemButton>
          <ListItemButton onClick={goToHabitTracker}>
            <ListItemText
              className="sideItem"
              primary="Habit tracker"
              secondary="Manage your progress here"
              primaryTypographyProps={{
                fontSize: "larger",
              }}
            ></ListItemText>
          </ListItemButton>
        </List>
      </Box>
    </div>
  );
}

export default SideBar;
