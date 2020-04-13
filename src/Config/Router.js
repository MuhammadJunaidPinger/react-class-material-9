import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from '../Components/Login'
import Home from '../Components/Home'
import AddEmployees from '../Components/AddEmployees'

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/addEmployees">
            <AddEmployees />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
