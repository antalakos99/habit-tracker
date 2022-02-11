import "./App.css";
import Habits from "./components/Habits";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
import HabitTracker from "./components/HabitTracker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/habits">
            <Habits />
          </Route>
          <Route path="/userprofile">
            <UserProfile />
          </Route>
          <Route path="/habittracker">
            <HabitTracker />
          </Route>
          <Route path="*">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
