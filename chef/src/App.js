import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';

//Component Imports
import SignUp from './components/SignUp';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import HomePage from './components/HomePage';


function App() {
  return (
    <div>
      <NavLink to='/register'> Register </NavLink>
      <NavLink to='/login'> Log In </NavLink>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/register' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/home' component={HomePage} />
        <PrivateRoute path='/profile' componenet={Profile} />
      </Switch>
    </div>
  );
}

export default App;
