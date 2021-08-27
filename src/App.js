import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddEmployee from "./components/addEmployee";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from './components/dashboard'
import UpdateEmployee from './components/updateEmployee'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/addEmployee" component={AddEmployee}/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path='/dashboard/updateEmployee/:empId' component={UpdateEmployee}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
