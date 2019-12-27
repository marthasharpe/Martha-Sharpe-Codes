import React from 'react';
import './App.css';
import Home from './../home/Home.js';
import About from './../about/About.js';
import Navigate from './../navbar/Navbar.js';
import Sort from './../sort/Sort.js';
import Featured from './../featured/Featured.js';

const App = () => {
  return (
    <div className="App">
      <Navigate />
      <Home />
      <About />
      <Featured />
      <Sort />
    </div>
  );
}

export default App;
