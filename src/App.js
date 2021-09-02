import React from "react";
import { Route, Switch } from "react-router-dom";
import AddEmployee from "./components/addEmployee/addEmployee";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Dashboard from './pages/dashboard/dashboard'
import ErrorPage from "./components/errorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/dashboard" component={Dashboard} />
        <Route component={ErrorPage} />
      </Switch>
      </div>
  );
}

export default App;
