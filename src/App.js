import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddEmployee from "./components/addEmployee";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/addEmployee" component={AddEmployee}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
