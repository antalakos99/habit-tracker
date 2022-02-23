import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getHabits,
  getUser,
  setHabits,
  setUser,
  updateHabit,
  updateHabitsDataBase,
} from "../redux";
import { Table, TableCell, TableRow, Box } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";
import { useDispatch } from "react-redux";

function HabitTracker({
  authorized,
  habits,
  updateHabit,
  user,
  id,
  setHabits,
  setUser,
}) {
  const dispatch = useDispatch();
  const page = "Habit Tracker";
  useEffect(() => {
    dispatch(getUser());
    dispatch(getHabits());
  }, [id]);
  return (
    <div>
      <Header
        page={page}
        firstName={user.firstName}
        lastName={user.lastName}
        profilePicture={user.profilePicture}
      ></Header>
      <SideBar />
      <Box
        className="trackerTable"
        sx={{
          position: "absolute",
          left: "22rem",
          right: "2rem",
          top: "10rem",
          backgroundColor: "#1976d2",
          borderRadius: "10px",
        }}
      >
        <Table>
          <thead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell
                sx={{ textAlign: "center", color: "white", fontSize: "large" }}
              >
                Monday
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", color: "white", fontSize: "large" }}
              >
                Tuesday
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", color: "white", fontSize: "large" }}
              >
                Wednsday
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", color: "white", fontSize: "large" }}
              >
                Thursday
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", color: "white", fontSize: "large" }}
              >
                Friday
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", color: "white", fontSize: "large" }}
              >
                Saturday
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", color: "white", fontSize: "large" }}
              >
                Sunday
              </TableCell>
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
                  <TableCell
                    sx={{
                      textAlign: "center",
                      fontSize: "large",
                    }}
                  >
                    {habit.name}
                  </TableCell>
                  {habit.days.map((day, index) => {
                    return (
                      <TableCell
                        sx={{
                          textAlign: "center",
                          fontSize: "large",
                        }}
                        className="tc"
                        key={index}
                        onClick={() => {
                          updateHabit(
                            habit.name,
                            index,
                            day === "" ? "X" : "",
                            day === ""
                              ? (habit.completed += 1)
                              : (habit.completed -= 1)
                          );
                          dispatch(updateHabitsDataBase());
                        }}
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
      </Box>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    habits: state.habits,
    user: state.user,
    id: state.account.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateHabit: (name, day, value, completed) =>
      dispatch(updateHabit(name, day, value, completed)),
    setHabits: (habits) => dispatch(setHabits(habits)),
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitTracker);
