import "./App.css";
import Habits from "./components/Habits";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
import HabitTracker from "./components/HabitTracker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useGlobalState } from "./components/Login";

function App() {
  let authorized = useGlobalState("authorized");
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
            <Habits authorized={authorized} />
          </Route>
          <Route path="/userprofile">
            <UserProfile authorized={authorized} />
          </Route>
          <Route path="/habittracker">
            <HabitTracker authorized={authorized} />
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
