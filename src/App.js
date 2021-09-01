import React from "react";
import { Route, Switch } from "react-router-dom";
import AddEmployee from "./components/addEmployee";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from './components/dashboard'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/addEmployee" component={AddEmployee}/>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      </div>
  );
}

export default App;
