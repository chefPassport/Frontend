import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/Login'
import Profile from './components/Profile'
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact={true} path='/' component={Login}/>
        <Route exact={true} path='/profile' component={Profile}/>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
