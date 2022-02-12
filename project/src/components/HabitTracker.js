import React from "react";
import { Redirect } from "react-router-dom";

function HabitTracker({ authorized }) {
  if (!authorized) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <div>
      <h2>HabitTracker</h2>
    </div>
  );
}

export default HabitTracker;
