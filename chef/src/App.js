import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';

//Component Imports
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    <div>
      <NavLink to='/register'> Register </NavLink>
      <NavLink to='/login'> Log In </NavLink>
      <Switch>
        <Route path='/register' component={SignUp} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
