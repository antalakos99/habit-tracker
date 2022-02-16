import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateHabit } from "../redux";
import { Table, TableCell, TableRow, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function HabitTracker({ authorized, habits, updateHabit, user }) {
  // if (!authorized) {
  //   return <Redirect to="/"></Redirect>;
  // }
  const page = "Habit Tracker";
  return (
    <div>
      <Header
        page={page}
        firstName={user.firstName}
        lastName={user.lastName}
        profilePicture={user.profilePicture}
      ></Header>
      <SideBar />
      <Table>
        <thead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Monday</TableCell>
            <TableCell>Tuesday</TableCell>
            <TableCell>Wednsday</TableCell>
            <TableCell>Thursday</TableCell>
            <TableCell>Friday</TableCell>
            <TableCell>Saturday</TableCell>
            <TableCell>Sunday</TableCell>
          </TableRow>
        </thead>
        <tbody>
          {habits.map((habit) => {
            return (
              <TableRow
                key={habit.name}
                className={
                  habit.completed > 5
                    ? "green"
                    : habit.completed >= 2
                    ? "orange"
                    : "red"
                }
              >
                <TableCell>{habit.name}</TableCell>
                {habit.days.map((day, index) => {
                  return (
                    <TableCell
                      className="tc"
                      key={index}
                      onClick={() =>
                        updateHabit(
                          habit.name,
                          index,
                          day === "" ? "X" : "",
                          day === ""
                            ? (habit.completed += 1)
                            : (habit.completed -= 1)
                        )
                      }
                    >
                      {day}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </tbody>
      </Table>
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
    updateHabit: (name, day, value, completed) =>
      dispatch(updateHabit(name, day, value, completed)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitTracker);
