import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Login/>
        {/* <HomePage/> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
