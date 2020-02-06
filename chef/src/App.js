import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router,
  Route,
  Link,
  Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path='/SignUp'>
            <SignUp/>
          </Route>
          <Route path='/HomePage' >   
            <HomePage/>
          </Route>
          <Route exact path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Router>    
  );
}

export default App;
