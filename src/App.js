import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
