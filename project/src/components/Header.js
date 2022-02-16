import React from "react";
import { Typography, Avatar } from "@mui/material";

function Header({ page, firstName, lastName, profilePicture }) {
  return (
    <div className="header">
      <div className="profile">
        <Typography id="name">
          {firstName} {lastName}
        </Typography>
        <Avatar
          id="profilePicture"
          alt={lastName}
          variant="square"
          src={profilePicture}
          sx={{ width: 56, height: 56 }}
        />
      </div>
      <div className="pageTitleContainer">
        <Typography variant="h3" className="pageTitle">
          {page}
        </Typography>
      </div>
    </div>
  );
}

export default Header;
