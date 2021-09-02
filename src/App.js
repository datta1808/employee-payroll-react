import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Dashboard from './pages/dashboard/dashboard'
import ErrorPage from "./components/errorPage/ErrorPage";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route component={ErrorPage} />
      </Switch>
      </div>
  );
}

export default App;
