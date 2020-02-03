import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

//Component Imports
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
    <h1>test</h1>
      <Switch>
        <Route path='/register'component={SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
