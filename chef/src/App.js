import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
