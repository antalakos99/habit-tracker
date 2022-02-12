import React from "react";
import { Redirect } from "react-router-dom";

function UserProfile({ authorized }) {
  if (!authorized) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <div>
      <h2>UserProfile</h2>
    </div>
  );
}

export default UserProfile;
