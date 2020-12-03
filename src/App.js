import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Registration from "./Component/Registration/Registration";
import { createContext, useState } from "react";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import UsersProject from "./Component/UsersProject/UsersProject";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/registration/:eventName">
            <Registration></Registration>
          </PrivateRoute>
          <Route path="/usersProject">
            <UsersProject></UsersProject>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
