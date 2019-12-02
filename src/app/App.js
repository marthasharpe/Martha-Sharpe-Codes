import React from 'react';
import './App.css';
import Home from './../home/Home.js';
import About from './../about/About.js';
import Navigate from './../navbar/Navbar.js';

const App = () => {
  return (
    <div className="App">
      <Home />
      <Navigate />
      <About />
    </div>
  );
}

export default App;
