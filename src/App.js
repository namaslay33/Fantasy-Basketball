import React, { Component } from 'react';
// import {BrowserRouter} from 'react-router-dom';
import NavBar from './Components/NavBar';
import './App.css';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <NavBar />
        <Home />
        
        
      </div>
    );
  }
}

export default App;
